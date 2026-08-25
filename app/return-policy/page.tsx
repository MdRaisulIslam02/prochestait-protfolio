import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Return Policy — Prochesta IT',
  description:
    "Prochesta IT's return and refund policy for custom software development projects — what qualifies for a refund, what doesn't, and how to request one.",
};

export default function ReturnPolicyPage() {
  return <LegalPage pageKey="returnPolicy" />;
}
