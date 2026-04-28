// ============================================================
// RICH TEXT UTILITIES — src/utils/richTextUtils.ts
//
// Pure functions with NO browser dependencies.
// Safe to import in both Server Components and Client Components.
// ============================================================

// ── Types ─────────────────────────────────────────────────────────────────────

export interface TocHeading {
    id: string;
    text: string;
    level: 2 | 3;
}

interface RichTextNode {
    nodeType: string;
    value?: string;
    content?: RichTextNode[];
}

// ── Slugify ───────────────────────────────────────────────────────────────────

/** Convert a heading string into a stable URL-safe slug */
export const slugify = (text: string): string =>
    text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-');

// ── Extract text ──────────────────────────────────────────────────────────────

const extractText = (node: RichTextNode): string => {
    if (node.nodeType === 'text') return node.value || '';
    return (node.content || []).map(extractText).join('');
};

// ── Extract headings (for Table of Contents) ──────────────────────────────────

/**
 * Walk a Contentful Rich Text document and collect all h1/h2/h3 headings
 * with their slugified IDs. Safe to run on the server.
 */
export const extractHeadings = (document: unknown): TocHeading[] => {
    if (!document || typeof document !== 'object') return [];

    const doc = document as { nodeType?: string; content?: RichTextNode[] };
    if (doc.nodeType !== 'document') return [];

    const headings: TocHeading[] = [];

    for (const node of doc.content || []) {
        if (node.nodeType === 'heading-1' || node.nodeType === 'heading-2') {
            const text = extractText(node);
            if (text) headings.push({ id: slugify(text), text, level: 2 });
        } else if (node.nodeType === 'heading-3') {
            const text = extractText(node);
            if (text) headings.push({ id: slugify(text), text, level: 3 });
        }
    }

    return headings;
};