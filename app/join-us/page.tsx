import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
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
            We are looking forward to hosting you for our upcoming Winter 2026
            Recruitment cycle. Thank you for your interest in joining UCLA&rsquo;s
            premier co-ed business fraternity. Make sure to follow our Instagram
            and fill out the interest form below for any additional updates.
          </p>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-navy px-8 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Interest Form
          </a>
        </header>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2">
          <Placeholder
            label="Rush flyer — After Hours (Winter 2026 Recruitment)"
            className="aspect-square w-full"
          />
          <Placeholder
            label="Rush flyer — Careers and more"
            className="aspect-square w-full"
          />
        </Reveal>
      </div>
    </div>
  );
}
