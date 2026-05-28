"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { getWhatsAppUrl, mainNavHrefs } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { messages: m } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  const navItems = mainNavHrefs.map((item) => ({
    href: item.href,
    label: m.nav[item.key],
  }));

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      {/* ── Floating pill ── */}
      <div
        className={cn(
          "nav-pill pointer-events-auto w-full max-w-4xl",
          scrolled && "nav-pill--scrolled"
        )}
      >
        <div className="nav-pill__tint" aria-hidden />
        <div className="nav-pill__inner">
        <div className="flex h-14 items-center gap-2 px-4 sm:px-5">
          {/* Logo */}
          <Logo compact className="shrink-0 mr-2" />

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center gap-0.5 lg:flex" aria-label="Main">
            {navItems.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  className={cn(
                    "relative rounded-xl px-3.5 py-2 text-[12px] font-semibold tracking-wide transition-all duration-200",
                    active
                      ? "text-brand"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-[1] rounded-xl border border-brand/15 bg-brand/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset]"
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitcher className="shrink-0" />

            <Button
              href={getWhatsAppUrl()}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {m.nav.cta}
            </Button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-line bg-paper-surface/80 text-ink-muted transition-all hover:bg-paper-alt hover:text-ink lg:hidden"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — inside the pill */}
        {open && (
          <div ref={dropdownRef} className="border-t border-line px-4 pb-4 pt-3 lg:hidden">
            <nav className="flex flex-col gap-0.5" aria-label="Mobile">
              {navItems.map((link) => {
                const active =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch
                    className={cn(
                      "rounded-xl px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                      active
                        ? "bg-brand/[0.07] text-brand"
                        : "text-ink-muted hover:bg-brand/[0.04] hover:text-ink"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 sm:hidden">
              <Button href={getWhatsAppUrl()} variant="primary" size="sm" className="w-full">
                {m.nav.cta}
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
