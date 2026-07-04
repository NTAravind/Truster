import Image from "next/image";
import { BarChart3, Building2, FileCheck2, Layers3, ReceiptText } from "lucide-react";

import { Reveal, Metric, SectionLabel, SwissSection, MaterialLink, WhatsAppLink } from "@/components/public/SwissPrimitives";

const services = [
  { title: "ERP Solutions", icon: Layers3, text: "Integrated systems for operations, inventory, finance, and workflows." },
  { title: "Accounting & Tally", icon: ReceiptText, text: "Professional setup, support, and financial management workflows." },
  { title: "CRM Systems", icon: BarChart3, text: "Pipelines, retention tools, and client communication systems." },
  { title: "Tax & Compliance", icon: FileCheck2, text: "Reporting, regulatory support, auditing, and compliance processes." },
  { title: "Business Consulting", icon: Building2, text: "Practical advice to reduce bottlenecks and improve operational clarity." },
];

const approach = [
  ["01. Reliability", "Systems designed to last and scale with business growth."],
  ["02. Support", "Customer care that stays available after implementation."],
  ["03. Integration", "Tools shaped around real workflows, not software theatre."],
  ["04. Scalability", "Architecture ready for continuous expansion."],
];

export default function TrustCodeSolutionsPage() {
  return (
    <div className="overflow-hidden bg-white text-truster-foreground selection:bg-truster-primary selection:text-white">
      
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[85vh] w-full bg-[#EBE9DF] px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />

        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] lg:w-[680px] lg:h-[680px] opacity-80 pointer-events-none hidden md:block z-0 mix-blend-darken">
          <Image src="/images/bgeraser_results/trust_code_hero.png" alt="Trust Code Solutions" fill className="object-contain" priority />
        </div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center mt-12 lg:mt-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6 mb-6 lg:mb-10">
              <span className="editorial-label text-truster-primary">DIVISION 01</span>
              <span className="h-[1px] w-24 bg-truster-foreground/20" />
              <span className="editorial-label">Business Systems</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <h1 className="editorial-text text-[14vw] lg:text-[11rem] xl:text-[13rem] -ml-2 lg:-ml-4 text-truster-foreground mix-blend-darken">
              TRUST<br />CODE.
            </h1>
          </Reveal>

          <div className="mt-8 lg:mt-16 grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <Reveal delay={0.4} className="lg:col-span-4 order-2 lg:order-1">
              <WhatsAppLink phone={process.env.NEXT_PUBLIC_WHATSAPP_TRUST_CODE}>
                Consult Expert
              </WhatsAppLink>
            </Reveal>
            
            <Reveal delay={0.3} className="lg:col-span-8 order-1 lg:order-2">
              <p className="text-xl lg:text-3xl font-medium tracking-tight leading-[1.2] max-w-2xl text-truster-foreground/80">
                ERP, accounting, CRM, compliance, and consulting for companies that need reliable systems and clear support.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <SwissSection className="noise-bg bg-truster-foreground text-white">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel className="text-white/60">Methodology</SectionLabel>
            <h2 className="mt-8 text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              RELIABLE<br />SYSTEMS.
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7">
            <p className="text-xl leading-8 text-white/70 mb-12">
              Trust Code Solutions helps businesses simplify operations through software systems, financial tools, and implementation support tailored to real company workflows.
            </p>
            <div className="grid gap-0 border-y border-white/20">
              {approach.map(([title, text], i) => (
                <div key={title} className={`py-8 ${i !== 0 ? 'border-t border-white/20' : ''}`}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-truster-primary">{title}</h3>
                  <p className="text-lg leading-6 text-white/80">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SwissSection>

      {/* ── CAPABILITIES ── */}
      <SwissSection className="bg-[#EBE9DF]">
        <Reveal>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="mt-6 text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl">
            ORGANIZED FOR<br />ACTION.
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
              <SectionLabel className="text-white/80">Engage</SectionLabel>
              <h2 className="mt-6 text-6xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85]">
                IMPROVE<br />OPERATIONS.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8 mb-12">
                <Metric value="25+" label="Years" />
                <Metric value="1k+" label="Clients" />
              </div>
              <WhatsAppLink phone={process.env.NEXT_PUBLIC_WHATSAPP_TRUST_CODE}>Start Dialogue</WhatsAppLink>
            </div>
          </div>
        </Reveal>
      </SwissSection>
    </div>
  );
}
