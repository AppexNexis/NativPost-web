import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Support Center — NativPost Help & Documentation',
  description: 'Get support for your NativPost account. Submit a technical ticket, manage your platform connections, tune your brand profile, or configure Paystack/Stripe billing.',
};

const Support = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <NeedHelp />
      <Services />
      <Contact />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Ready to see studio-crafted content for"
        spanText="your brand?"
        description="Start your 7-day free trial. No credit card required. Experience agency-quality publishing in minutes."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start free trial"
      />
    </main>
  );
};

export default Support;