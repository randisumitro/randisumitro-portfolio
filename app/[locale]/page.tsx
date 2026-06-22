import type { Metadata } from "next";
import { getGitHubProfile } from "@/lib/github";
import { HeroSection, FeaturedProjectsSection } from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "Randi Sumitro — Full Stack Developer, IoT Engineer & ML Researcher",
  description:
    "Portfolio of Randi Sumitro — Full Stack Developer, IoT Engineer, and Machine Learning Researcher from Indonesia. View projects, skills, and research.",
};

export default async function HomePage() {
  const githubStats = await getGitHubProfile();

  return (
    <>
      <HeroSection githubStats={githubStats} />
      <FeaturedProjectsSection />
    </>
  );
}
