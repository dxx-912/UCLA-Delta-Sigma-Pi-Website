// Recruitment timeline milestones for the Join Us page. Event names, order,
// attire, exclusivity, and dates (one event per day, Sept 28 – Oct 2, 2026) are
// final; times/locations aren't finalized yet for the events that are open to
// all rushees, so those stay TBD placeholders.
// Invite-only events don't disclose a time or location publicly.

export interface RecruitmentMilestone {
  date: string;
  title: string;
  attire: string;
  time: string;
  location: string;
  inviteOnly?: boolean;
}

export const recruitmentMilestones: RecruitmentMilestone[] = [
  {
    date: "Monday, September 28",
    title: "Meet the Chapter",
    attire: "Casual",
    time: "TBD",
    location: "TBD",
  },
  {
    date: "Tuesday, September 29",
    title: "Social Night",
    attire: "Casual",
    time: "TBD",
    location: "TBD",
  },
  {
    date: "Wednesday, September 30",
    title: "Professional Night",
    attire: "Business Professional",
    time: "TBD",
    location: "TBD",
    inviteOnly: true,
  },
  {
    date: "Thursday, October 1",
    title: "Aftermath",
    attire: "Casual",
    time: "TBD",
    location: "TBD",
    inviteOnly: true,
  },
  {
    date: "Friday, October 2",
    title: "Bid Interviews",
    attire: "Business Professional",
    time: "TBD",
    location: "TBD",
    inviteOnly: true,
  },
];
