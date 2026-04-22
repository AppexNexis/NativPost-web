import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import ServiceHero from '@/components/services/detail/ServiceHero';
import ServiceFeatureDetail from '@/components/services/detail/ServiceFeatureDetail';
import ServiceHowItWorks from '@/components/services/detail/ServiceHowItWorks';
import ServiceBenefits from '@/components/services/detail/ServiceBenefits';
import CTA from '@/components/shared/cta/CTA';
import {
    BrandProfileDetailVisual,
    BrandProfileWorkflowVisual,
    BrandProfileBenefitsVisual,
} from '@/components/services/detail/visuals/BrandProfileVisuals';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Brand Profile Builder — NativPost',
    description:
        'Build a deep creative profile that captures your brand voice, visual identity, and audience — driving every piece of content NativPost produces.',
};

const steps = [
    {
        number: '01',
        title: 'Tell us about your brand',
        description:
            'Walk through a guided onboarding questionnaire covering your tone, personality, values, target audience, and the words you\'d never use.',
    },
    {
        number: '02',
        title: 'Upload your visual identity',
        description:
            'Provide your logo, brand colours, fonts, and style references. We turn them into a visual grammar that governs every graphic we produce.',
    },
    {
        number: '03',
        title: 'Set platform-specific rules',
        description:
            'Your LinkedIn voice and your Instagram voice are different. Define distinct tone settings for each channel right inside the profile.',
    },
    {
        number: '04',
        title: 'Content starts matching you',
        description:
            'From the first post, every caption and graphic is generated against your Brand Profile — not a generic template.',
    },
];

const benefits = [
    { title: 'Sounds like your team wrote it', description: 'Every post reflects your actual voice — not a watered-down AI approximation.' },
    { title: 'No brief needed per post', description: 'Because the Brand Profile carries the context, you never have to re-explain your brand.' },
    { title: 'Evolves as you grow', description: 'Update the profile at any time. New tone direction, new products, new audience — the system adapts.' },
    { title: 'Used across every service', description: 'The Brand Profile powers content creation, the anti-slop filter, visuals, and scheduling simultaneously.' },
];

export default function BrandProfilePage() {
    return (
        <main className="bg-background-1 dark:bg-background-6">
            <ServiceHero
                badge="Brand Profile Builder"
                headline="Content that sounds like your team wrote it."
                subheadline="Because it was designed around your team."
                description="NativPost builds a deep creative profile around your brand — voice, visuals, audience, anti-patterns. Every piece of content we produce is generated against this profile, not a generic prompt."
                visual={<BrandProfileDetailVisual />}
                accentColor="yellow"
            />
            <ServiceFeatureDetail
                badge="Deep brand understanding"
                headline="The creative DNA behind every post."
                description="Your Brand Profile is the engine under everything. It stores your tone sliders, vocabulary rules, forbidden phrases, visual preferences, and platform-specific voice settings — all in one structured document that drives every generation request."
                bullets={[
                    'Voice document: tone, personality, vocabulary, forbidden words',
                    'Visual identity kit: colours, typography, image style, mood board',
                    'Company knowledge base: mission, products, audience, industry',
                    'Anti-patterns: explicit things to never do or say',
                    'Platform-specific rules: different voice per channel',
                ]}
                visual={<BrandProfileWorkflowVisual />}
                imageRight={false}
            />
            <ServiceHowItWorks steps={steps} />
            <ServiceBenefits
                headline="Why Brand Profiles change everything."
                benefits={benefits}
                visual={<BrandProfileBenefitsVisual />}
            />
            <CTA
                className="dark:bg-background-6 bg-white"
                badgeClass="hidden"
                ctaHeading="Ready to build your"
                spanText="Brand Profile?"
                description="Start your 7-day free trial. We build your Brand Profile with you in the first session."
                btnClass="hover:btn-secondary dark:hover:btn-accent"
                ctaBtnText="Start free trial"
            />
        </main>
    );
}