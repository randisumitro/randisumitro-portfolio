"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  GitFork,
  ExternalLink,
  Layers,
  Clock,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import type { GitHubStats } from "@/types";
import { getFeaturedProjects } from "@/lib/projects";

interface HeroSectionProps {
  githubStats: GitHubStats;
}

export function HeroSection({ githubStats }: HeroSectionProps) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isId = locale === "id";

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  const statItems = [
    {
      icon: Layers,
      value: "3+",
      label: isId ? "Sistem Produksi" : "Systems in Production",
      id: "stat-production",
    },
    {
      icon: Clock,
      value: "4+",
      label: isId ? "Tahun Pengalaman" : "Years Experience",
      id: "stat-experience",
    },
    {
      icon: BookOpen,
      value: githubStats.publicRepos,
      label: isId ? "Repository" : "Repositories",
      id: "stat-repos",
    },
    {
      icon: GitFork,
      value: githubStats.totalCommits || githubStats.topLanguages.length,
      label: githubStats.totalCommits
        ? isId
          ? "Total Komit"
          : "Total Commits"
        : isId
          ? "Bahasa Utama"
          : "Core Languages",
      id: "stat-commits",
    },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center py-12 sm:py-16 lg:py-20"
    >
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Primary Hero Glass Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-7 sm:p-10 space-y-6">
              <div
                id="available-badge"
                className="glass-subtle inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400"
              >
                <span
                  className="inline-block h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
                  aria-hidden="true"
                />
                {t("available")}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t("greeting")}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  {t("name")}
                </h1>
                <p className="text-base sm:text-lg font-medium text-primary">
                  Full Stack Developer · IoT Engineer · Machine Learning Researcher
                </p>
              </div>

              <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
                {t("description")}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={getLocalizedHref("/projects")}
                  id="hero-cta-projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {t("cta_projects")}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href={getLocalizedHref("/contact")}
                  id="hero-cta-contact"
                  className="glass-subtle inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
                >
                  {t("cta_contact")}
                </Link>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[var(--glass-border)]">
                {[
                  {
                    href: "https://github.com/randisumitro",
                    icon: Github,
                    label: "GitHub",
                    id: "hero-github",
                  },
                  {
                    href: "https://www.linkedin.com/in/randisumitro",
                    icon: Linkedin,
                    label: "LinkedIn",
                    id: "hero-linkedin",
                  },
                  {
                    href: "mailto:randisumitro2@gmail.com",
                    icon: Mail,
                    label: "Email",
                    id: "hero-email",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    id={social.id}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="glass-subtle flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Glass Engineering Overview */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-7 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {statItems.map((stat) => (
                  <div
                    key={stat.id}
                    id={stat.id}
                    className="glass-subtle rounded-xl p-4 space-y-1.5"
                  >
                    <stat.icon
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    <div className="text-2xl font-bold text-foreground tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2 border-t border-[var(--glass-border)]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {isId ? "Bahasa Pemrograman Utama" : "Top Programming Languages"}
                  </span>
                  <a
                    href="https://github.com/randisumitro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                    id="hero-view-github"
                  >
                    GitHub
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>

                <div className="space-y-2.5">
                  {githubStats.topLanguages.slice(0, 5).map((lang) => (
                    <div key={lang.language} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground">
                          {lang.language}
                        </span>
                        <span className="text-muted-foreground tabular-nums">
                          {lang.percentage}%
                        </span>
                      </div>
                      <div className="skill-bar-track h-1.5">
                        <div
                          className="h-full rounded-full bg-primary/85"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectsSection() {
  const locale = useLocale();
  const isId = locale === "id";
  const t = useTranslations("projects");
  const featuredProjects = getFeaturedProjects();

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  const categoryColors: Record<string, string> = {
    "ai-ml": "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/25",
    "full-stack": "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/25",
    mobile: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/25",
    iot: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
    "web-app": "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/25",
    devops: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/25",
    research: "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/25",
  };

  const categoryLabels: Record<string, { id: string; en: string }> = {
    "ai-ml": { id: "AI/ML", en: "AI/ML" },
    "full-stack": { id: "Full Stack", en: "Full Stack" },
    mobile: { id: "Mobile", en: "Mobile" },
    iot: { id: "IoT", en: "IoT" },
    "web-app": { id: "Web App", en: "Web App" },
    devops: { id: "DevOps", en: "DevOps" },
    research: { id: "Riset", en: "Research" },
  };

  return (
    <section id="featured-projects" className="relative py-20">
      <div className="section-container">
        <AnimatedSection className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isId ? "Proyek Pilihan" : "Featured Work"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {isId ? "Sistem dalam Produksi" : "Production Systems"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
              {isId
                ? "Platform layanan publik dan rekayasa perangkat lunak yang sedang berjalan di lingkungan produksi."
                : "Public-service platforms and full-stack software systems running in production."}
            </p>
          </div>
          <Link
            href={getLocalizedHref("/projects")}
            id="see-all-projects"
            className="glass-subtle group inline-flex items-center gap-2 self-start rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            {isId ? "Semua Proyek" : "All Projects"}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <article
                className="project-card h-full p-6 flex flex-col"
                id={`featured-project-${project.slug}`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium ${
                      categoryColors[project.category]
                    }`}
                  >
                    {isId
                      ? categoryLabels[project.category].id
                      : categoryLabels[project.category].en}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    {project.status === "production" && (
                      <span className="rounded-full bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-sans font-medium text-emerald-700 dark:text-emerald-400">
                        Production
                      </span>
                    )}
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {isId ? project.name : project.nameEn}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-3">
                  {isId ? project.description : project.descriptionEn}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(isId
                      ? project.highlights
                      : project.highlightsEn || project.highlights
                    )
                      .slice(0, 3)
                      .map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center rounded-md bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {h}
                        </span>
                      ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech.name} className="tech-badge text-xs">
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5 pt-4 border-t border-[var(--glass-border)]">
                  <Link
                    href={getLocalizedHref(`/projects/${project.slug}`)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary/15 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/25 transition-colors"
                    id={`view-detail-${project.slug}`}
                  >
                    {t("view_detail")}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-subtle flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      aria-label={`${isId ? project.name : project.nameEn} GitHub`}
                      id={`github-link-${project.slug}`}
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-subtle flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      aria-label={`${isId ? project.name : project.nameEn} Live Demo`}
                      id={`demo-link-${project.slug}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
