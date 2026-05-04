import AffiliateProcess from '@/components/affiliates/AffiliateProcess';
import AffiliateProgram from '@/components/affiliates/AffiliateProgram';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Affiliate Program — NativPost | Earn 30% Recurring Commission',
  description:
    'Join the NativPost affiliate program and earn 30% recurring commission on every referral. No cap, 90-day cookie, real-time tracking.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AffiliateProgram />
      <AffiliateProcess />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-primary"
        badgeText="Join now"
        ctaHeading="Ready to start earning with NativPost?"
        description="Sign up at nativpost.affonso.io, grab your link, and start sharing. Your first commission could come from the very next person you tell about NativPost."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Join the affiliate program"
      />
    </main>
  );
};

export default page;