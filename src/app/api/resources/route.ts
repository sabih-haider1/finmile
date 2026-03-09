import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/resources - List all resources with optional filters
export async function GET(request: NextRequest) {
  try {
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

    // Apply filters
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
      query = query.limit(parseInt(limit));
    }
    if (offset) {
      query = query.range(parseInt(offset), parseInt(offset) + parseInt(limit || '10') - 1);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return NextResponse.json({ data, count: data?.length || 0 }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching resources:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}

// POST /api/resources - Create a new resource
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.slug || !body.file_url || !body.file_type) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, file_url, file_type' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const resourceData = {
      title: body.title,
      slug: body.slug,
      description: body.description || '',
      file_url: body.file_url,
      file_type: body.file_type,
      thumbnail_url: body.thumbnail_url || null,
      tags: body.tags || null,
      is_featured: body.is_featured || false,
      is_published: body.is_published || true,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('resources')
      .insert([resourceData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating resource:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create resource' },
      { status: 500 }
    );
  }
}
