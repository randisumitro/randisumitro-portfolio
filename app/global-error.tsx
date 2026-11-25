"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh bg-[#070c18] text-slate-100 antialiased flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-white/15 bg-slate-950/80 p-8 text-center space-y-4">
          <h1 className="text-2xl font-bold">Application Error</h1>
          <p className="text-sm text-slate-300">
            An unexpected error occurred while rendering this page.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-xl bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950"
            >
              Try Again
            </button>
            <Link
              href="/en"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-slate-100"
            >
              Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
