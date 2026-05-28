"use client";

import {
  BoltIcon,
  StarIcon,
  TrendingUpIcon,
  SearchIcon,
} from "@/components/ui/icons";
import { useLanguage } from "@/components/providers/language-provider";

const pillarIcons = [BoltIcon, StarIcon, TrendingUpIcon, SearchIcon];

export function TrustSection() {
  const { messages: m } = useLanguage();

  return (
    <section className="relative z-10 py-12">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {m.trust.pillars.map((item, i) => {
            const Icon = pillarIcons[i] ?? BoltIcon;
            return (
              <div
                key={item.headline}
                className="group relative overflow-hidden rounded-2xl glass glass-hover p-5 sm:p-6"
              >
                <span className="icon-chip">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-ink sm:text-base">
                  {item.headline}
                </h3>
                <p className="mt-1 text-[12px] leading-snug text-ink-muted sm:text-xs">
                  {item.blurb}
                </p>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
