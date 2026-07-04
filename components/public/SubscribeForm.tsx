'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { TOPIC_GROUPS } from '@/lib/constants/topics';
import { toast } from 'sonner';

const BUSINESSES = [
  {
    id: 'trust_code',
    label: 'Trust Code Solutions',
    description: 'Business Software - ERP, Tally, Tax & Compliance, CRM & Consulting',
    tone: 'B2B, serious clients, high trust tone',
  },
  {
    id: 'arvi_yatra',
    label: 'Arvi Yatra',
    description: 'Travel - Domestic, International, Spiritual Tours & Group Packages',
    tone: 'B2C, emotional + visual content',
  },
  {
    id: 'easy_pc',
    label: 'Easy to PC',
    description: 'Tech & AI - AI Tools, Automation, SaaS, Web & App Development, eCommerce',
    tone: 'Tech-savvy audience',
  },
];

export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [selectedBusinesses, setSelectedBusinesses] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleBusiness = (id: string) => {
    setSelectedBusinesses(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || selectedBusinesses.length === 0) {
      toast.error('Please select at least one business and enter your email');
      return;
    }

    setIsSubmitting(true);
    try {
      const topicMap: Record<string, string[]> = {
        trust_code: ['erp_tally', 'tax_compliance', 'crm_consulting'],
        arvi_yatra: ['domestic_tours', 'international_tours', 'spiritual_tours', 'group_packages'],
        easy_pc: ['ai_tools', 'automation', 'saas', 'web_app_dev', 'ecommerce'],
      };

      const topics = selectedBusinesses.flatMap(b => topicMap[b] || []);

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, topics }),
      });

      if (res.ok) {
        toast.success('Subscribed!', {
          description: "You'll receive newsletters from your selected businesses.",
        });
        setEmail('');
        setSelectedBusinesses([]);
      } else {
        toast.error('Something went wrong. Try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mt-1"
          required
        />
      </div>

      <div>
        <Label>Select Businesses</Label>
        <p className="text-sm text-muted-foreground mb-4">
          Choose which businesses you want to hear from
        </p>
        <div className="space-y-4">
          {BUSINESSES.map(business => (
            <Card key={business.id} className="relative hover:bg-muted/50 transition-colors shadow-none cursor-pointer">
              <CardContent className="flex items-start gap-3 p-4">
                <Checkbox
                  id={business.id}
                  checked={selectedBusinesses.includes(business.id)}
                  onCheckedChange={() => toggleBusiness(business.id)}
                  className="mt-1 z-10"
                />
                <div className="flex-1">
                  <Label htmlFor={business.id} className="font-semibold text-base cursor-pointer before:absolute before:inset-0">
                    {business.label}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">{business.description}</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">{business.tone}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}