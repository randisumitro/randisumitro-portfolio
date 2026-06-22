import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";

import { ContactBackground } from "@/components/backgrounds/ContactBackground";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "id" ? "Kontak | Randi Sumitro" : "Contact | Randi Sumitro",
    description:
      locale === "id"
        ? "Hubungi Randi Sumitro untuk kolaborasi proyek, freelance, atau konsultasi teknis."
        : "Contact Randi Sumitro for project collaboration, freelance work, or technical consulting.",
  };
}

const socialLinks = [
  {
    icon: Mail,
    labelId: "Email",
    labelEn: "Email",
    value: "randisumitro2@gmail.com",
    href: "mailto:randisumitro2@gmail.com",
    id: "contact-email",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    icon: Github,
    labelId: "GitHub",
    labelEn: "GitHub",
    value: "github.com/randisumitro",
    href: "https://github.com/randisumitro",
    id: "contact-github",
    color: "text-gray-400",
    bg: "bg-gray-500/10 border-gray-500/20",
  },
  {
    icon: Linkedin,
    labelId: "LinkedIn",
    labelEn: "LinkedIn",
    value: "linkedin.com/in/randisumitro",
    href: "https://www.linkedin.com/in/randisumitro",
    id: "contact-linkedin",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Instagram,
    labelId: "Instagram",
    labelEn: "Instagram",
    value: "@smtr_27",
    href: "https://instagram.com/smtr_27",
    id: "contact-instagram",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
];

export default async function ContactPage() {
  const locale = await getLocale();

  const availabilityItems =
    locale === "id"
      ? [
          "Freelance Project",
          "Kolaborasi Open Source",
          "Konsultasi Teknis",
          "Magang / Kerja Sama",
          "Diskusi Teknologi",
        ]
      : [
          "Freelance Projects",
          "Open Source Collaboration",
          "Technical Consulting",
          "Internship / Partnership",
          "Tech Discussions",
        ];

  return (
    <div className="relative min-h-screen">
      <ContactBackground />

      <div className="section-container relative z-10 py-20 pt-32">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <MessageSquare className="h-3 w-3" />
            {locale === "id" ? "Hubungi Saya" : "Get in Touch"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {locale === "id" ? "Mari " : "Let's "}
            <span className="gradient-text">
              {locale === "id" ? "Berkolaborasi" : "Collaborate"}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {locale === "id"
              ? "Saya terbuka untuk peluang kolaborasi, freelance, atau sekadar diskusi teknologi yang menarik."
              : "I'm open to collaboration opportunities, freelance work, or just interesting tech discussions."}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location & availability */}
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {locale === "id" ? "Lokasi" : "Location"}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Indonesia 🇮🇩
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {locale === "id" ? "Zona Waktu" : "Timezone"}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      WIB (UTC+7)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="text-sm font-medium text-green-400">
                      {locale === "id"
                        ? "Tersedia untuk kolaborasi"
                        : "Available for collaboration"}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection delay={0.15} className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 rounded-xl border p-4 transition-all hover:scale-[1.02] ${social.bg}`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/50`}
                  >
                    <social.icon className={`h-5 w-5 ${social.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                      {locale === "id" ? social.labelId : social.labelEn}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {social.value}
                    </p>
                  </div>
                </a>
              ))}
            </AnimatedSection>

            {/* Availability */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  {locale === "id" ? "Tersedia Untuk" : "Available For"}
                </h3>
                <ul className="space-y-2">
                  {availabilityItems.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <AnimatedSection delay={0.25} className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">
                {locale === "id" ? "Kirim Pesan" : "Send a Message"}
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
