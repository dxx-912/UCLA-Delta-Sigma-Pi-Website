import type { Company } from "@/data/logos";

/**
 * One company logo, shared by the homepage logo spread and the Careers Overview
 * logo walls so both surfaces render the same asset for the same company.
 *
 * With a real asset (see data/companyLogos.ts) the mark is recoloured to suit
 * its background: `tone="dark"` inverts it to white for the charcoal homepage
 * section, `tone="light"` renders it black for the white Careers page.
 *
 * `showsColor` opts a mark out of that on white. It means "this file's own
 * colours read against white", so on the Careers walls the mark keeps them and
 * only the assets that would wash out are flattened to black. `tone="dark"`
 * ignores the flag — no brand colour survives on charcoal, which is the whole
 * reason the homepage needs a hover chip.
 *
 * Without a real asset it falls back to a labeled tile tuned for the same
 * background. Same slot, same grid cell: dropping in a file and listing it in
 * `LOGO_FILES` is the only change needed.
 *
 * `interactive` adds the homepage spread's hover state: the mark lifts, a white
 * chip fades in behind it, and the white flattening either lets go (real brand
 * colour, same `showsColor` test) or flips to black.
 */
export default function CompanyLogo({
  name,
  src,
  scale = "",
  showsColor = false,
  tone = "dark",
  className = "h-10",
  interactive = false,
}: Company & {
  /** The background this sits on — picks the recolour and placeholder styling. */
  tone?: "dark" | "light";
  /** Sizing for the slot; the caller owns the cell height. */
  className?: string;
  /**
   * Opts into the homepage spread's hover state: the mark lifts slightly and,
   * where the asset has colours that survive the dark background, drops the
   * recolour filter to show the real brand mark.
   */
  interactive?: boolean;
}) {
  if (!src) {
    return (
      <div
        className={`flex w-full items-center justify-center rounded border border-dashed px-2 text-center ${
          tone === "dark"
            ? "border-white/20 bg-white/[0.04]"
            : "border-neutral-300 bg-neutral-100"
        } ${className}`}
        role="img"
        aria-label={name}
      >
        <span
          className={`text-[11px] font-medium leading-tight ${
            tone === "dark" ? "text-white/60" : "text-neutral-500"
          }`}
        >
          {name}
        </span>
      </div>
    );
  }

  // `object-contain` is what keeps every mark at its true aspect ratio: the cell
  // is a uniform box, and each logo scales down inside it until it fits rather
  // than stretching to fill. Wide marks end up limited by the cell's width,
  // squarer ones by its height — nothing is ever distorted. No border or
  // background, so the mark itself is the only thing drawn.
  const recolour =
    tone === "dark"
      ? "[filter:brightness(0)_invert(1)]"
      : "[filter:brightness(0)]";

  // A colour-safe mark on a light background is left alone; everything else is
  // flattened so the wall still reads as one set rather than a ransom note of
  // half-legible marks.
  const resting = tone === "light" && showsColor ? "" : recolour;

  if (!interactive) {
    return (
      // Logos are small fixed assets, so next/image's optimizer adds no value here.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        className={`w-full object-contain opacity-90 transition-opacity duration-200 hover:opacity-100 ${resting} ${scale} ${className}`}
        loading="lazy"
      />
    );
  }

  // Every hover target is written as the same two-function list the resting
  // state uses, so the filter interpolates instead of snapping — CSS only
  // animates between filter lists of matching shape, and `filter: none` would
  // not match. `brightness(1) invert(0)` is the identity (true colour) and
  // `brightness(0) invert(0)` is flat black.
  const hoverFilter = showsColor
    ? "group-hover:[filter:brightness(1)_invert(0)]"
    : "group-hover:[filter:brightness(0)_invert(0)]";

  return (
    // The lift lives on the wrapper, not the mark, for two reasons: a few logos
    // carry their own `scale-*` optical correction that a hover scale on the
    // same element would override (shrinking them instead of growing them), and
    // scaling the wrapper composes with that correction instead of replacing it.
    // `hover:z-10` keeps a lifted mark and its chip above their neighbours.
    <span
      className={`group relative flex items-center justify-center transition-transform duration-200 ease-out hover:z-10 motion-safe:hover:scale-110 ${className}`}
    >
      {/* The chip. Insets are sized against the grid's own gaps (gap-x-6 /
          gap-y-[1.375rem]) so that even once the wrapper scales, one chip stops
          short of its neighbour rather than colliding with it. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-2.5 -inset-y-2 rounded-md bg-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        // `relative` lifts the mark above the absolutely-positioned chip behind it.
        className={`relative h-full w-full object-contain opacity-90 transition-[filter,opacity] duration-200 group-hover:opacity-100 ${recolour} ${hoverFilter} ${scale}`}
        loading="lazy"
      />
    </span>
  );
}
