"use client";

import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/ui/contact-form";
import { useLanguage } from "@/components/providers/language-provider";
import { contact, getWhatsAppUrl } from "@/lib/site-config";

export function ContactPageContent() {
  const { messages: m } = useLanguage();
  const c = m.contact;

  return (
    <>
      <PageHero
        eyebrow={m.nav.contact}
        title={c.heroTitle}
        description={c.heroDesc}
        align="center"
      />
      <section className="section-pad relative z-10 bg-transparent">
        <div className="container-page">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 lg:col-span-5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl p-6 glass glass-hover sm:p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.793 1.453 5.485.002 9.948-4.461 9.95-9.95.002-2.66-1.033-5.159-2.908-7.037C16.608 1.74 14.113.706 11.457.706c-5.49 0-9.953 4.463-9.955 9.953-.002 1.91.501 3.775 1.458 5.378L1.922 22.1l6.125-1.606z" />
                  </svg>
                </span>
                <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {c.whatsappTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.whatsappDesc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors group-hover:text-brand-hover">
                  {c.whatsappCta}
                </span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="group flex flex-col rounded-2xl p-6 glass glass-hover sm:p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand border border-brand/20">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {c.emailTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.emailDesc}
                </p>
                <span className="mt-4 break-all text-sm font-semibold text-brand transition-colors group-hover:text-brand-hover">
                  {contact.email}
                </span>
              </a>

              <div className="rounded-2xl border border-line bg-paper-tint p-6 sm:p-7">
                <p className="text-sm text-ink-muted">
                  <span className="font-semibold text-ink">{c.locationLabel}:</span>{" "}
                  {contact.location}
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  <span className="font-semibold text-ink">{c.foundedBy}:</span>{" "}
                  <span className="font-medium text-ink">{contact.founder}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad relative z-10 border-t border-line bg-transparent">
        <div className="container-page max-w-3xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {c.faqTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">
            {c.faqDesc}
          </p>
          <div className="mt-10">
            <FaqAccordion items={c.faq} />
          </div>
        </div>
      </section>
    </>
  );
}
