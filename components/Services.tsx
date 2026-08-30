"use client";

import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import ButtonLink from "@/components/ui/ButtonLink";
import { useQuoteModal } from "./QuoteModalProvider";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const SERVICES = [
  { k: "marketing", n: "megaphone", c: "#4f46e5" },
  { k: "facebook", n: "facebook", c: "#0ea5e9" },
  { k: "SEO", n: "seo", c: "#8b5cf6" },
  { k: "Pixel", n: "globe", c: "#f43f5e" },
  { k: "ecommerce", n: "cart", c: "#ec4899" },
  { k: "web", n: "code", c: "#2563eb" },
  // { k: "mobile", n: "phone", c: "#10b981" },
  // { k: "hosting", n: "server", c: "#a855f7" },
  // { k: "design", n: "palette", c: "#0ea5e9" },
];

export default function Services() {
  const { t, locale } = useI18n();
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="services" className="services-section">
      <div className="container">
        <Reveal variant="stagger" className="services-slider-head">
          <span className="services-slider-eyebrow">{t("services.eyebrow")}</span>
          <h2 className="services-slider-title">{t("services.title")}</h2>
          <p className="services-slider-sub">{t("services.description")}</p>
        </Reveal>

        <Reveal variant="fade-up" className="services-slider-wrap">
          <Swiper
            modules={[Autoplay]}
            loop={SERVICES.length > 4}
            spaceBetween={18}
            slidesPerView={1.08}
            slidesPerGroup={1}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            speed={750}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 18 },
              768: { slidesPerView: 2.15, spaceBetween: 20 },
              1024: { slidesPerView: 3.05, spaceBetween: 22 },
              1280: { slidesPerView: 3.65, spaceBetween: 24 },
            }}
            className="services-swiper"
          >
            {SERVICES.map((s) => (
              <SwiperSlide key={s.k}>
                <div className="service-card service-slide-card">
                  <div className="icon-tile mb-4" style={{ background: s.c, width: 48, height: 48, borderRadius: 12 }}>
                    <Icon name={s.n} size={22} />
                  </div>
                  <h3 className="text-[19px] font-semibold mb-2">{t(`services.items.${s.k}.title`)}</h3>
                  <p className="text-[14px] text-(--text-muted) flex-1 mb-6">{t(`services.items.${s.k}.desc`)}</p>

                  <div className="mt-auto pt-5 border-t border-(--border)">
                    <div className="flex items-center gap-2">
                      <ButtonLink
                        href="#"
                        onClick={(e) => { e.preventDefault(); openQuoteModal(); }}
                        variant="primary"
                        size="sm"
                        shape="rounded"
                        className="flex-1 text-[13px] px-2"
                      >
                        {t("nav.cta.quote")}
                      </ButtonLink>
                      <ButtonLink
                        href={`https://wa.me/8801310799699?text=Hi, I am interested in your ${s.k} services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        shape="rounded"
                        className="flex-1 text-[13px] px-2"
                      >
                        <Icon name="whatsapp" size={14} className="text-[#25D366]" />
                        {t("support.whatsapp")}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <Reveal variant="fade-up" className="mt-12 flex justify-center">
          <ButtonLink href="/services" variant="outline" size="lg" shape="pill" className="group">
            {locale === 'en' ? "Browse all services" : "সব সার্ভিস দেখুন"}
            <Icon name="arrow_right" size={16} className="transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
