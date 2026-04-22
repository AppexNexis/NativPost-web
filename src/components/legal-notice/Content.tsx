import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Content = () => {
  return (
    <section className="xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <div className="max-w-[950px] mx-auto w-full">

          {/* Publisher */}
          <RevealAnimation delay={0.1}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Publisher</h2>
              <p>
                The{' '}
                <Link href="https://nativpost.com" className="text-primary-500">
                  nativpost.com
                </Link>{' '}
                and{' '}
                <Link href="https://app.nativpost.com" className="text-primary-500">
                  app.nativpost.com
                </Link>{' '}
                platforms are operated by <strong>AppexNexis LTD</strong>.
                <br />
                AppexNexis LTD is a technology company providing content automation and publishing tools for businesses.
                <br />
                Email:{' '}
                <a href="mailto:support@nativpost.com" className="text-primary-500">
                  support@nativpost.com
                </a>
              </p>
            </div>
          </RevealAnimation>

          {/* Responsible Party */}
          <RevealAnimation delay={0.2}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Responsible party</h2>
              <p>
                NativPost is owned and operated by AppexNexis LTD. <br />
                For all legal, privacy, or data-related inquiries, please contact our team via the email above.
              </p>
            </div>
          </RevealAnimation>

          {/* Hosting */}
          <RevealAnimation delay={0.3}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Hosting provider</h2>
              <p>
                NativPost is hosted on cloud infrastructure provided by <strong>IONOS Cloud</strong>, a global cloud
                computing and hosting provider.
                <br />
                IONOS operates ISO 27001-certified data centers and provides scalable cloud server infrastructure
                used to power the NativPost platform.
                <br />
                Contact (IONOS support):{' '}
                <a href="tel:+14844247392" className="text-primary-500">
                  +1 (484) 424-7392
                </a>
              </p>
            </div>
          </RevealAnimation>

          {/* Platform & Development */}
          <RevealAnimation delay={0.4}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Platform & development</h2>
              <p>
                NativPost is designed and developed by AppexNexis LTD.
                <br />
                The platform integrates multiple third-party services including Clerk (authentication), Supabase (database),
                Stripe and Paystack (payments), and AI providers for content generation.
                <br />
                For more details on how data is handled, please refer to our{' '}
                <Link href="/privacy-policy" className="text-primary-500 underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;