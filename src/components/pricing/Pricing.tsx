/*
 * Pricing.tsx
 *
 * Authoritative pricing surface for /pricing. Sources tiers, prices, and the
 * feature matrix from src/data/plans.ts (marketing mirror of NativPost-app).
 *
 * - Free row on top: the $0 entry point everyone lands on at signup
 * - Monthly/Annual toggle (annual = -20%, priced from annualPriceUsd/12)
 * - 4 tier cards (Starter / Growth / Pro / Agency) with Growth = popular
 * - Enterprise strip below (contact-only)
 * - Full comparison table driven by FEATURE_MATRIX, Free included as a column
 *
 * There is no setup fee and no per-plan trial: signing up starts the free
 * window, and upgrading happens inside the app.
 */

'use client';

import Link from 'next/link';
import { Fragment, useMemo, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import {
  ANNUAL_SAVE_PCT,
  FEATURE_MATRIX,
  FREE_PLAN,
  FREE_TRIAL_DAYS,
  MARKETING_PLANS,
  monthlyEquivalent,
  type MarketingPlan,
} from '@/data/plans';

type Billing = 'monthly' | 'annual';

function CheckIcon() {
  return (
    <svg className="mx-auto size-4 text-emerald-500" fill="none" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="7" className="fill-emerald-100" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon() {
  return <span className="mx-auto block h-px w-4 bg-stroke-4 dark:bg-stroke-8" aria-hidden />;
}

function CellValue({ value }: { value: string }) {
  if (value === 'Included') {
    return <CheckIcon />;
  }
  if (value === 'Not included') {
    return <MinusIcon />;
  }
  return <span className="text-[13px] font-medium text-secondary dark:text-accent">{value}</span>;
}

function planPrice(plan: MarketingPlan, billing: Billing): string {
  if (plan.contactOnly) {
    return 'Custom';
  }
  if (billing === 'annual') {
    return `$${monthlyEquivalent(plan.annualPriceUsd).toFixed(0)}`;
  }
  return `$${plan.priceUsd}`;
}

// Free is deliberately not a card — it renders as the row above the grid.
const CARD_TIERS = MARKETING_PLANS.filter(p => p.id !== 'enterprise' && !p.isFree);
const ENTERPRISE = MARKETING_PLANS.find(p => p.id === 'enterprise');
// The comparison table does show Free, so visitors can see exactly where it stops.
const TABLE_TIERS = [FREE_PLAN, ...CARD_TIERS];

const Pricing = () => {
  const [billing, setBilling] = useState<Billing>('monthly');

  const sections = useMemo(() => {
    const map = new Map<string, typeof FEATURE_MATRIX>();
    for (const row of FEATURE_MATRIX) {
      if (!map.has(row.section)) {
        map.set(row.section, []);
      }
      map.get(row.section)!.push(row);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-2 dark:bg-background-8 mx-auto w-full max-w-[1440px] space-y-16 rounded-2xl px-5 py-[80px] md:px-8 lg:px-12 xl:px-16">

          {/* Heading */}
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Simple pricing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Agency-quality content at product pricing.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <p className="mx-auto max-w-[600px]">
                Start free for {FREE_TRIAL_DAYS} days — no credit card, no setup fee. Every plan
                includes your Brand Profile, AI Studio credits, and cross-platform publishing.
              </p>
            </RevealAnimation>
          </div>

          {/* Billing toggle */}
          <RevealAnimation delay={0.38}>
            <div className="flex justify-center">
              <div
                role="tablist"
                aria-label="Billing period"
                className="inline-flex items-center gap-1 rounded-full border border-stroke-3 bg-background-1 p-1 dark:border-stroke-8 dark:bg-background-9"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === 'monthly'}
                  onClick={() => setBilling('monthly')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    billing === 'monthly'
                      ? 'bg-foreground text-background dark:bg-accent dark:text-background-8'
                      : 'text-secondary hover:text-foreground dark:text-accent/70 dark:hover:text-accent'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === 'annual'}
                  onClick={() => setBilling('annual')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    billing === 'annual'
                      ? 'bg-foreground text-background dark:bg-accent dark:text-background-8'
                      : 'text-secondary hover:text-foreground dark:text-accent/70 dark:hover:text-accent'
                  }`}
                >
                  Annual
                  <span className="ml-1.5 rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    -{ANNUAL_SAVE_PCT}%
                  </span>
                </button>
              </div>
            </div>
          </RevealAnimation>

          {/* Free tier — a row, not a card: it is where every signup starts,
              not an option competing with the paid tiers. Sits above the grid
              at the same rhythm the Enterprise strip sits below it. */}
          <RevealAnimation delay={0.39}>
            <div className="overflow-hidden rounded-2xl border border-stroke-3 bg-background-1 dark:border-stroke-8 dark:bg-background-9">
              <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:gap-10">
                <div className="lg:w-72 lg:shrink-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold">{FREE_PLAN.name}</p>
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      Everyone starts here
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">$0</span>
                    <span className="text-sm text-secondary dark:text-accent/70">
                      for {FREE_TRIAL_DAYS} days
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-secondary dark:text-accent/70">
                    {FREE_PLAN.tagline}
                  </p>
                </div>

                <ul className="grid flex-1 gap-x-6 gap-y-2.5 text-[13px] text-secondary sm:grid-cols-2 xl:grid-cols-3 dark:text-accent/80">
                  {FREE_PLAN.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2">
                      <svg className="mt-0.5 size-3.5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 16 16" aria-hidden>
                        <path d="M4 8.5l2.5 2.5L12 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={FREE_PLAN.ctaHref}
                  className="flex shrink-0 items-center justify-center rounded-xl border border-stroke-3 bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-background-2 active:scale-[0.98] lg:w-auto dark:border-stroke-8 dark:bg-background-9 dark:text-accent"
                >
                  {FREE_PLAN.ctaLabel}
                </Link>
              </div>
            </div>
          </RevealAnimation>

          {/* Plan cards */}
          <RevealAnimation delay={0.4}>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {CARD_TIERS.map((plan) => {
                const popular = !!plan.popular;
                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col overflow-hidden rounded-2xl border transition-shadow ${
                      popular
                        ? 'border-foreground shadow-lg dark:border-accent'
                        : 'border-stroke-3 hover:shadow-sm dark:border-stroke-8'
                    }`}
                  >
                    {popular && (
                      <div className="absolute -top-px left-0 right-0 flex justify-center">
                        <span className="rounded-b-lg bg-foreground px-3 py-0.5 text-[10px] font-semibold text-background dark:bg-accent dark:text-background-8">
                          Most popular
                        </span>
                      </div>
                    )}

                    <div className={`px-5 pt-8 pb-5 ${popular ? 'bg-foreground dark:bg-accent' : 'bg-background-1 dark:bg-background-9'}`}>
                      <p className={`mb-1 text-sm font-semibold ${popular ? 'text-background dark:text-background-8' : ''}`}>
                        {plan.name}
                      </p>
                      <p className={`mb-3 text-xs ${popular ? 'text-background/70 dark:text-background-8/70' : 'text-secondary dark:text-accent/70'}`}>
                        {plan.tagline}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-bold tracking-tight ${popular ? 'text-background dark:text-background-8' : ''}`}>
                          {planPrice(plan, billing)}
                        </span>
                        {!plan.contactOnly && (
                          <span className={`text-sm ${popular ? 'text-background/60 dark:text-background-8/60' : 'text-secondary dark:text-accent/70'}`}>
                            /mo
                          </span>
                        )}
                      </div>
                      <p className={`mt-0.5 text-xs ${popular ? 'text-background/50 dark:text-background-8/50' : 'text-secondary dark:text-accent/70'}`}>
                        {plan.contactOnly
                          ? 'Custom limits and SLA'
                          : billing === 'annual'
                            ? `Billed $${plan.annualPriceUsd}/yr · cancel anytime`
                            : 'No setup fee · cancel anytime'}
                      </p>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-4 px-5 pt-4 pb-5">
                      <ul className="space-y-1.5 text-[13px] text-secondary dark:text-accent/80">
                        {plan.highlights.slice(0, 6).map(h => (
                          <li key={h} className="flex items-start gap-2">
                            <svg className="mt-0.5 size-3.5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 16 16" aria-hidden>
                              <path d="M4 8.5l2.5 2.5L12 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={plan.ctaHref}
                        className={`flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] ${
                          popular
                            ? 'bg-foreground text-background hover:opacity-90 dark:bg-accent dark:text-background-8'
                            : 'border border-stroke-3 bg-background text-foreground hover:bg-background-2 dark:border-stroke-8 dark:bg-background-9 dark:text-accent'
                        }`}
                      >
                        {plan.ctaLabel}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealAnimation>

          {/* Enterprise strip */}
          {ENTERPRISE && (
            <RevealAnimation delay={0.42}>
              <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-stroke-4 p-6 sm:flex-row sm:items-center dark:border-stroke-7">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold">Enterprise</p>
                  <p className="mt-1 text-[13px] text-secondary dark:text-accent/70">
                    {ENTERPRISE.tagline}
                  </p>
                </div>
                <Link
                  href={ENTERPRISE.ctaHref}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-stroke-3 bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-background-2 dark:border-stroke-8 dark:bg-background-9 dark:text-accent"
                >
                  {ENTERPRISE.ctaLabel}
                  <svg className="size-3.5" fill="none" viewBox="0 0 12 12" aria-hidden>
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H5M8.5 3.5V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </RevealAnimation>
          )}

          {/* Comparison table */}
          <RevealAnimation delay={0.45}>
            <div>
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold lg:text-2xl">Compare every feature</h3>
                <p className="mt-2 text-sm text-secondary dark:text-accent/70">
                  What you get on each plan, side by side.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-stroke-3 dark:border-stroke-8">
                <table className="w-full min-w-[820px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-background-2 dark:bg-background-8">
                      <th className="w-[28%] py-4 pl-5 pr-3 text-left text-xs font-medium uppercase tracking-wider text-secondary dark:text-accent/70">
                        Features
                      </th>
                      {TABLE_TIERS.map(plan => (
                        <th
                          key={plan.id}
                          className={`w-[14.4%] px-3 py-4 text-center text-xs font-semibold ${
                            plan.popular ? 'text-primary-500 dark:text-accent' : 'text-foreground'
                          }`}
                        >
                          {plan.name}
                          <span className="block text-[11px] font-normal text-secondary dark:text-accent/60">
                            {plan.isFree
                              ? `$0 · ${FREE_TRIAL_DAYS} days`
                              : `${planPrice(plan, billing)}/mo`}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-stroke-3 dark:divide-stroke-8">
                    {sections.map(([section, rows]) => (
                      <Fragment key={section}>
                        <tr className="bg-background-1/60 dark:bg-background-9/60">
                          <td colSpan={TABLE_TIERS.length + 1} className="py-3 pl-5 pr-3">
                            <p className="text-[13px] font-semibold text-foreground">{section}</p>
                          </td>
                        </tr>
                        {rows.map(row => (
                          <tr
                            key={`${section}-${row.label}`}
                            className="transition-colors hover:bg-background-1/40 dark:hover:bg-background-9/30"
                          >
                            <td className="py-3 pl-5 pr-3 text-[13px] text-secondary dark:text-accent/70">
                              {row.label}
                            </td>
                            {TABLE_TIERS.map(plan => (
                              <td
                                key={plan.id}
                                className={`px-3 py-3 text-center ${
                                  plan.popular ? 'bg-primary-500/5 dark:bg-accent/5' : ''
                                }`}
                              >
                                <CellValue value={row.accessor(plan)} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>

                  <tfoot>
                    <tr className="border-t border-stroke-3 bg-background-2 dark:border-stroke-8 dark:bg-background-8">
                      <td className="py-4 pl-5 pr-3" />
                      {TABLE_TIERS.map(plan => (
                        <td key={plan.id} className="px-3 py-4 text-center">
                          <Link
                            href={plan.ctaHref}
                            className={`inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                              plan.popular
                                ? 'bg-foreground text-background hover:opacity-90 dark:bg-accent dark:text-background-8'
                                : 'border border-stroke-3 bg-background text-foreground hover:bg-background-2 dark:border-stroke-8 dark:bg-background-9 dark:text-accent'
                            }`}
                          >
                            {plan.ctaLabel}
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </RevealAnimation>

        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;
