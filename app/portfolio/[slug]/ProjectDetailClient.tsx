'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight, Tag } from 'lucide-react'
import { useI18n } from '@/i18n/I18nProvider'
import Container from '@/components/ui/Container'
import type { Project } from '@/types'
import { resolveMediaUrl } from '@/lib/api'

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { locale } = useI18n()

  const title = project.title?.[locale] ?? project.title?.en ?? ''
  const longDesc = project.longDescription?.[locale] ?? project.longDescription?.en ?? ''
  const shortDesc = project.description?.[locale] ?? project.description?.en ?? ''
  const imageUrl = resolveMediaUrl(project.image)

  return (
    <main className="min-h-screen pb-24 pt-8 md:pt-12">
      <Container>
        {/* Back nav */}
        <Link
          href="/portfolio"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-(--text-muted) transition-colors hover:text-(--brand-primary)"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-(--border) bg-(--surface) transition-colors group-hover:border-(--brand-primary)/50 group-hover:bg-(--brand-primary)/10 group-hover:text-(--brand-primary)">
            <ArrowLeft size={14} />
          </span>
          {locale === 'bn' ? 'পোর্টফোলিওতে ফিরুন' : 'Back to Portfolio'}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* Left column */}
          <div>
            {/* Hero image */}
            <div className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface-2) shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="h-full w-full bg-(--surface-2)" />
                )}
              </div>
            </div>

            {/* About section */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-(--text-muted) opacity-80">
                {locale === 'bn' ? 'প্রজেক্ট সম্পর্কে' : 'About this project'}
              </p>
              <p className="mt-3 text-base leading-8 text-(--text-soft)">
                {longDesc}
              </p>
            </div>

            {/* Tech stack */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-(--text-muted) opacity-80">
                {locale === 'bn' ? 'প্রযুক্তি স্ট্যাক' : 'Tech stack'}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-(--border) bg-(--surface-2) px-4 py-1.5 text-sm font-semibold text-(--text-muted)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: sticky info card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm">
              {/* Category */}
              <span className="inline-block rounded-full bg-(--surface-2) border border-(--border) px-3 py-1 text-xs font-bold uppercase tracking-wide text-(--text-muted)">
                {project.category}
              </span>

              {/* Title */}
              <h1 className="mt-4 text-2xl font-extrabold leading-tight text-(--text)">
                {title}
              </h1>

              {/* Short description */}
              <p className="mt-2.5 text-sm leading-relaxed text-(--text-soft)">
                {shortDesc}
              </p>

              <div className="my-5 border-t border-(--border)" />

              {/* Meta */}
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="font-medium text-(--text-muted)">
                    {locale === 'bn' ? 'বিভাগ' : 'Category'}
                  </dt>
                  <dd className="font-semibold text-(--text)">
                    {project.category}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium text-(--text-muted)">
                    {locale === 'bn' ? 'স্ট্যাক' : 'Stack'}
                  </dt>
                  <dd className="font-semibold text-(--text)">
                    {project.tags.slice(0, 2).join(', ')}
                    {project.tags.length > 2 && ` +${project.tags.length - 2}`}
                  </dd>
                </div>
              </dl>

              <div className="my-5 border-t border-(--border)" />

              {/* CTAs */}
              <div className="space-y-2.5">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-(--surface-2) border border-(--border) text-sm font-bold text-(--text) transition-colors hover:border-(--brand-primary)/50 hover:bg-(--brand-primary)/10 hover:text-(--brand-primary) shadow-sm"
                  >
                    {locale === 'bn' ? 'লাইভ দেখুন' : 'Visit Live Site'}
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}

                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-(--brand-primary) text-sm font-bold text-white transition-colors hover:bg-(--brand-primary-600) shadow-sm"
                >
                  <Tag size={15} />
                  {locale === 'bn' ? 'অফার মূল্য জানুন' : 'Get Offer Price'}
                </button>

                <Link
                  href="/portfolio"
                  className="flex h-10 w-full items-center justify-center rounded-xl border border-(--border) text-sm font-medium text-(--text-muted) transition-colors hover:bg-(--surface-2)"
                >
                  {locale === 'bn' ? 'আরও প্রজেক্ট দেখুন' : 'Browse more projects'}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  )
}
