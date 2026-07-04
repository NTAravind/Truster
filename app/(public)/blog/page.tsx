import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { BlogGrid } from '@/components/public/BlogGrid';
import { Reveal, SwissSection, SectionLabel } from '@/components/public/SwissPrimitives';

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

  const filters = [
    { label: 'All', value: undefined },
    { label: 'Trust Code Solutions', value: 'trust_code' },
    { label: 'Arvi Yatra', value: 'arvi_yatra' },
    { label: 'Easy to PC', value: 'easy_pc' },
  ];

  return (
    <div className="bg-[#EBE9DF] text-truster-foreground min-h-screen selection:bg-truster-primary selection:text-white">
      
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[85vh] w-full bg-[#EBE9DF] px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center mt-12 lg:mt-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6 mb-6 lg:mb-10">
              <span className="editorial-label text-truster-primary">INSIGHTS</span>
              <span className="h-[1px] w-24 bg-truster-foreground/20" />
              <span className="editorial-label">Truster Group</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="editorial-text text-[11vw] lg:text-[10rem] xl:text-[12rem] -ml-2 lg:-ml-4 text-truster-foreground mix-blend-darken">
              STORIES <span className="text-truster-primary italic font-serif font-light">&</span><br />
              IDEAS.
            </h1>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 lg:mt-16 max-w-2xl">
            <p className="text-xl lg:text-3xl font-medium tracking-tight leading-[1.2] text-truster-foreground/80">
              Explore the latest updates from the Truster team across business software, technology, and curated travel experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <SwissSection className="bg-white py-0 md:py-0 px-0 lg:px-0 xl:px-0 border-none">
        
        <div className="border-b brutalist-border">
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 py-8 flex flex-wrap gap-4">
            {filters.map((filter) => {
              const isActive = segment === filter.value;
              const href = filter.value ? `/blog?segment=${filter.value}` : '/blog';
              
              return (
                <Link key={filter.label} href={href}>
                  <div className={`px-6 py-3 border text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                    isActive 
                      ? 'border-truster-primary bg-truster-primary text-white' 
                      : 'border-truster-foreground/20 text-truster-foreground hover:bg-truster-foreground hover:text-white'
                  }`}>
                    {filter.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1600px]">
          <BlogGrid blogs={blogs} />
        </div>
      </SwissSection>

    </div>
  );
}
