import Link from "next/link";
import { AUTHOR_URL, INSTAGRAM_URL } from "./siteConfig";
import { InstagramIcon } from "./icons";

/**
 * Site footer, repeated on every page (Section 4). The copyright year is computed
 * dynamically (Section 5.3) so it never goes stale — replacing the current site's
 * hardcoded "© 2024" / "© 2026" values.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-14">
        <Link
          href="/join-us"
          className="bg-white px-8 py-3 text-sm font-medium text-charcoal transition-transform hover:-translate-y-0.5"
        >
          Join us
        </Link>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white/90 transition-colors hover:text-white"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
        <p className="text-sm text-white/70">
          Questions? DM us on{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            Instagram
          </a>
          .
        </p>
        <p className="text-xs text-white/50">
          © {year} UCLA Delta Sigma Pi — Xi Omicron Chapter - Site by{" "}
          <a
            href={AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            // Underline is deliberately fainter than the surrounding text so the
            // credit reads as a quiet aside, not a call to action.
            className="underline decoration-white/25 underline-offset-2 transition-colors hover:text-white/80 hover:decoration-white/60"
          >
            Daniel Xing
          </a>
        </p>
      </div>
    </footer>
  );
}
