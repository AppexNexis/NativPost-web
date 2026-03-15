// ============================================================
// CASE STUDY DETAILS PAGE — src/app/case-study/[slug]/page.tsx
// ============================================================

import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const caseStudies = getMarkDownData('src/data/case-study');
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Study — NativPost | Real Results for Real Brands',
};

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudyDetails slug={slug} />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Your turn"
        ctaHeading="Ready to become our next success story?"
        description="Start your 7-day free trial. We will build your Brand Profile and deliver your first studio-crafted content in under 48 hours."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};
CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;
