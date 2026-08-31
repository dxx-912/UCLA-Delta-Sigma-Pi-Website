// 2026-2027 Executive Board. Headshots and bios pending — placeholders are used
// until real photos/descriptions are provided (Section 8). Order follows the
// board roster provided by the chapter.
//
// `linkedin` is cross-referenced by name against data/actives.ts (11+ officers
// are also active brothers) rather than a second chapter-provided list.

export interface Officer {
  name: string;
  title: string;
  bio: string;
  /** Path under /Headshots/cropped. Undefined while placeholdered. */
  photo?: string;
  linkedin?: string;
}

/** Exec board term label — a one-line edit each term (see Section 8 / Note 14). */
export const currentTerm = "2026-2027";

export const leadership: Officer[] = [
  {
    name: "Ryan Chia",
    title: "President",
    bio: "3rd-year student from Orange County, California studying Statistics and Data Science with a minor in Mathematics. Next summer, Ryan will join Bank of America as an Investment Banking Summer Analyst in San Francisco, following this past summer as a Corporate Development Analyst at Niagara Bottling in Los Angeles. Ryan is a former Eagle Scout, works for UCLA Athletics, and enjoys trying new foods.",
    photo: "/Headshots/cropped/Ryan Chia.jpg",
    linkedin: "https://www.linkedin.com/in/ryanchia1/",
  },
  {
    name: "Ryan Chao",
    title: "President",
    bio: "3rd-year student from Massachusetts studying Economics and Cognitive Science. This past summer, Ryan was at JPMorgan's Commercial and Investment Bank in New York, and the previous summer at Kaiser Permanente in Hawaii. Ryan is the External Vice President for Bruin Strategy Network and a Manager for the UBS Technology Committee, and enjoys spicy foods, scenic views, a crisp Diet Coke, and sharing stories with friends.",
    photo: "/Headshots/cropped/Ryan Chao.jpg",
    linkedin: "https://www.linkedin.com/in/ryan-chao06/",
  },
  {
    name: "Kijoo Song",
    title: "Director of Finance",
    bio: "2nd-year student from New York studying Statistics & Data Science. This past summer, Kijoo worked as a GTM Strategy Intern for Blue Modern Advisory, and as a product manager for a healthtech startup. Kijoo is part of 180 Degrees Consulting, and his hobbies include bowling, movies, karaoke, and BeReal.",
    photo: "/Headshots/cropped/Kijoo Song.jpg",
    linkedin: "https://www.linkedin.com/in/kijoosong/",
  },
  {
    name: "Eleanor Lee",
    title: "Director of Finance",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/eleanor-lee06/",
  },
  {
    name: "Nikhil Mummalenneni",
    title: "VP Pledge Education",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/nikhil-mummalaneni/",
  },
  {
    name: "Apurv Gupta",
    title: "VP Pledge Education",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/apurv--gupta/",
  },
  {
    name: "Jun Moon",
    title: "VP Pledge Education",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/junhmoon/",
  },
  {
    name: "Dylan Loh",
    title: "Senior Vice President",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/dylan-loh1201/",
  },
  {
    name: "Iris Zeng",
    title: "Director of Brotherhood",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/iristyzeng/",
  },
  {
    name: "Cameron Loh",
    title: "VP Scholarship & Awards",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/cloh1201/",
  },
  {
    name: "Taey Traisorat",
    title: "VP Chapter Operations",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/primtraisorat/",
  },
  {
    name: "Brenda Nguyen",
    title: "VP Chapter Operations",
    bio: "3rd-year student from Huntington Beach, CA studying Economics with a Real Estate Minor. Brenda is pursuing a career in real estate finance and interned at CIM Group last summer as a Real Estate Investments Intern. In her free time, Brenda loves golfing and exploring new food/coffee shops.",
    photo: "/Headshots/cropped/Brenda Nguyen.jpg",
    linkedin: "https://www.linkedin.com/in/bbrendanguyen/",
  },
  {
    name: "Veronica Yang",
    title: "Director of Marketing",
    bio: "3rd-year student from the Bay Area studying Cognitive Science. This summer, Veronica interned in Digital Marketing at Corsair, and last summer she worked in Product Marketing at ASUS. Outside of school, Veronica enjoys baking, exploring cafés, attending music festivals, and playing badminton.",
    photo: "/Headshots/cropped/Veronica Yang.jpg",
    linkedin: "https://www.linkedin.com/in/veronicayang23/",
  },
  {
    name: "Kelly Hu",
    title: "Director of Marketing",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/kelly-grace-hu/",
  },
  {
    name: "Daniel Xing",
    title: "Director of Marketing",
    bio: "2nd-year student from Toronto studying Economics with a Data Science Engineering Minor. This past summer, Daniel interned at Nobel Sustainability Trust. Daniel is the Director of Marketing for International Business For Bruins and Director of Digital Media for Bruins in Business Association. Daniel enjoys weightlifting, running, and playing volleyball in his free time. ",
    photo: "/Headshots/cropped/Daniel Xing.jpg",
    linkedin: "https://www.linkedin.com/in/dxing01/",
  },
  {
    name: "Kiera Wang",
    title: "VP Community Service",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/kierawang/",
  },
  {
    name: "Hugo Hiramatsu",
    title: "Chancellor",
    bio: "3rd-year student from Tokyo studying Mechanical Engineering. This past summer, Hugo interned as a Product Management intern at Smartsheet in Seattle. Hugo's hobbies include hiking, surfing, and playing basketball.",
    photo: "/Headshots/cropped/Hugo Hiramatsu.jpg",
    linkedin: "https://www.linkedin.com/in/hugo-hiramatsu/",
  },
  {
    name: "Vikram Dawar",
    title: "Chancellor",
    bio: "2nd-year student from the Bay Area studying Business Economics and Cognitive Science. This past summer, Vikram interned at Carrum Health in San Francisco. Outside of his interest in healthcare and technology, Vikram enjoys playing pickleball, hunting for the best dessert lattes, traveling, and trophy-farming on Brawl Stars.",
    photo: "/Headshots/cropped/Vikram Dawar.jpg",
    linkedin: "https://www.linkedin.com/in/vikramdawar/",
  },
  {
    name: "Yujin Baik",
    title: "VP Alumni Relations",
    bio: "2nd-year student from South Korea studying Business Economics. Yujin is interested in pursuing a career in investment banking. Yujin's hobbies include weightlifting, golf, basketball, and volleyball.",
    photo: "/Headshots/cropped/Yujin Baik.jpg",
    linkedin: "https://www.linkedin.com/in/yujin-baik/",
  },
  {
    name: "Alain Izawa",
    title: "VP Professional Activities",
    bio: "Bio coming soon.",
    linkedin: "https://www.linkedin.com/in/alain-izawa/",
  },
];
