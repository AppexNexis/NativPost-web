// ============================================================
// BLOG PAGE — src/app/blog/page.tsx
// ============================================================

import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '@/components/animation/RevealAnimation';
import BlogCardV2 from '@/components/shared/card/BlogCardV2';
import BlogCardV3 from '@/components/shared/card/BlogCardV3';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog — NativPost | Social Media Strategy, Brand Building & Anti-Slop Content',
  description:
    'Insights on organic social media growth, anti-slop content strategy, brand voice development, and building an authentic online presence. From the NativPost team.',
};

const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[100px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">NativPost Blog</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2 mx-auto max-w-[800px]">
                Insights on building an <span className="text-primary-500">authentic brand</span> online
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                Practical guides on organic social media growth, anti-slop content strategy, brand voice development,
                and what it takes to stand out in a world drowning in generic content.
              </p>
            </RevealAnimation>
          </div>

          {/* Featured post */}
          {blogs.length > 0 && (
            <div className="mb-16">
              <RevealAnimation delay={0.4}>
                <BlogCardV2 blog={blogs[0]} className="dark:bg-background-8 bg-white" />
              </RevealAnimation>
            </div>
          )}

          {/* Blog grid */}
          <div className="grid grid-cols-12 gap-8">
            {blogs.slice(1).map((blog, index) => (
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                <RevealAnimation delay={0.5 + index * 0.1}>
                  <BlogCardV3 blog={blog} className="dark:bg-background-8 bg-white" />
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Ready to stop struggling?"
        badgeClass="!badge-cyan"
        ctaHeading="Let NativPost handle your social media content"
        description="Start your 7-day free trial. Studio-crafted content for your brand, published everywhere."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
