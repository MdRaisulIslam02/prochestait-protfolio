import type { Metadata } from "next";
import { contactApi } from "@/lib/api";
import { STATIC_CONTACT } from "@/lib/contact-fallback";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactMap from "@/components/contact/ContactMap";
import CtaSection from "@/components/CtaSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact Us — Prochesta IT",
  description:
    "Get in touch with Prochesta IT. Call, email, or WhatsApp us — we respond within 1 hour.",
};

export default async function ContactPage() {
  let setting = STATIC_CONTACT;

  try {
    const res = await contactApi.get();
    if (res?.data) setting = res.data;
  } catch {
    // use fallback
  }

  return (
    <main>
      <ContactHero setting={setting} />
      <ContactInfo setting={setting} />
      <ContactForm setting={setting} />
      <ContactFaq />
      <ContactMap setting={setting} />
      <CtaSection />
    </main>
  );
}
