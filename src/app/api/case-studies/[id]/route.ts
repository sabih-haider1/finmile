import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/case-studies/[id] - Get a single case study by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
      }
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching case study:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch case study' },
      { status: 500 }
    );
  }
}

// PUT /api/case-studies/[id] - Update a case study
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const body = await request.json();

    // Don't allow updating id, created_at
    const { id, created_at, ...updateData } = body;

    const updates = {
      ...updateData,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('case_studies')
      .update(updates)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
      }
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating case study:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update case study' },
      { status: 500 }
    );
  }
}

// DELETE /api/case-studies/[id] - Delete a case study
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { error } = await supabase
      .from('case_studies')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { message: 'Case study deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting case study:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete case study' },
      { status: 500 }
    );
  }
}
