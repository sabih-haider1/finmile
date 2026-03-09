import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/whitepapers/[id] - Get a single whitepaper by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('whitepapers')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Whitepaper not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching whitepaper:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch whitepaper' },
      { status: 500 }
    );
  }
}

// PUT /api/whitepapers/[id] - Update a whitepaper
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
      .from('whitepapers')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating whitepaper:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update whitepaper' },
      { status: 500 }
    );
  }
}

// DELETE /api/whitepapers/[id] - Delete a whitepaper
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabase
      .from('whitepapers')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { message: 'Whitepaper deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting whitepaper:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete whitepaper' },
      { status: 500 }
    );
  }
}
