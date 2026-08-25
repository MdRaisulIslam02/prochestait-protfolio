'use client'

import { useState, useEffect } from 'react'
import type { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'
import { useI18n } from '@/i18n/I18nProvider'
import { resolveMediaUrl, projectsApi } from '@/lib/api'

const DESKTOP_INITIAL = 9
const MOBILE_INITIAL = 6
const LOAD_MORE_COUNT = 6

export default function PortfolioGrid({ projects: initialProjects }: { projects: Project[] }) {
  const { locale } = useI18n()
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [visibleCount, setVisibleCount] = useState(DESKTOP_INITIAL)

  useEffect(() => {
    const update = () => {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches
      const initial = isDesktop ? DESKTOP_INITIAL : MOBILE_INITIAL
      setVisibleCount((c) => (c < initial ? initial : c))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    projectsApi.list()
      .then((res) => { if (res.data.length > 0) setProjects(res.data) })
      .catch(() => {})
  }, [])

  const visible = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={{
              ...project,
              title: project.title[locale],
              description: project.description[locale],
              image: resolveMediaUrl(project.image),
            }}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl border-2 border-blue-700 bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-800 hover:bg-blue-700 dark:border-sky-400 dark:bg-sky-500 dark:text-slate-950"
          >
            <span className="absolute inset-y-0 -left-10 w-8 skew-x-[-20deg] bg-white/35 transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative flex items-center gap-2">
              {locale === 'bn' ? 'আরও দেখুন' : 'Load More'}
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </span>
          </button>
        </div>
      )}
    </>
  )
}
