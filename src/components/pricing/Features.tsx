import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Built for reliability</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Your content engine, always running</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[744px]">
                NativPost is built on enterprise-grade infrastructure. Your content calendar never stops, your publishing
                never misses a beat, and your brand stays consistent across every platform.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="bg-secondary dark:bg-background-8 flex flex-col space-y-8 rounded-[20px] py-6 md:flex-row md:space-y-0">
            <div className="max-md:border-b-accent/20 md:border-r-accent/20 dark:md:border-r-stroke-7 dark:max-md:border-b-stroke-7 flex-1 space-y-6 py-6 max-md:border-b md:border-r">
              <figure className="bg-ns-yellow mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={checkCircle} alt="Content quality" className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation number={85} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    85
                  </NumberAnimation>
                  % first-pass approval rate
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  Content so aligned with your brand, most posts are approved without edits.
                </p>
              </div>
            </div>
            <div className="max-md:border-b-accent/20 md:border-r-accent/20 dark:md:border-r-stroke-7 dark:max-md:border-b-stroke-7 flex-1 space-y-6 py-6 max-md:border-b md:border-r">
              <figure className="bg-ns-cyan mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={users} alt="Global clients" className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation number={48} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    48
                  </NumberAnimation>
                  hr onboarding to first post
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  From signup to your first published content in under two days.
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-6">
              <figure className="bg-ns-red mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={thumbsUp} alt="Satisfaction" className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation number={99} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    99
                  </NumberAnimation>
                  % platform uptime
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  Your content publishes on schedule, every time, across every connected platform.
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Features;
