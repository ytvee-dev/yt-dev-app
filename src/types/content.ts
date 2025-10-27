export interface Content {
  ru: LanguageContent;
  en: LanguageContent;
  kz: LanguageContent;
}

export interface LanguageContent {
  navigation: {
    home: string;
    services: string;
  };
  pages: {
    home: {
      hero: string;
      partners: string;
    };
    services: {
      hero: string;
      trust: string;
      cooperation: string;
      contacts: string;
    };
  };
  footer: {
    email: string;
    description: string;
    socialNetworks: string;
    copyright: string;
  };
}
