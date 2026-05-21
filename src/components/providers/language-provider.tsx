"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, getMessages, type Locale, type Messages } from "@/lib/i18n";

const STORAGE_KEY = "websy-locale";

type LanguageContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "bn" || stored === "en") return stored;
  } catch {}
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
  }, [locale]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === "bn" ? "en" : "bn")),
    []
  );

  const value = useMemo(
    () => ({ locale, messages: getMessages(locale), setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
