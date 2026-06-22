// ============================================================
// PROJECTS DATA — Berdasarkan analisis nyata repository GitHub
// GitHub: github.com/randisumitro
// ============================================================

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "truthguard-ai",
    name: "TruthGuard AI — Platform Deteksi Penipuan",
    nameEn: "TruthGuard AI — Fraud Detection Platform",
    description:
      "Platform enterprise-grade untuk deteksi penipuan dan manajemen risiko keuangan secara real-time menggunakan Azure AI Language.",
    descriptionEn:
      "Enterprise-grade fraud detection and financial risk management platform with real-time analysis using Azure AI Language.",
    longDescription: `TruthGuard AI (dipublikasikan sebagai TrustShield AI) adalah platform enterprise-grade fraud detection and risk intelligence yang menggunakan AI semantic analysis dan Azure AI Language services untuk mendeteksi phishing, scam, dan financial fraud secara real-time.

Platform ini dibangun dengan FastAPI untuk backend high-performance, PostgreSQL untuk penyimpanan data analitik, dan Redis untuk caching. Frontend menggunakan JavaScript dengan real-time WebSocket updates.

Fitur unggulan meliputi Explainable AI dengan detailed risk scoring, Business Impact Calculator dengan ROI analysis, dan Model Evaluation Dashboard dengan akurasi 89.2%.`,
    longDescriptionEn: `TruthGuard AI (published as TrustShield AI) is an enterprise-grade fraud detection and risk intelligence platform that uses AI semantic analysis and Azure AI Language services to detect phishing, scam, and financial fraud in real-time.

The platform is built with FastAPI for high-performance backend, PostgreSQL for analytical data storage, and Redis for caching. The frontend uses JavaScript with real-time WebSocket updates.

Key features include Explainable AI with detailed risk scoring, Business Impact Calculator with ROI analysis, and Model Evaluation Dashboard with 89.2% accuracy.`,
    category: "ai-ml",
    technologies: [
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "FastAPI", category: "backend", color: "#009688" },
      { name: "Azure AI Language", category: "ml", color: "#0078D4" },
      { name: "PostgreSQL", category: "database", color: "#336791" },
      { name: "Docker", category: "devops", color: "#2496ED" },
      { name: "Redis", category: "database", color: "#DC382D" },
      { name: "JavaScript", category: "frontend", color: "#F7DF1E" },
      { name: "Nginx", category: "devops", color: "#009639" },
    ],
    features: [
      "Deteksi penipuan real-time dengan sistem alert dan notifikasi suara",
      "Semantic Risk Analysis menggunakan Azure AI Language",
      "Explainable AI dengan detail risk scoring dan explanations",
      "Business Impact Calculator dengan simulasi ROI",
      "Model Evaluation Dashboard (Accuracy: 89.2%, Precision: 84.7%, Recall: 81.3%)",
      "Confusion Matrix dengan TP/FP/TN/FN analysis",
      "Block Transaction capabilities",
      "Comprehensive Reporting dengan fitur export",
    ],
    featuresEn: [
      "Real-time fraud detection with alert system and sound notifications",
      "Semantic Risk Analysis using Azure AI Language",
      "Explainable AI with detailed risk scoring and explanations",
      "Business Impact Calculator with ROI simulation",
      "Model Evaluation Dashboard (Accuracy: 89.2%, Precision: 84.7%, Recall: 81.3%)",
      "Confusion Matrix with TP/FP/TN/FN analysis",
      "Block Transaction capabilities",
      "Comprehensive Reporting with export features",
    ],
    challenges: [
      "Mendeteksi pola penipuan yang terus berevolusi dengan akurasi tinggi",
      "Memproses data transaksi real-time dengan latensi rendah",
      "Mengintegrasikan Azure AI Language untuk semantic analysis yang kompleks",
      "Membangun sistem yang explainable untuk kebutuhan compliance",
    ],
    challengesEn: [
      "Detecting continuously evolving fraud patterns with high accuracy",
      "Processing real-time transaction data with low latency",
      "Integrating Azure AI Language for complex semantic analysis",
      "Building explainable system for compliance requirements",
    ],
    solutions: [
      "Implementasi multi-modal analysis (text, transaction data, behavioral patterns)",
      "Penggunaan FastAPI dengan async processing untuk throughput tinggi",
      "Azure AI Language untuk intent manipulation detection yang akurat",
      "Detail risk scoring dengan human-readable explanations",
    ],
    solutionsEn: [
      "Implementation of multi-modal analysis (text, transaction data, behavioral patterns)",
      "FastAPI with async processing for high throughput",
      "Azure AI Language for accurate intent manipulation detection",
      "Detailed risk scoring with human-readable explanations",
    ],
    githubUrl: "https://github.com/randisumitro/TruthGuard-AI",
    demoUrl: "https://randisumitro.github.io/TruthGuard-AI/",
    complexity: 5,
    status: "completed",
    year: 2026,
    highlights: [
      "Akurasi Model: 89.2%",
      "Precision: 84.7%",
      "Recall: 81.3%",
      "Live Demo Tersedia",
      "Docker Ready",
    ],
    highlightsEn: [
      "Model Accuracy: 89.2%",
      "Precision: 84.7%",
      "Recall: 81.3%",
      "Live Demo Available",
      "Docker Ready",
    ],
  },
  {
    id: "2",
    slug: "sistem-informasi-pkh",
    name: "Sistem Informasi Program Keluarga Harapan (PKH)",
    nameEn: "Program Keluarga Harapan (PKH) Information System",
    description:
      "Sistem informasi berbasis web untuk manajemen program bantuan sosial PKH (Program Keluarga Harapan) dari pemerintah Indonesia.",
    descriptionEn:
      "Web-based information system for managing the PKH (Family Hope Program) social welfare program from the Indonesian government.",
    longDescription: `Sistem Informasi PKH adalah aplikasi web full-stack untuk mengelola data penerima manfaat program bantuan sosial PKH dari pemerintah Indonesia. Sistem ini memfasilitasi proses pendaftaran, verifikasi, dan pelaporan penerima bantuan.

Dibangun menggunakan JavaScript modern dengan antarmuka yang responsif. Sistem ini mendukung multi-level user dengan role admin, koordinator, dan operator lapangan.`,
    longDescriptionEn: `PKH Information System is a full-stack web application for managing PKH social welfare program beneficiary data from the Indonesian government. The system facilitates registration, verification, and reporting processes for beneficiaries.

Built using modern JavaScript with responsive interface. The system supports multi-level users with admin, coordinator, and field operator roles.`,
    category: "full-stack",
    technologies: [
      { name: "JavaScript", category: "frontend", color: "#F7DF1E" },
      { name: "PHP", category: "backend", color: "#777BB4" },
      { name: "MySQL", category: "database", color: "#4479A1" },
      { name: "HTML", category: "frontend", color: "#E34F26" },
      { name: "CSS", category: "frontend", color: "#1572B6" },
    ],
    features: [
      "Manajemen data penerima manfaat PKH",
      "Multi-level access control (admin, koordinator, operator)",
      "Sistem verifikasi dan validasi data",
      "Laporan dan statistik penerima bantuan",
      "Antarmuka responsif dan user-friendly",
    ],
    featuresEn: [
      "PKH beneficiary data management",
      "Multi-level access control (admin, coordinator, operator)",
      "Data verification and validation system",
      "Beneficiary reports and statistics",
      "Responsive and user-friendly interface",
    ],
    challenges: [
      "Mengelola data sosial yang sensitif dengan keamanan tinggi",
      "Membangun workflow verifikasi yang efisien untuk banyak data",
    ],
    challengesEn: [
      "Managing sensitive social data with high security",
      "Building efficient verification workflow for large data",
    ],
    solutions: [
      "Role-based access control yang ketat",
      "Optimasi query database untuk performa tinggi",
    ],
    solutionsEn: [
      "Strict role-based access control",
      "Database query optimization for high performance",
    ],
    githubUrl:
      "https://github.com/randisumitro/Sistem-Informasi-Program-Keluarga-Harapan-PKH-",
    complexity: 4,
    status: "completed",
    year: 2026,
  },
  {
    id: "3",
    slug: "sistem-absensi-biometrik-iot",
    name: "Sistem Absensi Biometrik Berbasis IoT",
    nameEn: "IoT-Based Biometric Attendance System",
    description:
      "Sistem absensi modern menggunakan teknologi biometrik sidik jari yang terintegrasi dengan IoT untuk monitoring kehadiran secara real-time via web.",
    descriptionEn:
      "Modern attendance system using fingerprint biometric technology integrated with IoT for real-time attendance monitoring via web.",
    longDescription: `Sistem Absensi Biometrik IoT adalah solusi modern untuk manajemen kehadiran yang menggabungkan hardware biometrik (fingerprint sensor) dengan backend web berbasis PHP. Sistem ini memungkinkan monitoring kehadiran secara real-time dari browser manapun.

Arsitektur sistem melibatkan hardware fingerprint reader yang terhubung via serial/network ke server PHP, database MySQL untuk menyimpan data kehadiran, dan dashboard web untuk monitoring dan pelaporan.`,
    longDescriptionEn: `IoT Biometric Attendance System is a modern solution for attendance management that combines biometric hardware (fingerprint sensor) with PHP-based web backend. The system enables real-time attendance monitoring from any browser.

The system architecture involves fingerprint reader hardware connected via serial/network to PHP server, MySQL database for storing attendance data, and web dashboard for monitoring and reporting.`,
    category: "iot",
    technologies: [
      { name: "PHP", category: "backend", color: "#777BB4" },
      { name: "MySQL", category: "database", color: "#4479A1" },
      { name: "HTML", category: "frontend", color: "#E34F26" },
      { name: "CSS", category: "frontend", color: "#1572B6" },
      { name: "JavaScript", category: "frontend", color: "#F7DF1E" },
      { name: "Arduino/IoT", category: "iot", color: "#00979D" },
    ],
    features: [
      "Autentikasi sidik jari biometrik",
      "Real-time attendance monitoring via web",
      "Dashboard admin untuk manajemen pengguna",
      "Laporan kehadiran otomatis",
      "Notifikasi kehadiran real-time",
      "Manajemen jadwal dan shift kerja",
    ],
    featuresEn: [
      "Fingerprint biometric authentication",
      "Real-time attendance monitoring via web",
      "Admin dashboard for user management",
      "Automatic attendance reports",
      "Real-time attendance notifications",
      "Schedule and work shift management",
    ],
    challenges: [
      "Integrasi hardware biometrik dengan web server",
      "Memastikan akurasi dan keandalan fingerprint recognition",
      "Sinkronisasi data real-time antara hardware dan web",
    ],
    challengesEn: [
      "Integrating biometric hardware with web server",
      "Ensuring accuracy and reliability of fingerprint recognition",
      "Real-time data synchronization between hardware and web",
    ],
    solutions: [
      "Protokol komunikasi serial yang robust antara hardware dan server",
      "Buffer dan queue system untuk data sinkronisasi yang andal",
    ],
    solutionsEn: [
      "Robust serial communication protocol between hardware and server",
      "Buffer and queue system for reliable data synchronization",
    ],
    githubUrl:
      "https://github.com/randisumitro/SISTEM-ABSENSI-BIOMETRIK-BERBASIS-INTERNET-OF-THINGS",
    complexity: 4,
    status: "completed",
    year: 2026,
  },
  {
    id: "4",
    slug: "antrian-skck",
    name: "Sistem Informasi Antrian Pembuatan SKCK",
    nameEn: "SKCK Queue Management Information System",
    description:
      "Sistem antrian berbasis web untuk pembuatan SKCK (Surat Keterangan Catatan Kepolisian) yang memudahkan masyarakat mengambil nomor antrian secara online.",
    descriptionEn:
      "Web-based queue system for SKCK (Police Certificate) issuance that allows citizens to take queue numbers online.",
    longDescription: `Sistem Antrian SKCK adalah aplikasi web yang membantu masyarakat mengurus pembuatan SKCK dengan lebih efisien. Masyarakat dapat mengambil nomor antrian online sehingga tidak perlu antri fisik dalam waktu lama.

Sistem dibangun dengan PHP dan HTML dengan tampilan yang sederhana namun fungsional. Backend mengelola nomor antrian, status pelayanan, dan notifikasi giliran.`,
    longDescriptionEn: `SKCK Queue System is a web application that helps citizens process SKCK issuance more efficiently. Citizens can take online queue numbers so they don't have to queue physically for a long time.

The system is built with PHP and HTML with a simple but functional interface. The backend manages queue numbers, service status, and turn notifications.`,
    category: "web-app",
    technologies: [
      { name: "PHP", category: "backend", color: "#777BB4" },
      { name: "HTML", category: "frontend", color: "#E34F26" },
      { name: "CSS", category: "frontend", color: "#1572B6" },
      { name: "MySQL", category: "database", color: "#4479A1" },
    ],
    features: [
      "Pengambilan nomor antrian online",
      "Display antrian real-time untuk petugas",
      "Notifikasi giliran via SMS/display",
      "Laporan harian jumlah pemohon",
      "Manajemen sesi pelayanan",
    ],
    featuresEn: [
      "Online queue number registration",
      "Real-time queue display for officers",
      "Turn notifications via SMS/display",
      "Daily applicant count reports",
      "Service session management",
    ],
    challenges: [
      "Membangun sistem antrian yang adil dan transparan",
      "Menampilkan informasi antrian secara real-time",
    ],
    challengesEn: [
      "Building a fair and transparent queue system",
      "Displaying queue information in real-time",
    ],
    solutions: [
      "Auto-refresh menggunakan JavaScript untuk update real-time",
      "Algoritma antrian FIFO dengan prioritas khusus",
    ],
    solutionsEn: [
      "Auto-refresh using JavaScript for real-time updates",
      "FIFO queue algorithm with special priority",
    ],
    githubUrl: "https://github.com/randisumitro/antrian-skck",
    complexity: 3,
    status: "completed",
    year: 2026,
  },
  {
    id: "5",
    slug: "deteksi-polusi-udara",
    name: "Sistem Deteksi Polusi Udara Berbasis IoT",
    nameEn: "IoT-Based Air Pollution Detection System",
    description:
      "Sistem monitoring kualitas udara real-time menggunakan Arduino dengan sensor MQ-135, backend Python, dan antarmuka web pemantauan.",
    descriptionEn:
      "Real-time air quality monitoring system using Arduino with MQ-135 sensor, Python backend, and web monitoring interface.",
    longDescription: `Sistem Deteksi Polusi Udara adalah proyek IoT komprehensif yang menggabungkan hardware Arduino dengan sensor MQ-135 untuk mengukur kualitas udara, backend Python untuk memproses dan menyimpan data sensor, serta antarmuka web untuk visualisasi data real-time.

Sistem dapat mendeteksi berbagai polutan udara termasuk CO2, amonia, alkohol, dan partikel berbahaya lainnya. Data divisualisasikan dalam bentuk grafik real-time yang dapat diakses dari browser.`,
    longDescriptionEn: `Air Pollution Detection System is a comprehensive IoT project that combines Arduino hardware with MQ-135 sensor to measure air quality, Python backend to process and store sensor data, and web interface for real-time data visualization.

The system can detect various air pollutants including CO2, ammonia, alcohol, and other harmful particles. Data is visualized in real-time charts accessible from any browser.`,
    category: "iot",
    technologies: [
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "Arduino", category: "iot", color: "#00979D" },
      { name: "MQ-135 Sensor", category: "iot", color: "#FF6B35" },
      { name: "HTML", category: "frontend", color: "#E34F26" },
      { name: "JavaScript", category: "frontend", color: "#F7DF1E" },
      { name: "Serial Communication", category: "iot", color: "#6B7280" },
    ],
    features: [
      "Monitoring kualitas udara real-time",
      "Deteksi multi-polutan (CO2, NH3, alkohol, dll)",
      "Visualisasi data sensor dalam grafik",
      "Alert otomatis ketika kualitas udara buruk",
      "Log data historis",
      "Antarmuka web responsif",
    ],
    featuresEn: [
      "Real-time air quality monitoring",
      "Multi-pollutant detection (CO2, NH3, alcohol, etc.)",
      "Sensor data visualization in charts",
      "Automatic alerts when air quality is poor",
      "Historical data logging",
      "Responsive web interface",
    ],
    challenges: [
      "Membaca data sensor secara konsisten dari Arduino via serial",
      "Memvisualisasikan data sensor secara real-time di browser",
      "Kalibrasi sensor MQ-135 untuk pembacaan yang akurat",
    ],
    challengesEn: [
      "Reading sensor data consistently from Arduino via serial",
      "Visualizing sensor data in real-time in browser",
      "Calibrating MQ-135 sensor for accurate readings",
    ],
    solutions: [
      "Python serial library untuk komunikasi reliable dengan Arduino",
      "WebSocket atau polling untuk update data real-time di browser",
      "Algoritma kalibrasi berdasarkan datasheet sensor MQ-135",
    ],
    solutionsEn: [
      "Python serial library for reliable communication with Arduino",
      "WebSocket or polling for real-time data updates in browser",
      "Calibration algorithm based on MQ-135 sensor datasheet",
    ],
    githubUrl: "https://github.com/randisumitro/deteksi-udara",
    complexity: 4,
    status: "completed",
    year: 2026,
  },
  {
    id: "6",
    slug: "mlops-monitoring-logging",
    name: "MLOps: Monitoring & Logging dengan Prometheus & Grafana",
    nameEn: "MLOps: Monitoring & Logging with Prometheus & Grafana",
    description:
      "Setup MLOps monitoring dan logging menggunakan Prometheus dan Grafana untuk model machine learning Titanic survival prediction.",
    descriptionEn:
      "MLOps monitoring and logging setup using Prometheus and Grafana for Titanic survival prediction machine learning model.",
    longDescription: `Proyek ini mengimplementasikan infrastruktur MLOps lengkap untuk model machine learning Titanic survival prediction. Menggunakan Prometheus untuk metrics collection dan Grafana untuk dashboard visualisasi, proyek ini menunjukkan best practices dalam production ML monitoring.`,
    longDescriptionEn: `This project implements a complete MLOps infrastructure for Titanic survival prediction machine learning model. Using Prometheus for metrics collection and Grafana for dashboard visualization, the project demonstrates best practices in production ML monitoring.`,
    category: "devops",
    technologies: [
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "Prometheus", category: "devops", color: "#E6522C" },
      { name: "Grafana", category: "devops", color: "#F46800" },
      { name: "Docker", category: "devops", color: "#2496ED" },
    ],
    features: [
      "Model performance monitoring real-time",
      "Metrics collection dengan Prometheus",
      "Dashboard visualisasi dengan Grafana",
      "Alert system untuk model degradation",
      "Logging terstruktur untuk debugging",
    ],
    featuresEn: [
      "Real-time model performance monitoring",
      "Metrics collection with Prometheus",
      "Dashboard visualization with Grafana",
      "Alert system for model degradation",
      "Structured logging for debugging",
    ],
    challenges: [
      "Mengintegrasikan Prometheus metrics ke dalam Python ML pipeline",
      "Merancang dashboard Grafana yang informatif untuk ML metrics",
    ],
    challengesEn: [
      "Integrating Prometheus metrics into Python ML pipeline",
      "Designing informative Grafana dashboard for ML metrics",
    ],
    solutions: [
      "prometheus_client library untuk instrumentasi model",
      "Custom Grafana panels untuk ML-specific metrics",
    ],
    solutionsEn: [
      "prometheus_client library for model instrumentation",
      "Custom Grafana panels for ML-specific metrics",
    ],
    githubUrl: "https://github.com/randisumitro/Monitoring-dan-Logging",
    complexity: 3,
    status: "completed",
    year: 2026,
  },
  {
    id: "7",
    slug: "eksperimen-ml-sml",
    name: "Eksperimen Machine Learning — Supervised ML",
    nameEn: "Machine Learning Experiments — Supervised ML",
    description:
      "Eksperimen machine learning terstruktur menggunakan Jupyter Notebook untuk eksplorasi algoritma supervised learning.",
    descriptionEn:
      "Structured machine learning experiments using Jupyter Notebook for exploring supervised learning algorithms.",
    longDescription: `Kumpulan eksperimen machine learning yang terstruktur menggunakan Jupyter Notebook. Mencakup eksplorasi berbagai algoritma supervised learning, evaluasi model, dan analisis dataset untuk tugas klasifikasi dan regresi.`,
    longDescriptionEn: `Collection of structured machine learning experiments using Jupyter Notebook. Covers exploration of various supervised learning algorithms, model evaluation, and dataset analysis for classification and regression tasks.`,
    category: "research",
    technologies: [
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "Jupyter Notebook", category: "ml", color: "#F37626" },
      { name: "Scikit-learn", category: "ml", color: "#F89939" },
      { name: "Pandas", category: "ml", color: "#150458" },
      { name: "NumPy", category: "ml", color: "#013243" },
    ],
    features: [
      "Eksperimen supervised learning (klasifikasi & regresi)",
      "Evaluasi model dengan berbagai metrics",
      "Visualisasi data dan hasil model",
      "Analisis fitur dan feature importance",
      "Cross-validation dan hyperparameter tuning",
    ],
    featuresEn: [
      "Supervised learning experiments (classification & regression)",
      "Model evaluation with various metrics",
      "Data and model result visualization",
      "Feature analysis and feature importance",
      "Cross-validation and hyperparameter tuning",
    ],
    challenges: [
      "Memilih algoritma yang tepat untuk dataset yang berbeda",
      "Menangani overfitting dan underfitting",
    ],
    challengesEn: [
      "Choosing the right algorithm for different datasets",
      "Handling overfitting and underfitting",
    ],
    solutions: [
      "Systematic model comparison dengan cross-validation",
      "Regularization techniques untuk model generalization",
    ],
    solutionsEn: [
      "Systematic model comparison with cross-validation",
      "Regularization techniques for model generalization",
    ],
    githubUrl:
      "https://github.com/randisumitro/Eksperimen_SML_Randi-Sumitro",
    complexity: 3,
    status: "completed",
    year: 2026,
  },
  {
    id: "8",
    slug: "deteksi-udara-iot-v2",
    name: "Deteksi Udara IoT — Prototype v2",
    nameEn: "Air Quality IoT Detection — Prototype v2",
    description:
      "Versi lanjutan dari sistem monitoring kualitas udara IoT dengan peningkatan pada akurasi sensor dan komunikasi data.",
    descriptionEn:
      "Advanced version of IoT air quality monitoring system with improvements in sensor accuracy and data communication.",
    longDescription: `Versi kedua dari proyek deteksi kualitas udara IoT dengan berbagai peningkatan termasuk akurasi pembacaan sensor yang lebih baik, optimasi komunikasi data, dan antarmuka yang lebih responsif.`,
    longDescriptionEn: `Second version of the IoT air quality detection project with various improvements including better sensor reading accuracy, optimized data communication, and more responsive interface.`,
    category: "iot",
    technologies: [
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "Arduino", category: "iot", color: "#00979D" },
    ],
    features: [
      "Peningkatan akurasi sensor MQ-135",
      "Optimasi protokol komunikasi serial",
      "Penyimpanan data yang lebih efisien",
    ],
    featuresEn: [
      "Improved MQ-135 sensor accuracy",
      "Optimized serial communication protocol",
      "More efficient data storage",
    ],
    challenges: ["Meningkatkan stabilitas pembacaan sensor dalam jangka panjang"],
    challengesEn: ["Improving sensor reading stability over long periods"],
    solutions: ["Moving average filter untuk menstabilkan pembacaan sensor"],
    solutionsEn: ["Moving average filter to stabilize sensor readings"],
    githubUrl: "https://github.com/randisumitro/deteksi-udara-iot",
    complexity: 2,
    status: "completed",
    year: 2026,
  },
  {
    id: "g1",
    slug: "simponi-pematangsiantar",
    name: "SIMPONI Kota Pematangsiantar",
    nameEn: "SIMPONI Pematangsiantar City",
    description: "Sistem Informasi Manajemen Pengadaan Online untuk transparansi dan efisiensi pengadaan barang dan jasa pemerintah.",
    descriptionEn: "Online Procurement Management Information System for transparency and efficiency of government goods and services procurement.",
    longDescription: `SIMPONI (Sistem Informasi Manajemen Pengadaan Online) adalah platform digital enterprise yang dibangun khusus untuk Pemerintah Kota Pematangsiantar. Sistem ini mendigitalisasi seluruh siklus pengadaan barang dan jasa, dari pengajuan hingga persetujuan, membawa transparansi dan efisiensi ke tingkat pemerintahan daerah.`,
    longDescriptionEn: `SIMPONI (Online Procurement Management Information System) is a digital enterprise platform built specifically for the Pematangsiantar City Government. The system digitalizes the entire procurement cycle, from submission to approval, bringing transparency and efficiency to the local government level.`,
    category: "full-stack",
    role: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    institution: "Pemerintah Kota Pematangsiantar",
    status: "production",
    businessGoal: "Mendigitalisasi proses pengadaan barang dan jasa pemerintahan untuk meningkatkan transparansi, akuntabilitas, dan mempercepat siklus pengadaan lokal.",
    businessGoalEn: "Digitalizing the government procurement process to increase transparency, accountability, and accelerate the local procurement cycle.",
    technologies: [
      { name: "Next.js", category: "frontend", color: "#000000" },
      { name: "TypeScript", category: "language", color: "#3178C6" },
      { name: "Node.js", category: "backend", color: "#339933" },
      { name: "PostgreSQL", category: "database", color: "#336791" },
      { name: "Redis", category: "database", color: "#DC382D" },
    ],
    features: [
      "Manajemen vendor dan e-katalog lokal",
      "Proses bidding online transparan",
      "Approval workflow multi-tier",
      "Dashboard analitik real-time pengadaan",
    ],
    featuresEn: [
      "Vendor management and local e-catalog",
      "Transparent online bidding process",
      "Multi-tier approval workflow",
      "Real-time procurement analytics dashboard",
    ],
    challenges: [
      "Menggantikan proses manual berbasis kertas yang lambat dan rentan kesalahan.",
      "Memastikan keamanan data dan jejak audit (audit trail) pada setiap transaksi.",
    ],
    challengesEn: [
      "Replacing a slow, error-prone paper-based manual process.",
      "Ensuring data security and audit trails for every transaction.",
    ],
    solutions: [
      "Membangun arsitektur berbasis event-driven untuk menjamin rekam jejak audit yang presisi.",
      "Menerapkan Role-Based Access Control (RBAC) ketat sesuai dengan hierarki birokrasi pemerintahan.",
    ],
    solutionsEn: [
      "Building an event-driven architecture to ensure precise audit trails.",
      "Implementing strict Role-Based Access Control (RBAC) in line with government bureaucratic hierarchies.",
    ],
    results: [
      "Meningkatkan efisiensi waktu pengadaan barang dan jasa hingga 40%.",
      "Sistem terintegrasi tanpa paperwork yang diimplementasikan di seluruh dinas kota.",
    ],
    resultsEn: [
      "Increased efficiency in goods and services procurement time by up to 40%.",
      "A fully integrated, paperless system implemented across all city departments.",
    ],
    impact: "Mempercepat serapan anggaran daerah secara signifikan sekaligus memitigasi potensi kecurangan melalui transparansi data real-time.",
    impactEn: "Significantly accelerated regional budget absorption while mitigating potential fraud through real-time data transparency.",
    responsibilities: [
      "Merancang arsitektur database relasional berskala besar.",
      "Mengembangkan backend RESTful API yang aman dan efisien.",
      "Membuat antarmuka pengguna responsif dan aksesibel untuk aparat pemerintah.",
      "Melakukan performance tuning dan deployment server production.",
    ],
    responsibilitiesEn: [
      "Designed large-scale relational database architecture.",
      "Developed secure and efficient backend RESTful APIs.",
      "Created a responsive and accessible user interface for government officials.",
      "Performed performance tuning and production server deployment.",
    ],
    architecture: [
      "Microservices architecture with Next.js frontend and Node.js REST API",
      "PostgreSQL with read-replicas for heavy analytic queries",
      "Redis for distributed caching and session management",
    ],
    architectureEn: [
      "Microservices architecture with Next.js frontend and Node.js REST API",
      "PostgreSQL with read-replicas for heavy analytic queries",
      "Redis for distributed caching and session management",
    ],
    technicalHighlights: [
      "Event-driven audit trails for compliance",
      "Optimized query performance for multi-million row tables",
      "Role-Based Access Control (RBAC) with granular permissions",
    ],
    technicalHighlightsEn: [
      "Event-driven audit trails for compliance",
      "Optimized query performance for multi-million row tables",
      "Role-Based Access Control (RBAC) with granular permissions",
    ],
    screenshots: {
      desktop: "/projects/simponi-pematangsiantar-desktop.png",
      mobile: "/projects/simponi-pematangsiantar-mobile.png"
    },
    gallery: [
      "/projects/simponi-pematangsiantar-desktop.png",
      "/projects/simponi-pematangsiantar-desktop-gallery-1.png",
      "/projects/simponi-pematangsiantar-mobile.png",
      "/projects/simponi-pematangsiantar-mobile-gallery-1.png"
    ],
    githubUrl: "#", // Private
    complexity: 5,
    year: 2023,
  },
  {
    id: "g2",
    slug: "dpmptsp-pematangsiantar",
    name: "DPMPTSP Kota Pematangsiantar",
    nameEn: "DPMPTSP Pematangsiantar City",
    description: "Portal Layanan Terpadu Satu Pintu untuk memudahkan pengurusan perizinan investasi secara online bagi masyarakat dan investor.",
    descriptionEn: "One-Stop Integrated Service Portal to facilitate online investment licensing processes for citizens and investors.",
    longDescription: `Website resmi dan portal layanan perizinan Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kota Pematangsiantar. Platform ini memungkinkan warga dan entitas bisnis mengurus izin operasional mereka sepenuhnya secara digital, dilacak secara transparan, dan diinformasikan melalui notifikasi real-time.`,
    longDescriptionEn: `The official website and licensing service portal for the Investment and One-Stop Integrated Service Department (DPMPTSP) of Pematangsiantar City. This platform enables citizens and business entities to process their operational licenses completely digitally, tracked transparently, and updated via real-time notifications.`,
    category: "web-app",
    role: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    institution: "DPMPTSP Kota Pematangsiantar",
    status: "production",
    businessGoal: "Memangkas birokrasi perizinan dan menciptakan iklim investasi yang positif dengan layanan perizinan digital 24/7.",
    businessGoalEn: "Cut licensing bureaucracy and create a positive investment climate with 24/7 digital licensing services.",
    technologies: [
      { name: "React", category: "frontend", color: "#61DAFB" },
      { name: "Laravel", category: "backend", color: "#FF2D20" },
      { name: "MySQL", category: "database", color: "#4479A1" },
      { name: "Tailwind CSS", category: "frontend", color: "#06B6D4" },
    ],
    features: [
      "Pengajuan dokumen perizinan online",
      "Tracking status dokumen live",
      "Integrasi notifikasi WhatsApp otomatis",
      "Dashboard statistik layanan harian",
    ],
    featuresEn: [
      "Online licensing document submission",
      "Live document status tracking",
      "Automated WhatsApp notification integration",
      "Daily service statistics dashboard",
    ],
    challenges: [
      "Pemohon izin kerap kesulitan memantau sejauh mana dokumen mereka diproses.",
      "Banyaknya jenis perizinan dengan workflow approval yang berbeda-beda.",
    ],
    challengesEn: [
      "Applicants often found it difficult to track the progress of their documents.",
      "Numerous types of licenses, each with different approval workflows.",
    ],
    solutions: [
      "Membangun sistem tracking menggunakan nomor resi digital layaknya resi kurir logistik.",
      "Engine workflow dinamis di backend yang dapat disesuaikan per departemen perizinan.",
    ],
    solutionsEn: [
      "Built a tracking system using digital receipt numbers similar to logistics courier receipts.",
      "Developed a dynamic workflow engine in the backend that can be customized per licensing department.",
    ],
    results: [
      "Mengurangi jumlah antrian tatap muka fisik di kantor DPMPTSP hingga 60%.",
      "Peningkatan kepuasan publik karena status perizinan menjadi jelas dan terukur.",
    ],
    resultsEn: [
      "Reduced physical face-to-face queues at the DPMPTSP office by up to 60%.",
      "Increased public satisfaction due to clear and measurable licensing statuses.",
    ],
    impact: "Sistem telah memproses lebih dari puluhan ribu perizinan, menjadikan Kota Pematangsiantar lebih ramah investasi dan digital-first.",
    impactEn: "The system has processed over tens of thousands of licenses, making Pematangsiantar City more investment-friendly and digital-first.",
    responsibilities: [
      "Memimpin pengembangan frontend menggunakan React ecosystem.",
      "Merancang UI/UX yang human-centered agar dapat diakses masyarakat dari berbagai kalangan.",
      "Membangun integrasi third-party API untuk sistem notifikasi WhatsApp.",
      "Mengelola optimasi query untuk laporan statistik agregat perizinan bulanan.",
    ],
    responsibilitiesEn: [
      "Led frontend development using the React ecosystem.",
      "Designed a human-centered UI/UX accessible to people from various backgrounds.",
      "Built third-party API integrations for the WhatsApp notification system.",
      "Managed query optimizations for monthly aggregated licensing statistical reports.",
    ],
    architecture: [
      "Monolithic backend using Laravel for robust business logic",
      "Decoupled React SPA frontend communicating via REST API",
      "Message queues for asynchronous WhatsApp notifications",
    ],
    architectureEn: [
      "Monolithic backend using Laravel for robust business logic",
      "Decoupled React SPA frontend communicating via REST API",
      "Message queues for asynchronous WhatsApp notifications",
    ],
    technicalHighlights: [
      "Dynamic state machine for complex licensing workflows",
      "Automated document generation and digital signing",
      "Real-time status tracking implementation",
    ],
    technicalHighlightsEn: [
      "Dynamic state machine for complex licensing workflows",
      "Automated document generation and digital signing",
      "Real-time status tracking implementation",
    ],
    screenshots: {
      desktop: "/projects/dpmptsp-pematangsiantar-desktop.png",
      mobile: "/projects/dpmptsp-pematangsiantar-mobile.png"
    },
    gallery: [
      "/projects/dpmptsp-pematangsiantar-desktop.png",
      "/projects/dpmptsp-pematangsiantar-desktop-gallery-1.png",
      "/projects/dpmptsp-pematangsiantar-mobile.png",
      "/projects/dpmptsp-pematangsiantar-mobile-gallery-1.png"
    ],
    githubUrl: "#", // Private
    complexity: 4,
    year: 2024,
  },
  {
    id: "g3",
    slug: "mpp-pematangsiantar",
    name: "Mall Pelayanan Publik (MPP) Digital",
    nameEn: "Digital Public Service Mall (MPP)",
    description: "Portal digital terintegrasi yang menggabungkan seluruh layanan publik Pemerintah Kota ke dalam satu pintu masuk.",
    descriptionEn: "Integrated digital portal combining all City Government public services into a single entry point.",
    longDescription: `Mall Pelayanan Publik (MPP) Kota Pematangsiantar versi Digital adalah super-app berbasis web yang menyatukan layanan kependudukan, perizinan, perpajakan, hingga layanan kepolisian (SKCK) di satu platform. Mewujudkan visi Smart City melalui sentralisasi data dan layanan.`,
    longDescriptionEn: `The Digital Version of the Public Service Mall (MPP) of Pematangsiantar City is a web-based super-app that unifies civic, licensing, taxation, and police services (SKCK) onto a single platform. Realizing the Smart City vision through data and service centralization.`,
    category: "full-stack",
    role: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    institution: "Pemerintah Kota Pematangsiantar",
    status: "production",
    businessGoal: "Memberikan pengalaman layanan satu pintu yang seamless (seamless one-stop service) bagi warga, menghilangkan silo antar dinas pemerintahan.",
    businessGoalEn: "Provide a seamless one-stop service experience for citizens, eliminating silos between government departments.",
    technologies: [
      { name: "Next.js", category: "frontend", color: "#000000" },
      { name: "TypeScript", category: "language", color: "#3178C6" },
      { name: "Go", category: "backend", color: "#00ADD8" },
      { name: "PostgreSQL", category: "database", color: "#336791" },
      { name: "Docker", category: "devops", color: "#2496ED" },
    ],
    features: [
      "Single Sign-On (SSO) terintegrasi data kependudukan",
      "Katalog layanan lintas dinas yang interaktif",
      "Sistem reservasi dan antrian virtual terpusat",
      "Sistem pengaduan masyarakat terintegrasi",
    ],
    featuresEn: [
      "Single Sign-On (SSO) integrated with civic data",
      "Interactive cross-department service catalog",
      "Centralized virtual reservation and queuing system",
      "Integrated public complaint system",
    ],
    challenges: [
      "Mengintegrasikan arsitektur IT dan database yang terpisah-pisah antar instansi pemerintah.",
      "Menangani lonjakan traffic (high concurrency) pada jam sibuk pengurusan dokumen.",
    ],
    challengesEn: [
      "Integrating disjointed IT architectures and databases across government agencies.",
      "Handling high concurrency traffic during peak document processing hours.",
    ],
    solutions: [
      "Membangun API Gateway terpusat dan arsitektur microservices ringan menggunakan Go.",
      "Mengimplementasikan redis caching layer untuk catalog layanan dan optimasi rendering menggunakan Next.js SSR/ISR.",
    ],
    solutionsEn: [
      "Built a centralized API Gateway and lightweight microservices architecture using Go.",
      "Implemented a Redis caching layer for the service catalog and optimized rendering using Next.js SSR/ISR.",
    ],
    results: [
      "Satu portal tunggal melayani lebih dari puluhan ribu pengguna aktif warga kota.",
      "Stabilitas sistem (uptime 99.9%) tanpa downtime selama periode pendaftaran CPNS/PPDB.",
    ],
    resultsEn: [
      "A single portal serving over tens of thousands of active city residents.",
      "System stability (99.9% uptime) with zero downtime during CPNS/PPDB registration periods.",
    ],
    impact: "Mempercepat transformasi digital Pematangsiantar menuju ekosistem Smart City yang inklusif dan responsif.",
    impactEn: "Accelerated the digital transformation of Pematangsiantar toward an inclusive and responsive Smart City ecosystem.",
    responsibilities: [
      "Merancang arsitektur sistem berbasis service-oriented architecture (SOA).",
      "Mengembangkan core identity management (SSO) untuk warga.",
      "Membangun portal Next.js dengan fokus pada accessibility (a11y) dan LCP (Largest Contentful Paint) optimization.",
      "Berkolaborasi lintas instansi untuk memetakan dan menyatukan flow data.",
    ],
    responsibilitiesEn: [
      "Designed a service-oriented architecture (SOA) system.",
      "Developed the core identity management (SSO) system for citizens.",
      "Built the Next.js portal focusing on accessibility (a11y) and LCP (Largest Contentful Paint) optimization.",
      "Collaborated across agencies to map and unify data flows.",
    ],
    architecture: [
      "High-concurrency Go microservices backend",
      "Next.js App Router for SEO and performance",
      "Centralized OAuth2 Single Sign-On provider",
    ],
    architectureEn: [
      "High-concurrency Go microservices backend",
      "Next.js App Router for SEO and performance",
      "Centralized OAuth2 Single Sign-On provider",
    ],
    technicalHighlights: [
      "API Gateway pattern to aggregate disparate department APIs",
      "Advanced caching strategies ensuring 99.9% uptime under load",
      "WCAG-compliant frontend accessibility features",
    ],
    technicalHighlightsEn: [
      "API Gateway pattern to aggregate disparate department APIs",
      "Advanced caching strategies ensuring 99.9% uptime under load",
      "WCAG-compliant frontend accessibility features",
    ],
    screenshots: {
      desktop: "/projects/mpp-pematangsiantar-desktop.png",
      mobile: "/projects/mpp-pematangsiantar-mobile.png"
    },
    gallery: [
      "/projects/mpp-pematangsiantar-desktop.png",
      "/projects/mpp-pematangsiantar-desktop-gallery-1.png",
      "/projects/mpp-pematangsiantar-mobile.png",
      "/projects/mpp-pematangsiantar-mobile-gallery-1.png"
    ],
    githubUrl: "#", // Private
    complexity: 5,
    year: 2025,
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.status === "production").slice(0, 3);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string): Project[] =>
  category === "all"
    ? projects
    : projects.filter((p) => p.category === category);
