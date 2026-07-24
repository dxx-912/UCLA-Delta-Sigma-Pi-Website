import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Carousel from "@/components/Carousel";

const stats = [
  {
    number: 65,
    lead: <>+ Active Brothers.</>,
    body: "At Delta Sigma Pi, you'll meet some of the most talented, ambitious and driven people at UCLA from all walks of life.",
  },
  {
    number: 600,
    lead: <>+ Alumni.</>,
    body: "From the world of finance to the music industry, from New York to Singapore, you can find DSP alumni everywhere.",
  },
  {
    number: 20,
    lead: <>+ Clubs.</>,
    prefix: "Active in ",
    body: "Delta Sigma Pi is filled with industrious students, who are actively involved with and hold leadership positions in top business clubs on campus. Fun fact: the co-founders of Bruin Consulting and Bruin Asset Management are Delta Sigma Pi alumni!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-charcoal text-white lg:min-h-[640px]">
        <Placeholder
          label="Hero photo (Downtown Los Angeles)"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/55" />
        <span className="absolute bottom-3 right-3 z-10 rounded bg-black/60 px-2 py-1 text-[10px] font-medium tracking-wide text-white/80">
          Placeholder: Hero photo
        </span>
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-10">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              UCLA&rsquo;s premier co-ed business fraternity.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
              Founded in 1999, the Xi Omicron Chapter of Delta Sigma Pi aims to
              nurture the next generation of business leaders at UCLA.
            </p>
            <Link
              href="/join-us"
              className="mt-8 inline-block bg-white px-8 py-3 text-sm font-medium text-charcoal transition-transform hover:-translate-y-0.5"
            >
              Join us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal pb-20 pt-16 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className="text-center"
            >
              <h2 className="font-display text-3xl font-bold">
                {s.prefix}
                <CountUp end={s.number} />
                {s.lead}
              </h2>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-charcoal pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Carousel count={14} />
        </div>
      </section>

      {/* We're more than just a business club */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              We&rsquo;re more than just a business club.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20">
            {/* Brotherhood — image left, text right */}
            <Reveal className="grid items-center gap-10 md:grid-cols-2">
              <Placeholder
                label="Photo — Brotherhood (beach group photo)"
                className="aspect-[4/3] w-full"
              />
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">
                  Brotherhood
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Bound by strong bonds of brotherhood and Greek tradition, we
                  pride ourselves on being an eclectic, tight-knit community of
                  individuals pursuing different journeys together. Not just an
                  organization, we&rsquo;ve become one another&rsquo;s
                  cheerleaders, mentors, and best friends.
                </p>
                <Link
                  href="/actives"
                  className="mt-5 inline-block text-sm font-bold text-navy underline underline-offset-4"
                >
                  Meet the brothers
                </Link>
              </div>
            </Reveal>

            {/* Professionalism — text left, image right */}
            <Reveal className="grid items-center gap-10 md:grid-cols-2">
              <div className="md:order-1">
                <h3 className="font-display text-2xl font-bold text-navy">
                  Professionalism
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Here at Delta Sigma Pi, we mean business. For more than twenty
                  years, the fraternity has proved itself to be one of the most
                  elite career-focused organizations on campus. From investment
                  banking to entertainment, our members continue to achieve
                  success in their respective fields and have worked at some of
                  the world&rsquo;s best companies.
                </p>
                <Link
                  href="/careers"
                  className="mt-5 inline-block text-sm font-bold text-navy underline underline-offset-4"
                >
                  See where we&rsquo;ve gone
                </Link>
              </div>
              <Placeholder
                label="Photo — Professionalism (formal group on steps)"
                className="aspect-[4/3] w-full md:order-2"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Follow our journey — Instagram feed */}
      <section className="bg-charcoal py-20 text-white">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold">
              Follow our journey.
            </h2>
          </Reveal>
          <Reveal className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Placeholder
                key={i}
                label={`Instagram post ${i + 1}`}
                className="aspect-square"
              />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
