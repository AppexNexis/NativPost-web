// ============================================================
// CASE STUDY TESTIMONIAL — src/components/case-study/CaseStudyTestimonial.tsx
// ============================================================

import { ICaseStudy } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudyTestimonial = ({ userReview }: { userReview: ICaseStudy['userReview'] }) => {
  return (
    <section>
      <div className="mx-auto max-w-[950px]">
        <div className="space-y-14">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h4 className="text-heading-2" id="testimonials-title">
                What our client says
              </h4>
            </RevealAnimation>
            <blockquote>
              <RevealAnimation delay={0.2}>
                <p>
                  &quot;NativPost delivered studio-quality content from day one — the onboarding was seamless and the
                  results speak for themselves.&quot;
                </p>
              </RevealAnimation>
            </blockquote>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="bg-secondary dark:bg-background-6 space-y-6 rounded-[20px] p-8">
              <figure className="size-14 overflow-hidden rounded-full bg-(image:--color-gradient-7)">
                <Image
                  src={userReview.userImage}
                  className="size-full object-cover"
                  width={56}
                  height={56}
                  priority
                  alt={userReview.userName}
                />
              </figure>
              <blockquote>
                <p className="text-white dark:text-accent/60">{userReview.reviewText}</p>
              </blockquote>
              <div className="pb-4">
                <p className="text-lg font-medium leading-[150%] text-white">{userReview.userName}</p>
                <p className="text-tagline-2 text-accent/60">{userReview.userRole}</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTestimonial;
