"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Github, ExternalLink, ArrowRight, Search } from "lucide-react";
import { projects } from "@/lib/projects";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryFilters: {
  key: string;
  category: ProjectCategory | "all";
  labelId: string;
  labelEn: string;
}[] = [
  { key: "all", category: "all", labelId: "Semua", labelEn: "All" },
  { key: "ai-ml", category: "ai-ml", labelId: "AI/ML", labelEn: "AI/ML" },
  {
    key: "full-stack",
    category: "full-stack",
    labelId: "Full Stack",
    labelEn: "Full Stack",
  },
  { key: "iot", category: "iot", labelId: "IoT", labelEn: "IoT" },
  { key: "web-app", category: "web-app", labelId: "Web App", labelEn: "Web App" },
  { key: "devops", category: "devops", labelId: "DevOps", labelEn: "DevOps" },
  { key: "research", category: "research", labelId: "Riset", labelEn: "Research" },
];

const categoryColors: Record<string, string> = {
  "ai-ml": "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/25",
  "full-stack": "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/25",
  iot: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
  "web-app": "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/25",
  devops: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/25",
  research: "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/25",
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
  const isId = locale === "id";
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      project.name.toLowerCase().includes(query) ||
      project.nameEn.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.descriptionEn.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.name.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  return (
    <div className="space-y-8">
      {/* Search & Filters */}
      <search className="glass-card p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <label htmlFor="project-search" className="visually-hidden">
              {isId ? "Cari proyek atau teknologi" : "Search projects or technologies"}
            </label>
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder={
                isId
                  ? "Cari proyek atau teknologi..."
                  : "Search projects or technologies..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input w-full rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              id="project-search"
            />
          </div>

          <p className="text-sm text-muted-foreground tabular-nums" aria-live="polite">
            {filteredProjects.length}{" "}
            {isId ? "proyek ditemukan" : "projects found"}
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={isId ? "Filter kategori" : "Category filter"}
        >
          {categoryFilters.map((filter) => {
            const active = activeCategory === filter.key;
            return (
              <button
                type="button"
                key={filter.key}
                id={`filter-${filter.key}`}
                aria-pressed={active}
                onClick={() => setActiveCategory(filter.key)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-colors",
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "glass-subtle text-muted-foreground hover:text-foreground hover:border-primary/40"
                )}
              >
                {isId ? filter.labelId : filter.labelEn}
              </button>
            );
          })}
        </div>
      </search>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card h-full p-6 flex flex-col"
              id={`project-card-${project.slug}`}
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
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono shrink-0">
                  {project.status === "production" && (
                    <span className="rounded-full bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-sans font-medium text-emerald-700 dark:text-emerald-400">
                      Production
                    </span>
                  )}
                  <span>{project.year}</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                {isId ? project.name : project.nameEn}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                {isId ? project.description : project.descriptionEn}
              </p>

              {project.highlights && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(isId
                    ? project.highlights
                    : project.highlightsEn || project.highlights
                  )
                    .slice(0, 2)
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
                  id={`project-detail-${project.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary/15 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/25 transition-colors"
                >
                  {isId ? "Detail" : "Details"}
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`github-${project.slug}`}
                    className="glass-subtle flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    aria-label={`${isId ? project.name : project.nameEn} GitHub`}
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`demo-${project.slug}`}
                    className="glass-subtle flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    aria-label={`${isId ? project.name : project.nameEn} Live Demo`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="glass-card text-center py-16">
          <p className="text-muted-foreground">
            {isId
              ? "Tidak ada proyek yang sesuai filter."
              : "No projects match the selected filter."}
          </p>
        </div>
      )}
    </div>
  );
}
