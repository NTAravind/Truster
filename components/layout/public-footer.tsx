import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function PublicFooter() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-xl text-primary tracking-tight">TRUSTER</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Trusted solutions across business software, travel, and technology. Led by PV Nataraj with 25+ years of experience serving 1000+ clients across India, Africa, and the US.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Brands</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/trust-code-solutions" className="text-sm hover:text-foreground transition-colors">Trust Code Solutions</Link>
              <Link href="/arvi-yatra" className="text-sm hover:text-foreground transition-colors">Arvi Yatra</Link>
              <Link href="/easy-to-pc" className="text-sm hover:text-foreground transition-colors">Easy to PC</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/blog" className="text-sm hover:text-foreground transition-colors">Insights & Blog</Link>
              <Link href="/subscribe" className="text-sm hover:text-foreground transition-colors">Newsletter</Link>
              <Link href="#contact" className="text-sm hover:text-foreground transition-colors">Dedicated Support</Link>
            </nav>
          </div>
        </div>
        
        <Separator className="my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Truster Group. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
