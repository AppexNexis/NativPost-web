// ============================================================
// REFERRAL PROGRAM PAGE — src/app/referral-program/page.tsx
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Referral Program — NativPost | Earn Free Months',
  description:
    'Refer a friend to NativPost and get one month free for every referral that converts. No limit on free months. Share the love, grow together.',
};

const steps = [
  {
    number: '1',
    color: 'bg-ns-yellow',
    title: 'Share your unique referral link',
    description:
      'Log in to your NativPost dashboard and grab your personal referral link. Share it with business owners, founders, and marketers who struggle with social media content.',
  },
  {
    number: '2',
    color: 'bg-ns-green',
    title: 'Your friend signs up and subscribes',
    description:
      'When someone uses your link to sign up and converts to a paid plan (after their free trial), the referral is tracked automatically.',
  },
  {
    number: '3',
    color: 'bg-ns-red',
    title: 'You both get rewarded',
    description:
      'You get one month free on your current plan. Your friend gets 20% off their first month. There is no limit — refer 12 friends, get a full year free.',
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* Hero */}
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[100px]">
        <div className="main-container">
          <div className="mx-auto max-w-[800px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Referral program</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                Give a month, <span className="text-primary-500">get a month</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[550px]">
                Love NativPost? Share it with other business owners. For every friend who becomes a paying customer, you
                get one full month free. No limits.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="pt-4">
                <LinkButton
                  href="/login"
                  className="btn btn-secondary btn-xl hover:btn-white dark:btn-accent dark:hover:btn-white-dark">
                  Get your referral link
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">How it works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Three simple steps to free months</h2>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[700px] space-y-6">
            {steps.map((step, index) => (
              <RevealAnimation delay={0.3 + index * 0.15} key={index}>
                <div className="bg-background-3 dark:bg-background-7 flex items-start gap-5 rounded-[20px] px-8 py-6">
                  <div
                    className={`text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold ${step.color}`}>
                    {step.number}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg font-medium">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[80px]">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <div className="bg-secondary dark:bg-background-9 flex flex-col rounded-[20px] px-6 py-8 md:flex-row md:px-0">
              <div className="border-b-accent/20 md:border-r-accent/20 flex-1 space-y-2 border-b py-4 text-center md:border-r md:border-b-0">
                <h3 className="text-heading-4 font-normal text-white">1 month</h3>
                <p className="text-accent/60">Free for every successful referral</p>
              </div>
              <div className="border-b-accent/20 md:border-r-accent/20 flex-1 space-y-2 border-b py-4 text-center md:border-r md:border-b-0">
                <h3 className="text-heading-4 font-normal text-white">20% off</h3>
                <p className="text-accent/60">Discount for your referred friend</p>
              </div>
              <div className="flex-1 space-y-2 py-4 text-center">
                <h3 className="text-heading-4 font-normal text-white">No limit</h3>
                <p className="text-accent/60">Refer 12 friends, get a full year free</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Start referring"
        badgeClass="!badge-green"
        ctaHeading="Log in to get your unique referral link"
        description="Share with business owners, founders, and marketers who deserve better social media content."
        ctaBtnText="Log in to dashboard"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
