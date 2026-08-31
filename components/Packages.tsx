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
    <section id="packages" className="packages-section">
      <div className="container">
        <Reveal variant="fade-up" className="packages-head">
          <span className="packages-eyebrow">
            {t("packages.eyebrow")}
          </span>
          <h2 className="packages-title">
            {t("packages.title")}
          </h2>
          <p className="packages-subtitle">
            {t("packages.description")}
          </p>
        </Reveal>

        <Reveal variant="stagger" className="packages-grid">
          {PACKAGES.map((p, i) => (
            <div
              key={i}
              className={`pkg-card ${p.highlight ? 'pkg-card--featured' : ''}`}
              style={{ "--pkg-accent": p.accent } as React.CSSProperties}
            >
              {p.highlight && (
                <div className="pkg-flag">
                  <Icon name="star" size={12} stroke={2.4} />
                  {t("packages.badges.mostPopular")}
                </div>
              )}
              
              <div className="pkg-head">
                <span className="pkg-tag">
                  {t(`packages.tiers.${p.k}.tag`)}
                </span>
                <h3 className="pkg-name">{t(`packages.tiers.${p.k}.name`)}</h3>
                <p className="pkg-desc">{t(`packages.tiers.${p.k}.desc`)}</p>
              </div>
              
              <div className="pkg-price">
                <span className="pkg-price-from">{t("packages.priceFrom")}</span>
                <strong>
                  <span className="pkg-price-tk">৳</span>
                  <span className="pkg-price-num">{t(`packages.tiers.${p.k}.price`)}</span>
                </strong>
              </div>
              
              <ul className="pkg-features">
                {p.featureKeys.map((key, j) => (
                  <li key={j}>
                    <span className="pkg-check">
                      <Icon name="check" size={10} stroke={3} />
                    </span>
                    <span>{t(`packages.tiers.${p.k}.features.${key}`)}</span>
                  </li>
                ))}
                {p.excludeKeys.map((key, j) => (
                  <li key={"x" + j} className="pkg-excl">
                    <span className="pkg-x">
                      <Icon name="x" size={14} stroke={2.5} />
                    </span>
                    <span>{t(`packages.tiers.${p.k}.excludes.${key}`)}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pkg-action">
                <button
                  type="button"
                  onClick={() => setSelectedPackage(t(`packages.tiers.${p.k}.name`))}
                  className="pkg-quote-btn"
                >
                  {t("packages.cta.getQuote")} <Icon name="arrow_right" size={16} />
                </button>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="pkg-foot">
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
