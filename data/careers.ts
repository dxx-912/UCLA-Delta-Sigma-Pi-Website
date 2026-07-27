// Careers Overview page (/placements-1) content — four industry sections, each with
// verbatim intro copy and its company list (Section 7.4). Logo assets resolve through
// data/companyLogos.ts, shared with the homepage spread, so each company renders the
// same file on both surfaces; anything unsourced falls back to a labeled placeholder.

export interface IndustrySection {
  industry: string;
  intro: string;
  companies: string[];
}

export const heroHeadline = "Delta Sigma Pi takes you places.";
export const heroBody =
  "We believe that no one should forge through their career journey alone — which is why we've built a strong culture of mentorship to help members unlock their career potential. Thanks to the guidance and professional network we provide, our members have consistently achieved their career goals. From investment banking to entertainment, we have years of collective experience working at top companies.";

export const industries: IndustrySection[] = [
  {
    industry: "Investment Banking",
    intro:
      "Investment bankers play a central role in IPOs, mergers and acquisitions, and capital-raising transactions, in addition to other areas of financial expertise. Year after year, our members have been privileged to receive offers from top bulge-bracket and elite boutique investment banks across the country — from Los Angeles to San Francisco to New York City.",
    companies: [
      "Qatalyst Partners",
      "Barclays",
      "Perella Weinberg Partners",
      "Lazard",
      "Citi",
      "J.P. Morgan",
      "UBS",
      "Evercore",
      "Rothschild & Co.",
      "Capital One",
      "Goldman Sachs",
      "Morgan Stanley",
      "Bank of America",
      "Houlihan Lokey",
      "Moelis & Company",
      "Blackstone",
      "Credit Suisse",
      "Wells Fargo",
      "Sixth Street",
      "Santander",
      "Macquarie",
      "BNY Mellon",
      // Private equity and asset management. Grouped here rather than in their own
      // section, following the existing placement of Blackstone above; the homepage
      // spread breaks them out into a dedicated "Private Equity" column.
      "KKR & Co.",
      "Oaktree Capital Management",
      "Ares Management",
      "Vista Equity Partners",
    ],
  },
  {
    industry: "Consulting",
    intro:
      "Consultants help companies solve complex business challenges in specific areas, such as management or technology. Delta Sigma Pi has a legacy of success in preparing our members to enter this highly competitive field.",
    companies: [
      "BCG",
      "McKinsey & Company",
      "Mercer",
      "Bain & Company",
      "Deloitte",
      "EY-Parthenon",
      "L.E.K. Consulting",
      "Accenture",
      "PwC",
      "KPMG",
      "Booz Allen Hamilton",
      "Strategy&",
      "Roland Berger",
    ],
  },
  {
    industry: "Technology",
    intro:
      "Now more than ever, the intersection of business and technology has become increasingly prevalent and relevant. In line with this trajectory, we have increased our focus on equipping our members with the skills to 'break into tech'. Many of us have gone on to work at some of the biggest tech companies in the world, whether in business or as software engineers.",
    companies: [
      "Meta",
      "Microsoft",
      "Snapchat",
      "Uber",
      "Tesla",
      "Apple",
      "Amazon",
      "Twitter",
      "Hulu",
      "Intel",
      "Salesforce",
      "TikTok",
      "Google",
      "Databricks",
      "Snowflake",
      "Adobe",
      "Oracle",
      "SAP",
      "Robinhood",
      "CrowdStrike",
      "Okta",
      "Atlassian",
      "Cisco",
      "Instagram",
      "Redfin",
      "Applied Intuition",
      "MathWorks",
      "Verizon",
    ],
  },
  {
    industry: "Entertainment",
    intro:
      "Los Angeles is home to Hollywood and some of the world's most iconic brands. Beyond more traditional sectors of business, we also have a strong foothold in entertainment and marketing, with a large number of our members working in areas such as artist development, finance, and brand management.",
    companies: [
      "Paramount Pictures",
      "HBO",
      "Hulu",
      "Disney",
      "Universal Pictures",
      "Lionsgate",
      "Warner Bros.",
      "NBC",
      "Warner Music Group",
      "William Morris Endeavor",
      "Sony Pictures",
      "Universal Music Group",
      "MGM Studios",
      "Riot Games",
    ],
  },
];
