import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Pricing = () => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-2 dark:bg-background-8 mx-auto w-full max-w-[1440px] space-y-[70px] rounded-2xl px-5 py-[100px] md:px-6 lg:px-10 xl:px-16">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Simple, transparent pricing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Agency-quality content at a price your business can afford.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <p className="mx-auto max-w-[600px]">
                All plans include your personalized Brand Profile, anti-slop quality filter, and cross-platform
                publishing. Setup fee covers your onboarding workshop.
              </p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {/* What's included column */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.4}>
                <div>
                  <div className="md:h-[195px] md:w-[290px]" />
                  <div className="space-y-2.5">
                    <h3 className="text-heading-6">What&apos;s included</h3>
                    <ul>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 border-b-stroke-4 dark:border-stroke-8 border-b py-4 pr-6 font-normal">
                        Posts per month
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 border-b-stroke-4 dark:border-stroke-8 border-b py-4 pr-6 font-normal">
                        Social platforms
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 border-b-stroke-4 dark:border-stroke-8 border-b py-4 pr-6 font-normal">
                        Brand Profile depth
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 border-b-stroke-4 dark:border-stroke-8 border-b py-4 pr-6 font-normal">
                        Custom graphics
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 py-4 pr-6 font-normal">
                        Human review
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            {/* Starter Plan */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.5}>
                <div>
                  <div className="bg-background-3 dark:bg-background-7 space-y-8 rounded-[20px] px-6 py-8">
                    <div>
                      <p className="text-tagline-1 mb-3 font-medium">Starter</p>
                      <h3 className="text-heading-5 font-normal">
                        $19<span className="text-tagline-1 font-normal">/mo</span>
                      </h3>
                      <p>+ $29 one-time setup fee</p>
                    </div>
                    <Link
                      href="/signup"
                      className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full first-letter:uppercase before:content-none">
                      Start free trial
                    </Link>
                  </div>
                  <div className="bg-background-1 dark:bg-background-6 rounded-[20px]">
                    <ul>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">20 posts</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">3 platforms</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Basic</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Templates</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Self-approve</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            {/* Growth Plan — Highlighted */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.6}>
                <div>
                  <div className="bg-secondary dark:bg-background-5 relative space-y-8 overflow-hidden rounded-[20px] px-6 py-8">
                    <div className="absolute -top-28 -right-20 z-0 h-full w-full">
                      <Image src={gradient4} alt="pricing bg" priority />
                    </div>
                    <div>
                      <p className="text-tagline-1 text-accent/60 mb-3 font-medium">Growth — Most Popular</p>
                      <h3 className="text-heading-5 text-accent font-normal">
                        $49<span className="text-tagline-1 font-normal">/mo</span>
                      </h3>
                      <p className="text-accent/60">+ $79 one-time setup fee</p>
                    </div>
                    <Link
                      href="/signup"
                      className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent relative z-10 w-full first-letter:uppercase before:content-none">
                      Start free trial
                    </Link>
                  </div>
                  <div className="bg-background-1 dark:bg-background-6 rounded-[20px]">
                    <ul>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">40 posts</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">5 platforms</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Detailed</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Custom</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Self-approve</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            {/* Pro Plan */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.7}>
                <div>
                  <div className="bg-background-3 dark:bg-background-7 space-y-8 rounded-[20px] px-6 py-8">
                    <div>
                      <p className="text-tagline-1 mb-3 font-medium">Pro</p>
                      <h3 className="text-heading-5 font-normal">
                        $99<span className="text-tagline-1 font-normal">/mo</span>
                      </h3>
                      <p>+ $149 one-time setup fee</p>
                    </div>
                    <Link
                      href="/signup"
                      className="btn btn-white dark:btn-white-dark hover:btn-primary btn-md w-full first-letter:uppercase before:content-none">
                      Start free trial
                    </Link>
                  </div>
                  <div className="bg-background-1 dark:bg-background-6 rounded-[20px]">
                    <ul>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">80 posts</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">All platforms</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Premium</p>
                      </li>
                      <li className="border-b-stroke-4 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Premium custom</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center">
                        <p className="text-secondary/60 dark:text-accent/60 font-medium">Our team reviews</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* Agency & Enterprise note */}
          <RevealAnimation delay={0.8}>
            <div className="mx-auto max-w-[700px] text-center">
              <p className="text-secondary/60 dark:text-accent/60">
                Need <strong className="text-secondary dark:text-accent">Agency ($199/mo)</strong> or{' '}
                <strong className="text-secondary dark:text-accent">Enterprise (custom)</strong> plans?{' '}
                <Link href="/contact-us" className="text-primary-500 underline">
                  Contact us
                </Link>{' '}
                for multi-brand management, white-label options, and dedicated account managers.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;
