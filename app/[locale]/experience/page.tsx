import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Clock, Code2, GraduationCap, User, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

import { IoTBackground } from "@/components/backgrounds/IoTBackground";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "id" ? "Pengalaman | Randi Sumitro" : "Experience | Randi Sumitro",
    description:
      locale === "id"
        ? "Timeline pengalaman profesional dan akademik Randi Sumitro."
        : "Professional and academic experience timeline of Randi Sumitro.",
  };
}

const experiences = [
  {
    id: "truthguard-ai",
    titleId: "TruthGuard AI — Enterprise Fraud Detection Platform",
    titleEn: "TruthGuard AI — Enterprise Fraud Detection Platform",
    organizationId: "Proyek Pribadi / Hackathon",
    organizationEn: "Personal Project / Hackathon",
    type: "personal" as const,
    startDate: "April 2026",
    endDate: "April 2026",
    descriptionId:
      "Merancang dan membangun platform deteksi penipuan enterprise menggunakan Azure AI Language, FastAPI, PostgreSQL, dan Docker. Proyek ini menampilkan akurasi model 89.2% dengan fitur Explainable AI dan Business Impact Calculator.",
    descriptionEn:
      "Designed and built an enterprise fraud detection platform using Azure AI Language, FastAPI, PostgreSQL, and Docker. The project features 89.2% model accuracy with Explainable AI and Business Impact Calculator.",
    technologies: ["Python", "FastAPI", "Azure AI Language", "PostgreSQL", "Docker", "JavaScript"],
    projectSlug: "truthguard-ai",
    icon: Code2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: "mlops-monitoring",
    titleId: "MLOps: Monitoring & Logging Pipeline",
    titleEn: "MLOps: Monitoring & Logging Pipeline",
    organizationId: "Proyek Akademik",
    organizationEn: "Academic Project",
    type: "academic" as const,
    startDate: "April 2026",
    endDate: "April 2026",
    descriptionId:
      "Implementasi infrastruktur MLOps lengkap dengan Prometheus dan Grafana untuk memonitor model machine learning Titanic survival prediction dalam environment production.",
    descriptionEn:
      "Implemented complete MLOps infrastructure with Prometheus and Grafana to monitor a Titanic survival prediction machine learning model in a production environment.",
    technologies: ["Python", "Prometheus", "Grafana", "Docker"],
    projectSlug: "mlops-monitoring-logging",
    icon: GraduationCap,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    id: "sml-experiments",
    titleId: "Supervised Machine Learning Experiments",
    titleEn: "Supervised Machine Learning Experiments",
    organizationId: "Proyek Akademik",
    organizationEn: "Academic Project",
    type: "academic" as const,
    startDate: "April 2026",
    endDate: "April 2026",
    descriptionId:
      "Serangkaian eksperimen machine learning menggunakan Jupyter Notebook untuk mengeksplorasi algoritma supervised learning dan best practices model evaluation.",
    descriptionEn:
      "Series of machine learning experiments using Jupyter Notebook to explore supervised learning algorithms and model evaluation best practices.",
    technologies: ["Python", "Scikit-learn", "Jupyter Notebook", "Pandas", "NumPy"],
    projectSlug: "eksperimen-ml-sml",
    icon: GraduationCap,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: "pkh-system",
    titleId: "Sistem Informasi Program Keluarga Harapan (PKH)",
    titleEn: "Program Keluarga Harapan (PKH) Information System",
    organizationId: "Proyek Klien",
    organizationEn: "Client Project",
    type: "client" as const,
    startDate: "Maret 2026",
    endDate: "Juni 2026",
    descriptionId:
      "Membangun sistem informasi web full-stack untuk mengelola data penerima program bantuan sosial PKH pemerintah Indonesia dengan multi-level user roles.",
    descriptionEn:
      "Built a full-stack web information system for managing data of Indonesian government PKH social welfare program beneficiaries with multi-level user roles.",
    technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    projectSlug: "sistem-informasi-pkh",
    icon: Briefcase,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: "biometric-iot",
    titleId: "Sistem Absensi Biometrik Berbasis IoT",
    titleEn: "IoT-Based Biometric Attendance System",
    organizationId: "Proyek Klien / Tugas Akhir",
    organizationEn: "Client Project / Final Assignment",
    type: "client" as const,
    startDate: "Juni 2026",
    endDate: "Juni 2026",
    descriptionId:
      "Mengintegrasikan fingerprint biometric hardware dengan backend PHP dan database MySQL untuk sistem absensi real-time yang dapat dimonitor via browser.",
    descriptionEn:
      "Integrated fingerprint biometric hardware with PHP backend and MySQL database for a real-time attendance system monitorable via browser.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Arduino/IoT"],
    projectSlug: "sistem-absensi-biometrik-iot",
    icon: User,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    id: "air-quality",
    titleId: "Sistem Deteksi Polusi Udara IoT",
    titleEn: "IoT Air Pollution Detection System",
    organizationId: "Proyek Pribadi",
    organizationEn: "Personal Project",
    type: "personal" as const,
    startDate: "Juni 2026",
    endDate: "Juni 2026",
    descriptionId:
      "Mengembangkan sistem monitoring kualitas udara end-to-end dengan sensor Arduino MQ-135, backend Python, dan antarmuka web real-time.",
    descriptionEn:
      "Developed end-to-end air quality monitoring system with Arduino MQ-135 sensor, Python backend, and real-time web interface.",
    technologies: ["Python", "Arduino", "MQ-135 Sensor", "HTML", "JavaScript"],
    projectSlug: "deteksi-polusi-udara",
    icon: Code2,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    id: "skck-queue",
    titleId: "Sistem Antrian SKCK Online",
    titleEn: "SKCK Online Queue System",
    organizationId: "Proyek Akademik / Klien",
    organizationEn: "Academic / Client Project",
    type: "client" as const,
    startDate: "Juni 2026",
    endDate: "Juni 2026",
    descriptionId:
      "Membangun sistem antrian berbasis web untuk pembuatan SKCK yang memungkinkan masyarakat mengambil nomor antrian secara online.",
    descriptionEn:
      "Built a web-based queue system for SKCK issuance that allows citizens to take queue numbers online.",
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    projectSlug: "antrian-skck",
    icon: Briefcase,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

const typeConfig = {
  personal: { labelId: "Proyek Pribadi", labelEn: "Personal Project", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  academic: { labelId: "Akademik", labelEn: "Academic", color: "text-green-400 border-green-500/20 bg-green-500/10" },
  organization: { labelId: "Organisasi", labelEn: "Organization", color: "text-purple-400 border-purple-500/20 bg-purple-500/10" },
  client: { labelId: "Proyek Klien", labelEn: "Client Project", color: "text-orange-400 border-orange-500/20 bg-orange-500/10" },
};

export default async function ExperiencePage() {
  const locale = await getLocale();

  return (
    <div className="relative min-h-screen">
      <IoTBackground />

      <div className="section-container relative z-10 py-20 pt-32">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <Clock className="h-3 w-3" />
            {locale === "id" ? "Timeline Profesional" : "Professional Timeline"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {locale === "id" ? "Pengalaman " : "My "}
            <span className="gradient-text">
              {locale === "id" ? "Saya" : "Experience"}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {locale === "id"
              ? "Perjalanan pengembangan profesional melalui berbagai proyek nyata."
              : "Professional development journey through various real projects."}
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { count: 3, labelId: "Proyek AI/ML", labelEn: "AI/ML Projects" },
              { count: 2, labelId: "Sistem IoT", labelEn: "IoT Systems" },
              { count: 3, labelId: "Web App", labelEn: "Web Apps" },
              { count: 5, labelId: "Teknologi Utama", labelEn: "Core Tech Stacks" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-4 text-center"
                id={`exp-stat-${i}`}
              >
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.count}+
                </div>
                <div className="text-xs text-muted-foreground">
                  {locale === "id" ? stat.labelId : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.id} delay={index * 0.08} direction="left">
                <div
                  className="relative glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
                  id={`experience-${exp.id}`}
                >
                  {/* Dot */}
                  <div className="absolute -left-12 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary/40">
                    <exp.icon className={`h-4 w-4 ${exp.color}`} />
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                            typeConfig[exp.type].color
                          }`}
                        >
                          {locale === "id"
                            ? typeConfig[exp.type].labelId
                            : typeConfig[exp.type].labelEn}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {locale === "id" ? exp.titleId : exp.titleEn}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {locale === "id"
                          ? exp.organizationId
                          : exp.organizationEn}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <Clock className="h-3 w-3" />
                        {exp.startDate}
                        {exp.endDate && exp.endDate !== exp.startDate && (
                          <> — {exp.endDate}</>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {locale === "id" ? exp.descriptionId : exp.descriptionEn}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
