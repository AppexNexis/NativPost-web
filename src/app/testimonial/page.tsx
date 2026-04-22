// ============================================================
// TESTIMONIAL PAGE — src/app/testimonial/page.tsx
// ============================================================

import testimonials from '@/data/json/testimonials/testimonials.json';
import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import Image from 'next/image';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Testimonials — NativPost | What Our Clients Say',
  description:
    'Hear from businesses worldwide who use NativPost to create studio-crafted social media content. Real results, real brands, real growth.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Testimonials</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2 mx-auto max-w-[700px]">
                Trusted by brands <span className="text-primary-500">worldwide</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[550px]">
                From SMEs in Lagos to startups in London, agencies in New York, and growing brands in Singapore — here
                is what our clients have to say about NativPost.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation delay={0.4 + index * 0.05} key={testimonial.id}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="dark:bg-background-8 hover:shadow-1 h-full rounded-[20px] bg-white p-8 transition-all duration-300 hover:-translate-y-1">
                    <p className="text-wrap mb-6">{testimonial.quote}</p>
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
                        <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                          {testimonial.position}
                        </p>
                      </div>
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
        badgeText="Join them"
        badgeClass="!badge-green"
        ctaHeading="Ready to become our next success story?"
        description="Start your 7-day free trial. Credit card required. Studio-crafted content for your brand in under 48 hours."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
