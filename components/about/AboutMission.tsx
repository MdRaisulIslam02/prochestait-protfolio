"use client";

import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { AboutSetting } from "@/types";

interface Props {
  setting: AboutSetting;
}

export default function AboutMission({ setting }: Props) {
  const { t, locale } = useI18n();

  const mission = locale === "bn" ? setting.mission_bn : setting.mission_en;
  const vision = locale === "bn" ? setting.vision_bn : setting.vision_en;

  if (!mission && !vision) return null;

  return (
    <section className="bg-(--bg) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("about.mission.eyebrow")}
          title={t("about.mission.title")}
        />

        <Reveal variant="stagger" className="mt-12 grid gap-6 md:grid-cols-2">
          {mission && (
            <div className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-8 transition-all duration-300 hover:border-(--border-strong) hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--brand-primary) 12%, transparent)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-bold text-(--text)">
                {t("about.mission.missionLabel")}
              </h3>
              <p className="text-[15px] leading-relaxed text-(--text-muted)">{mission}</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(circle at 20% 50%, color-mix(in oklab, var(--brand-primary) 4%, transparent), transparent 60%)" }} />
            </div>
          )}

          {vision && (
            <div className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-8 transition-all duration-300 hover:border-(--border-strong) hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--brand-accent) 12%, transparent)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-bold text-(--text)">
                {t("about.mission.visionLabel")}
              </h3>
              <p className="text-[15px] leading-relaxed text-(--text-muted)">{vision}</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(circle at 20% 50%, color-mix(in oklab, var(--brand-accent) 4%, transparent), transparent 60%)" }} />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
