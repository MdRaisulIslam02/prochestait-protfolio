"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

const STEPS = [
  {
    n: "01",
    k: "discovery",
    icon: "sparkle",
  },
  {
    n: "02",
    k: "design",
    icon: "palette",
  },
  {
    n: "03",
    k: "build",
    icon: "code",
  },
  {
    n: "04",
    k: "launch",
    icon: "shield",
  },
  {
    n: "05",
    k: "support",
    icon: "headset",
  },
];

export default function Process() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const s = STEPS[active];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <Reveal variant="stagger" className="section-head">
          <span className="eyebrow">{t("process.eyebrow")}</span>
          <h2 className="section-title">{t("process.title")}</h2>
          <p className="section-sub">{t("process.description")}</p>
        </Reveal>

        <div className="process-stepper">
          <div className="process-tabs" role="tablist" aria-label={t("process.aria.steps")}>
            {STEPS.map((step, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={active === i}
                aria-controls="process-panel"
                className={`process-tab${active === i ? " is-active" : ""}${i < active ? " is-done" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="process-tab-icon">
                  <Icon name={step.icon} size={18} />
                </span>
                <span className="process-tab-label">{t(`process.steps.${step.k}.title`)}</span>
              </button>
            ))}
          </div>

          <div className="process-track" aria-hidden="true">
            <div
              className="process-track-fill"
              style={{ width: `${(active / (STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div id="process-panel" className="process-panel" key={active} role="tabpanel">
            <div className="process-panel-meta">
              <span className="process-num mono">{s.n}</span>
              <span className="process-duration mono">{t(`process.steps.${s.k}.duration`)}</span>
            </div>
            <h3>{t(`process.steps.${s.k}.title`)}</h3>
            <p>{t(`process.steps.${s.k}.desc`)}</p>
            <ul className="process-bullets">
              {[1, 2, 3].map((bulletIndex) => (
                <li key={bulletIndex}>
                  <Icon name="check" size={14} />
                  {t(`process.steps.${s.k}.bullets.b${bulletIndex}`)}
                </li>
              ))}
            </ul>
            <div className="process-panel-nav">
              <button
                className="process-nav-btn"
                onClick={() => setActive(a => Math.max(0, a - 1))}
                disabled={active === 0}
                aria-label={t("process.aria.prevStep")}
              >
                <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
                {t("process.nav.prev")}
              </button>
              <div className="process-dots" aria-hidden="true">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    className={`process-dot${active === i ? " is-active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`${t("process.aria.goToStep")} ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="process-nav-btn"
                onClick={() => setActive(a => Math.min(STEPS.length - 1, a + 1))}
                disabled={active === STEPS.length - 1}
                aria-label={t("process.aria.nextStep")}
              >
                {t("process.nav.next")}
                <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
