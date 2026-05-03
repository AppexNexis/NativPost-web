// ============================================================
// COMPANY MENU — src/components/shared/navbar/CompanyMenu.tsx
// ============================================================

'use client';
import { AboutIcon, BlogIcon, FeatureIcon } from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import type { LatestNavPost } from './NavbarServer';
import CompanyMenuLink from './CompanyMenuLink';

type CompanyLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const companyLinks: CompanyLink[] = [
  {
    title: 'About NativPost',
    description: 'Our mission, values, and the AppexNexis story',
    href: '/about',
    icon: AboutIcon,
  },
  {
    title: 'Why Choose Us',
    description: 'How we compare to agencies and other tools',
    href: '/why-choose-us',
    icon: FeatureIcon,
  },
  {
    title: 'Contact Us',
    description: 'Get in touch — we respond within 2 hours',
    href: '/contact-us',
    icon: BlogIcon,
  },
];

// Static fallback shown when no Contentful post is available
const FALLBACK = {
  title: 'The Anti-Slop Manifesto',
  slug: 'blog',
  shortDescription: 'Why 2026 is the year of human-quality content — and how NativPost leads the way.',
  imageUrl: '',
};

const CompanyMenu = ({
  menuDropdownId,
  setMenuDropdownId,
  latestPost = null,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
  latestPost?: LatestNavPost | null;
}) => {
  const handleClose = () => setMenuDropdownId(null);
  const post = latestPost || FALLBACK;
  const postHref = post.slug.startsWith('/') ? post.slug : `/blog/${post.slug}`;

  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[692px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'company-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 opacity-0 transition-all duration-300 md:w-[692px] md:gap-x-8',
          menuDropdownId === 'company-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <ul className="w-full space-y-2 md:max-w-[284px]">
          {companyLinks.map((link) => (
            <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
          ))}
        </ul>

        {/* ── Latest blog post card ── */}
        <figure className="flex-1 space-y-3">
          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium">
            Latest from the blog
          </p>
          <Link href={postHref} onClick={handleClose} className="block">
            <figure className="group relative min-h-[272px] w-full max-w-full overflow-hidden rounded-[14px] bg-background-4 dark:bg-background-9">
              {post.imageUrl ? (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-[14px] transition-all duration-500 ease-in-out group-hover:scale-105"
                  sizes="320px"
                  unoptimized={post.imageUrl.includes('ctfassets.net')}
                />
              ) : (
                // Gradient placeholder when no image is available
                <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 transition-all duration-500 group-hover:scale-105" />
              )}
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 rounded-[14px] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1 transition-all duration-500 ease-in-out group-hover:bottom-5">
                <p className="text-tagline-1 font-medium text-white line-clamp-2 leading-snug">
                  {post.title}
                </p>
                <p className="text-tagline-3 font-normal text-white/70 line-clamp-2">
                  {post.shortDescription}
                </p>
              </div>
            </figure>
          </Link>
        </figure>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;