// ============================================================
// BLOG DETAIL PAGE — src/app/blog/[slug]/page.tsx (Contentful-powered)
//
// Post Bridge-inspired layout:
//   • Full-width hero image with gradient scrim
//   • Article header: tag, title, description, author byline, meta
//   • Two-column body: article content + sticky sidebar
//   • Sidebar: Table of Contents (with active section), Share buttons, Related posts
//   • Bottom share bar
//   • Related posts section at page bottom
//   • Falls back to markdown content if Contentful is not configured
//   • Full ISR, OG/Twitter meta, JSON-LD schema
// ============================================================

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { defaultMetadata } from '@/utils/generateMetaData';
import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import {
  getBlogPostBySlug,
  getBlogPosts,
  getRelatedPosts,
  getAuthorName,
  getFeaturedImageUrl,
  extractSEOData,
  toHttps,
} from '@/services/contentful';
import type { ContentfulBlogPost } from '@/services/contentful';
import ContentfulRichText from '@/components/blog/ContentfulRichText';
import { extractHeadings } from '@/utils/richTextUtils';
import TableOfContents from '@/components/blog/StickyTableOfContents';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import type { IBlogPost } from '@/interface';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

// ── Static params (ISR) ───────────────────────────────────────────────────────

export async function generateStaticParams() {
  const contentfulPosts = await getBlogPosts();
  if (contentfulPosts.length) {
    return contentfulPosts
      .map((p) => ({ slug: p.fields?.slug }))
      .filter((p): p is { slug: string } => Boolean(p.slug));
  }
  // Markdown fallback
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
    // Try markdown
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imgUrl ? [imgUrl] : undefined,
    },
    robots: {
      index: !seo.noindex,
      follow: !seo.nofollow,
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
};

const estimateReadTime = (content: unknown): string => {
  try {
    const wordCount = JSON.stringify(content).split(/\s+/).length;
    return `${Math.max(1, Math.round(wordCount / 200))} min read`;
  } catch {
    return '';
  }
};

const getAuthorInitials = (author: unknown): string => {
  const name = getAuthorName(author);
  return name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'NP';
};

// ── Related Post Card ─────────────────────────────────────────────────────────

function RelatedCard({ post, index }: { post: ContentfulBlogPost; index: number }) {
  const slug = post.fields?.slug;
  if (!slug) return null;
  const imgUrl = getFeaturedImageUrl(post) || `/images/ns-img-${405 + index * 30}.jpg`;
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 transition-all duration-500 hover:shadow-3 hover:border-primary-200 dark:hover:border-primary-800/60 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={imgUrl}
          alt={post.fields?.title || ''}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-tagline-1 font-medium line-clamp-2 group-hover:text-primary-500 transition-colors mb-2">
          {post.fields?.title}
        </h3>
        <time className="text-tagline-3 text-secondary/50 dark:text-accent/50">
          {formatDate(post.fields?.publishedDate)}
        </time>
      </div>
    </Link>
  );
}

// ── Share Bar (bottom of article) ─────────────────────────────────────────────

function BottomShareBar({ title }: { title?: string }) {
  return (
    <div className="mt-12 pt-8 border-t border-stroke-2 dark:border-stroke-7 flex items-center gap-4 flex-wrap">
      <span className="text-tagline-2 font-semibold text-secondary dark:text-accent">Share this post</span>
      <ul className="flex items-center gap-2.5">
        {[
          {
            label: 'Facebook',
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`,
            icon: (
              <path d="M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.19145 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z" />
            ),
          },
          {
            label: 'LinkedIn',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`,
            icon: (
              <path fillRule="evenodd" clipRule="evenodd" d="M10 1.25C5.16947 1.25 1.25 5.16947 1.25 10C1.25 14.8305 5.16947 18.75 10 18.75C14.821 18.75 18.75 14.8305 18.75 10C18.75 5.16947 14.821 1.25 10 1.25ZM6.40072 7.54844C5.93666 7.54844 5.51947 7.27187 5.34135 6.84531C5.16322 6.41875 5.25697 5.92656 5.5851 5.59844C5.90854 5.27031 6.40072 5.17188 6.82729 5.34531C7.25385 5.51875 7.5351 5.93594 7.53979 6.39531C7.53979 7.03281 7.03354 7.54375 6.40072 7.54844ZM14.7398 14.7391H12.7757V11.6594C12.7757 10.9234 12.7617 9.98594 11.7538 9.98594C10.746 9.98594 10.5679 10.7828 10.5679 11.6078V14.7391H8.61322V8.41094H10.4976V9.27344H10.5257C10.7882 8.77656 11.4257 8.25156 12.382 8.25156C14.3695 8.25156 14.7351 9.55937 14.7351 11.2609V14.7391H14.7398ZM7.3851 14.7391H5.42104V8.41094H7.3851V14.7391Z" />
            ),
          },
          {
            label: 'X (Twitter)',
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(title || '')}`,
            icon: (
              <path d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 14.8344 5.16562 18.75 10 18.75C14.8344 18.75 18.75 14.8344 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25ZM14.0547 7.65H12.7891L10.7016 10.0094L8.89844 7.65H5.97344L9.07344 11.6219L6.1375 14.7H7.40781L9.67344 12.1406L11.6484 14.7H14.4813L11.2594 10.5922L14.0547 7.65Z" />
            ),
          },
        ].map(({ label, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${label}`}
              className="group/social inline-flex size-9 items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 20 20" fill="none">
                {icon}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // ── Fetch from Contentful ──
  const post = await getBlogPostBySlug(slug);
  const isMarkdown = !post;

  // ── Markdown fallback ──
  type MarkdownBlog = {
    content: string;
    data: {
      title?: string;
      author?: string;
      authorImage?: string;
      publishDate?: string;
      readTime?: string;
      tag?: string;
      thumbnail?: string;
      description?: string;
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

  // ── Resolve values ──
  const title = post?.fields?.title || mdBlog?.data?.title || 'Untitled';
  const description = post?.fields?.shortDescription || mdBlog?.data?.description || '';
  const tag = post?.fields?.tag || post?.fields?.category || mdBlog?.data?.tag || '';
  const publishedDate = post?.fields?.publishedDate || mdBlog?.data?.publishDate || '';
  const readTime = post?.fields?.readTime || mdBlog?.data?.readTime || estimateReadTime(post?.fields?.content);
  const authorName = post?.fields?.author
    ? getAuthorName(post.fields.author)
    : (mdBlog?.data?.author || 'NativPost Team');
  const authorInitials = getAuthorInitials(post?.fields?.author || authorName);
  const featuredImageUrl = post ? getFeaturedImageUrl(post) : (mdBlog?.data?.thumbnail || '');

  // ── ToC (Contentful only) ──
  const headings = post?.fields?.content ? extractHeadings(post.fields.content) : [];

  // ── Related posts ──
  let relatedPosts: ContentfulBlogPost[] = [];
  if (post?.fields?.relatedBlogPosts?.length) {
    relatedPosts = post.fields.relatedBlogPosts.slice(0, 3);
  } else if (post && tag) {
    relatedPosts = await getRelatedPosts(tag, slug, 3);
  }

  // ── JSON-LD Schema ──
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: featuredImageUrl || undefined,
    datePublished: publishedDate,
    author: { '@type': 'Person', name: authorName },
    publisher: {
      '@type': 'Organization',
      name: 'NativPost',
      logo: { '@type': 'ImageObject', url: 'https://nativpost.com/images/shared/logo.svg' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nativpost.com/blog/${slug}`,
    },
  };

  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Image ── */}
      {featuredImageUrl && (
        <div className="relative w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <div className="relative w-full aspect-[21/8] min-h-[280px] md:min-h-[360px]">
            <Image
              src={featuredImageUrl}
              alt={title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Top padding to account for navbar */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-7/30 via-transparent to-background-3 dark:to-background-7" />
          </div>
        </div>
      )}

      {/* ── Article Shell ── */}
      <div className="main-container">
        {/* Back link */}
        <RevealAnimation delay={0.05}>
          <Link
            href="/blog"
            className="mt-8 md:mt-10 inline-flex items-center gap-2 text-tagline-3 font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50 hover:text-primary-500 transition-colors"
          >
            <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </RevealAnimation>

        {/* Article header */}
        <header className="mt-6 md:mt-8 pb-8 max-w-[860px]">
          {tag && (
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary mb-4">{tag}</span>
            </RevealAnimation>
          )}
          <RevealAnimation delay={0.15}>
            <h1 className="mb-5">{title}</h1>
          </RevealAnimation>
          {description && (
            <RevealAnimation delay={0.2}>
              <p className="text-tagline-1 md:text-[1.0625rem] text-secondary/65 dark:text-accent/65 leading-[1.75] mb-6 max-w-[680px]">
                {description}
              </p>
            </RevealAnimation>
          )}

          {/* Byline */}
          <RevealAnimation delay={0.25}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {/* Author avatar */}
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary-100 dark:bg-primary-800/30 border border-primary-200 dark:border-primary-700/50 flex items-center justify-center text-tagline-3 font-bold text-primary-600 dark:text-primary-300 shrink-0">
                  {authorInitials}
                </div>
                <div>
                  <p className="text-tagline-2 font-semibold text-secondary dark:text-accent">
                    {authorName}
                  </p>
                  <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">Author</p>
                </div>
              </div>

              {publishedDate && (
                <div className="flex items-center gap-1.5 text-tagline-2 text-secondary/55 dark:text-accent/55">
                  <svg className="size-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                  </svg>
                  <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
                </div>
              )}

              {readTime && (
                <div className="flex items-center gap-1.5 text-tagline-2 text-secondary/55 dark:text-accent/55">
                  <svg className="size-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readTime}
                </div>
              )}
            </div>
          </RevealAnimation>
        </header>

        {/* Divider */}
        <hr className="border-0 h-px bg-stroke-2 dark:bg-stroke-7 mb-10 md:mb-14" />

        {/* ── Body: Content + Sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-10 xl:gap-14 items-start pb-14 lg:pb-20">

          {/* Article content */}
          <RevealAnimation delay={0.1}>
            <article className="details-body !max-w-none min-w-0">
              {post?.fields?.content ? (
                <ContentfulRichText document={post.fields.content} />
              ) : mdBlog ? (
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>
                  {mdBlog.content}
                </ReactMarkdown>
              ) : (
                <p className="text-tagline-1 italic text-secondary/40 dark:text-accent/40">
                  No content available for this post.
                </p>
              )}

              {/* Bottom share bar */}
              <BottomShareBar title={title} />
            </article>
          </RevealAnimation>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <RevealAnimation delay={0.2}>
                  <TableOfContents headings={headings} title={title} />
                </RevealAnimation>
              )}

              {/* Share (when no ToC) */}
              {headings.length === 0 && (
                <RevealAnimation delay={0.2}>
                  <div className="rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 p-5">
                    <p className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/50 dark:text-accent/50 mb-3">
                      Share this article
                    </p>
                    <div className="flex gap-2">
                      {[
                        { label: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}` },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/sharing/share-offsite/' },
                      ].map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 py-2 text-tagline-3 font-medium text-secondary/60 dark:text-accent/60 hover:border-primary-500 hover:text-primary-500 transition-colors"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              )}

              {/* Author card */}
              <RevealAnimation delay={0.3}>
                <div className="rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 p-5">
                  <p className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/50 dark:text-accent/50 mb-4">
                    Written by
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-full bg-primary-100 dark:bg-primary-800/30 border border-primary-200 dark:border-primary-700/50 flex items-center justify-center text-tagline-2 font-bold text-primary-600 dark:text-primary-300 shrink-0">
                      {authorInitials}
                    </div>
                    <div>
                      <p className="text-tagline-1 font-semibold text-secondary dark:text-accent">{authorName}</p>
                      <p className="text-tagline-3 text-secondary/50 dark:text-accent/50">NativPost</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              {/* Sidebar related posts */}
              {relatedPosts.length > 0 && (
                <RevealAnimation delay={0.35}>
                  <div className="rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 p-5">
                    <p className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/50 dark:text-accent/50 mb-4 pb-3 border-b border-stroke-2 dark:border-stroke-7">
                      Related Articles
                    </p>
                    <div className="space-y-4">
                      {relatedPosts.map((rel, i) => {
                        const relSlug = rel.fields?.slug;
                        if (!relSlug) return null;
                        const relImg = getFeaturedImageUrl(rel) || `/images/ns-img-${405 + i * 30}.jpg`;
                        return (
                          <Link
                            key={rel.sys?.id || i}
                            href={`/blog/${relSlug}`}
                            className="group flex gap-3 items-start"
                          >
                            <div className="shrink-0 size-14 rounded-lg overflow-hidden bg-background-4">
                              <Image
                                src={relImg}
                                alt={rel.fields?.title || ''}
                                width={56}
                                height={56}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-tagline-2 font-medium leading-snug line-clamp-2 group-hover:text-primary-500 transition-colors mb-1">
                                {rel.fields?.title}
                              </p>
                              <time className="text-tagline-3 text-primary-500">
                                {formatDate(rel.fields?.publishedDate)}
                              </time>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </RevealAnimation>
              )}
            </div>
          </aside>
        </div>

        {/* ── Mobile: Related posts below content ── */}
        {relatedPosts.length > 0 && (
          <section className="lg:hidden pb-14">
            <h2 className="text-heading-6 font-medium mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedPosts.map((rel, i) => (
                <RelatedCard key={rel.sys?.id || i} post={rel} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── CTA ── */}
      <CTA
        className="dark:bg-background-7 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Ready to transform your social media?"
        ctaHeading="Let NativPost handle your content creation"
        description="Start your 7-day free trial. Studio-crafted content for your brand, published everywhere — Credit card required."
        ctaBtnText="Start free trial"
      />
    </main>
  );
}