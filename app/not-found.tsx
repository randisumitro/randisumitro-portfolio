import Link from "next/link";
import "@/app/globals.css";

export default function RootNotFound() {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh bg-[#070c18] text-slate-100 antialiased flex items-center justify-center p-6">
        <div className="glass-card max-w-md w-full p-8 text-center space-y-4">
          <p className="font-mono text-sm font-semibold text-sky-400">404</p>
          <h1 className="text-2xl font-bold">Page Not Found</h1>
          <p className="text-sm text-slate-300">
            The requested route could not be found.
          </p>
          <Link
            href="/en"
            className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-2.5 text-sm font-medium text-slate-950 hover:opacity-90 transition-opacity"
          >
            Go to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
