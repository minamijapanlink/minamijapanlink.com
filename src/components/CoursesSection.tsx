import { useState } from 'react';
import { COURSES } from '../data/courses';
import { Course } from '../types';
import { BookOpen, Clock, Users, Calendar, CheckCircle, ChevronDown, ChevronUp, Sparkles, Filter, Globe2 } from 'lucide-react';

interface CoursesSectionProps {
  onOpenBooking: (type?: 'trial_lesson' | 'course_enrollment', courseId?: string) => void;
}

export const CoursesSection = ({ onOpenBooking }: CoursesSectionProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedMode, setSelectedMode] = useState<string>('All');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('jlpt-n5');

  const filteredCourses = COURSES.filter((course) => {
    const matchesLevel =
      selectedLevel === 'All' ||
      (selectedLevel === 'Beginner' && (course.level === 'N5' || course.level === 'N4')) ||
      (selectedLevel === 'Intermediate' && course.level === 'N3') ||
      (selectedLevel === 'Advanced' && (course.level === 'N2' || course.level === 'N1')) ||
      (selectedLevel === 'Business & Kaiwa' && (course.level === 'Business' || course.level === 'Kaiwa'));

    const matchesMode =
      selectedMode === 'All' || course.mode === selectedMode;

    return matchesLevel && matchesMode;
  });

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E5382B] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            Japanese Language Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Accredited Japanese Language Courses
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            From Hiragana basics to corporate boardroom negotiations. Certified native Japanese instructors, structured JLPT exam preparation, and small interactive class sizes.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FDFBF7] p-4 rounded-2xl border border-zinc-200">
          
          {/* Level Filters */}
          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Level:
            </span>
            {['All', 'Beginner', 'Intermediate', 'Advanced', 'Business & Kaiwa'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-[#E5382B] text-white shadow-xs'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Mode Filters */}
          <div className="flex items-center gap-1.5 w-full md:w-auto justify-end">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide mr-1 flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5" /> Format:
            </span>
            {['All', 'Online Live', 'Japan Campus', 'Hybrid'].map((mode) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedMode === mode
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

        </div>

        {/* Course Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: Course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                  course.popular
                    ? 'border-red-400 shadow-md ring-2 ring-red-400/20'
                    : 'border-zinc-200 shadow-xs hover:border-zinc-300 hover:shadow-md'
                }`}
              >
                {/* Header Badge */}
                <div>
                  {course.popular && (
                    <div className="bg-[#E5382B] text-white text-[11px] font-extrabold uppercase py-1 px-4 text-center tracking-wider flex items-center justify-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice for Visa Applicants
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    {/* Level & Mode Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-red-50 text-[#E5382B] text-xs font-black uppercase tracking-wider border border-red-200/60">
                        {course.level}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-semibold">
                        {course.mode}
                      </span>
                    </div>

                    {/* Course Title & Japanese Name */}
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 leading-snug">{course.title}</h3>
                      <p className="text-xs font-medium text-zinc-500 font-serif mt-1">{course.japaneseTitle}</p>
                    </div>

                    <p className="text-sm text-zinc-600 leading-relaxed">{course.tagline}</p>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#FDFBF7] rounded-xl border border-zinc-100 text-center text-xs">
                      <div>
                        <div className="text-zinc-400 flex items-center justify-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-[#E5382B]" /> Duration
                        </div>
                        <div className="font-bold text-zinc-900 mt-0.5">{course.durationWeeks} Wks</div>
                      </div>

                      <div>
                        <div className="text-zinc-400 flex items-center justify-center gap-1 text-[11px]">
                          <Calendar className="w-3 h-3 text-[#E5382B]" /> Hours/Wk
                        </div>
                        <div className="font-bold text-zinc-900 mt-0.5">{course.hoursPerWeek} hrs</div>
                      </div>

                      <div>
                        <div className="text-zinc-400 flex items-center justify-center gap-1 text-[11px]">
                          <Users className="w-3 h-3 text-[#E5382B]" /> Max Size
                        </div>
                        <div className="font-bold text-zinc-900 mt-0.5">{course.classSizeMax} stds</div>
                      </div>
                    </div>

                    {/* Course Features */}
                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold text-zinc-800 uppercase tracking-wide">Included Features:</p>
                      <ul className="space-y-1.5 text-xs text-zinc-600">
                        {course.features.map((ft, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{ft}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accordion Toggle for Syllabus */}
                    <button
                      onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                      className="w-full pt-2 flex items-center justify-between text-xs font-bold text-[#E5382B] hover:text-[#C82A1D] transition-colors cursor-pointer border-t border-zinc-100"
                    >
                      <span>{isExpanded ? 'Hide Curriculum Outline' : 'View Curriculum & Syllabus'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Expanded Syllabus Breakdown */}
                    {isExpanded && (
                      <div className="pt-2 space-y-3 text-xs bg-zinc-50 p-3.5 rounded-xl border border-zinc-200">
                        <p className="font-bold text-zinc-900 border-b border-zinc-200 pb-1">Detailed Syllabus Modules:</p>
                        {course.curriculum.map((item, cIdx) => (
                          <div key={cIdx} className="space-y-1">
                            <span className="font-bold text-[#E5382B]">{item.unit}:</span>
                            <ul className="list-disc list-inside text-zinc-600 pl-1 space-y-0.5">
                              {item.topics.map((t, tIdx) => (
                                <li key={tIdx}>{t}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Pricing & Action */}
                <div className="p-6 pt-0 border-t border-zinc-100 mt-4 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-black text-zinc-900">{course.priceTK.toLocaleString()} TK</span>
                      <span className="text-xs text-zinc-500 font-medium"> / total course</span>
                    </div>
                    <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                      ¥{course.priceJPY.toLocaleString()} JPY (${course.priceUSD})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenBooking('trial_lesson', course.id)}
                      className="py-2.5 px-3 rounded-xl border border-red-200 text-[#E5382B] hover:bg-red-50 text-xs font-bold transition-all cursor-pointer text-center"
                    >
                      Free Trial Lesson
                    </button>
                    <button
                      onClick={() => onOpenBooking('course_enrollment', course.id)}
                      className="py-2.5 px-3 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white text-xs font-bold shadow-xs transition-all cursor-pointer text-center"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Course Inquiry Banner */}
        <div className="mt-12 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Need a Custom Private 1-on-1 Schedule or Corporate Training?</h3>
            <p className="text-sm text-zinc-300 max-w-xl">
              We offer bespoke Japanese instruction tailored to software engineering teams, medical staff, and private high-speed JLPT exam cramming.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('trial_lesson')}
            className="px-6 py-3.5 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-bold text-sm shrink-0 shadow-md cursor-pointer transition-all"
          >
            Request Private Custom Class
          </button>
        </div>

      </div>
    </section>
  );
};
