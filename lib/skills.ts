// ============================================================
// SKILLS DATA — Berdasarkan analisis nyata repository GitHub
// ============================================================

import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "language",
    labelId: "Bahasa Pemrograman",
    labelEn: "Programming Languages",
    skills: [
      {
        name: "Python",
        level: 88,
        category: "language",
        color: "#3572A5",
        usedIn: [
          "truthguard-ai",
          "deteksi-polusi-udara",
          "mlops-monitoring-logging",
          "eksperimen-ml-sml",
          "deteksi-udara-iot-v2",
        ],
      },
      {
        name: "JavaScript",
        level: 82,
        category: "language",
        color: "#F7DF1E",
        usedIn: [
          "sistem-informasi-pkh",
          "truthguard-ai",
          "antrian-skck",
          "deteksi-polusi-udara",
        ],
      },
      {
        name: "PHP",
        level: 78,
        category: "language",
        color: "#777BB4",
        usedIn: [
          "sistem-informasi-pkh",
          "sistem-absensi-biometrik-iot",
          "antrian-skck",
        ],
      },
      {
        name: "TypeScript",
        level: 70,
        category: "language",
        color: "#3178C6",
        usedIn: ["truthguard-ai"],
      },
      {
        name: "HTML/CSS",
        level: 85,
        category: "language",
        color: "#E34F26",
        usedIn: ["antrian-skck", "deteksi-polusi-udara", "sistem-informasi-pkh"],
      },
    ],
  },
  {
    category: "backend",
    labelId: "Backend",
    labelEn: "Backend",
    skills: [
      {
        name: "FastAPI",
        level: 82,
        category: "backend",
        color: "#009688",
        usedIn: ["truthguard-ai"],
      },
      {
        name: "PHP Native",
        level: 78,
        category: "backend",
        color: "#777BB4",
        usedIn: [
          "sistem-informasi-pkh",
          "sistem-absensi-biometrik-iot",
          "antrian-skck",
        ],
      },
      {
        name: "Python Scripts",
        level: 86,
        category: "backend",
        color: "#3572A5",
        usedIn: ["deteksi-polusi-udara", "mlops-monitoring-logging"],
      },
      {
        name: "REST API Design",
        level: 80,
        category: "backend",
        color: "#FF6B35",
        usedIn: ["truthguard-ai"],
      },
    ],
  },
  {
    category: "database",
    labelId: "Database",
    labelEn: "Database",
    skills: [
      {
        name: "PostgreSQL",
        level: 78,
        category: "database",
        color: "#336791",
        usedIn: ["truthguard-ai"],
      },
      {
        name: "MySQL",
        level: 80,
        category: "database",
        color: "#4479A1",
        usedIn: [
          "sistem-informasi-pkh",
          "sistem-absensi-biometrik-iot",
          "antrian-skck",
        ],
      },
      {
        name: "Redis",
        level: 65,
        category: "database",
        color: "#DC382D",
        usedIn: ["truthguard-ai"],
      },
    ],
  },
  {
    category: "ml",
    labelId: "Machine Learning & AI",
    labelEn: "Machine Learning & AI",
    skills: [
      {
        name: "Azure AI Language",
        level: 80,
        category: "ml",
        color: "#0078D4",
        usedIn: ["truthguard-ai"],
      },
      {
        name: "Scikit-learn",
        level: 78,
        category: "ml",
        color: "#F89939",
        usedIn: ["eksperimen-ml-sml", "mlops-monitoring-logging"],
      },
      {
        name: "Pandas & NumPy",
        level: 82,
        category: "ml",
        color: "#150458",
        usedIn: ["eksperimen-ml-sml", "truthguard-ai"],
      },
      {
        name: "Jupyter Notebook",
        level: 85,
        category: "ml",
        color: "#F37626",
        usedIn: ["eksperimen-ml-sml"],
      },
      {
        name: "ML Model Evaluation",
        level: 75,
        category: "ml",
        color: "#FF6B35",
        usedIn: ["truthguard-ai", "mlops-monitoring-logging"],
      },
    ],
  },
  {
    category: "iot",
    labelId: "IoT & Embedded Systems",
    labelEn: "IoT & Embedded Systems",
    skills: [
      {
        name: "Arduino",
        level: 75,
        category: "iot",
        color: "#00979D",
        usedIn: ["deteksi-polusi-udara", "deteksi-udara-iot-v2"],
      },
      {
        name: "Sensor MQ-135",
        level: 72,
        category: "iot",
        color: "#FF6B35",
        usedIn: ["deteksi-polusi-udara", "deteksi-udara-iot-v2"],
      },
      {
        name: "Serial Communication",
        level: 70,
        category: "iot",
        color: "#6B7280",
        usedIn: [
          "deteksi-polusi-udara",
          "sistem-absensi-biometrik-iot",
          "deteksi-udara-iot-v2",
        ],
      },
      {
        name: "Biometric Integration",
        level: 68,
        category: "iot",
        color: "#8B5CF6",
        usedIn: ["sistem-absensi-biometrik-iot"],
      },
    ],
  },
  {
    category: "devops",
    labelId: "DevOps & Tools",
    labelEn: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        level: 75,
        category: "devops",
        color: "#2496ED",
        usedIn: ["truthguard-ai"],
      },
      {
        name: "Docker Compose",
        level: 72,
        category: "devops",
        color: "#2496ED",
        usedIn: ["truthguard-ai"],
      },
      {
        name: "Prometheus",
        level: 68,
        category: "devops",
        color: "#E6522C",
        usedIn: ["mlops-monitoring-logging"],
      },
      {
        name: "Grafana",
        level: 68,
        category: "devops",
        color: "#F46800",
        usedIn: ["mlops-monitoring-logging"],
      },
      {
        name: "Git & GitHub",
        level: 85,
        category: "devops",
        color: "#181717",
        usedIn: ["truthguard-ai", "sistem-informasi-pkh", "deteksi-polusi-udara"],
      },
      {
        name: "Vercel",
        level: 78,
        category: "devops",
        color: "#000000",
        usedIn: ["truthguard-ai"],
      },
    ],
  },
];

export const languageStats = [
  { language: "Python", percentage: 35, color: "#3572A5" },
  { language: "JavaScript", percentage: 22, color: "#F7DF1E" },
  { language: "PHP", percentage: 25, color: "#777BB4" },
  { language: "HTML/CSS", percentage: 12, color: "#E34F26" },
  { language: "Jupyter Notebook", percentage: 6, color: "#F37626" },
];
