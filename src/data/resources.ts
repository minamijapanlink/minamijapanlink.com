import { StudentResource, Flashcard } from '../types';

export const STUDENT_RESOURCES: StudentResource[] = [
  {
    id: 'res-1',
    title: 'Complete Hiragana & Katakana Mastery Sheet (PDF)',
    category: 'Cheatsheet',
    level: 'N5 Beginner',
    fileSize: '2.4 MB',
    description: 'All 46 basic characters + Dakuon, Handakuon, and Combination sounds with stroke order guides and mnemonic memory aids.',
    downloadable: true
  },
  {
    id: 'res-2',
    title: 'Japan Student Visa (COE) Document Preparation Checklist',
    category: 'COE Checklist',
    level: 'All Applicants',
    fileSize: '1.8 MB',
    description: 'Step-by-step checklist of 14 mandatory documents required by Japan Regional Immigration Bureau for April & October intakes.',
    downloadable: true
  },
  {
    id: 'res-3',
    title: 'JLPT N5 Core Vocabulary 100 Flashcards',
    category: 'Flashcards',
    level: 'N5',
    fileSize: 'Online Tool',
    description: 'Interactive flashcards with audio pronunciation, kanji breakdown, and example sentences.',
    downloadable: false
  },
  {
    id: 'res-4',
    title: 'Essential Japanese Particles Guide (Wa, Ga, Ni, De, Wo, To)',
    category: 'Grammar',
    level: 'N5 - N4',
    fileSize: '3.1 MB',
    description: 'Clear visual comparison chart explaining particle usage, common traps, and native speaking nuances.',
    downloadable: true
  },
  {
    id: 'res-5',
    title: 'Japan Part-time Job (Arubaito) Interview Japanese Script',
    category: 'Audio',
    level: 'N4 - N3',
    fileSize: '12.5 MB',
    description: 'Audio recordings and bilingual transcript for convenience store, restaurant, and hotel job interviews.',
    downloadable: true
  },
  {
    id: 'res-6',
    title: 'Japanese Business Email Templates & Keigo Phrases',
    category: 'Grammar',
    level: 'N2 - Business',
    fileSize: '1.5 MB',
    description: '20 practical email templates for asking permission, reporting progress, scheduling meetings, and apologizing formally.',
    downloadable: true
  }
];

export const FLASHCARDS_N5: Flashcard[] = [
  {
    id: 'fc-1',
    japanese: '私',
    reading: 'わたし (watashi)',
    meaning: 'I / Me',
    exampleSentence: '私はミナミ日本語学校の生徒です。',
    exampleTranslation: 'I am a student at Minami Japanese Language School.',
    level: 'N5'
  },
  {
    id: 'fc-2',
    japanese: '勉強する',
    reading: 'べんきょうする (benkyou suru)',
    meaning: 'To study',
    exampleSentence: '毎日2時間日本語を勉強します。',
    exampleTranslation: 'I study Japanese for two hours every day.',
    level: 'N5'
  },
  {
    id: 'fc-3',
    japanese: '学校',
    reading: 'がっこう (gakkou)',
    meaning: 'School',
    exampleSentence: '日本の学校に行きたいです。',
    exampleTranslation: 'I want to go to a school in Japan.',
    level: 'N5'
  },
  {
    id: 'fc-4',
    japanese: '友達',
    reading: 'ともだち (tomodachi)',
    meaning: 'Friend',
    exampleSentence: '日本でたくさんの友達を作りたいです。',
    exampleTranslation: 'I want to make many friends in Japan.',
    level: 'N5'
  },
  {
    id: 'fc-5',
    japanese: '食べる',
    reading: 'たべる (taberu)',
    meaning: 'To eat',
    exampleSentence: '新宿で美味しいラーメンを食べました。',
    exampleTranslation: 'I ate delicious ramen in Shinjuku.',
    level: 'N5'
  },
  {
    id: 'fc-6',
    japanese: '行く',
    reading: 'いく (iku)',
    meaning: 'To go',
    exampleSentence: '来年4月に日本へ行きます。',
    exampleTranslation: 'I will go to Japan next year in April.',
    level: 'N5'
  },
  {
    id: 'fc-7',
    japanese: '日本語',
    reading: 'にほんご (nihongo)',
    meaning: 'Japanese Language',
    exampleSentence: '日本語の先生はとても親切です。',
    exampleTranslation: 'The Japanese teacher is very kind.',
    level: 'N5'
  },
  {
    id: 'fc-8',
    japanese: '元気',
    reading: 'げんき (genki)',
    meaning: 'Healthy / Energetic',
    exampleSentence: 'お元気ですか？はい、元気です！',
    exampleTranslation: 'How are you? Yes, I am fine!',
    level: 'N5'
  }
];
