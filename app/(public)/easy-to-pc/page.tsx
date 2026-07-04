import Image from "next/image";
import { Bot, Workflow, Code2, Network, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal, SwissSection, MaterialLink, SectionLabel } from "@/components/public/SwissPrimitives";

export default function EasyToPcPage() {
  return (
    <div className="overflow-hidden bg-white text-truster-foreground selection:bg-truster-primary selection:text-white">
      
      {/* ── HERO ── */}
      <section className="noise-bg relative min-h-[85vh] w-full bg-[#EBE9DF] px-6 pb-16 pt-32 lg:px-12 lg:pt-32 border-b brutalist-border flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 swiss-grid opacity-30 mix-blend-multiply pointer-events-none" />

        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] lg:w-[680px] lg:h-[680px] opacity-80 pointer-events-none hidden md:block z-0 mix-blend-darken">
          <Image src="/images/bgeraser_results/easy_to_pc_hero.png" alt="Easy To PC Automation" fill className="object-contain" priority />
        </div>
        
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
              <MaterialLink href="#capabilities" inverse>
                Explore Capabilities
              </MaterialLink>
            </Reveal>

            <Reveal delay={0.3} className="lg:col-span-8 order-1 lg:order-2">
              <p className="text-xl lg:text-3xl font-medium tracking-tight leading-[1.2] max-w-2xl text-truster-foreground/80">
                Automate the impossible. We build sophisticated AI agents, high-performance web applications, and scalable SaaS architectures that redefine operational efficiency.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRECISION ENGINEERING SECTION ── */}
      <section id="capabilities" className="w-full bg-[#F5F5F5] py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl">
              Precision Engineering.
            </h2>
            <p className="text-lg text-truster-foreground/80">
              Architecting the future of digital operations through modular, high-performance software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Autonomous AI Agents */}
            <div className="flex flex-col justify-between border border-black bg-white p-8 lg:p-12 min-h-[320px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-truster-foreground/50">
                      COGNITIVE CORE
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">Autonomous AI Agents</h3>
                  </div>
                  <div className="text-gray-300">
                    <Bot size={48} strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-sm text-truster-foreground/70 leading-relaxed max-w-sm mb-12">
                  Deploy specialized models capable of complex decision-making, natural language processing, and predictive analytics tailored to your data ecosystem.
                </p>
              </div>
              <div>
                <Link href="/services/ai" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                  Discover AI <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Workflow Automation */}
            <div className="flex flex-col justify-center border border-black bg-white p-8 lg:p-12 min-h-[320px]">
              <div className="text-blue-600 mb-6">
                 <Workflow size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Workflow Automation</h3>
              <p className="text-sm text-truster-foreground/70 leading-relaxed max-w-sm">
                Eliminate friction. Connect disparate APIs and legacy systems into seamless, event-driven pipelines.
              </p>
            </div>

            {/* Card 3: Web & Mobile Apps */}
            <div className="flex flex-col justify-center border border-black bg-[#0047FF] text-white p-8 lg:p-12 min-h-[320px]">
              <div className="mb-6">
                 <Code2 size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Web & Mobile Apps</h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                Swiss-designed, high-performance interfaces built on robust, scalable modern frameworks.
              </p>
            </div>

            {/* Card 4: SaaS Architecture */}
            <div className="relative flex flex-col justify-center border border-black bg-[#EAEAEA] p-8 lg:p-12 min-h-[320px] overflow-hidden">
              <div className="absolute inset-0 swiss-grid opacity-50 mix-blend-multiply pointer-events-none" />
              <div className="relative z-10 flex justify-between items-start mb-8">
                 <div>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-truster-foreground/50">
                      INFRASTRUCTURE
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">SaaS Architecture</h3>
                 </div>
                 <div className="text-black">
                    <Network size={32} strokeWidth={2} />
                 </div>
              </div>
              <p className="relative z-10 text-sm text-truster-foreground/70 leading-relaxed max-w-sm mt-auto">
                Multi-tenant foundation. We design architectures that handle exponential scale, ensuring data isolation, robust security, and 99.99% uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INNOVATION BRIEF SECTION ── */}
      <section className="w-full bg-[#F5F5F5] pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          <div className="bg-black text-white p-8 sm:p-12 lg:p-24 flex flex-col lg:flex-row gap-12 lg:gap-24 relative overflow-hidden">
             {/* Gradient glow effect from screenshot */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
             
             <div className="flex-1 relative z-10">
               <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                 INTELLIGENCE DELIVERED
               </span>
               <h2 className="mb-8 text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl">
                 The Innovation<br />Brief.
               </h2>
               <p className="text-lg text-white/70 max-w-md">
                 Monthly insights on AI advancements, architectural patterns, and systemic efficiency. No noise, just signal.
               </p>
             </div>

             <div className="flex-1 flex flex-col justify-center relative z-10">
                <form className="w-full max-w-md">
                   <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                     EMAIL ADDRESS
                   </label>
                   <input 
                     type="email" 
                     placeholder="hello@example.com"
                     className="w-full bg-transparent border border-white/20 p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors mb-6"
                     required
                   />
                   <button 
                     type="submit"
                     className="w-full sm:w-auto bg-white text-black px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
                   >
                     Subscribe
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
