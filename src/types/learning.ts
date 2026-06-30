export type Language = {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
  totalLearners: string;
};

export type LessonGoal = {
  description: string;
};

export type Vocabulary = {
  word: string;
  translation: string;
  pronunciation: string;
  example: string;
  exampleTranslation: string;
};

export type Phrase = {
  phrase: string;
  translation: string;
  pronunciation: string;
  context: string;
};

export type VocabularyActivity = {
  type: 'vocabulary';
  word: string;
  translation: string;
  pronunciation: string;
  example: string;
};

export type TranslationActivity = {
  type: 'translation';
  prompt: string;
  answer: string;
  hint?: string;
};

export type MultipleChoiceActivity = {
  type: 'multiple_choice';
  question: string;
  options: string[];
  correctIndex: number;
};

export type MatchingActivity = {
  type: 'matching';
  pairs: Array<{ word: string; match: string }>;
};

export type FillBlankActivity = {
  type: 'fill_blank';
  sentence: string;
  answer: string;
  options: string[];
};

export type Activity =
  | VocabularyActivity
  | TranslationActivity
  | MultipleChoiceActivity
  | MatchingActivity
  | FillBlankActivity;

export type LessonType = 'vocabulary' | 'grammar' | 'conversation' | 'culture' | 'review';

export type AITeacherPrompt = {
  teacherName: string;
  personality: string;
  systemPrompt: string;
  lessonContext: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  title: string;
  description: string;
  type: LessonType;
  goals: LessonGoal[];
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
  xpReward: number;
  estimatedMinutes: number;
};

export type Unit = {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
  color: string;
  guidebook: string;
};
