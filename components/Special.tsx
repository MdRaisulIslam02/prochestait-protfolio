"use client";

import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

const SPECIAL = [
  { k: "security", n: "shield", c: "#10b981" },
  { k: "edit", n: "edit", c: "#ec4899" },
  { k: "support", n: "headset", c: "#0b52ff" },
];

export default function Special() {
  const { t } = useI18n();

  return (
    <section id="special" className="relative py-16 lg:py-20 bg-(--bg) border-t border-b border-(--border)">
      <div className="container">
        <Reveal variant="fade-up" className="flex flex-col items-center text-center mb-10 lg:mb-14 gap-3">
          <span className="inline-flex items-center rounded-full bg-(--brand-accent)/10 px-3 py-1 text-sm font-medium text-(--brand-accent)">
            {t("special.eyebrow")}
          </span>
          <h2 className="text-[clamp(24px,4vw,38px)] font-bold leading-[1.15] tracking-tight text-(--text) max-w-2xl">
            {t("special.title")}
          </h2>
          <p className="max-w-[65ch] text-[15px] lg:text-[16px] leading-relaxed text-(--text-muted)">
            {t("special.description")}
          </p>
        </Reveal>

        <Reveal variant="stagger" className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {SPECIAL.map((s, i) => (
            <div key={i} className="group flex flex-col gap-4 rounded-2xl border border-(--border) bg-(--surface) p-6 transition-all hover:border-(--border-strong) hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div 
                  className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 group-hover:rotate-3" 
                  style={{ backgroundColor: `${s.c}15`, color: s.c }}
                >
                  <Icon name={s.n as any} size={24} />
                </div>
                <h3 className="text-[19px] font-bold text-(--text) leading-tight">{t(`special.items.${s.k}.title`)}</h3>
              </div>
              <p className="text-[14px] leading-relaxed text-(--text-muted) flex-1">
                {t(`special.items.${s.k}.desc`)}
              </p>
              <div className="mt-2 pt-4 border-t border-(--border)">
                <a
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-(--surface-2) px-4 py-2.5 text-[14px] font-semibold text-(--text) transition-all hover:text-white"
                  style={{ '--hover-bg': s.c } as React.CSSProperties}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = s.c; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--surface-2)'; }}
                  href={`https://wa.me/8801310799699?text=Hi, I am interested in your ${s.k} e-commerce special perk.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={16} /> {t("special.cta.whatsapp")}
                </a>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
