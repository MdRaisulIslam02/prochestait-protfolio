"use client";

import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/I18nProvider";

const KEY_FEATURES = [
  { k: "cart", n: "cart", c: "#10b981" },
  { k: "fraud", n: "shield", c: "#2563eb" },
  { k: "ban", n: "ban", c: "#ec4899" },
  { k: "file", n: "file", c: "#a855f7" },
  { k: "truck", n: "truck", c: "#f59e0b" },
  { k: "coin", n: "coin", c: "#10b981" },
  { k: "list", n: "list", c: "#0ea5e9" },
  { k: "grid", n: "grid", c: "#a855f7" },
  { k: "chart", n: "chart", c: "#10b981" },
  { k: "box", n: "box", c: "#f59e0b" },
  { k: "invoice", n: "invoice", c: "#ef4444" },
  { k: "star", n: "star", c: "#10b981" },
];

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="relative overflow-hidden py-16 lg:py-20 bg-(--bg) transition-colors duration-300">
      <Container>
        <Reveal variant="fade-up" className="flex flex-col items-center text-center mb-10 lg:mb-14 gap-3">
          <span className="inline-flex items-center rounded-full bg-(--brand-primary)/10 px-3 py-1 text-sm font-medium text-(--brand-primary)">
            {t("features.eyebrow")}
          </span>
          <h2 className="text-[clamp(24px,4vw,38px)] font-bold leading-[1.15] tracking-tight text-(--text) max-w-2xl">
            {t("features.title")}
          </h2>
          <p className="max-w-[65ch] text-[15px] lg:text-[16px] leading-relaxed text-(--text-muted)">
            {t("features.description")}
          </p>
        </Reveal>

        <Reveal variant="stagger" stagger={0.03} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {KEY_FEATURES.map((f) => (
            <div
              key={f.k}
              className="group relative flex items-start gap-4 rounded-xl border border-(--border) bg-(--surface) p-4 transition-all duration-300 hover:border-(--border-strong) hover:bg-[color-mix(in_oklab,var(--surface)_90%,var(--hover-color))]"
              style={{ '--hover-color': f.c } as React.CSSProperties}
            >
              <div 
                className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-(--surface-2) text-(--text-muted) transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--hover-color)] group-hover:bg-transparent"
              >
                <Icon name={f.n as any} size={20} />
              </div>

              <div className="flex flex-col">
                <h3 className="mb-1 text-[15px] font-semibold tracking-tight text-(--text) transition-colors duration-300">
                  {t(`features.items.${f.k}.title`)}
                </h3>
                <p className="text-[13px] leading-relaxed text-(--text-muted)">
                  {t(`features.items.${f.k}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
