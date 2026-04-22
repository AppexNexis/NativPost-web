import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import ServiceHero from '@/components/services/detail/ServiceHero';
import ServiceFeatureDetail from '@/components/services/detail/ServiceFeatureDetail';
import ServiceHowItWorks from '@/components/services/detail/ServiceHowItWorks';
import ServiceBenefits from '@/components/services/detail/ServiceBenefits';
import CTA from '@/components/shared/cta/CTA';
import {
    ContentEngineDetailVisual,
    ContentEngineWorkflowVisual,
    ContentEngineBenefitsVisual,
} from '@/components/services/detail/visuals/ContentEngineVisuals';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Content Creation Engine — NativPost',
    description:
        'Studio-quality graphics and brand-aligned captions generated automatically for every platform. Never generic, always on-brand.',
};

const steps = [
    {
        number: '01',
        title: 'Content calendar is generated',
        description:
            'Based on your Brand Profile, industry, and platform best practices, NativPost produces a full content calendar — topics, formats, and posting cadence.',
    },
    {
        number: '02',
        title: 'Captions are crafted per platform',
        description:
            'Each caption is written to the exact length, tone, and style required for the platform — LinkedIn is not Instagram, and the engine knows the difference.',
    },
    {
        number: '03',
        title: 'Graphics are built from your brand',
        description:
            'On-brand visuals are generated using your colours, fonts, and style preferences. Carousels, single images, story formats — all consistent.',
    },
    {
        number: '04',
        title: 'Multiple variants are offered',
        description:
            'For every post, you receive multiple creative options. Pick the one that feels right, or mix and match elements across variants.',
    },
];

const benefits = [
    { title: 'Hours saved every week', description: 'What used to take a creative team days is ready in minutes — without the quality drop.' },
    { title: 'Always on-brand', description: 'Because every post is generated against your Brand Profile, nothing generic ever slips through.' },
    { title: 'Platform-native output', description: 'Caption length, hashtag strategy, image ratio — everything is optimised per platform automatically.' },
    { title: 'No brief required', description: 'The content calendar and Brand Profile carry all the context. Just review and approve.' },
];

export default function ContentEnginePage() {
    return (
        <main className="bg-background-1 dark:bg-background-6">
            <ServiceHero
                badge="Content Creation Engine"
                headline="Studio-quality content. Generated, not templated."
                subheadline="For every platform. Every week."
                description="NativPost produces branded graphics and platform-optimised captions automatically — no briefs, no back-and-forth. Just content that looks like your creative team spent the afternoon on it."
                visual={<ContentEngineDetailVisual />}
                accentColor="green"
            />
            <ServiceFeatureDetail
                badge="What gets created"
                headline="Graphics and copy, built for every channel."
                description="The content engine produces two things for every post: a visual and a caption. Both are generated from your Brand Profile and optimised for the specific platform they'll appear on. Nothing generic, nothing off-brand."
                bullets={[
                    'Platform-optimised captions — correct length, tone, and hashtag strategy per channel',
                    'On-brand graphics — your colours, fonts, and visual style in every image',
                    'Carousel posts, single images, and story formats',
                    'Full content calendar with topic rotation and posting cadence',
                    'Multiple variants per post so you always have options',
                ]}
                visual={<ContentEngineWorkflowVisual />}
                imageRight={true}
            />
            <ServiceHowItWorks steps={steps} />
            <ServiceBenefits
                headline="What the engine replaces."
                benefits={benefits}
                visual={<ContentEngineBenefitsVisual />}
            />
            <CTA
                className="dark:bg-background-6 bg-white"
                badgeClass="hidden"
                ctaHeading="See the content engine work for"
                spanText="your brand."
                description="Start your 7-day free trial. Your first content batch is ready in under 48 hours."
                btnClass="hover:btn-secondary dark:hover:btn-accent"
                ctaBtnText="Start free trial"
            />
        </main>
    );
}