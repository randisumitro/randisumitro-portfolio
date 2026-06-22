# 🚀 Randi Sumitro — Portfolio

Portfolio profesional Randi Sumitro — Full Stack Developer, IoT Engineer, dan ML Researcher.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/randisumitro/portfolio)

## 🌐 Live

**URL:** [randisumitro.vercel.app](https://randisumitro.vercel.app)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **i18n:** next-intl (Bilingual ID/EN)
- **Theme:** next-themes (Dark/Light)
- **Email:** Resend
- **Deployment:** Vercel

---

## 🚀 Cara Menjalankan Lokal

### 1. Clone repository

```bash
git clone https://github.com/randisumitro/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

```bash
cp .env.example .env.local
```

Isi `.env.local` dengan:

```env
GITHUB_TOKEN=your_token_here
RESEND_API_KEY=your_resend_key_here
```

### 4. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## 🔑 Cara Membuat GitHub Personal Access Token (PAT)

PAT diperlukan untuk meningkatkan GitHub API rate limit dari 60 menjadi 5000 request/jam.

1. Buka [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)
2. Beri nama token: `portfolio-api`
3. Pilih expiration: `No expiration` (atau sesuai kebutuhan)
4. Centang scopes:
   - ✅ `public_repo`
   - ✅ `read:user`
5. Klik **Generate token**
6. Copy token dan paste ke `.env.local` sebagai `GITHUB_TOKEN`

---

## 📧 Setup Resend (Contact Form)

1. Daftar di [https://resend.com](https://resend.com)
2. Pergi ke **API Keys** → **Create API Key**
3. Copy key dan paste ke `.env.local` sebagai `RESEND_API_KEY`
4. Free tier: 3000 email/bulan

---

## 🚀 Deployment ke Vercel

### Via Vercel Dashboard (Recommended)

1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com) → **New Project**
3. Import repository GitHub Anda
4. Tambahkan environment variables:
   - `GITHUB_TOKEN`
   - `RESEND_API_KEY`
5. Klik **Deploy**

### Via GitHub Actions (CI/CD Otomatis)

Tambahkan secrets di GitHub repository (`Settings` → `Secrets and variables` → `Actions`):

| Secret | Value |
|---|---|
| `VERCEL_TOKEN` | Token dari Vercel dashboard → Settings → Tokens |
| `VERCEL_ORG_ID` | Dari `.vercel/project.json` setelah `vercel link` |
| `VERCEL_PROJECT_ID` | Dari `.vercel/project.json` setelah `vercel link` |
| `GITHUB_TOKEN` | GitHub PAT Anda |
| `RESEND_API_KEY` | Resend API key Anda |

---

## 📁 Struktur Project

```
portfolio/
├── app/
│   ├── [locale]/          # Halaman dengan locale (id/en)
│   │   ├── page.tsx       # Home
│   │   ├── about/         # About
│   │   ├── skills/        # Skills
│   │   ├── projects/      # Projects + [slug]
│   │   ├── research/      # Research
│   │   ├── experience/    # Experience
│   │   └── contact/       # Contact
│   └── api/
│       ├── github/        # GitHub stats API
│       └── contact/       # Contact form API
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── home/              # Hero, Featured Projects
│   ├── skills/            # Skills accordion
│   ├── projects/          # Project cards, filter
│   ├── contact/           # Contact form
│   ├── shared/            # AnimatedSection
│   ├── ui/                # Toaster
│   └── providers/         # ThemeProvider
├── lib/
│   ├── github.ts          # GitHub API client
│   ├── projects.ts        # Projects data
│   ├── skills.ts          # Skills data
│   └── utils.ts           # Utility functions
├── messages/
│   ├── id.json            # Bahasa Indonesia
│   └── en.json            # English
└── types/
    └── index.ts           # TypeScript types
```

---

## 📄 Lisensi

MIT License — Randi Sumitro 2026
