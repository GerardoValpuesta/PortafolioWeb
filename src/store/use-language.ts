import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'es';

type LanguageState = {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
};

export const useLanguage = create<LanguageState>()(
    persist(
        (set, get) => ({
            language: 'en',
            toggleLanguage: () => set({ language: get().language === 'en' ? 'es' : 'en' }),
            setLanguage: (lang) => set({ language: lang }),
        }),
        {
            name: 'portfolio-language',
        }
    )
);
