"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import Container from "./Container";

/* ── Gradient text helper ────────────────────────────────────────── */
export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(135deg, var(--brand-primary-500), var(--brand-accent))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

/* ── Types ───────────────────────────────────────────────────────── */
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CtaItem {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
}

interface PageHeroProps {
  breadcrumb?: BreadcrumbItem[];
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  badge?: string;
  ctas?: CtaItem[];
  align?: "center" | "left";
  compact?: boolean;
  className?: string;
}

/* ── Component ───────────────────────────────────────────────────── */
export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  badge,
  ctas,
  align = "center",
  compact = false,
  className = "",
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        background: "var(--hero-bg)",
        paddingTop: compact ? "clamp(48px, 7vw, 72px)" : "clamp(72px, 10vw, 108px)",
        paddingBottom: compact ? "clamp(36px, 5vw, 56px)" : "clamp(56px, 7vw, 84px)",
      }}
    >
      {/* ── Background decoration ─────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Top accent line */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--brand-primary) 30%, var(--brand-accent) 70%, transparent 100%)",
            opacity: 0.55,
          }}
        />

        {/* Orb – primary (top-left) */}
        <div
          className="absolute -left-40 -top-40 rounded-full"
          style={{
            width: 620,
            height: 620,
            background:
              "radial-gradient(circle, var(--brand-primary) 0%, transparent 68%)",
            opacity: 0.22,
            filter: "blur(2px)",
          }}
        />

        {/* Orb – accent (bottom-right) */}
        <div
          className="absolute -bottom-32 -right-24 rounded-full"
          style={{
            width: 480,
            height: 480,
            background:
              "radial-gradient(circle, var(--brand-accent) 0%, transparent 68%)",
            opacity: 0.14,
            filter: "blur(2px)",
          }}
        />

        {/* Orb – teal (center-right) */}
        <div
          className="absolute right-[18%] top-1/3 rounded-full"
          style={{
            width: 320,
            height: 320,
            background:
              "radial-gradient(circle, #0ea5e9 0%, transparent 65%)",
            opacity: 0.09,
          }}
        />

        {/* Mesh grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Diagonal shimmer */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-primary) 0%, transparent 45%, var(--brand-accent) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--hero-bg) 70%, transparent))",
          }}
        />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <Container>
        <div
          className={`relative z-10 flex flex-col ${centered ? "items-center text-center" : "items-start"}`}
        >
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className={`flex flex-wrap items-center gap-1 ${compact ? "mb-4" : "mb-6"}`}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}
              >
                {/* Home — icon only */}
                <Link
                  href="/"
                  aria-label="Home"
                  className="flex items-center transition-colors duration-150 hover:text-white/70"
                  style={{ color: "inherit" }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                    <polyline points="9 21 9 12 15 12 15 21" />
                  </svg>
                </Link>

                {breadcrumb.map((crumb, i) => {
                  const isLast = i === breadcrumb.length - 1;
                  return (
                    <span key={i} className="flex items-center gap-1">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                        style={{ opacity: 0.35 }}
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className="transition-colors duration-150 hover:text-white/70"
                          style={{ color: "inherit" }}
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span
                          style={{
                            color: isLast ? "var(--brand-accent-500)" : "inherit",
                            fontWeight: isLast ? 500 : undefined,
                          }}
                        >
                          {crumb.label}
                        </span>
                      )}
                    </span>
                  );
                })}
              </nav>
            </Reveal>
          )}

          {/* Eyebrow */}
          {eyebrow && (
            <Reveal delay={0.05}>
              <div className={`flex flex-wrap items-center gap-2 ${compact ? "mb-3" : "mb-5"}`}>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                      style={{ background: "var(--brand-accent)" }}
                    />
                    <span
                      className="relative inline-flex h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--brand-accent)" }}
                    />
                  </span>
                  {eyebrow}
                </span>

                {badge && (
                  <span
                    className="hidden rounded-full border border-white/10 px-3 py-1 sm:inline-flex"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.42)",
                    }}
                  >
                    {badge}
                  </span>
                )}
              </div>
            </Reveal>
          )}

          {/* Title */}
          <Reveal delay={0.1}>
            <h1
              className={`m-0 font-bold leading-[1.1] tracking-tight text-white ${centered ? "max-w-[20ch]" : "max-w-[18ch]"}`}
              style={{
                fontSize: compact
                  ? "clamp(26px, 4.5vw, 46px)"
                  : "clamp(30px, 5.5vw, 58px)",
              }}
            >
              {title}
            </h1>
          </Reveal>

          {/* Description */}
          {description && (
            <Reveal delay={0.17}>
              <p
                className={`leading-relaxed ${compact ? "mt-3" : "mt-5"} ${centered ? "max-w-[55ch]" : "max-w-[50ch]"}`}
                style={{
                  fontSize: compact ? "clamp(14px, 1.5vw, 15px)" : "clamp(15px, 1.7vw, 17px)",
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                {description}
              </p>
            </Reveal>
          )}

          {/* CTAs */}
          {ctas && ctas.length > 0 && (
            <Reveal
              delay={0.24}
              className={`flex flex-wrap gap-3 ${compact ? "mt-6" : "mt-8"} ${centered ? "justify-center" : ""}`}
            >
              {ctas.map((cta, i) => {
                const isPrimary = cta.variant !== "ghost";
                const baseClass = compact
                  ? "inline-flex h-9 items-center gap-2 rounded-lg px-5 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  : "inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";

                const primaryStyle = {
                  background: "var(--brand-accent)",
                  color: "#fff",
                  boxShadow:
                    "0 8px 22px color-mix(in oklab, var(--brand-accent) 36%, transparent)",
                };

                const ghostStyle = {
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.88)",
                };

                const sharedProps = {
                  className: baseClass,
                  style: isPrimary ? primaryStyle : ghostStyle,
                };

                const inner = (
                  <>
                    {cta.icon && (
                      <span className="shrink-0">{cta.icon}</span>
                    )}
                    {cta.label}
                  </>
                );

                if (cta.href) {
                  return (
                    <a
                      key={i}
                      href={cta.href}
                      target={cta.external ? "_blank" : undefined}
                      rel={cta.external ? "noopener noreferrer" : undefined}
                      {...sharedProps}
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={cta.onClick}
                    {...sharedProps}
                  >
                    {inner}
                  </button>
                );
              })}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
