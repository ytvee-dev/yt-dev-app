export type Language = 'ru' | 'en' | 'kz';

export interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}
