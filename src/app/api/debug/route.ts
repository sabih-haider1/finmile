import { NextResponse } from 'next/server';
import { supabase } from '@/supabaseClient';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { data, error } = await supabase.from('blogs').select('id, title, cover_image_url, created_at, updated_at').order('created_at', { ascending: false }).limit(5);
  return NextResponse.json({ data, error });
}
