import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import tiktok from '@public/images/icons/tiktok.svg';
import youtube from '@public/images/icons/youtube.svg';
import Image, { type StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Platform {
  name: string;
  icon: StaticImageData;
}

const platforms: Platform[] = [
  { name: 'TikTok', icon: tiktok },
  { name: 'Instagram', icon: instagram },
  { name: 'YouTube', icon: youtube },
  { name: 'Facebook', icon: facebook },
  { name: 'LinkedIn', icon: linkedin },
];

interface ValueProp {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    id: 1,
    icon: 'ns-shape-3',
    title: 'Real accounts, created in-country',
    description:
      'We stand up genuine, brand-owned accounts in the market you want to reach, TikTok, Instagram, YouTube, Facebook, or LinkedIn, and warm them in your niche until they are ready to post.',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'Fully managed, end to end',
    description:
      'Our team runs the day-to-day: profile setup, warming, posting cadence, and health monitoring. You approve the content; we handle the infrastructure.',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Owned by you, compliant by design',
    description:
      'Every account is yours, retrievable credentials, a written authorization grant, and posting through official platform APIs. No evasion, no gray-market inventory. Enterprise-safe.',
  },
  {
    id: 4,
    icon: 'ns-shape-7',
    title: 'One dashboard, unified analytics',
    description:
      'Managed accounts live right beside your own connected profiles in NativPost. Publish, schedule, and read performance across every platform from a single place.',
  },
];

const ManagedInfrastructure = () => {
  return (
    <section className="bg-background-3 dark:bg-background-8 py-[50px] lg:py-[100px]">
      <div className="main-container">
        {/* Header */}
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-orange">Managed Social Infrastructure</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>
                We run your <span className="text-primary-500">account infrastructure</span> for you
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[560px]">
                Beyond content, NativPost creates, warms, and operates real social accounts on your
                behalf, across every major platform, so you can enter new markets without building
                a team on the ground.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Platform strip */}
        <RevealAnimation delay={0.35}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {platforms.map(platform => (
              <div
                key={platform.name}
                className="dark:bg-background-9 flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-black/5 dark:ring-white/5"
              >
                <Image src={platform.icon} alt={platform.name} className="size-5" />
                <span className="text-tagline-2 text-secondary dark:text-accent font-medium">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </RevealAnimation>

        {/* Value props */}
        <div className="grid grid-cols-12 gap-y-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={prop.id}>
              <div className="col-span-12 md:col-span-6">
                <div className="dark:bg-background-9 flex h-full gap-5 rounded-[20px] bg-white p-6 duration-500 ease-in-out hover:-translate-y-1 sm:p-8">
                  <div className="shrink-0">
                    <span className={`${prop.icon} text-secondary dark:text-accent text-[40px] md:text-[48px]`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6">{prop.title}</h3>
                    <p>{prop.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* CTA */}
        <RevealAnimation delay={0.5}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-tagline-1 text-secondary dark:text-accent/70">
              From <span className="text-secondary dark:text-accent font-semibold">$80/account per month</span>
              {' '}+ $1.50 per managed post. Active NativPost plan required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <LinkButton
                href="/pricing"
                className="btn-primary hover:btn-secondary dark:btn-accent dark:hover:btn-white">
                See managed pricing
              </LinkButton>
              <LinkButton
                href="/contact-us"
                className="btn-white dark:btn-transparent hover:btn-secondary dark:hover:btn-accent">
                Talk to our team
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ManagedInfrastructure;
