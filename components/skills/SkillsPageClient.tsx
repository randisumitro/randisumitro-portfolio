"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Code2, Database, BrainCircuit, Cpu, Layers, Wrench, ChevronDown, CheckCircle2 } from "lucide-react";
import { skillGroups, languageStats } from "@/lib/skills";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import type { TechCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryConfig: Record<TechCategory, { icon: typeof Code2; labelId: string; labelEn: string; color: string }> = {
  language: { icon: Code2, labelId: "Bahasa Pemrograman", labelEn: "Languages", color: "text-blue-400" },
  frontend: { icon: Layers, labelId: "Frontend", labelEn: "Frontend", color: "text-cyan-400" },
  backend: { icon: Wrench, labelId: "Backend", labelEn: "Backend", color: "text-green-400" },
  database: { icon: Database, labelId: "Database", labelEn: "Database", color: "text-orange-400" },
  ml: { icon: BrainCircuit, labelId: "Machine Learning & AI", labelEn: "Machine Learning & AI", color: "text-purple-400" },
  iot: { icon: Cpu, labelId: "IoT & Embedded", labelEn: "IoT & Embedded", color: "text-teal-400" },
  devops: { icon: Layers, labelId: "DevOps & Tools", labelEn: "DevOps & Tools", color: "text-red-400" },
  tools: { icon: Wrench, labelId: "Tools", labelEn: "Tools", color: "text-yellow-400" },
};

export function SkillsPageClient() {
  const locale = useLocale();
  const [expandedCategory, setExpandedCategory] = useState<string | null>("language");

  return (
    <div className="space-y-16">
      {/* Language Distribution */}
      <AnimatedSection delay={0.1}>
        <div className="glass-card rounded-2xl p-8" id="language-distribution">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            {locale === "id" ? "Distribusi Bahasa Pemrograman" : "Programming Language Distribution"}
          </h2>

          {/* Visual bar */}
          <div className="flex h-3 w-full rounded-full overflow-hidden mb-6 gap-0.5">
            {languageStats.map((lang) => (
              <motion.div
                key={lang.language}
                initial={{ width: 0 }}
                animate={{ width: `${lang.percentage}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                style={{ backgroundColor: lang.color }}
                className="h-full"
                title={`${lang.language}: ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            {languageStats.map((lang) => (
              <div key={lang.language} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {lang.language}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {lang.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skill Groups Accordion */}
      <div className="space-y-4">
        {skillGroups.map((group, groupIndex) => {
          const config = categoryConfig[group.category];
          const isExpanded = expandedCategory === group.category;

          return (
            <AnimatedSection key={group.category} delay={groupIndex * 0.05}>
              <div
                className={cn(
                  "glass-card rounded-2xl overflow-hidden transition-all duration-300",
                  isExpanded && "ring-1 ring-primary/30"
                )}
                id={`skill-group-${group.category}`}
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setExpandedCategory(isExpanded ? null : group.category)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                  id={`toggle-${group.category}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                      <config.icon className={`h-5 w-5 ${config.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {locale === "id" ? config.labelId : config.labelEn}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {group.skills.length}{" "}
                        {locale === "id" ? "teknologi" : "technologies"}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Skills */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4 border-t border-border/50 pt-4">
                        {group.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="space-y-2"
                            id={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-2 w-2 rounded-full"
                                  style={{ backgroundColor: skill.color }}
                                />
                                <span className="text-sm font-medium text-foreground">
                                  {skill.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-muted-foreground">
                                  {skill.usedIn.length}{" "}
                                  {locale === "id" ? "proyek" : "projects"}
                                </span>
                                <span className="text-xs font-mono font-bold text-primary">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                            <div className="skill-bar-track">
                              <motion.div
                                className="skill-bar-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 0.8,
                                  delay: skillIndex * 0.05,
                                  ease: "easeOut",
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Key Achievements */}
      <AnimatedSection delay={0.3}>
        <div className="glass-card rounded-2xl p-8" id="key-achievements">
          <h2 className="text-xl font-bold text-foreground mb-6">
            {locale === "id" ? "Pencapaian Kunci" : "Key Achievements"}
          </h2>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: "Model Accuracy 89.2%",
                en: "Model Accuracy 89.2%",
                desc_id: "TruthGuard AI fraud detection model dengan akurasi tinggi menggunakan Azure AI Language",
                desc_en: "TruthGuard AI fraud detection model with high accuracy using Azure AI Language",
              },
              {
                id: "5 Kategori Teknologi",
                en: "5 Technology Categories",
                desc_id: "Menguasai Frontend, Backend, IoT, ML/AI, dan DevOps dalam proyek nyata",
                desc_en: "Mastering Frontend, Backend, IoT, ML/AI, and DevOps in real projects",
              },
              {
                id: "Docker Production Ready",
                en: "Docker Production Ready",
                desc_id: "TruthGuard AI dapat di-deploy dengan Docker Compose dalam hitungan menit",
                desc_en: "TruthGuard AI deployable with Docker Compose in minutes",
              },
              {
                id: "Hardware + Software",
                en: "Hardware + Software",
                desc_id: "Integrasi unik antara hardware IoT (Arduino) dengan software web modern",
                desc_en: "Unique integration between IoT hardware (Arduino) and modern web software",
              },
            ].map((achievement) => (
              <StaggerItem key={achievement.en}>
                <div className="flex items-start gap-3 rounded-xl bg-primary/5 border border-primary/20 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {locale === "id" ? achievement.id : achievement.en}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {locale === "id" ? achievement.desc_id : achievement.desc_en}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </div>
  );
}
