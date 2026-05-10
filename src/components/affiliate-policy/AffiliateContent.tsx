import RevealAnimation from '../animation/RevealAnimation';

interface ContentSection {
  id: string;
  title: string;
  description?: string;
  listItems?: string[];
}

const sections: ContentSection[] = [
  {
    id: 'eligibility',
    title: 'Who can apply',
    description:
      'The NativPost affiliate program is open to content creators, social media managers, marketing agencies, freelancers, and business owners with an audience relevant to social media marketing or brand building. We review every application before granting access. Approval is at our sole discretion.',
  },
  {
    id: 'commission',
    title: 'How commissions work',
    description:
      'This is a commission-only program. There is no salary, retainer, or guaranteed income. You earn 30% of every payment made by a customer you refer, including subscription renewals. Commissions are tracked in real time through your Affonso affiliate dashboard.',
  },
  {
    id: 'how-it-works',
    title: 'How does it work',
    description:
      'Once approved, you receive a unique referral link through the Affonso platform. Share that link across your platforms and earn a commission each time someone uses it to subscribe to a paid NativPost plan. You will receive a notification when a referred customer makes a purchase.',
  },
  {
    id: 'cookie',
    title: 'Cookie duration',
    description:
      'When a visitor clicks your referral link, a 90-day cookie is set on their browser. If they subscribe to a paid plan within that period, the commission is credited to your account, provided no other affiliate link has overwritten yours during that window.',
  },
  {
    id: 'milestone',
    title: 'Free Starter plan milestone',
    listItems: [
      'You must have been an active affiliate for at least one full calendar month.',
      'You must have referred 10 to 15 customers who are on active paid subscriptions at the time of review.',
      'The free Starter plan access is maintained for as long as you remain an active affiliate in good standing.',
      'This is a performance reward, not a guaranteed benefit, and NativPost reserves the right to adjust or withdraw it with 30 days notice.',
    ],
  },
  {
    id: 'tracking',
    title: 'How will I know if I made a sale',
    description:
      'You will receive a notification when a referred customer makes a purchase. You can also track your clicks, leads, conversions, and commissions in real time from your Affonso dashboard at nativpost.affonso.io.',
  },
  {
    id: 'payment',
    title: 'How do I get paid',
    listItems: [
      'Payouts are processed through the Affonso platform via PayPal or bank transfer.',
      'Ensure your payment details are correctly configured in your Affonso affiliate profile before requesting a withdrawal.',
      'Payouts are made at the end of each calendar month for commissions that have cleared the verification period.',
      'The minimum payout threshold is $50. Balances below this carry over to the following month.',
      'A 30-day hold applies to all commissions to protect against refunds and chargebacks. A commission earned on May 1 becomes available for withdrawal no earlier than June 1.',
    ],
  },
  {
    id: 'prohibited',
    title: 'Prohibited promotion methods',
    listItems: [
      'Do not run paid advertising campaigns that bid on NativPost brand keywords or any variation of the NativPost name.',
      'Do not share your affiliate link in irrelevant or off-topic communities, forums, or spam channels.',
      'Do not make false or misleading claims about NativPost pricing, features, guarantees, or capabilities.',
      'Do not list NativPost offers on coupon sites, cashback platforms, or deal aggregators without prior written approval.',
      'Do not promote NativPost in the same piece of content as a direct competitor.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination and commission reversal',
    description:
      'NativPost reserves the right to remove any affiliate from the program at any time if these terms are violated, if fraudulent activity is detected, or if promotion is deemed harmful to the brand. Commissions earned through fraudulent referrals will be reversed. Active commissions already cleared and paid will not be reversed unless fraud is confirmed.',
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    description:
      'NativPost may update these terms at any time. Continued participation in the affiliate program after any update constitutes acceptance of the revised terms. We will notify active affiliates of material changes via the email address on their account.',
  },
];

const AffiliateContent = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 py-[80px] md:py-[100px] lg:py-[140px]">
      <div className="main-container">
        <div className="mx-auto max-w-[848px] space-y-[60px] md:space-y-[80px]">
          {sections.map((section, index) => (
            <RevealAnimation key={section.id} delay={0.1 + (index % 5) * 0.05}>
              <div className="space-y-4">
                <h2 className="text-heading-5 font-medium text-secondary dark:text-accent">{section.title}</h2>
                {section.description && (
                  <p className="text-tagline-1 text-secondary/65 dark:text-accent/65 leading-relaxed">
                    {section.description}
                  </p>
                )}
                {section.listItems && (
                  <ul className="space-y-3 pt-1">
                    {section.listItems.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-tagline-1 text-secondary/65 dark:text-accent/65">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary dark:bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.id === 'milestone' && (
                  <div className="mt-2 rounded-[12px] border border-primary-100 dark:border-primary-800/30 bg-primary-50 dark:bg-primary-500/10 px-5 py-4">
                    <p className="text-tagline-2 text-primary-600 dark:text-primary-400 font-medium">
                      Bring in 10 to 15 paying clients and complete one full month as an active affiliate to unlock free access to the NativPost Starter plan.
                    </p>
                  </div>
                )}
              </div>
            </RevealAnimation>
          ))}

          {/* Last updated */}
          <RevealAnimation delay={0.1}>
            <div className="pt-6 border-t border-stroke-2 dark:border-stroke-7">
              <p className="text-tagline-3 text-secondary/40 dark:text-accent/40">
                Last updated: May 2026. Questions about these terms? Contact us at{' '}
                <a href="mailto:info@nativpost.com" className="text-primary-500 hover:text-primary-600 underline underline-offset-2 transition-colors">
                  info@nativpost.com
                </a>
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AffiliateContent;