import PrivacyContent from '@/components/privacy/PrivacyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy Policy | NativPost — AI Social Media Content Platform',
  description:
    'Read the NativPost Privacy Policy. Learn how we collect, use, and protect your personal data and any data obtained through third-party platform integrations.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PrivacyContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Get Started"
        ctaHeading="Ready to publish studio-quality content?"
        description="If you have any questions about our privacy practices, feel free to reach out to our team."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;