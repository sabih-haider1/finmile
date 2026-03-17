/**
 * Whitepapers API Routes
 * 
 * Security: Authentication required for write operations
 */

import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { verifyAdminAuth } from '@/lib/auth';
import { whitepaperSchema, validateInput } from '@/lib/validation';
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

// GET /api/whitepapers - List all whitepapers with optional filters
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`whitepapers-get-${ip}`, { maxRequests: 100, windowMs: 60000 });
    
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
      .from('whitepapers')
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
    return handleApiError(error, 'Failed to fetch whitepapers');
  }
}

// POST /api/whitepapers - Create a new whitepaper
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`whitepapers-post-${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.resetTime);
    }

    const authResult = await verifyAdminAuth(request);
    if (!authResult.authenticated) {
      return authErrorResponse(authResult.error);
    }

    const body = await request.json();
    const validation = validateInput(whitepaperSchema, body);

    if (!validation.success) {
      return errorResponse(validation.error || 'Invalid input', 400, 'VALIDATION_ERROR');
    }

    const validatedData = validation.data!;

    const slugIsUnique = await isSlugUnique('whitepapers', validatedData.slug);
    if (!slugIsUnique) {
      return errorResponse('A whitepaper with this slug already exists', 409, 'DUPLICATE_SLUG');
    }

    const now = new Date().toISOString();
    const publishedDate = validatedData.published_date || now;
    const author = validatedData.author || validatedData.author_name || null;
    const whitepaperData = {
      title: validatedData.title,
      slug: validatedData.slug,
      summary: validatedData.summary || '',
      cover_image_url: validatedData.cover_image_url || null,
      pdf_url: validatedData.pdf_url,
      author_name: author,
      author,
      published_date: publishedDate,
      topic: validatedData.topic || null,
      industry: validatedData.industry || null,
      tags: validatedData.tags || null,
      is_featured: validatedData.is_featured || false,
      is_published: validatedData.is_published ?? true,
      published_at: validatedData.is_published ? now : null,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabaseAdmin
      .from('whitepapers')
      .insert([whitepaperData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return successResponse(data, 201);
  } catch (error) {
    return handleApiError(error, 'Failed to create whitepaper');
  }
}
