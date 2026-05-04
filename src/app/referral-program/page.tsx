import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Referral Program — NativPost | Give a Month, Get a Month',
  description:
    'Refer a friend to NativPost and get one month free for every referral that converts to a paid plan. No limit on free months.',
};

const steps = [
  {
    number: '1',
    color: 'bg-ns-yellow',
    title: 'Get your referral link',
    description:
      'Log in to your NativPost dashboard and copy your personal referral link from the account settings page. Every account gets a unique link automatically.',
  },
  {
    number: '2',
    color: 'bg-ns-green',
    title: 'Share it with someone who needs it',
    description:
      'Send your link to business owners, marketers, and agency owners who are struggling with social media content. When they sign up and convert to a paid plan, the referral is tracked automatically.',
  },
  {
    number: '3',
    color: 'bg-ns-red',
    title: 'Both of you get rewarded',
    description:
      'You receive one month free on your current plan. Your referred friend gets 20% off their first month. There is no limit — refer 12 people and get a full year free.',
  },
];

const faqs = [
  {
    question: 'How is a referral tracked?',
    answer:
      'When someone clicks your referral link and signs up, their account is linked to yours. If they convert to a paid plan within 30 days of signing up, the referral counts and your free month is applied automatically.',
  },
  {
    question: 'When does my free month apply?',
    answer:
      'Your free month credit is applied at the start of your next billing cycle after your referred contact completes their first paid payment.',
  },
  {
    question: 'Is there a limit on how many people I can refer?',
    answer:
      'There is no limit. If you refer 12 paying customers, you get 12 free months. Free months accumulate and are applied consecutively.',
  },
  {
    question: 'What does my referred friend receive?',
    answer:
      'They receive 20% off their first paid month automatically when they sign up through your referral link.',
  },
  {
    question: 'Does the referral work if they sign up without my link?',
    answer:
      'No. The referral is only tracked if they sign up through your unique link. Make sure they use it when creating their account.',
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">

      {/* Hero */}
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[100px]">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Referral program</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1>
                Give a month, <span className="text-primary-500">get a month</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[520px]">
                For every friend who becomes a paying NativPost customer, you get one full month free on your plan. No limits, no complicated process.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="pt-4">
                <LinkButton
                  href="https://app.nativpost.com"
                  className="btn btn-secondary btn-xl hover:btn-white dark:btn-accent dark:hover:btn-white-dark">
                  Get your referral link
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">How it works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Three steps to free months</h2>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[700px] space-y-5">
            {steps.map((step, index) => (
              <RevealAnimation delay={0.3 + index * 0.15} key={step.number}>
                <div className="bg-background-3 dark:bg-background-7 flex items-start gap-5 rounded-[20px] px-8 py-7">
                  <div
                    className={`text-tagline-2 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold ${step.color}`}>
                    {step.number}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-secondary dark:text-accent text-heading-6 font-medium">{step.title}</h3>
                    <p className="text-tagline-1">{step.description}</p>
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
            <div className="bg-secondary dark:bg-background-9 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-[20px] overflow-hidden">
              <div className="flex-1 space-y-2 px-8 py-10 text-center">
                <h3 className="text-heading-4 font-normal text-white">1 month free</h3>
                <p className="text-accent/60">For every successful referral</p>
              </div>
              <div className="flex-1 space-y-2 px-8 py-10 text-center">
                <h3 className="text-heading-4 font-normal text-white">20% off</h3>
                <p className="text-accent/60">First month discount for your friend</p>
              </div>
              <div className="flex-1 space-y-2 px-8 py-10 text-center">
                <h3 className="text-heading-4 font-normal text-white">No limit</h3>
                <p className="text-accent/60">Refer 12 friends, get a full year free</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="mb-[60px] space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow">Questions</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Frequently asked questions</h2>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[700px] space-y-4">
            {faqs.map((faq, index) => (
              <RevealAnimation delay={0.3 + index * 0.1} key={index}>
                <div className="rounded-[16px] border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-7 px-8 py-6 space-y-2">
                  <h3 className="text-heading-6 font-medium text-secondary dark:text-accent">{faq.question}</h3>
                  <p className="text-tagline-1">{faq.answer}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
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