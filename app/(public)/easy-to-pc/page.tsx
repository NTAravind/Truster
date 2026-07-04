import Image from "next/image";
import { Bot, Workflow, Code2, Network, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EasyToPcPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-truster-foreground pt-[80px]">
      
      {/* ── HERO SECTION ── */}
      <section className="mx-auto flex w-full max-w-[1600px] flex-col-reverse gap-16 px-6 py-24 lg:flex-row lg:items-center lg:px-12 lg:py-32">
        <div className="flex flex-1 flex-col justify-center">
          <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F73BD]">
            EASY TO PC SOLUTIONS
          </span>
          <h1 className="mb-8 text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
            Automate the<br />Impossible.
          </h1>
          <p className="mb-12 max-w-xl text-lg leading-relaxed text-truster-foreground/80">
            We build sophisticated AI agents, high-performance web applications, and scalable SaaS architectures that redefine operational efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#capabilities"
              className="flex h-12 w-full sm:w-auto items-center justify-center bg-black px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black/90"
            >
              Explore Capabilities
            </Link>
            <Link
              href="/contact"
              className="flex h-12 w-full sm:w-auto items-center justify-center border border-black bg-white px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-gray-50"
            >
              Book Consultation
            </Link>
          </div>
        </div>
        <div className="flex-1 relative flex items-center justify-end">
          {/* Box with offset shadow matching screenshot */}
          <div className="relative w-full max-w-2xl bg-white border border-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <div className="aspect-[16/9] w-full relative">
                <Image
                  src="/images/easy_to_pc_hero.png"
                  alt="AI Automation Eye"
                  fill
                  className="object-contain p-8"
                  priority
                />
             </div>
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
