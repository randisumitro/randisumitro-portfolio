import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Code2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SkillsPageClient } from "@/components/skills/SkillsPageClient";

import { SkillsBackground } from "@/components/backgrounds/SkillsBackground";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "id" ? "Keahlian | Randi Sumitro" : "Skills | Randi Sumitro",
    description:
      locale === "id"
        ? "Keahlian teknis Randi Sumitro berdasarkan analisis nyata dari seluruh repository GitHub."
        : "Technical skills of Randi Sumitro based on real analysis of all GitHub repositories.",
  };
}

export default async function SkillsPage() {
  const locale = await getLocale();

  return (
    <div className="relative min-h-screen">
      <SkillsBackground />

      <div className="section-container relative z-10 py-20 pt-32">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <Code2 className="h-3 w-3" />
            {locale === "id" ? "Berdasarkan Data Nyata GitHub" : "Based on Real GitHub Data"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {locale === "id" ? "Keahlian " : "Technical "}
            <span className="gradient-text">
              {locale === "id" ? "Teknis" : "Skills"}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {locale === "id"
              ? "Semua teknologi di bawah ini digunakan dalam proyek nyata, dianalisis langsung dari repository GitHub."
              : "All technologies below are used in real projects, analyzed directly from GitHub repositories."}
          </p>
        </AnimatedSection>

        <SkillsPageClient />
      </div>
    </div>
  );
}
