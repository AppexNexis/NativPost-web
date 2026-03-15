// ============================================================
// ABOUT PAGE — src/app/about/page.tsx
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import NumberAnimation from '@/components/animation/NumberAnimation';
import CTA from '@/components/shared/cta/CTA';
import { CheckIcon } from '@/icons';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About — NativPost by AppexNexis | Our Story & Mission',
  description:
    'NativPost is a product of AppexNexis LTD. We build studio-crafted social media content for businesses worldwide, the antidote to generic, robotic content.',
};

const values = [
  {
    id: 'quality-first',
    icon: 'ns-shape-8',
    title: 'Quality over quantity',
    description:
      'Every piece of content passes through our anti-slop filter and human review. We would rather publish 20 perfect posts than 100 mediocre ones.',
  },
  {
    id: 'brand-native',
    icon: 'ns-shape-9',
    title: 'Brand-native always',
    description:
      'Your content should sound like your creative team made it. Our ystem ensures every post is deeply aligned with your voice and visual identity.',
  },
  {
    id: 'global-local',
    icon: 'ns-shape-12',
    title: 'Global product, local understanding',
    description:
      'Built for businesses from Lagos to London to Los Angeles. We understand that great content looks different in every market, and we adapt accordingly.',
  },
  {
    id: 'transparency',
    icon: 'ns-shape-21',
    title: 'Radical transparency',
    description:
      'No hidden fees, no contracts, no surprises. You see every piece of content before it publishes. You control the approval process. Your brand, your rules.',
  },
];

const milestones = [
  {
    id: 'founding',
    title: 'AppexNexis LTD founded',
    description: 'Digital solutions company established, serving businesses with web development and digital strategy.',
  },
  {
    id: 'insight',
    title: 'The insight',
    description:
      'We noticed every client struggling with the same problem: creating consistent, quality social media content without breaking the bank.',
  },
  {
    id: 'anti-slop',
    title: 'The anti-slop moment',
    description:
      '"Slop" becomes Merriam-Webster\'s 2025 Word of the Year. 90% of consumers want human-created media. We saw the opportunity.',
  },
  {
    id: 'nativpost',
    title: 'NativPost is born',
    description:
      'We built the product the market was begging for, agency-quality content at product pricing, with every piece human-refined before publishing.',
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* Hero */}
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[100px]">
        <div className="main-container">
          <div className="mx-auto max-w-[800px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">About NativPost</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                We don&apos;t sell technology. We sell a <span className="text-primary-500">creative partner.</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[620px]">
                NativPost is a product of{' '}
                <Link href="https://www.appexnexis.site/" target="_blank" className="text-primary-500 underline">
                  AppexNexis LTD
                </Link>
                . We build studio-crafted social media content for businesses worldwide, the global antidote to generic,
                robotic content that destroys trust and engagement.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-[50px] lg:py-[80px]">
        <div className="main-container">
          <RevealAnimation delay={0.4}>
            <div className="bg-secondary dark:bg-background-9 flex flex-col rounded-[20px] px-6 py-6 md:flex-row md:px-0">
              <div className="border-b-accent/20 border-r-accent/20 flex-1 space-y-2 border-b py-6 text-center md:border-r md:border-b-0">
                <h3 className="text-heading-4 font-normal text-white">$29.93B</h3>
                <p className="text-accent/60">Global social media management market</p>
              </div>
              <div className="border-b-accent/20 border-r-accent/20 flex-1 space-y-2 border-b py-6 text-center md:border-r md:border-b-0">
                <h3 className="text-heading-4 font-normal text-white">
                  <NumberAnimation number={90} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5} />%
                </h3>
                <p className="text-accent/60">Of consumers prefer human-created content</p>
              </div>
              <div className="flex-1 space-y-2 py-6 text-center">
                <h3 className="text-heading-4 font-normal text-white">
                  <NumberAnimation number={47} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5} />%
                </h3>
                <p className="text-accent/60">Of Gen Z actively dislikes AI-generated content</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* The Problem & Our Solution */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-20">
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">The problem</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="mb-4">Every business needs social media. Most are trapped.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <div className="space-y-4">
                  <p>
                    Businesses everywhere are stuck between two bad options: expensive agencies ($500–$5,000+/month)
                    that deliver inconsistent results, and cheap automation tools that produce obviously robotic,
                    trust-destroying content.
                  </p>
                  <p>
                    The daily grind of creating fresh, on-brand content for Instagram, LinkedIn, X, Facebook, and TikTok
                    is exhausting. Business owners waste 1–2 hours daily on content that still looks amateur. Algorithm
                    reach dies. Engagement drops. Growth stalls.
                  </p>
                  <p className="text-secondary dark:text-accent font-medium">
                    42% of small businesses still rely on manual or disconnected tools. The market is massive, but
                    existing solutions either cost too much or produce too little quality.
                  </p>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-5">Our solution</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="mb-4">
                  A digital creative studio that <span className="text-primary-500">actually works.</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <div className="space-y-4">
                  <p>
                    NativPost sits in the sweet spot between cheap tools and expensive agencies. We deliver
                    agency-quality, deeply brand-aligned content creation + scheduling at a price accessible to SMEs
                    globally.
                  </p>
                  <p>
                    Every piece of content is built from your personalized Brand Profile, filtered through our anti-slop
                    quality gate, and refined by human eyes before it ever reaches your audience.
                  </p>
                  <p className="text-secondary dark:text-accent font-medium">
                    The technology is the engine, but the promise is content so good, nobody will ever wonder if a
                    machine made it.
                  </p>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Our values</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[600px]">What we believe</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {values.map((value, index) => (
              <RevealAnimation delay={0.3 + index * 0.1} key={value.id}>
                <div className="col-span-12 md:col-span-6">
                  <div className="dark:bg-background-8 space-y-4 rounded-[20px] bg-white p-8">
                    <span className={`${value.icon} text-secondary dark:text-accent text-[40px]`} />
                    <h3 className="text-heading-6">{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Our journey</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>How NativPost came to be</h2>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[700px] space-y-6">
            {milestones.map((milestone, index) => (
              <RevealAnimation delay={0.3 + index * 0.15} key={milestone.id}>
                <div className="bg-background-3 dark:bg-background-7 flex items-start gap-5 rounded-[20px] px-8 py-6">
                  <div
                    className={`text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold ${
                      index === 0
                        ? 'bg-ns-yellow'
                        : index === 1
                          ? 'bg-ns-green'
                          : index === 2
                            ? 'bg-ns-cyan'
                            : 'bg-ns-red'
                    }`}>
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg font-medium">{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-[80px]">
        <RevealAnimation delay={0.2}>
          <div className="main-container">
            <div className="relative z-10">
              <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
                <Image src={aboutBg} alt="NativPost mission" className="h-full w-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-5 px-6 py-14 max-lg:grid-cols-1 max-sm:gap-10 lg:px-11">
                <div className="max-w-[500px]">
                  <h2 className="text-accent sm:text-heading-5 text-heading-6 mb-4">
                    We never use the word &quot;AI&quot; in our branding. We are a digital creative studio, powered by
                    smart technology.
                  </h2>
                  <p className="text-accent/60 mb-8">The technology is invisible. The quality is undeniable.</p>
                  <Link
                    href="/pricing"
                    className="btn btn-primary btn-accent dark:btn-dark hover:btn-primary btn-md btn border-0">
                    See our plans
                  </Link>
                </div>
                <div>
                  <ul className="space-y-4">
                    {[
                      'Studio-crafted — implies professional creative team',
                      'Brand-native — content born from your brand DNA',
                      'Handcrafted at scale — the paradox is the selling point',
                      'Human-refined — every piece passes through human eyes',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                          <CheckIcon className="dark:fill-accent" />
                        </span>
                        <span className="text-accent">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </section>

      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Join us"
        badgeClass="!badge-green"
        ctaHeading="Ready to give your brand the content it deserves?"
        description="Start your 7-day free trial. Studio-crafted content for your brand, published everywhere."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
