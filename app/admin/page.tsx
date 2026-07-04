import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Mail, Users, Eye } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getStats() {
  const [{ data: blogs }, { data: newsletters }, { data: subscribers }] = await Promise.all([
    supabaseAdmin.from('blogs').select('id', { count: 'exact' }),
    supabaseAdmin.from('newsletters').select('id', { count: 'exact' }),
    supabaseAdmin.from('subscribers').select('id', { count: 'exact' }),
  ]);

  const { data: sentNewsletters } = await supabaseAdmin
    .from('newsletters')
    .select('recipient_count')
    .eq('status', 'sent');

  const totalViews = sentNewsletters?.reduce((sum, n) => sum + (n.recipient_count || 0), 0) || 0;

  return {
    blogs: blogs?.length || 0,
    newsletters: newsletters?.length || 0,
    subscribers: subscribers?.length || 0,
    emailsSent: totalViews,
  };
}

export default async function AdminPage() {
  const stats = await getStats();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogs}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Newsletters</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newsletters}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.subscribers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.emailsSent}</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/blogs/new" className="block">
              <button className="w-full text-left px-4 py-2 rounded-md bg-muted hover:bg-muted/80">
                + Create New Blog
              </button>
            </Link>
            <Link href="/admin/newsletters/new" className="block">
              <button className="w-full text-left px-4 py-2 rounded-md bg-muted hover:bg-muted/80">
                + Create Newsletter
              </button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No recent activity</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}