// ============================================================
// INTEGRATION PAGE — src/app/integration/page.tsx
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import { CheckIcon } from '@/icons';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integrations — NativPost | Connect All Your Social Platforms',
  description:
    'NativPost connects to Instagram, Facebook, LinkedIn, X/Twitter, TikTok, and more. Publish studio-crafted content across every platform from one dashboard.',
};

const platforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Posts, Stories, Reels, and Carousels — all from your NativPost dashboard.',
    features: [
      'Single image posts with on-brand graphics',
      'Carousel posts (multi-slide with consistent branding)',
      'Story format templates',
      'Reel descriptions and hashtag optimization',
      'Preview at correct Instagram dimensions',
    ],
    status: 'live',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Publish to your Facebook Pages with optimized formatting and scheduling.',
    features: [
      'Page post publishing',
      'Image and carousel support',
      'Engagement-optimized captions',
      'Scheduling at peak audience times',
      'Performance analytics pull',
    ],
    status: 'live',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Company pages and personal profiles — build thought leadership effortlessly.',
    features: [
      'Company page publishing',
      'Personal profile support',
      'B2B-optimized content formatting',
      'Article-style long posts',
      'Professional tone matching',
    ],
    status: 'live',
  },
  {
    id: 'twitter',
    name: 'X / Twitter',
    description: 'Posts and threads, crafted for engagement and timed for maximum reach.',
    features: [
      'Single post publishing',
      'Thread creation and scheduling',
      'Character-optimized captions',
      'Hashtag strategy for discoverability',
      'Engagement analytics',
    ],
    status: 'live',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    description: 'Short-form video descriptions and posting support for the fastest-growing platform.',
    features: [
      'Content posting via TikTok API',
      'Video description optimization',
      'Trending hashtag suggestions',
      'Manual posting fallback for API limits',
      'Performance tracking',
    ],
    status: 'live',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Status',
    description: 'Share content to WhatsApp Business Status — essential for African and Middle Eastern markets.',
    features: [
      'Business Status updates',
      'Visual content formatted for WhatsApp',
      'Manual integration workflow',
      'Future API support planned',
    ],
    status: 'coming-soon',
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Integrations</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2 mx-auto max-w-[800px]">
                One dashboard. <span className="text-primary-500">Every platform.</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                Connect your social accounts once and NativPost handles publishing across all platforms. Preview how your
                content looks on each platform before it goes live.
              </p>
            </RevealAnimation>
          </div>

          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={platform.id}>
                <div className="dark:bg-background-8 overflow-hidden rounded-[20px] bg-white">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 p-8 lg:p-10">
                      <div className="mb-4 flex items-center gap-3">
                        <h2 className="text-heading-5">{platform.name}</h2>
                        {platform.status === 'coming-soon' && (
                          <span className="bg-ns-yellow text-secondary rounded-full px-3 py-1 text-xs font-semibold">
                            Coming Soon
                          </span>
                        )}
                        {platform.status === 'live' && (
                          <span className="bg-ns-green text-secondary rounded-full px-3 py-1 text-xs font-semibold">
                            Live
                          </span>
                        )}
                      </div>
                      <p className="mb-6">{platform.description}</p>
                      <ul className="space-y-3">
                        {platform.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-3">
                            <span className="bg-primary-500/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                              <CheckIcon className="fill-primary-500" />
                            </span>
                            <span className="text-tagline-2 text-secondary/80 dark:text-accent/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Connect everything"
        badgeClass="!badge-cyan"
        ctaHeading="Publish to all your social platforms from one place"
        description="Start your 7-day free trial. Connect your accounts and see your first content batch in under 48 hours."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
