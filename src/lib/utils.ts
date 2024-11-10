"use client";

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState, useContext } from "react";
import {useCommon} from "@/app/context/CommonContext";

export const colors = ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"];
export const pronounArray = [
    'he', 'him', 'she', 'her', 'they', 'them', 'ze', 'zir', 'xe', 'xem', 'ey', 'em', 've', 'ver', 'per', 'per', 'it', 'other'

]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const useUser = () => {
    const {user, setUser} = useCommon();
    useEffect(() => {
        const userData = localStorage.getItem("user");
        if(userData)
            setUser(userData);
    }, []);
    return user;
}


export const chats = [
  {
    "url": "/chat/1",
    "chatName": "General Chat 1",
    "description": "This is the general discussion chat.",
    "messages": [
      {
        "id": "msg-1-1",
        "content": "Hello everyone!",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "ChessDanishBoy",
          "password": "securePass123",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T10:00:00Z"
      },
      {
        "id": "msg-1-2",
        "content": "How's it going?",
        "author": {
          "email": "user1@example.com",
          "username": "User1",
          "password": "password1",
          "pronouns": ["they", "them"]
        },
        "createdAt": "2024-11-09T10:05:00Z"
      },
      {
        "id": "msg-1-3",
        "content": "Doing well, thanks!",
        "author": {
          "email": "user2@example.com",
          "username": "User2",
          "password": "password2",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-09T10:10:00Z"
      },
      {
        "id": "msg-1-4",
        "content": "Good to hear!",
        "author": {
          "email": "user3@example.com",
          "username": "User3",
          "password": "password3",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T10:15:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "ChessDanishBoy",
        "password": "securePass123",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user1@example.com",
        "username": "User1",
        "password": "password1",
        "pronouns": ["they", "them"]
      },
      {
        "email": "user2@example.com",
        "username": "User2",
        "password": "password2",
        "pronouns": ["she", "her"]
      },
      {
        "email": "user3@example.com",
        "username": "User3",
        "password": "password3",
        "pronouns": ["he", "him"]
      }
    ]
  },
  {
    "url": "/chat/2",
    "chatName": "General Chat 2",
    "description": "A chat about various topics.",
    "messages": [
      {
        "id": "msg-2-1",
        "content": "Starting a new topic!",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "ChessDanishBoy",
          "password": "securePass123",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T11:00:00Z"
      },
      {
        "id": "msg-2-2",
        "content": "What's the topic?",
        "author": {
          "email": "user4@example.com",
          "username": "User4",
          "password": "password4",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-09T11:05:00Z"
      },
      {
        "id": "msg-2-3",
        "content": "Let's talk tech.",
        "author": {
          "email": "user5@example.com",
          "username": "User5",
          "password": "password5",
          "pronouns": ["they", "them"]
        },
        "createdAt": "2024-11-09T11:10:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "ChessDanishBoy",
        "password": "securePass123",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user4@example.com",
        "username": "User4",
        "password": "password4",
        "pronouns": ["she", "her"]
      },
      {
        "email": "user5@example.com",
        "username": "User5",
        "password": "password5",
        "pronouns": ["they", "them"]
      },
      {
        "email": "user6@example.com",
        "username": "User6",
        "password": "password6",
        "pronouns": ["he", "him"]
      }
    ]
  },
  {
    "url": "/chat/3",
    "chatName": "General Chat 3",
    "description": "This is the general discussion chat.",
    "messages": [
      {
        "id": "msg-1-1",
        "content": "Hello everyone!",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "ChessDanishBoy",
          "password": "securePass123",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T10:00:00Z"
      },
      {
        "id": "msg-1-2",
        "content": "How's it going?",
        "author": {
          "email": "user1@example.com",
          "username": "User1",
          "password": "password1",
          "pronouns": ["they", "them"]
        },
        "createdAt": "2024-11-09T10:05:00Z"
      },
      {
        "id": "msg-1-3",
        "content": "Doing well, thanks!",
        "author": {
          "email": "user2@example.com",
          "username": "User2",
          "password": "password2",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-09T10:10:00Z"
      },
      {
        "id": "msg-1-4",
        "content": "Good to hear!",
        "author": {
          "email": "user3@example.com",
          "username": "User3",
          "password": "password3",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T10:15:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "ChessDanishBoy",
        "password": "securePass123",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user1@example.com",
        "username": "User1",
        "password": "password1",
        "pronouns": ["they", "them"]
      },
      {
        "email": "user2@example.com",
        "username": "User2",
        "password": "password2",
        "pronouns": ["she", "her"]
      },
      {
        "email": "user3@example.com",
        "username": "User3",
        "password": "password3",
        "pronouns": ["he", "him"]
      }
    ]
  },
  {
    "url": "/chat/4",
    "chatName": "General Chat 4",
    "description": "A chat about various topics.",
    "messages": [
      {
        "id": "msg-2-1",
        "content": "Starting a new topic!",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "ChessDanishBoy",
          "password": "securePass123",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T11:00:00Z"
      },
      {
        "id": "msg-2-2",
        "content": "What's the topic?",
        "author": {
          "email": "user4@example.com",
          "username": "User4",
          "password": "password4",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-09T11:05:00Z"
      },
      {
        "id": "msg-2-3",
        "content": "Let's talk tech.",
        "author": {
          "email": "user5@example.com",
          "username": "User5",
          "password": "password5",
          "pronouns": ["they", "them"]
        },
        "createdAt": "2024-11-09T11:10:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "ChessDanishBoy",
        "password": "securePass123",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user4@example.com",
        "username": "User4",
        "password": "password4",
        "pronouns": ["she", "her"]
      },
      {
        "email": "user5@example.com",
        "username": "User5",
        "password": "password5",
        "pronouns": ["they", "them"]
      },
      {
        "email": "user6@example.com",
        "username": "User6",
        "password": "password6",
        "pronouns": ["he", "him"]
      }
    ]
  },
  {
    "url": "/chat/5",
    "chatName": "Travel Chat",
    "description": "A space to share travel experiences and tips.",
    "messages": [
      {
        "id": "msg-3-1",
        "content": "Anyone have tips for Japan?",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "ChessDanishBoy",
          "password": "securePass123",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T12:00:00Z"
      },
      {
        "id": "msg-3-2",
        "content": "I went last year. You should visit Kyoto!",
        "author": {
          "email": "user7@example.com",
          "username": "User7",
          "password": "password7",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-09T12:05:00Z"
      },
      {
        "id": "msg-3-3",
        "content": "Thanks for the suggestion!",
        "author": {
          "email": "user8@example.com",
          "username": "User8",
          "password": "password8",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T12:10:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "ChessDanishBoy",
        "password": "securePass123",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user7@example.com",
        "username": "User7",
        "password": "password7",
        "pronouns": ["she", "her"]
      },
      {
        "email": "user8@example.com",
        "username": "User8",
        "password": "password8",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user9@example.com",
        "username": "User9",
        "password": "password9",
        "pronouns": ["they", "them"]
      }
    ]
  },
  {
    "url": "/chat/6",
    "chatName": "Gaming Chat",
    "description": "Talk about your favorite games.",
    "messages": [
      {
        "id": "msg-4-1",
        "content": "Anyone here play League of Legends?",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "ChessDanishBoy",
          "password": "securePass123",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T13:00:00Z"
      },
      {
        "id": "msg-4-2",
        "content": "Yes! I'm a main support player.",
        "author": {
          "email": "user10@example.com",
          "username": "User10",
          "password": "password10",
          "pronouns": ["they", "them"]
        },
        "createdAt": "2024-11-09T13:05:00Z"
      },
      {
        "id": "msg-4-3",
        "content": "I prefer playing mid lane.",
        "author": {
          "email": "user11@example.com",
          "username": "User11",
          "password": "password11",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-09T13:10:00Z"
      },
      {
        "id": "msg-4-4",
        "content": "Cool! Maybe we can team up sometime.",
        "author": {
          "email": "user12@example.com",
          "username": "User12",
          "password": "password12",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-09T13:15:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "ChessDanishBoy",
        "password": "securePass123",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user10@example.com",
        "username": "User10",
        "password": "password10",
        "pronouns": ["they", "them"]
      },
      {
        "email": "user11@example.com",
        "username": "User11",
        "password": "password11",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user12@example.com",
        "username": "User12",
        "password": "password12",
        "pronouns": ["she", "her"]
      }
    ]
  },
  {
    "url": "https://example.com/chat1",
    "chatName": "Chat Room 1",
    "description": "Discussion on project updates",
    "messages": [
      {
        "id": "msg1_1",
        "content": "Hello team, let's start our discussion!",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "cheesedanishboy",
          "password": "hashedPassword1",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-10T10:00:00Z"
      },
      {
        "id": "msg1_2",
        "content": "Sure, I have some updates to share.",
        "author": {
          "email": "user1@example.com",
          "username": "projectGuru1",
          "password": "hashedPassword2",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-10T10:01:00Z"
      },
      {
        "id": "msg1_3",
        "content": "Great! Let's discuss our next steps.",
        "author": {
          "email": "user2@example.com",
          "username": "techSavvy2",
          "password": "hashedPassword3",
          "pronouns": ["they", "them"]
        },
        "createdAt": "2024-11-10T10:02:00Z"
      },
      {
        "id": "msg1_4",
        "content": "Can we also review the timeline?",
        "author": {
          "email": "user3@example.com",
          "username": "plannerExtra3",
          "password": "hashedPassword4",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-10T10:03:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "cheesedanishboy",
        "password": "hashedPassword1",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user1@example.com",
        "username": "projectGuru1",
        "password": "hashedPassword2",
        "pronouns": ["she", "her"]
      },
      {
        "email": "user2@example.com",
        "username": "techSavvy2",
        "password": "hashedPassword3",
        "pronouns": ["they", "them"]
      },
      {
        "email": "user3@example.com",
        "username": "plannerExtra3",
        "password": "hashedPassword4",
        "pronouns": ["he", "him"]
      }
    ]
  },
  {
    "url": "https://example.com/chat2",
    "chatName": "Chat Room 2",
    "description": "Casual discussions and brainstorming",
    "messages": [
      {
        "id": "msg2_1",
        "content": "Anyone up for a quick brainstorming session?",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "cheesedanishboy",
          "password": "hashedPassword1",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-10T10:10:00Z"
      },
      {
        "id": "msg2_2",
        "content": "Sounds good, let's go!",
        "author": {
          "email": "user4@example.com",
          "username": "ideaMaker4",
          "password": "hashedPassword5",
          "pronouns": ["she", "her"]
        },
        "createdAt": "2024-11-10T10:11:00Z"
      },
      {
        "id": "msg2_3",
        "content": "I have a few ideas to discuss.",
        "author": {
          "email": "user5@example.com",
          "username": "visionary5",
          "password": "hashedPassword6",
          "pronouns": ["they", "them"]
        },
        "createdAt": "2024-11-10T10:12:00Z"
      },
      {
        "id": "msg2_4",
        "content": "Can we also include tech trends?",
        "author": {
          "email": "user6@example.com",
          "username": "trendSpotter6",
          "password": "hashedPassword7",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-10T10:13:00Z"
      },
      {
        "id": "msg2_5",
        "content": "Absolutely! Let's make it happen.",
        "author": {
          "email": "cheesedanishboy@gmail.com",
          "username": "cheesedanishboy",
          "password": "hashedPassword1",
          "pronouns": ["he", "him"]
        },
        "createdAt": "2024-11-10T10:14:00Z"
      }
    ],
    "users": [
      {
        "email": "cheesedanishboy@gmail.com",
        "username": "cheesedanishboy",
        "password": "hashedPassword1",
        "pronouns": ["he", "him"]
      },
      {
        "email": "user4@example.com",
        "username": "ideaMaker4",
        "password": "hashedPassword5",
        "pronouns": ["she", "her"]
      },
      {
        "email": "user5@example.com",
        "username": "visionary5",
        "password": "hashedPassword6",
        "pronouns": ["they", "them"]
      },
      {
        "email": "user6@example.com",
        "username": "trendSpotter6",
        "password": "hashedPassword7",
        "pronouns": ["he", "him"]
      }
    ]
  }
];
