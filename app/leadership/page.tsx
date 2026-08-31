import Link from "next/link";
import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import PersonPhoto from "@/components/PersonPhoto";
import Reveal from "@/components/Reveal";
import { leadership, currentTerm } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership — UCLA Delta Sigma Pi",
};

export default function LeadershipPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <header className="text-center">
          <h1 className="font-display text-4xl font-bold text-navy sm:text-5xl">
            Leadership
          </h1>
          <p className="mt-5 text-sm text-neutral-600">
            The {currentTerm} Executive Board is committed to serving the Xi
            Omicron Chapter.
          </p>
        </header>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {leadership.map((officer, i) => (
            <Reveal
              key={officer.name}
              delay={(i % 2) * 0.08}
              className="group grid grid-cols-[120px_1fr] gap-5 rounded-md p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:grid-cols-[150px_1fr]"
            >
              <PersonPhoto
                name={officer.name}
                linkedin={officer.linkedin}
                rounded
                liftOnHover={false}
              >
                {officer.photo ? (
                  // Pre-cropped to 4:5 and centered on each officer's face (see
                  // data/leadership.ts), so object-cover here is a safety net,
                  // not the primary framing mechanism.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={officer.photo}
                    alt={`Headshot — ${officer.name}`}
                    className="aspect-[4/5] w-full rounded-md object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <Placeholder
                    label={`Headshot — ${officer.name}`}
                    className="aspect-[4/5] w-full"
                    rounded
                  />
                )}
              </PersonPhoto>
              <div>
                <h2 className="text-[15px] leading-snug">
                  <span className="font-bold text-ink">{officer.name}</span>
                  <span className="text-neutral-500"> | </span>
                  <span className="italic text-neutral-600">{officer.title}</span>
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
                  {officer.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-20 text-center text-sm font-bold text-ink">
          Get to know{" "}
          <Link
            href="/actives"
            className="text-navy underline underline-offset-4"
          >
            the rest of the brothers
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
