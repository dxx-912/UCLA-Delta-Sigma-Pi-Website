// Recruitment FAQ content — 8 question/answer pairs, verbatim (Section 7.7).

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqIntro =
  'Recruitment (called "rush") is a one-week series of events during the fall and winter quarters in which our chapter meets, engages with, and recruits people to join our fraternity. This is also a time for you (the ‘rushee’) to learn more about what Delta Sigma Pi offers and get to know the active brothers.';

export const faqItems: FaqItem[] = [
  {
    question: "Why should I rush Delta Sigma Pi?",
    answer:
      "Delta Sigma Pi is UCLA's premier business fraternity. We provide vast resources across a variety of fields, from investment banking and consulting to entertainment and technology. Our brothers can attest to how helpful our expansive alumni network is in both mentorship and referrals. We have brothers in almost every business club at UCLA, thus providing mentorship opportunities across all areas of business.",
  },
  {
    question: "What if I am already a member of another fraternity/sorority?",
    answer:
      "You are welcome to be a member of multiple Greek organizations. However, members of other professional fraternities under the Professional Fraternity Council (PFC) are not eligible to apply.",
  },
  {
    question: "Do I have to attend all days of Recruitment?",
    answer:
      "Attendance at every rush event is not mandatory, but we strongly encourage you to attend as many as possible. Participants who attend more events will give us more opportunities to get to know them.",
  },
  {
    question: 'What is the Bid Interview? What are "bids"?',
    answer:
      "The Bid Interview is the only formal interview in our recruitment process. After the interview, successful applicants will each receive a bid — an official invitation to join our pledge education program.",
  },
  {
    question: "What is the pledge education program?",
    answer:
      "If you receive a bid, you will undergo our pledge education program before officially becoming an active member. Our pledge education program is designed to help you explore different career paths in business, learn about the resources DSP offers, and bring you and your pledge class closer together. It is also an opportunity for us to determine whether you are a good fit to become a permanent member of the fraternity.",
  },
  {
    question: "If I don't get a bid, can I reapply in the future?",
    answer:
      "Yes! Every year, we meet many great candidates, but we are unfortunately unable to accept everyone. If you are unsuccessful this time, we strongly encourage you to attend our future Recruitment events.",
  },
  {
    question: "What should I wear to recruitment events?",
    answer:
      "We encourage every participant to dress in what makes them comfortable! However, participants are required to dress in business-professional attire during Professional Night and the Bid Interview.",
  },
  {
    question: "Does Delta Sigma Pi haze?",
    answer:
      "No, hazing violates California laws, and Delta Sigma Pi does not participate in hazing.",
  },
];
