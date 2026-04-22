import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import ServiceHero from '@/components/services/detail/ServiceHero';
import ServiceFeatureDetail from '@/components/services/detail/ServiceFeatureDetail';
import ServiceHowItWorks from '@/components/services/detail/ServiceHowItWorks';
import ServiceBenefits from '@/components/services/detail/ServiceBenefits';
import CTA from '@/components/shared/cta/CTA';
import {
    ApprovalDetailVisual,
    ApprovalWorkflowVisual,
    ApprovalBenefitsVisual,
} from '@/components/services/detail/visuals/ApprovalSchedulingVisuals';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Approval & Scheduling Dashboard — NativPost',
    description:
        'Preview, approve, edit, or reject posts before they go live. Bulk approve for speed. Schedule across all platforms at optimal times.',
};

const steps = [
    {
        number: '01',
        title: 'Content arrives in your queue',
        description:
            'After passing the anti-slop filter, posts appear in your calendar view — showing exactly how each will look on each platform before publishing.',
    },
    {
        number: '02',
        title: 'Review at your own pace',
        description:
            'Approve with one click, edit inline without leaving the dashboard, or reject with a note. Your feedback is logged and used to improve future content.',
    },
    {
        number: '03',
        title: 'Bulk approve to move fast',
        description:
            'When you trust the quality — and you will — bulk approve an entire week\'s content in seconds. The system handles the rest.',
    },
    {
        number: '04',
        title: 'Published at the right time',
        description:
            'Scheduled posts go live at platform-optimal times for your audience. Timezone handling is automatic across all connected channels.',
    },
];

const benefits = [
    { title: 'Nothing publishes without your sign-off', description: 'The human review layer is a feature, not a limitation. You stay in control of everything.' },
    { title: 'One dashboard for all platforms', description: 'Instagram, LinkedIn, X, Facebook — managed from a single calendar view. No tab-switching.' },
    { title: 'Edit inline, no round-trips', description: 'Make copy changes directly in the approval card. No separate editor, no re-export required.' },
    { title: 'Feedback improves the system', description: 'Every edit and rejection you make trains the system to produce better content for your brand.' },
];

export default function ApprovalSchedulingPage() {
    return (
        <main className="bg-background-1 dark:bg-background-6">
            <ServiceHero
                badge="Approval & Scheduling"
                headline="You stay in control. Always."
                subheadline="Nothing goes live without your approval."
                description="The approval dashboard gives you complete visibility and control over every post before it reaches your audience. Review, edit, approve, or reject — then let NativPost handle the scheduling and publishing automatically."
                visual={<ApprovalDetailVisual />}
                accentColor="blue"
            />
            <ServiceFeatureDetail
                badge="Dashboard capabilities"
                headline="Every post, every platform, one view."
                description="The approval dashboard is built around the way content teams actually work — fast review, clear previews, inline editing, and bulk actions when you're confident in the quality. It connects directly to your social accounts and publishes without any manual work on your end."
                bullets={[
                    'Calendar view showing upcoming content across all platforms',
                    'Preview posts exactly as they\'ll appear on each channel',
                    'One-click approve, inline edit, or reject with feedback notes',
                    'Bulk approve for entire weeks when quality is consistent',
                    'Notification system for pending approvals — email and in-app',
                ]}
                visual={<ApprovalWorkflowVisual />}
                imageRight={true}
            />
            <ServiceHowItWorks steps={steps} />
            <ServiceBenefits
                headline="Built for speed and control."
                benefits={benefits}
                visual={<ApprovalBenefitsVisual />}
            />
            <CTA
                className="dark:bg-background-6 bg-white"
                badgeClass="hidden"
                ctaHeading="Take back control of your"
                spanText="content calendar."
                description="Start your 7-day free trial. Your first week of content ready to approve in 48 hours."
                btnClass="hover:btn-secondary dark:hover:btn-accent"
                ctaBtnText="Start free trial"
            />
        </main>
    );
}