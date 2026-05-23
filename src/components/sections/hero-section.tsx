"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site-config";

const stats = [
  { value: "12+", label: "Sites Built" },
  { value: "48h", label: "First Draft" },
  { value: "7d", label: "Avg Launch" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.22] pointer-events-none select-none">
        <Image src="/hero-bg.png" alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/50 to-paper" />
      </div>

      <div className="container-page relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">

          {/* One-liner */}
          <h1 className="text-[2.8rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-[5rem]">
            Websites that<br />
            <span className="text-brand">actually convert.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-base text-ink-muted sm:text-lg">
            Fast. Beautiful. Built for sales.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={getWhatsAppUrl()} variant="primary" className="min-w-[200px]">
              Start a Project
            </Button>
            <Button href="/work" variant="secondary" className="min-w-[200px]">
              See Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-sm grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-5">
                <span className="text-xl font-bold text-brand sm:text-2xl">{s.value}</span>
                <span className="mt-0.5 text-[11px] text-ink-subtle">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Service chips */}
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {["🛒 Ecommerce", "🎯 Landing Pages", "🏢 Business Sites", "⚡ Performance"].map((item) => (
              <Link key={item} href="/services" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-ink-muted transition-all hover:border-brand/30 hover:text-ink">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
