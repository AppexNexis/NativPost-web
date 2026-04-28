// ============================================================
// BLOG DETAIL PAGE — src/app/blog/[slug]/page.tsx
// ============================================================

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { defaultMetadata } from '@/utils/generateMetaData';
import CTA from '@/components/shared/cta/CTA';
import {
  getBlogPostBySlug,
  getBlogPosts,
  getRelatedPosts,
  getAuthorName,
  getFeaturedImageUrl,
  extractSEOData,
} from '@/services/contentful';
import type { ContentfulBlogPost } from '@/services/contentful';
import ContentfulRichText from '@/components/blog/ContentfulRichText';
import { extractHeadings } from '@/utils/richTextUtils';
import StickyTableOfContents from '@/components/blog/StickyTableOfContents';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import type { IBlogPost } from '@/interface';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

// ── ISR / Static params ───────────────────────────────────────────────────────

export async function generateStaticParams() {
  const contentfulPosts = await getBlogPosts();
  if (contentfulPosts.length) {
    return contentfulPosts
      .map((p) => ({ slug: p.fields?.slug }))
      .filter((p): p is { slug: string } => Boolean(p.slug));
  }
  const mdPosts = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  return mdPosts.map((p) => ({ slug: p.slug }));
}

export const revalidate = 300;

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    try {
      const md = getMarkDownContent('src/data/blogs/', slug);
      return {
        ...defaultMetadata,
        title: `${md.data.title || 'Blog'} — NativPost`,
        description: md.data.description as string | undefined,
      };
    } catch {
      return { ...defaultMetadata, title: 'Blog — NativPost' };
    }
  }

  const seo = extractSEOData(post.fields?.seoFields);
  const imgUrl = getFeaturedImageUrl(post);
  const title = seo.pageTitle || `${post.fields?.title} — NativPost`;
  const description = seo.pageDescription || post.fields?.shortDescription || '';

  return {
    ...defaultMetadata,
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: seo.canonicalUrl || `https://nativpost.com/blog/${slug}`,
      images: imgUrl ? [{ url: imgUrl }] : undefined,
      publishedTime: post.fields?.publishedDate,
    },
    twitter: { card: 'summary_large_image', title, description, images: imgUrl ? [imgUrl] : undefined },
    robots: { index: !seo.noindex, follow: !seo.nofollow },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  } catch { return dateStr; }
};

const estimateReadTime = (content: unknown): string => {
  try {
    const words = JSON.stringify(content).split(/\s+/).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
  } catch { return ''; }
};

const getAuthorInitials = (author: unknown): string => {
  const name = getAuthorName(author);
  return name.split(' ').map((n: string) => n[0] || '').join('').slice(0, 2).toUpperCase() || 'NP';
};

// ── Related Card ──────────────────────────────────────────────────────────────

function RelatedCard({ post }: { post: ContentfulBlogPost }) {
  const slug = post.fields?.slug;
  if (!slug) return null;
  const imgUrl = getFeaturedImageUrl(post);
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex gap-4 items-start p-4 rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 hover:border-primary-300 dark:hover:border-primary-800/60 hover:shadow-2 transition-all duration-300"
    >
      {imgUrl && (
        <div className="shrink-0 w-20 h-[60px] rounded-xl overflow-hidden bg-background-4">
          <Image src={imgUrl} alt={post.fields?.title || ''} width={80} height={60}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-tagline-2 font-medium leading-snug line-clamp-2 group-hover:text-primary-500 transition-colors mb-1">
          {post.fields?.title}
        </p>
        <time className="text-tagline-3 text-primary-500 font-medium">
          {formatDate(post.fields?.publishedDate)}
        </time>
      </div>
    </Link>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getBlogPostBySlug(slug);

  type MarkdownBlog = {
    content: string;
    data: {
      title?: string; author?: string; authorImage?: string;
      publishDate?: string; readTime?: string; tag?: string;
      thumbnail?: string; description?: string;
    };
  };
  let mdBlog: MarkdownBlog | null = null;
  if (!post) {
    try {
      mdBlog = getMarkDownContent('src/data/blogs/', slug) as MarkdownBlog;
    } catch {
      notFound();
    }
  }

  const title = post?.fields?.title || mdBlog?.data?.title || 'Untitled';
  const description = post?.fields?.shortDescription || mdBlog?.data?.description || '';
  const tag = post?.fields?.tag || post?.fields?.category || mdBlog?.data?.tag || '';
  const publishedDate = post?.fields?.publishedDate || mdBlog?.data?.publishDate || '';
  const readTime = post?.fields?.readTime || mdBlog?.data?.readTime || estimateReadTime(post?.fields?.content);
  const authorName = post?.fields?.author ? getAuthorName(post.fields.author) : (mdBlog?.data?.author || 'NativPost Team');
  const authorInitials = getAuthorInitials(post?.fields?.author || authorName);
  const featuredImageUrl = post ? getFeaturedImageUrl(post) : (mdBlog?.data?.thumbnail || '');

  const headings = post?.fields?.content ? extractHeadings(post.fields.content) : [];

  let relatedPosts: ContentfulBlogPost[] = [];
  if (post?.fields?.relatedBlogPosts?.length) {
    relatedPosts = post.fields.relatedBlogPosts.slice(0, 3);
  } else if (post && tag) {
    relatedPosts = await getRelatedPosts(tag, slug, 3);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: featuredImageUrl || undefined,
    datePublished: publishedDate,
    author: { '@type': 'Person', name: authorName },
    publisher: { '@type': 'Organization', name: 'NativPost', logo: { '@type': 'ImageObject', url: 'https://nativpost.com/images/shared/logo.svg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://nativpost.com/blog/${slug}` },
  };

  return (
    <main className="bg-background-1 dark:bg-background-7 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO IMAGE (full width, behind navbar) ── */}
      {featuredImageUrl ? (
        <div className="relative w-full" style={{ paddingTop: '70px' }}>
          <div className="relative w-full" style={{ aspectRatio: '21/8', minHeight: '280px', maxHeight: '520px' }}>
            <Image
              src={featuredImageUrl}
              alt={title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              unoptimized={featuredImageUrl.includes('ctfassets.net')}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-background-1 dark:to-background-7" />
          </div>
        </div>
      ) : (
        /* No hero image — push content below navbar */
        <div style={{ paddingTop: '70px' }} />
      )}

      {/* ── ARTICLE CONTAINER ── */}
      <div className="main-container">

        {/* Back link */}
        <Link
          href="/blog"
          className="mt-8 md:mt-10 inline-flex items-center gap-2 text-tagline-3 font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
        >
          <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>

        {/* ── ARTICLE HEADER ── */}
        <header className="mt-6 md:mt-8 pb-8 max-w-[780px]">
          {tag && (
            <span className="badge badge-primary mb-4 capitalize">{tag}</span>
          )}

          <h1 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-medium leading-[1.1] tracking-tight mb-5">
            {title}
          </h1>

          {description && (
            <p className="text-[1.0625rem] text-secondary/65 dark:text-accent/65 leading-[1.75] mb-6 max-w-[640px]">
              {description}
            </p>
          )}

          {/* Byline row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary-100 dark:bg-primary-800/30 border border-primary-200 dark:border-primary-700/40 flex items-center justify-center text-tagline-3 font-bold text-primary-600 dark:text-primary-300 shrink-0 select-none">
                {authorInitials}
              </div>
              <div>
                <p className="text-tagline-2 font-semibold text-secondary dark:text-accent leading-tight">{authorName}</p>
                <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">Author</p>
              </div>
            </div>

            {publishedDate && (
              <div className="flex items-center gap-1.5 text-tagline-2 text-secondary/55 dark:text-accent/55">
                <svg className="size-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                </svg>
                <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
              </div>
            )}

            {readTime && (
              <div className="flex items-center gap-1.5 text-tagline-2 text-secondary/55 dark:text-accent/55">
                <svg className="size-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime}
              </div>
            )}
          </div>
        </header>

        {/* Divider */}
        <div className="h-px bg-stroke-2 dark:bg-stroke-7 mb-10 md:mb-12" />

        {/* ── BODY: CONTENT + SIDEBAR ── */}
        {/*
          Lenis is disabled on this page via data-lenis-prevent on <main>,
          so native scroll is active and CSS position:sticky works correctly.
          Sidebar column uses self-start so it doesn't stretch to article height,
          and the sticky element tracks the viewport for the full article length.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_288px] xl:grid-cols-[1fr_304px] gap-10 xl:gap-14 items-start pb-16 lg:pb-24">

          {/* ── LEFT: Article ── */}
          <article className="blog-article-body min-w-0">
            {post?.fields?.content ? (
              <ContentfulRichText document={post.fields.content} />
            ) : mdBlog ? (
              <div className="blog-markdown-body">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>
                  {mdBlog.content}
                </ReactMarkdown>
              </div>
            ) : (
              <p className="italic text-secondary/40 dark:text-accent/40">No content available.</p>
            )}

            {/* Bottom share bar */}
            <div className="mt-12 pt-8 border-t border-stroke-2 dark:border-stroke-7">
              <p className="text-tagline-2 font-semibold text-secondary dark:text-accent mb-4">Share this post</p>
              <ul className="flex items-center gap-3">
                {[
                  {
                    label: 'Facebook',
                    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://nativpost.com/blog/${slug}`)}`,
                    icon: <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm1.006 9.5h1.744l.25-2H11v-1.25c0-.576.155-1 .953-1H13V5.16a13.8 13.8 0 00-1.6-.08c-1.583 0-2.394.885-2.394 2.38V9H7.25v2H9v5.44a8.7 8.7 0 002 0V11z" fill="currentColor" />,
                  },
                  {
                    label: 'X (Twitter)',
                    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://nativpost.com/blog/${slug}`)}&text=${encodeURIComponent(title)}`,
                    icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />,
                  },
                  {
                    label: 'LinkedIn',
                    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://nativpost.com/blog/${slug}`)}`,
                    icon: <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM6.5 8.25h1.75v5.5H6.5v-5.5zm.875-2.5a.875.875 0 110 1.75.875.875 0 010-1.75zm3.125 2.5h1.675v.75h.025c.233-.44.8-1 1.65-1 1.766 0 2.15 1.162 2.15 2.675v3.075H14.25v-2.725c0-.65-.012-1.487-.905-1.487-.907 0-1.045.708-1.045 1.44v2.772H10.5v-5.5z" fill="currentColor" />,
                  },
                ].map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share on ${label}`}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-7 text-secondary/60 dark:text-accent/60 bg-white dark:bg-background-8 hover:bg-primary-500 hover:border-primary-500 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 20 20" fill="none">
                        {icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ── RIGHT: Sidebar — simple CSS sticky (works because Lenis disabled) ── */}
          <aside className="hidden lg:block self-start">
            <div className="sticky top-[104px] flex flex-col gap-4">

              {/* Table of Contents — fixed panel, Lenis-proof */}
              {headings.length > 0 && (
                <StickyTableOfContents headings={headings} title={title} />
              )}

              {/* Written by card */}
              <div className="rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 p-5">
                <p className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/40 dark:text-accent/40 mb-4">
                  Written by
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-full bg-primary-100 dark:bg-primary-800/30 border border-primary-200 dark:border-primary-700/40 flex items-center justify-center text-tagline-2 font-bold text-primary-600 dark:text-primary-300 shrink-0 select-none">
                    {authorInitials}
                  </div>
                  <div>
                    <p className="text-tagline-1 font-semibold text-secondary dark:text-accent">{authorName}</p>
                    <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">NativPost</p>
                  </div>
                </div>
              </div>

              {/* Related articles in sidebar */}
              {relatedPosts.length > 0 && (
                <div className="rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 p-5">
                  <p className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/40 dark:text-accent/40 mb-4 pb-3 border-b border-stroke-2 dark:border-stroke-7">
                    Related Articles
                  </p>
                  <div className="space-y-3">
                    {relatedPosts.map((rel, i) => {
                      const relSlug = rel.fields?.slug;
                      if (!relSlug) return null;
                      const relImg = getFeaturedImageUrl(rel);
                      return (
                        <Link key={rel.sys?.id || i} href={`/blog/${relSlug}`}
                          className="group flex gap-3 items-start py-2.5 border-b border-stroke-1 dark:border-stroke-7 last:border-0 last:pb-0"
                        >
                          {relImg && (
                            <div className="shrink-0 size-12 rounded-lg overflow-hidden bg-background-4">
                              <Image src={relImg} alt={rel.fields?.title || ''} width={48} height={48}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
                                unoptimized={relImg.includes('ctfassets.net')} />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-tagline-2 font-medium leading-snug line-clamp-2 group-hover:text-primary-500 transition-colors mb-1">
                              {rel.fields?.title}
                            </p>
                            <time className="text-tagline-3 text-primary-500 font-medium">
                              {formatDate(rel.fields?.publishedDate)}
                            </time>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* ── Mobile: Related posts below content ── */}
        {relatedPosts.length > 0 && (
          <section className="lg:hidden pb-14">
            <h2 className="text-heading-6 font-medium mb-5">Related Articles</h2>
            <div className="flex flex-col gap-3">
              {relatedPosts.map((rel, i) => (
                <RelatedCard key={rel.sys?.id || i} post={rel} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── CTA ── */}
      <CTA
        className="dark:bg-background-7 bg-background-3"
        badgeClass="!badge-yellow-v2"
        badgeText="Ready to transform your social media?"
        ctaHeading="Let NativPost handle your content creation"
        description="Start your 7-day free trial. Studio-crafted content for your brand, published everywhere — Credit card required."
        ctaBtnText="Start free trial"
      />
    </main>
  );
}