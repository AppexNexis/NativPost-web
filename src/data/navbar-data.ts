// ============================================================
// NAVBAR DATA — src/data/navbar-data.ts
// Mobile menu structure + footer data for NativPost
// ============================================================

import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'product',
    title: 'Product',
    submenu: [
      { id: 'features', label: 'Features', href: './features' },
      { id: 'process', label: 'How It Works', href: './process' },
      { id: 'integrations', label: 'Integrations', href: './integration' },
      { id: 'use-cases', label: 'Use Cases', href: './use-case' },
      { id: 'pricing', label: 'Pricing', href: './pricing' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about', label: 'About NativPost', href: './about' },
      { id: 'team', label: 'Our Team', href: './team' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: './why-choose-us' },
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'contact-us', label: 'Contact Us', href: './contact-us' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'case-studies', label: 'Case Studies', href: './case-study' },
      { id: 'success-stories', label: 'Success Stories', href: './success-stories' },
      { id: 'testimonials', label: 'Testimonials', href: './testimonial' },
      { id: 'faq', label: 'FAQ', href: './faq' },
      { id: 'referral-program', label: 'Referral Program', href: './referral-program' },
    ],
  },
  {
    id: 'account',
    title: 'Account',
    submenu: [
      { id: 'login', label: 'Log In', href: './login' },
      { id: 'signup', label: 'Start Free Trial', href: './signup' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    submenu: [
      { id: 'terms-conditions', label: 'Terms & Conditions', href: './terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: './privacy-policy' },
      { id: 'refund-policy', label: 'Refund Policy', href: './refund-policy' },
      { id: 'gdpr', label: 'GDPR Compliance', href: './gdpr' },
    ],
  },
];

export const footerData: FooterOneData[] = [
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
      { label: 'Our Team', href: '/team' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Why Choose Us', href: '/why-choose-us' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Testimonials', href: '/testimonial' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Referral Program', href: '/referral-program' },
      { label: 'Success Stories', href: '/success-stories' },
    ],
  },
];
