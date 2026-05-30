'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import NumberAnimation from '@/components/animation/NumberAnimation';

// Hardcoded visual representation of the NativPost Live Support Workspace (Image Ref: image_21c5c0.png)
const SupportDashboardVisual = () => (
  <div className="w-full select-none text-left">
    <div className="mx-auto max-w-[680px] space-y-4 lg:mx-0">

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Open tickets', value: 0, color: 'text-primary-500', bg: 'bg-primary-50 dark:bg-primary-950/30' },
          { label: 'AI resolved', value: 0, color: 'text-ns-green', bg: 'bg-ns-green-light dark:bg-ns-green/10' },
          { label: 'Resolved', value: 1, color: 'text-secondary/60 dark:text-accent/60', bg: 'bg-background-2 dark:bg-background-8' },
        ].map(({ label, value, color, bg }) => (
          <div key={label} className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 rounded-2xl border p-5 shadow-2">
            <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${bg} mb-2`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={color} stroke="currentColor" strokeWidth="2">
                {label === 'Open tickets' && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />}
                {label === 'AI resolved' && <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />}
                {label === 'Resolved' && <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />}
              </svg>
            </div>
            <span className="text-secondary dark:text-accent text-heading-5 font-bold block leading-tight">
              <NumberAnimation number={value} speed={1000} interval={100} rooms={1} />
            </span>
            <p className="text-secondary/50 dark:text-accent/50 text-[12px] mt-1 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Ticket List View */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-2xl border shadow-2">
        <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-5 py-3.5 bg-background-2/50 dark:bg-background-8/30">
          <div className="flex items-center gap-2">
            <span className="text-secondary dark:text-accent text-tagline-2 font-semibold">Active Pipeline</span>
          </div>
          <span className="text-secondary/40 dark:text-accent/40 text-[11px] font-medium">1 Ticket Historical</span>
        </div>

        <div className="p-5 border-b border-stroke-4 dark:border-stroke-8">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
                <h4 className="text-secondary dark:text-accent text-[14px] font-semibold leading-snug">
                  My LinkedIn posts are not publishing — they keep failing
                </h4>
              </div>
              <p className="text-secondary/50 dark:text-accent/50 text-[12px] line-clamp-2 max-w-[480px]">
                Growth plan user&apos;s LinkedIn posts failing to publish for 2 days despite showing as connected, other platforms working fine. Time-sensitive product...
              </p>
              <div className="flex items-center gap-2 mt-3 pt-1">
                <span className="bg-background-3 dark:bg-background-8 text-secondary/60 dark:text-accent/60 rounded px-2 py-0.5 text-[10px] font-medium">Connections</span>
                <span className="bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400 rounded px-2 py-0.5 text-[10px] font-bold">High</span>
                <span className="text-secondary/40 dark:text-accent/40 text-[11px]">19d ago</span>
              </div>
            </div>
            <span className="bg-ns-green-light text-ns-green dark:bg-ns-green/10 flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 3L4.75 8.25L2 5.5" /></svg>
              Resolved
            </span>
          </div>
        </div>

        {/* Quick Links Block */}
        <div className="p-4 bg-background-2/40 dark:bg-background-8/20 grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-stroke-4 dark:border-stroke-8">
          {['Connect a platform', 'Billing and plans', 'Brand profile'].map((link) => (
            <div key={link} className="bg-background-1 dark:bg-background-9 border border-stroke-3 dark:border-stroke-7 rounded-xl p-3 flex items-center justify-between text-[12px] font-medium text-secondary dark:text-accent">
              <span>{link}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

const NeedHelp = () => {
  return (
    <section className="pt-32 pb-[80px] sm:pt-36 md:pt-42 lg:pb-[140px] xl:pt-[180px] overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Context copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">NativPost Support Center</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h1 className="text-heading-3 sm:text-heading-2 font-bold leading-tight text-secondary dark:text-accent">
                  How can we help your brand today?
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/70 dark:text-accent/70 text-base max-w-[500px] mx-auto lg:mx-0">
                  Manage pipeline incidents, tune engine configurations, or resolve billing queries. Access localized troubleshooting documentation and multi-tenant tooling instantly.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <LinkButton
                  href="https://app.nativpost.com/dashboard/support"
                  target="_blank"
                  className="btn btn-xl btn-primary hover:btn-secondary dark:hover:btn-accent shadow-lg"
                >
                  Go to App Dashboard
                </LinkButton>
                <LinkButton
                  href="#ticket-form"
                  className="btn btn-xl btn-white dark:btn-transparent border border-stroke-3 dark:border-stroke-7 hover:bg-background-2"
                >
                  Open External Ticket
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Hardcoded Dashboard visual */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <RevealAnimation delay={0.6} direction="up" offset={40}>
              <SupportDashboardVisual />
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeedHelp;