import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Proyek" : "Projects",
    description: isId
      ? "Daftar proyek perangkat lunak, layanan publik, AI/ML, dan IoT oleh Randi Sumitro."
      : "Software engineering, public-service platforms, AI/ML, and IoT projects by Randi Sumitro.",
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  return (
    <div className="relative min-h-screen">
      <div className="section-container py-16 pt-20">
        <AnimatedSection immediate className="text-center mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {isId ? "Portofolio Karya" : "Engineering Archive"}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {isId ? "Semua " : "All "}
            <span className="text-primary">{isId ? "Proyek" : "Projects"}</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {isId
              ? "Sistem produksi, aplikasi AI/ML, dan integrasi perangkat keras IoT."
              : "Production web platforms, applied AI/ML systems, and IoT engineering projects."}
          </p>
        </AnimatedSection>

        <ProjectsPageClient />
      </div>
    </div>
  );
}
