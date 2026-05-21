'use client';

import { useEffect, useRef, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import GradientAnimation from './GradientAnimation';

/* ─────────────────────────────────────────────
   DEMO VIDEO PLAYER
   Replace VIDEO_SRC with your actual video URL.
   Supports: mp4, webm, or HLS (.m3u8 via a lib)
───────────────────────────────────────────── */
const VIDEO_SRC = '/videos/nativpost-demo.mp4';

const DemoVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => { });
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      {/* ── Decorative browser chrome bar ── */}
      <div className="flex items-center gap-1.5 bg-[#1a1a1a] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex h-5 w-[45%] items-center justify-center rounded-md bg-[#2a2a2a] px-3">
          <span className="text-[10px] text-[#666]">app.nativpost.com</span>
        </div>
      </div>

      {/* ── Video container ── */}
      <div className="relative bg-[#0d0d0d]" style={{ aspectRatio: '16/9' }}>
        {/* Skeleton shimmer while loading */}
        {!loaded && !hasError && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#1a1a1a]">
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-3 opacity-30">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="1.5" />
                  <path d="M20 16l14 8-14 8V16z" fill="white" />
                </svg>
                <span className="text-xs text-white/40 tracking-widest uppercase">
                  Loading demo…
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Fallback placeholder */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#111] to-[#1a1a1a]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 3l14 9-14 9V3z" fill="white" fillOpacity="0.7" />
              </svg>
            </div>
            <p className="text-sm text-white/40">Product demo video</p>
          </div>
        )}

        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ display: 'block' }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          onLoadedData={() => setLoaded(true)}
          onCanPlay={() => setLoaded(true)}
          onCanPlayThrough={() => setLoaded(true)}
          onError={() => {
            setHasError(true);
            setLoaded(true);
          }}
        />

        {/* Subtle vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.18) 100%)',
          }}
        />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   HERO SECTION — stacked layout
───────────────────────────────────────────── */
const Hero = () => {
  return (
    <section className="dark:bg-background-5 relative overflow-hidden bg-white pt-[140px] pb-[90px] lg:pt-[170px] lg:pb-[120px]">

      <div className="main-container relative z-10 flex flex-col items-center gap-12">

        {/* ── TOP: centered text + CTAs ── */}
        <div className="flex flex-col items-center gap-5 text-center max-w-[860px] w-full">

          {/* Badge */}
          <RevealAnimation delay={0.1}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-[#f5f5f5] px-4 py-2 text-xs text-[#292929] shadow-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400" />
              Social media manager, built for brands
            </span>
          </RevealAnimation>

          {/* Headline */}
          <RevealAnimation delay={0.2}>
            <h1 className="text-[36px] font-bold leading-[1.08] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-[46px] lg:text-[54px] xl:text-[58px]">
              Your brand voice, everywhere,{' '}
              <span className="text-primary-500">
                managed from any Platform.
              </span>
            </h1>
          </RevealAnimation>

          {/* Description */}
          <RevealAnimation delay={0.3}>
            <p className="max-w-[600px] text-[14px] leading-[1.65] text-gray-500 dark:text-gray-400 sm:text-[15px]">
              NativPost learns how you speak, generates posts, graphics, and videos,
              and publishes them to every platform automatically, via WhatsApp, Telegram, or Discord.
            </p>
          </RevealAnimation>

          {/* CTAs */}
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center gap-3 pt-1">
              <div className="flex items-center gap-3">
                <LinkButton
                  href="https://app.nativpost.com/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#111] px-6 py-3.5 text-sm font-medium text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.12)] transition-colors hover:bg-[#222] whitespace-nowrap">
                  Sign up with Google
                </LinkButton>

                <LinkButton
                  href="https://app.nativpost.com/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#e1e2e3] bg-gradient-to-b from-[#f7f7f8] to-[#eaeaeb] px-6 py-3.5 text-sm font-medium text-[#292929] shadow-[inset_0_2px_0_white] transition-colors hover:from-[#eee] hover:to-[#e0e0e1] whitespace-nowrap">
                  Sign up with email
                  <span className="ml-1 text-gray-400">›</span>
                </LinkButton>
              </div>

              <p className="text-xs text-gray-400">
                start your 7-day free trial
              </p>
            </div>
          </RevealAnimation>
        </div>

        {/* ── BOTTOM: constrained video ── */}
        <RevealAnimation delay={0.5} offset={30}>
          <div
            className="w-full max-w-5xl mx-auto"
            style={{
              filter: 'drop-shadow(0 32px 80px rgba(0,0,0,0.13)) drop-shadow(0 4px 16px rgba(0,0,0,0.07))',
            }}>
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-[#0d0d0d]">
              <DemoVideo />
            </div>
          </div>
        </RevealAnimation>

      </div>

      {/* Background gradient */}
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute top-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default Hero;