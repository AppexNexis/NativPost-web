import RevealAnimation from '../animation/RevealAnimation';

// ─────────────────────────────────────────────────────────────────────────────
// Coded product visual — replaces static images entirely.
// Mirrors the real NativPost dashboard: Brand voice strip → Post card with
// graphic preview + caption → Anti-slop quality gate → Floating approval +
// schedule badges. All tokens from your design system.
// ─────────────────────────────────────────────────────────────────────────────

const VoiceStrip = () => (
  <div className="flex flex-wrap items-center gap-2 rounded-xl border border-stroke-2 dark:border-stroke-7 bg-white dark:bg-background-9 px-3 py-2.5">
    <span className="text-[10px] font-medium text-secondary/50 dark:text-accent/50 shrink-0">Voice:</span>
    {['Professional', 'Witty', 'Direct'].map((tag) => (
      <span
        key={tag}
        className="rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 px-2.5 py-0.5 text-[10px] font-semibold text-primary-700 dark:text-primary-300"
      >
        {tag}
      </span>
    ))}
    {['Casual', 'Formal'].map((tag) => (
      <span
        key={tag}
        className="rounded-full bg-background-3 dark:bg-background-8 border border-stroke-4 dark:border-stroke-8 px-2.5 py-0.5 text-[10px] font-medium text-secondary/40 dark:text-accent/40"
      >
        {tag}
      </span>
    ))}
  </div>
);

const PostGraphic = () => (
  <div
    className="relative flex h-[108px] items-center justify-center overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d0a5e 50%, #4c1394 100%)' }}
  >
    {/* Grid overlay */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div className="relative z-10 text-center">
      <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/50">New Release</p>
      <p className="text-[17px] font-extrabold leading-tight tracking-tight text-white">
        Built for <span className="text-primary-300">creators</span>
        <br />who mean it.
      </p>
      <span className="mt-1.5 inline-block rounded-full border border-primary-400/40 bg-primary-500/20 px-2 py-0.5 text-[8px] font-semibold text-primary-300">
        Studio-crafted
      </span>
    </div>
  </div>
);

const PostCard = () => (
  <div className="overflow-hidden rounded-2xl border border-stroke-1 dark:border-stroke-5 bg-white dark:bg-background-9">
    {/* Header */}
    <div className="flex items-center gap-2.5 border-b border-stroke-4 dark:border-stroke-8 px-3.5 py-2.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white">
        JT
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-semibold text-secondary dark:text-accent">Jake Torres</p>
        <p className="text-[10px] text-secondary/50 dark:text-accent/50">Media · Creator</p>
      </div>
      <span className="text-[10px] text-secondary/40 dark:text-accent/40">Draft ready</span>
    </div>

    {/* Graphic */}
    <PostGraphic />

    {/* Caption */}
    <div className="px-3.5 py-3">
      <p className="mb-2.5 text-[12px] leading-relaxed text-secondary/70 dark:text-accent/70">
        Stop settling for generic content. Your brand has a story — we make sure every post tells it the right way.
        No templates, no robots, just results. ↗
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {[
            { label: 'IG', cls: 'bg-pink-50 text-pink-700 border-pink-200' },
            { label: 'LI', cls: 'bg-blue-50 text-blue-700 border-blue-200' },
            { label: 'X', cls: 'bg-background-3 dark:bg-background-8 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-8' },
            { label: 'FB', cls: 'bg-blue-50 text-blue-800 border-blue-200' },
          ].map(({ label, cls }) => (
            <span
              key={label}
              className={`rounded-md border px-1.5 py-0.5 text-[10px] font-semibold ${cls}`}
            >
              {label}
            </span>
          ))}
        </div>
        <span className="text-[10px] text-secondary/40 dark:text-accent/40">Ready to publish</span>
      </div>
    </div>
  </div>
);

const QualityGate = () => {
  const checks = [
    'Authentic brand voice detected',
    'No overused clichés found',
    'Platform-appropriate tone',
    'Original phrasing confirmed',
    'Human review: approved',
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-stroke-1 dark:border-stroke-5 bg-white dark:bg-background-9">
      <div className="flex items-center justify-between border-b border-stroke-4 dark:border-stroke-8 px-3 py-2">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-secondary dark:text-accent">
          <span className="ns-shape-46 text-primary-500 text-[14px]" />
          Anti-slop filter
        </span>
        <span className="rounded-full bg-ns-green-light dark:bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-secondary dark:text-ns-yellow">
          5 / 5 passed
        </span>
      </div>
      <ul>
        {checks.map((text, i) => (
          <li
            key={text}
            className={`flex items-center gap-2.5 px-3 py-1.5 ${i < checks.length - 1 ? 'border-b border-stroke-4 dark:border-stroke-8' : ''}`}
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ns-green-light dark:bg-accent/10">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4L3 5.5L6.5 2" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-[11px] text-secondary dark:text-accent">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Floating badges
const ApprovalBadge = () => (
  <div className="absolute -top-4 right-4 z-20 flex items-center gap-2 rounded-xl border border-stroke-1 dark:border-stroke-5 bg-white dark:bg-background-9 px-3 py-2 shadow-sm">
    <span className="block h-2 w-2 rounded-full bg-ns-green" />
    <div>
      <p className="text-[11px] font-semibold text-secondary dark:text-accent">Approved &amp; scheduled</p>
      <p className="text-[10px] text-secondary/50 dark:text-accent/50">Mon, Apr 21 · 9:00 AM</p>
    </div>
  </div>
);

const ScheduleBadge = () => (
  <div className="absolute -bottom-3.5 left-4 right-14 z-20 flex items-center justify-between rounded-lg bg-primary-500 px-3 py-2">
    <div>
      <p className="text-[9px] font-medium text-white/60">Scheduled for</p>
      <p className="text-[11px] font-bold text-white">Monday, Apr 21 · 9:00 AM</p>
    </div>
    <div className="flex gap-1">
      {['IG', 'LI', 'X', 'FB'].map((p) => (
        <span
          key={p}
          className="rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-bold text-white/80"
        >
          {p}
        </span>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Benefits section
// ─────────────────────────────────────────────────────────────────────────────

const Benefits = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-x-[70px] md:flex-row-reverse">

          {/* ── COPY SIDE ── */}
          <div className="w-full md:w-1/2">
            <div className="mb-13">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan mb-5">Why NativPost</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="text-heading-2 mb-3">
                  Content that actually sounds like your brand
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[596px]">
                  Every piece of content is built from your personalized Brand Profile — your voice, your colors, your
                  style. No generic templates. No robotic captions. Content so good, nobody will wonder if a machine
                  made it.
                </p>
              </RevealAnimation>
            </div>

            <ul className="list-none">
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-8 text-secondary dark:text-accent text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary dark:text-accent font-medium">Brand-native content</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Every post matches your unique voice, tone, and visual identity.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-46 text-secondary dark:text-accent text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary dark:text-accent font-medium">Anti-slop quality gate</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Our filter catches generic phrases, robotic patterns, and overused clichés automatically.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-47 text-secondary dark:text-accent text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary dark:text-accent font-medium">Human-refined always</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Every piece passes through human review before reaching your audience.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
            </ul>
          </div>

          {/* ── VISUAL SIDE ── */}
          <div className="relative w-full pb-6 pt-5 md:w-1/2">
            {/* Floating approval badge */}
            <RevealAnimation delay={0.4}>
              <ApprovalBadge />
            </RevealAnimation>

            {/* Card shell */}
            <div className="dark:bg-background-5 w-full rounded-[20px] bg-white p-2.5">
              <div className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4 space-y-3">

                {/* Brand voice strip */}
                <RevealAnimation delay={0.45}>
                  <VoiceStrip />
                </RevealAnimation>

                {/* Post card */}
                <RevealAnimation delay={0.5}>
                  <PostCard />
                </RevealAnimation>

                {/* Quality gate */}
                <RevealAnimation delay={0.6}>
                  <QualityGate />
                </RevealAnimation>

              </div>
            </div>

            {/* Floating schedule badge */}
            <RevealAnimation delay={0.7}>
              <ScheduleBadge />
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;