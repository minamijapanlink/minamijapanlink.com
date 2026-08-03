export type CourseLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1' | 'Business' | 'Kaiwa';

export interface Course {
  id: string;
  title: string;
  japaneseTitle: string;
  level: CourseLevel;
  tagline: string;
  durationWeeks: number;
  hoursPerWeek: number;
  classSizeMax: number;
  priceUSD: number;
  priceJPY: number;
  priceTK: number;
  description: string;
  schedules: string[];
  mode: 'Online Live' | 'Tokyo Campus' | 'Hybrid';
  targetAudience: string;
  features: string[];
  curriculum: {
    unit: string;
    topics: string[];
  }[];
  popular?: boolean;
}

export interface VisaCategory {
  id: string;
  name: string;
  japaneseName: string;
  category: 'Student' | 'Work' | 'Specified Skill' | 'Business' | 'Dependent';
  processingTime: string;
  stayDuration: string;
  successRate: number;
  description: string;
  requirements: string[];
  documentsNeeded: string[];
  minJapaneseLevel: string;
  supportIncluded: string[];
}

export interface StudentResource {
  id: string;
  title: string;
  category: 'Flashcards' | 'Cheatsheet' | 'Grammar' | 'COE Checklist' | 'Audio';
  level: string;
  fileSize?: string;
  description: string;
  downloadable: boolean;
}

export interface Flashcard {
  id: string;
  japanese: string;
  reading: string; // Hiragana/Katakana or Romaji
  meaning: string;
  exampleSentence: string;
  exampleTranslation: string;
  level: 'N5' | 'N4' | 'N3';
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  photoUrl: string;
  visaType: string;
  courseTaken: string;
  destination: string; // e.g. "Waseda Cultural Institute, Tokyo"
  jlptAchieved: string;
  quote: string;
  year: string;
  verifiedBadge: string; // e.g. "COE Issued - April 2026 Intake"
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Visa Guide' | 'JLPT Prep' | 'Living in Japan' | 'Student Work' | 'Culture';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: string;
  keyTakeaways: string[];
  featured?: boolean;
}

export interface BookingFormData {
  type: 'trial_lesson' | 'visa_consultation' | 'course_enrollment';
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  selectedCourseId?: string;
  visaTypeInterest?: string;
  currentJapaneseLevel: string;
  notes?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  japaneseContext: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
