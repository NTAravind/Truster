import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Plus, Pencil, Trash2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface SearchParams {
  segment?: string;
}

async function getBlogs(segment?: string) {
  let query = supabaseAdmin
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (segment) {
    query = query.eq('segment', segment);
  }

  const { data } = await query;
  return data || [];
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const segment = params?.segment;
  const blogs = await getBlogs(segment);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link href="/admin/blogs/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Blog
          </Button>
        </Link>
      </div>

      <div className="flex gap-2 mb-4">
        <Link href="/admin/blogs">
          <Button variant={!segment ? 'default' : 'outline'}>All</Button>
        </Link>
        <Link href="/admin/blogs?segment=trust_code">
          <Button variant={segment === 'trust_code' ? 'default' : 'outline'}>Trust Code</Button>
        </Link>
        <Link href="/admin/blogs?segment=arvi_yatra">
          <Button variant={segment === 'arvi_yatra' ? 'default' : 'outline'}>Arvi Yatra</Button>
        </Link>
        <Link href="/admin/blogs?segment=easy_pc">
          <Button variant={segment === 'easy_pc' ? 'default' : 'outline'}>Easy to PC</Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Segment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map(blog => (
            <TableRow key={blog.id}>
              <TableCell className="font-medium">{blog.title}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {blog.segment === 'trust_code' ? 'Trust Code Solutions' : blog.segment === 'arvi_yatra' ? 'Arvi Yatra' : 'Easy to PC'}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={blog.published ? 'default' : 'outline'}>
                  {blog.published ? 'Published' : 'Draft'}
                </Badge>
              </TableCell>
              <TableCell>{blog.views}</TableCell>
              <TableCell>
                {new Date(blog.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Link href={`/admin/blogs/${blog.id}/edit`}>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {blogs.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                No blogs found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}