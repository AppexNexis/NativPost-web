'use client';

// ── Hero visual: full content generation preview ──────────────────────────────
export const ContentEngineDetailVisual = () => {
    const formats = [
        { label: 'Caption', platform: 'IG', status: 'done' as const },
        { label: 'Caption', platform: 'LI', status: 'done' as const },
        { label: 'Caption', platform: 'X', status: 'active' as const },
        { label: 'Graphic', platform: 'ALL', status: 'pending' as const },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            {/* Post preview */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border">
                {/* Platform selector row */}
                <div className="border-stroke-4 dark:border-stroke-8 flex items-center gap-2 border-b px-4 py-3">
                    {['IG', 'LI', 'X', 'FB'].map((p, i) => (
                        <button
                            key={p}
                            className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-semibold transition-colors ${i === 0
                                ? 'bg-secondary dark:bg-accent text-accent dark:text-secondary'
                                : 'bg-background-3 dark:bg-background-8 text-secondary/40 dark:text-accent/40'
                                }`}
                        >
                            {p}
                        </button>
                    ))}
                    <div className="ml-auto flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="bg-primary-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                            <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full" />
                        </span>
                        <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Generating…</span>
                    </div>
                </div>

                {/* Content preview */}
                <div className="p-4 space-y-3">
                    {/* Graphic placeholder */}
                    <div className="bg-background-3 dark:bg-background-8 relative h-32 w-full overflow-hidden rounded-xl">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="space-y-2 w-3/4">
                                <div className="bg-background-1 dark:bg-background-9 h-2.5 w-full rounded-full" />
                                <div className="bg-background-1 dark:bg-background-9 h-2.5 w-4/5 rounded-full" />
                                <div className="bg-primary-100 dark:bg-primary-900/30 h-2.5 w-2/3 rounded-full animate-pulse" />
                            </div>
                        </div>
                        <div className="absolute bottom-3 right-3">
                            <span className="bg-background-1 dark:bg-background-9 border-stroke-1 dark:border-stroke-5 text-secondary/50 dark:text-accent/50 rounded-lg border px-2 py-1 text-[9px]">
                                Brand graphic
                            </span>
                        </div>
                    </div>

                    {/* Caption */}
                    <div>
                        <p className="text-secondary/40 dark:text-accent/40 text-[9px] font-medium uppercase tracking-wide mb-1.5">Caption — Instagram</p>
                        <p className="text-secondary dark:text-accent text-[12px] leading-relaxed">
                            Behind every great product is a story worth telling. Here's ours — and why we built it for you. ✦
                        </p>
                    </div>

                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1">
                        {['#BrandStory', '#ContentMarketing', '#NativPost', '#StartupLife'].map((tag) => (
                            <span key={tag} className="text-primary-500 text-[10px]">{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-stroke-4 dark:border-stroke-8 border-t bg-background-2 dark:bg-background-8 px-4 py-2.5 flex items-center justify-between">
                    <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow text-[10px] rounded-full px-2.5 py-1 font-medium flex items-center gap-1">
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Passed quality filter
                    </span>
                    <span className="text-secondary/30 dark:text-accent/30 text-[10px]">2 variants available</span>
                </div>
            </div>

            {/* Generation progress */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border px-4 py-3">
                <p className="text-secondary/40 dark:text-accent/40 text-[9px] font-medium uppercase tracking-wide mb-2.5">Generation queue</p>
                <div className="space-y-2">
                    {formats.map(({ label, platform, status }) => (
                        <div key={label + platform} className="flex items-center gap-2.5">
                            <div className="bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[8px] font-bold">
                                {platform}
                            </div>
                            <span className="text-secondary dark:text-accent text-[11px] flex-1">{label}</span>
                            {status === 'done' && (
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-ns-green shrink-0">
                                    <circle cx="7" cy="7" r="7" fill="currentColor" fillOpacity="0.15" />
                                    <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                            {status === 'active' && (
                                <div className="h-3 w-3 shrink-0 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
                            )}
                            {status === 'pending' && (
                                <div className="h-3 w-3 shrink-0 rounded-full border border-stroke-3 dark:border-stroke-7" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ── Feature detail visual: multi-platform output comparison ──────────────────
export const ContentEngineWorkflowVisual = () => {
    const variants = [
        {
            platform: 'Instagram',
            short: 'IG',
            caption: 'Studio life. The story behind the drop. 🎯',
            tags: ['#BehindTheScenes', '#StudioLife'],
            length: 'Short · Visual-first',
        },
        {
            platform: 'LinkedIn',
            short: 'LI',
            caption: 'What most brands miss about storytelling: it\'s not about the product, it\'s about the problem you solved.',
            tags: ['#Marketing', '#BrandStrategy'],
            length: 'Medium · Insight-led',
        },
        {
            platform: 'X / Twitter',
            short: 'X',
            caption: 'Your brand has a story. Most brands bury it. Don\'t.',
            tags: [],
            length: 'Short · Punchy',
        },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-2.5">
                    <p className="text-secondary dark:text-accent text-[11px] font-semibold">Same post — adapted per platform</p>
                </div>
                {variants.map((v, i) => (
                    <div key={v.platform} className={`px-4 py-3.5 ${i < variants.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[9px] font-semibold">
                                {v.short}
                            </div>
                            <span className="text-secondary dark:text-accent text-[11px] font-medium">{v.platform}</span>
                            <span className="ml-auto text-secondary/30 dark:text-accent/30 text-[9px]">{v.length}</span>
                        </div>
                        <p className="text-secondary/70 dark:text-accent/70 text-[11px] leading-relaxed mb-1.5">{v.caption}</p>
                        {v.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                                {v.tags.map((tag) => (
                                    <span key={tag} className="text-primary-500 text-[9px]">{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Quality badge */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 w-full">
                <div className="bg-ns-green-light dark:bg-ns-green/10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                    <p className="text-secondary dark:text-accent text-[11px] font-medium leading-tight">All 3 variants passed anti-slop filter</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px]">Ready for your approval queue</p>
                </div>
            </div>
        </div>
    );
};

// ── Benefits visual: time savings + quality stats ─────────────────────────────
export const ContentEngineBenefitsVisual = () => {
    const weekPosts = [
        { day: 'Mon', done: true, count: 3 },
        { day: 'Tue', done: true, count: 5 },
        { day: 'Wed', done: true, count: 2 },
        { day: 'Thu', done: true, count: 4 },
        { day: 'Fri', done: false, count: 3 },
        { day: 'Sat', done: false, count: 2 },
        { day: 'Sun', done: false, count: 1 },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    { label: 'Posts this week', value: '20' },
                    { label: 'Platforms covered', value: '4' },
                    { label: 'Hours saved', value: '12h' },
                ].map(({ label, value }) => (
                    <div key={label} className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-3 text-center">
                        <p className="text-secondary dark:text-accent text-[18px] font-semibold">{value}</p>
                        <p className="text-secondary/40 dark:text-accent/40 text-[9px] mt-0.5">{label}</p>
                    </div>
                ))}
            </div>

            {/* Week content calendar */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-2.5">
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">This week's content batch</p>
                </div>
                <div className="grid grid-cols-7 divide-x divide-stroke-4 dark:divide-stroke-8">
                    {weekPosts.map(({ day, done, count }) => (
                        <div key={day} className="flex flex-col items-center py-3 gap-1.5">
                            <span className="text-secondary/40 dark:text-accent/40 text-[9px]">{day}</span>
                            <div className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-semibold ${done ? 'bg-ns-green-light dark:bg-ns-green/10 text-ns-green' : 'bg-background-3 dark:bg-background-8 text-secondary/30 dark:text-accent/30'}`}>
                                {count}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};