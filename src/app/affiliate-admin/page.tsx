'use client';

import { useState, useEffect, useCallback } from 'react';

interface Application {
    id: string;
    submittedAt: string;
    status: 'pending' | 'approved' | 'rejected';
    fullName: string;
    email: string;
    whatsapp: string;
    role?: string;
    platforms?: string;
    followers?: string;
    companies?: string;
    videoUrl?: string;
    motivation: string;
    socialLinks?: string;
    reviewedAt?: string;
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
    });
}

const statusColors: Record<string, string> = {
    pending: 'bg-ns-yellow-light dark:bg-ns-yellow/20 text-secondary dark:text-ns-yellow',
    approved: 'bg-ns-green-light dark:bg-ns-green/20 text-secondary dark:text-ns-green',
    rejected: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400',
};

export default function AffiliateAdminPage() {
    const [secret, setSecret] = useState('');
    const [authed, setAuthed] = useState(false);
    const [authError, setAuthError] = useState('');
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState<Application | null>(null);
    const [updating, setUpdating] = useState<string | null>(null);
    const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
    const [toast, setToast] = useState('');

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(''), 3000);
    };

    const fetchApplications = useCallback(async (s: string) => {
        setLoading(true);
        try {
            const res = await fetch('/api/affiliate-apply', {
                headers: { 'x-admin-secret': s },
            });
            if (!res.ok) throw new Error('Unauthorized');
            const { applications: data } = await res.json();
            setApplications(data);
            setAuthed(true);
        } catch {
            setAuthError('Incorrect password. Please try again.');
            setAuthed(false);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        setAuthError('');
        fetchApplications(secret);
    };

    const updateStatus = async (id: string, status: string) => {
        setUpdating(id);
        try {
            const res = await fetch('/api/affiliate-apply', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-secret': secret,
                },
                body: JSON.stringify({ id, status }),
            });
            if (!res.ok) throw new Error('Update failed');
            const { application } = await res.json();
            setApplications(prev => prev.map(a => a.id === id ? application : a));
            if (selected?.id === id) setSelected(application);
            showToast(status === 'approved' ? 'Application approved. Approval email sent.' : 'Application rejected.');
        } catch {
            showToast('Update failed. Please try again.');
        } finally {
            setUpdating(null);
        }
    };

    const filtered = filter === 'all' ? applications : applications.filter(a => a.status === filter);
    const counts = {
        all: applications.length,
        pending: applications.filter(a => a.status === 'pending').length,
        approved: applications.filter(a => a.status === 'approved').length,
        rejected: applications.filter(a => a.status === 'rejected').length,
    };

    // Auth gate
    if (!authed) {
        return (
            <div className="min-h-screen bg-background-3 dark:bg-background-7 flex items-center justify-center px-5">
                <div className="w-full max-w-[400px]">
                    <div className="mb-8 text-center space-y-2">
                        <div className="mx-auto h-12 w-12 rounded-2xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-500">
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h1 className="text-heading-5 font-medium text-secondary dark:text-accent">Affiliate admin</h1>
                        <p className="text-tagline-2 text-secondary/55 dark:text-accent/55">Enter your admin password to continue.</p>
                    </div>
                    <form onSubmit={handleAuth} className="space-y-4">
                        <input
                            type="password"
                            value={secret}
                            onChange={e => setSecret(e.target.value)}
                            placeholder="Admin password"
                            className="w-full rounded-[12px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 px-4 py-3 text-tagline-1 text-secondary dark:text-accent placeholder:text-secondary/30 dark:placeholder:text-accent/30 outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-500/20 transition-colors"
                        />
                        {authError && <p className="text-tagline-3 text-red-500">{authError}</p>}
                        <button type="submit" disabled={!secret || loading} className="btn btn-xl btn-primary w-full disabled:opacity-50">
                            <span>{loading ? 'Checking...' : 'Sign in'}</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-3 dark:bg-background-7">
            {/* Toast */}
            {toast && (
                <div className="fixed top-5 right-5 z-50 rounded-[12px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 shadow-3 px-5 py-3">
                    <p className="text-tagline-2 text-secondary dark:text-accent">{toast}</p>
                </div>
            )}

            <div className="main-container py-10">
                {/* Header */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-heading-4 font-medium text-secondary dark:text-accent">Affiliate applications</h1>
                        <p className="text-tagline-2 text-secondary/55 dark:text-accent/55 mt-1">{applications.length} total submissions</p>
                    </div>
                    <button onClick={() => fetchApplications(secret)} className="btn btn-md btn-white dark:btn-transparent">
                        <span>Refresh</span>
                    </button>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {(['all', 'pending', 'approved', 'rejected'] as const).map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`flex items-center gap-2 rounded-full px-4 py-2 text-tagline-3 font-medium transition-all duration-200 ${filter === f
                                    ? 'bg-secondary dark:bg-accent text-white dark:text-secondary'
                                    : 'bg-white dark:bg-background-6 border border-stroke-2 dark:border-stroke-7 text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent'
                                }`}
                        >
                            <span className="first-letter:uppercase">{f}</span>
                            <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${filter === f ? 'bg-white/20' : 'bg-background-3 dark:bg-background-8'}`}>
                                {counts[f]}
                            </span>
                        </button>
                    ))}
                </div>

                <div className={`grid gap-5 ${selected ? 'grid-cols-1 lg:grid-cols-[1fr_400px]' : 'grid-cols-1'}`}>
                    {/* Applications list */}
                    <div className="space-y-3">
                        {filtered.length === 0 && (
                            <div className="rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 p-12 text-center">
                                <p className="text-tagline-1 text-secondary/50 dark:text-accent/50">No {filter === 'all' ? '' : filter} applications yet.</p>
                            </div>
                        )}
                        {filtered.map(app => (
                            <div
                                key={app.id}
                                onClick={() => setSelected(selected?.id === app.id ? null : app)}
                                className={`rounded-[16px] border bg-white dark:bg-background-6 p-5 cursor-pointer transition-all duration-200 ${selected?.id === app.id
                                        ? 'border-primary-400 dark:border-primary-500 shadow-2'
                                        : 'border-stroke-2 dark:border-stroke-7 hover:border-stroke-3 dark:hover:border-stroke-6'
                                    }`}
                            >
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <p className="text-tagline-1 font-medium text-secondary dark:text-accent">{app.fullName}</p>
                                            <span className={`text-tagline-3 px-2 py-0.5 rounded-full font-medium ${statusColors[app.status]}`}>
                                                {app.status}
                                            </span>
                                        </div>
                                        <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">{app.email}</p>
                                        <p className="text-tagline-3 text-secondary/40 dark:text-accent/40 mt-1">{app.platforms || 'No platforms listed'} {app.followers ? `· ${app.followers} followers` : ''}</p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="text-tagline-3 text-secondary/40 dark:text-accent/40">{formatDate(app.submittedAt)}</p>
                                        {app.status === 'pending' && (
                                            <div className="flex gap-2 mt-2 justify-end" onClick={e => e.stopPropagation()}>
                                                <button
                                                    onClick={() => updateStatus(app.id, 'approved')}
                                                    disabled={updating === app.id}
                                                    className="btn btn-md btn-primary disabled:opacity-50"
                                                >
                                                    <span>Approve</span>
                                                </button>
                                                <button
                                                    onClick={() => updateStatus(app.id, 'rejected')}
                                                    disabled={updating === app.id}
                                                    className="btn btn-md btn-white dark:btn-transparent disabled:opacity-50"
                                                >
                                                    <span>Reject</span>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detail panel */}
                    {selected && (
                        <div className="rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 overflow-hidden h-fit sticky top-5">
                            <div className="flex items-center justify-between px-6 py-5 border-b border-stroke-2 dark:border-stroke-7">
                                <h2 className="text-tagline-1 font-medium text-secondary dark:text-accent">Application detail</h2>
                                <button onClick={() => setSelected(null)} className="text-secondary/30 dark:text-accent/30 hover:text-secondary dark:hover:text-accent transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M18 6 6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
                                {[
                                    { label: 'Name', value: selected.fullName },
                                    { label: 'Email', value: selected.email },
                                    { label: 'WhatsApp', value: selected.whatsapp },
                                    { label: 'Role', value: selected.role },
                                    { label: 'Platforms', value: selected.platforms },
                                    { label: 'Audience size', value: selected.followers },
                                    { label: 'Social links', value: selected.socialLinks },
                                    { label: 'Companies worked with', value: selected.companies },
                                    { label: 'Video intro', value: selected.videoUrl },
                                    { label: 'Submitted', value: formatDate(selected.submittedAt) },
                                    { label: 'Status', value: selected.status },
                                    { label: 'Reviewed', value: selected.reviewedAt ? formatDate(selected.reviewedAt) : undefined },
                                ].filter(row => row.value).map(row => (
                                    <div key={row.label}>
                                        <p className="text-tagline-3 uppercase tracking-wide font-semibold text-secondary/40 dark:text-accent/40 mb-1">{row.label}</p>
                                        {row.label === 'Video intro' ? (
                                            <a href={row.value!} target="_blank" rel="noopener noreferrer" className="text-tagline-2 text-primary-500 underline underline-offset-2 break-all">{row.value}</a>
                                        ) : (
                                            <p className="text-tagline-2 text-secondary dark:text-accent">{row.value}</p>
                                        )}
                                    </div>
                                ))}

                                <div>
                                    <p className="text-tagline-3 uppercase tracking-wide font-semibold text-secondary/40 dark:text-accent/40 mb-1">Motivation</p>
                                    <p className="text-tagline-2 text-secondary dark:text-accent leading-relaxed">{selected.motivation}</p>
                                </div>

                                {/* WhatsApp quick link */}
                                <div className="pt-2 border-t border-stroke-2 dark:border-stroke-7">
                                    <a
                                        href={`https://wa.me/${selected.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${selected.fullName}, your NativPost affiliate application has been approved. Visit https://nativpost.affonso.io to access your dashboard and get your referral link.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-md btn-white dark:btn-transparent w-full text-center"
                                    >
                                        <span>Message on WhatsApp</span>
                                    </a>
                                </div>

                                {selected.status === 'pending' && (
                                    <div className="flex gap-2 pt-2">
                                        <button onClick={() => updateStatus(selected.id, 'approved')} disabled={updating === selected.id} className="btn btn-md btn-primary flex-1 disabled:opacity-50">
                                            <span>Approve</span>
                                        </button>
                                        <button onClick={() => updateStatus(selected.id, 'rejected')} disabled={updating === selected.id} className="btn btn-md btn-white dark:btn-transparent flex-1 disabled:opacity-50">
                                            <span>Reject</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}