import type { Unit } from '@/types/learning';

export const units: Unit[] = [
  // Spanish units
  {
    id: 'es-unit-1',
    languageId: 'es',
    title: 'Basics',
    description: 'Learn essential greetings, introductions, and everyday words.',
    order: 1,
    lessonIds: ['es-u1-l1', 'es-u1-l2', 'es-u1-l3'],
    color: '#58CC02',
    guidebook: 'In Spanish, all nouns have a gender — masculine or feminine. Most masculine nouns end in -o and most feminine nouns end in -a. Adjectives must agree in gender and number with the noun they describe.',
  },
  {
    id: 'es-unit-2',
    languageId: 'es',
    title: 'Family & People',
    description: 'Talk about your family and describe the people around you.',
    order: 2,
    lessonIds: ['es-u2-l1', 'es-u2-l2'],
    color: '#CE82FF',
    guidebook: 'Spanish family vocabulary uses possessives like "mi" (my) and "tu" (your). "Mi madre" means my mother, and "tu padre" means your father. Possessives agree in number but not gender.',
  },

  // French units
  {
    id: 'fr-unit-1',
    languageId: 'fr',
    title: 'Bonjour!',
    description: 'Master French greetings and introduce yourself with confidence.',
    order: 1,
    lessonIds: ['fr-u1-l1', 'fr-u1-l2', 'fr-u1-l3'],
    color: '#FF9600',
    guidebook: 'French has formal (vous) and informal (tu) ways to say "you." Use "vous" with strangers, elders, and in professional settings. Use "tu" with friends, children, and family.',
  },
  {
    id: 'fr-unit-2',
    languageId: 'fr',
    title: 'Food & Drink',
    description: 'Order at a café and talk about your favorite French foods.',
    order: 2,
    lessonIds: ['fr-u2-l1', 'fr-u2-l2'],
    color: '#FF4B4B',
    guidebook: 'In French cafés, you say "Je voudrais..." (I would like...) to order politely. Unlike in English, "un café" means an espresso by default. To get a coffee with milk, ask for "un café au lait."',
  },

  // Japanese units
  {
    id: 'ja-unit-1',
    languageId: 'ja',
    title: 'Hiragana & Greetings',
    description: 'Learn basic Japanese greetings and your first hiragana characters.',
    order: 1,
    lessonIds: ['ja-u1-l1', 'ja-u1-l2'],
    color: '#FF4B4B',
    guidebook: 'Japanese has three writing systems: Hiragana (for native Japanese words), Katakana (for foreign words), and Kanji (Chinese-origin characters). Beginners start with Hiragana, which has 46 characters.',
  },
  {
    id: 'ja-unit-2',
    languageId: 'ja',
    title: 'Numbers & Time',
    description: 'Count in Japanese and tell the time.',
    order: 2,
    lessonIds: ['ja-u2-l1'],
    color: '#1CB0F6',
    guidebook: 'Japanese numbers follow a logical system. After 10 (juu), numbers are formed by combining: 11 = juu-ichi (10+1), 20 = ni-juu (2×10), 21 = ni-juu-ichi. This pattern continues to 99.',
  },

  // Mandarin units
  {
    id: 'zh-unit-1',
    languageId: 'zh',
    title: 'Tones & Greetings',
    description: 'Master the four Mandarin tones and essential greetings.',
    order: 1,
    lessonIds: ['zh-u1-l1', 'zh-u1-l2'],
    color: '#FF9600',
    guidebook: 'Mandarin Chinese uses four tones to distinguish meaning. The same syllable with different tones means completely different things: mā (mother), má (hemp), mǎ (horse), mà (scold). Tone marks guide pronunciation.',
  },
];

export const getUnitsByLanguage = (languageId: string): Unit[] =>
  units.filter((unit) => unit.languageId === languageId).sort((a, b) => a.order - b.order);

export const getUnitById = (id: string): Unit | undefined =>
  units.find((unit) => unit.id === id);
