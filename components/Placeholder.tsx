import { clsx } from "./clsx";

type PlaceholderProps = {
  /** Text describing the real asset that belongs here, e.g. "Headshot — Nikhil Mummalaneni" */
  label: string;
  className?: string;
  /** Optional rounded corners */
  rounded?: boolean;
};

/**
 * A clearly-labeled gray placeholder box, used everywhere a real photo, headshot,
 * logo, or flyer belongs (see Section 6 of the build brief). Never a fabricated image.
 */
export default function Placeholder({ label, className, rounded }: PlaceholderProps) {
  return (
    <div
      className={clsx(
        "placeholder-box flex items-center justify-center overflow-hidden text-center",
        rounded && "rounded-md",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <span className="px-2 text-[11px] font-medium leading-tight tracking-wide sm:text-xs">
        {label}
      </span>
    </div>
  );
}
