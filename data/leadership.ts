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
    bio: "3rd-year student from Orange County, California studying Statistics and Data Science and minoring in Mathematics. Next summer, Ryan will join Bank of America as an Investment Banking Analyst in San Francisco, following this past summer as a Corporate Development Analyst at Niagara Bottling. Ryan is a former Eagle Scout, works for UCLA Athletics, and enjoys trying new foods.",
    photo: "/Headshots/cropped/Ryan Chia.jpg",
    linkedin: "https://www.linkedin.com/in/ryanchia1/",
  },
  {
    name: "Ryan Chao",
    title: "President",
    bio: "3rd-year student from Massachusetts studying Economics and Cognitive Science. This summer, Ryan interned at JPMorgan's Commercial and Investment Bank in New York, and the previous summer at Kaiser Permanente in Hawaii. Ryan is the External Vice President for Bruin Strategy Network and the Manager for the UBS Technology Committee, and enjoys spicy foods, scenic views, a crisp Diet Coke, and sharing stories with friends.",
    photo: "/Headshots/cropped/Ryan Chao.jpg",
    linkedin: "https://www.linkedin.com/in/ryan-chao06/",
  },
  {
    name: "Nikhil Mummalenneni",
    title: "VP Pledge Education",
    bio: "3rd-year student from San Diego, CA. This summer, he interned as a growth equity analyst at General Atlantic, and last summer at Sixth Street. Nikhil is also the Vice President of Bruin Asset Management, UCLA's Undergraduate Business Society, and is Co-President of Bruin Private Equity. He loves to play basketball and poker in his free time.",
    photo: "/Headshots/cropped/Nikhil Mummalaneni.jpg",
    linkedin: "https://www.linkedin.com/in/nikhil-mummalaneni/",
  },
  {
    name: "Apurv Gupta",
    title: "VP Pledge Education",
    bio: "4th-year student from Cupertino, CA studying Statistics and Data Science. Next summer, he will join Perella Weinberg Partners in New York as an Investment Banking Analyst focused on M&A. Apurv is also in Bruin Asset Management and Global Research and Consulting Group, and his hobbies include playing pickleball, watching movies, and eating new food.",
    photo: "/Headshots/cropped/Apurv Gupta.jpg",
    linkedin: "https://www.linkedin.com/in/apurv--gupta/",
  },
  {
    name: "Jun Moon",
    title: "VP Pledge Education",
    bio: "Bio coming soon.",
    photo: "/Headshots/cropped/Jun Moon.jpg",
    linkedin: "https://www.linkedin.com/in/junhmoon/",
  },
  {
    name: "Veronica Yang",
    title: "Director of Marketing",
    bio: "3rd-year student from the Bay Area studying Cognitive Science. This summer, Veronica interned in Digital Marketing at Corsair, and last summer she worked in Product Marketing at ASUS. Outside of school, Veronica enjoys baking, exploring cafés, attending music festivals, and playing badminton.",
    photo: "/Headshots/cropped/Veronica Yang.jpg",
    linkedin: "https://www.linkedin.com/in/veronicayang23/",
  },
  {
    name: "Daniel Xing",
    title: "Director of Marketing",
    bio: "2nd-year student from Toronto studying Economics with a Data Science Engineering Minor. This past summer, Daniel interned at Nobel Sustainability Trust. Daniel is the Director of Marketing for International Business For Bruins and Director of Digital Media for Bruins in Business Association. Daniel enjoys weightlifting, running, and aura farming in his free time. ",
    photo: "/Headshots/cropped/Daniel Xing.jpg",
    linkedin: "https://www.linkedin.com/in/dxing01/",
  },
  {
    name: "Kelly Hu",
    title: "Director of Marketing",
    bio: "Bio coming soon.",
    photo: "/Headshots/cropped/Kelly Hu.jpg",
    linkedin: "https://www.linkedin.com/in/kelly-grace-hu/",
  },
  {
    name: "Brenda Nguyen",
    title: "VP Chapter Operations",
    bio: "3rd-year student from Huntington Beach, CA studying Economics with a Real Estate Minor. Brenda is pursuing a career in real estate finance and interned at CIM Group this summer as a Real Estate Investments Intern. In her free time, Brenda loves golfing and exploring new food/coffee shops.",
    photo: "/Headshots/cropped/Brenda Nguyen.jpg",
    linkedin: "https://www.linkedin.com/in/bbrendanguyen/",
  },
  {
    name: "Taey Traisorat",
    title: "VP Chapter Operations",
    bio: "Bio coming soon.",
    photo: "/Headshots/cropped/Taey Traisorat.jpg",
    linkedin: "https://www.linkedin.com/in/primtraisorat/",
  },
  {
    name: "Dylan Loh",
    title: "Senior Vice President",
    bio: "Bio coming soon.",
    photo: "/Headshots/cropped/Dylan Loh.jpg",
    linkedin: "https://www.linkedin.com/in/dylan-loh1201/",
  },
  {
    name: "Cameron Loh",
    title: "VP Scholarship & Awards",
    bio: "Bio coming soon.",
    photo: "/Headshots/cropped/Cameron Loh.jpg",
    linkedin: "https://www.linkedin.com/in/cloh1201/",
  },
  {
    name: "Iris Zeng",
    title: "Director of Brotherhood",
    bio: "Bio coming soon.",
    photo: "/Headshots/cropped/Iris Zeng.jpg",
    linkedin: "https://www.linkedin.com/in/iristyzeng/",
  },
  {
    name: "Kiera Wang",
    title: "VP Community Service",
    bio: "3rd-year student from Taipei, Shanghai & Beijing double majoring in Cognitive Science and Economics. She spent this past summer as an AI & Data Consulting intern at Deloitte. At UCLA, she works in the Career Strategy Team at the Anderson School of Management. Apart from professional aspirations, she enjoys going on dates with Martin from CORTIS, James from CORTIS, and Keonho from CORTIS.",
    photo: "/Headshots/cropped/Kiera Wang.jpg",
    linkedin: "https://www.linkedin.com/in/kierawang/",
  },
  {
    name: "Alain Izawa",
    title: "VP Professional Activities",
    bio: "Bio coming soon.",
    photo: "/Headshots/cropped/Alain Izawa.jpg",
    linkedin: "https://www.linkedin.com/in/alain-izawa/",
  },
  {
    name: "Yujin Baik",
    title: "VP Alumni Relations",
    bio: "2nd-year student from South Korea studying Business Economics. This summer, Yujin interned at MD Global Partners in New York. Yujin is interested in pursuing a career in investment banking. Yujin's hobbies include weightlifting, golf, basketball, and volleyball.",
    photo: "/Headshots/cropped/Yujin Baik.jpg",
    linkedin: "https://www.linkedin.com/in/yujin-baik/",
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
    bio: "2nd-year Economics and Cognitive Science student from Los Angeles. She spent her summer as an investment banking intern at The Amazing Group while building her sustainable swimwear brand, Deadstock Swim. Apart from her professional identity, she is an excellent dancer, thrift goddess, and NeeDoh aficionado.",
    photo: "/Headshots/cropped/Eleanor Lee.jpg",
    linkedin: "https://www.linkedin.com/in/eleanor-lee06/",
  },
  {
    name: "Hugo Hiramatsu",
    title: "Chancellor",
    bio: "3rd-year student from Tokyo studying Mechanical Engineering. This summer, Hugo interned as a Product Management intern at Smartsheet in Seattle. Hugo's hobbies include hiking, surfing, and playing basketball.",
    photo: "/Headshots/cropped/Hugo Hiramatsu.jpg",
    linkedin: "https://www.linkedin.com/in/hugo-hiramatsu/",
  },
  {
    name: "Vikram Dawar",
    title: "Chancellor",
    bio: "2nd-year student from the Bay Area studying Business Economics and Cognitive Science. This summer, Vikram interned at Carrum Health in San Francisco. Outside of his interest in healthcare and technology, Vikram enjoys playing pickleball, hunting for the best dessert lattes, traveling, and trophy-farming on Brawl Stars.",
    photo: "/Headshots/cropped/Vikram Dawar.jpg",
    linkedin: "https://www.linkedin.com/in/vikramdawar/",
  },
];
