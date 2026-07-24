"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import { ArrowLeft, ArrowRight } from "./icons";

/**
 * Auto-advancing, swipeable photo carousel for the homepage gallery
 * (Section 5.1 — converts the current static row of 14 photos into a real
 * carousel; same photos, same crop treatment, just presented with motion).
 */
export default function Carousel({ count = 14 }: { count?: number }) {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive number of visible slides.
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, count - visible);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex],
  );
  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex],
  );

  // Auto-advance.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <div
      className="select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex"
          animate={{ x: `-${index * (100 / visible)}%` }}
          transition={{ type: "spring", stiffness: 260, damping: 34 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next();
            else if (info.offset.x > 60) prev();
          }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 basis-full px-1.5 sm:basis-1/2 lg:basis-1/3"
            >
              <Placeholder
                label={`Gallery photo ${i + 1} of ${count}`}
                className="aspect-[3/4]"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={prev}
          aria-label="Previous photos"
          className="flex h-9 w-9 items-center justify-center bg-white/90 text-charcoal transition-colors hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next photos"
          className="flex h-9 w-9 items-center justify-center bg-white/90 text-charcoal transition-colors hover:bg-white"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
