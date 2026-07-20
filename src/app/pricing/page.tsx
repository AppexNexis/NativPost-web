import Pricing from '@/components/pricing/Pricing';
import PricingFaq from '@/components/pricing/PricingFaq';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing | NativPost Agency-Quality Content at Product Pricing',
  description:
    'Plans from $19/mo. Studio-crafted social content, brand-aligned graphics, cross-platform publishing, and human review. 7-day free trial, cancel anytime.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Pricing />
      <PricingFaq />
      <CTA
        className="dark:bg-background-7 bg-background-3"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Ready to stop struggling with social?"
        description="Start your 7-day free trial. Studio-crafted content for your brand, live today."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
