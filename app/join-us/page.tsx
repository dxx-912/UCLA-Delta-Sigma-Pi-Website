import type { Metadata } from "next";
import RecruitmentTimeline from "@/components/RecruitmentTimeline";
import { APPLICATION_URL, INTEREST_FORM_URL } from "@/components/siteConfig";

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
            We are looking forward to hosting you for our upcoming Winter 2026
            Recruitment cycle. Thank you for your interest in joining UCLA&rsquo;s
            premier co-ed business fraternity. Make sure to follow our Instagram
            and fill out the interest form below for any additional updates.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={APPLICATION_URL}
              className="inline-block w-48 bg-navy px-8 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Application
            </a>
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-48 bg-navy px-8 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Interest Form
            </a>
          </div>
        </header>
      </div>

      {/* Recruitment timeline — separated into its own dark band, matching the
          homepage's charcoal sections */}
      <section className="bg-charcoal py-20 text-white">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            Recruitment Timeline
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/70">
            Our Fall 2026 schedule is still being finalized — check back soon
            for exact dates, times, and locations.
          </p>
          <div className="mt-14">
            <RecruitmentTimeline />
          </div>
        </div>
      </section>
    </div>
  );
}
