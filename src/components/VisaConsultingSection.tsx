import { useState } from 'react';
import { VISA_CATEGORIES, COE_STEPS } from '../data/visaServices';
import { VisaCategory } from '../types';
import { ShieldCheck, CheckCircle2, AlertCircle, FileText, Clock, Sparkles, HelpCircle, FileCheck, Award, Calculator, ArrowRight } from 'lucide-react';

interface VisaConsultingSectionProps {
  onOpenBooking: (type?: 'visa_consultation') => void;
}

export const VisaConsultingSection = ({ onOpenBooking }: VisaConsultingSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('student-visa');

  // Interactive Eligibility Checker Tool State
  const [checkerStep, setCheckerStep] = useState<number>(1);
  const [purpose, setPurpose] = useState<string>('Study');
  const [education, setEducation] = useState<string>('HighSchool');
  const [sponsorStatus, setSponsorStatus] = useState<string>('HasSponsor');
  const [japaneseLevel, setJapaneseLevel] = useState<string>('None');
  const [targetIntake, setTargetIntake] = useState<string>('Oct2026');
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleRunEvaluation = () => {
    setShowResult(true);
  };

  const handleResetChecker = () => {
    setCheckerStep(1);
    setShowResult(false);
  };

  const activeVisa = VISA_CATEGORIES.find((v) => v.id === selectedCategory) || VISA_CATEGORIES[0];

  // Calculate Eligibility Score
  const calculateScore = () => {
    let score = 70;
    if (purpose === 'Study') {
      if (sponsorStatus === 'HasSponsor') score += 15;
      if (japaneseLevel !== 'None') score += 10;
      if (education !== 'BelowHighSchool') score += 5;
    } else if (purpose === 'Work') {
      if (education === 'Bachelors' || education === 'Masters') score += 20;
      if (japaneseLevel === 'N3' || japaneseLevel === 'N2') score += 10;
    } else if (purpose === 'SSW') {
      if (japaneseLevel === 'N4' || japaneseLevel === 'N3') score += 20;
      score += 10;
    }
    return Math.min(score, 99);
  };

  return (
    <section id="visa" className="py-16 lg:py-24 bg-[#FDFBF7] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E5382B] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Gyoseishoshi Accredited Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Japan Visa & COE Consulting Services
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Navigating Tokyo Regional Immigration Bureau regulations with 98.4% success. We handle complete document preparation, translation, and legal filing.
          </p>
        </div>

        {/* --- INTERACTIVE VISA ELIGIBILITY CHECKER TOOL --- */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-red-100 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Checker Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5382B] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
                <Calculator className="w-3.5 h-3.5" /> Free AI Eligibility Evaluator
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 mt-2">Check Your Japan Visa Qualification</h3>
            </div>
            {showResult && (
              <button
                onClick={handleResetChecker}
                className="text-xs font-bold text-zinc-500 hover:text-zinc-800 underline cursor-pointer"
              >
                Start New Check
              </button>
            )}
          </div>

          {!showResult ? (
            <div className="mt-6 space-y-6">
              
              {/* Step Indicators */}
              <div className="flex items-center justify-between max-w-xs mx-auto text-xs font-bold text-zinc-400">
                <span className={checkerStep >= 1 ? 'text-[#E5382B]' : ''}>1. Purpose</span>
                <span className="text-zinc-300">•</span>
                <span className={checkerStep >= 2 ? 'text-[#E5382B]' : ''}>2. Education</span>
                <span className="text-zinc-300">•</span>
                <span className={checkerStep >= 3 ? 'text-[#E5382B]' : ''}>3. Language</span>
              </div>

              {/* Step 1: Purpose */}
              {checkerStep === 1 && (
                <div className="space-y-4">
                  <p className="text-sm font-bold text-zinc-800">1. What is your primary purpose for going to Japan?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Study', label: 'Study Japanese at Language School / University', icon: '🎓' },
                      { id: 'Work', label: 'Work Full-Time as Engineer / Specialist', icon: '💼' },
                      { id: 'SSW', label: 'Specified Skilled Worker (Nursing, Hotel, Food)', icon: '🛠️' },
                      { id: 'Business', label: 'Establish Business / Investment in Japan', icon: '🏢' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setPurpose(item.id)}
                        className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                          purpose === item.id
                            ? 'border-[#E5382B] bg-red-50/60 ring-2 ring-red-400/20'
                            : 'border-zinc-200 hover:bg-zinc-50'
                        }`}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="text-sm font-bold text-zinc-900">{item.label}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setCheckerStep(2)}
                      className="px-6 py-2.5 rounded-xl bg-[#E5382B] text-white font-bold text-sm shadow-xs flex items-center gap-2 hover:bg-[#C82A1D] cursor-pointer"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Education & Sponsorship */}
              {checkerStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-bold text-zinc-800">2a. What is your highest completed education level?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                      {[
                        { id: 'HighSchool', label: 'High School Diploma (12 Yrs)' },
                        { id: 'Bachelors', label: 'Bachelor’s Degree' },
                        { id: 'Masters', label: 'Master’s / Doctorate' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setEducation(item.id)}
                          className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                            education === item.id
                              ? 'border-[#E5382B] bg-red-50 text-[#E5382B]'
                              : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-zinc-800">2b. Do you have a financial sponsor (Parent/Self) with bank balance (~$15,000 USD)?</p>
                    <div className="grid grid-cols-2 gap-2.5 mt-2">
                      <button
                        onClick={() => setSponsorStatus('HasSponsor')}
                        className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          sponsorStatus === 'HasSponsor'
                            ? 'border-[#E5382B] bg-red-50 text-[#E5382B]'
                            : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                        }`}
                      >
                        Yes, I have proof of funds
                      </button>
                      <button
                        onClick={() => setSponsorStatus('NeedsGuidance')}
                        className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          sponsorStatus === 'NeedsGuidance'
                            ? 'border-[#E5382B] bg-red-50 text-[#E5382B]'
                            : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                        }`}
                      >
                        Need guidance on sponsorship
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => setCheckerStep(1)}
                      className="text-xs font-bold text-zinc-500 hover:text-zinc-800"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCheckerStep(3)}
                      className="px-6 py-2.5 rounded-xl bg-[#E5382B] text-white font-bold text-sm shadow-xs flex items-center gap-2 hover:bg-[#C82A1D] cursor-pointer"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Language & Target Date */}
              {checkerStep === 3 && (
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-bold text-zinc-800">3a. What is your current Japanese Language level?</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                      {[
                        { id: 'None', label: 'Beginner (0 Hours)' },
                        { id: 'N5', label: 'JLPT N5 / 150 Hrs' },
                        { id: 'N4', label: 'JLPT N4' },
                        { id: 'N3', label: 'JLPT N3+' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setJapaneseLevel(item.id)}
                          className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                            japaneseLevel === item.id
                              ? 'border-[#E5382B] bg-red-50 text-[#E5382B]'
                              : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-zinc-800">3b. Target Intake / Departure Month:</p>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {['Oct 2026', 'Jan 2027', 'April 2027'].map((dt) => (
                        <button
                          key={dt}
                          onClick={() => setTargetIntake(dt)}
                          className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                            targetIntake === dt
                              ? 'border-zinc-900 bg-zinc-900 text-white'
                              : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                          }`}
                        >
                          {dt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => setCheckerStep(2)}
                      className="text-xs font-bold text-zinc-500 hover:text-zinc-800"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleRunEvaluation}
                      className="px-8 py-3 rounded-xl bg-[#E5382B] text-white font-extrabold text-sm shadow-md flex items-center gap-2 hover:bg-[#C82A1D] cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      View Personalized Evaluation Report
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Result Screen */
            <div className="mt-6 space-y-6 animate-fadeIn">
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Estimated Approval Probability</span>
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                    <span className="text-4xl font-black text-emerald-800">{calculateScore()}%</span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-200/60 px-2.5 py-0.5 rounded-full">
                      High Eligibility Candidate
                    </span>
                  </div>
                  <p className="text-xs text-emerald-900 pt-1">
                    Your profile matches the requirements for <strong>{purpose === 'Study' ? 'Student Visa (Ryugaku)' : 'Work / SSW Visa'}</strong> for the <strong>{targetIntake}</strong> intake.
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => onOpenBooking('visa_consultation')}
                    className="px-6 py-3.5 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Lock In Consultation Slot
                  </button>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <p className="font-bold text-zinc-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Key Strengths Identified:
                  </p>
                  <ul className="list-disc list-inside text-zinc-600 space-y-1">
                    <li>Education level ({education}) meets official Ministry criteria</li>
                    <li>Financial sponsorship proof available</li>
                    <li>Target intake ({targetIntake}) leaves sufficient lead time for COE submission</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                  <p className="font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600" /> Recommended Action Items:
                  </p>
                  <ul className="list-disc list-inside text-amber-800 space-y-1">
                    {japaneseLevel === 'None' && <li>Enroll in Minami’s JLPT N5 Intensive Course to meet the 150-hour study rule</li>}
                    <li>Obtain official Japanese translation for high school/degree transcripts</li>
                    <li>Prepare 3 years of sponsor income tax certificates</li>
                  </ul>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* --- VISA CATEGORIES EXPLORER --- */}
        <div className="mt-16">
          <p className="text-xs font-bold text-center text-zinc-400 uppercase tracking-widest mb-6">Explore Detailed Visa Requirements</p>
          
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {VISA_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#E5382B] text-white shadow-sm'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {cat.name.split('(')[0]}
              </button>
            ))}
          </div>

          {/* Active Category Details Card */}
          <div className="mt-6 bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-red-50 text-[#E5382B] text-xs font-bold rounded-full border border-red-200">
                    Category: {activeVisa.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-serif font-bold">{activeVisa.japaneseName}</span>
                </div>

                <h3 className="text-2xl font-black text-zinc-900">{activeVisa.name}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{activeVisa.description}</p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#FDFBF7] rounded-xl border border-zinc-100">
                    <p className="text-[11px] text-zinc-400 font-medium">Estimated Processing Time</p>
                    <p className="text-sm font-bold text-zinc-900 mt-0.5">{activeVisa.processingTime}</p>
                  </div>
                  <div className="p-3 bg-[#FDFBF7] rounded-xl border border-zinc-100">
                    <p className="text-[11px] text-zinc-400 font-medium">Permitted Stay Duration</p>
                    <p className="text-sm font-bold text-zinc-900 mt-0.5">{activeVisa.stayDuration}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-zinc-900 uppercase">Mandatory Legal Requirements:</p>
                  <ul className="space-y-1.5 text-xs text-zinc-600">
                    {activeVisa.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Box: Included Support & Action */}
              <div className="lg:col-span-5 bg-zinc-900 text-white p-6 rounded-2xl flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">Included Minami Support Package:</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {activeVisa.supportIncluded.map((sup, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{sup}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Minami Success Rate:</span>
                    <span className="font-bold text-emerald-400">{activeVisa.successRate}% Verified</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking('visa_consultation')}
                    className="w-full py-3 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                  >
                    Consult with Visa Specialist
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- TIMELINE: 5 STEPS TO COE & VISA --- */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="text-2xl font-black text-zinc-900">Step-by-Step Certificate of Eligibility (COE) Process</h3>
            <p className="text-xs sm:text-sm text-zinc-600">From initial consultation to stepping off the plane at Narita or Haneda Airport.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {COE_STEPS.map((step) => (
              <div key={step.step} className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-2xs relative">
                <div className="w-8 h-8 rounded-full bg-[#E5382B] text-white text-xs font-black flex items-center justify-center mb-3">
                  0{step.step}
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{step.timeframe}</span>
                <h4 className="text-sm font-bold text-zinc-900 mt-1 leading-snug">{step.title}</h4>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
