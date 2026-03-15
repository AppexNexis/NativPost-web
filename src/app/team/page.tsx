// ============================================================
// TEAM PAGE — src/app/team/page.tsx
// ============================================================

import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Team — NativPost by AppexNexis | The People Behind Your Content',
  description:
    'Meet the team at AppexNexis building NativPost. We are digital creators, developers, and brand strategists serving businesses worldwide.',
};

// NOTE: Replace these with actual team member data, photos, and social links
const teamMembers = [
  {
    id: 'founder',
    name: '[Founder Name]',
    role: 'Founder & CEO',
    description:
      'Full-stack developer and digital strategist. Built AppexNexis from the ground up. Obsessed with solving the content quality gap for SMEs worldwide.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'backend',
    name: '[Backend Developer]',
    role: 'Backend Developer',
    description:
      'Builds the content engine, API integrations, and publishing pipeline that powers NativPost. Makes sure your content hits every platform on time.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'designer',
    name: '[UI/UX Designer]',
    role: 'UI/UX Designer',
    description:
      'Designs the dashboard, Brand Profile builder, and every pixel of the NativPost experience. Previously designed for agencies and startups across Africa and Europe.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* Hero */}
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[100px]">
        <div className="main-container">
          <div className="mx-auto max-w-[800px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Our team</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2">
                The people behind <span className="text-primary-500">NativPost</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                We are a small, focused team at{' '}
                <Link href="https://www.appexnexis.site/" target="_blank" className="text-primary-500 underline">
                  AppexNexis LTD
                </Link>{' '}
                — building the creative studio that businesses worldwide deserve. Every team member is obsessed with
                content quality, brand authenticity, and serving our clients across every timezone.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-[80px] lg:pb-[120px]">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-8">
            {teamMembers.map((member, index) => (
              <RevealAnimation delay={0.4 + index * 0.15} key={member.id}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="dark:bg-background-8 group overflow-hidden rounded-[20px] bg-white transition-all duration-500 hover:-translate-y-2">
                    {/* Photo placeholder */}
                    <div className="bg-background-2 dark:bg-background-6 flex h-[280px] items-center justify-center">
                      <div className="bg-background-3 dark:bg-background-7 flex size-24 items-center justify-center rounded-full">
                        <span className="text-heading-4 text-secondary/30 dark:text-accent/30">
                          {member.name.charAt(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-heading-6 mb-1">{member.name}</h3>
                      <p className="text-primary-500 text-tagline-2 mb-4 font-medium">{member.role}</p>
                      <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 mb-5">
                        {member.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <Link
                          href={member.social.linkedin}
                          className="text-secondary/40 dark:text-accent/40 hover:text-primary-500 transition-colors"
                          aria-label={`${member.name} LinkedIn`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="text-secondary/40 dark:text-accent/40 hover:text-primary-500 transition-colors"
                          aria-label={`${member.name} Twitter`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Join us banner */}
      <section className="bg-background-1 dark:bg-background-6 py-[80px]">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <div className="mx-auto max-w-[600px] space-y-5 text-center">
              <h2>
                Want to join the <span className="text-primary-500">NativPost</span> team?
              </h2>
              <p>
                We are always looking for talented people who share our obsession with content quality and brand
                authenticity. If that sounds like you, reach out.
              </p>
              <Link
                href="/contact-us"
                className="btn btn-secondary btn-md hover:btn-white dark:btn-accent dark:hover:btn-white-dark inline-block">
                Get in touch
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Work with us"
        badgeClass="!badge-green"
        ctaHeading="Ready to experience studio-crafted content?"
        description="Start your 7-day free trial. Our team will personally build your Brand Profile and deliver your first content batch."
        ctaBtnText="Start free trial"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
