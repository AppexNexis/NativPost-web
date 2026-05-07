import CTA from '@/components/shared/cta/CTA';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms & Conditions | NativPost — AI Social Media Content Platform',
  description:
    'Read the NativPost Terms and Conditions. Understand your rights and responsibilities when using our AI-powered social media content platform.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TermsConditionContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Get Started"
        ctaHeading="Ready to publish studio-quality content?"
        description="If you have any questions, feel free to reach out to our team."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;