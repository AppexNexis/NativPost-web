import features2 from '@public/images/ns-img-30.png';
import subFeatures4 from '@public/images/ns-img-36.png';
import subFeatures5 from '@public/images/ns-img-37.png';
import subFeatures6 from '@public/images/ns-img-38.png';
import subFeatures7 from '@public/images/ns-img-39.png';
import subFeatures8 from '@public/images/ns-img-40.png';
import subFeatures9 from '@public/images/ns-img-41.png';
import features2Dark from '@public/images/ns-img-dark-11.png';
import subFeaturesDark4 from '@public/images/ns-img-dark-17.png';
import subFeaturesDark5 from '@public/images/ns-img-dark-18.png';
import subFeaturesDark6 from '@public/images/ns-img-dark-19.png';
import subFeaturesDark7 from '@public/images/ns-img-dark-20.png';
import subFeaturesDark8 from '@public/images/ns-img-dark-21.png';
import subFeaturesDark9 from '@public/images/ns-img-dark-22.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Benefits = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-x-[70px] md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <div className="mb-13">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan mb-5">Why NativPost</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="text-heading-2 mb-3">Content that actually sounds like your brand</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[596px]">
                  Every piece of content is built from your personalized Brand Profile — your voice, your colors, your
                  style. No generic templates. No robotic captions. Content so good, nobody will wonder if a machine
                  made it.
                </p>
              </RevealAnimation>
            </div>
            <ul className="list-none">
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-8 text-secondary dark:text-accent text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary dark:text-accent font-medium">Brand-native content</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Every post matches your unique voice, tone, and visual identity.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-46 text-secondary dark:text-accent text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary dark:text-accent font-medium">Anti-slop quality gate</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Our filter catches generic phrases, robotic patterns, and overused clichés automatically.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-47 text-secondary dark:text-accent text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary dark:text-accent font-medium">Human-refined always</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Every piece passes through human review before reaching your audience.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <div className="relative w-full md:w-1/2">
            <RevealAnimation delay={0.4}>
              <figure className="h-auto max-w-[452px] justify-self-end">
                <Image src={features2} alt="NativPost content quality" className="block h-full w-full object-cover object-center dark:hidden" />
                <Image src={features2Dark} alt="NativPost content quality" className="hidden h-full w-full object-cover object-center dark:block" />
              </figure>
            </RevealAnimation>
            <div className="absolute top-[55%] -left-[8.5%] z-20 flex flex-col items-center">
              <RevealAnimation delay={0.5}>
                <figure className="h-[74px] max-w-[320px] self-end overflow-hidden rounded-2xl">
                  <Image src={subFeatures4} alt="Content preview" className="shadow-3 block h-auto w-full object-cover object-center dark:hidden" />
                  <Image src={subFeaturesDark4} alt="Content preview" className="shadow-3 hidden h-auto w-full object-cover object-center dark:block" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <figure className="my-3 h-[74px] max-w-[320px] overflow-hidden rounded-2xl">
                  <Image src={subFeatures5} alt="Content preview" className="shadow-3 block h-auto w-full object-cover object-center dark:hidden" />
                  <Image src={subFeaturesDark5} alt="Content preview" className="shadow-3 hidden h-auto w-full object-cover object-center dark:block" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <figure className="relative z-40 max-h-[72px] max-w-[300px] overflow-hidden rounded-2xl">
                  <Image src={subFeatures6} alt="Content preview" className="shadow-2 block h-auto w-full object-cover object-center dark:hidden" />
                  <Image src={subFeaturesDark6} alt="Content preview" className="shadow-2 hidden h-auto w-full object-cover object-center dark:block" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure className="z-30 -mt-[37px] max-h-[72px] max-w-[280px] overflow-hidden rounded-2xl">
                  <Image src={subFeatures7} alt="Content preview" className="shadow-2 block h-auto w-full object-cover object-center dark:hidden" />
                  <Image src={subFeaturesDark7} alt="Content preview" className="shadow-2 hidden h-auto w-full object-cover object-center dark:block" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.9}>
                <figure className="z-20 -mt-[37px] max-h-[72px] max-w-[260px] overflow-hidden rounded-2xl">
                  <Image src={subFeatures8} alt="Content preview" className="shadow-2 block h-auto w-full object-cover object-center dark:hidden" />
                  <Image src={subFeaturesDark8} alt="Content preview" className="shadow-2 hidden h-auto w-full object-cover object-center dark:block" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1}>
                <figure className="-mt-[37px] max-h-[72px] max-w-[240px] overflow-hidden rounded-2xl">
                  <Image src={subFeatures9} alt="Content preview" className="shadow-2 block h-auto w-full object-cover object-center dark:hidden" />
                  <Image src={subFeaturesDark9} alt="Content preview" className="shadow-2 hidden h-auto w-full object-cover object-center dark:block" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
