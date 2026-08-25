"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import PackageQuoteModal from "./PackageQuoteModal";

const PACKAGES = [
  {
    k: "starter",
    accent: "#6366f1",
    highlight: false,
    featureKeys: ["f1", "f2", "f3", "f4", "f5", "f6"],
    excludeKeys: ["x1", "x2", "x3"],
  },
  {
    k: "growth",
    accent: "#10b981",
    highlight: true,
    featureKeys: ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"],
    excludeKeys: ["x1"],
  },
  {
    k: "enterprise",
    accent: "#f59e0b",
    highlight: false,
    featureKeys: ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"],
    excludeKeys: [],
  },
];

export default function Packages() {
  const { t } = useI18n();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const closeQuoteModal = () => setSelectedPackage(null);

  return (
    <section id="packages" className="relative py-16 lg:py-24 bg-(--surface-2)">
      <div className="container">
        <Reveal variant="fade-up" className="flex flex-col items-center text-center mb-12 lg:mb-16 gap-3">
          <span className="inline-flex items-center rounded-full bg-(--brand-primary)/10 px-3 py-1 text-sm font-medium text-(--brand-primary)">
            {t("packages.eyebrow")}
          </span>
          <h2 className="text-[clamp(24px,4vw,38px)] font-bold leading-[1.15] tracking-tight text-(--text) max-w-2xl">
            {t("packages.title")}
          </h2>
          <p className="max-w-[65ch] text-[15px] lg:text-[16px] leading-relaxed text-(--text-muted)">
            {t("packages.description")}
          </p>
        </Reveal>

        <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {PACKAGES.map((p, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl bg-(--surface) p-6 lg:p-8 transition-all duration-300 ${p.highlight ? 'border-2 border-[var(--pkg-accent)] shadow-[0_12px_40px_rgba(0,0,0,0.12)] scale-100 lg:scale-105 z-10' : 'border border-(--border) hover:border-(--border-strong) hover:shadow-xl mt-0 lg:mt-4'}`}
              style={{ "--pkg-accent": p.accent } as React.CSSProperties}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--pkg-accent)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  ★ {t("packages.badges.mostPopular")}
                </div>
              )}
              
              <div className="mb-6 border-b border-(--border) pb-6">
                <span className="mb-3 inline-block rounded bg-[color-mix(in_oklab,var(--surface)_85%,var(--pkg-accent))] px-2.5 py-1 text-[12px] font-bold tracking-wide text-[var(--pkg-accent)]">
                  {t(`packages.tiers.${p.k}.tag`)}
                </span>
                <h3 className="mb-2 text-2xl lg:text-3xl font-extrabold text-(--text)">{t(`packages.tiers.${p.k}.name`)}</h3>
                <p className="text-[14px] leading-relaxed text-(--text-muted) min-h-[42px]">{t(`packages.tiers.${p.k}.desc`)}</p>
              </div>
              
              <div className="mb-8 flex flex-col gap-1">
                <span className="text-[13px] font-semibold text-(--text-muted) uppercase tracking-wider">{t("packages.priceFrom")}</span>
                <div className="flex items-baseline gap-1 text-(--text)">
                  <span className="text-2xl font-bold">৳</span>
                  <span className="text-4xl font-extrabold tracking-tight">{t(`packages.tiers.${p.k}.price`)}</span>
                </div>
              </div>
              
              <ul className="mb-8 flex flex-col gap-3.5 flex-1">
                {p.featureKeys.map((key, j) => (
                  <li key={j} className="flex items-start gap-3 text-[14.5px] text-(--text)">
                    <div className="mt-0.5 shrink-0 rounded-full bg-[var(--pkg-accent)] p-[3px] text-white shadow-sm">
                      <Icon name="check" size={10} stroke={3} />
                    </div>
                    <span className="leading-snug">{t(`packages.tiers.${p.k}.features.${key}`)}</span>
                  </li>
                ))}
                {p.excludeKeys.map((key, j) => (
                  <li key={"x" + j} className="flex items-start gap-3 text-[14.5px] text-(--text-muted) opacity-60">
                    <div className="mt-0.5 shrink-0 text-(--text-muted)">
                      <Icon name="x" size={14} stroke={2.5} />
                    </div>
                    <span className="leading-snug line-through decoration-(--border-strong)">{t(`packages.tiers.${p.k}.excludes.${key}`)}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedPackage(t(`packages.tiers.${p.k}.name`))}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[15px] font-bold transition-all duration-300 ${p.highlight ? 'bg-[var(--pkg-accent)] text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-0.5' : 'bg-(--surface-2) text-(--text) hover:bg-[var(--pkg-accent)] hover:text-white'}`}
                >
                  {t("packages.cta.getQuote")} <Icon name="arrow_right" size={16} />
                </button>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex items-center justify-center gap-2 text-sm text-(--text-muted)">
          <span className="font-mono">{t("packages.foot.needDifferent")}</span>
          <a href="#contact" className="inline-flex items-center gap-1 font-semibold text-(--brand-primary) hover:underline">
            {t("packages.foot.customPackage")} <Icon name="arrow_right" size={14} />
          </a>
        </Reveal>
      </div>

      <PackageQuoteModal
        isOpen={selectedPackage !== null}
        onClose={closeQuoteModal}
        packageName={selectedPackage || ""}
      />
    </section>
  );
}
