// ============================================================
// PLATFORM MENU — src/components/shared/navbar/PlatformMenu.tsx
// (Replaces PartnershipMenu — rename the file)
// ============================================================

'use client';

import {
  IntegrationIcon,
  ReferralProgramIcon,
  LoginIcon,
  SignUpIcon,
  DownloadIcon,
  AffiliateIcon,
  ServiceIcon
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import type { ComponentType } from 'react';
import PartnershipMenuLink from './PartnershipMenuLink';

type PlatformLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const platformLinks: PlatformLink[] = [
  {
    title: 'Features',
    description: 'Everything NativPost offers',
    href: '/features',
    icon: AffiliateIcon,
  },
  {
    title: 'How It Works',
    description: 'Our 6-step process',
    href: '/process',
    icon: DownloadIcon,
  },
  {
    title: 'Integrations',
    description: 'Connected platforms',
    href: '/integration',
    icon: IntegrationIcon,
  },
  {
    title: 'Services',
    description: 'Solutions by industry',
    href: '/services',
    icon: ServiceIcon
  },
  {
    title: 'Use Cases',
    description: 'Solutions by industry',
    href: '/use-case',
    icon: ReferralProgramIcon,
  },
  // {
  //   title: 'Case Studies',
  //   description: 'Real client results',
  //   href: '/case-study',
  //   icon: LoginIcon,
  // },
  // {
  //   title: 'Testimonials',
  //   description: 'What our clients say',
  //   href: '/testimonial',
  //   icon: SignUpIcon,
  // },
];

const PlatformMenu = ({
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent opacity-0 transition-all duration-300',
          menuDropdownId === 'platform-dropdown-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="platform-dropdown-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 rounded-[20px] border bg-white p-2 opacity-0 transition-all duration-300',
          menuDropdownId === 'platform-dropdown-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {platformLinks.map((link) => (
          <PartnershipMenuLink key={link.title} {...link} onClose={handleClose} />
        ))}
      </ul>
    </div>
  );
};

PlatformMenu.displayName = 'PlatformMenu';
export default PlatformMenu;
