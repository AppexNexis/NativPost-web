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

const AVAILABLE = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 29, 30];
const DOT_DAYS = [5, 12, 18];
const SELECTED = 18;

const CalendarGrid = () => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const offset = 3; // April 2026 starts on Wednesday
  const cells: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: 30 }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="flex-1 p-5 sm:p-7 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-gray-900">April</span>
          <span className="text-base font-medium text-gray-400">2026</span>
        </div>
        <div className="flex gap-1">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm transition-colors">‹</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm transition-colors">›</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => (
          <div
            key={d}
            className={`text-center text-[11px] font-medium pb-2 ${d === 'SUN' || d === 'SAT' ? 'text-gray-300' : 'text-gray-500'
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
              className={`aspect-square flex items-center justify-center rounded-md text-sm font-medium relative
                ${selected
                  ? 'bg-gray-700 text-white'
                  : avail
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer transition-colors'
                    : 'text-gray-300'
                }`}>
              {day}
              {dot && (
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${selected ? 'bg-white' : 'bg-gray-500'
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
    const t = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 2800);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="dark:bg-background-5 relative bg-white pt-[160px] pb-[100px] lg:pt-[210px] lg:pb-[180px]">
      <div className="main-container relative z-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-14">

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-6 text-center lg:text-left">

            <RevealAnimation delay={0.1}>
              <span className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-black/10 bg-[#f5f5f5] text-[#292929] shadow-sm w-fit mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                Studio-crafted content, zero effort
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-[38px] sm:text-5xl lg:text-[44px] xl:text-[52px] 2xl:text-[58px] font-extrabold leading-[1.1] tracking-tight text-gray-950 dark:text-white">
                Your brand deserves content that looks human-made.{' '}
                <span className="text-primary-500">Because it is.</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400 max-w-[480px] mx-auto lg:mx-0">
                NativPost creates studio-quality graphics, copy, and scheduling,
                automatically published to all your social channels. Agency
                quality at product pricing.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <div className="flex flex-col gap-2.5 w-full max-w-[360px]">
                  <LinkButton
                    href="https://app.nativpost.com/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#111] hover:bg-[#222] text-white rounded-xl py-3.5 px-5 text-sm font-medium w-full transition-colors shadow-[inset_0_2px_0_rgba(255,255,255,0.12)]">
                    Sign up with Google
                  </LinkButton>
                  <LinkButton
                    href="https://app.nativpost.com/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#f7f7f8] to-[#eaeaeb] hover:from-[#eee] hover:to-[#e0e0e1] text-[#292929] border border-[#e1e2e3] rounded-xl py-3.5 px-5 text-sm font-medium w-full transition-colors shadow-[inset_0_2px_0_white]">
                    Sign up with email <span className="text-gray-400 ml-1">›</span>
                  </LinkButton>
                </div>
                <p className="text-xs text-gray-400">start your 7-day free trial</p>
              </div>
            </RevealAnimation>
          </div>

          {/* ── RIGHT — cal.com split card ── */}
          <RevealAnimation delay={0.5} offset={60}>
            <div className="w-full lg:w-[580px] xl:w-[640px] 2xl:w-[680px] shrink-0 border border-gray-200 rounded-xl bg-white overflow-hidden flex flex-col sm:flex-row sm:h-[420px] shadow-sm">

              {/* Left panel — rotating */}
              <div className="sm:w-[230px] xl:w-[250px] shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 relative overflow-hidden min-h-[240px] sm:min-h-0">
                {SLIDES.map((s, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 p-5 sm:p-6 flex flex-col gap-3 bg-white transition-opacity duration-500"
                    style={{ opacity: i === current ? 1 : 0 }}>

                    {/* Avatar + name */}
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0"
                        style={{ background: s.color }}>
                        {s.initials}
                      </div>
                      <span className="text-sm text-gray-500">{s.name}</span>
                    </div>

                    {/* Title */}
                    <p className="text-[16px] font-semibold text-gray-900 leading-snug">{s.title}</p>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>

                    {/* Platform pills */}
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                        {['IG', 'FB', 'X'].map((p) => (
                          <span
                            key={p}
                            className={`text-xs font-medium px-2 py-1 rounded-md transition-colors ${p === s.platform || s.platform === 'All'
                              ? 'bg-white shadow-sm text-gray-900'
                              : 'text-gray-400'
                              }`}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Niche */}
                    <p className="text-sm text-gray-400">{s.niche}</p>
                  </div>
                ))}
              </div>

              {/* Right panel — content calendar */}
              <CalendarGrid />
            </div>
          </RevealAnimation>

        </div>
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