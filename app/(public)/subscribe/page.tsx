import { Card, CardContent } from '@/components/ui/card';
import { SubscribeForm } from '@/components/public/SubscribeForm';

export const metadata = {
  title: 'Subscribe - TRUSTER',
  description: 'Subscribe to our newsletter for personalized content from Truster Group.',
};

export default function SubscribePage() {
  return (
    <div className="bg-[#EBE9DF] text-truster-foreground min-h-screen selection:bg-truster-primary selection:text-white">
      
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[50vh] w-full px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col justify-center mt-12 lg:mt-0">
          <div className="flex items-center gap-6 mb-6 lg:mb-10">
            <span className="editorial-label text-truster-primary">NEWSLETTER</span>
            <span className="h-[1px] w-24 bg-truster-foreground/20" />
            <span className="editorial-label">Updates</span>
          </div>

          <h1 className="editorial-text text-[12vw] lg:text-[10rem] xl:text-[11rem] -ml-2 lg:-ml-4 text-truster-foreground mix-blend-darken">
            STAY<br />CONNECTED.
          </h1>

          <p className="mt-8 lg:mt-12 text-xl lg:text-3xl font-medium tracking-tight leading-[1.2] max-w-2xl text-truster-foreground/80">
            Get personalized content delivered to your inbox. Choose the topics that matter most to you from across our ecosystem.
          </p>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="w-full bg-white px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-[700px]">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </div>
  );
}
