// Single source of truth for company logo assets.
//
// Both the homepage logo spread (data/logos.ts) and the Careers Overview logo
// walls (app/placements-1) resolve their images through here, so a company is
// guaranteed to render the *same* file in both places — never two different
// versions of the same mark.
//
// Adding a logo is a two-step drop-in:
//   1. Save the file to `public/images/logos/` named by `logoSlug(name)`
//      (e.g. "Perella Weinberg Partners" -> perella-weinberg-partners.png).
//   2. Add that filename to `LOGO_FILES` below.
// Anything not listed renders as a labeled placeholder tile in the same slot.
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
 * Logo files that actually exist in `public/images/logos/`.
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
  "adobe.svg",
  "amazon.svg",
  "apple.png",
  "applied-intuition.svg",
  "ares-management.svg",
  "atlassian.svg",
  "bain-company.svg",
  "bank-of-america.svg",
  "barclays.svg",
  "bcg.svg",
  "blackstone.svg",
  "bny-mellon.png",
  "booz-allen-hamilton.svg",
  "capital-one.svg",
  "cisco.svg",
  "citi.svg",
  "credit-suisse.svg",
  "crowdstrike.svg",
  "databricks.svg",
  "deloitte.svg",
  "disney.svg",
  "evercore.svg",
  "ey-parthenon.svg",
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
  "oaktree-capital-management.png",
  "okta.svg",
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
  "salesforce.png",
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
  "vista-equity-partners.svg",
  "warner-bros.svg",
  "warner-music-group.svg",
  "wells-fargo.svg",
  "william-morris-endeavor.png",
];

const BY_SLUG = new Map(
  LOGO_FILES.map((file) => [file.replace(/\.[^.]+$/, ""), file]),
);

/** Public path for a company's logo, or `undefined` while it's placeholdered. */
export function logoFor(name: string): string | undefined {
  const file = BY_SLUG.get(logoSlug(name));
  return file ? `/images/logos/${file}` : undefined;
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
  citi: "scale-125",
  meta: "scale-125",
};

/** Extra sizing class for a company's mark, or "" when it needs no correction. */
export function logoScaleFor(name: string): string {
  return LOGO_SCALE[logoSlug(name)] ?? "";
}
