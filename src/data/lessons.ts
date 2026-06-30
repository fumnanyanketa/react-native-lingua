import type { Lesson } from '@/types/learning';

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────
  // SPANISH · Unit 1 · Lesson 1: Hello & Goodbye
  // ─────────────────────────────────────────────
  {
    id: 'es-u1-l1',
    unitId: 'es-unit-1',
    title: 'Hello & Goodbye',
    description: 'Learn how to greet people and say farewell in Spanish.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Say hello and goodbye in Spanish' },
      { description: 'Use formal and informal greetings' },
      { description: 'Recognize greetings in a conversation' },
    ],
    vocabulary: [
      {
        word: 'Hola',
        translation: 'Hello',
        pronunciation: 'OH-lah',
        example: 'Hola, ¿cómo estás?',
        exampleTranslation: 'Hello, how are you?',
      },
      {
        word: 'Adiós',
        translation: 'Goodbye',
        pronunciation: 'ah-DYOS',
        example: 'Adiós, hasta mañana.',
        exampleTranslation: 'Goodbye, see you tomorrow.',
      },
      {
        word: 'Buenos días',
        translation: 'Good morning',
        pronunciation: 'BWEH-nos DEE-as',
        example: 'Buenos días, señor.',
        exampleTranslation: 'Good morning, sir.',
      },
      {
        word: 'Buenas tardes',
        translation: 'Good afternoon',
        pronunciation: 'BWEH-nas TAR-des',
        example: 'Buenas tardes, ¿cómo le va?',
        exampleTranslation: 'Good afternoon, how are you doing?',
      },
      {
        word: 'Buenas noches',
        translation: 'Good night',
        pronunciation: 'BWEH-nas NO-ches',
        example: 'Buenas noches, hasta mañana.',
        exampleTranslation: 'Good night, see you tomorrow.',
      },
    ],
    phrases: [
      {
        phrase: '¿Cómo estás?',
        translation: 'How are you? (informal)',
        pronunciation: 'KOH-moh es-TAS',
        context: 'Use with friends and people your age.',
      },
      {
        phrase: 'Estoy bien, gracias.',
        translation: 'I am fine, thank you.',
        pronunciation: 'es-TOY BYEN, GRA-syahs',
        context: 'A polite response to "how are you."',
      },
      {
        phrase: 'Hasta luego',
        translation: 'See you later',
        pronunciation: 'AHS-tah LWEH-goh',
        context: 'A casual way to say goodbye.',
      },
    ],
    activities: [
      {
        type: 'vocabulary',
        word: 'Hola',
        translation: 'Hello',
        pronunciation: 'OH-lah',
        example: 'Hola, ¿cómo estás?',
      },
      {
        type: 'multiple_choice',
        question: 'What does "Buenos días" mean?',
        options: ['Good night', 'Good afternoon', 'Good morning', 'Goodbye'],
        correctIndex: 2,
      },
      {
        type: 'translation',
        prompt: 'How do you say "Goodbye" in Spanish?',
        answer: 'Adiós',
        hint: 'Think farewell',
      },
      {
        type: 'matching',
        pairs: [
          { word: 'Hola', match: 'Hello' },
          { word: 'Adiós', match: 'Goodbye' },
          { word: 'Buenas noches', match: 'Good night' },
          { word: 'Buenos días', match: 'Good morning' },
        ],
      },
      {
        type: 'fill_blank',
        sentence: 'Buenas ___, ¿cómo estás?',
        answer: 'tardes',
        options: ['noches', 'tardes', 'días', 'hola'],
      },
      {
        type: 'multiple_choice',
        question: 'Which greeting would you use at 9pm?',
        options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola'],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      teacherName: 'Sofia',
      personality: 'warm, encouraging, and playful',
      systemPrompt:
        'You are Sofia, a friendly Spanish teacher. You are warm, encouraging, and make learning fun. Keep your explanations short and simple. Celebrate small wins enthusiastically. Use simple English and a few Spanish examples in each explanation.',
      lessonContext:
        'This lesson covers Spanish greetings: Hola, Adiós, Buenos días, Buenas tardes, Buenas noches, and the phrase ¿Cómo estás? / Estoy bien, gracias.',
    },
  },

  // ─────────────────────────────────────────────
  // SPANISH · Unit 1 · Lesson 2: Introductions
  // ─────────────────────────────────────────────
  {
    id: 'es-u1-l2',
    unitId: 'es-unit-1',
    title: 'Introductions',
    description: 'Learn how to introduce yourself and ask someone\'s name.',
    type: 'conversation',
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Introduce yourself by name in Spanish' },
      { description: 'Ask someone\'s name politely' },
      { description: 'State your nationality or where you\'re from' },
    ],
    vocabulary: [
      {
        word: 'Me llamo',
        translation: 'My name is',
        pronunciation: 'meh YAH-moh',
        example: 'Me llamo Carlos.',
        exampleTranslation: 'My name is Carlos.',
      },
      {
        word: 'Soy',
        translation: 'I am',
        pronunciation: 'soy',
        example: 'Soy de México.',
        exampleTranslation: 'I am from Mexico.',
      },
      {
        word: 'Mucho gusto',
        translation: 'Nice to meet you',
        pronunciation: 'MOO-choh GOOS-toh',
        example: 'Mucho gusto, señora García.',
        exampleTranslation: 'Nice to meet you, Mrs. García.',
      },
      {
        word: 'Igualmente',
        translation: 'Likewise',
        pronunciation: 'ee-GWAL-men-teh',
        example: 'Igualmente, mucho gusto.',
        exampleTranslation: 'Likewise, nice to meet you.',
      },
      {
        word: 'Por favor',
        translation: 'Please',
        pronunciation: 'por fah-VOR',
        example: 'Por favor, ¿cómo te llamas?',
        exampleTranslation: 'Please, what is your name?',
      },
    ],
    phrases: [
      {
        phrase: '¿Cómo te llamas?',
        translation: 'What is your name? (informal)',
        pronunciation: 'KOH-moh teh YAH-mas',
        context: 'Used with peers and younger people.',
      },
      {
        phrase: '¿De dónde eres?',
        translation: 'Where are you from?',
        pronunciation: 'deh DON-deh EH-res',
        context: 'Ask someone about their origin.',
      },
      {
        phrase: 'Soy de España.',
        translation: 'I am from Spain.',
        pronunciation: 'soy deh es-PAH-nyah',
        context: 'Swap "España" for your country.',
      },
    ],
    activities: [
      {
        type: 'vocabulary',
        word: 'Me llamo',
        translation: 'My name is',
        pronunciation: 'meh YAH-moh',
        example: 'Me llamo Ana.',
      },
      {
        type: 'multiple_choice',
        question: 'How do you say "Nice to meet you"?',
        options: ['Por favor', 'Igualmente', 'Mucho gusto', 'Soy'],
        correctIndex: 2,
      },
      {
        type: 'translation',
        prompt: 'Translate: "What is your name?"',
        answer: '¿Cómo te llamas?',
        hint: 'It starts with ¿Cómo...',
      },
      {
        type: 'fill_blank',
        sentence: '___ llamo María.',
        answer: 'Me',
        options: ['Yo', 'Me', 'Tu', 'Soy'],
      },
      {
        type: 'matching',
        pairs: [
          { word: 'Me llamo', match: 'My name is' },
          { word: 'Mucho gusto', match: 'Nice to meet you' },
          { word: 'Igualmente', match: 'Likewise' },
          { word: 'Por favor', match: 'Please' },
        ],
      },
    ],
    aiTeacherPrompt: {
      teacherName: 'Sofia',
      personality: 'warm, encouraging, and playful',
      systemPrompt:
        'You are Sofia, a friendly Spanish teacher. You are warm, encouraging, and make learning fun. Keep your explanations short and simple. Celebrate small wins enthusiastically. Use simple English and a few Spanish examples in each explanation.',
      lessonContext:
        'This lesson covers Spanish introductions: Me llamo, Soy, Mucho gusto, Igualmente, and the phrases ¿Cómo te llamas? and ¿De dónde eres?',
    },
  },

  // ─────────────────────────────────────────────
  // SPANISH · Unit 1 · Lesson 3: Numbers 1–10
  // ─────────────────────────────────────────────
  {
    id: 'es-u1-l3',
    unitId: 'es-unit-1',
    title: 'Numbers 1–10',
    description: 'Count to ten and use numbers in everyday situations.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Count from one to ten in Spanish' },
      { description: 'Recognize numbers when you hear them' },
    ],
    vocabulary: [
      { word: 'uno', translation: 'one', pronunciation: 'OO-noh', example: 'Tengo un gato.', exampleTranslation: 'I have one cat.' },
      { word: 'dos', translation: 'two', pronunciation: 'dohs', example: 'Hay dos libros.', exampleTranslation: 'There are two books.' },
      { word: 'tres', translation: 'three', pronunciation: 'trehs', example: 'Tres personas.', exampleTranslation: 'Three people.' },
      { word: 'cuatro', translation: 'four', pronunciation: 'KWAH-troh', example: 'Son las cuatro.', exampleTranslation: 'It is four o\'clock.' },
      { word: 'cinco', translation: 'five', pronunciation: 'SEEN-koh', example: 'Cinco manzanas.', exampleTranslation: 'Five apples.' },
      { word: 'seis', translation: 'six', pronunciation: 'seys', example: 'Seis días.', exampleTranslation: 'Six days.' },
      { word: 'siete', translation: 'seven', pronunciation: 'SYEH-teh', example: 'Siete colores.', exampleTranslation: 'Seven colors.' },
      { word: 'ocho', translation: 'eight', pronunciation: 'OH-choh', example: 'Ocho horas.', exampleTranslation: 'Eight hours.' },
      { word: 'nueve', translation: 'nine', pronunciation: 'NWEH-beh', example: 'Nueve planetas.', exampleTranslation: 'Nine planets.' },
      { word: 'diez', translation: 'ten', pronunciation: 'dyehs', example: 'Diez minutos.', exampleTranslation: 'Ten minutes.' },
    ],
    phrases: [
      {
        phrase: '¿Cuántos años tienes?',
        translation: 'How old are you?',
        pronunciation: 'KWAN-tos AH-nyos TYEH-nes',
        context: 'Literally "How many years do you have?"',
      },
      {
        phrase: 'Tengo veinte años.',
        translation: 'I am twenty years old.',
        pronunciation: 'TEN-goh BEYN-teh AH-nyos',
        context: 'Replace "veinte" with your age.',
      },
    ],
    activities: [
      { type: 'vocabulary', word: 'cinco', translation: 'five', pronunciation: 'SEEN-koh', example: 'Cinco manzanas.' },
      { type: 'multiple_choice', question: 'What is "siete" in English?', options: ['six', 'eight', 'seven', 'nine'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "three" in Spanish?', answer: 'tres' },
      {
        type: 'matching',
        pairs: [
          { word: 'uno', match: 'one' },
          { word: 'cuatro', match: 'four' },
          { word: 'diez', match: 'ten' },
          { word: 'ocho', match: 'eight' },
        ],
      },
      { type: 'fill_blank', sentence: 'Hay ___ libros en la mesa.', answer: 'dos', options: ['uno', 'dos', 'tres', 'cuatro'] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Sofia',
      personality: 'warm, encouraging, and playful',
      systemPrompt:
        'You are Sofia, a friendly Spanish teacher. You are warm, encouraging, and make learning fun. Keep your explanations short and simple. Celebrate small wins enthusiastically.',
      lessonContext:
        'This lesson covers Spanish numbers 1–10: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.',
    },
  },

  // ─────────────────────────────────────────────
  // SPANISH · Unit 2 · Lesson 1: Family Members
  // ─────────────────────────────────────────────
  {
    id: 'es-u2-l1',
    unitId: 'es-unit-2',
    title: 'Family Members',
    description: 'Learn the words for family members in Spanish.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Name immediate family members in Spanish' },
      { description: 'Use possessives like "mi" and "tu"' },
    ],
    vocabulary: [
      { word: 'la madre', translation: 'mother', pronunciation: 'lah MAH-dreh', example: 'Mi madre es profesora.', exampleTranslation: 'My mother is a teacher.' },
      { word: 'el padre', translation: 'father', pronunciation: 'el PAH-dreh', example: 'Mi padre trabaja mucho.', exampleTranslation: 'My father works a lot.' },
      { word: 'el hermano', translation: 'brother', pronunciation: 'el er-MAH-noh', example: 'Tengo un hermano.', exampleTranslation: 'I have a brother.' },
      { word: 'la hermana', translation: 'sister', pronunciation: 'lah er-MAH-nah', example: 'Mi hermana se llama Ana.', exampleTranslation: 'My sister\'s name is Ana.' },
      { word: 'los abuelos', translation: 'grandparents', pronunciation: 'los ah-BWEH-los', example: 'Mis abuelos viven en el campo.', exampleTranslation: 'My grandparents live in the countryside.' },
    ],
    phrases: [
      { phrase: 'Tengo una familia grande.', translation: 'I have a big family.', pronunciation: 'TEN-goh OO-nah fah-MEE-lyah GRAN-deh', context: 'Swap "grande" for "pequeña" (small).' },
      { phrase: '¿Tienes hermanos?', translation: 'Do you have siblings?', pronunciation: 'TYEH-nes er-MAH-nos', context: 'A common conversation starter.' },
    ],
    activities: [
      { type: 'vocabulary', word: 'la madre', translation: 'mother', pronunciation: 'lah MAH-dreh', example: 'Mi madre es profesora.' },
      { type: 'multiple_choice', question: 'What is "el padre"?', options: ['brother', 'grandfather', 'father', 'uncle'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "my sister"?', answer: 'mi hermana', hint: 'Use "mi" for "my"' },
      { type: 'fill_blank', sentence: 'Mi ___ se llama Juan.', answer: 'hermano', options: ['madre', 'hermano', 'hermana', 'padre'] },
      {
        type: 'matching',
        pairs: [
          { word: 'la madre', match: 'mother' },
          { word: 'el padre', match: 'father' },
          { word: 'la hermana', match: 'sister' },
          { word: 'el hermano', match: 'brother' },
        ],
      },
    ],
    aiTeacherPrompt: {
      teacherName: 'Sofia',
      personality: 'warm, encouraging, and playful',
      systemPrompt:
        'You are Sofia, a friendly Spanish teacher. You are warm, encouraging, and make learning fun. Keep explanations short. Celebrate small wins.',
      lessonContext:
        'This lesson covers Spanish family vocabulary: la madre, el padre, el hermano, la hermana, los abuelos, and possessives like "mi" and "tu."',
    },
  },

  // ─────────────────────────────────────────────
  // SPANISH · Unit 2 · Lesson 2: Describing People
  // ─────────────────────────────────────────────
  {
    id: 'es-u2-l2',
    unitId: 'es-unit-2',
    title: 'Describing People',
    description: 'Use adjectives to describe people\'s appearance and personality.',
    type: 'grammar',
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [
      { description: 'Use basic adjectives to describe appearance' },
      { description: 'Match adjectives to gender (alto/alta)' },
    ],
    vocabulary: [
      { word: 'alto / alta', translation: 'tall', pronunciation: 'AL-toh / AL-tah', example: 'Mi padre es alto.', exampleTranslation: 'My father is tall.' },
      { word: 'bajo / baja', translation: 'short', pronunciation: 'BAH-hoh / BAH-hah', example: 'Mi hermana es baja.', exampleTranslation: 'My sister is short.' },
      { word: 'joven', translation: 'young', pronunciation: 'HOH-ben', example: 'Soy joven.', exampleTranslation: 'I am young.' },
      { word: 'viejo / vieja', translation: 'old', pronunciation: 'BYEH-hoh / BYEH-hah', example: 'Mi abuelo es viejo.', exampleTranslation: 'My grandfather is old.' },
      { word: 'simpático / simpática', translation: 'nice / friendly', pronunciation: 'seem-PAH-tee-koh', example: 'Tu madre es muy simpática.', exampleTranslation: 'Your mother is very nice.' },
    ],
    phrases: [
      { phrase: 'Él es muy alto.', translation: 'He is very tall.', pronunciation: 'el es mwee AL-toh', context: 'Use "muy" to intensify adjectives.' },
      { phrase: 'Ella es inteligente.', translation: 'She is intelligent.', pronunciation: 'EH-yah es een-teh-lee-HEN-teh', context: '"Inteligente" stays the same for both genders.' },
    ],
    activities: [
      { type: 'vocabulary', word: 'alto / alta', translation: 'tall', pronunciation: 'AL-toh', example: 'Mi padre es alto.' },
      { type: 'multiple_choice', question: 'How do you say "She is short"?', options: ['Ella es alta.', 'Ella es baja.', 'Ella es joven.', 'Ella es vieja.'], correctIndex: 1 },
      { type: 'fill_blank', sentence: 'Mi abuelo es muy ___.',  answer: 'viejo', options: ['alto', 'joven', 'viejo', 'simpático'] },
      { type: 'translation', prompt: 'Translate: "My sister is very nice."', answer: 'Mi hermana es muy simpática.' },
      {
        type: 'matching',
        pairs: [
          { word: 'alto', match: 'tall (m)' },
          { word: 'baja', match: 'short (f)' },
          { word: 'joven', match: 'young' },
          { word: 'viejo', match: 'old (m)' },
        ],
      },
    ],
    aiTeacherPrompt: {
      teacherName: 'Sofia',
      personality: 'warm, encouraging, and playful',
      systemPrompt:
        'You are Sofia, a friendly Spanish teacher. Keep explanations short. Focus on the gender agreement rule for adjectives: -o for masculine, -a for feminine.',
      lessonContext:
        'This lesson covers Spanish descriptive adjectives: alto/alta, bajo/baja, joven, viejo/vieja, simpático/simpática. Key grammar: adjectives agree in gender with the noun.',
    },
  },

  // ─────────────────────────────────────────────
  // FRENCH · Unit 1 · Lesson 1: Bonjour!
  // ─────────────────────────────────────────────
  {
    id: 'fr-u1-l1',
    unitId: 'fr-unit-1',
    title: 'Bonjour!',
    description: 'Learn how to greet people in French throughout the day.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Greet people at different times of day in French' },
      { description: 'Distinguish formal and informal speech' },
    ],
    vocabulary: [
      { word: 'Bonjour', translation: 'Hello / Good morning', pronunciation: 'bohn-ZHOOR', example: 'Bonjour, comment allez-vous?', exampleTranslation: 'Hello, how are you? (formal)' },
      { word: 'Bonsoir', translation: 'Good evening', pronunciation: 'bohn-SWAHR', example: 'Bonsoir, madame.', exampleTranslation: 'Good evening, madam.' },
      { word: 'Salut', translation: 'Hi / Bye (informal)', pronunciation: 'sah-LYU', example: 'Salut, ça va?', exampleTranslation: 'Hi, how\'s it going?' },
      { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'oh ruh-VWAHR', example: 'Au revoir, à demain!', exampleTranslation: 'Goodbye, see you tomorrow!' },
      { word: 'Merci', translation: 'Thank you', pronunciation: 'mehr-SEE', example: 'Merci beaucoup!', exampleTranslation: 'Thank you very much!' },
    ],
    phrases: [
      { phrase: 'Comment allez-vous?', translation: 'How are you? (formal)', pronunciation: 'koh-mahn tah-leh VOO', context: 'Used with strangers, elders, and in professional settings.' },
      { phrase: 'Ça va?', translation: 'How\'s it going? (informal)', pronunciation: 'sah VAH', context: 'Casual — use with friends and peers.' },
      { phrase: 'Très bien, merci!', translation: 'Very well, thank you!', pronunciation: 'treh BYAN mehr-SEE', context: 'A polite response.' },
    ],
    activities: [
      { type: 'vocabulary', word: 'Bonjour', translation: 'Hello / Good morning', pronunciation: 'bohn-ZHOOR', example: 'Bonjour, comment allez-vous?' },
      { type: 'multiple_choice', question: 'Which greeting is informal in French?', options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "Goodbye" in French?', answer: 'Au revoir' },
      { type: 'matching', pairs: [{ word: 'Bonjour', match: 'Hello' }, { word: 'Merci', match: 'Thank you' }, { word: 'Salut', match: 'Hi (informal)' }, { word: 'Bonsoir', match: 'Good evening' }] },
      { type: 'fill_blank', sentence: '___ beaucoup pour votre aide!', answer: 'Merci', options: ['Salut', 'Bonjour', 'Merci', 'Bonsoir'] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Camille',
      personality: 'chic, encouraging, and precise',
      systemPrompt:
        'You are Camille, an elegant but approachable French teacher. You are warm and precise. Point out the difference between formal (vous) and informal (tu) speech naturally. Keep explanations brief.',
      lessonContext:
        'This lesson covers French greetings: Bonjour, Bonsoir, Salut, Au revoir, Merci, and phrases like Comment allez-vous? and Ça va?',
    },
  },

  // ─────────────────────────────────────────────
  // FRENCH · Unit 1 · Lesson 2: My Name Is…
  // ─────────────────────────────────────────────
  {
    id: 'fr-u1-l2',
    unitId: 'fr-unit-1',
    title: 'My Name Is…',
    description: 'Introduce yourself and ask for someone\'s name in French.',
    type: 'conversation',
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Say your name in French' },
      { description: 'Ask someone their name' },
      { description: 'State where you are from' },
    ],
    vocabulary: [
      { word: 'Je m\'appelle', translation: 'My name is', pronunciation: 'zhuh mah-PEL', example: 'Je m\'appelle Pierre.', exampleTranslation: 'My name is Pierre.' },
      { word: 'Je suis', translation: 'I am', pronunciation: 'zhuh SWEE', example: 'Je suis de Paris.', exampleTranslation: 'I am from Paris.' },
      { word: 'Enchanté(e)', translation: 'Nice to meet you', pronunciation: 'ahn-shahn-TAY', example: 'Enchanté, je m\'appelle Luc.', exampleTranslation: 'Nice to meet you, my name is Luc.' },
      { word: 'S\'il vous plaît', translation: 'Please (formal)', pronunciation: 'seel voo PLEH', example: 'S\'il vous plaît, comment vous appelez-vous?', exampleTranslation: 'Please, what is your name?' },
    ],
    phrases: [
      { phrase: 'Comment vous appelez-vous?', translation: 'What is your name? (formal)', pronunciation: 'koh-mahn voo zah-peh-leh VOO', context: 'Formal — used with strangers or elders.' },
      { phrase: 'Tu t\'appelles comment?', translation: 'What\'s your name? (informal)', pronunciation: 'tyu tah-PEL koh-MAHN', context: 'Casual — used with friends and peers.' },
      { phrase: 'Je viens de…', translation: 'I come from…', pronunciation: 'zhuh VYAN duh', context: 'Used to state your country of origin.' },
    ],
    activities: [
      { type: 'vocabulary', word: 'Je m\'appelle', translation: 'My name is', pronunciation: 'zhuh mah-PEL', example: 'Je m\'appelle Marie.' },
      { type: 'multiple_choice', question: 'How do you say "Nice to meet you" in French?', options: ['Merci', 'Bonjour', 'Enchanté', 'Au revoir'], correctIndex: 2 },
      { type: 'fill_blank', sentence: 'Je ___ de Lyon.', answer: 'suis', options: ['suis', 'vais', 'appelle', 'parle'] },
      { type: 'translation', prompt: 'Translate: "My name is Sophie."', answer: 'Je m\'appelle Sophie.' },
      { type: 'matching', pairs: [{ word: 'Je m\'appelle', match: 'My name is' }, { word: 'Je suis', match: 'I am' }, { word: 'Enchanté', match: 'Nice to meet you' }, { word: 'S\'il vous plaît', match: 'Please' }] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Camille',
      personality: 'chic, encouraging, and precise',
      systemPrompt:
        'You are Camille, an elegant but approachable French teacher. Keep explanations brief and highlight the difference between formal vous and informal tu naturally.',
      lessonContext:
        'This lesson covers French introductions: Je m\'appelle, Je suis, Enchanté(e), S\'il vous plaît, and the phrases Comment vous appelez-vous? and Tu t\'appelles comment?',
    },
  },

  // ─────────────────────────────────────────────
  // FRENCH · Unit 1 · Lesson 3: Numbers 1–10
  // ─────────────────────────────────────────────
  {
    id: 'fr-u1-l3',
    unitId: 'fr-unit-1',
    title: 'Numbers 1–10',
    description: 'Count to ten in French.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: 'Count from one to ten in French' }],
    vocabulary: [
      { word: 'un', translation: 'one', pronunciation: 'aN', example: 'Un café, s\'il vous plaît.', exampleTranslation: 'One coffee, please.' },
      { word: 'deux', translation: 'two', pronunciation: 'duh', example: 'Deux billets.', exampleTranslation: 'Two tickets.' },
      { word: 'trois', translation: 'three', pronunciation: 'trwah', example: 'Trois enfants.', exampleTranslation: 'Three children.' },
      { word: 'quatre', translation: 'four', pronunciation: 'KAH-truh', example: 'Quatre saisons.', exampleTranslation: 'Four seasons.' },
      { word: 'cinq', translation: 'five', pronunciation: 'saNk', example: 'Cinq minutes.', exampleTranslation: 'Five minutes.' },
      { word: 'six', translation: 'six', pronunciation: 'sees', example: 'Six heures.', exampleTranslation: 'Six hours.' },
      { word: 'sept', translation: 'seven', pronunciation: 'set', example: 'Sept jours.', exampleTranslation: 'Seven days.' },
      { word: 'huit', translation: 'eight', pronunciation: 'weet', example: 'Huit personnes.', exampleTranslation: 'Eight people.' },
      { word: 'neuf', translation: 'nine', pronunciation: 'nuhf', example: 'Neuf mois.', exampleTranslation: 'Nine months.' },
      { word: 'dix', translation: 'ten', pronunciation: 'dees', example: 'Dix euros.', exampleTranslation: 'Ten euros.' },
    ],
    phrases: [
      { phrase: 'Quel âge as-tu?', translation: 'How old are you?', pronunciation: 'kel AZH ah-TYU', context: 'Informal way to ask someone\'s age.' },
      { phrase: 'J\'ai vingt ans.', translation: 'I am twenty years old.', pronunciation: 'zhay vaN ahn', context: 'Literally "I have twenty years."' },
    ],
    activities: [
      { type: 'vocabulary', word: 'cinq', translation: 'five', pronunciation: 'saNk', example: 'Cinq minutes.' },
      { type: 'multiple_choice', question: 'What is "sept" in English?', options: ['six', 'eight', 'seven', 'nine'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "three" in French?', answer: 'trois' },
      { type: 'matching', pairs: [{ word: 'un', match: 'one' }, { word: 'dix', match: 'ten' }, { word: 'quatre', match: 'four' }, { word: 'huit', match: 'eight' }] },
      { type: 'fill_blank', sentence: 'J\'ai ___ ans.', answer: 'dix', options: ['cinq', 'sept', 'dix', 'deux'] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Camille',
      personality: 'chic, encouraging, and precise',
      systemPrompt:
        'You are Camille, a precise and encouraging French teacher. Keep things short. Note any tricky pronunciation tips for French numbers.',
      lessonContext:
        'This lesson covers French numbers 1–10: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.',
    },
  },

  // ─────────────────────────────────────────────
  // JAPANESE · Unit 1 · Lesson 1: Basic Greetings
  // ─────────────────────────────────────────────
  {
    id: 'ja-u1-l1',
    unitId: 'ja-unit-1',
    title: 'Basic Greetings',
    description: 'Learn essential Japanese greetings for any time of day.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Say hello and goodbye in Japanese' },
      { description: 'Greet people at different times of day' },
    ],
    vocabulary: [
      { word: 'こんにちは', translation: 'Hello (daytime)', pronunciation: 'kon-ni-chi-wa', example: 'こんにちは、お元気ですか？', exampleTranslation: 'Hello, how are you?' },
      { word: 'おはよう', translation: 'Good morning (informal)', pronunciation: 'o-ha-yo', example: 'おはよう！', exampleTranslation: 'Good morning!' },
      { word: 'おはようございます', translation: 'Good morning (formal)', pronunciation: 'o-ha-yo go-za-i-ma-su', example: 'おはようございます、田中さん。', exampleTranslation: 'Good morning, Mr. Tanaka.' },
      { word: 'こんばんは', translation: 'Good evening', pronunciation: 'kon-ban-wa', example: 'こんばんは！', exampleTranslation: 'Good evening!' },
      { word: 'さようなら', translation: 'Goodbye', pronunciation: 'sa-yo-na-ra', example: 'さようなら、また明日。', exampleTranslation: 'Goodbye, see you tomorrow.' },
      { word: 'ありがとう', translation: 'Thank you (informal)', pronunciation: 'a-ri-ga-to', example: 'ありがとう！', exampleTranslation: 'Thank you!' },
    ],
    phrases: [
      { phrase: 'お元気ですか？', translation: 'How are you? (formal)', pronunciation: 'o-gen-ki de-su ka', context: 'A polite formal greeting.' },
      { phrase: 'はい、元気です。', translation: 'Yes, I am fine.', pronunciation: 'hai, gen-ki de-su', context: 'Standard response to "how are you."' },
    ],
    activities: [
      { type: 'vocabulary', word: 'こんにちは', translation: 'Hello', pronunciation: 'kon-ni-chi-wa', example: 'こんにちは！' },
      { type: 'multiple_choice', question: 'Which Japanese greeting is used in the morning (formal)?', options: ['こんにちは', 'おはようございます', 'こんばんは', 'さようなら'], correctIndex: 1 },
      { type: 'translation', prompt: 'How do you say "Goodbye" in Japanese?', answer: 'さようなら', hint: 'It starts with さ...' },
      { type: 'matching', pairs: [{ word: 'こんにちは', match: 'Hello (day)' }, { word: 'おはよう', match: 'Good morning (casual)' }, { word: 'こんばんは', match: 'Good evening' }, { word: 'ありがとう', match: 'Thank you' }] },
      { type: 'multiple_choice', question: 'What does "ありがとう" mean?', options: ['Goodbye', 'Good morning', 'Thank you', 'Hello'], correctIndex: 2 },
    ],
    aiTeacherPrompt: {
      teacherName: 'Yuki',
      personality: 'calm, patient, and encouraging',
      systemPrompt:
        'You are Yuki, a gentle and patient Japanese teacher. You guide learners through the beauty of Japanese step by step. Keep explanations very simple. Always include the romaji (pronunciation) alongside Japanese characters for beginners.',
      lessonContext:
        'This lesson covers basic Japanese greetings: こんにちは, おはよう, おはようございます, こんばんは, さようなら, ありがとう, and the phrase お元気ですか？',
    },
  },

  // ─────────────────────────────────────────────
  // JAPANESE · Unit 1 · Lesson 2: Introductions
  // ─────────────────────────────────────────────
  {
    id: 'ja-u1-l2',
    unitId: 'ja-unit-1',
    title: 'Introducing Yourself',
    description: 'Learn how to say your name and where you\'re from in Japanese.',
    type: 'conversation',
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Introduce yourself in Japanese' },
      { description: 'Say where you are from' },
    ],
    vocabulary: [
      { word: 'わたしは', translation: 'I am / My name is (topic marker)', pronunciation: 'wa-ta-shi wa', example: 'わたしはアナです。', exampleTranslation: 'I am Ana.' },
      { word: 'です', translation: 'am / is / are (polite)', pronunciation: 'de-su', example: 'わたしは学生です。', exampleTranslation: 'I am a student.' },
      { word: 'はじめまして', translation: 'Nice to meet you', pronunciation: 'ha-ji-me-ma-shi-te', example: 'はじめまして、よろしくお願いします。', exampleTranslation: 'Nice to meet you, pleased to meet you.' },
      { word: 'よろしく', translation: 'Pleased to meet you (casual)', pronunciation: 'yo-ro-shi-ku', example: 'よろしく！', exampleTranslation: 'Nice to meet you!' },
    ],
    phrases: [
      { phrase: 'お名前は何ですか？', translation: 'What is your name?', pronunciation: 'o-na-mae wa nan de-su ka', context: 'Polite way to ask someone\'s name.' },
      { phrase: 'わたしはアメリカ人です。', translation: 'I am American.', pronunciation: 'wa-ta-shi wa a-me-ri-ka-jin de-su', context: 'Replace アメリカ with your country.' },
    ],
    activities: [
      { type: 'vocabulary', word: 'はじめまして', translation: 'Nice to meet you', pronunciation: 'ha-ji-me-ma-shi-te', example: 'はじめまして！' },
      { type: 'multiple_choice', question: 'What does "です" mean at the end of a sentence?', options: ['goodbye', 'please', 'am/is/are (polite)', 'thank you'], correctIndex: 2 },
      { type: 'fill_blank', sentence: 'わたしは___です。', answer: 'アナ', options: ['アナ', 'です', 'はい', 'よろしく'] },
      { type: 'translation', prompt: 'Say "Nice to meet you" in Japanese.', answer: 'はじめまして' },
      { type: 'matching', pairs: [{ word: 'わたしは', match: 'I am' }, { word: 'です', match: 'am/is (polite)' }, { word: 'はじめまして', match: 'Nice to meet you' }, { word: 'よろしく', match: 'Pleased to meet you' }] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Yuki',
      personality: 'calm, patient, and encouraging',
      systemPrompt:
        'You are Yuki, a calm and encouraging Japanese teacher. Explain the topic marker は (wa) and the polite ending です (desu) in very simple terms. Always include romaji for new words.',
      lessonContext:
        'This lesson covers Japanese self-introduction: わたしは, です, はじめまして, よろしく, and the phrase お名前は何ですか？',
    },
  },

  // ─────────────────────────────────────────────
  // JAPANESE · Unit 2 · Lesson 1: Numbers 1–10
  // ─────────────────────────────────────────────
  {
    id: 'ja-u2-l1',
    unitId: 'ja-unit-2',
    title: 'Numbers 1–10',
    description: 'Learn to count from one to ten in Japanese.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: 'Count from 1 to 10 in Japanese' }],
    vocabulary: [
      { word: 'いち', translation: 'one', pronunciation: 'i-chi', example: 'いち、に、さん！', exampleTranslation: 'One, two, three!' },
      { word: 'に', translation: 'two', pronunciation: 'ni', example: 'に人。', exampleTranslation: 'Two people.' },
      { word: 'さん', translation: 'three', pronunciation: 'san', example: 'さんびき。', exampleTranslation: 'Three small animals.' },
      { word: 'し / よん', translation: 'four', pronunciation: 'shi / yon', example: 'よん時。', exampleTranslation: 'Four o\'clock.' },
      { word: 'ご', translation: 'five', pronunciation: 'go', example: 'ご分。', exampleTranslation: 'Five minutes.' },
      { word: 'ろく', translation: 'six', pronunciation: 'ro-ku', example: 'ろく人。', exampleTranslation: 'Six people.' },
      { word: 'しち / なな', translation: 'seven', pronunciation: 'shi-chi / na-na', example: 'なな時。', exampleTranslation: 'Seven o\'clock.' },
      { word: 'はち', translation: 'eight', pronunciation: 'ha-chi', example: 'はち月。', exampleTranslation: 'August (8th month).' },
      { word: 'く / きゅう', translation: 'nine', pronunciation: 'ku / kyu', example: 'きゅう時。', exampleTranslation: 'Nine o\'clock.' },
      { word: 'じゅう', translation: 'ten', pronunciation: 'ju', example: 'じゅう人。', exampleTranslation: 'Ten people.' },
    ],
    phrases: [
      { phrase: 'いくつですか？', translation: 'How many?', pronunciation: 'i-ku-tsu de-su ka', context: 'Used when counting objects.' },
    ],
    activities: [
      { type: 'vocabulary', word: 'ご', translation: 'five', pronunciation: 'go', example: 'ご分。' },
      { type: 'multiple_choice', question: 'What is "はち" in English?', options: ['six', 'seven', 'eight', 'nine'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "three" in Japanese?', answer: 'さん' },
      { type: 'matching', pairs: [{ word: 'いち', match: 'one' }, { word: 'じゅう', match: 'ten' }, { word: 'に', match: 'two' }, { word: 'ろく', match: 'six' }] },
      { type: 'fill_blank', sentence: 'いち、___、さん、し、ご', answer: 'に', options: ['ご', 'に', 'ろく', 'はち'] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Yuki',
      personality: 'calm, patient, and encouraging',
      systemPrompt:
        'You are Yuki, a calm Japanese teacher. Note that some numbers have two readings (e.g., 4 = し or よん). Keep explanations brief and always include romaji.',
      lessonContext:
        'This lesson covers Japanese numbers 1–10: いち, に, さん, し/よん, ご, ろく, しち/なな, はち, く/きゅう, じゅう.',
    },
  },

  // ─────────────────────────────────────────────
  // MANDARIN · Unit 1 · Lesson 1: Tones & Hello
  // ─────────────────────────────────────────────
  {
    id: 'zh-u1-l1',
    unitId: 'zh-unit-1',
    title: 'Tones & Hello',
    description: 'Understand Mandarin tones and learn your first greetings.',
    type: 'vocabulary',
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Understand the four tones of Mandarin' },
      { description: 'Say hello and thank you in Mandarin' },
    ],
    vocabulary: [
      { word: '你好 (nǐ hǎo)', translation: 'Hello', pronunciation: 'nee how', example: '你好！很高兴认识你。', exampleTranslation: 'Hello! Nice to meet you.' },
      { word: '谢谢 (xiè xiè)', translation: 'Thank you', pronunciation: 'shyeh shyeh', example: '谢谢你！', exampleTranslation: 'Thank you!' },
      { word: '再见 (zài jiàn)', translation: 'Goodbye', pronunciation: 'dzye jyen', example: '再见，明天见。', exampleTranslation: 'Goodbye, see you tomorrow.' },
      { word: '是 (shì)', translation: 'Yes / to be', pronunciation: 'shir', example: '是的。', exampleTranslation: 'Yes / That\'s right.' },
      { word: '不 (bù)', translation: 'No / not', pronunciation: 'boo', example: '不，谢谢。', exampleTranslation: 'No, thank you.' },
    ],
    phrases: [
      { phrase: '你好吗？(nǐ hǎo ma)', translation: 'How are you?', pronunciation: 'nee how mah', context: 'Adding 吗 (ma) turns a statement into a question.' },
      { phrase: '我很好，谢谢。', translation: 'I am very well, thank you.', pronunciation: 'waw hun how, shyeh shyeh', context: 'Standard polite response.' },
    ],
    activities: [
      { type: 'vocabulary', word: '你好', translation: 'Hello', pronunciation: 'nee how', example: '你好！' },
      { type: 'multiple_choice', question: 'What does "谢谢" mean?', options: ['Hello', 'Goodbye', 'Thank you', 'Yes'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "Goodbye" in Mandarin?', answer: '再见', hint: 'Pinyin: zài jiàn' },
      { type: 'matching', pairs: [{ word: '你好', match: 'Hello' }, { word: '谢谢', match: 'Thank you' }, { word: '再见', match: 'Goodbye' }, { word: '不', match: 'No / not' }] },
      { type: 'fill_blank', sentence: '你好___？(How are you?)', answer: '吗', options: ['吗', '的', '很', '是'] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Mei',
      personality: 'patient, clear, and methodical',
      systemPrompt:
        'You are Mei, a clear and patient Mandarin teacher. Always include pinyin alongside Chinese characters. Explain tones simply using the four tone marks (ā á ǎ à). Keep explanations short and practical.',
      lessonContext:
        'This lesson introduces Mandarin tones and core greetings: 你好, 谢谢, 再见, 是, 不, and the phrase 你好吗？',
    },
  },

  // ─────────────────────────────────────────────
  // MANDARIN · Unit 1 · Lesson 2: Introductions
  // ─────────────────────────────────────────────
  {
    id: 'zh-u1-l2',
    unitId: 'zh-unit-1',
    title: 'What\'s Your Name?',
    description: 'Introduce yourself and ask for someone\'s name in Mandarin.',
    type: 'conversation',
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Introduce yourself by name in Mandarin' },
      { description: 'Ask someone their name' },
    ],
    vocabulary: [
      { word: '我叫 (wǒ jiào)', translation: 'My name is', pronunciation: 'waw jyow', example: '我叫李明。', exampleTranslation: 'My name is Li Ming.' },
      { word: '你叫什么名字？', translation: 'What is your name?', pronunciation: 'nee jyow shuh-muh ming-dzir', example: '你叫什么名字？', exampleTranslation: 'What is your name?' },
      { word: '很高兴认识你', translation: 'Nice to meet you', pronunciation: 'hun gao-shing run-shir nee', example: '很高兴认识你！', exampleTranslation: 'Nice to meet you!' },
      { word: '我是 (wǒ shì)', translation: 'I am', pronunciation: 'waw shir', example: '我是学生。', exampleTranslation: 'I am a student.' },
    ],
    phrases: [
      { phrase: '你是哪国人？', translation: 'What country are you from?', pronunciation: 'nee shir nah gwoh run', context: 'Literally: "You are which country person?"' },
      { phrase: '我是美国人。', translation: 'I am American.', pronunciation: 'waw shir may-gwoh run', context: 'Replace 美国 with your country name.' },
    ],
    activities: [
      { type: 'vocabulary', word: '我叫', translation: 'My name is', pronunciation: 'waw jyow', example: '我叫王芳。' },
      { type: 'multiple_choice', question: 'How do you say "Nice to meet you" in Mandarin?', options: ['谢谢', '再见', '你好', '很高兴认识你'], correctIndex: 3 },
      { type: 'fill_blank', sentence: '我___学生。', answer: '是', options: ['叫', '是', '好', '有'] },
      { type: 'translation', prompt: 'Translate: "My name is David."', answer: '我叫David。' },
      { type: 'matching', pairs: [{ word: '我叫', match: 'My name is' }, { word: '我是', match: 'I am' }, { word: '很高兴认识你', match: 'Nice to meet you' }, { word: '你叫什么名字', match: 'What is your name' }] },
    ],
    aiTeacherPrompt: {
      teacherName: 'Mei',
      personality: 'patient, clear, and methodical',
      systemPrompt:
        'You are Mei, a clear and patient Mandarin teacher. Always include pinyin. Explain that 我叫 (wǒ jiào) literally means "I am called." Keep explanations short.',
      lessonContext:
        'This lesson covers Mandarin introductions: 我叫, 我是, 很高兴认识你, 你叫什么名字？, and 你是哪国人？',
    },
  },
];

export const getLessonById = (id: string): Lesson | undefined =>
  lessons.find((lesson) => lesson.id === id);

export const getLessonsByUnit = (unitId: string): Lesson[] =>
  lessons.filter((lesson) => lesson.unitId === unitId);
