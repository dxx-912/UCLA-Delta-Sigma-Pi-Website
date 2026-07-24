// Full active brothers roster, grouped by pledge class. Transcribed verbatim from
// the build brief (Section 7.3 / Appendix B). Grad years are the "Class of" values.
// The two rosters (Leadership and Actives) are intentionally kept independent — 11
// names appear on both, which is expected (exec board members are also actives).

export interface Active {
  name: string;
  gradYear: number;
}

export interface PledgeClass {
  name: string;
  members: Active[];
}

const m = (name: string, gradYear: number): Active => ({ name, gradYear });

export const pledgeClasses: PledgeClass[] = [
  {
    name: "Beta Delta Class",
    members: [
      m("Apurv Gupta", 2027),
      m("Brandi Burnell", 2026),
      m("Christina Ahn", 2027),
      m("Hayden Selvakumar", 2027),
      m("Kristen Yu", 2027),
      m("Len Moran", 2027),
      m("Loki Cheema", 2027),
      m("Neha Kondeti", 2027),
      m("Sara Tatke", 2027),
      m("Yuji Fukuda", 2027),
    ],
  },
  {
    name: "Beta Epsilon Class",
    members: [
      m("Aidan Choi", 2027),
      m("Alice Lee", 2027),
      m("Dlency Zheng", 2027),
      m("Joseph Yi", 2025),
      m("Kayla Kim", 2027),
      m("Manav Bedi", 2027),
      m("Nikolas Marmershteyn", 2027),
      m("Ramona Pyke", 2026),
      m("Samuel Oh", 2026),
      m("Shelley Weng", 2026),
      m("Yuvraj Chadha", 2027),
    ],
  },
  {
    name: "Beta Zeta Class",
    members: [
      m("Andrew Jin", 2028),
      m("Cameron Loh", 2028),
      m("Chloe Kang", 2028),
      m("Dome Srithong", 2028),
      m("Dylan Loh", 2028),
      m("Hana Ton", 2027),
      m("Isaiah Bordador", 2028),
      m("Megan Ng", 2027),
      m("Nelson Zhao", 2027),
      m("Vlad Plyushchenko", 2028),
    ],
  },
  {
    name: "Beta Eta Class",
    members: [
      m("Alain Izawa", 2028),
      m("Brenda Nguyen", 2028),
      m("Evan Hsu", 2028),
      m("Hugo Hiramatsu", 2028),
      m("Jeffrey Chang", 2028),
      m("Jun Moon", 2028),
      m("Melissa Shi", 2028),
      m("Nikhil Mummalaneni", 2027),
      m("Paul Thomsak", 2028),
      m("Rebecca Chang", 2028),
      m("Ryan Chao", 2028),
      m("Ryan Chia", 2028),
      m("Taey Traisorat", 2028),
      m("Veronica Yang", 2028),
    ],
  },
  {
    name: "Beta Theta Class",
    members: [
      m("Carys Wilson", 2029),
      m("Vikram Dawar", 2029),
      m("Mili Shah", 2029),
      m("Jasmin Kwon", 2029),
      m("Nikhil Vijay", 2029),
      m("Aarnav Yedla", 2029),
      m("Aaron Knibbe", 2028),
      m("Lawrence Jia", 2029),
    ],
  },
  {
    name: "Beta Kappa Class",
    members: [
      m("Jin Kim", 2029),
      m("Kijoo Song", 2029),
      m("Kiera Wang", 2028),
      m("Kevin Yang", 2029),
      m("Daniel Xing", 2029),
      m("Iris Zeng", 2029),
      m("Kelly Hu", 2028),
      m("Aaron Teng", 2029),
      m("Yujin Baik", 2029),
      m("Kenneth Lee", 2029),
      m("Sahil Reddy", 2029),
      m("Eleanor Lee", 2029),
    ],
  },
];
