// Homepage "We send our brothers to..." logo spread — the company lists from the
// Careers Overview page (data/careers.ts), regrouped into the four categories the
// spread displays (Investment Banking & Private Equity merged into one two-column
// category) and extended with companies that recur in our offers history.
//
// Logos are placeholders until real files exist (see Section 6 / CLAUDE.md). Set
// `src` on an entry to swap in a real asset — `components/CompanyLogo.tsx` then
// renders it flat white via `brightness(0) invert(1)`. Until then the entry
// renders as a labeled tile in the same slot.

export interface Company {
  name: string;
  /** Path under /public, e.g. "/logos/goldman-sachs.svg". Omit while placeholdered. */
  src?: string;
}

export interface LogoCategory {
  label: string;
  /**
   * Number of side-by-side columns this category renders as (1 or 2). Company
   * order is column-major — the first `companies.length / columns` entries
   * fill column A top-to-bottom, the rest fill column B — so each column reads
   * as an even 13-row block (see the outer 6-column grid in app/page.tsx).
   */
  columns: 1 | 2;
  companies: Company[];
}

const names = (...list: string[]): Company[] => list.map((name) => ({ name }));

export const logoSpreadHeadline = "We send our brothers to...";

export const logoCategories: LogoCategory[] = [
  {
    label: "Investment Banking & Private Equity",
    columns: 2,
    companies: names(
      // Column A
      "Goldman Sachs",
      "Morgan Stanley",
      "J.P. Morgan",
      "Bank of America",
      "Citi",
      "Barclays",
      "UBS",
      "Credit Suisse",
      "Wells Fargo",
      "RBC Capital Markets",
      "Santander",
      "Macquarie",
      "BNY Mellon",
      // Column B
      "Evercore",
      "Lazard",
      "Moelis & Company",
      "Houlihan Lokey",
      "Perella Weinberg Partners",
      "Qatalyst Partners",
      "Rothschild & Co.",
      "Capital One",
      "Blackstone",
      "KKR & Co.",
      "Oaktree Capital Management",
      "Ares Management",
      "Vista Equity Partners",
    ),
  },
  {
    label: "Technology",
    columns: 2,
    companies: names(
      // Column A
      "Google",
      "Meta",
      "Apple",
      "Amazon",
      "Microsoft",
      "Salesforce",
      "Oracle",
      "SAP",
      "Adobe",
      "Intel",
      "Tesla",
      "Uber",
      "Snapchat",
      // Column B
      "TikTok",
      "Twitter",
      "Databricks",
      "Snowflake",
      "Robinhood",
      "CrowdStrike",
      "Okta",
      "Atlassian",
      "Cisco",
      "Instagram",
      "Redfin",
      "Applied Intuition",
      "MathWorks",
    ),
  },
  {
    label: "Consulting",
    columns: 1,
    companies: names(
      "McKinsey & Company",
      "BCG",
      "Bain & Company",
      "Deloitte",
      "PwC",
      "EY-Parthenon",
      "KPMG",
      "Accenture",
      "Mercer",
      "L.E.K. Consulting",
      "Booz Allen Hamilton",
      "ZS Associates",
      "Roland Berger",
    ),
  },
  {
    label: "Entertainment & Marketing",
    columns: 1,
    companies: names(
      "Disney",
      "Warner Bros.",
      "Universal Pictures",
      "Paramount Pictures",
      "Lionsgate",
      "HBO",
      "NBC",
      "Hulu",
      "Warner Music Group",
      "William Morris Endeavor",
      "Sony Pictures",
      "Universal Music Group",
      "MGM Studios",
    ),
  },
];
