/*
 * GrowthFeatures.tsx
 *
 * "10x Your Growth, Fast" section. Big headline + "Used by:" pill cluster,
 * then three feature cards: Blitz Mode, Trending Content Library, AI Influencer.
 *
 * Visuals are pure JSX + SVG so they render without image assets. The Blitz
 * card autoplays a showcase clip inside a PhoneFrame with swipe overlays.
 */

'use client';

import RevealAnimation from '../animation/RevealAnimation';
import PhoneFrame from '../shared/phone/PhoneFrame';
import showcaseData from '@public/data/showcase.json';

type ShowcaseItem = {
  id: string;
  videoUrl: string;
  posterUrl: string | null;
  aspectRatio: '9:16' | '16:9' | '1:1' | '4:5';
  contentType: string;
  platform: string;
  creatorHandle: string;
  caption: string;
  viewCount: number | null;
  publishedAt: string | null;
};

type ShowcasePayload = { items: ShowcaseItem[] };

/* ------------------------------------------------------------------ */
/* Trending Content Library visual                                     */
/* ------------------------------------------------------------------ */

const TRENDING_TILES: { gradient: string; niche: string; views: string }[] = [
  { gradient: 'from-rose-200 to-pink-300', niche: 'Fitness', views: '1.2M' },
  { gradient: 'from-amber-200 to-orange-300', niche: 'Finance', views: '840K' },
  { gradient: 'from-emerald-200 to-teal-300', niche: 'SaaS', views: '620K' },
  { gradient: 'from-sky-200 to-indigo-300', niche: 'Beauty', views: '2.1M' },
  { gradient: 'from-violet-200 to-purple-300', niche: 'Career', views: '450K' },
  { gradient: 'from-fuchsia-200 to-pink-300', niche: 'Travel', views: '1.6M' },
  { gradient: 'from-lime-200 to-green-300', niche: 'Food', views: '980K' },
  { gradient: 'from-cyan-200 to-blue-300', niche: 'Tech', views: '710K' },
];

const TrendingVisual = () => (
  <div className="relative overflow-hidden rounded-xl bg-background-2 p-3 dark:bg-background-9">
    <div className="mb-2 flex items-center justify-between px-1">
      <span className="text-[10px] font-semibold text-secondary/70 dark:text-accent/70">Trending Content</span>
      <span className="text-[9px] text-secondary/50 dark:text-accent/50">Page 1 of 12</span>
    </div>
    <div className="grid grid-cols-4 gap-1.5">
      {TRENDING_TILES.map((tile, i) => (
        <div
          key={i}
          className={`relative aspect-[9/16] overflow-hidden rounded-md bg-gradient-to-br ${tile.gradient}`}
        >
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute left-1 top-1 rounded-sm bg-black/50 px-1 py-0.5 text-[7px] font-semibold text-white backdrop-blur-sm">
            {tile.niche}
          </div>
          <div className="absolute bottom-1 left-1 flex items-center gap-0.5 text-[7px] font-semibold text-white">
            <svg viewBox="0 0 8 6" className="size-1.5" fill="none" aria-hidden>
              <path d="M4 1C2 1 1 3 1 3s1 2 3 2 3-2 3-2-1-2-3-2z" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="4" cy="3" r="0.8" fill="currentColor" />
            </svg>
            {tile.views}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* AI Influencer visual                                                */
/* ------------------------------------------------------------------ */

const AVATAR_TILES: { name: string; initial: string; gradient: string; accent: string }[] = [
  { name: 'Aria', initial: 'A', gradient: 'from-rose-300 via-pink-300 to-orange-200', accent: 'bg-rose-500' },
  { name: 'Kai', initial: 'K', gradient: 'from-amber-200 via-orange-300 to-yellow-300', accent: 'bg-orange-500' },
  { name: 'Mia', initial: 'M', gradient: 'from-emerald-200 via-teal-300 to-cyan-300', accent: 'bg-emerald-500' },
  { name: 'Zoe', initial: 'Z', gradient: 'from-fuchsia-300 via-purple-300 to-violet-300', accent: 'bg-fuchsia-500' },
  { name: 'Theo', initial: 'T', gradient: 'from-sky-200 via-blue-300 to-indigo-300', accent: 'bg-sky-500' },
  { name: 'Lena', initial: 'L', gradient: 'from-lime-200 via-green-300 to-emerald-300', accent: 'bg-lime-500' },
  { name: 'Noah', initial: 'N', gradient: 'from-stone-200 via-neutral-300 to-slate-300', accent: 'bg-slate-500' },
  { name: 'Ivy', initial: 'I', gradient: 'from-yellow-200 via-amber-300 to-orange-300', accent: 'bg-amber-500' },
  { name: 'Ren', initial: 'R', gradient: 'from-cyan-200 via-sky-300 to-blue-300', accent: 'bg-cyan-500' },
];

const InfluencerVisual = () => (
  <div className="relative overflow-hidden rounded-xl bg-background-2 p-3 dark:bg-background-9">
    <div className="mb-2 flex items-center justify-between px-1">
      <span className="text-[10px] font-semibold text-secondary/70 dark:text-accent/70">AI Influencer Library</span>
      <span className="rounded-full bg-primary-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-primary-600 dark:text-primary-400">
        Voice + LoRA
      </span>
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      {AVATAR_TILES.map((av, i) => (
        <div
          key={i}
          className={`relative aspect-square overflow-hidden rounded-md bg-gradient-to-br ${av.gradient}`}
        >
          {/* Stylized head silhouette */}
          <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx="20" cy="16" r="6" fill="rgba(255,255,255,0.45)" />
            <path d="M8 34c2-6 7-8 12-8s10 2 12 8" fill="rgba(255,255,255,0.45)" />
          </svg>
          {/* Dim + text */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0.5 left-1 text-[8px] font-semibold text-white/95">
            {av.name}
          </div>
          <div className={`absolute right-1 top-1 grid size-3 place-items-center rounded-full ${av.accent} ring-1 ring-white/60`}>
            <span className="sr-only">{av.initial}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Blitz Mode visual                                                   */
/* ------------------------------------------------------------------ */

const BlitzVisual = ({ clip }: { clip: ShowcaseItem | null }) => (
  <div className="relative overflow-hidden rounded-xl bg-background-2 p-6 dark:bg-background-9">
    <div className="relative mx-auto w-[62%]">
      {clip ? (
        <PhoneFrame
          src={clip.videoUrl}
          poster={clip.posterUrl}
          aspectRatio="9:16"
          ariaLabel="Blitz mode swipe preview"
        />
      ) : (
        <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-500/20 dark:to-primary-500/40" />
      )}

      {/* Skip circle */}
      <div className="absolute left-[-18%] top-1/2 -translate-y-1/2">
        <div className="grid size-12 place-items-center rounded-full bg-white shadow-[0_8px_24px_-6px_rgba(239,68,68,0.4)] ring-1 ring-red-100 dark:bg-background-9 dark:ring-red-500/30">
          <svg viewBox="0 0 20 20" className="size-5 text-red-500" fill="none" aria-hidden>
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      {/* Approve circle */}
      <div className="absolute right-[-18%] top-1/2 -translate-y-1/2">
        <div className="grid size-12 place-items-center rounded-full bg-white shadow-[0_8px_24px_-6px_rgba(16,185,129,0.4)] ring-1 ring-emerald-100 dark:bg-background-9 dark:ring-emerald-500/30">
          <svg viewBox="0 0 20 20" className="size-5 text-emerald-500" fill="none" aria-hidden>
            <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */

const AUDIENCE_TAGS = ['Creators', 'SaaS Founders', 'E-Commerce', 'Agencies'];

const GrowthFeatures = () => {
  const items = (showcaseData as unknown as ShowcasePayload).items ?? [];
  const blitzClip = items[0] ?? null;

  return (
    <section className="bg-background-2 py-[100px] dark:bg-background-6 lg:py-[140px]">
      <div className="main-container">

        {/* Header row */}
        <div className="mb-14 grid grid-cols-1 items-start gap-8 lg:mb-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <RevealAnimation delay={0.1}>
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary/60 dark:text-accent/60">
                Features
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.15}>
              <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-gray-950 dark:text-white sm:text-[52px] lg:text-[64px]">
                10x Your Growth,{' '}
                <span className="text-primary-500">Fast.</span>
              </h2>
            </RevealAnimation>
          </div>

          <div className="lg:col-span-4 lg:pt-3">
            <RevealAnimation delay={0.2}>
              <div>
                <p className="mb-3 text-xs text-secondary/60 dark:text-accent/60 lg:text-right">
                  Used by:
                </p>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {AUDIENCE_TAGS.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full border border-stroke-3 bg-background-1 px-3 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.15em] text-secondary dark:border-stroke-8 dark:bg-background-8 dark:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* 3-column feature cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <RevealAnimation delay={0.25}>
            <article className="h-full rounded-2xl border border-stroke-3 bg-background-1 p-5 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.18)] dark:border-stroke-8 dark:bg-background-8 dark:shadow-none">
              <BlitzVisual clip={blitzClip} />
              <div className="mt-5 space-y-2">
                <h3 className="text-[20px] font-semibold tracking-tight text-gray-950 dark:text-white">
                  Blitz Mode
                </h3>
                <p className="text-[14px] leading-[1.5] text-secondary/70 dark:text-accent/70">
                  Swipe left to skip, right to publish. Approve a week of posts in ninety seconds.
                </p>
              </div>
            </article>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <article className="h-full rounded-2xl border border-stroke-3 bg-background-1 p-5 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.18)] dark:border-stroke-8 dark:bg-background-8 dark:shadow-none">
              <TrendingVisual />
              <div className="mt-5 space-y-2">
                <h3 className="text-[20px] font-semibold tracking-tight text-gray-950 dark:text-white">
                  Trending Content Library
                </h3>
                <p className="text-[14px] leading-[1.5] text-secondary/70 dark:text-accent/70">
                  A live feed of what is actually working on TikTok and Instagram, indexed by niche and remixed to your brand.
                </p>
              </div>
            </article>
          </RevealAnimation>

          <RevealAnimation delay={0.35}>
            <article className="h-full rounded-2xl border border-stroke-3 bg-background-1 p-5 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.18)] dark:border-stroke-8 dark:bg-background-8 dark:shadow-none">
              <InfluencerVisual />
              <div className="mt-5 space-y-2">
                <h3 className="text-[20px] font-semibold tracking-tight text-gray-950 dark:text-white">
                  AI Influencer Avatars
                </h3>
                <p className="text-[14px] leading-[1.5] text-secondary/70 dark:text-accent/70">
                  Cast an AI avatar or clone your own voice. Ship talking-head video without ever hitting record.
                </p>
              </div>
            </article>
          </RevealAnimation>
        </div>

      </div>
    </section>
  );
};

export default GrowthFeatures;
