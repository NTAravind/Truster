import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  topics: z.array(z.string()).min(1, 'Select at least one topic'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

    const { email, topics } = parsed.data;

    const { error } = await supabaseAdmin
      .from('subscribers')
      .upsert({ email, topics, is_active: true }, { onConflict: 'email' });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}