import { BlogCard } from './BlogCard';

interface BlogGridProps {
  blogs: Array<{
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
  }>;
}

export function BlogGrid({ blogs }: BlogGridProps) {
  if (!blogs.length) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No blogs found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}