export const INSTAGRAM_URL = "https://instagram.com/ucladsp";

/** Site author — used by the footer credit, the console notice, and metadata. */
export const AUTHOR_NAME = "Daniel Xing";
export const AUTHOR_URL = "https://www.linkedin.com/in/dxing01/";

export const INTEREST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScyq4kgcgPDDUnmNojYCpakMZR8ByP4IifddGMM4KGvrQ2m3g/viewform";

/** Placeholder — chapter hasn't shared the Fall 2026 application link yet. */
export const APPLICATION_URL = "#";

export type NavChild = { label: string; href: string };
export type NavGroup = { label: string; children: NavChild[] };

/**
 * Three dropdown/folder groups exactly as grouped in the current site's nav
 * (Section 4 of the brief). Route slugs match the current site's URLs.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Brothers",
    children: [
      { label: "Leadership", href: "/leadership" },
      { label: "Actives", href: "/actives" },
    ],
  },
  {
    label: "Careers",
    children: [
      { label: "Overview", href: "/placements-1" },
      { label: "Our Offers", href: "/careers" },
    ],
  },
  {
    label: "Recruitment",
    children: [
      { label: "Recruitment Information", href: "/join-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
