"use client";

import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS: Record<string, React.ReactNode> = {
  ecommerce: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  lms: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  webapp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
  mobile: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
    </svg>
  ),
  pos: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M7 15h0M7 11h0M11 15h0M11 11h0M15 15h0M15 11h0M7 7h10" />
    </svg>
  ),
  software: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

const SPEC_KEYS = ["ecommerce", "lms", "webapp", "mobile", "pos", "software"] as const;

const ACCENT_COLORS = [
  "var(--brand-primary)",
  "var(--blue)",
  "var(--teal)",
  "var(--green)",
  "var(--brand-accent)",
  "var(--pink)",
];

export default function AboutSpecializations() {
  const { t } = useI18n();

  return (
    <section className="bg-(--bg) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("about.specializations.eyebrow")}
          title={t("about.specializations.title")}
          subtitle={t("about.specializations.subtitle")}
        />

        <Reveal variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPEC_KEYS.map((key, i) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-7 transition-all duration-300 hover:-translate-y-1 hover:border-(--border-strong) hover:shadow-xl"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                style={{
                  background: `color-mix(in oklab, ${ACCENT_COLORS[i]} 12%, transparent)`,
                  color: ACCENT_COLORS[i],
                }}
              >
                {ICONS[key]}
              </div>

              <h3 className="mb-2 text-[17px] font-bold text-(--text)">
                {t(`about.specializations.items.${key}`)}
              </h3>
              <p className="text-sm leading-relaxed text-(--text-muted)">
                {t(`about.specializations.descriptions.${key}`)}
              </p>

              {/* hover accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-t-2xl"
                style={{ background: ACCENT_COLORS[i] }}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
