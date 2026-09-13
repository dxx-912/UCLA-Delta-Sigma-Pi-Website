// Recruitment timeline milestones for the Join Us page. Event names, order,
// attire, exclusivity, dates (one event per day, Sept 28 – Oct 2, 2026), and
// times are final — Mon–Thu run 7–9 PM, and Friday's Bid Interviews depend on
// each candidate's scheduled slot. Locations aren't finalized yet, so those
// stay TBD placeholders. Bid Interviews doesn't disclose a location publicly.

export interface RecruitmentMilestone {
  date: string;
  title: string;
  attire: string;
  time: string;
  /** Omit to hide the Location field on the card. */
  location?: string;
  inviteOnly?: boolean;
}

export const recruitmentMilestones: RecruitmentMilestone[] = [
  {
    date: "Monday, September 28",
    title: "Meet the Chapter",
    attire: "Casual",
    time: "7:00–9:00 PM",
    location: "TBD",
  },
  {
    date: "Tuesday, September 29",
    title: "Social Night",
    attire: "Casual",
    time: "7:00–9:00 PM",
    location: "TBD",
  },
  {
    date: "Wednesday, September 30",
    title: "Professional Night",
    attire: "Business Professional",
    time: "7:00–9:00 PM",
    location: "TBD",
    inviteOnly: true,
  },
  {
    date: "Thursday, October 1",
    title: "Aftermath",
    attire: "Casual",
    time: "7:00–9:00 PM",
    location: "TBD",
    inviteOnly: true,
  },
  {
    date: "Friday, October 2",
    title: "Bid Interviews",
    attire: "Business Professional",
    time: "Varies by interview slot",
    inviteOnly: true,
  },
];
