// ============================================================
// PROJECTS DATA — Berdasarkan analisis nyata repository GitHub
// GitHub: github.com/randisumitro
// ============================================================

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "p1",
    slug: "perkakasku",
    name: "Perkakasku — Platform Utilitas Online Client-Side",
    nameEn: "Perkakasku — Client-Side Online Utility Platform",
    description:
      "Platform utilitas dokumen, PDF, dan gambar berbasis MERN Stack dengan 21 alat pemrosesan privacy-first yang dijalankan langsung di browser maupun sandbox server.",
    descriptionEn:
      "MERN Stack document, PDF, and image utility platform offering 21 privacy-first processing tools executed client-side in the browser and via backend sandbox.",
    longDescription: `Perkakasku (MERN Glassy v30) adalah platform utilitas web untuk pemrosesan PDF, gambar, dan dokumen dengan pendekatan privacy-first: sebagian besar alat berjalan langsung di browser menggunakan WebAssembly dan pustaka client-side (pdf-lib, pdfjs-dist, Tesseract.js OCR, dan ONNX Runtime Web untuk background removal).

Untuk kebutuhan konversi format berat dan manajemen pengguna, platform ini dilengkapi backend Node.js/Express dan MongoDB dengan middleware injeksi meta SEO per-rute, rate limiting, serta integrasi pembayaran Midtrans dan Xendit.`,
    longDescriptionEn: `Perkakasku (MERN Glassy v30) is a web utility studio for PDF, image, and document workflows designed with a privacy-first architecture: core tools execute locally in the browser via WebAssembly and client-side engines (pdf-lib, pdfjs-dist, Tesseract.js OCR, and ONNX Runtime Web background removal).

For server-side document conversions and account/plan management, the platform pairs a Node.js/Express and MongoDB backend with per-route SEO injection middleware, rate limiting, and Midtrans/Xendit payment adapters.`,
    category: "full-stack",
    technologies: [
      { name: "React", category: "frontend", color: "#61DAFB" },
      { name: "Node.js", category: "backend", color: "#339933" },
      { name: "Express.js", category: "backend", color: "#6B7280" },
      { name: "MongoDB", category: "database", color: "#47A248" },
      { name: "Zustand", category: "frontend", color: "#F59E0B" },
      { name: "Tesseract.js", category: "ml", color: "#38BDF8" },
      { name: "ONNX Runtime", category: "ml", color: "#005CED" },
      { name: "Docker", category: "devops", color: "#2496ED" },
    ],
    features: [
      "21 utilitas PDF, gambar, OCR, dan dokumen terintegrasi",
      "Eksekusi client-side untuk privasi dokumen pengguna",
      "OCR multi-bahasa dengan Tesseract.js dan penghapusan latar belakang via ONNX Runtime",
      "Middleware injeksi SEO dinamis pada Express + MongoDB",
      "Integrasi gerbang pembayaran Midtrans dan fallback Xendit",
    ],
    featuresEn: [
      "21 integrated PDF, image, OCR, and document utilities",
      "Client-side processing architecture for user document privacy",
      "Browser-based OCR with Tesseract.js and background removal via ONNX Runtime Web",
      "Dynamic per-route SEO metadata middleware on Express + MongoDB",
      "Midtrans primary and Xendit fallback payment integrations",
    ],
    challenges: [
      "Menjalankan operasi PDF, OCR, dan segmentasi gambar secara ringan di sisi klien",
      "Menyajikan meta tag SEO dinamis di atas aplikasi React/Vite SPA tanpa placeholder build-time",
    ],
    challengesEn: [
      "Running PDF manipulation, OCR, and image segmentation efficiently in the browser",
      "Serving dynamic per-route SEO metadata for a Vite React SPA cleanly",
    ],
    solutions: [
      "Mengombinasikan pemrosesan lokal pdf-lib/ONNX Web dengan fallback endpoint server terkendali",
      "Membangun Express SEO middleware yang menyuntikkan OpenGraph, canonical, dan JSON-LD dari database",
    ],
    solutionsEn: [
      "Combining local pdf-lib/ONNX Web execution with dedicated Express conversion endpoints",
      "Implementing Express SEO injection middleware for OpenGraph, canonical tags, and JSON-LD",
    ],
    architecture: [
      "React 18 + Vite SPA client with Zustand state management",
      "Node.js + Express REST API with MongoDB persistence via Docker Compose",
      "Hybrid local WASM/Canvas processing + server multipart conversion pipeline",
    ],
    architectureEn: [
      "React 18 + Vite SPA client with Zustand state management",
      "Node.js + Express REST API with MongoDB persistence via Docker Compose",
      "Hybrid local WASM/Canvas processing + server multipart conversion pipeline",
    ],
    technicalHighlights: [
      "Privacy-first client-side document processing",
      "Express dynamic SEO injection & structured logging",
      "Dual payment gateway adapters (Midtrans & Xendit)",
    ],
    technicalHighlightsEn: [
      "Privacy-first client-side document processing",
      "Express dynamic SEO injection & structured logging",
      "Dual payment gateway adapters (Midtrans & Xendit)",
    ],
    githubUrl: "#",
    isPrivate: true,
    complexity: 5,
    status: "completed",
    year: 2026,
    highlights: [
      "21 Web Tools",
      "Client-Side WASM",
      "MERN Stack",
    ],
    highlightsEn: [
      "21 Web Tools",
      "Client-Side WASM",
      "MERN Stack",
    ],
  },
  {
    id: "p2",
    slug: "perkakasku-mobile-ios",
    name: "Perkakasku iOS — Native SwiftUI Client",
    nameEn: "Perkakasku iOS — Native SwiftUI Client",
    description:
      "Klien iOS native (Swift 6 & SwiftUI) untuk ekosistem Perkakasku dengan 21 alat PDF, gambar, dan dokumen privacy-first tanpa dependensi eksternal.",
    descriptionEn:
      "Native SwiftUI iOS client for Perkakasku featuring 21 privacy-first PDF, image, and document tools built solely with Apple frameworks.",
    longDescription: `Perkakasku iOS adalah aplikasi iOS native yang dibangun murni menggunakan Swift 6 dan Apple frameworks (SwiftUI, PDFKit, Vision, CoreImage, PencilKit, QuickLook, SwiftData) tanpa WebView atau dependensi pihak ketiga.

Sebanyak 15 dari 21 alur kerja berjalan sepenuhnya offline di sandbox perangkat iOS (kompresi/merge/split PDF, tanda tangan PencilKit, OCR Vision id-ID & en-US, segmentasi latar belakang, QR Code), sementara alat konversi format tertentu dapat terhubung secara opsional ke backend Perkakasku.`,
    longDescriptionEn: `Perkakasku iOS is a native iOS application built purely with Swift 6 and Apple system frameworks (SwiftUI, PDFKit, Vision, CoreImage, PencilKit, QuickLook, SwiftData) with zero external CocoaPods/SPM dependencies and no WebView wrapper.

Fifteen of its 21 workflows execute completely offline inside the iOS device sandbox—including PDFKit manipulation, PencilKit PDF signing, Apple Vision OCR (id-ID & en-US) and foreground segmentation—with optional REST multipart integration for server-backed document conversions.`,
    category: "mobile",
    technologies: [
      { name: "Swift", category: "language", color: "#F05138" },
      { name: "SwiftUI", category: "mobile", color: "#0EA5E9" },
      { name: "PDFKit", category: "mobile", color: "#EF4444" },
      { name: "Apple Vision", category: "ml", color: "#8B5CF6" },
      { name: "CoreImage", category: "mobile", color: "#10B981" },
      { name: "SwiftData", category: "database", color: "#F59E0B" },
    ],
    features: [
      "21 alat produktivitas PDF, gambar, OCR, dan dokumen dalam 5 tab navigasi",
      "15 alur kerja berjalan 100% offline di perangkat menggunakan Apple Vision & PDFKit",
      "Tanda tangan PDF interaktif dengan PencilKit dan pratinjau QuickLook",
      "Penyimpanan riwayat dan favorit lokal via SwiftData serta token di iOS Keychain",
      "Integrasi opsional ke backend Docker/Cloud Perkakasku",
    ],
    featuresEn: [
      "21 PDF, image, OCR, and document utilities across a 5-tab native studio",
      "15 completely offline on-device workflows powered by Apple Vision & PDFKit",
      "Interactive PDF signatures via PencilKit and native QuickLook previews",
      "Local history & favorites persisted with SwiftData and iOS Keychain storage",
      "Optional multipart REST integration with Perkakasku backend",
    ],
    challenges: [
      "Menyamakan kapabilitas 21 alat dari platform web ke pengalaman iOS native tanpa pustaka pihak ketiga",
      "Menjaga pemrosesan gambar dan dokumen tetap cepat dan hemat memori di sandbox iOS",
    ],
    challengesEn: [
      "Delivering feature parity across all 21 web tools natively without third-party dependencies",
      "Keeping document and image processing responsive and memory-safe inside the iOS sandbox",
    ],
    solutions: [
      "Memanfaatkan PDFKit, CoreGraphics, CoreImage, dan Apple Vision OCR/segmentation secara native",
      "Menyusun arsitektur layanan terpisah (PDFService, ImageService, VisionOCRService, APIService) dengan Swift Concurrency",
    ],
    solutionsEn: [
      "Leveraging native PDFKit, CoreGraphics, CoreImage, and Apple Vision OCR/segmentation engines",
      "Structuring modular async/await service layers (PDFService, ImageService, VisionOCRService, APIService)",
    ],
    architecture: [
      "Pure SwiftUI + Swift Concurrency (async/await) with zero third-party packages",
      "On-device engines: PDFKit, PencilKit, CoreImage, Vision OCR & Foreground Segmentation",
      "SwiftData local persistence + KeychainHelper + URLSession multipart client",
    ],
    architectureEn: [
      "Pure SwiftUI + Swift Concurrency (async/await) with zero third-party packages",
      "On-device engines: PDFKit, PencilKit, CoreImage, Vision OCR & Foreground Segmentation",
      "SwiftData local persistence + KeychainHelper + URLSession multipart client",
    ],
    technicalHighlights: [
      "Zero external dependencies (pure Apple SDK)",
      "15 offline privacy-first workflows",
      "Unit-tested tool registry and processing helpers via XCTest",
    ],
    technicalHighlightsEn: [
      "Zero external dependencies (pure Apple SDK)",
      "15 offline privacy-first workflows",
      "Unit-tested tool registry and processing helpers via XCTest",
    ],
    githubUrl: "https://github.com/randisumitro/perkakasku-mobile-ios",
    complexity: 5,
    status: "completed",
    year: 2026,
    highlights: [
      "Swift 6 & SwiftUI",
      "15 Offline Tools",
      "Zero Dependencies",
    ],
    highlightsEn: [
      "Swift 6 & SwiftUI",
      "15 Offline Tools",
      "Zero Dependencies",
    ],
  },
  {
    id: "p3",
    slug: "aave",
    name: "AAVE — Autonomous AI Video Editor",
    nameEn: "AAVE — Autonomous AI Video Editor",
    description:
      "Sistem penyuntingan video AI berbasis plugin untuk Adobe Premiere Pro & After Effects dengan arsitektur UXP, Local Companion WebSocket, dan backend FastAPI.",
    descriptionEn:
      "Plugin-first autonomous AI video editing system for Adobe Premiere Pro and After Effects integrating UXP adapters, a FastAPI Local Companion, and PostgreSQL.",
    longDescription: `AAVE (Autonomous AI Video Editor) dirancang dengan arsitektur plugin-first untuk menghubungkan Adobe Premiere Pro, Adobe After Effects, Local Companion Service, dan AI Backend berbasis FastAPI.

Proyek ini memisahkan adapter runtime UXP untuk Premiere Pro dan After Effects, berkomunikasi real-time melalui HTTP/WebSocket dengan Local Companion Service, serta memvalidasi setiap operasi timeline menggunakan skema Edit Decision List (EDL) sebelum dieksekusi.`,
    longDescriptionEn: `AAVE (Autonomous AI Video Editor) uses a plugin-first architecture to connect Adobe Premiere Pro, Adobe After Effects, a Local Companion Service, and a FastAPI AI backend.

It separates Premiere Pro and After Effects UXP plugin runtimes as independent adapters communicating over HTTP and WebSocket with the Local Companion Service, validating timeline operations through structured Edit Decision List (EDL) schemas prior to execution.`,
    category: "ai-ml",
    technologies: [
      { name: "TypeScript", category: "language", color: "#3178C6" },
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "FastAPI", category: "backend", color: "#009688" },
      { name: "Adobe UXP", category: "frontend", color: "#FF0000" },
      { name: "PostgreSQL", category: "database", color: "#336791" },
      { name: "Redis", category: "database", color: "#DC382D" },
      { name: "Docker", category: "devops", color: "#2496ED" },
    ],
    features: [
      "Plugin UXP terpisah untuk Adobe Premiere Pro dan Adobe After Effects",
      "CommandRegistry dengan validasi skema Edit Decision List (EDL) sebelum eksekusi",
      "Local Companion Service (FastAPI + WebSocket) untuk manajemen dan progres job",
      "Migrasi skema PostgreSQL 24 tabel dengan dukungan ekstensi pgvector",
      "Shared TypeScript SDK (@aave/shared-types, @aave/edit-decision-schema, @aave/plugin-sdk)",
    ],
    featuresEn: [
      "Dedicated UXP plugins for Adobe Premiere Pro and Adobe After Effects",
      "CommandRegistry with Edit Decision List (EDL) validation before timeline execution",
      "FastAPI + WebSocket Local Companion Service for real-time job orchestration",
      "24-table PostgreSQL database migration with pgvector support",
      "Shared TypeScript packages (@aave/shared-types, @aave/edit-decision-schema, @aave/plugin-sdk)",
    ],
    challenges: [
      "Menyatukan kontrol dua host Adobe berbeda (Premiere Pro & After Effects) di bawah satu kontrak perintah",
      "Menjamin operasi AI pada proyek timeline pengguna tervalidasi dan aman sebelum dijalankan",
    ],
    challengesEn: [
      "Unifying command contracts across distinct Adobe Premiere Pro and After Effects UXP runtimes",
      "Ensuring AI-generated timeline edits are schema-validated before execution",
    ],
    solutions: [
      "Membuat paket kontrak bersama (@aave/adobe-integration & @aave/edit-decision-schema)",
      "Memisahkan eksekusi lokal via Local Companion WebSocket dan validasi EDL di backend FastAPI",
    ],
    solutionsEn: [
      "Designing shared TypeScript contracts (@aave/adobe-integration & @aave/edit-decision-schema)",
      "Decoupling host execution through a FastAPI Local Companion WebSocket bridge and EDL validation",
    ],
    architecture: [
      "Monorepo workspaces: Premiere Pro UXP & After Effects UXP plugin adapters",
      "Local Companion Service (FastAPI + WebSocket) + Core Backend API",
      "PostgreSQL (24 tables + pgvector) & Redis via Docker Compose",
    ],
    architectureEn: [
      "Monorepo workspaces: Premiere Pro UXP & After Effects UXP plugin adapters",
      "Local Companion Service (FastAPI + WebSocket) + Core Backend API",
      "PostgreSQL (24 tables + pgvector) & Redis via Docker Compose",
    ],
    technicalHighlights: [
      "Plugin-first Adobe UXP architecture",
      "Structured Edit Decision List (EDL) validation",
      "PostgreSQL + pgvector + Redis infrastructure",
    ],
    technicalHighlightsEn: [
      "Plugin-first Adobe UXP architecture",
      "Structured Edit Decision List (EDL) validation",
      "PostgreSQL + pgvector + Redis infrastructure",
    ],
    githubUrl: "https://github.com/randisumitro/aave",
    complexity: 5,
    status: "active",
    year: 2026,
    highlights: [
      "Adobe UXP Plugins",
      "FastAPI + WebSocket",
      "EDL Schema",
    ],
    highlightsEn: [
      "Adobe UXP Plugins",
      "FastAPI + WebSocket",
      "EDL Schema",
    ],
  },
  {
    id: "p4",
    slug: "simptrack",
    name: "SIMPTRACK Enterprise — Manajemen Portofolio Proyek & SIG",
    nameEn: "SIMPTRACK Enterprise — GIS Project & Permit Compliance",
    description:
      "Platform manajemen portofolio proyek geospasial (Leaflet & MongoDB 2dsphere) dan kepatuhan perizinan PTSP berbasis Finite State Machine serta RBAC.",
    descriptionEn:
      "Geospatial project portfolio management (Leaflet & MongoDB 2dsphere) and PTSP permit compliance platform powered by a Finite State Machine and RBAC.",
    longDescription: `SIMPTRACK Enterprise adalah platform manajemen proyek geospasial dan perizinan terpadu berbasis MERN Stack (MongoDB, Express.js, React, Node.js). Sistem ini dibangun untuk memantau proyek fisik multi-lokasi secara spasial sekaligus menegakkan alur kepatuhan perizinan formal (HSE, AMDAL, PBG).

Di sisi backend, platform mengimplementasikan indeks spasial MongoDB 2dsphere, Finite State Machine (FSM) 5 tahap untuk siklus izin PTSP dengan proteksi idempotency, RBAC 6 peran, audit trail otomatis, dan ekspor laporan PDF/Excel.`,
    longDescriptionEn: `SIMPTRACK Enterprise is a geospatial project portfolio and permit compliance platform built on the MERN Stack (MongoDB, Express.js, React, Node.js). It provides spatial visibility across multi-site physical projects while enforcing formal licensing compliance workflows (HSE, AMDAL, PBG).

The backend implements MongoDB 2dsphere geospatial indexing, a 5-stage Finite State Machine (FSM) for PTSP permit processing with idempotency protection, 6-role RBAC, automated audit logs, and direct PDF/Excel report exports.`,
    category: "full-stack",
    technologies: [
      { name: "React", category: "frontend", color: "#61DAFB" },
      { name: "Node.js", category: "backend", color: "#339933" },
      { name: "Express.js", category: "backend", color: "#6B7280" },
      { name: "MongoDB", category: "database", color: "#47A248" },
      { name: "Leaflet", category: "frontend", color: "#199900" },
      { name: "Tailwind CSS", category: "frontend", color: "#06B6D4" },
      { name: "Jest", category: "devops", color: "#C21325" },
      { name: "Docker", category: "devops", color: "#2496ED" },
    ],
    features: [
      "GIS Command Center dengan peta Leaflet WGS84 dan filter radius spasial MongoDB 2dsphere",
      "Alur kerja perizinan PTSP berbasis Finite State Machine 5 tahap",
      "Pelacakan status izin publik tanpa login via nomor tanda terima",
      "RBAC 6 peran dengan proteksi BOLA/IDOR dan audit log otomatis",
      "Ekspor laporan PDF (PDFKit) dan Excel (ExcelJS) serta 31 automated tests (Jest + Supertest)",
    ],
    featuresEn: [
      "GIS Command Center with Leaflet WGS84 maps and MongoDB 2dsphere radius queries",
      "5-stage Finite State Machine (FSM) workflow for PTSP licensing compliance",
      "Public unauthenticated permit status tracking via receipt numbers",
      "6-role RBAC with BOLA/IDOR protections and automated audit trail",
      "Native PDF (PDFKit) & Excel (ExcelJS) exports plus 31 Jest/Supertest integration tests",
    ],
    challenges: [
      "Menjaga integritas transisi status perizinan agar bebas pengajuan ganda atau lompatan status",
      "Menyajikan kueri spasial radius lokasi proyek secara cepat di peta interaktif",
    ],
    challengesEn: [
      "Enforcing strict permit state transitions without duplicate submissions or invalid state jumps",
      "Querying and rendering multi-radius project locations smoothly on an interactive map",
    ],
    solutions: [
      "Menerapkan Workflow FSM 5 tahap disertai idempotency key/hash protection",
      "Menggunakan indeks MongoDB 2dsphere ($near/$maxDistance) terhubung ke Leaflet map drawer",
    ],
    solutionsEn: [
      "Implementing a 5-stage Workflow FSM backed by idempotency key/hash protection",
      "Indexing GeoJSON coordinates with MongoDB 2dsphere ($near/$maxDistance) wired to Leaflet",
    ],
    architecture: [
      "React 18 + Vite + Leaflet SPA frontend",
      "Node.js + Express REST API with JWT, RBAC, Zod validation & rate limiting",
      "MongoDB (2dsphere spatial indexes) + Jest/Supertest test suite",
    ],
    architectureEn: [
      "React 18 + Vite + Leaflet SPA frontend",
      "Node.js + Express REST API with JWT, RBAC, Zod validation & rate limiting",
      "MongoDB (2dsphere spatial indexes) + Jest/Supertest test suite",
    ],
    technicalHighlights: [
      "31 passed automated tests across 7 suites (Jest + Supertest)",
      "MongoDB 2dsphere geospatial queries + Leaflet GIS",
      "Cryptographic creator attribution & audit trail",
    ],
    technicalHighlightsEn: [
      "31 passed automated tests across 7 suites (Jest + Supertest)",
      "MongoDB 2dsphere geospatial queries + Leaflet GIS",
      "Cryptographic creator attribution & audit trail",
    ],
    githubUrl: "https://github.com/randisumitro/simptrack",
    complexity: 5,
    status: "completed",
    year: 2026,
    highlights: [
      "GIS + MongoDB 2dsphere",
      "Workflow FSM",
      "31 Passed Tests",
    ],
    highlightsEn: [
      "GIS + MongoDB 2dsphere",
      "Workflow FSM",
      "31 Passed Tests",
    ],
  },
  {
    id: "p5",
    slug: "motocare-mobile",
    name: "MotoCare Mobile — Manajemen Perawatan Kendaraan",
    nameEn: "MotoCare Mobile — Vehicle Maintenance Tracker",
    description:
      "Aplikasi mobile berbasis Expo Router & React Native (TypeScript) untuk mencatat kendaraan, riwayat servis, pengeluaran perawatan, dan pengingat jadwal servis.",
    descriptionEn:
      "Cross-platform mobile application built with Expo Router and React Native (TypeScript) for tracking vehicles, service history, maintenance expenses, and scheduled reminders.",
    longDescription: `MotoCare Mobile adalah aplikasi mobile berbasis React Native dan Expo Router (SDK 57) yang dirancang untuk membantu pemilik kendaraan mengelola data kendaraan, mencatat riwayat perawatan, memantau pengeluaran servis, dan mengatur pengingat perawatan berkala.

Aplikasi menggunakan file-based routing Expo Router, manajemen state server dengan TanStack Query, state lokal dengan Zustand, serta dukungan modul native Expo untuk notifikasi, lokasi, dan penyimpanan token aman via Expo Secure Store.`,
    longDescriptionEn: `MotoCare Mobile is a cross-platform mobile app built with React Native and Expo Router (SDK 57) to help vehicle owners manage multiple vehicles, log service records, monitor maintenance expenses, and schedule recurring reminders.

The codebase leverages Expo Router file-based navigation, TanStack Query for server-state synchronization, Zustand for client state, and native Expo modules including Notifications, Location, Image, and Secure Store.`,
    category: "mobile",
    technologies: [
      { name: "TypeScript", category: "language", color: "#3178C6" },
      { name: "React Native", category: "mobile", color: "#61DAFB" },
      { name: "Expo Router", category: "mobile", color: "#000020" },
      { name: "TanStack Query", category: "frontend", color: "#FF4154" },
      { name: "Zustand", category: "frontend", color: "#F59E0B" },
      { name: "Axios", category: "frontend", color: "#5A29E4" },
    ],
    features: [
      "Manajemen multi-kendaraan dengan profil dan riwayat servis lengkap",
      "Pelacakan pengeluaran perawatan dan statistik biaya berkala",
      "Pengingat servis terjadwal berbasis Expo Notifications",
      "Autentikasi terpisah dan penyimpanan kredensial dengan Expo Secure Store",
      "Sinkronisasi API responsif menggunakan TanStack Query dan Axios",
    ],
    featuresEn: [
      "Multi-vehicle management with detailed profiles and service history",
      "Maintenance expense tracking and periodic cost statistics",
      "Scheduled service reminders powered by Expo Notifications",
      "Dedicated auth flow with credential storage via Expo Secure Store",
      "Reactive API caching and synchronization with TanStack Query & Axios",
    ],
    challenges: [
      "Menjaga konsistensi state antara data kendaraan, catatan biaya, dan jadwal pengingat di perangkat mobile",
      "Menyusun navigasi terpisah untuk alur autentikasi dan layar utama aplikasi",
    ],
    challengesEn: [
      "Keeping vehicle records, expense logs, and reminder schedules synchronized cleanly",
      "Structuring clean route groups for authentication and nested maintenance workflows",
    ],
    solutions: [
      "Menggunakan route groups Expo Router ((auth) & (app)) dengan pemisahan layer API terpusat",
      "Mengombinasikan TanStack Query untuk cache API dan Zustand untuk state aplikasi ringan",
    ],
    solutionsEn: [
      "Organizing Expo Router route groups ((auth) & (app)) with typed API service modules",
      "Pairing TanStack Query cache invalidation with lightweight Zustand stores",
    ],
    architecture: [
      "Expo SDK 57 + React Native + Expo Router file-based navigation",
      "Typed API layer (vehicles, maintenance, expenses, user) via Axios + TanStack Query",
      "Zustand client store + Expo Secure Store & Notifications",
    ],
    architectureEn: [
      "Expo SDK 57 + React Native + Expo Router file-based navigation",
      "Typed API layer (vehicles, maintenance, expenses, user) via Axios + TanStack Query",
      "Zustand client store + Expo Secure Store & Notifications",
    ],
    technicalHighlights: [
      "TypeScript + Expo Router route groups",
      "TanStack Query + Zustand state architecture",
      "Cross-platform iOS, Android & Web targets",
    ],
    technicalHighlightsEn: [
      "TypeScript + Expo Router route groups",
      "TanStack Query + Zustand state architecture",
      "Cross-platform iOS, Android & Web targets",
    ],
    githubUrl: "https://github.com/randisumitro/motocare-mobile",
    complexity: 4,
    status: "completed",
    year: 2026,
    highlights: [
      "Expo & React Native",
      "TypeScript",
      "TanStack Query",
    ],
    highlightsEn: [
      "Expo & React Native",
      "TypeScript",
      "TanStack Query",
    ],
  },
  {
    id: "p6",
    slug: "cafe-platform",
    name: "Cafe Platform — POS, Operasional & AI CCTV Analytics",
    nameEn: "Cafe Platform — POS, Operations & AI CCTV Analytics",
    description:
      "Platform manajemen kafe dan rental PlayStation berbasis Laravel & Filament dengan POS, stok resep, siaran real-time Laravel Reverb, serta microservice AI CCTV FastAPI.",
    descriptionEn:
      "Integrated cafe and PlayStation lounge operations platform built with Laravel, Filament Admin, Laravel Reverb, and a Python FastAPI Computer Vision anomaly service.",
    longDescription: `Cafe Platform adalah sistem operasional terintegrasi untuk bisnis kafe dan rental PlayStation yang dibangun menggunakan PHP 8.3, Laravel, dan Filament Admin. Sistem mencakup manajemen meja, sesi PlayStation (beserta perpanjangan waktu), POS, manajemen shift, stok bahan, versi resep, serta pencatatan waste dan audit.

Selain inti transaksi di Laravel + Laravel Reverb untuk pembaruan real-time, sistem ini terintegrasi dengan layanan Computer Vision Python FastAPI (ai_service) untuk mendeteksi peristiwa CCTV seperti product assembly, tumpahan (spill), atau akses tidak sah.`,
    longDescriptionEn: `Cafe Platform is an integrated operations system for cafe and PlayStation lounge businesses built with PHP 8.3, Laravel, and Filament Admin. It covers table and PlayStation session management, POS orders and payments, shift tracking, ingredient inventory, versioned recipes, waste records, and audit trails.

Alongside Laravel Reverb real-time broadcasting, the platform integrates a Python FastAPI Computer Vision microservice (ai_service) that analyzes camera zones and sends webhook alerts for product assembly, spills, and unauthorized access anomalies.`,
    category: "full-stack",
    technologies: [
      { name: "PHP", category: "language", color: "#777BB4" },
      { name: "Laravel", category: "backend", color: "#FF2D20" },
      { name: "Filament", category: "frontend", color: "#F59E0B" },
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "FastAPI", category: "backend", color: "#009688" },
      { name: "Tailwind CSS", category: "frontend", color: "#06B6D4" },
      { name: "Docker", category: "devops", color: "#2496ED" },
    ],
    features: [
      "Panel admin Filament multi-peran dengan Spatie Permission & Activity Log",
      "Manajemen sesi meja kafe & billing PlayStation (perpanjangan sesi & transfer meja)",
      "Kontrol stok inventaris, versi resep (RecipeVersion), dan catatan waste",
      "Microservice Computer Vision FastAPI untuk deteksi anomali zona kamera CCTV",
      "Broadcasting event real-time dengan Laravel Reverb serta ekspor PDF/Excel",
    ],
    featuresEn: [
      "Multi-role Filament Admin panels with Spatie Permission & Activity Log",
      "Cafe table & PlayStation lounge session billing (extensions & table transfers)",
      "Ingredient inventory control, recipe versioning, and waste tracking",
      "FastAPI Computer Vision microservice for CCTV zone anomaly webhooks",
      "Real-time broadcasting via Laravel Reverb and PDF/Excel operational exports",
    ],
    challenges: [
      "Menyatukan transaksi kasir POS, manajemen inventaris berbasis resep, dan billing sesi timer real-time",
      "Menghubungkan event deteksi AI kamera secara asinkron tanpa memblokir alur kasir utama",
    ],
    challengesEn: [
      "Unifying POS billing, recipe-level inventory deductions, and live PlayStation session timers",
      "Ingesting asynchronous AI camera anomaly events without blocking core POS operations",
    ],
    solutions: [
      "Merancang model domain Laravel terstruktur (Order, TableSession, PsSession, RecipeVersion, AnomalyReview)",
      "Menjalankan layanan AI Computer Vision pada container FastAPI terpisah dengan webhook asinkron",
    ],
    solutionsEn: [
      "Designing a cohesive Laravel domain model (Order, TableSession, PsSession, RecipeVersion, AnomalyReview)",
      "Isolating Computer Vision processing inside a Python FastAPI microservice posting async webhooks",
    ],
    architecture: [
      "Laravel 13 + Filament Admin + Sanctum + Laravel Reverb WebSockets",
      "Python FastAPI AI Computer Vision microservice (Docker Compose)",
      "Blade + Tailwind CSS v4 + Vite frontend build",
    ],
    architectureEn: [
      "Laravel 13 + Filament Admin + Sanctum + Laravel Reverb WebSockets",
      "Python FastAPI AI Computer Vision microservice (Docker Compose)",
      "Blade + Tailwind CSS v4 + Vite frontend build",
    ],
    technicalHighlights: [
      "40+ domain models covering POS, inventory, PS sessions & AI anomaly review",
      "Laravel + Python FastAPI hybrid microservice architecture",
      "Production Docker Compose & cPanel deployment support",
    ],
    technicalHighlightsEn: [
      "40+ domain models covering POS, inventory, PS sessions & AI anomaly review",
      "Laravel + Python FastAPI hybrid microservice architecture",
      "Production Docker Compose & cPanel deployment support",
    ],
    githubUrl: "#",
    isPrivate: true,
    complexity: 5,
    status: "completed",
    year: 2026,
    highlights: [
      "Laravel & Filament",
      "FastAPI AI CCTV",
      "POS & Inventory",
    ],
    highlightsEn: [
      "Laravel & Filament",
      "FastAPI AI CCTV",
      "POS & Inventory",
    ],
  },
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
  {
    id: "g4",
    slug: "simponi-ai-time-estimation",
    name: "[Feature Release] AI Time Estimation SIMPONI",
    nameEn: "[Feature Release] AI Time Estimation SIMPONI",
    description: "Fitur Estimasi Waktu Perizinan Berbasis Machine Learning untuk aplikasi SIMPONI.",
    descriptionEn: "Machine Learning-based Licensing Time Estimation Feature for SIMPONI application.",
    longDescription: `Sebagai developer, salah satu tantangan terbesar di sektor e-Government adalah memberikan transparansi dan kepastian waktu kepada masyarakat. Selama ini, pemohon izin sering kali bertanya-tanya, "Kapan izin saya selesai diproses?"\n\nUntuk menjawab tantangan tersebut, saya baru saja merilis Novelty Feature terbaru untuk aplikasi SIMPONI (Sistem Perizinan Online Pematangsiantar): Fitur Estimasi Waktu Perizinan Berbasis Machine Learning!\n\nDaripada menggunakan estimasi statis (SOP baku), sistem kini dapat memprediksi secara dinamis berapa hari sebuah permohonan izin akan selesai berdasarkan rekam jejak historis pemrosesan perizinan yang nyata.\n\nTechnical Highlights & Architecture:\n- Model AI: Menggunakan algoritma CatBoost Regressor yang dilatih dari ribuan data historis permohonan. Model ini mencapai akurasi yang sangat baik dengan tingkat error (MAPE) hanya 16.69% dan R² 58.65%.\n- Microservice Architecture: Model AI di-deploy sebagai RESTful API Microservice menggunakan Python (Flask) & Gunicorn yang berjalan mandiri (isolated) di server.\n- Seamless Integration: Backend utama SIMPONI yang menggunakan PHP (CodeIgniter) bertindak sebagai API Consumer. Aplikasi akan mengirimkan payload fitur via cURL, lalu menampilkan hasil estimasi hari secara real-time ke masyarakat.\n- Native UI/UX: Tampilan prediksi di-desain menyatu 100% dengan template asli dashboard SIMPONI menggunakan komponen Card, Progress Bar, dan Timeline, sehingga UX tetap intuitif dan elegan.\n\nDampak dari fitur ini? Transparansi yang jauh lebih baik. Masyarakat tidak perlu lagi bingung melacak sejauh mana progres berkas mereka, karena AI akan memberikan estimasi confidence interval secara matematis.`,
    longDescriptionEn: `As a developer, one of the biggest challenges in the e-Government sector is providing transparency and time certainty to the public. For answering this, I recently released a Machine Learning-based Time Estimation feature for the SIMPONI application.\n\nInstead of using static estimations, the system can now dynamically predict how many days a permit application will take based on historical processing track records.\n\nTechnical Highlights: CatBoost Regressor model (MAPE 16.69%, R² 58.65%), isolated Python Flask RESTful microservice, seamless PHP CodeIgniter API consumer integration, and native UI/UX integration.`,
    category: "ai-ml",
    role: "AI & Backend Engineer",
    roleEn: "AI & Backend Engineer",
    institution: "Pemerintah Kota Pematangsiantar",
    status: "production",
    businessGoal: "Memberikan transparansi dan kepastian waktu kepada masyarakat terkait pemrosesan perizinan.",
    businessGoalEn: "Provide transparency and time certainty to the public regarding permit processing.",
    technologies: [
      { name: "Python", category: "language", color: "#3572A5" },
      { name: "CatBoost", category: "ml", color: "#FFDF00" },
      { name: "Flask", category: "backend", color: "#000000" },
      { name: "PHP", category: "language", color: "#777BB4" },
      { name: "CodeIgniter", category: "backend", color: "#EF4223" },
    ],
    features: [
      "Prediksi waktu penyelesaian dinamis",
      "Model CatBoost Regressor (MAPE 16.69%)",
      "Arsitektur Microservice Flask Python",
      "Integrasi API Consumer PHP cURL"
    ],
    featuresEn: [
      "Dynamic completion time prediction",
      "CatBoost Regressor model (MAPE 16.69%)",
      "Python Flask microservice architecture",
      "PHP cURL API consumer integration"
    ],
    challenges: [
      "Menggantikan SOP statis dengan prediksi AI",
      "Integrasi antara sistem legacy PHP dan AI Python"
    ],
    challengesEn: [
      "Replacing static SOPs with AI predictions",
      "Integration between legacy PHP systems and Python AI"
    ],
    solutions: [
      "Melatih model CatBoost dengan ribuan data historis nyata",
      "Membangun Microservice mandiri terisolasi via RESTful API"
    ],
    solutionsEn: [
      "Training CatBoost model with thousands of real historical data",
      "Building an isolated independent Microservice via RESTful API"
    ],
    results: [
      "Akurasi model sangat baik (MAPE 16.69%, R² 58.65%)",
      "Memberikan rentang waktu estimasi ke masyarakat secara matematis"
    ],
    resultsEn: [
      "Excellent model accuracy (MAPE 16.69%, R² 58.65%)",
      "Provides mathematical estimation timeframes to the public"
    ],
    impact: "Transparansi publik meningkat signifikan, mengurangi kebingungan status berkas.",
    impactEn: "Public transparency significantly improved, reducing file status confusion.",
    responsibilities: [
      "Data engineering & training model CatBoost",
      "Membangun API Flask",
      "Membangun integrasi UI/UX di CodeIgniter"
    ],
    responsibilitiesEn: [
      "Data engineering & CatBoost model training",
      "Building Flask API",
      "Building UI/UX integration in CodeIgniter"
    ],
    architecture: [
      "Python Flask API Microservice",
      "PHP CodeIgniter API Consumer"
    ],
    architectureEn: [
      "Python Flask API Microservice",
      "PHP CodeIgniter API Consumer"
    ],
    technicalHighlights: [
      "CatBoost Regressor (MAPE 16.69%, R² 58.65%)",
      "Isolated deployment"
    ],
    technicalHighlightsEn: [
      "CatBoost Regressor (MAPE 16.69%, R² 58.65%)",
      "Isolated deployment"
    ],
    screenshots: {
      desktop: "/projects/simponi-ai-feature.png",
      mobile: "/projects/simponi-ai-feature.png"
    },
    gallery: [
      "/projects/simponi-ai-feature.png"
    ],
    githubUrl: "https://github.com/randisumitro/simponi-showcase",
    complexity: 4,
    year: 2026,
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
