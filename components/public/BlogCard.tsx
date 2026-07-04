import Link from 'next/link';
import { TopicBadge } from '@/components/public/TopicBadge';
import { Reveal } from '@/components/public/SwissPrimitives';

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    category: string;
    segment: string;
    topics: string[];
    cover_image?: string;
    views: number;
    created_at: string;
  };
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Reveal>
      <Link href={`/blog/${blog.slug}`} className="block h-full group border-b border-r brutalist-border">
        <div className="h-full flex flex-col bg-white hover:bg-[#F3F1E8] transition-colors duration-500">
          {blog.cover_image && (
            <div className="aspect-[4/3] relative overflow-hidden bg-truster-foreground border-b brutalist-border">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="object-cover w-full h-full mix-blend-screen opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          )}
          <div className="p-8 lg:p-10 flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="editorial-label text-truster-primary">
                {blog.segment === 'trust_code' ? 'Trust Code' : blog.segment === 'arvi_yatra' ? 'Arvi Yatra' : 'Easy to PC'}
              </span>
              <span className="h-[1px] w-8 bg-truster-foreground/20" />
              <span className="editorial-label text-truster-foreground/50">
                {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </span>
            </div>
            
            <h3 className="line-clamp-3 font-black text-3xl uppercase tracking-tighter leading-[0.95] text-truster-foreground mb-6 group-hover:text-truster-primary transition-colors">
              {blog.title}
            </h3>
            
            <div className="flex-1">
              {blog.excerpt && (
                <p className="text-truster-foreground/70 line-clamp-3 text-base leading-relaxed mb-8">
                  {blog.excerpt}
                </p>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {blog.topics.slice(0, 3).map(topic => (
                <TopicBadge key={topic} topic={topic} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
