"use client";

import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { ContactSetting } from "@/types";

interface Props {
  setting: ContactSetting;
}

const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.5 2 2 0 0 1 3.67 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.02c1.09 1.81 2.54 3.45 4.27 4.77l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MessengerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

interface ChannelCard {
  icon: React.JSX.Element;
  title: string;
  desc: string;
  cta: string;
  tag: string;
  href: string;
  color: string;
  gradient: string;
}

export default function ContactInfo({ setting }: Props) {
  const { t } = useI18n();

  const whatsappHref = setting.whatsapp
    ? `https://wa.me/${setting.whatsapp.replace(/\D/g, "")}`
    : null;

  const channels: ChannelCard[] = [];
  if (whatsappHref) channels.push({
    icon: <WhatsAppIcon />,
    title: t("contact.channels.whatsapp.title"),
    desc: t("contact.channels.whatsapp.desc"),
    cta: t("contact.channels.whatsapp.cta"),
    tag: t("contact.channels.whatsapp.tag"),
    href: whatsappHref,
    color: "#25D366",
    gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
  });
  if (setting.phone) channels.push({
    icon: <PhoneIcon />,
    title: t("contact.channels.phone.title"),
    desc: t("contact.channels.phone.desc"),
    cta: t("contact.channels.phone.cta"),
    tag: t("contact.channels.phone.tag"),
    href: `tel:${setting.phone}`,
    color: "var(--brand-primary)",
    gradient: "linear-gradient(135deg, var(--brand-primary) 0%, color-mix(in oklab, var(--brand-primary) 60%, #1e40af) 100%)",
  });
  if (setting.email) channels.push({
    icon: <MailIcon />,
    title: t("contact.channels.email.title"),
    desc: t("contact.channels.email.desc"),
    cta: t("contact.channels.email.cta"),
    tag: t("contact.channels.email.tag"),
    href: `mailto:${setting.email}`,
    color: "var(--brand-accent)",
    gradient: "linear-gradient(135deg, var(--brand-accent) 0%, color-mix(in oklab, var(--brand-accent) 60%, #7c3aed) 100%)",
  });
  if (setting.facebook_messenger_url) channels.push({
    icon: <MessengerIcon />,
    title: t("contact.channels.messenger.title"),
    desc: t("contact.channels.messenger.desc"),
    cta: t("contact.channels.messenger.cta"),
    tag: t("contact.channels.messenger.tag"),
    href: setting.facebook_messenger_url,
    color: "#0084FF",
    gradient: "linear-gradient(135deg, #0084FF 0%, #0040C8 100%)",
  });

  if (channels.length === 0) return null;

  return (
    <section className="bg-(--bg-soft) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("contact.channels.eyebrow")}
          title={t("contact.channels.title")}
          subtitle={t("contact.channels.subtitle")}
        />

        <Reveal variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-transparent"
            >
              {/* Gradient top bar */}
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: ch.gradient }}
              />
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 20% 0%, color-mix(in oklab, ${ch.color} 8%, transparent), transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `color-mix(in oklab, ${ch.color} 15%, transparent)`, color: ch.color }}
              >
                {ch.icon}
              </div>

              {/* Tag */}
              <span
                className="relative mb-3 self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                style={{ background: `color-mix(in oklab, ${ch.color} 12%, transparent)`, color: ch.color }}
              >
                {ch.tag}
              </span>

              <h3 className="relative mb-2 text-[17px] font-bold text-(--text)">{ch.title}</h3>
              <p className="relative flex-1 text-[13px] leading-relaxed text-(--text-muted)">{ch.desc}</p>

              {/* CTA row */}
              <div
                className="relative mt-5 flex items-center gap-1.5 text-[13px] font-semibold transition-gap duration-200"
                style={{ color: ch.color }}
              >
                {ch.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
