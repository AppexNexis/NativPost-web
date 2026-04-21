import RevealAnimation from '../animation/RevealAnimation';

// ─────────────────────────────────────────────────────────────────────────────
// Micro product visuals — one per feature card.
// Each is a focused, minimal snapshot of that specific product surface.
// All tokens from variables.css. No emojis. No decorative dashes.
// ─────────────────────────────────────────────────────────────────────────────

// 1. Brand Profile builder — voice tags + tone slider
const BrandProfileMini = () => (
  <div className="flex flex-col gap-3 p-1">
    <div className="flex flex-wrap gap-1.5">
      {['Professional', 'Witty', 'Concise', 'Direct', 'Warm'].map((tag) => (
        <span
          key={tag}
          className="border-stroke-2 dark:border-stroke-7 bg-background-1 dark:bg-background-9 text-secondary dark:text-accent rounded-full border px-2.5 py-0.5 text-[11px]"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="border-stroke-4 dark:border-stroke-8 space-y-2.5 rounded-xl border p-3">
      {[
        { label: 'Tone', value: 72 },
        { label: 'Formality', value: 45 },
        { label: 'Personality', value: 88 },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center gap-3">
          <span className="text-secondary/40 dark:text-accent/40 w-20 shrink-0 text-[10px]">{label}</span>
          <div className="bg-background-3 dark:bg-background-8 relative h-1.5 flex-1 overflow-hidden rounded-full">
            <div className="bg-primary-500 h-full rounded-full" style={{ width: `${value}%` }} />
          </div>
          <span className="text-secondary/40 dark:text-accent/40 w-6 text-right text-[10px]">{value}</span>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <div className="bg-secondary dark:bg-accent text-accent dark:text-secondary rounded-lg px-3 py-1.5 text-[10px] font-medium">
        Save profile
      </div>
      <span className="text-secondary/30 dark:text-accent/30 text-[10px]">
        Drives every piece of content
      </span>
    </div>
  </div>
);

// 2. Content creation engine — post preview card
const ContentCreationMini = () => (
  <div className="flex flex-col gap-3 p-1">
    <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border">
      {/* Simulated graphic placeholder */}
      <div className="bg-background-3 dark:bg-background-8 flex h-20 items-center justify-center">
        <div className="flex items-center gap-2">
          {['IG', 'LI', 'X', 'FB'].map((p) => (
            <div
              key={p}
              className="bg-background-1 dark:bg-background-9 text-secondary/50 dark:text-accent/50 flex h-7 w-7 items-center justify-center rounded-lg text-[9px] font-semibold"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
      <div className="px-3 py-2.5">
        <p className="text-secondary dark:text-accent text-[12px] font-medium leading-snug">
          New product drop — studio-crafted and on-brand.
        </p>
        <p className="text-secondary/40 dark:text-accent/40 mt-1 text-[10px]">
          Generated · Ready to publish
        </p>
      </div>
    </div>
    <div className="bg-ns-green-light dark:bg-accent/10 flex items-center gap-2 rounded-lg px-3 py-2">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M10 3L4.75 8.25L2 5.5" stroke="#1a1a1c" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-secondary dark:text-ns-yellow text-[11px] font-medium">
        Passed quality filter — approved for all 4 platforms
      </span>
    </div>
  </div>
);

// 3. Anti-slop filter — pass / block rows
const AntiSlopMini = () => {
  const checks = [
    { text: 'Authentic brand voice', pass: true },
    { text: 'Original phrasing', pass: true },
    { text: 'Platform-appropriate', pass: true },
    { text: '"Game-changer" cliché', pass: false },
    { text: 'Generic filler copy', pass: false },
  ];
  return (
    <div className="flex flex-col gap-1.5 p-1">
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border">
        <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-3 py-2">
          <span className="text-secondary dark:text-accent text-[11px] font-medium">Anti-slop filter</span>
          <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow rounded-full px-2 py-0.5 text-[10px] font-medium">
            3 / 5 pass
          </span>
        </div>
        <ul>
          {checks.map(({ text, pass }, i) => (
            <li
              key={text}
              className={`flex items-center justify-between px-3 py-2 ${i < checks.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
            >
              <span
                className={
                  pass
                    ? 'text-secondary dark:text-accent text-[11px]'
                    : 'text-secondary/30 dark:text-accent/30 text-[11px] line-through'
                }
              >
                {text}
              </span>
              {pass ? (
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-ns-green shrink-0" aria-hidden="true">
                  <path d="M10 3L4.75 8.25L2 5.5" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0 text-red-400" aria-hidden="true">
                  <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 4. Approval & scheduling — minimal queue
const ApprovalMini = () => {
  const posts = [
    { platform: 'IG', title: 'Studio behind-the-scenes', day: 'Mon', status: 'approved' as const },
    { platform: 'LI', title: 'The future of brand content', day: 'Tue', status: 'pending' as const },
    { platform: 'X', title: 'Drop incoming this Friday', day: 'Wed', status: 'scheduled' as const },
  ];
  return (
    <div className="flex flex-col gap-1.5 p-1">
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 overflow-hidden rounded-xl border">
        <div className="border-stroke-4 dark:border-stroke-8 flex items-center justify-between border-b px-3 py-2">
          <span className="text-secondary dark:text-accent text-[11px] font-medium">Approval queue</span>
          <span className="text-secondary/40 dark:text-accent/40 text-[10px]">This week</span>
        </div>
        {posts.map((p, i) => (
          <div
            key={p.platform + p.day}
            className={`flex items-center gap-2.5 px-3 py-2 ${i < posts.length - 1 ? 'border-stroke-4 dark:border-stroke-8 border-b' : ''}`}
          >
            <div className="bg-background-3 dark:bg-background-8 text-secondary dark:text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[9px] font-semibold">
              {p.platform}
            </div>
            <span className="text-secondary dark:text-accent min-w-0 flex-1 truncate text-[11px]">
              {p.title}
            </span>
            {p.status === 'approved' && (
              <span className="bg-ns-green-light text-secondary dark:bg-accent/10 dark:text-ns-yellow shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium">
                Approved
              </span>
            )}
            {p.status === 'pending' && (
              <span className="bg-ns-yellow-light text-secondary dark:bg-accent/10 dark:text-ns-yellow shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium">
                Review
              </span>
            )}
            {p.status === 'scheduled' && (
              <span className="bg-primary-50 text-primary-600 dark:bg-accent/10 dark:text-primary-300 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium">
                Scheduled
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. Performance analytics — minimal bar chart
const AnalyticsMini = () => {
  const bars = [
    { day: 'M', reach: 55, engage: 40 },
    { day: 'T', reach: 70, engage: 55 },
    { day: 'W', reach: 45, engage: 30 },
    { day: 'T', reach: 88, engage: 72 },
    { day: 'F', reach: 62, engage: 50 },
    { day: 'S', reach: 95, engage: 80 },
    { day: 'S', reach: 78, engage: 60 },
  ];
  return (
    <div className="flex flex-col gap-3 p-1">
      {/* Stat row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Reach', value: '12.4k' },
          { label: 'Engagement', value: '8.2%' },
          { label: 'Posts', value: '40' },
        ].map(({ label, value }) => (
          <div key={label} className="border-stroke-2 dark:border-stroke-7 bg-background-1 dark:bg-background-9 rounded-xl border p-2 text-center">
            <p className="text-secondary dark:text-accent text-[13px] font-medium">{value}</p>
            <p className="text-secondary/40 dark:text-accent/40 text-[10px]">{label}</p>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div className="border-stroke-1 dark:border-stroke-5 bg-background-1 dark:bg-background-9 flex items-end gap-1.5 rounded-xl border px-3 pb-3 pt-4">
        {bars.map(({ day, reach, engage }) => (
          <div key={day + reach} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full items-end gap-0.5" style={{ height: '52px' }}>
              <div
                className="bg-background-3 dark:bg-background-8 flex-1 rounded-sm"
                style={{ height: `${reach}%` }}
              />
              <div
                className="bg-primary-200 dark:bg-primary-700 flex-1 rounded-sm"
                style={{ height: `${engage}%` }}
              />
            </div>
            <span className="text-secondary/30 dark:text-accent/30 text-[9px]">{day}</span>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="bg-background-3 dark:bg-background-8 h-2 w-2 rounded-sm" />
          <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Reach</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="bg-primary-200 dark:bg-primary-700 h-2 w-2 rounded-sm" />
          <span className="text-secondary/40 dark:text-accent/40 text-[10px]">Engagement</span>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Feature cards data
// ─────────────────────────────────────────────────────────────────────────────

const CARDS = [
  {
    id: 1,
    title: 'Brand Profile builder',
    description:
      'Capture your voice, visuals, and audience in a deep creative profile that drives every piece of content.',
    visual: <BrandProfileMini />,
    delay: 0.5,
  },
  {
    id: 2,
    title: 'Content creation engine',
    description:
      'Studio-quality graphics and brand-aligned captions generated for every platform automatically.',
    visual: <ContentCreationMini />,
    delay: 0.6,
  },
  {
    id: 3,
    title: 'Anti-slop quality filter',
    description:
      'Automatically rejects content with robotic patterns, generic phrases, and overused clichés.',
    visual: <AntiSlopMini />,
    delay: 0.7,
  },
  {
    id: 4,
    title: 'Approval & scheduling dashboard',
    description:
      'Preview, approve, edit, or reject posts. Bulk approve for efficiency. Schedule across all platforms.',
    visual: <ApprovalMini />,
    delay: 0.8,
  },
  {
    id: 5,
    title: 'Performance analytics',
    description:
      'Track reach, engagement, and growth. See what content works best and let the system optimize future posts.',
    visual: <AnalyticsMini />,
    delay: 0.9,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Feature card wrapper — mirrors the original card shell exactly
// ─────────────────────────────────────────────────────────────────────────────

const FeatureCard = ({
  title,
  description,
  visual,
  delay,
}: {
  title: string;
  description: string;
  visual: React.ReactNode;
  delay: number;
}) => (
  <RevealAnimation delay={delay}>
    {/* w-full fills the grid column on every breakpoint */}
    <div className="w-full space-y-3">
      {/* Card shell — identical to original: white outer, bg-3 inner */}
      <div className="dark:bg-background-5 w-full rounded-[20px] bg-white p-2.5">
        <div className="bg-background-3 dark:bg-background-7 min-h-[200px] overflow-hidden rounded-2xl p-4">
          {visual}
        </div>
      </div>
      {/* Copy */}
      <div className="space-y-1">
        <h3 className="text-heading-5">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </RevealAnimation>
);

// ─────────────────────────────────────────────────────────────────────────────
// Section — layout identical to original (two rows, responsive flex)
// ─────────────────────────────────────────────────────────────────────────────

const Features = () => (
  <section className="pt-[100px] pb-[100px] md:pt-[160px]" aria-label="Features">
    <div className="main-container">
      <div className="space-y-[70px]">

        {/* Heading */}
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[814px]">
              Everything you need to own your social media presence
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[734px]">
              NativPost combines deep brand understanding with studio-quality production and intelligent scheduling.
              From content creation to cross-platform publishing, one platform handles it all.
            </p>
          </RevealAnimation>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.slice(0, 3).map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>

        {/* Row 2 — 2 cards */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2">
          {CARDS.slice(3).map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>

      </div>
    </div>
  </section>
);

Features.displayName = 'Features';
export default Features;