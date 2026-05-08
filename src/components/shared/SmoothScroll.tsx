'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';

function LenisScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathnameRef = useRef<string>(pathname);
  const isInitialRender = useRef(true);
  const lenis = useLenis();

  // Scroll to top on route change
  useEffect(() => {
    if (!isInitialRender.current && previousPathnameRef.current !== pathname) {
      lenis?.scrollTo(0, { immediate: true });
    }
    previousPathnameRef.current = pathname;
    isInitialRender.current = false;
  }, [pathname, searchParams, lenis]);

  // Single delegated listener for all .lenis-scroll-to anchors
  useEffect(() => {
    if (!lenis) return;

    const clickHandler = (e: Event) => {
      const target = (e.target as Element).closest('.lenis-scroll-to');
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target.getAttribute('href') ?? '', { offset: -100 });
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [lenis]);

  return null;
}

export default function SmoothScrollProvider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ReactLenis root options={{ duration: 1.1 }}>
      <LenisScrollManager />
      {children}
    </ReactLenis>
  );
}