import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/case-studies - List all case studies with optional filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const published = searchParams.get('published');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');

    let query = supabase
      .from('case_studies')
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
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch case studies' },
      { status: 500 }
    );
  }
}

// POST /api/case-studies - Create a new case study
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const caseStudyData = {
      title: body.title,
      slug: body.slug,
      summary: body.summary || '',
      content: body.content,
      cover_image_url: body.cover_image_url || null,
      company_name: body.company_name || null,
      industry: body.industry || null,
      challenge: body.challenge || null,
      solution: body.solution || null,
      results: body.results || null,
      tags: body.tags || null,
      is_featured: body.is_featured || false,
      is_published: body.is_published || true,
      published_at: body.is_published ? now : null,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('case_studies')
      .insert([caseStudyData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating case study:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create case study' },
      { status: 500 }
    );
  }
}
