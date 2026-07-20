/*
 * ShowcaseGrid.tsx
 *
 * "See what NativPost users are shipping": video wall sourced from
 * /public/data/showcase.json (snapshot of prod content_item). No runtime API
 * dependency; refreshed at build time via scripts/build-showcase.mjs.
 */

'use client';

import Link from 'next/link';
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

const PLATFORM_LABEL: Record<string, string> = {
  tiktok: 'TikTok',
  instagram: 'Instagram',
  youtube: 'YouTube',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  x: 'X',
  threads: 'Threads',
  pinterest: 'Pinterest',
};

const ShowcaseGrid = () => {
  const items = (showcaseData as unknown as ShowcasePayload).items ?? [];
  // Grid shows up to 8 tiles; keep the ordering as-shipped in JSON.
  const tiles = items.slice(0, 8);

  return (
    <section className="bg-background-2 dark:bg-background-8 py-[100px] lg:py-[140px]">
      <div className="main-container">

        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center lg:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Shipped this week</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Real posts, real brands, zero agency retainer.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[560px]">
              Everything below was drafted, rendered, and published through NativPost.
              Different niches, one content engine.
            </p>
          </RevealAnimation>
        </div>

        {tiles.length === 0 ? (
          <p className="text-center text-sm text-secondary dark:text-accent/70">
            Showcase snapshot is empty. Regenerate with scripts/build-showcase.mjs.
          </p>
        ) : (
          <RevealAnimation delay={0.35}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {tiles.map(item => (
                <figure key={item.id} className="group flex flex-col gap-3">
                  <PhoneFrame
                    src={item.videoUrl}
                    poster={item.posterUrl}
                    aspectRatio={item.aspectRatio === '16:9' ? '4:5' : item.aspectRatio}
                    ariaLabel={`${item.contentType} by ${item.creatorHandle} on ${PLATFORM_LABEL[item.platform] ?? item.platform}`}
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <figcaption className="flex items-center justify-between gap-2 text-[11px] text-secondary dark:text-accent/70">
                    <span className="truncate font-medium">{item.creatorHandle}</span>
                    <span className="shrink-0 rounded-full border border-stroke-3 px-2 py-0.5 text-[10px] dark:border-stroke-8">
                      {PLATFORM_LABEL[item.platform] ?? item.platform}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </RevealAnimation>
        )}

        <div className="mt-14 flex justify-center">
          <Link
            href="https://app.nativpost.com/sign-up"
            className="inline-flex items-center gap-2 rounded-xl bg-[#111] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#222] dark:bg-white dark:text-[#111] dark:hover:bg-white/90"
          >
            Ship your own this week
            <span aria-hidden>›</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseGrid;
