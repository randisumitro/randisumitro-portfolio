"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Code2, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "skills", href: "/skills" },
  { key: "projects", href: "/projects" },
  { key: "research", href: "/research" },
  { key: "experience", href: "/experience" },
  { key: "contact", href: "/contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const getLocalizedHref = (href: string) =>
    `/${locale}${href === "/" ? "" : href}`;

  const isActive = (href: string) => {
    const localizedHref = getLocalizedHref(href);
    if (href === "/") {
      return pathname === localizedHref || pathname === `/${locale}`;
    }
    return pathname.startsWith(localizedHref);
  };

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    const localePattern = new RegExp(`^/${locale}(?=/|$)`);
    const newPathname = localePattern.test(pathname)
      ? pathname.replace(localePattern, `/${newLocale}`)
      : `/${newLocale}`;
    window.location.assign(newPathname);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          isScrolled
            ? "glass-nav"
            : "border-b border-transparent bg-transparent backdrop-blur-md"
        )}
      >
        <nav
          aria-label="Primary"
          className="section-container flex h-16 items-center justify-between gap-4"
        >
          {/* Brand */}
          <Link
            href={getLocalizedHref("/")}
            className="group flex items-center gap-2.5 shrink-0"
          >
            <div className="glass-subtle flex h-8 w-8 items-center justify-center rounded-lg transition-colors group-hover:border-primary/40">
              <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <span className="font-bold tracking-tight text-foreground">
              randi<span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rounded-full glass-subtle px-2 py-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.key}
                  href={getLocalizedHref(item.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/15 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleLocale}
              className="glass-subtle flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label={
                locale === "id"
                  ? "Switch language to English"
                  : "Ubah bahasa ke Indonesia"
              }
              id="language-toggle"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:block uppercase font-mono text-xs">
                {locale === "id" ? "EN" : "ID"}
              </span>
            </button>

            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="glass-subtle flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                aria-label={
                  theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                }
                id="theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            )}

            <Link
              href={getLocalizedHref("/contact")}
              id="nav-contact-btn"
              className="hidden sm:inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t("contact")}
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="glass-subtle flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              id="mobile-menu-btn"
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm md:hidden"
            />

            <motion.div
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass-drawer fixed right-0 top-0 z-50 h-full w-72 shadow-2xl md:hidden"
            >
              <div className="flex h-16 items-center justify-between px-6 border-b border-[var(--glass-border)]">
                <span className="font-bold text-foreground">
                  randi<span className="text-primary">.dev</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="glass-subtle flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-col gap-1 p-4">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.key}
                      href={getLocalizedHref(item.href)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/15 text-foreground border border-primary/25"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  );
                })}

                <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                  <button
                    type="button"
                    onClick={toggleLocale}
                    className="glass-subtle flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" />
                    Switch to {locale === "id" ? "English" : "Bahasa Indonesia"}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
