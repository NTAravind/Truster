"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Trust Code", href: "/trust-code-solutions" },
  { label: "Arvi Yatra", href: "/arvi-yatra" },
  { label: "Easy to PC", href: "/easy-to-pc" },
  { label: "About", href: "/about" },
];

export function PublicNavbar() {
  const pathname = usePathname();
  
  return (
    <div className="fixed top-0 z-50 w-full bg-white border-b border-truster-foreground/20">
      <div className="mx-auto flex h-[80px] w-full max-w-[1600px] items-center justify-between px-6 lg:px-12">
        
        {/* Left Section (Logo) */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-3xl font-black tracking-tighter text-truster-foreground">
            TRUSTER
          </Link>
        </div>

        {/* Middle Section (Nav Links) */}
        <nav className="hidden h-full flex-1 items-center justify-center gap-10 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-full items-center text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-truster-primary ${
                  isActive
                    ? "text-truster-foreground border-b-2 border-truster-foreground"
                    : "text-truster-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section (Contact Button) */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="flex h-10 items-center justify-center bg-truster-foreground px-4 sm:px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-truster-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
