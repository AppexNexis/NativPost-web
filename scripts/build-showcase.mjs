#!/usr/bin/env node
/*
 * build-showcase.mjs
 *
 * Snapshots the top N published content_items from prod Postgres into
 * public/data/showcase.json so the marketing landing page can render a real
 * "See what our users are making" grid without a runtime API dependency.
 *
 * Requires: DATABASE_URL pointing at NativPost app prod (or an env alias).
 *
 * Usage:
 *   DATABASE_URL="postgres://..." node scripts/build-showcase.mjs
 *   DATABASE_URL="postgres://..." node scripts/build-showcase.mjs --limit=20
 *
 * Safety:
 *   - Read-only. Never writes to the DB.
 *   - Filters to status='published' + non-empty graphic_urls.
 *   - Skips items whose first graphic_url is not an https:// URL (avoids
 *     leaking raw file:// or local paths into public JSON).
 */

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';
import pg from 'pg';

const { Pool } = pg;

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { limit: 18 };
  for (const arg of args) {
    if (arg.startsWith('--limit=')) {
      opts.limit = Math.max(1, Math.min(50, parseInt(arg.split('=')[1], 10) || 18));
    }
  }
  return opts;
}

function normaliseAspect(raw) {
  if (typeof raw !== 'string') {
    return '9:16';
  }
  const t = raw.trim().toLowerCase();
  if (t === '1:1' || t === '9:16' || t === '16:9' || t === '4:5') {
    return t;
  }
  return '9:16';
}

function firstPlatform(targetPlatforms) {
  if (!Array.isArray(targetPlatforms) || targetPlatforms.length === 0) {
    return 'tiktok';
  }
  const p = String(targetPlatforms[0] ?? 'tiktok').toLowerCase();
  return p;
}

function creatorFromEnrichment(enrichment) {
  if (!enrichment || typeof enrichment !== 'object') {
    return '@nativpost';
  }
  const handle
    = enrichment.sourceCreatorHandle
      ?? enrichment.creatorHandle
      ?? enrichment.sourceCreator
      ?? null;
  if (typeof handle === 'string' && handle.length > 0) {
    return handle.startsWith('@') ? handle : `@${handle}`;
  }
  return '@nativpost';
}

async function main() {
  const { limit } = parseArgs();
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('[build-showcase] DATABASE_URL is required.');
    process.exit(1);
  }

  const pool = new Pool({ connectionString: url, max: 2 });
  try {
    const sql = `
      SELECT
        id::text                          AS id,
        caption,
        content_type                      AS "contentType",
        graphic_urls                      AS "graphicUrls",
        target_platforms                  AS "targetPlatforms",
        aspect_ratio                      AS "aspectRatio",
        enrichment_data                   AS "enrichmentData",
        published_at                      AS "publishedAt"
      FROM content_item
      WHERE status = 'published'
        AND graphic_urls IS NOT NULL
        AND jsonb_array_length(graphic_urls) > 0
        AND content_type IN ('reel','slideshow','single_image','video_hook','talking_head','green_screen','ugc','video_hook_demo')
      ORDER BY published_at DESC NULLS LAST
      LIMIT $1
    `;
    const { rows } = await pool.query(sql, [limit]);

    const items = [];
    for (const row of rows) {
      const first = Array.isArray(row.graphicUrls) ? row.graphicUrls[0] : null;
      if (typeof first !== 'string' || !first.startsWith('https://')) {
        continue;
      }
      items.push({
        id: row.id,
        videoUrl: first,
        posterUrl: null,
        aspectRatio: normaliseAspect(row.aspectRatio),
        contentType: row.contentType,
        platform: firstPlatform(row.targetPlatforms),
        creatorHandle: creatorFromEnrichment(row.enrichmentData),
        caption: typeof row.caption === 'string' ? row.caption.slice(0, 140) : '',
        viewCount: null,
        publishedAt: row.publishedAt ? new Date(row.publishedAt).toISOString() : null,
      });
    }

    if (items.length === 0) {
      console.error('[build-showcase] Query returned no eligible items. Aborting to keep existing placeholder in place.');
      process.exit(2);
    }

    const payload = {
      $schema: './showcase.schema.json',
      generatedAt: new Date().toISOString(),
      note: null,
      items,
    };

    const outPath = resolve(process.cwd(), 'public/data/showcase.json');
    writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    console.log(`[build-showcase] Wrote ${items.length} items -> ${outPath}`);
  }
  finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error('[build-showcase] Failed:', err?.message ?? err);
  process.exit(1);
});
