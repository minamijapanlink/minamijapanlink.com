import imgClassroom from '../assets/images/classroom_session_1785308871297.jpg';
import imgCoe from '../assets/images/coe_handover_1785308887838.jpg';
import imgTokyoOffice from '../assets/images/regenerated_image_1785253148782.jpg';
import imgCampusLife from '../assets/images/regenerated_image_1785253750844.jpg';
import imgCulturalEvent from '../assets/images/regenerated_image_1785253888341.jpg';
import imgLecture from '../assets/images/classroom_jlpt_lecture_1785310015568.jpg';
import imgWorkshop from '../assets/images/classroom_kanji_workshop_1785310037191.jpg';
import imgGroupWork from '../assets/images/regenerated_image_1785255127369.jpg';
import imgMockExam from '../assets/images/regenerated_image_1785255135492.jpg';
import imgAudioLab from '../assets/images/regenerated_image_1785255138059.jpg';
import imgKeigoWorkshop from '../assets/images/regenerated_image_1785255140070.jpg';
import imgMentoring from '../assets/images/regenerated_image_1785255141599.jpg';
import imgKanaBeginner from '../assets/images/regenerated_image_1785255144861.jpg';
import imgInterviewPrep from '../assets/images/regenerated_image_1785255152260.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'visa_success' | 'office' | 'culture' | 'events';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  location: string;
  date: string;
  tags: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // 10 Classroom Images
  {
    id: 'gal-cls-1',
    title: '1. Interactive JLPT Kanji & Grammar Session',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgClassroom,
    description: 'Students engaged in interactive kanji practice with certified native Japanese instructors in our multimedia Tokyo classroom.',
    location: 'Shinjuku Main Campus, Tokyo',
    date: 'July 2026',
    tags: ['JLPT N5/N4', 'Kanji Class', 'Interactive Learning']
  },
  {
    id: 'gal-cls-2',
    title: '2. Native Instructor Lecture & Smartboard Drills',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgLecture,
    description: 'Native Japanese teachers explaining complex JLPT N3/N2 sentence structures and reading comprehension strategies.',
    location: 'Shinjuku Main Campus, Tokyo',
    date: 'July 2026',
    tags: ['JLPT N3/N2', 'Grammar Lecture', 'Native Speaker']
  },
  {
    id: 'gal-cls-3',
    title: '3. Calligraphy & Kanji Stroke Order Workshop',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgWorkshop,
    description: 'Hands-on kanji stroke order and cultural calligraphy exercises designed to reinforce memory retention.',
    location: 'Shinjuku Main Campus, Tokyo',
    date: 'June 2026',
    tags: ['Kanji Practice', 'Calligraphy', 'Culture Integration']
  },
  {
    id: 'gal-cls-4',
    title: '4. Small Group Conversational Kaiwa Drills',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgGroupWork,
    description: 'Interactive peer-to-peer conversational practice focusing on everyday situations, shopping, and train navigation in Japan.',
    location: 'Shinjuku Main Campus, Tokyo',
    date: 'June 2026',
    tags: ['Kaiwa Practice', 'Spoken Japanese', 'Group Work']
  },
  {
    id: 'gal-cls-5',
    title: '5. JLPT Mock Examination & Time Management',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgMockExam,
    description: 'Simulated real-condition JLPT mock exam hall testing speed, answer sheet marking, and listening section endurance.',
    location: 'Shinjuku Main Campus, Tokyo',
    date: 'May 2026',
    tags: ['Mock Exam', 'JLPT N5-N1', 'Exam Prep']
  },
  {
    id: 'gal-cls-6',
    title: '6. Audio Pronunciation & Listening Lab',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgAudioLab,
    description: 'Dedicated audio station for listening comprehension practice using authentic JLPT listening section recordings.',
    location: 'Language Lab, Tokyo',
    date: 'May 2026',
    tags: ['Choukai Listening', 'Audio Lab', 'Pronunciation']
  },
  {
    id: 'gal-cls-7',
    title: '7. Intensive Business Keigo & Email Workshop',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgKeigoWorkshop,
    description: 'Advanced students training in formal honorifics (Sonkeigo & Kenjougo) required for corporate employment in Japan.',
    location: 'Executive Classroom, Tokyo',
    date: 'April 2026',
    tags: ['Business Keigo', 'N2/N1 Level', 'Career Prep']
  },
  {
    id: 'gal-cls-8',
    title: '8. 1-on-1 Educator Mentoring & Homework Review',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgMentoring,
    description: 'Personalized feedback sessions where teachers analyze student essay writing and individual grammar weaknesses.',
    location: 'Shinjuku Main Campus, Tokyo',
    date: 'April 2026',
    tags: ['1-on-1 Coaching', 'Teacher Feedback', 'Personalized']
  },
  {
    id: 'gal-cls-9',
    title: '9. Beginner Hiragana & Katakana Foundations',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgKanaBeginner,
    description: 'First-week orientation class teaching zero-level beginners smooth reading and writing of Kana alphabets.',
    location: 'Shinjuku Main Campus, Tokyo',
    date: 'March 2026',
    tags: ['Beginner N5', 'Kana Mastery', 'First Steps']
  },
  {
    id: 'gal-cls-10',
    title: '10. Language School COE Admission Interview Prep',
    category: 'classroom',
    categoryLabel: 'Classroom & Study',
    imageUrl: imgInterviewPrep,
    description: 'Mock interviews conducted in Japanese to prepare students for official Japanese language school entrance evaluations.',
    location: 'Interview Room, Tokyo',
    date: 'March 2026',
    tags: ['COE Interview', 'Visa Preparation', 'School Admissions']
  },

  // Visa, Office, Culture, Events
  {
    id: 'gal-visa-1',
    title: 'Student COE Visa Handover Celebration',
    category: 'visa_success',
    categoryLabel: 'COE & Visa Success',
    imageUrl: imgCoe,
    description: 'Celebrating the successful issuance of Certificate of Eligibility (COE) for our student entering a top Tokyo Japanese Language Academy.',
    location: 'Minami Japan Link Office, Tokyo',
    date: 'June 2026',
    tags: ['COE Success', 'Student Visa', 'Gyoseishoshi Approved']
  },
  {
    id: 'gal-off-1',
    title: 'Tokyo Headquarters Consultation Desk',
    category: 'office',
    categoryLabel: 'Tokyo Office & Campus',
    imageUrl: imgTokyoOffice,
    description: 'Our modern consulting center where licensed Gyoseishoshi immigration attorneys review visa documentation and conduct student interviews.',
    location: 'Chiyoda-ku, Tokyo',
    date: 'May 2026',
    tags: ['Tokyo HQ', 'Visa Advisory', 'Consulting Suite']
  },
  {
    id: 'gal-cul-1',
    title: 'International Student Cultural Orientation',
    category: 'culture',
    categoryLabel: 'Cultural Events',
    imageUrl: imgCampusLife,
    description: 'New international students taking part in traditional Japanese culture workshops and orientation to prepare for life in Japan.',
    location: 'Yoyogi Park & Shinjuku, Tokyo',
    date: 'April 2026',
    tags: ['Orientation', 'Culture Workshop', 'Japan Life']
  },
  {
    id: 'gal-evt-1',
    title: 'Spring Sakura Student Gathering',
    category: 'events',
    categoryLabel: 'Events & Gathering',
    imageUrl: imgCulturalEvent,
    description: 'Annual Minami Japan Link alumni and student gathering celebrating cherry blossom season and academic breakthroughs.',
    location: 'Ueno Park, Tokyo',
    date: 'March 2026',
    tags: ['Alumni Meet', 'Sakura 2026', 'Community']
  }
];

