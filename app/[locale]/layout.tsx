import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { isValidLocale } from "@/lib/i18n/routing";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070c18" },
    { media: "(prefers-color-scheme: light)", color: "#eef2f7" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://randisumitro.vercel.app"),
  title: {
    default: "Randi Sumitro — Full Stack Developer & IoT Engineer",
    template: "%s | Randi Sumitro",
  },
  description:
    "Portfolio of Randi Sumitro — Full Stack Developer, IoT Engineer, and Machine Learning Researcher from Indonesia.",
  keywords: [
    "Randi Sumitro",
    "Full Stack Developer",
    "IoT Engineer",
    "Machine Learning",
    "Web Developer",
    "Python",
    "JavaScript",
    "PHP",
    "Arduino",
    "Indonesia",
    "Portfolio",
  ],
  authors: [{ name: "Randi Sumitro", url: "https://github.com/randisumitro" }],
  creator: "Randi Sumitro",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://randisumitro.vercel.app",
    siteName: "Randi Sumitro",
    title: "Randi Sumitro — Full Stack Developer & IoT Engineer",
    description:
      "Full Stack Developer, IoT Engineer, and Machine Learning Researcher from Indonesia.",
    images: [
      {
        url: "/images/studio-bg.jpg",
        width: 1024,
        height: 571,
        alt: "Randi Sumitro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randi Sumitro — Full Stack Developer & IoT Engineer",
    description:
      "Full Stack Developer, IoT Engineer, and Machine Learning Researcher.",
    images: ["/images/studio-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <body className="min-h-dvh font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SiteBackground />
            <div className="relative z-10 flex min-h-dvh flex-col">
              <a
                href="#main-content"
                className="visually-hidden fixed left-4 top-4 z-[60] rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg"
              >
                {locale === "id" ? "Langsung ke konten" : "Skip to content"}
              </a>
              <Navbar />
              <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
