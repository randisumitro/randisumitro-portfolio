import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getGitHubProfile } from "@/lib/github";
import { HeroSection, FeaturedProjectsSection } from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "Randi Sumitro — Full Stack Developer, IoT Engineer & ML Researcher",
  description:
    "Portfolio of Randi Sumitro — Full Stack Developer, IoT Engineer, and Machine Learning Researcher from Indonesia.",
};

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const githubStats = await getGitHubProfile();

  return (
    <>
      <HeroSection githubStats={githubStats} />
      <FeaturedProjectsSection />
    </>
  );
}
