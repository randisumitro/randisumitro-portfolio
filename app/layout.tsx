import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Randi Sumitro Portfolio",
  description: "Portfolio of Randi Sumitro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
