'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import Icon from './Icon'
import Container from './ui/Container'
import ButtonLink from './ui/ButtonLink'
import SectionBackground from './ui/SectionBackground'
import { useI18n } from '@/i18n/I18nProvider'
import { useQuoteModal } from './QuoteModalProvider'

const enToBn = (str: string) =>
  str.replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d)])
const bnToEn = (str: string) =>
  str.replace(/[০-৯]/g, (d) => '০১২৩৪৫৬৭৮৯'.indexOf(d).toString())

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
  const suffix = value.replace(/[0-9০-৯]/g, '')

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
      className="group flex flex-1 min-w-0 flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-1 sm:gap-3 rounded-2xl border border-(--border) bg-(--surface-2)/40 px-1.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-(--surface-2)/60 hover:shadow-lg hover:border-(--brand-primary)/20 text-center sm:text-left">
      {icon && (
        <div
          className={`flex h-5 w-5 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-[6px] sm:rounded-xl transition-colors duration-300 ${
            variant === 'primary'
              ? 'bg-(--brand-primary)/10 text-(--brand-primary) group-hover:bg-(--brand-primary)/20'
              : 'bg-(--brand-accent)/10 text-(--brand-accent) group-hover:bg-(--brand-accent)/20'
          }`}>
          <Icon
            name={icon as any}
            size={18}
            className="h-3 w-3 sm:h-5 sm:w-5"
          />
        </div>
      )}
      {children}
      <div className="flex flex-col min-w-0 items-center sm:items-start">
        <span className="text-[11px] sm:text-[19px] font-extrabold text-(--text) leading-none tracking-tight truncate">
          {displayValue}
          {suffix}
        </span>
        <span className="text-[7px] sm:text-[11px] font-medium text-(--text-muted) leading-snug mt-0.5 whitespace-nowrap uppercase tracking-widest sm:tracking-wider opacity-80 group-hover:opacity-100 transition-opacity truncate">
          {label}
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useI18n()
  const { openQuoteModal } = useQuoteModal()
  const heroCardDescription = t('hero.card.description').split('\n')
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
  const rightColRef = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)
  const tickerTextRef = useRef<HTMLSpanElement>(null)
  const titleLine1Ref = useRef<HTMLSpanElement>(null)
  const titleLine2Ref = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const meetingRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const bookRef = useRef<HTMLDivElement>(null)

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

  // Smooth blur-fade on each ticker text swap
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

  // Entrance timeline + scroll parallax
  useGSAP(
    () => {
      // ── Initial hidden states (runs before paint via useLayoutEffect) ──
      gsap.set(tickerRef.current, { opacity: 0, y: 28 })
      gsap.set(titleLine1Ref.current, { opacity: 0, y: 42, skewY: -2 })
      gsap.set(titleLine2Ref.current, { opacity: 0, y: 42, skewY: -2 })
      gsap.set(descRef.current, { opacity: 0, y: 26 })
      gsap.set(buttonsRef.current, { opacity: 0, y: 22 })
      gsap.set(trustRef.current, { opacity: 0, y: 18 })
      gsap.set(blobRef.current, { opacity: 0, scale: 0.68 })
      gsap.set(meetingRef.current, { opacity: 0, x: 38, y: -20, rotate: 3 })
      gsap.set(teamRef.current, { opacity: 0, x: 46, y: 28 })
      gsap.set(bookRef.current, { opacity: 0, x: -28, y: 32, scale: 0.91 })

      // ── Entrance timeline ──
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Left column — cascading reveal
      tl.to(tickerRef.current, { opacity: 1, y: 0, duration: 0.65 })
        .to(
          titleLine1Ref.current,
          { opacity: 1, y: 0, skewY: 0, duration: 0.78 },
          '-=0.28',
        )
        .to(
          titleLine2Ref.current,
          { opacity: 1, y: 0, skewY: 0, duration: 0.78 },
          '-=0.55',
        )
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.58 }, '-=0.32')
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.52 }, '-=0.28')
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.48 }, '-=0.20')

      // Right column — cards fly into place
      tl.to(
        blobRef.current,
        { opacity: 0.95, scale: 1, duration: 1.15, ease: 'power2.out' },
        0.18,
      )
        .to(
          meetingRef.current,
          { opacity: 1, x: 0, y: 0, rotate: 0, duration: 0.92 },
          0.38,
        )
        .to(teamRef.current, { opacity: 1, x: 0, y: 0, duration: 0.92 }, 0.52)
        .to(
          bookRef.current,
          { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.92 },
          0.62,
        )

      // ── Scroll parallax on right column ──
      gsap.to(rightColRef.current, {
        y: -55,
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

  // Magnetic pull on CTA buttons
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

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[90svh] items-center overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-16 text-(--text) transition-colors duration-300"
      style={{
        background:
          "linear-gradient(180deg,color-mix(in oklab,var(--bg) 92%,#ffffff) 0%,color-mix(in oklab,var(--bg-alt) 95%,#ffffff) 100%)",
      }}
    >
      <SectionBackground variant="aurora" />
      <SectionBackground variant="floating-services" />

      <Container width="wide" className="relative z-10">
        <div className="grid items-center gap-12 lg:gap-8 xl:gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* ── Left Column ── */}
          <div className="flex flex-col items-start justify-center">
            {/* Service ticker */}
            <div
              ref={tickerRef}
              className="mb-6 lg:mb-8 inline-flex min-h-10 items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-[11px] shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)] backdrop-blur-md sm:min-h-11 sm:px-4 sm:text-xs"
            >
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--brand-primary) text-white sm:h-6 sm:w-6">
                <Icon name="sparkle" size={12} />
              </span>
              <span className="font-semibold text-(--text-muted)">
                {t("hero.ticker.label")}
              </span>
              <span
                ref={tickerTextRef}
                className="inline-block max-w-[28ch] truncate bg-[linear-gradient(90deg,var(--brand-accent),var(--brand-primary))] bg-clip-text font-semibold text-transparent"
              >
                {activeService}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-5 lg:mb-6 text-[clamp(22px,5.4vw,46px)] font-extrabold leading-[1.12] tracking-tight text-(--text)">
              <span ref={titleLine1Ref} className="block">
                {t("hero.title.line1Prefix")}{" "}
                <span className="inline-block bg-[linear-gradient(90deg,var(--brand-accent),var(--brand-primary))] bg-clip-text text-transparent">
                  {t("hero.title.line1Highlight")}
                </span>
              </span>
              <span ref={titleLine2Ref} className="mt-1 block">
                {t("hero.title.line2Prefix")}
                {t("hero.title.line2Prefix") ? " " : ""}
                {t("hero.title.line2Highlight")}
              </span>
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="mb-8 lg:mb-10 max-w-[480px] text-[15px] lg:text-[17px] leading-relaxed text-(--text-muted)"
            >
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="mb-12 flex flex-wrap items-center gap-3 sm:gap-4 lg:mb-14"
            >
              <ButtonLink
                href="#"
                // onClick={(e) => {
                //   e.preventDefault();
                //   openQuoteModal();
                // }}
                variant="primary"
                size="lg"
                shape="rounded"
                className="group text-[13px] lg:text-sm"
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
                className="text-[13px] lg:text-sm"
                onMouseMove={onMagneticMove}
                onMouseLeave={onMagneticLeave}
              >
                <Icon
                  name="whatsapp"
                  size={14}
                  className="opacity-80 lg:w-4 lg:h-4 text-[#25D366]"
                />
                {t("support.whatsapp")}
              </ButtonLink>
            </div>

            {/* Stats Section */}
            <div
              ref={trustRef}
              className="mt-2 flex items-center gap-2 sm:gap-4 lg:gap-5 w-full"
            >
              <StatItem
                value={t("hero.stats.marketing.value")}
                label={t("hero.stats.marketing.label")}
                icon="chart"
              />
              <StatItem
                value={t("hero.stats.ecommerce.value")}
                label={t("hero.stats.ecommerce.label")}
                icon="cart"
              />
              <StatItem
                value={t("hero.stats.custom.value")}
                label={t("hero.stats.custom.label")}
                icon="sparkle"
                variant="accent"
              />
              <StatItem
                value={t("hero.stats.clients.value")}
                label={t("hero.stats.clients.label")}
              >
                <div className="flex -space-x-2 sm:-space-x-3 shrink-0 mr-0 sm:mr-1.5 mb-1 sm:mb-0">
                  <img
                    src="/images/avatar3.png"
                    alt="User"
                    className="h-6 w-6 sm:h-10 sm:w-10 rounded-full border border-(--bg) sm:border-2 object-cover shadow-sm group-hover:scale-105 transition-transform"
                  />
                </div>
              </StatItem>
            </div>
          </div>

          {/* ── Right Column — Image & Stats Composition ── */}
          <div
            ref={rightColRef}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "620px",
              aspectRatio: "1.28 / 1",
              margin: "0 auto",
              padding: "12px",
              boxSizing: "border-box",
            }}
          >
            {/* Top-left Image */}
            <div
              style={{
                position: "absolute",
                top: "2%",
                left: "1%",
                width: "56%",
                height: "45%",
                overflow: "hidden",
                borderRadius: "24px",
                background: "#F4F1FA",
                border: "1px solid rgba(82,22,203,0.1)",
                boxShadow: "0 22px 50px -30px rgba(30,10,70,0.4)",
                transform: "rotate(-1deg)",
              }}
            >
              <img
                src="/images/C.png"
                alt="Analytics dashboard"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            {/* Top-right Image */}
            <div
              style={{
                position: "absolute",
                top: "6%",
                right: "1%",
                width: "39%",
                height: "38%",
                overflow: "hidden",
                borderRadius: "24px",
                background: "#F4F1FA",
                border: "1px solid rgba(240,134,15,0.12)",
                boxShadow: "0 22px 50px -30px rgba(30,10,70,0.4)",
                transform: "rotate(1.5deg)",
              }}
            >
              <img
                src="/images/Chat.png"
                alt="Software developer working"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            {/* Bottom-left Image */}
            <div
              style={{
                position: "absolute",
                left: "1%",
                bottom: "5%",
                width: "40%",
                height: "43%",
                overflow: "hidden",
                borderRadius: "24px",
                background: "#F4F1FA",
                border: "1px solid rgba(240,134,15,0.12)",
                boxShadow: "0 22px 50px -30px rgba(30,10,70,0.4)",
                transform: "rotate(1deg)",
              }}
            >
              <img
                src="/images/Chat1.png"
                alt="UI UX design project"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            {/* Bottom-right Image */}
            <div
              style={{
                position: "absolute",
                right: "1%",
                bottom: "1%",
                width: "55%",
                height: "50%",
                overflow: "hidden",
                borderRadius: "24px",
                background: "#F4F1FA",
                border: "1px solid rgba(82,22,203,0.1)",
                boxShadow: "0 22px 50px -30px rgba(30,10,70,0.4)",
                transform: "rotate(-1deg)",
              }}
            >
              <img
                src="/images/Chat2.png"
                alt="Software team working together"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            {/* Center Brand Decoration */}
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "43%",
                zIndex: 5,
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                color: "#FFFFFF",
                background: "linear-gradient(135deg, #0037d8, #12d7df)",
                border: "4px solid #FFFFFF",
                boxShadow: "0 12px 25px -10px rgba(82,22,203,0.55)",
                transform: "rotate(8deg)",
              }}
            >
              <span
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#FFFFFF",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
