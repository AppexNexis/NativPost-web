// ============================================================
// BLOG PREVIEW SECTION — src/components/home/BlogPreviewSection.tsx
//
// Contentful-powered blog preview for the NativPost home/landing page.
// Shows: featured post hero + latest articles sidebar.
// Fully server-rendered (no 'use client') for best SEO & performance.
//
// Usage in src/app/page.tsx:
//   import BlogPreviewSection from '@/components/home/BlogPreviewSection';
//   ...
//   <BlogPreviewSection />
// ============================================================

import Link from 'next/link';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { getBlogPosts, getAuthorName, getFeaturedImageUrl } from '@/services/contentful';
import type { ContentfulBlogPost } from '@/services/contentful';
import getMarkDownData from '@/utils/getMarkDownData';
import type { IBlogPost } from '@/interface';

// ── Helpers ───────────────────────────────────────────────────────────────────

const formatDate = (dateStr?: string): string => {
    if (!dateStr) return '';
    try {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric',
        });
    } catch { return dateStr; }
};

const getTag = (post: ContentfulBlogPost): string =>
    post.fields?.tag || post.fields?.category || '';

const FALLBACKS = ['/images/ns-img-405.jpg', '/images/ns-img-435.png', '/images/ns-img-464.png'];

const getImageUrl = (post: ContentfulBlogPost, i = 0): string => {
    const url = getFeaturedImageUrl(post);
    if (url) return url;
    const md = post as ContentfulBlogPost & { _thumbnail?: string };
    return md._thumbnail || FALLBACKS[i % FALLBACKS.length] || '/og-image.jpg';
};

function markdownToContentful(
    posts: (IBlogPost & { [key: string]: unknown })[],
): ContentfulBlogPost[] {
    return posts.map((p) => ({
        sys: { id: p.slug, createdAt: p.publishDate || '', updatedAt: '' },
        fields: {
            title: p.title, slug: p.slug, shortDescription: p.description,
            publishedDate: p.publishDate, readTime: p.readTime, tag: p.tag,
            author: undefined, featuredImage: undefined, content: undefined,
        },
        _thumbnail: p.thumbnail,
    } as ContentfulBlogPost & { _thumbnail?: string }));
}

// ── Featured post card ────────────────────────────────────────────────────────

function FeaturedCard({ post }: { post: ContentfulBlogPost }) {
    const slug = post.fields?.slug;
    if (!slug) return null;
    const imgUrl = getImageUrl(post, 0);
    const tag = getTag(post);
    const author = getAuthorName(post.fields?.author);

    return (
        <Link
            href={`/blog/${slug}`}
            className="group block overflow-hidden rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 transition-all duration-500 hover:shadow-3 hover:border-primary-200 dark:hover:border-primary-800/60 hover:-translate-y-0.5"
        >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={imgUrl}
                    alt={post.fields?.title || ''}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 55vw"
                    priority
                    unoptimized={imgUrl.includes('ctfassets.net')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-8/70 via-background-8/10 to-transparent" />
                {/* Featured badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-primary-500/90 backdrop-blur-sm px-3 py-1 text-white text-tagline-3 font-semibold">
                    <svg className="size-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                </div>
                {/* Tag */}
                {tag && (
                    <div className="absolute bottom-4 left-4">
                        <span className="badge badge-primary text-[0.6rem] py-0.5 px-3 capitalize">{tag}</span>
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="p-6 md:p-7">
                <h3 className="text-heading-6 md:text-heading-5 font-medium line-clamp-2 mb-3 group-hover:text-primary-500 transition-colors duration-300 leading-snug">
                    {post.fields?.title}
                </h3>
                {post.fields?.shortDescription && (
                    <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 mb-4 leading-relaxed">
                        {post.fields.shortDescription}
                    </p>
                )}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-tagline-3 text-secondary/50 dark:text-accent/50">
                    {formatDate(post.fields?.publishedDate) && (
                        <time dateTime={post.fields?.publishedDate}>
                            {formatDate(post.fields?.publishedDate)}
                        </time>
                    )}
                    {author && <><span aria-hidden>·</span><span>{author}</span></>}
                    {post.fields?.readTime && <><span aria-hidden>·</span><span>{post.fields.readTime}</span></>}
                </div>
            </div>
        </Link>
    );
}

// ── Sidebar post row ──────────────────────────────────────────────────────────

function SidebarRow({ post, index }: { post: ContentfulBlogPost; index: number }) {
    const slug = post.fields?.slug;
    if (!slug) return null;
    const imgUrl = getImageUrl(post, index);

    return (
        <Link
            href={`/blog/${slug}`}
            className="group flex gap-3 items-start py-3.5 border-b border-stroke-2 dark:border-stroke-7 last:border-0 last:pb-0 first:pt-0 transition-opacity hover:opacity-75"
        >
            <div className="shrink-0 size-[62px] rounded-xl overflow-hidden bg-background-4 dark:bg-background-9">
                <Image
                    src={imgUrl}
                    alt={post.fields?.title || ''}
                    width={62}
                    height={62}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    unoptimized={imgUrl.includes('ctfassets.net')}
                />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-tagline-2 font-medium leading-snug line-clamp-2 text-secondary dark:text-accent group-hover:text-primary-500 transition-colors mb-1">
                    {post.fields?.title}
                </p>
                <time className="text-tagline-3 text-primary-500 font-medium">
                    {formatDate(post.fields?.publishedDate)}
                </time>
            </div>
        </Link>
    );
}

// ── Grid preview card ─────────────────────────────────────────────────────────

function GridCard({ post, index }: { post: ContentfulBlogPost; index: number }) {
    const slug = post.fields?.slug;
    if (!slug) return null;
    const imgUrl = getImageUrl(post, index);
    const tag = getTag(post);

    return (
        <article className="group overflow-hidden rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 transition-all duration-500 hover:shadow-3 hover:border-primary-200 dark:hover:border-primary-800/60 hover:-translate-y-1 flex flex-col">
            <Link href={`/blog/${slug}`} className="block relative aspect-[16/9] overflow-hidden">
                <Image
                    src={imgUrl}
                    alt={post.fields?.title || ''}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    unoptimized={imgUrl.includes('ctfassets.net')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-8/40 to-transparent" />
                {tag && (
                    <div className="absolute bottom-3 left-3">
                        <span className="badge badge-primary text-[0.6rem] py-0.5 px-3 capitalize">{tag}</span>
                    </div>
                )}
            </Link>
            <div className="p-5 md:p-6 flex-1 flex flex-col">
                <Link href={`/blog/${slug}`} className="flex-1">
                    <h3 className="text-heading-6 font-medium line-clamp-2 mb-2 group-hover:text-primary-500 transition-colors duration-300 leading-snug">
                        {post.fields?.title}
                    </h3>
                    {post.fields?.shortDescription && (
                        <p className="text-tagline-2 text-secondary/55 dark:text-accent/55 line-clamp-2 mb-3">
                            {post.fields.shortDescription}
                        </p>
                    )}
                </Link>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-tagline-3 text-secondary/50 dark:text-accent/50">
                    {formatDate(post.fields?.publishedDate) && (
                        <time dateTime={post.fields?.publishedDate}>{formatDate(post.fields?.publishedDate)}</time>
                    )}
                </div>
            </div>
        </article>
    );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default async function BlogPreviewSection() {
    // Fetch from Contentful, fall back to markdown
    let posts: ContentfulBlogPost[] = await getBlogPosts();
    if (!posts.length) {
        const mdPosts = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
        posts = markdownToContentful(mdPosts);
    }

    if (!posts.length) return null;

    const featuredPost = posts[0];
    const sidebarPosts = posts.slice(1, 6);
    const gridPosts = posts.slice(1, 4); // show 3 more below hero (total ~4 posts visible)

    return (
        <section className="bg-background-2 dark:bg-background-7 py-[80px] md:py-[100px]">
            <div className="main-container">

                {/* ── Section heading ── */}
                <div className="mb-10 md:mb-14 flex flex-wrap items-end justify-between gap-6">
                    <div className="space-y-3">
                        <RevealAnimation delay={0.1}>
                            <span className="badge badge-green">From the blog</span>
                        </RevealAnimation>
                        <RevealAnimation delay={0.2}>
                            <h2 className="max-w-[600px]">
                                Insights on building an{' '}
                                <span className="text-primary-500">authentic brand</span> online
                            </h2>
                        </RevealAnimation>
                        <RevealAnimation delay={0.3}>
                            <p className="max-w-[500px]">
                                Tips on organic social media growth, anti-slop content strategy,
                                and brand voice development, from the NativPost team.
                            </p>
                        </RevealAnimation>
                    </div>

                    {/* View all button */}
                    <RevealAnimation delay={0.3}>
                        <Link
                            href="/blog"
                            className="btn btn-md btn-white dark:btn-transparent hover:btn-secondary dark:hover:btn-accent shrink-0"
                        >
                            <span>View all articles</span>
                        </Link>
                    </RevealAnimation>
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-stroke-2 dark:bg-stroke-7 mb-10 md:mb-12" />

                {/* ── Featured + Sidebar ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-6 xl:gap-8 items-start mb-8 md:mb-10">
                    <RevealAnimation delay={0.1}>
                        <FeaturedCard post={featuredPost} />
                    </RevealAnimation>

                    <aside className="hidden lg:block">
                        <RevealAnimation delay={0.2}>
                            <div className="rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 p-5">
                                <h3 className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/50 dark:text-accent/50 mb-4 pb-3 border-b border-stroke-2 dark:border-stroke-7">
                                    Latest Articles
                                </h3>
                                <div>
                                    {sidebarPosts.map((post, i) => (
                                        <SidebarRow key={post.sys?.id || i} post={post} index={i + 1} />
                                    ))}
                                </div>
                            </div>
                        </RevealAnimation>
                    </aside>
                </div>

                {/* ── Extra grid cards (mobile: shows more; desktop: below hero) ── */}
                {gridPosts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:hidden xl:grid">
                        {gridPosts.map((post, i) => (
                            <RevealAnimation key={post.sys?.id || i} delay={0.1 + i * 0.05}>
                                <GridCard post={post} index={i + 1} />
                            </RevealAnimation>
                        ))}
                    </div>
                )}

                {/* ── View all CTA (bottom) ── */}
                <RevealAnimation delay={0.4}>
                    <div className="mt-10 flex justify-center">
                        <Link href="/blog" className="btn btn-md btn-secondary dark:btn-transparent hover:btn-white dark:hover:btn-accent">
                            <span>Read our blog</span>
                        </Link>
                    </div>
                </RevealAnimation>
            </div>
        </section>
    );
}