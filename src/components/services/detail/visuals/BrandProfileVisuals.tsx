'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Brand Profile Builder — three coded visuals
// Hero visual: full interactive profile builder preview
// Feature detail: workflow showing profile driving content
// Benefits: profile DNA breakdown
// ─────────────────────────────────────────────────────────────────────────────

// ── Hero visual: full profile builder UI ─────────────────────────────────────
export const BrandProfileDetailVisual = () => {
    const voiceTags = ['Professional', 'Witty', 'Concise', 'Direct', 'Warm', 'Bold'];
    const sliders = [
        { label: 'Tone', sub: 'Casual → Formal', value: 72 },
        { label: 'Formality', sub: 'Relaxed → Strict', value: 45 },
        { label: 'Personality', sub: 'Reserved → Expressive', value: 88 },
        { label: 'Technicality', sub: 'Simple → Expert', value: 60 },
    ];
    const platforms = [
        { name: 'Instagram', voice: 'Playful, visual-first, short captions', active: true },
        { name: 'LinkedIn', voice: 'Authoritative, insight-driven, longer', active: false },
        { name: 'X / Twitter', voice: 'Sharp, punchy, conversational', active: false },
    ];
    const antiPatterns = ['"Game-changer"', '"Leverage"', 'Em-dashes', '"In today\'s world"'];

    return (
        <div className="w-full space-y-3 select-none">
            {/* Header */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border">
                <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-secondary dark:bg-accent flex h-7 w-7 items-center justify-center rounded-lg">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" className="text-accent dark:text-secondary" />
                            </svg>
                        </div>
                        <span className="text-secondary dark:text-accent text-[12px] font-semibold">Brand Profile</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                            <span className="bg-ns-green relative inline-flex h-2 w-2 rounded-full" />
                        </span>
                        <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Active</span>
                    </div>
                </div>

                <div className="p-4 space-y-4">
                    {/* Voice tags */}
                    <div>
                        <p className="text-secondary/40 dark:text-accent/40 text-[10px] font-medium uppercase tracking-wide mb-2">Voice tags</p>
                        <div className="flex flex-wrap gap-1.5">
                            {voiceTags.map((tag, i) => (
                                <span
                                    key={tag}
                                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${i < 4
                                        ? 'bg-secondary dark:bg-accent text-accent dark:text-secondary border-transparent'
                                        : 'border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50'
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Sliders */}
                    <div className="space-y-3">
                        {sliders.map(({ label, sub, value }) => (
                            <div key={label}>
                                <div className="flex items-center justify-between mb-1">
                                    <div>
                                        <span className="text-secondary dark:text-accent text-[11px] font-medium">{label}</span>
                                        <span className="text-secondary/30 dark:text-accent/30 text-[10px] ml-1.5">{sub}</span>
                                    </div>
                                    <span className="text-secondary/50 dark:text-accent/50 text-[10px]">{value}</span>
                                </div>
                                <div className="bg-background-3 dark:bg-background-8 relative h-1.5 w-full overflow-hidden rounded-full">
                                    <div className="bg-primary-500 h-full rounded-full" style={{ width: `${value}%` }} />
                                    <div
                                        className="bg-secondary dark:bg-accent absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white dark:border-background-9 shadow"
                                        style={{ left: `calc(${value}% - 6px)` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Platform voices */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-2.5">
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px] font-medium uppercase tracking-wide">Platform voices</p>
                </div>
                {platforms.map((p, i) => (
                    <div
                        key={p.name}
                        className={`flex items-start gap-3 px-4 py-3 ${i < platforms.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''} ${p.active ? 'bg-background-2 dark:bg-background-8' : ''}`}
                    >
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[8px] font-bold ${p.active ? 'bg-secondary dark:bg-accent text-accent dark:text-secondary' : 'bg-background-3 dark:bg-background-8 text-secondary/40 dark:text-accent/40'}`}>
                            {p.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className={`text-[11px] font-medium ${p.active ? 'text-secondary dark:text-accent' : 'text-secondary/50 dark:text-accent/50'}`}>{p.name}</p>
                            <p className="text-secondary/40 dark:text-accent/40 text-[10px] truncate">{p.voice}</p>
                        </div>
                        {p.active && (
                            <span className="shrink-0 text-[9px] bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow rounded-full px-2 py-0.5 font-medium">
                                Active
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Anti-patterns */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border px-4 py-3">
                <p className="text-secondary/40 dark:text-accent/40 text-[10px] font-medium uppercase tracking-wide mb-2">Anti-patterns (never use)</p>
                <div className="flex flex-wrap gap-1.5">
                    {antiPatterns.map((ap) => (
                        <span key={ap} className="flex items-center gap-1 rounded-full bg-red-50 dark:bg-red-500/10 px-2.5 py-0.5 text-[10px] text-red-500 dark:text-red-400 line-through">
                            {ap}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ── Feature detail visual: profile → content generation flow ─────────────────
export const BrandProfileWorkflowVisual = () => (
    <div className="w-full space-y-3 select-none">
        {/* Profile card */}
        <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-4">
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-secondary dark:bg-accent flex h-9 w-9 items-center justify-center rounded-xl">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-accent dark:text-secondary" />
                    </svg>
                </div>
                <div>
                    <p className="text-secondary dark:text-accent text-[12px] font-semibold">Your Brand Profile</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px]">Loaded as creative brief</p>
                </div>
                <div className="ml-auto">
                    <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow text-[9px] font-medium rounded-full px-2 py-0.5">
                        Active
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Voice tags', value: '6' },
                    { label: 'Anti-patterns', value: '12' },
                    { label: 'Platforms', value: '4' },
                ].map(({ label, value }) => (
                    <div key={label} className="bg-background-3 dark:bg-background-8 rounded-xl p-2 text-center">
                        <p className="text-secondary dark:text-accent text-[14px] font-semibold">{value}</p>
                        <p className="text-secondary/40 dark:text-accent/40 text-[9px]">{label}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
                <div className="bg-stroke-2 dark:bg-stroke-6 w-px h-5" />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-secondary/30 dark:text-accent/30">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-secondary/30 dark:text-accent/30 text-[9px]">Injected into every request</p>
            </div>
        </div>

        {/* Generated post */}
        <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
            <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-4 py-2.5">
                <span className="text-secondary dark:text-accent text-[11px] font-medium">Generated post</span>
                <div className="flex gap-1">
                    {['IG', 'LI', 'X'].map((p) => (
                        <span key={p} className="bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50 flex h-5 w-5 items-center justify-center rounded-md text-[8px] font-semibold">
                            {p}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-4 space-y-2">
                <p className="text-secondary dark:text-accent text-[12px] leading-relaxed">
                    Behind every great product is a story worth telling. Here's ours — and why we built it for you.
                </p>
                <div className="flex items-center gap-2">
                    <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow text-[9px] rounded-full px-2 py-0.5 font-medium flex items-center gap-1">
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Matches brand voice
                    </span>
                    <span className="text-secondary/30 dark:text-accent/30 text-[9px]">Score: 94 / 100</span>
                </div>
            </div>
        </div>
    </div>
);

// ── Benefits visual: profile DNA breakdown ────────────────────────────────────
export const BrandProfileBenefitsVisual = () => {
    const layers = [
        { label: 'Voice & Tone', items: ['Professional', 'Witty', 'Direct'], color: 'bg-primary-500' },
        { label: 'Visual Identity', items: ['Brand colours', 'Typography', 'Image style'], color: 'bg-ns-green' },
        { label: 'Knowledge Base', items: ['Mission', 'Products', 'Audience'], color: 'bg-primary-300' },
        { label: 'Anti-Patterns', items: ['"Game-changer"', 'Em-dashes', 'Generic openers'], color: 'bg-red-400' },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-3">
                    <p className="text-secondary dark:text-accent text-[12px] font-semibold">Brand Profile DNA</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px]">Everything that makes your content yours</p>
                </div>
                <div className="p-4 space-y-3">
                    {layers.map(({ label, items, color }) => (
                        <div key={label} className="flex items-start gap-3">
                            <div className={`${color} mt-1.5 h-2 w-2 shrink-0 rounded-full`} />
                            <div className="min-w-0 flex-1">
                                <p className="text-secondary dark:text-accent text-[11px] font-medium mb-1">{label}</p>
                                <div className="flex flex-wrap gap-1">
                                    {items.map((item) => (
                                        <span key={item} className="border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-8 text-secondary/60 dark:text-accent/60 rounded-full border px-2 py-0.5 text-[9px]">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Usage stat */}
            <div className="grid grid-cols-2 gap-3">
                <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-4 text-center">
                    <p className="text-secondary dark:text-accent text-[22px] font-semibold">94%</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px] mt-0.5">First-pass approval rate</p>
                </div>
                <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-4 text-center">
                    <p className="text-secondary dark:text-accent text-[22px] font-semibold">100%</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px] mt-0.5">Posts use Brand Profile</p>
                </div>
            </div>
        </div>
    );
};