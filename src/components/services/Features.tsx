

'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
// ═════════════════════════════════════════════════════════════════════════════
// 2. FEATURES  (service-page feature highlight — left copy, right coded visual)
// ═════════════════════════════════════════════════════════════════════════════

// Live content generation preview — shows a post being built step-by-step
const ContentBuildVisual = () => {
  const steps = [
    { label: 'Brand profile loaded', done: true },
    { label: 'Caption drafted', done: true },
    { label: 'Anti-slop check passed', done: true },
    { label: 'Visual generated', done: false, active: true },
    { label: 'Scheduled for 9:00 AM', done: false },
  ];

  return (
    <div className="w-full space-y-4 select-none">
      {/* Post being built */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border shadow-2">
        {/* Platform tabs */}
        <div className="border-stroke-4 dark:border-stroke-8 flex items-center gap-2 border-b px-4 py-3">
          {['IG', 'LI', 'X', 'FB'].map((p, i) => (
            <div key={p} className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-semibold transition-colors ${i === 0 ? 'bg-secondary dark:bg-accent text-accent dark:text-secondary' : 'bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50'}`}>
              {p}
            </div>
          ))}
          <div className="ml-auto flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
              <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Generating…</span>
          </div>
        </div>

        {/* Simulated post body */}
        <div className="p-4 space-y-3">
          <div className="bg-background-3 dark:bg-background-8 h-24 w-full rounded-xl flex items-center justify-center">
            <div className="space-y-1.5 w-3/4">
              <div className="bg-background-1 dark:bg-background-9 h-2 rounded-full w-full" />
              <div className="bg-background-1 dark:bg-background-9 h-2 rounded-full w-4/5" />
              <div className="bg-primary-100 dark:bg-primary-900/30 h-2 rounded-full w-2/3 animate-pulse" />
            </div>
          </div>
          <p className="text-secondary dark:text-accent text-[12px] leading-relaxed">
            Behind every great product is a story worth telling. Here's ours — and why we built it for you.
          </p>
          <div className="flex flex-wrap gap-1">
            {['#BrandStory', '#ContentMarketing', '#StartupLife'].map((tag) => (
              <span key={tag} className="text-primary-500 text-[10px]">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline steps */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border shadow-2 px-4 py-3 space-y-2">
        <p className="text-secondary/40 dark:text-accent/40 text-[10px] font-medium uppercase tracking-wide mb-2">Content pipeline</p>
        {steps.map((step) => (
          <div key={step.label} className="flex items-center gap-2.5">
            {step.done
              ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-ns-green"><circle cx="7" cy="7" r="7" fill="currentColor" fillOpacity="0.15" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              : step.active
                ? <div className="shrink-0 h-3.5 w-3.5 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
                : <div className="shrink-0 h-3.5 w-3.5 rounded-full border border-stroke-3 dark:border-stroke-7" />
            }
            <span className={`text-[11px] ${step.done ? 'text-secondary dark:text-accent' : step.active ? 'text-primary-500 font-medium' : 'text-secondary/30 dark:text-accent/30'}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Quality score chip */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 ml-4 inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 shadow-2">
        <div className="bg-ns-green-light dark:bg-ns-green/10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-secondary dark:text-accent text-[11px] font-medium leading-tight">Quality score: 94 / 100</p>
          <p className="text-secondary/40 dark:text-accent/40 text-[10px]">Ready to send for approval</p>
        </div>
      </div>
    </div>
  );
};

const featuresListData = [
  { id: 'f1', text: 'Deep brand-voice matching on every single post' },
  { id: 'f2', text: 'Anti-slop filter catches robotic patterns automatically' },
  { id: 'f3', text: 'Human review layer before anything goes live' },
];

export const Features = ({
  className,
  badgeClassName,
  btnClassName,
}: {
  className?: string;
  badgeClassName?: string;
  btnClassName?: string;
}) => (
  <section className={`relative overflow-hidden pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-40 xl:pt-[100px] xl:pb-[200px] ${className ?? ''}`}>
    <div className="main-container">
      <div className="flex flex-wrap items-center gap-y-8 lg:flex-nowrap lg:gap-4 xl:gap-8">

        {/* Left — copy */}
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <span className={`badge badge-yellow-v2 mb-5 ${badgeClassName ?? ''}`}>How it works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto mb-8 max-w-[520px] lg:mx-0">
                Your brand's content, on autopilot — without sacrificing quality.
              </h2>
            </RevealAnimation>
            <ul className="mb-14 space-y-4">
              {featuresListData.map((feature, index) => (
                <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                  <li className="flex items-center justify-center gap-2 lg:justify-start">
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="shrink-0">
                      <rect width={18} height={18} rx={9} fill="" className="fill-secondary/10 dark:fill-accent/10" />
                      <path d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z" fill="" className="fill-secondary/80 dark:fill-accent/80" />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60">{feature.text}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
            <RevealAnimation delay={0.6}>
              <div>
                <LinkButton href="/features" className={`btn btn-xl dark:btn-transparent hover:btn-primary btn-secondary ${btnClassName ?? ''}`}>
                  See all features
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Right — coded visual */}
        <RevealAnimation delay={0.3}>
          <div className="mx-auto w-full max-w-max lg:mx-0 lg:w-1/2">
            <div className="bg-background-3 dark:bg-background-5 relative overflow-hidden rounded-[20px] p-5 lg:p-8">
              <ContentBuildVisual />
            </div>
          </div>
        </RevealAnimation>

      </div>
    </div>
  </section>
);

export default Features;