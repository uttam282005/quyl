import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(date: Date, type: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: (type === "dateJoined" ? undefined : "2-digit"),
    minute: (type === "dateJoined" ? undefined : "2-digit"),
    hour12: true,
  }
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date))
}
