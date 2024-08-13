interface ChatProp {
  id: number;
  name: string;
  image: string;
  lastMessage: string[];
  time: string;
  isOwner?: boolean;
  unread?: boolean;
}

export const chats: ChatProp[] = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: ["Good evening", "Hello, how are you?"],
    time: "2024-06-01T11:13:19.806887",
    isOwner: false,
    unread: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: [
      "I tried calling you about 10 times yesterday morning, it kept dropping. I guess it was my service.",
    ],
    time: "2024-07-06T11:13:19.806887",
    isOwner: true,
  },
  {
    id: 3,
    name: "Mark Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: [
      "How are you doing?",
      "Have you called the main today?",
      "He just called me not long ago",
    ],
    time: "2024-07-02T11:13:19.806887",
    isOwner: false,
    unread: true,
  },
  {
    id: 4,
    name: "Sarah Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: ["What's up?"],
    time: "2024-07-06T11:13:19.806887",
    isOwner: true,
  },
  {
    id: 5,
    name: "Emily Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: ["How are you doing?"],
    time: "2024-07-04T11:13:19.806887",
    isOwner: false,
    unread: true,
  },
  {
    id: 6,
    name: "Michael Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: ["What's up?"],
    time: "2024-07-07T16:05:19.806887",
    isOwner: true,
  },
  {
    id: 7,
    name: "David Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: ["How are you doing?"],
    time: "2024-07-03T11:13:19.806887",
    isOwner: false,
    unread: false,
  },
  {
    id: 8,
    name: "Olivia Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: ["What's up?"],
    time: "2024-07-06T08:13:19.806887",
    isOwner: true,
  },
  {
    id: 9,
    name: "James Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: [
      "How are you doing? I just want to notify you that I'll be traveling to Italy in the next two weeks. I should be back before July ending, you can call me if you need anything.",
    ],
    time: "2024-05-06T11:13:19.806887",
    isOwner: false,
    unread: true,
  },
  {
    id: 10,
    name: "Emma Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    lastMessage: ["What's up?"],
    time: "2024-07-05T12:13:19.806887",
    isOwner: false,
  },
];
