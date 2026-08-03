import React, { useState } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../data/team';
import { 
  Building2, Award, ShieldCheck, Users, GraduationCap, 
  Sparkles, CheckCircle2, ChevronRight, FileText, Globe, 
  MapPin, X, BookOpen, Briefcase, Star, HeartHandshake, PhoneCall,
  Mail, Phone
} from 'lucide-react';

interface AboutUsSectionProps {
  onOpenBooking: (type?: 'trial_lesson' | 'visa_consultation') => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = selectedCategory === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.roleCategory === selectedCategory);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-[#FDFBF7] to-zinc-50 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E5382B] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" /> About Minami Japan Link
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            Your Bridge to Japan: <span className="text-[#E5382B] font-serif italic">Education & Visa Legal Mastery</span>
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Headquartered in Nishi-Shinjuku, Tokyo, Minami Japan Link combines licensed immigration law practice with top-tier JLPT language training. We ensure every international student and professional transitions smoothly to life, study, and careers in Japan.
          </p>
        </div>

        {/* Company Core Pillars & Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto font-black text-xl">
              100+
            </div>
            <h3 className="text-xl font-black text-zinc-900">COEs Approved</h3>
            <p className="text-xs text-zinc-500">Student, Work, and Designated Activities Certificates of Eligibility.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto font-black text-xl">
              100%
            </div>
            <h3 className="text-xl font-black text-zinc-900">Visa Success Rate</h3>
            <p className="text-xs text-zinc-500">Pre-audited immigration dossiers by former Bureau inspectors.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto font-black text-xl">
              100+
            </div>
            <h3 className="text-xl font-black text-zinc-900">JLPT Graduates</h3>
            <p className="text-xs text-zinc-500">Students achieving N5 through N1 JLPT proficiency for Tokyo entry.</p>
          </div>
        </div>

        {/* Agency Story & Core Values Banner */}
        <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Dual Licensed Agency in Tokyo
            </div>

            <h3 className="text-2xl sm:text-3xl font-black leading-snug">
              "Try and Try, Touch the Sky" — <br className="hidden sm:block" />
              <span className="text-red-400">Our Founding Mission & Philosophy</span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Navigating Japanese immigration law and higher education applications can feel daunting from abroad. Minami Japan Link was created to remove the stress. Unlike general agency middlemen, our Tokyo office houses both licensed Gyoseishoshi immigration specialists and certified JLPT educators under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tokyo Regional Immigration Registration #1808291</span>
              </div>
              <div className="flex items-start gap-2.5 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct University & Language School Partnership Network</span>
              </div>
              <div className="flex items-start gap-2.5 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Pre-Audited Financial & Legal Dossier Verification</span>
              </div>
              <div className="flex items-start gap-2.5 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>24/7 Tokyo Arrival, Housing, & Student Care</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenBooking('visa_consultation')}
                className="px-6 py-3 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white text-xs font-extrabold shadow-md transition-all cursor-pointer"
              >
                Schedule Private Consultation
              </button>
              <button
                onClick={() => onOpenBooking('trial_lesson')}
                className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs font-bold transition-all cursor-pointer"
              >
                Free Japanese Trial Lesson
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-zinc-800/80 p-6 sm:p-8 rounded-2xl border border-zinc-700/80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Minami Japan Link Office</h4>
                <p className="text-xs text-amber-300 font-medium">Green Valley, Muzgunni, H-392 Rd No. 22, Khulna Bangladesh</p>
              </div>
            </div>

            <div className="border-t border-zinc-700/80 pt-4 space-y-3 text-xs text-zinc-300">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Managing Director:</span>
                <span className="font-bold text-amber-300">Md. Israfil Talukder</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Direct Contact:</span>
                <a href="tel:01726154687" className="font-bold text-emerald-400 hover:underline">01726154687</a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Director Email:</span>
                <a href="mailto:israfiltalukder60@gmail.com" className="font-mono text-zinc-200 text-[11px] hover:underline">israfiltalukder60@gmail.com</a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Head Legal Counsel:</span>
                <span className="font-bold text-white">Takeshi Minami (南 健志)</span>
              </div>
            </div>

            <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-700 text-xs italic text-zinc-300">
              "Our team handles your visa documentation with meticulous legal precision so you can focus on mastering Japanese and starting your new chapter."
            </div>
          </div>
        </div>

        {/* TEAM MEMBERS PORTFOLIO SECTION */}
        <div className="space-y-8 pt-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5382B] bg-red-50 px-3 py-1 rounded-full uppercase">
              <Users className="w-3.5 h-3.5" /> Our Leadership & Faculty Portfolio
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900">
              Meet the Experts Behind Your Japan Journey
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              Our team consists of licensed immigration attorneys, veteran JLPT educators, former immigration auditors, and international student career advisors.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Experts', count: TEAM_MEMBERS.length },
              { id: 'visa', label: 'Immigration & Visa Advisors', count: TEAM_MEMBERS.filter(m => m.roleCategory === 'visa').length },
              { id: 'education', label: 'JLPT Educators & Pedagogy', count: TEAM_MEMBERS.filter(m => m.roleCategory === 'education').length },
              { id: 'career', label: 'Corporate & Career Placement', count: TEAM_MEMBERS.filter(m => m.roleCategory === 'career').length },
              { id: 'support', label: 'International Student Support', count: TEAM_MEMBERS.filter(m => m.roleCategory === 'support').length },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#E5382B] text-white shadow-sm'
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl border border-zinc-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Top Image & Badge Header */}
                <div className="relative h-64 overflow-hidden bg-zinc-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-extrabold text-zinc-800 shadow-xs flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#E5382B]" />
                    {member.experienceYears} Years Exp.
                  </div>

                  {/* Role Category Badge */}
                  <div className="absolute top-4 right-4 bg-zinc-900/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {member.title}
                  </div>

                  {/* Bottom Image Overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-serif italic text-red-200">{member.japaneseName}</p>
                    <h4 className="text-xl font-black leading-tight">{member.name}</h4>
                    <p className="text-xs text-zinc-300 font-medium line-clamp-1">{member.title}</p>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  
                  {/* Specialties Pills */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Key Specializations:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-[11px] font-semibold border border-zinc-200/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio Teaser */}
                  <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Optional Direct Contact Details on Card */}
                  {(member.email || member.phone) && (
                    <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] space-y-1">
                      {member.email && (
                        <div className="flex items-center gap-1.5 text-zinc-800 font-medium">
                          <Mail className="w-3.5 h-3.5 text-[#E5382B] shrink-0" />
                          <a href={`mailto:${member.email}`} className="hover:underline text-zinc-900 font-semibold truncate">{member.email}</a>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center gap-1.5 text-zinc-800 font-medium">
                          <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <a href={`tel:${member.phone}`} className="hover:underline text-emerald-800 font-bold">{member.phone}</a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quick Stats Bar */}
                  <div className="grid grid-cols-3 gap-1 p-3 rounded-2xl bg-[#FDFBF7] border border-zinc-200/80 text-center">
                    {member.stats.map((st, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="block text-xs font-black text-[#E5382B]">{st.value}</span>
                        <span className="block text-[9px] text-zinc-500 uppercase font-semibold leading-none">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Portfolio Trigger Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="w-full py-2.5 px-4 rounded-xl border border-zinc-300 hover:border-red-400 bg-white hover:bg-red-50 text-zinc-800 hover:text-[#E5382B] text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:shadow-xs"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-[#E5382B]" />
                      View Portfolio & Credentials
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* TEAM MEMBER DETAILED PORTFOLIO MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200 relative animate-fadeIn">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-white cursor-pointer transition-all"
              aria-label="Close Portfolio"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Cover */}
            <div className="relative h-60 sm:h-72 bg-zinc-900 overflow-hidden">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover object-top opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#E5382B] text-white text-[10px] font-extrabold uppercase">
                    {selectedMember.japaneseName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold">
                    {selectedMember.experienceYears} Years Professional Practice
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black">{selectedMember.name}</h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium">{selectedMember.title}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-8 text-zinc-800">
              
              {/* Motto Quote Banner */}
              <div className="p-4 rounded-2xl bg-red-50/80 border-l-4 border-[#E5382B] space-y-1">
                <span className="text-[10px] font-bold text-[#E5382B] uppercase tracking-wider">Professional Philosophy:</span>
                <p className="text-xs sm:text-sm font-serif italic text-zinc-800 leading-relaxed">
                  {selectedMember.motto}
                </p>
              </div>

              {/* Direct Executive Contact Info (if available) */}
              {(selectedMember.email || selectedMember.phone) && (
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Direct Contact Channels</span>
                    <div className="flex flex-wrap items-center gap-4 text-zinc-800">
                      {selectedMember.email && (
                        <a href={`mailto:${selectedMember.email}`} className="flex items-center gap-1.5 font-bold text-zinc-900 hover:text-emerald-700 underline">
                          <Mail className="w-4 h-4 text-emerald-600" />
                          {selectedMember.email}
                        </a>
                      )}
                      {selectedMember.phone && (
                        <a href={`tel:${selectedMember.phone}`} className="flex items-center gap-1.5 font-bold text-emerald-800 hover:underline">
                          <Phone className="w-4 h-4 text-emerald-600" />
                          {selectedMember.phone}
                        </a>
                      )}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/8801839354103?text=Hello%20${encodeURIComponent(selectedMember.name)},%20I%20would%20like%20to%20consult%20regarding%20Minami%20Japan%20Link.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    Direct WhatsApp
                  </a>
                </div>
              )}

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-3 gap-3">
                {selectedMember.stats.map((s, idx) => (
                  <div key={idx} className="bg-[#FDFBF7] p-4 rounded-2xl border border-zinc-200 text-center space-y-1">
                    <span className="block text-xl font-black text-[#E5382B]">{s.value}</span>
                    <span className="block text-[10px] font-bold text-zinc-500 uppercase">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Full Bio */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#E5382B]" /> Professional Biography
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Verified Certifications */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Licenses & Credentials
                </h4>
                <div className="space-y-2">
                  {selectedMember.certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-semibold text-zinc-800 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500" /> Career & Track Record Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedMember.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700">
                      <Sparkles className="w-3.5 h-3.5 text-[#E5382B] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Publications if available */}
              {selectedMember.publications && selectedMember.publications.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-600" /> Books & Author Segment
                  </h4>
                  <div className="space-y-2">
                    {selectedMember.publications.map((pub, i) => (
                      <div key={i} className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-zinc-800 font-medium flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{pub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation Action Footer */}
              <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-zinc-900">Need specific advice from {selectedMember.name}?</p>
                  <p className="text-[11px] text-zinc-500">Book a 1-on-1 strategy session or trial lesson today.</p>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedMember(null);
                      onOpenBooking(selectedMember.roleCategory === 'education' ? 'trial_lesson' : 'visa_consultation');
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white text-xs font-extrabold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Book Consultation
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
