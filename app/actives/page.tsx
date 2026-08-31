import Link from "next/link";
import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import PersonPhoto from "@/components/PersonPhoto";
import Reveal from "@/components/Reveal";
import { pledgeClasses } from "@/data/actives";

export const metadata: Metadata = {
  title: "Actives — UCLA Delta Sigma Pi",
};

export default function ActivesPage() {
  return (
    <div className="bg-white">
      {/* Hero group photo */}
      <div className="mx-auto max-w-[1100px] px-6 pt-12">
        <Placeholder
          label="Photo — Active Brothers (beach group photo)"
          className="aspect-[16/7] w-full"
        />
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-12">
        <h1 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          Active Brothers
        </h1>

        <div className="mt-12 space-y-16">
          {pledgeClasses.map((pc) => (
            <section key={pc.name}>
              <h2 className="mb-6 text-sm font-bold text-ink">{pc.name}</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
                {pc.members.map((member) => (
                  <Reveal key={member.name} className="group text-center">
                    <PersonPhoto name={member.name} linkedin={member.linkedin}>
                      <Placeholder
                        label={`Headshot — ${member.name}`}
                        className="aspect-[4/5] w-full"
                      />
                    </PersonPhoto>
                    <p className="mt-3 text-[13px] font-bold text-ink">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-[12px] italic text-neutral-500">
                      Class of {member.gradYear}
                    </p>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-20 text-center text-sm font-bold text-ink">
          See{" "}
          <Link
            href="/careers"
            className="text-navy underline underline-offset-4"
          >
            where we&rsquo;ve gone
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
