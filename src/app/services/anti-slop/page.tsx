import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import ServiceHero from '@/components/services/detail/ServiceHero';
import ServiceFeatureDetail from '@/components/services/detail/ServiceFeatureDetail';
import ServiceHowItWorks from '@/components/services/detail/ServiceHowItWorks';
import ServiceBenefits from '@/components/services/detail/ServiceBenefits';
import CTA from '@/components/shared/cta/CTA';
import {
    AntiSlopDetailVisual,
    AntiSlopWorkflowVisual,
    AntiSlopBenefitsVisual,
} from '@/components/services/detail/visuals/AntiSlopVisuals';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Anti-Slop Quality Filter — NativPost',
    description:
        'Every post is scanned before it reaches you. Robotic patterns, overused clichés, and generic AI phrases are automatically caught and rejected.',
};

const steps = [
    {
        number: '01',
        title: 'Content is drafted',
        description:
            'The content engine produces a caption variant using your Brand Profile as the creative brief.',
    },
    {
        number: '02',
        title: 'Anti-slop filter runs automatically',
        description:
            'A dedicated quality gate scans every draft for known AI tells — em-dashes, motivational clichés, unnatural enthusiasm, "leverage", "synergy", and dozens more.',
    },
    {
        number: '03',
        title: 'Flagged content is regenerated',
        description:
            'Any draft that triggers the filter is automatically rejected and a new variant is generated. This loop runs silently before you ever see the content.',
    },
    {
        number: '04',
        title: 'Clean content reaches your queue',
        description:
            'Only content that passes every quality check enters your approval queue — saving your review time for creative decisions, not quality control.',
    },
];

const benefits = [
    { title: 'Your audience never sees robot copy', description: 'The filter catches generic patterns before they reach your feed — protecting brand trust at scale.' },
    { title: 'No manual quality checking needed', description: 'The system handles the first pass. You focus on approving and scheduling, not editing out AI tells.' },
    { title: 'Improves over time', description: 'Client edits and rejection data feed back into the system, making the filter smarter with every cycle.' },
    { title: 'Configurable per brand', description: 'Your Brand Profile defines additional anti-patterns specific to your brand — words you never use, phrases that feel off.' },
];

export default function AntiSlopPage() {
    return (
        <main className="bg-background-1 dark:bg-background-6">
            <ServiceHero
                badge="Anti-Slop Quality Filter"
                headline="The antidote to robotic content."
                subheadline="Every post passes. Or gets rewritten."
                description="In a world drowning in obviously AI-generated content, the anti-slop filter is your quality guarantee. It scans every draft for the patterns that make content feel machine-made — and rejects anything that doesn't pass."
                visual={<AntiSlopDetailVisual />}
                accentColor="red"
            />
            <ServiceFeatureDetail
                badge="How the filter works"
                headline="A dedicated quality gate before every post."
                description="The anti-slop filter is a pattern-detection system that runs on every piece of content before it reaches your approval queue. It looks for the specific linguistic signatures that make AI content feel hollow — and automatically triggers regeneration when it finds them."
                bullets={[
                    'Scans for excessive em dashes and unnatural punctuation patterns',
                    "Catches 'in today's fast-paced world' style openings",
                    'Flags generic motivational language and corporate clichés',
                    'Detects overuse of words like "leverage", "synergy", and "game-changer"',
                    'Checks for unnatural enthusiasm and hollow filler phrases',
                ]}
                visual={<AntiSlopWorkflowVisual />}
                imageRight={false}
            />
            <ServiceHowItWorks steps={steps} />
            <ServiceBenefits
                headline="Why the filter matters."
                benefits={benefits}
                visual={<AntiSlopBenefitsVisual />}
            />
            <CTA
                className="dark:bg-background-6 bg-white"
                badgeClass="hidden"
                ctaHeading="Content your audience can't tell"
                spanText="was automated."
                description="Start your 7-day free trial. See the anti-slop filter in action from day one."
                btnClass="hover:btn-secondary dark:hover:btn-accent"
                ctaBtnText="Start free trial"
            />
        </main>
    );
}