'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface NewsletterParams {
  id: string;
}

interface Newsletter {
  id: string;
  subject: string;
  html_content: string;
  target_segment?: string;
  target_topics: string[];
  status: string;
  recipient_count: number;
  created_at: string;
}

export default function NewsletterDetailPage({
  params,
}: {
  params: Promise<NewsletterParams>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [newsletter, setNewsletter] = useState<Newsletter | null>(null);
  const [testEmail, setTestEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    async function fetchNewsletter() {
      const { id } = await params;
      const res = await fetch(`/api/newsletters/${id}`);
      if (res.ok) {
        const data = await res.json();
        setNewsletter(data);
      } else {
        router.push('/admin/newsletters');
      }
      setLoading(false);
    }
    fetchNewsletter();
  }, [params, router]);

  const sendTest = async () => {
    if (!testEmail || !newsletter) return;
    setIsSending(true);
    try {
      const res = await fetch(`/api/newsletters/${newsletter.id}/test`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: testEmail }),
      });
      if (res.ok) {
        toast.success(`Test sent to ${testEmail}`);
      } else {
        toast.error('Failed to send test');
      }
    } finally {
      setIsSending(false);
    }
  };

  const sendNewsletter = async () => {
    if (!newsletter) return;
    setIsSending(true);
    try {
      const res = await fetch(`/api/newsletters/${newsletter.id}/send`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(`Sent to ${data.sent} recipients`);
        router.push('/admin/newsletters');
      } else {
        toast.error(data.error || 'Failed to send');
      }
    } finally {
      setIsSending(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-48 mb-8" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!newsletter) return null;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">{newsletter.subject}</h1>
        <Button onClick={sendNewsletter} disabled={isSending}>
          Send Newsletter
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: newsletter.html_content }}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                <strong>Status:</strong> {newsletter.status}
              </p>
              <p className="text-sm">
                <strong>Target:</strong>{' '}
                {newsletter.target_segment || newsletter.target_topics.length
                  ? `${newsletter.target_segment || 'Custom'}`
                  : 'All'}
              </p>
              <p className="text-sm">
                <strong>Recipients:</strong> {newsletter.recipient_count}
              </p>
              <p className="text-sm">
                <strong>Created:</strong>{' '}
                {new Date(newsletter.created_at).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send Test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input
                placeholder="test@example.com"
                value={testEmail}
                onChange={e => setTestEmail(e.target.value)}
              />
              <Button
                className="w-full"
                variant="outline"
                onClick={sendTest}
                disabled={isSending}
              >
                Send Test
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}