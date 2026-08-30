'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import Icon from './Icon'
import Container from './ui/Container'
import ButtonLink from './ui/ButtonLink'
import { useI18n } from '@/i18n/I18nProvider'
import { useQuoteModal } from './QuoteModalProvider'

const BN_DIGITS = ['\u09e6', '\u09e7', '\u09e8', '\u09e9', '\u09ea', '\u09eb', '\u09ec', '\u09ed', '\u09ee', '\u09ef']
const enToBn = (str: string) =>
  str.replace(/[0-9]/g, (d) => BN_DIGITS[parseInt(d)])
const bnToEn = (str: string) =>
  str.replace(/[\u09e6-\u09ef]/g, (d) => BN_DIGITS.indexOf(d).toString())

function StatItem({
  value,
  label,
  icon,
  variant = 'primary',
  children,
}: {
  value: string
  label: string
  icon?: string
  variant?: 'primary' | 'accent'
  children?: React.ReactNode
}) {
  const { locale } = useI18n()
  const [displayValue, setDisplayValue] = useState('0')
  const countRef = useRef(null)

  const numericValue = parseInt(bnToEn(value).replace(/\D/g, '')) || 0
  const suffix = value.replace(/[0-9\u09e6-\u09ef]/g, '')

  useGSAP(
    () => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: numericValue,
        duration: 2.6,
        ease: 'power3.out',
        delay: 0.5,
        onUpdate: () => {
          const rounded = Math.floor(obj.val)
          const str = rounded.toString()
          setDisplayValue(locale === 'bn' ? enToBn(str) : str)
        },
      })
    },
    { dependencies: [numericValue, locale], scope: countRef },
  )

  return (
    <div
      ref={countRef}
      className="group flex min-w-[118px] flex-1 flex-col items-center justify-center gap-1 rounded-[14px] border border-[#e2e7f4] bg-white/70 px-2 py-2.5 text-center shadow-[0_16px_38px_-32px_rgba(11,22,70,.55)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:min-w-[150px] sm:flex-row sm:justify-start sm:gap-3 sm:px-4"
    >
      {icon && (
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] transition-colors duration-300 ${
            variant === 'primary'
              ? 'bg-[#0037d8]/10 text-[#0037d8] group-hover:bg-[#0037d8]/16'
              : 'bg-[#12d7df]/12 text-[#069aa3] group-hover:bg-[#12d7df]/18'
          }`}
        >
          <Icon name={icon as any} size={16} />
        </div>
      )}
      {children}
      <div className="flex min-w-0 flex-col items-center sm:items-start">
        <span className="text-[15px] font-bold leading-none text-[#101321] sm:text-[18px]">
          {displayValue}
          {suffix}
        </span>
        <span className="mt-1 max-w-[12ch] truncate text-[8px] font-medium uppercase leading-snug tracking-normal text-[#687083] sm:max-w-[16ch] sm:text-[10px]">
          {label}
        </span>
      </div>
    </div>
  )
}

const heroImages = [
  { src: '/images/meeting.png', alt: 'Marketing team discussion' },
  { src: '/images/C.png', alt: 'Analytics dashboard' },
  { src: '/images/team.png', alt: 'Software team' },
  { src: '/images/Chat2.png', alt: 'Project preview' },
]

export default function Hero() {
  const { t } = useI18n()
  const { openQuoteModal } = useQuoteModal()
  const tickerServices = useMemo(
    () =>
      t('hero.ticker.services')
        .split('|')
        .map((item) => item.trim())
        .filter(Boolean),
    [t],
  )
  const [serviceIndex, setServiceIndex] = useState(0)
  const activeService = tickerServices[serviceIndex] ?? ''

  const sectionRef = useRef<HTMLElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)
  const tickerTextRef = useRef<HTMLSpanElement>(null)
  const titleLine1Ref = useRef<HTMLSpanElement>(null)
  const titleLine2Ref = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tickerServices.length <= 1) return
    const timer = window.setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % tickerServices.length)
    }, 2200)
    return () => window.clearInterval(timer)
  }, [tickerServices])

  useEffect(() => {
    setServiceIndex(0)
  }, [tickerServices])

  useEffect(() => {
    const el = tickerTextRef.current
    if (!el) return
    gsap.fromTo(
      el,
      { opacity: 0, y: 10, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.45,
        ease: 'power2.out',
      },
    )
  }, [activeService])

  useGSAP(
    () => {
      const floatingCards = gsap.utils.toArray<HTMLElement>('.hero-float-card')

      gsap.set(tickerRef.current, { opacity: 0, y: 26 })
      gsap.set(titleLine1Ref.current, { opacity: 0, y: 44, skewY: -2 })
      gsap.set(titleLine2Ref.current, { opacity: 0, y: 44, skewY: -2 })
      gsap.set(descRef.current, { opacity: 0, y: 24 })
      gsap.set(buttonsRef.current, { opacity: 0, y: 22 })
      gsap.set(trustRef.current, { opacity: 0, y: 18 })
      gsap.set(floatingCards, { opacity: 0, y: 24, scale: 0.92 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to(tickerRef.current, { opacity: 1, y: 0, duration: 0.62 })
        .to(
          titleLine1Ref.current,
          { opacity: 1, y: 0, skewY: 0, duration: 0.78 },
          '-=0.26',
        )
        .to(
          titleLine2Ref.current,
          { opacity: 1, y: 0, skewY: 0, duration: 0.78 },
          '-=0.55',
        )
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.56 }, '-=0.34')
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.28')
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.48 }, '-=0.22')
        .to(
          floatingCards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.78,
            stagger: 0.08,
          },
          0.26,
        )

      gsap.to(floatingRef.current, {
        y: -42,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      })
    },
    { scope: sectionRef },
  )

  const onMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    gsap.to(el, {
      x: (e.clientX - (r.left + r.width / 2)) * 0.24,
      y: (e.clientY - (r.top + r.height / 2)) * 0.24,
      duration: 0.35,
      ease: 'power2.out',
    })
  }

  const onMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: 'elastic.out(1,0.4)',
    })
  }

  const stats = [
    {
      value: t('hero.stats.marketing.value'),
      label: t('hero.stats.marketing.label'),
      icon: 'chart',
    },
    {
      value: t('hero.stats.ecommerce.value'),
      label: t('hero.stats.ecommerce.label'),
      icon: 'cart',
    },
    {
      value: t('hero.stats.custom.value'),
      label: t('hero.stats.custom.label'),
      icon: 'sparkle',
      variant: 'accent' as const,
    },
    {
      value: t('hero.stats.clients.value'),
      label: t('hero.stats.clients.label'),
      avatar: true,
    },
  ].filter((item) => !item.value.startsWith('hero.') && !item.label.startsWith('hero.'))

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-14 text-[#101321] transition-colors duration-300 lg:pt-32 lg:pb-16"
      style={{
        background:
          'radial-gradient(circle at 12% 72%, rgba(0,55,216,.16), transparent 30%), radial-gradient(circle at 88% 75%, rgba(18,215,223,.15), transparent 28%), linear-gradient(180deg,#f9fbff 0%,#f6f7fc 48%,#fbf9ff 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-1/2 top-[56%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6d7cff]/20" />
        <div className="absolute left-1/2 top-[56%] h-[1180px] w-[1180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6d7cff]/18" />
        <div className="absolute left-1/2 top-[56%] h-[1540px] w-[1540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6d7cff]/12" />
        <div className="absolute left-[61%] top-[17%] h-4 w-4 rounded-full bg-[#5a4cff] shadow-[0_0_0_8px_rgba(90,76,255,.10)]" />
        <div className="absolute left-[8%] top-[48%] h-px w-[16%] bg-[linear-gradient(90deg,transparent,rgba(90,76,255,.22),transparent)]" />
        <div className="absolute right-[8%] top-[54%] h-px w-[16%] bg-[linear-gradient(90deg,transparent,rgba(90,76,255,.22),transparent)]" />
      </div>

      <div
        ref={floatingRef}
        className="pointer-events-none absolute inset-0 z-[1] hidden xl:block"
        aria-hidden="true"
      >
        <div className="hero-float-card absolute left-[-2%] top-[28%] h-[210px] w-[245px] -rotate-8 overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_28px_60px_-34px_rgba(11,22,70,.55)] 2xl:left-[1%] 2xl:h-[245px] 2xl:w-[300px]">
          <img src="/images/meeting.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="hero-float-card absolute left-[7%] top-[12%] h-[195px] w-[225px] rotate-[7deg] overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_28px_60px_-34px_rgba(11,22,70,.55)] 2xl:left-[9%] 2xl:h-[225px] 2xl:w-[265px]">
          <img src="/images/C.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="hero-float-card absolute right-[4%] top-[14%] h-[215px] w-[230px] rotate-[8deg] overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_28px_60px_-34px_rgba(11,22,70,.55)] 2xl:right-[6%] 2xl:h-[260px] 2xl:w-[280px]">
          <img src="/images/team.png" alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div className="hero-float-card absolute right-[-2%] top-[43%] h-[215px] w-[245px] -rotate-6 overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_28px_60px_-34px_rgba(11,22,70,.55)] 2xl:right-[1%] 2xl:h-[250px] 2xl:w-[290px]">
          <img src="/images/Chat2.png" alt="" className="h-full w-full object-cover object-center" />
        </div>
      </div>

      <Container width="wide" className="relative z-10">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center 2xl:max-w-[860px]">
          <div
            ref={tickerRef}
            className="mb-7 inline-flex min-h-10 max-w-full items-center gap-2 rounded-full border border-[#dfe5f5] bg-white/85 px-3 py-1.5 text-[11px] shadow-[0_18px_45px_-28px_rgba(11,22,70,.45)] backdrop-blur-md sm:min-h-11 sm:px-4 sm:text-xs"
          >
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0037d8] text-white sm:h-6 sm:w-6">
              <Icon name="sparkle" size={12} />
            </span>
            <span className="font-semibold text-[#687083]">
              {t('hero.ticker.label')}
            </span>
            <span
              ref={tickerTextRef}
              className="inline-block max-w-[28ch] truncate bg-[linear-gradient(90deg,#12bfc8,#0037d8)] bg-clip-text font-semibold text-transparent"
            >
              {activeService}
            </span>
          </div>

          <h1 className="mb-5 text-[clamp(30px,5.6vw,68px)] font-bold leading-[1.06] tracking-normal text-[#101321]">
            <span ref={titleLine1Ref} className="block">
              {t('hero.title.line1Prefix')}{' '}
              <span className="inline-block bg-[linear-gradient(90deg,#2276ff,#5b45f8)] bg-clip-text text-transparent">
                {t('hero.title.line1Highlight')}
              </span>
            </span>
            <span ref={titleLine2Ref} className="mt-2 block text-[clamp(25px,4vw,44px)] font-semibold leading-[1.12]">
              {t('hero.title.line2Prefix')}
              {t('hero.title.line2Prefix') ? ' ' : ''}
              <span className="text-[#4037d7]">{t('hero.title.line2Highlight')}</span>
            </span>
          </h1>

          <p
            ref={descRef}
            className="mb-9 max-w-[660px] text-[16px] leading-relaxed text-[#687083] sm:text-[19px]"
          >
            {t('hero.description')}
          </p>

          <div
            ref={buttonsRef}
            className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <ButtonLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                openQuoteModal()
              }}
              variant="primary"
              size="lg"
              shape="rounded"
              className="group min-w-[220px] justify-center text-[13px] lg:text-sm"
              onMouseMove={onMagneticMove}
              onMouseLeave={onMagneticLeave}
            >
              Book Free Consultation
              <Icon
                name="arrow_right"
                size={16}
                className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </ButtonLink>
            <ButtonLink
              href="https://wa.me/8801310799699"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              shape="rounded"
              className="min-w-[190px] justify-center border-[#d5dbe8] bg-white/80 text-[13px] lg:text-sm"
              onMouseMove={onMagneticMove}
              onMouseLeave={onMagneticLeave}
            >
              <Icon
                name="whatsapp"
                size={14}
                className="opacity-80 lg:h-4 lg:w-4 text-[#25D366]"
              />
              {t('support.whatsapp')}
            </ButtonLink>
          </div>

          <div
            ref={trustRef}
            className="mt-1 flex w-full max-w-[760px] flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {stats.map((item) => (
              <StatItem
                key={`${item.value}-${item.label}`}
                value={item.value}
                label={item.label}
                icon={item.icon}
                variant={item.variant}
              >
                {item.avatar && (
                  <div className="mb-1 flex shrink-0 -space-x-2 sm:mb-0 sm:-space-x-3">
                    <img
                      src="/images/avatar3.png"
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
              </StatItem>
            ))}
          </div>

          <div className="mt-10 grid w-full grid-cols-2 gap-3 xl:hidden">
            {heroImages.map(({ src, alt }) => (
              <div
                key={src}
                className="aspect-[1.12/1] overflow-hidden rounded-[22px] border border-white/80 bg-white shadow-[0_18px_42px_-28px_rgba(11,22,70,.55)]"
              >
                <img src={src} alt={alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
