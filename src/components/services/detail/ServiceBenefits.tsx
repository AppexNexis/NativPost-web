'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

interface Benefit {
    title: string;
    description: string;
}

interface ServiceBenefitsProps {
    headline: string;
    benefits: Benefit[];
    visual: React.ReactNode;
}

const ServiceBenefits = ({ headline, benefits, visual }: ServiceBenefitsProps) => (
    <section className="overflow-hidden py-20 lg:py-[120px]">
        <div className="main-container">
            <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

                {/* Left — benefits list */}
                <div className="w-full lg:w-1/2">
                    <RevealAnimation delay={0.1}>
                        <span className="badge badge-yellow-v2 mb-5 inline-block">Why it matters</span>
                    </RevealAnimation>
                    <RevealAnimation delay={0.2}>
                        <h2 className="mb-12 max-w-[480px]">{headline}</h2>
                    </RevealAnimation>

                    <div className="space-y-0">
                        {benefits.map((benefit, i) => (
                            <RevealAnimation key={benefit.title} delay={0.3 + i * 0.1}>
                                <div className={`py-6 ${i < benefits.length - 1 ? 'border-b border-stroke-2 dark:border-stroke-6' : ''}`}>
                                    <div className="flex items-start gap-4">
                                        {/* Number indicator */}
                                        <span className="bg-background-3 dark:bg-background-7 text-secondary/50 dark:text-accent/50 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold mt-0.5">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <h4 className="text-heading-6 font-semibold mb-1.5">{benefit.title}</h4>
                                            <p className="text-secondary/60 dark:text-accent/60">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealAnimation>
                        ))}
                    </div>
                </div>

                {/* Right — visual */}
                <RevealAnimation delay={0.3} direction="right" offset={60}>
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                        <div className="bg-background-3 dark:bg-background-5 overflow-hidden rounded-[24px] p-5 lg:p-8 shadow-2">
                            {visual}
                        </div>
                    </div>
                </RevealAnimation>

            </div>
        </div>
    </section>
);

export default ServiceBenefits;