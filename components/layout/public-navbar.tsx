import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";

const navItems = [
  { label: "Trust Code", href: "/trust-code-solutions" },
  { label: "Arvi Yatra", href: "/arvi-yatra" },
  { label: "Easy to PC", href: "/easy-to-pc" },
  { label: "Blog", href: "/blog" },
];

export function PublicNavbar() {
  return (
    <div className="fixed top-6 z-50 w-full px-6 lg:px-12 pointer-events-none">
      <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between rounded-none border border-truster-foreground/20 bg-white/60 backdrop-blur-xl shadow-sm pointer-events-auto overflow-hidden">
        
        {/* Left Section (Logo) */}
        <div className="flex h-full items-center border-r border-truster-foreground/20 px-8">
          <Link href="/" className="flex items-center gap-1 text-[20px] font-black tracking-tighter text-truster-foreground">
            TRUSTER<sup className="text-[10px] font-bold text-truster-foreground/50 mt-2">®</sup>
          </Link>
        </div>

        {/* Middle Section (Nav Links) */}
        <nav className="hidden h-full flex-1 items-center justify-center gap-12 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex h-full items-center px-4 text-[11px] font-bold uppercase tracking-[0.2em] text-truster-foreground transition-colors hover:text-truster-primary"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-truster-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Section (Icons) */}
        <div className="flex h-full items-center gap-8 border-l border-truster-foreground/20 px-8">
          <Link
            href="/blog"
            aria-label="Search"
            className="text-truster-foreground transition-colors hover:text-truster-primary"
          >
            <Search className="size-4 stroke-[1.5]" />
          </Link>
          <Link
            href="/subscribe"
            aria-label="Account"
            className="text-truster-foreground transition-colors hover:text-truster-primary"
          >
            <User className="size-4 stroke-[1.5]" />
          </Link>
          <Link
            href="/subscribe"
            aria-label="Cart"
            className="text-truster-foreground transition-colors hover:text-truster-primary"
          >
            <ShoppingCart className="size-4 stroke-[1.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
