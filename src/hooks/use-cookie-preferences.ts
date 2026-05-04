'use client';

import { useState, useEffect } from 'react';

const COOKIE_PREFERENCES_KEY = 'np_cookie_preferences';
const COOKIE_CONSENT_KEY = 'np_cookie_consent';

export type CookiePreferences = {
    essential: boolean;
    analytics: boolean;
    advertising: boolean;
    personalization: boolean;
};

const defaultPreferences: CookiePreferences = {
    essential: true,
    analytics: false,
    advertising: false,
    personalization: false,
};

export function useCookiePreferences() {
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
    const [hasConsented, setHasConsented] = useState<boolean | null>(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);

        if (consent !== null) {
            setHasConsented(consent === 'true');
        }

        if (stored) {
            try {
                setPreferences(JSON.parse(stored));
            } catch {
                // fallback to defaults
            }
        }

        setInitialized(true);
    }, []);

    const savePreferences = (prefs: CookiePreferences, consented: boolean) => {
        localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
        localStorage.setItem(COOKIE_CONSENT_KEY, String(consented));
        // Set a persistent cookie too for server-side access
        document.cookie = `np_cookie_consent=${consented}; max-age=31536000; path=/; SameSite=Lax`;
        setPreferences(prefs);
        setHasConsented(consented);
    };

    const updatePreferences = (newPrefs: Partial<CookiePreferences>) => {
        const updated = { ...preferences, ...newPrefs, essential: true };
        savePreferences(updated, true);
    };

    const acceptAll = () => {
        const all: CookiePreferences = {
            essential: true,
            analytics: true,
            advertising: true,
            personalization: true,
        };
        savePreferences(all, true);
    };

    const rejectAll = () => {
        const minimal: CookiePreferences = {
            essential: true,
            analytics: false,
            advertising: false,
            personalization: false,
        };
        savePreferences(minimal, false);
    };

    return {
        preferences,
        hasConsented,
        initialized,
        updatePreferences,
        acceptAll,
        rejectAll,
    };
}