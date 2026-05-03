// ============================================================
// NAVBAR SERVER WRAPPER — src/components/shared/navbar/NavbarServer.tsx
//
// Server component that fetches the latest blog post and passes
// it to the client-side Navbar so CompanyMenu can show a live
// "Latest from the blog" card without any client-side fetching.
// ============================================================

import { getBlogPosts, getFeaturedImageUrl } from '@/services/contentful';
import Navbar from './Navbar';

export interface LatestNavPost {
    title: string;
    slug: string;
    shortDescription: string;
    imageUrl: string;
}

export default async function NavbarServer() {
    let latestPost: LatestNavPost | null = null;

    try {
        const posts = await getBlogPosts();
        const post = posts?.[0];
        if (post?.fields?.slug) {
            latestPost = {
                title: post.fields.title || 'Latest from NativPost',
                slug: post.fields.slug,
                shortDescription: post.fields.shortDescription || 'Read our latest article on social media strategy and brand building.',
                imageUrl: getFeaturedImageUrl(post),
            };
        }
    } catch {
        // Silently fall back to null — Navbar will use the static fallback
    }

    return <Navbar latestPost={latestPost} />;
}