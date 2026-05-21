import { bn } from "./bn";
import { en } from "./en";
import type { Locale, Messages } from "./types";

export type { Locale, Messages };

const dictionaries: Record<Locale, Messages> = { bn, en };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export const defaultLocale: Locale = "en";
