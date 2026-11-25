import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  FlaskConical,
  BarChart3,
  Microscope,
  Database,
  ExternalLink,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";

interface ResearchPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Penelitian" : "Research",
    description: isId
      ? "Penelitian, eksperimen machine learning, dan karya teknis Randi Sumitro."
      : "Research, machine learning experiments, and technical explorations by Randi Sumitro.",
  };
}

const researchItems = [
  {
    id: "truthguard-research",
    type: "project" as const,
    titleId: "TruthGuard AI: Platform Deteksi Penipuan & Analisis Risiko",
    titleEn: "TruthGuard AI: Fraud Detection & Risk Intelligence Platform",
    descriptionId:
      "Platform deteksi penipuan finansial dan phishing secara real-time menggunakan pendekatan semantic analysis. Mengeksplorasi Azure AI Language untuk mendeteksi manipulasi intensi pada teks bahasa alami.",
    descriptionEn:
      "Real-time financial fraud and phishing detection platform using semantic analysis. Explores Azure AI Language for intent manipulation detection in natural language text.",
    methodology: [
      "Semantic Risk Analysis with Azure AI Language",
      "Multi-modal evaluation (text, transaction metadata, behavioral signals)",
      "Explainable AI (XAI) risk scoring for audit compliance",
      "Evaluation across Accuracy, Precision, Recall, and F1-Score",
    ],
    resultsId: [
      "Akurasi model: 89.2% (Precision 84.7%, Recall 81.3%)",
      "Deteksi phishing, scam, dan financial fraud secara real-time",
      "Deployment terkontainerisasi dengan Docker",
    ],
    resultsEn: [
      "Model accuracy: 89.2% (Precision 84.7%, Recall 81.3%)",
      "Real-time detection of phishing, scam, and financial fraud patterns",
      "Containerized deployment with Docker",
    ],
    dataset: "Custom financial fraud dataset + Azure AI Language API",
    accuracy: "89.2%",
    repositoryUrl: "https://github.com/randisumitro/TruthGuard-AI",
    year: 2026,
    icon: FlaskConical,
    color: "text-purple-400",
  },
  {
    id: "mlops-research",
    type: "experiment" as const,
    titleId: "MLOps: Monitoring & Logging untuk Model ML Produksi",
    titleEn: "MLOps: Monitoring & Logging for Production ML Models",
    descriptionId:
      "Implementasi infrastruktur MLOps menggunakan Prometheus dan Grafana untuk memantau performa model prediksi Titanic survival dalam lingkungan produksi.",
    descriptionEn:
      "MLOps observability infrastructure built with Prometheus and Grafana to monitor Titanic survival prediction model metrics in a production setup.",
    methodology: [
      "Prometheus instrumentation for model latency and inference metrics",
      "Grafana dashboards for real-time observability",
      "Automated threshold alerts for model drift and degradation",
      "Structured logging for request auditing",
    ],
    resultsId: [
      "Stack monitoring penuh dengan Prometheus dan Grafana",
      "Notifikasi otomatis saat akurasi turun melewati ambang batas",
      "Dokumentasi alur kerja MLOps",
    ],
    resultsEn: [
      "End-to-end monitoring stack with Prometheus and Grafana",
      "Automated alerts when model metrics drop below threshold",
      "Reproducible MLOps configuration and documentation",
    ],
    dataset: "Titanic Survival Dataset (Kaggle)",
    repositoryUrl: "https://github.com/randisumitro/Monitoring-dan-Logging",
    year: 2026,
    icon: BarChart3,
    color: "text-amber-400",
  },
  {
    id: "sml-research",
    type: "experiment" as const,
    titleId: "Eksperimen Supervised Machine Learning",
    titleEn: "Supervised Machine Learning Experiments",
    descriptionId:
      "Serangkaian eksperimen terstruktur menggunakan Jupyter Notebook untuk membandingkan algoritma klasifikasi dan regresi serta metode evaluasi model.",
    descriptionEn:
      "Structured experiments using Jupyter Notebook comparing supervised classification and regression algorithms with cross-validated evaluation.",
    methodology: [
      "Algorithm comparison: Decision Tree, Random Forest, SVM, KNN",
      "k-fold cross-validation for generalization estimation",
      "Hyperparameter tuning via Grid Search",
      "Feature engineering and feature selection",
    ],
    resultsId: [
      "Analisis trade-off antar algoritma supervised learning",
      "Benchmark performa terstandar untuk pemilihan model",
      "Notebook terdokumentasi untuk reproduktibilitas",
    ],
    resultsEn: [
      "Comparative trade-off analysis across supervised learning models",
      "Standardized evaluation benchmarks for model selection",
      "Documented notebooks for reproducible experimentation",
    ],
    dataset: "Public benchmark datasets (UCI ML Repository)",
    repositoryUrl:
      "https://github.com/randisumitro/Eksperimen_SML_Randi-Sumitro",
    year: 2026,
    icon: Microscope,
    color: "text-sky-400",
  },
  {
    id: "iot-research",
    type: "project" as const,
    titleId: "IoT Air Quality Monitoring: Integrasi Hardware-Software",
    titleEn: "IoT Air Quality Monitoring: Hardware-Software Integration",
    descriptionId:
      "Studi integrasi antara Arduino dengan sensor MQ-135 dan backend Python untuk pemantauan kualitas udara real-time melalui komunikasi serial.",
    descriptionEn:
      "Integration study between Arduino MQ-135 hardware sensors and a Python web backend for real-time air quality telemetry over serial communication.",
    methodology: [
      "MQ-135 sensor calibration against reference curves",
      "Python pyserial pipeline for reliable device telemetry",
      "Real-time data streaming to web visualization UI",
      "Moving average filtering for signal stability",
    ],
    resultsId: [
      "Pemantauan kualitas udara real-time yang stabil",
      "Kalibrasi pembacaan sensor multi-polutan",
      "Peringatan otomatis saat ambang kualitas udara menurun",
    ],
    resultsEn: [
      "Stable real-time air quality telemetry pipeline",
      "Calibrated multi-pollutant sensor readings",
      "Threshold-based alerts for hazardous air quality",
    ],
    dataset: "Real-time sensor stream from MQ-135",
    repositoryUrl: "https://github.com/randisumitro/deteksi-udara",
    year: 2026,
    icon: Database,
    color: "text-emerald-400",
  },
];

export default async function ResearchPage({ params }: ResearchPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  return (
    <div className="relative min-h-screen">
      <div className="section-container py-16 pt-20">
        <AnimatedSection immediate className="text-center mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {isId ? "Penelitian & Eksperimen" : "Research & Experiments"}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {isId ? "Penelitian " : "Research & "}
            <span className="text-primary">
              {isId ? "& Eksplorasi" : "Exploration"}
            </span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {isId
              ? "Eksplorasi ilmiah dan eksperimen teknis pada applied AI, MLOps, dan sistem IoT."
              : "Technical experiments and applied studies across machine learning, MLOps, and IoT systems."}
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6">
          {researchItems.map((item) => (
            <StaggerItem key={item.id}>
              <article
                className="glass-card p-6 sm:p-8"
                id={`research-${item.id}`}
              >
                <div className="flex flex-wrap items-start gap-4 mb-5">
                  <div className="glass-subtle flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="glass-subtle inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium text-foreground">
                        {item.type === "project"
                          ? isId
                            ? "Proyek"
                            : "Project"
                          : isId
                            ? "Eksperimen"
                            : "Experiment"}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {item.year}
                      </span>
                      {item.accuracy && (
                        <span className="inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-500/25 px-3 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          Accuracy: {item.accuracy}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {isId ? item.titleId : item.titleEn}
                    </h2>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
                  {isId ? item.descriptionId : item.descriptionEn}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-subtle rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Microscope className="h-4 w-4 text-primary" aria-hidden="true" />
                      {isId ? "Metodologi" : "Methodology"}
                    </h3>
                    <ul className="space-y-2">
                      {item.methodology.map((m) => (
                        <li
                          key={m}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-subtle rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
                      {isId ? "Hasil" : "Results"}
                    </h3>
                    <ul className="space-y-2">
                      {(isId ? item.resultsId : item.resultsEn).map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--glass-border)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Database className="h-4 w-4" aria-hidden="true" />
                    <span>Dataset: {item.dataset}</span>
                  </div>
                  {item.repositoryUrl && (
                    <a
                      href={item.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`research-repo-${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      {isId ? "Lihat Repository" : "View Repository"}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
