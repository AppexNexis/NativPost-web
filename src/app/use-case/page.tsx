// ============================================================
// USE CASE PAGE — src/app/use-case/page.tsx
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Use Cases — NativPost | Social Content for Every Industry',
  description:
    'See how NativPost serves restaurants, SaaS companies, e-commerce brands, agencies, professional services, fitness studios, real estate firms, and more.',
};

const useCases = [
  {
    id: 'restaurants',
    icon: 'ns-shape-8',
    title: 'Restaurants & Food Businesses',
    description:
      'Showcase your dishes with mouthwatering visuals, share daily specials, promote events, and keep your audience engaged with behind-the-scenes content, all on brand and on schedule.',
    features: [
      'Menu highlights & daily specials',
      'Behind-the-scenes kitchen content',
      'Event promotions & seasonal campaigns',
      'Customer review spotlights',
    ],
  },
  {
    id: 'saas',
    icon: 'ns-shape-3',
    title: 'SaaS & Technology Companies',
    description:
      'Build thought leadership on LinkedIn, share product updates, create educational content, and maintain a consistent presence across channels, without your founder spending hours on content.',
    features: [
      'Thought leadership posts',
      'Product update announcements',
      'Educational content & tips',
      'Founder personal branding',
    ],
  },
  {
    id: 'ecommerce',
    icon: 'ns-shape-12',
    title: 'E-Commerce & Retail Brands',
    description:
      'Showcase products with scroll-stopping visuals, run promotional campaigns, share user-generated content, and drive traffic to your store, all with content that matches your brand perfectly.',
    features: [
      'Product showcase carousels',
      'Sale & promotion campaigns',
      'User-generated content curation',
      'Seasonal content calendars',
    ],
  },
  {
    id: 'agencies',
    icon: 'ns-shape-21',
    title: 'Marketing Agencies',
    description:
      'Scale your client content without hiring more staff. Manage multiple Brand Profiles, use the approval dashboard across all clients, and offer white-label content as a service.',
    features: [
      'Multi-brand management',
      'Client approval workflows',
      'White-label content delivery',
      'Scalable without hiring',
    ],
  },
  {
    id: 'professional',
    icon: 'ns-shape-9',
    title: 'Professional Services',
    description:
      'Consulting firms, law offices, accounting practices, and financial advisors, build trust and authority with consistent, professional social media content that reflects your expertise.',
    features: [
      'Industry expertise posts',
      'Client success highlights',
      'Professional tone management',
      'LinkedIn-optimized content',
    ],
  },
  {
    id: 'fitness',
    icon: 'ns-shape-46',
    title: 'Fitness & Wellness',
    description:
      'Keep your community motivated with workout tips, transformation stories, class schedules, and nutrition advice, all with visuals that match your brand energy.',
    features: [
      'Workout tips & routines',
      'Transformation spotlights',
      'Class schedule promotions',
      'Motivational content (no generic clichés)',
    ],
  },
  {
    id: 'realestate',
    icon: 'ns-shape-47',
    title: 'Real Estate',
    description:
      'Showcase properties with beautiful visuals, share market insights, highlight neighborhood features, and build your personal brand as a trusted agent, all consistently.',
    features: [
      'Property listing showcases',
      'Market insight posts',
      'Neighborhood spotlight content',
      'Agent personal branding',
    ],
  },
  {
    id: 'startups',
    icon: 'ns-shape-8',
    title: 'Startups & Solopreneurs',
    description:
      'You have a product to build, let NativPost handle your social presence. Consistent posting, professional content, and growing engagement without stealing hours from your core work.',
    features: [
      'Build-in-public content',
      'Launch announcements',
      'Consistent brand presence',
      'Founder time reclaimed',
    ],
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Use cases</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2 mx-auto max-w-[800px]">
                Studio-crafted content for <span className="text-primary-500">every industry</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                NativPost adapts to your industry with specialized Brand Profiles. Whether you are a restaurant in Lagos
                or a SaaS startup in London, we create content that speaks your language.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {useCases.map((useCase, index) => (
              <RevealAnimation delay={0.4 + index * 0.08} key={useCase.id}>
                <div className="col-span-12 md:col-span-6 xl:col-span-3">
                  <div className="dark:bg-background-8 group h-full space-y-5 rounded-[20px] bg-white p-8 transition-all duration-500 hover:-translate-y-2">
                    <span className={`${useCase.icon} text-secondary dark:text-accent text-[40px]`} />
                    <h3 className="text-heading-6">{useCase.title}</h3>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-tagline-2 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={9}
                            viewBox="0 0 15 11"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M13.1875 1.79102L5.3125 9.66567L1.375 5.72852"
                              className="stroke-primary-500"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-secondary/80 dark:text-accent/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Your industry, your voice"
        badgeClass="!badge-cyan"
        ctaHeading="See NativPost work for your specific business"
        description="Start your 7-day free trial. We will tailor your Brand Profile to your industry, audience, and goals."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
