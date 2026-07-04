import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Building2, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

export default function TrustCodeSolutionsPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 border-b bg-muted/20">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom" />
        <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6 text-primary">
              <Building2 className="h-8 w-8" />
              <span className="font-bold tracking-widest text-sm uppercase">Trust Code Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Smart Business Software & Consulting
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              Helping businesses streamline operations through ERP systems, accounting solutions, CRM implementation, compliance support, and consulting services.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-sm shadow-md" asChild>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_TRUST_CODE}`} target="_blank" rel="noreferrer">
                  Consult with an Expert
                </a>
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="left" className="relative hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50">
               <img src="/images/trust_code_hero.png" alt="Trust Code Solutions" className="object-cover w-full h-full" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section - Swiss Grid */}
      <section className="py-24 border-b relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -z-10" />
        <div className="container mx-auto max-w-5xl px-4 grid md:grid-cols-12 gap-12">
          <FadeIn className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight">Reliable Solutions for Modern Businesses</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8 space-y-6">
            <p className="text-lg leading-relaxed">
              Trust Code Solutions was built to help businesses simplify operations and improve efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, we have supported companies across India, Africa, and the US with business software systems, financial tools, and consulting services tailored to their operations.
            </p>
            
            <Card className="mt-8 overflow-hidden border-border/50 shadow-sm">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[200px]">Our Approach</TableHead>
                    <TableHead>Focus Area</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Long-term reliability</TableCell>
                    <TableCell className="text-muted-foreground">Building systems designed to last and scale with your growth.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Personalized support</TableCell>
                    <TableCell className="text-muted-foreground">Dedicated customer care teams available when you need them.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Practical implementation</TableCell>
                    <TableCell className="text-muted-foreground">No fluff, just tools that work and integrate smoothly into your workflows.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Scalable systems</TableCell>
                    <TableCell className="text-muted-foreground">Future-ready architecture for continuous business growth.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-b bg-muted/10">
        <div className="container mx-auto max-w-5xl px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Core Capabilities</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <FadeIn delay={0.1}>
              <Card className="rounded-sm border-border/60 hover:shadow-lg transition-shadow bg-background h-full">
                <CardHeader>
                  <CardTitle className="text-lg">ERP Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Integrated systems to manage operations, inventory, finance, and business workflows.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="rounded-sm border-border/60 hover:shadow-lg transition-shadow bg-background h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Accounting & Tally</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Professional accounting software setup, Tally support, and financial management solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="rounded-sm border-border/60 hover:shadow-lg transition-shadow bg-background h-full">
                <CardHeader>
                  <CardTitle className="text-lg">CRM Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Customer relationship management solutions to improve sales and communication.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="rounded-sm border-border/60 hover:shadow-lg transition-shadow bg-background h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Tax & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Support for compliance management, reporting, and business processes.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.5}>
              <Card className="rounded-sm border-border/60 hover:shadow-lg transition-shadow bg-background h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Business Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Practical consulting services designed to improve operational efficiency and business growth.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Improve Your Business Operations</h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto font-light">
              Get reliable ERP and business software solutions backed by years of experience and strong customer support.
            </p>
            <Button size="lg" variant="secondary" className="rounded-sm h-14 px-8 text-base shadow-lg" asChild>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_TRUST_CODE}`} target="_blank" rel="noreferrer">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
