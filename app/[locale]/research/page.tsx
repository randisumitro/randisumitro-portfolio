import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { FlaskConical, BarChart3, Microscope, Database } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

import { MLBackground } from "@/components/backgrounds/MLBackground";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "id" ? "Penelitian | Randi Sumitro" : "Research | Randi Sumitro",
    description:
      locale === "id"
        ? "Penelitian, eksperimen machine learning, dan karya ilmiah Randi Sumitro."
        : "Research, machine learning experiments, and academic work by Randi Sumitro.",
  };
}

const researchItems = [
  {
    id: "truthguard-research",
    type: "project" as const,
    titleId: "TruthGuard AI: Fraud Detection & Risk Intelligence Platform",
    titleEn: "TruthGuard AI: Fraud Detection & Risk Intelligence Platform",
    descriptionId:
      "Platform enterprise-grade untuk mendeteksi penipuan finansial dan phishing secara real-time menggunakan pendekatan AI semantic analysis. Penelitian ini mengeksplorasi penggunaan Azure AI Language untuk intent manipulation detection pada teks bahasa alami.",
    descriptionEn:
      "Enterprise-grade platform for detecting financial fraud and phishing in real-time using AI semantic analysis. This research explores the use of Azure AI Language for intent manipulation detection in natural language text.",
    methodology: [
      "Semantic Risk Analysis dengan Azure AI Language",
      "Multi-modal Analysis (text, transaction data, behavioral patterns)",
      "Explainable AI (XAI) untuk compliance requirements",
      "Model Evaluation: Accuracy, Precision, Recall, F1-Score",
    ],
    resultsId: [
      "Akurasi Model: 89.2%",
      "Precision: 84.7%",
      "Recall: 81.3%",
      "Berhasil mendeteksi phishing, scam, dan financial fraud secara real-time",
      "Platform di-deploy dengan Docker dan tersedia live demo",
    ],
    resultsEn: [
      "Model Accuracy: 89.2%",
      "Precision: 84.7%",
      "Recall: 81.3%",
      "Successfully detecting phishing, scam, and financial fraud in real-time",
      "Platform deployed with Docker and live demo available",
    ],
    dataset: "Custom financial fraud dataset + Azure AI Language API",
    accuracy: "89.2%",
    repositoryUrl: "https://github.com/randisumitro/TruthGuard-AI",
    year: 2026,
    icon: FlaskConical,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    id: "mlops-research",
    type: "experiment" as const,
    titleId: "MLOps: Monitoring & Logging untuk Production ML Model",
    titleEn: "MLOps: Monitoring & Logging for Production ML Model",
    descriptionId:
      "Penelitian implementasi infrastruktur MLOps lengkap menggunakan Prometheus dan Grafana untuk memonitor performa model machine learning Titanic survival prediction dalam environment production.",
    descriptionEn:
      "Research on implementing complete MLOps infrastructure using Prometheus and Grafana to monitor the performance of a Titanic survival prediction machine learning model in a production environment.",
    methodology: [
      "Setup Prometheus untuk metrics collection dari ML model",
      "Dashboard Grafana untuk visualisasi real-time",
      "Alert system untuk model degradation detection",
      "Structured logging untuk debugging dan audit",
    ],
    resultsId: [
      "Berhasil mengimplementasikan monitoring stack lengkap",
      "Alert otomatis ketika model accuracy turun di bawah threshold",
      "Dashboard Grafana dengan ML-specific metrics",
      "Dokumentasi best practices MLOps",
    ],
    resultsEn: [
      "Successfully implemented complete monitoring stack",
      "Automatic alerts when model accuracy drops below threshold",
      "Grafana dashboard with ML-specific metrics",
      "MLOps best practices documentation",
    ],
    dataset: "Titanic Survival Dataset (Kaggle)",
    repositoryUrl: "https://github.com/randisumitro/Monitoring-dan-Logging",
    year: 2026,
    icon: BarChart3,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    id: "sml-research",
    type: "experiment" as const,
    titleId: "Eksperimen Supervised Machine Learning",
    titleEn: "Supervised Machine Learning Experiments",
    descriptionId:
      "Serangkaian eksperimen machine learning terstruktur menggunakan Jupyter Notebook untuk mengeksplorasi berbagai algoritma supervised learning, mulai dari klasifikasi hingga regresi, dengan fokus pada evaluasi model yang komprehensif.",
    descriptionEn:
      "A series of structured machine learning experiments using Jupyter Notebook to explore various supervised learning algorithms, from classification to regression, with a focus on comprehensive model evaluation.",
    methodology: [
      "Eksplorasi berbagai algoritma: Decision Tree, Random Forest, SVM, KNN",
      "Cross-validation k-fold untuk estimasi generalization",
      "Hyperparameter tuning dengan Grid Search",
      "Feature engineering dan selection",
    ],
    resultsId: [
      "Pemahaman mendalam tentang trade-offs antar algoritma ML",
      "Best practices untuk model selection",
      "Notebook yang terdokumentasi untuk referensi",
    ],
    resultsEn: [
      "Deep understanding of trade-offs between ML algorithms",
      "Best practices for model selection",
      "Well-documented notebooks for reference",
    ],
    dataset: "Multiple public datasets (UCI ML Repository)",
    repositoryUrl:
      "https://github.com/randisumitro/Eksperimen_SML_Randi-Sumitro",
    year: 2026,
    icon: Microscope,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    id: "iot-research",
    type: "project" as const,
    titleId: "IoT Air Quality Monitoring: Integrasi Hardware-Software",
    titleEn: "IoT Air Quality Monitoring: Hardware-Software Integration",
    descriptionId:
      "Penelitian integrasi sistem IoT antara hardware Arduino dengan sensor MQ-135 dan software backend Python untuk monitoring kualitas udara secara real-time. Fokus pada komunikasi serial yang reliable dan visualisasi data sensor.",
    descriptionEn:
      "Research on IoT system integration between Arduino hardware with MQ-135 sensor and Python backend software for real-time air quality monitoring. Focus on reliable serial communication and sensor data visualization.",
    methodology: [
      "Kalibrasi sensor MQ-135 berdasarkan datasheet",
      "Python serial library untuk komunikasi hardware-software",
      "Real-time data streaming ke web interface",
      "Moving average filter untuk stabilisasi pembacaan",
    ],
    resultsId: [
      "Sistem monitoring kualitas udara real-time yang stabil",
      "Akurasi pembacaan sensor yang terkalibrasi",
      "Antarmuka web untuk visualisasi data",
      "Alert otomatis untuk kualitas udara berbahaya",
    ],
    resultsEn: [
      "Stable real-time air quality monitoring system",
      "Calibrated sensor reading accuracy",
      "Web interface for data visualization",
      "Automatic alerts for dangerous air quality",
    ],
    dataset: "Real-time sensor data from MQ-135",
    repositoryUrl: "https://github.com/randisumitro/deteksi-udara",
    year: 2026,
    icon: Database,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
];

export default async function ResearchPage() {
  const locale = await getLocale();

  return (
    <div className="relative min-h-screen">
      <MLBackground />

      <div className="section-container relative z-10 py-20 pt-32">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <FlaskConical className="h-3 w-3" />
            {locale === "id" ? "Penelitian & Eksperimen" : "Research & Experiments"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {locale === "id" ? "Penelitian " : "Research & "}
            <span className="gradient-text">
              {locale === "id" ? "& Eksplorasi" : "Exploration"}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {locale === "id"
              ? "Eksplorasi ilmiah dan eksperimen teknis berbasis data nyata dari proyek-proyek GitHub."
              : "Scientific exploration and technical experiments based on real data from GitHub projects."}
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-8">
          {researchItems.map((item) => (
            <StaggerItem key={item.id}>
              <div
                className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors"
                id={`research-${item.id}`}
              >
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${item.bg}`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium ${item.bg} ${item.color}`}
                      >
                        {item.type === "project"
                          ? locale === "id"
                            ? "Proyek"
                            : "Project"
                          : locale === "id"
                          ? "Eksperimen"
                          : "Experiment"}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {item.year}
                      </span>
                      {item.accuracy && (
                        <span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-3 py-0.5 text-xs font-medium text-green-400">
                          Accuracy: {item.accuracy}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {locale === "id" ? item.titleId : item.titleEn}
                    </h2>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {locale === "id" ? item.descriptionId : item.descriptionEn}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Methodology */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Microscope className="h-4 w-4 text-primary" />
                      {locale === "id" ? "Metodologi" : "Methodology"}
                    </h3>
                    <ul className="space-y-2">
                      {item.methodology.map((m) => (
                        <li
                          key={m}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      {locale === "id" ? "Hasil" : "Results"}
                    </h3>
                    <ul className="space-y-2">
                      {(locale === "id" ? item.resultsId : item.resultsEn).map(
                        (r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-green-400 shrink-0 mt-1.5" />
                            {r}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Dataset & Link */}
                <div className="mt-6 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {locale === "id" ? "Dataset:" : "Dataset:"} {item.dataset}
                    </span>
                  </div>
                  {item.repositoryUrl && (
                    <a
                      href={item.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`research-repo-${item.id}`}
                      className="flex items-center gap-2 text-xs font-medium text-primary hover:underline"
                    >
                      {locale === "id" ? "Lihat Repository" : "View Repository"} →
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
