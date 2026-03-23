/**
 * Case Study by ID API Routes
 * 
 * Security: Authentication required for write operations
 */

import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { caseStudyUpdateSchema, validateInput } from '@/lib/validation';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import {
  handleApiError,
  successResponse,
  authErrorResponse,
  rateLimitResponse,
  errorResponse,
} from '@/lib/errors';
import { sanitizeHtml } from '@/lib/security';
import { isSlugUnique } from '@/lib/upload';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/case-studies/[id] - Get a single case study by ID
export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`case-studies-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid case study ID format', 400, 'INVALID_ID');
    }

    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Case study not found', 404, 'NOT_FOUND');
      }
      throw error;
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch case study');
  }
}

// PUT /api/case-studies/[id] - Update a case study
export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`case-studies-put-${ip}`, { maxRequests: 20, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid case study ID format', 400, 'INVALID_ID');
    }

    const body = await request.json();
    const validation = validateInput(caseStudyUpdateSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    const { data: existingCaseStudy, error: fetchError } = await supabaseAdmin
      .from('case_studies')
      .select('id, slug')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingCaseStudy) {
      return errorResponse('Case study not found', 404, 'NOT_FOUND');
    }

    if (validatedData.slug && validatedData.slug !== existingCaseStudy.slug) {
      const slugIsUnique = await isSlugUnique('case_studies', validatedData.slug, params.id);
      if (!slugIsUnique) {
        return errorResponse('A case study with this slug already exists', 409, 'DUPLICATE_SLUG');
      }
    }

    const updateData: Record<string, unknown> = {
      ...validatedData,
      updated_at: new Date().toISOString(),
    };

    if (updateData.content) {
      updateData.content = sanitizeHtml(updateData.content as string);
    }

    delete updateData.id;
    delete updateData.created_at;

    const { data, error } = await supabaseAdmin
      .from('case_studies')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to update case study');
  }
}

// DELETE /api/case-studies/[id] - Delete a case study
export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`case-studies-delete-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid case study ID format', 400, 'INVALID_ID');
    }

    const { data: existingCaseStudy, error: fetchError } = await supabaseAdmin
      .from('case_studies')
      .select('id')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingCaseStudy) {
      return errorResponse('Case study not found', 404, 'NOT_FOUND');
    }

    const { error } = await supabaseAdmin
      .from('case_studies')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return successResponse({ message: 'Case study deleted successfully' });
  } catch (error) {
    return handleApiError(error, 'Failed to delete case study');
  }
}
