/**
 * Resource by ID API Routes - SECURED
 */

import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { resourceUpdateSchema, validateInput } from '@/lib/validation';
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
    const rateLimit = checkRateLimit(`resources-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid resource ID format', 400, 'INVALID_ID');
    }

    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Resource not found', 404, 'NOT_FOUND');
      }
      throw error;
    }

    if (!data) {
      return errorResponse('Resource not found', 404, 'NOT_FOUND');
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch resource');
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`resources-put-${ip}`, { maxRequests: 20, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid resource ID format', 400, 'INVALID_ID');
    }

    const body = await request.json();
    const validation = validateInput(resourceUpdateSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    const { data: existingResource, error: fetchError } = await supabaseAdmin
      .from('resources')
      .select('id, slug')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingResource) {
      return errorResponse('Resource not found', 404, 'NOT_FOUND');
    }

    if (validatedData.slug && validatedData.slug !== existingResource.slug) {
      const slugIsUnique = await isSlugUnique('resources', validatedData.slug, params.id);
      if (!slugIsUnique) {
        return errorResponse('A resource with this slug already exists', 409, 'DUPLICATE_SLUG');
      }
    }

    const updateData: any = {
      ...validatedData,
      updated_at: new Date().toISOString(),
    };

    delete updateData.id;
    delete updateData.created_at;

    const { data, error } = await supabaseAdmin
      .from('resources')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to update resource');
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`resources-delete-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid resource ID format', 400, 'INVALID_ID');
    }

    const { data: existingResource, error: fetchError } = await supabaseAdmin
      .from('resources')
      .select('id')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingResource) {
      return errorResponse('Resource not found', 404, 'NOT_FOUND');
    }

    const { error } = await supabaseAdmin
      .from('resources')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return successResponse({ message: 'Resource deleted successfully' });
  } catch (error) {
    return handleApiError(error, 'Failed to delete resource');
  }
}
