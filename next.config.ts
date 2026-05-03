import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      // Contentful image CDN
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'downloads.ctfassets.net' },
      { protocol: 'https', hostname: 'assets.ctfassets.net' },
      { protocol: 'https', hostname: 'video.ctfassets.net' },
      // Uploadcare CDN — used by NativPost SEO tool for AI-generated article images
      { protocol: 'https', hostname: 'ucarecdn.com' },
      { protocol: 'https', hostname: '9c0v643oty.ucarecd.net' },
      // fal.ai — used by image engine for AI-generated featured images
      { protocol: 'https', hostname: 'fal.run' },
      { protocol: 'https', hostname: 'v3.fal.media' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      // NativPost image engine
      { protocol: 'https', hostname: 'image.nativpost.com' },
      // Common placeholder/unsplash fallbacks
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;