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
import { TOPICS } from '@/lib/constants/topics';

export const dynamic = 'force-dynamic';

async function getSubscribers() {
  const { data } = await supabaseAdmin
    .from('subscribers')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function SubscribersPage() {
  const subscribers = await getSubscribers();

  const getTopicLabel = (topicId: string) => {
    const topic = TOPICS.find(t => t.id === topicId);
    return topic?.label || topicId;
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Subscribers</h1>
        <p className="text-muted-foreground">{subscribers.length} total</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Topics</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscribers.map(subscriber => (
            <TableRow key={subscriber.id}>
              <TableCell className="font-medium">{subscriber.email}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {subscriber.topics?.map((topicId: string) => (
                    <Badge key={topicId} variant="outline" className="text-xs">
                      {getTopicLabel(topicId)}
                    </Badge>
                  )) || []}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={subscriber.is_active ? 'default' : 'secondary'}>
                  {subscriber.is_active ? 'Active' : 'Inactive'}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(subscriber.created_at).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
          {subscribers.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground">
                No subscribers found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}