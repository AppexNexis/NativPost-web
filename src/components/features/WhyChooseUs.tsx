'use client';

import NumberAnimation from '@/components/animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

// ─────────────────────────────────────────────────────────────────────────────
// Post Approval Visual
// Represents: anti-slop filter, human review, brand voice, performance loop.
// Replaces the three overlapping static images (ring chart, bar chart, metric).
// All colours from variables.css only.
// ─────────────────────────────────────────────────────────────────────────────

const APPROVAL_POSTS = [
  {
    id: 1,
    platform: 'IG',
    title: 'Behind-the-scenes studio tour',
    status: 'approved' as const,
    score: 94,
  },
  {
    id: 2,
    platform: 'LI',
    title: 'How we think about brand voice',
    status: 'approved' as const,
    score: 91,
  },
  {
    id: 3,
    platform: 'X',
    title: 'Just dropping this here — amazing stuff',
    status: 'blocked' as const,
    score: 31,
  },
  {
    id: 4,
    platform: 'FB',
    title: 'New product drop this Friday',
    status: 'review' as const,
    score: 78,
  },
];

// Thin horizontal score bar — no colour, just density communicates quality
const ScoreBar = ({ score }: { score: number }) => (
  <div className="bg-background-3 dark:bg-background-8 h-1 w-16 overflow-hidden rounded-full">
    <div
      className={
        score >= 80
          ? 'bg-ns-green h-full rounded-full'
          : score >= 60
            ? 'bg-ns-yellow h-full rounded-full'
            : 'bg-stroke-3 dark:bg-stroke-7 h-full rounded-full'
      }
      style={{ width: `${score}%` }}
    />
  </div>
);

const CheckSmall = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossSmall = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockSmall = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PostApprovalVisual = () => (
  <div className="w-full select-none">
    <div className="mx-auto max-w-[520px] space-y-3 lg:mx-0">

      {/* ── Top stat row ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'First-pass approval', value: 85, suffix: '%' },
          { label: 'Posts blocked', value: 12, suffix: '%' },
          { label: 'Hours saved / week', value: 10, suffix: 'h' },
        ].map(({ label, value, suffix }) => (
          <div
            key={label}
            className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-4 shadow-2"
          >
            <span className="text-secondary dark:text-accent text-heading-6 inline-flex items-baseline gap-0.5 font-medium leading-tight">
              <NumberAnimation number={value} speed={1200} interval={160} rooms={2} />
              <span className="text-tagline-2">{suffix}</span>
            </span>
            <p className="text-secondary/40 dark:text-accent/40 mt-1 text-[11px] leading-tight">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Main approval queue card ───────────────────────────────────────── */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border shadow-2">

        {/* Header */}
        <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-5 py-3.5">
          <div className="flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              className="text-secondary/40 dark:text-accent/40" aria-hidden="true">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-secondary dark:text-accent text-tagline-2 font-medium">
              Anti-slop review queue
            </span>
          </div>
          <span className="text-secondary/40 dark:text-accent/40 text-[11px]">
            4 posts
          </span>
        </div>

        {/* Post rows */}
        <ul>
          {APPROVAL_POSTS.map((post, i) => {
            const isLast = i === APPROVAL_POSTS.length - 1;
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

                {/* Title + score bar */}
                <div className="min-w-0 flex-1 space-y-1.5">
                  <p
                    className={
                      post.status === 'blocked'
                        ? 'text-secondary/30 dark:text-accent/30 truncate text-[12px] line-through'
                        : 'text-secondary dark:text-accent truncate text-[12px] font-medium'
                    }
                  >
                    {post.title}
                  </p>
                  <ScoreBar score={post.score} />
                </div>

                {/* Status badge */}
                {post.status === 'approved' && (
                  <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium">
                    <CheckSmall />
                    Approved
                  </span>
                )}
                {post.status === 'blocked' && (
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-medium text-red-500 dark:bg-red-500/10 dark:text-red-400">
                    <CrossSmall />
                    Blocked
                  </span>
                )}
                {post.status === 'review' && (
                  <span className="bg-ns-yellow-light text-secondary dark:bg-accent/10 dark:text-ns-yellow flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium">
                    <ClockSmall />
                    Review
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="border-stroke-1 dark:border-stroke-5 bg-background-2 dark:bg-background-8 flex items-center gap-3 border-t px-5 py-3">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            <span className="bg-ns-green relative inline-flex h-2 w-2 rounded-full" />
          </span>
          <span className="text-secondary/50 dark:text-accent/50 text-[11px]">
            Human review active — nothing publishes without approval
          </span>
        </div>
      </div>

      {/* ── Bottom engagement chip ─────────────────────────────────────────── */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 ml-5 inline-flex items-center gap-3 rounded-xl border px-4 py-3 shadow-2">
        <div className="bg-primary-50 dark:bg-primary-800/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#864ffe" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-secondary dark:text-accent text-[12px] font-medium leading-tight">
            Engagement up 34% this week
          </p>
          <p className="text-secondary/40 dark:text-accent/40 text-[11px]">
            Performance data feeds back into future content
          </p>
        </div>
      </div>

    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────

const BULLETS = [
  'Deep brand-voice matching on every post',
  'Anti-slop filter catches robotic patterns automatically',
  'Human review layer before anything goes live',
  'Performance data feeds back to improve future content',
];

const ICON_CLASSES = ['ns-shape-8', 'ns-shape-9', 'ns-shape-12', 'ns-shape-21'];

const WhyChooseUs = () => (
  <section className="bg-background-3 dark:bg-background-7 overflow-hidden py-20 lg:py-[120px]">
    <div className="main-container flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">

      {/* Left — copy */}
      <div className="w-full lg:max-w-[480px] xl:max-w-[520px]">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-green mb-5">The anti-slop advantage</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="mb-3">
            Content that looks like
            <br className="hidden lg:block" />
            your creative team made it.
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="lg:max-w-[480px]">
            In a world drowning in generic, robotic content, NativPost is the antidote. Every piece passes through
            our anti-slop filter and human review, so your audience never sees anything that feels machine-generated.
          </p>
        </RevealAnimation>

        <ul className="mt-8 space-y-1 lg:mt-14">
          {BULLETS.map((text, i) => (
            <RevealAnimation delay={0.4 + i * 0.1} key={text}>
              <li className="flex list-none items-center gap-4 py-2">
                <span className={`ns-shape-${[8, 9, 12, 21][i]} text-secondary dark:text-accent text-[36px]`} />
                <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  {text}
                </strong>
              </li>
            </RevealAnimation>
          ))}
        </ul>
      </div>

      {/* Right — coded visual */}
      <div className="w-full lg:flex-1">
        <RevealAnimation delay={0.3} direction="up" offset={60}>
          <div>
            <PostApprovalVisual />
          </div>
        </RevealAnimation>
      </div>

    </div>
  </section>
);

export default WhyChooseUs;