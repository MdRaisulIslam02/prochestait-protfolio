'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';
import CtaSection from '@/components/CtaSection';
import Reveal from '@/components/ui/Reveal';
import { legalContent, type PageKey, type Block } from './legal-content';

interface Props {
  pageKey: PageKey;
}

function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === 'p') {
    return <p className="legal-p">{block.text}</p>;
  }

  if (block.type === 'ul') {
    return (
      <ul className="legal-ul">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              {block.headers.map((h, i) => <th key={i}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

export default function LegalPage({ pageKey }: Props) {
  const { locale } = useI18n();
  const lang = (locale === 'bn' ? 'bn' : 'en') as 'en' | 'bn';
  const data = legalContent[pageKey][lang];

  const [activeId, setActiveId] = useState<string>(data.sections[0]?.id ?? '');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options = { rootMargin: '-80px 0px -60% 0px', threshold: 0 };

    data.sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveId(id);
      }, options);
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [data.sections]);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section className="legal-hero">
        <div className="legal-hero-bg" aria-hidden>
          <div className="legal-hero-orb a" />
          <div className="legal-hero-orb b" />
          <div className="legal-hero-grid" />
        </div>

        <div className="container">
          {/* Breadcrumb */}
          <Reveal>
            <nav className="legal-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">
                {lang === 'bn' ? 'হোম' : 'Home'}
              </Link>
              <ChevronRightIcon />
              <span>{data.eyebrow}</span>
              <ChevronRightIcon />
              <span aria-current="page">{data.title}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.06}>
            <span className="eyebrow">{data.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="legal-hero-title">{data.title}</h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="legal-hero-desc">{data.description}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="legal-updated">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {data.updated}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="legal-body">
        <div className="container">
          <div className="legal-layout">

            {/* Sticky TOC */}
            <aside className="legal-toc" aria-label="Table of contents">
              <p className="legal-toc-heading">
                {lang === 'bn' ? 'বিষয়বস্তু' : 'Contents'}
              </p>
              <nav>
                {data.sections.map(({ id, title }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`legal-toc-item${activeId === id ? ' is-active' : ''}`}
                  >
                    {title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Prose */}
            <article className="legal-prose">
              {data.sections.map((section, i) => (
                <Reveal key={section.id} delay={i * 0.04}>
                  <section
                    id={section.id}
                    ref={(el) => { sectionRefs.current[section.id] = el; }}
                    className="legal-section"
                  >
                    <h2>{section.title}</h2>
                    {section.blocks.map((block, bi) => (
                      <BlockRenderer key={bi} block={block} />
                    ))}
                  </section>
                </Reveal>
              ))}
            </article>
          </div>
        </div>
      </div>

      <CtaSection />
    </main>
  );
}
