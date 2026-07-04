import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { resend } from '@/lib/resend/client';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const { email } = body;

  const { data: newsletter, error: nErr } = await supabaseAdmin
    .from('newsletters')
    .select('*')
    .eq('id', id)
    .single();

  if (nErr || !newsletter)
    return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });

  await resend.emails.send({
    from: 'Trust Code Solutions <newsletter@trustcode.com>',
    to: email,
    subject: `[TEST] ${newsletter.subject}`,
    html: newsletter.html_content,
  });

  return NextResponse.json({ success: true });
}