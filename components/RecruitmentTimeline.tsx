import Reveal from "./Reveal";
import { recruitmentMilestones } from "@/data/recruitment";

/**
 * Vertical timeline: a single rail down the left with milestone cards
 * branching off to the right, each dated and dotted onto the line.
 *
 * Unconstrained width — the caller's layout (a grid column on the Join Us
 * page) decides how wide this reads, rather than the component re-centering
 * itself with its own max-width.
 */
export default function RecruitmentTimeline() {
  return (
    <div className="relative h-full">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/20" />

      <div className="flex h-full flex-col gap-8">
        {recruitmentMilestones.map((milestone, i) => (
          <Reveal
            key={i}
            delay={(i % 2) * 0.05}
            className="relative flex-1 pl-9"
          >
            <span className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white bg-charcoal" />
            <div className="flex h-full flex-col justify-center rounded-md border border-white/15 bg-white/5 p-6">
              <p className="text-[11px] font-bold uppercase tracking-wide text-white/60">
                {milestone.date}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                <span className="font-bold text-white">Attire:</span>{" "}
                {milestone.attire}
                <span className="mx-2 text-white/30">|</span>
                <span className="font-bold text-white">Time:</span>{" "}
                {milestone.time}
                {milestone.location && (
                  <>
                    <span className="mx-2 text-white/30">|</span>
                    <span className="font-bold text-white">Location:</span>{" "}
                    {milestone.location}
                  </>
                )}
              </p>
              {milestone.inviteOnly && (
                <p className="mt-2 text-[13px] italic text-white/50">
                  *By Invitation Only
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
