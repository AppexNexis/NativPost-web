import RevealAnimation from '../animation/RevealAnimation';

interface PolicySection {
  title: string;
  content: string;
}

interface RefundStep {
  step: number;
  color: string;
  title: string;
  description: string;
}

interface ListSection {
  title: string;
  description: string;
  items: string[];
}

const policySections: PolicySection[] = [
  {
    title: 'Return and refund guidelines',
    content:
      'At NativPost (a product of AppexNexis LTD), we are committed to providing you with the best possible service and experience. However, if for any reason our platform does not meet your expectations, we offer a simple and hassle-free refund policy.',
  },
  {
    title: '14-Day money-back guarantee',
    content:
      'We are confident that you will love using NativPost. Still, if you are not fully satisfied, we offer a full refund on your subscription within 14 days of your original purchase, no questions asked.',
  },
];

const refundSteps: RefundStep[] = [
  {
    step: 1,
    color: 'bg-ns-yellow',
    title: 'Contact us via email at support@nativpost.com or through the in-app chat.',
    description:
      "If you're experiencing any issues or need assistance, our support team is here to help. Simply reach out via email or use the live chat widget inside your NativPost dashboard.",
  },
  {
    step: 2,
    color: 'bg-ns-green',
    title: 'Share your organization name, email, and a brief description of the issue.',
    description:
      'Once we receive this information, our team will review it and get back to you within 24 hours. We appreciate your cooperation in helping us resolve things quickly.',
  },
  {
    step: 3,
    color: 'bg-ns-cyan',
    title: 'Our team will review and process your refund request.',
    description:
      "We've received your refund request and our team is currently reviewing the details. You'll receive a confirmation email once the refund has been approved and initiated.",
  },
];

const conditionsForRefund: ListSection = {
  title: 'Conditions for refund',
  description: 'You are eligible for a full subscription refund if',
  items: [
    'You request a refund within 14 days from the date of your subscription purchase.',
    'You can provide a valid reason if requested (optional but helps us improve NativPost).',
    'Your Brand Profile onboarding workshop has not yet been completed (setup fees are refundable before workshop completion).',
  ],
};

const nonRefundableSituations: ListSection = {
  title: 'Non-refundable situations',
  description: 'Refunds will not be issued in the following situations',
  items: [
    'You request a refund after the 14-day period has elapsed.',
    'Setup fees after the Brand Profile onboarding workshop has been completed, as this involves dedicated time from our team.',
    'You have violated our Terms and Conditions, including misuse of the platform or content engine.',
    'Requests based on lack of features not described in your plan tier at the time of purchase.',
    'Downgrades from a higher-tier plan after extensive content generation and publishing.',
    "Dissatisfaction with social media engagement results, as content performance depends on factors outside NativPost's control (platform algorithms, audience behavior, industry trends).",
  ],
};

const additionalSections: PolicySection[] = [
  {
    title: 'Refund processing time',
    content:
      'Once your refund is approved, it may take 5–10 business days for the amount to reflect in your bank statement, depending on your payment provider. Refunds processed via Stripe will return to the original card. Refunds for Paystack transactions will be processed to the original payment method (card, bank transfer, or mobile money).',
  },
  {
    title: 'We appreciate your feedback',
    content:
      "If you choose to request a refund, we would be grateful if you could let us know why. Your feedback helps us improve NativPost for businesses worldwide. Whether it's about content quality, the onboarding process, or feature request, we want to hear it.",
  },
];

const RefundPolicyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 md:pb-[200px] xl:pt-[180px]">
      <div className="main-container">
        <div className="refund-policy space-y-[70px]">
          {/* Initial Policy Sections */}
          {policySections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.3 + index * 0.1}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            </RevealAnimation>
          ))}

          {/* Conditions for Refund */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <h2>{conditionsForRefund.title}</h2>
              <p>{conditionsForRefund.description}</p>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 mt-6 list-inside space-y-3 font-normal">
                {conditionsForRefund.items.map((item, index) => (
                  <li key={index + 1}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* How to Request a Refund */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-3">
              <h2>How to request a refund</h2>
              <p>Simply follow these easy steps</p>
              <ol className="mt-8 mb-6 space-y-8">
                {refundSteps.map((step, index) => (
                  <li key={step.step}>
                    <RevealAnimation delay={0.5 + index * 0.1}>
                      <div className="bg-background-1 dark:bg-background-6 flex max-w-[596px] items-start gap-4 rounded-2xl px-7 py-5 sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6">
                        <div
                          className={`flex size-10 items-center justify-center ${step.color} text-tagline-1 text-secondary shrink-0 rounded-full font-semibold`}>
                          {step.step}
                        </div>
                        <div className="space-y-1">
                          <p className="text-tagline-1 text-secondary dark:text-accent leading-[27px] font-medium sm:text-lg">
                            {step.title}
                          </p>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  </li>
                ))}
              </ol>
              <RevealAnimation delay={0.7}>
                <p>
                  Refunds will be issued to the{' '}
                  <span className="text-secondary dark:text-accent">original payment method</span> used at checkout
                  (Stripe or Paystack).
                </p>
              </RevealAnimation>
            </div>
          </RevealAnimation>

          {/* Non-refundable Situations */}
          <RevealAnimation delay={0.9}>
            <div className="space-y-3">
              <h2>{nonRefundableSituations.title}</h2>
              <p>{nonRefundableSituations.description}</p>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 mt-6 list-inside space-y-3 font-normal">
                {nonRefundableSituations.items.map((item, index) => (
                  <li key={index + 1}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Additional Sections */}
          {additionalSections.map((section) => (
            <RevealAnimation key={section.title} delay={0.8}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RefundPolicyContent;
