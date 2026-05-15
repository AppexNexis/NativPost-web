/**
 * NativPost Pricing Page — Full Feature Comparison Table
 *
 * Replaces src/components/pricing/Pricing.tsx
 *
 * Structure:
 *  1. Existing plan cards (preserved exactly)
 *  2. NEW: Full feature comparison table (Affonso-style categories + rows)
 */

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

// -----------------------------------------------------------
// PLAN DATA
// -----------------------------------------------------------
const PLANS = [
  { id: 'starter', name: 'Starter', price: 19, setupFee: 5, popular: false },
  { id: 'growth', name: 'Growth', price: 39, setupFee: 5, popular: true },
  { id: 'pro', name: 'Pro', price: 79, setupFee: 5, popular: false },
  { id: 'agency', name: 'Agency', price: 149, setupFee: 5, popular: false },
];

const CTA_HREF = 'https://app.nativpost.com/sign-up';
const CONTACT_HREF = 'https://nativpost.com/contact-us';

// -----------------------------------------------------------
// COMPARISON TABLE DATA
// Each feature value is: string | true | false
// true  = check mark (included)
// false = dash (not included)
// string = specific value label
// -----------------------------------------------------------
type FeatureValue = string | boolean;

interface FeatureRow {
  label: string;
  tooltip?: string;
  values: [FeatureValue, FeatureValue, FeatureValue, FeatureValue]; // [starter, growth, pro, agency]
}

interface FeatureGroup {
  title: string;
  description: string;
  rows: FeatureRow[];
}

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    title: 'Content generation',
    description: 'AI-powered posts built around your brand.',
    rows: [
      { label: 'Posts per month', values: ['15', '40', '80', 'Unlimited'] },
      { label: 'AI variants per post', values: ['3', '3', '5', '5'] },
      { label: 'Content modes', values: [false, true, true, true] },
      { label: 'Brand voice calibration', values: [true, true, true, true] },
      { label: 'Anti-slop quality filter', values: [true, true, true, true] },
      { label: 'Monthly content plan', values: ['15 topics', '20 topics', '30 topics', 'Unlimited'] },
      { label: 'Plan regenerations/month', values: ['2', '3', '5', 'Unlimited'] },
    ],
  },
  {
    title: 'Content formats',
    description: 'Every post type your brand needs.',
    rows: [
      { label: 'Text posts', values: [true, true, true, true] },
      { label: 'Image posts', values: [true, true, true, true] },
      { label: 'Carousel posts', values: [false, true, true, true] },
      { label: 'Video posts (Reels)', values: [false, true, true, true] },
      { label: 'AI video generation', values: [false, true, true, true] },
      { label: 'UGC-style video ads', values: [false, true, true, true] },
      { label: 'Data story posts', values: [false, true, true, true] },
      { label: 'Post enrichment', values: [false, true, true, true] },
    ],
  },
  {
    title: 'Publishing',
    description: 'Cross-platform publishing with platform-specific optimisation.',
    rows: [
      { label: 'Social platforms', values: ['3', '6', 'All', 'All'] },
      { label: 'Instagram', values: [true, true, true, true] },
      { label: 'LinkedIn + LinkedIn Page', values: [true, true, true, true] },
      { label: 'X / Twitter', values: [true, true, true, true] },
      { label: 'Facebook', values: [true, true, true, true] },
      { label: 'TikTok', values: [false, true, true, true] },
      { label: 'YouTube', values: [false, true, true, true] },
      { label: 'Threads + Pinterest', values: [false, true, true, true] },
      { label: 'Platform caption optimisation', values: [true, true, true, true] },
      { label: 'Auto-scheduling', values: [true, true, true, true] },
    ],
  },
  {
    title: 'Team and workflow',
    description: 'Built for teams that need a clean approval process.',
    rows: [
      { label: 'Team seats', values: ['2', '5', '10', 'Unlimited'] },
      { label: 'Approval workflow', values: [true, true, true, true] },
      { label: 'Role-based access', values: [true, true, true, true] },
      { label: 'Content calendar', values: [true, true, true, true] },
      { label: 'Human review by NativPost', values: [false, false, true, true] },
    ],
  },
  {
    title: 'Analytics',
    description: 'Understand what is working across every platform.',
    rows: [
      { label: 'Analytics sync', values: [false, '90 days', '1 year', 'Unlimited'] },
      { label: 'Engagement tracking', values: [false, true, true, true] },
      { label: 'Cross-platform analytics', values: [false, true, true, true] },
      { label: 'Analytics history', values: ['30 days', '90 days', '1 year', 'Unlimited'] },
    ],
  },
  {
    title: 'NativPost Connect',
    description: 'AI chat about your account on WhatsApp, Telegram, or Discord.',
    rows: [
      { label: 'Connect access', values: [false, true, true, true] },
      { label: 'Messaging channels', values: [false, true, true, true] },
      { label: 'AI messages per month', values: [false, '100', '500', 'Unlimited'] },
      { label: 'Calendar and schedule queries', values: [false, true, true, true] },
      { label: 'Proactive notifications', values: [false, true, true, true] },
    ],
  },
  {
    title: 'Support',
    description: 'Help when you need it.',
    rows: [
      { label: 'Support channel', values: ['Email', 'Priority email', 'Live chat', 'Dedicated Slack'] },
      { label: 'Response time', values: ['48 hr', '24 hr', 'Same day', '4 hr'] },
      { label: 'Guided onboarding', values: [false, false, true, true] },
      { label: 'Dedicated account manager', values: [false, false, false, true] },
    ],
  },
];

// -----------------------------------------------------------
// SUBCOMPONENTS
// -----------------------------------------------------------
function CheckIcon() {
  return (
    <svg className="mx-auto size-4 text-emerald-500" fill="none" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="7" className="fill-emerald-100" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <span className="block h-px w-4 mx-auto bg-stroke-4 dark:bg-stroke-8" aria-hidden />
  );
}

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <MinusIcon />;
  return <span className="text-[13px] font-medium text-secondary dark:text-accent">{value}</span>;
}

// -----------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------
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
                All plans include your personalised Brand Profile, anti-slop quality filter, and
                cross-platform publishing. A flat $5 setup fee covers your onboarding.
              </p>
            </RevealAnimation>
          </div>

          {/* ── Plan cards ── */}
          <RevealAnimation delay={0.4}>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {PLANS.map(plan => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col overflow-hidden rounded-2xl border transition-shadow ${plan.popular
                      ? 'border-foreground shadow-lg dark:border-accent'
                      : 'border-stroke-3 dark:border-stroke-8 hover:shadow-sm'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-px left-0 right-0 flex justify-center">
                      <span className="rounded-b-lg bg-foreground px-3 py-0.5 text-[10px] font-semibold text-background dark:bg-accent dark:text-background-8">
                        Most popular
                      </span>
                    </div>
                  )}
                  <div className={`px-5 pt-8 pb-5 ${plan.popular ? 'bg-foreground dark:bg-accent' : 'bg-muted/30'}`}>
                    <p className={`mb-1.5 text-sm font-semibold ${plan.popular ? 'text-background' : ''}`}>
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold tracking-tight ${plan.popular ? 'text-background' : ''}`}>
                        ${plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-background/60' : 'text-muted-foreground'}`}>
                        /mo
                      </span>
                    </div>
                    <p className={`mt-0.5 text-xs ${plan.popular ? 'text-background/50' : 'text-muted-foreground'}`}>
                      + ${plan.setupFee} one-time setup
                    </p>
                  </div>
                  <div className="px-5 pb-5 pt-4">
                    <Link
                      href={CTA_HREF}
                      className={`flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] ${plan.popular
                          ? 'bg-foreground text-background hover:opacity-90 dark:bg-accent dark:text-background-8'
                          : 'border bg-background text-foreground hover:bg-muted'
                        }`}
                    >
                      Start free trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </RevealAnimation>

          {/* ── Full comparison table ── */}
          <RevealAnimation delay={0.45}>
            <div>
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold lg:text-2xl">Everything included, by plan</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every feature across every plan. No surprises.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-stroke-3 dark:border-stroke-8">
                <table className="w-full min-w-[640px] border-collapse text-sm">

                  {/* Sticky header */}
                  <thead>
                    <tr className="bg-background-2 dark:bg-background-8">
                      <th className="py-4 pl-5 pr-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground w-[36%]">
                        Features
                      </th>
                      {PLANS.map(plan => (
                        <th
                          key={plan.id}
                          className={`py-4 px-3 text-center text-xs font-semibold w-[16%] ${plan.popular
                              ? 'text-primary dark:text-accent'
                              : 'text-foreground'
                            }`}
                        >
                          {plan.name}
                          <span className="block text-[11px] font-normal text-muted-foreground">
                            ${plan.price}/mo
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-stroke-3 dark:divide-stroke-8">
                    {FEATURE_GROUPS.map((group, gi) => (
                      <>
                        {/* Group header row */}
                        <tr
                          key={`group-${gi}`}
                          className="bg-muted/40 dark:bg-background-7/60"
                        >
                          <td
                            colSpan={5}
                            className="py-3 pl-5 pr-3"
                          >
                            <p className="text-[13px] font-semibold text-foreground">{group.title}</p>
                            <p className="text-[11px] text-muted-foreground">{group.description}</p>
                          </td>
                        </tr>

                        {/* Feature rows */}
                        {group.rows.map((row, ri) => (
                          <tr
                            key={`row-${gi}-${ri}`}
                            className="transition-colors hover:bg-muted/20 dark:hover:bg-background-7/30"
                          >
                            <td className="py-3 pl-5 pr-3 text-[13px] text-muted-foreground">
                              {row.label}
                            </td>
                            {row.values.map((val, vi) => (
                              <td
                                key={vi}
                                className={`py-3 px-3 text-center ${PLANS[vi]?.popular
                                    ? 'bg-primary/5 dark:bg-accent/5'
                                    : ''
                                  }`}
                              >
                                <FeatureCell value={val} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>

                  {/* CTA footer */}
                  <tfoot>
                    <tr className="bg-background-2 dark:bg-background-8 border-t border-stroke-3 dark:border-stroke-8">
                      <td className="py-4 pl-5 pr-3" />
                      {PLANS.map(plan => (
                        <td key={plan.id} className="py-4 px-3 text-center">
                          <Link
                            href={CTA_HREF}
                            className={`inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold transition-all ${plan.popular
                                ? 'bg-foreground text-background hover:opacity-90 dark:bg-accent dark:text-background-8'
                                : 'border bg-background text-foreground hover:bg-muted'
                              }`}
                          >
                            Get started
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tfoot>

                </table>
              </div>
            </div>
          </RevealAnimation>

          {/* ── Enterprise row ── */}
          <RevealAnimation delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-dashed border-stroke-4 dark:border-stroke-7 p-5 text-sm text-muted-foreground">
              <span>Need custom volume, white-labelling, or a dedicated onboarding team?</span>
              <Link
                href={CONTACT_HREF}
                className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-2 hover:opacity-70"
              >
                Contact us about Enterprise
                <svg className="size-3" fill="none" viewBox="0 0 12 12" aria-hidden>
                  <path d="M3.5 8.5L8.5 3.5M8.5 3.5H5M8.5 3.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </RevealAnimation>

        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;