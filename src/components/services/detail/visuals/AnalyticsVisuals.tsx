'use client';

// ── Hero visual: full analytics dashboard ────────────────────────────────────
export const AnalyticsDetailVisual = () => {
    const weekBars = [
        { day: 'M', reach: 55, engage: 40 },
        { day: 'T', reach: 70, engage: 55 },
        { day: 'W', reach: 45, engage: 30 },
        { day: 'T', reach: 88, engage: 72 },
        { day: 'F', reach: 62, engage: 50 },
        { day: 'S', reach: 95, engage: 80 },
        { day: 'S', reach: 78, engage: 60 },
    ];

    const topPosts = [
        { platform: 'IG', title: 'Studio behind-the-scenes', reach: '4.2k', engage: '9.1%' },
        { platform: 'LI', title: 'How we think about brand voice', reach: '3.1k', engage: '7.4%' },
        { platform: 'X', title: 'Drop incoming this Friday', reach: '2.8k', engage: '6.9%' },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            {/* Stat strip */}
            <div className="grid grid-cols-4 gap-2">
                {[
                    { label: 'Total reach', value: '17.3k', up: true },
                    { label: 'Engagement', value: '8.2%', up: true },
                    { label: 'Posts live', value: '40', up: false },
                    { label: 'Follower growth', value: '+312', up: true },
                ].map(({ label, value, up }) => (
                    <div key={label} className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-3 text-center">
                        <p className="text-secondary dark:text-accent text-[14px] font-semibold">{value}</p>
                        <p className="text-secondary/40 dark:text-accent/40 text-[9px] mt-0.5">{label}</p>
                        {up && <p className="text-ns-green text-[8px] mt-0.5">↑ vs last week</p>}
                    </div>
                ))}
            </div>

            {/* Bar chart */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-4">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">Weekly reach vs engagement</p>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <span className="bg-background-3 dark:bg-background-8 h-1.5 w-3 rounded-full" />
                            <span className="text-secondary/40 dark:text-accent/40 text-[9px]">Reach</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="bg-primary-300 dark:bg-primary-600 h-1.5 w-3 rounded-full" />
                            <span className="text-secondary/40 dark:text-accent/40 text-[9px]">Engage</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-end gap-2" style={{ height: '72px' }}>
                    {weekBars.map(({ day, reach, engage }) => (
                        <div key={day} className="flex flex-1 flex-col items-center gap-0.5">
                            <div className="flex w-full items-end gap-0.5 flex-1">
                                <div className="bg-background-3 dark:bg-background-8 flex-1 rounded-t-sm" style={{ height: `${(reach / 100) * 64}px` }} />
                                <div className="bg-primary-300 dark:bg-primary-600 flex-1 rounded-t-sm" style={{ height: `${(engage / 100) * 64}px` }} />
                            </div>
                            <span className="text-secondary/30 dark:text-accent/30 text-[8px]">{day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top posts */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-2.5">
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">Top performing posts</p>
                </div>
                {topPosts.map((post, i) => (
                    <div key={post.title} className={`flex items-center gap-3 px-4 py-2.5 ${i < topPosts.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}>
                        <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[8px] font-semibold">
                            {post.platform}
                        </div>
                        <span className="text-secondary dark:text-accent min-w-0 flex-1 truncate text-[10px]">{post.title}</span>
                        <span className="text-secondary/50 dark:text-accent/50 text-[9px] shrink-0">{post.reach}</span>
                        <span className="bg-ns-green-light dark:bg-accent/10 text-ns-green dark:text-ns-yellow text-[9px] shrink-0 rounded-full px-2 py-0.5 font-medium">
                            {post.engage}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ── Feature detail visual: feedback loop diagram ─────────────────────────────
export const AnalyticsWorkflowVisual = () => (
    <div className="w-full space-y-3 select-none">
        {/* Performance insight card */}
        <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-4 space-y-4">
            <div className="flex items-center justify-between">
                <p className="text-secondary dark:text-accent text-[12px] font-semibold">Performance insights</p>
                <span className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow text-[9px] rounded-full px-2 py-0.5 font-medium">
                    ↑ 34% this month
                </span>
            </div>

            {[
                { label: 'Behind-the-scenes content', value: 89, note: 'Highest avg. engagement' },
                { label: 'Product feature posts', value: 73, note: 'Strong on LinkedIn' },
                { label: 'Industry insight threads', value: 61, note: 'Growing on X' },
                { label: 'Promotional content', value: 44, note: 'Lower engagement' },
            ].map(({ label, value, note }) => (
                <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-secondary dark:text-accent text-[10px] font-medium">{label}</span>
                        <span className="text-secondary/40 dark:text-accent/40 text-[9px]">{note}</span>
                    </div>
                    <div className="bg-background-3 dark:bg-background-8 h-1.5 w-full overflow-hidden rounded-full">
                        <div
                            className={`h-full rounded-full ${value >= 75 ? 'bg-ns-green' : value >= 55 ? 'bg-primary-400' : 'bg-background-3 dark:bg-background-8'}`}
                            style={{ width: `${value}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>

        {/* Feedback loop chip */}
        <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 inline-flex w-full items-center gap-3 rounded-xl border px-4 py-3">
            <div className="bg-primary-50 dark:bg-primary-800/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="#864ffe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div>
                <p className="text-secondary dark:text-accent text-[11px] font-medium leading-tight">
                    Performance data feeds into future content
                </p>
                <p className="text-secondary/40 dark:text-accent/40 text-[10px]">
                    The system learns what works for your audience
                </p>
            </div>
        </div>
    </div>
);

// ── Benefits visual: month-over-month growth chart ────────────────────────────
export const AnalyticsBenefitsVisual = () => {
    const months = [
        { month: 'Nov', reach: 4200, engage: 5.1 },
        { month: 'Dec', reach: 6800, engage: 6.3 },
        { month: 'Jan', reach: 9100, engage: 7.2 },
        { month: 'Feb', reach: 12400, engage: 8.1 },
        { month: 'Mar', reach: 17300, engage: 8.9 },
    ];
    const maxReach = Math.max(...months.map((m) => m.reach));

    return (
        <div className="w-full space-y-3 select-none">
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-4">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-secondary dark:text-accent text-[12px] font-semibold">Growth since joining NativPost</p>
                        <p className="text-secondary/40 dark:text-accent/40 text-[10px]">Combined reach across all platforms</p>
                    </div>
                    <span className="bg-ns-green-light dark:bg-ns-green/10 text-ns-green text-[10px] rounded-full px-2.5 py-1 font-semibold">
                        +312%
                    </span>
                </div>

                {/* Growth bars */}
                <div className="flex items-end gap-3" style={{ height: '80px' }}>
                    {months.map(({ month, reach }) => (
                        <div key={month} className="flex flex-1 flex-col items-center gap-1">
                            <div
                                className="bg-primary-400 dark:bg-primary-500 w-full rounded-t-md transition-all"
                                style={{ height: `${(reach / maxReach) * 72}px` }}
                            />
                            <span className="text-secondary/40 dark:text-accent/40 text-[9px]">{month}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exportable report chip */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 flex items-center gap-3 rounded-xl border px-4 py-3">
                <div className="bg-background-3 dark:bg-background-8 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-secondary/60 dark:text-accent/60">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex-1">
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">Monthly PDF report ready</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[10px]">March 2026 · stakeholder-ready</p>
                </div>
                <button className="bg-background-3 dark:bg-background-8 text-secondary/60 dark:text-accent/60 rounded-lg px-2.5 py-1 text-[10px] font-medium shrink-0">
                    Export
                </button>
            </div>
        </div>
    );
};