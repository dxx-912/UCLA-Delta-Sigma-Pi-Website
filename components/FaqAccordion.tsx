"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import { ChevronDown } from "./icons";

/**
 * FAQ presented as an expand/collapse accordion (Section 5.1, optional) — same 8
 * questions, same answers, same order, just collapsible.
 */
export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {faqItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-bold text-ink">
                {item.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-navy transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-neutral-600">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
