"use client";

import { useState, useEffect, useRef } from "react";
import { FaPhone, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { useI18n } from "@/i18n/I18nProvider";
import Icon from "./Icon";

const PHONE_INTL = "+8801310799699";
const WA_LINK = "https://wa.me/8801310799699";
const FB_LINK = "https://m.me/prochestait";

const OPTIONS = [
  {
    key: "call",
    labelKey: "support.call",
    href: `tel:${PHONE_INTL}`,
    IconComp: FaPhone,
    bg: "#22c55e",
    shadow: "rgba(34,197,94,.45)",
    delay: 120,
    target: undefined as string | undefined,
  },
  {
    key: "whatsapp",
    labelKey: "support.whatsapp",
    href: WA_LINK,
    IconComp: FaWhatsapp,
    bg: "#25D366",
    shadow: "rgba(37,211,102,.45)",
    delay: 60,
    target: "_blank",
  },
  {
    key: "messenger",
    labelKey: "support.messenger",
    href: FB_LINK,
    IconComp: FaFacebookMessenger,
    bg: "#0084FF",
    shadow: "rgba(0,132,255,.45)",
    delay: 0,
    target: "_blank",
  },
];

export default function FloatSupport() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onMouse = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`float-support${open ? " is-open" : ""}`}>
      {/* Options */}
      <div className="float-support-options" aria-hidden={!open}>
        {OPTIONS.map((opt) => (
          <a
            key={opt.key}
            href={opt.href}
            target={opt.target}
            rel={opt.target ? "noopener noreferrer" : undefined}
            className="float-option"
            style={
              {
                "--opt-bg": opt.bg,
                "--opt-shadow": opt.shadow,
                "--opt-delay": `${opt.delay}ms`,
              } as React.CSSProperties
            }
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <span className="float-option-label">{t(opt.labelKey)}</span>
            <span className="float-option-icon">
              <opt.IconComp size={20} />
            </span>
          </a>
        ))}
      </div>

      {/* Trigger */}
      <button
        className="float-support-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t("support.ariaClose") : t("support.ariaOpen")}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="float-support-ring" aria-hidden="true" />
        <span className="float-support-ring float-support-ring--2" aria-hidden="true" />

        <span
          className={`float-support-icon-wrap float-support-icon-wrap--headset${open ? " is-open" : ""}`}
          aria-hidden="true"
        >
          <Icon name="headset" size={22} />
        </span>

        <span
          className={`float-support-icon-wrap float-support-icon-wrap--close${open ? " is-open" : ""}`}
          aria-hidden="true"
        >
          <Icon name="x" size={20} />
        </span>

        <span className="float-support-tooltip" aria-hidden="true">
          {t("support.tooltip")}
        </span>
      </button>
    </div>
  );
}
