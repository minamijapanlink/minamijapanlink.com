import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { VISA_CATEGORIES } from '../data/visaServices';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, ShieldCheck, Sparkles, FileText, Download } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'trial_lesson' | 'visa_consultation' | 'course_enrollment';
  initialCourseId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'visa_consultation',
  initialCourseId = '',
}) => {
  const [bookingType, setBookingType] = useState(initialType);
  const [selectedCourse, setSelectedCourse] = useState(initialCourseId || 'jlpt-n5');
  const [selectedVisa, setSelectedVisa] = useState('student-visa');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('2026-08-05');
  const [preferredTime, setPreferredTime] = useState('14:00 (JST)');
  const [japaneseLevel, setJapaneseLevel] = useState('Beginner / N5');
  const [notes, setNotes] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = 'MJL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Minami Japan Link//Booking Consultation//EN
BEGIN:VEVENT
SUMMARY:Minami Japan Link - ${bookingType === 'trial_lesson' ? 'Free Trial Lesson' : 'Visa Consultation'}
DESCRIPTION:Your appointment with Minami Japan Link advisor. Ref: ${bookingRef}
DTSTART:20260805T050000Z
DTEND:20260805T054500Z
LOCATION:Online Zoom Meeting / Japan Office
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${bookingRef}_Minami_Consultation.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200 p-6 sm:p-8 relative space-y-6 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Modal Title */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5382B] bg-red-50 px-3 py-1 rounded-full uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Appointment Booking
                </span>
                <h2 className="text-2xl font-black text-zinc-900 mt-1">Book Your Strategy Session</h2>
                <p className="text-xs text-zinc-500 mt-1">Select consultation type, preferred timeslot, or message us directly on WhatsApp.</p>
              </div>

              <a
                href="https://wa.me/8801839354103?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20with%20Minami%20Japan%20Link."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp (+8801839354103)</span>
              </a>
            </div>

            {/* Booking Type Selector */}
            <div className="grid grid-cols-3 gap-2 bg-zinc-100 p-1.5 rounded-2xl text-xs font-bold">
              <button
                type="button"
                onClick={() => setBookingType('trial_lesson')}
                className={`py-2.5 rounded-xl transition-all cursor-pointer ${
                  bookingType === 'trial_lesson'
                    ? 'bg-[#E5382B] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Free Trial Lesson
              </button>

              <button
                type="button"
                onClick={() => setBookingType('visa_consultation')}
                className={`py-2.5 rounded-xl transition-all cursor-pointer ${
                  bookingType === 'visa_consultation'
                    ? 'bg-[#E5382B] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Visa Consultation
              </button>

              <button
                type="button"
                onClick={() => setBookingType('course_enrollment')}
                className={`py-2.5 rounded-xl transition-all cursor-pointer ${
                  bookingType === 'course_enrollment'
                    ? 'bg-[#E5382B] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Course Enrollment
              </button>
            </div>

            {/* Type Specific Fields */}
            {bookingType === 'trial_lesson' || bookingType === 'course_enrollment' ? (
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Select Course:</label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full p-3 rounded-xl border border-zinc-300 text-xs font-bold bg-white focus:ring-2 focus:ring-red-400"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.level} - ${c.priceUSD})
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Target Visa Category:</label>
                <select
                  value={selectedVisa}
                  onChange={(e) => setSelectedVisa(e.target.value)}
                  className="w-full p-3 rounded-xl border border-zinc-300 text-xs font-bold bg-white focus:ring-2 focus:ring-red-400"
                >
                  {VISA_CATEGORIES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Date & Time Slot Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Preferred Date:</label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-zinc-300 text-xs font-bold bg-white focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Select Time Slot (JST):</label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full p-3 rounded-xl border border-zinc-300 text-xs font-bold bg-white focus:ring-2 focus:ring-red-400"
                >
                  <option value="10:00 (JST)">10:00 AM JST (Morning)</option>
                  <option value="14:00 (JST)">02:00 PM JST (Afternoon)</option>
                  <option value="16:00 (JST)">04:00 PM JST (Late Afternoon)</option>
                  <option value="19:00 (JST)">07:00 PM JST (Evening)</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-3 pt-2 border-t border-zinc-100">
              <p className="text-xs font-bold text-zinc-800 uppercase">Contact Details:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 234 567 890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">Current Japanese Level</label>
                  <select
                    value={japaneseLevel}
                    onChange={(e) => setJapaneseLevel(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-red-400"
                  >
                    <option value="Beginner / N5">Absolute Beginner (0-50 hrs)</option>
                    <option value="Elementary / N4">N4 Level</option>
                    <option value="Intermediate / N3">N3 Level</option>
                    <option value="Advanced / N2-N1">N2 / N1 Corporate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-600 mb-1">Additional Questions or Target School in Japan (Optional):</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your target intake year or specific questions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
              >
                Confirm Appointment & Receive Access Link
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="text-center space-y-6 py-4 animate-fadeIn">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                Appointment Reserved
              </span>
              <h3 className="text-2xl font-black text-zinc-900 mt-2">See You Soon, {fullName}!</h3>
              <p className="text-xs text-zinc-600 max-w-md mx-auto">
                We have logged your appointment request. A confirmation email with Zoom link and preparation checklist has been sent to <strong>{email}</strong>.
              </p>
            </div>

            {/* Confirmation Ticket Card */}
            <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-zinc-200 text-xs text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between border-b border-zinc-200 pb-2">
                <span className="text-zinc-400">Reference Code:</span>
                <span className="font-mono font-bold text-[#E5382B]">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Date & Time:</span>
                <span className="font-bold text-zinc-800">{preferredDate} at {preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Session Type:</span>
                <span className="font-bold text-zinc-800 capitalize">{bookingType.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Advisor Assigned:</span>
                <span className="font-bold text-zinc-800">Minami Senior Counselor (Japan)</span>
              </div>
            </div>

            {/* Calendar & Close Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadIcs}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-800 text-xs font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#E5382B]" /> Add to iCal / Outlook (.ics)
              </button>
              
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
