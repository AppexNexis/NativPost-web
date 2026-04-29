// ============================================================
// FAQ PAGE — src/app/faq/page.tsx
// Server component — exports metadata for SEO
// Interactive accordion is in FaqAccordion (client component)
// ============================================================

import { Metadata } from 'next';
import { generateMetadata } from '@/utils/generateMetaData';
import CTA from '@/components/shared/cta/CTA';
import FaqAccordion from '@/components/faq/FaqAccordion';

export const metadata: Metadata = generateMetadata(
  'FAQ — NativPost | Frequently Asked Questions',
  'Everything you need to know about NativPost. Pricing, content creation, brand profiles, platform support, free trial, and billing questions answered.',
  'https://nativpost.com/faq',
);

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[120px]">
        <div className="main-container">
          <FaqAccordion />
        </div>
      </section>

      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Still have questions?"
        badgeClass="!badge-cyan"
        ctaHeading="Talk to our team directly"
        description="We respond within 2 hours during business hours. Available via email, live chat, and WhatsApp."
        ctaBtnText="Contact us"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;