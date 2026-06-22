import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://randisumitro.vercel.app"),
  title: {
    default: "Randi Sumitro — Full Stack Developer & IoT Engineer",
    template: "%s | Randi Sumitro",
  },
  description:
    "Portfolio of Randi Sumitro — Full Stack Developer, IoT Engineer, and Machine Learning Researcher from Indonesia. Building innovative solutions with Python, JavaScript, PHP, Arduino, and Azure AI.",
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
    siteName: "Randi Sumitro Portfolio",
    title: "Randi Sumitro — Full Stack Developer & IoT Engineer",
    description:
      "Full Stack Developer, IoT Engineer, and Machine Learning Researcher building innovative technology solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Randi Sumitro Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randi Sumitro — Full Stack Developer & IoT Engineer",
    description:
      "Full Stack Developer, IoT Engineer, and Machine Learning Researcher.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
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
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
