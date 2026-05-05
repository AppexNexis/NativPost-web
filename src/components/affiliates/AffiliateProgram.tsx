import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const stats = [
  { value: '30%', label: 'Recurring commission' },
  { value: '90', label: 'Day cookie window' },
  { value: '$50', label: 'Minimum payout' },
  { value: 'No cap', label: 'On your earnings' },
];

// Hardcoded affiliate dashboard visual — no image assets
function AffiliateDashboardVisual() {
  const earningRows = [
    { label: 'Starter plan referral', plan: 'Starter', amount: '$5.70', status: 'paid', date: 'May 1' },
    { label: 'Growth plan referral', plan: 'Growth', amount: '$14.70', status: 'paid', date: 'May 3' },
    { label: 'Pro plan referral', plan: 'Pro', amount: '$29.70', status: 'pending', date: 'May 5' },
    { label: 'Starter plan referral', plan: 'Starter', amount: '$5.70', status: 'paid', date: 'May 6' },
  ];

  const statusColors: Record<string, string> = {
    paid: 'bg-ns-green-light dark:bg-ns-green/20 text-secondary dark:text-ns-green',
    pending: 'bg-ns-yellow-light dark:bg-ns-yellow/20 text-secondary dark:text-ns-yellow',
  };

  return (
    <div className="w-full rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 overflow-hidden shadow-3">
      {/* Dashboard header */}
      <div className="border-b border-stroke-2 dark:border-stroke-7 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-3 w-3 rounded-full bg-ns-red/60" />
          <div className="h-3 w-3 rounded-full bg-ns-yellow/60" />
          <div className="h-3 w-3 rounded-full bg-ns-green/60" />
        </div>
        <span className="text-tagline-3 text-secondary/40 dark:text-accent/40 font-mono">nativpost.affonso.io</span>
        <div className="w-14" />
      </div>

      <div className="p-6 space-y-5">
        {/* Top metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-[12px] bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-7 p-4 text-center">
            <p className="text-heading-5 font-medium text-primary-500 mb-0.5">$55.80</p>
            <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">Total earned</p>
          </div>
          <div className="rounded-[12px] bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-7 p-4 text-center">
            <p className="text-heading-5 font-medium text-secondary dark:text-accent mb-0.5">4</p>
            <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">Referrals</p>
          </div>
          <div className="rounded-[12px] bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-7 p-4 text-center">
            <p className="text-heading-5 font-medium text-secondary dark:text-accent mb-0.5">30%</p>
            <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">Commission</p>
          </div>
        </div>

        {/* Milestone progress */}
        <div className="rounded-[12px] border border-primary-200 dark:border-primary-800/40 bg-primary-50 dark:bg-primary-500/10 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-tagline-3 font-medium text-primary-600 dark:text-primary-400">Starter plan milestone</p>
            <p className="text-tagline-3 text-primary-500 font-medium">4 / 10 clients</p>
          </div>
          <div className="h-2 rounded-full bg-primary-100 dark:bg-primary-800/30 overflow-hidden">
            <div className="h-full w-[40%] rounded-full bg-primary-500 transition-all duration-700" />
          </div>
          <p className="text-tagline-3 text-primary-500/70 dark:text-primary-400/70 mt-2">6 more paying clients to unlock your free Starter plan</p>
        </div>

        {/* Recent commissions */}
        <div>
          <p className="text-tagline-3 font-medium text-secondary/60 dark:text-accent/60 uppercase tracking-wide mb-3">Recent commissions</p>
          <div className="space-y-2">
            {earningRows.map((row, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-stroke-2 dark:border-stroke-7 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-lg bg-background-3 dark:bg-background-8 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary-400" />
                  </div>
                  <div>
                    <p className="text-tagline-3 font-medium text-secondary dark:text-accent">{row.plan} plan</p>
                    <p className="text-tagline-3 text-secondary/45 dark:text-accent/45">{row.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-tagline-3 px-2 py-0.5 rounded-full font-medium ${statusColors[row.status]}`}>
                    {row.status}
                  </span>
                  <p className="text-tagline-2 font-medium text-secondary dark:text-accent">{row.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
                Refer businesses, agencies, and creators to NativPost and earn a 30% recurring commission on every payment they make. Applications are reviewed before approval.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="mt-7 md:mt-10 flex flex-wrap gap-3 md:justify-center">
                <LinkButton
                  href="/affiliate-apply"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">
                  Apply to join
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

          {/* Hardcoded dashboard visual */}
          <RevealAnimation delay={0.2} instant>
            <AffiliateDashboardVisual />
          </RevealAnimation>

          {/* What to expect — commission terms clearly stated */}
          <RevealAnimation delay={0.2}>
            <div className="rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 overflow-hidden">
              <div className="px-8 py-5 border-b border-stroke-2 dark:border-stroke-7 bg-background-1 dark:bg-background-7">
                <h2 className="text-heading-6 font-medium text-secondary dark:text-accent">What to expect before you apply</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stroke-2 dark:divide-stroke-7">
                <div className="p-8 space-y-4">
                  <p className="text-tagline-3 font-semibold uppercase tracking-wide text-secondary/50 dark:text-accent/50">Commission structure</p>
                  <ul className="space-y-3">
                    {[
                      'This is a commission-only program. There is no salary, retainer, or guaranteed income.',
                      'You earn 30% of every payment made by customers you refer, including renewals.',
                      'Commissions are tracked in real time through your Affonso dashboard.',
                      'Payouts are processed once your balance reaches $50.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-tagline-2 text-secondary/65 dark:text-accent/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary dark:bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 space-y-4">
                  <p className="text-tagline-3 font-semibold uppercase tracking-wide text-secondary/50 dark:text-accent/50">Free Starter plan milestone</p>
                  <div className="rounded-[12px] bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-800/30 p-5 space-y-3">
                    <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Bring in 10 to 15 paying clients and unlock free access to the NativPost Starter plan.</p>
                    <ul className="space-y-2">
                      {[
                        'You must have been an active affiliate for at least one full month.',
                        'All 10 to 15 referrals must be on active paid subscriptions.',
                        'The Starter plan remains free for as long as you stay active.',
                        'This is a reward for performance, not a guaranteed benefit.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-tagline-3 text-secondary/65 dark:text-accent/65">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                    className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent before:relative before:left-0 before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-[\'\']">
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