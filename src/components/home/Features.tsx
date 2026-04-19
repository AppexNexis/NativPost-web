'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components: minimal inline SVGs, no emoji, no decorative dashes
// ─────────────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const VOICE_TAGS = ['Professional', 'Witty', 'Concise', 'Inspiring'];

const QUALITY_ROWS = [
  { label: 'On-brand voice', pass: true },
  { label: 'Grammar & clarity', pass: true },
  { label: 'Hashtag relevance', pass: true },
  { label: 'Generic filler text', pass: false },
  { label: 'Off-tone language', pass: false },
];

const PLATFORMS = [
  { abbr: 'IG', connected: true },
  { abbr: 'LI', connected: true },
  { abbr: 'X', connected: true },
  { abbr: 'FB', connected: false },
  { abbr: 'TK', connected: false },
];

const FEATURES_DATA = [
  { id: 1, icon: 'ns-shape-8', title: 'Deep brand-voice matching' },
  { id: 2, icon: 'ns-shape-9', title: 'Anti-slop quality filter on every post' },
  { id: 3, icon: 'ns-shape-12', title: 'Human review before anything publishes' },
  { id: 4, icon: 'ns-shape-21', title: 'Cross-platform publishing in one click' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Brand Profile Visual
// Uses only tokens from variables.css: secondary, accent, primary-500,
// background-1/2/3/8/9, stroke-1/2/4/5/7/8, ns-green, ns-green-light,
// shadow-2. No hardcoded hex values.
// ─────────────────────────────────────────────────────────────────────────────

const BrandProfileVisual = () => (
  <div className="mx-auto w-full max-w-[500px] select-none lg:mx-0">

    {/* ── Main card ─────────────────────────────────────────────────────── */}
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border shadow-2">

      {/* Header */}
      <div className="border-stroke-1 dark:border-stroke-5 flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-secondary dark:bg-background-8 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="4" stroke="#fcfcfc" strokeWidth="1.8" />
              <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
                stroke="#fcfcfc" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-secondary dark:text-accent text-tagline-2 font-medium leading-tight">
              Brand Profile
            </p>
            <p className="text-secondary/40 dark:text-accent/40 text-tagline-3">
              nativpost · Workspace
            </p>
          </div>
        </div>
        <span className="badge badge-green">Active</span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 p-5">

        {/* Brand Voice */}
        <div>
          <p className="text-secondary/40 dark:text-accent/40 mb-2.5 text-[10px] font-semibold uppercase tracking-widest">
            Brand Voice
          </p>
          <div className="flex flex-wrap gap-2">
            {VOICE_TAGS.map((tag) => (
              <span
                key={tag}
                className="border-stroke-2 bg-background-2 dark:border-stroke-7 dark:bg-background-8 text-secondary dark:text-accent rounded-full border px-3 py-1 text-[12px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-stroke-4 dark:border-stroke-8 border-t" />

        {/* Quality Filter */}
        <div>
          <p className="text-secondary/40 dark:text-accent/40 mb-3 text-[10px] font-semibold uppercase tracking-widest">
            Anti-Slop Quality Filter
          </p>
          <ul className="flex flex-col gap-2">
            {QUALITY_ROWS.map(({ label, pass }) => (
              <li key={label} className="flex items-center justify-between py-0.5">
                <span
                  className={cn(
                    'text-tagline-2',
                    pass
                      ? 'text-secondary dark:text-accent'
                      : 'text-secondary/30 dark:text-accent/30 line-through',
                  )}
                >
                  {label}
                </span>
                {pass ? (
                  <span className="text-ns-green flex items-center gap-1.5 text-[11px] font-medium">
                    <CheckIcon />
                    Pass
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-red-400 dark:text-red-500">
                    <CrossIcon />
                    Blocked
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-stroke-4 dark:border-stroke-8 border-t" />

        {/* Connected Platforms */}
        <div>
          <p className="text-secondary/40 dark:text-accent/40 mb-3 text-[10px] font-semibold uppercase tracking-widest">
            Connected Platforms
          </p>
          <div className="flex items-center gap-2">
            {PLATFORMS.map(({ abbr, connected }) => (
              <div key={abbr} className="relative">
                <div
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-xl text-[10px] font-semibold',
                    connected
                      ? 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent'
                      : 'bg-background-2 dark:bg-background-9 text-secondary/20 dark:text-accent/20',
                  )}
                >
                  {abbr}
                </div>
                {connected && (
                  <span className="border-background-1 dark:border-background-9 bg-ns-green absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2">
                    <svg width="6" height="6" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M10 3L4.75 8.25L2 5.5" stroke="#1a1a1c" strokeWidth="2.4"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
            <span className="text-secondary/40 dark:text-accent/40 ml-auto text-[11px]">
              3 connected
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-2 dark:bg-background-8 flex items-center justify-between rounded-b-2xl border-t px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            <span className="bg-ns-green relative inline-flex h-2 w-2 rounded-full" />
          </span>
          <span className="text-secondary/50 dark:text-accent/50 text-[11px]">
            Human review enabled
          </span>
        </div>
        <div className="bg-secondary dark:bg-accent text-accent dark:text-secondary cursor-default rounded-full px-4 py-1.5 text-[11px] font-medium">
          Publish
        </div>
      </div>
    </div>

    {/* ── Floating approval chip ─────────────────────────────────────────── */}
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 ml-5 mt-3 inline-flex items-center gap-3 rounded-xl border px-4 py-3 shadow-2">
      <div className="bg-primary-50 dark:bg-primary-800/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="#864ffe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <p className="text-secondary dark:text-accent text-[12px] font-medium leading-tight">
          Post approved
        </p>
        <p className="text-secondary/40 dark:text-accent/40 text-[11px]">
          Scheduled 9:00 AM · Instagram
        </p>
      </div>
    </div>

  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────

const Features = () => (
  <section className="dark:bg-background-5 bg-white py-[50px] md:py-[100px] xl:py-[200px]">
    <div className="main-container">
      <div className="mx-auto grid max-w-[720px] grid-cols-12 items-center gap-y-12 lg:mx-0 lg:max-w-full lg:gap-20 xl:gap-[100px]">

        {/* Left — product visual */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <RevealAnimation delay={0.2} direction="left" offset={80}>
            <div>
              <BrandProfileVisual />
            </div>
          </RevealAnimation>
        </div>

        {/* Right — copy */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <div className="space-y-8">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">The NativPost difference</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="max-w-[420px] xl:max-w-full">
                    Why{' '}
                    <span className="text-primary-500">growing brands </span>
                    trust NativPost
                  </h2>
                </RevealAnimation>
              </div>
            </div>

            <ul className="space-y-2">
              {FEATURES_DATA.map((feature, index) => (
                <RevealAnimation delay={0.3 + index * 0.1} key={feature.id}>
                  <li className="flex items-center gap-4 py-2 xl:py-3">
                    <span className={cn('text-secondary dark:text-accent text-[36px]', feature.icon)} />
                    <span className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      {feature.title}
                    </span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Features;