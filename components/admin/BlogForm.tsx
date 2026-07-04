'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { TOPIC_GROUPS } from '@/lib/constants/topics';
import { toast } from 'sonner';

interface BlogFormProps {
  initialData?: {
    id?: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    category: string;
    segment: string;
    topics: string[];
    external_link?: string;
    cover_image?: string;
    published: boolean;
    auto_send_newsletter: boolean;
  };
  isEditing?: boolean;
}

export function BlogForm({ initialData, isEditing }: BlogFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [segment, setSegment] = useState(initialData?.segment || 'trust_code');
  const [topics, setTopics] = useState<string[]>(initialData?.topics || []);
  const [externalLink, setExternalLink] = useState(initialData?.external_link || '');
  const [coverImage, setCoverImage] = useState(initialData?.cover_image || '');
  const [published, setPublished] = useState(initialData?.published || false);
  const [autoSend, setAutoSend] = useState(initialData?.auto_send_newsletter || false);

  const generateSlug = () => {
    const s = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();
    setSlug(s);
  };

  const toggleTopic = (id: string) => {
    setTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !content || !category || topics.length === 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        title,
        slug,
        content,
        excerpt,
        category,
        segment,
        topics,
        external_link: externalLink || null,
        cover_image: coverImage || null,
        published,
        auto_send_newsletter: autoSend,
      };

      const url = isEditing 
        ? `/api/blogs/${initialData?.id}`
        : '/api/blogs';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success(isEditing ? 'Blog updated' : 'Blog created');
        router.push('/admin/blogs');
      } else {
        toast.error('Something went wrong');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      <div>
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Blog title"
          className="mt-1"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="slug">Slug *</Label>
          <div className="flex gap-2 mt-1">
            <Input
              id="slug"
              value={slug}
              onChange={e => setSlug(e.target.value)}
              placeholder="blog-slug"
              required
            />
            <Button type="button" variant="outline" onClick={generateSlug}>
              Generate
            </Button>
          </div>
        </div>
        <div>
          <Label htmlFor="category">Category *</Label>
          <Input
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            placeholder="e.g., Tutorials, News"
            className="mt-1"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="content">Content *</Label>
        <Textarea
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Blog content (HTML)"
          className="mt-1 min-h-[300px]"
          required
        />
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={e => setExcerpt(e.target.value)}
          placeholder="Short description for previews"
          className="mt-1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="segment">Segment *</Label>
          <Select value={segment} onValueChange={setSegment}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trust_code">Trust Code Solutions</SelectItem>
              <SelectItem value="arvi_yatra">Arvi Yatra</SelectItem>
              <SelectItem value="easy_pc">Easy to PC</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            value={coverImage}
            onChange={e => setCoverImage(e.target.value)}
            placeholder="https://..."
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="externalLink">External Link</Label>
        <Input
          id="externalLink"
          value={externalLink}
          onChange={e => setExternalLink(e.target.value)}
          placeholder="https://..."
          className="mt-1"
        />
      </div>

      <Separator />

      <div>
        <Label>Topics *</Label>
        <div className="space-y-4 mt-2">
          {Object.entries(TOPIC_GROUPS).map(([group, topicsList]) => (
            <div key={group}>
              <p className="text-sm font-semibold text-muted-foreground mb-2">{group}</p>
              <div className="flex flex-wrap gap-4">
                {topicsList.map(topic => (
                  <div key={topic.id} className="flex items-center gap-2">
                    <Checkbox
                      id={topic.id}
                      checked={topics.includes(topic.id)}
                      onCheckedChange={() => toggleTopic(topic.id)}
                    />
                    <Label htmlFor={topic.id} className="font-normal">
                      {topic.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex items-center gap-2">
        <Checkbox
          id="published"
          checked={published}
          onCheckedChange={c => setPublished(!!c)}
        />
        <Label htmlFor="published">Published</Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="autoSend"
          checked={autoSend}
          onCheckedChange={c => setAutoSend(!!c)}
        />
        <Label htmlFor="autoSend">Auto-send newsletter on publish</Label>
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : isEditing ? 'Update Blog' : 'Create Blog'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push('/admin/blogs')}>
          Cancel
        </Button>
      </div>
    </form>
  );
}