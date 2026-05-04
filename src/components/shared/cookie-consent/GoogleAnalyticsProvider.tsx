'use client';

import { useEffect } from 'react';
import { useCookiePreferences } from '@/hooks/use-cookie-preferences';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GTagWindow = Window & { dataLayer: any[]; gtag: (...args: any[]) => void };

function loadGoogleAnalytics(id: string) {
    if (document.getElementById('np-ga-script')) return;

    const script = document.createElement('script');
    script.id = 'np-ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
        const w = window as unknown as GTagWindow;
        w.dataLayer = w.dataLayer || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        w.gtag = function (...args: any[]) { w.dataLayer.push(args); };
        w.gtag('js', new Date());
        w.gtag('config', id, { page_path: window.location.pathname, anonymize_ip: true });
    };
}

function unloadGoogleAnalytics(id: string) {
    const script = document.getElementById('np-ga-script');
    if (script) script.remove();

    // Google's official opt-out mechanism
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[`ga-disable-${id}`] = true;

    // Clear GA cookies
    ['_ga', '_gid', '_gat', `_ga_${id.replace('G-', '')}`].forEach(name => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });
}

export default function GoogleAnalyticsProvider() {
    const { preferences, hasConsented, initialized } = useCookiePreferences();

    useEffect(() => {
        if (!initialized || !GA_ID) return;

        if (preferences.analytics) {
            loadGoogleAnalytics(GA_ID);
        } else if (hasConsented !== null) {
            unloadGoogleAnalytics(GA_ID);
        }
    }, [initialized, preferences.analytics, hasConsented]);

    return null;
}