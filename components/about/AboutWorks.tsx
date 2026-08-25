"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function AboutWorks() {
  const { t, locale } = useI18n();

  const featured = projects
    .filter((p) => p.featured)
    .slice(0, 3)
    .map((p) => ({
      ...p,
      title: p.title[locale],
      description: p.description[locale],
    }));

  if (featured.length === 0) return null;

  return (
    <section className="bg-(--bg) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("about.works.eyebrow")}
          title={t("about.works.title")}
          subtitle={t("about.works.subtitle")}
        />

        <Reveal variant="stagger" className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-(--border-strong) bg-(--surface) px-8 text-sm font-semibold text-(--text) transition-all duration-200 hover:border-(--brand-primary)/50 hover:bg-(--brand-primary)/8 hover:text-(--brand-primary)"
          >
            {t("about.works.viewAll")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
