import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// ─────────────────────────────────────────────────────────────────────────────
// About Feature (CTA) section
//
// Original: dark image background (ns-img-14.png) with overlaid copy + checklist.
// Replaced: a clean dark card built entirely from design tokens — secondary as
// the background, accent text, ns-green for the check icons. No image dependency.
// The dark surface preserves the original section's visual weight without a photo.
// ─────────────────────────────────────────────────────────────────────────────

interface FeatureItem {
  id: string;
  text: string;
}

const CheckCircle = () => (
  <span className="bg-accent/10 dark:bg-accent/10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M10 3L4.75 8.25L2 5.5"
        stroke="#fcfcfc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Feature = () => {
  const features: FeatureItem[] = [
    {
      id: 'innovative-startups',
      text: 'Innovative startups and ambitious scale-ups redefining their markets',
    },
    {
      id: 'enterprise-teams',
      text: 'Enterprise teams that need consistent, high-volume content at scale',
    },
    {
      id: 'agencies-consultants',
      text: 'Agencies and consultants managing social presence for multiple clients',
    },
    {
      id: 'finance-marketing',
      text: 'Finance, marketing, and product teams that collaborate on brand output',
    },
  ];

  return (
    <section>
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          {/*
            Dark card built from tokens: bg-secondary + rounded-[20px] matches
            the original image card's border-radius. No image, no gradient —
            just the design system's own dark surface.
          */}
          <div className="bg-secondary dark:bg-background-9 rounded-[20px]">
            <div className="grid grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-5 lg:px-11">

              {/* Left — heading + CTA */}
              <div className="max-w-[500px]">
                <h2 className="text-accent sm:text-heading-5 text-heading-6 mb-8">
                  We appreciate our valued clients and strive to provide them with the best service possible.
                </h2>
                <LinkButton
                  href="/services"
                  className="btn btn-accent dark:btn-white-dark hover:btn-primary btn-md border-0"
                >
                  Get started
                </LinkButton>
              </div>

              {/* Right — feature checklist */}
              <div className="flex items-start lg:items-center">
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-3">
                      <CheckCircle />
                      <span className="text-accent text-tagline-1 leading-relaxed">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Feature;