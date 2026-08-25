import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Prochesta IT',
  description:
    'Read the Terms & Conditions governing your use of Prochesta IT services — covering payment, intellectual property, warranties, and governing law.',
};

export default function TermsPage() {
  return <LegalPage pageKey="terms" />;
}
