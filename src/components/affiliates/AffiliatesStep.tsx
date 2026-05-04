import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateStep {
  id: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

const affiliateStepsData: AffiliateStep[] = [
  {
    id: '1',
    stepNumber: 'Step 1',
    icon: 'ns-shape-35',
    title: 'Create your affiliate account',
    description:
      'Sign up at nativpost.affonso.io using your email. Your account is approved instantly — no application review, no waiting period.',
  },
  {
    id: '2',
    stepNumber: 'Step 2',
    icon: 'ns-shape-12',
    title: 'Share your unique referral link',
    description:
      'Copy your personal referral link from the dashboard and share it with your audience — through content, communities, newsletters, or direct recommendations.',
  },
  {
    id: '3',
    stepNumber: 'Step 3',
    icon: 'ns-shape-3',
    title: 'Earn recurring commissions',
    description:
      'When someone subscribes through your link, you earn 30% on their first payment and on every renewal. Track everything in real time from your affiliate dashboard.',
  },
];

const AffiliatesStep = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {affiliateStepsData.map((step, index) => (
        <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
          <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-background-6 rounded-[20px]">
            <div className="space-y-11">
              <span className="text-tagline-2 inline-block dark:text-accent/60">{step.stepNumber}</span>
              <div>
                <span className={`${step.icon} text-[52px] text-secondary dark:text-accent`} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-heading-6 md:text-heading-5">{step.title}</h3>
              <p className="max-w-[345px]">{step.description}</p>
            </div>
          </article>
        </RevealAnimation>
      ))}
    </div>
  );
};

AffiliatesStep.displayName = 'AffiliatesStep';
export default AffiliatesStep;