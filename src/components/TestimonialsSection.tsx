import { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { CheckCircle2, Quote, Award, Sparkles, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filter === 'All') return true;
    if (filter === 'Student Visa') return t.visaType.includes('Student');
    if (filter === 'Work Visa') return t.visaType.includes('Engineer') || t.visaType.includes('Work');
    if (filter === 'SSW Visa') return t.visaType.includes('Specified') || t.visaType.includes('SSW');
    return true;
  });

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#FDFBF7] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E5382B] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Verified Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Meet Our Students Living Their Japan Dream
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Real stories from international students and professionals who achieved JLPT certification and secured Certificate of Eligibility (COE) visas through Minami Japan Link.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          {['All', 'Student Visa', 'Work Visa', 'SSW Visa'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === f
                  ? 'bg-[#E5382B] text-white shadow-xs'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Verified Badge Header */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.verifiedBadge}</span>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Body */}
              <div className="py-6 space-y-4">
                <Quote className="w-8 h-8 text-red-100" />
                <p className="text-sm text-zinc-700 leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              {/* Footer: Student Profile */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.photoUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-200 shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                      {item.name} <span className="text-base">{item.flag}</span>
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-medium">{item.destination}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 bg-red-50 text-[#E5382B] text-[10px] font-black rounded-md inline-block">
                    {item.jlptAchieved}
                  </span>
                  <p className="text-[10px] text-zinc-400 mt-1 font-medium">{item.year}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Placement Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-zinc-200 text-center text-xs text-zinc-500 font-medium max-w-2xl mx-auto">
          🌏 Proudly placing students from <strong className="text-zinc-800">India, Philippines, Myanmar, Nepal, Vietnam, USA, Indonesia, Sri Lanka & Brazil</strong> in Japan, Osaka, Kyoto, and Nagoya.
        </div>

      </div>
    </section>
  );
};
