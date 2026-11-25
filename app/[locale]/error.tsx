"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function LocaleError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();
  const isId = locale === "id";

  return (
    <div className="section-container flex min-h-[70vh] items-center justify-center py-24">
      <div className="glass-card max-w-md w-full p-8 text-center space-y-5">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl glass-subtle text-destructive">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            {isId ? "Terjadi Kesalahan" : "Something went wrong"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isId
              ? "Halaman gagal dimuat. Silakan coba muat ulang atau kembali ke beranda."
              : "This page failed to load. Please try again or return home."}
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="h-4 w-4" />
            {isId ? "Coba Lagi" : "Try Again"}
          </button>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center rounded-xl glass-subtle px-4 py-2.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
          >
            {isId ? "Beranda" : "Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
