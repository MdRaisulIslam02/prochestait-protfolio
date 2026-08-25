"use client";

import { useEffect, useRef, useState } from "react";
import { packageQuotationsApi } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";
import Icon from "./Icon";

interface PackageQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function PackageQuoteModal({ isOpen, onClose, packageName }: PackageQuoteModalProps) {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | "submit", string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 80);
    return () => clearTimeout(timer);
  }, [isOpen]);

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
      setForm(EMPTY_FORM);
      setErrors({});
      setSuccess(false);
    }, 300);
  }

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = t("quoteModal.errors.nameRequired");
    if (!form.phone.trim()) e.phone = t("packageQuoteModal.errors.phoneRequired") || "Phone is required";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t("quoteModal.errors.emailInvalid");
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrors({});
    try {
      await packageQuotationsApi.submit({
        name: form.name,
        email: form.email || undefined,
        phone: form.phone,
        package_name: packageName,
        message: form.message || undefined,
      });
      setSuccess(true);
    } catch {
      setErrors({ submit: t("quoteModal.errors.submitFailed") });
    } finally {
      setSubmitting(false);
    }
  }

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
        aria-label={t("packageQuoteModal.title") || "Request Package Quote"}
        className={["qm-dialog", isOpen ? "qm-dialog--visible" : ""].join(" ")}
      >
        <div className="qm-stripe" aria-hidden="true" />

        <div className="qm-header">
          <div>
            {!success && (
              <p className="qm-step-label mono mb-2 text-(--brand-primary)">
                {t("packageQuoteModal.selectedPackage") || "Selected Package"}: <span className="font-bold">{packageName}</span>
              </p>
            )}
            <h2 className="qm-title">
              {success ? t("quoteModal.success.title") : (t("packageQuoteModal.title") || "Request a Quote")}
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

        <div className="qm-body">
          {success ? (
            <div className="qm-success">
              <div className="qm-success-icon" aria-hidden="true">
                <Icon name="check" size={28} />
              </div>
              <p className="qm-success-body">{t("packageQuoteModal.success.body") || "We have received your package quote request. Our team will contact you shortly."}</p>
              <button
                type="button"
                className="btn btn-primary qm-submit-btn mt-6"
                onClick={handleClose}
              >
                {t("quoteModal.success.close")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="qm-fields">
                <div className="qm-field">
                  <label className="qm-label" htmlFor="pqm-name">
                    {t("quoteModal.fields.name")} <span className="qm-required">*</span>
                  </label>
                  <input
                    ref={inputRef}
                    id="pqm-name"
                    type="text"
                    className={["qm-input", errors.name ? "qm-input--error" : ""].join(" ")}
                    placeholder={t("quoteModal.fields.namePlaceholder")}
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {errors.name && <p className="qm-error">{errors.name}</p>}
                </div>
                
                <div className="qm-field-row">
                  <div className="qm-field">
                    <label className="qm-label" htmlFor="pqm-phone">
                      {t("quoteModal.fields.phone")} <span className="qm-required">*</span>
                    </label>
                    <input
                      id="pqm-phone"
                      type="tel"
                      className={["qm-input", errors.phone ? "qm-input--error" : ""].join(" ")}
                      placeholder={t("quoteModal.fields.phonePlaceholder")}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    {errors.phone && <p className="qm-error">{errors.phone}</p>}
                  </div>
                  
                  <div className="qm-field">
                    <label className="qm-label" htmlFor="pqm-email">
                      {t("quoteModal.fields.email")}
                    </label>
                    <input
                      id="pqm-email"
                      type="email"
                      className={["qm-input", errors.email ? "qm-input--error" : ""].join(" ")}
                      placeholder={t("quoteModal.fields.emailPlaceholder")}
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    {errors.email && <p className="qm-error">{errors.email}</p>}
                  </div>
                </div>

                <div className="qm-field">
                  <label className="qm-label" htmlFor="pqm-message">
                    {t("quoteModal.fields.message")}
                  </label>
                  <textarea
                    id="pqm-message"
                    className="qm-textarea"
                    placeholder={t("quoteModal.fields.messagePlaceholder")}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    rows={4}
                  />
                </div>

                {errors.submit && (
                  <p className="qm-error qm-error--submit">{errors.submit}</p>
                )}
              </div>

              <div className="qm-footer flex justify-end mt-6">
                <button
                  type="submit"
                  className="btn btn-accent qm-submit-btn w-full"
                  disabled={submitting}
                >
                  {submitting
                    ? t("quoteModal.buttons.submitting")
                    : t("quoteModal.buttons.submit")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
