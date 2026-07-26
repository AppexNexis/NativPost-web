import RevealAnimation from '@/components/animation/RevealAnimation';
import { MSI_ADDONS, MSI_CORE, type AddonWho, type MsiAddonMarketing } from '@/data/msi-addons';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Managed Social Infrastructure: Your Social Team, as a Service | NativPost',
  description:
    'NativPost runs your social operations end to end — real managed accounts, publishing, content, ads, community, and analytics. One platform, activate the add-ons you need, backed by real operators.',
  alternates: { canonical: 'https://nativpost.com/managed' },
};

const APP_CONFIGURE_URL = 'https://app.nativpost.com/dashboard/infrastructure/new';

const whoClass: Record<AddonWho, string> = {
  'Automated': 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
  'AI': 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
  'AI + Human': 'bg-primary-500/15 text-primary-500',
  'Operator': 'bg-orange-500/15 text-orange-600 dark:text-orange-400',
};

const backboneSteps = ['Organization', 'Managed accounts', 'Calendar', 'Content', 'Worker', 'Vault', 'Platform APIs'];

function AddonCard({ addon, core = false }: { addon: MsiAddonMarketing; core?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-background-1 p-6 transition-all hover:-translate-y-1 hover:shadow-sm dark:bg-background-9 ${
        core ? 'border-primary-500/40' : 'border-stroke-3 dark:border-stroke-8'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-2">
        <span className={`${addon.icon} text-secondary dark:text-accent text-[36px]`} />
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
            addon.status === 'Live'
              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
              : 'bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent/70'
          }`}
        >
          {addon.status}
        </span>
      </div>
      <p className="text-heading-6">{addon.name}</p>
      <p className="mt-1 text-[13px] font-medium text-secondary dark:text-accent/80">{addon.tagline}</p>
      <p className="mt-3 flex-1 text-[13px] text-secondary dark:text-accent/70">{addon.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-stroke-3 pt-4 dark:border-stroke-8">
        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${whoClass[addon.who]}`}>
          {addon.who}
        </span>
        <span className="ml-auto text-[13px] font-semibold">{addon.priceFrom}</span>
      </div>
    </div>
  );
}

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5 overflow-x-clip">
      {/* Hero */}
      <section className="pt-[120px] pb-16 lg:pt-[160px] lg:pb-20">
        <div className="main-container">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-orange">Managed Social Infrastructure</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                Your social media department, <span className="text-primary-500">delivered as infrastructure</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[640px]">
                Most tools give you software and leave the work to you. NativPost gives you the
                operating system and the operators. Buy one thing — Managed Social Infrastructure —
                then turn on whichever services you need, all running on the same backbone.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href={APP_CONFIGURE_URL}
                  className="flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-[0.98] dark:bg-accent dark:text-background-8"
                >
                  Get started
                </Link>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center rounded-xl border border-stroke-3 bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-background-2 dark:border-stroke-8 dark:bg-background-9 dark:text-accent"
                >
                  Talk to our team
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* The core */}
      <section className="pb-12 lg:pb-16">
        <div className="main-container">
          <div className="mb-8 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">The platform</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mt-4 text-heading-4">Start with the core</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto mt-2 max-w-[520px]">
                Real, brand-owned accounts and usage-based publishing. Everything else builds on this.
              </p>
            </RevealAnimation>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 md:gap-6">
            {MSI_CORE.map((addon, i) => (
              <RevealAnimation delay={0.2 + i * 0.1} key={addon.id}>
                <div className="col-span-12 md:col-span-6">
                  <AddonCard addon={addon} core />
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Meet your operator — the differentiator */}
      <section className="py-12 lg:py-20 bg-background-3 dark:bg-background-8">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">Operators, not services</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="mt-4 text-heading-3">You do not get software. You get a team.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-4">
                  Every add-on you activate is backed by a real, assigned operator — plus AI where it
                  helps. You see who is working on your account, their hours, and what they are doing
                  right now. It feels like you hired a social media department, because effectively
                  you did.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <ul className="mt-6 space-y-3 text-[14px] text-secondary dark:text-accent/80">
                  {['A named operator per active add-on', 'AI does the heavy lifting; humans review', 'Full transparency on tasks and status'].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="mt-0.5 size-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 16 16" aria-hidden>
                        <circle cx="8" cy="8" r="7" className="fill-emerald-100 dark:fill-emerald-500/20" />
                        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>

            {/* Operator card mock */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3}>
                <div className="mx-auto max-w-md rounded-2xl border border-stroke-3 bg-background-1 p-6 shadow-sm dark:border-stroke-8 dark:bg-background-9">
                  <div className="flex items-center gap-3 border-b border-stroke-3 pb-4 dark:border-stroke-8">
                    <div className="flex size-11 items-center justify-center rounded-full bg-primary-500/15 text-heading-6 font-semibold text-primary-500">
                      S
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">Sarah J.</p>
                      <p className="text-[12px] text-secondary dark:text-accent/60">Your assigned operator</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      Online
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 text-[13px]">
                    <span className="text-secondary dark:text-accent/70">Working hours</span>
                    <span className="font-medium">8AM–5PM EST</span>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-secondary dark:text-accent/60">
                    Current tasks
                  </p>
                  <ul className="mt-2 space-y-2">
                    {["Designing tomorrow's post", 'Reviewing new comments', 'Preparing the ad campaign'].map((task, i) => (
                      <li key={task} className="flex items-center gap-2.5 text-[13px]">
                        <span className={`size-1.5 rounded-full ${i === 0 ? 'bg-primary-500' : 'bg-stroke-4 dark:bg-stroke-7'}`} />
                        <span className={i === 0 ? 'font-medium' : 'text-secondary dark:text-accent/70'}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons grid */}
      <section className="py-12 lg:py-20">
        <div className="main-container">
          <div className="mb-10 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Add-ons</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mt-4 text-heading-3">Turn on what you need</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto mt-2 max-w-[560px]">
                Each add-on activates another capability on the same infrastructure — no new tools, no
                migration. Pay only for what you switch on.
              </p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {MSI_ADDONS.map((addon, i) => (
              <RevealAnimation delay={0.15 + (i % 3) * 0.1} key={addon.id}>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <AddonCard addon={addon} />
                </div>
              </RevealAnimation>
            ))}
          </div>
          <RevealAnimation delay={0.3}>
            <p className="mt-6 text-center text-xs text-secondary dark:text-accent/60">
              Add-ons roll out in stages. Want early access to one? Tell us which — it moves up the queue.
            </p>
          </RevealAnimation>
        </div>
      </section>

      {/* Same backbone */}
      <section className="py-12 lg:py-20 bg-background-3 dark:bg-background-8">
        <div className="main-container">
          <div className="mb-8 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4">One backbone, every service</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto mt-2 max-w-[560px]">
                Every add-on runs on the exact same infrastructure. The only thing that changes is who
                does the work — you, an operator, AI, or AI and a human together.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
              {backboneSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <span className="rounded-full border border-stroke-3 bg-background-1 px-3.5 py-2 text-[13px] font-medium text-secondary dark:border-stroke-8 dark:bg-background-9 dark:text-accent/80">
                    {step}
                  </span>
                  {i < backboneSteps.length - 1 && (
                    <span aria-hidden className="text-primary-500">→</span>
                  )}
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <div className="mx-auto max-w-4xl rounded-2xl bg-secondary p-8 text-center sm:p-12 dark:bg-background-8">
              <h2 className="text-heading-4 text-white">Run your social like infrastructure</h2>
              <p className="mx-auto mt-3 max-w-[520px] text-white/70">
                Start with managed accounts and publishing today. Activate the rest as you grow.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={APP_CONFIGURE_URL}
                  className="flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Configure your accounts
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default page;
