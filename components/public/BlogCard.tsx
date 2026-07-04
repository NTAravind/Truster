import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { TopicBadge } from '@/components/public/TopicBadge';

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
    <Link href={`/blog/${blog.slug}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        {blog.cover_image && (
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{blog.segment === 'trust_code' ? 'Trust Code Solutions' : blog.segment === 'arvi_yatra' ? 'Arvi Yatra' : 'Easy to PC'}</Badge>
          </div>
          <h3 className="line-clamp-2 font-semibold">{blog.title}</h3>
        </CardHeader>
        <CardContent>
          {blog.excerpt && (
            <p className="text-muted-foreground line-clamp-3 text-sm">{blog.excerpt}</p>
          )}
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1">
          {blog.topics.slice(0, 3).map(topic => (
            <TopicBadge key={topic} topic={topic} />
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}