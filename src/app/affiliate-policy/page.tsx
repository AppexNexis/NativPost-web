import AffiliateContent from '@/components/affiliate-policy/AffiliateContent';
import Guideline from '@/components/affiliate-policy/Guideline';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Affiliate Policy — NativPost | Terms and Conditions',
  description:
    'Read the NativPost affiliate program terms and conditions. Commission structure, cookie window, payout schedule, prohibited methods, and more.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Guideline />
      <AffiliateContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-primary"
        badgeText="Apply now"
        ctaHeading="Ready to start earning with NativPost?"
        description="Apply to join the affiliate program. Applications are reviewed within 3 to 5 business days."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Submit your application"
      />
    </main>
  );
};

export default page;