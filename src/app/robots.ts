// ============================================================
// ROBOTS — src/app/robots.ts
//
// Generates /robots.txt via Next.js Metadata API.
// Rules:
//   • Allow all public marketing pages
//   • Block auth flows (/login, /signup) — not useful for crawlers
//   • Block API routes and internal Next.js paths
//   • Reference the sitemap for fast discovery
// ============================================================

import { MetadataRoute } from 'next';

const BASE_URL = 'https://nativpost.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // Main rule: allow all crawlers full access to marketing content
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/login',
                    '/signup',
                    '/api/',
                    '/_next/',
                    '/static/',
                ],
            },
            {
                // AdsBot crawlers — allow pricing and landing pages only
                userAgent: 'AdsBot-Google',
                allow: [
                    '/',
                    '/pricing',
                    '/features',
                    '/services',
                    '/blog',
                ],
                disallow: '/api/',
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}