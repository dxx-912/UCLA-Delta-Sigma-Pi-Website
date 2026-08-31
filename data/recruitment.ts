// Recruitment timeline milestones for the Join Us page. Event names, order,
// attire, and exclusivity are final; dates/times/locations aren't finalized yet
// for the events that are open to all rushees, so those stay TBD placeholders.
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
    date: "Date: TBD",
    title: "Meet the Chapter",
    attire: "Casual",
    time: "TBD",
    location: "TBD",
  },
  {
    date: "Date: TBD",
    title: "Social Night",
    attire: "Casual",
    time: "TBD",
    location: "TBD",
  },
  {
    date: "Date: TBD",
    title: "Professional Night",
    attire: "Business Professional",
    time: "TBD",
    location: "TBD",
    inviteOnly: true,
  },
  {
    date: "Date: TBD",
    title: "Aftermath",
    attire: "Casual",
    time: "TBD",
    location: "TBD",
    inviteOnly: true,
  },
  {
    date: "Date: TBD",
    title: "Bid Interviews",
    attire: "Business Professional",
    time: "TBD",
    location: "TBD",
    inviteOnly: true,
  },
];
