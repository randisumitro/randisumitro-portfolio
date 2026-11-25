import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Clock, Code2, GraduationCap, User, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface ExperiencePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Pengalaman" : "Experience",
    description: isId
      ? "Rekam jejak proyek profesional, klien, dan akademik Randi Sumitro."
      : "Professional, client, and academic engineering experience of Randi Sumitro.",
  };
}

const experiences = [
  {
    id: "truthguard-ai",
    titleId: "TruthGuard AI — Platform Deteksi Penipuan",
    titleEn: "TruthGuard AI — Fraud Detection Platform",
    organizationId: "Proyek Pribadi / Hackathon",
    organizationEn: "Personal Project / Hackathon",
    type: "personal" as const,
    startDate: "April 2026",
    endDate: "April 2026",
    descriptionId:
      "Merancang dan membangun platform deteksi penipuan menggunakan Azure AI Language, FastAPI, PostgreSQL, dan Docker dengan akurasi model 89.2% serta kalkulator dampak bisnis.",
    descriptionEn:
      "Designed and built a fraud detection platform using Azure AI Language, FastAPI, PostgreSQL, and Docker featuring 89.2% model accuracy and explainable risk scoring.",
    technologies: [
      "Python",
      "FastAPI",
      "Azure AI Language",
      "PostgreSQL",
      "Docker",
      "JavaScript",
    ],
    icon: Code2,
    color: "text-purple-400",
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
      "Implementasi pipeline MLOps dengan Prometheus dan Grafana untuk memonitor performa model machine learning pada lingkungan produksi.",
    descriptionEn:
      "Implemented MLOps observability pipeline with Prometheus and Grafana to monitor machine learning model performance in production.",
    technologies: ["Python", "Prometheus", "Grafana", "Docker"],
    icon: GraduationCap,
    color: "text-amber-400",
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
      "Eksperimen terstruktur menggunakan Jupyter Notebook untuk mengevaluasi algoritma supervised learning dan teknik validasi silang.",
    descriptionEn:
      "Structured machine learning experiments in Jupyter Notebook evaluating supervised learning algorithms and cross-validation pipelines.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
    ],
    icon: GraduationCap,
    color: "text-cyan-400",
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
      "Membangun sistem informasi web full-stack untuk mengelola data penerima program bantuan sosial PKH dengan hak akses multi-peran.",
    descriptionEn:
      "Built a full-stack web information system for managing Indonesian government PKH social welfare beneficiary data with multi-role access control.",
    technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    icon: Briefcase,
    color: "text-sky-400",
  },
  {
    id: "biometric-iot",
    titleId: "Sistem Absensi Biometrik Berbasis IoT",
    titleEn: "IoT-Based Biometric Attendance System",
    organizationId: "Proyek Klien / Tugas Akhir",
    organizationEn: "Client Project / Capstone",
    type: "client" as const,
    startDate: "Juni 2026",
    endDate: "Juni 2026",
    descriptionId:
      "Mengintegrasikan perangkat sensor sidik jari biometrik dengan backend PHP dan database MySQL untuk pemantauan kehadiran real-time.",
    descriptionEn:
      "Integrated fingerprint biometric hardware with a PHP backend and MySQL database for real-time browser attendance monitoring.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Arduino/IoT",
    ],
    icon: User,
    color: "text-emerald-400",
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
      "Mengembangkan sistem pemantauan kualitas udara menggunakan sensor Arduino MQ-135, backend Python, dan antarmuka web real-time.",
    descriptionEn:
      "Developed an air quality monitoring system with Arduino MQ-135 sensor, Python serial backend, and real-time web dashboard.",
    technologies: ["Python", "Arduino", "MQ-135 Sensor", "HTML", "JavaScript"],
    icon: Code2,
    color: "text-teal-400",
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
      "Membangun sistem antrian berbasis web untuk layanan SKCK sehingga pemohon dapat mengambil nomor antrian secara daring.",
    descriptionEn:
      "Built a web-based queue system for SKCK issuance enabling citizens to book queue numbers online.",
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    icon: Briefcase,
    color: "text-yellow-400",
  },
];

const typeConfig = {
  personal: {
    labelId: "Proyek Pribadi",
    labelEn: "Personal Project",
    color: "text-sky-700 dark:text-sky-300 border-sky-500/25 bg-sky-500/15",
  },
  academic: {
    labelId: "Akademik",
    labelEn: "Academic",
    color: "text-emerald-700 dark:text-emerald-300 border-emerald-500/25 bg-emerald-500/15",
  },
  organization: {
    labelId: "Organisasi",
    labelEn: "Organization",
    color: "text-purple-700 dark:text-purple-300 border-purple-500/25 bg-purple-500/15",
  },
  client: {
    labelId: "Proyek Klien",
    labelEn: "Client Project",
    color: "text-amber-800 dark:text-amber-300 border-amber-500/25 bg-amber-500/15",
  },
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  return (
    <div className="relative min-h-screen">
      <div className="section-container py-16 pt-20">
        <AnimatedSection immediate className="text-center mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {isId ? "Timeline Profesional" : "Professional Timeline"}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {isId ? "Pengalaman " : "My "}
            <span className="text-primary">
              {isId ? "Saya" : "Experience"}
            </span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {isId
              ? "Rekam jejak pengembangan aplikasi web, sistem AI/ML, dan perangkat IoT."
              : "Engineering track record across production web apps, AI/ML pipelines, and IoT systems."}
          </p>
        </AnimatedSection>

        <AnimatedSection immediate className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { count: "3+", labelId: "Proyek AI/ML", labelEn: "AI/ML Projects" },
              { count: "2+", labelId: "Sistem IoT", labelEn: "IoT Systems" },
              { count: "3+", labelId: "Web App", labelEn: "Web Apps" },
              { count: "5+", labelId: "Stack Utama", labelEn: "Core Stacks" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card p-5 text-center"
                id={`exp-stat-${i}`}
              >
                <div className="text-3xl font-bold text-primary mb-1 tabular-nums">
                  {stat.count}
                </div>
                <div className="text-xs text-muted-foreground">
                  {isId ? stat.labelId : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="relative pl-12">
          <div className="timeline-line" aria-hidden="true" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={index * 0.05}
                direction="left"
              >
                <article
                  className="relative glass-card p-6"
                  id={`experience-${exp.id}`}
                >
                  <div className="glass-card absolute -left-12 top-6 flex h-8 w-8 items-center justify-center rounded-full">
                    <exp.icon className={`h-4 w-4 ${exp.color}`} aria-hidden="true" />
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="space-y-1.5">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          typeConfig[exp.type].color
                        }`}
                      >
                        {isId
                          ? typeConfig[exp.type].labelId
                          : typeConfig[exp.type].labelEn}
                      </span>
                      <h2 className="text-lg font-bold text-foreground">
                        {isId ? exp.titleId : exp.titleEn}
                      </h2>
                      <p className="text-sm text-primary font-medium">
                        {isId ? exp.organizationId : exp.organizationEn}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>
                        {exp.startDate}
                        {exp.endDate && exp.endDate !== exp.startDate
                          ? ` — ${exp.endDate}`
                          : ""}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[65ch]">
                    {isId ? exp.descriptionId : exp.descriptionEn}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
