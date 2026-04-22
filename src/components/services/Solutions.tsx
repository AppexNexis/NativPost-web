'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';



// ═════════════════════════════════════════════════════════════════════════════
// 3. SOLUTIONS  (strong solutions — left copy, right stacked analytics visuals)
// ═════════════════════════════════════════════════════════════════════════════

// Three stacked / offset visuals that replace the original static images
const SolutionsDashboardVisual = () => {
  const weekData = [
    { day: 'Mon', posts: 3, reach: 2400 },
    { day: 'Tue', posts: 5, reach: 4100 },
    { day: 'Wed', posts: 2, reach: 1800 },
    { day: 'Thu', posts: 6, reach: 5300 },
    { day: 'Fri', posts: 4, reach: 3700 },
  ];

  return (
    <div className="relative mx-auto mt-40 w-full max-w-[595px] lg:mx-0 xl:mt-0 select-none">

      {/* ── Main card: Weekly performance ─────────────────────────── */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 relative z-10 w-full max-w-[340px] overflow-hidden rounded-[20px] border shadow-2 xl:ml-9 xl:max-w-[420px]">
        <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-5 py-3.5">
          <span className="text-secondary dark:text-accent text-[12px] font-medium">Weekly Performance</span>
          <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow rounded-full px-2.5 py-1 text-[10px] font-medium">↑ 34% vs last week</span>
        </div>
        <div className="p-4 space-y-2">
          {weekData.map(({ day, posts, reach }) => (
            <div key={day} className="flex items-center gap-3">
              <span className="text-secondary/40 dark:text-accent/40 w-8 shrink-0 text-[10px]">{day}</span>
              <div className="bg-background-3 dark:bg-background-8 relative h-2 flex-1 overflow-hidden rounded-full">
                <div className="bg-primary-400 dark:bg-primary-500 h-full rounded-full transition-all" style={{ width: `${(reach / 5300) * 100}%` }} />
              </div>
              <span className="text-secondary/50 dark:text-accent/50 w-10 text-right text-[10px]">{(reach / 1000).toFixed(1)}k</span>
              <span className="bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50 rounded-full px-1.5 py-0.5 text-[9px]">{posts}p</span>
            </div>
          ))}
        </div>
        <div className="border-stroke-4 dark:border-stroke-8 border-t px-5 py-3 flex items-center justify-between">
          <span className="text-secondary/30 dark:text-accent/30 text-[10px]">Total reach this week</span>
          <span className="text-secondary dark:text-accent text-[12px] font-semibold">17.3k</span>
        </div>
      </div>

      {/* ── Top-right floating card: Next scheduled post ──────────── */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 absolute -top-20 right-6 -z-10 w-full max-w-[190px] overflow-hidden rounded-2xl border shadow-2 xl:-top-28 xl:right-0 xl:max-w-[230px]">
        <div className="border-stroke-4 dark:border-stroke-8 border-b px-3 py-2.5">
          <span className="text-secondary dark:text-accent text-[10px] font-medium">Next post</span>
        </div>
        <div className="p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[8px] font-semibold">IG</div>
            <div className="min-w-0">
              <p className="text-secondary dark:text-accent text-[10px] font-medium truncate">Studio behind-the-scenes</p>
              <p className="text-secondary/40 dark:text-accent/40 text-[9px]">Tomorrow · 9:00 AM</p>
            </div>
          </div>
          <div className="bg-ns-green-light dark:bg-accent/10 flex items-center gap-1 rounded-lg px-2 py-1">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none" className="shrink-0"><path d="M10 3L4.75 8.25L2 5.5" stroke="#1a1a1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-secondary dark:text-ns-yellow text-[9px] font-medium">Approved</span>
          </div>
        </div>
      </div>

      {/* ── Top-left floating card: Approval stats ────────────────── */}
      <div className="drop-shadow-11 border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 absolute -top-44 left-0 -z-10 w-full max-w-[280px] overflow-hidden rounded-2xl border xl:-top-52 xl:max-w-[340px]">
        <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-4 py-3">
          <span className="text-secondary dark:text-accent text-[11px] font-medium">Content health</span>
          <span className="text-secondary/40 dark:text-accent/40 text-[10px]">This month</span>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {[
            { label: 'First-pass approval', value: '85%' },
            { label: 'Posts blocked', value: '12%' },
            { label: 'Hours saved', value: '10h' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-secondary dark:text-accent text-[14px] font-semibold">{value}</p>
              <p className="text-secondary/40 dark:text-accent/40 mt-0.5 text-[9px] leading-tight">{label}</p>
            </div>
          ))}
        </div>
        <div className="border-stroke-4 dark:border-stroke-8 border-t px-4 py-2.5 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            <span className="bg-ns-green relative inline-flex h-1.5 w-1.5 rounded-full" />
          </span>
          <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Human review active</span>
        </div>
      </div>

    </div>
  );
};

const solutionsData = [
  { id: 1, text: 'Deep brand-voice alignment on every post' },
  { id: 2, text: 'Human review before anything is published' },
  { id: 3, text: 'Performance data that improves future content' },
];

export const Solutions = () => (
  <section>
    <div className="bg-background-3 dark:bg-background-5 mx-5 max-w-[1400px] overflow-hidden rounded-[20px] px-5 py-24 sm:mx-auto md:px-12 xl:py-[200px]">
      <div className="grid grid-cols-12 items-end gap-y-24 lg:gap-20 xl:gap-[100px]">
        <div className="col-span-12 lg:col-span-6">
          <div className="space-y-5 sm:text-center lg:mt-[114px] lg:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2">Proven results</span>
            </RevealAnimation>
            <div className="mx-auto max-w-[595px] space-y-3 lg:mx-0">
              <RevealAnimation delay={0.2}>
                <h2>Agency-quality content. Product-level pricing. Real results.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  NativPost clients see measurable engagement improvements within the first month.
                  Every post is built on your Brand Profile, passed through quality review, and
                  published at the exact right time — worldwide.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="mt-8 mb-14">
            <ul className="flex flex-col items-start justify-start gap-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              {solutionsData.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                  <li className="flex items-center gap-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={10} viewBox="0 0 15 10" fill="none">
                        <path d="M13.1875 1.0625L5.3125 8.93715L1.375 5" className="stroke-secondary dark:stroke-accent" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-secondary dark:text-accent/60 font-medium">{item.text}</p>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <RevealAnimation delay={0.7}>
            <div className="text-center lg:text-left">
              <LinkButton href="https://app.nativpost.com/sign-in" className="btn btn-xl dark:btn-transparent hover:btn-primary btn-secondary w-[90] sm:w-auto">
                Start free trial
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <RevealAnimation delay={0.3}>
            <SolutionsDashboardVisual />
          </RevealAnimation>
        </div>
      </div>
    </div>
  </section>
);

export default Solutions;
