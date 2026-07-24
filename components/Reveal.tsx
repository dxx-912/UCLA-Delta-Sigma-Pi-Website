"use client";

import { createElement, useEffect, useRef } from "react";
import { clsx } from "./clsx";

/**
 * Gentle fade + slide-in as a section scrolls into view (Section 5.1 — purely
 * additive motion). Progressive enhancement: content is visible by default and
 * only hidden-then-revealed when JS is available and the user allows motion
 * (see the `html.js .reveal` rules in globals.css). This keeps every section
 * visible for no-JS / reduced-motion users.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: clsx("reveal", className),
      style: delay ? { transitionDelay: `${delay}s` } : undefined,
    },
    children,
  );
}
