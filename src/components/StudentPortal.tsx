import React, { useState } from 'react';
import { STUDENT_RESOURCES, FLASHCARDS_N5 } from '../data/resources';
import { LEVEL_CHECK_QUIZ } from '../data/quiz';
import { Award, Download, FileText, HelpCircle, RotateCw, Volume2, CheckCircle2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const StudentPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'downloads' | 'quiz'>('flashcards');

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const currentFlashcard = FLASHCARDS_N5[currentCardIndex];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % FLASHCARDS_N5.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + FLASHCARDS_N5.length) % FLASHCARDS_N5.length);
  };

  const handleSelectQuizOption = (qId: number, oIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: oIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    LEVEL_CHECK_QUIZ.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleDownload = (title: string) => {
    alert(`Downloading resource: "${title}". Thank you for using Minami Student Portal!`);
  };

  return (
    <section id="portal" className="py-16 lg:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E5382B] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Minami Student Learning Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Free Student Resource Portal
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Practice Japanese with our interactive flashcard engine, download COE visa document checklists, or take a quick 3-minute Japanese proficiency quiz.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 bg-zinc-100 rounded-2xl gap-1 border border-zinc-200/80">
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'flashcards'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🎴 JLPT N5 Flashcards
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'downloads'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              📥 PDF Cheatsheets & COE Checklists
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              📝 Quick Level Check Quiz
            </button>
          </div>
        </div>

        {/* --- TAB 1: FLASHCARDS ENGINE --- */}
        {activeTab === 'flashcards' && (
          <div className="mt-10 max-w-xl mx-auto space-y-6">
            
            {/* Card Counter */}
            <div className="flex items-center justify-between text-xs font-bold text-zinc-400">
              <span>CARD {currentCardIndex + 1} OF {FLASHCARDS_N5.length}</span>
              <span className="px-2.5 py-1 rounded bg-red-50 text-[#E5382B]">{currentFlashcard.level} Vocabulary</span>
            </div>

            {/* Interactive Flashcard Container */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-[#FDFBF7] border-2 border-red-200/80 rounded-3xl p-8 sm:p-12 min-h-[280px] flex flex-col items-center justify-center text-center shadow-lg hover:border-red-400 cursor-pointer transition-all relative select-none group"
            >
              <span className="absolute top-4 right-4 text-[11px] font-bold text-zinc-400 flex items-center gap-1 group-hover:text-red-500">
                <RotateCw className="w-3.5 h-3.5" /> Tap to flip
              </span>

              {!isFlipped ? (
                /* Front Side: Japanese Kanji & Reading */
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-5xl sm:text-6xl font-black text-zinc-900 font-serif">
                    {currentFlashcard.japanese}
                  </span>
                  <p className="text-sm font-semibold text-[#E5382B] bg-red-50 px-4 py-1.5 rounded-full inline-block">
                    {currentFlashcard.reading}
                  </p>
                  <p className="text-xs text-zinc-400 pt-2">(Click to see English meaning & example)</p>
                </div>
              ) : (
                /* Back Side: Meaning & Example Sentence */
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-2xl font-black text-zinc-900">
                    {currentFlashcard.meaning}
                  </span>
                  <div className="p-4 bg-white rounded-2xl border border-zinc-200 text-left space-y-1 text-xs">
                    <p className="font-bold text-zinc-800">{currentFlashcard.exampleSentence}</p>
                    <p className="text-zinc-500 italic">{currentFlashcard.exampleTranslation}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Card Controls */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePrevCard}
                className="px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-700 font-bold text-xs hover:bg-zinc-100 cursor-pointer"
              >
                ← Previous Card
              </button>
              
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-xs hover:bg-zinc-800 cursor-pointer"
              >
                Flip Card
              </button>

              <button
                onClick={handleNextCard}
                className="px-5 py-2.5 rounded-xl bg-[#E5382B] text-white font-bold text-xs hover:bg-[#C82A1D] cursor-pointer"
              >
                Next Card →
              </button>
            </div>

          </div>
        )}

        {/* --- TAB 2: DOWNLOADABLE PDF RESOURCES --- */}
        {activeTab === 'downloads' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_RESOURCES.map((res) => (
              <div key={res.id} className="bg-[#FDFBF7] p-6 rounded-2xl border border-zinc-200 hover:border-red-300 shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-red-50 text-[#E5382B] text-[11px] font-bold rounded-md">
                      {res.category}
                    </span>
                    {res.fileSize && <span className="text-[11px] text-zinc-400 font-medium">{res.fileSize}</span>}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 leading-snug">{res.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{res.description}</p>
                </div>

                <button
                  onClick={() => handleDownload(res.title)}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download className="w-4 h-4 text-red-400" />
                  Download PDF Resource
                </button>
              </div>
            ))}
          </div>
        )}

        {/* --- TAB 3: QUICK LEVEL CHECK QUIZ --- */}
        {activeTab === 'quiz' && (
          <div className="mt-10 max-w-2xl mx-auto bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-zinc-200 space-y-8">
            
            <div className="border-b border-zinc-200 pb-4">
              <h3 className="text-xl font-bold text-zinc-900">Japanese Proficiency Sample Test (5 Questions)</h3>
              <p className="text-xs text-zinc-500 mt-1">Answer these sample questions to gauge your grammar and vocabulary level.</p>
            </div>

            <div className="space-y-6">
              {LEVEL_CHECK_QUIZ.map((q, idx) => (
                <div key={q.id} className="bg-white p-5 rounded-2xl border border-zinc-200 space-y-3">
                  <p className="text-xs font-bold text-[#E5382B]">QUESTION {idx + 1}:</p>
                  <p className="text-sm font-bold text-zinc-900">{q.question}</p>
                  <div className="p-3 bg-red-50/60 rounded-xl text-center text-base font-serif font-bold text-zinc-800">
                    {q.japaneseContext}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = quizAnswers[q.id] === oIdx;
                      const isCorrect = q.correctIndex === oIdx;

                      let btnStyle = 'border-zinc-200 text-zinc-700 hover:bg-zinc-50';
                      if (quizSubmitted) {
                        if (isCorrect) btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        else if (isSelected) btnStyle = 'border-red-500 bg-red-50 text-red-900 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'border-[#E5382B] bg-red-50 text-[#E5382B] font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectQuizOption(q.id, oIdx)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <p className="text-xs text-zinc-500 bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
                      💡 <strong>Explanation:</strong> {q.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Quiz Action */}
            {!quizSubmitted ? (
              <button
                onClick={() => setQuizSubmitted(true)}
                className="w-full py-3.5 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-extrabold text-sm shadow-md cursor-pointer transition-all"
              >
                Submit Answers & Calculate Score
              </button>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <span className="text-3xl font-black text-emerald-800">Score: {calculateQuizScore()} / 5 Correct</span>
                <p className="text-xs text-emerald-900">
                  {calculateQuizScore() >= 4
                    ? 'Excellent! You are ready for JLPT N4 or Intermediate Japanese.'
                    : 'Good attempt! You will benefit greatly from our Minami JLPT N5 Beginner Mastery course.'}
                </p>
                <button
                  onClick={() => {
                    setQuizSubmitted(false);
                    setQuizAnswers({});
                  }}
                  className="px-6 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 cursor-pointer"
                >
                  Retake Quiz
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
