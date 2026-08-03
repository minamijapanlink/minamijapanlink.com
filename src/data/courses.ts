import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'jlpt-n5',
    title: 'Japanese Beginner Mastery (JLPT N5)',
    japaneseTitle: '日本語初級 N5コース',
    level: 'N5',
    tagline: 'Master Hiragana, Katakana, basic grammar, and 100+ Kanji. Perfect start for studying in Japan.',
    durationWeeks: 12,
    hoursPerWeek: 6,
    classSizeMax: 10,
    priceUSD: 290,
    priceJPY: 42000,
    priceTK: 15000,
    description: 'Designed for absolute beginners. You will build a rock-solid foundation in Japanese pronunciation, core grammar structures, everyday greetings, and essential vocabulary needed for living in Japan or passing JLPT N5.',
    schedules: ['Mon & Wed 19:00 - 21:00 (JST)', 'Tue & Thu 10:00 - 12:00 (JST)', 'Sat & Sun 14:00 - 16:00 (JST)'],
    mode: 'Online Live',
    targetAudience: 'Beginners, prospective student visa applicants, and working holiday travelers.',
    features: [
      'Interactive Live Zoom Classes with Native Japanese Sensei',
      'Minna no Nihongo I textbook & customized workbook',
      'Weekly Kaiwa (speaking) breakout drills',
      'Free 1-on-1 Visa Consultation included',
      'Certificate of Completion for Embassy Visa Applications'
    ],
    curriculum: [
      { unit: 'Week 1-2', topics: ['Hiragana & Katakana mastery', 'Pronunciation & Pitch Accent basics', 'Self-introductions (Jikoshoukai)'] },
      { unit: 'Week 3-5', topics: ['Basic verbs & particle system (wa, ga, o, ni, de)', 'Daily routines & shopping phrases', 'First 40 Essential Kanji'] },
      { unit: 'Week 6-8', topics: ['Te-form & Requesting actions', 'Expressing desires (-tai) & permissions', 'Kanji 41-80 & Numbers/Time'] },
      { unit: 'Week 9-12', topics: ['Short form / Casual speech basics', 'JLPT N5 Mock Exam & Listening drills', 'Interview prep for Japanese Language School admissions'] }
    ],
    popular: true
  },
  {
    id: 'jlpt-n4',
    title: 'Elementary Japanese & COE Prep (JLPT N4)',
    japaneseTitle: '日本語初中級 N4コース',
    level: 'N4',
    tagline: 'Bridge the gap to elementary fluency. Meet minimum requirement for SSW and student visas.',
    durationWeeks: 12,
    hoursPerWeek: 6,
    classSizeMax: 10,
    priceUSD: 340,
    priceJPY: 49000,
    priceTK: 10000,
    description: 'Deepen your command of Japanese grammar, double your vocabulary, and master 300+ Kanji. Essential level required for Specified Skilled Worker (SSW) visas and direct vocational school entrance in Japan.',
    schedules: ['Mon & Wed 20:00 - 22:00 (JST)', 'Sat & Sun 10:00 - 12:00 (JST)'],
    mode: 'Hybrid',
    targetAudience: 'N5 certificate holders, SSW visa candidates, and students preparing for 2026 intake.',
    features: [
      'Comprehensive JLPT N4 exam mock tests & feedback',
      'Real-life conversational simulations (Part-time job & Apartment rental)',
      'Direct admission support to partner Language Academies in Tokyo/Osaka',
      'JLPT Exam Registration assistance'
    ],
    curriculum: [
      { unit: 'Week 1-3', topics: ['Potential form & Conditional expressions (ba, tara, to)', 'Complex sentence connectors', 'Kanji expansion (100-180)'] },
      { unit: 'Week 4-7', topics: ['Volitional form & Giving/Receiving (Ageru/Kureru/Morau)', 'Passive & Causative forms intro', 'Listening to native natural speed'] },
      { unit: 'Week 8-12', topics: ['Transitive & Intransitive verbs', 'N4 Reading comprehension strategies', 'Mock JLPT N4 Speed test'] }
    ],
    popular: false
  },
  {
    id: 'jlpt-n3',
    title: 'Intermediate Japanese Fluency (JLPT N3)',
    japaneseTitle: '日本語中級 N3コース',
    level: 'N3',
    tagline: 'Comfortably navigate daily life in Japan, part-time jobs, and natural conversations.',
    durationWeeks: 16,
    hoursPerWeek: 8,
    classSizeMax: 8,
    priceUSD: 450,
    priceJPY: 65000,
    priceTK: 25000,
    description: 'Transition from textbook Japanese to natural, everyday communication. Master 650+ Kanji, nuanced grammar, and reading authentic materials like news articles and workplace emails.',
    schedules: ['Tue & Thu 19:00 - 21:00 (JST)', 'Saturday Full Day Intensive'],
    mode: 'Online Live',
    targetAudience: 'Intermediate learners targeting university/vocational enrollment or part-time employment in Japan.',
    features: [
      'Small group conversational circles (max 8 students)',
      'Natural slang & subtle nuances breakdown',
      'Part-time job interview roleplay sessions in Japanese',
      'Japanese resume (Rirekisho) writing workshop'
    ],
    curriculum: [
      { unit: 'Month 1', topics: ['Intermediate connectors & expressional nuances', 'Expressing regret, hypothetical scenarios, and opinions'] },
      { unit: 'Month 2', topics: ['Reading Japanese blogs & news summaries', 'JLPT N3 Reading speed techniques', 'Kanji 350-500'] },
      { unit: 'Month 3-4', topics: ['Natural native phrasing vs textbook grammar', 'Listening for implied meaning (Keigo intro)', 'Full N3 Mock Simulations'] }
    ],
    popular: true
  }
];
