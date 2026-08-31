// Full active brothers roster, grouped by pledge class. Transcribed verbatim from
// the build brief (Section 7.3 / Appendix B). Grad years are the "Class of" values.
// The two rosters (Leadership and Actives) are intentionally kept independent — 11
// names appear on both, which is expected (exec board members are also actives).
//
// LinkedIn URLs come from a chapter-provided list ordered to match this exact
// roster order (Section 8 supplement). Beta Kappa's list had 3 gaps (Daniel Xing,
// Iris Zeng, Kelly Hu); those three were supplied separately and matched by name.

export interface Active {
  name: string;
  gradYear: number;
  linkedin: string;
  /** Same file used on the Leadership page for the 11 who are also officers. */
  photo?: string;
}

export interface PledgeClass {
  name: string;
  members: Active[];
}

const m = (
  name: string,
  gradYear: number,
  linkedin: string,
  photo?: string,
): Active => ({ name, gradYear, linkedin, photo });

export const pledgeClasses: PledgeClass[] = [
  {
    name: "Beta Delta Class",
    members: [
      m(
        "Apurv Gupta",
        2027,
        "https://www.linkedin.com/in/apurv--gupta/",
        "/Headshots/cropped/Apurv Gupta.jpg",
      ),
      m("Brandi Burnell", 2026, "https://www.linkedin.com/in/brandi-burnell/"),
      m("Christina Ahn", 2027, "https://www.linkedin.com/in/christinaahn1/"),
      m("Hayden Selvakumar", 2027, "https://www.linkedin.com/in/hayden-selvakumar23/"),
      m("Kristen Yu", 2027, "https://www.linkedin.com/in/kristen-yu-8b8a16270/"),
      m("Len Moran", 2027, "https://www.linkedin.com/in/len-moran-574b23293/"),
      m("Loki Cheema", 2027, "https://www.linkedin.com/in/loki-cheema/"),
      m("Neha Kondeti", 2027, "https://www.linkedin.com/in/nehakondeti/"),
      m("Sara Tatke", 2027, "https://www.linkedin.com/in/sara-tatke/"),
      m("Yuji Fukuda", 2027, "https://www.linkedin.com/in/yfukuda27/"),
    ],
  },
  {
    name: "Beta Epsilon Class",
    members: [
      m("Aidan Choi", 2027, "https://www.linkedin.com/in/aidanchoi/"),
      m("Alice Lee", 2027, "https://www.linkedin.com/in/alicehyoeunlee/"),
      m("Dlency Zheng", 2027, "https://www.linkedin.com/in/dlencyzheng/"),
      m("Joseph Yi", 2025, "https://www.linkedin.com/in/josephyyi/"),
      m("Kayla Kim", 2027, "https://www.linkedin.com/in/kayla-kim-0a79632aa/"),
      m("Manav Bedi", 2027, "https://www.linkedin.com/in/manav-bedi/"),
      m("Nikolas Marmershteyn", 2027, "https://www.linkedin.com/in/nikolasmarmer/"),
      m("Ramona Pyke", 2026, "https://www.linkedin.com/in/rpyke/"),
      m("Samuel Oh", 2026, "https://www.linkedin.com/in/samueloh123/"),
      m("Shelley Weng", 2026, "https://www.linkedin.com/in/shelleyweng/"),
      m("Yuvraj Chadha", 2027, "https://www.linkedin.com/in/yuvichadha/"),
    ],
  },
  {
    name: "Beta Zeta Class",
    members: [
      m("Andrew Jin", 2028, "https://www.linkedin.com/in/andrew-jin-/"),
      m("Cameron Loh", 2028, "https://www.linkedin.com/in/cloh1201/"),
      m("Chloe Kang", 2028, "https://www.linkedin.com/in/chloe-kang-234292250/"),
      m("Dome Srithong", 2028, "https://www.linkedin.com/in/dome-srithong/"),
      m("Dylan Loh", 2028, "https://www.linkedin.com/in/dylan-loh1201/"),
      m("Hana Ton", 2027, "https://www.linkedin.com/in/hana-ton/"),
      m("Isaiah Bordador", 2028, "https://www.linkedin.com/in/isaiah-bordador/"),
      m("Megan Ng", 2027, "https://www.linkedin.com/in/meganng23/"),
      m("Nelson Zhao", 2027, "https://www.linkedin.com/in/nelsonzhao/"),
      m("Vlad Plyushchenko", 2028, "https://www.linkedin.com/in/vladplyushchenko/"),
    ],
  },
  {
    name: "Beta Eta Class",
    members: [
      m("Alain Izawa", 2028, "https://www.linkedin.com/in/alain-izawa/"),
      m(
        "Brenda Nguyen",
        2028,
        "https://www.linkedin.com/in/bbrendanguyen/",
        "/Headshots/cropped/Brenda Nguyen.jpg",
      ),
      m("Evan Hsu", 2028, "https://www.linkedin.com/in/evan-hsu2006/"),
      m(
        "Hugo Hiramatsu",
        2028,
        "https://www.linkedin.com/in/hugo-hiramatsu/",
        "/Headshots/cropped/Hugo Hiramatsu.jpg",
      ),
      m("Jeffrey Chang", 2028, "https://www.linkedin.com/in/jeffrey-chang06/"),
      m("Jun Moon", 2028, "https://www.linkedin.com/in/junhmoon/"),
      m("Melissa Shi", 2028, "https://www.linkedin.com/in/melissaqshi/"),
      m("Nikhil Mummalaneni", 2027, "https://www.linkedin.com/in/nikhil-mummalaneni/"),
      m("Paul Thomsak", 2028, "https://www.linkedin.com/in/paul-thomsak-23386931a/"),
      m("Rebecca Chang", 2028, "https://www.linkedin.com/in/rebeccachang14/"),
      m(
        "Ryan Chao",
        2028,
        "https://www.linkedin.com/in/ryan-chao06/",
        "/Headshots/cropped/Ryan Chao.jpg",
      ),
      m(
        "Ryan Chia",
        2028,
        "https://www.linkedin.com/in/ryanchia1/",
        "/Headshots/cropped/Ryan Chia.jpg",
      ),
      m("Taey Traisorat", 2028, "https://www.linkedin.com/in/primtraisorat/"),
      m(
        "Veronica Yang",
        2028,
        "https://www.linkedin.com/in/veronicayang23/",
        "/Headshots/cropped/Veronica Yang.jpg",
      ),
    ],
  },
  {
    name: "Beta Theta Class",
    members: [
      m("Carys Wilson", 2029, "https://www.linkedin.com/in/carys-wilson/"),
      m(
        "Vikram Dawar",
        2029,
        "https://www.linkedin.com/in/vikramdawar/",
        "/Headshots/cropped/Vikram Dawar.jpg",
      ),
      m("Mili Shah", 2029, "https://www.linkedin.com/in/mili-s/"),
      m("Jasmin Kwon", 2029, "https://www.linkedin.com/in/jasminkwon/"),
      m("Nikhil Vijay", 2029, "https://www.linkedin.com/in/nikhilvijay-/"),
      m("Aarnav Yedla", 2029, "https://www.linkedin.com/in/aarnav-yedla/"),
      m("Aaron Knibbe", 2028, "https://www.linkedin.com/in/aaron-knibbe/"),
      m("Lawrence Jia", 2029, "https://www.linkedin.com/in/ljia405/"),
    ],
  },
  {
    name: "Beta Kappa Class",
    members: [
      m("Jin Kim", 2029, "https://www.linkedin.com/in/jin-kim-5259b7386/"),
      m(
        "Kijoo Song",
        2029,
        "https://www.linkedin.com/in/kijoosong/",
        "/Headshots/cropped/Kijoo Song.jpg",
      ),
      m(
        "Kiera Wang",
        2028,
        "https://www.linkedin.com/in/kierawang/",
        "/Headshots/cropped/Kiera Wang.jpg",
      ),
      m("Kevin Yang", 2029, "https://www.linkedin.com/in/kevinyuwenyang/"),
      m(
        "Daniel Xing",
        2029,
        "https://www.linkedin.com/in/dxing01/",
        "/Headshots/cropped/Daniel Xing.jpg",
      ),
      m("Iris Zeng", 2029, "https://www.linkedin.com/in/iristyzeng/"),
      m("Kelly Hu", 2028, "https://www.linkedin.com/in/kelly-grace-hu/"),
      m("Aaron Teng", 2029, "https://www.linkedin.com/in/aaron-teng04/"),
      m(
        "Yujin Baik",
        2029,
        "https://www.linkedin.com/in/yujin-baik/",
        "/Headshots/cropped/Yujin Baik.jpg",
      ),
      m("Kenneth Lee", 2029, "https://www.linkedin.com/in/kennethponienlee/"),
      m("Sahil Reddy", 2029, "https://www.linkedin.com/in/sahil-reddy-012b9235b/"),
      m("Eleanor Lee", 2029, "https://www.linkedin.com/in/eleanor-lee06/"),
    ],
  },
];
