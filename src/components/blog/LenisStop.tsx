'use client';

// ============================================================
// LENIS STOP — src/components/blog/LenisStop.tsx
//
// Disables Lenis smooth-wheel interpolation on the blog detail
// page so CSS position:sticky works correctly.
//
// How it works:
//   lenis.options.smoothWheel is read on every wheel event.
//   Setting it false makes Lenis pass wheel events through to
//   native scroll without intercepting them — sticky works,
//   page still scrolls normally. Restored on navigate away.
// ============================================================

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

export default function LenisStop() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        // Save originals
        const origSmoothWheel = lenis.options.smoothWheel;
        const origDuration = lenis.options.duration;
        const origLerp = lenis.options.lerp;

        // Disable smooth interpolation — scroll passes through natively
        // Page scrolls fine; Lenis no longer intercepts wheel events
        lenis.options.smoothWheel = false;
        lenis.options.duration = 0;
        lenis.options.lerp = 1;

        return () => {
            // Restore when leaving blog detail page
            lenis.options.smoothWheel = origSmoothWheel;
            lenis.options.duration = origDuration;
            lenis.options.lerp = origLerp;
        };
    }, [lenis]);

    return null;
}