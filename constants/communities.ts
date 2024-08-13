interface CommunityProp {
  id: number;
  name: string;
  image: string;
  time: string;
  last_messages: string[];
  unread: boolean;
}

export const communities: CommunityProp[] = [
  {
    id: 1,
    name: "Dynamic Jobs",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    time: "2024-07-03T11:13:19.806887",
    last_messages: [
      "Hello, how are you?",
      "We are seeking a skilled and experienced HVAC Technician to join our team. The ideal candidate will be responsible for installing, maintaining, and repairing heating, ventilation, air conditioning, and refrigeration systems",
    ],
    unread: true,
  },
  {
    id: 2,
    name: "Informed Opportunity",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    time: "2024-07-04T11:13:19.806887",
    last_messages: [
      "Hello, how are you?",
      "CUSTOMER SERVICE JOB - YABA LAGOS ( IMMEDIATE EMPLOYMENT IF QUALIFIED)",
    ],
    unread: false,
  },
  {
    id: 3,
    name: "Scholarship Region",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    time: "2024-07-05T15:13:19.806887",
    last_messages: [
      "Hello, how are you?",
      "2024 University of Melbourne Graduate Research Scholarship | Fully Funded",
    ],
    unread: false,
  },
  {
    id: 4,
    name: "O'Jobs 4",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    time: "2024-07-06T15:13:19.806887",
    last_messages: [
      "Hello, how are you?",
      "A law firm in Lekki requires a junior IT Administrator, with 5 years of experience in network administration, systems and cloud administration, Microsoft Office 365, managing projects, managing a ticket helpdesk, cybersecurity, and hardware. The position is full time, no remote work is an option at this time.",
    ],
    unread: true,
  },
];
