import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/guides/[id] - Get a single guide by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('guides')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Guide not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching guide:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch guide' },
      { status: 500 }
    );
  }
}

// PUT /api/guides/[id] - Update a guide
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const updateData = {
      ...body,
      updated_at: new Date().toISOString(),
    };

    // Remove fields that shouldn't be updated
    delete updateData.id;
    delete updateData.created_at;

    const { data, error } = await supabase
      .from('guides')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating guide:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update guide' },
      { status: 500 }
    );
  }
}

// DELETE /api/guides/[id] - Delete a guide
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabase
      .from('guides')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { message: 'Guide deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting guide:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete guide' },
      { status: 500 }
    );
  }
}
