"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Code2, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/randisumitro",
    icon: Github,
    id: "footer-github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/randisumitro",
    icon: Linkedin,
    id: "footer-linkedin",
  },
  {
    name: "Email",
    href: "mailto:randisumitro2@gmail.com",
    icon: Mail,
    id: "footer-email",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/smtr_27",
    icon: Instagram,
    id: "footer-instagram",
  },
];

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  const getLocalizedHref = (href: string) =>
    `/${locale}${href === "/" ? "" : href}`;

  const navLinks = [
    { labelId: "Beranda", labelEn: "Home", href: "/" },
    { labelId: "Tentang", labelEn: "About", href: "/about" },
    { labelId: "Keahlian", labelEn: "Skills", href: "/skills" },
    { labelId: "Proyek", labelEn: "Projects", href: "/projects" },
    { labelId: "Penelitian", labelEn: "Research", href: "/research" },
    { labelId: "Pengalaman", labelEn: "Experience", href: "/experience" },
    { labelId: "Kontak", labelEn: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative border-t border-[var(--glass-border)] bg-[var(--glass-nav)] backdrop-blur-xl">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="glass-subtle flex h-8 w-8 items-center justify-center rounded-lg">
                <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-foreground">
                randi<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {locale === "id"
                ? "Full Stack Developer, IoT Engineer, dan ML Researcher dari Indonesia."
                : "Full Stack Developer, IoT Engineer, and ML Researcher from Indonesia."}
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  id={social.id}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="glass-subtle flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-7 flex flex-col sm:flex-row sm:justify-end gap-8">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                {locale === "id" ? "Navigasi" : "Navigation"}
              </h2>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getLocalizedHref(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary animated-link transition-colors"
                    >
                      {locale === "id" ? link.labelId : link.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--glass-border)] pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Randi Sumitro. {t("rights")}.
          </p>
          <a
            href="https://github.com/randisumitro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors animated-link"
            id="footer-source-code"
          >
            github.com/randisumitro
          </a>
        </div>
      </div>
    </footer>
  );
}
