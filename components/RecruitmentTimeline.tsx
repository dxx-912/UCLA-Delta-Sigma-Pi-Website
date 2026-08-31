import Reveal from "./Reveal";
import { recruitmentMilestones } from "@/data/recruitment";

/**
 * Vertical timeline: a single rail down the left with milestone cards
 * branching off to the right, each dated and dotted onto the line.
 */
export default function RecruitmentTimeline() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/20" />

      <div className="space-y-10">
        {recruitmentMilestones.map((milestone, i) => (
          <Reveal
            key={i}
            delay={(i % 2) * 0.05}
            className="relative pl-9"
          >
            <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-charcoal" />
            <div className="rounded-md border border-white/15 bg-white/5 p-5">
              <p className="text-[11px] font-bold uppercase tracking-wide text-white/60">
                {milestone.date}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-bold text-white">
                {milestone.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">
                <span className="font-bold text-white">Attire:</span>{" "}
                {milestone.attire}
                {!milestone.inviteOnly && (
                  <>
                    <span className="mx-2 text-white/30">|</span>
                    <span className="font-bold text-white">Time:</span>{" "}
                    {milestone.time}
                    <span className="mx-2 text-white/30">|</span>
                    <span className="font-bold text-white">Location:</span>{" "}
                    {milestone.location}
                  </>
                )}
              </p>
              {milestone.inviteOnly && (
                <p className="mt-1.5 text-[12px] italic text-white/50">
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
