import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Kontak" : "Contact",
    description: isId
      ? "Hubungi Randi Sumitro untuk kolaborasi proyek, freelance, atau konsultasi teknis."
      : "Contact Randi Sumitro for engineering collaboration, freelance work, or technical consulting.",
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
    color: "text-rose-400",
  },
  {
    icon: Github,
    labelId: "GitHub",
    labelEn: "GitHub",
    value: "github.com/randisumitro",
    href: "https://github.com/randisumitro",
    id: "contact-github",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    labelId: "LinkedIn",
    labelEn: "LinkedIn",
    value: "linkedin.com/in/randisumitro",
    href: "https://www.linkedin.com/in/randisumitro",
    id: "contact-linkedin",
    color: "text-sky-400",
  },
  {
    icon: Instagram,
    labelId: "Instagram",
    labelEn: "Instagram",
    value: "@smtr_27",
    href: "https://instagram.com/smtr_27",
    id: "contact-instagram",
    color: "text-pink-400",
  },
];

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  const availabilityItems = isId
    ? [
        "Proyek Freelance",
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
        "Engineering Discussions",
      ];

  return (
    <div className="relative min-h-screen">
      <div className="section-container py-16 pt-20">
        <AnimatedSection immediate className="text-center mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {isId ? "Hubungi Saya" : "Get in Touch"}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {isId ? "Mari " : "Let's "}
            <span className="text-primary">
              {isId ? "Berkolaborasi" : "Connect"}
            </span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {isId
              ? "Terbuka untuk peluang pengembangan sistem, proyek freelance, maupun konsultasi teknis."
              : "Open to software engineering projects, technical consulting, and collaboration."}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-5">
            <AnimatedSection immediate>
              <div className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {isId ? "Lokasi" : "Location"}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {isId ? "Zona Waktu" : "Timezone"}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      WIB (UTC+7)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                      {isId
                        ? "Tersedia untuk kolaborasi"
                        : "Available for collaboration"}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection immediate className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="glass-card flex items-center gap-4 p-4"
                >
                  <div className="glass-subtle flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <social.icon
                      className={`h-5 w-5 ${social.color}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                      {isId ? social.labelId : social.labelEn}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {social.value}
                    </p>
                  </div>
                </a>
              ))}
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass-card p-6">
                <h2 className="text-sm font-semibold text-foreground mb-3">
                  {isId ? "Tersedia Untuk" : "Available For"}
                </h2>
                <ul className="space-y-2">
                  {availabilityItems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle
                        className="h-4 w-4 text-emerald-400 shrink-0"
                        aria-hidden="true"
                      />
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
          <AnimatedSection immediate className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">
                {isId ? "Kirim Pesan" : "Send a Message"}
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
