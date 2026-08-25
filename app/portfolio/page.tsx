import Container from '@/components/ui/Container'
import PageHero, { GradientText } from '@/components/ui/PageHero'
import { projectsApi } from '@/lib/api'
import { STATIC_PROJECTS } from '@/lib/projects-fallback'
import CtaSection from '@/components/CtaSection'
import PortfolioGrid from './PortfolioGrid'

export default async function PortfolioPage() {
  let projects = STATIC_PROJECTS

  try {
    const res = await projectsApi.list()
    if (res.data.length > 0) {
      projects = res.data
    }
  } catch {
    // API unavailable — static fallback renders instead
  }

  return (
    <main>
      <PageHero
        breadcrumb={[{ label: 'Portfolio' }]}
        eyebrow="Our Work"
        title={
          <>
            Our <GradientText>Portfolio</GradientText>
          </>
        }
        description="4,400+ projects delivered across Bangladesh and beyond."
        ctas={[
          { label: 'Get a Free Quote', href: '/#contact', variant: 'primary' },
          { label: 'Our Services', href: '/services', variant: 'ghost' },
        ]}
      />

      <section className="py-16 md:py-20">
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </section>

      <CtaSection />
    </main>
  )
}
