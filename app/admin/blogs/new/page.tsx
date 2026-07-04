'use client';

import { BlogForm } from '@/components/admin/BlogForm';

export default function NewBlogPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Create New Blog</h1>
      <BlogForm />
    </div>
  );
}