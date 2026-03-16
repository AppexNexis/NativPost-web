import privacy from '@public/images/ns-img-391.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PrivacySection {
  title: string;
  content: string;
}

interface ListSection {
  title: string;
  description?: string;
  items: ListItem[];
}

interface ListItem {
  title?: string;
  content: string;
}

interface FormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

const personalInfoSection: PrivacySection = {
  title: 'Personal information we collect',
  content:
    'When you visit NativPost, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device. Additionally, as you browse the platform, we collect information about the pages you view, what websites or search terms referred you to NativPost, and how you interact with the dashboard. We call this automatically-collected information <span class="text-secondary dark:text-accent">"Device Information."</span>',
};

const deviceInfoItems: ListItem[] = [
  {
    title: 'Cookies',
    content:
      'Data files placed on your device, often including an anonymous unique identifier. Used for authentication sessions and preferences. ( Learn more about cookies and how to disable them: <a href="http://www.allaboutcookies.org" class="text-secondary">http://www.allaboutcookies.org</a> )',
  },
  {
    title: 'Log Files',
    content:
      'Track actions on the platform and collect IP address, browser type, ISP, referring/exit pages, and timestamps.',
  },
  {
    title: 'Authentication Data',
    content:
      'Managed by Clerk, includes session tokens, OAuth tokens from connected social platforms, and multi-factor authentication data.',
  },
  {
    title: 'Product Analytics',
    content:
      'Collected via PostHog to understand how users interact with features, improve the dashboard experience, and identify issues.',
  },
];

const orderInfoText =
  'When you subscribe to a NativPost plan, we collect information such as your name, email address, organization name, billing address, and payment details. Payment processing is handled entirely by Stripe (international) or Paystack (African markets), NativPost never stores your full card number.';

const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Your name',
    placeholder: 'Enter your name',
    type: 'text',
  },
  {
    id: 'organization',
    name: 'organization',
    label: 'Organization name',
    placeholder: 'Enter your organization name',
    type: 'text',
  },
  {
    id: 'payment-information',
    name: 'payment-information',
    label: 'Payment information',
    placeholder: 'Handled securely by Stripe or Paystack',
    type: 'text',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email address',
    placeholder: 'Enter your email address',
    type: 'email',
  },
];

const useInfoSection: ListSection = {
  title: 'How we use your personal information',
  description: 'We use the collected information to:',
  items: [
    { content: 'Generate personalized, brand-aligned content based on your Brand Profile' },
    { content: 'Publish approved content to your connected social media accounts' },
    { content: 'Process your subscription payments and generate invoices' },
    { content: 'Communicate with you about your account, approvals, and published content' },
    { content: 'Provide customer support and respond to your inquiries' },
    { content: 'Screen for potential fraud or payment risks' },
  ],
};

const deviceInfoUsage: ListItem[] = [
  { content: 'Improve and optimize the NativPost dashboard experience' },
  { content: 'Analyze feature usage to prioritize development' },
  { content: 'Monitor application performance and detect errors via Sentry' },
];

const sharingInfoSection: ListSection = {
  title: 'Sharing your personal information',
  description:
    'We share your Personal Information with trusted third-party service providers to help us operate effectively:',
  items: [
    { content: 'Clerk — for authentication and user management' },
    { content: 'Supabase — for database hosting and file storage' },
    { content: 'Stripe — for international payment processing' },
    { content: 'Paystack — for African market payment processing' },
    {
      content:
        'Anthropic (Claude API) — for content generation (Brand Profile sent as context; not stored or used for training)',
    },
    { content: 'Resend — for transactional email delivery' },
    {
      content:
        'Meta, LinkedIn, X, TikTok APIs — for publishing content and pulling engagement analytics from your connected accounts',
    },
    { content: 'PostHog — for anonymized product analytics' },
    { content: 'Sentry — for error monitoring' },
  ],
};

const rightsSection: ListSection = {
  title: 'Your rights',
  description: 'If you are a resident of the European Economic Area (EEA), or anywhere NativPost operates:',
  items: [
    { content: 'You have the right to access, update, or delete your personal information and Brand Profile data.' },
    {
      content:
        'You can disconnect any connected social media account at any time, immediately revoking platform access.',
    },
    {
      content:
        'If you wish to exercise these rights, please contact us at <a href="mailto:support@nativpost.com" class="text-secondary dark:text-accent">support@nativpost.com</a>',
    },
  ],
};

const simpleSections: PrivacySection[] = [
  {
    title: 'Do not track',
    content:
      'Please note, we do not alter NativPost\'s data collection practices when we detect a "Do Not Track" signal from your browser.',
  },
  {
    title: 'Data retention',
    content:
      'We retain your Brand Profile data, content history, and account information for as long as your account is active. If you cancel your subscription, your data is retained for 90 days in case you reactivate, after which it is permanently deleted. You can request immediate deletion at any time by contacting support@nativpost.com.',
  },
  {
    title: 'Minors',
    content: 'NativPost is a business-to-business platform and is not intended for individuals under the age of 18.',
  },
  {
    title: 'Changes',
    content:
      'We may update this Privacy Policy periodically to reflect changes to our practices, new features, or for legal and regulatory reasons. We will notify active users of material changes via email.',
  },
  {
    title: 'Contact us',
    content:
      'For any questions about this Privacy Policy or your data, contact us at <a href="mailto:support@nativpost.com" class="text-secondary dark:text-accent">support@nativpost.com</a>. NativPost is a product of AppexNexis LTD — <a href="https://www.appexnexis.site/" class="text-secondary dark:text-accent">www.appexnexis.site</a>',
  },
];

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">
          {/* Header */}
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2>Data protection guidelines</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                <span className="text-secondary dark:text-accent">NativPost</span> is a product operated by
                <span className="text-secondary dark:text-accent"> AppexNexis LTD</span>. We provide studio-crafted
                social media content creation and management services for businesses worldwide. We are committed to
                protecting your privacy and handling your information transparently.
              </p>
            </RevealAnimation>
          </div>

          {/* Policy Intro */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-2">
              <h4>NativPost privacy policy</h4>
              <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you
                visit, subscribe, register, or use services from{' '}
                <Link href="https://nativpost.com" className="text-secondary dark:text-accent">
                  nativpost.com
                </Link>{' '}
                and{' '}
                <Link href="https://app.nativpost.com" className="text-secondary dark:text-accent">
                  app.nativpost.com
                </Link>{' '}
                (the &quot;Platform&quot;).
              </p>
            </div>
          </RevealAnimation>

          {/* Personal Information Collection */}
          <div className="space-y-6">
            <RevealAnimation delay={0.4}>
              <div className="space-y-2">
                <h4>{personalInfoSection.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: personalInfoSection.content }} />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {deviceInfoItems.map((item, index) => (
                  <li key={index + 1}>
                    <strong className="text-secondary dark:text-accent font-normal">{item.title} – </strong>
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>

          {/* Subscription Information with Form */}
          <div>
            <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
              <div className="col-span-12 lg:col-span-6">
                <RevealAnimation delay={0.6}>
                  <div className="mb-[70px] text-left">
                    <p className="max-w-[550px]">{orderInfoText}</p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.7}>
                  <figure className="w-full max-w-[595px] self-end overflow-hidden rounded-[20px]">
                    <Image src={privacy} className="size-full object-cover" alt="NativPost data protection" />
                  </figure>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.8}>
                <div className="col-span-12 lg:col-span-6">
                  <form className="dark:bg-background-8 rounded-[20px] bg-white p-6 lg:p-[42px]">
                    {formFields.map((field, index) => (
                      <fieldset key={field.id} className={`space-y-2 ${index < formFields.length - 1 ? 'mb-8' : ''}`}>
                        <label
                          htmlFor={field.id}
                          className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.id}
                          placeholder={field.placeholder}
                          className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                        />
                      </fieldset>
                    ))}
                    <fieldset className="mt-4 mb-4 flex items-center gap-2">
                      <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                        <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                        <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                      </label>
                      <label
                        htmlFor="agree-terms"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                        I agree with the{' '}
                        <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                          terms and conditions
                        </Link>
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      className="btn dark:btn-accent btn-md btn-secondary hover:btn-primary w-full first-letter:uppercase before:content-none">
                      Submit
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* How We Use Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{useInfoSection.title}</h4>
                <p>{useInfoSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {useInfoSection.items.map((item, index) => (
                  <li key={index + 1}>{item.content}</li>
                ))}
              </ul>
              <div>
                <p className="text-secondary dark:text-accent">We use the collected Device Information to:</p>
                <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                  {deviceInfoUsage.map((item, index) => (
                    <li key={index + 1}>{item.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>

          {/* Sharing Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Sharing your personal information</h4>
                <p>
                  We share your Personal Information with trusted third-party service providers to help us operate
                  effectively. We do not sell your data to advertisers or data brokers.
                </p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {sharingInfoSection.items.map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Your Rights */}
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{rightsSection.title}</h4>
                <p>{rightsSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {rightsSection.items.map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Simple Sections */}
          {simpleSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.7 + index * 0.1}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
