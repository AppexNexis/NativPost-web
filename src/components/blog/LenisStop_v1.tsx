'use client';

// ============================================================
// LENIS STOP — src/components/blog/LenisStop.tsx
//
// Stops Lenis smooth scroll on mount (restores native scroll),
// re-enables it on unmount (when navigating away).
// Include this in the blog detail page to make CSS sticky work.
// ============================================================

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

export default function LenisStop() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;
        lenis.stop();
        return () => {
            lenis.start();
        };
    }, [lenis]);

    return null;
}