'use client';

import { useState } from 'react';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const roleOptions = [
    'Content creator',
    'Social media manager',
    'Marketing agency',
    'Freelancer',
    'Business owner',
    'Influencer',
    'Blogger / newsletter writer',
    'Other',
];

export default function AffiliateApplyClient() {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (data: FormData): Record<string, string> => {
        const e: Record<string, string> = {};
        if (!data.get('fullName')?.toString().trim()) e.fullName = 'Full name is required.';
        const email = data.get('email')?.toString().trim() || '';
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'A valid email address is required.';
        const wa = data.get('whatsapp')?.toString().trim() || '';
        if (!wa) e.whatsapp = 'WhatsApp number is required.';
        if (!data.get('motivation')?.toString().trim() || (data.get('motivation')?.toString().trim().length || 0) < 30) {
            e.motivation = 'Please write at least 30 characters about your motivation.';
        }
        if (!data.get('platforms')?.toString().trim()) e.platforms = 'Please list your platforms.';
        return e;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            const firstKey = Object.keys(validationErrors)[0];
            document.getElementById(firstKey)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        setErrors({});
        setStatus('submitting');
        setErrorMsg('');

        try {
            const payload = {
                fullName: data.get('fullName'),
                email: data.get('email'),
                whatsapp: data.get('whatsapp'),
                role: data.get('role'),
                platforms: data.get('platforms'),
                followers: data.get('followers'),
                companies: data.get('companies'),
                videoUrl: data.get('videoUrl'),
                motivation: data.get('motivation'),
                socialLinks: data.get('socialLinks'),
            };

            const res = await fetch('/api/affiliate-apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const { error } = await res.json();
                throw new Error(error || 'Submission failed.');
            }

            setStatus('success');
        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="min-h-[60vh] flex items-center justify-center py-20">
                <div className="mx-auto max-w-[520px] text-center space-y-5 px-5">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-500/20">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary-500">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2 className="text-heading-4 font-medium text-secondary dark:text-accent">Application submitted</h2>
                    <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 leading-relaxed">
                        We have received your application and will review it within 3 to 5 business days. If approved, you will receive an email with access to your affiliate dashboard.
                    </p>
                    <Link href="/affiliates" className="btn btn-xl btn-primary mt-4 inline-block">
                        <span>Back to affiliate program</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Section 1 — Personal details */}
            <RevealAnimation delay={0.2}>
                <div className="rounded-[20px] overflow-hidden border border-stroke-2 dark:border-stroke-7">
                    <div className="flex items-center gap-3 px-6 py-5 bg-background-1 dark:bg-background-7 border-b border-stroke-2 dark:border-stroke-7">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-500/20 text-tagline-3 font-bold text-primary-500">1</span>
                        <h2 className="text-tagline-1 font-medium text-secondary dark:text-accent">Personal details</h2>
                    </div>
                    <div className="p-6 bg-white dark:bg-background-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field id="fullName" label="Full name" required error={errors.fullName}>
                            <input name="fullName" id="fullName" type="text" placeholder="Your full name" className={fieldClass(errors.fullName)} />
                        </Field>
                        <Field id="email" label="Email address" required error={errors.email}>
                            <input name="email" id="email" type="email" placeholder="you@example.com" className={fieldClass(errors.email)} />
                        </Field>
                        <Field id="whatsapp" label="WhatsApp number" required error={errors.whatsapp} hint="Include country code, e.g. +234 810 000 0000">
                            <input name="whatsapp" id="whatsapp" type="tel" placeholder="+234 810 000 0000" className={fieldClass(errors.whatsapp)} />
                        </Field>
                        <Field id="role" label="Your role or occupation">
                            <select name="role" id="role" className={fieldClass()}>
                                <option value="">Select your role</option>
                                {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                        </Field>
                    </div>
                </div>
            </RevealAnimation>

            {/* Section 2 — Audience and reach */}
            <RevealAnimation delay={0.25}>
                <div className="rounded-[20px] overflow-hidden border border-stroke-2 dark:border-stroke-7">
                    <div className="flex items-center gap-3 px-6 py-5 bg-background-1 dark:bg-background-7 border-b border-stroke-2 dark:border-stroke-7">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-500/20 text-tagline-3 font-bold text-primary-500">2</span>
                        <h2 className="text-tagline-1 font-medium text-secondary dark:text-accent">Audience and reach</h2>
                    </div>
                    <div className="p-6 bg-white dark:bg-background-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field id="platforms" label="Platforms you are active on" required error={errors.platforms} hint="e.g. Instagram, LinkedIn, YouTube, newsletter" className="sm:col-span-2">
                            <input name="platforms" id="platforms" type="text" placeholder="Instagram, LinkedIn, YouTube..." className={fieldClass(errors.platforms)} />
                        </Field>
                        <Field id="followers" label="Approximate audience size" hint="Combined across all platforms">
                            <input name="followers" id="followers" type="text" placeholder="e.g. 5,000 to 10,000" className={fieldClass()} />
                        </Field>
                        <Field id="socialLinks" label="Social media profile links">
                            <input name="socialLinks" id="socialLinks" type="text" placeholder="instagram.com/yourhandle, linkedin.com/in/you" className={fieldClass()} />
                        </Field>
                    </div>
                </div>
            </RevealAnimation>

            {/* Section 3 — Experience */}
            <RevealAnimation delay={0.3}>
                <div className="rounded-[20px] overflow-hidden border border-stroke-2 dark:border-stroke-7">
                    <div className="flex items-center gap-3 px-6 py-5 bg-background-1 dark:bg-background-7 border-b border-stroke-2 dark:border-stroke-7">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-500/20 text-tagline-3 font-bold text-primary-500">3</span>
                        <h2 className="text-tagline-1 font-medium text-secondary dark:text-accent">Experience</h2>
                    </div>
                    <div className="p-6 bg-white dark:bg-background-6 grid grid-cols-1 gap-5">
                        <Field id="companies" label="Brands or companies you have worked with" hint="If none, leave blank or write 'none'.">
                            <input name="companies" id="companies" type="text" placeholder="Brand A, Agency B, Client C..." className={fieldClass()} />
                        </Field>
                        <Field id="videoUrl" label="Short video introduction" hint="A 1 to 3 minute video introducing yourself — Loom, YouTube, or any public link. Optional but strongly recommended.">
                            <input name="videoUrl" id="videoUrl" type="url" placeholder="https://loom.com/share/..." className={fieldClass()} />
                        </Field>
                    </div>
                </div>
            </RevealAnimation>

            {/* Section 4 — Motivation */}
            <RevealAnimation delay={0.35}>
                <div className="rounded-[20px] overflow-hidden border border-stroke-2 dark:border-stroke-7">
                    <div className="flex items-center gap-3 px-6 py-5 bg-background-1 dark:bg-background-7 border-b border-stroke-2 dark:border-stroke-7">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-500/20 text-tagline-3 font-bold text-primary-500">4</span>
                        <h2 className="text-tagline-1 font-medium text-secondary dark:text-accent">Motivation</h2>
                    </div>
                    <div className="p-6 bg-white dark:bg-background-6">
                        <Field id="motivation" label="Why do you want to promote NativPost?" required error={errors.motivation} hint="Tell us how you plan to promote NativPost and why your audience would benefit from it. Minimum 30 characters.">
                            <textarea name="motivation" id="motivation" rows={5} placeholder="Describe your audience, how you plan to promote NativPost, and why this is a good fit..." className={`${fieldClass(errors.motivation)} resize-none leading-relaxed`} />
                        </Field>
                    </div>
                </div>
            </RevealAnimation>

            {/* Error message */}
            {status === 'error' && errorMsg && (
                <div className="rounded-[12px] border border-red-200 dark:border-red-800/40 bg-red-50 dark:bg-red-900/20 px-5 py-4">
                    <p className="text-tagline-2 text-red-700 dark:text-red-400">{errorMsg}</p>
                </div>
            )}

            {/* Submit */}
            <RevealAnimation delay={0.4}>
                <div className="rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <p className="text-tagline-3 text-secondary/50 dark:text-accent/50 max-w-[340px] leading-relaxed">
                        Applications are reviewed within 3 to 5 business days. If approved, you will receive your affiliate dashboard access by email.
                    </p>
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn btn-xl btn-primary shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        <span>{status === 'submitting' ? 'Submitting...' : 'Submit application'}</span>
                    </button>
                </div>
            </RevealAnimation>
        </form>
    );
}

function fieldClass(error?: string) {
    return `w-full rounded-[10px] border px-4 py-3 text-tagline-1 bg-background-2 dark:bg-background-8 text-secondary dark:text-accent placeholder:text-secondary/30 dark:placeholder:text-accent/30 outline-none transition-colors duration-200 focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-500/20 ${error
        ? 'border-red-400 dark:border-red-600'
        : 'border-stroke-2 dark:border-stroke-7 hover:border-stroke-3 dark:hover:border-stroke-6'
        }`;
}

function Field({
    id, label, required, hint, error, children, className = '',
}: {
    id: string;
    label: string;
    required?: boolean;
    hint?: string;
    error?: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor={id} className="text-tagline-3 font-medium text-secondary/70 dark:text-accent/70 uppercase tracking-wide">
                {label}{required && <span className="text-primary-500 ml-0.5">*</span>}
            </label>
            {children}
            {hint && !error && <p className="text-tagline-3 text-secondary/45 dark:text-accent/45 leading-relaxed">{hint}</p>}
            {error && <p className="text-tagline-3 text-red-500 dark:text-red-400">{error}</p>}
        </div>
    );
}