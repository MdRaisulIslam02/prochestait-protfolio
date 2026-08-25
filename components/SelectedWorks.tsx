"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { STATIC_PROJECTS } from "@/lib/projects-fallback";

const FEATURED_PROJECTS = STATIC_PROJECTS.filter((project) => project.featured).slice(0, 3);

export default function SelectedWorks() {
  const { locale } = useI18n();

  const copy = {
    eyebrow: locale === "bn" ? "নির্বাচিত কাজ" : "Selected Work",
    title:
      locale === "bn"
        ? "যে ধরনের কাজ দেখে ক্লায়েন্টরা সিদ্ধান্ত নেয়।"
        : "Proof that helps clients decide faster.",
    description:
      locale === "bn"
        ? "ই-কমার্স, ERP, CRM এবং গ্রোথ প্রজেক্টের কিছু নমুনা — যাতে আপনি আমাদের কাজের ধরন বুঝতে পারেন।"
        : "A focused look at e-commerce, ERP, CRM, and growth projects so you can judge the shape and quality of our work.",
    cta: locale === "bn" ? "সম্পূর্ণ পোর্টফোলিও দেখুন" : "View full portfolio",
  };

  const projects = FEATURED_PROJECTS.map((project) => ({
    ...project,
    title: project.title[locale],
    description: project.description[locale],
  }));

  return (
    <section id="selected-work" className="bg-(--bg-soft) py-16 md:py-24">
      <Container>
        <Reveal variant="fade-up" className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
          <span className="inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-sm font-medium text-(--brand-primary)">
            {copy.eyebrow}
          </span>
          <h2 className="max-w-3xl text-[clamp(26px,4vw,42px)] font-bold leading-tight text-(--text)">
            {copy.title}
          </h2>
          <p className="max-w-[68ch] text-[15px] leading-relaxed text-(--text-muted) md:text-[16px]">
            {copy.description}
          </p>
        </Reveal>

        <Reveal variant="stagger" className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded-full border border-(--border-strong) bg-(--surface) px-6 text-sm font-semibold text-(--text) transition hover:border-(--brand-primary)/50 hover:bg-(--brand-primary)/10 hover:text-(--brand-primary)"
          >
            {copy.cta}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
