import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

export default function ArviYatraPage() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/20 overflow-hidden">
      
      {/* Magazine Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 border-b overflow-hidden min-h-[85vh] flex flex-col justify-center">
        {/* Full Bleed Image Background */}
        <div className="absolute inset-0 -z-20">
          <img src="/images/arvi_yatra_hero.png" alt="Arvi Yatra Journey" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent -z-10" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8 text-primary">
              <Plane className="h-6 w-6" />
              <span className="font-semibold tracking-[0.2em] text-xs uppercase">Arvi Yatra</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[1.1]">
              Explore Journeys <br /> That Matter.
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-12 max-w-2xl font-light">
              Discover memorable travel experiences through carefully planned domestic, international, spiritual, and group tours.
            </p>
            
            <Button size="lg" className="rounded-none h-14 px-8 text-base bg-foreground text-background hover:bg-foreground/90 shadow-2xl" asChild>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ARVI_YATRA}`} target="_blank" rel="noreferrer">
                Start Your Journey
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Editorial About Section */}
      <section className="py-24 md:py-32 border-b bg-background relative">
        <div className="absolute left-0 top-0 w-1/4 h-full bg-primary/5 -z-10 blur-3xl" />
        <div className="container mx-auto max-w-5xl px-4">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Travel with Confidence</h2>
            <p className="text-3xl md:text-5xl font-semibold leading-[1.3] tracking-tight">
              At Arvi Yatra, we believe travel should be smooth, memorable, and stress-free.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              With strong customer care and personalized planning, we help travelers explore destinations comfortably while creating meaningful experiences. From spiritual journeys to international adventures, our goal is to provide dependable travel services with personal attention.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Magazine Style Image/Services Grid */}
      <section className="py-24 border-b bg-muted/20">
        <div className="container mx-auto max-w-6xl px-4">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Curated Experiences</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn delay={0.1}>
              <Card className="group cursor-pointer border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted mb-6 overflow-hidden relative rounded-xl shadow-md border border-border/50">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-4 py-2 text-sm font-semibold rounded shadow-sm">
                      Domestic
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Domestic Tours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Curated travel packages across India with comfortable planning and support.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn delay={0.2}>
              <Card className="group cursor-pointer mt-0 lg:mt-12 border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted mb-6 overflow-hidden relative rounded-xl shadow-md border border-border/50">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-4 py-2 text-sm font-semibold rounded shadow-sm">
                      Global
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">International Tours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore global destinations with organized travel assistance and guided experiences.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn delay={0.3}>
              <Card className="group cursor-pointer mt-0 lg:mt-24 border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted mb-6 overflow-hidden relative rounded-xl shadow-md border border-border/50">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-4 py-2 text-sm font-semibold rounded shadow-sm">
                      Spiritual
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Spiritual Tours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Well-planned spiritual journeys and pilgrimage experiences.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            
            {/* Service 4 */}
            <FadeIn delay={0.4}>
              <Card className="group cursor-pointer border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted mb-6 overflow-hidden relative rounded-xl shadow-md border border-border/50">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-4 py-2 text-sm font-semibold rounded shadow-sm">
                      Community
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Group Tours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Travel solutions for families, organizations, and communities.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            
            {/* Service 5 */}
            <FadeIn delay={0.5}>
              <Card className="group cursor-pointer mt-0 lg:mt-12 border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted mb-6 overflow-hidden relative rounded-xl shadow-md border border-border/50">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-4 py-2 text-sm font-semibold rounded shadow-sm">
                      Nature
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Wildlife & Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unique travel experiences focused on nature, exploration, and adventure.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Start Your Next Journey</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 font-light max-w-2xl mx-auto">
              Discover travel experiences designed with comfort, trust, and care.
            </p>
            <Button size="lg" variant="secondary" className="rounded-none h-14 px-10 text-lg font-medium shadow-2xl hover:scale-105 transition-transform" asChild>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ARVI_YATRA}`} target="_blank" rel="noreferrer">
                Contact Us to Plan
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
