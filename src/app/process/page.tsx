// ============================================================
// PROCESS PAGE — src/app/process/page.tsx
// ============================================================

import ProcessOperation from '@/components/process/ProcessOperation';
import ProcessStep from '@/components/process/ProcessStep';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'How It Works — NativPost | From Onboarding to Published Content',
  description:
    'See how NativPost transforms your brand into studio-crafted social content in 6 simple steps. Onboarding, creation, approval, publishing — all handled.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProcessStep />
      <ProcessOperation />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Get started"
        badgeClass="!badge-cyan-v2"
        ctaHeading="Ready to see it in action?"
        description="Start your 7-day free trial. We'll build your Brand Profile and deliver your first content batch within 48 hours."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
