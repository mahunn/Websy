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
          "pointer-events-auto w-full max-w-4xl",
          "rounded-2xl transition-all duration-300",
          scrolled
            ? [
                "bg-white/80 backdrop-blur-md",
                "border border-white/70",
                "shadow-[0_8px_32px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.90)]",
              ].join(" ")
            : [
                "bg-white/70 backdrop-blur-md",
                "border border-white/55",
                "shadow-[0_4px_24px_rgba(15,23,42,0.07),inset_0_1px_0_rgba(255,255,255,0.80)]",
              ].join(" ")
        )}
      >
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
                    "rounded-xl px-3 py-1.5 text-sm font-medium transition-all duration-150",
                    active
                      ? "bg-white/80 text-ink shadow-sm border border-white/70"
                      : "text-ink-muted hover:bg-white/60 hover:text-ink"
                  )}
                >
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
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/60 bg-white/50 text-ink-muted backdrop-blur-sm transition-all hover:bg-white/75 hover:text-ink lg:hidden"
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
          <div ref={dropdownRef} className="border-t border-white/40 px-4 pb-4 pt-3 lg:hidden">
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
                      "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-white/70 text-ink"
                        : "text-ink-muted hover:bg-white/55 hover:text-ink"
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
  );
}
