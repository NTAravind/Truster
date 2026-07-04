import Image from "next/image";
import { Bot, Cloud, Code2, Cpu, ShoppingCart, Smartphone, Workflow } from "lucide-react";

import { Reveal, SectionLabel, SwissSection, WhatsAppLink } from "@/components/public/SwissPrimitives";

const services = [
  { title: "AI & Automation", icon: Cpu, text: "Custom AI systems, workflow automation, and operational optimization." },
  { title: "Mobile Apps", icon: Smartphone, text: "Scalable Android and iOS applications for practical business use cases." },
  { title: "Web Development", icon: Code2, text: "Responsive websites built for performance, clarity, and conversion." },
  { title: "SaaS Platforms", icon: Cloud, text: "Secure, scalable products and business platforms designed for growth." },
  { title: "eCommerce", icon: ShoppingCart, text: "Professional stores with payments, catalog systems, and room to scale." },
];

const stack = ["LLMs", "Automation", "Web Apps", "SaaS", "Commerce", "Integrations"];

export default function EasyToPcPage() {
  return (
    <div className="overflow-hidden bg-white text-truster-foreground selection:bg-truster-primary selection:text-white">
      
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[85vh] w-full bg-[#EBE9DF] px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center mt-12 lg:mt-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6 mb-6 lg:mb-10">
              <span className="editorial-label text-truster-primary">DIVISION 03</span>
              <span className="h-[1px] w-24 bg-truster-foreground/20" />
              <span className="editorial-label">Digital Products</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <h1 className="editorial-text text-[14vw] lg:text-[11rem] xl:text-[13rem] -ml-2 lg:-ml-4 text-truster-foreground mix-blend-darken">
              EASY<br />TO PC.
            </h1>
          </Reveal>

          <div className="mt-8 lg:mt-16 grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <Reveal delay={0.4} className="lg:col-span-4 order-2 lg:order-1">
              <WhatsAppLink phone={process.env.NEXT_PUBLIC_WHATSAPP_EASY_TO_PC}>
                Start Project
              </WhatsAppLink>
            </Reveal>
            
            <Reveal delay={0.3} className="lg:col-span-8 order-1 lg:order-2">
              <p className="text-xl lg:text-3xl font-medium tracking-tight leading-[1.2] max-w-2xl text-truster-foreground/80">
                AI automation, websites, mobile apps, SaaS platforms, and eCommerce systems shaped around real business outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION ── */}
      <SwissSection className="bg-white py-0 md:py-0 px-0 lg:px-0 xl:px-0">
        <Reveal delay={0.2}>
          <div className="relative h-[50vh] lg:h-[80vh] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/images/easy_to_pc_hero.png"
              alt="Easy to PC technology"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </SwissSection>

      {/* ── APPROACH ── */}
      <SwissSection className="noise-bg bg-truster-foreground text-white">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel className="text-white/60">Built for Growth</SectionLabel>
            <h2 className="mt-8 text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              MODERN<br />TOOLING.
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7">
            <p className="text-xl leading-8 text-white/70 mb-12">
              Easy to PC combines AI, automation, and product development to improve efficiency, user experience, and business growth without unnecessary complexity.
            </p>
            
            <div className="border-t border-white/20 pt-12">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-truster-primary">Practical Execution</h3>
              <p className="text-lg leading-6 text-white/80 mb-12">
                We turn modern tooling into stable customer experiences, internal systems, and scalable digital products.
              </p>
              <div className="flex flex-wrap gap-4">
                {stack.map((item) => (
                  <span key={item} className="border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SwissSection>

      {/* ── CAPABILITIES ── */}
      <SwissSection className="bg-[#EBE9DF]">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-6 text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl">
            COMPREHENSIVE<br />SOLUTIONS.
          </h2>
        </Reveal>
        <div className="mt-16 lg:mt-32 grid gap-0 border-y brutalist-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, text }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <div className="h-full border-b md:border-b-0 brutalist-border p-8 lg:p-12 hover:bg-white transition-colors group">
                <span className="text-6xl font-black text-truster-foreground/10 group-hover:text-truster-primary transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-12 text-2xl font-bold tracking-tight text-truster-foreground uppercase">{title}</h3>
                <p className="mt-4 text-base leading-6 text-truster-foreground/70">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SwissSection>

      {/* ── START ── */}
      <SwissSection className="noise-bg bg-truster-primary text-white">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel className="text-white/80">Build</SectionLabel>
              <h2 className="mt-6 text-6xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85]">
                BUILD YOUR<br />SOLUTION.
              </h2>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="mb-12 text-lg text-white/80 max-w-sm">
                From AI systems to SaaS platforms, Easy to PC helps businesses create modern digital experiences.
              </p>
              <WhatsAppLink phone={process.env.NEXT_PUBLIC_WHATSAPP_EASY_TO_PC}>Contact Easy To PC</WhatsAppLink>
            </div>
          </div>
        </Reveal>
      </SwissSection>
    </div>
  );
}
