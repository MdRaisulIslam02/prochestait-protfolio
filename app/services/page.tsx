import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import PageHero, { GradientText } from '@/components/ui/PageHero'
import { serviceCategoriesApi, servicesApi } from '@/lib/api'
import { STATIC_SERVICES, STATIC_STATS } from '@/lib/services-fallback'
import type { ServiceCategory } from '@/types'
import ServicesGrid from './ServicesGrid'
import CtaSection from '@/components/CtaSection'

export default async function ServicesPage() {
  let services = STATIC_SERVICES
  let categories: ServiceCategory[] = []

  const [servicesResult, categoriesResult] = await Promise.allSettled([
    servicesApi.list(),
    serviceCategoriesApi.list(),
  ])

  if (servicesResult.status === 'fulfilled' && servicesResult.value.data.length > 0) {
    services = servicesResult.value.data
  }

  if (categoriesResult.status === 'fulfilled') {
    categories = categoriesResult.value.data
  }

  return (
    <main>
      {/* ── Hero ───────────────────────────────────── */}
      <PageHero
        compact
        breadcrumb={[{ label: 'Services' }]}
        eyebrow="What We Do"
        title={
          <>
            Digital Solutions for{' '}
            <GradientText>Growing Businesses</GradientText>
          </>
        }
        description="From e-commerce to enterprise software — fast, scalable, and built to last."
        ctas={[
          { label: 'View Our Work', href: '/portfolio', variant: 'primary' },
          { label: 'Get a Free Quote', href: '/#contact', variant: 'ghost' },
        ]}
      />

      {/* ── Stats bar ──────────────────────────────── */}
      <div style={{ background: 'var(--bg-alt)' }}>
        <Container>
          <Reveal variant="fade-up">
            <div className="srv-stat-bar" style={{ marginTop: '-28px', position: 'relative', zIndex: 10 }}>
              {STATIC_STATS.map((s) => (
                <div key={s.label} className="srv-stat">
                  <div className="srv-stat-val">
                    <span>{s.value}</span>
                  </div>
                  <div className="srv-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>

      {/* ── Services ───────────────────────────────── */}
      <section style={{ background: 'var(--bg-alt)' }}>
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title={
              <>
                <span className="text-slate-900 dark:text-black transition-colors duration-300">
                  Everything you need to{' '}
                </span>
                <span
                  style={{
                    background:
                      'linear-gradient(135deg, var(--brand-primary-500), var(--brand-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  build & grow
                </span>
              </>
            }
            subtitle="Professional digital services tailored for modern businesses."
          />

          <ServicesGrid services={services} categories={categories} />
        </Container>
      </section>
      <CtaSection />
    </main>
  )
}
