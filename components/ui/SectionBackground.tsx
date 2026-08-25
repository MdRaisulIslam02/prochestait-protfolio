"use client";

import React, { useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiGraphql,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import {
  FiMonitor,
  FiShoppingCart,
  FiCreditCard,
  FiCode,
  FiSmartphone,
  FiUsers,
} from "react-icons/fi";

export type SectionBackgroundVariant =
  | "floating-stack"
  | "floating-services"
  | "grid-glow"
  | "aurora";

interface SectionBackgroundProps {
  variant?: SectionBackgroundVariant;
  className?: string;
}

export default function SectionBackground({
  variant = "floating-services",
  className = "",
}: SectionBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ─── floating-services ───────────────────────────────────────────── */
  if (variant === "floating-services") {
    const SERVICE_DEFS = [
      { label: "Website Solution",   Icon: FiMonitor,      color: "#0037d8" },
      { label: "Ecommerce Solution", Icon: FiShoppingCart, color: "#12d7df" },
      { label: "POS Solution",       Icon: FiCreditCard,   color: "#10b981" },
      { label: "Custom Solution",    Icon: FiCode,         color: "#7c3aed" },
      { label: "Mobile App",         Icon: FiSmartphone,   color: "#2563eb" },
      { label: "HRM Solution",       Icon: FiUsers,        color: "#ec4899" },
    ];

    // 12 chips spread across the viewport; each service appears exactly twice
    const chips = [
      { ...SERVICE_DEFS[0], left: "3%",  delay: "0s",   duration: "22s", drift: "18px"  },
      { ...SERVICE_DEFS[1], left: "19%", delay: "2.8s", duration: "27s", drift: "-20px" },
      { ...SERVICE_DEFS[2], left: "34%", delay: "5.5s", duration: "23s", drift: "22px"  },
      { ...SERVICE_DEFS[3], left: "50%", delay: "1.2s", duration: "25s", drift: "-18px" },
      { ...SERVICE_DEFS[4], left: "65%", delay: "8.5s", duration: "29s", drift: "16px"  },
      { ...SERVICE_DEFS[5], left: "81%", delay: "3.8s", duration: "24s", drift: "-22px" },
      { ...SERVICE_DEFS[0], left: "88%", delay: "12s",  duration: "26s", drift: "20px"  },
      { ...SERVICE_DEFS[3], left: "24%", delay: "15s",  duration: "28s", drift: "-16px" },
      { ...SERVICE_DEFS[4], left: "57%", delay: "18s",  duration: "22s", drift: "24px"  },
      { ...SERVICE_DEFS[1], left: "72%", delay: "7.5s", duration: "30s", drift: "-20px" },
      { ...SERVICE_DEFS[5], left: "42%", delay: "21s",  duration: "24s", drift: "18px"  },
      { ...SERVICE_DEFS[2], left: "93%", delay: "10s",  duration: "27s", drift: "-24px" },
    ];

    return (
      <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
        <style>{`
          @keyframes floatService {
            0%   { transform: translateY(110vh) translateX(0);               opacity: 0; }
            8%   { opacity: var(--fs-opacity); }
            50%  { transform: translateY(38vh)  translateX(var(--fs-drift)); opacity: var(--fs-opacity); }
            92%  { opacity: var(--fs-opacity); }
            100% { transform: translateY(-14vh) translateX(0);               opacity: 0; }
          }

          .fs-wrap {
            position: absolute;
            bottom: -80px;
            animation: floatService linear infinite;
          }
          .fs-chip {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 7px 14px 7px 10px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: -0.01em;
            white-space: nowrap;
            background: color-mix(in oklab, var(--chip-color) 9%, transparent);
            border: 1px solid color-mix(in oklab, var(--chip-color) 22%, transparent);
            color: var(--chip-color);
            backdrop-filter: blur(4px);
          }
          .fs-chip-icon {
            display: grid;
            place-items: center;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: color-mix(in oklab, var(--chip-color) 15%, transparent);
            flex-shrink: 0;
          }

          /* Light mode — very ghost-like */
          :root:not([data-theme="dark"]) .fs-wrap,
          [data-theme="light"]           .fs-wrap { --fs-opacity: 0.13; }

          /* Dark mode — slightly more visible */
          [data-theme="dark"] .fs-wrap { --fs-opacity: 0.20; }
        `}</style>

        {mounted &&
          chips.map((chip, idx) => (
            <div
              key={idx}
              className="fs-wrap"
              style={{
                left: chip.left,
                animationDelay: chip.delay,
                animationDuration: chip.duration,
                "--fs-drift": chip.drift,
              } as React.CSSProperties}
            >
              <div
                className="fs-chip"
                style={{ "--chip-color": chip.color } as React.CSSProperties}
              >
                <span className="fs-chip-icon">
                  <chip.Icon size={12} />
                </span>
                {chip.label}
              </div>
            </div>
          ))}
      </div>
    );
  }

  /* ─── floating-stack ──────────────────────────────────────────────── */
  if (variant === "floating-stack") {
    const icons = [
      { Icon: SiReact,      color: "#61DAFB", glow: "#61DAFB", size: 36, left: "4%",  delay: "0s",   duration: "22s", drift: "22px"  },
      { Icon: SiNextdotjs,  color: "#ffffff", glow: "#aaaaaa", size: 42, left: "17%", delay: "1.4s", duration: "28s", drift: "-18px" },
      { Icon: SiTailwindcss,color: "#06B6D4", glow: "#06B6D4", size: 46, left: "32%", delay: "3.8s", duration: "20s", drift: "26px"  },
      { Icon: SiTypescript, color: "#3178C6", glow: "#3178C6", size: 32, left: "51%", delay: "0.7s", duration: "25s", drift: "-22px" },
      { Icon: SiNodedotjs,  color: "#339933", glow: "#339933", size: 42, left: "71%", delay: "3.2s", duration: "24s", drift: "18px"  },
      { Icon: FaPhp,        color: "#9B7FD4", glow: "#9B7FD4", size: 48, left: "83%", delay: "6.5s", duration: "30s", drift: "-24px" },
      { Icon: SiLaravel,    color: "#FF2D20", glow: "#FF2D20", size: 38, left: "11%", delay: "8.8s", duration: "22s", drift: "28px"  },
      { Icon: SiMongodb,    color: "#47A248", glow: "#47A248", size: 34, left: "62%", delay: "10.5s",duration: "26s", drift: "-16px" },
      { Icon: SiPython,     color: "#FFD43B", glow: "#FFD43B", size: 40, left: "43%", delay: "13.5s",duration: "31s", drift: "20px"  },
      { Icon: SiDocker,     color: "#2496ED", glow: "#2496ED", size: 44, left: "57%", delay: "5.8s", duration: "27s", drift: "-26px" },
      { Icon: SiFigma,      color: "#F24E1E", glow: "#F24E1E", size: 36, left: "90%", delay: "16.5s",duration: "23s", drift: "18px"  },
      { Icon: SiGraphql,    color: "#E535AB", glow: "#E535AB", size: 34, left: "77%", delay: "19.5s",duration: "29s", drift: "-20px" },
      { Icon: SiRedis,      color: "#FF4438", glow: "#FF4438", size: 30, left: "26%", delay: "21.5s",duration: "21s", drift: "16px"  },
      { Icon: SiPostgresql, color: "#4169E1", glow: "#4169E1", size: 38, left: "39%", delay: "23s",  duration: "26s", drift: "-18px" },
    ];

    return (
      <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
        <style>{`
          @keyframes floatUp {
            0%   { transform: translateY(110vh) translateX(0)              rotate(0deg)   scale(0.65); opacity: 0; }
            7%   { opacity: var(--fi-opacity); }
            50%  { transform: translateY(45vh)  translateX(var(--fi-drift)) rotate(180deg) scale(1.05); }
            93%  { opacity: var(--fi-opacity); }
            100% { transform: translateY(-18vh) translateX(0)              rotate(360deg) scale(0.8);  opacity: 0; }
          }
          @keyframes glowPulse {
            0%, 100% { transform: scale(1);    opacity: 0.7; }
            50%       { transform: scale(1.18); opacity: 1;   }
          }
          .fi-wrap {
            position: absolute;
            bottom: -90px;
            animation: floatUp linear infinite;
          }
          .fi-inner {
            position: relative;
            display: grid;
            place-items: center;
          }
          .fi-glow {
            position: absolute;
            inset: -10px;
            border-radius: 50%;
            background: var(--fi-glow-color);
            filter: blur(14px);
            animation: glowPulse ease-in-out infinite;
            animation-duration: var(--fi-glow-dur, 3.5s);
            animation-delay: var(--fi-glow-delay, 0s);
          }
          :root:not([data-theme="dark"]) .fi-wrap,
          [data-theme="light"]           .fi-wrap { --fi-opacity: 0.10; }
          :root:not([data-theme="dark"]) .fi-glow,
          [data-theme="light"]           .fi-glow { opacity: 0.07; }
          [data-theme="dark"] .fi-wrap { --fi-opacity: 0.20; }
          [data-theme="dark"] .fi-glow { opacity: 0.30; }
          .fi-vignette {
            position: absolute; inset: 0;
            background: radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, var(--bg, #fff) 95%);
            z-index: 2;
          }
          [data-theme="dark"] .fi-vignette {
            background: radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, #0a0518 95%);
          }
        `}</style>
        <div className="fi-vignette" />
        {mounted &&
          icons.map((item, idx) => (
            <div
              key={idx}
              className="fi-wrap"
              style={{
                left: item.left,
                animationDelay: item.delay,
                animationDuration: item.duration,
                "--fi-drift": item.drift,
              } as React.CSSProperties}
            >
              <div className="fi-inner">
                <div
                  className="fi-glow"
                  style={{
                    "--fi-glow-color": item.glow,
                    "--fi-glow-dur": `${3 + (idx % 4) * 0.6}s`,
                    "--fi-glow-delay": `${(idx * 0.38) % 2}s`,
                  } as React.CSSProperties}
                />
                <item.Icon size={item.size} color={item.color} />
              </div>
            </div>
          ))}
      </div>
    );
  }

  /* ─── grid-glow ───────────────────────────────────────────────────── */
  if (variant === "grid-glow") {
    return (
      <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
        <style>{`
          @keyframes beamH {
            0%   { transform: translateX(-120px); opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { transform: translateX(calc(100vw + 120px)); opacity: 0; }
          }
          @keyframes beamV {
            0%   { transform: translateY(-80px); opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { transform: translateY(calc(100% + 80px)); opacity: 0; }
          }
          @keyframes orbFloat {
            0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: var(--ob-base, 0.35); }
            50%       { transform: translate(-50%, -50%) scale(1.10); opacity: calc(var(--ob-base, 0.35) * 1.55); }
          }
          .gg-beam-h {
            position: absolute;
            top: 0; bottom: 0; left: 0;
            width: 160px;
            background: linear-gradient(90deg,
              transparent 0%,
              color-mix(in oklab, var(--brand-primary-500) 30%, transparent) 40%,
              color-mix(in oklab, var(--brand-primary-500) 50%, transparent) 50%,
              color-mix(in oklab, var(--brand-primary-500) 30%, transparent) 60%,
              transparent 100%
            );
            filter: blur(3px);
            animation: beamH 9s ease-in-out infinite;
          }
          .gg-beam-v {
            position: absolute;
            left: 0; right: 0; top: 0;
            height: 100px;
            background: linear-gradient(180deg,
              transparent 0%,
              color-mix(in oklab, var(--brand-accent) 20%, transparent) 40%,
              color-mix(in oklab, var(--brand-accent) 35%, transparent) 50%,
              color-mix(in oklab, var(--brand-accent) 20%, transparent) 60%,
              transparent 100%
            );
            filter: blur(2px);
            animation: beamV 13s ease-in-out infinite 5s;
          }
          .gg-orb {
            position: absolute;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: orbFloat ease-in-out infinite;
          }
        `}</style>
        <div className="gg-beam-h" />
        <div className="gg-beam-v" />
        <div
          className="gg-orb"
          style={{ left: "50%", top: "50%", width: 700, height: 500, background: "var(--brand-primary)", filter: "blur(90px)", animationDuration: "8s", "--ob-base": "0.28" } as React.CSSProperties}
        />
        <div
          className="gg-orb"
          style={{ left: "0%", top: "25%", width: 320, height: 320, background: "var(--brand-accent)", filter: "blur(80px)", animationDuration: "11s", animationDelay: "2s", "--ob-base": "0.18" } as React.CSSProperties}
        />
        <div
          className="gg-orb"
          style={{ left: "100%", top: "70%", width: 280, height: 280, background: "var(--brand-primary-500)", filter: "blur(75px)", animationDuration: "9.5s", animationDelay: "4s", "--ob-base": "0.22" } as React.CSSProperties}
        />
        <div
          className="absolute inset-0 opacity-55 dark:opacity-30"
          style={{
            backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 15%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 15%, transparent 72%)",
          }}
        />
      </div>
    );
  }

  /* ─── aurora ──────────────────────────────────────────────────────── */
  if (variant === "aurora") {
    return (
      <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
        <style>{`
          @keyframes auroraA {
            0%   { transform: translate(0,0)      scale(1)    rotate(0deg);  }
            33%  { transform: translate(9%,-13%)  scale(1.12) rotate(4deg);  }
            66%  { transform: translate(-7%,9%)   scale(0.91) rotate(-3deg); }
            100% { transform: translate(0,0)      scale(1)    rotate(0deg);  }
          }
          @keyframes auroraB {
            0%   { transform: translate(0,0)      scale(1)    rotate(0deg);  }
            33%  { transform: translate(-11%,7%)  scale(1.09) rotate(-5deg); }
            66%  { transform: translate(7%,-7%)   scale(0.93) rotate(5deg);  }
            100% { transform: translate(0,0)      scale(1)    rotate(0deg);  }
          }
          @keyframes auroraC {
            0%,100% { transform: translate(0,0)    scale(1);    }
            50%      { transform: translate(6%,11%) scale(1.08); }
          }
          @keyframes auroraD {
            0%,100% { transform: translate(0,0)    scale(1);    }
            50%      { transform: translate(-9%,-6%) scale(1.11); }
          }
          .au-a { animation: auroraA 24s ease-in-out infinite; }
          .au-b { animation: auroraB 30s ease-in-out infinite 3s; }
          .au-c { animation: auroraC 19s ease-in-out infinite 7s; }
          .au-d { animation: auroraD 34s ease-in-out infinite 1.5s; }
        `}</style>

        <svg className="absolute inset-0 h-full w-full opacity-[0.035] dark:opacity-[0.055]" aria-hidden="true">
          <filter id="sb-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#sb-grain)" />
        </svg>

        {/* Opacities halved vs. standalone use so layering stays subtle */}
        <div className="au-a absolute -left-[18%] top-[5%]    h-[560px] w-[560px] rounded-full opacity-[0.12] blur-[130px] mix-blend-multiply dark:opacity-[0.10] dark:mix-blend-screen" style={{ background: "var(--brand-primary)" }} />
        <div className="au-b absolute -right-[18%] top-[20%]  h-[460px] w-[460px] rounded-full opacity-[0.09] blur-[120px] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-screen" style={{ background: "var(--brand-accent)" }} />
        <div className="au-c absolute left-[25%] bottom-[-12%] h-[400px] w-[400px] rounded-full opacity-[0.10] blur-[115px] mix-blend-multiply dark:opacity-[0.09] dark:mix-blend-screen" style={{ background: "#7c3aed" }} />
        <div className="au-d absolute right-[20%] -top-[12%]  h-[320px] w-[320px] rounded-full opacity-[0.08] blur-[100px] mix-blend-multiply dark:opacity-[0.07] dark:mix-blend-screen" style={{ background: "#0ea5e9" }} />
      </div>
    );
  }

  return null;
}
