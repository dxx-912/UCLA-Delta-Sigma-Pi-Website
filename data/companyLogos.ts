// Single source of truth for company logo assets.
//
// Both the homepage logo spread (data/logos.ts) and the Careers Overview logo
// walls (app/placements-1) resolve their images through here, so a company is
// guaranteed to render the *same* file in both places — never two different
// versions of the same mark.
//
// Adding a logo is a two-step drop-in:
//   1. Save the file to the `LOGO_DIR` folder below, named by `logoSlug(name)`
//      (e.g. "Perella Weinberg Partners" -> perella-weinberg-partners.png).
//   2. Add that filename to `LOGO_FILES` below.
// Anything not listed renders as a labeled placeholder tile in the same slot.
//
// Renaming that folder breaks every logo on the site at once — the files are
// still there, but each `src` 404s and the whole wall falls back to alt text.
// If it moves, change `LOGO_DIR` to match and nothing else needs touching.
//
// Asset requirements — these matter because both surfaces recolour the mark with
// a CSS `brightness(0)` filter (to white on the dark homepage, to black on the
// white Careers page):
//   * Transparent background, always. A logo on a solid white canvas will fill
//     its whole box after filtering and read as a blank rectangle.
//   * The mark should be trimmed to its own bounds, with the file's own padding
//     doing the visual balancing — the layout gives every logo an identical box.
//   * Single-colour or flat artwork survives the filter best; heavy gradients
//     and photographic marks flatten into mush.

/**
 * Canonical company name -> asset filename stem.
 *
 * Lowercases, drops periods and ampersands (so "J.P. Morgan" -> "jp-morgan" and
 * "Moelis & Company" -> "moelis-company"), then hyphenates whatever is left.
 */
export function logoSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[.&']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Logo files that actually exist in the `LOGO_DIR` folder.
 *
 * Deliberately an explicit list rather than a filesystem scan: this module is
 * imported by server components at build time, and an explicit list keeps the
 * placeholder fallback honest — a typo'd filename shows as a placeholder rather
 * than a broken image.
 *
 * A company is listed here only once its asset is verified transparent — an
 * opaque file (JPEG, or a palette PNG with no tRNS chunk) fills its entire box
 * with flat white under the filter, which reads as a blank rectangle rather
 * than a logo. Anything held back stays a labeled placeholder in the same slot
 * until a transparent replacement is dropped in; see CLAUDE.md on never
 * shipping a fabricated or substituted image.
 */
const LOGO_FILES: string[] = [
  "accenture.svg",
  "adobe.png",
  "amazon.svg",
  "apple.png",
  "applied-intuition.svg",
  "ares-management.svg",
  "atlassian.svg",
  "bain-company.svg",
  "bank-of-america.svg",
  "barclays.svg",
  "bcg.svg",
  "blackrock.svg",
  "blackstone.svg",
  "bny-mellon.png",
  "booz-allen-hamilton.svg",
  "capital-one.svg",
  "cisco.svg",
  "citi.png",
  "credit-suisse.svg",
  "crowdstrike.svg",
  "databricks.svg",
  "deloitte.svg",
  "disney.svg",
  "evercore.svg",
  "ey-parthenon.svg",
  "general-atlantic.svg",
  "goldman-sachs.svg",
  "google.svg",
  "hbo.svg",
  "houlihan-lokey.svg",
  "hulu.svg",
  "instagram.svg",
  "intel.svg",
  "jp-morgan.svg",
  "kkr-co.svg",
  "kpmg.svg",
  "lazard.svg",
  "lek-consulting.svg",
  "lionsgate.svg",
  "macquarie.svg",
  "mathworks.png",
  "mckinsey-company.svg",
  "mercer.svg",
  "meta.svg",
  "mgm-studios.png",
  "microsoft.svg",
  "moelis-company.png",
  "morgan-stanley.svg",
  "nbc.svg",
  "nvidia.svg",
  "oaktree-capital-management.png",
  "okta.svg",
  "oliver-wyman.svg",
  "oracle.svg",
  "paramount-pictures.svg",
  "perella-weinberg-partners.svg",
  "pwc.png",
  "qatalyst-partners.svg",
  "redfin.svg",
  "riot-games.png",
  "robinhood.svg",
  "roland-berger.svg",
  "rothschild-co.svg",
  "salesforce.svg",
  "santander.svg",
  "sap.svg",
  "sixth-street.svg",
  "snapchat.png",
  "snowflake.svg",
  "sony-pictures.png",
  "strategy.png",
  "tesla.svg",
  "tiktok.svg",
  "twitter.svg",
  "uber.svg",
  "ubs.svg",
  "universal-music-group.svg",
  "universal-pictures.png",
  "verizon.png",
  "vista-equity-partners.svg",
  "warner-bros.svg",
  "warner-music-group.svg",
  "wells-fargo.svg",
  "william-morris-endeavor.png",
];

const BY_SLUG = new Map(
  LOGO_FILES.map((file) => [file.replace(/\.[^.]+$/, ""), file]),
);

/**
 * Folder under `public/` holding every logo file. The space is fine in a URL —
 * the browser encodes it, and the Headshots assets already rely on the same
 * thing — but it does mean this string must track the folder name exactly.
 */
const LOGO_DIR = "/images/company logos";

/** Public path for a company's logo, or `undefined` while it's placeholdered. */
export function logoFor(name: string): string | undefined {
  const file = BY_SLUG.get(logoSlug(name));
  return file ? `${LOGO_DIR}/${file}` : undefined;
}

/**
 * Optical-size corrections, slug -> Tailwind scale class.
 *
 * A few brand files carry a lot of empty margin inside their own canvas, so
 * `object-contain` fits the *canvas* to the cell and the mark itself lands
 * smaller than its neighbours. Where the padding lives in a raster file we trim
 * it from the asset instead; this map is for vector files whose viewBox we
 * can't safely re-measure. A `scale` transform doesn't affect layout, so rows
 * stay aligned across every column.
 */
const LOGO_SCALE: Record<string, string> = {
  meta: "scale-125",
  blackstone: "scale-[1.2]",
};

/** Extra sizing class for a company's mark, or "" when it needs no correction. */
export function logoScaleFor(name: string): string {
  return LOGO_SCALE[logoSlug(name)] ?? "";
}

/**
 * Assets whose own artwork stays legible on the white chip the homepage spread
 * fades in behind a hovered logo — those drop the recolour filter entirely and
 * show the real mark. Everything else is flattened to black on the chip, which
 * is the same treatment the Careers walls already use on white.
 *
 * The test is contrast against *white*, which is the mirror of the one that
 * governs the resting state: a mark fails here by being too light, not too
 * dark. That flips which assets qualify. Most of this list is the navy-and-
 * black financial marks that are invisible on the charcoal background and read
 * perfectly on the chip.
 *
 * Three things to check before adding to this list, each of which has already
 * cost real debugging:
 *   * An SVG shape with no `fill` renders black, so a file can look
 *     multi-colour in its source and still have a black wordmark. Check the
 *     rendered mark, not just the declared colours.
 *   * The *white* variant a brand publishes for dark backgrounds puts a
 *     coloured glyph beside a white wordmark that disappears on the chip. The
 *     standard full-colour variant is the one to use; Amazon, Intel,
 *     Databricks, EY and MGM all started as the white variant and only
 *     qualified once their colour files replaced it.
 *   * A mark on an opaque coloured tile can't be used at all. The resting
 *     state inverts everything opaque to white, so the tile becomes a solid
 *     white block on the charcoal wall. Snapchat (white ghost on a full-bleed
 *     yellow square) fails this way and stays on its transparent silhouette.
 */
const COLOUR_ON_LIGHT = new Set([
  "accenture",
  "adobe",
  "amazon",
  "atlassian",
  "bain-company",
  "bank-of-america",
  "barclays",
  "bcg",
  "bny-mellon",
  "capital-one",
  "cisco",
  "citi",
  "credit-suisse",
  "crowdstrike",
  "databricks",
  "deloitte",
  "disney",
  "evercore",
  "ey-parthenon",
  "google",
  "houlihan-lokey",
  "hulu",
  "intel",
  "kkr-co",
  "kpmg",
  "lazard",
  "lek-consulting",
  "mercer",
  "meta",
  "mgm-studios",
  "microsoft",
  "moelis-company",
  "nbc",
  "oaktree-capital-management",
  "oracle",
  "paramount-pictures",
  "pwc",
  "qatalyst-partners",
  "redfin",
  "roland-berger",
  "rothschild-co",
  "salesforce",
  "santander",
  "sap",
  "sixth-street",
  "snowflake",
  "tesla",
  "tiktok",
  "ubs",
  "vista-equity-partners",
  "warner-music-group",
  "wells-fargo",
]);

/** Whether this mark's real colours survive on the spread's white hover chip. */
export function logoShowsColorOnLight(name: string): boolean {
  return COLOUR_ON_LIGHT.has(logoSlug(name));
}
