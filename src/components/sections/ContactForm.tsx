"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { buildProjectRequestMessage, buildTelegramDeepLink } from "@/lib/telegram";

type FormState = {
  name: string;
  telegram: string;
  phone: string;
  service: string;
  project: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  telegram: "",
  phone: "",
  service: "",
  project: "",
};

function validate(state: FormState): Errors {
  const errors: Errors = {};
  if (!state.name.trim() || state.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!state.telegram.trim()) {
    errors.telegram = "Please enter your Telegram username.";
  } else if (!/^@?[a-zA-Z0-9_]{4,32}$/.test(state.telegram.trim())) {
    errors.telegram = "Enter a valid Telegram username (e.g. @yourname).";
  }
  if (!state.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[+\d][\d\s().-]{6,20}$/.test(state.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!state.service) {
    errors.service = "Please select a service.";
  }
  if (!state.project.trim() || state.project.trim().length < 10) {
    errors.project = "Please describe your project (10+ characters).";
  }
  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-[var(--border-subtle)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors duration-200 focus:border-[var(--accent-bright)]/50 focus:bg-white/[0.05] focus:outline-none";

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(state);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const message = buildProjectRequestMessage({
      name: state.name.trim(),
      telegram: state.telegram.trim(),
      phone: state.phone.trim(),
      service: state.service,
      project: state.project.trim(),
    });
    setGeneratedMessage(message);
    setSubmitted(true);
  }

  function handleReset() {
    setState(initialState);
    setErrors({});
    setSubmitted(false);
    setGeneratedMessage("");
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="card-surface flex flex-col items-center rounded-2xl p-8 text-center sm:p-10"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
          Your request is ready.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
          We&apos;ve prepared your project request. Continue in Telegram to
          send it directly to ZTech Group.
        </p>

        <pre className="mt-6 w-full overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-black/30 p-4 text-left font-mono text-xs leading-relaxed text-[var(--text-secondary)]">
          {generatedMessage}
        </pre>

        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
          <a
            href={buildTelegramDeepLink("ztechuz001", generatedMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[#07080a] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.97]"
          >
            Continue in Telegram
            <Send size={15} />
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Send another request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-6 sm:p-8" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={state.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className={inputClasses}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          <AnimatePresence>
            {errors.name && <FieldError id="name-error">{errors.name}</FieldError>}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="telegram" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Telegram username
          </label>
          <input
            id="telegram"
            type="text"
            value={state.telegram}
            onChange={(e) => update("telegram", e.target.value)}
            placeholder="@yourusername"
            className={inputClasses}
            aria-invalid={!!errors.telegram}
            aria-describedby={errors.telegram ? "telegram-error" : undefined}
          />
          <AnimatePresence>
            {errors.telegram && <FieldError id="telegram-error">{errors.telegram}</FieldError>}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+998 90 123 45 67"
            className={inputClasses}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          <AnimatePresence>
            {errors.phone && <FieldError id="phone-error">{errors.phone}</FieldError>}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Service
          </label>
          <select
            id="service"
            value={state.service}
            onChange={(e) => update("service", e.target.value)}
            className={`${inputClasses} appearance-none`}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0c0d10]">
                {opt}
              </option>
            ))}
          </select>
          <AnimatePresence>
            {errors.service && <FieldError id="service-error">{errors.service}</FieldError>}
          </AnimatePresence>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="project" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Project description
          </label>
          <textarea
            id="project"
            value={state.project}
            onChange={(e) => update("project", e.target.value)}
            placeholder="Tell us what you want to build..."
            rows={4}
            className={`${inputClasses} resize-none`}
            aria-invalid={!!errors.project}
            aria-describedby={errors.project ? "project-error" : undefined}
          />
          <AnimatePresence>
            {errors.project && <FieldError id="project-error">{errors.project}</FieldError>}
          </AnimatePresence>
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3.5 text-sm font-medium text-[#07080a] transition-all duration-300 hover:bg-white active:scale-[0.98] sm:w-auto"
      >
        Send Project Request
        <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </button>
    </form>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.p
      id={id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-1.5 text-xs text-red-400"
      role="alert"
    >
      {children}
    </motion.p>
  );
}
