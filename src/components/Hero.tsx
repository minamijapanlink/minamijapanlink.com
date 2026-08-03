import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, GraduationCap, Users, Sparkles, Search, Compass, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (type?: 'trial_lesson' | 'visa_consultation') => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateTo }) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'visa' | 'consultation'>('courses');
  const [searchQuery, setSearchQuery] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'courses') {
      onNavigateTo('courses');
    } else if (activeTab === 'visa') {
      onNavigateTo('visa');
    } else {
      onOpenBooking('visa_consultation');
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FDFBF7] to-[#F8F5EE] pt-8 pb-16 lg:py-20 border-b border-zinc-200/60">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#E5382B] text-xs sm:text-sm font-semibold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#E5382B]" />
              <span>Official Gyoseishoshi Visa Consulting & JLPT School</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-[1.15]">
              Master Japanese Language.{' '}
              <span className="block mt-1 bg-gradient-to-r from-[#E5382B] via-[#D32F2F] to-[#B71C1C] bg-clip-text text-transparent">
                Secure Your Japan Visa
              </span>
              with Absolute Confidence.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Minami Japan Link bridges your ambition with reality. Learn Japanese from beginner JLPT N5 to corporate N1, and receive certified Certificate of Eligibility (COE) visa processing from Tokyo specialists.
            </p>

            {/* Quick Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-zinc-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>98.4% COE Visa Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>JLPT N5 - N1 Certified Native Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct School & Company Placements in Japan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>28-Hour/Week Student Work Permit Guidance</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onNavigateTo('courses')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95"
              >
                <GraduationCap className="w-5 h-5" />
                Explore Language Courses
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigateTo('visa')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 text-base font-bold shadow-xs transition-all cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 text-[#E5382B]" />
                Check Visa Eligibility (Free)
              </button>
            </div>

            {/* Social Proof / Stats */}
            <div className="pt-6 border-t border-zinc-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-900">100+</p>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">Students Placed in Japan</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#E5382B]">100%</p>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">COE Success Rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-900">15+</p>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">Partner Academies in Tokyo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Portal Widget Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-zinc-200/80 space-y-5 relative">
              
              {/* Badge */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Quick Gateway</span>
                </div>
                <span className="text-xs font-semibold text-[#E5382B] bg-red-50 px-2.5 py-1 rounded-full">
                  Intake: April / Oct 2026
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-zinc-100 p-1 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab('courses')}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'courses' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  Language
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('visa')}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'visa' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  Visa
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('consultation')}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'consultation' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  Consulting
                </button>
              </div>

              {/* Tab Specific Content */}
              {activeTab === 'courses' && (
                <div className="space-y-3 pt-1">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Select Your Current Japanese Level:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['JLPT N5', 'JLPT N4'].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => onNavigateTo('courses')}
                        className="p-2.5 rounded-lg border border-zinc-200 hover:border-red-400 hover:bg-red-50/50 text-left text-xs font-bold text-zinc-800 transition-all cursor-pointer"
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigateTo('courses')}
                    className="w-full mt-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    View All Course Schedules & Pricing
                    <ArrowRight className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              )}

              {activeTab === 'visa' && (
                <div className="space-y-3 pt-1">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Choose Your Desired Visa Path:</p>
                  <div className="space-y-2">
                    {[
                      { title: 'Student Visa (Ryugaku)', detail: '6-24 Months in Language School or University' },
                      { title: 'Work Visa (Engineer / Specialist)', detail: 'Direct employment with Japanese company' },
                      { title: 'Specified Skilled Worker (SSW)', detail: 'Nursing, Hotel, Food, Agriculture' },
                    ].map((v) => (
                      <button
                        key={v.title}
                        onClick={() => onNavigateTo('visa')}
                        className="w-full p-3 rounded-xl border border-zinc-200 hover:border-red-400 hover:bg-red-50/50 text-left transition-all cursor-pointer"
                      >
                        <p className="text-xs font-bold text-zinc-900">{v.title}</p>
                        <p className="text-[11px] text-zinc-500 mt-0.5">{v.detail}</p>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigateTo('visa')}
                    className="w-full py-3 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    Launch Interactive Eligibility Checker
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {activeTab === 'consultation' && (
                <div className="space-y-3.5 pt-1">
                  <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 leading-relaxed">
                    <span className="font-bold">1-on-1 Personalized Session:</span> Get a dedicated 30-minute video session with our Tokyo Gyoseishoshi document specialist.
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Review financial sponsor documentation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Matching with accredited Tokyo schools</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Pre-evaluation of embassy interview questions</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenBooking('visa_consultation')}
                    className="w-full py-3 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Free 1-on-1 Consultation Slot
                  </button>
                </div>
              )}

              {/* Bottom Guarantee */}
              <div className="pt-2 text-center text-[11px] text-zinc-400 font-medium">
                🔒 Confidential & Compliant with Japanese Ministry of Justice Standards
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
