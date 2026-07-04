import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: slug } = await params;

  const { data } = await supabaseAdmin
    .from('blogs')
    .select('id')
    .eq('slug', slug)
    .single();

  if (data) {
    await supabaseAdmin.rpc('increment_blog_views', { blog_id: data.id });
  }
  return NextResponse.json({ success: true });
}
