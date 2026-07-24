"use client";

import { useMemo, useState } from "react";
import {
  offers,
  YEARS,
  CATEGORIES,
  TYPE_LABELS,
  type OfferRecord,
  type OfferType,
} from "@/data/offers";
import { clsx } from "./clsx";

const TYPE_ORDER: OfferType[] = ["Full-Time", "Internship", "Entrepreneurship"];

const TYPE_FILTERS: { label: string; value: "All" | OfferType }[] = [
  { label: "All", value: "All" },
  { label: "Full-Time", value: "Full-Time" },
  { label: "Internships", value: "Internship" },
];

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-navy bg-navy text-white"
          : "border-neutral-300 bg-white text-neutral-600 hover:border-navy hover:text-navy",
      )}
    >
      {children}
    </button>
  );
}

export default function OffersExplorer() {
  const [year, setYear] = useState<string>("All");
  const [industry, setIndustry] = useState<string>("All");
  const [type, setType] = useState<"All" | OfferType>("All");

  const filtered = useMemo(
    () =>
      offers.filter(
        (o) =>
          (year === "All" || o.year === year) &&
          (industry === "All" || o.category === industry) &&
          (type === "All" || o.type === type),
      ),
    [year, industry, type],
  );

  // Group filtered records: year -> category -> type -> records[]
  const grouped = useMemo(() => {
    return YEARS.map((yr) => {
      const yearRecords = filtered.filter((o) => o.year === yr);
      const categories = CATEGORIES.map((cat) => {
        const catRecords = yearRecords.filter((o) => o.category === cat);
        const types = TYPE_ORDER.map((t) => ({
          type: t,
          records: catRecords.filter((o) => o.type === t),
        })).filter((g) => g.records.length > 0);
        return { category: cat, types };
      }).filter((c) => c.types.length > 0);
      return { year: yr, categories };
    }).filter((y) => y.categories.length > 0);
  }, [filtered]);

  return (
    <div>
      {/* Filter bar */}
      <div className="space-y-4 border-y border-neutral-200 py-6">
        <FilterRow label="Year">
          <Pill active={year === "All"} onClick={() => setYear("All")}>
            All years
          </Pill>
          {YEARS.map((yr) => (
            <Pill key={yr} active={year === yr} onClick={() => setYear(yr)}>
              {yr}
            </Pill>
          ))}
        </FilterRow>
        <FilterRow label="Industry">
          <Pill active={industry === "All"} onClick={() => setIndustry("All")}>
            All
          </Pill>
          {CATEGORIES.map((cat) => (
            <Pill
              key={cat}
              active={industry === cat}
              onClick={() => setIndustry(cat)}
            >
              {cat}
            </Pill>
          ))}
        </FilterRow>
        <FilterRow label="Type">
          {TYPE_FILTERS.map((t) => (
            <Pill
              key={t.value}
              active={type === t.value}
              onClick={() => setType(t.value)}
            >
              {t.label}
            </Pill>
          ))}
        </FilterRow>
      </div>

      {/* Results */}
      <div className="mt-12 space-y-16">
        {grouped.map(({ year: yr, categories }) => (
          <section key={yr}>
            <h2 className="font-display text-2xl font-bold text-ink">{yr}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {categories.map(({ category, types }) => (
                <div
                  key={category}
                  className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display text-base font-bold text-navy">
                    {category}
                  </h3>
                  <div className="mt-4 space-y-5">
                    {types.map(({ type: t, records }) => (
                      <div key={t}>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                          {TYPE_LABELS[t]}
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {records.map((r, idx) => (
                            <OfferLine key={idx} record={r} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {grouped.length === 0 && (
          <p className="py-10 text-center text-sm text-neutral-500">
            No offers match these filters.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <span className="w-20 shrink-0 pt-1.5 text-xs font-bold uppercase tracking-wide text-neutral-500">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function OfferLine({ record }: { record: OfferRecord }) {
  return (
    <li className="text-[13px] leading-snug text-neutral-700">
      <span className="font-bold text-ink">{record.name}</span>
      <span className="text-neutral-400"> — </span>
      <span>{record.detail}</span>
    </li>
  );
}
