import imageIsrafil from '../assets/images/regenerated_image_1785255827132.png';
import imageMamun from '../assets/images/regenerated_image_1785255834985.png';
import imageShamima from '../assets/images/regenerated_image_1785255840385.png';
import imageRifat from '../assets/images/mehedi_hasan_rifat_1785387213532.jpg';

export interface TeamMember {
  id: string;
  name: string;
  japaneseName: string;
  title: string;
  roleCategory: 'visa' | 'education' | 'career' | 'support';
  image: string;
  experienceYears: number;
  certifications: string[];
  specialties: string[];
  bio: string;
  motto: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  publications?: string[];
  email?: string;
  phone?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'israfil-talukder',
    name: 'Md. Israfil Talukder',
    japaneseName: 'イスラフィル・タルクデル',
    title: 'Managing Director',
    roleCategory: 'visa',
    email: 'israfiltalukder60@gmail.com',
    phone: '01726154687',
    image: imageIsrafil,
    experienceYears: 5,
    certifications: [
      'Managing Director — Minami Japan Link',
      'Senior Japan Education & Visa Strategy Director',
      'International Student Exchange & Placement Specialist'
    ],
    specialties: ['Executive Operations', 'Japan Student Visa & COE Strategy', 'University & Language School Placement', 'International Relations'],
    bio: 'Md. Israfil Talukder serves as the Managing Director of Minami Japan Link. Under his strategic leadership, Minami Japan Link has expanded its international student admissions, language education programs, and visa consulting operations, empowering thousands of students to achieve their academic and career goals in Japan.',
    motto: '"Empowering students to reach their highest potential in Japan through dedicated guidance and legal expertise."',
    stats: [
      { label: 'Role', value: 'Managing Dir.' },
      { label: 'Students Guided', value: '3,200+' },
      { label: 'Direct Phone', value: '01726154687' }
    ],
    highlights: [
      'Managing Director leading Minami Japan Link operations, legal visa consultancy, and language education.',
      'Direct executive consultation available for student visa, COE processing, and career pathways in Japan.',
      'Email: israfiltalukder60@gmail.com | Direct Mobile / WhatsApp: +8801726154687.'
    ]
  },
  {
    id: 'al-mamun-sheikh',
    name: 'Al Mamun Sheikh',
    japaneseName: 'アル・マムン・シェイク',
    title: 'Senior Teacher',
    roleCategory: 'education',
    email: 'almamunsheikh98@gmail.com',
    phone: '01942394168',
    image: imageMamun,
    experienceYears: 3,
    certifications: [
      'Senior Japanese Language Teacher — Minami Japan Link',
      'JLPT N1 Certified Educator',
      'Japanese Language Pedagogy & Intensive Test Prep Specialist'
    ],
    specialties: ['JLPT N5 and N4 Fast-Track', 'Japanese Grammar & Kanji Mastery', 'Spoken Conversational Drills', 'Student Mentoring'],
    bio: 'Al Mamun Sheikh is a Senior Teacher at Minami Japan Link. With deep expertise in Japanese language instruction and JLPT preparation, he has helped hundreds of international students build fluency, pass JLPT certifications, and transition seamlessly into Japanese academic life.',
    motto: '"Mastering Japanese is the key that unlocks your successful future in Japan."',
    stats: [
      { label: 'Role', value: 'Senior Teacher' },
      { label: 'JLPT Pass Rate', value: '98%' },
      { label: 'Direct Phone', value: '01942394168' }
    ],
    highlights: [
      'Senior Teacher leading JLPT language courses at Minami Japan Link.',
      'Email: almamunsheikh98@gmail.com | Direct Mobile / WhatsApp: 01942394168.',
      'Specialist in interactive online and classroom coaching for JLPT N5 through N1.'
    ]
  },
  {
    id: 'shamima-akther',
    name: 'Shamima Akther',
    japaneseName: 'シャミマ・アクテル',
    title: 'Management Consultant',
    roleCategory: 'support',
    email: 'shamimaparu336@gmail.com',
    phone: '01791314994',
    image: imageShamima,
    experienceYears: 2,
    certifications: [
      'Management Consultant — Minami Japan Link',
      'Student Advisory & Institutional Coordination',
      'Client Relations & Operations Specialist'
    ],
    specialties: ['Management & Institutional Strategy', 'Student Visa Guidance', 'Course Enrollment Consulting', 'Client Relations'],
    bio: 'Shamima Akther serves as Management Consultant at Minami Japan Link. She provides expert consultation on student enrollment, visa documentation strategy, and operational management to ensure seamless support for students aspiring to study and work in Japan.',
    motto: '"Delivering strategic management and personalized guidance for every student journey."',
    stats: [
      { label: 'Role', value: 'Management Cons.' },
      { label: 'Clients Guided', value: '1,500+' },
      { label: 'Direct Phone', value: '01791314994' }
    ],
    highlights: [
      'Management Consultant leading institutional operations and client advisory at Minami Japan Link.',
      'Email: shamimaparu336@gmail.com | Direct Mobile / WhatsApp: 01791314994.',
      'Specialist in student counseling, course enrollment strategy, and administrative management.'
    ]
  },
  {
    id: 'mehedi-hasan-rifat',
    name: 'Md Mehede Hasan Rifat',
    japaneseName: 'メヘディ・ハサン・リファット',
    title: 'Computer Operator',
    roleCategory: 'support',
    email: 'mhrmehedi29@gmail.com',
    phone: '01974138918',
    image: imageRifat,
    experienceYears: 2,
    certifications: [
      'Computer Operator — Minami Japan Link',
      'Digital Record & Student Application Specialist',
      'IT Support & Documentation Operations'
    ],
    specialties: ['Computer Operations', 'Student Portal & File Processing', 'Digital Document Verification', 'IT Technical Support'],
    bio: 'Md Mehede Hasan Rifat works as Computer Operator at Minami Japan Link. He manages computer operations, student application documentation, online file submissions, and technical IT workflows to ensure swift, error-free processing for language course enrollments and Japanese student visa dossiers.',
    motto: '"Delivering technical precision and operational excellence for every student file."',
    stats: [
      { label: 'Role', value: 'Comp. Operator' },
      { label: 'Files Managed', value: '2,000+' },
      { label: 'Direct Phone', value: '01974138918' }
    ],
    highlights: [
      'Computer Operator overseeing digital systems, student records, and application workflows at Minami Japan Link.',
      'Email: mhrmehedi29@gmail.com | Direct Mobile / WhatsApp: 01974138918.',
      'Specialist in data entry, student documentation verification, and IT support.'
    ]
  }
];
