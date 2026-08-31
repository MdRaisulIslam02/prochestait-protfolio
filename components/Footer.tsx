'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from './Icon'
import { useI18n } from '@/i18n/I18nProvider'

export default function Footer() {
  const { t } = useI18n()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const cur = document.documentElement.getAttribute('data-theme')
    if (cur === 'dark' || cur === 'light') setTheme(cur)

    const mo = new MutationObserver(() => {
      const next = document.documentElement.getAttribute('data-theme')
      if (next === 'dark' || next === 'light') setTheme(next)
    })
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => mo.disconnect()
  }, [])

  return (
    <footer
      id="contact"
      className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 — Brand */}
          <div className="footer-brand">
            <a
              href="#home"
              className="inline-block mb-4 transition-transform hover:scale-[1.02]">
              <Image
                src={
                  theme === 'dark'
                    ? '/images/whitelogo.png'
                    : '/images/prochestalogo.png'
                }
                alt={t('footer.brand.logoAlt')}
                width={180}
                height={38}
                className="h-auto w-40 sm:w-48"
              />
            </a>
            <p className="footer-tagline">{t('footer.brand.tagline')}</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/prochestait1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.social.facebook')}>
                <Icon
                  name="facebook"
                  size={16}
                />
              </a>
              <a
                href="https://www.instagram.com/prochestait1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.social.instagram')}>
                <Icon
                  name="instagram"
                  size={16}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/prochestait1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.social.linkedin')}>
                <Icon
                  name="linkedin"
                  size={16}
                />
              </a>
              <a
                href="https://www.youtube.com/@ProchestaIT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.social.youtube')}>
                <Icon
                  name="youtube"
                  size={16}
                />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4>{t('footer.quickLinks.title')}</h4>
            <ul>
              <li>
                <Link href="/services">{t('footer.quickLinks.services')}</Link>
              </li>
              <li>
                <Link href="/portfolio">{t('footer.quickLinks.portfolio')}</Link>
              </li>
              <li>
                <Link href="/about">{t('footer.quickLinks.about')}</Link>
              </li>
              <li>
                <Link href="/contact">{t('footer.quickLinks.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h4>{t('footer.legal.title')}</h4>
            <ul>
              <li>
                <Link href="/terms">{t('footer.legal.terms')}</Link>
              </li>
              <li>
                <Link href="/return-policy">{t('footer.legal.returnPolicy')}</Link>
              </li>
              <li>
                <Link href="/support-policy">{t('footer.legal.supportPolicy')}</Link>
              </li>
              <li>
                <Link href="/privacy-policy">{t('footer.legal.privacyPolicy')}</Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="footer-contact-col">
            <h4>{t('footer.office.title')}</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon
                    name="map_pin"
                    size={15}
                  />
                </span>
                <div className="footer-contact-body">
                  <span>{t('footer.office.address.line1')} {t('footer.office.address.line2')}</span>
                  <span>{t('footer.office.address.line3')}</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon
                    name="whatsapp"
                    size={16}
                  />
                </span>
                <div className="footer-contact-body">
                  <span className="footer-contact-label">
                    {t('footer.office.helpline')}
                  </span>
                  <a
                    href="https://wa.me/8801708597566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-hotline">
                    +8801708597566
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon
                    name="mail"
                    size={15}
                  />
                </span>
                <div className="footer-contact-body">
                  <span className="footer-contact-label">
                    {t('footer.office.emailLabel')}
                  </span>
                  <a
                    href="mailto:info@prochestait.com"
                    className="footer-hotline text-[15px]">
                    info@prochestait.com
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon
                    name="clock"
                    size={15}
                  />
                </span>
                <div className="footer-contact-body">
                  <span className="footer-contact-label">
                    {t('footer.office.hoursLabel')}
                  </span>
                  <span className="footer-hotline text-[14px]">
                    {t('footer.office.hoursValue')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom py-1 flex justify-center">
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  )
}
