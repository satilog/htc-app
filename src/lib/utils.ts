import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const colors = ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"];

export const pronouns = [
    'he', 'him', 'she', 'her', 'they', 'them', 'ze', 'zir', 'xe', 'xem', 'ey', 'em', 've', 'ver', 'per', 'per', 'it', 'other'
]

export    const user = {
        displayName: "Kostia",
        pronouns: ["he", "him"],
    };




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const chats = [
  
];
