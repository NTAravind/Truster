"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

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

        {/* Right Section (Contact Button & Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/contact"
            className="flex h-10 items-center justify-center bg-truster-foreground px-4 sm:px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-truster-primary"
          >
            Contact
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center lg:hidden text-truster-foreground p-2 -mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                <div className="text-2xl font-black tracking-tighter text-truster-foreground">
                  TRUSTER
                </div>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== "/");
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`text-lg font-bold uppercase tracking-[0.1em] transition-colors hover:text-truster-primary ${
                            isActive ? "text-truster-primary" : "text-truster-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
