// ============================================================
// SIGNUP PAGE — src/app/signup/page.tsx
// ============================================================

import SignupHero from '@/components/authentication/SignupHero';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sign Up — NativPost | Start Your 7-Day Free Trial',
  description:
    'Create your NativPost account. 7-day free trial, Credit card required. Studio-crafted social content for your brand in under 48 hours.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <SignupHero />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Already have an account?"
        ctaHeading="Log in to your NativPost dashboard"
        description="Access your content calendar, review pending posts, and track your social media performance."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Log in"
      />
    </main>
  );
};
export default page;
