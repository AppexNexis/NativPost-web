import ComparisonTemplate from '@/components/compare/ComparisonTemplate';
import { comparisons, getComparison } from '@/data/comparisons';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return comparisons.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const data = getComparison(slug);
  if (!data) {
    return defaultMetadata;
  }
  const title = `NativPost vs ${data.competitor}: Which is Right for You? (2026)`;
  const description = `Compare NativPost and ${data.competitor} feature by feature — content creation, publishing, pricing, and done-for-you managed accounts. ${data.hero}`;
  const url = `https://nativpost.com/compare/${data.slug}`;
  return {
    ...defaultMetadata,
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...defaultMetadata.openGraph,
      url,
      title,
      description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const data = getComparison(slug);
  if (!data) {
    notFound();
  }

  const url = `https://nativpost.com/compare/${data.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // FAQ rich result — mirrors the visible Q&A on the page.
      ...(data.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${url}#faq`,
              mainEntity: data.faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            },
          ]
        : []),
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nativpost.com' },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://nativpost.com/compare' },
          { '@type': 'ListItem', position: 3, name: `NativPost vs ${data.competitor}`, item: url },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: `NativPost vs ${data.competitor}`,
        description: data.hero,
        isPartOf: { '@type': 'WebSite', name: 'NativPost', url: 'https://nativpost.com' },
        about: {
          '@type': 'SoftwareApplication',
          name: 'NativPost',
          applicationCategory: 'BusinessApplication',
          offers: { '@type': 'Offer', price: '19', priceCurrency: 'USD' },
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComparisonTemplate data={data} />
    </>
  );
};

export default page;
