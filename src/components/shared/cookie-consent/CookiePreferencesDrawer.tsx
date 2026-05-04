'use client';

import { useState, useEffect } from 'react';
import { useCookiePreferences, type CookiePreferences } from '@/hooks/use-cookie-preferences';
import { cookieCategories } from '@/lib/cookie-categories';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: () => void;
}

export default function CookiePreferencesDrawer({ open, onOpenChange, onSave }: Props) {
    const { preferences, updatePreferences, acceptAll, rejectAll } = useCookiePreferences();
    const [local, setLocal] = useState<CookiePreferences>(preferences);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setLocal(preferences);
    }, [preferences]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            const t = setTimeout(() => {
                document.body.style.overflow = '';
            }, 350);
            return () => clearTimeout(t);
        }
    }, [open]);

    const handleToggle = (id: string, checked: boolean) => {
        if (id === 'essential') return;
        setLocal(prev => ({ ...prev, [id]: checked }));
    };

    const handleSave = () => {
        updatePreferences(local);
        onSave?.();
        onOpenChange(false);
    };

    const handleAcceptAll = () => {
        acceptAll();
        onSave?.();
        onOpenChange(false);
    };

    const handleRejectAll = () => {
        rejectAll();
        onSave?.();
        onOpenChange(false);
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onOpenChange(false), 350);
    };

    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`
          fixed inset-0 z-[9998] bg-secondary/40 dark:bg-black/60 backdrop-blur-sm
          transition-opacity duration-350
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div
                className={`
          fixed inset-y-0 right-0 z-[9999] flex w-full flex-col
          max-w-[480px] overflow-hidden
          bg-white dark:bg-background-6
          border-l border-stroke-2 dark:border-stroke-7
          shadow-[−40px_0_80px_rgba(0,0,0,0.12)]
          transition-transform duration-350 ease-out
          ${isVisible ? 'translate-x-0' : 'translate-x-full'}
        `}
                role="dialog"
                aria-modal="true"
                aria-label="Cookie preferences"
            >
                {/* Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-stroke-2 dark:border-stroke-7 px-6 py-5">
                    <div>
                        <h2 className="text-heading-6 font-medium text-secondary dark:text-accent">
                            Cookie Preferences
                        </h2>
                        <p className="text-tagline-3 text-secondary/50 dark:text-accent/50 mt-0.5">
                            Control what data we collect
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-stroke-2 dark:border-stroke-7
              text-secondary/40 dark:text-accent/40
              hover:text-secondary dark:hover:text-accent
              hover:border-stroke-3 dark:hover:border-stroke-6
              transition-all duration-200
            "
                        aria-label="Close preferences"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto px-6 py-5">
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 mb-5 leading-relaxed">
                        Choose which cookies NativPost can use. Essential cookies are always active as they keep the site working.{' '}
                        <a href="/privacy" className="text-primary-500 hover:text-primary-600 underline underline-offset-2 transition-colors">
                            Privacy Policy →
                        </a>
                    </p>

                    <div className="space-y-3">
                        {cookieCategories.map((category) => {
                            const isExpanded = expandedId === category.id;
                            const isEnabled = category.required
                                ? true
                                : local[category.id as keyof CookiePreferences];

                            return (
                                <div
                                    key={category.id}
                                    className="
                    rounded-2xl border border-stroke-2 dark:border-stroke-7
                    bg-background-1 dark:bg-background-7
                    overflow-hidden transition-all duration-200
                    hover:border-stroke-3 dark:hover:border-stroke-6
                  "
                                >
                                    {/* Category header */}
                                    <div className="flex items-start gap-3 p-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-tagline-2 font-semibold text-secondary dark:text-accent">
                                                    {category.title}
                                                </span>
                                                {category.required && (
                                                    <span className="badge badge-primary text-[10px] py-0.5 px-2">
                                                        Required
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-tagline-3 text-secondary/55 dark:text-accent/55 leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Toggle */}
                                        <button
                                            role="switch"
                                            aria-checked={isEnabled}
                                            aria-label={`${isEnabled ? 'Disable' : 'Enable'} ${category.title}`}
                                            disabled={category.required}
                                            onClick={() => !category.required && handleToggle(category.id, !isEnabled)}
                                            className={`
                        relative shrink-0 h-6 w-10 rounded-full
                        transition-colors duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                        ${isEnabled
                                                    ? 'bg-primary-500'
                                                    : 'bg-stroke-3 dark:bg-stroke-7'
                                                }
                        ${category.required ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                      `}
                                        >
                                            <span className={`
                        absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm
                        transition-transform duration-200
                        ${isEnabled ? 'translate-x-4' : 'translate-x-0'}
                      `} />
                                        </button>
                                    </div>

                                    {/* Cookie details toggle */}
                                    <div className="border-t border-stroke-2 dark:border-stroke-7">
                                        <button
                                            onClick={() => setExpandedId(isExpanded ? null : category.id)}
                                            className="
                        flex w-full items-center gap-1.5 px-4 py-2.5
                        text-tagline-3 font-medium text-primary-500
                        hover:text-primary-600 transition-colors duration-200
                      "
                                        >
                                            <svg
                                                width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                            {isExpanded ? 'Hide' : 'View'} cookie details
                                        </button>

                                        {/* Expanded cookies table */}
                                        {isExpanded && (
                                            <div className="px-4 pb-4">
                                                <div className="rounded-xl overflow-hidden border border-stroke-2 dark:border-stroke-7">
                                                    <table className="w-full text-left">
                                                        <thead>
                                                            <tr className="border-b border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-8">
                                                                <th className="px-3 py-2 text-tagline-3 font-semibold text-secondary/60 dark:text-accent/60">Name</th>
                                                                <th className="px-3 py-2 text-tagline-3 font-semibold text-secondary/60 dark:text-accent/60">Purpose</th>
                                                                <th className="px-3 py-2 text-tagline-3 font-semibold text-secondary/60 dark:text-accent/60 text-right">Duration</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {category.cookies.map((cookie, i) => (
                                                                <tr
                                                                    key={cookie.name}
                                                                    className={`${i < category.cookies.length - 1 ? 'border-b border-stroke-2 dark:border-stroke-7' : ''}`}
                                                                >
                                                                    <td className="px-3 py-2.5">
                                                                        <code className="text-[11px] font-mono bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 px-1.5 py-0.5 rounded">
                                                                            {cookie.name}
                                                                        </code>
                                                                    </td>
                                                                    <td className="px-3 py-2.5 text-tagline-3 text-secondary/60 dark:text-accent/60">
                                                                        {cookie.purpose}
                                                                    </td>
                                                                    <td className="px-3 py-2.5 text-tagline-3 text-secondary/50 dark:text-accent/50 text-right whitespace-nowrap">
                                                                        {cookie.duration}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer actions */}
                <div className="shrink-0 border-t border-stroke-2 dark:border-stroke-7 px-6 py-4">
                    <div className="flex gap-2 mb-2.5">
                        <button
                            onClick={handleRejectAll}
                            className="btn btn-md btn-white dark:btn-transparent flex-1 text-center"
                        >
                            <span>Reject all</span>
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="btn btn-md btn-secondary dark:btn-transparent flex-1 text-center"
                        >
                            <span>Accept all</span>
                        </button>
                    </div>
                    <button
                        onClick={handleSave}
                        className="btn btn-md btn-primary w-full text-center"
                    >
                        <span>Save my preferences</span>
                    </button>
                </div>
            </div>
        </>
    );
}