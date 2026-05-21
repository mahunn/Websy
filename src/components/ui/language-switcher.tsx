"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, messages } = useLanguage();

  const options = [
    { code: "bn" as const, short: "বাং", full: "বাংলা" },
    { code: "en" as const, short: "EN", full: "EN" }
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/50 bg-white/55 p-0.5 backdrop-blur-md",
        className
      )}
      role="group"
      aria-label={messages.lang.label}
    >
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLocale(opt.code)}
          className={cn(
            "rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 sm:px-3 sm:py-1",
            locale === opt.code
              ? "bg-ink text-paper-surface"
              : "text-ink-subtle hover:text-ink"
          )}
          aria-pressed={locale === opt.code}
          title={opt.full}
        >
          <span className="sm:hidden">{opt.short}</span>
          <span className="hidden sm:inline">{opt.full}</span>
        </button>
      ))}
    </div>
  );
}
