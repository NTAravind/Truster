import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('newsletters')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data || []);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { data, error } = await supabaseAdmin
    .from('newsletters')
    .insert({ ...body, status: body.status || 'draft' })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}