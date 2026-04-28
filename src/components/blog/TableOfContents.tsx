'use client';

// ============================================================
// TABLE OF CONTENTS — src/components/blog/TableOfContents.tsx
//
// Simple, clean sticky sidebar — same approach as IGH.
// Works because the blog detail page uses data-lenis-prevent
// on its <main> element, restoring native scroll so CSS sticky
// works perfectly. No JS scroll tracking needed.
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import type { TocHeading } from '@/utils/richTextUtils';

interface TableOfContentsProps {
  headings: TocHeading[];
  title?: string;
}

const NAV_OFFSET = 104; // navbar height + gap

// ── Active heading (IntersectionObserver — works with native scroll) ──────────

function useActiveHeading(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] || '');

  useEffect(() => {
    if (!ids.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`, threshold: 0 },
    );

    const t = setTimeout(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => { clearTimeout(t); observer.disconnect(); };
  }, [ids]);

  return activeId;
}

// ── Share ─────────────────────────────────────────────────────────────────────

function ShareSection({ postTitle }: { postTitle?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="px-4 pb-4 pt-3 border-t border-stroke-2 dark:border-stroke-7">
      <p className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/40 dark:text-accent/40 mb-3">
        Share this article
      </p>
      <div className="flex items-center gap-2">
        {[
          {
            label: 'X',
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(postTitle || '')}`,
            icon: <path d="M17.316 2.5H14.52L10.24 8.14 6.5 2.5H1.5l6.68 9.62L1.84 20h2.8l4.6-5.32L13.5 20H18.5l-6.94-9.98L17.316 2.5zm-2.7 15.5-10-15h1.08l10 15h-1.08z" fill="currentColor" />,
          },
          {
            label: 'LinkedIn',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            icon: <path d="M16.5 2h-13A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2zM7 15.5H4.5v-8H7v8zM5.75 6.25A1.25 1.25 0 114.5 5a1.25 1.25 0 011.25 1.25zM15.5 15.5H13v-4c0-.95-.02-2.17-1.32-2.17-1.33 0-1.53 1.04-1.53 2.1v4.07H7.66v-8h2.43v1.09h.03c.34-.64 1.16-1.32 2.38-1.32 2.55 0 3.02 1.68 3.02 3.86v4.37z" fill="currentColor" />,
          },
        ].map(({ label, href, icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 text-secondary/60 dark:text-accent/60 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">{icon}</svg>
          </a>
        ))}
        <button onClick={copy} aria-label="Copy link"
          className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 text-secondary/60 dark:text-accent/60 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-200 hover:scale-110"
        >
          {copied
            ? <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            : <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" /><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
          }
        </button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function TableOfContents({ headings, title }: TableOfContentsProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveHeading(headings.map((h) => h.id));

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  if (!headings.length) return null;

  const HeadingList = ({ className = '' }: { className?: string }) => (
    <ol className={`px-4 py-3 space-y-0.5 ${className}`}>
      {headings.map((h) => {
        const active = activeId === h.id;
        return (
          <li key={h.id}>
            <button
              onClick={() => handleClick(h.id)}
              className={[
                'w-full text-left py-1.5 leading-snug transition-all duration-150 rounded-lg px-2.5',
                h.level === 3 ? 'pl-5 text-tagline-3' : 'text-tagline-2',
                active
                  ? 'text-primary-500 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20'
                  : 'text-secondary/60 dark:text-accent/50 hover:text-secondary dark:hover:text-accent hover:bg-background-3 dark:hover:bg-background-9',
              ].join(' ')}
            >
              <span className="flex items-start gap-2">
                {active && <span className="mt-[6px] shrink-0 size-1.5 rounded-full bg-primary-500 dark:bg-primary-400" />}
                <span>{h.text}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* ── DESKTOP: clean sticky card, no scrollbar ── */}
      <div className="hidden lg:block">
        <div className="rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 overflow-hidden">
          <div className="px-4 py-3.5 border-b border-stroke-2 dark:border-stroke-7">
            <span className="text-tagline-3 font-semibold uppercase tracking-widest text-secondary/55 dark:text-accent/50">
              Table of Contents
            </span>
          </div>
          {/* No max-height, no overflow-y — let the content flow naturally */}
          <HeadingList />
          <ShareSection postTitle={title} />
        </div>
      </div>

      {/* ── MOBILE: accordion ── */}
      <nav aria-label="Table of contents"
        className="lg:hidden rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 overflow-hidden"
      >
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-3.5 text-left"
          aria-expanded={mobileOpen}
        >
          <span className="text-tagline-3 font-semibold uppercase tracking-widest text-secondary/55 dark:text-accent/50">
            Table of Contents
          </span>
          <svg className={`size-4 text-secondary/40 transition-transform ${mobileOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20" fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        {mobileOpen && (
          <div className="border-t border-stroke-2 dark:border-stroke-7">
            <HeadingList />
            <ShareSection postTitle={title} />
          </div>
        )}
      </nav>
    </>
  );
}