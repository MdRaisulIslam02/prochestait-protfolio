"use client";

import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { useQuoteModal } from "./QuoteModalProvider";

const TAGS = [
  "multiVendor",
  "erpPos",
  "aiMl",
  "dashboards",
  "apiIntegrations",
  "migrations",
];

const STATS = [
  { value: "50+", k: "projectsShipped" },
  { value: "48h", k: "quoteTurnaround" },
  { value: "30m", k: "scopingCall" },
];

export default function CtaSection() {
  const { t } = useI18n();
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="cta" className="cta-section">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-orb a" />
        <div className="cta-orb b" />
        <div className="cta-orb c" />
        <div className="cta-grid" />
      </div>

      <div className="container">
        <div className="cta-inner">
          <Reveal className="cta-left">
            <span className="mono cta-label">
              <span className="cta-label-dot" />
              {t("cta.label")}
            </span>
            <h2 className="cta-heading">
              {t("cta.headingPrefix")} <span className="cta-accent">{t("cta.headingAccent")}</span>
            </h2>
            <p className="cta-body">{t("cta.body")}</p>
            <ul className="cta-tags">
              {TAGS.map((tag, i) => (
                <li key={i}>{t(`cta.tags.${tag}`)}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-left" delay={0.1} className="cta-right">
            <div className="cta-stats">
              {STATS.map((s, i) => (
                <div key={i} className="cta-stat">
                  <strong>{s.value}</strong>
                  <span>{t(`cta.stats.${s.k}`)}</span>
                </div>
              ))}
            </div>

            <div className="cta-actions">
              <button className="btn btn-accent cta-btn" onClick={() => openQuoteModal()}>
                {t("cta.actions.getQuotation")}
                <Icon name="arrow_right" size={16} />
              </button>
              <a className="btn btn-light cta-btn" href="https://wa.me/8801310799699" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} />
                {t("cta.actions.chatOnWhatsapp")}
              </a>
            </div>

            <div className="cta-meta mono">
              <Icon name="dot" size={10} />
              {t("cta.meta")}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
