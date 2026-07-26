/*
 * Hero.tsx
 *
 * Landing hero. Fan-stack of 3 tilted phones playing showcase videos on the
 * right, headline + CTAs on the left. Sourced from /public/data/showcase.json
 * which is snapshotted from prod content_item via scripts/build-showcase.mjs.
 *
 * Copy is anchored to what NativPost actually ships. No WhatsApp/Telegram
 * management claims yet.
 */

'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import PhoneFrame from '../shared/phone/PhoneFrame';
import GradientAnimation from './GradientAnimation';
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

type ShowcasePayload = {
  items: ShowcaseItem[];
};

// Pick three items for the fan-stack. Prefer 9:16 clips, fall back to whatever
// showcase has if there are fewer than three.
function pickFanClips(all: ShowcaseItem[]): [ShowcaseItem, ShowcaseItem, ShowcaseItem] | null {
  if (all.length === 0) {
    return null;
  }
  const vertical = all.filter(i => i.aspectRatio === '9:16');
  const pool = vertical.length >= 3 ? vertical : all;
  const a = pool[0]!;
  const b = pool[1 % pool.length]!;
  const c = pool[2 % pool.length]!;
  return [a, b, c];
}

const Hero = () => {
  const items = (showcaseData as unknown as ShowcasePayload).items ?? [];
  const clips = useMemo(() => pickFanClips(items), [items]);

  return (
    <section className="dark:bg-background-5 relative overflow-hidden bg-white pt-[130px] pb-[90px] lg:pt-[160px] lg:pb-[120px]">
      <div className="main-container relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">

        {/* Left: headline + CTAs */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start gap-5 text-left">
          <RevealAnimation delay={0.1}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-[#f5f5f5] px-4 py-2 text-xs text-[#292929] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Fill a month of content in one click
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-[36px] font-bold leading-[1.05] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-[46px] lg:text-[56px] xl:text-[64px]">
              A month of on-brand content,{' '}
              <span className="text-primary-500">shipped in one afternoon.</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="max-w-[560px] text-[15px] leading-[1.65] text-gray-600 dark:text-gray-400 sm:text-[16px]">
              Turn your brand into scroll-stopping video, carousels, and images,
              then publish everywhere your audience lives. One workspace,
              zero agency fees.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-start gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://app.nativpost.com/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#111] px-6 py-3.5 text-sm font-medium text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.12)] transition-colors hover:bg-[#222] whitespace-nowrap"
                >
                  Start 7-day free trial
                </Link>

                <Link
                  href="/process"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#e1e2e3] bg-gradient-to-b from-[#f7f7f8] to-[#eaeaeb] px-6 py-3.5 text-sm font-medium text-[#292929] shadow-[inset_0_2px_0_white] transition-colors hover:from-[#eee] hover:to-[#e0e0e1] whitespace-nowrap dark:border-white/10 dark:from-white/5 dark:to-white/10 dark:text-white/90"
                >
                  See how it works
                  <span aria-hidden className="ml-1 text-gray-400">›</span>
                </Link>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                No credit card. Cancel any time. 24/7 support.
              </p>
            </div>
          </RevealAnimation>
        </div>

        {/* Right: fan-stack of 3 tilted phones */}
        <div className="lg:col-span-6 xl:col-span-5">
          <RevealAnimation delay={0.5} offset={30}>
            <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[560px]">
              {clips ? (
                <>
                  <div className="absolute left-[6%] top-[8%] w-[40%]">
                    <PhoneFrame
                      src={clips[0].videoUrl}
                      poster={clips[0].posterUrl}
                      aspectRatio="9:16"
                      rotate={-9}
                      ariaLabel={`Showcase clip by ${clips[0].creatorHandle}`}
                    />
                  </div>
                  <div className="absolute left-1/2 top-0 w-[44%] -translate-x-1/2">
                    <PhoneFrame
                      src={clips[1].videoUrl}
                      poster={clips[1].posterUrl}
                      aspectRatio="9:16"
                      rotate={2}
                      ariaLabel={`Showcase clip by ${clips[1].creatorHandle}`}
                    />
                  </div>
                  <div className="absolute right-[4%] top-[10%] w-[40%]">
                    <PhoneFrame
                      src={clips[2].videoUrl}
                      poster={clips[2].posterUrl}
                      aspectRatio="9:16"
                      rotate={11}
                      ariaLabel={`Showcase clip by ${clips[2].creatorHandle}`}
                    />
                  </div>
                </>
              ) : (
                <div className="grid h-full place-items-center rounded-2xl border border-dashed border-black/10 text-sm text-gray-400 dark:border-white/10">
                  Showcase clips loading soon
                </div>
              )}
            </div>
          </RevealAnimation>
        </div>
      </div>

      {/* Background gradient */}
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2 opacity-90">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
