import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl tracking-tight text-primary">
            TRUSTER
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/trust-code-solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Trust Code Solutions
            </Link>
            <Link href="/arvi-yatra" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Arvi Yatra
            </Link>
            <Link href="/easy-to-pc" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Easy to PC
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/blog" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <Button asChild variant="default" className="rounded-full px-6">
            <Link href="/subscribe">Subscribe</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
