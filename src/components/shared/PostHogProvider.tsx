'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense, ReactNode } from 'react';

function PostHogPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const ph = usePostHog();

    useEffect(() => {
        if (!pathname || !ph) return;
        let url = window.origin + pathname;
        if (searchParams?.toString()) url += `?${searchParams.toString()}`;
        ph.capture('$pageview', { $current_url: url });
    }, [pathname, searchParams, ph]);

    return null;
}

export default function PostHogProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
        const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
        if (!key) return;
        posthog.init(key, {
            api_host: host,
            defaults: '2025-05-24',
            capture_exceptions: true,
            debug: process.env.NODE_ENV === 'development',
            capture_pageview: false, // we handle this manually above
        });
    }, []);

    return (
        <PHProvider client={posthog}>
            <Suspense fallback={null}>
                <PostHogPageView />
            </Suspense>
            {children}
        </PHProvider>
    );
}