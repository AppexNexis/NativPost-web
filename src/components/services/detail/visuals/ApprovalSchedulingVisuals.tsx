'use client';

// ── Hero visual: full approval dashboard UI ───────────────────────────────────
export const ApprovalDetailVisual = () => {
    const posts = [
        { platform: 'IG', title: 'Behind-the-scenes studio tour', day: 'Mon', time: '9:00 AM', status: 'approved' as const, score: 94 },
        { platform: 'LI', title: 'How we think about brand voice', day: 'Mon', time: '11:00 AM', status: 'approved' as const, score: 91 },
        { platform: 'X', title: 'Just dropping this here — amazing', day: 'Tue', time: '8:00 AM', status: 'blocked' as const, score: 31 },
        { platform: 'FB', title: 'New product drop this Friday', day: 'Tue', time: '12:00 PM', status: 'review' as const, score: 78 },
        { platform: 'IG', title: 'The story behind our latest campaign', day: 'Wed', time: '9:00 AM', status: 'scheduled' as const, score: 89 },
    ];

    return (
        <div className="w-full space-y-3 select-none">
            {/* Header */}
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border">
                <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-4 py-3">
                    <span className="text-secondary dark:text-accent text-[12px] font-semibold">Approval queue — this week</span>
                    <div className="flex items-center gap-2">
                        <button className="bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50 rounded-lg px-2.5 py-1 text-[10px] font-medium">
                            Bulk approve
                        </button>
                        <span className="text-secondary/30 dark:text-accent/30 text-[10px]">5 posts</span>
                    </div>
                </div>

                <ul>
                    {posts.map((post, i) => (
                        <li
                            key={post.platform + post.title}
                            className={`flex items-center gap-3 px-4 py-3 ${i < posts.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
                        >
                            {/* Platform */}
                            <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold">
                                {post.platform}
                            </div>

                            {/* Title + time */}
                            <div className="min-w-0 flex-1">
                                <p className={`text-[11px] font-medium truncate ${post.status === 'blocked' ? 'line-through text-secondary/30 dark:text-accent/30' : 'text-secondary dark:text-accent'}`}>
                                    {post.title}
                                </p>
                                <p className="text-secondary/40 dark:text-accent/40 text-[9px]">{post.day} · {post.time}</p>
                            </div>

                            {/* Score bar */}
                            <div className="w-10 shrink-0">
                                <div className="bg-background-3 dark:bg-background-8 h-1 overflow-hidden rounded-full">
                                    <div
                                        className={`h-full rounded-full ${post.score >= 80 ? 'bg-ns-green' : post.score >= 60 ? 'bg-ns-yellow' : 'bg-red-400'}`}
                                        style={{ width: `${post.score}%` }}
                                    />
                                </div>
                            </div>

                            {/* Status badge */}
                            {post.status === 'approved' && (
                                <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium">
                                    Approved
                                </span>
                            )}
                            {post.status === 'blocked' && (
                                <span className="shrink-0 rounded-full bg-red-50 dark:bg-red-500/10 px-2 py-0.5 text-[9px] font-medium text-red-500 dark:text-red-400">
                                    Blocked
                                </span>
                            )}
                            {post.status === 'review' && (
                                <span className="bg-ns-yellow-light text-secondary dark:bg-accent/10 dark:text-ns-yellow shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium">
                                    Review
                                </span>
                            )}
                            {post.status === 'scheduled' && (
                                <span className="bg-primary-50 text-primary-600 dark:bg-accent/10 dark:text-primary-300 shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium">
                                    Scheduled
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="border-stroke-4 dark:border-stroke-8 border-t bg-background-2 dark:bg-background-8 flex items-center gap-2 px-4 py-2.5">
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                        <span className="bg-ns-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                        <span className="bg-ns-green relative inline-flex h-1.5 w-1.5 rounded-full" />
                    </span>
                    <span className="text-secondary/40 dark:text-accent/40 text-[10px]">
                        Human review active — nothing publishes without approval
                    </span>
                </div>
            </div>
        </div>
    );
};

// ── Feature detail visual: post preview card with inline edit ─────────────────
export const ApprovalWorkflowVisual = () => (
    <div className="w-full space-y-3 select-none">
        {/* Post preview card */}
        <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border">
            <div className="border-stroke-4 dark:border-stroke-8 flex items-center gap-2 border-b px-4 py-3">
                <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-semibold">
                    IG
                </div>
                <div>
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">Instagram</p>
                    <p className="text-secondary/40 dark:text-accent/40 text-[9px]">Monday · 9:00 AM</p>
                </div>
                <div className="ml-auto flex gap-1">
                    <button className="bg-ns-green-light dark:bg-accent/10 text-secondary dark:text-ns-yellow rounded-lg px-2.5 py-1 text-[10px] font-medium flex items-center gap-1">
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Approve
                    </button>
                    <button className="bg-background-3 dark:bg-background-8 text-secondary/50 dark:text-accent/50 rounded-lg px-2 py-1 text-[10px]">
                        Edit
                    </button>
                </div>
            </div>

            {/* Post content */}
            <div className="p-4 space-y-3">
                <div className="bg-background-3 dark:bg-background-8 h-20 w-full rounded-xl flex items-center justify-center">
                    <span className="text-secondary/30 dark:text-accent/30 text-[10px]">Brand graphic preview</span>
                </div>
                <p className="text-secondary dark:text-accent text-[12px] leading-relaxed">
                    Behind every great product is a story worth telling. Here's ours — and why we built it for you.
                </p>
                <div className="flex flex-wrap gap-1">
                    {['#BrandStory', '#ContentMarketing', '#NativPost'].map((tag) => (
                        <span key={tag} className="text-primary-500 text-[10px]">{tag}</span>
                    ))}
                </div>
            </div>
        </div>

        {/* Approved stat chip */}
        <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 inline-flex w-full items-center gap-3 rounded-xl border px-4 py-3">
            <div className="grid grid-cols-3 gap-0 flex-1">
                {[
                    { label: '1-click approve', value: '85%' },
                    { label: 'Avg review time', value: '2 min' },
                    { label: 'Bulk approvals', value: '40%' },
                ].map(({ label, value }, i) => (
                    <div key={label} className={`text-center ${i < 2 ? 'border-r border-stroke-2 dark:border-stroke-6' : ''}`}>
                        <p className="text-secondary dark:text-accent text-[13px] font-semibold">{value}</p>
                        <p className="text-secondary/40 dark:text-accent/40 text-[9px]">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// ── Benefits visual: weekly calendar view ─────────────────────────────────────
export const ApprovalBenefitsVisual = () => {
    const calendar = [
        { day: 'Mon', posts: [{ platform: 'IG', status: 'approved' as const }, { platform: 'LI', status: 'approved' as const }] },
        { day: 'Tue', posts: [{ platform: 'X', status: 'scheduled' as const }, { platform: 'FB', status: 'review' as const }] },
        { day: 'Wed', posts: [{ platform: 'IG', status: 'scheduled' as const }] },
        { day: 'Thu', posts: [{ platform: 'LI', status: 'scheduled' as const }, { platform: 'X', status: 'scheduled' as const }] },
        { day: 'Fri', posts: [{ platform: 'IG', status: 'scheduled' as const }, { platform: 'FB', status: 'scheduled' as const }] },
    ];

    const statusDot: Record<string, string> = {
        approved: 'bg-ns-green',
        scheduled: 'bg-primary-400',
        review: 'bg-ns-yellow',
        blocked: 'bg-red-400',
    };

    return (
        <div className="w-full space-y-3 select-none">
            <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border overflow-hidden">
                <div className="border-stroke-4 dark:border-stroke-8 border-b px-4 py-2.5">
                    <p className="text-secondary dark:text-accent text-[11px] font-medium">This week</p>
                </div>
                <div className="grid grid-cols-5 divide-x divide-stroke-4 dark:divide-stroke-8">
                    {calendar.map(({ day, posts }) => (
                        <div key={day} className="px-2 py-3">
                            <p className="text-secondary/40 dark:text-accent/40 text-[9px] mb-2 text-center">{day}</p>
                            <div className="space-y-1.5">
                                {posts.map((post, j) => (
                                    <div key={j} className="border-stroke-2 dark:border-stroke-7 bg-background-1 dark:bg-background-9 flex items-center gap-1.5 rounded-lg border px-1.5 py-1">
                                        <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[post.status]}`} />
                                        <span className="text-secondary/60 dark:text-accent/60 text-[8px] font-medium">{post.platform}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 px-1 flex-wrap">
                {[
                    { label: 'Approved', color: 'bg-ns-green' },
                    { label: 'Scheduled', color: 'bg-primary-400' },
                    { label: 'Needs review', color: 'bg-ns-yellow' },
                ].map(({ label, color }) => (
                    <div key={label} className="flex items-center gap-1.5">
                        <div className={`h-2 w-2 rounded-full ${color}`} />
                        <span className="text-secondary/40 dark:text-accent/40 text-[10px]">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};