'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

interface Step {
    number: string;
    title: string;
    description: string;
}

interface ServiceHowItWorksProps {
    steps: Step[];
    headline?: string;
}

const ServiceHowItWorks = ({
    steps,
    headline = 'How it works.',
}: ServiceHowItWorksProps) => (
    <section className="bg-background-3 dark:bg-background-7 py-20 lg:py-[120px]">
        <div className="main-container">

            {/* Heading */}
            <div className="mb-16 text-center space-y-3">
                <RevealAnimation delay={0.1}>
                    <span className="badge badge-yellow-v2">Step by step</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                    <h2 className="mx-auto max-w-[600px]">{headline}</h2>
                </RevealAnimation>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <RevealAnimation key={step.number} delay={0.3 + index * 0.1}>
                        <div className="relative">
                            {/* Connector line (hidden on last) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-7 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-stroke-2 dark:bg-stroke-6 z-0" />
                            )}

                            <div className="bg-background-1 dark:bg-background-9 relative z-10 rounded-[20px] p-6 h-full border border-stroke-1 dark:border-stroke-5">
                                {/* Step number */}
                                <div className="mb-5">
                                    <span className="bg-secondary dark:bg-accent text-accent dark:text-secondary inline-flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-semibold">
                                        {step.number}
                                    </span>
                                </div>

                                <h4 className="mb-3 text-heading-6 font-semibold">{step.title}</h4>
                                <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </RevealAnimation>
                ))}
            </div>

        </div>
    </section>
);

export default ServiceHowItWorks;