import type { Metadata } from "next";
import RecruitmentTimeline from "@/components/RecruitmentTimeline";
import { INTEREST_FORM_URL } from "@/components/siteConfig";

export const metadata: Metadata = {
  title: "Recruitment Information — UCLA Delta Sigma Pi",
};

export default function JoinUsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <header className="text-center">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Join Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600">
            We are looking forward to hosting you for our upcoming Fall 2026
            recruitment cycle. Thank you for your interest in joining UCLA&rsquo;s
            premiere co-ed business fraternity.
          </p>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-48 bg-navy px-8 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Interest Form
          </a>
        </header>
      </div>

      {/* Recruitment timeline — separated into its own dark band, matching the
          homepage's charcoal sections */}
      <section className="bg-charcoal py-20 text-white [zoom:0.8]">
        <div className="mx-auto max-w-[1500px] px-6">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            Recruitment Timeline
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/70">
            Fall 2026 recruitment runs September 28 – October 2
          </p>
          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="overflow-hidden rounded-md border border-white/15 bg-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/recruitment flyer.jpeg"
                alt="UCLA Delta Sigma Pi Fall 2026 recruitment flyer"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="rounded-md border border-white/15 bg-white/5 p-8">
              <RecruitmentTimeline />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
