import RevealAnimation from '@/components/animation/RevealAnimation';
import { comparisons } from '@/data/comparisons';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'NativPost Comparisons: How We Stack Up vs Other Social Tools',
  description:
    'Honest, side-by-side comparisons of NativPost vs Buffer, Hootsuite, Sprout Social, Later, Ocoya, Fastlane and more — content creation, publishing, pricing, and done-for-you managed accounts.',
  alternates: { canonical: 'https://nativpost.com/compare' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://nativpost.com/compare#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nativpost.com' },
        { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://nativpost.com/compare' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://nativpost.com/compare#list',
      name: 'NativPost comparisons',
      itemListElement: comparisons.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `NativPost vs ${c.competitor}`,
        url: `https://nativpost.com/compare/${c.slug}`,
      })),
    },
  ],
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5 overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="pt-[120px] pb-16 lg:pt-[160px] lg:pb-24">
        <div className="main-container">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Comparisons</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                How NativPost <span className="text-primary-500">compares</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                Honest, side-by-side breakdowns against the tools you are probably weighing us against.
                We tell you where each one wins, and where NativPost goes further.
              </p>
            </RevealAnimation>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {comparisons.map((c, i) => (
              <RevealAnimation delay={0.2 + i * 0.05} key={c.slug}>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <Link
                    href={`/compare/${c.slug}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-stroke-3 bg-background-1 p-6 transition-all hover:-translate-y-1 hover:shadow-sm dark:border-stroke-8 dark:bg-background-9"
                  >
                    <div>
                      <span className="text-tagline-3 uppercase tracking-wider text-secondary dark:text-accent/60">
                        {c.category}
                      </span>
                      <p className="mt-2 text-heading-6">
                        NativPost vs <span className="text-primary-500">{c.competitor}</span>
                      </p>
                      <p className="mt-2 text-[13px] text-secondary dark:text-accent/70">{c.competitorTagline}</p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground dark:text-accent">
                      Read comparison
                      <svg className="size-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 12 12" aria-hidden>
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
