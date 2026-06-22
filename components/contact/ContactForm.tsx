"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const locale = useLocale();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const labels = {
    name: locale === "id" ? "Nama Lengkap" : "Full Name",
    email: "Email",
    subject: locale === "id" ? "Subjek" : "Subject",
    message: locale === "id" ? "Pesan" : "Message",
    submit: locale === "id" ? "Kirim Pesan" : "Send Message",
    sending: locale === "id" ? "Mengirim..." : "Sending...",
    success: locale === "id"
      ? "Pesan berhasil dikirim! Saya akan membalas secepatnya."
      : "Message sent successfully! I'll reply as soon as possible.",
    error: locale === "id"
      ? "Gagal mengirim pesan. Silakan email langsung ke randisumitro2@gmail.com"
      : "Failed to send. Please email directly to randisumitro2@gmail.com",
    namePlaceholder: locale === "id" ? "Nama Anda" : "Your Name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: locale === "id" ? "Topik pesan..." : "Message topic...",
    messagePlaceholder: locale === "id"
      ? "Ceritakan lebih lanjut tentang kebutuhan atau pertanyaan Anda..."
      : "Tell me more about your needs or questions...",
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = locale === "id" ? "Nama wajib diisi" : "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = locale === "id" ? "Email wajib diisi" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === "id" ? "Format email tidak valid" : "Invalid email format";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = locale === "id" ? "Subjek wajib diisi" : "Subject is required";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = locale === "id"
        ? "Pesan minimal 10 karakter"
        : "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (hasError?: string) =>
    cn(
      "w-full rounded-xl border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-all",
      "focus:outline-none focus:ring-2 focus:border-transparent",
      hasError
        ? "border-destructive focus:ring-destructive/30"
        : "border-border/50 focus:ring-primary/30 focus:border-primary/50"
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form" noValidate>
      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          {labels.name} <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder={labels.namePlaceholder}
          className={inputClass(errors.name)}
          disabled={status === "loading" || status === "success"}
          autoComplete="name"
        />
        {errors.name && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          {labels.email} <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={labels.emailPlaceholder}
          className={inputClass(errors.email)}
          disabled={status === "loading" || status === "success"}
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          {labels.subject} <span className="text-destructive">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder={labels.subjectPlaceholder}
          className={inputClass(errors.subject)}
          disabled={status === "loading" || status === "success"}
        />
        {errors.subject && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {labels.message} <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={labels.messagePlaceholder}
          className={cn(inputClass(errors.message), "resize-none")}
          disabled={status === "loading" || status === "success"}
        />
        <div className="flex items-center justify-between">
          {errors.message ? (
            <p className="text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground">
            {formData.message.length}/500
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        id="contact-submit"
        className={cn(
          "w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all",
          status === "loading" || status === "success"
            ? "opacity-70 cursor-not-allowed bg-primary/60"
            : "bg-primary text-primary-foreground hover:bg-primary/90 shimmer-button shadow-glow hover:shadow-glow-lg"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {labels.sending}
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle className="h-4 w-4" />
            {locale === "id" ? "Terkirim!" : "Sent!"}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {labels.submit}
          </>
        )}
      </button>

      {/* Status messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-start gap-3 rounded-xl bg-green-500/10 border border-green-500/20 p-4"
            id="contact-success-msg"
          >
            <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
            <p className="text-sm text-green-400">{labels.success}</p>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-start gap-3 rounded-xl bg-destructive/10 border border-destructive/20 p-4"
            id="contact-error-msg"
          >
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-destructive">{labels.error}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
