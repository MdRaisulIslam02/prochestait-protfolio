"use client";

import { useI18n } from "@/i18n/I18nProvider";
import TeamCards from "@/components/Team";
import type { TeamMember } from "@/types";

interface Props {
  members: TeamMember[];
}

export default function AboutTeam({ members }: Props) {
  const { t } = useI18n();

  if (members.length === 0) return null;

  return (
    <div>
      <div className="bg-(--bg-soft) pt-20 md:pt-28 pb-0">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-[10px] py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-(--brand-primary) before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--brand-accent)">
            {t("about.team.eyebrow")}
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em] text-(--text)">
            {t("about.team.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[17px] text-(--text-muted)">
            {t("about.team.subtitle")}
          </p>
        </div>
      </div>
      <TeamCards members={members} />
    </div>
  );
}
