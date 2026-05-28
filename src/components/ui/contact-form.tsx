"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";

const fieldBase =
  "w-full border-2 border-line bg-paper-surface px-4 py-3 text-sm text-ink placeholder-ink-faint transition-all focus:border-brand focus:outline-none disabled:opacity-50";

export function ContactForm() {
  const { messages } = useLanguage();
  const t = messages.contact.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !projectType || !message.trim()) {
      setError(t.validationError);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(t.validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, message })
      });

      if (!response.ok) {
        throw new Error("submit failed");
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setProjectType("");
      setMessage("");
    } catch {
      setError(t.serverError);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center border-2 border-line bg-paper-surface p-8 text-center">
        <div className="relative mb-6">
          <div className="relative flex h-16 w-16 items-center justify-center border-2 border-brand bg-brand/10 text-brand">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.25}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          {t.successTitle}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
          {t.successDesc}
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 border-2 border-line bg-paper-alt px-6 py-2 text-sm font-bold text-ink transition-colors hover:bg-brand hover:text-white hover:border-brand"
        >
          {t.successBtn}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-subtle"
          >
            {t.nameLabel} <span className="text-brand">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            required
            disabled={isSubmitting}
            className={fieldBase}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-subtle"
          >
            {t.emailLabel} <span className="text-brand">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            required
            disabled={isSubmitting}
            className={fieldBase}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="projectType"
            className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-subtle"
          >
            {t.projectTypeLabel} <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <select
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
              disabled={isSubmitting}
              className={`${fieldBase} cursor-pointer appearance-none pr-10`}
            >
              <option value="" disabled>
                {t.projectTypePlaceholder}
              </option>
              <option value="ecommerce">{t.projectTypes.ecommerce}</option>
              <option value="business">{t.projectTypes.business}</option>
              <option value="landing">{t.projectTypes.landing}</option>
              <option value="performance">{t.projectTypes.performance}</option>
              <option value="other">{t.projectTypes.other}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-ink-subtle">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-subtle"
          >
            {t.messageLabel} <span className="text-brand">*</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.messagePlaceholder}
            required
            rows={4}
            disabled={isSubmitting}
            className={`${fieldBase} min-h-[120px] resize-y`}
          />
        </div>

        {error && (
          <div className="border-2 border-rose-600 bg-rose-50 px-3.5 py-3 text-xs font-bold text-rose-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 border-2 border-brand bg-brand px-4 text-sm font-bold text-white transition-all duration-200 hover:bg-paper-surface hover:text-brand disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <svg
                className="-ml-1 h-4 w-4 animate-spin text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t.submittingBtn}
            </>
          ) : (
            t.submitBtn
          )}
        </button>
      </form>
    </div>
  );
}
