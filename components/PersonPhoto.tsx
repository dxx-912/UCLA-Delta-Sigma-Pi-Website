import { clsx } from "./clsx";
import { LinkedInIcon } from "./icons";

type PersonPhotoProps = {
  name: string;
  /** LinkedIn profile URL. Omit to render the photo with no hover overlay. */
  linkedin?: string;
  rounded?: boolean;
  /** Lift + shadow the whole photo on hover, driven by an ancestor's `group` class. */
  liftOnHover?: boolean;
  /** The sized photo element — a Placeholder or <img>, carrying its own aspect/width classes. */
  children: React.ReactNode;
};

/**
 * Wraps a person's photo with the grayscale + centered LinkedIn icon hover
 * treatment shared by the Actives and Leadership pages.
 */
export default function PersonPhoto({
  name,
  linkedin,
  rounded,
  liftOnHover = true,
  children,
}: PersonPhotoProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        rounded && "rounded-md",
        liftOnHover &&
          "transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg",
      )}
    >
      <div className="transition-[filter] duration-300 group-hover:grayscale">
        {children}
      </div>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s LinkedIn profile`}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
            <LinkedInIcon className="h-5 w-5 text-[#0A66C2]" />
          </span>
        </a>
      )}
    </div>
  );
}
