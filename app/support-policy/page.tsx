import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Support Policy — Prochesta IT',
  description:
    'Learn about post-delivery support at Prochesta IT — response time commitments, support tiers, what is covered, and how to reach our team.',
};

export default function SupportPolicyPage() {
  return <LegalPage pageKey="supportPolicy" />;
}
