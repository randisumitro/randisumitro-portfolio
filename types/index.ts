// ============================================================
// TYPES — Randi Sumitro Portfolio
// ============================================================

export interface Project {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  longDescription: string;
  longDescriptionEn: string;
  category: ProjectCategory;
  technologies: Technology[];
  features: string[];
  featuresEn: string[];
  challenges: string[];
  challengesEn: string[];
  solutions: string[];
  solutionsEn: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  complexity: 1 | 2 | 3 | 4 | 5;
  status: "active" | "completed" | "archived" | "production";
  year: number;
  highlights?: string[];
  highlightsEn?: string[];
  
  // Case Study Additions
  role?: string;
  roleEn?: string;
  institution?: string;
  businessGoal?: string;
  businessGoalEn?: string;
  results?: string[];
  resultsEn?: string[];
  impact?: string;
  impactEn?: string;
  architecture?: string[];
  architectureEn?: string[];
  technicalHighlights?: string[];
  technicalHighlightsEn?: string[];
  responsibilities?: string[];
  responsibilitiesEn?: string[];
  screenshots?: {
    desktop: string;
    mobile?: string;
  };
  gallery?: string[];
}

export type ProjectCategory =
  | "ai-ml"
  | "full-stack"
  | "iot"
  | "web-app"
  | "devops"
  | "research";

export interface Technology {
  name: string;
  icon?: string;
  color?: string;
  category: TechCategory;
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "ml"
  | "iot"
  | "devops"
  | "tools"
  | "language";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: TechCategory;
  icon?: string;
  color: string;
  usedIn: string[]; // repo slugs
}

export interface SkillGroup {
  category: TechCategory;
  labelId: string;
  labelEn: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  titleEn: string;
  organization: string;
  type: "personal" | "academic" | "organization" | "client";
  startDate: string;
  endDate?: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  projectSlug?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  type: "thesis" | "experiment" | "journal" | "project";
  methodology: string[];
  results: string[];
  resultsEn: string[];
  dataset?: string;
  accuracy?: string;
  repositoryUrl?: string;
  year: number;
}

export interface GitHubStats {
  login: string;
  name: string;
  bio: string;
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
  totalCommits?: number;
  topLanguages: { language: string; count: number; percentage: number }[];
  location?: string;
  blog?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  topics: string[];
  createdAt: string;
  updatedAt: string;
  size: number;
}

export interface NavItem {
  labelId: string;
  labelEn: string;
  href: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  instagram?: string;
  whatsapp?: string;
}
