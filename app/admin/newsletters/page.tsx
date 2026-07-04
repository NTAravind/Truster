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
import { Plus, Eye, Send } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getNewsletters() {
  const { data } = await supabaseAdmin
    .from('newsletters')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function NewslettersPage() {
  const newsletters = await getNewsletters();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Newsletters</h1>
        <Link href="/admin/newsletters/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Newsletter
          </Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Recipients</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {newsletters.map(newsletter => (
            <TableRow key={newsletter.id}>
              <TableCell className="font-medium">{newsletter.subject}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {newsletter.target_segment || newsletter.target_topics?.length 
                    ? `${newsletter.target_segment || 'Custom'}` 
                    : 'All'}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={
                  newsletter.status === 'sent' ? 'default' : 
                  newsletter.status === 'scheduled' ? 'outline' : 'secondary'
                }>
                  {newsletter.status}
                </Badge>
              </TableCell>
              <TableCell>{newsletter.recipient_count}</TableCell>
              <TableCell>
                {new Date(newsletter.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Link href={`/admin/newsletters/${newsletter.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {newsletters.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                No newsletters found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}