import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, LanguageState } from '@/types/language';

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'ru',
      setLanguage: (language: Language) => set({ language }),
    }),
    {
      name: 'language-storage',
    }
  )
);
