import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqIntro } from "@/data/faq";

export const metadata: Metadata = {
  title: "Recruitment FAQ — UCLA Delta Sigma Pi",
};

export default function FaqPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[820px] px-6 py-20">
        <header className="text-center">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Recruitment FAQ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600">
            {faqIntro}
          </p>
        </header>

        <div className="mt-14">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}
