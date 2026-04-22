'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// ═════════════════════════════════════════════════════════════════════════════
// MINI PRODUCT VISUALS  (one per service card)
// ═════════════════════════════════════════════════════════════════════════════

/** 1. Brand Profile — voice tags + slider bars */
const BrandProfileVisual = () => (
  <div className="flex flex-col gap-2 w-full">
    <div className="flex flex-wrap gap-1.5 mb-1">
      {['Professional', 'Witty', 'Direct', 'Warm'].map((t) => (
        <span key={t} className="border-stroke-2 dark:border-stroke-7 bg-background-1 dark:bg-background-9 text-secondary dark:text-accent rounded-full border px-2 py-0.5 text-[10px]">
          {t}
        </span>
      ))}
    </div>
    {[{ l: 'Tone', v: 72 }, { l: 'Formality', v: 45 }, { l: 'Personality', v: 88 }].map(({ l, v }) => (
      <div key={l} className="flex items-center gap-2">
        <span className="text-secondary/40 dark:text-accent/40 w-16 shrink-0 text-[9px]">{l}</span>
        <div className="bg-background-3 dark:bg-background-8 relative h-1 flex-1 overflow-hidden rounded-full">
          <div className="bg-primary-500 h-full rounded-full" style={{ width: `${v}%` }} />
        </div>
        <span className="text-secondary/40 dark:text-accent/40 w-5 text-right text-[9px]">{v}</span>
      </div>
    ))}
  </div>
);

/** 2. Content Creation — platform pills + post preview chip */
const ContentEngineVisual = () => (
  <div className="flex flex-col gap-2 w-full">
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border">
      <div className="bg-background-3 dark:bg-background-8 flex items-center justify-center gap-2 py-3">
        {['IG', 'LI', 'X', 'FB'].map((p) => (
          <div key={p} className="bg-background-1 dark:bg-background-9 text-secondary/50 dark:text-accent/50 flex h-6 w-6 items-center justify-center rounded-lg text-[9px] font-semibold">
            {p}
          </div>
        ))}
      </div>
      <div className="px-3 py-2">
        <p className="text-secondary dark:text-accent text-[11px] font-medium leading-snug">New product drop — studio-crafted and on-brand.</p>
        <p className="text-secondary/40 dark:text-accent/40 mt-0.5 text-[9px]">Generated · Ready to publish</p>
      </div>
    </div>
    <div className="bg-ns-green-light dark:bg-accent/10 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0"><path d="M10 3L4.75 8.25L2 5.5" stroke="#1a1a1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <span className="text-secondary dark:text-ns-yellow text-[10px] font-medium">Passed quality filter — all 4 platforms</span>
    </div>
  </div>
);

/** 3. Anti-slop filter — pass/fail checklist */
const AntiSlopVisual = () => {
  const checks = [
    { text: 'Authentic brand voice', pass: true },
    { text: 'Original phrasing', pass: true },
    { text: '"Game-changer" cliché', pass: false },
    { text: 'Generic filler copy', pass: false },
  ];
  return (
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border w-full">
      <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-3 py-2">
        <span className="text-secondary dark:text-accent text-[10px] font-medium">Anti-slop filter</span>
        <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow rounded-full px-2 py-0.5 text-[9px] font-medium">2 / 4 pass</span>
      </div>
      {checks.map(({ text, pass }, i) => (
        <div key={text} className={`flex items-center justify-between px-3 py-1.5 ${i < checks.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}>
          <span className={pass ? 'text-secondary dark:text-accent text-[10px]' : 'text-secondary/30 dark:text-accent/30 text-[10px] line-through'}>{text}</span>
          {pass
            ? <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="text-ns-green shrink-0"><path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            : <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="shrink-0 text-red-400"><path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          }
        </div>
      ))}
    </div>
  );
};

/** 4. Approval & Scheduling — mini queue */
const ApprovalVisual = () => {
  const posts = [
    { platform: 'IG', title: 'Studio behind-the-scenes', status: 'approved' as const },
    { platform: 'LI', title: 'Future of brand content', status: 'pending' as const },
    { platform: 'X', title: 'Drop incoming Friday', status: 'scheduled' as const },
  ];
  return (
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border w-full">
      <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-3 py-2">
        <span className="text-secondary dark:text-accent text-[10px] font-medium">Approval queue</span>
        <span className="text-secondary/40 dark:text-accent/40 text-[9px]">This week</span>
      </div>
      {posts.map((p, i) => (
        <div key={p.platform + p.title} className={`flex items-center gap-2 px-3 py-1.5 ${i < posts.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}>
          <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[8px] font-semibold">{p.platform}</div>
          <span className="text-secondary dark:text-accent min-w-0 flex-1 truncate text-[10px]">{p.title}</span>
          {p.status === 'approved' && <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium">Approved</span>}
          {p.status === 'pending' && <span className="bg-ns-yellow-light text-secondary dark:bg-accent/10 dark:text-ns-yellow shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium">Review</span>}
          {p.status === 'scheduled' && <span className="bg-primary-50 text-primary-600 dark:bg-accent/10 dark:text-primary-300 shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium">Scheduled</span>}
        </div>
      ))}
    </div>
  );
};

/** 5. Performance Analytics — mini bar chart */
const AnalyticsVisual = () => {
  const bars = [
    { day: 'M', reach: 55, engage: 40 },
    { day: 'T', reach: 70, engage: 55 },
    { day: 'W', reach: 45, engage: 30 },
    { day: 'T', reach: 88, engage: 72 },
    { day: 'F', reach: 62, engage: 50 },
    { day: 'S', reach: 95, engage: 80 },
    { day: 'S', reach: 78, engage: 60 },
  ];
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="grid grid-cols-3 gap-1.5">
        {[{ label: 'Reach', value: '12.4k' }, { label: 'Engagement', value: '8.2%' }, { label: 'Posts', value: '40' }].map(({ label, value }) => (
          <div key={label} className="border-stroke-2 dark:border-stroke-7 bg-background-1 dark:bg-background-9 rounded-lg border p-1.5 text-center">
            <p className="text-secondary dark:text-accent text-[11px] font-medium">{value}</p>
            <p className="text-secondary/40 dark:text-accent/40 text-[9px]">{label}</p>
          </div>
        ))}
      </div>
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 flex items-end gap-1 rounded-xl border px-2 pb-2 pt-3">
        {bars.map(({ day, reach, engage }) => (
          <div key={day + reach} className="flex flex-1 flex-col items-center gap-0.5">
            <div className="flex w-full items-end gap-0.5" style={{ height: '36px' }}>
              <div className="bg-background-3 dark:bg-background-8 flex-1 rounded-sm" style={{ height: `${reach}%` }} />
              <div className="bg-primary-200 dark:bg-primary-700 flex-1 rounded-sm" style={{ height: `${engage}%` }} />
            </div>
            <span className="text-secondary/30 dark:text-accent/30 text-[8px]">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/** 6. Cross-platform Publishing — live status grid */
const PublishingVisual = () => {
  const platforms = [
    { name: 'Instagram', handle: '@yourbrand', status: 'live', posts: 128 },
    { name: 'LinkedIn', handle: 'YourBrand Co.', status: 'live', posts: 64 },
    { name: 'X / Twitter', handle: '@yourbrand', status: 'live', posts: 210 },
    { name: 'Facebook', handle: 'YourBrand Page', status: 'live', posts: 95 },
  ];
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {platforms.map((p) => (
        <div key={p.name} className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 flex items-center gap-2.5 rounded-xl border px-3 py-2">
          <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[8px] font-bold">
            {p.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-secondary dark:text-accent text-[10px] font-medium truncate">{p.name}</p>
            <p className="text-secondary/40 dark:text-accent/40 text-[9px] truncate">{p.handle}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
              <span className="bg-ns-green relative inline-flex h-1.5 w-1.5 rounded-full" />
            </span>
            <span className="text-secondary/40 dark:text-accent/40 text-[9px]">{p.posts} posts</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// 1. SERVICES  (hero section — six service cards)
// ═════════════════════════════════════════════════════════════════════════════

const SERVICES_DATA = [
  {
    slug: 'brand-profile',
    icon: 'ns-shape-8',
    title: 'Brand Profile Builder',
    description: 'Capture your brand voice, visual identity, and audience in a deep creative profile that drives every piece of content.',
    visual: <BrandProfileVisual />,
  },
  {
    slug: 'content-engine',
    icon: 'ns-shape-9',
    title: 'Content Creation Engine',
    description: 'Studio-quality graphics and brand-aligned captions auto-generated for every platform — never generic, always on-brand.',
    visual: <ContentEngineVisual />,
  },
  {
    slug: 'anti-slop',
    icon: 'ns-shape-12',
    title: 'Anti-Slop Quality Filter',
    description: 'Every post is scanned and scored before it reaches you. Robotic patterns, clichés, and generic phrases are automatically rejected.',
    visual: <AntiSlopVisual />,
  },
  {
    slug: 'approval-scheduling',
    icon: 'ns-shape-21',
    title: 'Approval & Scheduling',
    description: 'Preview, approve, edit, or reject posts in one dashboard. Bulk approve for speed. Schedule across all platforms at optimal times.',
    visual: <ApprovalVisual />,
  },
  {
    slug: 'analytics',
    icon: 'ns-shape-14',
    title: 'Performance Analytics',
    description: 'Track reach, engagement, and growth across every channel. See what performs best and let the system sharpen future content.',
    visual: <AnalyticsVisual />,
  },
  {
    slug: 'cross-platform',
    icon: 'ns-shape-16',
    title: 'Cross-Platform Publishing',
    description: 'One approval, everywhere live. Instagram, LinkedIn, X, Facebook — all connected and publishing automatically on your schedule.',
    visual: <PublishingVisual />,
  },
];

export const Services = () => (
  <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
    <div className="main-container">
      <div className="mb-[70px] space-y-5 text-center">
        <RevealAnimation delay={0.2}>
          <span className="badge badge-yellow-v2">Our Services</span>
        </RevealAnimation>
        <div className="space-y-3">
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[878px]">
              Everything your brand needs to own social media — without an agency.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[700px]">
              NativPost handles the full content lifecycle: brand profiling, creation, quality
              control, approval, scheduling, and analytics — all in one platform, all at
              product pricing.
            </p>
          </RevealAnimation>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES_DATA.map((service, index) => (
          <RevealAnimation key={service.slug} delay={0.5 + index * 0.1}>
            <div className="bg-background-3 dark:bg-background-7 flex flex-col rounded-[20px] px-6 py-8 transition-transform duration-500 ease-in-out hover:translate-y-[-10px] h-full">
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center">
                <span className={`${service.icon} text-secondary dark:text-accent text-[48px]`} />
              </div>

              {/* Copy */}
              <div className="mb-6 space-y-2 text-center">
                <h3 className="text-heading-5 line-clamp-1">{service.title}</h3>
                <p className="mx-auto max-w-[340px] line-clamp-3">{service.description}</p>
              </div>

              {/* Coded product mini-visual */}
              <div className="bg-background-1 dark:bg-background-9 mb-6 flex-1 overflow-hidden rounded-2xl p-3 border border-stroke-1 dark:border-stroke-5">
                {service.visual}
              </div>

              <div className="text-center">
                <LinkButton
                  href={`/services/${service.slug}`}
                  className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md"
                >
                  Read more
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
