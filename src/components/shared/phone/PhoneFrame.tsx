/*
 * PhoneFrame.tsx
 *
 * Tilted phone frame that wraps an autoplaying muted looping <video>.
 * Used by the landing hero fan-stack and showcase grid.
 *
 * Mobile-safe autoplay: muted + playsInline are both required.
 */

'use client';

import { useEffect, useRef } from 'react';

type PhoneFrameProps = {
  src: string;
  poster?: string | null;
  aspectRatio?: '9:16' | '16:9' | '1:1' | '4:5';
  rotate?: number;
  className?: string;
  ariaLabel?: string;
};

const ASPECT_TO_TW: Record<NonNullable<PhoneFrameProps['aspectRatio']>, string> = {
  '9:16': 'aspect-[9/16]',
  '4:5': 'aspect-[4/5]',
  '1:1': 'aspect-square',
  '16:9': 'aspect-video',
};

const PhoneFrame = ({
  src,
  poster = null,
  aspectRatio = '9:16',
  rotate = 0,
  className = '',
  ariaLabel,
}: PhoneFrameProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) {
      return;
    }
    v.muted = true;
    const kick = () => v.play().catch(() => { /* autoplay blocked, will resume on visibility */ });
    kick();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          kick();
        } else {
          v.pause();
        }
      }
    }, { threshold: 0.15 });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-[36px] border border-[#1a1a1a]/90 bg-[#050505] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),0_18px_36px_-18px_rgba(0,0,0,0.35)] ${ASPECT_TO_TW[aspectRatio]} ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, willChange: rotate ? 'transform' : undefined }}
      aria-label={ariaLabel}
    >
      {/* Notch */}
      <div className="pointer-events-none absolute top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/95" aria-hidden />
      {/* Screen */}
      <video
        ref={videoRef}
        src={src}
        poster={poster ?? undefined}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controls={false}
      />
      {/* Bottom vignette so text overlays are readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)' }}
      />
    </div>
  );
};

export default PhoneFrame;
