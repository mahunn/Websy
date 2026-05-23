"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { contact, getWhatsAppUrl } from "@/lib/site-config";

const nudges = [
  { icon: "⚡", text: "First draft in 48 hours" },
  { icon: "💬", text: "Reply within 2 hours" },
  { icon: "🔒", text: "No commitment required" },
];

export function CtaSection() {
  return (
    <section id="contact" className="section-pad relative z-10">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl glass">
          {/* Gold top glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
          {/* Background orb */}
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-brand/[0.08] blur-3xl" />

          <div className="grid grid-cols-1 items-start gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: copy */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                  Ready to start?
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                  Let&apos;s build a website your business is proud of
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  Tell us about your project. We&apos;ll get back to you within 2 hours with a clear plan, timeline, and price — no fluff, no pressure.
                </p>
              </div>

              {/* Quick nudges */}
              <ul className="space-y-3">
                {nudges.map((n) => (
                  <li key={n.text} className="flex items-center gap-3 text-sm text-ink-muted">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-base">
                      {n.icon}
                    </span>
                    {n.text}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button href={getWhatsAppUrl()} variant="primary" className="flex-1 justify-center gap-2">
                  <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.793 1.453 5.485.002 9.948-4.461 9.95-9.95.002-2.66-1.033-5.159-2.908-7.037C16.608 1.74 14.113.706 11.457.706c-5.49 0-9.953 4.463-9.955 9.953-.002 1.91.501 3.775 1.458 5.378L1.922 22.1l6.125-1.606zM15.21 11.43c-.29-.145-1.72-.848-1.986-.946-.266-.097-.46-.145-.653.145-.193.29-.748.946-.917 1.138-.17.193-.338.217-.628.072-.29-.145-1.22-.45-2.325-1.434-.86-.767-1.44-1.716-1.608-2.006-.17-.29-.018-.447.127-.59.13-.13.29-.338.435-.508.145-.17.193-.29.29-.483.097-.193.048-.362-.024-.508-.073-.145-.653-1.573-.895-2.153-.235-.568-.475-.49-.653-.5-.17-.008-.362-.01-.555-.01-.193 0-.508.072-.773.362-.266.29-1.014.99-1.014 2.415 0 1.425 1.038 2.802 1.183 2.995.145.193 2.043 3.12 4.949 4.373.69.298 1.23.476 1.65.61.694.22 1.326.19 1.825.115.556-.08 1.72-.7 1.962-1.375.242-.676.242-1.256.17-1.376-.073-.12-.266-.19-.556-.34z" />
                  </svg>
                  WhatsApp Us
                </Button>
                <Button href={`mailto:${contact.email}`} variant="secondary" className="flex-1 justify-center gap-2">
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send an Email
                </Button>
              </div>

              <p className="text-xs text-ink-subtle">
                Or email us at{" "}
                <a href={`mailto:${contact.email}`} className="font-semibold text-brand hover:text-brand-hover hover:underline underline-offset-4 transition-colors">
                  {contact.email}
                </a>
              </p>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
