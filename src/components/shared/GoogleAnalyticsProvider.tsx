'use client';

import { useEffect } from 'react';
import { useCookiePreferences } from '@/hooks/use-cookie-preferences';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GTagWindow = Window & { dataLayer: any[]; gtag: (...args: any[]) => void };

const MAX_DATALAYER_SIZE = 100;

function loadGoogleAnalytics(id: string) {
    if (document.getElementById('np-ga-script')) return;

    const w = window as unknown as GTagWindow;
    w.dataLayer = w.dataLayer || [];
    w.gtag = function (...args: any[]) {
        // Cap dataLayer to prevent unbounded growth on long sessions
        if (w.dataLayer.length >= MAX_DATALAYER_SIZE) {
            w.dataLayer = w.dataLayer.slice(-MAX_DATALAYER_SIZE / 2);
        }
        w.dataLayer.push(args);
    };
    w.gtag('js', new Date());
    w.gtag('config', id, {
        page_path: window.location.pathname,
        anonymize_ip: true,
    });

    const script = document.createElement('script');
    script.id = 'np-ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);
}

function unloadGoogleAnalytics(id: string) {
    // Remove script tag
    document.getElementById('np-ga-script')?.remove();

    const w = window as unknown as GTagWindow;

    // Google's official opt-out flag — stops hits being sent
    (w as any)[`ga-disable-${id}`] = true;

    // Replace gtag with a no-op so any queued calls don't accumulate
    w.gtag = function () { };

    // Clear dataLayer to free memory
    w.dataLayer = [];

    // Clear GA cookies on root domain and current path
    const hostname = window.location.hostname;
    const cookieNames = ['_ga', '_gid', '_gat', `_ga_${id.replace('G-', '')}`];
    cookieNames.forEach((name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname}`;
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