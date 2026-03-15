import { ArrowIcon } from '@/icons';
import InstagramIcon from '@public/images/icons/snapchat.svg';
import LinkedInIcon from '@public/images/icons/slack.svg';
import XIcon from '@public/images/icons/figma.svg';
import FacebookIcon from '@public/images/icons/shopify.svg';
import TikTokIcon from '@public/images/icons/tiktok.svg';
import WhatsAppIcon from '@public/images/icons/zapier.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const integrations = [
  {
    id: 1,
    name: 'Instagram',
    description: 'Posts, Stories, Reels, Carousels',
    icon: InstagramIcon,
  },
  {
    id: 2,
    name: 'LinkedIn',
    description: 'Company pages & personal profiles',
    icon: LinkedInIcon,
  },
  {
    id: 3,
    name: 'Facebook',
    description: 'Pages & posts',
    icon: FacebookIcon,
  },
  {
    id: 4,
    name: 'X / Twitter',
    description: 'Posts & threads',
    icon: XIcon,
  },
  {
    id: 5,
    name: 'TikTok',
    description: 'Short-form video content',
    icon: TikTokIcon,
  },
  {
    id: 6,
    name: 'WhatsApp Status',
    description: 'Business status updates',
    icon: WhatsAppIcon,
  },
];

const SocialActivity = () => {
  return (
    <section className="dark:bg-background-7 bg-white py-[50px] md:py-[100px] xl:py-[200px]">
      <div className="mx-5 max-w-full min-[425px]:max-w-[380px] min-[475px]:max-w-[450px] sm:mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="relative rounded-[25px] bg-[url('/images/ns-img-242.png')] bg-cover bg-bottom px-3 py-[100px] sm:px-0">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow">Connected platforms</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-accent">
                  Publish to every <span className="text-primary-500">social platform</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60 mx-auto max-w-[300px] px-3 sm:max-w-[400px] sm:px-0 lg:max-w-[510px]">
                  Connect your social accounts once and NativPost handles the rest — publishing your studio-crafted
                  content at optimal times across every platform.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="mx-auto mb-14 grid grid-cols-12 gap-y-6 px-3 min-[445px]:max-w-[500px] sm:px-0 lg:max-w-[852px] lg:gap-8">
            {integrations.map((integration, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={integration.id}>
                <div className="group col-span-12 lg:col-span-6">
                  <Link href="/integration">
                    <div className="group-hover:shadow-1 flex items-center justify-between rounded-xl bg-white/15 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                      <div className="flex items-center gap-4">
                        <figure className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12 sm:size-14">
                          <Image src={integration.icon} alt={integration.name} className="size-8 sm:size-12" />
                        </figure>
                        <div className="transform space-y-1 transition-transform duration-500 group-hover:translate-x-1.5">
                          <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                            {integration.name}
                          </h3>
                          <p className="text-accent/60">{integration.description}</p>
                        </div>
                      </div>
                      <div className="bg-accent/10 group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-10 items-center justify-center overflow-hidden rounded-full transition-all duration-[600ms] ease-in-out sm:size-14">
                        <ArrowIcon className="absolute size-6 -translate-x-11 stroke-black opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
                        <ArrowIcon className="absolute size-6 translate-x-0 stroke-white opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0" />
                      </div>
                    </div>
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>
          <RevealAnimation delay={1}>
            <div className="flex items-center justify-center">
              <LinkButton
                href="/pricing"
                className="btn btn-white btn-xl hover:btn-white-dark dark:btn-transparent dark:hover:btn-accent">
                Start your free trial
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SocialActivity;
