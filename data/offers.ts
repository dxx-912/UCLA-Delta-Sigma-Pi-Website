// Full offers dataset, transcribed verbatim from the build brief (Appendix A).
// 11 years of placement history (2014–15 through 2024–25). Per the field-mapping
// note in Appendix A, the source uses two suffix formats: "Company (Location)" for
// Investment Banking/Consulting, and "Company, Role" (or "Role, Company") for
// Technology/Music & Entertainment/Other. To reproduce every entry with zero content
// changes, the exact text after the em dash is stored verbatim in `detail` — no
// reordering or normalization. Nothing here may be altered, removed, or reordered
// (Section 5.2).

export type OfferType = "Full-Time" | "Internship" | "Entrepreneurship";

export interface OfferRecord {
  year: string;
  category: string;
  type: OfferType;
  name: string;
  /** Exact text following the em dash — a company+location or company+role string. */
  detail: string;
}

/** Industry categories, in the order the current site presents them. */
export const CATEGORIES = [
  "Investment Banking",
  "Technology",
  "Consulting",
  "Music and Entertainment",
  "Other",
] as const;

/** Human-readable section labels for each offer type. */
export const TYPE_LABELS: Record<OfferType, string> = {
  "Full-Time": "Full-Time Offers",
  Internship: "Internships & Internship Offers",
  Entrepreneurship: "Entrepreneurship",
};

function group(
  year: string,
  category: string,
  type: OfferType,
  entries: [name: string, detail: string][],
): OfferRecord[] {
  return entries.map(([name, detail]) => ({ year, category, type, name, detail }));
}

export const offers: OfferRecord[] = [
  // ─────────────────────────────── 2024–2025 ───────────────────────────────
  ...group("2024–2025", "Investment Banking", "Full-Time", [
    ["Adithi Balasubramanian", "Goldman Sachs (Los Angeles)"],
    ["Benjamin Watson", "Moelis & Company"],
    ["Daniel Kwon", "Barclays"],
    ["Ian Zhang", "Santander"],
    ["Kevin Zheng", "Evercore"],
    ["Megan Yu", "PJT Partners"],
    ["William Lee", "Moelis & Company"],
  ]),
  ...group("2024–2025", "Investment Banking", "Internship", [
    ["Apurv Gupta", "Perella Weinberg Partners"],
    ["Christina Ahn", "USTA"],
    ["Eric Amkraut", "Perella Weinberg Partners"],
    ["Hayden Selvakumar", "Intuit"],
    ["Nikhil Mummalaneni", "Sixth Street"],
    ["Nikolas Marmerschteyn", "Live Nation"],
    ["Peggy Liu", "Guggenheim"],
    ["Ramona Pyke", "Wells Fargo"],
    ["Tarini Pisharody", "Goldman Sachs"],
    ["William Lenkowitz", "JLL"],
  ]),
  ...group("2024–2025", "Technology", "Internship", [
    ["Kunal Patil", "Glean, Software Engineering"],
    ["Megan Ng", "King's Office (Kingdom of Bhutan), Project Intern"],
    ["Michael Peng", "Databricks, Software Engineering"],
    ["Ryan Chao", "Kaiser Permanente, Technology & Operations"],
    ["Sara Tatke", "Copper, Product & Solutions"],
    ["Simone Yu", "CBRE, Product Management"],
    ["Tara Jeffries", "Okta, Product Marketing"],
    ["Veronica Yang", "ASUS, Product Marketing"],
  ]),
  ...group("2024–2025", "Consulting", "Full-Time", [
    ["Iain Han", "L.E.K Consulting (Los Angeles)"],
    ["Mandy Lu", "PwC"],
    ["Sam Kao", "Bain & Company"],
    ["Sam Oh", "Strategy& (New York)"],
    ["Vivien Xi", "EY-Parthenon"],
  ]),
  ...group("2024–2025", "Consulting", "Internship", [
    ["Taey Traisorat", "Boston Consulting Group (BCG)"],
  ]),
  ...group("2024–2025", "Other", "Entrepreneurship", [
    ["Loki Cheema", "Hemut (YC Fall 2025), Founder"],
    ["Len Moran", "Hemut (YC Fall 2025), Lead Business Analyst"],
  ]),

  // ─────────────────────────────── 2023–2024 ───────────────────────────────
  ...group("2023–2024", "Investment Banking", "Full-Time", [
    ["Aditi Kosgi", "J.P. Morgan (New York)"],
    ["Li Kay Teng", "Moelis & Company (Los Angeles)"],
    ["Matthew Ding", "Evercore (New York)"],
    ["Ravi Trivedi", "PJT Partners (New York)"],
    ["Victor Chen", "Perella Weinberg Partners (New York)"],
  ]),
  ...group("2023–2024", "Investment Banking", "Internship", [
    ["Daniel Kwon", "Barclays (San Francisco)"],
    ["Eric Amkraut", "Intrepid Investment Bankers (Los Angeles)"],
    ["Ian Zhang", "Santander (Los Angeles)"],
    ["Kevin Zheng", "Evercore (Menlo Park)"],
    ["Megan Yu", "PJT Partners (New York)"],
    ["Tarini Pisharody", "TAP Advisors (New York)"],
    ["Tej Bains", "Deloitte (Los Angeles)"],
    ["William Lee", "Moelis & Company (Los Angeles)"],
  ]),
  ...group("2023–2024", "Technology", "Full-Time", [
    ["Isha Shah", "Amazon, Business Intelligence Engineer"],
    ["Ivan Yau", "Deloitte, Cyber Scientist"],
    ["Laney Chen", "Snowflake, Corporate Finance"],
    ["Rachael Lim", "Booz Allen Hamilton, Data Scientist"],
    ["Wiona Tan", "Microsoft, Product Management"],
  ]),
  ...group("2023–2024", "Technology", "Internship", [
    ["Benjamin Watson", "Cisco, Business Analytics"],
    ["Gavin Wong", "Atlassian, Software Engineering Intern"],
    ["Katherine Fong", "NetApp, Product Marketing"],
    ["Kunal Patil", "Verkada, Software Engineering Intern"],
    ["Michael Peng", "Databricks, Software Engineering Intern"],
    ["Peggy Liu", "Uber, Strategic Finance"],
    ["Tara Jeffries", "Okta, Product Marketing Manager"],
  ]),
  ...group("2023–2024", "Consulting", "Full-Time", [
    ["Albert Wang", "Accenture (Los Angeles)"],
  ]),
  ...group("2023–2024", "Consulting", "Internship", [
    ["Mandy Lu", "PwC (Los Angeles)"],
    ["Sam Kao", "EY-Parthenon (San Francisco)"],
    ["Vivien Xi", "EY-Parthenon (Los Angeles)"],
  ]),
  ...group("2023–2024", "Other", "Full-Time", [
    ["Abbie Chong", "Ares Management, Private Equity"],
    ["James Guo", "DRW, Quantitative Trading"],
    ["Mahmoud Salem", "Warner Music Group, Streaming Analyst"],
  ]),
  ...group("2023–2024", "Other", "Internship", [
    ["Adithi Balasubramanian", "Goldman Sachs, Summer Analyst"],
    ["Erica Yee", "Northrop Grumman, Business Management"],
    ["Iain Han", "Kaiser Permanente, Business Analytics"],
  ]),

  // ─────────────────────────────── 2022–2023 ───────────────────────────────
  ...group("2022–2023", "Investment Banking", "Full-Time", [
    ["Brian Wong", "Credit Suisse (Los Angeles)"],
    ["Brian Wong", "UBS (Hong Kong)"],
    ["Brian Wong", "Lazard (Los Angeles)"],
    ["Monique Sin", "PJT Partners (New York)"],
    ["Eric Zhou", "UBS (New York)"],
    ["Luke Anderson", "RBC Capital Markets (New York)"],
    ["Jimmy Zhou", "Qatalyst Partners (San Francisco)"],
  ]),
  ...group("2022–2023", "Investment Banking", "Internship", [
    ["Aditi Kosgi", "J.P. Morgan (New York)"],
    ["Matthew Ding", "Moelis & Company (Los Angeles)"],
    ["Victor Chen", "Perella Weinberg Partners (New York)"],
    ["Li Kay Teng", "Credit Suisse (Los Angeles)"],
    ["Kevin Zheng", "Oppenheimer & Co. (San Francisco)"],
    ["Ravi Trivedi", "PJT Partners (New York)"],
    ["Laney Chen", "Rothschild & Co. (Los Angeles)"],
    ["Tej Bains", "Lincoln International (Los Angeles)"],
  ]),
  ...group("2022–2023", "Technology", "Full-Time", [
    ["Adam Linert", "Strategic Finance, Tesla"],
    ["Jeffrey Shen", "Data Science, Atlassian"],
    ["Jeffrey Shen", "Data Science, Bank of America"],
    ["Divya Ponniah", "Product Marketing, Microsoft"],
    ["Ivy Kang", "UX Design, Adobe"],
  ]),
  ...group("2022–2023", "Technology", "Internship", [
    ["Ivan Yau", "Cyber Risk, Deloitte"],
    ["Megan Yu", "Strategic Finance, Uber"],
    ["Wiona Tan", "Product Management, Microsoft"],
    ["Luke Shen", "Financial Analyst, Microsoft"],
    ["Tara Jeffries", "Production, Activision (Infinity Ward)"],
    ["James Guo", "Software Engineering, Robinhood"],
    ["Michael Peng", "Software Engineering, Amazon"],
    ["Isha Shah", "Business Analyst, Amazon"],
    ["Vivien Xi", "Consumer Insights, Amazon"],
    ["Sam Kao", "Business Analyst, Capital One"],
    ["Kunal Patil", "Software Engineering, MathWorks"],
    ["Michelle Liu", "Design, NASA JPL"],
  ]),
  ...group("2022–2023", "Consulting", "Full-Time", [
    ["Andy Zhou", "EY-Parthenon (Los Angeles)"],
    ["Andy Zhou", "L.E.K. Consulting (Los Angeles)"],
    ["Kevin Cong", "Boston Consulting Group (Los Angeles)"],
    ["Polina Pranovich", "Boston Consulting Group (Uzbekistan)"],
    ["Adam Linert", "Roland Berger (Qatar)"],
  ]),
  ...group("2022–2023", "Consulting", "Internship", [
    ["Sam Kao", "EY-Parthenon (San Francisco)"],
    ["Albert Wang", "Accenture (Los Angeles)"],
  ]),
  ...group("2022–2023", "Other", "Full-Time", [
    ["Marc Andrew Choi", "Applied and Interdisciplinary Mathematics PhD, University of Michigan"],
    ["Arturo Rodrigues", "Private Equity, Blackstone"],
  ]),
  ...group("2022–2023", "Other", "Internship", [
    ["James Guo", "Quantitative Trading, IMC Trading"],
    ["Abbie Chong", "Private Equity, Ares Management"],
    ["David Cervantes", "Summer Analyst, J.P. Morgan Chase & Co."],
    ["Katherine Fong", "Strategic Communications, FGS Global"],
    ["Brian Lambey", "Corporate Finance, BNY Mellon"],
    ["Daniel Kwon", "Financial Planning and Analysis, Paramount Pictures"],
    ["Mandy Lu", "Business Analyst, Red Bull"],
    ["Mahmoud Salem", "Summer Analyst, Mercer"],
    ["William Lee", "Finance, Capital One"],
    ["Kevin Zheng", "Economic Valuation Services – Valuation, KPMG"],
    ["Kevin Zheng", "Global Private Finance, Barings"],
  ]),

  // ─────────────────────────────── 2021–2022 ───────────────────────────────
  ...group("2021–2022", "Investment Banking", "Full-Time", [
    ["Ryan Macmillan", "Moelis & Co. (New York)"],
    ["Jureen Huang", "Lazard (Los Angeles)"],
    ["Michelle Lam", "Goldman Sachs (Los Angeles)"],
    ["Allen Cui", "Rothschild & Co. (Los Angeles)"],
    ["Winona Wong", "Evercore (Menlo Park)"],
    ["Elvin Hao", "Qatalyst Partners (San Francisco)"],
  ]),
  ...group("2021–2022", "Investment Banking", "Internship", [
    ["Monique Sin", "PJT Partners (New York)"],
    ["Luke Anderson", "RBC Capital Markets (New York)"],
    ["Ravi Trivedi", "Jefferies (New York)"],
    ["Eric Zhou", "UBS (New York)"],
    ["Jimmy Zhou", "Qatalyst Partners (San Francisco)"],
    ["Julian Hwang", "Bank of America (Los Angeles)"],
    ["Li Kay Teng", "Morgan Stanley (Los Angeles)"],
    ["Daniel Kwon", "Duff & Phelps (Los Angeles)"],
    ["Brian Wong", "UBS (Hong Kong)"],
  ]),
  ...group("2021–2022", "Technology", "Full-Time", [
    ["Kevin Naseri", "Product Marketing, Robinhood"],
    ["Tait Taniguchi", "Product Management, Salesforce"],
    ["Vinay Shah", "Strategic Finance, Uber"],
    ["Alyssa Yin", "Product Marketing, Snapchat"],
  ]),
  ...group("2021–2022", "Technology", "Internship", [
    ["Pranav Maddali", "Software Engineering, Meta"],
    ["Divya Ponniah", "Data Engineer, Meta"],
    ["Divya Ponniah", "Product Management, Microsoft"],
    ["Jeffrey Shen", "Data Science, Meta"],
    ["Isha Shah", "Data Science, Meta"],
    ["Alyssa Yin", "Product Marketing, SAP"],
    ["Sanjana Sinkar", "Product Marketing, TikTok"],
    ["Ivy Kang", "UX Designer, Adobe"],
    ["Wiona Tan", "Product Management, Amazon"],
    ["James Guo", "Software Engineering, Amazon"],
    ["James Guo", "Software Engineering, Uber"],
    ["Matthew Ding", "Strategic Finance, Uber"],
    ["Abbie Chong", "Business Markets, Verizon"],
    ["Sam Kao", "Business Analyst, Capital One"],
  ]),
  ...group("2021–2022", "Consulting", "Full-Time", [
    ["Sofia Tam", "McKinsey & Co. (Los Angeles)"],
    ["Derreck Chu", "Bain & Company (Los Angeles)"],
    ["Nick Hom", "Bain & Company (Los Angeles)"],
    ["Michelle Kaviona", "Bain & Company (Los Angeles)"],
    ["Lauren Young", "L.E.K Consulting (Los Angeles)"],
    ["Lily Yau", "Accenture (San Francisco)"],
  ]),
  ...group("2021–2022", "Consulting", "Internship", [
    ["Polina Pranovich", "Deloitte Consulting (Los Angeles)"],
    ["Kevin Cong", "Boston Consulting Group (Los Angeles)"],
    ["Andy Zhou", "Crowe (Los Angeles)"],
    ["Adam Linert", "Roland Berger (Qatar)"],
  ]),
  ...group("2021–2022", "Music and Entertainment", "Internship", [
    ["Ivy Kang", "Product Design, Disney"],
    ["Victor Chen", "FP&A, Paramount Pictures"],
  ]),
  ...group("2021–2022", "Other", "Internship", [
    ["Arturo Rodrigues", "Private Equity, Blackstone"],
    ["Aditi Kosgi", "Private Equity, L Catterton"],
    ["Amy Liu", "Global Finance and Business Management, J.P. Morgan"],
    ["Megan Hoang", "Credit, Vista Equity Partners"],
    ["Laney Chen", "Investments, Greystar"],
  ]),

  // ─────────────────────────────── 2020–2021 ───────────────────────────────
  ...group("2020–2021", "Investment Banking", "Full-Time", [
    ["Brian Yung", "Barclays (Los Angeles)"],
    ["Um Chavalitumrong", "Credit Suisse (Los Angeles)"],
    ["Owen Chen", "Bank of America (Palo Alto)"],
    ["Prachit Bhike", "Qatalyst Partners (San Francisco)"],
    ["Brandon Chen", "Perella Weinberg Partners (San Francisco)"],
  ]),
  ...group("2020–2021", "Investment Banking", "Internship", [
    ["Ryan Macmillan", "Moelis & Co. (New York)"],
    ["Arturo Rodrigues", "Credit Suisse (New York)"],
    ["Michelle Lam", "Goldman Sachs (Los Angeles)"],
    ["Jureen Huang", "Lazard (Los Angeles)"],
    ["Allen Cui", "Rothschild & Co. (Los Angeles)"],
    ["Elvin Hao", "Qatalyst Partners (San Francisco)"],
    ["Winona Wong", "Evercore (Menlo Park)"],
  ]),
  ...group("2020–2021", "Technology", "Full-Time", [
    ["Michael Huang", "Product Management, Redfin"],
    ["Jack Zhang", "Software Engineering, Applied Intuition"],
    ["Joshua Lee", "Finance, Microsoft"],
    ["Kristian Sjumarken", "Computational Linguist, Apple"],
  ]),
  ...group("2020–2021", "Technology", "Internship", [
    ["Vinay Shah", "Strategic Finance, Uber"],
    ["Kevin Naseri", "Corporate Communications, Lenovo"],
    ["Kevin Naseri", "Product Marketing Management, Robinhood"],
    ["Michelle Kaviona", "Business Operations, SAP"],
    ["Alyssa Yin", "Product Marketing & Strategy, SAP"],
    ["Tait Taniguchi", "Strategy & Operations, Salesforce"],
    ["Lauren Young", "Treasury, Salesforce"],
    ["Divya Ponniah", "Data Science, Intel"],
    ["Polina Pranovich", "Finance, Verizon"],
    ["Kevin Cong", "Product Management, Capital One"],
  ]),
  ...group("2020–2021", "Consulting", "Full-Time", [
    ["Rahul Prabhakaran", "Bain & Company (Los Angeles)"],
    ["Bryan Zhao", "Bain & Company (Los Angeles)"],
    ["Sarah Hidayat", "Deloitte (Los Angeles)"],
    ["Katrina An", "Deloitte (Los Angeles)"],
    ["Evan Sentoso", "L.E.K. Consulting (Los Angeles)"],
    ["Liam Roh", "L.E.K. Consulting (Los Angeles)"],
    ["Sebastiano Bertola", "McKinsey & Co. (San Francisco)"],
    ["Tina Lu", "Accenture (San Francisco)"],
  ]),
  ...group("2020–2021", "Consulting", "Internship", [
    ["Derreck Chu", "Bain & Company (Los Angeles)"],
    ["Nicholas Hom", "ZS Associates (Los Angeles)"],
    ["Sofia Tam", "Accenture (Los Angeles)"],
    ["Lauren Young", "L.E.K. Consulting (Los Angeles)"],
    ["Lily Yau", "Accenture (Los Angeles)"],
  ]),
  ...group("2020–2021", "Music and Entertainment", "Internship", [
    ["Amy Liu", "International Label Management, J.P. Morgan"],
    ["Kira Hum", "Program Marketing, Warner Bros."],
    ["Sanjana Sinkar", "Content & Consumer Insights, NBCUniversal"],
  ]),
  ...group("2020–2021", "Other", "Internship", [
    ["Monique Sin", "Client & Partner Group, KKR & Co."],
    ["Jimmy Zhou", "Private Equity, Barings"],
    ["Amy Liu", "Global Finance and Business Management, J.P. Morgan"],
  ]),

  // ─────────────────────────────── 2019–2020 ───────────────────────────────
  ...group("2019–2020", "Investment Banking", "Full-Time", [
    ["Ellen Chang", "Morgan Stanley (Los Angeles)"],
  ]),
  ...group("2019–2020", "Investment Banking", "Internship", [
    ["Brian Yung", "Barclays (Los Angeles)"],
    ["Um Chavalitumrong", "Credit Suisse (New York)"],
    ["Owen Chen", "Bank of America (Palo Alto)"],
    ["Prachit Bhike", "Qatalyst Partners (San Francisco)"],
    ["Brandon Chen", "Perella Weinberg Partners (San Francisco)"],
  ]),
  ...group("2019–2020", "Technology", "Full-Time", [
    ["Kyler Ashimine", "Finance, Instagram"],
    ["Cameron Khalvati", "Product Marketing Management, Atlassian"],
    ["Yao Lin", "Marketing, Atlassian"],
    ["Hui Yu Chuang", "Product Management, RingCentral"],
    ["Kevin Chen", "Software Engineering, Ericsson"],
  ]),
  ...group("2019–2020", "Technology", "Internship", [
    ["Jack Zhang", "Software Engineering, Amazon"],
    ["Michael Huang", "Product Management, Redfin"],
    ["Hui Yu Chuang", "Product Management, Cornerstone OnDemand"],
    ["Derreck Chu", "Strategic Finance, Uber"],
    ["Elvin Hao", "M&A Finance, Salesforce"],
    ["Joshua Lee", "Finance, Microsoft"],
  ]),
  ...group("2019–2020", "Consulting", "Full-Time", [
    ["Karina Finn", "Bain & Company (San Francisco)"],
    ["Robbie Gallaher", "Bain & Company (Los Angeles)"],
    ["Ali Heera", "Bain & Company (Los Angeles)"],
    ["Eleanor Zhu", "KPMG (Los Angeles)"],
  ]),
  ...group("2019–2020", "Consulting", "Internship", [
    ["Rahul Prabhakaran", "Bain & Company (Los Angeles)"],
    ["Bryan Zhao", "Bain & Company (Los Angeles)"],
    ["Sebastiano Bertola", "Keystone Strategy (San Francisco)"],
  ]),
  ...group("2019–2020", "Music and Entertainment", "Full-Time", [
    ["Ryan Olstad", "Strategic Planning, Disney"],
    ["Stacy Li", "Product Design, Hulu"],
  ]),
  ...group("2019–2020", "Music and Entertainment", "Internship", [
    ["Irena Huang", "Marketing, Disney"],
    ["Amy Liu", "Residuals, Participations, and 3rd Party Audits, Sony Pictures"],
    ["Amy Liu", "Motion Picture Planning, Paramount Pictures"],
  ]),

  // ─────────────────────────────── 2018–2019 ───────────────────────────────
  ...group("2018–2019", "Investment Banking", "Full-Time", [
    ["Neeraj Devulapalli", "Goldman Sachs (New York)"],
    ["Jonathan Liu", "Citi (New York)"],
    ["Vinny Sanagala", "Bank of America (Los Angeles)"],
    ["Timo Yi", "PJT Partners (San Francisco)"],
    ["Henry Bowers", "Credit Suisse (London)"],
  ]),
  ...group("2018–2019", "Investment Banking", "Internship", [
    ["Ellen Chang", "Morgan Stanley (Los Angeles)"],
  ]),
  ...group("2018–2019", "Technology", "Full-Time", [
    ["Lily Vo", "Finance, Amazon"],
    ["Alex Lew", "Finance, Intel"],
  ]),
  ...group("2018–2019", "Technology", "Internship", [
    ["Jack Zhang", "Software Engineering, Amazon"],
    ["Kyler Ashimine", "Finance, Facebook"],
    ["Cameron Khalvati", "Product Marketing, Atlassian"],
    ["Yao Lin", "Self-Serve Ads Marketing, Twitter"],
  ]),
  ...group("2018–2019", "Consulting", "Full-Time", [
    ["Emma Lin", "Deloitte (Los Angeles)"],
    ["Annie Choi", "Accenture (Los Angeles)"],
    ["Katyana Nguyen", "ZS Associates (Los Angeles)"],
    ["Andrew Huang", "ZS Associates (Los Angeles)"],
  ]),
  ...group("2018–2019", "Consulting", "Internship", [
    ["Karina Finn", "Bain & Company (San Francisco)"],
    ["Robbie Gallaher", "Bain & Company (Los Angeles)"],
    ["Ali Heera", "Deloitte (Los Angeles)"],
    ["Ryan Olstad", "L.E.K. Consulting (Los Angeles)"],
    ["Eleanor Zhu", "KPMG (Los Angeles)"],
  ]),
  ...group("2018–2019", "Music and Entertainment", "Full-Time", [
    ["Ben Mongkolvipakul", "Finance, Disney"],
    ["Alara Saygi", "Artist Development, Universal Music Group"],
    ["Sena Mawugbe", "Product Marketing Management, Hulu"],
    ["Allison Eng", "Digital Marketing, NBCUniversal"],
  ]),
  ...group("2018–2019", "Music and Entertainment", "Internship", [
    ["Alara Saygi", "Global Streaming Marketing & Analysis, Universal Music Group"],
    ["Stacy Li", "Product Design, Hulu"],
    ["Evan Sentoso", "Financial Planning & Analysis, NBCUniversal"],
    ["Yao Lin", "Market Research, Paramount Pictures"],
  ]),
  ...group("2018–2019", "Other", "Internship", [
    ["Prachit Bhike", "Private Equity, Oaktree Capital Management"],
  ]),

  // ─────────────────────────────── 2017–2018 ───────────────────────────────
  ...group("2017–2018", "Investment Banking", "Full-Time", [
    ["Christopher Tran", "Bank of America (Los Angeles)"],
    ["Samy Masilamani", "Wells Fargo (Los Angeles)"],
  ]),
  ...group("2017–2018", "Investment Banking", "Internship", [
    ["Neeraj Devulapalli", "Goldman Sachs (New York)"],
    ["Jonathan Liu", "Citi (New York)"],
    ["Vinny Sanagala", "Bank of America (Los Angeles)"],
    ["Timo Yi", "J.P. Morgan (San Francisco)"],
    ["Henry Bowers", "Credit Suisse (London)"],
  ]),
  ...group("2017–2018", "Technology", "Full-Time", [
    ["Steven Tran", "Software Engineering, Blackberry"],
    ["July Lim", "Business Development, Oracle"],
    ["Richard Kang", "Growth Strategy & Operations, Uber"],
    ["Aditya Seshadri", "Finance, Amazon"],
    ["Isabella Salazar", "Finance, Intel"],
  ]),
  ...group("2017–2018", "Technology", "Internship", [
    ["Isabella Salazar", "Finance, Intel"],
    ["Ryan Olstad", "Finance, Microsoft"],
    ["Emma Lin", "Business Analyst, Twitter"],
    ["Kyler Ashimine", "Finance, Experian"],
    ["Timo Yi", "Financial Planning & Analysis, CrowdStrike"],
  ]),
  ...group("2017–2018", "Consulting", "Full-Time", [
    ["Daniel Sun", "Bain & Company (Los Angeles)"],
    ["Erin Cheung", "Deloitte (Los Angeles)"],
    ["Weilly Tong", "Deloitte (Los Angeles)"],
    ["Isaac Hung", "EY-Parthenon (Los Angeles)"],
  ]),
  ...group("2017–2018", "Consulting", "Internship", [
    ["Katyana Nguyen", "ZS Associates (Los Angeles)"],
  ]),
  ...group("2017–2018", "Music and Entertainment", "Full-Time", [
    ["Andrew Cheng", "Videographer, GQ"],
    ["Allison Hsu", "Marketing, Interscope Records"],
  ]),
  ...group("2017–2018", "Music and Entertainment", "Internship", [
    ["Sena Mawugbe", "Product Marketing Management, Hulu"],
    ["Sena Mawugbe", "Product Management, Hulu"],
    ["Ben Mongkolvipakul", "Consumer Insight, Measurement, and Analytics, Disney"],
    ["Stacy Li", "Product Design, Disney"],
    ["Calvin Liu", "Financial Planning & Analysis, NBCUniversal"],
    ["Robbie Gallaher", "Financial Planning & Analysis, NBCUniversal"],
    ["Giulia Sperandio", "Financial Planning & Analysis, Warner Bros. Entertainment"],
  ]),

  // ─────────────────────────────── 2016–2017 ───────────────────────────────
  ...group("2016–2017", "Investment Banking", "Full-Time", [
    ["In Kwon", "Bank of America (Los Angeles)"],
    ["Sagar Desai", "Citi (Los Angeles)"],
    ["Fangfei Li", "J.P. Morgan (San Francisco)"],
  ]),
  ...group("2016–2017", "Investment Banking", "Internship", [
    ["Christopher Tran", "Bank of America (Los Angeles)"],
    ["Samy Masilamani", "Wells Fargo (Los Angeles)"],
  ]),
  ...group("2016–2017", "Technology", "Full-Time", [
    ["Christopher Yoon", "Product Management, Riot Games"],
    ["Sahib Bathla", "Business Analyst, Intel"],
  ]),
  ...group("2016–2017", "Technology", "Internship", [
    ["Steven Tran", "Software Engineering, Blackberry"],
    ["Aditya Seshadri", "Finance, Amazon"],
    ["Emma Lin", "Manufacturing Projects, Tesla"],
    ["Isabella Salazar", "Finance, Intel"],
  ]),
  ...group("2016–2017", "Consulting", "Full-Time", [
    ["Shannon Wu", "L.E.K. Consulting (Los Angeles)"],
    ["Jiyeon Lee", "Accenture (Los Angeles)"],
    ["Wesley Yen", "Mercer (Los Angeles)"],
    ["Stephen Pham", "ZS Associates (Los Angeles)"],
    ["Jane Lee", "L.E.K. Consulting (Chicago)"],
  ]),
  ...group("2016–2017", "Consulting", "Internship", [
    ["Daniel Sun", "Bain & Company (Los Angeles)"],
    ["Weilly Tong", "Mercer (Los Angeles)"],
    ["Erin Cheung", "L.E.K. Consulting (Chicago)"],
  ]),
  ...group("2016–2017", "Music and Entertainment", "Full-Time", [
    ["Candace Kim", "Strategy, Lionsgate"],
    ["Sue Chang", "Distribution Coordinator, MGM Studios"],
  ]),
  ...group("2016–2017", "Music and Entertainment", "Internship", [
    ["Allison Hsu", "Finance, Interscope Records"],
  ]),

  // ─────────────────────────────── 2015–2016 ───────────────────────────────
  ...group("2015–2016", "Investment Banking", "Full-Time", [
    ["William Xiao", "Goldman Sachs (Los Angeles)"],
    ["Nicholas Yun", "Citi (Los Angeles)"],
    ["Soung Jae Baek", "Houlihan Lokey (Los Angeles)"],
    ["Ken Ng", "Perella Weinberg Partners (San Francisco)"],
  ]),
  ...group("2015–2016", "Investment Banking", "Internship", [
    ["In Kwon", "Bank of America (Los Angeles)"],
    ["Sagar Desai", "Citi (Los Angeles)"],
    ["Fangfei Li", "J.P. Morgan (San Francisco)"],
  ]),
  ...group("2015–2016", "Technology", "Full-Time", [
    ["Joonbo Rhie", "Data Science, Comscore"],
  ]),
  ...group("2015–2016", "Technology", "Internship", [
    ["Sahib Bathla", "Business Analyst, Intel"],
    ["Richard Kang", "Operations, Tesla"],
  ]),
  ...group("2015–2016", "Consulting", "Full-Time", [
    ["Kelsey Chan", "Bain & Company (Los Angeles)"],
    ["Brittney To", "Accenture (Los Angeles)"],
    ["Rocco Rizzo", "Deloitte (Los Angeles)"],
    ["Vivian Wu", "ZS Associates (Los Angeles)"],
  ]),
  ...group("2015–2016", "Consulting", "Internship", [
    ["Stephen Pham", "ZS Associates (Los Angeles)"],
    ["Wesley Yen", "Mercer (Los Angeles)"],
  ]),
  ...group("2015–2016", "Music and Entertainment", "Internship", [
    ["Candace Kim", "Strategy, Disney"],
    ["Sue Chang", "Marketing, NBCUniversal"],
    ["Allison Hsu", "Corporate Communications, William Morris Endeavor"],
  ]),

  // ─────────────────────────────── 2014–2015 ───────────────────────────────
  ...group("2014–2015", "Investment Banking", "Full-Time", [
    ["Michael Pyon", "Houlihan Lokey (Los Angeles)"],
  ]),
  ...group("2014–2015", "Investment Banking", "Internship", [
    ["William Xiao", "Goldman Sachs (Los Angeles)"],
    ["Soung Jae Baek", "Houlihan Lokey (Los Angeles)"],
    ["Nicholas Yun", "Macquarie (Los Angeles)"],
    ["Ken Ng", "Perella Weinberg Partners (San Francisco)"],
  ]),
  ...group("2014–2015", "Technology", "Full-Time", [
    ["Thomas Barber", "Manufacturing Operations, Tesla"],
  ]),
  ...group("2014–2015", "Consulting", "Internship", [
    ["Kelsey Chan", "Bain & Company (Los Angeles)"],
    ["Vivian Wu", "ZS Associates (Los Angeles)"],
  ]),
  ...group("2014–2015", "Music and Entertainment", "Internship", [
    ["Careese Kwok", "Campaign Coordinator, Hulu"],
  ]),
  ...group("2014–2015", "Other", "Full-Time", [
    ["Michael Carlson", "Sourcing, Northrop Grumman"],
  ]),
  ...group("2014–2015", "Other", "Internship", [
    ["Vivian Pan", "Audit & Compliance, NASA"],
  ]),
];

/** Distinct years in display order (most recent first, as the source is ordered). */
export const YEARS: string[] = Array.from(new Set(offers.map((o) => o.year)));
