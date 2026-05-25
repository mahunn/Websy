"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";

type PortfolioCardProps = {
  slug: string;
  href: string;
  imageTone: string;
};

const SCREENSHOTS: Record<string, string> = {
  "henley-zone": "/screenshots/henley-zone.png",
  glamora: "/screenshots/glamora.png",
  "mahin-ahmad": "/screenshots/mahin-ahmad.png"
};

export function PortfolioCard({ slug, href }: PortfolioCardProps) {
  const { messages: m } = useLanguage();
  const project = m.portfolio.items[slug];
  const screenshot = SCREENSHOTS[slug];

  return (
    <article className="group overflow-hidden rounded-2xl glass glass-hover">
      <Link href={`/work/${slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-ink-subtle">{project.title}</div>
          )}
        </div>
      </Link>
      <div className="p-5 sm:p-6">
        <span className="badge-ostad border border-brand/10 bg-brand-soft text-brand backdrop-blur-sm">
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
          <Link href={`/work/${slug}`} className="transition-colors hover:text-brand">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link href={`/work/${slug}`} className="text-sm font-semibold text-brand transition-colors hover:text-brand-hover">
            {m.portfolio.viewCase}
          </Link>
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink-subtle transition-colors hover:text-ink">
            {m.portfolio.liveSite}
          </a>
        </div>
      </div>
    </article>
  );
}
