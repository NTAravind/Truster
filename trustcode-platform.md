# Trust Code Solutions Group — Content & Newsletter Platform

## Project Overview

Full-stack Next.js content + newsletter platform with topic-based subscriptions and segmented email delivery via Resend. Two content streams: **Business & Travel** and **Tech & AI**.

---

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Supabase** (DB + Auth + Storage)
- **Resend** (transactional email)
- **shadcn/ui + Tailwind CSS**
- **React Hook Form + Zod** (validation)
- **Tiptap** (WYSIWYG editor)

---

## Install Dependencies

```bash
npx create-next-app@latest trustcode-platform --typescript --tailwind --app
cd trustcode-platform

# shadcn init
npx shadcn@latest init

# shadcn components
npx shadcn@latest add button card input textarea form label badge avatar dropdown-menu dialog sheet tabs table toast skeleton pagination select switch separator checkbox

# Other deps
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs resend @tiptap/react @tiptap/pm @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-image react-hook-form @hookform/resolvers zod date-fns lucide-react
```

---

## ENV Setup (`.env.local`)

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_EMAIL=admin@trustcode.com
```

---

## Supabase Schema

Run in SQL editor:

```sql
-- Enable UUID
create extension if not exists "uuid-ossp";

-- TOPICS enum
create type topic_enum as enum (
  'erp_accounting',
  'business_consulting',
  'travel',
  'ai_automation',
  'web_app_development',
  'saas_tools'
);

-- SUBSCRIBERS
create table subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  topics topic_enum[] not null default '{}',
  is_active boolean default true,
  created_at timestamptz default now()
);

-- BLOGS
create table blogs (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  content text not null,
  excerpt text,
  category text not null,
  segment text not null check (segment in ('business_travel', 'tech_ai')),
  topics topic_enum[] default '{}',
  tags text[] default '{}',
  external_link text,
  cover_image text,
  views integer default 0,
  published boolean default false,
  auto_send_newsletter boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- NEWSLETTERS
create table newsletters (
  id uuid primary key default uuid_generate_v4(),
  subject text not null,
  html_content text not null,
  target_segment text check (target_segment in ('business_travel', 'tech_ai', 'all')),
  target_topics topic_enum[] default '{}',
  status text default 'draft' check (status in ('draft', 'sent', 'scheduled')),
  sent_at timestamptz,
  scheduled_at timestamptz,
  recipient_count integer default 0,
  created_at timestamptz default now()
);

-- EMAIL EVENTS (tracking)
create table email_events (
  id uuid primary key default uuid_generate_v4(),
  newsletter_id uuid references newsletters(id) on delete cascade,
  subscriber_id uuid references subscribers(id) on delete cascade,
  event_type text check (event_type in ('sent', 'opened', 'clicked', 'bounced')),
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

-- Increment view count function
create or replace function increment_blog_views(blog_id uuid)
returns void as $$
  update blogs set views = views + 1 where id = blog_id;
$$ language sql;

-- RLS
alter table subscribers enable row level security;
alter table blogs enable row level security;
alter table newsletters enable row level security;
alter table email_events enable row level security;

-- Public can read published blogs
create policy "Public read blogs" on blogs for select using (published = true);
-- Public can subscribe
create policy "Public insert subscribers" on subscribers for insert with check (true);
-- Service role bypasses all (for admin API routes)
```

---

## Project Structure

```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                  # Homepage with hero + featured blogs
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog listing with filters
│   │   │   └── [slug]/page.tsx       # Blog detail page
│   │   └── subscribe/
│   │       └── page.tsx              # Subscription form page
│   ├── admin/
│   │   ├── layout.tsx                # Admin layout with sidebar
│   │   ├── page.tsx                  # Dashboard
│   │   ├── blogs/
│   │   │   ├── page.tsx              # Blog list
│   │   │   ├── new/page.tsx          # Create blog
│   │   │   └── [id]/edit/page.tsx    # Edit blog
│   │   ├── newsletters/
│   │   │   ├── page.tsx              # Newsletter list
│   │   │   ├── new/page.tsx          # Create newsletter
│   │   │   └── [id]/page.tsx         # Newsletter detail
│   │   └── subscribers/
│   │       └── page.tsx              # Subscriber management
│   └── api/
│       ├── subscribe/route.ts
│       ├── blogs/
│       │   ├── route.ts
│       │   └── [id]/route.ts
│       ├── blogs/[slug]/views/route.ts
│       ├── newsletters/
│       │   ├── route.ts
│       │   └── [id]/
│       │       ├── route.ts
│       │       └── send/route.ts
│       └── newsletters/[id]/test/route.ts
├── components/
│   ├── public/
│   │   ├── SubscribeForm.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   └── TopicBadge.tsx
│   ├── admin/
│   │   ├── Sidebar.tsx
│   │   ├── BlogForm.tsx
│   │   ├── NewsletterEditor.tsx
│   │   ├── AudienceSelector.tsx
│   │   └── StatsCard.tsx
│   └── shared/
│       └── TopicCheckboxGroup.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── admin.ts                  # Service role client
│   ├── resend/
│   │   ├── client.ts
│   │   └── templates/
│   │       └── newsletter.tsx        # React Email template
│   ├── constants/topics.ts
│   └── utils.ts
└── types/
    └── index.ts
```

---

## Constants (`lib/constants/topics.ts`)

```typescript
export const TOPICS = [
  {
    id: 'erp_accounting',
    label: 'ERP & Accounting / Tally',
    segment: 'business_travel',
    group: 'Business & Travel',
  },
  {
    id: 'business_consulting',
    label: 'Business Consulting & CRM',
    segment: 'business_travel',
    group: 'Business & Travel',
  },
  {
    id: 'travel',
    label: 'Travel (Domestic, International, Spiritual)',
    segment: 'business_travel',
    group: 'Business & Travel',
  },
  {
    id: 'ai_automation',
    label: 'AI Tools & Automation',
    segment: 'tech_ai',
    group: 'Tech & AI',
  },
  {
    id: 'web_app_development',
    label: 'Web & App Development',
    segment: 'tech_ai',
    group: 'Tech & AI',
  },
  {
    id: 'saas_tools',
    label: 'SaaS, eCommerce & Tools',
    segment: 'tech_ai',
    group: 'Tech & AI',
  },
] as const;

export type TopicId = typeof TOPICS[number]['id'];

export const TOPIC_GROUPS = {
  'Business & Travel': TOPICS.filter(t => t.group === 'Business & Travel'),
  'Tech & AI': TOPICS.filter(t => t.group === 'Tech & AI'),
};
```

---

## Types (`types/index.ts`)

```typescript
export type TopicId =
  | 'erp_accounting'
  | 'business_consulting'
  | 'travel'
  | 'ai_automation'
  | 'web_app_development'
  | 'saas_tools';

export interface Subscriber {
  id: string;
  email: string;
  topics: TopicId[];
  is_active: boolean;
  created_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category: string;
  segment: 'business_travel' | 'tech_ai';
  topics: TopicId[];
  tags: string[];
  external_link?: string;
  cover_image?: string;
  views: number;
  published: boolean;
  auto_send_newsletter: boolean;
  created_at: string;
  updated_at: string;
}

export interface Newsletter {
  id: string;
  subject: string;
  html_content: string;
  target_segment?: 'business_travel' | 'tech_ai' | 'all';
  target_topics: TopicId[];
  status: 'draft' | 'sent' | 'scheduled';
  sent_at?: string;
  scheduled_at?: string;
  recipient_count: number;
  created_at: string;
}
```

---

## Supabase Clients

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

// lib/supabase/server.ts
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
export const createServerSupabaseClient = () => {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );
};

// lib/supabase/admin.ts — bypasses RLS, server-only
import { createClient } from '@supabase/supabase-js';
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
```

---

## API Routes

### `POST /api/subscribe`

```typescript
// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  topics: z.array(z.string()).min(1, 'Select at least one topic'),
});

export async function POST(req: NextRequest) {
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
}
```

### `POST /api/newsletters/[id]/send` — Segmented Send Logic

```typescript
// app/api/newsletters/[id]/send/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { resend } from '@/lib/resend/client';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  // 1. Fetch newsletter
  const { data: newsletter, error: nErr } = await supabaseAdmin
    .from('newsletters')
    .select('*')
    .eq('id', params.id)
    .single();

  if (nErr || !newsletter)
    return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });

  // 2. Build subscriber query based on target
  let query = supabaseAdmin
    .from('subscribers')
    .select('id, email, topics')
    .eq('is_active', true);

  if (newsletter.target_topics?.length > 0) {
    query = query.overlaps('topics', newsletter.target_topics);
  } else if (newsletter.target_segment && newsletter.target_segment !== 'all') {
    const { TOPICS } = await import('@/lib/constants/topics');
    const segmentTopics = TOPICS
      .filter(t => t.segment === newsletter.target_segment)
      .map(t => t.id);
    query = query.overlaps('topics', segmentTopics);
  }

  const { data: subscribers, error: sErr } = await query;
  if (sErr) return NextResponse.json({ error: sErr.message }, { status: 500 });
  if (!subscribers?.length)
    return NextResponse.json({ error: 'No matching subscribers' }, { status: 400 });

  // 3. Send in batches of 50 (Resend batch limit)
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

  // 4. Update newsletter status
  await supabaseAdmin
    .from('newsletters')
    .update({ status: 'sent', sent_at: new Date().toISOString(), recipient_count: sentCount })
    .eq('id', params.id);

  return NextResponse.json({ success: true, sent: sentCount });
}
```

### `POST /api/newsletters/[id]/test`

```typescript
// app/api/newsletters/[id]/test/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { resend } from '@/lib/resend/client';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { email } = await req.json();
  const { data: newsletter } = await supabaseAdmin
    .from('newsletters')
    .select('*')
    .eq('id', params.id)
    .single();

  if (!newsletter) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  await resend.emails.send({
    from: 'Trust Code Solutions <newsletter@trustcode.com>',
    to: email,
    subject: `[TEST] ${newsletter.subject}`,
    html: newsletter.html_content,
  });

  return NextResponse.json({ success: true });
}
```

### Blog View Increment

```typescript
// app/api/blogs/[slug]/views/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  const { data } = await supabaseAdmin
    .from('blogs')
    .select('id')
    .eq('slug', params.slug)
    .single();

  if (data) {
    await supabaseAdmin.rpc('increment_blog_views', { blog_id: data.id });
  }
  return NextResponse.json({ success: true });
}
```

---

## Components

### `TopicCheckboxGroup` (Shared)

```tsx
// components/shared/TopicCheckboxGroup.tsx
'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { TOPIC_GROUPS } from '@/lib/constants/topics';

interface Props {
  selected: string[];
  onChange: (topics: string[]) => void;
}

export function TopicCheckboxGroup({ selected, onChange }: Props) {
  const toggle = (id: string) => {
    onChange(selected.includes(id) ? selected.filter(t => t !== id) : [...selected, id]);
  };

  return (
    <div className="space-y-4">
      {Object.entries(TOPIC_GROUPS).map(([group, topics]) => (
        <div key={group}>
          <p className="text-sm font-semibold text-muted-foreground mb-2">{group}</p>
          <div className="space-y-2">
            {topics.map(topic => (
              <div key={topic.id} className="flex items-center gap-2">
                <Checkbox
                  id={topic.id}
                  checked={selected.includes(topic.id)}
                  onCheckedChange={() => toggle(topic.id)}
                />
                <Label htmlFor={topic.id}>{topic.label}</Label>
              </div>
            ))}
          </div>
          <Separator className="mt-3" />
        </div>
      ))}
    </div>
  );
}
```

### `SubscribeForm`

```tsx
// components/public/SubscribeForm.tsx
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { TopicCheckboxGroup } from '@/components/shared/TopicCheckboxGroup';
import { useToast } from '@/components/ui/use-toast';

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  topics: z.array(z.string()).min(1, 'Select at least one topic'),
});

type FormData = z.infer<typeof schema>;

export function SubscribeForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', topics: [] },
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast({ title: 'Subscribed!', description: "You'll receive newsletters for your selected topics." });
      form.reset();
    } else {
      toast({ title: 'Error', description: 'Something went wrong. Try again.', variant: 'destructive' });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <Input placeholder="you@example.com" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topics"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Topics</FormLabel>
              <TopicCheckboxGroup selected={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </Form>
  );
}
```

### `AudienceSelector` (Admin)

```tsx
// components/admin/AudienceSelector.tsx
'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TopicCheckboxGroup } from '@/components/shared/TopicCheckboxGroup';
import { Separator } from '@/components/ui/separator';

interface Props {
  segment: string;
  onSegmentChange: (v: string) => void;
  topics: string[];
  onTopicsChange: (topics: string[]) => void;
}

export function AudienceSelector({ segment, onSegmentChange, topics, onTopicsChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Target Segment</label>
        <Select value={segment} onValueChange={onSegmentChange}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select segment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subscribers</SelectItem>
            <SelectItem value="business_travel">Business & Travel</SelectItem>
            <SelectItem value="tech_ai">Tech & AI</SelectItem>
            <SelectItem value="custom">Custom Topics</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {segment === 'custom' && (
        <>
          <Separator />
          <div>
            <label className="text-sm font-medium">Specific Topics</label>
            <p className="text-xs text-muted-foreground mb-2">
              Only subscribers with at least one matching topic will receive this.
            </p>
            <TopicCheckboxGroup selected={topics} onChange={onTopicsChange} />
          </div>
        </>
      )}
    </div>
  );
}
```

### `NewsletterEditor` (Admin — Tiptap WYSIWYG)

```tsx
// components/admin/NewsletterEditor.tsx
'use client';
import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  value: string;
  onChange: (html: string) => void;
}

export function NewsletterEditor({ value, onChange }: Props) {
  const [mode, setMode] = useState<'visual' | 'html' | 'preview'>('visual');

  const editor = useEditor({
    extensions: [StarterKit, Link.configure({ openOnClick: false })],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <Tabs value={mode} onValueChange={(v) => setMode(v as any)}>
      <TabsList>
        <TabsTrigger value="visual">Visual</TabsTrigger>
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="visual">
        <div className="border rounded-md p-2 min-h-[400px]">
          <div className="flex gap-1 mb-2 border-b pb-2 flex-wrap">
            {[
              { label: 'B', action: () => editor?.chain().focus().toggleBold().run() },
              { label: 'I', action: () => editor?.chain().focus().toggleItalic().run() },
              { label: 'H2', action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run() },
              { label: 'UL', action: () => editor?.chain().focus().toggleBulletList().run() },
            ].map(btn => (
              <Button key={btn.label} variant="outline" size="sm" onClick={btn.action}>{btn.label}</Button>
            ))}
          </div>
          <EditorContent editor={editor} className="prose max-w-none" />
        </div>
      </TabsContent>
      <TabsContent value="html">
        <Textarea
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            editor?.commands.setContent(e.target.value);
          }}
          className="min-h-[400px] font-mono text-sm"
          placeholder="Paste raw HTML..."
        />
      </TabsContent>
      <TabsContent value="preview">
        <div
          className="border rounded-md p-4 min-h-[400px] prose max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </TabsContent>
    </Tabs>
  );
}
```

---

## Admin Newsletter Create Page

```tsx
// app/admin/newsletters/new/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { NewsletterEditor } from '@/components/admin/NewsletterEditor';
import { AudienceSelector } from '@/components/admin/AudienceSelector';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewNewsletterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [subject, setSubject] = useState('');
  const [html, setHtml] = useState('');
  const [segment, setSegment] = useState('all');
  const [topics, setTopics] = useState<string[]>([]);
  const [testEmail, setTestEmail] = useState('');
  const [newsletterId, setNewsletterId] = useState<string | null>(null);

  const save = async (status = 'draft') => {
    const payload = {
      subject,
      html_content: html,
      target_segment: segment === 'custom' ? null : segment,
      target_topics: segment === 'custom' ? topics : [],
      status,
    };
    const res = await fetch('/api/newsletters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok) {
      setNewsletterId(data.id);
      toast({ title: 'Saved', description: `Newsletter saved as ${status}` });
      if (status === 'sent') router.push('/admin/newsletters');
    }
    return data;
  };

  const sendTest = async () => {
    if (!newsletterId) {
      const data = await save('draft');
      if (!data.id) return;
    }
    await fetch(`/api/newsletters/${newsletterId}/test`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail }),
    });
    toast({ title: 'Test sent!', description: `Check ${testEmail}` });
  };

  const send = async () => {
    const id = newsletterId ?? (await save('draft')).id;
    await fetch(`/api/newsletters/${id}/send`, { method: 'POST' });
    toast({ title: 'Newsletter sent!', description: 'Delivered to matching subscribers.' });
    router.push('/admin/newsletters');
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-4">
        <Input placeholder="Subject line..." value={subject} onChange={e => setSubject(e.target.value)} />
        <NewsletterEditor value={html} onChange={setHtml} />
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader><CardTitle>Target Audience</CardTitle></CardHeader>
          <CardContent>
            <AudienceSelector
              segment={segment}
              onSegmentChange={setSegment}
              topics={topics}
              onTopicsChange={setTopics}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Send Test Email</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Input placeholder="test@example.com" value={testEmail} onChange={e => setTestEmail(e.target.value)} />
            <Button variant="outline" className="w-full" onClick={sendTest}>Send Test</Button>
          </CardContent>
        </Card>
        <div className="space-y-2">
          <Button variant="outline" className="w-full" onClick={() => save('draft')}>Save Draft</Button>
          <Button className="w-full" onClick={send}>Send Newsletter</Button>
        </div>
      </div>
    </div>
  );
}
```

---

## Blog Form Schema (Admin)

```typescript
// components/admin/BlogForm.tsx — key schema
const blogSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  content: z.string().min(1),
  excerpt: z.string().optional(),
  category: z.string().min(1),
  segment: z.enum(['business_travel', 'tech_ai']),
  topics: z.array(z.string()).min(1),
  tags: z.array(z.string()).default([]),
  external_link: z.string().url().optional().or(z.literal('')),
  published: z.boolean().default(false),
  auto_send_newsletter: z.boolean().default(false),
});
// Use Tiptap for content field same as NewsletterEditor
// auto_send_newsletter toggle → on publish, auto-trigger newsletter send API
```

---

## Auto-Send on Publish

```typescript
// In app/api/blogs/route.ts POST handler, after inserting blog:
if (blog.published && blog.auto_send_newsletter) {
  const { data: newsletter } = await supabaseAdmin.from('newsletters').insert({
    subject: `New Post: ${blog.title}`,
    html_content: generateBlogEmailHtml(blog),
    target_topics: blog.topics,
    status: 'draft',
  }).select().single();

  if (newsletter) {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/newsletters/${newsletter.id}/send`, {
      method: 'POST',
    });
  }
}
```

---

## Resend Client

```typescript
// lib/resend/client.ts
import { Resend } from 'resend';
export const resend = new Resend(process.env.RESEND_API_KEY);
```

---

## Recommended Blogs (Personalization)

```typescript
// In blog listing page, if subscriber cookie/param present:
const { data } = await supabaseAdmin
  .from('blogs')
  .select('*')
  .overlaps('topics', subscriberTopics)
  .eq('published', true)
  .order('created_at', { ascending: false })
  .limit(6);
```

---

## Admin Layout + Sidebar

```tsx
// app/admin/layout.tsx
// Simple sidebar with nav links:
// Dashboard / Blogs / Newsletters / Subscribers
// Use shadcn Sheet for mobile sidebar
// Protect with Supabase Auth — check session, redirect to /admin/login if none
```

---

## Open Tracking (Bonus)

Add a 1×1 transparent pixel in newsletter HTML:

```html
<img src="${NEXT_PUBLIC_SITE_URL}/api/track/open?nid=${newsletter_id}&sid=${subscriber_id}" width="1" height="1" />
```

```typescript
// app/api/track/open/route.ts
// Insert email_events row with event_type: 'opened'
// Return 1x1 transparent GIF
```

---

## Build Order

1. Supabase schema + env
2. `lib/` (supabase clients, resend, constants, types)
3. `/api/subscribe`
4. `/api/blogs` CRUD
5. `/api/newsletters` CRUD + `/send` + `/test`
6. Public subscribe page
7. Public blog listing + detail pages
8. Admin layout + sidebar
9. Admin blogs (list, create, edit)
10. Admin newsletters (list, create with editor + audience selector)
11. Admin subscribers list
12. Auto-send on publish
13. Recommended blogs
14. Open tracking pixel

---

## Key Notes

- Use `supabaseAdmin` (service role) in all API routes — never the anon client server-side for writes
- `.overlaps()` is the Supabase JS method for Postgres `&&` array overlap operator — this is the core of topic-based filtering
- Resend batch limit = 50 emails/call — always batch large sends
- Slug generation: `title.toLowerCase().replace(/[^a-z0-9]+/g, '-')` + timestamp suffix for uniqueness
- All admin routes should check Supabase session server-side and return 401 if not authenticated
