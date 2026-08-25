"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Locale, messages, MessageTree } from "./messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getNestedMessage = (tree: MessageTree, key: string): string => {
  const value = key
    .split(".")
    .reduce<unknown>((acc, part) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[part] : undefined), tree);

  return typeof value === "string" ? value : key;
};

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const htmlLang = document.documentElement.getAttribute("data-lang");
    if (htmlLang === "en" || htmlLang === "bn") {
      setLocaleState(htmlLang);
      return;
    }

    const stored = localStorage.getItem("prochesta-lang");
    if (stored === "en" || stored === "bn") {
      setLocaleState(stored);
      return;
    }

    const preferred = (navigator.language || "").toLowerCase().startsWith("bn") ? "bn" : "en";
    setLocaleState(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", locale);
    document.documentElement.setAttribute("lang", locale);
    localStorage.setItem("prochesta-lang", locale);
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: (key: string) => getNestedMessage(messages[locale], key),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return ctx;
}
