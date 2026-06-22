import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Target,
  AlertTriangle,
  Lightbulb,
  Zap,
  Code2,
  Trophy,
  Server,
  Layers,
  LayoutGrid,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}



export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const locale = await getLocale();

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${locale === "id" ? project.name : project.nameEn} | Randi Sumitro`,
    description: locale === "id" ? project.description : project.descriptionEn,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  const name = locale === "id" ? project.name : project.nameEn;
  const longDescription = locale === "id" ? project.longDescription : project.longDescriptionEn;
  const businessGoal = locale === "id" ? project.businessGoal : project.businessGoalEn;
  const challenges = locale === "id" ? project.challenges : project.challengesEn;
  const solutions = locale === "id" ? project.solutions : project.solutionsEn;
  const architecture = locale === "id" ? project.architecture : project.architectureEn;
  const features = locale === "id" ? project.features : project.featuresEn;
  const techHighlights = locale === "id" ? project.technicalHighlights : project.technicalHighlightsEn;
  const impact = locale === "id" ? project.impact : project.impactEn;

  return (
    <div className="relative min-h-screen bg-background">
      <div className="section-container relative z-10 py-20 pt-32 max-w-4xl">
        {/* Back button */}
        <AnimatedSection>
          <Link
            href={getLocalizedHref("/projects")}
            id="back-to-projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "id" ? "Kembali ke Proyek" : "Back to Projects"}
          </Link>
        </AnimatedSection>

        {/* Hero Header */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16 border-b border-border/50 pb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              {project.role && (
                <span className="flex items-center gap-1.5 border border-border px-3 py-1 rounded-full bg-card">
                  {project.role}
                </span>
              )}
              {project.institution && (
                <span className="flex items-center gap-1.5 border border-border px-3 py-1 rounded-full bg-card">
                  {project.institution}
                </span>
              )}
              <span className="flex items-center gap-1.5 border border-border px-3 py-1 rounded-full bg-card">
                {project.year}
              </span>
              {project.status === "production" && (
                <span className="flex items-center gap-1.5 border border-green-500/20 bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
                  Production
                </span>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Main Screenshot */}
        {project.screenshots && (
          <AnimatedSection delay={0.12}>
            <div className="mb-16 rounded-xl overflow-hidden border border-border bg-card shadow-sm">
              <Image 
                src={project.screenshots.desktop} 
                alt={`${name} Desktop View`}
                width={1440}
                height={900}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
            </div>
          </AnimatedSection>
        )}

        <div className="space-y-16">
          {/* ## Overview */}
          <AnimatedSection delay={0.15}>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-muted-foreground" />
                Overview
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                {longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {businessGoal && (
                <div className="mt-6 p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-bold text-foreground mb-2">Business Goal</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{businessGoal}</p>
                </div>
              )}
            </section>
          </AnimatedSection>

          {/* ## Challenge */}
          {challenges && challenges.length > 0 && (
            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                  Challenge
                </h2>
                <ul className="space-y-4">
                  {challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0 mt-2" />
                      <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </AnimatedSection>
          )}

          {/* ## Solution */}
          {solutions && solutions.length > 0 && (
            <AnimatedSection delay={0.25}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-muted-foreground" />
                  Solution
                </h2>
                <ul className="space-y-4">
                  {solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span className="text-muted-foreground leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </AnimatedSection>
          )}

          {/* ## Architecture */}
          {architecture && architecture.length > 0 && (
            <AnimatedSection delay={0.3}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Server className="h-5 w-5 text-muted-foreground" />
                  Architecture
                </h2>
                <div className="p-6 rounded-xl border border-border bg-card/50">
                  <ul className="space-y-3">
                    {architecture.map((arch, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Layers className="h-4 w-4 shrink-0 mt-0.5 opacity-50" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* ## Key Features */}
          {features && features.length > 0 && (
            <AnimatedSection delay={0.35}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-muted-foreground" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* ## Technical Highlights */}
          {techHighlights && techHighlights.length > 0 && (
            <AnimatedSection delay={0.4}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-muted-foreground" />
                  Technical Highlights
                </h2>
                <ul className="space-y-4">
                  {techHighlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 border-l-2 border-border pl-4">
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </AnimatedSection>
          )}

          {/* ## Impact */}
          {impact && (
            <AnimatedSection delay={0.45}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-muted-foreground" />
                  Impact
                </h2>
                <div className="p-8 rounded-xl border border-border bg-primary/5">
                  <p className="text-foreground leading-relaxed text-lg font-medium">&quot;{impact}&quot;</p>
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* ## Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <AnimatedSection delay={0.5}>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-muted-foreground" />
                  Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-border bg-card">
                      <Image 
                        src={src} 
                        alt={`Gallery Image ${i + 1}`}
                        width={1440}
                        height={900}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* ## Production Link */}
          <AnimatedSection delay={0.55}>
            <section className="pt-12 border-t border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
                Production Link
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    View Live Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : project.status === "production" ? (
                  <div className="inline-flex items-center gap-2 rounded-xl bg-muted px-6 py-3 text-sm font-medium text-muted-foreground">
                    Private Intranet
                  </div>
                ) : null}

                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors shadow-sm"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
