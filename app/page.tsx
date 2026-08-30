import Hero from '@/components/Hero'
// import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Features from '@/components/Features'
import Special from '@/components/Special'
import SelectedWorks from '@/components/SelectedWorks'
// import ClientResults from '@/components/ClientResults'
import Packages from '@/components/Packages'
import Process from '@/components/Process'
import CtaSection from '@/components/CtaSection'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import { testimonialsApi, teamApi, partnersApi } from '@/lib/api'
import type { Partner } from '@/types'
import { STATIC_TESTIMONIALS } from '@/lib/testimonials-fallback'
import { STATIC_TEAM } from '@/lib/team-fallback'

export const revalidate = 3600

export default async function Home() {
  let testimonials = STATIC_TESTIMONIALS
  let team = STATIC_TEAM
  let partners: Partner[] = []

  try {
    const res = await testimonialsApi.list()
    if (res?.data && Array.isArray(res.data) && res.data.length > 0) {
      testimonials = res.data
    }
  } catch (error) {
    console.warn('Failed to fetch testimonials, using fallback.')
  }

  try {
    const res = await teamApi.list()
    if (res?.data && Array.isArray(res.data) && res.data.length > 0) {
      team = res.data
    }
  } catch (error) {
    console.warn('Failed to fetch team, using fallback.')
  }

  try {
    const res = await partnersApi.list()
    if (res?.data && Array.isArray(res.data)) {
      partners = res.data
    }
  } catch (error) {
    console.warn('Failed to fetch partners.')
  }

  return (
    <main>
      <Hero />
      {/* <WhyUs /> */}
      <Services />
      <SelectedWorks />
      {/* <ClientResults /> */}
      <Special />
      <Features />
      <Packages />
      <Process />
      <TechStack />
      <CtaSection />
      <Testimonials testimonials={testimonials} />
      <Partners partners={partners} />
    </main>
  )
}
