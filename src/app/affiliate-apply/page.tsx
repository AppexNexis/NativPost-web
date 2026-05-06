import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import AffiliateApplyClient from './AffiliateApplyClient';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Apply to Become a NativPost Affiliate',
    description:
        'Apply to join the NativPost affiliate program. We review all applications before granting access to ensure a quality partner network.',
    robots: { index: false, follow: false },
};

export default function AffiliateApplyPage() {
    return (
        <main className="min-h-screen bg-background-3 dark:bg-background-7 pt-[100px] pb-[60px] md:pt-[120px] md:pb-[80px]">
            <div className="main-container max-w-[860px]">

                {/* Back link */}
                <RevealAnimation delay={0.1}>
                    <div className="mb-8">
                        <Link
                            href="/affiliates"
                            className="inline-flex items-center gap-2 text-tagline-3 text-secondary/50 dark:text-accent/50 hover:text-primary-500 transition-colors duration-200"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            Affiliate program
                        </Link>
                    </div>
                </RevealAnimation>

                {/* Page header */}
                <div className="mb-10 space-y-3">
                    <RevealAnimation delay={0.15}>
                        <span className="badge badge-primary">Application form</span>
                    </RevealAnimation>
                    <RevealAnimation delay={0.2}>
                        <h1 className="text-heading-3 md:text-heading-2 font-medium">Apply to become a NativPost affiliate</h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.25}>
                        <p className="max-w-[580px] text-tagline-1 text-secondary/60 dark:text-accent/60 leading-relaxed">
                            We review every application before granting access to the affiliate program. This ensures our partner network maintains quality and that affiliates are genuinely positioned to promote NativPost well.
                        </p>
                    </RevealAnimation>

                    {/* Key terms reminder */}
                    <RevealAnimation delay={0.3}>
                        <div className="mt-5 flex flex-wrap gap-3">
                            {[
                                { label: 'Commission only', desc: 'No salary or retainer' },
                                { label: '30% recurring', desc: 'On every renewal' },
                                { label: '3 to 5 day review', desc: 'We read every application' },
                            ].map((term) => (
                                <div key={term.label} className="inline-flex items-center gap-2 rounded-full border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 px-4 py-2">
                                    <span className="text-tagline-3 font-medium text-secondary dark:text-accent">{term.label}</span>
                                    <span className="text-tagline-3 text-secondary/40 dark:text-accent/40">{term.desc}</span>
                                </div>
                            ))}
                        </div>
                    </RevealAnimation>
                </div>

                {/* Form */}
                <AffiliateApplyClient />

            </div>
        </main>
    );
}