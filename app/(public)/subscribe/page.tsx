import { Card, CardContent } from '@/components/ui/card';
import { SubscribeForm } from '@/components/public/SubscribeForm';
import { MailOpen } from 'lucide-react';

export const metadata = {
  title: 'Subscribe - TRUSTER',
  description: 'Subscribe to our newsletter for personalized content from Truster Group.',
};

export default function SubscribePage() {
  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-4rem)] flex flex-col justify-center selection:bg-primary/20 py-20">
      <main className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <MailOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Stay Connected</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Get personalized content delivered to your inbox. Choose the topics that matter most to you from across our ecosystem.
          </p>
        </div>

        <Card className="border-border/60 shadow-lg shadow-black/5 bg-background">
          <CardContent className="p-8 md:p-12">
            <SubscribeForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}