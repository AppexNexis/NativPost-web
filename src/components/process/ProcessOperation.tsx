import ProcessImage from '@public/images/ns-img-49.png';
import ProcessDarkImage from '@public/images/ns-img-dark-28.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const ProcessOperation = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 space-y-[70px] py-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan-v2">Simple as 1-2-3</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[624px]">Getting started takes minutes, not months</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[802px]">
                Unlike agencies that take weeks to onboard you, NativPost gets your brand profile set up and your first
                content batch ready in under 48 hours. Here&apos;s how simple it is.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-y-14 md:gap-y-20 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <RevealAnimation delay={0.4}>
              <div>
                <figure className="mx-auto max-h-[547px] max-w-[478px] lg:mx-0">
                  <Image
                    src={ProcessImage}
                    alt="NativPost onboarding"
                    className="block h-full w-full object-cover dark:hidden"
                  />
                  <Image
                    src={ProcessDarkImage}
                    alt="NativPost onboarding"
                    className="hidden h-full w-full object-cover dark:block"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <div className="space-y-5">
              <RevealAnimation delay={0.5}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div>
                    <div className="bg-ns-yellow text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                      1
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                      Sign up & build your Brand Profile
                    </h3>
                    <p>
                      Complete a guided onboarding workshop where we capture your voice, visual style, audience, and
                      content preferences. This becomes your creative DNA.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div className="bg-ns-green text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                      Review & approve your content
                    </h3>
                    <p>
                      Your content calendar fills with studio-crafted posts, graphics, captions, hashtags. Preview
                      exactly how they&apos;ll appear on each platform. Approve, edit, or request changes.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div className="bg-ns-red text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                      Sit back — we publish everywhere
                    </h3>
                    <p>
                      Approved content is automatically published across all your connected social platforms at optimal
                      times. Track performance in your analytics dashboard.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOperation;
