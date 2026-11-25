"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";

export default function LocaleNotFound() {
  const locale = useLocale();
  const isId = locale === "id";

  return (
    <div className="section-container flex min-h-[70vh] items-center justify-center py-24">
      <div className="glass-card max-w-md w-full p-8 text-center space-y-5">
        <p className="font-mono text-sm font-semibold text-primary">404</p>
        <h1 className="text-2xl font-bold text-foreground">
          {isId ? "Halaman Tidak Ditemukan" : "Page Not Found"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isId
            ? "Halaman yang Anda cari tidak tersedia atau telah dipindahkan."
            : "The page you are looking for does not exist or has been moved."}
        </p>
        <div>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            {isId ? "Kembali ke Beranda" : "Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
