/**
 * Blog by ID API Routes
 * 
 * Security features:
 * - Authentication required for write operations
 * - Input validation
 * - Proper authorization checks
 * - Sanitized error responses
 */

import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { blogUpdateSchema, validateInput } from '@/lib/validation';
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

// Use anon key for public reads
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/blogs/[id] - Get a single blog by ID
// Public endpoint
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    // Rate limiting
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`blogs-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid blog ID format', 400, 'INVALID_ID');
    }

    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Blog not found', 404, 'NOT_FOUND');
      }
      throw error;
    }

    if (!data) {
      return errorResponse('Blog not found', 404, 'NOT_FOUND');
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch blog');
  }
}

// PUT /api/blogs/[id] - Update a blog
// Protected endpoint - requires admin authentication
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    // Rate limiting
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`blogs-put-${ip}`, { maxRequests: 20, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    // Verify admin authentication
    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid blog ID format', 400, 'INVALID_ID');
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = validateInput(blogUpdateSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    // Check if blog exists
    const { data: existingBlog, error: fetchError } = await supabaseAdmin
      .from('blogs')
      .select('id, slug')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingBlog) {
      return errorResponse('Blog not found', 404, 'NOT_FOUND');
    }

    // If slug is being updated, check uniqueness
    if (validatedData.slug && validatedData.slug !== existingBlog.slug) {
      const slugIsUnique = await isSlugUnique('blogs', validatedData.slug, params.id);
      if (!slugIsUnique) {
        return errorResponse('A blog with this slug already exists', 409, 'DUPLICATE_SLUG');
      }
    }

    // Prepare update data
    const updateData: Record<string, unknown> = {
      ...validatedData,
      updated_at: new Date().toISOString(),
    };

    // Sanitize HTML content if body is being updated
    if (updateData.body) {
      updateData.body = sanitizeHtml(updateData.body as string);
    }

    // Remove fields that shouldn't be updated
    delete updateData.id;
    delete updateData.created_at;

    // Use admin client for write operations
    const { data, error } = await supabaseAdmin
      .from('blogs')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data);
  } catch (error) {
    return handleApiError(error, 'Failed to update blog');
  }
}

// DELETE /api/blogs/[id] - Delete a blog
// Protected endpoint - requires admin authentication
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    // Rate limiting
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`blogs-delete-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    // Verify admin authentication
    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
      return errorResponse('Invalid blog ID format', 400, 'INVALID_ID');
    }

    // Check if blog exists before deleting
    const { data: existingBlog, error: fetchError } = await supabaseAdmin
      .from('blogs')
      .select('id')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingBlog) {
      return errorResponse('Blog not found', 404, 'NOT_FOUND');
    }

    // Use admin client for write operations
    const { error } = await supabaseAdmin
      .from('blogs')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return successResponse({ message: 'Blog deleted successfully' });
  } catch (error) {
    return handleApiError(error, 'Failed to delete blog');
  }
}
