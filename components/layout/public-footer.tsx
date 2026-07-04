import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="w-full bg-[#F5F5F5] border-t border-black/10 py-8 text-[11px] font-bold uppercase tracking-[0.2em] text-truster-foreground">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-8 px-6 lg:flex-row lg:items-start lg:gap-0 lg:px-12">
        
        <div className="flex-1">
          <span className="text-xl font-black tracking-tighter">TRUSTER</span>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-center lg:text-left text-truster-foreground/60">
            <Link href="/privacy" className="hover:text-truster-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-truster-foreground transition-colors">Terms of Service</Link>
            <Link href="/brand" className="hover:text-truster-foreground transition-colors">Brand Guidelines</Link>
            <Link href="/support" className="hover:text-truster-foreground transition-colors sm:col-start-2 lg:col-start-1">Global Support</Link>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-right text-[10px] text-truster-foreground/50 tracking-[0.1em] normal-case">
          © {new Date().getFullYear()} TRUSTER Ecosystem. Editorial Minimalism & Functional Precision.
        </div>
        
      </div>
    </footer>
  );
}
