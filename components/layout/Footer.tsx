"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Heart, Code2, Instagram } from "lucide-react";
import { motion } from "framer-motion";

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

const techStack = ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"];

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  const getLocalizedHref = (href: string) =>
    `/${locale}${href === "/" ? "" : href}`;

  const navLinks = [
    { labelId: "Beranda", labelEn: "Home", href: "/" },
    { labelId: "Tentang", labelEn: "About", href: "/about" },
    { labelId: "Proyek", labelEn: "Projects", href: "/projects" },
    { labelId: "Penelitian", labelEn: "Research", href: "/research" },
    { labelId: "Kontak", labelEn: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="section-container relative py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Code2 className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg font-bold">
                randi<span className="gradient-text">.dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {locale === "id"
                ? "Full Stack Developer, IoT Engineer, dan ML Researcher dari Indonesia."
                : "Full Stack Developer, IoT Engineer, and ML Researcher from Indonesia."}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  id={social.id}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-muted/50 text-muted-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
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

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {locale === "id" ? "Dibangun Dengan" : "Built With"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="https://github.com/randisumitro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors animated-link"
                id="footer-source-code"
              >
                {locale === "id" ? "Kode Sumber Terbuka" : "Open Source Code"}
                &nbsp;→
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Randi Sumitro. {t("rights")}.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {t("built_with")}
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
            {t("by")} Randi Sumitro
          </p>
        </div>
      </div>
    </footer>
  );
}
