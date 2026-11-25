import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SkillsPageClient } from "@/components/skills/SkillsPageClient";

interface SkillsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: SkillsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Keahlian" : "Skills",
    description: isId
      ? "Daftar teknologi, bahasa pemrograman, framework, dan perangkat yang digunakan oleh Randi Sumitro."
      : "Programming languages, frameworks, ML tooling, and infrastructure used by Randi Sumitro.",
  };
}

export default async function SkillsPage({ params }: SkillsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  return (
    <div className="relative min-h-screen">
      <div className="section-container py-16 pt-20">
        <AnimatedSection immediate className="text-center mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {isId ? "Kompetensi Teknis" : "Technical Stack"}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {isId ? "Keahlian " : "Technical "}
            <span className="text-primary">{isId ? "Teknis" : "Skills"}</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {isId
              ? "Teknologi yang digunakan dalam sistem produksi, proyek riset, dan pengembangan IoT."
              : "Technologies applied across production web platforms, applied ML research, and IoT engineering."}
          </p>
        </AnimatedSection>

        <SkillsPageClient />
      </div>
    </div>
  );
}
