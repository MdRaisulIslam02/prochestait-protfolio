"use client";

import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { AboutSetting } from "@/types";

interface Props {
  setting: AboutSetting;
}

const STAT_COLORS = [
  "var(--brand-primary)",
  "var(--brand-accent)",
  "var(--green)",
  "var(--blue)",
];

export default function AboutStats({ setting }: Props) {
  const { t } = useI18n();

  const stats = [
    { value: setting.projects_count, label: t("about.stats.projectsLabel") },
    { value: setting.clients_count, label: t("about.stats.clientsLabel") },
    { value: setting.years_count, label: t("about.stats.yearsLabel") },
    { value: setting.retention_rate, label: t("about.stats.retentionLabel") },
  ];

  return (
    <section className="bg-(--bg-soft) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("about.stats.eyebrow")}
          title={t("about.stats.title")}
        />

        <Reveal variant="stagger" className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-(--border-strong) hover:shadow-xl"
            >
              <div
                className="mb-1 text-[clamp(36px,5vw,52px)] font-bold leading-none tracking-tight"
                style={{ color: STAT_COLORS[i % STAT_COLORS.length] }}
              >
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-(--text-muted)">{stat.label}</p>
              <div
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: STAT_COLORS[i % STAT_COLORS.length] }}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
