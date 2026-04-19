'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// April 2026: offset = 3 (starts Wednesday). Today = Sun 19.
// ─────────────────────────────────────────────────────────────────────────────

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEK_DATES = [19, 20, 21, 22, 23, 24, 25];
const TODAY_DATE = 19; // highlighted as today
const ACTIVE_DATE = 22; // selected day (Wed)
const DOT_DATES = new Set([20, 21, 22, 23]); // days that have scheduled posts

const QUEUE_POSTS = [
  {
    id: 1,
    platform: 'IG',
    title: 'Summer collection drop',
    day: 'Mon',
    time: '9:00 AM',
    status: 'published' as const,
  },
  {
    id: 2,
    platform: 'LI',
    title: 'Why we built NativPost',
    day: 'Tue',
    time: '11:30 AM',
    status: 'scheduled' as const,
  },
  {
    id: 3,
    platform: 'X',
    title: 'The agency pricing myth',
    day: 'Wed',
    time: '2:00 PM',
    status: 'approved' as const,
  },
  {
    id: 4,
    platform: 'FB',
    title: 'Customer spotlight',
    day: 'Thu',
    time: '5:00 PM',
    status: 'pending' as const,
  },
];

// Maps each status to a badge style using only tokens from badge.css
const STATUS_CONFIG = {
  published: {
    label: 'Published',
    // ns-green-light bg, secondary text — identical to badge-green
    className: 'bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow',
    dotClass: 'bg-ns-green',
  },
  scheduled: {
    label: 'Scheduled',
    className: 'bg-primary-50 text-primary-700 dark:bg-accent/10 dark:text-primary-300',
    dotClass: 'bg-primary-500',
  },
  approved: {
    label: 'Approved',
    className: 'bg-background-3 dark:bg-accent/10 text-secondary/60 dark:text-accent/60',
    dotClass: 'bg-background-11',
  },
  pending: {
    label: 'Review',
    className: 'bg-ns-yellow-light text-secondary dark:bg-accent/10 dark:text-ns-yellow',
    dotClass: 'bg-ns-yellow',
  },
} satisfies Record<
  'published' | 'scheduled' | 'approved' | 'pending',
  { label: string; className: string; dotClass: string }
>;

const PLATFORMS_ROW = ['IG', 'LI', 'X', 'FB', 'TK'];

// ─────────────────────────────────────────────────────────────────────────────
// Cross-Platform Publishing Visual
// Two stacked cards:
//   1. Mini week-strip calendar (mirrors dashboard Calendar view)
//   2. Publishing queue (mirrors dashboard All Posts / scheduled view)
// Colors: secondary, accent, primary-500, background-1/2/3/8/9,
//         stroke-1/4/5/8, ns-green, ns-yellow, ns-green-light, ns-yellow-light
// ─────────────────────────────────────────────────────────────────────────────

const CrossPlatformVisual = () => (
  <div className="mx-auto w-full max-w-[540px] select-none space-y-3 lg:mx-0">

    {/* ── Card 1: Calendar week strip ────────────────────────────────────── */}
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border shadow-2">

      {/* Header row */}
      <div className="border-stroke-1 dark:border-stroke-5 flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            className="text-secondary/40 dark:text-accent/40 shrink-0" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="text-secondary dark:text-accent text-tagline-2 font-medium">
            April 2026
          </span>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Previous week"
            className="border-stroke-2 dark:border-stroke-7 text-secondary/40 dark:text-accent/40 hover:bg-background-2 dark:hover:bg-background-8 flex h-6 w-6 items-center justify-center rounded-md border text-xs transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next week"
            className="border-stroke-2 dark:border-stroke-7 text-secondary/40 dark:text-accent/40 hover:bg-background-2 dark:hover:bg-background-8 flex h-6 w-6 items-center justify-center rounded-md border text-xs transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      <div className="p-5">
        {/* Day name row */}
        <div className="mb-2 grid grid-cols-7 gap-1">
          {WEEK_DAYS.map((d) => (
            <div
              key={d}
              className="text-secondary/30 dark:text-accent/30 pb-1 text-center text-[10px] font-medium"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Date row */}
        <div className="grid grid-cols-7 gap-1">
          {WEEK_DATES.map((date) => {
            const isToday = date === TODAY_DATE;
            const isActive = date === ACTIVE_DATE;
            const hasDot = DOT_DATES.has(date);

            return (
              <div key={date} className="relative flex flex-col items-center">
                <div
                  className={
                    isActive
                      ? 'bg-secondary dark:bg-accent text-accent dark:text-secondary flex h-8 w-8 items-center justify-center rounded-lg text-[12px] font-medium'
                      : isToday
                        ? 'bg-primary-50 dark:bg-primary-800/20 text-primary-600 dark:text-primary-300 flex h-8 w-8 items-center justify-center rounded-lg text-[12px] font-medium'
                        : 'text-secondary dark:text-accent hover:bg-background-2 dark:hover:bg-background-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[12px] transition-colors'
                  }
                >
                  {date}
                </div>
                {hasDot && !isActive && (
                  <span className="bg-primary-500 mt-0.5 h-1 w-1 rounded-full" />
                )}
                {isActive && hasDot && (
                  /* white dot when selected */
                  <span className="bg-accent dark:bg-secondary mt-0.5 h-1 w-1 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Platform badges row */}
        <div className="border-stroke-4 dark:border-stroke-8 mt-4 flex items-center gap-2 border-t pt-4">
          <span className="text-secondary/40 dark:text-accent/40 shrink-0 text-[10px] font-semibold uppercase tracking-widest">
            Publishing to
          </span>
          <div className="flex gap-1.5">
            {PLATFORMS_ROW.map((p) => (
              <div
                key={p}
                className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-semibold"
              >
                {p}
              </div>
            ))}
          </div>
          <span className="text-secondary/40 dark:text-accent/40 ml-auto text-[11px]">
            5 platforms
          </span>
        </div>
      </div>
    </div>

    {/* ── Card 2: Publishing queue ────────────────────────────────────────── */}
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border shadow-2">

      {/* Header */}
      <div className="border-stroke-1 dark:border-stroke-5 flex items-center justify-between border-b px-5 py-3.5">
        <span className="text-secondary dark:text-accent text-tagline-2 font-medium">
          This week&apos;s queue
        </span>
        <span className="text-secondary/40 dark:text-accent/40 text-[12px]">
          {QUEUE_POSTS.length} posts
        </span>
      </div>

      {/* Queue rows */}
      <ul>
        {QUEUE_POSTS.map((post, i) => {
          const cfg = STATUS_CONFIG[post.status];
          const isLast = i === QUEUE_POSTS.length - 1;
          return (
            <li
              key={post.id}
              className={
                !isLast
                  ? 'border-stroke-4 dark:border-stroke-8 flex items-center gap-3 border-b px-5 py-3'
                  : 'flex items-center gap-3 px-5 py-3'
              }
            >
              {/* Platform pill */}
              <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold">
                {post.platform}
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-secondary dark:text-accent truncate text-[12px] font-medium">
                  {post.title}
                </p>
                <p className="text-secondary/40 dark:text-accent/40 text-[11px]">
                  {post.day} · {post.time}
                </p>
              </div>

              {/* Status badge */}
              <span
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${cfg.className}`}
              >
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${cfg.dotClass}`} />
                {cfg.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Footer: analytics teaser */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-2 dark:bg-background-8 flex items-center gap-4 border-t px-5 py-3">
        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            className="text-ns-green shrink-0" aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-secondary/50 dark:text-accent/50 text-[11px]">
            <span className="text-secondary dark:text-accent font-medium">+34%</span> engagement
          </span>
        </div>
        <div className="flex items-center gap-1.5 ml-auto">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            className="text-primary-500 shrink-0" aria-hidden="true">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="text-secondary/50 dark:text-accent/50 text-[11px]">
            <span className="text-secondary dark:text-accent font-medium">2.1k</span> impressions
          </span>
        </div>
      </div>
    </div>

  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────

const FeaturesV3 = () => (
  <section className="bg-background-1 dark:bg-background-5 pt-[60px] pb-[50px] md:pt-[120px] md:pb-[100px] xl:pt-[242px] xl:pb-[200px]">
    <div className="main-container">
      <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-20 xl:gap-[100px]">

        {/* Left — product visual */}
        <div className="col-span-12 lg:col-span-6">
          <RevealAnimation delay={0.2} direction="left" offset={80}>
            <div>
              <CrossPlatformVisual />
            </div>
          </RevealAnimation>
        </div>

        {/* Right — copy */}
        <div className="col-span-12 lg:col-span-6">
          <div className="space-y-3 text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Expand your reach</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto w-full max-w-[592px] lg:mx-0">
                Grow your brand <br />
                across every{' '}
                <span className="text-primary-500">platform</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto w-full max-w-[450px] lg:mx-0 lg:max-w-[592px]">
                NativPost publishes your studio-crafted content across Instagram, LinkedIn,
                X, Facebook, and TikTok, optimized for each platform, scheduled at the
                perfect time.
              </p>
            </RevealAnimation>
          </div>

          <div className="pt-8 pb-14">
            <ul className="flex flex-wrap items-center justify-center gap-4 lg:justify-start xl:gap-6">
              {[
                'Platform-optimized content',
                'Smart hashtag strategy',
                'Engagement analytics',
              ].map((item, i) => (
                <RevealAnimation delay={0.4 + i * 0.1} key={item}>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                      fill="none"
                      className="shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M13.1875 1.79102L5.3125 9.66567L1.375 5.72852"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="lg:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-medium">
                      {item}
                    </span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>

          <RevealAnimation delay={0.7}>
            <div className="text-center lg:text-left">
              <LinkButton
                href="/features"
                className="btn btn-secondary btn-xl hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
              >
                Explore all features
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

      </div>
    </div>
  </section>
);

export default FeaturesV3;