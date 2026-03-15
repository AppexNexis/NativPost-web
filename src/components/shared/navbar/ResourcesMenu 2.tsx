// ============================================================
// RESOURCES MENU — src/components/shared/navbar/ResourcesMenu.tsx
// ============================================================

'use client';
import {
  CaseStudyICon,
  FaqIcon,
  GDPRIcon,
  PrivacyIcon,
  RefundPolicyIcon,
  SuccessIcon,
  SupportIcon,
  UseCaseIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import type { ComponentType } from 'react';
import ResourcesMenuLink from './ResourcesMenuLink';

type ResourceLink = {
  title: string;
  description?: string;
  href: string;
  icon: ComponentType;
};

type ResourceSection = {
  title: string;
  links: ResourceLink[];
  variant?: 'default' | 'compact';
};

const resourceSections: ResourceSection[] = [
  {
    title: 'Learn & Explore',
    links: [
      {
        title: 'FAQ',
        description: 'Common questions answered about NativPost.',
        href: '/faq',
        icon: FaqIcon,
      },
      {
        title: 'Case Studies',
        description: 'Real results from real brands using NativPost.',
        href: '/case-study',
        icon: CaseStudyICon,
      },
      {
        title: 'Success Stories',
        description: 'How businesses grow with studio-crafted content.',
        href: '/success-stories',
        icon: SuccessIcon,
      },
      {
        title: 'Use Cases',
        description: 'NativPost solutions for every industry.',
        href: '/use-case',
        icon: UseCaseIcon,
      },
      {
        title: 'Referral Program',
        description: 'Give a month, get a month. No limits.',
        href: '/referral-program',
        icon: SupportIcon,
      },
    ],
  },
  {
    title: 'Trust & Legal',
    variant: 'compact',
    links: [
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
        icon: PrivacyIcon,
      },
      {
        title: 'Terms & Conditions',
        href: '/terms-conditions',
        icon: RefundPolicyIcon,
      },
      {
        title: 'Refund Policy',
        href: '/refund-policy',
        icon: RefundPolicyIcon,
      },
      {
        title: 'GDPR Compliance',
        href: '/gdpr',
        icon: GDPRIcon,
      },
    ],
  },
];

const ResourcesMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);
  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[900px]',
          menuDropdownId === 'resources-mega-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="resources-mega-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 border-stroke-1 dark:border-background-7 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white p-6 opacity-0 transition-all duration-300 lg:w-[900px]',
          menuDropdownId === 'resources-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-12">
          {resourceSections.map((section) => (
            <div
              key={section.title}
              className={cn(
                section.variant === 'compact' ? 'col-span-12 md:col-span-5' : 'col-span-12 md:col-span-7',
                section.variant === 'compact' && 'bg-background-2 dark:bg-background-7 rounded-[10px] px-3 pb-3',
              )}>
              <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 p-3 font-medium">{section.title}</p>
              <ul>
                {section.links.map((link) => (
                  <ResourcesMenuLink key={link.title} {...link} variant={section.variant} onClose={handleClose} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;
