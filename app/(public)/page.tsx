import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Globe, Building2, Plane, Laptop } from 'lucide-react';
import { SubscribeForm } from '@/components/public/SubscribeForm';
import { FadeIn } from '@/components/ui/fade-in';

export default function HomePage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section - Rich Visual Style */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 border-b">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
              TRUSTER
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-medium mb-8">
              Business Solutions • Travel • Technology
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl text-muted-foreground">
              Building trusted solutions across business software, travel experiences, and modern technology.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full shadow-lg" asChild>
                <Link href="#explore">Explore Brands <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left" className="relative hidden md:block">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img src="/images/truster_home_hero.png" alt="Truster Global Ecosystem" className="object-cover w-full h-full" />
            </div>
            {/* Floating Accent Card */}
            <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur border shadow-xl p-6 rounded-xl w-64">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">Global Reach</p>
                  <p className="text-sm text-muted-foreground">1000+ Clients</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brands Section */}
      <section id="explore" className="py-24 border-b bg-muted/20 relative">
        <div className="container mx-auto max-w-6xl px-4">
          <FadeIn>
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Explore Our Brands</h2>
              <p className="text-lg text-muted-foreground">Tailored expertise across software, travel, and digital transformation.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand 1 */}
            <FadeIn delay={0.1}>
              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-background border-border/50 overflow-hidden h-full flex flex-col">
                <div className="h-48 relative overflow-hidden bg-muted">
                  <img src="/images/trust_code_hero.png" alt="Trust Code Solutions" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Building2 className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">Trust Code Solutions</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                    ERP, accounting, CRM, consulting, and business software solutions for enterprises.
                  </p>
                  <Link href="/trust-code-solutions" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80 transition-colors">
                    Explore Solutions <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Brand 2 */}
            <FadeIn delay={0.2}>
              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-background border-border/50 overflow-hidden h-full flex flex-col">
                <div className="h-48 relative overflow-hidden bg-muted">
                  <img src="/images/arvi_yatra_hero.png" alt="Arvi Yatra" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Plane className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">Arvi Yatra</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                    Domestic, international, spiritual, and beautifully curated travel experiences.
                  </p>
                  <Link href="/arvi-yatra" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80 transition-colors">
                    Plan a Journey <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Brand 3 */}
            <FadeIn delay={0.3}>
              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-background border-border/50 overflow-hidden h-full flex flex-col">
                <div className="h-48 relative overflow-hidden bg-muted">
                  <img src="/images/easy_to_pc_hero.png" alt="Easy to PC" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Laptop className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">Easy to PC</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                    AI solutions, automation systems, responsive websites, apps, SaaS, and eCommerce.
                  </p>
                  <Link href="/easy-to-pc" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80 transition-colors">
                    Build with Tech <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-b relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -z-10" />
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold tracking-tight mb-6">A Legacy Built on Trust</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Founded and led by PV Nataraj, TRUSTER brings together decades of experience across multiple industries. With more than 25 years of expertise and over 1000+ clients served globally, the mission has always remained the same:
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-xl font-medium leading-relaxed text-primary">
                  "Deliver dependable services with strong customer care and long-term client relationships."
                </p>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                From enterprise business solutions to modern AI systems and travel experiences, every brand under TRUSTER focuses on practical value, reliability, and customer satisfaction.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <Card className="p-8 lg:p-12 shadow-xl border-border/50 bg-background/80 backdrop-blur">
                <h3 className="text-2xl font-bold mb-8 flex items-center"><Globe className="mr-3 text-primary" /> By the Numbers</h3>
                <ul className="space-y-6">
                  {[
                    "25+ Years of Experience",
                    "1000+ Clients Served",
                    "Clients Across India, Africa & US",
                    "Trusted Customer Support",
                    "Multi-Industry Expertise"
                  ].map((stat, i) => (
                    <li key={i} className="flex items-center group">
                      <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="font-medium text-lg">{stat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Newsletter */}
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Subscribe to receive updates, insights, offers, and news from our businesses. Get relevant updates directly to your inbox.
              </p>
              <Card className="p-8 border-border/50 shadow-lg bg-background">
                <SubscribeForm />
              </Card>
            </FadeIn>

            {/* Contact */}
            <FadeIn delay={0.2} className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Build Something Together</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you need business solutions, technology services, or travel planning, our team is ready to help. Connect with the right business directly.
              </p>

              <div className="space-y-4">
                <Button className="w-full justify-start h-16 text-base group hover:border-primary transition-colors" variant="outline" asChild>
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_TRUST_CODE}`} target="_blank" rel="noreferrer">
                    <div className="bg-muted p-2 rounded mr-4 group-hover:bg-primary/10 transition-colors">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    Contact Trust Code Solutions
                  </a>
                </Button>
                <Button className="w-full justify-start h-16 text-base group hover:border-primary transition-colors" variant="outline" asChild>
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ARVI_YATRA}`} target="_blank" rel="noreferrer">
                    <div className="bg-muted p-2 rounded mr-4 group-hover:bg-primary/10 transition-colors">
                      <Plane className="h-5 w-5 text-primary" />
                    </div>
                    Contact Arvi Yatra
                  </a>
                </Button>
                <Button className="w-full justify-start h-16 text-base group hover:border-primary transition-colors" variant="outline" asChild>
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_EASY_TO_PC}`} target="_blank" rel="noreferrer">
                    <div className="bg-muted p-2 rounded mr-4 group-hover:bg-primary/10 transition-colors">
                      <Laptop className="h-5 w-5 text-primary" />
                    </div>
                    Contact Easy to PC
                  </a>
                </Button>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}