/*
 * Marketing-site mirror of NativPost-app/src/lib/plans.ts.
 * Kept in sync manually. Do not import from the app - this is the marketing site
 * and it must build without the app package present.
 *
 * When plans change in the app (prices, limits), update this file too.
 * Last sync: 2026-07-19.
 */

export type MarketingPlan = {
  id: 'starter' | 'growth' | 'pro' | 'agency' | 'enterprise';
  name: string;
  tagline: string;
  priceUsd: number; // 0 for enterprise
  annualPriceUsd: number; // 0 for enterprise
  popular?: boolean;
  contactOnly?: boolean;
  ctaLabel: string;
  ctaHref: string;
  features: {
    postsPerMonth: number; // -1 unlimited
    platformsLimit: number; // -1 unlimited
    brandProfilesLimit: number; // -1 unlimited
    teamMembersLimit: number; // -1 unlimited
    monthlyAiCredits: number;
    blitzPostsPerDay: number; // -1 unlimited
    videoGeneration: boolean;
    humanReview: boolean;
    analyticsSync: boolean;
    analyticsHistoryDays: number; // -1 unlimited
    apiAccess: boolean;
    supportLevel: 'email' | 'priority_email' | 'live_chat' | 'dedicated_slack';
  };
  highlights: string[]; // shown on the card
};

export const FREE_TRIAL_DAYS = 7;
export const SETUP_FEE_USD = 5;
export const ANNUAL_SAVE_PCT = 20;

export const MARKETING_PLANS: MarketingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Get consistent, on-brand content without the agency price tag.',
    priceUsd: 19,
    annualPriceUsd: 182,
    ctaLabel: 'Start free trial',
    ctaHref: 'https://app.nativpost.com/sign-up?plan=starter',
    features: {
      postsPerMonth: 15,
      platformsLimit: 3,
      brandProfilesLimit: 1,
      teamMembersLimit: 2,
      monthlyAiCredits: 250,
      blitzPostsPerDay: 3,
      videoGeneration: false,
      humanReview: false,
      analyticsSync: false,
      analyticsHistoryDays: 30,
      apiAccess: false,
      supportLevel: 'email',
    },
    highlights: [
      '15 posts per month',
      '3 platforms connected',
      '250 AI Studio credits',
      '3 Blitz posts per day',
      'Text and image posts',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'More reach, richer content, and video for brands that are serious.',
    priceUsd: 39,
    annualPriceUsd: 374,
    popular: true,
    ctaLabel: 'Start free trial',
    ctaHref: 'https://app.nativpost.com/sign-up?plan=growth',
    features: {
      postsPerMonth: 40,
      platformsLimit: 6,
      brandProfilesLimit: 1,
      teamMembersLimit: 5,
      monthlyAiCredits: 500,
      blitzPostsPerDay: 5,
      videoGeneration: true,
      humanReview: false,
      analyticsSync: true,
      analyticsHistoryDays: 90,
      apiAccess: false,
      supportLevel: 'priority_email',
    },
    highlights: [
      '40 posts per month',
      '6 platforms connected',
      '500 AI Studio credits',
      '5 Blitz posts per day',
      'Video generation unlocked',
      'Carousels and slideshows',
      'Analytics sync (90 days)',
      'Priority email support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Agency-quality content with a human eye on everything before it goes live.',
    priceUsd: 79,
    annualPriceUsd: 758,
    ctaLabel: 'Start free trial',
    ctaHref: 'https://app.nativpost.com/sign-up?plan=pro',
    features: {
      postsPerMonth: 80,
      platformsLimit: -1,
      brandProfilesLimit: 1,
      teamMembersLimit: 10,
      monthlyAiCredits: 1250,
      blitzPostsPerDay: 10,
      videoGeneration: true,
      humanReview: true,
      analyticsSync: true,
      analyticsHistoryDays: 365,
      apiAccess: true,
      supportLevel: 'live_chat',
    },
    highlights: [
      '80 posts per month',
      'Unlimited platforms',
      '1,250 AI Studio credits',
      '10 Blitz posts per day',
      'Human review before publish',
      'Public REST API and webhooks',
      'Analytics history (12 months)',
      'Live chat support',
    ],
  },
  {
    id: 'agency',
    name: 'Agency',
    tagline: 'Run content for multiple clients at scale, under one roof.',
    priceUsd: 149,
    annualPriceUsd: 1430,
    ctaLabel: 'Start free trial',
    ctaHref: 'https://app.nativpost.com/sign-up?plan=agency',
    features: {
      postsPerMonth: -1,
      platformsLimit: -1,
      brandProfilesLimit: 5,
      teamMembersLimit: -1,
      monthlyAiCredits: 2000,
      blitzPostsPerDay: 20,
      videoGeneration: true,
      humanReview: true,
      analyticsSync: true,
      analyticsHistoryDays: -1,
      apiAccess: true,
      supportLevel: 'dedicated_slack',
    },
    highlights: [
      'Unlimited posts',
      '5 brand profiles',
      '2,000 AI Studio credits',
      '20 Blitz posts per day',
      'Unlimited team members',
      'Full analytics history',
      'Dedicated Slack support',
      'Public REST API and webhooks',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Custom limits, security review, and white-glove onboarding for large teams.',
    priceUsd: 0,
    annualPriceUsd: 0,
    contactOnly: true,
    ctaLabel: 'Contact sales',
    ctaHref: '/contact-us?intent=enterprise',
    features: {
      postsPerMonth: -1,
      platformsLimit: -1,
      brandProfilesLimit: -1,
      teamMembersLimit: -1,
      monthlyAiCredits: 2000,
      blitzPostsPerDay: -1,
      videoGeneration: true,
      humanReview: true,
      analyticsSync: true,
      analyticsHistoryDays: -1,
      apiAccess: true,
      supportLevel: 'dedicated_slack',
    },
    highlights: [
      'Everything in Agency',
      'Unlimited brand profiles',
      'Custom AI credit limits',
      'Security and compliance review',
      'Dedicated onboarding',
      'Custom SLA',
    ],
  },
];

export function formatLimit(value: number, singular: string, plural?: string): string {
  if (value === -1) {
    return 'Unlimited';
  }
  return `${value} ${value === 1 ? singular : (plural ?? `${singular}s`)}`;
}

export function monthlyEquivalent(annualPriceUsd: number): number {
  return Math.round((annualPriceUsd / 12) * 100) / 100;
}

// Ordered feature matrix for the comparison table.
// Each row: label + accessor that returns a display string per plan.
export type FeatureRow = {
  section: string;
  label: string;
  accessor: (p: MarketingPlan) => string;
};

export const FEATURE_MATRIX: FeatureRow[] = [
  { section: 'Content', label: 'Posts per month', accessor: p => formatLimit(p.features.postsPerMonth, 'post') },
  { section: 'Content', label: 'Blitz posts per day', accessor: p => formatLimit(p.features.blitzPostsPerDay, 'post') },
  { section: 'Content', label: 'Video generation', accessor: p => p.features.videoGeneration ? 'Included' : 'Not included' },
  { section: 'Content', label: 'Human review before publish', accessor: p => p.features.humanReview ? 'Included' : 'Not included' },
  { section: 'Reach', label: 'Platforms connected', accessor: p => formatLimit(p.features.platformsLimit, 'platform') },
  { section: 'Reach', label: 'Brand profiles', accessor: p => formatLimit(p.features.brandProfilesLimit, 'brand profile') },
  { section: 'Reach', label: 'Team members', accessor: p => formatLimit(p.features.teamMembersLimit, 'seat') },
  { section: 'AI Studio', label: 'Monthly credits', accessor: p => `${p.features.monthlyAiCredits.toLocaleString()} credits` },
  { section: 'Analytics', label: 'Platform analytics sync', accessor: p => p.features.analyticsSync ? 'Included' : 'Not included' },
  { section: 'Analytics', label: 'History retention', accessor: (p) => {
    const d = p.features.analyticsHistoryDays;
    if (d === -1) return 'Unlimited';
    if (d >= 365) return `${Math.round(d / 30)} months`;
    return `${d} days`;
  } },
  { section: 'Developer', label: 'Public REST API and webhooks', accessor: p => p.features.apiAccess ? 'Included' : 'Not included' },
  { section: 'Support', label: 'Support channel', accessor: (p) => {
    switch (p.features.supportLevel) {
      case 'email': return 'Email';
      case 'priority_email': return 'Priority email';
      case 'live_chat': return 'Live chat';
      case 'dedicated_slack': return 'Dedicated Slack';
    }
  } },
];
