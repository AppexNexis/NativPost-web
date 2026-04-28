import { StaticImageData } from 'next/image';

export interface IBlogPost {
  tag: string;
  author: string;
  authorImage: string;
  publishDate: string;
  title: string;
  description: string;
  thumbnail: string;
  readTime: string;
  slug: string;
  content: string;
  featured?: boolean;
}

export interface IBlogContent {
  content: string;
  data: Partial<IBlogPost>;
  isEmpty: boolean;
  excerpt: string;
  orig: Buffer;
  language: string;
  matter: string;
}

export interface ICaseStudy {
  title: string;
  thumbnail: string;
  description: string;
  result: string;
  slug: string;
  showHomePage?: boolean;
  content: string;
  before: string[];
  after: string[];
  keyFeatures: string[];
  userReview: {
    userName: string;
    userImage: string;
    userRole: string;
    reviewText: string;
  };
}

export interface IPosition {
  datePosted: string;
  expirationDate: string;
  location: string;
  offeredSalary: string;
  experience: string;
  qualification: string;
  employmentType: string[];
  jobSkills: string[];
  shortDescription: string;
  content: string;
  title: string;
  slug: string;
}

export interface IService {
  id: number;
  title: string;
  icon: string;
  description: string;
  image: string | StaticImageData;
  imageDark: string | StaticImageData;
  imgAlt: string;
  userReview: {
    name: string;
    image: string;
    reviewContent: string;
    userRole: string;
  };
  slug: string;
  content: string;
}

export interface ISocialLinks {
  behance?: string;
  dribbble?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface IContactInformation {
  email: string;
  phoneNumber: string;
}
export interface ITeamMember {
  name: string;
  role: string;
  userImg: string;
  contactInformation: IContactInformation;
  social: ISocialLinks;
  content: string;
  excerpt?: string;
  isEmpty?: boolean;
  slug: string;
  Content: string;
}

// top nav bar class
export interface TopNavButtonsProps {
  fillClass: string;
  className?: string;
}

export interface FooterOneData {
  title: string;
  links: { label: string; href: string }[];
}
export interface FooterData {
  title: string;
  links: { label: string; href: string }[];
}

// customer markdown
export interface ICustomerTestimonial {
  image: string;
  name: string;
  role: string;
  description: string;
  rating: number;
  xLink: string;
}

export interface ICustomerSection {
  titleOne: string;
  titleTwo: string;
  description: string;
  testimonial?: ICustomerTestimonial;
}

export interface ICustomer {
  title: string;
  description: string;
  industry: string;
  product: string;
  service: string;
  solution: string;
  lightImage: string;
  darkImage: string;
  alt: string;
  detailsTitle: string;
  overview: ICustomerSection;
  problemBlock: ICustomerSection;
  solutionBlock: ICustomerSection;
  resultBlock: ICustomerSection;
  slug: string;
  content: string;
}

export interface LearnItem {
  id: string;
  text: string;
}

export interface KeyTakeWayItem {
  id: string;
  text: string;
}

export interface IWhitePaper {
  title: string;
  description: string;
  img: string | StaticImageData;
  featured?: boolean;
  badgeText: string;
  OverviewText: string;
  learn: LearnItem[];
  keyTakeWays: KeyTakeWayItem[];
  keyTakeWaysDescription: string;
  paperLink: string;
  slug: string;
  content: string;
}

// ── Extended blog interface for Contentful fields ─────────────────────────────

/**
 * Augmented IBlogPost with additional Contentful-aligned fields.
 * The base IBlogPost (from markdown) remains unchanged.
 * These fields are used when the Contentful CMS is connected.
 */
export interface IBlogPostExtended extends IBlogPost {
  /** Short description shown in cards and meta */
  shortDescription?: string;
  /** Contentful Rich Text document (replaces markdown `content`) */
  richContent?: unknown;
  /** Related post slugs for cross-linking */
  relatedPostSlugs?: string[];
  /** SEO: page title override */
  seoTitle?: string;
  /** SEO: meta description override */
  seoDescription?: string;
  /** SEO: canonical URL */
  canonicalUrl?: string;
  /** Author Contentful entry reference */
  authorRef?: {
    name: string;
    bio?: string;
    avatarUrl?: string;
  };
}

/**
 * Content model IDs for Contentful.
 * Reference these when creating entries in Contentful.
 *
 * EXISTING (from IGH reference config):
 *   - pageBlogPost    → main blog post type (10 fields)
 *   - componentAuthor → author component (3 fields: name, avatar, bio)
 *   - componentSeo    → SEO fields (7 fields)
 *   - componentRichImage → image with caption (4 fields)
 *
 * NEW (recommended additions for NativPost):
 *   - componentVideoEmbed → videoUrl (Short text), title, autoplay, muted
 *   - componentCtaBlock   → heading, body, buttonText, buttonUrl
 *   - componentRelatedPost → reference link between posts
 */
export const CONTENTFUL_CONTENT_TYPES = {
  BLOG_POST: 'pageBlogPost',
  AUTHOR: 'componentAuthor',
  SEO: 'componentSeo',
  RICH_IMAGE: 'componentRichImage',
  VIDEO_EMBED: 'componentVideoEmbed',
  CTA_BLOCK: 'componentCtaBlock',
} as const;