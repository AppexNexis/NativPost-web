// ============================================================
// PRICING PAGE — src/app/pricing/page.tsx
// ============================================================

import Benefits from '@/components/pricing/Benefits';
import Contact from '@/components/pricing/Contact';
import Features from '@/components/pricing/Features';
import Pricing from '@/components/pricing/Pricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing — NativPost | Agency-Quality Content at Product Pricing',
  description:
    'Plans from $19/mo. Studio-crafted social media content, brand-aligned graphics, and auto-publishing. No contracts, cancel anytime.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Pricing />
      <Benefits />
      <Features />
      <Contact />
      <CTA
        className="dark:bg-background-7 bg-background-3"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Ready to stop struggling with social media?"
        description="Start your 7-day free trial. No credit card required. Studio-crafted content for your brand, starting today."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
