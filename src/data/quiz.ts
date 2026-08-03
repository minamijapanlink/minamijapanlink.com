import { QuizQuestion } from '../types';

export const LEVEL_CHECK_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Choose the correct particle to complete the sentence:',
    japaneseContext: '私 ___ 日本語の勉強が好きです。',
    options: ['は (wa)', 'に (ni)', 'で (de)', 'を (wo)'],
    correctIndex: 0,
    explanation: 'The topic marker "は (wa)" is used after "私 (watashi)" to mark the topic of the sentence.'
  },
  {
    id: 2,
    question: 'Select the correct reading for the kanji 「本」 in 「本を読みます」:',
    japaneseContext: '図書館で本を読みます。',
    options: ['ほん (hon)', 'かん (kan)', 'みず (mizu)', 'やま (yama)'],
    correctIndex: 0,
    explanation: '「本」 is read as 「ほん (hon)」 meaning "book".'
  },
  {
    id: 3,
    question: 'Which verb form expresses "want to do" in Japanese?',
    japaneseContext: '日本に ___ (行く -> want to go)',
    options: ['行きます (ikimasu)', '行きたいです (ikitai desu)', '行かないです (ikanai desu)', '行ってください (itte kudasai)'],
    correctIndex: 1,
    explanation: 'Changing the verb stem + たい (tai) expresses personal desire ("want to go").'
  },
  {
    id: 4,
    question: 'Fill in the blank for asking permission politely:',
    japaneseContext: '写真を ___ もいいですか？',
    options: ['とって (totte)', 'とる (toru)', 'とりました (torimashita)', 'とらない (toranai)'],
    correctIndex: 0,
    explanation: 'The ~te form + mo ii desu ka is the standard formula for asking permission.'
  },
  {
    id: 5,
    question: 'What is the appropriate Keigo greeting when entering a business office meeting?',
    japaneseContext: 'お世話になっております。本日は ___。',
    options: ['よろしくお願いいたします (Yoroshiku onegai itashimasu)', 'ごちそうさまでした (Gochisousama deshita)', 'いただきます (Itadakimasu)', 'おやすみなさい (Oyasuminasai)'],
    correctIndex: 0,
    explanation: 'Yoroshiku onegai itashimasu is the standard formal polite expression used in Japanese business settings.'
  }
];
