// ============================================================
// LOGIN PAGE — src/app/login/page.tsx
// ============================================================

import LoginHero from '@/components/authentication/LoginHero';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Log In — NativPost',
  description: 'Log in to your NativPost dashboard. Manage your brand content, review posts, and track performance.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <LoginHero />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="New to NativPost?"
        ctaHeading="Start creating studio-crafted content for your brand"
        description="Join thousands of businesses who trust NativPost to manage their social media. 7-day free trial, Credit card required."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start free trial"
      />
    </main>
  );
};
export default page;
