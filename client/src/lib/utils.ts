import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Splits handbook-style course prose into bullet points (by sentence). Not tuned for decimals like 3.14 in text. */
export function splitCourseContentIntoPoints(text: string): string[] {
  const normalized = text.trim();
  if (!normalized) return [];

  const ensurePeriod = (s: string) => {
    const t = s.trim();
    if (!t) return "";
    return /\.$/.test(t) ? t : `${t}.`;
  };

  let parts = normalized
    .split(/\.\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map(ensurePeriod)
    .filter(Boolean);

  if (parts.length === 1 && parts[0].includes(" - ")) {
    parts = parts[0]
      .replace(/\.$/, "")
      .split(/\s-\s/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map(ensurePeriod)
      .filter(Boolean);
  }

  return parts;
}
