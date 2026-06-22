"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Github, ExternalLink, Star, ArrowRight, Search } from "lucide-react";
import { projects } from "@/lib/projects";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const categoryFilters: { key: string; category: ProjectCategory | "all"; labelId: string; labelEn: string }[] = [
  { key: "all", category: "all", labelId: "Semua", labelEn: "All" },
  { key: "ai-ml", category: "ai-ml", labelId: "AI/ML", labelEn: "AI/ML" },
  { key: "full-stack", category: "full-stack", labelId: "Full Stack", labelEn: "Full Stack" },
  { key: "iot", category: "iot", labelId: "IoT", labelEn: "IoT" },
  { key: "web-app", category: "web-app", labelId: "Web App", labelEn: "Web App" },
  { key: "devops", category: "devops", labelId: "DevOps", labelEn: "DevOps" },
  { key: "research", category: "research", labelId: "Riset", labelEn: "Research" },
];

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

export function ProjectsPageClient() {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  return (
    <div className="space-y-10">
      {/* Filters */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={locale === "id" ? "Cari proyek atau teknologi..." : "Search projects or technologies..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-card/50 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm"
            id="project-search"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              id={`filter-${filter.key}`}
              onClick={() => setActiveCategory(filter.key)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium border transition-all",
                activeCategory === filter.key
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "border-border/50 bg-card/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border"
              )}
            >
              {locale === "id" ? filter.labelId : filter.labelEn}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-muted-foreground">
          {filteredProjects.length}{" "}
          {locale === "id"
            ? `proyek ditemukan`
            : `projects found`}
        </p>
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + searchQuery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filteredProjects.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="project-card group h-full rounded-2xl p-6 flex flex-col"
                    id={`project-card-${project.slug}`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                          categoryColors[project.category]
                        }`}
                      >
                        {locale === "id"
                          ? categoryLabels[project.category].id
                          : categoryLabels[project.category].en}
                      </span>
                      <div className="flex items-center gap-0.5 shrink-0">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-3 w-3",
                              i < project.complexity
                                ? "fill-primary text-primary"
                                : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {locale === "id" ? project.name : project.nameEn}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                      {locale === "id"
                        ? project.description
                        : project.descriptionEn}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {(locale === "id"
                          ? project.highlights
                          : project.highlightsEn || project.highlights
                        )
                          .slice(0, 2)
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

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
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

                    {/* Year */}
                    <div className="mb-4">
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.year}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <Link
                        href={getLocalizedHref(`/projects/${project.slug}`)}
                        id={`project-detail-${project.slug}`}
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                      >
                        {locale === "id" ? "Detail" : "Details"}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`github-${project.slug}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`demo-${project.slug}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                {locale === "id"
                  ? "Tidak ada proyek yang sesuai filter."
                  : "No projects match the filter."}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
