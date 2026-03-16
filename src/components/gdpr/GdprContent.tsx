import RevealAnimation from '../animation/RevealAnimation';

interface ListItem {
  id: string;
  text: string;
}

interface DataCollectionItem {
  id: string;
  label: string;
  description: string;
}

interface ThirdPartyService {
  id: string;
  name: string;
  description: string;
}

interface DataRight {
  id: string;
  action: string;
  description: string;
}

const GdprContent = () => {
  const purposeItems: ListItem[] = [
    { id: 'who-we-are', text: 'Who we are' },
    { id: 'data-types', text: 'What types of data do we collect?' },
    { id: 'why-collect', text: 'Why do we collect data?' },
    { id: 'retention', text: 'How long do we retain your data?' },
    { id: 'third-party', text: 'Third-party services we use' },
    { id: 'data-rights', text: 'Your rights over your data' },
    { id: 'manage-data', text: 'How you can manage, update, or delete your information' },
    { id: 'contact', text: 'How to contact us about your data' },
  ];

  const updatedItems: ListItem[] = [
    { id: 'terms', text: 'Terms and conditions' },
    { id: 'privacy', text: 'Privacy policy' },
  ];

  const dataCollectionItems: DataCollectionItem[] = [
    {
      id: 'account-info',
      label: 'Account Information:',
      description:
        'Your name, email address, and organization details during account registration via Clerk authentication.',
    },
    {
      id: 'brand-profile',
      label: 'Brand Profile Data:',
      description:
        'Business name, industry, target audience, brand voice preferences, visual identity (colors, fonts), content preferences, and platform-specific settings you provide during onboarding.',
    },
    {
      id: 'social-accounts',
      label: 'Connected Social Accounts:',
      description:
        'OAuth access tokens, platform usernames, and profile information from social media platforms you connect (Instagram, Facebook, LinkedIn, X/Twitter, TikTok).',
    },
    {
      id: 'billing-data',
      label: 'Billing Data:',
      description:
        'Payment method details processed through Stripe or Paystack. NativPost does not store your full card number, this is handled entirely by our payment processors.',
    },
    {
      id: 'usage-data',
      label: 'Usage and Analytics:',
      description:
        'Pages you visit within the dashboard, content generation history, approval actions, publishing activity, and engagement metrics pulled from connected platforms.',
    },
  ];

  const dataPurposes: ListItem[] = [
    { id: 'content-generation', text: 'To generate personalized, brand-aligned content through our content engine' },
    { id: 'publishing', text: 'To publish approved content to your connected social media accounts on your behalf' },
    { id: 'account-management', text: 'To create and manage your NativPost account and organization' },
    { id: 'billing', text: 'To process subscription payments, generate invoices, and prevent fraudulent transactions' },
    {
      id: 'analytics',
      text: 'To pull engagement metrics from connected platforms and display them in your analytics dashboard',
    },
    {
      id: 'improvement',
      text: 'To improve the content engine, anti-slop filter, and overall platform quality using anonymized, aggregated data',
    },
  ];

  const thirdPartyServices: ThirdPartyService[] = [
    {
      id: 'clerk',
      name: 'Clerk:',
      description: 'For secure authentication, user management, and organization/team management.',
    },
    {
      id: 'supabase',
      name: 'Supabase:',
      description: 'For database hosting, file storage (brand assets, logos), and real-time data synchronization.',
    },
    {
      id: 'stripe',
      name: 'Stripe:',
      description: 'For international subscription billing and payment processing.',
    },
    {
      id: 'paystack',
      name: 'Paystack:',
      description: 'For African market payment processing (local cards, bank transfers, mobile money).',
    },
    {
      id: 'anthropic',
      name: 'Anthropic (Claude API):',
      description:
        'For content generation. Your Brand Profile data is sent as context for content creation. Anthropic does not store or train on this data per their data usage policy.',
    },
    {
      id: 'resend',
      name: 'Resend:',
      description:
        'For transactional email delivery (approval notifications, published content alerts, welcome emails).',
    },
    {
      id: 'meta',
      name: 'Meta Graph API:',
      description: 'For publishing content to and pulling analytics from Instagram and Facebook.',
    },
    {
      id: 'posthog',
      name: 'PostHog:',
      description:
        'For product analytics to understand how users interact with the platform and improve the experience.',
    },
    {
      id: 'sentry',
      name: 'Sentry:',
      description: 'For error monitoring and application performance tracking.',
    },
  ];

  const dataRights: DataRight[] = [
    { id: 'access', action: 'Access', description: 'your personal information and Brand Profile data' },
    { id: 'modify', action: 'Modify', description: 'your account and Brand Profile information at any time' },
    {
      id: 'delete',
      action: 'Request',
      description: 'the deletion of your data, including your Brand Profile and all generated content',
    },
    {
      id: 'disconnect',
      action: 'Disconnect',
      description: "any linked social media account, revoking NativPost's access immediately",
    },
    {
      id: 'withdraw',
      action: 'Withdraw',
      description: 'consent for data processing at any time by closing your account',
    },
    {
      id: 'download',
      action: 'Download',
      description: 'a copy of all your stored data, including Brand Profile and content history',
    },
  ];

  const dataManagementItems: ListItem[] = [
    {
      id: 'update-profile',
      text: 'You can update your Brand Profile, account details, and connected platforms anytime from your NativPost dashboard.',
    },
    {
      id: 'data-deletion',
      text: 'To request a complete data deletion or data export, simply send an email to: support@nativpost.com',
    },
    {
      id: 'social-disconnect',
      text: 'You can disconnect social media accounts instantly from the Social Accounts page, this revokes all platform access tokens immediately.',
    },
  ];

  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* GDPR Intro */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h2>NativPost and the general data protection regulation (GDPR)</h2>
              <p>
                The General Data Protection Regulation (GDPR) is a privacy regulation enacted by the European Union (EU)
                to strengthen the protection of individuals&apos; data. It became enforceable on May 25, 2018, and
                applies to any company that handles the data of EU citizens, no matter where the company is based.
                <br />
                <br />
                This page explains how NativPost (a product of AppexNexis LTD) implements GDPR principles and ensures
                that your data is handled transparently, securely, and respectfully.
              </p>
            </div>
          </RevealAnimation>
          {/* Purpose */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-heading-4">Purpose of this document</h3>
                <p>
                  At NativPost, we are fully committed to respecting your privacy. This page provides a clear overview
                  of:
                </p>
              </div>
              <ul className="space-y-3">
                {purposeItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* What is GDPR */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <h3 className="text-heading-4">What is GDPR?</h3>
              <p>
                In simple terms, GDPR gives you greater control over your personal information. Service providers (like
                NativPost) must be transparent about what data they collect, how they use it, and how they share it —
                and users must have full rights to access, modify, or delete their data.
                <br />
                <br />
                Although GDPR is an EU regulation, it affects any business that collects or processes the data of EU
                residents. NativPost serves businesses globally, including in Europe, and we apply GDPR-level
                protections to all users regardless of location.
              </p>
            </div>
          </RevealAnimation>
          {/* How NativPost Implements GDPR */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h3 className="text-heading-4">How NativPost implements GDPR</h3>
              <p>
                NativPost has prioritized user data privacy from day one. Our architecture is built with privacy by
                design, your Brand Profile data is used only for content generation, social tokens are encrypted at
                rest, and we never sell or share your data with advertisers.
              </p>
              <div className="space-y-3">
                <h4 className="text-tagline-1 text-secondary dark:text-accent">We have published and maintain:</h4>
                <ul className="space-y-1">
                  {updatedItems.map((item) => (
                    <li key={item.id} className="flex items-center justify-start gap-2">
                      <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                      <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>
          {/* Data we collect */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data we collect</h3>
              <ul className="space-y-3">
                {dataCollectionItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <p>
                      <span className="text-secondary dark:text-accent">{item.label} </span>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Why we collect your data */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-purpose">
                Why we collect your data
              </h3>
              <ul className="space-y-3">
                {dataPurposes.map((purpose) => (
                  <li key={purpose.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{purpose.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Third-Party services */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="third-party">
                Third-party services we use
              </h3>
              <ul className="space-y-3">
                {thirdPartyServices.map((service) => (
                  <li key={service.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <p>
                      <span className="text-secondary dark:text-accent">{service.name} </span>
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Your data rights */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-rights">
                Your data rights
              </h3>
              <ul className="space-y-3">
                {dataRights.map((right) => (
                  <li key={right.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <p>
                      <span className="text-secondary dark:text-accent">{right.action}</span> {right.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* How to manage or delete your data */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-management">
                How to manage or delete your data
              </h3>
              <ul className="space-y-3">
                {dataManagementItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                      {item.id === 'data-deletion' ? (
                        <>
                          To request a complete data deletion or data export, simply send an email to:{' '}
                          <span className="text-secondary dark:text-accent">support@nativpost.com</span>
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default GdprContent;
