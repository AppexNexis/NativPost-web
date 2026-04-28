// ============================================================
// BLOG PAGE — src/app/blog/page.tsx (Contentful-powered)
// With Post Bridge-style pagination
// ============================================================

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { defaultMetadata } from '@/utils/generateMetaData';
import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import { getBlogPosts, getAuthorName, getFeaturedImageUrl } from '@/services/contentful';
import type { ContentfulBlogPost } from '@/services/contentful';
import getMarkDownData from '@/utils/getMarkDownData';
import type { IBlogPost } from '@/interface';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog — NativPost | Social Media Strategy, Brand Building & Anti-Slop Content',
  description: 'Insights on organic social media growth, anti-slop content strategy, brand voice development, and building an authentic online presence.',
};

export const revalidate = 300;

// ── Constants ─────────────────────────────────────────────────────────────────

const POSTS_PER_PAGE = 9;

// ── Helpers ───────────────────────────────────────────────────────────────────

const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return dateStr; }
};

const getTag = (post: ContentfulBlogPost): string =>
  post.fields?.tag || post.fields?.category || '';

const FALLBACK_IMAGES = ['/images/ns-img-405.jpg', '/images/ns-img-435.png', '/images/ns-img-464.png'];

const getImageUrl = (post: ContentfulBlogPost, index = 0): string => {
  const url = getFeaturedImageUrl(post);
  if (url) return url;
  const md = post as ContentfulBlogPost & { _thumbnail?: string };
  return md._thumbnail || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length] || '/og-image.jpg';
};

function markdownToContentful(posts: (IBlogPost & { [key: string]: unknown })[]): ContentfulBlogPost[] {
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

// ── Sub-components ────────────────────────────────────────────────────────────

function TagPill({ tag }: { tag: string }) {
  if (!tag) return null;
  return <span className="badge badge-primary text-[0.6rem] py-0.5 px-3 capitalize">{tag}</span>;
}

function PostMeta({ post }: { post: ContentfulBlogPost }) {
  const date = formatDate(post.fields?.publishedDate);
  const readTime = post.fields?.readTime;
  const author = getAuthorName(post.fields?.author);
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-tagline-3 text-secondary/50 dark:text-accent/50">
      {date && <time dateTime={post.fields?.publishedDate}>{date}</time>}
      {date && (author || readTime) && <span aria-hidden="true">·</span>}
      {author && <span>{author}</span>}
      {readTime && <><span aria-hidden="true">·</span><span>{readTime}</span></>}
    </div>
  );
}

function FeaturedPost({ post }: { post: ContentfulBlogPost }) {
  const slug = post.fields?.slug;
  if (!slug) return null;
  const tag = getTag(post);
  const imgUrl = getImageUrl(post, 0);

  return (
    <Link href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 transition-all duration-500 hover:shadow-3 hover:border-primary-200 dark:hover:border-primary-800/60 hover:scale-[1.005]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image src={imgUrl} alt={post.fields?.title || ''} fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 66vw" priority
          unoptimized={imgUrl.includes('ctfassets.net')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-8/75 via-background-8/15 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-primary-500/90 backdrop-blur-sm px-3 py-1 text-white text-tagline-3 font-semibold">
          <svg className="size-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </div>
        {tag && <div className="absolute bottom-4 left-4"><TagPill tag={tag} /></div>}
      </div>
      <div className="p-6 md:p-8">
        <h2 className="text-heading-6 md:text-heading-5 font-medium line-clamp-2 mb-3 group-hover:text-primary-500 transition-colors duration-300">
          {post.fields?.title}
        </h2>
        {post.fields?.shortDescription && (
          <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 mb-4">
            {post.fields.shortDescription}
          </p>
        )}
        <PostMeta post={post} />
      </div>
    </Link>
  );
}

function SidebarPost({ post, index }: { post: ContentfulBlogPost; index: number }) {
  const slug = post.fields?.slug;
  if (!slug) return null;
  const imgUrl = getImageUrl(post, index);
  return (
    <Link href={`/blog/${slug}`}
      className="group flex gap-3 items-start py-3 border-b border-stroke-2 dark:border-stroke-7 last:border-0 last:pb-0 first:pt-0 transition-opacity hover:opacity-75"
    >
      <div className="shrink-0 size-[60px] rounded-xl overflow-hidden bg-background-4 dark:bg-background-9">
        <Image src={imgUrl} alt={post.fields?.title || ''} width={60} height={60}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy" unoptimized={imgUrl.includes('ctfassets.net')}
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

function BlogCard({ post, index }: { post: ContentfulBlogPost; index: number }) {
  const slug = post.fields?.slug;
  if (!slug) return null;
  const imgUrl = getImageUrl(post, index);
  const tag = getTag(post);
  return (
    <article className="group overflow-hidden rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 transition-all duration-500 hover:shadow-3 hover:border-primary-200 dark:hover:border-primary-800/60 hover:-translate-y-1 flex flex-col">
      <Link href={`/blog/${slug}`} className="block relative aspect-[16/9] overflow-hidden">
        <Image src={imgUrl} alt={post.fields?.title || ''} fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy" unoptimized={imgUrl.includes('ctfassets.net')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-8/40 to-transparent" />
        {tag && <div className="absolute bottom-3 left-3"><TagPill tag={tag} /></div>}
      </Link>
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <Link href={`/blog/${slug}`} className="flex-1">
          <h3 className="text-heading-6 font-medium line-clamp-2 mb-2 group-hover:text-primary-500 transition-colors duration-300">
            {post.fields?.title}
          </h3>
          {post.fields?.shortDescription && (
            <p className="text-tagline-2 text-secondary/55 dark:text-accent/55 line-clamp-2 mb-3">
              {post.fields.shortDescription}
            </p>
          )}
        </Link>
        <PostMeta post={post} />
      </div>
    </article>
  );
}

// ── Pagination ────────────────────────────────────────────────────────────────

function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  if (totalPages <= 1) return null;

  const pages: (number | '...')[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
  }

  const pageHref = (p: number) => p === 1 ? '/blog' : `/blog?page=${p}`;

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 pt-12 pb-4">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link href={pageHref(currentPage - 1)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stroke-2 dark:border-stroke-7 text-tagline-2 text-secondary/70 dark:text-accent/70 bg-white dark:bg-background-8 hover:border-primary-500 hover:text-primary-500 transition-all duration-200"
        >
          <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stroke-2 dark:border-stroke-7 text-tagline-2 text-secondary/30 dark:text-accent/30 cursor-not-allowed">
          <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, i) =>
          page === '...' ? (
            <span key={`dots-${i}`} className="w-9 h-9 flex items-center justify-center text-tagline-2 text-secondary/40 dark:text-accent/40">
              …
            </span>
          ) : (
            <Link key={page} href={pageHref(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className={[
                'w-9 h-9 flex items-center justify-center rounded-full text-tagline-2 font-medium transition-all duration-200',
                page === currentPage
                  ? 'bg-primary-500 text-white border border-primary-600 shadow-1'
                  : 'border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 text-secondary/70 dark:text-accent/70 hover:border-primary-500 hover:text-primary-500',
              ].join(' ')}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link href={pageHref(currentPage + 1)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stroke-2 dark:border-stroke-7 text-tagline-2 text-secondary/70 dark:text-accent/70 bg-white dark:bg-background-8 hover:border-primary-500 hover:text-primary-500 transition-all duration-200"
        >
          Next
          <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stroke-2 dark:border-stroke-7 text-tagline-2 text-secondary/30 dark:text-accent/30 cursor-not-allowed">
          Next
          <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      )}
    </nav>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; tag?: string }>;
}) {
  const { page: pageParam, tag: tagParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || '1', 10));

  let allPosts: ContentfulBlogPost[] = await getBlogPosts();
  if (!allPosts.length) {
    const mdPosts = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
    allPosts = markdownToContentful(mdPosts);
  }

  // Tag filter
  const activeTag = tagParam || '';
  const filteredPosts = activeTag
    ? allPosts.filter((p) => getTag(p).toLowerCase() === activeTag.toLowerCase())
    : allPosts;

  // Featured + sidebar always use first 6 of ALL posts (unfiltered, first page only)
  const featuredPost = currentPage === 1 && !activeTag ? allPosts[0] ?? null : null;
  const sidebarPosts = currentPage === 1 && !activeTag ? allPosts.slice(1, 6) : [];

  // Pagination
  const gridPosts = filteredPosts;
  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = gridPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  // Tags
  const allTags = Array.from(new Set(allPosts.map((p) => getTag(p)).filter(Boolean)));

  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">

      {/* ── Page Hero ── */}
      <section className="pt-[120px] pb-10 lg:pt-[170px] lg:pb-14">
        <div className="main-container">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">NativPost Blog</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="max-w-[720px]">
                Insights on building an{' '}
                <span className="text-primary-500">authentic brand</span> online
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[560px]">
                Practical guides on organic social media growth, anti-slop content strategy, brand voice development, and standing out in a world of generic content.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="main-container">
        <div className="h-px bg-stroke-2 dark:bg-stroke-7" />
      </div>

      {/* ── Featured + Sidebar (page 1, no tag filter only) ── */}
      {featuredPost && (
        <section className="py-10 lg:py-14">
          <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-6 xl:gap-8 items-start">
              <RevealAnimation delay={0.1}>
                <FeaturedPost post={featuredPost} />
              </RevealAnimation>
              <aside className="hidden lg:block">
                <RevealAnimation delay={0.2}>
                  <div className="rounded-[20px] border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-8 p-5">
                    <h2 className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/50 dark:text-accent/50 mb-4 pb-3 border-b border-stroke-2 dark:border-stroke-7">
                      Latest Articles
                    </h2>
                    <div>
                      {sidebarPosts.map((post, i) => (
                        <SidebarPost key={post.sys?.id || i} post={post} index={i + 1} />
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* ── All Posts Grid ── */}
      <section className="pb-6 lg:pb-10">
        <div className="main-container">
          {/* Section header + tag filter */}
          <div className="flex flex-wrap items-center gap-3 mb-6 lg:mb-8">
            <span className="text-tagline-3 uppercase tracking-widest font-semibold text-secondary/50 dark:text-accent/50 whitespace-nowrap">
              {activeTag ? `Posts tagged "${activeTag}"` : 'All Articles'}
            </span>
            <div className="flex-1 h-px bg-stroke-2 dark:bg-stroke-7 min-w-8" />
            <span className="text-tagline-3 text-secondary/40 dark:text-accent/40 whitespace-nowrap">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </span>
          </div>

          {/* Tag filter pills */}
          {allTags.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <Link href="/blog"
                className={`badge capitalize ${!activeTag ? 'badge-primary' : 'badge-gray-light hover:badge-primary'} transition-all`}
              >
                All
              </Link>
              {allTags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className={`badge capitalize ${activeTag === tag ? 'badge-primary' : 'badge-gray-light hover:badge-primary'} transition-all`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {paginatedPosts.map((post, i) => (
                <RevealAnimation key={post.sys?.id || i} delay={0.05 + (i % 6) * 0.05}>
                  <BlogCard post={post} index={i} />
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-tagline-1 text-secondary/50 dark:text-accent/50">No articles found.</p>
            </div>
          )}

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Ready to stop struggling?"
        badgeClass="!badge-cyan"
        ctaHeading="Let NativPost handle your social media content"
        description="Start your 7-day free trial. Studio-crafted content for your brand, published everywhere."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
}