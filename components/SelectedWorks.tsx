"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { STATIC_PROJECTS } from "@/lib/projects-fallback";

const AUTO_TAB_DELAY = 3200;

export default function SelectedWorks() {
  const { locale } = useI18n();
  const [activeTab, setActiveTab] = useState(0);

  const copy = {
    eyebrow: locale === "bn" ? "নির্বাচিত কাজ" : "Selected Work",
    title:
      locale === "bn"
        ? "আমাদের তৈরি কাজগুলো এক নজরে দেখুন।"
        : "See what our team has built.",
    description:
      locale === "bn"
        ? "ক্যাটাগরি বদলালে সেই কাজগুলোর ছবিই দেখাবে। চাইলে নিজে ট্যাব বেছে দেখুন, না হলে এটি নিজে নিজে বদলাবে।"
        : "Explore real project visuals by category. Pick a tab or let the showcase move through each group automatically.",
    cta: locale === "bn" ? "সম্পূর্ণ পোর্টফোলিও দেখুন" : "View full portfolio",
  };

  const projects = useMemo(
    () =>
      STATIC_PROJECTS.filter((project) => project.image).map((project) => ({
        ...project,
        title: project.title[locale],
        description: project.description[locale],
      })),
    [locale],
  );

  const tabs = useMemo(() => {
    const categories = Array.from(new Set(projects.map((project) => project.category)));
    return [
      {
        label: locale === "bn" ? "সব কাজ" : "All Work",
        projects,
      },
      ...categories.map((category) => ({
        label: category,
        projects: projects.filter((project) => project.category === category),
      })),
    ].filter((tab) => tab.projects.length > 0);
  }, [locale, projects]);

  const active = tabs[activeTab] ?? tabs[0];
  const visibleProjects = active?.projects.slice(0, 5) ?? [];

  useEffect(() => {
    if (tabs.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveTab((current) => (current + 1) % tabs.length);
    }, AUTO_TAB_DELAY);

    return () => window.clearInterval(timer);
  }, [tabs.length]);

  useEffect(() => {
    setActiveTab(0);
  }, [locale]);

  return (
    <section id="selected-work" className="selected-work-showcase">
      <Container width="wide">
        <Reveal variant="fade-up" className="selected-work-head">
          <div>
            <span className="selected-work-eyebrow">{copy.eyebrow}</span>
            <h2 className="selected-work-title">{copy.title}</h2>
          </div>
          <p className="selected-work-desc">{copy.description}</p>
        </Reveal>

        <Reveal variant="fade-up" className="selected-work-tabs" aria-label={copy.eyebrow}>
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              className={`selected-work-tab ${activeTab === index ? "selected-work-tab-active" : ""}`}
              aria-pressed={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <Reveal key={active?.label} variant="stagger" className="selected-work-gallery">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="selected-work-image-card"
              aria-label={project.title}
            >
              <img src={project.image ?? ""} alt={project.title} />
            </Link>
          ))}
        </Reveal>

        <Reveal delay={0.12} className="selected-work-cta">
          <Link href="/portfolio" className="selected-work-link">
            {copy.cta}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
