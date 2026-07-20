import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import FeaturesV3 from '@/components/home/FeaturesV3';
import GrowthFeatures from '@/components/home/GrowthFeatures';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Services from '@/components/home/Services';
import ShowcaseGrid from '@/components/home/ShowcaseGrid';
import SocialActivity from '@/components/home/SocialActivity';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NativPost: Studio-Crafted Social Content for Your Brand',
  description:
    'A month of on-brand content, shipped in one afternoon. NativPost drafts, renders, and auto-publishes video, carousels, and images across ten platforms. Human review on Pro and up. From $19/mo.',
  openGraph: {
    type: 'website',
    siteName: 'NativPost',
    url: 'https://nativpost.com',
    title: 'NativPost: Studio-Crafted Social Content for Your Brand',
    description:
      'A month of on-brand content, shipped in one afternoon. NativPost drafts, renders, and auto-publishes across ten platforms. From $19/mo.',
    images: [{ url: 'https://nativpost.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NativPost: Studio-Crafted Social Content for Your Brand',
    description:
      'A month of on-brand content, shipped in one afternoon. Ten AI models, ten platforms, one Brand Profile.',
    images: ['https://nativpost.com/og-image.jpg'],
  },
  keywords: [
    'social media management',
    'AI content creation',
    'brand content',
    'social media scheduling',
    'AI video generation',
    'social media marketing',
    'branded content',
    'content engine',
  ],
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5 overflow-x-clip">
      <Hero />
      <ShowcaseGrid />
      <GrowthFeatures />
      <HowItWorks />
      <Services />
      <Features />
      <FeaturesV2 />
      <FeaturesV3 />
      <SocialActivity />
      <BlogPreviewSection />
      <CTA />
    </main>
  );
};

export default page;
