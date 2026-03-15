// ============================================================
// CONTACT US PAGE — src/app/contact-us/page.tsx
// ============================================================

import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us — NativPost | Get Support & Talk to Our Team',
  description:
    'Reach the NativPost team. Email, live chat, or WhatsApp, we respond within 2 hours during business hours. Available globally.',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <ContactMap />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Ready to get started?"
        ctaBtnText="Start free trial"
        ctaHeading="See NativPost in action for your brand"
        description="7-day free trial. No credit card required. Your first studio-crafted content batch in under 48 hours."
      />
    </main>
  );
};

export default ContactUs;
