import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { FolderOpen } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";

import { GovProjectsBackground } from "@/components/backgrounds/GovProjectsBackground";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "id" ? "Proyek | Randi Sumitro" : "Projects | Randi Sumitro",
    description:
      locale === "id"
        ? "Semua proyek Randi Sumitro dari repository GitHub — AI/ML, Full Stack, IoT, Web App, dan DevOps."
        : "All projects by Randi Sumitro from GitHub repositories — AI/ML, Full Stack, IoT, Web App, and DevOps.",
  };
}

export default async function ProjectsPage() {
  const locale = await getLocale();

  return (
    <div className="relative min-h-screen">
      <GovProjectsBackground />

      <div className="section-container relative z-10 py-20 pt-32">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <FolderOpen className="h-3 w-3" />
            {locale === "id"
              ? "Dari Repository GitHub"
              : "From GitHub Repositories"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {locale === "id" ? "Semua " : "All "}
            <span className="gradient-text">
              {locale === "id" ? "Proyek" : "Projects"}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {locale === "id"
              ? "Koleksi proyek nyata dari GitHub — tanpa konten fiktif, hanya karya nyata."
              : "Real project collection from GitHub — no fictional content, only real work."}
          </p>
        </AnimatedSection>

        <ProjectsPageClient />
      </div>
    </div>
  );
}
