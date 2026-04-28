// ============================================================
// CONTENTFUL SERVICE — src/services/contentful.ts
//
// Handles all Contentful CMS data fetching for NativPost.
// Supports:
//   • page - Blog Post (10 fields, matching the existing Contentful model)
//   • component - Author (3 fields)
//   • component - SEO (7 fields)
//   • component - Rich Image (4 fields)
//   • component - Video Embed (new — for YouTube / Vimeo / hosted video)
//   • component - Related Post (new — explicit link between posts)
//   • component - Call To Action (new — inline CTA block inside rich-text)
//
// VIDEO EMBEDDING APPROACHES (three options, all supported):
//   1. HOSTED FILE  → Upload .mp4 / .webm directly as a Contentful Asset.
//      The renderer detects contentType "video/*" and uses <video>.
//   2. EMBED URL ENTRY → Create a "component - Video Embed" entry with a
//      videoUrl field (YouTube / Vimeo URL). Embed it as an Embedded Entry
//      inside Rich Text. The renderer converts the URL to an <iframe>.
//   3. HYPERLINK INSIDE TEXT → Paste a plain YouTube URL as a hyperlink.
//      The renderer sniffs youtube.com / youtu.be / vimeo.com URLs and
//      auto-converts them to responsive iframes without any editor work.
// ============================================================

// ── Type Definitions ────────────────────────────────────────────────────────

export interface ContentfulAsset {
  sys: { id: string };
  fields: {
    title?: string;
    description?: string;
    file?: {
      url: string;
      contentType: string;
      fileName?: string;
      details?: { size?: number; image?: { width: number; height: number } };
    };
  };
}

export interface ContentfulAuthor {
  sys: { id: string };
  fields: {
    name?: string;
    avatar?: ContentfulAsset;
    bio?: string;
  };
}

export interface ContentfulSEO {
  sys: { id: string };
  fields: {
    pageTitle?: string;
    pageDescription?: string;
    canonicalUrl?: string;
    noindex?: boolean;
    nofollow?: boolean;
    shareImages?: ContentfulAsset[];
    ogTitle?: string;
  };
}

export interface ContentfulRichImage {
  sys: { id: string };
  fields: {
    image?: ContentfulAsset;
    caption?: string;
    altText?: string;
    fullWidth?: boolean;
  };
}

/**
 * NEW: component - Video Embed
 * Contentful content model fields:
 *   videoUrl   (Short text, required) — YouTube, Vimeo, or direct video URL
 *   title      (Short text, optional) — accessible title / caption
 *   autoplay   (Boolean, optional)
 *   muted      (Boolean, optional)
 */
export interface ContentfulVideoEmbed {
  sys: { id: string };
  fields: {
    videoUrl?: string;
    title?: string;
    autoplay?: boolean;
    muted?: boolean;
  };
}

/**
 * NEW: component - CTA Block
 * Allows editors to embed a styled CTA banner inside rich-text.
 *   heading    Short text
 *   body       Short text
 *   buttonText Short text
 *   buttonUrl  Short text
 */
export interface ContentfulCTABlock {
  sys: { id: string };
  fields: {
    heading?: string;
    body?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
}

export interface ContentfulBlogPost {
  sys: { id: string; createdAt: string; updatedAt: string };
  fields: {
    title?: string;
    slug?: string;
    shortDescription?: string;
    publishedDate?: string;
    readTime?: string;
    tag?: string;
    category?: string;
    author?: ContentfulAuthor;
    featuredImage?: ContentfulAsset;
    content?: unknown; // Contentful Rich Text document
    seoFields?: ContentfulSEO;
    relatedBlogPosts?: ContentfulBlogPost[];
  };
}

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Normalise a Contentful CDN URL (ensure https protocol) */
export const toHttps = (url: string | undefined): string => {
  if (!url) return '';
  return url.startsWith('//') ? `https:${url}` : url;
};

/** Pull the featured image URL from a blog post */
export const getFeaturedImageUrl = (post: ContentfulBlogPost): string => {
  const url = post?.fields?.featuredImage?.fields?.file?.url;
  return toHttps(url);
};

/** Resolve author display name from a Contentful author reference */
export const getAuthorName = (author: unknown): string => {
  if (!author) return 'NativPost Team';
  if (typeof author === 'string') return author;
  const a = author as ContentfulAuthor;
  return a?.fields?.name || 'NativPost Team';
};

/** Extract structured SEO data from a seoFields reference */
export const extractSEOData = (seoFields: unknown) => {
  if (!seoFields) {
    return { pageTitle: undefined, pageDescription: undefined, canonicalUrl: undefined, noindex: false, nofollow: false, shareImages: [] };
  }
  const s = seoFields as ContentfulSEO;
  return {
    pageTitle: s.fields?.pageTitle || s.fields?.ogTitle,
    pageDescription: s.fields?.pageDescription,
    canonicalUrl: s.fields?.canonicalUrl,
    noindex: s.fields?.noindex || false,
    nofollow: s.fields?.nofollow || false,
    shareImages: s.fields?.shareImages || [],
  };
};

/** Detect if a URL is a YouTube link */
export const isYouTubeUrl = (url: string): boolean =>
  /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)/.test(url);

/** Detect if a URL is a Vimeo link */
export const isVimeoUrl = (url: string): boolean =>
  /vimeo\.com\/(?:video\/)?(\d+)/.test(url);

/** Convert a YouTube watch / short URL to an embed URL */
export const youTubeEmbedUrl = (url: string): string => {
  const match =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/) ;
  if (!match) return url;
  const params = new URL(url.startsWith('http') ? url : `https:${url}`);
  const start = params.searchParams.get('t') || params.searchParams.get('start');
  return `https://www.youtube.com/embed/${match[1]}${start ? `?start=${start}` : ''}`;
};

/** Convert a Vimeo URL to an embed URL */
export const vimeoEmbedUrl = (url: string): string => {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (!match) return url;
  return `https://player.vimeo.com/video/${match[1]}`;
};

// ── Contentful Client ────────────────────────────────────────────────────────

const getEnv = () => ({
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW === 'true'
    ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN || ''
    : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  preview: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW === 'true',
});

const buildUrl = (spaceId: string, path: string, params: Record<string, string> = {}) => {
  const base = `https://cdn.contentful.com/spaces/${spaceId}/environments/master${path}`;
  const query = new URLSearchParams(params).toString();
  return query ? `${base}?${query}` : base;
};

async function contentfulFetch<T>(path: string, params: Record<string, string> = {}): Promise<T | null> {
  const { spaceId, accessToken, preview } = getEnv();
  if (!spaceId || !accessToken) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Contentful] Missing NEXT_PUBLIC_CONTENTFUL_SPACE_ID or access token env vars.');
    }
    return null;
  }
  const host = preview ? 'preview.contentful.com' : 'cdn.contentful.com';
  const base = `https://${host}/spaces/${spaceId}/environments/master${path}`;
  const query = new URLSearchParams({ access_token: accessToken, ...params }).toString();
  try {
    const res = await fetch(`${base}?${query}`, { next: { revalidate: 300 } }); // 5-min cache
    if (!res.ok) throw new Error(`Contentful fetch error: ${res.status}`);
    return res.json() as Promise<T>;
  } catch (err) {
    console.error('[Contentful]', err);
    return null;
  }
}

// ── Data Fetching ────────────────────────────────────────────────────────────

/**
 * Fetch all blog posts, sorted newest first.
 */
export async function getBlogPosts(): Promise<ContentfulBlogPost[]> {
  const data = await contentfulFetch<{ items: ContentfulBlogPost[] }>('/entries', {
    content_type: 'pageBlogPost',
    include: '2',
    order: '-fields.publishedDate',
    limit: '100',
  });
  return data?.items || [];
}

/**
 * Fetch a single blog post by slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<ContentfulBlogPost | null> {
  const data = await contentfulFetch<{ items: ContentfulBlogPost[] }>('/entries', {
    content_type: 'pageBlogPost',
    'fields.slug': slug,
    include: '3',
    limit: '1',
  });
  return data?.items?.[0] || null;
}

/**
 * Fetch related posts for a given post (by tag / category).
 */
export async function getRelatedPosts(
  tag: string,
  excludeSlug: string,
  limit = 3,
): Promise<ContentfulBlogPost[]> {
  const data = await contentfulFetch<{ items: ContentfulBlogPost[] }>('/entries', {
    content_type: 'pageBlogPost',
    'fields.tag': tag,
    include: '1',
    limit: String(limit + 1),
    order: '-fields.publishedDate',
  });
  return (data?.items || []).filter((p) => p.fields?.slug !== excludeSlug).slice(0, limit);
}
