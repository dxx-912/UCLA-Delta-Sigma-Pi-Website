"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  className?: string;
};

/**
 * Muted, looping background video for the homepage hero.
 *
 * Like the scroll-reveal animation, the motion here is a progressive
 * enhancement: viewers who ask for reduced motion get a still frame instead of
 * a loop. The video element still renders in the SSR HTML, so nothing depends
 * on JS to be visible.
 */
export default function HeroVideo({ src, className }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.removeAttribute("loop");
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
