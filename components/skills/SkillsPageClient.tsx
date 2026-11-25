"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import {
  Code2,
  Database,
  BrainCircuit,
  Cpu,
  Layers,
  Wrench,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { skillGroups, languageStats } from "@/lib/skills";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { TechCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryConfig: Record<
  TechCategory,
  { icon: typeof Code2; labelId: string; labelEn: string; color: string }
> = {
  language: {
    icon: Code2,
    labelId: "Bahasa Pemrograman",
    labelEn: "Languages",
    color: "text-sky-400",
  },
  frontend: {
    icon: Layers,
    labelId: "Frontend",
    labelEn: "Frontend",
    color: "text-cyan-400",
  },
  backend: {
    icon: Wrench,
    labelId: "Backend",
    labelEn: "Backend",
    color: "text-emerald-400",
  },
  database: {
    icon: Database,
    labelId: "Database",
    labelEn: "Database",
    color: "text-amber-400",
  },
  ml: {
    icon: BrainCircuit,
    labelId: "Machine Learning & AI",
    labelEn: "Machine Learning & AI",
    color: "text-purple-400",
  },
  iot: {
    icon: Cpu,
    labelId: "IoT & Embedded",
    labelEn: "IoT & Embedded",
    color: "text-teal-400",
  },
  devops: {
    icon: Layers,
    labelId: "DevOps & Tools",
    labelEn: "DevOps & Tools",
    color: "text-rose-400",
  },
  tools: {
    icon: Wrench,
    labelId: "Tools",
    labelEn: "Tools",
    color: "text-yellow-400",
  },
};

export function SkillsPageClient() {
  const locale = useLocale();
  const isId = locale === "id";
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "language"
  );

  return (
    <div className="space-y-12">
      {/* Language Distribution */}
      <AnimatedSection immediate>
        <div className="glass-card p-6 sm:p-8" id="language-distribution">
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-5 flex items-center gap-2.5">
            <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
            {isId
              ? "Distribusi Bahasa Pemrograman (GitHub)"
              : "Programming Language Distribution (GitHub)"}
          </h2>

          <div
            className="flex h-3 w-full rounded-full overflow-hidden mb-5 gap-0.5 bg-white/5"
            role="img"
            aria-label={languageStats
              .map((l) => `${l.language} ${l.percentage}%`)
              .join(", ")}
          >
            {languageStats.map((lang) => (
              <div
                key={lang.language}
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                }}
                className="h-full first:rounded-l-full last:rounded-r-full"
              />
            ))}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {languageStats.map((lang) => (
              <li key={lang.language} className="flex items-center gap-2 text-sm">
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: lang.color }}
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{lang.language}</span>
                <span className="font-mono font-semibold text-foreground tabular-nums">
                  {lang.percentage}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* Skill Groups Accordion */}
      <div className="space-y-4">
        {skillGroups.map((group) => {
          const config = categoryConfig[group.category];
          const isExpanded = expandedCategory === group.category;
          const panelId = `skill-panel-${group.category}`;

          return (
            <div
              key={group.category}
              className={cn(
                "glass-card overflow-hidden transition-colors",
                isExpanded && "border-primary/35"
              )}
              id={`skill-group-${group.category}`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedCategory(isExpanded ? null : group.category)
                  }
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/5 transition-colors"
                  id={`toggle-${group.category}`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="glass-subtle flex h-10 w-10 items-center justify-center rounded-xl">
                      <config.icon
                        className={`h-5 w-5 ${config.color}`}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <span className="block font-semibold text-foreground">
                        {isId ? config.labelId : config.labelEn}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {group.skills.length}{" "}
                        {isId ? "teknologi" : "technologies"}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-[var(--glass-border)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="glass-subtle rounded-xl p-4 space-y-2"
                          id={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                className="h-2.5 w-2.5 rounded-full shrink-0"
                                style={{ backgroundColor: skill.color }}
                                aria-hidden="true"
                              />
                              <span className="text-sm font-semibold text-foreground truncate">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs font-mono text-primary shrink-0">
                              {skill.usedIn.length}{" "}
                              {isId ? "proyek" : "projects"}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {skill.usedIn.join(" · ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Key Highlights */}
      <AnimatedSection>
        <section className="glass-card p-6 sm:p-8" id="key-achievements">
          <h2 className="text-xl font-bold text-foreground mb-5">
            {isId ? "Ringkasan Kapabilitas" : "Core Capabilities"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: "Model Deteksi Penipuan (Akurasi 89.2%)",
                en: "Fraud Detection Model (89.2% Accuracy)",
                desc_id:
                  "TruthGuard AI menggunakan Azure AI Language dan FastAPI dengan explainability scoring.",
                desc_en:
                  "TruthGuard AI built with Azure AI Language and FastAPI with risk explainability.",
              },
              {
                id: "Layanan Publik Skala Produksi",
                en: "Production Public-Service Platforms",
                desc_id:
                  "Pengembangan SIMPONI, DPMPTSP, dan MPP Digital untuk layanan masyarakat kota.",
                desc_en:
                  "Built and operated SIMPONI, DPMPTSP, and MPP Digital for municipal government services.",
              },
              {
                id: "Containerized & Observable ML",
                en: "Containerized & Observable ML",
                desc_id:
                  "Deployment Docker Compose serta pemantauan performa model dengan Prometheus dan Grafana.",
                desc_en:
                  "Docker Compose deployments and ML telemetry monitoring via Prometheus and Grafana.",
              },
              {
                id: "Integrasi Hardware IoT + Web",
                en: "IoT Hardware + Web Integration",
                desc_id:
                  "Koneksi sensor Arduino MQ-135 dan fingerprint biometrik ke antarmuka web real-time.",
                desc_en:
                  "Connecting Arduino MQ-135 sensors and biometric hardware to real-time web backends.",
              },
            ].map((item) => (
              <div
                key={item.en}
                className="glass-subtle flex items-start gap-3 rounded-xl p-4"
              >
                <CheckCircle2
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {isId ? item.id : item.en}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {isId ? item.desc_id : item.desc_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
