import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/badge';
import { TopicBadge } from '@/components/public/TopicBadge';

export const dynamic = 'force-dynamic';

interface BlogParams {
  slug: string;
}

async function getBlog(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  return data;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<BlogParams>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Trust Code Solutions</Link>
          <nav className="flex items-center gap-4">
            <Link href="/blog" className="text-sm font-medium">Blog</Link>
            <Link href="/subscribe" className="text-sm font-medium">Subscribe</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/blog" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
          &larr; Back to Blog
        </Link>

        <Badge variant="secondary" className="mb-4">
          {blog.segment === 'trust_code' ? 'Trust Code Solutions' : blog.segment === 'arvi_yatra' ? 'Arvi Yatra' : 'Easy to PC'}
        </Badge>

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {(blog.topics as string[]).map((topic: string) => (
            <TopicBadge key={topic} topic={topic} />
          ))}
        </div>

        {blog.cover_image && (
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full rounded-lg mb-8"
          />
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {blog.external_link && (
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">External Link:</p>
            <a
              href={blog.external_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {blog.external_link}
            </a>
          </div>
        )}

        <div className="mt-8 text-sm text-muted-foreground">
          {new Date(blog.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {' • '}
          {blog.views} views
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Trust Code Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}