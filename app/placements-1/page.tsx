import Link from "next/link";
import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import CompanyLogo from "@/components/CompanyLogo";
import { logoFor, logoScaleFor } from "@/data/companyLogos";
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
      {/* Each industry stacks: full-width heading + intro, then a full-width
          logo wall beneath it. `space-y-24` sets the gap between sections and
          the grid's `mt-10` the gap to the copy above it, so every section is
          spaced identically. */}
      <div className="mx-auto max-w-[1100px] space-y-24 px-6 py-20">
        {industries.map((section) => (
          <Reveal key={section.industry}>
            <h2 className="font-display text-2xl font-bold text-ink">
              {section.industry}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {section.intro}
            </p>
            {/* Column count climbs with the viewport, topping out at 7 — the
                count that divides the section rosters most evenly. Cells share
                one fixed height so the marks line up in clean rows as well as
                columns; `object-contain` in CompanyLogo keeps each logo at its
                own aspect ratio inside that uniform box. */}
            <div className="mt-10 grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
              {section.companies.map((company) => (
                // `tone="light"` renders the mark black for this white section;
                // the homepage spread renders the same file white on charcoal.
                <CompanyLogo
                  key={company}
                  name={company}
                  src={logoFor(company)}
                  scale={logoScaleFor(company)}
                  tone="light"
                  className="h-12"
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
