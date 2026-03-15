import Feature from '@/components/features/Feature';
import Features from '@/components/features/Features';
import WhyChooseUs from '@/components/features/WhyChooseUs';
import CTA from '@/components/shared/cta/CTA';
import Reviews from '@/components/features/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features — NativPost | Brand Profiles, Content Engine & More',
  description:
    'Explore NativPost features: Brand Profile system, anti-slop content engine, approval dashboard, cross-platform publishing, and performance analytics.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Features />
      <Feature />
      <WhyChooseUs />
      <Reviews />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Ready to see studio-crafted content for"
        spanText="your brand?"
        description="Start your 7-day free trial. No credit card required. Your first content batch in under 48 hours."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start free trial"
      />
    </main>
  );
};

export default page;
