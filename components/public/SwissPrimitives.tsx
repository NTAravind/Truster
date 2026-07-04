"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-current/60",
        className
      )}
    >
      <span className="h-[1px] w-12 bg-current/30" />
      <span>{children}</span>
    </div>
  );
}

export function SwissSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("border-b border-current/10 py-24 md:py-32", className)}>
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16 xl:px-24">{children}</div>
    </section>
  );
}

export function MaterialLink({
  href,
  children,
  inverse = false,
}: {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-14 items-center justify-center gap-4 overflow-hidden rounded-none border px-8 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-truster-primary/20",
        inverse
          ? "border-truster-foreground/20 text-truster-foreground hover:bg-truster-foreground hover:text-white"
          : "border-white/20 text-white hover:bg-white hover:text-truster-primary"
      )}
    >
      <span className="relative z-10 flex items-center gap-4">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
      </span>
    </Link>
  );
}

export function WhatsAppLink({
  phone,
  children,
}: {
  phone: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`https://wa.me/${phone ?? ""}`}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex h-14 items-center justify-center gap-4 overflow-hidden rounded-none border border-current/20 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-current transition-colors hover:bg-current hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-truster-primary/20"
    >
      <span className="relative z-10 flex items-center gap-4 group-hover:text-white mix-blend-difference">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
      </span>
    </a>
  );
}

export function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col border-t border-current/20 pt-6">
      <div className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-current">{value}</div>
      <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-current/60">{label}</div>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
