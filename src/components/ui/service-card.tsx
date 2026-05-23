"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";

const icons = {
  cart: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l1.732 6.43m0 0 1.732 6.43A1.125 1.125 0 0 0 8.207 12h7.586a1.125 1.125 0 0 0 1.087-.835l1.732-6.43m-11.136 0h11.136M9 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  ),
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V7.5a2.25 2.25 0 0 1 2.25-2.25h4.5A2.25 2.25 0 0 1 12.75 7.5V21M3.75 10.5h16.5M9 10.5V6m1.5 0V6m1.5 0V6" />
    </svg>
  ),
  target: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 12H18M7.757 14.757l-1.59 1.59M6 12H4.5m7.257-9.243L12 4.5" />
    </svg>
  ),
  bolt: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  )
} as const;

type ServiceCardProps = {
  slug: string;
  icon: keyof typeof icons;
};

export function ServiceCard({ slug, icon }: ServiceCardProps) {
  const { messages: m } = useLanguage();
  const service = m.services.items[slug];

  return (
    <Link
      href={`/services#${slug}`}
      className="group relative flex flex-col rounded-2xl p-7 glass glass-hover sm:p-8"
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-brand border border-white/5 shadow-sm transition-all duration-300 group-hover:bg-brand group-hover:text-white">
        {icons[icon]}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-brand">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted sm:text-base">
        {service.shortDescription}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-transform group-hover:translate-x-0.5">
        {m.services.learnMore}
      </span>
    </Link>
  );
}
