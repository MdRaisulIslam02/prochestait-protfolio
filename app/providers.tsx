"use client";

import { ReactNode } from "react";
import I18nProvider from "@/i18n/I18nProvider";
import Preloader from "@/components/Preloader";
import QuoteModalProvider from "@/components/QuoteModalProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <QuoteModalProvider>
        <Preloader />
        {children}
      </QuoteModalProvider>
    </I18nProvider>
  );
}
