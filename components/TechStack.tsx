'use client'

import { useMemo } from 'react'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/ui/Container'
import { useI18n } from '@/i18n/I18nProvider'

const STACK = [
  {
    cat: 'Frontend',
    accent: '#a78bfa',
    items: [
      { name: 'React', m: 'react' },
      { name: 'Next.js', m: 'nextjs' },
      { name: 'Vue', m: 'vue' },
      { name: 'TypeScript', m: 'ts' },
      { name: 'Tailwind', m: 'tailwind' },
    ],
  },
  {
    cat: 'Backend',
    accent: '#34d399',
    items: [
      { name: 'Node.js', m: 'node' },
      { name: 'Laravel', m: 'laravel' },
      { name: 'Python', m: 'python' },
      { name: 'PostgreSQL', m: 'pg' },
      { name: 'Redis', m: 'redis' },
    ],
  },
  {
    cat: 'Mobile',
    accent: '#fbbf24',
    items: [
      { name: 'Flutter', m: 'flutter' },
      { name: 'React Native', m: 'rn' },
      { name: 'Swift', m: 'swift' },
      { name: 'Kotlin', m: 'kotlin' },
    ],
  },
  {
    cat: 'DevOps & Cloud',
    accent: '#12d7df',
    items: [
      { name: 'AWS', m: 'aws' },
      { name: 'Docker', m: 'docker' },
      { name: 'Cloudflare', m: 'cf' },
      { name: 'GitHub Actions', m: 'gha' },
      { name: 'Vercel', m: 'vercel' },
    ],
  },
]

function StackGlyph({ kind, color }: { kind: string; color: string }) {
  const map: Record<string, React.ReactNode> = {
    react: (
      <g>
        <circle
          cx="12"
          cy="12"
          r="2.2"
          fill={color}
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke={color}
          fill="none"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke={color}
          fill="none"
          strokeWidth="1.5"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke={color}
          fill="none"
          strokeWidth="1.5"
          transform="rotate(-60 12 12)"
        />
      </g>
    ),
    nextjs: (
      <g>
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M8 7v10M8 7l8 10M16 7v6"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    ),
    vue: (
      <g>
        <path
          d="M2 5h5l5 8 5-8h5L12 21z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M7 5l5 8 5-8"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity=".55"
        />
      </g>
    ),
    ts: (
      <g>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          fill={color}
        />
        <text
          x="12"
          y="17"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          fill="#0a0420"
          fontFamily="ui-monospace,monospace">
          TS
        </text>
      </g>
    ),
    tailwind: (
      <g>
        <path
          d="M4 12c1.5-3 3.5-4.5 6-4.5s3.5 1.5 5 3 2.5 3 5 3-3.5-3-3.5-3"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 17c1.5-3 3.5-4.5 6-4.5s3.5 1.5 5 3 2.5 3 5 3-3.5-3-3.5-3"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity=".5"
        />
      </g>
    ),
    node: (
      <g>
        <path
          d="M12 2l9 5v10l-9 5-9-5V7z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 9v6c0 1 .5 1.5 1.5 1.5S12 16 12 15V9M14 9c1 0 2 .5 2 1.5s-1 1.5-2 1.5 2 .5 2 1.5-1 1.5-2 1.5"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>
    ),
    laravel: (
      <g>
        <path
          d="M3 6l4-2v14l4 2 4-2 4 2V8l-4-2-4 2-4-2z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    ),
    python: (
      <g>
        <path
          d="M9 3h5a3 3 0 013 3v4H9a3 3 0 00-3 3v3a3 3 0 003 3h2v-3H8a2 2 0 01-2-2v-1h11a3 3 0 003-3V6a3 3 0 00-3-3h-3M9 6.5h.01"
          stroke={color}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    ),
    pg: (
      <g>
        <ellipse
          cx="12"
          cy="6"
          rx="8"
          ry="3"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
      </g>
    ),
    redis: (
      <g>
        <ellipse
          cx="12"
          cy="7"
          rx="9"
          ry="3"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M3 7v4c0 1.7 4 3 9 3s9-1.3 9-3V7M3 13v4c0 1.7 4 3 9 3s9-1.3 9-3v-4"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
      </g>
    ),
    flutter: (
      <g>
        <path
          d="M14 2L4 12l3 3 13-13zM14 11l-5 5 5 5h6L15 16l5-5z"
          fill={color}
        />
      </g>
    ),
    rn: (
      <g>
        <circle
          cx="12"
          cy="12"
          r="2"
          fill={color}
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="4"
          stroke={color}
          fill="none"
          strokeWidth="1.4"
          transform="rotate(45 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="4"
          stroke={color}
          fill="none"
          strokeWidth="1.4"
          transform="rotate(-45 12 12)"
        />
      </g>
    ),
    swift: (
      <g>
        <path
          d="M3 6c4 4 7 7 11 9 0 0-3-1-5-1 0 0 3 3 8 3 0 0-3 4-9 4-4 0-6-2-6-2s4 0 7-2c0 0-5-2-6-6 0 0 3 2 5 2 0 0-4-3-5-7z"
          fill={color}
        />
      </g>
    ),
    kotlin: (
      <g>
        <path
          d="M3 3h18L12 12l9 9H3z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    ),
    aws: (
      <g>
        <path
          d="M3 14c2 2 5 3 9 3s7-1 9-3M5 9c0-2 3-4 7-4s7 2 7 4-3 4-7 4-7-2-7-4z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="9"
          cy="9"
          r="1"
          fill={color}
        />
        <circle
          cx="15"
          cy="9"
          r="1"
          fill={color}
        />
      </g>
    ),
    docker: (
      <g>
        <rect
          x="3"
          y="11"
          width="3"
          height="3"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        <rect
          x="7"
          y="11"
          width="3"
          height="3"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        <rect
          x="11"
          y="11"
          width="3"
          height="3"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        <rect
          x="7"
          y="7"
          width="3"
          height="3"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        <rect
          x="11"
          y="7"
          width="3"
          height="3"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M2 15c2 2 5 3 9 3s8-1 10-4c-1-1-2-1-3 0"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    ),
    cf: (
      <g>
        <path
          d="M5 16c-1.5 0-3-1-3-3s1.5-3 3-3c.3-2 2-3.5 4-3.5 1.5 0 3 .8 4 2 1-.5 2-.5 3 0 2 1 3 3 2 5z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    ),
    gha: (
      <g>
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M9 9l3 3-3 3M13 15h3"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    ),
    vercel: (
      <g>
        <path
          d="M12 4l9 16H3z"
          fill={color}
        />
      </g>
    ),
  }
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none">
      {map[kind] ?? (
        <circle
          cx="12"
          cy="12"
          r="6"
          fill={color}
          opacity=".4"
        />
      )}
    </svg>
  )
}

export default function TechStack() {
  const { t } = useI18n()

  const allItems = useMemo(
    () =>
      STACK.flatMap((cat) =>
        cat.items.map((item) => ({ ...item, color: cat.accent })),
      ),
    [],
  )

  // Split into two balanced rows
  const mid = Math.ceil(allItems.length / 2)
  const row1 = allItems.slice(0, mid)
  const row2 = allItems.slice(mid)

  // We use 4 sets to ensure seamless 50% translation even on ultra-wide screens
  const row1Extended = [...row1, ...row1, ...row1, ...row1]
  const row2Extended = [...row2, ...row2, ...row2, ...row2]

  return (
    <section
      id="stack"
      className="relative overflow-hidden py-16 lg:py-24 bg-(--bg-alt) transition-colors duration-300">
      <Container>
        <Reveal
          variant="fade-up"
          className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="inline-flex items-center rounded-full bg-(--brand-primary)/10 px-3 py-1 text-sm font-medium text-(--brand-primary)">
            {t('techStack.eyebrow')}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] tracking-tight text-(--text) max-w-2xl">
            {t('techStack.title')}
          </h2>
          <p className="max-w-[60ch] text-[15px] lg:text-[17px] leading-relaxed text-(--text-muted)">
            {t('techStack.description')}
          </p>
        </Reveal>
      </Container>

      {/* Sliders Container with fade edges */}
      <div className="relative mx-auto flex w-full max-w-[100vw] flex-col gap-5 overflow-hidden lg:gap-6">
        {/* Left/Right Gradient Masks for seamless blending */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-(--bg-alt) to-transparent md:w-32 lg:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-(--bg-alt) to-transparent md:w-32 lg:w-48" />

        {/* Row 1 (Scrolling Left) */}
        <div className="flex w-max animate-[marqueeX_45s_linear_infinite] hover:[animation-play-state:paused]">
          {row1Extended.map((it, idx) => (
            <div
              key={idx}
              className="mx-2 lg:mx-3 flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) px-4 py-2.5 lg:px-5 lg:py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--border-strong) hover:shadow-md">
              <div
                className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${it.color}15` }}>
                <StackGlyph
                  kind={it.m}
                  color={it.color}
                />
              </div>
              <span className="font-semibold text-(--text) text-[14px] lg:text-[15px] whitespace-nowrap">
                {it.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="flex w-max animate-[marqueeX_55s_linear_infinite_reverse] hover:[animation-play-state:paused]">
          {row2Extended.map((it, idx) => (
            <div
              key={idx}
              className="mx-2 lg:mx-3 flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) px-4 py-2.5 lg:px-5 lg:py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--border-strong) hover:shadow-md">
              <div
                className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${it.color}15` }}>
                <StackGlyph
                  kind={it.m}
                  color={it.color}
                />
              </div>
              <span className="font-semibold text-(--text) text-[14px] lg:text-[15px] whitespace-nowrap">
                {it.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
