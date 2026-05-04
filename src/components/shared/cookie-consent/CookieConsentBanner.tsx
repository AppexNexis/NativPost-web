'use client';

import { useEffect, useState } from 'react';
import { useCookiePreferences } from '@/hooks/use-cookie-preferences';
import CookiePreferencesDrawer from './CookiePreferencesDrawer';

export default function CookieConsentBanner() {
    const { hasConsented, initialized, acceptAll, rejectAll } = useCookiePreferences();
    const [showBanner, setShowBanner] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!initialized) return;
        if (hasConsented === null) {
            // Small delay so banner slides in after page load
            const timer = setTimeout(() => {
                setShowBanner(true);
                requestAnimationFrame(() => setIsVisible(true));
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [initialized, hasConsented]);

    const handleAccept = () => {
        acceptAll();
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 400);
    };

    const handleReject = () => {
        rejectAll();
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 400);
    };

    const handleOpenDrawer = () => {
        setShowDrawer(true);
    };

    const handleDrawerSave = () => {
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 400);
        setShowDrawer(false);
    };

    if (!showBanner && !showDrawer) return null;

    return (
        <>
            {/* Banner */}
            {showBanner && (
                <div
                    className={`
            fixed bottom-5 left-5 z-[9999] w-[min(360px,calc(100vw-40px))]
            transition-all duration-400 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
          `}
                    role="dialog"
                    aria-label="Cookie consent"
                    aria-live="polite"
                >
                    {/* Card */}
                    <div className="
            relative overflow-hidden rounded-[20px]
            bg-white dark:bg-background-6
            border border-stroke-2 dark:border-stroke-7
            shadow-3
          ">
                        {/* Top accent line */}
                        <div className="h-[3px] w-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />

                        <div className="p-5">
                            {/* Header */}
                            <div className="mb-3 flex items-start gap-3">
                                <div className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-xl bg-primary-100 dark:bg-primary-500/15
                ">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary-500">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-tagline-1 font-semibold text-secondary dark:text-accent">
                                        We use cookies
                                    </p>
                                    <p className="text-tagline-3 text-secondary/55 dark:text-accent/55 mt-0.5 leading-relaxed">
                                        To improve your experience on NativPost. No data is sold.
                                    </p>
                                </div>
                            </div>

                            {/* Manage link */}
                            <button
                                onClick={handleOpenDrawer}
                                className="
                  mb-4 text-tagline-3 font-medium text-primary-500
                  underline underline-offset-2 hover:text-primary-600
                  transition-colors duration-200
                "
                            >
                                Manage preferences →
                            </button>

                            {/* Actions */}
                            <div className="flex gap-2.5">
                                <button
                                    onClick={handleReject}
                                    className="btn btn-md btn-white dark:btn-transparent flex-1"
                                >
                                    <span>Reject all</span>
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="btn btn-md btn-primary flex-1"
                                >
                                    <span>Accept all</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Preferences Drawer */}
            <CookiePreferencesDrawer
                open={showDrawer}
                onOpenChange={setShowDrawer}
                onSave={handleDrawerSave}
            />
        </>
    );
}