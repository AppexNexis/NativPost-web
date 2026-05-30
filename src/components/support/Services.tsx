'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const SUPPORT_CATEGORIES = [
  {
    shapeClass: 'ns-shape-9',
    title: 'Brand Profile Engine',
    desc: 'Configure settings for multi-platform tones, platform vocabularies, content styles, and custom parameters.',
    actionText: 'Tune voice settings',
    href: 'https://app.nativpost.com/dashboard/support',
  },
  {
    shapeClass: 'ns-shape-3',
    title: 'Publishing Pipelines',
    desc: 'Troubleshoot API disconnects across Instagram, LinkedIn, Facebook, TikTok, X (Twitter), YouTube, Threads, or Pinterest.',
    actionText: 'Check network logs',
    href: 'https://app.nativpost.com/dashboard/support',
  },
  {
    shapeClass: 'ns-shape-12',
    title: 'Billing & Invoicing',
    desc: 'Manage global subscriptions via Stripe, or domestic localized parameters via Paystack (including native NGN processing).',
    actionText: 'View plan status',
    href: 'https://app.nativpost.com/dashboard/support',
  },
];

const Services = () => {
  return (
    <section className="py-[80px] bg-background-2/30 dark:bg-background-8/10">
      <div className="main-container">
        <div className="mb-[60px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Operational Pillars</span>
          </RevealAnimation>
          <div className="space-y-2">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[810px] text-heading-3 font-bold text-secondary dark:text-accent">
                De-risk your publishing pipeline with dedicated infrastructure
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[580px] text-secondary/60 dark:text-accent/60">
                NativPost pairs deep technical optimization layers with immediate human engineering oversight, filtering mechanical failures before execution blocks trigger.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUPPORT_CATEGORIES.map((cat, i) => (
            <RevealAnimation delay={0.4 + i * 0.1} key={cat.title}>
              <div className="bg-background-1 dark:bg-background-9 relative z-10 flex flex-col justify-between h-full border border-stroke-2 dark:border-stroke-8 rounded-[20px] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-background-2 dark:bg-background-8">
                    <span className={`${cat.shapeClass} text-secondary dark:text-accent text-[32px]`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 font-semibold text-secondary dark:text-accent">{cat.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70 text-[13px] leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-auto">
                  <LinkButton
                    href={cat.href}
                    target="_blank"
                    className="btn btn-white dark:btn-transparent border border-stroke-3 dark:border-stroke-7 hover:btn-secondary dark:hover:btn-accent btn-sm w-full text-center flex justify-center"
                  >
                    {cat.actionText}
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;