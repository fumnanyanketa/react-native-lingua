import type { Language } from '@/types/learning';

export const languages: Language[] = [
  {
    id: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: 'https://flagcdn.com/w80/es.png',
    description: 'The world\'s second most spoken native language, used across Latin America and Spain.',
    totalLearners: '24.5M',
  },
  {
    id: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: 'https://flagcdn.com/w80/fr.png',
    description: 'The language of love, spoken in France and over 29 countries worldwide.',
    totalLearners: '18.2M',
  },
  {
    id: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: 'https://flagcdn.com/w80/jp.png',
    description: 'A fascinating language with unique writing systems and a rich cultural heritage.',
    totalLearners: '15.8M',
  },
  {
    id: 'zh',
    name: 'Mandarin Chinese',
    nativeName: '普通话',
    flag: 'https://flagcdn.com/w80/cn.png',
    description: 'The most spoken language in the world, with over a billion native speakers.',
    totalLearners: '12.1M',
  },
  {
    id: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: 'https://flagcdn.com/w80/de.png',
    description: 'A precise and logical language spoken at the heart of Europe.',
    totalLearners: '9.7M',
  },
  {
    id: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: 'https://flagcdn.com/w80/br.png',
    description: 'A beautiful Romance language spoken in Brazil, Portugal, and across Africa.',
    totalLearners: '8.9M',
  },
];

export const getLanguageById = (id: string): Language | undefined =>
  languages.find((lang) => lang.id === id);
