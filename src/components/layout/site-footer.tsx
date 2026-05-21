"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/ui/logo";
import { contact, footerNav, getWhatsAppUrl, site } from "@/lib/site-config";

const companyLabels = {
  about: "about",
  team: "team",
  process: "process",
  contact: "contact"
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { messages: m } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/40 bg-white/65 backdrop-blur-md">
      <div className="container-page pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Websy home">
              <Logo />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              {m.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-ink-subtle">
              {m.footer.foundedBy}{" "}
              <span className="font-medium text-ink">{contact.founder}</span> · {contact.location}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
              {m.footer.company}
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-brand"
                  >
                    {link.key === "team"
                      ? m.footer.team
                      : m.nav[companyLabels[link.key]]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
              {m.footer.servicesCol}
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-brand"
                  >
                    {link.key === "allServices"
                      ? m.footer.allServices
                      : m.footer.ourWork}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
              {m.footer.contactCol}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-brand"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  className="transition-colors hover:text-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-subtle">
            © {year} {site.name}. {m.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-ink-muted">
            <Link href="/privacy" className="transition-colors hover:text-brand">
              {m.footer.privacy}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand">
              {m.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
