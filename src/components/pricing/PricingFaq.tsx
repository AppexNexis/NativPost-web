/*
 * PricingFaq.tsx
 *
 * Answers the questions we hear on the sales side. Keep answers honest and
 * aligned with what plans.ts actually promises. Uses <details> so it works
 * without client JS.
 */

import RevealAnimation from '../animation/RevealAnimation';
import { FREE_PLAN, FREE_TRIAL_DAYS } from '@/data/plans';

type FaqItem = { q: string; a: string };

const FAQ: FaqItem[] = [
  {
    q: 'Do I need a credit card to start?',
    a: `No. Signing up puts you straight into the product on the Free plan for ${FREE_TRIAL_DAYS} days — no card, no setup fee, no sales call. You build your Brand Profile, connect accounts, and publish real posts before you decide anything.`,
  },
  {
    q: 'What do I get on the Free plan?',
    a: `${FREE_PLAN.features.postsPerMonth} posts, ${FREE_PLAN.features.platformsLimit} connected platforms, ${FREE_PLAN.features.monthlyAiCredits} AI Studio credits, and the full Brand Profile and calendar. Text posts only — images, carousels and video unlock on a paid plan.`,
  },
  {
    q: `What happens after the ${FREE_TRIAL_DAYS} days?`,
    a: 'Nothing disappears. Your posts, Brand Profile and connected accounts stay exactly as they are — you just need to pick a plan before you can publish again. Choose one from the billing page whenever you are ready.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. We used to charge a one-time onboarding fee and we removed it. You pay the monthly or annual plan price and nothing else.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. Upgrades take effect immediately and are prorated. Downgrades take effect at the end of your current billing period.',
  },
  {
    q: 'What counts as an AI Studio credit?',
    a: 'One credit generates one output: a caption variant, an image, or a short video. Video generations may consume additional credits based on length. Credits reset at the start of each billing cycle.',
  },
  {
    q: 'Which platforms can I publish to?',
    a: 'Instagram, TikTok, YouTube, Facebook, LinkedIn, LinkedIn Company Pages, X, Threads, and Pinterest. Your plan sets how many platforms you can connect at once.',
  },
  {
    q: 'Do you actually review my content before it goes live?',
    a: 'Pro, Agency, and Enterprise include human review before publish. A NativPost editor eyeballs every scheduled post for on-brand voice, factual accuracy, and platform fit before it ships.',
  },
  {
    q: 'Can I cancel any time?',
    a: 'Yes. Monthly plans cancel at the end of the current cycle with no fee. Annual plans lock in the annual rate; you can still cancel any time and keep access through the end of the paid year.',
  },
  {
    q: 'Do you offer an API?',
    a: 'Pro, Agency, and Enterprise include the public REST API and webhooks so you can drive NativPost from your own systems and receive events when content publishes.',
  },
];

const PricingFaq = () => {
  return (
    <section className="pt-16 pb-[100px] lg:pt-20 lg:pb-[140px] xl:pt-28 xl:pb-[170px]">
      <div className="mx-auto w-full max-w-[900px] px-5 md:px-8">
        <div className="mx-auto mb-10 max-w-xl space-y-3 text-center lg:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">FAQ</span>
          </RevealAnimation>
          <RevealAnimation delay={0.15}>
            <h2>Questions we hear a lot.</h2>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.2}>
          <div className="divide-y divide-stroke-3 rounded-2xl border border-stroke-3 bg-background-1 dark:divide-stroke-8 dark:border-stroke-8 dark:bg-background-9">
            {FAQ.map(item => (
              <details
                key={item.q}
                className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden md:px-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium text-foreground list-none">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="grid size-6 shrink-0 place-items-center rounded-full border border-stroke-3 text-secondary transition-transform group-open:rotate-45 dark:border-stroke-8 dark:text-accent/70"
                  >
                    <svg className="size-3" fill="none" viewBox="0 0 12 12">
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pt-3 text-sm text-secondary dark:text-accent/70">{item.a}</p>
              </details>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default PricingFaq;
