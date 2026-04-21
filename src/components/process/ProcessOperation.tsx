'use client';

import RevealAnimation from '../animation/RevealAnimation';

// ─────────────────────────────────────────────────────────────────────────────
// Onboarding Visual
// Shows the three-step flow as a mini product UI:
//   Step 1 — Brand Profile being filled in
//   Step 2 — Content calendar with posts awaiting approval
//   Step 3 — Publishing confirmation across platforms
// All tokens from variables.css. No images. No emojis. No decorative dashes.
// ─────────────────────────────────────────────────────────────────────────────

// Step 1 — Brand Profile setup
const StepOneMini = () => (
  <div className="flex flex-col gap-3">
    {/* Progress indicator */}
    <div className="flex items-center justify-between">
      <span className="text-secondary/40 dark:text-accent/40 text-[10px] font-semibold uppercase tracking-widest">
        Brand Profile
      </span>
      <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Step 1 of 3</span>
    </div>

    {/* Voice tags */}
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-xl border p-3">
      <p className="text-secondary/40 dark:text-accent/40 mb-2 text-[10px] font-semibold uppercase tracking-widest">
        Voice
      </p>
      <div className="flex flex-wrap gap-1.5">
        {['Professional', 'Witty', 'Concise'].map((t) => (
          <span
            key={t}
            className="border-stroke-2 dark:border-stroke-7 bg-background-2 dark:bg-background-8 text-secondary dark:text-accent rounded-full border px-2.5 py-0.5 text-[11px]"
          >
            {t}
          </span>
        ))}
        <span className="border-stroke-2 dark:border-stroke-7 text-secondary/30 dark:text-accent/30 cursor-text rounded-full border border-dashed px-2.5 py-0.5 text-[11px]">
          Add tone...
        </span>
      </div>
    </div>

    {/* Audience field */}
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-xl border p-3">
      <p className="text-secondary/40 dark:text-accent/40 mb-1.5 text-[10px] font-semibold uppercase tracking-widest">
        Audience
      </p>
      <p className="text-secondary dark:text-accent text-[12px]">
        Small business owners, 25–45, interested in growth and brand building
      </p>
    </div>

    {/* Progress bar */}
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Profile completeness</span>
        <span className="text-secondary dark:text-accent text-[10px] font-medium">80%</span>
      </div>
      <div className="bg-background-3 dark:bg-background-8 h-1.5 overflow-hidden rounded-full">
        <div className="bg-ns-yellow h-full rounded-full" style={{ width: '80%' }} />
      </div>
    </div>
  </div>
);

// Step 2 — Content approval queue
const StepTwoMini = () => {
  const posts = [
    { platform: 'IG', title: 'Behind-the-scenes studio tour', status: 'approved' as const },
    { platform: 'LI', title: 'Building a brand in 2026', status: 'pending' as const },
    { platform: 'X', title: 'The agency pricing myth', status: 'pending' as const },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-secondary/40 dark:text-accent/40 text-[10px] font-semibold uppercase tracking-widest">
          Content Calendar
        </span>
        <span className="text-secondary/40 dark:text-accent/40 text-[10px]">3 posts ready</span>
      </div>
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border">
        {posts.map((p, i) => (
          <div
            key={p.platform + i}
            className={`flex items-center gap-3 px-3 py-2.5 ${i < posts.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
          >
            <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[9px] font-semibold">
              {p.platform}
            </div>
            <span className="text-secondary dark:text-accent min-w-0 flex-1 truncate text-[11px] font-medium">
              {p.title}
            </span>
            {p.status === 'approved' ? (
              <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-medium">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Approved
              </span>
            ) : (
              <span className="bg-ns-yellow-light text-secondary dark:bg-accent/10 dark:text-ns-yellow shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium">
                Review
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Bulk approve row */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 flex items-center justify-between rounded-xl border px-3 py-2.5">
        <span className="text-secondary/50 dark:text-accent/50 text-[11px]">
          2 posts awaiting review
        </span>
        <div className="bg-ns-green text-secondary rounded-full px-3 py-1 text-[10px] font-semibold">
          Approve all
        </div>
      </div>
    </div>
  );
};

// Step 3 — Publishing confirmation
const StepThreeMini = () => {
  const platforms = [
    { abbr: 'IG', label: 'Instagram', published: true },
    { abbr: 'LI', label: 'LinkedIn', published: true },
    { abbr: 'X', label: 'X / Twitter', published: true },
    { abbr: 'FB', label: 'Facebook', published: false },
    { abbr: 'TK', label: 'TikTok', published: false },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-secondary/40 dark:text-accent/40 text-[10px] font-semibold uppercase tracking-widest">
          Publishing
        </span>
        <div className="flex items-center gap-1.5">
          <span className="bg-ns-green relative flex h-1.5 w-1.5 shrink-0">
            <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            <span className="bg-ns-green relative inline-flex h-1.5 w-1.5 rounded-full" />
          </span>
          <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Live</span>
        </div>
      </div>
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border">
        {platforms.map((p, i) => (
          <div
            key={p.abbr}
            className={`flex items-center gap-3 px-3 py-2.5 ${i < platforms.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
          >
            <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[9px] font-semibold">
              {p.abbr}
            </div>
            <span className="text-secondary dark:text-accent flex-1 text-[11px]">{p.label}</span>
            {p.published ? (
              <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-medium">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Published
              </span>
            ) : (
              <span className="text-secondary/30 dark:text-accent/30 shrink-0 rounded-full px-2 py-0.5 text-[9px]">
                Not connected
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main tabbed visual — three steps, one active at a time
// Uses CSS-only tab switching via state to avoid any hidden content issues
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  { number: 1, color: 'bg-ns-yellow', label: 'Brand Profile', content: <StepOneMini /> },
  { number: 2, color: 'bg-ns-green', label: 'Review', content: <StepTwoMini /> },
  { number: 3, color: 'bg-ns-red', label: 'Publish', content: <StepThreeMini /> },
] as const;

import { useState } from 'react';

const OnboardingVisual = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto w-full max-w-[480px] select-none lg:mx-0">

      {/* Step tab row */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 mb-3 flex overflow-hidden rounded-2xl border shadow-2">
        {STEPS.map((step, i) => (
          <button
            key={step.number}
            type="button"
            onClick={() => setActive(i)}
            className={`flex flex-1 items-center justify-center gap-2 px-3 py-3 text-[12px] font-medium transition-colors ${active === i
                ? 'bg-background-2 dark:bg-background-8 text-secondary dark:text-accent'
                : 'text-secondary/40 dark:text-accent/40 hover:bg-background-2 dark:hover:bg-background-8'
              } ${i < STEPS.length - 1 ? 'border-stroke-1 dark:border-stroke-5 border-r' : ''}`}
          >
            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-secondary ${step.color}`}>
              {step.number}
            </span>
            <span className="hidden sm:inline">{step.label}</span>
          </button>
        ))}
      </div>

      {/* Active step content */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-2 dark:bg-background-8 rounded-2xl border p-4 shadow-2">
        {STEPS[active].content}
      </div>

      {/* Step nav */}
      <div className="mt-3 flex items-center justify-between px-1">
        <div className="flex gap-1.5">
          {STEPS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to step ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${active === i
                  ? 'bg-secondary dark:bg-accent w-6'
                  : 'bg-stroke-2 dark:bg-stroke-7 w-1.5'
                }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="border-stroke-2 dark:border-stroke-7 text-secondary/40 dark:text-accent/40 disabled:opacity-20 flex h-7 w-7 items-center justify-center rounded-lg border text-xs transition-opacity"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setActive((a) => Math.min(STEPS.length - 1, a + 1))}
            disabled={active === STEPS.length - 1}
            className="border-stroke-2 dark:border-stroke-7 text-secondary/40 dark:text-accent/40 disabled:opacity-20 flex h-7 w-7 items-center justify-center rounded-lg border text-xs transition-opacity"
          >
            ›
          </button>
        </div>
      </div>

    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Step cards data
// ─────────────────────────────────────────────────────────────────────────────

const STEP_CARDS = [
  {
    number: 1,
    color: 'bg-ns-yellow',
    title: 'Sign up & build your Brand Profile',
    body: 'Complete a guided onboarding workshop where we capture your voice, visual style, audience, and content preferences. This becomes your creative DNA.',
    delay: 0.5,
  },
  {
    number: 2,
    color: 'bg-ns-green',
    title: 'Review & approve your content',
    body: "Your content calendar fills with studio-crafted posts, graphics, captions, hashtags. Preview exactly how they'll appear on each platform. Approve, edit, or request changes.",
    delay: 0.6,
  },
  {
    number: 3,
    color: 'bg-ns-red',
    title: 'Sit back, we publish everywhere',
    body: 'Approved content is automatically published across all your connected social platforms at optimal times. Track performance in your analytics dashboard.',
    delay: 0.7,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────

const ProcessOperation = () => (
  <section className="bg-background-1 dark:bg-background-6 py-[100px]">
    <div className="main-container space-y-[70px]">

      {/* Heading */}
      <div className="mx-auto max-w-[804px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-cyan-v2">Simple as 1-2-3</span>
        </RevealAnimation>
        <div className="space-y-3">
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[624px]">
              Getting started takes minutes, not months
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[802px]">
              Unlike agencies that take weeks to onboard you, NativPost gets your brand profile set up and your first
              content batch ready in under 48 hours. Here&apos;s how simple it is.
            </p>
          </RevealAnimation>
        </div>
      </div>

      {/* Body — visual left, steps right */}
      <div className="grid grid-cols-12 items-center gap-y-14 md:gap-y-20 lg:gap-20 xl:gap-[100px]">

        {/* Left — interactive coded visual */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <RevealAnimation delay={0.4}>
            <div>
              <OnboardingVisual />
            </div>
          </RevealAnimation>
        </div>

        {/* Right — step cards, identical shell to original */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <div className="space-y-5">
            {STEP_CARDS.map((step) => (
              <RevealAnimation delay={step.delay} key={step.number}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div className={`${step.color} text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold`}>
                    {step.number}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg font-medium leading-[27px]">
                      {step.title}
                    </h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ProcessOperation;