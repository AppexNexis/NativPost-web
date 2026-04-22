import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import ServiceHero from '@/components/services/detail/ServiceHero';
import ServiceFeatureDetail from '@/components/services/detail/ServiceFeatureDetail';
import ServiceHowItWorks from '@/components/services/detail/ServiceHowItWorks';
import ServiceBenefits from '@/components/services/detail/ServiceBenefits';
import CTA from '@/components/shared/cta/CTA';
import {
    CrossPlatformDetailVisual,
    CrossPlatformWorkflowVisual,
    CrossPlatformBenefitsVisual,
} from '@/components/services/detail/visuals/CrossPlatformVisuals';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Cross-Platform Publishing — NativPost',
    description:
        'One approval, everywhere live. Instagram, LinkedIn, X, and Facebook — all connected and publishing automatically on your schedule.',
};

const steps = [
    {
        number: '01',
        title: 'Connect your social accounts',
        description:
            'Link your Instagram, LinkedIn, X, and Facebook accounts through a secure OAuth flow. Takes under five minutes and only needs to be done once.',
    },
    {
        number: '02',
        title: 'Content is formatted per platform',
        description:
            'Every approved post is automatically reformatted for each channel — correct image ratios, caption lengths, hashtag strategies, and posting specifications.',
    },
    {
        number: '03',
        title: 'One approval triggers all channels',
        description:
            'Approve a post once and it publishes everywhere simultaneously — or on individual schedules if you prefer staggered timing across platforms.',
    },
    {
        number: '04',
        title: 'Publishing is confirmed and logged',
        description:
            'Every published post is logged with timestamp, platform, and performance tracking ready. No manual record-keeping required.',
    },
];

const benefits = [
    { title: 'Approve once, publish everywhere', description: 'One action in the dashboard triggers publishing across all connected platforms simultaneously.' },
    { title: 'Format-perfect on every channel', description: 'Images, captions, and hashtags are automatically adapted to each platform\'s specifications.' },
    { title: 'Timezone-aware scheduling', description: 'Set a posting time and NativPost handles timezone conversion for your global audience automatically.' },
    { title: 'Always connected', description: 'Direct API integrations with Meta, LinkedIn, and X — no third-party middleware, no unexpected downtime.' },
];

export default function CrossPlatformPage() {
    return (
        <main className="bg-background-1 dark:bg-background-6">
            <ServiceHero
                badge="Cross-Platform Publishing"
                headline="One approval. Every platform. Done."
                subheadline="Instagram, LinkedIn, X, Facebook — all at once."
                description="Stop copying posts between apps and reformatting for each platform. NativPost connects directly to your social accounts and handles publishing automatically — the right format, the right time, everywhere at once."
                visual={<CrossPlatformDetailVisual />}
                accentColor="teal"
            />
            <ServiceFeatureDetail
                badge="Platform integrations"
                headline="Direct connections. No middleware."
                description="NativPost integrates directly with each platform's official API — Meta Graph API for Instagram and Facebook, X API v2, and LinkedIn's Content Posting API. That means reliable publishing, accurate analytics, and no dependency on third-party scheduling tools that can break without warning."
                bullets={[
                    'Instagram — posts, stories, reels, and carousels',
                    'Facebook — page posts and scheduled content',
                    'LinkedIn — company pages and personal profiles',
                    'X / Twitter — posts and threads',
                    'Automatic image resizing and caption adaptation per platform',
                ]}
                visual={<CrossPlatformWorkflowVisual />}
                imageRight={true}
            />
            <ServiceHowItWorks steps={steps} />
            <ServiceBenefits
                headline="Publishing should be invisible."
                benefits={benefits}
                visual={<CrossPlatformBenefitsVisual />}
            />
            <CTA
                className="dark:bg-background-6 bg-white"
                badgeClass="hidden"
                ctaHeading="Connect your channels and let"
                spanText="NativPost publish."
                description="Start your 7-day free trial. All platforms connected and live from day one."
                btnClass="hover:btn-secondary dark:hover:btn-accent"
                ctaBtnText="Start free trial"
            />
        </main>
    );
}