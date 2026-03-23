/**
 * Guide by ID API Routes - SECURED
 */

import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { guideUpdateSchema, validateInput } from '@/lib/validation';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import {
  handleApiError,
  successResponse,
  authErrorResponse,
  rateLimitResponse,
  errorResponse,
} from '@/lib/errors';
import { isSlugUnique } from '@/lib/upload';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`guides-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid guide ID format', 400, 'INVALID_ID');
    }

    const { data, error } = await supabase
      .from('guides')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Guide not found', 404, 'NOT_FOUND');
      }
      throw error;
    }

    if (!data) {
      return errorResponse('Guide not found', 404, 'NOT_FOUND');
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch guide');
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`guides-put-${ip}`, { maxRequests: 20, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid guide ID format', 400, 'INVALID_ID');
    }

    const body = await request.json();
    const validation = validateInput(guideUpdateSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    const { data: existingGuide, error: fetchError } = await supabaseAdmin
      .from('guides')
      .select('id, slug')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingGuide) {
      return errorResponse('Guide not found', 404, 'NOT_FOUND');
    }

    if (validatedData.slug && validatedData.slug !== existingGuide.slug) {
      const slugIsUnique = await isSlugUnique('guides', validatedData.slug, params.id);
      if (!slugIsUnique) {
        return errorResponse('A guide with this slug already exists', 409, 'DUPLICATE_SLUG');
      }
    }

    const updateData: Record<string, unknown> = {
      ...validatedData,
      updated_at: new Date().toISOString(),
    };

    delete updateData.id;
    delete updateData.created_at;

    const { data, error } = await supabaseAdmin
      .from('guides')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to update guide');
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`guides-delete-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid guide ID format', 400, 'INVALID_ID');
    }

    const { data: existingGuide, error: fetchError } = await supabaseAdmin
      .from('guides')
      .select('id')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingGuide) {
      return errorResponse('Guide not found', 404, 'NOT_FOUND');
    }

    const { error } = await supabaseAdmin
      .from('guides')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return successResponse({ message: 'Guide deleted successfully' });
  } catch (error) {
    return handleApiError(error, 'Failed to delete guide');
  }
}
