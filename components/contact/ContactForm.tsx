"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
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
  const isId = locale === "id";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const labels = {
    name: isId ? "Nama Lengkap" : "Full Name",
    email: "Email",
    subject: isId ? "Subjek" : "Subject",
    message: isId ? "Pesan" : "Message",
    submit: isId ? "Kirim Pesan" : "Send Message",
    sending: isId ? "Mengirim..." : "Sending...",
    success: isId
      ? "Pesan berhasil dikirim. Saya akan membalas secepatnya."
      : "Message sent successfully. I will reply as soon as possible.",
    error: isId
      ? "Gagal mengirim pesan. Silakan kirim email langsung ke randisumitro2@gmail.com"
      : "Failed to send message. Please email randisumitro2@gmail.com directly.",
    namePlaceholder: isId ? "Nama Anda" : "Your Name",
    emailPlaceholder: "you@example.com",
    subjectPlaceholder: isId ? "Topik pesan..." : "Message topic...",
    messagePlaceholder: isId
      ? "Ceritakan kebutuhan atau pertanyaan Anda..."
      : "Tell me more about your project or inquiry...",
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = isId ? "Nama wajib diisi" : "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = isId ? "Email wajib diisi" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isId
        ? "Format email tidak valid"
        : "Invalid email format";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = isId ? "Subjek wajib diisi" : "Subject is required";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = isId
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
      "glass-input w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none",
      hasError ? "border-destructive" : "focus:border-primary"
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      id="contact-form"
      noValidate
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          {labels.name} <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder={labels.namePlaceholder}
          className={inputClass(errors.name)}
          disabled={status === "loading" || status === "success"}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="h-3 w-3" aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          {labels.email} <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder={labels.emailPlaceholder}
          className={inputClass(errors.email)}
          disabled={status === "loading" || status === "success"}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="h-3 w-3" aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          {labels.subject} <span className="text-destructive">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder={labels.subjectPlaceholder}
          className={inputClass(errors.subject)}
          disabled={status === "loading" || status === "success"}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p
            id="subject-error"
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="h-3 w-3" aria-hidden="true" />
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          {labels.message} <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder={labels.messagePlaceholder}
          className={cn(inputClass(errors.message), "resize-none")}
          disabled={status === "loading" || status === "success"}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <div className="flex items-center justify-between">
          {errors.message ? (
            <p
              id="message-error"
              className="text-xs text-destructive flex items-center gap-1"
            >
              <AlertCircle className="h-3 w-3" aria-hidden="true" />
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground tabular-nums">
            {formData.message.length}/500
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        id="contact-submit"
        className={cn(
          "w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-opacity",
          status === "loading" || status === "success"
            ? "opacity-70 cursor-not-allowed bg-primary/60 text-primary-foreground"
            : "bg-primary text-primary-foreground hover:opacity-90"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {labels.sending}
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle className="h-4 w-4" aria-hidden="true" />
            {isId ? "Terkirim" : "Sent"}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            {labels.submit}
          </>
        )}
      </button>

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl bg-emerald-500/15 border border-emerald-500/25 p-4"
          id="contact-success-msg"
        >
          <CheckCircle
            className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-emerald-800 dark:text-emerald-300">{labels.success}</p>
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl bg-destructive/15 border border-destructive/30 p-4"
          id="contact-error-msg"
        >
          <AlertCircle
            className="h-5 w-5 text-destructive shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-destructive">{labels.error}</p>
        </div>
      )}
    </form>
  );
}
