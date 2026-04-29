// ============================================================
// SITEMAP — src/app/sitemap.ts
//
// Dynamically generates the XML sitemap for NativPost.
// Covers:
//   • All static marketing pages
//   • Blog posts (Contentful-first, markdown fallback)
//   • Dynamic routes: career, case-study, whitepaper, glossary, team
//
// Next.js serves this at https://nativpost.com/sitemap.xml
// ============================================================

import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/services/contentful';
import getMarkDownData from '@/utils/getMarkDownData';
import type { IBlogPost } from '@/interface';

const BASE_URL = 'https://nativpost.com';

// ── Priority / changefreq guide ───────────────────────────────────────────────
// 1.0  → homepage
// 0.9  → high-value conversion pages (pricing, features, services)
// 0.8  → blog index, individual blog posts
// 0.7  → supporting marketing pages
// 0.5  → legal, policy, secondary pages
// 0.3  → noindex candidates (not included here)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // ── 1. Static pages ─────────────────────────────────────────────────────────

    const staticPages: MetadataRoute.Sitemap = [
        // ── Tier 1: Highest priority ──
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/features`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },

        // ── Tier 2: Service sub-pages ──
        {
            url: `${BASE_URL}/services/content-engine`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services/anti-slop`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services/brand-profile`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services/cross-platform`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services/approval-scheduling`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services/analytics`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // ── Tier 2: Marketing & trust pages ──
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/use-case`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/why-choose-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/integration`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/case-study`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/customer`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/testimonial`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/success-stories`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/our-manifesto`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/process`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/security`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/contact-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/affiliates`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/referral-program`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/press`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/career`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/team`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/glossary`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/whitepaper`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/tutorial`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/changelog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/support`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/documentation`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // ── Tier 3: Legal & policy pages ──
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${BASE_URL}/terms-conditions`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${BASE_URL}/refund-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${BASE_URL}/affiliate-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${BASE_URL}/gdpr`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${BASE_URL}/legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },

        // NOTE: /login and /signup are intentionally excluded from sitemap
        // They are noindex pages (auth flows, not indexable content)
    ];

    // ── 2. Blog posts (Contentful-first, markdown fallback) ─────────────────────

    let blogSlugs: string[] = [];

    try {
        const contentfulPosts = await getBlogPosts();
        if (contentfulPosts.length > 0) {
            blogSlugs = contentfulPosts
                .map((p) => p.fields?.slug)
                .filter((s): s is string => Boolean(s));
        }
    } catch {
        // Contentful not configured — fall back to markdown
    }

    if (!blogSlugs.length) {
        try {
            const mdPosts = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
            blogSlugs = mdPosts.map((p) => p.slug).filter(Boolean);
        } catch {
            // No markdown posts either
        }
    }

    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // ── 3. Dynamic routes — career ───────────────────────────────────────────────

    let careerPages: MetadataRoute.Sitemap = [];
    try {
        const careerPosts = getMarkDownData('src/data/career');
        careerPages = careerPosts
            .filter((p) => p.slug)
            .map((p) => ({
                url: `${BASE_URL}/career/${p.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.5,
            }));
    } catch { /* no career posts */ }

    // ── 4. Dynamic routes — case study ──────────────────────────────────────────

    let caseStudyPages: MetadataRoute.Sitemap = [];
    try {
        const csPosts = getMarkDownData('src/data/case-study');
        caseStudyPages = csPosts
            .filter((p) => p.slug)
            .map((p) => ({
                url: `${BASE_URL}/case-study/${p.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            }));
    } catch { /* no case studies */ }

    // ── 5. Dynamic routes — whitepaper ──────────────────────────────────────────

    let whitepaperPages: MetadataRoute.Sitemap = [];
    try {
        const wPosts = getMarkDownData('src/data/whitepaper');
        whitepaperPages = wPosts
            .filter((p) => p.slug)
            .map((p) => ({
                url: `${BASE_URL}/whitepaper/${p.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            }));
    } catch { /* no whitepapers */ }

    // ── 6. Dynamic routes — glossary ────────────────────────────────────────────

    let glossaryPages: MetadataRoute.Sitemap = [];
    try {
        // Glossary JSON is at src/data/json/glossary/glossary.json
        // Structure: [{ letter: string, items: [{ slug: string, ... }] }]
        const { default: glossaryData } = await import('@/data/json/glossary/glossary.json');
        glossaryPages = (glossaryData as { letter: string; items: { slug: string }[] }[])
            .flatMap((section) => section.items)
            .filter((item) => item.slug)
            .map((item) => ({
                url: `${BASE_URL}/glossary/${item.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.5,
            }));
    } catch { /* no glossary data */ }

    // ── Combine & return ─────────────────────────────────────────────────────────

    return [
        ...staticPages,
        ...blogPages,
        ...caseStudyPages,
        ...careerPages,
        ...whitepaperPages,
        ...glossaryPages,
    ];
}