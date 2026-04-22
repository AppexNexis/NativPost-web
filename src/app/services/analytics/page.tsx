import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import ServiceHero from '@/components/services/detail/ServiceHero';
import ServiceFeatureDetail from '@/components/services/detail/ServiceFeatureDetail';
import ServiceHowItWorks from '@/components/services/detail/ServiceHowItWorks';
import ServiceBenefits from '@/components/services/detail/ServiceBenefits';
import CTA from '@/components/shared/cta/CTA';
import {
    AnalyticsDetailVisual,
    AnalyticsWorkflowVisual,
    AnalyticsBenefitsVisual,
} from '@/components/services/detail/visuals/AnalyticsVisuals';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Performance Analytics — NativPost',
    description:
        'Track reach, engagement, and growth. See what content works best and let the data feed back into future content generation.',
};

const steps = [
    {
        number: '01',
        title: 'Platform data is pulled automatically',
        description:
            'Once your social accounts are connected, NativPost pulls engagement metrics from every published post — reach, clicks, saves, shares, and follower growth.',
    },
    {
        number: '02',
        title: 'Performance patterns are identified',
        description:
            'The analytics layer surfaces which content types, topics, and formats drive the most engagement for your specific audience — not industry averages.',
    },
    {
        number: '03',
        title: 'Reports are generated monthly',
        description:
            'Exportable PDF reports cover month-over-month growth, top-performing content, and platform-by-platform breakdowns — ready to share with stakeholders.',
    },
    {
        number: '04',
        title: 'Data feeds back into content',
        description:
            'Performance signals from your analytics feed directly back into the content engine, improving the quality and relevance of future posts over time.',
    },
];

const benefits = [
    { title: 'Know what actually works', description: 'Stop guessing what resonates. The analytics layer shows you exactly which content drives real engagement.' },
    { title: 'Self-improving content system', description: 'Performance data feeds back into the engine — the longer you use NativPost, the better the output.' },
    { title: 'Reports you can share', description: 'Monthly PDF exports make it easy to report results to clients, leadership, or stakeholders.' },
    { title: 'Optimal posting times', description: 'Analytics identifies when your audience is most active and adjusts the scheduling automatically.' },
];

export default function AnalyticsPage() {
    return (
        <main className="bg-background-1 dark:bg-background-6">
            <ServiceHero
                badge="Performance Analytics"
                headline="See what's working. Build on it."
                subheadline="Data that feeds back into every future post."
                description="NativPost doesn't just publish content — it learns from it. The analytics dashboard tracks performance across every platform and feeds those signals back into the content engine, making every future post smarter."
                visual={<AnalyticsDetailVisual />}
                accentColor="purple"
            />
            <ServiceFeatureDetail
                badge="What gets tracked"
                headline="Every metric that matters, across every channel."
                description="The analytics dashboard pulls data from all connected platforms and presents it in one view — no spreadsheets, no copy-pasting from five different apps. From post-level detail to month-over-month trends, everything is in one place."
                bullets={[
                    'Reach, impressions, and engagement rate per post',
                    'Follower growth tracking across all platforms',
                    'Best-performing content types, topics, and formats',
                    'Optimal posting time analysis per platform',
                    'Exportable monthly reports with stakeholder-ready formatting',
                ]}
                visual={<AnalyticsWorkflowVisual />}
                imageRight={false}
            />
            <ServiceHowItWorks steps={steps} />
            <ServiceBenefits
                headline="Analytics that do more than track."
                benefits={benefits}
                visual={<AnalyticsBenefitsVisual />}
            />
            <CTA
                className="dark:bg-background-6 bg-white"
                badgeClass="hidden"
                ctaHeading="Start building content that"
                spanText="actually performs."
                description="Start your 7-day free trial. Analytics are live from your first published post."
                btnClass="hover:btn-secondary dark:hover:btn-accent"
                ctaBtnText="Start free trial"
            />
        </main>
    );
}