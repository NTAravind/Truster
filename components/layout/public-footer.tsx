import Link from "next/link";
import { Reveal } from "@/components/public/SwissPrimitives";

const brandLinks = [
  { label: "Trust Code Solutions", href: "/trust-code-solutions" },
  { label: "Arvi Yatra", href: "/arvi-yatra" },
  { label: "Easy to PC", href: "/easy-to-pc" },
];

export function PublicFooter() {
  return (
    <footer className="noise-bg bg-truster-footer text-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 pt-24 pb-12">
        <Reveal>
          <div className="flex items-center gap-6 mb-12">
            <span className="editorial-label text-white/50">NETWORK</span>
            <span className="h-[1px] w-24 bg-white/20" />
            <span className="editorial-label text-white/50">Global</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="text-[15vw] lg:text-[18rem] font-black uppercase tracking-tighter leading-[0.8] -ml-2 lg:-ml-6 mb-16 text-white mix-blend-screen">
            TRUSTER
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12 border-t border-white/20 pt-16">
          <Reveal delay={0.2} className="lg:col-span-6">
            <p className="max-w-xl text-xl leading-8 text-white/70">
              Trusted solutions across business software, travel, and technology. Led by PV Nataraj with 25+ years of experience serving clients globally.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:pl-16 border-t lg:border-t-0 lg:border-l border-white/20 pt-10 lg:pt-0">
            <div>
              <h4 className="mb-6 editorial-label text-truster-primary">Divisions</h4>
              <nav className="grid gap-4">
                {brandLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base text-white/80 transition-colors hover:text-white flex items-center gap-2 group">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-truster-primary">&rarr;</span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="mb-6 editorial-label text-truster-primary">Connect</h4>
              <nav className="grid gap-4">
                <Link href="/blog" className="text-base text-white/80 transition-colors hover:text-white flex items-center gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-truster-primary">&rarr;</span>
                  Insights & Blog
                </Link>
                <Link href="/subscribe" className="text-base text-white/80 transition-colors hover:text-white flex items-center gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-truster-primary">&rarr;</span>
                  Newsletter
                </Link>
                <Link href="/#contact" className="text-base text-white/80 transition-colors hover:text-white flex items-center gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-truster-primary">&rarr;</span>
                  Contact
                </Link>
              </nav>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-6 lg:px-12 py-8 text-xs text-white/50 uppercase tracking-[0.1em] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TRUSTER GROUP.</p>
          <div className="flex gap-8">
            <Link href="#" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="#" className="transition-colors hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
