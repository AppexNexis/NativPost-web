// ============================================================
// SUCCESS STORIES PAGE — src/app/success-stories/page.tsx
// This can either redirect to /case-study or be a standalone page.
// This version is standalone with a slightly different angle (shorter, social-proof focused).
// ============================================================

import testimonials from '@/data/json/testimonials/testimonials.json';
import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import Image from 'next/image';
import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Success Stories — NativPost | How Brands Grow With Studio-Crafted Content',
  description:
    'Discover how businesses worldwide use NativPost to save time, grow engagement, and build authentic social media presences. Real brands, real results.',
};

const highlights = [
  {
    metric: '85%',
    label: 'Average first-pass approval rate',
    description: 'Content so aligned with your brand, most posts are approved without any edits.',
  },
  {
    metric: '10+ hrs',
    label: 'Saved per week',
    description: 'Business owners reclaim their time and focus on what matters — growing their business.',
  },
  {
    metric: '<48 hrs',
    label: 'From signup to first published content',
    description: 'Fastest onboarding in the industry. Your Brand Profile and first batch, in two days.',
  },
  {
    metric: '5',
    label: 'Platforms published simultaneously',
    description: 'One approval, five platforms. Instagram, LinkedIn, X, Facebook, and TikTok.',
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* Hero */}
      <section className="pt-[120px] pb-[60px] lg:pt-[170px] lg:pb-[80px]">
        <div className="main-container">
          <div className="mx-auto max-w-[800px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Success stories</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                Brands that <span className="text-primary-500">grew with NativPost</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[550px]">
                From SMEs in Nigeria to startups in the UK to agencies in the US — here is how businesses are
                transforming their social media with studio-crafted content.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="py-[60px]">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-6">
            {highlights.map((item, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={index}>
                <div className="col-span-12 md:col-span-6 xl:col-span-3">
                  <div className="dark:bg-background-8 h-full space-y-3 rounded-[20px] bg-white p-8">
                    <h3 className="text-heading-4 text-primary-500">{item.metric}</h3>
                    <p className="text-tagline-1 text-secondary dark:text-accent font-medium">{item.label}</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">{item.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px] lg:py-[120px]">
        <div className="main-container">
          <div className="mb-[50px] text-center">
            <RevealAnimation delay={0.2}>
              <h2>In their own words</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation delay={0.3 + index * 0.05} key={testimonial.id}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="dark:bg-background-8 hover:shadow-1 h-full rounded-[20px] bg-white p-8 transition-all duration-300 hover:-translate-y-1">
                    <p className="mb-6 text-wrap">{testimonial.quote}</p>
                    <div className="bg-stroke-4 dark:bg-stroke-8 mb-6 h-px w-full" />
                    <div className="flex items-center gap-3">
                      <figure className="size-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-full w-full bg-linear-[156deg,#83E7EE_2.92%,#C6F56F_91%]"
                          width={48}
                          height={48}
                        />
                      </figure>
                      <div>
                        <h3 className="text-tagline-1 text-secondary dark:text-accent font-medium">
                          {testimonial.name}
                        </h3>
                        <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          <RevealAnimation delay={0.6}>
            <div className="mt-12 text-center">
              <Link
                href="/case-study"
                className="btn btn-secondary btn-md hover:btn-white dark:btn-accent dark:hover:btn-white-dark inline-block">
                Read detailed case studies
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Write your success story"
        badgeClass="!badge-green"
        ctaHeading="Join the brands growing with NativPost"
        description="Start your 7-day free trial. No credit card required. Your first studio-crafted content in under 48 hours."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
