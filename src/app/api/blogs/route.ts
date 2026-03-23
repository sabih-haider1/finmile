/**
 * Blogs API Routes
 * 
 * Security features:
 * - Authentication required for write operations
 * - Input validation with Zod schemas
 * - Rate limiting
 * - Sanitized error responses
 * - SQL injection prevention via Supabase client
 */

import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { blogSchema, validateInput } from '@/lib/validation';
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
import { createClient } from '@supabase/supabase-js';

// Use anon key for public reads
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/blogs - List all blogs with optional filters
// Public endpoint - no authentication required
export async function GET(request: NextRequest) {
  try {
    // Rate limiting for public endpoint
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`blogs-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const published = searchParams.get('published');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');

    let query = supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    // Apply filters
    if (search) {
      // Use parameterized query to prevent SQL injection
      query = query.ilike('title', `%${search}%`);
    }
    if (featured === 'true') {
      query = query.eq('is_featured', true);
    }
    if (published === 'true') {
      query = query.eq('is_published', true);
    }
    if (published === 'false') {
      query = query.eq('is_published', false);
    }
    if (limit) {
      const limitNum = parseInt(limit);
      if (limitNum > 0 && limitNum <= 100) {
        query = query.limit(limitNum);
      }
    }
    if (offset) {
      const offsetNum = parseInt(offset);
      const limitNum = parseInt(limit || '10');
      if (offsetNum >= 0) {
        query = query.range(offsetNum, offsetNum + limitNum - 1);
      }
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return successResponse({ items: data, count: data?.length || 0 });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch blogs');
  }
}

// POST /api/blogs - Create a new blog
// Protected endpoint - requires admin authentication
export async function POST(request: NextRequest) {
  try {
    // Rate limiting for write operations
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`blogs-post-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    // Verify admin authentication
    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = validateInput(blogSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    // Check slug uniqueness
    const slugIsUnique = await isSlugUnique('blogs', validatedData.slug);
    if (!slugIsUnique) {
      return errorResponse('A blog with this slug already exists', 409, 'DUPLICATE_SLUG');
    }

    // Sanitize HTML content to prevent XSS
    const sanitizedBody = sanitizeHtml(validatedData.body);

    const now = new Date().toISOString();
    const blogData = {
      title: validatedData.title,
      slug: validatedData.slug,
      summary: validatedData.summary || '',
      body: sanitizedBody,
      cover_image_url: validatedData.cover_image_url || null,
      author_name: validatedData.author_name || null,
      category: validatedData.category || null,
      tags: validatedData.tags || null,
      is_featured: validatedData.is_featured || false,
      is_published: validatedData.is_published ?? true,
      published_at: validatedData.is_published ? now : null,
      created_at: now,
      updated_at: now,
    };

    // Use admin client for write operations
    const { data, error } = await supabaseAdmin
      .from('blogs')
      .insert([blogData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data, 201);
  } catch (error) {
    return handleApiError(error, 'Failed to create blog');
  }
}
