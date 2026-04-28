// ============================================================
// CONTENTFUL HOOKS — src/hooks/useContentful.ts
//
// React hooks wrapping Contentful service calls.
// These are CLIENT-SIDE hooks for interactive fetching
// (e.g. prefetch on hover). Server components should import
// from @/services/contentful directly.
// ============================================================
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ContentfulBlogPost } from '@/services/contentful';

// ── Generic fetch hook ────────────────────────────────────────────────────────

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useAsync<T>(
  asyncFn: () => Promise<T | null>,
  deps: unknown[] = [],
): UseAsyncState<T> {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    setState({ data: null, loading: true, error: null });
    asyncFn()
      .then((data) => {
        if (!cancelled) setState({ data: data as T, loading: false, error: null });
      })
      .catch((err) => {
        if (!cancelled) setState({ data: null, loading: false, error: String(err) });
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}

// ── Blog posts list hook ──────────────────────────────────────────────────────

export function useContentfulBlogPosts() {
  return useAsync<ContentfulBlogPost[]>(async () => {
    const { getBlogPosts } = await import('@/services/contentful');
    return getBlogPosts();
  }, []);
}

// ── Single post by slug hook ──────────────────────────────────────────────────

export function useContentfulBlogPost(slug: string) {
  return useAsync<ContentfulBlogPost>(async () => {
    if (!slug) return null;
    const { getBlogPostBySlug } = await import('@/services/contentful');
    return getBlogPostBySlug(slug);
  }, [slug]);
}

// ── Active section tracker (for sticky ToC) ────────────────────────────────────

export function useActiveHeading(headingIds: string[]): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headingIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headingIds]);

  return activeId;
}
