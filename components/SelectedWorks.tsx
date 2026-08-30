"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { STATIC_PROJECTS } from "@/lib/projects-fallback";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const AUTO_TAB_DELAY = 3200;
const ITEMS_PER_TAB = 5;
const WORK_TABS = [
  { label: "All Work", labelBn: "সব কাজ", category: null, icon: "grid" },
  { label: "E-commerce", labelBn: "ই-কমার্স", category: "E-commerce", icon: "cart" },
  { label: "B2B", labelBn: "বিটুবি", category: "B2B Platform", icon: "store" },
  { label: "Delivery", labelBn: "ডেলিভারি", category: "Delivery App", icon: "truck" },
  { label: "Enterprise", labelBn: "এন্টারপ্রাইজ", category: "Enterprise", icon: "box" },
  { label: "Logistics", labelBn: "লজিস্টিকস", category: "Logistics", icon: "truck" },
  { label: "Export", labelBn: "এক্সপোর্ট", category: "Export Platform", icon: "globe" },
  { label: "EdTech", labelBn: "এডটেক", category: "EdTech", icon: "book" },
  { label: "API", labelBn: "এপিআই", category: "API / Middleware", icon: "code" },
  { label: "Retail", labelBn: "রিটেইল", category: "Retail", icon: "shop" },
];

type DisplayProject = {
  slug: string;
  title: string;
  image: string | null;
};

const fillProjectsForTab = (projects: DisplayProject[]) => {
  if (projects.length === 0) return [];
  if (projects.length >= ITEMS_PER_TAB) return projects;

  return Array.from({ length: ITEMS_PER_TAB }, (_, index) => projects[index % projects.length]);
};

export default function SelectedWorks() {
  const { locale } = useI18n();
  const [activeTab, setActiveTab] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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
    return WORK_TABS.map((tab) => ({
      label: locale === "bn" ? tab.labelBn : tab.label,
      icon: tab.icon,
      projects: tab.category
        ? projects.filter((project) => project.category === tab.category)
        : projects,
    })).filter((tab) => tab.projects.length > 0);
  }, [locale, projects]);

  const active = tabs[activeTab] ?? tabs[0];
  const visibleProjects = fillProjectsForTab(active?.projects ?? []);

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

  useEffect(() => {
    setIsPaused(false);
  }, [activeTab]);

  const toggleGalleryAutoplay = () => {
    if (!swiper?.autoplay) return;

    if (isPaused) {
      swiper.autoplay.start();
      setIsPaused(false);
      return;
    }

    swiper.autoplay.stop();
    setIsPaused(true);
  };

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
              <Icon name={tab.icon} size={13} />
              {tab.label}
            </button>
          ))}
        </Reveal>

        <Reveal variant="fade-up" className="selected-work-gallery-head">
          <span>{active?.label}</span>
          <div className="selected-work-controls">
            <button type="button" aria-label="Previous image" onClick={() => swiper?.slidePrev()}>
              <Icon name="arrow_left" size={18} />
            </button>
            <button type="button" aria-label={isPaused ? "Play images" : "Pause images"} onClick={toggleGalleryAutoplay}>
              <Icon name={isPaused ? "play" : "pause"} size={18} />
            </button>
            <button type="button" aria-label="Next image" onClick={() => swiper?.slideNext()}>
              <Icon name="arrow_right" size={18} />
            </button>
          </div>
        </Reveal>

        <Reveal key={active?.label} variant="fade-up" className="selected-work-gallery-wrap">
          <Swiper
            key={active?.label}
            modules={[Autoplay]}
            loop={visibleProjects.length > 5}
            spaceBetween={16}
            slidesPerView={1.15}
            autoplay={{
              delay: 2400,
              disableOnInteraction: false,
            }}
            speed={700}
            onSwiper={setSwiper}
            breakpoints={{
              560: { slidesPerView: 2.1, spaceBetween: 16 },
              820: { slidesPerView: 3.1, spaceBetween: 18 },
              1100: { slidesPerView: 4.1, spaceBetween: 18 },
              1320: { slidesPerView: 5, spaceBetween: 18 },
            }}
            className="selected-work-swiper"
          >
            {visibleProjects.map((project, index) => (
              <SwiperSlide key={`${project.slug}-${index}`}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="selected-work-image-card"
                  aria-label={project.title}
                >
                  <img src={project.image ?? ""} alt={project.title} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
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
