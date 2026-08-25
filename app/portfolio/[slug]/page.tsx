import { notFound } from 'next/navigation'
import { projectsApi } from '@/lib/api'
import { STATIC_PROJECTS } from '@/lib/projects-fallback'
import ProjectDetailClient from './ProjectDetailClient'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const res = await projectsApi.list()
    const slugs = res.data
      .map((p) => p.slug)
      .filter((s): s is string => typeof s === 'string' && s.length > 0)
    if (slugs.length > 0) return slugs.map((slug) => ({ slug }))
  } catch { /* fall through to static */ }
  return STATIC_PROJECTS.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  try {
    const res = await projectsApi.get(slug)
    if (!res?.data) throw new Error('No project data')
    return <ProjectDetailClient project={res.data} />
  } catch {
    const fallback = STATIC_PROJECTS.find((p) => p.slug === slug)
    if (!fallback) notFound()
    return <ProjectDetailClient project={fallback!} />
  }
}
