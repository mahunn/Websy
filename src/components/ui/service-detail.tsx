"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/cn";
import {
  CartIcon,
  BuildingIcon,
  TargetIcon,
  BoltIcon,
  CheckIcon,
  ArrowRightIcon,
  type IconKey,
} from "@/components/ui/icons";

const iconMap = {
  cart: CartIcon,
  building: BuildingIcon,
  target: TargetIcon,
  bolt: BoltIcon,
} satisfies Partial<Record<IconKey, React.FC<React.SVGProps<SVGSVGElement>>>>;

type ServiceDetailProps = {
  slug: string;
  icon: keyof typeof iconMap;
  reversed?: boolean;
};

export function ServiceDetail({ slug, icon, reversed }: ServiceDetailProps) {
  const { messages: m } = useLanguage();
  const service = m.services.items[slug];
  const p = m.pages.services;
  const Icon = iconMap[icon];

  return (
    <article
      id={slug}
      className={cn(
        "grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>div:first-child]:order-2"
      )}
    >
      <div>
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-paper-surface text-brand shadow-soft">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {service.description}
        </p>
        <div className="mt-6 rounded-2xl border border-line bg-paper-alt/60 px-4 py-3 text-sm text-ink-muted">
          <span className="mr-1 font-semibold text-brand">{p.idealFor}</span>
          {service.idealFor}
        </div>
      </div>
      <div className="rounded-2xl p-7 glass sm:p-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
          {p.whatYouGet}
        </h3>
        <ul className="mt-5 space-y-3">
          {service.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-ink sm:text-base"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <CheckIcon className="h-3 w-3" strokeWidth={2.4} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
        >
          {p.discuss}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
