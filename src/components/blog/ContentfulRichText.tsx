// ============================================================
// CONTENTFUL RICH TEXT RENDERER — src/components/blog/ContentfulRichText.tsx
//
// Renders Contentful Rich Text documents for NativPost.
// Matches NativPost design system (Inter Tight font, primary-500 purple,
// background-3 / background-7, stroke-* borders, etc.)
//
// VIDEO SUPPORT (three approaches all handled):
//   • Hosted .mp4/.webm asset  → <video> tag via BLOCKS.EMBEDDED_ASSET
//   • YouTube / Vimeo URL      → auto-detected in INLINES.HYPERLINK
//   • "Video Embed" entry      → BLOCKS.EMBEDDED_ENTRY with videoUrl field
//
// TABLE OF CONTENTS:
//   All h2/h3 headings receive stable slugified IDs so the ToC can link to them.
// ============================================================

'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  isYouTubeUrl,
  isVimeoUrl,
  youTubeEmbedUrl,
  vimeoEmbedUrl,
  toHttps,
} from '@/services/contentful';

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Convert a heading text to a stable URL slug */
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');

/** Extract all text from a Rich Text node recursively */
const extractText = (node: RichTextNode): string => {
  if (node.nodeType === 'text') return (node as TextNode).value || '';
  return ((node as BlockNode).content || []).map(extractText).join('');
};

/** Resolve a video URL to an embed iframe or null */
const VideoEmbed = ({ url, title }: { url: string; title?: string }) => {
  let embedUrl = '';
  if (isYouTubeUrl(url)) embedUrl = youTubeEmbedUrl(url);
  else if (isVimeoUrl(url)) embedUrl = vimeoEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <div className="relative my-8 aspect-video w-full overflow-hidden rounded-2xl border border-stroke-2 dark:border-stroke-7 shadow-3">
      <iframe
        src={embedUrl}
        title={title || 'Embedded video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};

// ── Rich Text Type Definitions ────────────────────────────────────────────────

type Mark = { type: string };

interface TextNode {
  nodeType: 'text';
  value: string;
  marks: Mark[];
}

interface BlockNode {
  nodeType: string;
  data: Record<string, unknown>;
  content: RichTextNode[];
}

type RichTextNode = TextNode | BlockNode;

interface RichTextDocument {
  nodeType: 'document';
  data: Record<string, unknown>;
  content: RichTextNode[];
}

// ── Text node renderer ────────────────────────────────────────────────────────

const renderText = (node: TextNode, key: string): React.ReactNode => {
  let result: React.ReactNode = node.value;
  for (const mark of node.marks || []) {
    switch (mark.type) {
      case 'bold':
        result = <strong key={key} className="font-semibold text-secondary dark:text-accent">{result}</strong>;
        break;
      case 'italic':
        result = <em key={key}>{result}</em>;
        break;
      case 'underline':
        result = <u key={key}>{result}</u>;
        break;
      case 'code':
        result = (
          <code key={key} className="rounded-md bg-background-3 dark:bg-background-9 px-1.5 py-0.5 font-mono text-sm text-primary-600 dark:text-primary-300 border border-stroke-2 dark:border-stroke-7">
            {result}
          </code>
        );
        break;
      case 'strikethrough':
        result = <del key={key}>{result}</del>;
        break;
      case 'superscript':
        result = <sup key={key}>{result}</sup>;
        break;
      case 'subscript':
        result = <sub key={key}>{result}</sub>;
        break;
    }
  }
  return result;
};

// ── Block renderer ────────────────────────────────────────────────────────────

const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
  const key = `node-${index}`;

  if (node.nodeType === 'text') {
    return renderText(node as TextNode, key);
  }

  const block = node as BlockNode;
  const children = (block.content || []).map((child, i) => renderNode(child, i));

  switch (block.nodeType) {
    // ── Document ──────────────────────────────────────────────────────────────
    case 'document':
      return <React.Fragment key={key}>{children}</React.Fragment>;

    // ── Headings ─────────────────────────────────────────────────────────────
    case 'heading-1': {
      const text = extractText(block);
      const id = slugify(text);
      return (
        <h2 key={key} id={id} className="scroll-mt-24 text-heading-5 md:text-heading-4 font-medium mt-10 mb-4 first:mt-0">
          {children}
        </h2>
      );
    }
    case 'heading-2': {
      const text = extractText(block);
      const id = slugify(text);
      return (
        <h2 key={key} id={id} className="scroll-mt-24 text-heading-5 md:text-heading-4 font-medium mt-10 mb-4 first:mt-0">
          {children}
        </h2>
      );
    }
    case 'heading-3': {
      const text = extractText(block);
      const id = slugify(text);
      return (
        <h3 key={key} id={id} className="scroll-mt-24 text-heading-6 font-medium mt-8 mb-3">
          {children}
        </h3>
      );
    }
    case 'heading-4':
      return (
        <h4 key={key} className="scroll-mt-24 text-tagline-1 font-semibold mt-6 mb-2 text-secondary dark:text-accent">
          {children}
        </h4>
      );
    case 'heading-5':
      return (
        <h5 key={key} className="scroll-mt-24 text-tagline-1 font-semibold mt-5 mb-2 text-secondary dark:text-accent">
          {children}
        </h5>
      );
    case 'heading-6':
      return (
        <h6 key={key} className="scroll-mt-24 text-tagline-2 font-semibold uppercase tracking-widest mt-4 mb-2 text-secondary/60 dark:text-accent/60">
          {children}
        </h6>
      );

    // ── Paragraph ─────────────────────────────────────────────────────────────
    case 'paragraph':
      return (
        <p key={key} className="text-tagline-1 leading-[1.85] text-secondary/75 dark:text-accent/75 mb-5 last:mb-0">
          {children}
        </p>
      );

    // ── Lists ─────────────────────────────────────────────────────────────────
    case 'unordered-list':
      return (
        <ul key={key} className="blog-ul my-6 space-y-2.5">
          {children}
        </ul>
      );
    case 'ordered-list':
      return (
        <ol key={key} className="blog-ol my-6 space-y-2.5 pl-6 list-decimal">
          {children}
        </ol>
      );
    case 'list-item':
      return (
        <li key={key} className="blog-li text-tagline-1 leading-[1.8] text-secondary/75 dark:text-accent/75">
          {children}
        </li>
      );

    // ── Blockquote ────────────────────────────────────────────────────────────
    case 'blockquote':
      return (
        <blockquote key={key} className="my-6 border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-800/10 pl-6 pr-4 py-4 rounded-r-xl italic text-secondary/70 dark:text-accent/70">
          {children}
        </blockquote>
      );

    // ── Horizontal Rule ───────────────────────────────────────────────────────
    case 'hr':
      return (
        <hr key={key} className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-stroke-2 dark:via-stroke-7 to-transparent" />
      );

    // ── Code Block ────────────────────────────────────────────────────────────
    case 'code-block':
      return (
        <pre key={key} className="my-6 overflow-x-auto rounded-2xl bg-background-8 dark:bg-background-9 border border-stroke-5 dark:border-stroke-7 p-5">
          <code className="font-mono text-sm leading-relaxed text-ns-green-light">
            {children}
          </code>
        </pre>
      );

    // ── Table ─────────────────────────────────────────────────────────────────
    case 'table':
      return (
        <div key={key} className="my-6 overflow-x-auto rounded-2xl border border-stroke-2 dark:border-stroke-7">
          <table className="w-full border-collapse text-sm">{children}</table>
        </div>
      );
    case 'table-head':
      return <thead key={key} className="bg-background-4 dark:bg-background-9">{children}</thead>;
    case 'table-body':
      return <tbody key={key}>{children}</tbody>;
    case 'table-row':
      return (
        <tr key={key} className="border-b border-stroke-2 dark:border-stroke-7 last:border-0 hover:bg-background-3 dark:hover:bg-background-9 transition-colors">
          {children}
        </tr>
      );
    case 'table-header-cell':
      return (
        <th key={key} className="px-4 py-3 text-left text-tagline-3 font-semibold uppercase tracking-wider text-secondary dark:text-accent border-r border-stroke-2 dark:border-stroke-7 last:border-0">
          {children}
        </th>
      );
    case 'table-cell':
      return (
        <td key={key} className="px-4 py-3 text-tagline-2 text-secondary/70 dark:text-accent/70 border-r border-stroke-2 dark:border-stroke-7 last:border-0">
          {children}
        </td>
      );

    // ── Embedded Asset (images, videos, files) ────────────────────────────────
    case 'embedded-asset-block': {
      const target = block.data?.target as {
        fields?: {
          title?: string;
          description?: string;
          file?: { url?: string; contentType?: string };
        };
      };
      if (!target?.fields?.file) return null;
      const { url = '', contentType = '' } = target.fields.file;
      const fileUrl = toHttps(url);
      const title = target.fields.title;
      const description = target.fields.description;

      if (contentType.startsWith('image/')) {
        const isCtf = fileUrl.includes('ctfassets.net');
        return (
          <figure key={key} className="my-8">
            <div className="relative overflow-hidden rounded-2xl border border-stroke-2 dark:border-stroke-7 shadow-2">
              <Image
                src={fileUrl}
                alt={description || title || 'Blog image'}
                width={900}
                height={500}
                className="h-auto w-full object-cover"
                loading="lazy"
                unoptimized={isCtf}
              />
            </div>
            {(title || description) && (
              <figcaption className="mt-3 text-center text-tagline-3 text-secondary/50 dark:text-accent/50 italic">
                {description || title}
              </figcaption>
            )}
          </figure>
        );
      }

      if (contentType.startsWith('video/')) {
        return (
          <figure key={key} className="my-8">
            <div className="overflow-hidden rounded-2xl border border-stroke-2 dark:border-stroke-7 shadow-2">
              <video
                src={fileUrl}
                controls
                preload="metadata"
                className="w-full"
                aria-label={title || 'Embedded video'}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {title && (
              <figcaption className="mt-3 text-center text-tagline-3 text-secondary/50 dark:text-accent/50 italic">
                {title}
              </figcaption>
            )}
          </figure>
        );
      }

      // File download
      return (
        <a
          key={key}
          href={fileUrl}
          download
          className="my-4 flex items-center gap-3 rounded-2xl border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 px-5 py-4 transition-colors hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-800/10"
        >
          <svg className="size-5 shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
            {title || 'Download file'}
          </span>
        </a>
      );
    }

    // ── Embedded Entry (Video Embed component, CTA block, etc.) ───────────────
    case 'embedded-entry-block': {
      const target = block.data?.target as {
        sys?: { contentType?: { sys?: { id?: string } } };
        fields?: Record<string, unknown>;
      };
      const contentTypeId = target?.sys?.contentType?.sys?.id;

      // component - Video Embed
      if (contentTypeId === 'componentVideoEmbed' || contentTypeId === 'videoEmbed') {
        const videoUrl = target?.fields?.videoUrl as string | undefined;
        const title = target?.fields?.title as string | undefined;
        if (videoUrl) return <VideoEmbed key={key} url={videoUrl} title={title} />;
      }

      // component - CTA Block
      if (contentTypeId === 'componentCtaBlock' || contentTypeId === 'ctaBlock') {
        const heading = target?.fields?.heading as string | undefined;
        const body = target?.fields?.body as string | undefined;
        const buttonText = target?.fields?.buttonText as string | undefined;
        const buttonUrl = target?.fields?.buttonUrl as string | undefined;
        return (
          <div key={key} className="my-8 rounded-2xl border border-primary-200 dark:border-primary-800/40 bg-gradient-to-br from-primary-50 to-background-3 dark:from-primary-900/20 dark:to-background-8 p-6 md:p-8">
            {heading && <h4 className="text-heading-6 font-semibold mb-2">{heading}</h4>}
            {body && <p className="text-tagline-1 text-secondary/70 dark:text-accent/70 mb-4">{body}</p>}
            {buttonText && buttonUrl && (
              <a href={buttonUrl} className="btn btn-primary btn-md">
                <span>{buttonText}</span>
              </a>
            )}
          </div>
        );
      }

      // Generic fallback
      const entryTitle = target?.fields?.title as string | undefined;
      return entryTitle ? (
        <div key={key} className="my-4 rounded-xl border border-stroke-2 dark:border-stroke-7 bg-background-3 dark:bg-background-9 px-5 py-4 text-tagline-1">
          {entryTitle}
        </div>
      ) : null;
    }

    // ── Inline embedded entry (e.g. mentions, badges) ─────────────────────────
    case 'embedded-entry-inline': {
      const target = block.data?.target as { fields?: { title?: string } };
      return (
        <span key={key} className="rounded-md bg-primary-50 dark:bg-primary-800/20 px-2 py-0.5 text-primary-600 dark:text-primary-300 text-sm font-medium">
          {target?.fields?.title || 'Entry'}
        </span>
      );
    }

    // ── Hyperlink (auto-detects YouTube/Vimeo) ────────────────────────────────
    case 'hyperlink': {
      const uri = block.data?.uri as string;
      if (uri && (isYouTubeUrl(uri) || isVimeoUrl(uri))) {
        return <VideoEmbed key={key} url={uri} />;
      }
      return (
        <a
          key={key}
          href={uri}
          target={uri?.startsWith('http') ? '_blank' : undefined}
          rel={uri?.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-primary-600 dark:text-primary-400 underline decoration-primary-300 dark:decoration-primary-700 underline-offset-2 transition-colors hover:text-primary-500"
        >
          {children}
        </a>
      );
    }

    // ── Entry hyperlink (internal links) ──────────────────────────────────────
    case 'entry-hyperlink': {
      const target = block.data?.target as { fields?: { slug?: string } };
      const slug = target?.fields?.slug;
      return (
        <Link
          key={key}
          href={slug ? `/blog/${slug}` : '#'}
          className="text-primary-600 dark:text-primary-400 underline decoration-primary-300 underline-offset-2 hover:text-primary-500 transition-colors"
        >
          {children}
        </Link>
      );
    }

    // ── Asset hyperlink ───────────────────────────────────────────────────────
    case 'asset-hyperlink': {
      const target = block.data?.target as { fields?: { file?: { url?: string }; title?: string } };
      const fileUrl = toHttps(target?.fields?.file?.url);
      return (
        <a
          key={key}
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 dark:text-primary-400 underline underline-offset-2 hover:text-primary-500 transition-colors"
        >
          {children}
        </a>
      );
    }

    default:
      return <React.Fragment key={key}>{children}</React.Fragment>;
  }
};

// TocHeading and extractHeadings live in src/utils/richTextUtils.ts
// so they can be safely imported by Server Components too.
export type { TocHeading } from '@/utils/richTextUtils';

// ── Main component ────────────────────────────────────────────────────────────

interface ContentfulRichTextProps {
  document: unknown;
  className?: string;
}

export const ContentfulRichText = memo(function ContentfulRichText({
  document,
  className = '',
}: ContentfulRichTextProps) {
  if (!document || typeof document !== 'object') {
    return (
      <p className="text-tagline-1 italic text-secondary/40 dark:text-accent/40">
        No content available.
      </p>
    );
  }

  const doc = document as RichTextDocument;

  try {
    const rendered = (doc.content || []).map((node, i) => renderNode(node, i));
    return <div className={className}>{rendered}</div>;
  } catch (err) {
    console.error('[ContentfulRichText] render error', err);
    return (
      <p className="text-tagline-2 text-red-500">
        Error rendering content. Please try again later.
      </p>
    );
  }
});
export default ContentfulRichText;