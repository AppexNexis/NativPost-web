// ============================================================
// CASE STUDY PAGE — src/app/case-study/page.tsx
// (Also usable as src/app/success-stories/page.tsx)
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import NumberAnimation from '@/components/animation/NumberAnimation';
import CTA from '@/components/shared/cta/CTA';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Studies — NativPost | Real Results for Real Brands',
  description:
    'See how businesses worldwide use NativPost to grow their social media presence with studio-crafted content. Before and after results from real clients.',
};

const caseStudies = [
  {
    id: 'restaurant-lagos',
    badge: 'Restaurant',
    region: 'Lagos, Nigeria',
    title: 'How a Lagos restaurant doubled their Instagram engagement in 60 days',
    challenge:
      'A popular Lagos restaurant was spending 2 hours daily creating social media content. Posts were inconsistent, amateur-looking, and engagement was declining steadily.',
    solution:
      'NativPost built a Brand Profile capturing their vibrant food photography style, casual-warm voice, and local audience preferences. We generated a content calendar with carousel posts, story templates, and platform-optimized captions.',
    results: [
      { metric: '2X', label: 'Instagram engagement increase' },
      { metric: '15hrs', label: 'Saved per week on content creation' },
      { metric: '85%', label: 'First-pass content approval rate' },
    ],
    quote: 'NativPost finally made our social media look like we hired an agency, but at a fraction of the cost.',
  },
  {
    id: 'saas-london',
    badge: 'SaaS Startup',
    region: 'London, UK',
    title: 'A London SaaS startup grew LinkedIn followers by 340% in 3 months',
    challenge:
      'A B2B SaaS startup had a founder doing all social media manually. Content was sporadic, off-brand, and LinkedIn — their most important channel — was completely neglected.',
    solution:
      'We created a detailed Brand Profile with B2B-optimized voice settings, thought leadership content angles, and LinkedIn-specific formatting rules. The anti-slop filter ensured no generic "in today\'s fast-paced world" content ever made it through.',
    results: [
      { metric: '340%', label: 'LinkedIn follower growth' },
      { metric: '4X', label: 'More inbound leads from social' },
      { metric: '0hrs', label: 'Founder time spent on content' },
    ],
    quote:
      'I went from spending hours on LinkedIn posts to zero. NativPost handles everything and the quality is better than what I was producing myself.',
  },
  {
    id: 'agency-newyork',
    badge: 'Marketing Agency',
    region: 'New York, USA',
    title: 'A New York agency scaled to 15 clients without hiring a single content creator',
    challenge:
      'A boutique marketing agency was turning away clients because they did not have capacity to produce content for more accounts. Hiring more staff was too expensive.',
    solution:
      "NativPost's multi-brand management allowed them to create separate Brand Profiles for each client. The approval dashboard let their account managers review and approve content across all clients from one interface.",
    results: [
      { metric: '15', label: 'Clients managed simultaneously' },
      { metric: '$0', label: 'Additional hiring costs' },
      { metric: '3X', label: 'Revenue increase' },
    ],
    quote:
      "NativPost became our secret weapon. Our clients think we have a huge content team. We don't — we have NativPost.",
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[60px] lg:pt-[170px] lg:pb-[80px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Case studies</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2 mx-auto max-w-[800px]">
                Real results for <span className="text-primary-500">real brands</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                See how businesses worldwide use NativPost to transform their social media presence — saving hours every
                week while growing engagement and followers.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Case study cards */}
      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          className={`py-[60px] lg:py-[80px] ${index % 2 === 0 ? 'bg-background-1 dark:bg-background-6' : ''}`}>
          <div className="main-container">
            <RevealAnimation delay={0.2}>
              <div className="mx-auto max-w-[900px]">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="badge badge-cyan">{study.badge}</span>
                  <span className="text-tagline-2 text-secondary/60 dark:text-accent/60">{study.region}</span>
                </div>
                <h2 className="text-heading-4 mb-8">{study.title}</h2>

                <div className="mb-10 grid grid-cols-12 gap-8">
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="text-tagline-1 text-secondary dark:text-accent mb-3 font-medium">The Challenge</h3>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="text-tagline-1 text-secondary dark:text-accent mb-3 font-medium">Our Solution</h3>
                    <p>{study.solution}</p>
                  </div>
                </div>

                {/* Results stats */}
                <div className="bg-secondary dark:bg-background-9 mb-10 flex flex-col rounded-[20px] px-6 py-6 md:flex-row md:px-0">
                  {study.results.map((result, rIndex) => (
                    <div
                      key={rIndex}
                      className={`flex-1 space-y-2 py-4 text-center ${
                        rIndex < study.results.length - 1
                          ? 'border-b-accent/20 md:border-r-accent/20 border-b md:border-r md:border-b-0'
                          : ''
                      }`}>
                      <h3 className="text-heading-5 font-normal text-white">{result.metric}</h3>
                      <p className="text-accent/60">{result.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="dark:bg-background-8 rounded-[16px] bg-white p-8">
                  <p className="text-tagline-1 text-secondary dark:text-accent mb-4 italic">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </RevealAnimation>
          </div>
        </section>
      ))}

      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Your turn"
        badgeClass="!badge-green"
        ctaHeading="Ready to become our next case study?"
        description="Start your 7-day free trial. We will build your Brand Profile and deliver your first content batch in under 48 hours."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
