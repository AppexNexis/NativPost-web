'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

type AccentColor = 'yellow' | 'green' | 'red' | 'blue' | 'purple' | 'teal';

interface ServiceHeroProps {
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    visual: React.ReactNode;
    accentColor?: AccentColor;
}

const badgeColorMap: Record<AccentColor, string> = {
    yellow: 'badge-yellow-v2',
    green: 'badge-green',
    red: 'badge badge-red',
    blue: 'badge badge-blue',
    purple: 'badge badge-yellow-v2',
    teal: 'badge badge-green',
};

const ServiceHero = ({
    badge,
    headline,
    subheadline,
    description,
    visual,
    accentColor = 'yellow',
}: ServiceHeroProps) => {
    const badgeClass = badgeColorMap[accentColor];

    return (
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 md:pt-44 md:pb-24 xl:pt-[180px] xl:pb-[120px]">
            <div className="main-container">
                <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

                    {/* Left — copy */}
                    <div className="w-full text-center lg:w-1/2 lg:text-left">
                        <RevealAnimation delay={0.1}>
                            <span className={`badge ${badgeClass} mb-5 inline-block`}>{badge}</span>
                        </RevealAnimation>
                        <RevealAnimation delay={0.2}>
                            <h1 className="mb-3 max-w-[560px] mx-auto lg:mx-0">{headline}</h1>
                        </RevealAnimation>
                        <RevealAnimation delay={0.25}>
                            <p className="text-secondary/50 dark:text-accent/50 text-heading-6 mb-5 max-w-[500px] mx-auto lg:mx-0 font-medium">
                                {subheadline}
                            </p>
                        </RevealAnimation>
                        <RevealAnimation delay={0.3}>
                            <p className="mx-auto max-w-[500px] lg:mx-0 mb-10">
                                {description}
                            </p>
                        </RevealAnimation>
                        <RevealAnimation delay={0.4}>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <LinkButton
                                    href="https://app.nativpost.com/sign-in"
                                    className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-xl dark:hover:btn-accent w-full sm:w-auto"
                                >
                                    Start free trial
                                </LinkButton>
                                <LinkButton
                                    href="/services"
                                    className="btn btn-white dark:btn-transparent-outline hover:btn-secondary btn-xl w-full sm:w-auto"
                                >
                                    All services
                                </LinkButton>
                            </div>
                        </RevealAnimation>
                    </div>

                    {/* Right — coded visual */}
                    <RevealAnimation delay={0.3} direction="up" offset={60}>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-background-3 dark:bg-background-5 overflow-hidden rounded-[24px] p-5 lg:p-8 shadow-2">
                                {visual}
                            </div>
                        </div>
                    </RevealAnimation>

                </div>
            </div>
        </section>
    );
};

export default ServiceHero;