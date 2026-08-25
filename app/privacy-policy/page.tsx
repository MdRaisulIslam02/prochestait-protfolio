import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Prochesta IT',
  description:
    "Prochesta IT's privacy policy — how we collect, use, protect, and retain your personal data, and what rights you have.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage pageKey="privacyPolicy" />;
}
