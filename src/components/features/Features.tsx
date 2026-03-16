import cardOneImg from '@public/images/ns-img-90.png';
import cardTwoImg from '@public/images/ns-img-91.png';
import cardThreeImg from '@public/images/ns-img-92.png';
import cardFourImg from '@public/images/ns-img-93.png';
import cardFiveImg from '@public/images/ns-img-94.png';
import cardOneImgDark from '@public/images/ns-img-dark-63.png';
import cardTwoImgDark from '@public/images/ns-img-dark-64.png';
import cardThreeImgDark from '@public/images/ns-img-dark-65.png';
import cardFourImgDark from '@public/images/ns-img-dark-66.png';
import cardFiveImgDark from '@public/images/ns-img-dark-67.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="pt-[100px] pb-[100px] md:pt-[160px]" aria-label="Features">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2 className="mx-auto max-w-[814px]">Everything you need to own your social media presence</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[734px]">
                NativPost combines deep brand understanding with studio-quality production and intelligent scheduling.
                From content creation to cross-platform publishing, one platform handles it all.
              </p>
            </RevealAnimation>
          </div>
          {/* 1st row cards */}
          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">
            <RevealAnimation delay={0.5}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardOneImg}
                      alt="Brand Profile Builder"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardOneImgDark}
                      alt="Brand Profile Builder"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Brand Profile builder</h3>
                  <p>
                    Capture your voice, visuals, and audience in a deep creative profile that drives every piece of
                    content.
                  </p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardTwoImg}
                      alt="Content Creation Engine"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardTwoImgDark}
                      alt="Content Creation Engine"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Content creation engine</h3>
                  <p>Studio-quality graphics and brand-aligned captions generated for every platform automatically.</p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardThreeImg}
                      alt="Anti-Slop Filter"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardThreeImgDark}
                      alt="Anti-Slop Filter"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Anti-slop quality filter</h3>
                  <p>Automatically rejects content with robotic patterns, generic phrases, and overused clichés.</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
          {/* 2nd row cards */}
          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">
            <RevealAnimation delay={0.8}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardFourImg}
                      alt="Approval Dashboard"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFourImgDark}
                      alt="Approval Dashboard"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Approval &amp; scheduling dashboard</h3>
                  <p>
                    Preview, approve, edit, or reject posts. Bulk approve for efficiency. Schedule across all platforms.
                  </p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.9}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardFiveImg}
                      alt="Performance Analytics"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFiveImgDark}
                      alt="Performance Analytics"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Performance analytics</h3>
                  <p>
                    Track reach, engagement, and growth. See what content works best and let the system optimize future
                    posts.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.displayName = 'Features';
export default Features;
