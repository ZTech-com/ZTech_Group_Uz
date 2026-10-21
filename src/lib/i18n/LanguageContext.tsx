"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./locale";
import en, { type Dictionary } from "./dictionaries/en";
import uz from "./dictionaries/uz";
import ru from "./dictionaries/ru";

const DICTIONARIES: Record<Locale, Dictionary> = { en, uz, ru };

const STORAGE_KEY = "itop-locale";
const LEGACY_STORAGE_KEY = ["ztech", "locale"].join("-");

type Listener = () => void;
const listeners = new Set<Listener>();

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "uz" || value === "ru";
}

function getLocaleSnapshot(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;

    const legacyStored = window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (isLocale(legacyStored)) {
      window.localStorage.setItem(STORAGE_KEY, legacyStored);
      window.localStorage.removeItem(LEGACY_STORAGE_KEY);
      return legacyStored;
    }

    return DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

function getLocaleServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function subscribeLocale(callback: Listener) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function notifyLocaleListeners() {
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  locales: typeof LOCALES;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getLocaleServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch {
      // ignore (private mode / blocked storage)
    }
    notifyLocaleListeners();
  }

  const value = useMemo(
    () => ({ locale, setLocale, t: DICTIONARIES[locale], locales: LOCALES }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
