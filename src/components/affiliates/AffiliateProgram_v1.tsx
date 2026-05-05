import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import affiliatesCover from '@public/images/ns-img-371.png';

const stats = [
  { value: '30%', label: 'Recurring commission' },
  { value: '90', label: 'Day cookie window' },
  { value: '$50', label: 'Minimum payout' },
  { value: 'No cap', label: 'On your earnings' },
];

const AffiliateProgram = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">

          {/* Hero */}
          <div className="mx-auto max-w-[640px] space-y-4 md:text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">Affiliate program</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1>Earn 30% on every sale you refer to NativPost</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[520px]">
                Refer businesses, agencies, and creators to NativPost and earn a 30% recurring commission on every payment they make. No limits on what you can earn.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="mt-7 md:mt-10 flex flex-wrap gap-3 md:justify-center">
                <LinkButton
                  href="https://nativpost.affonso.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">
                  Join the program
                </LinkButton>
                <LinkButton
                  href="/affiliate-policy"
                  className="btn btn-white btn-xl dark:btn-transparent hover:btn-secondary dark:hover:btn-accent">
                  Read the terms
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Stats bar */}
          <RevealAnimation delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stroke-2 dark:divide-stroke-7 border border-stroke-2 dark:border-stroke-7 rounded-[20px] overflow-hidden bg-white dark:bg-background-6">
              {stats.map((stat) => (
                <div key={stat.label} className="px-8 py-7 text-center">
                  <p className="text-heading-4 font-medium text-secondary dark:text-accent mb-1">{stat.value}</p>
                  <p className="text-tagline-2 text-secondary/55 dark:text-accent/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealAnimation>

          {/* Cover image */}
          <RevealAnimation delay={0.2} instant>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={affiliatesCover}
                className="h-full w-full object-cover object-center"
                alt="NativPost affiliate program"
              />
            </figure>
          </RevealAnimation>

          {/* Why join */}
          <div className="max-w-[830px] space-y-4">
            <RevealAnimation delay={0.3}>
              <h2 className="text-heading-4 font-normal">Why join the NativPost affiliate program</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                NativPost is in a category of its own — the only AI social media tool with a built-in anti-slop filter that rejects generic content before it publishes. That differentiation makes it easy to promote and easier to convert.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-3 pt-2">
                {[
                  { label: 'Recurring commissions', text: 'Earn 30% on every renewal, not just the first payment. Your income grows as your referrals stay subscribed.' },
                  { label: 'A product that sells itself', text: 'NativPost solves a real problem for agencies, creators, and brands. The anti-slop angle is a strong, memorable differentiator.' },
                  { label: 'Long attribution window', text: 'A 90-day cookie ensures you receive credit even when a lead takes time to decide.' },
                  { label: 'No earnings ceiling', text: 'There is no cap on commissions. Refer more, earn more, with no diminishing returns.' },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent before:relative before:left-0 before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                    <strong className="text-secondary dark:text-accent font-medium">{item.label}: </strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

AffiliateProgram.displayName = 'AffiliateProgram';
export default AffiliateProgram;