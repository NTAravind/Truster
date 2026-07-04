import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { BlogGrid } from '@/components/public/BlogGrid';

export const dynamic = 'force-dynamic';

interface SearchParams {
  segment?: string;
}

async function getBlogs(segment?: string) {
  const supabase = await createClient();
  let query = supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (segment) {
    query = query.eq('segment', segment);
  }

  const { data } = await query;
  return data || [];
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const segment = params?.segment;
  const blogs = await getBlogs(segment);

  return (
    <div className="bg-background text-foreground selection:bg-primary/20">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-16 border-b pb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Insights & Blog</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
            Thoughts, stories, and ideas from the Truster team across business, technology, and travel.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          <Link href="/blog">
            <Button variant={!segment ? 'default' : 'secondary'} className="rounded-full">All</Button>
          </Link>
          <Link href="/blog?segment=trust_code">
            <Button variant={segment === 'trust_code' ? 'default' : 'secondary'} className="rounded-full">Trust Code Solutions</Button>
          </Link>
          <Link href="/blog?segment=arvi_yatra">
            <Button variant={segment === 'arvi_yatra' ? 'default' : 'secondary'} className="rounded-full">Arvi Yatra</Button>
          </Link>
          <Link href="/blog?segment=easy_pc">
            <Button variant={segment === 'easy_pc' ? 'default' : 'secondary'} className="rounded-full">Easy to PC</Button>
          </Link>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <BlogGrid blogs={blogs} />
        </div>
      </main>
    </div>
  );
}