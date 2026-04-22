'use client';

// ── Hero visual: connected platforms dashboard ────────────────────────────────
export const CrossPlatformDetailVisual = () => {
    const platforms = [
        { name: 'Instagram', short: 'IG', handle: '@yourbrand', posts: 128, connected: true, status: 'Publishing' },
        { name: 'LinkedIn', short: 'LI', handle: 'YourBrand Co.', posts: 64, connected: true, status: 'Live' },
        { name: 'X / Twitter', short: 'X', handle: '@yourbrand', posts: 210, connected: true, status: 'Live' },
        { name: 'Facebook', short: 'FA', handle: 'YourBrand Page', posts: 95, connected: true, status: 'Live' },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            {/* Connection status */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border">
                <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-4 py-3">
                    <span className="text-secondary dark:text-accent text-[12px] font-semibold">Connected channels</span>
                    <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow text-[10px] rounded-full px-2.5 py-1 font-medium">
                        4 / 4 active
                    </span>
                </div>

                {platforms.map((p, i) => (
                    <div
                        key={p.name}
                        className={`flex items-center gap-3 px-4 py-3 ${i < platforms.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
                    >
                        <div className="bg-secondary dark:bg-accent text-accent dark:text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold">
                            {p.short}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-secondary dark:text-accent text-[11px] font-medium">{p.name}</p>
                            <p className="text-secondary/40 dark:text-accent/40 text-[9px]">{p.handle} · {p.posts} posts</p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                                <span className="bg-ns-green relative inline-flex h-1.5 w-1.5 rounded-full" />
                            </span>
                            <span className="text-secondary/40 dark:text-accent/40 text-[9px]">{p.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Publishing chip */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 flex items-center gap-3 rounded-xl border px-4 py-3">
                <div className="bg-primary-50 dark:bg-primary-800/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" stroke="#864ffe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">Posting to all 4 channels simultaneously</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px]">One approval triggers all platforms</p>
                </div>
            </div>
        </div>
    );
};

// ── Feature detail visual: format adaptation per platform ─────────────────────
export const CrossPlatformWorkflowVisual = () => {
    const specs = [
        { platform: 'Instagram', short: 'IG', format: '1:1 square / 4:5 portrait', caption: '≤ 2,200 chars', hashtags: 'Up to 30' },
        { platform: 'LinkedIn', short: 'LI', format: '1200×627 landscape', caption: '≤ 3,000 chars', hashtags: '3–5 max' },
        { platform: 'X / Twitter', short: 'X', format: '16:9 or square', caption: '≤ 280 chars', hashtags: '1–2 only' },
        { platform: 'Facebook', short: 'FA', format: '1200×630 landscape', caption: 'Flexible', hashtags: 'Minimal' },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-2.5">
                    <p className="text-secondary dark:text-accent text-[11px] font-semibold">Auto-adapted per platform specs</p>
                </div>
                {specs.map((s, i) => (
                    <div
                        key={s.platform}
                        className={`px-4 py-3 ${i < specs.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-secondary dark:bg-accent text-accent dark:text-secondary flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[9px] font-bold">
                                {s.short}
                            </div>
                            <span className="text-secondary dark:text-accent text-[11px] font-medium">{s.platform}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                            {[
                                { label: 'Format', value: s.format },
                                { label: 'Caption', value: s.caption },
                                { label: 'Hashtags', value: s.hashtags },
                            ].map(({ label, value }) => (
                                <div key={label} className="bg-background-3 dark:bg-background-8 rounded-lg px-2 py-1.5">
                                    <p className="text-secondary/40 dark:text-accent/40 text-[8px]">{label}</p>
                                    <p className="text-secondary dark:text-accent text-[9px] font-medium leading-tight mt-0.5">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ── Benefits visual: publish log ─────────────────────────────────────────────
export const CrossPlatformBenefitsVisual = () => {
    const log = [
        { platform: 'IG', title: 'Studio behind-the-scenes', time: 'Mon · 9:00 AM', reach: '4.2k' },
        { platform: 'LI', title: 'Studio behind-the-scenes', time: 'Mon · 9:00 AM', reach: '3.1k' },
        { platform: 'X', title: 'Studio behind-the-scenes', time: 'Mon · 9:00 AM', reach: '2.8k' },
        { platform: 'FA', title: 'Studio behind-the-scenes', time: 'Mon · 9:00 AM', reach: '1.9k' },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            {/* Publish event */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-2.5 flex items-center justify-between">
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">Last publish — Mon 9:00 AM</p>
                    <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow text-[9px] rounded-full px-2 py-0.5 font-medium flex items-center gap-1">
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        All 4 published
                    </span>
                </div>
                {log.map((entry, i) => (
                    <div
                        key={entry.platform}
                        className={`flex items-center gap-3 px-4 py-2.5 ${i < log.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
                    >
                        <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[8px] font-semibold">
                            {entry.platform}
                        </div>
                        <span className="text-secondary dark:text-accent min-w-0 flex-1 truncate text-[10px]">{entry.title}</span>
                        <span className="text-secondary/40 dark:text-accent/40 text-[9px] shrink-0">{entry.reach} reach</span>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-ns-green shrink-0">
                            <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                ))}
            </div>

            {/* Timezone chip */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 flex items-center gap-3 rounded-xl border px-4 py-3">
                <div className="bg-background-3 dark:bg-background-8 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-secondary/60 dark:text-accent/60">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">Timezone-aware scheduling</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px]">Set once — publishes at the right local time everywhere</p>
                </div>
            </div>
        </div>
    );
};