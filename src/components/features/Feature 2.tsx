import { CheckIcon } from '@/icons';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureItem {
  id: string;
  text: string;
}

const Feature = () => {
  const features: FeatureItem[] = [
    {
      id: 'smes-startups',
      text: 'SMEs and startups who need consistent social media without hiring an agency',
    },
    {
      id: 'agencies',
      text: 'Agencies who want to scale client content without hiring more staff',
    },
    {
      id: 'founders-solopreneurs',
      text: 'Founders and solopreneurs who are burned out creating content daily',
    },
    {
      id: 'brands-global',
      text: 'Brands worldwide — from Lagos to London to Los Angeles — who demand quality',
    },
  ];

  return (
    <section>
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image src={aboutBg} alt="NativPost for every business" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-5 px-6 py-14 max-lg:grid-cols-1 max-sm:gap-10 lg:px-11">
              <div className="max-w-[500px]">
                <h2 className="text-accent sm:text-heading-5 text-heading-6 mb-8">
                  Built for businesses who refuse to settle for generic, robotic social media content.
                </h2>
                <LinkButton
                  href="/pricing"
                  className="btn btn-primary btn-accent dark:btn-dark hover:btn-primary btn-md btn border-0">
                  See pricing plans
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="dark:fill-accent" />
                      </span>
                      <span className="text-accent">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Feature;
