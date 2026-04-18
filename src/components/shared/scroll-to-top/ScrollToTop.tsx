'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsExiting(false);
                setIsVisible(true);
            } else {
                if (isVisible) {
                    setIsExiting(true);
                    setTimeout(() => {
                        setIsVisible(false);
                        setIsExiting(false);
                    }, 300);
                }
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <>
            <style>{`
        @keyframes stt-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.85); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes stt-slide-down {
          from { opacity: 1; transform: translateY(0)    scale(1);    }
          to   { opacity: 0; transform: translateY(16px) scale(0.85); }
        }
        @keyframes stt-chevron-bounce {
          0%, 100% { transform: translateY(0);   }
          50%       { transform: translateY(-3px); }
        }
        .stt-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          /* NativPost theme — matches your dark card / badge aesthetic */
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18), 0 1px 4px rgba(0,0,0,0.12);
          transition: background 0.25s ease, border-color 0.25s ease,
                      box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: stt-slide-up 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .stt-btn.exiting {
          animation: stt-slide-down 0.3s ease-in forwards;
        }
        .stt-btn:hover {
          background: var(--color-primary, rgba(124, 58, 237, 0.15));
          border-color: var(--color-primary, rgba(124, 58, 237, 0.4));
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.08),
                      0 8px 24px rgba(0, 0, 0, 0.22);
          transform: translateY(-3px);
        }
        .stt-btn:active {
          transform: translateY(-1px) scale(0.95);
        }
        .stt-btn .stt-icon {
          animation: stt-chevron-bounce 1.8s ease-in-out infinite;
          transition: transform 0.2s ease;
        }
        .stt-btn:hover .stt-icon {
          animation: none;
          transform: translateY(-2px);
        }
        @media (min-width: 768px) {
          .stt-btn {
            bottom: 2.5rem;
            right: 2.5rem;
            width: 3rem;
            height: 3rem;
          }
        }
        /* Light mode — solid subtle surface */
        @media (prefers-color-scheme: light) {
          .stt-btn {
            background: rgba(255, 255, 255, 0.9);
            border-color: rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0,0,0,0.08);
          }
          .stt-btn:hover {
            background: rgba(124, 58, 237, 0.06);
          }
        }
      `}</style>

            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`stt-btn${isExiting ? ' exiting' : ''}`}>
                <ChevronUp
                    className="stt-icon text-secondary dark:text-accent"
                    size={18}
                    strokeWidth={2.5}
                />
            </button>
        </>
    );
};

export default ScrollToTop;