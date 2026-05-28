"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import {
  ChatBubbleIcon,
  LightbulbIcon,
  BoltIcon,
  RocketIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icons";

const stepIcons = [ChatBubbleIcon, LightbulbIcon, BoltIcon, RocketIcon];
const durations = ["Day 1", "Day 1–2", "Day 2–3", "Day 5–7"];

export function ProcessPreviewSection() {
  const { messages: m } = useLanguage();
  const home = m.home;

  return (
    <section className="section-pad relative z-10">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">{m.process.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {home.processTitlePrefix}{" "}
              <span className="text-shimmer">{home.processTitleHighlight}</span>
            </h2>
          </div>
          <Link href="/process" className="link-arrow shrink-0">
            {m.process.viewAll}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {m.process.items.map((step, i) => {
            const Icon = stepIcons[i] ?? ChatBubbleIcon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={step.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl p-6 glass glass-hover"
              >
                {i < m.process.items.length - 1 && (
                  <span
                    className="absolute right-[-7px] top-9 z-10 hidden h-3 w-3 rounded-full border border-line bg-paper-surface lg:block"
                    aria-hidden
                  />
                )}

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-wider text-brand">
                    {num}
                  </span>
                  <span className="rounded-full border border-line bg-paper-alt/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                    {durations[i]}
                  </span>
                </div>

                <span className="mt-5 icon-chip">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-base font-bold text-ink transition-colors group-hover:text-brand">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>

                <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
