'use client';

// ============================================================
// STICKY TABLE OF CONTENTS
// Uses position:fixed tracked to a ref column anchor.
// Works regardless of Lenis, smooth scroll, or any scroll lib.
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import type { TocHeading } from '@/utils/richTextUtils';

interface Props {
  headings: TocHeading[];
  title?: string;
}

const TOP_OFFSET = 104; // below floating navbar

// ── Active heading ────────────────────────────────────────────────────────────

function useActiveHeading(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] || '');

  useEffect(() => {
    if (!ids.length) return;
    const update = () => {
      let found = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= TOP_OFFSET + 40) found = id;
      }
      setActiveId(found);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [ids]);

  return activeId;
}

// ── Share buttons ─────────────────────────────────────────────────────────────

function ShareSection({ title }: { title?: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const copy = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className="px-4 pb-4 pt-3 border-t border-stroke-2 dark:border-stroke-7">
      <p className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/40 dark:text-accent/40 mb-3">
        Share this article
      </p>
      <div className="flex items-center gap-2">
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`}
          target="_blank" rel="noopener noreferrer" aria-label="Share on X"
          className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 text-secondary/60 dark:text-accent/60 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.316 2.5H14.52L10.24 8.14 6.5 2.5H1.5l6.68 9.62L1.84 20h2.8l4.6-5.32L13.5 20H18.5l-6.94-9.98L17.316 2.5zm-2.7 15.5-10-15h1.08l10 15h-1.08z" />
          </svg>
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
          className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 text-secondary/60 dark:text-accent/60 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.5 2h-13A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2zM7 15.5H4.5v-8H7v8zM5.75 6.25A1.25 1.25 0 114.5 5a1.25 1.25 0 011.25 1.25zM15.5 15.5H13v-4c0-.95-.02-2.17-1.32-2.17-1.33 0-1.53 1.04-1.53 2.1v4.07H7.66v-8h2.43v1.09h.03c.34-.64 1.16-1.32 2.38-1.32 2.55 0 3.02 1.68 3.02 3.86v4.37z" />
          </svg>
        </a>
        <button onClick={copy} aria-label="Copy link"
          className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 text-secondary/60 dark:text-accent/60 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-200"
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

export default function StickyTableOfContents({ headings, title }: Props) {
  // The anchor div sits in the sidebar column in normal document flow.
  // We read its position to know where to place the fixed panel.
  const anchorRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveHeading(headings.map((h) => h.id));

  // ── Fixed panel positioning ───────────────────────────────────────────────
  useEffect(() => {
    const anchor = anchorRef.current;
    const panel = panelRef.current;
    if (!anchor || !panel) return;

    const reposition = () => {
      const anchorRect = anchor.getBoundingClientRect();
      const panelH = panel.offsetHeight;

      // The bottom boundary of the sidebar column in viewport coords
      // We use the anchor's parent (the aside) bottom edge
      const aside = anchor.closest('aside');
      const asideBottom = aside
        ? aside.getBoundingClientRect().bottom
        : window.innerHeight;

      // Desired top: always TOP_OFFSET from viewport top
      let top = TOP_OFFSET;

      // If panel would overflow past the aside's bottom, slide it up
      if (top + panelH > asideBottom) {
        top = Math.max(0, asideBottom - panelH);
      }

      setPanelStyle({
        position: 'fixed',
        top: `${top}px`,
        left: `${anchorRect.left}px`,
        width: `${anchorRect.width}px`,
        zIndex: 30,
      });
    };

    // Run immediately and on every scroll/resize
    reposition();

    // Use both native scroll and a RAF loop to catch Lenis-driven scroll
    let rafId: number;
    const rafLoop = () => {
      reposition();
      rafId = requestAnimationFrame(rafLoop);
    };
    rafId = requestAnimationFrame(rafLoop);

    window.addEventListener('resize', reposition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', reposition);
    };
  }, [headings]);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Works with both Lenis and native scroll
    const y = el.getBoundingClientRect().top + window.scrollY - TOP_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  if (!headings.length) return null;

  const TocList = () => (
    <ol className="px-4 py-3 space-y-0.5">
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
      {/* ── DESKTOP ── */}
      <div className="hidden lg:block relative">
        {/* Anchor: sits in document flow, gives us position reference */}
        <div ref={anchorRef} style={{ height: 0, visibility: 'hidden' }} aria-hidden />

        {/* Panel: position fixed, tracked by RAF loop */}
        <div
          ref={panelRef}
          style={panelStyle}
          className="rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 overflow-hidden shadow-2"
        >
          <div className="px-4 py-3.5 border-b border-stroke-2 dark:border-stroke-7">
            <span className="text-tagline-3 font-semibold uppercase tracking-widest text-secondary/55 dark:text-accent/50">
              Table of Contents
            </span>
          </div>
          <TocList />
          <ShareSection title={title} />
        </div>
      </div>

      {/* ── MOBILE: inline accordion ── */}
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
            <TocList />
            <ShareSection title={title} />
          </div>
        )}
      </nav>
    </>
  );
}