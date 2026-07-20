/*
 * HowItWorks.tsx
 *
 * Scroll-driven "How it works" section for the landing page. Sticky visual on
 * the left, four scrolling text blocks on the right, purple progress line down
 * the middle that fills as the user scrolls through the section.
 *
 * Pattern references Fastlane's landing (sticky-left, scroll-right) but the
 * four visuals are NativPost's own flow: Import Brand, Discover & Create,
 * Review & Publish, Track Growth.
 *
 * All visuals are pure JSX + SVG; no image assets.
 */

'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useRef, useState } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/* Visual 01: Import Your Brand                                        */
/* ------------------------------------------------------------------ */

const Visual01 = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    {/* Ambient blur */}
    <div aria-hidden className="absolute inset-6 rounded-3xl bg-gradient-to-br from-primary-200 via-fuchsia-100 to-pink-100 blur-2xl opacity-70 dark:opacity-30" />

    <div className="relative z-10 w-[86%] max-w-[440px] rounded-2xl border border-white/70 bg-white/95 p-5 shadow-[0_20px_60px_-20px_rgba(134,79,254,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-background-9/90">
      {/* URL input */}
      <div className="mb-4 flex items-center gap-2 rounded-full border border-stroke-3 bg-background-2 px-3 py-2 dark:border-stroke-8 dark:bg-background-8">
        <svg className="size-4 text-secondary/50 dark:text-accent/50" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M6.5 9.5a3 3 0 004.24 0l2.12-2.12a3 3 0 10-4.24-4.24L7.5 4.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M9.5 6.5a3 3 0 00-4.24 0L3.14 8.62a3 3 0 004.24 4.24L8.5 11.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span className="flex-1 truncate text-xs text-secondary/60 dark:text-accent/60">yourbrand.com</span>
        <button type="button" className="grid size-7 place-items-center rounded-full bg-primary-500 text-white" aria-hidden>
          <svg className="size-3.5" viewBox="0 0 12 12" fill="none"><path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      {/* Platform chips */}
      <div className="grid grid-cols-4 gap-1.5">
        {['Website', 'IG', 'TikTok', 'LinkedIn', 'YouTube', 'X', 'Threads', 'FB'].map(label => (
          <div
            key={label}
            className="flex items-center justify-center rounded-lg border border-stroke-3 bg-background-1 px-2 py-1.5 text-[10px] font-medium text-secondary dark:border-stroke-8 dark:bg-background-8 dark:text-accent"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Result card */}
      <div className="mt-4 rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-3 dark:border-primary-500/30 dark:from-primary-500/10 dark:to-transparent">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="grid size-5 place-items-center rounded-md bg-primary-500 text-white">
            <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M6 1l1.4 3.6L11 6l-3.6 1.4L6 11l-1.4-3.6L1 6l3.6-1.4z" fill="currentColor" /></svg>
          </span>
          <span className="text-[11px] font-semibold text-secondary dark:text-accent">Brand Profile ready</span>
        </div>
        <p className="text-[10.5px] leading-snug text-secondary/70 dark:text-accent/70">
          Voice, audience, and visual identity extracted in under sixty seconds.
        </p>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Visual 02: Discover and Create                                      */
/* ------------------------------------------------------------------ */

const CONTENT_TILES: { label: string; tint: string }[] = [
  { label: 'Trending', tint: 'from-primary-100 to-primary-200' },
  { label: 'Graphic', tint: 'from-pink-100 to-rose-200' },
  { label: 'Video', tint: 'from-sky-100 to-indigo-200' },
  { label: 'UGC', tint: 'from-orange-100 to-amber-200' },
  { label: 'Talking Head', tint: 'from-emerald-100 to-teal-200' },
  { label: 'Carousel', tint: 'from-fuchsia-100 to-purple-200' },
];

const Visual02 = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div aria-hidden className="absolute inset-6 rounded-3xl bg-gradient-to-br from-emerald-100 via-lime-100 to-teal-100 blur-2xl opacity-70 dark:opacity-30" />

    <div className="relative z-10 w-[92%] max-w-[520px] rounded-2xl border border-white/70 bg-white/95 p-5 shadow-[0_20px_60px_-20px_rgba(59,130,246,0.25)] backdrop-blur-md dark:border-white/10 dark:bg-background-9/90">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50">AI Studio</span>
        <span className="rounded-full bg-primary-500/10 px-2 py-0.5 text-[10px] font-semibold text-primary-600 dark:text-primary-400">10 models</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {CONTENT_TILES.map((tile) => (
          <div
            key={tile.label}
            className={`aspect-[3/4] overflow-hidden rounded-xl border border-white/70 bg-gradient-to-br ${tile.tint} p-2 dark:border-white/10`}
          >
            <div className="flex h-full flex-col justify-between">
              <span className="grid size-5 place-items-center rounded-md bg-white/80 text-[10px] font-bold text-secondary dark:bg-black/30 dark:text-accent">
                <svg className="size-2.5" viewBox="0 0 10 10" fill="none" aria-hidden><path d="M5 1l1.2 3L9 4.5 6.5 6l.5 3L5 7.5 3 9l.5-3L1 4.5 3.8 4z" fill="currentColor" /></svg>
              </span>
              <span className="text-[10px] font-semibold text-secondary dark:text-secondary">{tile.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Visual 03: Review and Publish                                       */
/* ------------------------------------------------------------------ */

const Visual03 = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div aria-hidden className="absolute inset-6 rounded-3xl bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 blur-2xl opacity-70 dark:opacity-30" />

    <div className="relative z-10 grid w-[92%] max-w-[560px] grid-cols-5 gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_20px_60px_-20px_rgba(251,146,60,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-background-9/90">
      {/* Calendar */}
      <div className="col-span-3 rounded-xl border border-stroke-3 bg-background-1 p-2.5 dark:border-stroke-8 dark:bg-background-8">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-secondary dark:text-accent">April 2026</span>
          <span className="text-[9px] text-secondary/50 dark:text-accent/50">Week 3</span>
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-[8px] text-secondary/50 dark:text-accent/50">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={`h-${i}`} className="text-center">{d}</span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-0.5">
          {Array.from({ length: 28 }).map((_, i) => {
            const scheduled = [1, 4, 6, 9, 12, 15, 18, 22, 25].includes(i);
            const today = i === 14;
            return (
              <div
                key={`d-${i}`}
                className={`grid aspect-square place-items-center rounded text-[8px] font-medium ${
                  today
                    ? 'bg-primary-500 text-white'
                    : scheduled
                      ? 'bg-primary-500/15 text-primary-600 dark:text-primary-400'
                      : 'text-secondary/50 dark:text-accent/40'
                }`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>

      {/* Post queue */}
      <div className="col-span-2 flex flex-col gap-1.5">
        {[
          { title: 'Product launch', platforms: ['IG', 'LI', 'TT'], color: 'bg-primary-500/10 text-primary-600' },
          { title: 'Behind the scenes', platforms: ['IG', 'YT'], color: 'bg-emerald-500/10 text-emerald-600' },
          { title: 'Customer story', platforms: ['LI', 'IG'], color: 'bg-amber-500/10 text-amber-600' },
        ].map((p, i) => (
          <div key={i} className="rounded-lg border border-stroke-3 bg-background-1 p-2 dark:border-stroke-8 dark:bg-background-8">
            <p className="mb-1 truncate text-[10px] font-semibold text-secondary dark:text-accent">{p.title}</p>
            <div className="flex gap-1">
              {p.platforms.map(pl => (
                <span key={pl} className={`rounded px-1 py-0.5 text-[7.5px] font-bold ${p.color} dark:opacity-90`}>
                  {pl}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Visual 04: Track Growth                                             */
/* ------------------------------------------------------------------ */

const Visual04 = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div aria-hidden className="absolute inset-6 rounded-3xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 blur-2xl opacity-70 dark:opacity-30" />

    <div className="relative z-10 w-[90%] max-w-[500px] space-y-3 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-[0_20px_60px_-20px_rgba(14,165,233,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-background-9/90">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-secondary dark:text-accent">Content performance</span>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
          Last 30 days
        </span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-secondary dark:text-accent">+152%</span>
        <span className="text-[11px] text-secondary/50 dark:text-accent/50">vs previous 30 days</span>
      </div>

      {/* Simple SVG line chart */}
      <div className="relative h-24 w-full">
        <svg viewBox="0 0 300 80" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="hiw-chart-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary-500)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--color-primary-500)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 L30 65 L60 60 L90 55 L120 52 L150 42 L180 40 L210 28 L240 22 L270 12 L300 6 L300 80 L0 80 Z"
            fill="url(#hiw-chart-fill)"
          />
          <path
            d="M0 70 L30 65 L60 60 L90 55 L120 52 L150 42 L180 40 L210 28 L240 22 L270 12 L300 6"
            stroke="var(--color-primary-500)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* AI recommendation strip */}
      <div className="flex items-start gap-2 rounded-xl border border-primary-200 bg-primary-50 p-3 dark:border-primary-500/30 dark:bg-primary-500/10">
        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-primary-500 text-white">
          <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M6 1l1.4 3.6L11 6l-3.6 1.4L6 11l-1.4-3.6L1 6l3.6-1.4z" fill="currentColor" /></svg>
        </span>
        <div>
          <p className="text-[10.5px] font-semibold text-secondary dark:text-accent">AI recommendation</p>
          <p className="text-[10px] leading-snug text-secondary/70 dark:text-accent/70">
            Talking-head videos are up 3x this week. Doubling that format next cycle.
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Steps data + main section                                           */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    number: '01',
    title: 'Import your brand',
    body: 'Drop your website or a social handle. NativPost extracts your voice, audience, and visual identity into a Brand Profile in under a minute.',
    visual: <Visual01 />,
  },
  {
    number: '02',
    title: 'Discover and create',
    body: 'Ten AI models generate graphics, videos, UGC, talking-head clips, and carousels tailored to your brand and trending in your niche.',
    visual: <Visual02 />,
  },
  {
    number: '03',
    title: 'Review and publish',
    body: 'Swipe through the daily queue in Blitz mode. Approve, edit, or schedule across ten platforms from one workspace. Human review on Pro and up.',
    visual: <Visual03 />,
  },
  {
    number: '04',
    title: 'Track and iterate',
    body: 'Cross-platform analytics stream back into the AI Studio. NativPost learns what actually works for your audience and doubles down on it.',
    visual: <Visual04 />,
  },
];

const HowItWorks = () => {
  const scopeRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const scope = scopeRef.current;
      const rail = railRef.current;
      if (!scope || !rail) {
        return;
      }

      // Progress rail fills as user scrolls through the section
      gsap.fromTo(
        rail,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: scope,
            start: 'top 30%',
            end: 'bottom 70%',
            scrub: true,
          },
        },
      );

      // Advance active step as each right-column block crosses viewport center
      const blocks = scope.querySelectorAll<HTMLElement>('[data-hiw-step]');
      const triggers: ScrollTrigger[] = [];
      blocks.forEach((block) => {
        const idx = Number(block.dataset.hiwStep);
        const t = ScrollTrigger.create({
          trigger: block,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setActive(idx),
          onEnterBack: () => setActive(idx),
        });
        triggers.push(t);
      });

      return () => {
        triggers.forEach(t => t.kill());
      };
    },
    { scope: scopeRef },
  );

  return (
    <section
      ref={scopeRef}
      className="relative bg-background-1 py-[120px] dark:bg-background-6 lg:py-[160px]"
    >
      <div className="main-container">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center lg:mb-24">
          <span className="badge badge-cyan">How it works</span>
          <h2 className="text-heading-3 lg:text-heading-2">
            From brand to published in{' '}
            <span className="text-primary-500">four steps.</span>
          </h2>
          <p className="mx-auto max-w-[560px]">
            One workspace, one Brand Profile, ten platforms. Here is what happens between
            signing up and posts going live.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT: sticky visual (desktop only) */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-stroke-3 bg-background-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] dark:border-stroke-8 dark:bg-background-8">
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    aria-hidden={active !== i}
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      active === i ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
                  >
                    {step.visual}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER progress rail (desktop only) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-stroke-3 dark:bg-stroke-8 lg:block"
          >
            <div
              ref={railRef}
              className="h-full w-full origin-top bg-primary-500"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* RIGHT: scrolling steps */}
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-14 lg:gap-0">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  data-hiw-step={i}
                  className="flex min-h-[70vh] flex-col items-start justify-center gap-6 lg:gap-4 lg:pl-10"
                >
                  {/* Mobile visual */}
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-stroke-3 bg-background-2 dark:border-stroke-8 dark:bg-background-8 lg:hidden">
                    {step.visual}
                  </div>

                  <div className="max-w-[440px] space-y-3">
                    <p className="text-[11px] font-mono font-semibold tracking-widest text-secondary/50 dark:text-accent/50">
                      {step.number}
                    </p>
                    <h3 className="text-heading-4 font-semibold lg:text-heading-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <Link
            href="https://app.nativpost.com/sign-up"
            className="inline-flex items-center gap-2 rounded-xl bg-[#111] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#222] dark:bg-white dark:text-[#111] dark:hover:bg-white/90"
          >
            Get started for free
            <span aria-hidden>›</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
