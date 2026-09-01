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
  /** The club's own site — each logo links out to it. */
  url: string;
}

export const clubsHeadline = "Our Campus Involvements";

const CLUB_DIR = "/images/club logos";

const club = (name: string, file: string, url: string): Club => ({
  name,
  src: `${CLUB_DIR}/${file}`,
  url,
});

export const clubs: Club[] = [
  // Bruin Asset Management shipped two files — this black-on-transparent mark
  // and a white-on-blue tile. The transparent one suits the white section.
  club(
    "Bruin Asset Management",
    "BAM Logo.png",
    "https://www.bruinassetmanagement.com/",
  ),
  club(
    "Bruin Hedge Fund",
    "Bruin Hedge Fund Loog.webp",
    "https://www.bruinhedgefund.com/",
  ),
  club(
    "Bruin Value Investing",
    "Bruin Value Investing Logo.webp",
    "https://www.bruinvalueinvesting.org/",
  ),
  club(
    "Bruins in Finance and Banking",
    "BFB Logo.webp",
    "https://www.bfbatucla.com/",
  ),
  club("Impact Investing Group", "IIG Logo.webp", "https://www.uclaiig.com/"),
  club(
    "UConsulting",
    "UConsulting Logo.webp",
    "https://www.uconsultingla.com/",
  ),
  club(
    "Bruin Consulting",
    "Bruin Consulting Logo.webp",
    "https://www.bruin.consulting/",
  ),
  club("Bruin Ventures", "BV Logo.webp", "https://www.uclabv.com/"),
  club(
    "180 Degrees Consulting",
    "180DC Consulting Logo.webp",
    "https://www.ucla180dc.org/",
  ),
  club("Bruin Strategy Network", "BSN Logo.webp", "https://bruinstrategy.org/"),
  club(
    "International Business for Bruins",
    "IBB Logo.png",
    "https://www.ibbatucla.com/",
  ),
  club(
    "Global Research Consulting",
    "GRC Logo.webp",
    "https://www.grcucla.com/",
  ),
  club(
    "Business in Entertainment Association",
    "BEA logo.webp",
    "https://www.uclabea.com/",
  ),
  club(
    "Bruin Private Equity",
    "bruin private equity logo.png",
    "https://www.bruinprivateequity.com/",
  ),

  club(
    "Undergraduate Business Society",
    "UBS logo.png",
    "https://uclaubs.com/",
  ),
  club(
    "Bruin Real Estate Association",
    "brea logo.webp",
    "https://uclabrea.org/",
  ),
  club(
    "Bruin Quant Traders",
    "bruin quant traders logo.jpeg",
    "https://bruinquant.com/",
  ),
  club("Data Science Union", "dsu logo.png", "https://datascienceunion.com/"),
  club("ACM at UCLA", "acm ucla.png", "https://www.uclaacm.com/"),
];
