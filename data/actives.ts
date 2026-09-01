// Full active brothers roster, grouped by pledge class. Transcribed verbatim from
// the build brief (Section 7.3 / Appendix B). Grad years are the "Class of" values.
// The two rosters (Leadership and Actives) are intentionally kept independent — 11
// names appear on both, which is expected (exec board members are also actives).
//
// Members are listed alphabetically within each pledge class, which is the order
// the Actives grid renders them in.
//
// LinkedIn URLs originally came from a chapter-provided list ordered to match the
// roster (Section 8 supplement); each URL now lives on its own member, so
// reordering this file is safe. Beta Kappa's list had 3 gaps (Daniel Xing, Iris
// Zeng, Kelly Hu); those three were supplied separately and matched by name.

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
      m(
        "Brandi Burnell",
        2026,
        "https://www.linkedin.com/in/brandi-burnell/",
        "/Headshots/cropped/Brandi Burnell.jpg",
      ),
      m(
        "Christina Ahn",
        2027,
        "https://www.linkedin.com/in/christinaahn1/",
        "/Headshots/cropped/Christina Ahn.jpg",
      ),
      m(
        "Hayden Selvakumar",
        2027,
        "https://www.linkedin.com/in/hayden-selvakumar23/",
        "/Headshots/cropped/Hayden Selvakumar.jpg",
      ),
      m(
        "Kristen Yu",
        2027,
        "https://www.linkedin.com/in/kristen-yu-8b8a16270/",
        "/Headshots/cropped/Kristen Yu.jpg",
      ),
      m(
        "Len Moran",
        2027,
        "https://www.linkedin.com/in/len-moran-574b23293/",
        "/Headshots/cropped/Len Moran.jpg",
      ),
      m(
        "Loki Cheema",
        2027,
        "https://www.linkedin.com/in/loki-cheema/",
        "/Headshots/cropped/Loki Cheema.jpg",
      ),
      m(
        "Neha Kondeti",
        2027,
        "https://www.linkedin.com/in/nehakondeti/",
        "/Headshots/cropped/Neha Kondeti.jpg",
      ),
      m(
        "Sara Tatke",
        2027,
        "https://www.linkedin.com/in/sara-tatke/",
        "/Headshots/cropped/Sara Tatke.jpg",
      ),
      m(
        "Yuji Fukuda",
        2027,
        "https://www.linkedin.com/in/yfukuda27/",
        "/Headshots/cropped/Yuji Fukuda.jpg",
      ),
    ],
  },
  {
    name: "Beta Epsilon Class",
    members: [
      m(
        "Aidan Choi",
        2027,
        "https://www.linkedin.com/in/aidanchoi/",
        "/Headshots/cropped/Aidan Choi.jpg",
      ),
      m(
        "Alice Lee",
        2027,
        "https://www.linkedin.com/in/alicehyoeunlee/",
        "/Headshots/cropped/Alice Lee.jpg",
      ),
      m(
        "Dlency Zheng",
        2027,
        "https://www.linkedin.com/in/dlencyzheng/",
        "/Headshots/cropped/Dlency Zheng.jpg",
      ),
      m(
        "Joseph Yi",
        2025,
        "https://www.linkedin.com/in/josephyyi/",
        "/Headshots/cropped/Joseph Yi.jpg",
      ),
      m(
        "Kayla Kim",
        2027,
        "https://www.linkedin.com/in/kayla-kim-0a79632aa/",
        "/Headshots/cropped/Kayla Kim.jpg",
      ),
      m(
        "Manav Bedi",
        2027,
        "https://www.linkedin.com/in/manav-bedi/",
        "/Headshots/cropped/Manav Bedi.jpg",
      ),
      m(
        "Nikolas Marmershteyn",
        2027,
        "https://www.linkedin.com/in/nikolasmarmer/",
        "/Headshots/cropped/Nikolas Marmershteyn.jpg",
      ),
      m(
        "Ramona Pyke",
        2026,
        "https://www.linkedin.com/in/rpyke/",
        "/Headshots/cropped/Ramona Pyke.jpg",
      ),
      m(
        "Samuel Oh",
        2026,
        "https://www.linkedin.com/in/samueloh123/",
        "/Headshots/cropped/Samuel Oh.jpg",
      ),
      m(
        "Shelley Weng",
        2026,
        "https://www.linkedin.com/in/shelleyweng/",
        "/Headshots/cropped/Shelley Weng.jpg",
      ),
      m(
        "Yuvraj Chadha",
        2027,
        "https://www.linkedin.com/in/yuvichadha/",
        "/Headshots/cropped/Yuvraj Chadha.jpg",
      ),
    ],
  },
  {
    name: "Beta Zeta Class",
    members: [
      m(
        "Andrew Jin",
        2028,
        "https://www.linkedin.com/in/andrew-jin-/",
        "/Headshots/cropped/Andrew Jin.jpg",
      ),
      m(
        "Cameron Loh",
        2028,
        "https://www.linkedin.com/in/cloh1201/",
        "/Headshots/cropped/Cameron Loh.jpg",
      ),
      m(
        "Chloe Kang",
        2028,
        "https://www.linkedin.com/in/chloe-kang-234292250/",
        "/Headshots/cropped/Chloe Kang.jpg",
      ),
      m(
        "Dome Srithong",
        2028,
        "https://www.linkedin.com/in/dome-srithong/",
        "/Headshots/cropped/Dome Srithong.jpg",
      ),
      m(
        "Dylan Loh",
        2028,
        "https://www.linkedin.com/in/dylan-loh1201/",
        "/Headshots/cropped/Dylan Loh.jpg",
      ),
      m(
        "Hana Ton",
        2027,
        "https://www.linkedin.com/in/hana-ton/",
        "/Headshots/cropped/Hana Ton.jpg",
      ),
      m(
        "Isaiah Bordador",
        2028,
        "https://www.linkedin.com/in/isaiah-bordador/",
        "/Headshots/cropped/Isaiah Bordador.jpg",
      ),
      m(
        "Megan Ng",
        2027,
        "https://www.linkedin.com/in/meganng23/",
        "/Headshots/cropped/Megan Ng.jpg",
      ),
      m(
        "Nelson Zhao",
        2027,
        "https://www.linkedin.com/in/nelsonzhao/",
        "/Headshots/cropped/Nelson Zhao.jpg",
      ),
      m(
        "Vlad Plyushchenko",
        2028,
        "https://www.linkedin.com/in/vladplyushchenko/",
        "/Headshots/cropped/Vlad Plyushchenko.jpg",
      ),
    ],
  },
  {
    name: "Beta Eta Class",
    members: [
      m(
        "Alain Izawa",
        2028,
        "https://www.linkedin.com/in/alain-izawa/",
        "/Headshots/cropped/Alain Izawa.jpg",
      ),
      m(
        "Brenda Nguyen",
        2028,
        "https://www.linkedin.com/in/bbrendanguyen/",
        "/Headshots/cropped/Brenda Nguyen.jpg",
      ),
      m(
        "Evan Hsu",
        2028,
        "https://www.linkedin.com/in/evan-hsu2006/",
        "/Headshots/cropped/Evan Hsu.jpg",
      ),
      m(
        "Hugo Hiramatsu",
        2028,
        "https://www.linkedin.com/in/hugo-hiramatsu/",
        "/Headshots/cropped/Hugo Hiramatsu.jpg",
      ),
      m(
        "Jeffrey Chang",
        2028,
        "https://www.linkedin.com/in/jeffrey-chang06/",
        "/Headshots/cropped/Jeffrey Chang.jpg",
      ),
      m(
        "Jun Moon",
        2028,
        "https://www.linkedin.com/in/junhmoon/",
        "/Headshots/cropped/Jun Moon.jpg",
      ),
      m(
        "Melissa Shi",
        2028,
        "https://www.linkedin.com/in/melissaqshi/",
        "/Headshots/cropped/Melissa Shi.jpg",
      ),
      m(
        "Nikhil Mummalaneni",
        2027,
        "https://www.linkedin.com/in/nikhil-mummalaneni/",
        "/Headshots/cropped/Nikhil Mummalaneni.jpg",
      ),
      m(
        "Paul Thomsak",
        2028,
        "https://www.linkedin.com/in/paul-thomsak-23386931a/",
        "/Headshots/cropped/Paul Thomsak.jpg",
      ),
      m(
        "Rebecca Chang",
        2028,
        "https://www.linkedin.com/in/rebeccachang14/",
        "/Headshots/cropped/Rebecca Chang.jpg",
      ),
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
      m(
        "Taey Traisorat",
        2028,
        "https://www.linkedin.com/in/primtraisorat/",
        "/Headshots/cropped/Taey Traisorat.jpg",
      ),
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
      m(
        "Aarnav Yedla",
        2029,
        "https://www.linkedin.com/in/aarnav-yedla/",
        "/Headshots/cropped/Aarnav Yedla.jpg",
      ),
      m(
        "Aaron Knibbe",
        2028,
        "https://www.linkedin.com/in/aaron-knibbe/",
        "/Headshots/cropped/Aaron Knibbe.jpg",
      ),
      m(
        "Carys Wilson",
        2029,
        "https://www.linkedin.com/in/carys-wilson/",
        "/Headshots/cropped/Carys Wilson.jpg",
      ),
      m(
        "Jasmin Kwon",
        2029,
        "https://www.linkedin.com/in/jasminkwon/",
        "/Headshots/cropped/Jasmin Kwon.jpg",
      ),
      m(
        "Lawrence Jia",
        2029,
        "https://www.linkedin.com/in/ljia405/",
        "/Headshots/cropped/Lawrence Jia.jpg",
      ),
      m(
        "Mili Shah",
        2029,
        "https://www.linkedin.com/in/mili-s/",
        "/Headshots/cropped/Mili Shah.jpg",
      ),
      m(
        "Nikhil Vijay",
        2029,
        "https://www.linkedin.com/in/nikhilvijay-/",
        "/Headshots/cropped/Nikhil Vijay.jpg",
      ),
      m(
        "Vikram Dawar",
        2029,
        "https://www.linkedin.com/in/vikramdawar/",
        "/Headshots/cropped/Vikram Dawar.jpg",
      ),
    ],
  },
  {
    name: "Beta Kappa Class",
    members: [
      m(
        "Aaron Teng",
        2029,
        "https://www.linkedin.com/in/aaron-teng04/",
        "/Headshots/cropped/Aaron Teng.jpg",
      ),
      m(
        "Daniel Xing",
        2029,
        "https://www.linkedin.com/in/dxing01/",
        "/Headshots/cropped/Daniel Xing.jpg",
      ),
      m(
        "Eleanor Lee",
        2029,
        "https://www.linkedin.com/in/eleanor-lee06/",
        "/Headshots/cropped/Eleanor Lee.jpg",
      ),
      m(
        "Iris Zeng",
        2029,
        "https://www.linkedin.com/in/iristyzeng/",
        "/Headshots/cropped/Iris Zeng.jpg",
      ),
      m(
        "Jin Kim",
        2029,
        "https://www.linkedin.com/in/jin-kim-5259b7386/",
        "/Headshots/cropped/Jin Kim.jpg",
      ),
      m(
        "Kelly Hu",
        2028,
        "https://www.linkedin.com/in/kelly-grace-hu/",
        "/Headshots/cropped/Kelly Hu.jpg",
      ),
      m(
        "Kenneth Lee",
        2029,
        "https://www.linkedin.com/in/kennethponienlee/",
        "/Headshots/cropped/Kenneth Lee.jpg",
      ),
      m(
        "Kevin Yang",
        2029,
        "https://www.linkedin.com/in/kevinyuwenyang/",
        "/Headshots/cropped/Kevin Yang.jpg",
      ),
      m(
        "Kiera Wang",
        2028,
        "https://www.linkedin.com/in/kierawang/",
        "/Headshots/cropped/Kiera Wang.jpg",
      ),
      m(
        "Kijoo Song",
        2029,
        "https://www.linkedin.com/in/kijoosong/",
        "/Headshots/cropped/Kijoo Song.jpg",
      ),
      m(
        "Sahil Reddy",
        2029,
        "https://www.linkedin.com/in/sahil-reddy-012b9235b/",
        "/Headshots/cropped/Sahil Reddy.jpg",
      ),
      m(
        "Yujin Baik",
        2029,
        "https://www.linkedin.com/in/yujin-baik/",
        "/Headshots/cropped/Yujin Baik.jpg",
      ),
    ],
  },
];
