import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const colors = ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"];


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
