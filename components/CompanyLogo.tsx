import type { Company } from "@/data/logos";

/**
 * One company logo, shared by the homepage logo spread and the Careers Overview
 * logo walls so both surfaces render the same asset for the same company.
 *
 * With a real asset (see data/companyLogos.ts) the image is flattened to a
 * single colour, so a wall of mixed-colour brand marks reads as one set:
 * `tone="dark"` inverts it to white for the charcoal homepage section,
 * `tone="light"` renders it black for the white Careers page.
 *
 * Without one — the state everything is in today — it falls back to a labeled
 * tile tuned for the same background. Same slot, same grid cell: dropping in a
 * file and listing it in `LOGO_FILES` is the only change needed.
 */
export default function CompanyLogo({
  name,
  src,
  scale = "",
  tone = "dark",
  className = "h-10",
}: Company & {
  /** The background this sits on — picks the recolour and placeholder styling. */
  tone?: "dark" | "light";
  /** Sizing for the slot; the caller owns the cell height. */
  className?: string;
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

  return (
    // Logos are small fixed assets, so next/image's optimizer adds no value here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      // `object-contain` is what keeps every mark at its true aspect ratio: the
      // cell is a uniform box, and each logo scales down inside it until it fits
      // rather than stretching to fill. Wide marks end up limited by the cell's
      // width, squarer ones by its height — nothing is ever distorted. No border
      // or background, so the mark itself is the only thing drawn.
      className={`w-full object-contain opacity-90 transition-opacity duration-200 hover:opacity-100 ${
        tone === "dark"
          ? "[filter:brightness(0)_invert(1)]"
          : "[filter:brightness(0)]"
      } ${scale} ${className}`}
      loading="lazy"
    />
  );
}
