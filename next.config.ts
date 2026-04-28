import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',        // ← add this
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
      // Common placeholder/unsplash fallbacks
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

};

export default nextConfig;