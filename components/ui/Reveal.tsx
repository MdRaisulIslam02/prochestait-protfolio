"use client";

/**
 * <Reveal> — drop-in scroll-triggered reveal wrapper.
 *
 * Usage:
 *   // Fade a block up when it enters the viewport
 *   <Reveal><SectionHeader .../></Reveal>
 *
 *   // Stagger the direct children of the element that Reveal renders
 *   <Reveal variant="stagger" className="grid grid-cols-3 gap-6">
 *     <Card /><Card /><Card />
 *   </Reveal>
 *
 *   // Custom delay / duration
 *   <Reveal variant="fade-right" delay={0.15} duration={0.9}>…</Reveal>
 *
 * Props:
 *   variant   — animation style (default "fade-up")
 *   delay     — seconds before the tween starts (default 0)
 *   duration  — tween length in seconds (default 0.72)
 *   stagger   — per-child stagger when variant="stagger" (default 0.11)
 *   ease      — GSAP ease string (default "power3.out")
 *   threshold — ScrollTrigger "start" value (default "top 88%")
 *   as        — HTML tag to render (default "div")
 *   className — forwarded to the wrapper element
 */

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "stagger";

const FROM: Record<RevealVariant, gsap.TweenVars> = {
  "fade-up":    { opacity: 0, y: 36 },
  "fade-down":  { opacity: 0, y: -36 },
  "fade-left":  { opacity: 0, x: -44 },
  "fade-right": { opacity: 0, x: 44 },
  "scale":      { opacity: 0, scale: 0.86 },
  "stagger":    { opacity: 0, y: 28 },
};

const TO: Record<RevealVariant, gsap.TweenVars> = {
  "fade-up":    { opacity: 1, y: 0 },
  "fade-down":  { opacity: 1, y: 0 },
  "fade-left":  { opacity: 1, x: 0 },
  "fade-right": { opacity: 1, x: 0 },
  "scale":      { opacity: 1, scale: 1 },
  "stagger":    { opacity: 1, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  threshold?: string;
  as?: ElementType;
  className?: string;
}

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.72,
  stagger = 0.11,
  ease = "power3.out",
  threshold = "top 88%",
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const isStagger = variant === "stagger";
      const targets = isStagger ? Array.from(el.children) : el;

      gsap.set(targets, FROM[variant]);

      gsap.to(targets, {
        ...TO[variant],
        duration,
        delay,
        ease,
        stagger: isStagger ? stagger : 0,
        scrollTrigger: {
          trigger: el,
          start: threshold,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref },
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
