import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { resend } from '@/lib/resend/client';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { data: newsletter, error: nErr } = await supabaseAdmin
    .from('newsletters')
    .select('*')
    .eq('id', id)
    .single();

  if (nErr || !newsletter)
    return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });

  let query = supabaseAdmin
    .from('subscribers')
    .select('id, email, topics')
    .eq('is_active', true);

  if (newsletter.target_topics?.length > 0) {
    query = query.overlaps('topics', newsletter.target_topics);
  } else if (newsletter.target_segment && newsletter.target_segment !== 'all') {
    const { TOPICS } = await import('@/lib/constants/topics');
    const segmentTopics = TOPICS.filter(t => t.segment === newsletter.target_segment).map(t => t.id);
    query = query.overlaps('topics', segmentTopics);
  }

  const { data: subscribers, error: sErr } = await query;
  if (sErr) return NextResponse.json({ error: sErr.message }, { status: 500 });
  if (!subscribers?.length)
    return NextResponse.json({ error: 'No matching subscribers' }, { status: 400 });

  const batchSize = 50;
  let sentCount = 0;

  for (let i = 0; i < subscribers.length; i += batchSize) {
    const batch = subscribers.slice(i, i + batchSize);
    const emails = batch.map(sub => ({
      from: 'Trust Code Solutions <newsletter@trustcode.com>',
      to: sub.email,
      subject: newsletter.subject,
      html: newsletter.html_content,
      tags: [{ name: 'newsletter_id', value: newsletter.id }],
    }));

    await resend.batch.send(emails);

    const events = batch.map(sub => ({
      newsletter_id: newsletter.id,
      subscriber_id: sub.id,
      event_type: 'sent',
    }));
    await supabaseAdmin.from('email_events').insert(events);
    sentCount += batch.length;
  }

  await supabaseAdmin
    .from('newsletters')
    .update({
      status: 'sent',
      sent_at: new Date().toISOString(),
      recipient_count: sentCount,
    })
    .eq('id', id);

  return NextResponse.json({ success: true, sent: sentCount });
}