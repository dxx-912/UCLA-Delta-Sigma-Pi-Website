import Link from "next/link";
import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import { heroHeadline, heroBody, industries } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers — UCLA Delta Sigma Pi",
};

export default function CareersOverviewPage() {
  return (
    <div className="bg-white">
      {/* Hero band */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {heroHeadline}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-600">
              {heroBody}
            </p>
            <p className="mt-6 text-sm font-bold text-ink">
              See our{" "}
              <Link
                href="/careers"
                className="text-navy underline underline-offset-4"
              >
                2025-2026 offers.
              </Link>
            </p>
          </div>
          <Placeholder
            label="Photo — Skyscrapers (looking up)"
            className="aspect-square w-full"
          />
        </div>
      </section>

      {/* Industry sections */}
      <div className="mx-auto max-w-[1100px] space-y-20 px-6 py-20">
        {industries.map((section) => (
          <Reveal
            key={section.industry}
            className="grid gap-8 md:grid-cols-3"
          >
            <div className="md:col-span-1">
              <h2 className="font-display text-2xl font-bold text-ink">
                {section.industry}
              </h2>
              <p className="mt-4 text-[13px] leading-relaxed text-neutral-600">
                {section.intro}
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {section.companies.map((company) => (
                  <Placeholder
                    key={company}
                    label={`Logo — ${company}`}
                    className="aspect-[3/2] w-full"
                    rounded
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
