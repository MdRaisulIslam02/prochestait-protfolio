"use client";

import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import type { Partner } from "@/types";

interface PartnersProps {
  partners?: Partner[];
}

export default function Partners({ partners = [] }: PartnersProps) {
  const { t } = useI18n();
  const displayPartners = partners.filter((partner) => partner.is_active !== false);

  if (displayPartners.length === 0) {
    return null;
  }

  return (
    <section id="partners" className="bg-(--bg) py-20 lg:py-28">
      <div className="container">
        <Reveal variant="fade-up" className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full border border-(--border) bg-(--surface) px-4 py-1 text-sm text-(--text-muted)">
            {t("partners.eyebrow")}
          </span>

          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-bold text-(--text)">
            {t("partners.title")}
          </h2>

          <p className="mt-3 leading-relaxed text-(--text-muted)">
            {t("partners.description")}
          </p>
        </Reveal>

        <Reveal variant="stagger" className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {displayPartners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url || "#"}
              target={partner.url ? "_blank" : undefined}
              rel={partner.url ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-center rounded-2xl border border-(--border) bg-(--surface) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-primary)/40 hover:shadow-lg"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
              />
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-5 py-2 text-sm text-(--text-muted)">
            <span className="h-2 w-2 rounded-full bg-(--brand-accent)" />
            {t("partners.stats")}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
