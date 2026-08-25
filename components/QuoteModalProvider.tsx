"use client";

import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import QuoteModal from "./QuoteModal";

type QuoteModalContextValue = {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used within QuoteModalProvider");
  return ctx;
}

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
}
