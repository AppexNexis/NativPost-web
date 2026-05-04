import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateSection {
  id: string;
  title: string;
  description: string;
  items: string[];
}

const affiliateSectionsData: AffiliateSection[] = [
  {
    id: '1',
    title: 'Affiliate benefits',
    description:
      'The NativPost affiliate program is built to reward consistent promotion with compounding income. Because commissions are recurring, a single converted referral continues paying you for as long as that customer stays subscribed.',
    items: [
      '30% recurring commission on every payment, not just the first',
      'Creatives library with banners, copy templates, and social media assets',
      '90-day attribution window so long-consideration leads still count',
      'Real-time dashboard showing clicks, conversions, and earnings',
      'No minimum referral count before your commissions start',
      'Dedicated affiliate support for questions on payouts or strategy',
      'Access to NativPost product updates to keep your content current',
    ],
  },
  {
    id: '2',
    title: 'How to promote NativPost effectively',
    description:
      'NativPost resonates most with business owners, marketing agencies, content creators, and social media managers who are tired of AI tools that produce generic, interchangeable content. Lead with the anti-slop angle.',
    items: [
      'Write honest comparisons against tools like Buffer, Ocoya, Later, and Hootsuite',
      'Create tutorials showing how NativPost builds brand voice from scratch',
      'Share the anti-slop filter in action — it is a genuinely unique feature',
      'Recommend NativPost in relevant communities and forums where the audience manages social content for clients',
      'Include your link in newsletters, resource lists, and tool roundups',
    ],
  },
  {
    id: '3',
    title: 'Program rules',
    description:
      'We ask all affiliates to promote NativPost honestly and in relevant contexts. Violations may result in commission reversal or removal from the program.',
    items: [
      'Do not use paid ads that bid on NativPost branded keywords',
      'Do not post affiliate links in irrelevant or off-topic discussions',
      'Do not make false claims about pricing, features, or guarantees',
      'Do not list NativPost deals on coupon-only or cashback websites',
      'Do not promote NativPost alongside direct competitors in the same piece of content',
    ],
  },
];

const AffiliatesList = () => {
  return (
    <article className="space-y-10 pt-14 md:space-y-[70px] md:pt-16 lg:pt-[88px] xl:pt-[100px]">
      {affiliateSectionsData.map((section, index) => (
        <RevealAnimation key={section.id} delay={0.1 + index * 0.1}>
          <div>
            <h3 className="text-heading-6 md:text-heading-5 mb-3 font-normal">{section.title}</h3>
            <p className="mb-8">{section.description}</p>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-tagline-1 text-secondary/60 dark:text-accent/60 flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-secondary dark:bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      ))}
    </article>
  );
};

AffiliatesList.displayName = 'AffiliatesList';
export default AffiliatesList;