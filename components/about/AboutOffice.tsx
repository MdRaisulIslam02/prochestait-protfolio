"use client";

import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { AboutSetting } from "@/types";

interface Props {
  setting: AboutSetting;
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-(--border) bg-(--surface-2) p-4 transition-colors hover:border-(--border-strong)">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-(--brand-primary)"
        style={{ background: "color-mix(in oklab, var(--brand-primary) 10%, transparent)" }}>
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">{label}</p>
        <p className="mt-1 text-sm font-medium text-(--text)">{value}</p>
      </div>
    </div>
  );
}

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.5 2 2 0 0 1 3.67 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.02c1.09 1.81 2.54 3.45 4.27 4.77l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function AboutOffice({ setting }: Props) {
  const { t, locale } = useI18n();

  const address = locale === "bn" ? setting.office_address_bn : setting.office_address_en;
  const hours = locale === "bn" ? setting.business_hours_bn : setting.business_hours_en;

  const rows = [
    hours && { icon: <ClockIcon />, label: t("about.office.hoursLabel"), value: hours },
    address && { icon: <PinIcon />, label: t("about.office.addressLabel"), value: address },
    setting.email && { icon: <MailIcon />, label: t("about.office.emailLabel"), value: setting.email },
    setting.phone && { icon: <PhoneIcon />, label: t("about.office.phoneLabel"), value: setting.phone },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; value: string }[];

  return (
    <section className="bg-(--bg-soft) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("about.office.eyebrow")}
          title={t("about.office.title")}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <Reveal variant="stagger" className="grid gap-4 content-start">
            {rows.map((row, i) => (
              <InfoRow key={i} {...row} />
            ))}
          </Reveal>

          {/* Map or decorative card */}
          <Reveal variant="fade-left" delay={0.1}>
            {setting.map_embed_url ? (
              <div className="overflow-hidden rounded-2xl border border-(--border) h-full min-h-[300px]">
                <iframe
                  src={setting.map_embed_url}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center gap-5 rounded-2xl border border-(--border) bg-(--surface) p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-(--brand-primary)"
                  style={{ background: "color-mix(in oklab, var(--brand-primary) 10%, transparent)" }}>
                  <PinIcon />
                </div>
                <div>
                  <p className="text-lg font-bold text-(--text)">Sector-10, Uttara</p>
                  <p className="mt-1 text-sm text-(--text-muted)">Dhaka, Bangladesh</p>
                </div>
                <div className="rounded-lg border border-(--border) bg-(--surface-2) px-4 py-2 text-xs font-medium text-(--text-muted)">
                  {t("about.office.daysNote")}
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
