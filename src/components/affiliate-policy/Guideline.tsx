import RevealAnimation from '../animation/RevealAnimation';

// Hardcoded affiliate policy hero visual — no image assets
function AffiliatePolicyVisual() {
  const terms = [
    { label: 'Commission rate', value: '30%', sub: 'recurring per renewal' },
    { label: 'Cookie window', value: '90 days', sub: 'after link click' },
    { label: 'Minimum payout', value: '$50', sub: 'before withdrawal' },
    { label: 'Payout cycle', value: 'Monthly', sub: 'end of each month' },
  ];

  const highlights = [
    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Commission-only program — no salary or retainer' },
    { icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Applications are reviewed before access is granted' },
    { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Free Starter plan after 10 to 15 paying clients and one month active' },
  ];

  return (
    <div className="w-full rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-6 overflow-hidden shadow-3">
      {/* Header bar */}
      <div className="border-b border-stroke-2 dark:border-stroke-7 px-6 py-4 flex items-center justify-between bg-background-1 dark:bg-background-7">
        <div className="flex items-center gap-2.5">
          <div className="h-3 w-3 rounded-full bg-ns-red/60" />
          <div className="h-3 w-3 rounded-full bg-ns-yellow/60" />
          <div className="h-3 w-3 rounded-full bg-ns-green/60" />
        </div>
        <span className="text-tagline-3 text-secondary/40 dark:text-accent/40 font-mono">Affiliate policy summary</span>
        <div className="w-14" />
      </div>

      <div className="p-6 space-y-5">
        {/* Key terms grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {terms.map((term) => (
            <div key={term.label} className="rounded-[12px] bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-7 p-4 text-center">
              <p className="text-heading-5 font-medium text-primary-500 mb-0.5">{term.value}</p>
              <p className="text-tagline-3 font-medium text-secondary dark:text-accent">{term.label}</p>
              <p className="text-tagline-3 text-secondary/40 dark:text-accent/40 mt-0.5">{term.sub}</p>
            </div>
          ))}
        </div>

        {/* Key highlights */}
        <div className="rounded-[12px] border border-stroke-2 dark:border-stroke-7 divide-y divide-stroke-2 dark:divide-stroke-7 overflow-hidden">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-3 px-5 py-4 bg-white dark:bg-background-6">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary-500 shrink-0 mt-0.5">
                <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-tagline-3 text-secondary/40 dark:text-accent/40 text-center">
          Full terms apply. Read all sections below before applying.
        </p>
      </div>
    </div>
  );
}

const Guideline = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <div className="mx-auto max-w-[780px] space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Affiliate policy</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1>Terms and conditions for NativPost affiliates</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[560px]">
                Read these terms carefully before applying. By participating in the NativPost affiliate program you agree to everything outlined here.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3} instant>
            <AffiliatePolicyVisual />
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Guideline;