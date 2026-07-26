import type { Comparison, ComparisonRow } from '@/data/comparisons';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true) {
    return (
      <svg className="mx-auto size-5 text-emerald-500" fill="none" viewBox="0 0 20 20" aria-hidden>
        <circle cx="10" cy="10" r="9" className="fill-emerald-100 dark:fill-emerald-500/20" />
        <path d="M6 10l2.5 2.5L14 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="mx-auto block h-px w-4 bg-stroke-4 dark:bg-stroke-8" aria-hidden />;
  }
  return (
    <span className={`text-[13px] font-medium ${highlight ? 'text-primary-500' : 'text-secondary dark:text-accent/80'}`}>
      {value}
    </span>
  );
}

const ComparisonTemplate = ({ data }: { data: Comparison }) => {
  return (
    <main className="bg-background-2 dark:bg-background-5 overflow-x-clip">
      {/* Hero */}
      <section className="pt-[120px] pb-12 lg:pt-[160px] lg:pb-16">
        <div className="main-container">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Comparison · {data.category}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                NativPost vs <span className="text-primary-500">{data.competitor}</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[640px]">{data.hero}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="https://app.nativpost.com/sign-up"
                  className="flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-[0.98] dark:bg-accent dark:text-background-8"
                >
                  Start free — 7 days
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-center rounded-xl border border-stroke-3 bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-background-2 dark:border-stroke-8 dark:bg-background-9 dark:text-accent"
                >
                  See pricing
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="pb-12 lg:pb-16">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <RevealAnimation delay={0.2}>
              <div className="col-span-12 md:col-span-6">
                <div className="h-full rounded-2xl border-2 border-primary-500 bg-background-1 p-6 sm:p-8 dark:bg-background-9">
                  <div className="flex items-center gap-2">
                    <p className="text-heading-6 font-semibold">NativPost</p>
                    <span className="rounded-full bg-primary-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-primary-500">
                      Content engine + managed accounts
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] text-secondary dark:text-accent/70">
                    <span className="font-semibold text-foreground dark:text-accent">Best for:</span> {data.nativpostBestFor}
                  </p>
                  <p className="mt-2 text-[13px] text-secondary dark:text-accent/70">
                    <span className="font-semibold text-foreground dark:text-accent">Starts at:</span> From $19/mo · free 7-day trial
                  </p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="col-span-12 md:col-span-6">
                <div className="h-full rounded-2xl border border-stroke-3 bg-background-1 p-6 sm:p-8 dark:border-stroke-8 dark:bg-background-9">
                  <p className="text-heading-6 font-semibold">{data.competitor}</p>
                  <p className="mt-1 text-[13px] text-secondary dark:text-accent/70">{data.competitorTagline}</p>
                  <p className="mt-3 text-[13px] text-secondary dark:text-accent/70">
                    <span className="font-semibold text-foreground dark:text-accent">Best for:</span> {data.competitorBestFor}
                  </p>
                  <p className="mt-2 text-[13px] text-secondary dark:text-accent/70">
                    <span className="font-semibold text-foreground dark:text-accent">Starts at:</span> {data.competitorStartingPrice}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="pb-12 lg:pb-16">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <div className="mx-auto max-w-3xl rounded-2xl bg-background-3 p-6 sm:p-8 lg:p-10 dark:bg-background-8">
              <p className="text-secondary dark:text-accent/80">{data.summary}</p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="pb-12 lg:pb-16">
        <div className="main-container">
          <div className="mb-8 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4">Feature by feature</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mt-2">NativPost vs {data.competitor}, side by side.</p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.25}>
            <div className="mx-auto max-w-4xl overflow-x-auto rounded-2xl border border-stroke-3 dark:border-stroke-8">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-background-3 dark:bg-background-8">
                    <th className="w-[40%] py-4 pl-5 pr-3 text-left text-xs font-medium uppercase tracking-wider text-secondary dark:text-accent/70">
                      Feature
                    </th>
                    <th className="w-[30%] px-3 py-4 text-center text-xs font-semibold text-primary-500">NativPost</th>
                    <th className="w-[30%] px-3 py-4 text-center text-xs font-semibold text-foreground dark:text-accent">
                      {data.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stroke-3 dark:divide-stroke-8">
                  {data.rows.map((row: ComparisonRow) => (
                    <tr key={row.feature} className="transition-colors hover:bg-background-1/40 dark:hover:bg-background-9/30">
                      <td className="py-3.5 pl-5 pr-3 text-[13px] text-secondary dark:text-accent/70">{row.feature}</td>
                      <td className="bg-primary-500/5 px-3 py-3.5 text-center dark:bg-accent/5">
                        <Cell value={row.nativpost} highlight />
                      </td>
                      <td className="px-3 py-3.5 text-center">
                        <Cell value={row.competitor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Differentiators */}
      <section className="pb-12 lg:pb-16">
        <div className="main-container">
          <div className="mb-8 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4">Where NativPost pulls ahead</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {data.differentiators.map((d, i) => (
              <RevealAnimation delay={0.2 + i * 0.1} key={d.title}>
                <div className="col-span-12 md:col-span-4">
                  <div className="h-full rounded-2xl border border-stroke-3 bg-background-1 p-6 dark:border-stroke-8 dark:bg-background-9">
                    <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                      <span className="text-lg font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-heading-6">{d.title}</h3>
                    <p className="mt-2 text-[13px] text-secondary dark:text-accent/70">{d.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* When the competitor is a better fit — honesty section */}
      <section className="pb-12 lg:pb-16">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-dashed border-stroke-4 p-6 sm:p-8 dark:border-stroke-7">
              <p className="text-heading-6">When {data.competitor} might be the better fit</p>
              <p className="text-[13px] text-secondary dark:text-accent/70">{data.competitorBestFor}</p>
              <p className="text-[13px] text-secondary dark:text-accent/70">
                We would rather you pick the right tool. If that describes you, {data.competitor} is a
                strong choice. If you want the content created for you — and optionally the accounts run
                for you — that is exactly what NativPost is built for.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="pb-12 lg:pb-16">
          <div className="main-container">
            <div className="mb-8 text-center">
              <RevealAnimation delay={0.1}>
                <h2 className="text-heading-4">Questions</h2>
              </RevealAnimation>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {data.faqs.map((faq, i) => (
                <RevealAnimation delay={0.15 + i * 0.1} key={faq.question}>
                  <div className="rounded-2xl border border-stroke-3 bg-background-1 p-6 dark:border-stroke-8 dark:bg-background-9">
                    <p className="font-semibold">{faq.question}</p>
                    <p className="mt-2 text-[13px] text-secondary dark:text-accent/70">{faq.answer}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-[80px] lg:pb-[120px]">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <div className="mx-auto max-w-4xl rounded-2xl bg-secondary p-8 text-center sm:p-12 dark:bg-background-8">
              <h2 className="text-heading-4 text-white">See the difference for yourself</h2>
              <p className="mx-auto mt-3 max-w-[520px] text-white/70">
                Start free for 7 days — no credit card, no setup fee. Studio-crafted content for your
                brand, live today.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="https://app.nativpost.com/sign-up"
                  className="flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Start free trial
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default ComparisonTemplate;
