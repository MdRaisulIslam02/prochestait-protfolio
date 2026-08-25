"use client";

import { useState } from "react";
import { contactApi } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { ContactSetting } from "@/types";

interface Props {
  setting: ContactSetting;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceType: string;
  message: string;
}

const EMPTY: FormData = { name: "", email: "", phone: "", subject: "", serviceType: "", message: "" };
type Errors = Partial<Record<keyof FormData | "submit", string>>;

const SERVICE_KEYS = ["ecommerce", "webapp", "mobile", "pos", "custom", "other"] as const;

const inputBase =
  "w-full rounded-xl border border-(--border) bg-(--surface-2) px-4 py-3 text-[14px] text-(--text) placeholder:text-(--text-muted) outline-none transition-all duration-150 focus:border-(--brand-primary) focus:ring-2 focus:ring-(--brand-primary)/15";

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-(--text)">
        {label}{required && <span className="ml-0.5 text-(--brand-accent)">*</span>}
      </label>
      {children}
      {error && <p className="mt-0.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const STEP_ICONS = [
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
];

const STEP_KEYS = ["s1", "s2", "s3", "s4"] as const;

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.5 2 2 0 0 1 3.67 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.02c1.09 1.81 2.54 3.45 4.27 4.77l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function ContactForm({ setting }: Props) {
  const { t, locale } = useI18n();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t("contact.form.errors.nameRequired");
    if (!form.email.trim()) e.email = t("contact.form.errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("contact.form.errors.emailInvalid");
    if (!form.message.trim()) e.message = t("contact.form.errors.messageRequired");
    return e;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      await contactApi.submit({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: form.serviceType ? `[${form.serviceType}] ${form.subject}`.trim() : form.subject || undefined,
        message: form.message,
      });
      setSuccess(true);
    } catch {
      setErrors({ submit: t("contact.form.errors.submitFailed") });
    } finally {
      setSubmitting(false);
    }
  }

  const address = locale === "bn" ? setting.office_address_bn : setting.office_address_en;
  const hours = locale === "bn" ? setting.business_hours_bn : setting.business_hours_en;

  const officeRows = [
    hours && { icon: <ClockIcon />, label: t("contact.office.hoursLabel"), value: hours },
    address && { icon: <PinIcon />, label: t("contact.office.addressLabel"), value: address },
    setting.email && { icon: <MailIcon />, label: t("contact.office.emailLabel"), value: setting.email },
    setting.phone && { icon: <PhoneIcon />, label: t("contact.office.phoneLabel"), value: setting.phone },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; value: string }[];

  return (
    <section className="bg-(--bg) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("contact.form.eyebrow")}
          title={t("contact.form.title")}
          subtitle={t("contact.form.subtitle")}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* ── Left: Form ──────────────────────────────── */}
          <Reveal variant="fade-up" delay={0.05}>
            {success ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-2xl border border-(--border) bg-(--surface) p-10 text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ background: "color-mix(in oklab, var(--brand-primary) 12%, transparent)" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ background: "var(--brand-primary)" }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-(--text)">{t("contact.form.success.title")}</h3>
                  <p className="mx-auto mt-3 max-w-[36ch] text-[15px] leading-relaxed text-(--text-muted)">
                    {t("contact.form.success.body")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => { setSuccess(false); setForm(EMPTY); }}
                  className="rounded-xl border border-(--border) bg-(--surface-2) px-6 py-2.5 text-sm font-semibold text-(--text) transition hover:border-(--border-strong) hover:bg-(--surface)"
                >
                  {t("contact.form.success.sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-(--border) bg-(--surface) p-7 md:p-8">

                {/* Service type selector */}
                <div className="mb-6">
                  <p className="mb-3 text-[13px] font-semibold text-(--text)">{t("contact.form.serviceLabel")}</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_KEYS.map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => set("serviceType", form.serviceType === key ? "" : key)}
                        className="rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all duration-150"
                        style={
                          form.serviceType === key
                            ? { background: "var(--brand-primary)", borderColor: "var(--brand-primary)", color: "white" }
                            : { background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--text-muted)" }
                        }
                      >
                        {t(`contact.form.services.${key}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t("contact.form.fields.name")} required error={errors.name}>
                    <input type="text" className={inputBase} placeholder={t("contact.form.fields.namePlaceholder")}
                      value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
                  </Field>

                  <Field label={t("contact.form.fields.email")} required error={errors.email}>
                    <input type="email" className={inputBase} placeholder={t("contact.form.fields.emailPlaceholder")}
                      value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
                  </Field>

                  <Field label={t("contact.form.fields.phone")} error={errors.phone}>
                    <input type="tel" className={inputBase} placeholder={t("contact.form.fields.phonePlaceholder")}
                      value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
                  </Field>

                  <Field label={t("contact.form.fields.subject")} error={errors.subject}>
                    <input type="text" className={inputBase} placeholder={t("contact.form.fields.subjectPlaceholder")}
                      value={form.subject} onChange={(e) => set("subject", e.target.value)} />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label={t("contact.form.fields.message")} required error={errors.message}>
                    <textarea rows={5} className={inputBase + " resize-none"}
                      placeholder={t("contact.form.fields.messagePlaceholder")}
                      value={form.message} onChange={(e) => set("message", e.target.value)} />
                  </Field>
                </div>

                {errors.submit && (
                  <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-500">
                    {errors.submit}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:translate-y-0 disabled:shadow-none"
                  style={{ background: "var(--brand-primary)", boxShadow: "0 8px 24px color-mix(in oklab, var(--brand-primary) 28%, transparent)" }}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      {t("contact.form.submitting")}
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      {t("contact.form.submit")}
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>

          {/* ── Right: Process + Office ──────────────────── */}
          <Reveal variant="fade-left" delay={0.1} className="flex flex-col gap-6">

            {/* What happens next */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-(--brand-primary)">{t("contact.process.eyebrow")}</p>
              <h3 className="mb-5 text-[16px] font-bold text-(--text)">{t("contact.process.title")}</h3>
              <div className="flex flex-col gap-0">
                {STEP_KEYS.map((key, i) => (
                  <div key={key} className="relative flex gap-4">
                    {/* Connector line */}
                    {i < STEP_KEYS.length - 1 && (
                      <div className="absolute left-[19px] top-10 h-full w-px" style={{ background: "var(--border)" }} />
                    )}
                    {/* Step icon */}
                    <div className="relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-(--border) bg-(--surface-2)"
                      style={{ color: "var(--brand-primary)" }}>
                      {STEP_ICONS[i]}
                    </div>
                    <div className="pb-5">
                      <p className="text-[14px] font-semibold text-(--text)">{t(`contact.process.steps.${key}.title`)}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-(--text-muted)">{t(`contact.process.steps.${key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office info */}
            {officeRows.length > 0 && (
              <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-(--brand-primary)">{t("contact.info.eyebrow")}</p>
                <div className="flex flex-col gap-3">
                  {officeRows.map((row, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-(--brand-primary)"
                        style={{ background: "color-mix(in oklab, var(--brand-primary) 10%, transparent)" }}>
                        {row.icon}
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">{row.label}</p>
                        <p className="mt-0.5 text-[13px] font-medium text-(--text)">{row.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
