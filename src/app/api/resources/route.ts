/**
 * Resources API Routes
 * 
 * Security: Authentication required for write operations
 */

import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { resourceSchema, validateInput } from '@/lib/validation';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import {
  handleApiError,
  successResponse,
  authErrorResponse,
  rateLimitResponse,
  errorResponse,
} from '@/lib/errors';
import { isSlugUnique } from '@/lib/upload';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/resources - List all resources with optional filters
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`resources-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const published = searchParams.get('published');
    const fileType = searchParams.get('file_type');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');

    let query = supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (search) {
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
    if (fileType) {
      query = query.eq('file_type', fileType);
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
    return handleApiError(error, 'Failed to fetch resources');
  }
}

// POST /api/resources - Create a new resource
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`resources-post-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const body = await request.json();
    const validation = validateInput(resourceSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    const slugIsUnique = await isSlugUnique('resources', validatedData.slug);
    if (!slugIsUnique) {
      return errorResponse('A resource with this slug already exists', 409, 'DUPLICATE_SLUG');
    }

    const now = new Date().toISOString();
    const createdAt = validatedData.created_at || now;
    const resourceData = {
      title: validatedData.title,
      slug: validatedData.slug,
      description: validatedData.description || '',
      file_url: validatedData.file_url || '',
      file_type: validatedData.file_type,
      thumbnail_url: validatedData.thumbnail_url || null,
      author_name: validatedData.author_name || null,
      tags: validatedData.tags || null,
      is_featured: validatedData.is_featured || false,
      is_published: validatedData.is_published ?? true,
      sections: validatedData.sections || null,
      created_at: createdAt,
      updated_at: now,
    };

    const { data, error } = await supabaseAdmin
      .from('resources')
      .insert([resourceData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data, 201);
  } catch (error) {
    return handleApiError(error, 'Failed to create resource');
  }
}
