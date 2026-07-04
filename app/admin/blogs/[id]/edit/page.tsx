'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogForm } from '@/components/admin/BlogForm';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogParams {
  id: string;
}

export default function EditBlogPage({
  params,
}: {
  params: Promise<BlogParams>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    async function fetchBlog() {
      const { id } = await params;
      const res = await fetch(`/api/blogs/${id}`);
      if (res.ok) {
        const data = await res.json();
        setBlog(data);
      } else {
        router.push('/admin/blogs');
      }
      setLoading(false);
    }
    fetchBlog();
  }, [params, router]);

  if (loading) {
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-48 mb-8" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Edit Blog</h1>
      <BlogForm initialData={blog} isEditing />
    </div>
  );
}