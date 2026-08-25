"use client";

import React from "react";
import Link from "next/link";
import type { Service } from "@/types";
import Icon from "@/components/Icon";
import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/I18nProvider";

const PREVIEW_COUNT = 4;

const TRUST_ICONS = ["shield", "edit", "support"] as const;

interface Props {
  service: Service;
}

export default function ServiceDetailClient({ service: srv }: Props) {
  const { t } = useI18n();
  const extraFeatures = srv.features.length - PREVIEW_COUNT;

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg,
            color-mix(in oklab, ${srv.color} 8%, var(--bg)) 0%,
            var(--bg) 60%)`,
          paddingTop: "var(--s-8)",
          paddingBottom: "var(--s-7)",
        }}
      >
        {/* decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-[0.06]"
          style={{
            background: `radial-gradient(circle, ${srv.color}, transparent 70%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 -left-20 w-64 h-64 rounded-full opacity-[0.04]"
          style={{
            background: `radial-gradient(circle, ${srv.color}, transparent 70%)`,
          }}
        />

        {/* giant faded icon — decorative */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block"
          style={{ fontSize: 260, color: srv.color, lineHeight: 1 }}
        >
          <Icon name={srv.icon} size={260} />
        </div>

        <Container>
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-[13px]" aria-label="breadcrumb">
            <Link
              href="/services"
              className="flex items-center gap-1.5 font-medium transition-colors duration-200 hover:[color:var(--brand-primary-500)]"
              style={{ color: "var(--text-soft)" }}
            >
              <Icon name="arrow_left" size={14} />
              {t("serviceDetail.backToServices")}
            </Link>
            <span style={{ color: "var(--border-strong)" }}>/</span>
            <span
              className="font-medium truncate max-w-[20ch]"
              style={{ color: "var(--text-muted)" }}
            >
              {srv.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
            {/* ── LEFT: main content ── */}
            <div className="flex flex-col gap-6">
              {/* icon + number row */}
              <div className="flex items-center gap-4">
                <div
                  className="icon-tile relative flex-shrink-0"
                  style={{
                    background: srv.color,
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    boxShadow: `0 12px 32px color-mix(in oklab, ${srv.color} 35%, transparent)`,
                  }}
                >
                  <Icon name={srv.icon} size={30} />
                </div>
                <span
                  className="mono font-semibold tracking-widest uppercase"
                  style={{ fontSize: 11, color: "var(--text-soft)" }}
                >
                  {String(srv.id).padStart(2, "0")}
                </span>
              </div>

              {/* title */}
              <h1
                className="font-semibold leading-[1.1] tracking-tight m-0"
                style={{
                  fontSize: "clamp(30px, 4.5vw, 52px)",
                  color: "var(--text)",
                }}
              >
                {srv.title}
              </h1>

              {/* category badge */}
              <span
                className="inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wider"
                style={{
                  background: `color-mix(in oklab, ${srv.color} 12%, var(--surface-2))`,
                  color: srv.color,
                  border: `1px solid color-mix(in oklab, ${srv.color} 24%, transparent)`,
                }}
              >
                <Icon name={srv.category?.icon ?? "folder"} size={12} />
                {srv.category?.name}
              </span>

              {/* description */}
              <p
                className="m-0 leading-relaxed max-w-[56ch]"
                style={{ fontSize: 18, color: "var(--text-muted)" }}
              >
                {srv.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/#contact"
                  className="btn btn-accent"
                  style={{ fontSize: 15, paddingInline: "var(--s-6)" }}
                >
                  {t("serviceDetail.ctaButton")}
                </a>
                <Link
                  href="/services"
                  className="btn btn-ghost"
                  style={{ fontSize: 15, paddingInline: "var(--s-5)" }}
                >
                  {t("serviceDetail.backToServices")}
                </Link>
              </div>
            </div>

            {/* ── RIGHT: preview card ── */}
            <div
              className="rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* card header strip */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{
                  background: `color-mix(in oklab, ${srv.color} 10%, var(--surface-2))`,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  className="icon-tile"
                  style={{
                    background: srv.color,
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                  }}
                >
                  <Icon name={srv.icon} size={16} />
                </div>
                <span
                  className="font-semibold text-[14px]"
                  style={{ color: "var(--text)" }}
                >
                  {t("serviceDetail.previewTitle")}
                </span>
              </div>

              {/* feature list */}
              <ul
                className="m-0 p-0 list-none flex flex-col"
                style={{ gap: 0 }}
              >
                {srv.features.slice(0, PREVIEW_COUNT).map((feat, i) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 px-6 py-3.5 text-[13.5px]"
                    style={{
                      color: "var(--text-muted)",
                      borderBottom:
                        i < PREVIEW_COUNT - 1
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                  >
                    <span
                      className="flex-shrink-0 mt-px flex items-center justify-center w-4 h-4 rounded-full"
                      style={{
                        background: `color-mix(in oklab, ${srv.color} 16%, transparent)`,
                        color: srv.color,
                      }}
                    >
                      <Icon name="check" size={9} stroke={3} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* more badge */}
              {extraFeatures > 0 && (
                <div
                  className="px-6 py-3 text-[12px] font-medium"
                  style={{
                    background: "var(--surface-2)",
                    color: "var(--text-soft)",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  + {extraFeatures} {t("serviceDetail.previewMore")}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════ */}
      <section style={{ background: "var(--bg-alt)" }}>
        <Container>
          {/* section header */}
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="eyebrow">{t("serviceDetail.featuresEyebrow")}</span>
            <h2
              className="section-title m-0"
              style={{ color: "var(--text)" }}
            >
              {t("serviceDetail.featuresTitle")}
            </h2>
            <p
              className="m-0 max-w-[52ch]"
              style={{ fontSize: 15, color: "var(--text-muted)" }}
            >
              {t("serviceDetail.featuresSubtitle")}
            </p>
          </div>

          {/* features grid */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {srv.features.map((feat) => (
              <div
                key={feat}
                className="flex items-start gap-4 rounded-xl px-5 py-4 transition-all duration-200 hover:[box-shadow:var(--shadow-sm)] hover:-translate-y-px"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full"
                  style={{
                    background: `color-mix(in oklab, ${srv.color} 14%, transparent)`,
                    color: srv.color,
                  }}
                >
                  <Icon name="check" size={11} stroke={2.5} />
                </span>
                <span
                  className="text-[14px] leading-snug font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE NIX
      ══════════════════════════════════════════ */}
      <section style={{ background: "var(--bg)" }}>
        <Container>
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="eyebrow">{t("serviceDetail.whyEyebrow")}</span>
            <h2 className="section-title m-0" style={{ color: "var(--text)" }}>
              {t("serviceDetail.whyTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(["secured", "edit", "support"] as const).map((key, i) => (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:var(--shadow-md)]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{
                    background: `color-mix(in oklab, ${srv.color} 10%, var(--surface-2))`,
                    color: srv.color,
                  }}
                >
                  <Icon
                    name={TRUST_ICONS[i]}
                    size={22}
                  />
                </div>

                <h3
                  className="m-0 font-semibold text-[17px]"
                  style={{ color: "var(--text)" }}
                >
                  {t(`serviceDetail.trust.${key}.title`)}
                </h3>
                <p
                  className="m-0 text-[14px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t(`serviceDetail.trust.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg,
            color-mix(in oklab, ${srv.color} 12%, var(--bg-alt)) 0%,
            color-mix(in oklab, ${srv.color} 5%, var(--bg)) 100%)`,
        }}
      >
        {/* decorative corner orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-[0.08]"
          style={{
            background: `radial-gradient(circle, ${srv.color}, transparent 70%)`,
          }}
        />

        <Container>
          <div className="flex flex-col items-center text-center gap-5 relative z-10">
            <span className="eyebrow">{t("serviceDetail.ctaEyebrow")}</span>

            <h2
              className="m-0 font-semibold leading-tight tracking-tight max-w-[20ch] text-balance"
              style={{
                fontSize: "clamp(26px, 4vw, 44px)",
                color: "var(--text)",
              }}
            >
              {t("serviceDetail.ctaTitle")}
            </h2>

            <p
              className="m-0 max-w-[52ch] leading-relaxed"
              style={{ fontSize: 16, color: "var(--text-muted)" }}
            >
              {t("serviceDetail.ctaBody")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="/#contact"
                className="btn"
                style={{
                  background: srv.color,
                  color: "#ffffff",
                  boxShadow: `0 8px 24px color-mix(in oklab, ${srv.color} 35%, transparent)`,
                  fontSize: 15,
                  paddingInline: "var(--s-6)",
                }}
              >
                {t("serviceDetail.ctaButton")}
              </a>
              <Link
                href="/services#process"
                className="btn btn-ghost"
                style={{ fontSize: 15, paddingInline: "var(--s-5)" }}
              >
                {t("serviceDetail.ctaSecondary")}
              </Link>
            </div>

            <p
              className="m-0 text-[12px] font-medium"
              style={{ color: "var(--text-soft)" }}
            >
              {t("serviceDetail.ctaMeta")}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
