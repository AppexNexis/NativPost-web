// ============================================================
// FOOTER — src/components/shared/footer/Footer.tsx
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import gradientImg from '@public/images/ns-img-532.png';
import darkLogo from '@public/images/shared/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
          <Image src={gradientImg} alt="footer gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          {/* Brand column */}
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-4">
              <div className="max-w-[306px]">
                <figure>
                  <Image src={darkLogo} alt="NativPost Logo" />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Studio-crafted social media content for businesses worldwide. Agency quality at product pricing.
                  A product of AppexNexis LTD.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.instagram.com/nativpost" aria-label="NativPost Instagram">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.linkedin.com/company/nativpost" aria-label="NativPost LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://x.com/nativpost" aria-label="NativPost on X">
                    <span className="sr-only">X / Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-accent/60 hover:fill-accent transition-colors">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.facebook.com/nativpost" aria-label="NativPost Facebook">
                    <span className="sr-only">Facebook</span>
                    <Image className="size-6" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.youtube.com/@nativpost" aria-label="NativPost YouTube">
                    <span className="sr-only">YouTube</span>
                    <Image className="size-6" src={youtube} alt="YouTube" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Footer link columns */}
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 md:col-span-4" key={title}>
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <div className="space-y-8">
                    <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{title}</p>
                    <ul className="space-y-5">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="footer-link">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              Copyright © {new Date().getFullYear()} NativPost by{' '}
              <Link href="https://www.appexnexis.site/" target="_blank" className="hover:text-accent underline transition-colors">
                AppexNexis LTD
              </Link>
              . Studio-crafted content for modern brands.
            </p>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
