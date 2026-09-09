import type { Metadata } from "next";
import LeadershipBoard from "./LeadershipBoard";

/**
 * Temporary cover page while the chapter's leadership structure is being
 * re-evaluated. Set this to `false` to take the cover down — the full
 * Executive Board page in ./LeadershipBoard.tsx (backed by data/leadership.ts)
 * comes back exactly as it was. No other file needs to change.
 */
const LEADERSHIP_COMING_SOON = true;

export const metadata: Metadata = LEADERSHIP_COMING_SOON
  ? { title: "Leadership — Coming Soon — UCLA Delta Sigma Pi" }
  : { title: "Leadership — UCLA Delta Sigma Pi" };

function ComingSoon() {
  return (
    <div className="flex h-full items-center justify-center bg-white px-6 py-24">
      <h1 className="text-center font-display text-4xl font-bold text-navy sm:text-5xl">
        Coming Soon
      </h1>
    </div>
  );
}

export default function LeadershipPage() {
  return LEADERSHIP_COMING_SOON ? <ComingSoon /> : <LeadershipBoard />;
}
