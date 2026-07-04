'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsletterEditor } from '@/components/admin/NewsletterEditor';
import { AudienceSelector } from '@/components/admin/AudienceSelector';
import { toast } from 'sonner';

export default function NewNewsletterPage() {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [html, setHtml] = useState('');
  const [segment, setSegment] = useState('all');
  const [topics, setTopics] = useState<string[]>([]);
  const [testEmail, setTestEmail] = useState('');
  const [newsletterId, setNewsletterId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const save = async (status = 'draft') => {
    setIsSubmitting(true);
    try {
      const payload = {
        subject,
        html_content: html,
        target_segment: segment === 'custom' ? null : segment,
        target_topics: segment === 'custom' ? topics : [],
        status,
      };
      const res = await fetch('/api/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setNewsletterId(data.id);
        toast.success(`Newsletter saved as ${status}`);
        if (status === 'sent') router.push('/admin/newsletters');
      } else {
        toast.error('Failed to save newsletter');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendTest = async () => {
    if (!testEmail) {
      toast.error('Please enter a test email');
      return;
    }
    if (!newsletterId) {
      await save('draft');
    }
    try {
      const res = await fetch(`/api/newsletters/${newsletterId || newsletterId}/test`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: testEmail }),
      });
      if (res.ok) {
        toast.success(`Test sent to ${testEmail}`);
      } else {
        toast.error('Failed to send test');
      }
    } catch {
      toast.error('Failed to send test');
    }
  };

  const handleSend = async () => {
    if (!newsletterId) {
      await save('draft');
    }
    try {
      const res = await fetch(`/api/newsletters/${newsletterId || newsletterId}/send`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(`Newsletter sent to ${data.sent} recipients`);
        router.push('/admin/newsletters');
      } else {
        toast.error(data.error || 'Failed to send');
      }
    } catch {
      toast.error('Failed to send newsletter');
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      <div className="col-span-2 space-y-4">
        <Input
          placeholder="Subject line..."
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <NewsletterEditor value={html} onChange={setHtml} />
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Target Audience</CardTitle>
          </CardHeader>
          <CardContent>
            <AudienceSelector
              segment={segment}
              onSegmentChange={setSegment}
              topics={topics}
              onTopicsChange={setTopics}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Send Test Email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Input
              placeholder="test@example.com"
              value={testEmail}
              onChange={e => setTestEmail(e.target.value)}
            />
            <Button
              variant="outline"
              className="w-full"
              onClick={sendTest}
              disabled={isSubmitting}
            >
              Send Test
            </Button>
          </CardContent>
        </Card>
        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => save('draft')}
            disabled={isSubmitting}
          >
            Save Draft
          </Button>
          <Button
            className="w-full"
            onClick={handleSend}
            disabled={isSubmitting}
          >
            Send Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
}