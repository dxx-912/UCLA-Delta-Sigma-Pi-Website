// Careers Overview page (/placements-1) content — four industry sections, each with
// verbatim intro copy and its company list (Section 7.4). Company logos are rendered
// as labeled placeholders per Section 6.

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
    ],
  },
  {
    industry: "Entertainment and Marketing",
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
    ],
  },
];
