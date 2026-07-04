import Image from "next/image";
import { Compass, MapPin, Sparkles } from "lucide-react";

import { Reveal, SectionLabel, SwissSection, WhatsAppLink } from "@/components/public/SwissPrimitives";

const experiences = [
  { title: "Domestic Tours", label: "01. India", image: "/images/arvi_yatra_hero.png", text: "Curated travel packages across India with comfortable planning and support." },
  { title: "International Tours", label: "02. Global", image: "/images/travel.png", text: "Organized assistance for global destinations, group travel, and guided experiences." },
  { title: "Spiritual Tours", label: "03. Pilgrimage", image: "/images/bgeraser_results/temple.png", text: "Well-planned spiritual journeys with attention to comfort, timing, and care." },
];

const principles = [
  { title: "Personal planning", icon: MapPin },
  { title: "Smooth coordination", icon: Compass },
  { title: "Dependable care", icon: Sparkles },
];

export default function ArviYatraPage() {
  return (
    <div className="overflow-hidden bg-white text-truster-foreground selection:bg-truster-primary selection:text-white">
      
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[85vh] w-full bg-[#EBE9DF] px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />

        <div className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] opacity-80 pointer-events-none hidden md:block z-0 mix-blend-darken">
          <Image src="/images/bgeraser_results/arvi_yatra_hero.png" alt="Arvi Yatra" fill className="object-contain" priority />
        </div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center mt-12 lg:mt-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6 mb-6 lg:mb-10">
              <span className="editorial-label text-truster-primary">DIVISION 02</span>
              <span className="h-[1px] w-24 bg-truster-foreground/20" />
              <span className="editorial-label">Travel Experiences</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <h1 className="editorial-text text-[14vw] lg:text-[11rem] xl:text-[13rem] -ml-2 lg:-ml-4 text-truster-foreground mix-blend-darken">
              ARVI<br />YATRA.
            </h1>
          </Reveal>

          <div className="mt-8 lg:mt-16 grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <Reveal delay={0.4} className="lg:col-span-4 order-2 lg:order-1">
              <WhatsAppLink phone={process.env.NEXT_PUBLIC_WHATSAPP_ARVI_YATRA}>
                Start Journey
              </WhatsAppLink>
            </Reveal>
            
            <Reveal delay={0.3} className="lg:col-span-8 order-1 lg:order-2">
              <p className="text-xl lg:text-3xl font-medium tracking-tight leading-[1.2] max-w-2xl text-truster-foreground/80">
                Domestic, international, spiritual, and group tours designed to feel smooth, memorable, and stress-free.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <SwissSection className="noise-bg bg-truster-foreground text-white">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel className="text-white/60">Confidence</SectionLabel>
            <h2 className="mt-8 text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              SMOOTH<br />JOURNEYS.
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7">
            <p className="text-xl leading-8 text-white/70 mb-12">
              With strong customer care and personalized planning, Arvi Yatra helps travelers explore destinations comfortably while creating meaningful experiences.
            </p>
            <div className="grid gap-0 border-y border-white/20">
              {principles.map(({ title }, i) => (
                <div key={title} className={`py-8 ${i !== 0 ? 'border-t border-white/20' : ''}`}>
                  <h3 className="text-xl font-bold uppercase tracking-[0.1em] text-white/90">{title}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SwissSection>

      {/* ── CAPABILITIES ── */}
      <SwissSection className="bg-[#EBE9DF]">
        <Reveal>
          <SectionLabel>Curated Tours</SectionLabel>
          <h2 className="mt-6 text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl">
            STRUCTURE<br />AND CARE.
          </h2>
        </Reveal>
        <div className="mt-16 lg:mt-32 grid gap-0 border-y brutalist-border md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="h-full border-b md:border-b-0 md:border-r brutalist-border last:border-r-0">
              <div className="h-full hover:bg-white transition-colors group flex flex-col">
                <div className="relative w-full overflow-hidden bg-truster-foreground/5 h-2">
                  <div className="absolute inset-0 noise-bg" />
                </div>
                <div className="p-8 lg:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="editorial-label text-truster-primary block mb-6">{item.label}</span>
                    <h3 className="text-2xl font-bold tracking-tight text-truster-foreground uppercase mb-4">{item.title}</h3>
                    <p className="text-base leading-6 text-truster-foreground/70">{item.text}</p>
                  </div>
                </div>
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
              <SectionLabel className="text-white/80">Plan</SectionLabel>
              <h2 className="mt-6 text-6xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85]">
                START YOUR<br />JOURNEY.
              </h2>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="mb-12 text-lg text-white/80 max-w-sm">
                Discover travel experiences designed with comfort, trust, and care.
              </p>
              <WhatsAppLink phone={process.env.NEXT_PUBLIC_WHATSAPP_ARVI_YATRA}>Plan With Us</WhatsAppLink>
            </div>
          </div>
        </Reveal>
      </SwissSection>
    </div>
  );
}
