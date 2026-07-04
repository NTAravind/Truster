import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Laptop, Cpu, Code2, Smartphone, Cloud, ShoppingCart, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

export default function EasyToPcPage() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/20 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-32 border-b relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] -z-10" />
        
        <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Badge variant="secondary" className="mb-8 px-4 py-1.5 rounded-full font-medium shadow-sm border border-border/50">
              <Laptop className="w-4 h-4 mr-2 inline-block text-primary" /> Easy to PC
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              AI, Automation & <br className="hidden md:block" /> Digital Solutions
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground mb-10 max-w-lg">
              Building modern digital experiences through AI systems, automation, websites, mobile apps, SaaS platforms, and eCommerce solutions.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full h-12 px-8 shadow-lg hover:-translate-y-0.5 transition-transform" asChild>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_EASY_TO_PC}`} target="_blank" rel="noreferrer">
                  Start a Project
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 bg-background/50 backdrop-blur">
                Explore Services
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="left" className="relative hidden md:block">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-tr from-muted/50 to-muted/10 p-2 backdrop-blur-xl">
               <div className="w-full h-full rounded-2xl overflow-hidden relative">
                 <img src="/images/easy_to_pc_hero.png" alt="Easy to PC Technology" className="object-cover w-full h-full" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
               </div>
               
               {/* Floating UI Elements */}
               <div className="absolute top-10 -left-6 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3">
                 <Cpu className="text-primary h-6 w-6" />
                 <span className="font-semibold text-sm">AI Powered</span>
               </div>
               <div className="absolute bottom-10 -right-6 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3">
                 <Cloud className="text-primary h-6 w-6" />
                 <span className="font-semibold text-sm">SaaS Ready</span>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-b relative">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom" />
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Technology Built for Growth</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Easy to PC focuses on helping businesses adapt to the modern digital world.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                From AI-powered automation to custom websites and mobile applications, we create solutions designed to improve efficiency, user experience, and business growth.
              </p>
              <ul className="space-y-4">
                {['Modern technology expertise', 'Scalable development solutions', 'Business-focused approach'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <Card className="aspect-square flex flex-col justify-center items-center text-center border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-colors shadow-xl">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="p-4 bg-primary/10 rounded-2xl mb-6">
                    <Cpu className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Future-Ready Systems</h3>
                  <p className="text-muted-foreground">We combine modern technology with practical execution to deliver scalable digital systems.</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 border-b bg-muted/20 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Our Services</h2>
              <p className="text-muted-foreground text-lg mt-2">Comprehensive tech solutions for modern businesses.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI & Automation (Large) */}
            <FadeIn delay={0.1} className="md:col-span-2 row-span-2">
              <Card className="h-full border-border/50 bg-background/80 backdrop-blur hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors">
                    <Cpu className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">AI & Automation</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 text-lg">
                    Custom AI systems, intelligent automation workflows, and business process optimization. We leverage cutting-edge language models and automation pipelines to reduce manual work and increase operational speed.
                  </p>
                  <div className="mt-8 flex gap-2">
                    <Badge variant="secondary" className="px-3 py-1">LLMs</Badge>
                    <Badge variant="secondary" className="px-3 py-1">Workflows</Badge>
                    <Badge variant="secondary" className="px-3 py-1">Integration</Badge>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Mobile App */}
            <FadeIn delay={0.2}>
              <Card className="h-full border-border/50 bg-background/80 backdrop-blur hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary transition-colors">
                    <Smartphone className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Scalable mobile applications for Android and iOS platforms.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Websites */}
            <FadeIn delay={0.3}>
              <Card className="h-full border-border/50 bg-background/80 backdrop-blur hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary transition-colors">
                    <Code2 className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Modern responsive websites built for performance and conversions.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* SaaS Platforms */}
            <FadeIn delay={0.4} className="md:col-span-2">
              <Card className="h-full border-border/50 bg-background/80 backdrop-blur hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary transition-colors flex items-center gap-3">
                    <Cloud className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SaaS Platforms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom SaaS products and business software systems designed for scale, security, and multi-tenant architectures.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* eCommerce */}
            <FadeIn delay={0.5}>
              <Card className="h-full border-border/50 bg-background/80 backdrop-blur hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary transition-colors">
                    <ShoppingCart className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">eCommerce</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Professional online stores with payment integration and scalability.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center relative">
        <div className="container mx-auto max-w-3xl px-4 relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Build Your Next Digital Solution</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto font-light leading-relaxed">
              From AI systems to websites and SaaS platforms, Easy to PC helps businesses create modern digital experiences. Let's discuss your next project.
            </p>
            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-xl hover:scale-105 transition-transform" asChild>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_EASY_TO_PC}`} target="_blank" rel="noreferrer">
                Contact Easy to PC <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
