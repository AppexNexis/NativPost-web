import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import tiktok from '@public/images/icons/tiktok.svg';
import youtube from '@public/images/icons/youtube.svg';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const APP_CONFIGURE_URL = 'https://app.nativpost.com/dashboard/infrastructure/new';

const platforms: { name: string; icon: StaticImageData }[] = [
  { name: 'TikTok', icon: tiktok },
  { name: 'Instagram', icon: instagram },
  { name: 'YouTube', icon: youtube },
  { name: 'Facebook', icon: facebook },
  { name: 'LinkedIn', icon: linkedin },
];

const included: string[] = [
  'Real accounts created from scratch in your target country',
  'Warmed up in your exact niche before the first post',
  'Fully managed by our in-house operations team',
  'Owned by you, retrievable credentials, written authorization',
  'Compliant by design, posting via official platform APIs',
  'Managed accounts live in your NativPost dashboard',
  'Unified analytics across managed and connected accounts',
  'Human review on every managed post before it goes live',
];

const steps: { step: string; title: string; description: string }[] = [
  {
    step: '01',
    title: 'Configure',
    description: 'Pick the platform, country, and niche. We confirm capacity and an ETA before you pay.',
  },
  {
    step: '02',
    title: 'We build & warm',
    description: 'Our team creates the account in-market and warms it in your niche until it is ready.',
  },
  {
    step: '03',
    title: 'You review & publish',
    description: 'The account lands in your dashboard. Approve content and it publishes on your schedule.',
  },
];

const ManagedSocialPricing = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 pb-16 lg:pb-24">
      <div className="main-container">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-orange">Managed Social Infrastructure</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Want us to run the accounts too?</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px]">
              Our done-for-you tier: real, brand-owned social accounts, created in the market you
              want to reach, warmed in your niche, and operated by our team — while you keep full
              ownership and one simple dashboard.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.35}>
          <div className="overflow-hidden rounded-2xl border border-stroke-3 bg-background-1 dark:border-stroke-8 dark:bg-background-9">
            <div className="grid grid-cols-12">
              {/* Left: offer + features */}
              <div className="col-span-12 p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-heading-6 font-semibold">Managed accounts</p>
                  <span className="rounded-full bg-orange-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-orange-600 dark:text-orange-400">
                    Done-for-you
                  </span>
                </div>

                {/* Platform chips */}
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {platforms.map(p => (
                    <div
                      key={p.name}
                      className="dark:bg-background-8 flex items-center gap-2 rounded-full bg-background-2 px-3 py-1.5"
                    >
                      <Image src={p.icon} alt={p.name} className="size-4" />
                      <span className="text-[13px] font-medium text-secondary dark:text-accent/80">{p.name}</span>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <ul className="mt-7 grid gap-x-6 gap-y-3 text-[13px] text-secondary sm:grid-cols-2 dark:text-accent/80">
                  {included.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="mt-0.5 size-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 16 16" aria-hidden>
                        <circle cx="8" cy="8" r="7" className="fill-emerald-100 dark:fill-emerald-500/20" />
                        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: price panel */}
              <div className="col-span-12 border-t border-stroke-3 bg-background-2 p-6 sm:p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10 dark:border-stroke-8 dark:bg-background-8">
                <p className="text-tagline-2 uppercase tracking-wider text-secondary dark:text-accent/60">
                  Per managed account
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">$80</span>
                  <span className="text-sm text-secondary dark:text-accent/70">/ month</span>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-stroke-3 bg-background-1 px-3.5 py-2.5 dark:border-stroke-8 dark:bg-background-9">
                  <span className="text-lg font-semibold text-primary-500">+ $1.50</span>
                  <span className="text-[13px] text-secondary dark:text-accent/70">per managed post published</span>
                </div>
                <p className="mt-3 text-xs text-secondary dark:text-accent/60">
                  Requires an active NativPost plan. Scale up or down by account — no long-term lock-in.
                </p>

                <Link
                  href={APP_CONFIGURE_URL}
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-[0.98] dark:bg-accent dark:text-background-8"
                >
                  Configure your accounts
                </Link>
                <Link
                  href="/contact-us"
                  className="mt-2.5 flex w-full items-center justify-center rounded-xl border border-stroke-3 bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-background-2 dark:border-stroke-8 dark:bg-background-9 dark:text-accent"
                >
                  Talk to our team
                </Link>
              </div>
            </div>

            {/* How it works footer strip */}
            <div className="grid grid-cols-12 gap-y-6 border-t border-stroke-3 p-6 sm:p-8 lg:p-10 dark:border-stroke-8">
              {steps.map(s => (
                <div key={s.step} className="col-span-12 sm:col-span-4 sm:pr-6">
                  <div className="flex items-center gap-3">
                    <span className="text-tagline-1 font-bold text-primary-500">{s.step}</span>
                    <p className="text-tagline-1 font-semibold">{s.title}</p>
                  </div>
                  <p className="mt-2 text-[13px] text-secondary dark:text-accent/70">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>

        {/* Compliance note */}
        <RevealAnimation delay={0.4}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-secondary dark:text-accent/60">
            NativPost only builds real accounts that represent a brand you own, under a written
            authorization grant, operated through sanctioned platform APIs. We do not sell aged or
            transferable accounts, and we never use ban-evasion techniques — so your presence is
            enterprise-safe and yours to keep.
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ManagedSocialPricing;
