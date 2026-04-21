// ============================================================
// FOOTER DATA — src/data/footer-data.ts
// ============================================================

import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'How It Works', href: '/process' },
      { label: 'Integrations', href: '/integration' },
      { label: 'Use Cases', href: '/use-case' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About NativPost', href: '/about' },
      // { label: 'Our Team', href: '/team' },
      { label: 'Blog', href: '/blog' },
      // { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Legal & Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
    ],
  },
];
