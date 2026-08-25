"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5"] as const;

export default function ContactFaq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>("q1");

  return (
    <section className="bg-(--bg-soft) py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          eyebrow={t("contact.faq.eyebrow")}
          title={t("contact.faq.title")}
        />

        <Reveal variant="stagger" className="mt-10 flex flex-col gap-3">
          {FAQ_KEYS.map((key) => {
            const isOpen = open === key;
            return (
              <div
                key={key}
                className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface) transition-all duration-200"
                style={isOpen ? { borderColor: "color-mix(in oklab, var(--brand-primary) 40%, var(--border))" } : {}}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : key)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-(--surface-2)"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-(--text)">
                    {t(`contact.faq.items.${key}.q`)}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                    style={
                      isOpen
                        ? { background: "var(--brand-primary)", color: "white", transform: "rotate(45deg)" }
                        : { background: "var(--surface-2)", color: "var(--text-muted)" }
                    }
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {/* Animated panel */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="border-t border-(--border) px-6 pb-5 pt-4">
                    <p className="text-[14px] leading-relaxed text-(--text-muted)">
                      {t(`contact.faq.items.${key}.a`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
