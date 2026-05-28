"use client";

import {
  BoltIcon,
  PaletteIcon,
  DeviceIcon,
  SearchIcon,
  ChatBubbleIcon,
  TagIcon,
} from "@/components/ui/icons";
import { useLanguage } from "@/components/providers/language-provider";

const chipIcons = [BoltIcon, PaletteIcon, DeviceIcon, SearchIcon, ChatBubbleIcon, TagIcon];

export function ValuePropsSection() {
  const { messages: m } = useLanguage();
  const home = m.home;

  return (
    <section className="section-pad relative z-10">
      <div className="container-page">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {home.whyTitle}{" "}
            <span className="text-shimmer">{home.whyTitleHighlight}</span>
          </h2>
          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-ink-subtle sm:block">
            {home.whySubtitle}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {home.whyChips.map((label, i) => {
            const Icon = chipIcons[i] ?? BoltIcon;
            return (
              <div
                key={label}
                className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl glass glass-hover px-4 py-7 text-center"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="icon-chip">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold leading-tight text-ink-muted transition-colors group-hover:text-ink">
                  {label}
                </p>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
