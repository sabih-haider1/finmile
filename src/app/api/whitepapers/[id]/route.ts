/**
 * Whitepaper by ID API Routes - SECURED
 * 
 * Security: Authentication required for write operations
 */

import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { whitepaperUpdateSchema, validateInput } from '@/lib/validation';
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

// GET /api/whitepapers/[id] - Get a single whitepaper by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`whitepapers-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid whitepaper ID format', 400, 'INVALID_ID');
    }

    const { data, error } = await supabase
      .from('whitepapers')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Whitepaper not found', 404, 'NOT_FOUND');
      }
      throw error;
    }

    if (!data) {
      return errorResponse('Whitepaper not found', 404, 'NOT_FOUND');
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch whitepaper');
  }
}

// PUT /api/whitepapers/[id] - Update a whitepaper
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`whitepapers-put-${ip}`, { maxRequests: 20, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid whitepaper ID format', 400, 'INVALID_ID');
    }

    const body = await request.json();
    const validation = validateInput(whitepaperUpdateSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    const { data: existingWhitepaper, error: fetchError } = await supabaseAdmin
      .from('whitepapers')
      .select('id, slug')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingWhitepaper) {
      return errorResponse('Whitepaper not found', 404, 'NOT_FOUND');
    }

    if (validatedData.slug && validatedData.slug !== existingWhitepaper.slug) {
      const slugIsUnique = await isSlugUnique('whitepapers', validatedData.slug, params.id);
      if (!slugIsUnique) {
        return errorResponse('A whitepaper with this slug already exists', 409, 'DUPLICATE_SLUG');
      }
    }

    const updateData: any = {
      ...validatedData,
      updated_at: new Date().toISOString(),
    };

    if (validatedData.author !== undefined || validatedData.author_name !== undefined) {
      const author = validatedData.author || validatedData.author_name || null;
      updateData.author = author;
      updateData.author_name = author;
    }

    if (validatedData.published_date === null) {
      updateData.published_date = new Date().toISOString();
    }

    delete updateData.id;
    delete updateData.created_at;

    const { data, error } = await supabaseAdmin
      .from('whitepapers')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to update whitepaper');
  }
}

// DELETE /api/whitepapers/[id] - Delete a whitepaper
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`whitepapers-delete-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid whitepaper ID format', 400, 'INVALID_ID');
    }

    const { data: existingWhitepaper, error: fetchError } = await supabaseAdmin
      .from('whitepapers')
      .select('id')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingWhitepaper) {
      return errorResponse('Whitepaper not found', 404, 'NOT_FOUND');
    }

    const { error } = await supabaseAdmin
      .from('whitepapers')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return successResponse({ message: 'Whitepaper deleted successfully' });
  } catch (error) {
    return handleApiError(error, 'Failed to delete whitepaper');
  }
}
