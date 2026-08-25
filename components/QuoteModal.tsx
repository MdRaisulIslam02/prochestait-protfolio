"use client";

import { useEffect, useRef, useState } from "react";
import { quotationsApi } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";
import Icon from "./Icon";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service_type: string;
  budget_range: string;
  timeline: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service_type: "",
  budget_range: "",
  timeline: "",
  message: "",
};

const BUDGET_LABELS: Record<string, string> = {
  under25k: "Under ৳25,000",
  "25k1l": "৳25,000 – ৳1,00,000",
  "1l5l": "৳1,00,000 – ৳5,00,000",
  "5l15l": "৳5,00,000 – ৳15,00,000",
  above15l: "৳15,00,000+",
  discuss: "Let's discuss",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  oneTwo: "1–2 months",
  threeSix: "3–6 months",
  sixPlus: "6+ months",
  flexible: "Flexible",
};

const SERVICE_ICONS: Record<string, string> = {
  ecommerce: "cart",
  webapp: "globe",
  mobile: "mobile",
  pos: "invoice",
  erp: "layout",
  custom: "code",
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { t } = useI18n();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | "submit", string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      if (step === 3) textareaRef.current?.focus();
      else inputRef.current?.focus();
    }, 80);
    return () => clearTimeout(timer);
  }, [isOpen, step]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  function handleClose() {
    onClose();
    setTimeout(() => {
      setStep(1);
      setForm(EMPTY_FORM);
      setErrors({});
      setSuccess(false);
    }, 300);
  }

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validateStep1(): boolean {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = t("quoteModal.errors.nameRequired");
    if (!form.email.trim()) e.email = t("quoteModal.errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("quoteModal.errors.emailInvalid");
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep3(): boolean {
    if (!form.message.trim()) {
      setErrors({ message: t("quoteModal.errors.messageRequired") });
      return false;
    }
    return true;
  }

  function next() {
    if (step === 1 && !validateStep1()) return;
    setStep((s) => (s < 3 ? ((s + 1) as Step) : s));
  }

  function back() {
    setStep((s) => (s > 1 ? ((s - 1) as Step) : s));
    setErrors({});
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!validateStep3()) return;

    setSubmitting(true);
    setErrors({});
    try {
      await quotationsApi.submit({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        company: form.company || undefined,
        service_type: form.service_type || undefined,
        budget_range: form.budget_range ? BUDGET_LABELS[form.budget_range] : undefined,
        timeline: form.timeline ? TIMELINE_LABELS[form.timeline] : undefined,
        message: form.message,
      });
      setSuccess(true);
    } catch {
      setErrors({ submit: t("quoteModal.errors.submitFailed") });
    } finally {
      setSubmitting(false);
    }
  }

  const serviceKeys = ["ecommerce", "webapp", "mobile", "pos", "erp", "custom"] as const;
  const budgetKeys = ["under25k", "25k1l", "1l5l", "5l15l", "above15l", "discuss"] as const;
  const timelineKeys = ["asap", "oneTwo", "threeSix", "sixPlus", "flexible"] as const;
  const stepLabels = ["contact", "project", "message"] as const;

  return (
    <>
      {/* Backdrop */}
      <div
        className={["qm-backdrop", isOpen ? "qm-backdrop--visible" : ""].join(" ")}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Dialog panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t("quoteModal.title")}
        className={["qm-dialog", isOpen ? "qm-dialog--visible" : ""].join(" ")}
      >
        {/* Accent stripe */}
        <div className="qm-stripe" aria-hidden="true" />

        {/* Header */}
        <div className="qm-header">
          <div>
            {!success && (
              <p className="qm-step-label mono">
                {t("quoteModal.step")} {step} {t("quoteModal.of")} 3 —{" "}
                {t(`quoteModal.steps.${stepLabels[step - 1]}`)}
              </p>
            )}
            <h2 className="qm-title">
              {success ? t("quoteModal.success.title") : t("quoteModal.title")}
            </h2>
          </div>
          <button
            type="button"
            className="qm-close"
            onClick={handleClose}
            aria-label={t("quoteModal.close")}
          >
            <Icon name="x" size={18} />
          </button>
        </div>

        {/* Progress bar */}
        {!success && (
          <div className="qm-progress" aria-hidden="true">
            <div className="qm-progress-bar" style={{ width: `${(step / 3) * 100}%` }} />
          </div>
        )}

        {/* Body */}
        <div className="qm-body">
          {success ? (
            /* ── Success state ─────────────────────────────── */
            <div className="qm-success">
              <div className="qm-success-icon" aria-hidden="true">
                <Icon name="check" size={28} />
              </div>
              <p className="qm-success-body">{t("quoteModal.success.body")}</p>
              <p className="qm-success-meta mono">
                <Icon name="dot" size={8} />
                {t("quoteModal.success.meta")}
              </p>
              <button
                type="button"
                className="btn btn-primary qm-submit-btn"
                onClick={handleClose}
              >
                {t("quoteModal.success.close")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* ── Step 1: Contact details ─────────────────── */}
              {step === 1 && (
                <div className="qm-fields">
                  <div className="qm-field-row">
                    <div className="qm-field">
                      <label className="qm-label" htmlFor="qm-name">
                        {t("quoteModal.fields.name")}{" "}
                        <span className="qm-required">*</span>
                      </label>
                      <input
                        ref={inputRef}
                        id="qm-name"
                        type="text"
                        className={["qm-input", errors.name ? "qm-input--error" : ""].join(" ")}
                        placeholder={t("quoteModal.fields.namePlaceholder")}
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        autoComplete="name"
                      />
                      {errors.name && <p className="qm-error">{errors.name}</p>}
                    </div>
                    <div className="qm-field">
                      <label className="qm-label" htmlFor="qm-email">
                        {t("quoteModal.fields.email")}{" "}
                        <span className="qm-required">*</span>
                      </label>
                      <input
                        id="qm-email"
                        type="email"
                        className={["qm-input", errors.email ? "qm-input--error" : ""].join(" ")}
                        placeholder={t("quoteModal.fields.emailPlaceholder")}
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        autoComplete="email"
                      />
                      {errors.email && <p className="qm-error">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="qm-field-row">
                    <div className="qm-field">
                      <label className="qm-label" htmlFor="qm-phone">
                        {t("quoteModal.fields.phone")}
                      </label>
                      <input
                        id="qm-phone"
                        type="tel"
                        className="qm-input"
                        placeholder={t("quoteModal.fields.phonePlaceholder")}
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="qm-field">
                      <label className="qm-label" htmlFor="qm-company">
                        {t("quoteModal.fields.company")}
                      </label>
                      <input
                        id="qm-company"
                        type="text"
                        className="qm-input"
                        placeholder={t("quoteModal.fields.companyPlaceholder")}
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        autoComplete="organization"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 2: Project details ─────────────────── */}
              {step === 2 && (
                <div className="qm-fields">
                  <div className="qm-field">
                    <p className="qm-label">{t("quoteModal.services.label")}</p>
                    <div className="qm-service-grid">
                      {serviceKeys.map((key) => (
                        <button
                          key={key}
                          type="button"
                          className={[
                            "qm-service-card",
                            form.service_type === key ? "qm-service-card--active" : "",
                          ].join(" ")}
                          onClick={() =>
                            set("service_type", form.service_type === key ? "" : key)
                          }
                        >
                          <span className="qm-service-icon" aria-hidden="true">
                            <Icon name={SERVICE_ICONS[key]} size={20} />
                          </span>
                          <span className="qm-service-label">
                            {t(`quoteModal.services.${key}`)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="qm-field">
                    <p className="qm-label">{t("quoteModal.budget.label")}</p>
                    <div className="qm-pill-group qm-pill-group--grid">
                      {budgetKeys.map((key) => (
                        <button
                          key={key}
                          type="button"
                          className={[
                            "qm-pill",
                            form.budget_range === key ? "qm-pill--active" : "",
                          ].join(" ")}
                          onClick={() =>
                            set("budget_range", form.budget_range === key ? "" : key)
                          }
                        >
                          {t(`quoteModal.budget.${key}`)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="qm-field">
                    <p className="qm-label">{t("quoteModal.timeline.label")}</p>
                    <div className="qm-pill-group">
                      {timelineKeys.map((key) => (
                        <button
                          key={key}
                          type="button"
                          className={[
                            "qm-pill",
                            form.timeline === key ? "qm-pill--active" : "",
                          ].join(" ")}
                          onClick={() =>
                            set("timeline", form.timeline === key ? "" : key)
                          }
                        >
                          {t(`quoteModal.timeline.${key}`)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 3: Message ─────────────────────────── */}
              {step === 3 && (
                <div className="qm-fields">
                  <p className="qm-subtitle">{t("quoteModal.subtitle")}</p>
                  <div className="qm-field">
                    <label className="qm-label" htmlFor="qm-message">
                      {t("quoteModal.fields.message")}{" "}
                      <span className="qm-required">*</span>
                    </label>
                    <textarea
                      ref={textareaRef}
                      id="qm-message"
                      className={[
                        "qm-textarea",
                        errors.message ? "qm-input--error" : "",
                      ].join(" ")}
                      placeholder={t("quoteModal.fields.messagePlaceholder")}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      rows={6}
                    />
                    {errors.message && <p className="qm-error">{errors.message}</p>}
                  </div>
                  {errors.submit && (
                    <p className="qm-error qm-error--submit">{errors.submit}</p>
                  )}
                </div>
              )}

              {/* ── Footer ──────────────────────────────────── */}
              <div className="qm-footer">
                {step > 1 ? (
                  <button
                    type="button"
                    className="btn btn-ghost qm-back-btn"
                    onClick={back}
                  >
                    <Icon name="arrow_left" size={16} />
                    {t("quoteModal.buttons.back")}
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    className="btn btn-primary qm-next-btn"
                    onClick={next}
                  >
                    {t("quoteModal.buttons.next")}
                    <Icon name="arrow_right" size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-accent qm-submit-btn"
                    disabled={submitting}
                  >
                    {submitting
                      ? t("quoteModal.buttons.submitting")
                      : t("quoteModal.buttons.submit")}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
