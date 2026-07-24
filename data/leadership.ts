// Winter/Spring 2026 Executive Board. Bios transcribed verbatim from the build
// brief (Section 7.2). Modeled as data so future officers can update it without
// editing layout code (Section 8). Order follows the Leadership page screenshot.

export interface Officer {
  name: string;
  title: string;
  bio: string;
}

/** Exec board term label — a one-line edit each term (see Section 8 / Note 14). */
export const currentTerm = "Winter/Spring 2026";

export const leadership: Officer[] = [
  {
    name: "Nikhil Mummalaneni",
    title: "President",
    bio: "Third-year from San Diego, CA. Pursuing a career in Private Equity. Also part of UCLA's Undergraduate Business Society, Bruin Asset Management, and Bruin Private Equity. Loves basketball and poker.",
  },
  {
    name: "Vlad Plyushchenko",
    title: "Senior Vice President",
    bio: "Third-year from the UK. Computer Science major pursuing software engineering and project management. Enjoys traveling with friends and playing poker.",
  },
  {
    name: "Christina Ahn",
    title: "Vice President, Chapter Operations",
    bio: "Third-year from Upper Saddle River, NJ. Pursuing a career in sports business. Loves tennis, thrifting, indie rock, and exploring new matcha spots.",
  },
  {
    name: "Len Moran",
    title: "Co-Chancellor",
    bio: "Third-year from Los Angeles, CA. Pursuing commercial real estate. Likes to ski, tend to succulents, and test new recipes with his Ninja blender.",
  },
  {
    name: "Andrew Jin",
    title: "Co-Chancellor",
    bio: "Second-year Business Economics major from Toronto, Canada. Pursuing investment banking. Enjoys basketball, BFit, poker, and new music.",
  },
  {
    name: "Ryan Chao",
    title: "Vice President, Finance",
    bio: "Second-year from Newton, Massachusetts. Pursuing strategy operations and product growth. Likes trying new ice cream flavors, ranking offbrand items, and testing colognes.",
  },
  {
    name: "Carys Wilson",
    title: "Co-Director of Marketing",
    bio: "First-year from Los Angeles. Pursuing a career in marketing. Enjoys baking, video editing, and hanging out with friends.",
  },
  {
    name: "Taey Traisorat",
    title: "Co-Director of Marketing",
    bio: "Second-year Economics and Cognitive Science double major from Bangkok, Thailand. Pursuing a career in Product. Enjoys thrifting and eating out.",
  },
  {
    name: "Lawrence Jia",
    title: "Director of Brotherhood",
    bio: "First-year Economics major from the Bay Area. Pursuing investment banking and venture capital. Plays basketball, films food review videos, and works out.",
  },
  {
    name: "Vikram Dawar",
    title: "Vice President, Alumni Relations",
    bio: "First-year Business Economics and Statistics & Data Science double major from Hayward, CA. Pursuing Consulting. Enjoys playing Block Blast, eating, and traveling.",
  },
  {
    name: "Jasmin Kwon",
    title: "Vice President, Professional Activities",
    bio: "First-year Business Economics major from Irvine, CA. Pursuing finance and banking. Enjoys Corepower and pilates.",
  },
  {
    name: "Aaron Knibbe",
    title: "Vice President, Scholarship & Awards",
    bio: "Second-year Business Economics major from Grand Rapids, Michigan. Pursuing private banking and asset management. Enjoys soccer, tennis, traveling, and music.",
  },
  {
    name: "Mili Shah",
    title: "Vice President, Community Service",
    bio: "First-year Math of Computation major from Irvine, CA. Interested in tech. Enjoys pickleball, guitar, and matcha.",
  },
];
