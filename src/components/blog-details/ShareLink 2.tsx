// ============================================================
// SHARE LINK — src/components/blog-details/ShareLink.tsx
// ============================================================

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const ShareLink = () => {
  return (
    <RevealAnimation delay={0.2}>
      <div className="mx-auto mt-[70px] max-w-[950px] space-y-4">
        <h5 className="text-heading-6">Share this article</h5>
        <ul className="flex items-center gap-2.5">
          {/* Facebook */}
          <li className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
            <Link href="https://www.facebook.com/sharer/sharer.php" target="_blank" aria-label="Share on Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.19145 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z"
                  className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                />
              </svg>
            </Link>
          </li>
          {/* LinkedIn */}
          <li className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
            <Link href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" aria-label="Share on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                />
              </svg>
            </Link>
          </li>
          {/* X / Twitter */}
          <li className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
            <Link href="https://x.com/intent/tweet" target="_blank" aria-label="Share on X">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                />
              </svg>
            </Link>
          </li>
          {/* WhatsApp */}
          <li className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
            <Link href="https://wa.me/?text=" target="_blank" aria-label="Share on WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </RevealAnimation>
  );
};

export default ShareLink;
