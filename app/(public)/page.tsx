import Link from "next/link";
import Image from "next/image";
import { Building2, CheckCircle2, Laptop, Plane } from "lucide-react";

import { SubscribeForm } from "@/components/public/SubscribeForm";
import {
  MaterialLink,
  SectionLabel,
  SwissSection,
  Reveal,
  Metric,
} from "@/components/public/SwissPrimitives";

const brands = [
  {
    title: "Trust Code",
    fullTitle: "Trust Code Solutions",
    label: "01. Business Systems",
    href: "/trust-code-solutions",
    image: "/images/trust_code_hero.png",
    text: "ERP, accounting, CRM, compliance, and practical consulting for growing operations.",
    accent: "#1F73BD",
  },
  {
    title: "Arvi Yatra",
    fullTitle: "Arvi Yatra",
    label: "02. Travel Experiences",
    href: "/arvi-yatra",
    image: "/images/arvi_yatra_hero.png",
    text: "Domestic, international, spiritual, and group travel planned with dependable care.",
    accent: "#1F73BD",
  },
  {
    title: "Easy to PC",
    fullTitle: "Easy to PC",
    label: "03. Digital Products",
    href: "/easy-to-pc",
    image: "/images/easy_to_pc_hero.png",
    text: "AI automation, websites, apps, SaaS platforms, and commerce systems built for scale.",
    accent: "#1F73BD",
  },
];

const contactLinks = [
  {
    label: "Trust Code",
    icon: Building2,
    phone: process.env.NEXT_PUBLIC_WHATSAPP_TRUST_CODE,
    sub: "Business Systems",
  },
  {
    label: "Arvi Yatra",
    icon: Plane,
    phone: process.env.NEXT_PUBLIC_WHATSAPP_ARVI_YATRA,
    sub: "Travel Experiences",
  },
  {
    label: "Easy to PC",
    icon: Laptop,
    phone: process.env.NEXT_PUBLIC_WHATSAPP_EASY_TO_PC,
    sub: "Digital Products",
  },
];

const stats = [
  {
    value: "25+",
    label: "Years of experience",
  },
  {
    value: "1000+",
    label: "Clients served",
  },
  {
    value: "3",
    label: "Focused businesses",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white text-truster-foreground selection:bg-truster-primary selection:text-white">
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[85vh] w-full bg-[#EBE9DF] px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center mt-12 lg:mt-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6 mb-6 lg:mb-10">
              <span className="editorial-label text-truster-primary">EST. 1999</span>
              <span className="h-[1px] w-24 bg-truster-foreground/20" />
              <span className="editorial-label">Stockholm / Global</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <h1 className="editorial-text text-[15vw] lg:text-[12rem] xl:text-[14rem] -ml-2 lg:-ml-4 text-truster-foreground mix-blend-darken">
              TRUST<br />STANDS.
            </h1>
          </Reveal>

          <div className="mt-8 lg:mt-16 grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <Reveal delay={0.4} className="lg:col-span-4 order-2 lg:order-1">
              <MaterialLink href="#explore" inverse>
                Explore Divisions
              </MaterialLink>
            </Reveal>

            <Reveal delay={0.3} className="lg:col-span-8 order-1 lg:order-2">
              <p className="text-xl lg:text-3xl font-medium tracking-tight leading-[1.2] max-w-2xl text-truster-foreground/80">
                Business systems, travel planning, and digital products — three focused divisions under one uncompromising standard of reliability.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS / EXPLORE ── */}
      <SwissSection id="explore" className="bg-white">
        <Reveal>
          <SectionLabel>Our Ecosystem</SectionLabel>
        </Reveal>

        <div className="mt-16 lg:mt-32 flex flex-col gap-24 lg:gap-48">
          {brands.map((brand, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={brand.href} delay={0.2}>
                <div className={`grid grid-cols-1 gap-8 lg:gap-16 items-center ${isEven ? 'lg:grid-cols-[5fr_7fr]' : 'lg:grid-cols-[7fr_5fr]'}`}>

                  <div className={`flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="editorial-label text-truster-foreground/50 mb-6 block">
                      {brand.label}
                    </span>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-truster-foreground mb-6">
                      {brand.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h2>
                    <p className="text-lg text-truster-foreground/70 mb-10 max-w-md">
                      {brand.text}
                    </p>
                    <div>
                      <MaterialLink href={brand.href}>View Platform</MaterialLink>
                    </div>
                  </div>

                  <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden bg-[#F3F1E8]">
                      <Image
                        src={brand.image}
                        alt={brand.fullTitle}
                        fill
                        className="object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105 grayscale hover:grayscale-0"
                      />
                      <div className="absolute inset-0 noise-bg" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SwissSection>

      {/* ── STORY / STATS ── */}
      <SwissSection id="story" className="noise-bg bg-truster-foreground text-white">
        <Reveal>
          <SectionLabel className="text-white/60">The Standard</SectionLabel>
          <h2 className="mt-12 text-[10vw] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
            CONSISTENT<br />
            <span className="text-truster-primary italic">DELIVERY.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 lg:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-24">
            {stats.map(({ value, label }) => (
              <Metric key={label} value={value} label={label} />
            ))}
          </div>
        </Reveal>
      </SwissSection>

      {/* ── CONTACT ── */}
      <SwissSection id="contact" className="bg-[#EBE9DF] text-truster-foreground">
        <div className="grid gap-16 lg:grid-cols-12 items-start">

          <Reveal className="lg:col-span-6 lg:sticky lg:top-32">
            <SectionLabel>Reach Out</SectionLabel>
            <h2 className="mt-6 text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              START A<br />DIALOGUE.
            </h2>
            <p className="mt-8 text-xl font-medium tracking-tight text-truster-foreground/70 max-w-md">
              Reach us directly on WhatsApp — no forms, no wait. Select a division below.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8">
            <div className="flex flex-col gap-0 border-y brutalist-border">
              {contactLinks.map(({ label, phone, sub }, i) => (
                <a
                  key={label}
                  href={`https://wa.me/${phone ?? ""}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative flex flex-col p-8 transition-colors hover:bg-white ${i !== 0 ? 'border-t brutalist-border' : ''}`}
                >
                  <span className="editorial-label text-truster-foreground/50 mb-2">{sub}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black uppercase tracking-tighter group-hover:text-truster-primary transition-colors">
                      {label}
                    </span>
                    <span className="text-xl opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </Reveal>
        </div>
      </SwissSection>

      {/* ── NEWSLETTER SECTION ── */}
      <SwissSection className="noise-bg bg-truster-primary text-white">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <SectionLabel className="text-white/60 mb-6">Dispatch</SectionLabel>
            <h2 className="text-5xl lg:text-[5rem] font-black uppercase tracking-tighter leading-[0.9] mb-8">
              STAY<br />UPDATED.
            </h2>
            <p className="text-xl leading-8 text-white/70 max-w-sm">
              Get curated insights and updates across our ecosystem delivered directly to your inbox.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7 bg-white p-8 lg:p-12 brutalist-border">
            <SubscribeForm compact={true} />
          </Reveal>
        </div>
      </SwissSection>
    </div>
  );
}