"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";

type LegalPageContentProps = {
  type: "privacy" | "terms";
};

export function LegalPageContent({ type }: LegalPageContentProps) {
  const { messages: m } = useLanguage();
  const content = type === "privacy" ? m.pages.privacy : m.pages.terms;

  return (
    <div className="section-pad relative z-10 bg-transparent">
      <div className="container-page max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
        >
          {content.back}
        </Link>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {content.title}
        </h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-muted">
          <p>{content.p1}</p>
          <p>{content.p2}</p>
          <p>{content.p3}</p>
        </div>
      </div>
    </div>
  );
}
