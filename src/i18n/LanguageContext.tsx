import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language, Translations } from './translations';
import { TRANSLATIONS } from './translations';

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Language {
  try {
    const stored = localStorage.getItem('askoutsider_lang');
    if (stored === 'zh' || stored === 'en') return stored;
  } catch {
    // ignore
  }
  return 'zh';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'zh' ? 'en' : 'zh';
      try {
        localStorage.setItem('askoutsider_lang', next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value: LanguageContextValue = {
    lang,
    t: TRANSLATIONS[lang],
    toggleLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useT must be used within LanguageProvider');
  }
  return ctx;
}
