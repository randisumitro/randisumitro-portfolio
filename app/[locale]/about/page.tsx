import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import {
  Code2,
  Cpu,
  BrainCircuit,
  Globe,
  Layers,
  Lightbulb,
  Target,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { AboutBackground } from "@/components/backgrounds/AboutBackground";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "id" ? "Tentang Saya | Randi Sumitro" : "About Me | Randi Sumitro",
    description:
      locale === "id"
        ? "Pelajari perjalanan, fokus bidang, dan kompetensi Randi Sumitro sebagai Full Stack Developer, IoT Engineer, dan ML Researcher."
        : "Learn about Randi Sumitro's journey, focus areas, and competencies as a Full Stack Developer, IoT Engineer, and ML Researcher.",
  };
}

const focusAreas = [
  {
    icon: Code2,
    titleId: "Full Stack Web Development",
    titleEn: "Full Stack Web Development",
    descId: "Membangun aplikasi web end-to-end dari UI hingga database, mencakup PHP, JavaScript, Python (FastAPI), dan PostgreSQL.",
    descEn: "Building end-to-end web applications from UI to database, covering PHP, JavaScript, Python (FastAPI), and PostgreSQL.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Cpu,
    titleId: "Internet of Things (IoT)",
    titleEn: "Internet of Things (IoT)",
    descId: "Mengintegrasikan hardware Arduino dengan sensor fisik dan backend web untuk sistem monitoring dan kontrol real-time.",
    descEn: "Integrating Arduino hardware with physical sensors and web backend for real-time monitoring and control systems.",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: BrainCircuit,
    titleId: "Machine Learning & AI",
    titleEn: "Machine Learning & AI",
    descId: "Eksplorasi algoritma ML untuk fraud detection, klasifikasi, dan regresi menggunakan Scikit-learn, Azure AI, dan Jupyter.",
    descEn: "Exploring ML algorithms for fraud detection, classification, and regression using Scikit-learn, Azure AI, and Jupyter.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Layers,
    titleId: "System Analysis & Design",
    titleEn: "System Analysis & Design",
    descId: "Merancang arsitektur sistem informasi yang skalabel untuk berbagai domain termasuk layanan publik dan enterprise.",
    descEn: "Designing scalable information system architectures for various domains including public services and enterprise.",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: Globe,
    titleId: "MLOps & DevOps",
    titleEn: "MLOps & DevOps",
    descId: "Setup infrastruktur ML production dengan Docker, Prometheus, Grafana, dan CI/CD pipeline untuk deployment yang andal.",
    descEn: "Setting up ML production infrastructure with Docker, Prometheus, Grafana, and CI/CD pipelines for reliable deployment.",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
];

const journey = [
  {
    year: "2023",
    titleId: "Digitalisasi Pengadaan Daerah",
    titleEn: "Regional Procurement Digitalization",
    descId: "Memimpin pengembangan SIMPONI, sistem manajemen pengadaan digital untuk transparansi birokrasi.",
    descEn: "Led the development of SIMPONI, a digital procurement management system for bureaucratic transparency.",
    icon: Globe,
  },
  {
    year: "2024",
    titleId: "Portal Perizinan Terpadu",
    titleEn: "Integrated Licensing Portal",
    descId: "Membangun sistem tracking perizinan dan notifikasi real-time DPMPTSP berbasis arsitektur scalable.",
    descEn: "Built licensing tracking system and real-time notifications for DPMPTSP based on scalable architecture.",
    icon: Cpu,
  },
  {
    year: "2025",
    titleId: "Super App Layanan Publik",
    titleEn: "Public Service Super App",
    descId: "Merancang arsitektur microservices untuk MPP Digital, sentralisasi 100+ layanan masyarakat ke dalam satu portal SSO.",
    descEn: "Designed microservices architecture for MPP Digital, centralizing 100+ public services into a single SSO portal.",
    icon: BrainCircuit,
  },
  {
    year: "2026",
    titleId: "Enterprise AI & Full Stack",
    titleEn: "Enterprise AI & Full Stack",
    descId: "Membangun TruthGuard AI (platform deteksi penipuan enterprise) dengan Azure AI Language, FastAPI, PostgreSQL, dan Docker.",
    descEn: "Built TruthGuard AI (enterprise fraud detection platform) with Azure AI Language, FastAPI, PostgreSQL, and Docker.",
    icon: Lightbulb,
  },
];

export default async function AboutPage() {
  const locale = await getLocale();

  const researchInterests = locale === "id"
    ? [
        "AI untuk deteksi penipuan dan analisis risiko finansial",
        "IoT untuk monitoring lingkungan dan kualitas udara",
        "MLOps dan production machine learning systems",
        "Sistem informasi untuk layanan publik pemerintah",
        "Explainable AI (XAI) untuk kebutuhan compliance",
      ]
    : [
        "AI for fraud detection and financial risk analysis",
        "IoT for environmental and air quality monitoring",
        "MLOps and production machine learning systems",
        "Information systems for public government services",
        "Explainable AI (XAI) for compliance requirements",
      ];

  return (
    <div className="relative min-h-screen">
      <AboutBackground />

      <div className="section-container relative z-10 py-20 pt-32 space-y-20">
        {/* Header */}
        <AnimatedSection className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <GraduationCap className="h-3 w-3" />
            {locale === "id" ? "Profil Profesional" : "Professional Profile"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {locale === "id" ? "Tentang " : "About "}
            <span className="gradient-text">Saya</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {locale === "id"
              ? "Senior Full Stack Engineer dengan rekam jejak terbukti dalam merancang, mengembangkan, dan memelihara sistem digital skala besar untuk layanan publik dan enterprise."
              : "Senior Full Stack Engineer with a proven track record of designing, developing, and maintaining large-scale digital systems for public services and enterprise."}
          </p>
        </AnimatedSection>

        {/* Profile Card */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              {/* Avatar */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-1 animate-gradient blur-sm opacity-50" />
                  <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                    <Image
                      src={`https://avatars.githubusercontent.com/u/136390141?v=4&t=${Date.now()}`}
                      alt="Randi Sumitro"
                      width={200}
                      height={200}
                      unoptimized
                      className="object-cover"
                      id="about-avatar"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Randi Sumitro
                  </h2>
                  <p className="text-primary font-medium">
                    Full Stack Developer · IoT Engineer · ML Researcher
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {locale === "id"
                    ? "Saya adalah seorang Engineer yang berfokus pada arsitektur perangkat lunak yang andal. Pengalaman saya mencakup digitalisasi layanan pengadaan pemerintah hingga pengembangan Super App untuk pelayanan publik. Selain Full Stack Development, saya juga memiliki spesialisasi dalam mengintegrasikan sistem Machine Learning ke lingkungan production."
                    : "I am an Engineer focused on robust software architecture. My experience spans from digitalizing government procurement services to developing a Super App for public services. Beyond Full Stack Development, I specialize in integrating Machine Learning systems into production environments."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {locale === "id"
                    ? "Proyek flagship saya, TruthGuard AI, adalah platform enterprise-grade fraud detection yang menggunakan Azure AI Language dengan akurasi model 89.2% — mencerminkan kemampuan saya dalam membangun sistem AI production-ready yang kompleks."
                    : "My flagship project, TruthGuard AI, is an enterprise-grade fraud detection platform using Azure AI Language with 89.2% model accuracy — reflecting my ability to build complex production-ready AI systems."}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "JavaScript",
                    "PHP",
                    "FastAPI",
                    "Arduino",
                    "Docker",
                    "Azure AI",
                    "Scikit-learn",
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
        <div>
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              {locale === "id" ? "Perjalanan Saya" : "My Journey"}
            </h2>
          </AnimatedSection>

          <div className="relative pl-12 space-y-8">
            {/* Timeline line */}
            <div className="timeline-line" />

            {journey.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.15} direction="left">
                <div className="relative glass-card rounded-xl p-6 hover:border-primary/30 transition-colors" id={`journey-${item.year}`}>
                  {/* Dot */}
                  <div className="absolute -left-12 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 border border-primary/40">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 whitespace-nowrap">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {locale === "id" ? item.titleId : item.titleEn}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {locale === "id" ? item.descId : item.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <Layers className="h-6 w-6 text-primary" />
              {locale === "id" ? "Bidang Fokus" : "Focus Areas"}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area) => (
              <StaggerItem key={area.titleEn}>
                <div
                  className={`glass-card rounded-xl p-6 border ${area.bg} h-full hover:scale-[1.02] transition-transform`}
                  id={`focus-${area.titleEn.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <area.icon className={`h-6 w-6 ${area.color} mb-3`} />
                  <h3 className="font-semibold text-foreground mb-2">
                    {locale === "id" ? area.titleId : area.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {locale === "id" ? area.descId : area.descEn}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Research Interests */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8" id="research-interests">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              {locale === "id" ? "Minat Penelitian" : "Research Interests"}
            </h2>
            <div className="space-y-3">
              {researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
