import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const FEATURES = [
  { label: 'Posts per month' },
  { label: 'Social platforms' },
  { label: 'Video content' },
  { label: 'Analytics sync' },
  { label: 'Human review' },
  { label: 'Support' },
];

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 19,
    setupFee: 5,
    popular: false,
    values: [
      '15 posts',
      '3 platforms',
      '—',
      '—',
      '—',
      'Email',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 39,
    setupFee: 5,
    popular: true,
    values: [
      '40 posts',
      '6 platforms',
      'Included',
      '90-day history',
      '—',
      'Priority email',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 79,
    setupFee: 5,
    popular: false,
    values: [
      '80 posts',
      'Unlimited',
      'Included',
      '1-year history',
      'Our team reviews',
      'Live chat',
    ],
  },
  {
    id: 'agency',
    name: 'Agency',
    price: 149,
    setupFee: 5,
    popular: false,
    values: [
      'Unlimited',
      'Unlimited',
      'Included',
      'Unlimited history',
      'Our team reviews',
      'Dedicated Slack',
    ],
  },
];

/* ── shared border class between feature rows ── */
const rowBorder = 'border-b border-b-stroke-4 dark:border-stroke-8';

const Pricing = () => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-2 dark:bg-background-8 mx-auto w-full max-w-[1440px] space-y-[70px] rounded-2xl px-5 py-[100px] md:px-8 lg:px-12 xl:px-16">

          {/* ── Heading ── */}
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Simple, transparent pricing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Agency-quality content at a price your business can afford.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <p className="mx-auto max-w-[600px]">
                All plans include your personalized Brand Profile, anti-slop quality
                filter, and cross-platform publishing. A flat $5 setup fee covers
                your onboarding.
              </p>
            </RevealAnimation>
          </div>

          {/* ══════════════════════════════════════════
              MOBILE + TABLET  (default → below xl)
              Each plan = self-contained card
          ══════════════════════════════════════════ */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:hidden">
            {PLANS.map((plan, idx) => (
              <RevealAnimation key={plan.id} delay={0.4 + idx * 0.1}>
                <div className="flex flex-col overflow-hidden rounded-[20px] border border-stroke-4 dark:border-stroke-8">

                  {/* Card header */}
                  {plan.popular ? (
                    <div className="bg-secondary dark:bg-background-5 relative overflow-hidden px-6 py-8">
                      <div className="absolute -top-28 -right-20 z-0 h-full w-full">
                        <Image src={gradient4} alt="" priority />
                      </div>
                      <div className="relative z-10 mb-6">
                        <p className="text-tagline-1 text-accent/60 mb-2 font-medium">
                          {plan.name} — Most Popular
                        </p>
                        <h3 className="text-heading-5 text-accent font-normal">
                          ${plan.price}
                          <span className="text-tagline-1 font-normal">/mo</span>
                        </h3>
                        <p className="text-accent/60 text-sm mt-1">
                          + ${plan.setupFee} one-time setup fee
                        </p>
                      </div>
                      <Link
                        href="https://app.nativpost.com/sign-up"
                        className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent relative z-10 w-full first-letter:uppercase before:content-none">
                        Start free trial
                      </Link>
                    </div>
                  ) : (
                    <div className="bg-background-3 dark:bg-background-7 px-6 py-8">
                      <div className="mb-6">
                        <p className="text-tagline-1 mb-2 font-medium">{plan.name}</p>
                        <h3 className="text-heading-5 font-normal">
                          ${plan.price}
                          <span className="text-tagline-1 font-normal">/mo</span>
                        </h3>
                        <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                          + ${plan.setupFee} one-time setup fee
                        </p>
                      </div>
                      <Link
                        href="https://app.nativpost.com/sign-up"
                        className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full first-letter:uppercase before:content-none">
                        Start free trial
                      </Link>
                    </div>
                  )}

                  {/* Feature rows — label + value inline */}
                  <div className="bg-background-1 dark:bg-background-6 flex-1">
                    <ul>
                      {FEATURES.map((f, i) => {
                        const val = plan.values[i];
                        const isEmpty = val === '—';
                        return (
                          <li
                            key={f.label}
                            className={`flex items-center justify-between px-6 py-4 ${i < FEATURES.length - 1 ? rowBorder : ''
                              }`}>
                            <span className="text-tagline-1 text-secondary/50 dark:text-accent/50 font-normal">
                              {f.label}
                            </span>
                            <span className={`text-tagline-1 font-medium text-right ml-4 ${isEmpty
                                ? 'text-secondary/25 dark:text-accent/25'
                                : 'text-secondary/70 dark:text-accent/70'
                              }`}>
                              {val}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* ══════════════════════════════════════════
              DESKTOP  (xl+)
              Comparison table: labels col + 4 plan cols
              xl:grid-cols-5  →  1 label + 4 plans
          ══════════════════════════════════════════ */}
          <div className="hidden xl:grid xl:grid-cols-5 xl:gap-6 2xl:gap-8">

            {/* Labels column */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col">
                {/* Spacer matching plan card header */}
                <div className="flex-shrink-0 h-[195px]" />
                <div className="space-y-2">
                  <h3 className="text-heading-6 mb-2">What&apos;s included</h3>
                  <ul>
                    {FEATURES.map((f, i) => (
                      <li
                        key={f.label}
                        className={`text-secondary/60 dark:text-accent/60 text-tagline-1 py-4 pr-4 font-normal flex items-center h-14 ${i < FEATURES.length - 1 ? rowBorder : ''
                          }`}>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealAnimation>

            {/* Plan columns */}
            {PLANS.map((plan, idx) => (
              <RevealAnimation key={plan.id} delay={0.5 + idx * 0.1}>
                <div>
                  {/* Card header */}
                  {plan.popular ? (
                    <div className="bg-secondary dark:bg-background-5 relative space-y-8 overflow-hidden rounded-[20px] px-6 py-8">
                      <div className="absolute -top-28 -right-20 z-0 h-full w-full">
                        <Image src={gradient4} alt="" priority />
                      </div>
                      <div className="relative z-10">
                        <p className="text-tagline-1 text-accent/60 mb-3 font-medium">
                          {plan.name} — Most Popular
                        </p>
                        <h3 className="text-heading-5 text-accent font-normal">
                          ${plan.price}
                          <span className="text-tagline-1 font-normal">/mo</span>
                        </h3>
                        <p className="text-accent/60">+ ${plan.setupFee} one-time setup fee</p>
                      </div>
                      <Link
                        href="https://app.nativpost.com/sign-up"
                        className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent relative z-10 w-full first-letter:uppercase before:content-none">
                        Start free trial
                      </Link>
                    </div>
                  ) : (
                    <div className="bg-background-3 dark:bg-background-7 space-y-8 rounded-[20px] px-6 py-8">
                      <div>
                        <p className="text-tagline-1 mb-3 font-medium">{plan.name}</p>
                        <h3 className="text-heading-5 font-normal">
                          ${plan.price}
                          <span className="text-tagline-1 font-normal">/mo</span>
                        </h3>
                        <p>+ ${plan.setupFee} one-time setup fee</p>
                      </div>
                      <Link
                        href="https://app.nativpost.com/sign-up"
                        className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full first-letter:uppercase before:content-none">
                        Start free trial
                      </Link>
                    </div>
                  )}

                  {/* Feature value rows */}
                  <div className="bg-background-1 dark:bg-background-6 rounded-[20px] mt-0">
                    <ul>
                      {plan.values.map((val, i) => {
                        const isEmpty = val === '—';
                        return (
                          <li
                            key={i}
                            className={`h-14 flex items-center justify-center px-4 ${i < plan.values.length - 1 ? rowBorder : ''
                              }`}>
                            <p className={`text-tagline-1 font-medium text-center ${isEmpty
                                ? 'text-secondary/25 dark:text-accent/25'
                                : 'text-secondary/60 dark:text-accent/60'
                              }`}>
                              {val}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* Enterprise note */}
          <RevealAnimation delay={0.9}>
            <div className="mx-auto max-w-[700px] text-center">
              <p className="text-secondary/60 dark:text-accent/60">
                Need a custom solution?{' '}
                <strong className="text-secondary dark:text-accent">Enterprise plans</strong>{' '}
                include white-label options, dedicated account managers, and unlimited brand
                profiles.{' '}
                <Link href="/contact-us" className="text-primary-500 underline">
                  Contact us
                </Link>{' '}
                for a tailored quote.
              </p>
            </div>
          </RevealAnimation>

        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;