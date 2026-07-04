import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { TopicBadge } from '@/components/public/TopicBadge';
import { Reveal, SwissSection, SectionLabel } from '@/components/public/SwissPrimitives';

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
    <div className="bg-[#EBE9DF] text-truster-foreground min-h-screen selection:bg-truster-primary selection:text-white">
      
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[85vh] w-full px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col justify-center mt-12 lg:mt-0">
          <Reveal delay={0.1}>
            <Link href="/blog" className="inline-flex items-center gap-4 mb-6 lg:mb-10 group">
              <span className="text-truster-primary transition-transform duration-300 group-hover:-translate-x-2">&larr;</span>
              <span className="editorial-label group-hover:text-truster-primary transition-colors">Back to Insights</span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-6 lg:mb-10">
              <span className="editorial-label text-truster-primary">
                {blog.segment === 'trust_code' ? 'Trust Code' : blog.segment === 'arvi_yatra' ? 'Arvi Yatra' : 'Easy to PC'}
              </span>
              <span className="h-[1px] w-8 lg:w-16 bg-truster-foreground/20" />
              <span className="editorial-label text-truster-foreground/50">
                {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="h-[1px] w-8 lg:w-16 bg-truster-foreground/20" />
              <span className="editorial-label text-truster-foreground/50">
                {blog.views} Views
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] text-truster-foreground mix-blend-darken">
              {blog.title}
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="mt-8 lg:mt-12 flex flex-wrap gap-2">
              {(blog.topics as string[]).map((topic: string) => (
                <TopicBadge key={topic} topic={topic} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <SwissSection className="bg-white px-0 lg:px-0 xl:px-0 py-0 md:py-0 border-none">
        {blog.cover_image && (
          <Reveal delay={0.4}>
            <div className="w-full aspect-[21/9] lg:aspect-[3/1] relative overflow-hidden bg-truster-foreground border-b brutalist-border">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="w-full h-full object-cover mix-blend-screen opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>
        )}

        <div className="w-full max-w-[900px] mx-auto px-6 lg:px-12 py-16 lg:py-32">
          <Reveal delay={0.5}>
            <div
              className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:text-truster-foreground prose-p:text-truster-foreground/80 prose-p:leading-relaxed prose-a:text-truster-primary prose-a:underline-offset-4 hover:prose-a:text-truster-primary-hover prose-strong:font-bold prose-strong:text-truster-foreground"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </Reveal>

          {blog.external_link && (
            <Reveal delay={0.6}>
              <div className="mt-24 p-8 lg:p-12 border brutalist-border bg-[#F3F1E8]">
                <span className="editorial-label mb-6 block text-truster-foreground/50">External Reference</span>
                <a
                  href={blog.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl lg:text-3xl font-black tracking-tighter uppercase text-truster-foreground hover:text-truster-primary transition-colors break-all"
                >
                  Visit Link &rarr;
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </SwissSection>
    </div>
  );
}
