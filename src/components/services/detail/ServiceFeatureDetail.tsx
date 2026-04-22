'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

interface ServiceFeatureDetailProps {
    badge: string;
    headline: string;
    description: string;
    bullets: string[];
    visual: React.ReactNode;
    imageRight?: boolean;
}

const CheckIcon = () => (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 mt-0.5">
        <rect width={18} height={18} rx={9} className="fill-secondary/10 dark:fill-accent/10" />
        <path
            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
            className="fill-secondary/80 dark:fill-accent/80"
        />
    </svg>
);

const ServiceFeatureDetail = ({
    badge,
    headline,
    description,
    bullets,
    visual,
    imageRight = true,
}: ServiceFeatureDetailProps) => {
    const copyBlock = (
        <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left">
                <RevealAnimation delay={0.1}>
                    <span className="badge badge-yellow-v2 mb-5 inline-block">{badge}</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                    <h2 className="mx-auto mb-5 max-w-[520px] lg:mx-0">{headline}</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                    <p className="mx-auto max-w-[480px] lg:mx-0 mb-8">{description}</p>
                </RevealAnimation>
                <ul className="space-y-3 mb-10">
                    {bullets.map((text, i) => (
                        <RevealAnimation key={text} delay={0.35 + i * 0.07}>
                            <li className="flex items-start gap-3 justify-center lg:justify-start">
                                <CheckIcon />
                                <span className="text-secondary/70 dark:text-accent/70 text-left">{text}</span>
                            </li>
                        </RevealAnimation>
                    ))}
                </ul>
                <RevealAnimation delay={0.7}>
                    <div className="flex justify-center lg:justify-start">
                        <LinkButton
                            href="https://app.nativpost.com/sign-in"
                            className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-xl dark:hover:btn-accent"
                        >
                            Start free trial
                        </LinkButton>
                    </div>
                </RevealAnimation>
            </div>
        </div>
    );

    const visualBlock = (
        <RevealAnimation delay={0.3} direction={imageRight ? 'right' : 'left'} offset={60}>
            <div className="w-full lg:w-1/2 mx-auto lg:mx-0">
                <div className="bg-background-3 dark:bg-background-5 overflow-hidden rounded-[24px] p-5 lg:p-8 shadow-2">
                    {visual}
                </div>
            </div>
        </RevealAnimation>
    );

    return (
        <section className="relative overflow-hidden pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-40 xl:pt-[100px] xl:pb-[160px]">
            <div className="main-container">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8 xl:gap-16">
                    {imageRight ? (
                        <>
                            {copyBlock}
                            {visualBlock}
                        </>
                    ) : (
                        <>
                            {visualBlock}
                            {copyBlock}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatureDetail;