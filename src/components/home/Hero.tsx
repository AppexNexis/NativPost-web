'use client';

import { useEffect, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import GradientAnimation from './GradientAnimation';

const SLIDES = [
  {
    name: 'Sarah Kim',
    initials: 'S',
    color: '#a78bfa',
    title: 'Instagram Content Drop',
    desc: 'On-brand carousel posts for your fashion label, ready to publish.',
    platform: 'IG',
    niche: 'Fashion · Lifestyle',
  },
  {
    name: 'Marcus Lee',
    initials: 'M',
    color: '#34d399',
    title: 'LinkedIn Thought Leadership',
    desc: 'Weekly articles and posts that position you as an industry expert.',
    platform: 'LI',
    niche: 'SaaS · B2B',
  },
  {
    name: 'Amara Osei',
    initials: 'A',
    color: '#f97316',
    title: 'Product Launch Campaign',
    desc: 'Announce your new product across every platform simultaneously.',
    platform: 'All',
    niche: 'E-commerce · DTC',
  },
  {
    name: 'Jake Torres',
    initials: 'J',
    color: '#60a5fa',
    title: 'Weekly Newsletter Graphics',
    desc: 'Branded visuals that make your newsletter impossible to ignore.',
    platform: 'EM',
    niche: 'Media · Creator',
  },
  {
    name: 'Priya Nair',
    initials: 'P',
    color: '#f43f5e',
    title: 'Restaurant Social Pack',
    desc: 'Mouth-watering food posts and reels that fill tables every week.',
    platform: 'IG',
    niche: 'F&B · Hospitality',
  },
];

const AVAILABLE = [
  1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26,
  29, 30,
];

const DOT_DAYS = [5, 12, 18];
const SELECTED = 18;

const CalendarGrid = () => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const offset = 3;

  const cells: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: 30 }, (_, i) => i + 1),
  ];

  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="flex-1 bg-white p-5 sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-gray-900">
            April
          </span>

          <span className="text-base font-medium text-gray-400">
            2026
          </span>
        </div>

        <div className="flex gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-600 transition-colors hover:bg-gray-100">
            ‹
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-600 transition-colors hover:bg-gray-100">
            ›
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((d) => (
          <div
            key={d}
            className={`pb-2 text-center text-[11px] font-medium ${d === 'SUN' || d === 'SAT'
              ? 'text-gray-300'
              : 'text-gray-500'
              }`}>
            {d}
          </div>
        ))}

        {cells.map((day, i) => {
          if (!day) return <div key={i} />;

          const avail = AVAILABLE.includes(day);
          const selected = day === SELECTED;
          const dot = DOT_DAYS.includes(day);

          return (
            <div
              key={i}
              className={`relative aspect-square flex items-center justify-center rounded-md text-sm font-medium transition-colors
              ${selected
                  ? 'bg-gray-700 text-white'
                  : avail
                    ? 'cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200'
                    : 'text-gray-300'
                }`}>
              {day}

              {dot && (
                <span
                  className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${selected ? 'bg-white' : 'bg-gray-500'
                    }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      2800
    );

    return () => clearInterval(t);
  }, []);

  return (
    <section className="dark:bg-background-5 relative overflow-hidden bg-white pt-[140px] pb-[90px] lg:pt-[170px] lg:pb-[120px]">

      {/* Main */}
      <div className="main-container relative z-10">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* ───────────────── LEFT ───────────────── */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 text-center lg:text-left max-w-[620px]">

            {/* Badge */}
            <RevealAnimation delay={0.1}>
              <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-[#f5f5f5] px-4 py-2 text-xs text-[#292929] shadow-sm lg:mx-0">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400" />
                Social media manager, built for real brands
              </span>
            </RevealAnimation>

            {/* Headline */}
            <RevealAnimation delay={0.2}>
              <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-[50px] lg:text-[56px] xl:text-[62px]">
                Your brand voice, everywhere,{' '}
                <span className="text-primary-500">
                  managed from WhatsApp.
                </span>
              </h1>
            </RevealAnimation>

            {/* Description */}
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[480px] text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400 sm:text-base lg:mx-0">
                NativPost learns how you speak, generates posts, graphics, and
                videos, and publishes them to every platform automatically.
                Manage it all from WhatsApp, Telegram, or Discord.
              </p>
            </RevealAnimation>

            {/* CTA */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center gap-3 pt-1 lg:items-start">

                <div className="flex w-full max-w-[360px] flex-col gap-2.5">

                  <LinkButton
                    href="https://app.nativpost.com/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#111] px-5 py-3.5 text-sm font-medium text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.12)] transition-colors hover:bg-[#222]">
                    Sign up with Google
                  </LinkButton>

                  <LinkButton
                    href="https://app.nativpost.com/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#e1e2e3] bg-gradient-to-b from-[#f7f7f8] to-[#eaeaeb] px-5 py-3.5 text-sm font-medium text-[#292929] shadow-[inset_0_2px_0_white] transition-colors hover:from-[#eee] hover:to-[#e0e0e1]">
                    Sign up with email

                    <span className="ml-1 text-gray-400">
                      ›
                    </span>
                  </LinkButton>
                </div>

                <p className="text-xs text-gray-400">
                  start your 7-day free trial
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* ───────────────── RIGHT ───────────────── */}
          <RevealAnimation delay={0.5} offset={30}>
            <div className="w-full shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:w-[500px] xl:w-[550px] 2xl:w-[590px]">

              <div className="flex flex-col sm:h-[400px] sm:flex-row">

                {/* Left Card */}
                <div className="relative min-h-[240px] shrink-0 overflow-hidden border-b border-gray-200 sm:min-h-0 sm:w-[210px] sm:border-b-0 sm:border-r xl:w-[225px]">

                  {SLIDES.map((s, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 flex flex-col gap-3 bg-white p-5 transition-opacity duration-500 sm:p-6"
                      style={{
                        opacity: i === current ? 1 : 0,
                      }}>

                      {/* User */}
                      <div className="flex items-center gap-2.5">

                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                          style={{
                            background: s.color,
                          }}>
                          {s.initials}
                        </div>

                        <span className="text-sm text-gray-500">
                          {s.name}
                        </span>
                      </div>

                      {/* Title */}
                      <p className="text-[16px] font-semibold leading-snug text-gray-900">
                        {s.title}
                      </p>

                      {/* Desc */}
                      <p className="flex-1 text-[13px] leading-relaxed text-gray-500">
                        {s.desc}
                      </p>

                      {/* Platforms */}
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1 rounded-lg bg-gray-100 p-1">

                          {['IG', 'FB', 'X'].map((p) => (
                            <span
                              key={p}
                              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${p === s.platform ||
                                s.platform === 'All'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-400'
                                }`}>
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Niche */}
                      <p className="text-sm text-gray-400">
                        {s.niche}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Calendar */}
                <CalendarGrid />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>

      {/* Background */}
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute top-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default Hero;