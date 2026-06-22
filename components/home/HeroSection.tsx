"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Star,
  GitFork,
  BookOpen,
  ChevronDown,
  ExternalLink,
  Zap,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import type { GitHubStats } from "@/types";
import { getFeaturedProjects } from "@/lib/projects";

import { HeroBackground } from "@/components/backgrounds/HeroBackground";

interface HeroSectionProps {
  githubStats: GitHubStats;
}

export function HeroSection({ githubStats }: HeroSectionProps) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const roles: string[] = t.raw("roles") as string[];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const getLocalizedHref = useCallback(
    (href: string) => `/${locale}${href}`,
    [locale]
  );

  const statItems = [
    {
      icon: Zap,
      value: "3+",
      label: locale === "id" ? "Sistem Produksi" : "Systems in Production",
      id: "stat-production",
    },
    {
      icon: Star,
      value: "4+",
      label: locale === "id" ? "Tahun Pengalaman" : "Years Experience",
      id: "stat-experience",
    },
    {
      icon: BookOpen,
      value: githubStats.publicRepos,
      label: locale === "id" ? "Repository" : "Repositories",
      id: "stat-repos",
    },
    {
      icon: githubStats.totalCommits ? GitFork : BookOpen,
      value: githubStats.totalCommits || githubStats.topLanguages.length,
      label: githubStats.totalCommits 
        ? (locale === "id" ? "Total Komit" : "Total Commits")
        : (locale === "id" ? "Teknologi" : "Technologies"),
      id: "stat-commits",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="section-container relative z-10 flex flex-col items-center text-center gap-8 py-20 pt-32">
        {/* Available badge */}
        <AnimatedSection delay={0.1}>
          <div
            id="available-badge"
            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            {t("available")}
          </div>
        </AnimatedSection>

        {/* Avatar */}
        <AnimatedSection delay={0.2}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative h-28 w-28 rounded-full">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-0.5 animate-gradient">
                <div className="h-full w-full rounded-full bg-background" />
              </div>
              <Image
                src={githubStats.avatarUrl || "https://avatars.githubusercontent.com/u/136390141?v=4"}
                alt="Randi Sumitro"
                width={112}
                height={112}
                className="absolute inset-0.5 rounded-full object-cover"
                priority
                unoptimized
                id="hero-avatar"
              />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection delay={0.3}>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-medium">
              {t("greeting")}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text-warm">{t("name")}</span>
            </h1>

            {/* Animated role */}
            <div className="h-10 flex items-center justify-center">
              {mounted && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-xl sm:text-2xl font-semibold text-primary"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={0.4} className="max-w-2xl">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            {t("description")}
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={getLocalizedHref("/projects")}
              id="hero-cta-projects"
              className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shimmer-button shadow-sm hover:shadow-md"
            >
              {t("cta_projects")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={getLocalizedHref("/contact")}
              id="hero-cta-contact"
              className="flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-6 py-3 text-sm font-semibold text-foreground hover:bg-card hover:border-primary/50 transition-all backdrop-blur-sm"
            >
              {t("cta_contact")}
            </Link>
          </div>
        </AnimatedSection>

        {/* Social links */}
        <AnimatedSection delay={0.6}>
          <div className="flex items-center gap-4">
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
              <motion.a
                key={social.label}
                id={social.id}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors backdrop-blur-sm"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        {/* GitHub Stats */}
        <AnimatedSection delay={0.7} className="w-full max-w-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {statItems.map((stat) => (
              <motion.div
                key={stat.id}
                id={stat.id}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-card p-4 text-center rounded-xl"
              >
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Language distribution */}
        <AnimatedSection delay={0.8} className="w-full max-w-2xl">
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {locale === "id"
                  ? "Bahasa Pemrograman Utama"
                  : "Top Programming Languages"}
              </span>
              <a
                href="https://github.com/randisumitro"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-primary hover:underline flex items-center gap-1"
                id="hero-view-github"
              >
                GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Language bars */}
            <div className="space-y-3">
              {githubStats.topLanguages.slice(0, 5).map((lang) => (
                <div key={lang.language} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">
                      {lang.language}
                    </span>
                    <span className="text-muted-foreground">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.percentage}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.9,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Scroll hint */}
        <AnimatedSection delay={1} className="pt-4">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">{t("scroll_hint")}</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Featured Projects Section
export function FeaturedProjectsSection() {
  const locale = useLocale();
  const t = useTranslations("projects");
  const featuredProjects = getFeaturedProjects();

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  const categoryColors: Record<string, string> = {
    "ai-ml": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "full-stack": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iot: "bg-green-500/10 text-green-400 border-green-500/20",
    "web-app": "bg-orange-500/10 text-orange-400 border-orange-500/20",
    devops: "bg-red-500/10 text-red-400 border-red-500/20",
    research: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  };

  const categoryLabels: Record<string, { id: string; en: string }> = {
    "ai-ml": { id: "AI/ML", en: "AI/ML" },
    "full-stack": { id: "Full Stack", en: "Full Stack" },
    iot: { id: "IoT", en: "IoT" },
    "web-app": { id: "Web App", en: "Web App" },
    devops: { id: "DevOps", en: "DevOps" },
    research: { id: "Riset", en: "Research" },
  };

  return (
    <section id="featured-projects" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <Star className="h-3 w-3" />
            {locale === "id" ? "Proyek Pilihan" : "Featured Projects"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {locale === "id"
              ? "Proyek yang Paling Kompleks"
              : "Most Complex Projects"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {locale === "id"
              ? "Pilihan terbaik dari seluruh repository GitHub saya"
              : "The best selection from all my GitHub repositories"}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -6 }}
                className="project-card group h-full rounded-2xl p-6 flex flex-col"
                id={`featured-project-${project.slug}`}
              >
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                      categoryColors[project.category]
                    }`}
                  >
                    {locale === "id"
                      ? categoryLabels[project.category].id
                      : categoryLabels[project.category].en}
                  </span>
                  {/* Complexity stars */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < project.complexity
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Project name */}
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {locale === "id" ? project.name : project.nameEn}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-3">
                  {locale === "id"
                    ? project.description
                    : project.descriptionEn}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(locale === "id" ? project.highlights : project.highlightsEn || project.highlights)
                      .slice(0, 3)
                      .map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {h}
                        </span>
                      ))}
                  </div>
                )}

                {/* Tech stack */}
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

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Link
                    href={getLocalizedHref(`/projects/${project.slug}`)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                    id={`view-detail-${project.slug}`}
                  >
                    {t("view_detail")}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    aria-label="GitHub"
                    id={`github-link-${project.slug}`}
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                      aria-label="Live Demo"
                      id={`demo-link-${project.slug}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            href={getLocalizedHref("/projects")}
            id="see-all-projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-6 py-3 text-sm font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all"
          >
            {locale === "id" ? "Lihat Semua Proyek" : "See All Projects"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
