import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/guides - List all guides with optional filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');

    let query = supabase
      .from('guides')
      .select('*')
      .order('created_at', { ascending: false });

    // Apply filters
    if (search) {
      query = query.ilike('title', `%${search}%`);
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
    console.error('Error fetching guides:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch guides' },
      { status: 500 }
    );
  }
}

// POST /api/guides - Create a new guide
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.slug || !body.pdf_url) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, pdf_url' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const guideData = {
      title: body.title,
      slug: body.slug,
      description: body.description || '',
      pdf_url: body.pdf_url,
      cover_image_url: body.cover_image_url || null,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('guides')
      .insert([guideData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating guide:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create guide' },
      { status: 500 }
    );
  }
}
