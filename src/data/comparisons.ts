// ============================================================
// COMPARISON DATA — src/data/comparisons.ts
//
// Drives the programmatic /compare/[slug] pages. One entry per competitor.
// Content is written to be honest: each entry names what the competitor is
// genuinely good at (bestForCompetitor) before positioning NativPost. Pricing
// is "starts at" and may drift — kept deliberately soft ("from", "around").
// ============================================================

export interface ComparisonRow {
  feature: string;
  // true = included, false = not / limited, string = qualified value
  nativpost: string | boolean;
  competitor: string | boolean;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface ComparisonFaq {
  question: string;
  answer: string;
}

export interface Comparison {
  slug: string;
  competitor: string;
  // One-line description of the competitor.
  competitorTagline: string;
  // Category label shown as a badge, e.g. "Scheduling tool".
  category: string;
  // H1 subtitle / hero positioning (2 sentences max).
  hero: string;
  // Honest paragraph: what they're good at + where NativPost differs.
  summary: string;
  competitorStartingPrice: string;
  competitorBestFor: string;
  nativpostBestFor: string;
  rows: ComparisonRow[];
  differentiators: Differentiator[];
  faqs: ComparisonFaq[];
}

// Shared feature rows reused across most comparisons (kept DRY; each entry can
// still override by defining its own `rows`).
const NATIVPOST_STARTING_PRICE = 'From $19/mo (free 7-day trial)';

export const comparisons: Comparison[] = [
  {
    slug: 'buffer',
    competitor: 'Buffer',
    competitorTagline: 'Simple, budget-friendly social scheduling for creators and small teams.',
    category: 'Scheduling tool',
    hero:
      'Buffer is a clean, affordable scheduler. NativPost is a content engine that also creates the posts — and can even run the accounts for you.',
    summary:
      'Buffer is one of the most approachable schedulers on the market: a free plan, a tidy calendar, and paid tiers that start around $6/month per channel. It is excellent if you already produce your own content and just need somewhere to queue it. Where it stops is creation — Buffer does not draft studio-quality graphics, write on-brand captions at scale, or operate accounts on your behalf. NativPost starts where Buffer ends: it learns your brand, generates the content, publishes it across platforms, and — on the managed tier — creates and runs real accounts in the markets you want to reach.',
    competitorStartingPrice: 'Free plan; paid from ~$6/mo per channel',
    competitorBestFor: 'Solo creators and small teams who make their own content and want simple, cheap scheduling.',
    nativpostBestFor: 'Brands that want the content created for them, on-brand, and published across every platform — not just queued.',
    rows: [
      { feature: 'Post scheduling & calendar', nativpost: true, competitor: true },
      { feature: 'AI content generation (graphics + captions)', nativpost: true, competitor: 'Basic AI assistant' },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: true, competitor: false },
      { feature: 'AI video / UGC generation', nativpost: true, competitor: false },
      { feature: 'Human content review', nativpost: 'On Pro and up', competitor: false },
      { feature: 'Cross-platform auto-publishing', nativpost: '10 platforms', competitor: true },
      { feature: 'Managed done-for-you accounts', nativpost: true, competitor: false },
      { feature: 'Starting price', nativpost: NATIVPOST_STARTING_PRICE, competitor: 'Free / ~$6 per channel' },
    ],
    differentiators: [
      {
        title: 'It makes the content, not just the calendar',
        description:
          'Buffer schedules what you give it. NativPost drafts the graphics, captions, and video from your Brand Profile — a month of on-brand content in an afternoon.',
      },
      {
        title: 'Human review, not just automation',
        description:
          'On Pro and up, a human checks managed content before it ships — the safety net a pure scheduler does not offer.',
      },
      {
        title: 'We can run the accounts too',
        description:
          'Managed Social Infrastructure creates and operates real accounts in your target market — something no scheduling tool does.',
      },
    ],
    faqs: [
      {
        question: 'Can NativPost replace Buffer?',
        answer:
          'Yes. NativPost includes scheduling and cross-platform publishing, and adds the content creation and brand system Buffer does not. If you only need a bare scheduler, Buffer is cheaper; if you want the posts made for you, NativPost does both.',
      },
      {
        question: 'Is NativPost more expensive than Buffer?',
        answer:
          'NativPost starts at $19/month for the whole workspace, while Buffer charges per channel. Once you publish to several platforms, the value comparison shifts quickly — and NativPost is generating the content, not just queuing it.',
      },
    ],
  },
  {
    slug: 'hootsuite',
    competitor: 'Hootsuite',
    competitorTagline: 'Enterprise social management with bulk posting, inbox, and deep integrations.',
    category: 'Enterprise suite',
    hero:
      'Hootsuite is a powerful, pricey enterprise suite. NativPost delivers the content creation and publishing most teams actually use — at a fraction of the cost.',
    summary:
      'Hootsuite is built for large organizations that need bulk scheduling, a unified social inbox, team approvals, and a long list of integrations. It is capable — and it is expensive and complex, with plans that commonly start around $99/month per user and climb from there. Most teams use a slice of it. NativPost focuses that slice: it creates studio-quality, on-brand content and publishes it everywhere, with human review and a managed-accounts option — without the enterprise price tag or the onboarding overhead.',
    competitorStartingPrice: 'From ~$99/mo per user',
    competitorBestFor: 'Large enterprises needing a unified inbox, bulk posting, and heavy team workflows.',
    nativpostBestFor: 'Teams that want great content published everywhere without enterprise pricing or complexity.',
    rows: [
      { feature: 'Post scheduling & bulk posting', nativpost: true, competitor: true },
      { feature: 'Unified social inbox', nativpost: false, competitor: true },
      { feature: 'AI content generation (graphics + captions)', nativpost: true, competitor: 'Add-on / limited' },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: true, competitor: false },
      { feature: 'AI video / UGC generation', nativpost: true, competitor: false },
      { feature: 'Human content review', nativpost: 'On Pro and up', competitor: 'Approval workflows' },
      { feature: 'Managed done-for-you accounts', nativpost: true, competitor: false },
      { feature: 'Starting price', nativpost: NATIVPOST_STARTING_PRICE, competitor: '~$99/mo per user' },
    ],
    differentiators: [
      {
        title: 'A fraction of the price',
        description:
          'From $19/month for the workspace versus roughly $99/month per user. NativPost puts agency-quality output within reach of small teams.',
      },
      {
        title: 'Content included, not bolted on',
        description:
          'Hootsuite manages posts; NativPost creates them from your Brand Profile — graphics, captions, and video — then publishes across ten platforms.',
      },
      {
        title: 'Done-for-you accounts',
        description:
          'Need a presence in a new market? Our managed tier builds and runs real accounts there. Hootsuite has no equivalent.',
      },
    ],
    faqs: [
      {
        question: 'Is NativPost a good Hootsuite alternative?',
        answer:
          'For content creation and publishing, yes — at a much lower price. If your core need is a unified inbox and large-team social customer care, Hootsuite is stronger there. Many teams pair the two or switch to NativPost for the content workload.',
      },
      {
        question: 'Does NativPost do team approvals?',
        answer:
          'Yes. Managed content runs through human review, and you approve posts before they publish. It is lighter-weight than Hootsuite\'s enterprise approval chains, which most teams find easier.',
      },
    ],
  },
  {
    slug: 'sprout-social',
    competitor: 'Sprout Social',
    competitorTagline: 'Premium analytics, social listening, and customer-care workflows.',
    category: 'Analytics suite',
    hero:
      'Sprout Social is a premium analytics and listening platform. NativPost is a content engine — it makes and ships the posts those analytics measure.',
    summary:
      'Sprout Social is known for deep analytics, social listening, and customer-care workflows, with plans that typically start around $199/month per seat. It is a reporting and engagement powerhouse for teams that live in the data. It is not, however, a content studio — it does not generate on-brand graphics and video or run accounts for you. NativPost is the creation-and-distribution engine that feeds a tool like Sprout: on-brand content, published everywhere, with an optional managed-accounts layer.',
    competitorStartingPrice: 'From ~$199/mo per seat',
    competitorBestFor: 'Data-driven teams that need advanced analytics, listening, and customer-care tooling.',
    nativpostBestFor: 'Brands whose bottleneck is producing and shipping content, not measuring it.',
    rows: [
      { feature: 'Advanced analytics & reporting', nativpost: 'Core analytics', competitor: true },
      { feature: 'Social listening', nativpost: false, competitor: true },
      { feature: 'AI content generation (graphics + captions)', nativpost: true, competitor: false },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: true, competitor: false },
      { feature: 'AI video / UGC generation', nativpost: true, competitor: false },
      { feature: 'Cross-platform auto-publishing', nativpost: '10 platforms', competitor: true },
      { feature: 'Managed done-for-you accounts', nativpost: true, competitor: false },
      { feature: 'Starting price', nativpost: NATIVPOST_STARTING_PRICE, competitor: '~$199/mo per seat' },
    ],
    differentiators: [
      {
        title: 'Creation, not just measurement',
        description:
          'Sprout tells you how posts performed. NativPost makes the posts — on-brand graphics, captions, and video — so there is something to measure.',
      },
      {
        title: 'One-tenth the entry price',
        description:
          'From $19/month versus roughly $199/month per seat. The two tools solve different problems at very different price points.',
      },
      {
        title: 'Done-for-you presence',
        description:
          'Our managed tier stands up and runs real accounts in new markets — a capability outside Sprout\'s scope entirely.',
      },
    ],
    faqs: [
      {
        question: 'Can NativPost replace Sprout Social?',
        answer:
          'If your need is producing and publishing content, yes — and far more affordably. If you rely on Sprout\'s advanced listening and customer-care suite, keep it for that and use NativPost to create the content it reports on.',
      },
    ],
  },
  {
    slug: 'metricool',
    competitor: 'Metricool',
    competitorTagline: 'Budget-friendly analytics and scheduling with web-traffic tracking.',
    category: 'Analytics + scheduling',
    hero:
      'Metricool is an affordable analytics-and-scheduling tool. NativPost adds the piece it lacks — creating the on-brand content itself.',
    summary:
      'Metricool is a well-priced all-rounder: scheduling, analytics, and even website-traffic tracking alongside your socials, with a free tier and paid plans from around $25/month. It is a solid measurement-and-planning hub. What it is not is a content studio — it helps you track and queue posts, but you still have to make them. NativPost generates the content from your Brand Profile and publishes it across every platform, with an optional managed-accounts layer for teams that want the whole thing handled.',
    competitorStartingPrice: 'Free plan; paid from ~$25/mo',
    competitorBestFor: 'Budget-conscious marketers who want analytics, scheduling, and traffic tracking in one place.',
    nativpostBestFor: 'Teams that want the content produced for them, not just measured and scheduled.',
    rows: [
      { feature: 'Post scheduling & calendar', nativpost: true, competitor: true },
      { feature: 'Analytics & reporting', nativpost: 'Core analytics', competitor: true },
      { feature: 'AI content generation (graphics + captions)', nativpost: true, competitor: 'Basic AI assistant' },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: true, competitor: false },
      { feature: 'AI video / UGC generation', nativpost: true, competitor: false },
      { feature: 'Human content review', nativpost: 'On Pro and up', competitor: false },
      { feature: 'Managed done-for-you accounts', nativpost: true, competitor: false },
      { feature: 'Starting price', nativpost: NATIVPOST_STARTING_PRICE, competitor: 'Free / from ~$25/mo' },
    ],
    differentiators: [
      {
        title: 'The content is done for you',
        description:
          'Metricool schedules and measures. NativPost generates the graphics, captions, and video from your brand — so the calendar fills itself.',
      },
      {
        title: 'On-brand by default',
        description:
          'Your Brand Profile keeps every post consistent in voice and look — not the generic output of a bolt-on AI assistant.',
      },
      {
        title: 'A managed option',
        description:
          'When you want a hands-off presence in a new market, our team builds and runs the accounts for you.',
      },
    ],
    faqs: [
      {
        question: 'Is NativPost or Metricool better for analytics?',
        answer:
          'Metricool has broader analytics, including web-traffic tracking. NativPost covers the core performance metrics you need and focuses its strength on creating and publishing the content itself.',
      },
    ],
  },
  {
    slug: 'later',
    competitor: 'Later',
    competitorTagline: 'Visual-first planning built around Instagram grids and link-in-bio.',
    category: 'Visual planner',
    hero:
      'Later is a visual-first Instagram planner. NativPost creates the visuals — and publishes them across every platform, not just Instagram.',
    summary:
      'Later built its name on visual planning: an Instagram grid preview, a drag-and-drop calendar, and link-in-bio tools. If Instagram aesthetics are your world, it is a lovely place to plan. Its limits are creation and breadth — you supply the imagery, and its focus is visual social rather than every channel. NativPost generates studio-quality visuals and captions from your Brand Profile and auto-publishes them across ten platforms, with human review and an optional managed-accounts tier.',
    competitorStartingPrice: 'From ~$25/mo',
    competitorBestFor: 'Instagram-led creators who want grid previews and link-in-bio tools.',
    nativpostBestFor: 'Brands that want the visuals created for them and published across every platform.',
    rows: [
      { feature: 'Visual calendar & grid preview', nativpost: 'Calendar', competitor: true },
      { feature: 'Link-in-bio tools', nativpost: false, competitor: true },
      { feature: 'AI content generation (graphics + captions)', nativpost: true, competitor: 'Limited' },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: true, competitor: false },
      { feature: 'AI video / UGC generation', nativpost: true, competitor: false },
      { feature: 'Cross-platform auto-publishing', nativpost: '10 platforms', competitor: 'Visual-social focus' },
      { feature: 'Managed done-for-you accounts', nativpost: true, competitor: false },
      { feature: 'Starting price', nativpost: NATIVPOST_STARTING_PRICE, competitor: 'From ~$25/mo' },
    ],
    differentiators: [
      {
        title: 'It creates the visuals',
        description:
          'Later helps you arrange images you already have. NativPost generates on-brand graphics and video for you, ready to publish.',
      },
      {
        title: 'Every platform, not just Instagram',
        description:
          'NativPost publishes to ten platforms with a single approval — beyond Later\'s visual-social focus.',
      },
      {
        title: 'Managed accounts',
        description:
          'For a hands-off presence in a new market, our team creates and runs the accounts. Later has no equivalent.',
      },
    ],
    faqs: [
      {
        question: 'Is NativPost a good Later alternative?',
        answer:
          'If you want the content created and published across platforms, yes. If your workflow is specifically an Instagram grid aesthetic with link-in-bio, Later is purpose-built for that niche.',
      },
    ],
  },
  {
    slug: 'ocoya',
    competitor: 'Ocoya',
    competitorTagline: 'AI copywriting and design bundled with social scheduling.',
    category: 'AI content + scheduling',
    hero:
      'Ocoya pairs AI copy and design with scheduling. NativPost goes further with a deep Brand Profile, human review, and done-for-you accounts.',
    summary:
      'Ocoya is one of the closer comparisons: it combines AI copywriting, templated design, and scheduling in one tool, which makes it a genuine content-and-publishing product. Where NativPost pulls ahead is depth and trust — a Brand Profile that learns your specific voice, colors, and audience rather than generic templates; human review on managed content; native AI video and UGC; and an entire managed-accounts tier that creates and operates real accounts for you. Ocoya helps you make posts faster; NativPost aims to make them indistinguishable from your in-house creative team, and can run the accounts too.',
    competitorStartingPrice: 'From ~$19/mo',
    competitorBestFor: 'Individuals who want quick AI copy and templated graphics with built-in scheduling.',
    nativpostBestFor: 'Brands that want consistent, on-brand output with human review — and an optional managed tier.',
    rows: [
      { feature: 'AI copywriting', nativpost: true, competitor: true },
      { feature: 'AI graphics / design', nativpost: 'Studio-quality', competitor: 'Templated' },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: 'Deep brand learning', competitor: 'Basic brand kit' },
      { feature: 'AI video / UGC generation', nativpost: true, competitor: 'Limited' },
      { feature: 'Human content review', nativpost: 'On Pro and up', competitor: false },
      { feature: 'Cross-platform auto-publishing', nativpost: '10 platforms', competitor: true },
      { feature: 'Managed done-for-you accounts', nativpost: true, competitor: false },
      { feature: 'Starting price', nativpost: NATIVPOST_STARTING_PRICE, competitor: 'From ~$19/mo' },
    ],
    differentiators: [
      {
        title: 'Brand depth over templates',
        description:
          'NativPost\'s Brand Profile learns your voice, palette, and audience so output looks in-house — not like a shared template pack.',
      },
      {
        title: 'Human review built in',
        description:
          'On Pro and up, a human checks managed content before it ships — a trust layer most AI tools skip.',
      },
      {
        title: 'It can run the accounts',
        description:
          'Managed Social Infrastructure creates and operates real accounts in your target market. No pure content tool offers this.',
      },
    ],
    faqs: [
      {
        question: 'How is NativPost different from Ocoya?',
        answer:
          'Both generate content and schedule it. NativPost adds a deeper Brand Profile, native AI video, human review, and a managed-accounts tier that operates real accounts for you — so it covers strategy-to-publish, not just faster posts.',
      },
    ],
  },
  {
    slug: 'usefastlane',
    competitor: 'Fastlane',
    competitorTagline: 'AI UGC content with "warmed" social accounts for sale.',
    category: 'AI UGC + accounts',
    hero:
      'Fastlane sells AI content and "warmed" accounts. NativPost offers the same done-for-you outcome — with real accounts you own, run through official APIs.',
    summary:
      'Fastlane pairs AI UGC content with a "warmed accounts" offering — pre-aged social accounts you connect and post through. The outcome is appealing: a ready-made presence in a target market. The mechanism is where it matters. NativPost delivers the same done-for-you outcome through a compliant model: real accounts created for your brand, under a written authorization grant, with retrievable credentials, operated through official platform APIs. We do not sell aged or transferable accounts and we do not use ban-evasion techniques — which is what makes managed accounts safe to put a real brand behind. If you want a presence you actually own and can defend, that difference is the whole point.',
    competitorStartingPrice: 'From $80/mo per account (per their site)',
    competitorBestFor: 'Users comfortable buying pre-warmed accounts to move fast in a niche.',
    nativpostBestFor: 'Brands that want a done-for-you presence they truly own — enterprise-safe and compliant.',
    rows: [
      { feature: 'AI content generation', nativpost: true, competitor: true },
      { feature: 'Done-for-you managed accounts', nativpost: true, competitor: true },
      { feature: 'Accounts you legally own', nativpost: 'Written authorization, retrievable credentials', competitor: 'Purchased / connected accounts' },
      { feature: 'Official platform APIs (no evasion)', nativpost: true, competitor: 'Unclear' },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: true, competitor: 'Limited' },
      { feature: 'Human content review', nativpost: 'On Pro and up', competitor: 'Some human UGC' },
      { feature: 'Full content suite + scheduling', nativpost: '10 platforms', competitor: true },
      { feature: 'Managed pricing', nativpost: '$80/account/mo + $1.50/post', competitor: '~$80/account/mo + per-post' },
    ],
    differentiators: [
      {
        title: 'Accounts you actually own',
        description:
          'Every managed account is created for your brand under a written authorization grant, with credentials you can retrieve at any time. It is your asset, not rented inventory.',
      },
      {
        title: 'Compliant by design',
        description:
          'We operate through official, sanctioned platform APIs — no ban-evasion, no gray-market mechanics. That is what makes it safe to put a real brand behind.',
      },
      {
        title: 'A full content engine behind it',
        description:
          'Beyond the accounts, NativPost is a complete studio: Brand Profile, AI graphics and video, human review, and publishing across ten platforms.',
      },
    ],
    faqs: [
      {
        question: 'How is NativPost different from buying warmed accounts?',
        answer:
          'A warmed account you buy is inventory that was created and aged by someone else, then connected to you. A NativPost managed account is created for your brand from the start, under a written authorization grant, with credentials you own and control, and is operated through official platform APIs. The outcome is similar; the ownership, compliance, and risk profile are very different.',
      },
      {
        question: 'Is the managed pricing similar?',
        answer:
          'Both are around $80 per account per month with a per-post fee (NativPost is $1.50 per managed post). NativPost includes the full content engine and requires an active NativPost plan.',
      },
    ],
  },
  {
    slug: 'socella',
    competitor: 'Socella',
    competitorTagline: 'AI-assisted social media content and management.',
    category: 'AI social tool',
    hero:
      'Socella is a newer AI social tool. NativPost brings a deeper brand system, native video, human review, and a done-for-you managed tier.',
    summary:
      'Socella is part of the new wave of AI social tools that help you generate posts and manage them in one place. It is a capable option for fast, AI-assisted content. NativPost differentiates on depth and completeness: a Brand Profile that learns your specific voice and look, native AI video and UGC, human review on managed content, publishing across ten platforms, and — uniquely — a managed-accounts tier where our team creates and runs real accounts for you. If you want more than fast posts — a consistent brand system and an optional hands-off presence — NativPost is built for that.',
    competitorStartingPrice: 'See socella.com for current pricing',
    competitorBestFor: 'Users wanting a straightforward AI tool to generate and manage social posts.',
    nativpostBestFor: 'Brands that want a full brand system, native video, human review, and a managed option.',
    rows: [
      { feature: 'AI content generation', nativpost: true, competitor: true },
      { feature: 'Brand Profile (voice, colors, style)', nativpost: 'Deep brand learning', competitor: 'Basic' },
      { feature: 'AI video / UGC generation', nativpost: true, competitor: 'Limited' },
      { feature: 'Human content review', nativpost: 'On Pro and up', competitor: false },
      { feature: 'Cross-platform auto-publishing', nativpost: '10 platforms', competitor: true },
      { feature: 'Managed done-for-you accounts', nativpost: true, competitor: false },
      { feature: 'Starting price', nativpost: NATIVPOST_STARTING_PRICE, competitor: 'See their site' },
    ],
    differentiators: [
      {
        title: 'A real brand system',
        description:
          'The Brand Profile learns your voice, colors, and audience so every post is consistent — not generic AI output.',
      },
      {
        title: 'Native video and human review',
        description:
          'NativPost generates AI video and UGC, and puts human review behind managed content before it ships.',
      },
      {
        title: 'Done-for-you accounts',
        description:
          'Our managed tier creates and operates real accounts in your target market — a capability most AI tools do not offer.',
      },
    ],
    faqs: [
      {
        question: 'Why choose NativPost over Socella?',
        answer:
          'Choose NativPost if you want a deeper brand system, native AI video, human review, publishing across ten platforms, and the option to have real accounts created and run for you. Both generate content; NativPost covers more of the workflow.',
      },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug);
}

export const comparisonSlugs = comparisons.map(c => c.slug);
