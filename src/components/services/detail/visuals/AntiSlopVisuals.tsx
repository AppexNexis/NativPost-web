'use client';

// ── Hero visual: detailed anti-slop scanner UI ───────────────────────────────
export const AntiSlopDetailVisual = () => {
    const checks = [
        { text: 'Authentic brand voice', category: 'Voice', pass: true, score: 96 },
        { text: 'Original phrasing throughout', category: 'Originality', pass: true, score: 91 },
        { text: 'Platform-appropriate tone', category: 'Tone', pass: true, score: 88 },
        { text: '"Game-changer" cliché detected', category: 'Cliché', pass: false, score: 12 },
        { text: 'Generic AI filler copy', category: 'Pattern', pass: false, score: 8 },
        { text: 'Excessive em-dash usage', category: 'Pattern', pass: false, score: 15 },
    ];

    const passed = checks.filter((c) => c.pass).length;
    const total = checks.length;

    return (
        <div className="w-full space-y-3 select-none">
            {/* Scanner header */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border">
                <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-secondary dark:bg-accent flex h-7 w-7 items-center justify-center rounded-lg">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-secondary" />
                            </svg>
                        </div>
                        <span className="text-secondary dark:text-accent text-[12px] font-semibold">Anti-slop scanner</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-secondary dark:text-accent text-[11px] font-semibold">{passed}/{total}</span>
                        <span className="text-secondary/40 dark:text-accent/40 text-[10px]">checks passed</span>
                    </div>
                </div>

                <ul>
                    {checks.map((check, i) => (
                        <li
                            key={check.text}
                            className={`flex items-center gap-3 px-4 py-2.5 ${i < checks.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
                        >
                            {/* Category */}
                            <span className="bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50 w-16 shrink-0 rounded px-1.5 py-0.5 text-center text-[8px]">
                                {check.category}
                            </span>

                            {/* Text */}
                            <span className={`flex-1 text-[11px] ${check.pass ? 'text-secondary dark:text-accent' : 'text-secondary/30 dark:text-accent/30 line-through'}`}>
                                {check.text}
                            </span>

                            {/* Score bar */}
                            <div className="w-12 shrink-0">
                                <div className="bg-background-3 dark:bg-background-8 h-1 overflow-hidden rounded-full">
                                    <div
                                        className={`h-full rounded-full ${check.pass ? 'bg-ns-green' : 'bg-red-400'}`}
                                        style={{ width: `${check.score}%` }}
                                    />
                                </div>
                            </div>

                            {/* Pass/fail icon */}
                            {check.pass ? (
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-ns-green shrink-0">
                                    <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="shrink-0 text-red-400">
                                    <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Footer — regeneration triggered */}
                <div className="border-stroke-4 dark:border-stroke-8 border-t bg-background-2 dark:bg-background-8 px-4 py-2.5 flex items-center gap-2">
                    <div className="h-3 w-3 shrink-0 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
                    <span className="text-secondary/50 dark:text-accent/50 text-[10px]">
                        3 checks failed — regenerating variant…
                    </span>
                </div>
            </div>
        </div>
    );
};

// ── Feature detail visual: before / after comparison ─────────────────────────
export const AntiSlopWorkflowVisual = () => (
    <div className="w-full space-y-3 select-none">
        {/* BLOCKED */}
        <div className="rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-red-200 dark:border-red-500/20">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0 text-red-400">
                    <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-red-500 dark:text-red-400 text-[10px] font-semibold">BLOCKED — AI patterns detected</span>
            </div>
            <div className="px-4 py-3">
                <p className="text-red-400 dark:text-red-400/80 text-[11px] leading-relaxed line-through">
                    In today's fast-paced world, leveraging innovative solutions is a game-changer for businesses looking to synergize their brand presence across multiple touchpoints.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                    {['"In today\'s"', '"Leveraging"', '"Game-changer"', '"Synergize"'].map((p) => (
                        <span key={p} className="bg-red-100 dark:bg-red-500/10 text-red-500 text-[9px] rounded px-1.5 py-0.5">{p}</span>
                    ))}
                </div>
            </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center gap-2">
            <div className="bg-stroke-2 dark:bg-stroke-6 flex-1 h-px" />
            <div className="h-3 w-3 shrink-0 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
            <span className="text-secondary/40 dark:text-accent/40 text-[9px]">Regenerating…</span>
            <div className="bg-stroke-2 dark:bg-stroke-6 flex-1 h-px" />
        </div>

        {/* APPROVED */}
        <div className="rounded-2xl border border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stroke-4 dark:border-stroke-8">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0 text-ns-green">
                    <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-ns-green text-[10px] font-semibold">APPROVED — all checks passed</span>
            </div>
            <div className="px-4 py-3">
                <p className="text-secondary dark:text-accent text-[11px] leading-relaxed">
                    Your brand has a story worth telling. Here's why we built this — and what it means for you.
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow text-[9px] rounded-full px-2 py-0.5 font-medium">Score: 94/100</span>
                    <span className="text-secondary/30 dark:text-accent/30 text-[9px]">Ready for approval queue</span>
                </div>
            </div>
        </div>
    </div>
);

// ── Benefits visual: slop patterns reference card ────────────────────────────
export const AntiSlopBenefitsVisual = () => {
    const patterns = [
        { category: 'Openings', examples: ['"In today\'s fast-paced world…"', '"As we navigate an ever-changing…"'] },
        { category: 'Clichés', examples: ['"Game-changer"', '"Leverage"', '"Synergy"', '"Cutting-edge"'] },
        { category: 'Punctuation', examples: ['Excessive em-dashes —', 'Ellipsis overuse…', 'Mid-sentence colons:'] },
        { category: 'Enthusiasm', examples: ['"Excited to share!"', '"Thrilled to announce!"'] },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-3 flex items-center justify-between">
                    <p className="text-secondary dark:text-accent text-[12px] font-semibold">Known AI tells — auto-blocked</p>
                    <span className="bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 text-[9px] rounded-full px-2 py-0.5 font-medium">
                        40+ patterns
                    </span>
                </div>
                <div className="divide-y divide-stroke-4 dark:divide-stroke-8">
                    {patterns.map(({ category, examples }) => (
                        <div key={category} className="px-4 py-3">
                            <p className="text-secondary/50 dark:text-accent/50 text-[9px] font-medium uppercase tracking-wide mb-1.5">{category}</p>
                            <div className="flex flex-wrap gap-1">
                                {examples.map((ex) => (
                                    <span key={ex} className="bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 text-[9px] rounded px-1.5 py-0.5 line-through">
                                        {ex}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-xl border px-4 py-3 flex items-center gap-3">
                <span className="relative flex h-2 w-2 shrink-0">
                    <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                    <span className="bg-ns-green relative inline-flex h-2 w-2 rounded-full" />
                </span>
                <span className="text-secondary/50 dark:text-accent/50 text-[10px]">Filter runs automatically before every post reaches your queue</span>
            </div>
        </div>
    );
};