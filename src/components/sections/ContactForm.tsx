"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TELEGRAM } from "@/lib/constants";
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

const inputClasses =
  "w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors duration-200 focus:border-[var(--accent)] focus:bg-[var(--bg)] focus:outline-none";

export default function ContactForm() {
  const { t } = useLanguage();
  const errorMessages = t.contact.form.errors;

  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  function validate(values: FormState): Errors {
    const nextErrors: Errors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = errorMessages.name;
    }
    if (!values.telegram.trim() || !/^@?[a-zA-Z0-9_]{4,32}$/.test(values.telegram.trim())) {
      nextErrors.telegram = errorMessages.telegram;
    }
    if (!values.phone.trim() || !/^[+\d][\d\s().-]{6,20}$/.test(values.phone.trim())) {
      nextErrors.phone = errorMessages.phone;
    }
    if (!values.service) {
      nextErrors.service = errorMessages.service;
    }
    if (!values.project.trim() || values.project.trim().length < 10) {
      nextErrors.project = errorMessages.project;
    }
    return nextErrors;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(state);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const message = buildProjectRequestMessage(
      {
        name: state.name.trim(),
        telegram: state.telegram.trim(),
        phone: state.phone.trim(),
        service: state.service,
        project: state.project.trim(),
      },
      t.contact.form.messageLabels,
    );
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
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--accent-bright)]">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
          {t.contact.form.success.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
          {t.contact.form.success.subtitle}
        </p>

        <pre className="mt-6 w-full overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-left font-mono text-xs leading-relaxed text-[var(--text-secondary)]">
          {generatedMessage}
        </pre>

        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
          <a
            href={buildTelegramDeepLink(TELEGRAM.group.username, generatedMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#080808] transition-colors duration-300 hover:bg-[var(--accent-bright)]"
          >
            {t.contact.form.success.continueTelegram}
            <Send size={15} />
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border-strong)] px-6 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-bright)]"
          >
            {t.contact.form.success.sendAnother}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}     className="card-surface rounded-xl p-5 sm:p-8" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            {t.contact.form.name}
          </label>
          <input
            id="name"
            type="text"
            value={state.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={t.contact.form.namePlaceholder}
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
            {t.contact.form.telegram}
          </label>
          <input
            id="telegram"
            type="text"
            value={state.telegram}
            onChange={(e) => update("telegram", e.target.value)}
            placeholder={t.contact.form.telegramPlaceholder}
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
            {t.contact.form.phone}
          </label>
          <input
            id="phone"
            type="tel"
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder={t.contact.form.phonePlaceholder}
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
            {t.contact.form.service}
          </label>
          <div className="relative">
            <select
              id="service"
              value={state.service}
              onChange={(e) => update("service", e.target.value)}
              className={`${inputClasses} appearance-none pr-10`}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "service-error" : undefined}
            >
              <option value="" disabled>
                {t.contact.form.selectService}
              </option>
              {t.contact.form.serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
            />
          </div>
          <AnimatePresence>
            {errors.service && <FieldError id="service-error">{errors.service}</FieldError>}
          </AnimatePresence>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="project" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            {t.contact.form.project}
          </label>
          <textarea
            id="project"
            value={state.project}
            onChange={(e) => update("project", e.target.value)}
            placeholder={t.contact.form.projectPlaceholder}
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
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-[#080808] transition-colors duration-300 hover:bg-[var(--accent-bright)] sm:w-auto"
      >
        {t.contact.form.submit}
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
