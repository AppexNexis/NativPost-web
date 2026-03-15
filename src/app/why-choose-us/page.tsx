// ============================================================
// WHY CHOOSE US PAGE — src/app/why-choose-us/page.tsx
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import NumberAnimation from '@/components/animation/NumberAnimation';
import CTA from '@/components/shared/cta/CTA';
import { CheckIcon } from '@/icons';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Why Choose NativPost — The Anti-Slop Alternative to Agencies & AI Tools',
  description:
    'NativPost sits in the sweet spot between expensive agencies and cheap AI tools. Agency-quality content at product pricing, with every piece human-refined.',
};

const competitors = [
  {
    name: 'Social Media Agencies',
    price: '$500–$5,000+/mo',
    creates: true,
    brandAligned: true,
    scheduling: true,
    antiSlop: false,
    affordable: false,
    fast: false,
  },
  {
    name: 'Buffer / Hootsuite',
    price: '$75–$200/mo',
    creates: false,
    brandAligned: false,
    scheduling: true,
    antiSlop: false,
    affordable: true,
    fast: true,
  },
  {
    name: 'Jasper / Copy.ai',
    price: '$39–$99/mo',
    creates: true,
    brandAligned: false,
    scheduling: false,
    antiSlop: false,
    affordable: true,
    fast: true,
  },
  {
    name: 'DIY (Owner does it)',
    price: 'Free (your time)',
    creates: true,
    brandAligned: true,
    scheduling: false,
    antiSlop: false,
    affordable: true,
    fast: false,
  },
  {
    name: 'NativPost',
    price: '$19–$99/mo',
    creates: true,
    brandAligned: true,
    scheduling: true,
    antiSlop: true,
    affordable: true,
    fast: true,
    highlight: true,
  },
];

const comparisonFeatures = [
  { key: 'creates', label: 'Creates content' },
  { key: 'brandAligned', label: 'Deeply brand-aligned' },
  { key: 'scheduling', label: 'Cross-platform scheduling' },
  { key: 'antiSlop', label: 'Anti-slop quality filter' },
  { key: 'affordable', label: 'SME-affordable' },
  { key: 'fast', label: 'Fast setup (<48hrs)' },
];

const Check = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <rect width={18} height={18} rx={9} className="fill-primary-500" />
    <path
      d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
      fill="white"
    />
  </svg>
);

const Cross = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-30">
    <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
    <path d="M12 6L6 12M6 6L12 12" className="stroke-secondary/40 dark:stroke-accent/40" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* Hero */}
      <section className="pt-[120px] pb-[60px] lg:pt-[170px] lg:pb-[80px]">
        <div className="main-container">
          <div className="mx-auto max-w-[800px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Why NativPost</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                The sweet spot between <span className="text-primary-500">cheap tools</span> and{' '}
                <span className="text-primary-500">expensive agencies</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[620px]">
                Nobody else offers product-priced, agency-quality, deeply brand-aligned content creation + scheduling at
                a price accessible to SMEs globally. We sit in the gap — and we are the anti-slop option in a world
                drowning in robotic content.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="main-container">
          <RevealAnimation delay={0.4}>
            <div className="overflow-x-auto">
              <div className="dark:bg-background-8 min-w-[800px] overflow-hidden rounded-[20px] bg-white">
                {/* Header row */}
                <div className="grid grid-cols-7 gap-0 border-b border-b-stroke-4 dark:border-b-stroke-8">
                  <div className="p-5" />
                  {competitors.map((comp) => (
                    <div
                      key={comp.name}
                      className={`p-5 text-center ${comp.highlight ? 'bg-primary-500/10' : ''}`}>
                      <p className={`text-tagline-2 font-medium ${comp.highlight ? 'text-primary-500' : 'text-secondary dark:text-accent'}`}>
                        {comp.name}
                      </p>
                      <p className="text-tagline-3 text-secondary/60 dark:text-accent/60 mt-1">{comp.price}</p>
                    </div>
                  ))}
                </div>
                {/* Feature rows */}
                {comparisonFeatures.map((feature) => (
                  <div key={feature.key} className="grid grid-cols-7 gap-0 border-b border-b-stroke-4 dark:border-b-stroke-8 last:border-b-0">
                    <div className="text-tagline-2 text-secondary dark:text-accent flex items-center p-5 font-medium">
                      {feature.label}
                    </div>
                    {competitors.map((comp) => (
                      <div
                        key={`${comp.name}-${feature.key}`}
                        className={`flex items-center justify-center p-5 ${comp.highlight ? 'bg-primary-500/5' : ''}`}>
                        {comp[feature.key as keyof typeof comp] ? <Check /> : <Cross />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Anti-slop positioning */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-20">
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">The anti-slop moment</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="mb-4">The world is tired of robotic content. We are the antidote.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <div className="space-y-4">
                  <p>
                    &ldquo;Slop&rdquo; was named 2025 Word of the Year by both Merriam-Webster and the American Dialect
                    Society. Mentions of AI slop grew 9x in 2025. 82% of sentiment around AI-generated content is
                    negative.
                  </p>
                  <p>
                    While competitors race to automate everything with visible AI, NativPost positions as the
                    human-quality alternative. Our technology is the engine, but the customer experience is: &ldquo;This
                    looks like my creative team made it.&rdquo;
                  </p>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.4}>
                <div className="bg-secondary dark:bg-background-9 space-y-6 rounded-[20px] p-8 lg:p-10">
                  {[
                    { stat: '9X', label: 'Increase in mentions of "AI slop" in 2025' },
                    { stat: '82%', label: 'Negative sentiment around AI-generated content' },
                    { stat: '90%', label: 'Of consumers want human-created media' },
                    { stat: '47%', label: 'Of Gen Z actively dislikes AI content' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-heading-5 text-primary-500 w-16 shrink-0 text-right">{item.stat}</span>
                      <p className="text-accent/80">{item.label}</p>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Make the switch"
        badgeClass="!badge-green"
        ctaHeading="Replace your agency or AI tool with NativPost"
        description="Start your 7-day free trial. See the quality difference for yourself."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
