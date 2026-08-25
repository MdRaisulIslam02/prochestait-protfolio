"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import type { Testimonial } from "@/types";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const { t } = useI18n();
  const TOTAL = testimonials.length;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToIdx = useCallback((i: number) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const card = vp.children[i] as HTMLElement;
    if (card) vp.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setIdx(i);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIdx((prev) => {
        const next = (prev + 1) % TOTAL;
        const vp = viewportRef.current;
        if (vp) {
          const card = vp.children[next] as HTMLElement;
          if (card) vp.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  // Sync idx when user swipes
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        let closest = 0;
        let minDist = Infinity;
        Array.from(vp.children).forEach((child, i) => {
          const dist = Math.abs((child as HTMLElement).offsetLeft - vp.scrollLeft);
          if (dist < minDist) { minDist = dist; closest = i; }
        });
        setIdx(closest);
      }, 80);
    };
    vp.addEventListener("scroll", onScroll, { passive: true });
    return () => { vp.removeEventListener("scroll", onScroll); clearTimeout(timer); };
  }, []);

  return (
    <section
      id="testimonials"
      className="tm-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <Reveal variant="stagger" className="tm-head">
          <span className="eyebrow">{t("testimonials.eyebrow")}</span>
          <h2 className="section-title" style={{ marginTop: "var(--s-3)" }}>
            {t("testimonials.titlePrefix")}{" "}
            <span style={{ color: "var(--brand-accent)" }}>{t("testimonials.titleHighlight")}</span>.
          </h2>
          <p className="section-sub" style={{ textAlign: "left" }}>
            {t("testimonials.description")}
          </p>
        </Reveal>

        <div className="tm-slider">
          <div className="tm-viewport" ref={viewportRef}>
            {testimonials.map((q, i) => (
              <article
                key={q.id}
                className={`tm-card${idx === i ? " is-active" : ""}`}
                aria-label={`${t("testimonials.aria.from")} ${q.name}`}
              >
                <div className="tm-card-top">
                  <div className="tm-avatar" style={{ background: q.color || '#ddd' }}>
                    {q.initials}
                  </div>
                  <div className="tm-stars" aria-label={`${q.rating} ${t("testimonials.aria.stars")}`}>
                    {Array.from({ length: q.rating }).map((_, k) => (
                      <Icon key={k} name="star" size={13} />
                    ))}
                  </div>
                </div>
                <p className="tm-quote">&ldquo;{q.quote}&rdquo;</p>
                <div className="tm-metric mono">↗ {q.metric}</div>
                <footer className="tm-author">
                  <strong>{q.name}</strong>
                  <span>{q.role}</span>
                </footer>
              </article>
            ))}
          </div>

          <div className="tm-controls">
            <button
              className="tm-arrow"
              onClick={() => scrollToIdx((idx - 1 + TOTAL) % TOTAL)}
              aria-label={t("testimonials.aria.prev")}
            >
              <Icon name="arrow_right" size={16} style={{ transform: "rotate(180deg)" }} />
            </button>
            <div className="tm-dots" role="tablist" aria-label={t("testimonials.aria.navigation")}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={idx === i}
                  className={`tm-dot${idx === i ? " is-active" : ""}`}
                  onClick={() => scrollToIdx(i)}
                  aria-label={`${t("testimonials.aria.show")} ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="tm-arrow"
              onClick={() => scrollToIdx((idx + 1) % TOTAL)}
              aria-label={t("testimonials.aria.next")}
            >
              <Icon name="arrow_right" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
