// ============================================================
// FAQ PAGE — src/app/faq/page.tsx
// ============================================================

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import Link from 'next/link';
import { useState } from 'react';

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What exactly is NativPost?',
        a: 'NativPost is a premium content creation and social media management platform. We produce studio-quality branded content — graphics, copy, and scheduling — that gets automatically published to your social channels. Think of us as your digital creative studio, not just another scheduling tool.',
      },
      {
        q: 'How is NativPost different from tools like Buffer or Hootsuite?',
        a: 'Buffer and Hootsuite only schedule and post content — you still have to create everything yourself. NativPost creates the content for you: on-brand graphics, platform-optimized captions, and smart hashtag strategies. We handle the entire pipeline from creation to publishing.',
      },
      {
        q: 'How is NativPost different from hiring a social media agency?',
        a: 'Agencies typically charge $500–$5,000+/month and deliver inconsistent results with slow turnaround. NativPost gives you the same quality of output — deeply brand-aligned content — at product pricing starting at $19/month. Plus, you have full control over approvals.',
      },
      {
        q: 'Do you use AI to create content?',
        a: 'We use smart technology as the engine behind our content creation, but every piece passes through our anti-slop quality filter and human review before publishing. The result is content that looks and feels like it was made by a skilled human creative team. We never use AI-sounding language or robotic patterns.',
      },
      {
        q: 'What social platforms do you support?',
        a: 'NativPost supports Instagram (posts, stories, reels, carousels), Facebook (pages, posts), LinkedIn (company pages, personal profiles), X/Twitter (posts, threads), and TikTok. WhatsApp Status support is coming in a future update.',
      },
    ],
  },
  {
    category: 'Brand Profile & Content',
    questions: [
      {
        q: 'What is a Brand Profile?',
        a: 'Your Brand Profile is the creative DNA that drives all your content. It includes your brand voice document (tone, personality, vocabulary), visual identity kit (colors, typography, style), company knowledge base, content examples you love, platform-specific rules, and anti-patterns (things to never do). We build this with you during the onboarding workshop.',
      },
      {
        q: 'How does the onboarding workshop work?',
        a: 'It is a 1–2 hour collaborative session where we work directly with you to understand your business, voice, audience, and goals. We capture everything into a structured Brand Profile that guides all future content creation. This is a one-time paid setup fee.',
      },
      {
        q: 'What is the anti-slop filter?',
        a: 'Our anti-slop filter is a dedicated quality gate that scans all generated content for known robotic patterns: excessive em-dashes, generic motivational language, overuse of words like "leverage" and "synergy," unnatural enthusiasm, and other telltale signs. Content that triggers these patterns is automatically rejected and regenerated.',
      },
      {
        q: 'Can I edit content before it publishes?',
        a: 'Absolutely. Every piece of content enters your approval dashboard where you can preview exactly how it will appear on each platform. You can approve with one click, edit inline, reject with feedback, or bulk approve. Nothing publishes without your say-so.',
      },
      {
        q: 'What kind of graphics do you create?',
        a: 'We create carousel posts, single image posts (quote cards, product features, tips, announcements), and story format templates — all using your brand colors, fonts, and visual style. Graphics are built from a template system refined specifically for your brand.',
      },
    ],
  },
  {
    category: 'Pricing & Billing',
    questions: [
      {
        q: 'What are your pricing plans?',
        a: 'We offer four main plans: Starter ($19/mo, 20 posts, 3 platforms), Growth ($49/mo, 40 posts, 5 platforms), Pro ($99/mo, 80 posts, all platforms with team review), and Agency ($199/mo, unlimited posts, multi-brand). Enterprise plans are custom. All plans have a one-time setup fee for the Brand Profile workshop.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes — we offer a 7-day free trial on the Growth plan so you can experience the full NativPost workflow. No credit card required to start.',
      },
      {
        q: 'Why is there a setup fee?',
        a: 'The setup fee covers your onboarding workshop and Brand Profile creation, which takes real effort and is the foundation of everything we do. It ensures client commitment, covers our time, and filters out tire-kickers. Clients who invest in setup take the product seriously — and get dramatically better results.',
      },
      {
        q: 'Do you offer localized pricing for African markets?',
        a: 'Yes. We offer localized pricing for Nigerian and African clients at approximately 40–50% of USD rates. For example, Starter at approximately ₦12,000/month, Growth at approximately ₦30,000/month. Contact us for current local rates.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, debit cards, and international payments through Stripe (135+ currencies). For African markets, we also support local cards, bank transfers, and mobile money through Paystack.',
      },
    ],
  },
  {
    category: 'Support & Getting Started',
    questions: [
      {
        q: 'How quickly can I get started?',
        a: 'From signup to your first published content takes under 48 hours. You will complete your Brand Profile workshop, we will generate your first content batch, and you will be reviewing and publishing within two days.',
      },
      {
        q: 'What support channels are available?',
        a: 'We offer live chat (response target: under 2 hours during business hours), email support for all tiers, WhatsApp Business support for African and Middle Eastern markets, and dedicated Slack/Teams channels for Pro and Agency clients.',
      },
      {
        q: 'What if I am not happy with the content quality?',
        a: 'If you are unsatisfied, we will schedule a personal call within 24 hours, refresh your Brand Profile at no extra cost, and if you are still not happy, offer a partial refund. Your satisfaction is our north star metric.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. All plans are month-to-month with no long-term contracts. Cancel anytime from your billing dashboard. We believe if you are staying, it should be because the product works — not because of a contract.',
      },
    ],
  },
];

const page = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[80px] lg:pt-[170px] lg:pb-[120px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">FAQ</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2 mx-auto max-w-[700px]">
                Frequently asked <span className="text-primary-500">questions</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[550px]">
                Everything you need to know about NativPost. Can&apos;t find the answer you&apos;re looking for?{' '}
                <Link href="/contact-us" className="text-primary-500 underline">
                  Reach out to our team
                </Link>
                .
              </p>
            </RevealAnimation>
          </div>

          <div className="mx-auto max-w-[850px] space-y-12">
            {faqCategories.map((category, catIndex) => (
              <RevealAnimation delay={0.4 + catIndex * 0.1} key={category.category}>
                <div>
                  <h2 className="text-heading-6 text-secondary dark:text-accent mb-6">{category.category}</h2>
                  <div className="space-y-3">
                    {category.questions.map((faq, faqIndex) => {
                      const id = `${catIndex}-${faqIndex}`;
                      const isOpen = openIndex === id;
                      return (
                        <div
                          key={id}
                          className="dark:bg-background-8 overflow-hidden rounded-[16px] bg-white transition-all duration-300">
                          <button
                            onClick={() => toggleFaq(id)}
                            className="text-secondary dark:text-accent flex w-full items-center justify-between px-6 py-5 text-left font-medium"
                            aria-expanded={isOpen}>
                            <span className="text-tagline-1 pr-4">{faq.q}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'
                            }`}>
                            <p className="text-secondary/60 dark:text-accent/60 px-6">{faq.a}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Still have questions?"
        badgeClass="!badge-cyan"
        ctaHeading="Talk to our team directly"
        description="We respond within 2 hours during business hours. Available via email, live chat, and WhatsApp."
        ctaBtnText="Contact us"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
