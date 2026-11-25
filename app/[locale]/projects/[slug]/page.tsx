import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
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
import { getProjectBySlug } from "@/lib/projects";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: locale === "id" ? project.name : project.nameEn,
    description: locale === "id" ? project.description : project.descriptionEn,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isId = locale === "id";
  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  const name = isId ? project.name : project.nameEn;
  const role = isId ? project.role : project.roleEn || project.role;
  const longDescription = isId
    ? project.longDescription
    : project.longDescriptionEn;
  const businessGoal = isId
    ? project.businessGoal
    : project.businessGoalEn;
  const challenges = isId ? project.challenges : project.challengesEn;
  const solutions = isId ? project.solutions : project.solutionsEn;
  const architecture = isId ? project.architecture : project.architectureEn;
  const features = isId ? project.features : project.featuresEn;
  const techHighlights = isId
    ? project.technicalHighlights
    : project.technicalHighlightsEn;
  const impact = isId ? project.impact : project.impactEn;

  return (
    <div className="relative min-h-screen">
      <div className="section-container py-16 pt-20 max-w-4xl">
        <AnimatedSection immediate>
          <Link
            href={getLocalizedHref("/projects")}
            id="back-to-projects"
            className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {isId ? "Kembali ke Proyek" : "Back to Projects"}
          </Link>
        </AnimatedSection>

        {/* Hero Header */}
        <AnimatedSection immediate>
          <div className="glass-card p-6 sm:p-8 mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
              {name}
            </h1>

            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-muted-foreground mb-5">
              {role && (
                <span className="glass-subtle px-3 py-1 rounded-full">
                  {role}
                </span>
              )}
              {project.institution && (
                <span className="glass-subtle px-3 py-1 rounded-full">
                  {project.institution}
                </span>
              )}
              <span className="glass-subtle px-3 py-1 rounded-full font-mono">
                {project.year}
              </span>
              {project.status === "production" && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-3 py-1">
                  Production
                </span>
              )}
              {project.isPrivate && (
                <span className="glass-subtle rounded-full px-3 py-1">
                  {isId ? "Repositori Privat" : "Private Repository"}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="tech-badge">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Main Screenshot */}
        {project.screenshots && (
          <AnimatedSection immediate>
            <div className="glass-card p-2 mb-8 overflow-hidden">
              <Image
                src={project.screenshots.desktop}
                alt={`${name} Desktop View`}
                width={1440}
                height={900}
                className="w-full h-auto rounded-lg object-cover"
                priority
                unoptimized
              />
            </div>
          </AnimatedSection>
        )}

        <div className="space-y-6">
          {/* Overview */}
          <AnimatedSection>
            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                <Target className="h-5 w-5 text-primary" aria-hidden="true" />
                {isId ? "Ringkasan" : "Overview"}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-[65ch]">
                {longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {businessGoal && (
                <div className="glass-subtle mt-6 p-5 rounded-xl">
                  <h3 className="text-sm font-bold text-foreground mb-1.5">
                    {isId ? "Tujuan Sistem" : "Business Goal"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {businessGoal}
                  </p>
                </div>
              )}
            </section>
          </AnimatedSection>

          {/* Challenge & Solution */}
          {(challenges?.length > 0 || solutions?.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges && challenges.length > 0 && (
                <AnimatedSection>
                  <section className="glass-card p-6 sm:p-7 h-full">
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                      <AlertTriangle
                        className="h-5 w-5 text-amber-400"
                        aria-hidden="true"
                      />
                      {isId ? "Tantangan" : "Challenge"}
                    </h2>
                    <ul className="space-y-3">
                      {challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </AnimatedSection>
              )}

              {solutions && solutions.length > 0 && (
                <AnimatedSection>
                  <section className="glass-card p-6 sm:p-7 h-full">
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                      <Lightbulb
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      {isId ? "Solusi" : "Solution"}
                    </h2>
                    <ul className="space-y-3">
                      {solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </AnimatedSection>
              )}
            </div>
          )}

          {/* Architecture */}
          {architecture && architecture.length > 0 && (
            <AnimatedSection>
              <section className="glass-card p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                  <Server className="h-5 w-5 text-primary" aria-hidden="true" />
                  {isId ? "Arsitektur" : "Architecture"}
                </h2>
                <ul className="space-y-3">
                  {architecture.map((arch, i) => (
                    <li
                      key={i}
                      className="glass-subtle rounded-xl p-4 flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Layers
                        className="h-4 w-4 text-primary shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </AnimatedSection>
          )}

          {/* Key Features */}
          {features && features.length > 0 && (
            <AnimatedSection>
              <section className="glass-card p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                  <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
                  {isId ? "Fitur Utama" : "Key Features"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="glass-subtle p-4 rounded-xl flex items-start gap-3"
                    >
                      <span
                        className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* Technical Highlights */}
          {techHighlights && techHighlights.length > 0 && (
            <AnimatedSection>
              <section className="glass-card p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                  <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  {isId ? "Sorotan Teknis" : "Technical Highlights"}
                </h2>
                <ul className="space-y-3">
                  {techHighlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 border-l-2 border-primary/40 pl-4"
                    >
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </AnimatedSection>
          )}

          {/* Impact */}
          {impact && (
            <AnimatedSection>
              <section className="glass-card p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                  <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
                  {isId ? "Dampak" : "Impact"}
                </h2>
                <p className="text-foreground leading-relaxed text-base sm:text-lg font-medium max-w-[65ch]">
                  {impact}
                </p>
              </section>
            </AnimatedSection>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <AnimatedSection>
              <section className="glass-card p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-5 flex items-center gap-2.5">
                  <LayoutGrid
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  {isId ? "Galeri" : "Gallery"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((src, i) => (
                    <div
                      key={i}
                      className="glass-subtle rounded-xl overflow-hidden p-1.5"
                    >
                      <Image
                        src={src}
                        alt={`${name} gallery ${i + 1}`}
                        width={1440}
                        height={900}
                        loading="lazy"
                        className="w-full h-auto rounded-lg object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* Production Link */}
          <AnimatedSection>
            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                <ExternalLink
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                {isId ? "Tautan Proyek" : "Project Links"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    {isId ? "Kunjungi Situs" : "View Live Site"}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : project.status === "production" ? (
                  <span className="glass-subtle inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground">
                    {isId ? "Intranet Privat" : "Private Intranet"}
                  </span>
                ) : project.isPrivate ? (
                  <span className="glass-subtle inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground">
                    {isId ? "Repositori Privat" : "Private Repository"}
                  </span>
                ) : null}

                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-subtle inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {isId ? "Kode Sumber" : "Source Code"}
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
