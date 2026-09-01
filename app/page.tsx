import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Carousel from "@/components/Carousel";
import HeroVideo from "@/components/HeroVideo";
import CompanyLogo from "@/components/CompanyLogo";
import { logoCategories, logoSpreadHeadline } from "@/data/logos";
import { clubs, clubsHeadline } from "@/data/clubs";
import { galleryPhotos } from "@/data/gallery";
import { instagramPosts } from "@/data/instagram";

const stats = [
  {
    number: 60,
    lead: <>+ Active Brothers.</>,
    body: "At Delta Sigma Pi, you'll meet some of the most talented, ambitious and driven people at UCLA from all walks of life.",
  },
  {
    number: 600,
    lead: <>+ Alumni.</>,
    body: "From Wall Street to the entertainment industry, from San Franciscoto Singapore, you can find UCLA DSP alumni everywhere.",
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
      {/* Hero — LA skyline timelapse behind a dark scrim.
          Height fills the viewport below the 72px sticky nav, with a floor so
          short/landscape viewports still give the video room to breathe. */}
      <section className="relative isolate flex min-h-[max(560px,calc(100svh-72px))] items-center overflow-hidden bg-charcoal text-white">
        <HeroVideo
          src="/Assets/la-skyline.mp4"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Flat scrim keeps the headline legible over the brightest frames... */}
        <div className="absolute inset-0 bg-black/55" />
        {/* ...and this gradient melts the top and bottom edges into the
            charcoal nav above and stats section below. */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/25 to-charcoal" />
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
          <Carousel photos={galleryPhotos} />
        </div>
      </section>

      {/* We're more than just a business club */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              Our Values
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20">
            {/* Brotherhood — image left, text right */}
            <Reveal className="grid items-center gap-10 md:grid-cols-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brotherhood photo.webp"
                alt="UCLA Delta Sigma Pi brothers together at night"
                className="aspect-[4/3] w-full rounded-sm object-cover object-center"
                loading="lazy"
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
                  At Delta Sigma Pi, we mean business. For more than twenty
                  years, this fraternity has proved itself to be one of the most
                  elite career-focused, professionally successful organizations on campus. From 
                  investment banking to technology, our members continue to achieve the highest standards of 
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
              {/* Wider than the 4:3 slot, so object-cover trims the sides —
                  the group is centred, so nobody is cut off. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/professionalism phoot.webp"
                alt="UCLA Delta Sigma Pi brothers in business attire on the steps"
                className="aspect-[4/3] w-full rounded-sm object-cover object-center md:order-2"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* We send our brothers to... — logo spread, grouped by industry */}
      <section className="bg-charcoal py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
              {logoSpreadHeadline}
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-6">
            {logoCategories.map((category, i) => (
              <Reveal
                key={category.label}
                delay={i * 0.05}
                className={category.columns === 2 ? "lg:col-span-2" : "lg:col-span-1"}
              >
                {/* Fixed-height header so a two-line label (e.g. "Investment Banking
                    & Private Equity") doesn't push its column's grid lower than the
                    rest — every column's rows need to line up horizontally. */}
                <div className="flex min-h-[2.75rem] items-end justify-center border-b border-white/15 pb-2">
                  <h3 className="text-center font-display text-sm italic text-white/75">
                    {category.label}
                  </h3>
                </div>
                {/* gap-y is an exact value rather than a step on the scale: each
                    row is a 2.5rem (h-10) logo, so a 1.375rem gap puts the row
                    pitch — and the column's overall height — ~10% above the
                    1rem gap it replaced. gap-y-5 undershoots, gap-y-6 overshoots. */}
                <div
                  className={`mt-6 grid grid-flow-col grid-rows-[repeat(13,minmax(0,1fr))] items-center gap-x-6 gap-y-[1.375rem] ${
                    category.columns === 2 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {category.companies.map((company) => (
                    <CompanyLogo key={company.name} {...company} interactive />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/careers"
              className="inline-block bg-white px-8 py-3 text-sm font-medium text-charcoal transition-transform hover:-translate-y-0.5"
            >
              Check Out Our Offers by Year
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Our campus involvements — club logos */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              {clubsHeadline}
            </h2>
          </Reveal>

          {/* Marks are shown as-is rather than recoloured — `showsColor` keeps
              the real artwork, which several of them need because their tile
              colour is part of the logo.

              Fixed-width cells that wrap, rather than a fixed column count: at
              13 logos every full grid leaves an awkward remainder (7 columns
              strands one cell, 6 or 4 strand a single logo alone on the last
              row), and `justify-center` centres whatever is left over so the
              short row reads as deliberate. The widths also set the size — most
              club marks are square, so cell *width* caps them, not the height
              class. */}
          <Reveal className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-14">
            {clubs.map((c) => (
              // The mark's alt text is the club name, so the link takes its
              // accessible name from that without needing a label of its own.
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex w-32 items-center justify-center transition-transform duration-200 ease-out hover:z-10 motion-safe:hover:scale-110 sm:w-36 lg:w-40"
              >
                <CompanyLogo
                  name={c.name}
                  src={c.src}
                  showsColor
                  tone="light"
                  className="h-24 sm:h-28 lg:h-36"
                />
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Follow our journey — Instagram feed */}
      <section className="bg-charcoal py-20 text-white">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold">
              Follow our journey on Instagram
            </h2>
          </Reveal>
          {/* Order is the chapter's file numbering, left to right / top to
              bottom — see data/instagram.ts. */}
          <Reveal className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {instagramPosts.map((post) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={post.src}
                src={post.src}
                alt={post.alt}
                className="aspect-square w-full object-cover object-center"
                loading="lazy"
              />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
