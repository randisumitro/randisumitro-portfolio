import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, locale: string = "id-ID"): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    Python: "#3572A5",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    PHP: "#777BB4",
    HTML: "#E34F26",
    CSS: "#1572B6",
    "Jupyter Notebook": "#F37626",
    Java: "#B07219",
    Go: "#00ADD8",
    Rust: "#DEA584",
    C: "#555555",
    "C++": "#F34B7D",
    Shell: "#89E051",
  };
  return colors[language] || "#6B7280";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + "..." : text;
}
