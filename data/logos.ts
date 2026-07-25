// Homepage "We send our brothers to..." logo spread — the company lists from the
// Careers Overview page (data/careers.ts), regrouped into the five columns the
// spread displays and extended with companies that recur in our offers history.
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
  companies: Company[];
}

const names = (...list: string[]): Company[] => list.map((name) => ({ name }));

export const logoSpreadHeadline = "We send our brothers to...";

export const logoCategories: LogoCategory[] = [
  {
    label: "Investment Banking",
    companies: names(
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
      "Evercore",
      "Lazard",
      "Moelis & Company",
      "Houlihan Lokey",
      "Perella Weinberg Partners",
      "Qatalyst Partners",
      "Rothschild & Co.",
      "Capital One",
    ),
  },
  {
    label: "Private Equity",
    companies: names(
      "Blackstone",
      "KKR & Co.",
      "Oaktree Capital Management",
      "Ares Management",
      "Vista Equity Partners",
    ),
  },
  {
    label: "Technology",
    companies: names(
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
      "TikTok",
      "Twitter",
      "Databricks",
      "Snowflake",
      "Robinhood",
      "CrowdStrike",
    ),
  },
  {
    label: "Consulting",
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
    ),
  },
];
