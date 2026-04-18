import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import FeaturesV3 from '@/components/home/FeaturesV3';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import SocialActivity from '@/components/home/SocialActivity';
import Testimonial from '@/components/home/Testimonial';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NativPost — Studio-Crafted Social Media Content for Your Brand',
  description:
    'Agency-quality branded content — graphics, copy, and scheduling — automatically published to your social channels. The antidote to generic, robotic content. Plans from $19/mo.',
  openGraph: {
    type: 'website',
    siteName: 'NativPost',
    url: 'https://nativpost.com',
    title: 'NativPost — Studio-Crafted Social Media Content for Your Brand',
    description:
      'Agency-quality branded content — graphics, copy, and scheduling — automatically published to your social channels. Plans from $19/mo.',
    images: [{ url: 'https://nativpost.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NativPost — Studio-Crafted Social Media Content for Your Brand',
    description:
      'Agency-quality branded content — graphics, copy, and scheduling — automatically published to your social channels. Plans from $19/mo.',
    images: ['https://nativpost.com/og-image.jpg'],
  },
  keywords: [
    'social media management',
    'content creation',
    'brand content',
    'social media scheduling',
    'organic content',
    'social media marketing',
    'branded content',
    'content engine',
  ],
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5 overflow-x-hidden">
      <Hero />
      <Services />
      <Features />
      <FeaturesV2 />
      <FeaturesV3 />
      <SocialActivity />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <CTA />
    </main>
  );
};

export default page;
