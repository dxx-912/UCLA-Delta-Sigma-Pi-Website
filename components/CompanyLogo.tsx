import type { Company } from "@/data/logos";

/**
 * One logo in the homepage logo spread.
 *
 * With a real asset (`src` set in data/logos.ts) the image is flattened to solid
 * white with `brightness(0) invert(1)`, so a wall of mixed-colour brand marks
 * reads as one set against the dark section.
 *
 * Without one — the state everything is in today — it falls back to a labeled
 * tile tuned for the dark background, rather than the light `Placeholder` box
 * used on white sections. Same slot, same grid cell: dropping in a file and
 * setting `src` is the only change needed.
 */
export default function CompanyLogo({ name, src }: Company) {
  if (!src) {
    return (
      <div
        className="flex aspect-[3/2] w-full items-center justify-center rounded border border-dashed border-white/20 bg-white/[0.04] px-2 text-center"
        role="img"
        aria-label={name}
      >
        <span className="text-[11px] font-medium leading-tight text-white/60">
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
      className="aspect-[3/2] w-full object-contain opacity-90 transition-opacity duration-200 [filter:brightness(0)_invert(1)] hover:opacity-100"
      loading="lazy"
    />
  );
}
