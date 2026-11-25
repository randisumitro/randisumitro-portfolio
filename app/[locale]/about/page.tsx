import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import {
  Code2,
  Cpu,
  BrainCircuit,
  Globe,
  Layers,
  Lightbulb,
  Target,
  ChevronRight,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Tentang Saya" : "About Me",
    description: isId
      ? "Profil profesional, pengalaman, dan bidang fokus Randi Sumitro sebagai Full Stack Developer, IoT Engineer, dan ML Researcher."
      : "Professional profile, engineering background, and focus areas of Randi Sumitro — Full Stack Developer, IoT Engineer, and ML Researcher.",
  };
}

const focusAreas = [
  {
    icon: Code2,
    titleId: "Full Stack Web Development",
    titleEn: "Full Stack Web Development",
    descId:
      "Membangun aplikasi web end-to-end dari antarmuka hingga database menggunakan TypeScript, Next.js, PHP, Python (FastAPI), dan PostgreSQL.",
    descEn:
      "Building end-to-end web applications from UI to database with TypeScript, Next.js, PHP, Python (FastAPI), and PostgreSQL.",
    color: "text-sky-400",
  },
  {
    icon: Cpu,
    titleId: "Internet of Things (IoT)",
    titleEn: "Internet of Things (IoT)",
    descId:
      "Mengintegrasikan mikrokontroler Arduino dan sensor fisik dengan backend web untuk monitoring dan pencatatan data real-time.",
    descEn:
      "Integrating Arduino microcontrollers and physical sensors with web backends for real-time monitoring and telemetry.",
    color: "text-emerald-400",
  },
  {
    icon: BrainCircuit,
    titleId: "Machine Learning & AI",
    titleEn: "Machine Learning & AI",
    descId:
      "Mengembangkan model prediksi dan deteksi risiko dengan Scikit-learn, CatBoost, Azure AI Language, dan evaluasi berbasis metrik.",
    descEn:
      "Developing predictive and risk-detection models with Scikit-learn, CatBoost, Azure AI Language, and metric-driven evaluation.",
    color: "text-purple-400",
  },
  {
    icon: Layers,
    titleId: "System Analysis & Design",
    titleEn: "System Analysis & Design",
    descId:
      "Merancang arsitektur sistem informasi yang terstruktur untuk layanan publik pemerintah maupun aplikasi bisnis.",
    descEn:
      "Designing structured information system architectures for government public services and operational web platforms.",
    color: "text-amber-400",
  },
  {
    icon: Globe,
    titleId: "MLOps & DevOps",
    titleEn: "MLOps & DevOps",
    descId:
      "Menyiapkan container Docker, monitoring Prometheus, dashboard Grafana, dan pipeline deployment untuk layanan produksi.",
    descEn:
      "Setting up Docker containers, Prometheus metrics, Grafana dashboards, and deployment pipelines for production services.",
    color: "text-rose-400",
  },
];

const journey = [
  {
    year: "2023",
    titleId: "Digitalisasi Pengadaan Daerah",
    titleEn: "Regional Procurement Digitalization",
    descId:
      "Memimpin pengembangan SIMPONI, sistem manajemen pengadaan digital untuk transparansi administrasi daerah.",
    descEn:
      "Led the development of SIMPONI, a digital procurement management system for transparent local administration.",
    icon: Globe,
  },
  {
    year: "2024",
    titleId: "Portal Perizinan Terpadu",
    titleEn: "Integrated Licensing Portal",
    descId:
      "Membangun sistem pelacakan berkas perizinan dan notifikasi real-time untuk DPMPTSP Kota Pematangsiantar.",
    descEn:
      "Built permit tracking and real-time notification workflows for DPMPTSP Pematangsiantar.",
    icon: Cpu,
  },
  {
    year: "2025",
    titleId: "Portal Layanan Publik Terpadu",
    titleEn: "Integrated Public Service Portal",
    descId:
      "Merancang arsitektur MPP Digital untuk menyatukan layanan pemerintah kota ke dalam satu portal SSO.",
    descEn:
      "Designed the architecture for MPP Digital, unifying municipal services under a single SSO portal.",
    icon: BrainCircuit,
  },
  {
    year: "2026",
    titleId: "Applied AI & Full Stack",
    titleEn: "Applied AI & Full Stack",
    descId:
      "Mengembangkan TruthGuard AI dengan Azure AI Language & FastAPI serta fitur prediksi waktu perizinan berbasis CatBoost di SIMPONI.",
    descEn:
      "Built TruthGuard AI with Azure AI Language & FastAPI alongside a CatBoost ML time-estimation microservice for SIMPONI.",
    icon: Lightbulb,
  },
];

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  const researchInterests = isId
    ? [
        "AI untuk deteksi penipuan dan analisis risiko finansial",
        "IoT untuk pemantauan kualitas udara dan lingkungan",
        "MLOps dan pemantauan model machine learning di produksi",
        "Sistem informasi terintegrasi untuk layanan publik",
        "Explainable AI (XAI) untuk kebutuhan audit dan kepatuhan",
      ]
    : [
        "AI for fraud detection and financial risk analysis",
        "IoT for air quality and environmental monitoring",
        "MLOps and production machine learning observability",
        "Integrated information systems for public services",
        "Explainable AI (XAI) for auditability and compliance",
      ];

  return (
    <div className="relative min-h-screen">
      <div className="section-container py-16 pt-20 space-y-16">
        {/* Header */}
        <AnimatedSection immediate className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {isId ? "Profil Profesional" : "Professional Profile"}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {isId ? "Tentang " : "About "}
            <span className="text-primary">{isId ? "Saya" : "Me"}</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {isId
              ? "Rekayasa perangkat lunak, sistem layanan publik skala produksi, perangkat IoT, dan machine learning terapan."
              : "Software engineering across production public-service platforms, IoT hardware integration, and applied machine learning."}
          </p>
        </AnimatedSection>

        {/* Profile Card */}
        <AnimatedSection immediate>
          <div className="glass-card p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="glass-subtle rounded-2xl p-2">
                  <Image
                    src="https://avatars.githubusercontent.com/u/136390141?v=4"
                    alt="Randi Sumitro"
                    width={200}
                    height={200}
                    unoptimized
                    className="rounded-xl object-cover"
                    id="about-avatar"
                  />
                </div>
              </div>

              <div className="lg:col-span-2 space-y-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    Randi Sumitro
                  </h2>
                  <p className="text-sm font-medium text-primary">
                    Full Stack Developer · IoT Engineer · ML Researcher
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
                  {isId
                    ? "Saya adalah seorang engineer yang berfokus pada arsitektur perangkat lunak yang andal dan terukur. Pengalaman saya mencakup digitalisasi layanan pengadaan serta perizinan pemerintah hingga pengembangan portal layanan publik terpadu dan sistem machine learning produksi."
                    : "I am an engineer focused on building reliable, maintainable software architecture. My work spans from digitalizing municipal procurement and licensing systems to developing unified public service portals and production machine learning services."}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
                  {isId
                    ? "Pada bidang AI terapan, saya membangun TruthGuard AI menggunakan Azure AI Language dan FastAPI (akurasi model 89.2%), serta mengintegrasikan microservice CatBoost ke aplikasi SIMPONI untuk prediksi waktu penyelesaian perizinan."
                    : "In applied AI, I built TruthGuard AI using Azure AI Language and FastAPI (89.2% model accuracy), and integrated a CatBoost microservice into SIMPONI to predict permit processing times."}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Python",
                    "TypeScript",
                    "Next.js",
                    "PHP",
                    "FastAPI",
                    "PostgreSQL",
                    "Arduino",
                    "Docker",
                    "Azure AI",
                  ].map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Journey Timeline */}
        <section aria-labelledby="journey-heading">
          <AnimatedSection className="mb-8">
            <h2
              id="journey-heading"
              className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3"
            >
              <Target className="h-6 w-6 text-primary" aria-hidden="true" />
              {isId ? "Perjalanan Saya" : "Engineering Timeline"}
            </h2>
          </AnimatedSection>

          <div className="relative pl-12 space-y-6">
            <div className="timeline-line" aria-hidden="true" />

            {journey.map((item, index) => (
              <AnimatedSection
                key={item.year}
                delay={index * 0.08}
                direction="left"
              >
                <div
                  className="relative glass-card p-6"
                  id={`journey-${item.year}`}
                >
                  <div className="glass-card absolute -left-12 top-6 flex h-8 w-8 items-center justify-center rounded-full">
                    <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <span className="glass-subtle font-mono text-xs font-bold text-primary rounded-lg px-2.5 py-1 self-start whitespace-nowrap">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {isId ? item.titleId : item.titleEn}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
                        {isId ? item.descId : item.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Focus Areas */}
        <section aria-labelledby="focus-heading">
          <AnimatedSection className="mb-8">
            <h2
              id="focus-heading"
              className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3"
            >
              <Layers className="h-6 w-6 text-primary" aria-hidden="true" />
              {isId ? "Bidang Fokus" : "Focus Areas"}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area) => (
              <StaggerItem key={area.titleEn}>
                <div
                  className="glass-card p-6 h-full"
                  id={`focus-${area.titleEn.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="glass-subtle inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4">
                    <area.icon className={`h-5 w-5 ${area.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {isId ? area.titleId : area.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isId ? area.descId : area.descEn}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Research Interests */}
        <AnimatedSection>
          <section className="glass-card p-8" id="research-interests">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" aria-hidden="true" />
              {isId ? "Minat Penelitian" : "Research Interests"}
            </h2>
            <ul className="space-y-3">
              {researchInterests.map((interest) => (
                <li
                  key={interest}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <ChevronRight
                    className="h-4 w-4 text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm">{interest}</span>
                </li>
              ))}
            </ul>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
