import { VisaCategory } from '../types';

export const VISA_CATEGORIES: VisaCategory[] = [
  {
    id: 'student-visa',
    name: 'Student Visa (Ryugaku) & School Admission',
    japaneseName: '留学ビザ・日本語学校進学',
    category: 'Student',
    processingTime: '3 - 5 Months (COE Process)',
    stayDuration: '6 Months to 2 Years (Renewable)',
    successRate: 99.2,
    description: 'Complete guidance for enrollment into top Japanese Language Schools, Universities, and Vocational Colleges across Tokyo, Osaka, Kyoto, and Fukuoka. Includes 28-hour/week part-time work permission (Shikakugai Kutsu).',
    requirements: [
      'Completed 12 years of formal education (High School Diploma or Bachelor degree)',
      '150+ hours of documented Japanese study or JLPT N5/N4 certificate',
      'Financial sponsor with proof of income/bank balance (~$15,000 - $20,000 USD equivalent)',
      'No history of illegal stay or previous visa rejections in Japan'
    ],
    documentsNeeded: [
      'High School / University Graduation Certificate & Transcripts',
      'Japanese Language Study Certificate or JLPT/NAT-TEST Certificate',
      'Financial Sponsor Statement & Official Bank Balance Certificate',
      'Sponsor Employment & Tax Income Certificate',
      'Valid Passport Copy & 3x4cm ID Photos'
    ],
    minJapaneseLevel: 'JLPT N5 or 150 study hours',
    supportIncluded: [
      'School match-making based on tuition budget & target city',
      'COE (Certificate of Eligibility) application compilation & submission to Tokyo Immigration',
      'Official document translation to Japanese by certified translators',
      'Pre-departure orientation & housing assistance in Japan',
      'Part-time job preparation & residence registration guide'
    ]
  },
  {
    id: 'work-engineer',
    name: 'Engineer / Specialist in Humanities / International Services',
    japaneseName: '技術・人文知識・国際業務ビザ',
    category: 'Work',
    processingTime: '2 - 3 Months',
    stayDuration: '1, 3, or 5 Years (Renewable)',
    successRate: 97.8,
    description: 'For IT professionals, software developers, engineers, translators, marketing specialists, and educators securing direct employment with Japanese companies.',
    requirements: [
      'Bachelor’s Degree relevant to job offer OR 10+ years relevant professional experience',
      'Official Job Offer / Contract from a legally registered Japanese company',
      'Salary equal to or higher than a Japanese national in equivalent position',
      'JLPT N2/N1 preferred (N3 accepted for technical IT roles)'
    ],
    documentsNeeded: [
      'University Degree Certificate & Transcripts',
      'Job Offer Contract & Company Withholding Statement (Genshen Choshuhyo)',
      'Company Financial Report & Registry (Tokibo Touhon)',
      'Resume/CV (Rirekisho & Shokumukeirekisho in Japanese)',
      'Passport Copy & ID Photographs'
    ],
    minJapaneseLevel: 'JLPT N3 - N2 (Role dependent)',
    supportIncluded: [
      'Job offer contract review according to Japanese Labor Standards',
      'Legal COE filing at Regional Immigration Bureau',
      'Tax & Health Insurance setup guidance upon arrival',
      'Family Dependent Visa application bundling'
    ]
  },
  {
    id: 'ssw-visa',
    name: 'Specified Skilled Worker (Tokutei Ginou 1 & 2)',
    japaneseName: '特定技能ビザ 1号・2号',
    category: 'Specified Skill',
    processingTime: '2 - 4 Months',
    stayDuration: 'Up to 5 Years (SSW-1) / Unlimited (SSW-2)',
    successRate: 98.5,
    description: 'Designed to address labor shortages in 12 industries including Nursing Care, Food Service, Agriculture, Construction, Hotel Management, and Food Manufacturing.',
    requirements: [
      'Pass the Skill Evaluation Exam in the targeted industry',
      'Pass the Japan Foundation Test (JFT-Basic) OR JLPT N4 or higher',
      'Age 18 or older',
      'Good health status verified by official medical check'
    ],
    documentsNeeded: [
      'Industry Skill Exam Passing Certificate',
      'JFT-Basic or JLPT N4 Score Certificate',
      'Medical Health Checkup Report',
      'Job Offer & Support Agency (Touroku Shien Kikan) Agreement'
    ],
    minJapaneseLevel: 'JLPT N4 or JFT-Basic A2',
    supportIncluded: [
      'SSW Exam prep course & study material provision',
      'Matching with approved Japanese Receiving Organizations',
      'Immigration documentation & Registered Support Plan',
      'Airport pick-up & apartment lease setup'
    ]
  },
  {
    id: 'business-manager',
    name: 'Business Manager Visa (Keiei Kanri)',
    japaneseName: '経営・管理ビザ',
    category: 'Business',
    processingTime: '4 - 6 Months',
    stayDuration: '1, 3, or 5 Years',
    successRate: 95.0,
    description: 'For entrepreneurs, investors, and executives establishing a corporate entity or managing an existing business in Japan.',
    requirements: [
      'Physical business office space secured in Japan',
      'Minimum capital investment of 5,000,000 JPY (approx $35,000 USD)',
      'Viable & concrete Business Plan (Jigyou Keikakusho)',
      'At least 2 full-time employees in Japan OR required investment size'
    ],
    documentsNeeded: [
      'Corporate Registration Certificate (Kabushiki Kaisha / Godo Kaisha)',
      'Detailed 3-year Business Plan & Financial Projections',
      'Lease Agreement for Business Premises in Japan',
      'Proof of Capital Investment Origin & Bank Statements'
    ],
    minJapaneseLevel: 'No mandatory requirement (N3+ recommended)',
    supportIncluded: [
      'Corporate incorporation in Japan with licensed Gyoseishoshi (Immigration Lawyer)',
      'Commercial office location search assistance',
      '3-Year Business Plan drafting according to Immigration Guidelines',
      'Corporate Bank Account opening consultation'
    ]
  },
  {
    id: 'dependent-family',
    name: 'Dependent Visa (Kazoku Taizai)',
    japaneseName: '家族滞在ビザ',
    category: 'Dependent',
    processingTime: '1 - 3 Months',
    stayDuration: 'Tied to Main Sponsor Visa',
    successRate: 98.9,
    description: 'Bring your spouse and children to live together with you in Japan while studying or working on a qualifying long-term visa.',
    requirements: [
      'Legally married spouse or biological/adopted child',
      'Sponsor holds valid Work or Student Visa with adequate income/savings',
      'Proof of genuine marital or parent-child relationship'
    ],
    documentsNeeded: [
      'Marriage Certificate or Official Birth Certificates',
      'Main Sponsor Residence Card (Zairyu Card) & Passport',
      'Sponsor Tax Certificate or Bank Balance Statement',
      'Housing Contract in Japan'
    ],
    minJapaneseLevel: 'None required',
    supportIncluded: [
      'Relationship documentation review & official translation',
      'Consular visa interview preparation',
      'Part-time work permit application for spouse (up to 28 hrs/week)'
    ]
  }
];

export const COE_STEPS = [
  {
    step: 1,
    title: 'Initial Eligibility & Document Screening',
    description: 'Our certified counselors review your educational background, financial sponsor status, and Japanese study history.',
    timeframe: 'Week 1 - 2'
  },
  {
    step: 2,
    title: 'School / Job Matching & Interview',
    description: 'We match you with verified Japanese language academies or employers in Tokyo/Osaka and prepare you for the admission interview.',
    timeframe: 'Week 2 - 4'
  },
  {
    step: 3,
    title: 'COE Application Dossier Filing',
    description: 'Minami team translates all documents, compiles the legal dossier, and submits it to the Tokyo Regional Immigration Bureau.',
    timeframe: 'Month 2'
  },
  {
    step: 4,
    title: 'Immigration Review & COE Issuance',
    description: 'Immigration evaluates the application. Upon approval, the official Certificate of Eligibility (COE) is issued in Tokyo.',
    timeframe: 'Month 3 - 4'
  },
  {
    step: 5,
    title: 'Embassy Stamping & Arrival in Japan',
    description: 'You submit the original COE to the Japanese Embassy in your home country for visa sticker stamping, then fly to Japan!',
    timeframe: 'Month 5'
  }
];
