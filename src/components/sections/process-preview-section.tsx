"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLink } from "@/components/ui/section-link";

export function ProcessPreviewSection() {
  const { messages: m } = useLanguage();

  return (
    <section className="section-pad relative z-10 bg-transparent">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={m.process.eyebrow}
            title={m.process.title}
            description={m.process.description}
          />
          <SectionLink href="/process" label={m.process.viewAll} />
        </div>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {m.process.items.map((step, index) => (
            <li key={step.title}>
              <Link
                href="/process"
                className="group relative flex h-full flex-col rounded-2xl p-6 glass glass-hover"
              >
                <span className="font-mono text-xs font-semibold tracking-wider text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink transition-colors group-hover:text-brand">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
