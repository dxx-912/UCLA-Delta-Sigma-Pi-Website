// Campus organisations our brothers are involved in, shown in the homepage
// "Our Campus Involvements" grid.
//
// Order is chapter-specified and meaningful — the grid renders these left to
// right, top to bottom exactly as listed, so reordering this array is the only
// way to reorder the section.
//
// Unlike the company logos these are never recoloured: they sit on a white
// section and render as their real marks, so several carry their own coloured
// tile as part of the artwork. Files live in `public/images/club logos/`; the
// space in that folder name is fine in a URL (the browser encodes it).

export interface Club {
  name: string;
  /** Path under `public/`. Filenames are the chapter's originals, verbatim. */
  src: string;
}

export const clubsHeadline = "Our Campus Involvements";

const CLUB_DIR = "/images/club logos";

const club = (name: string, file: string): Club => ({
  name,
  src: `${CLUB_DIR}/${file}`,
});

export const clubs: Club[] = [
  // Bruin Asset Management shipped two files — this black-on-transparent mark
  // and a white-on-blue tile. The transparent one suits the white section.
  club("Bruin Asset Management", "BAM Logo.png"),
  club("Bruin Hedge Fund", "Bruin Hedge Fund Loog.webp"),
  club("Bruin Value Investing", "Bruin Value Investing Logo.webp"),
  club("Bruins in Finance and Banking", "BFB Logo.webp"),
  club("Impact Investing Group", "IIG Logo.webp"),
  club("UConsulting", "UConsulting Logo.webp"),
  club("Bruin Consulting", "Bruin Consulting Logo.webp"),
  club("Bruin Ventures", "BV Logo.webp"),
  club("180 Degrees Consulting", "180DC Consulting Logo.webp"),
  club("Bruin Strategy Network", "BSN Logo.webp"),
  club("International Business for Bruins", "IBB Logo.png"),
  club("Global Research Consulting", "GRC Logo.webp"),
  club("Business in Entertainment Association", "BEA logo.webp"),
  club("Bruin Private Equity", "bruin private equity logo.png"),
];
