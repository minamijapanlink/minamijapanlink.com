import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUsSection } from './components/AboutUsSection';
import { CoursesSection } from './components/CoursesSection';
import { VisaConsultingSection } from './components/VisaConsultingSection';
import { StudentPortal } from './components/StudentPortal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { GallerySection } from './components/GallerySection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<'trial_lesson' | 'visa_consultation' | 'course_enrollment'>('visa_consultation');
  const [bookingCourseId, setBookingCourseId] = useState<string>('');

  const handleOpenBooking = (
    type: 'trial_lesson' | 'visa_consultation' | 'course_enrollment' = 'visa_consultation',
    courseId: string = ''
  ) => {
    setBookingType(type);
    setBookingCourseId(courseId);
    setIsBookingOpen(true);
  };

  const handleNavigateTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-zinc-900 font-sans antialiased selection:bg-red-100 selection:text-[#E5382B]">
      {/* Header Bar */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onNavigateTo={handleNavigateTo}
        />

        {/* About Us & Team Portfolio Section */}
        <AboutUsSection onOpenBooking={handleOpenBooking} />

        {/* Japanese Language Courses */}
        <CoursesSection onOpenBooking={handleOpenBooking} />

        {/* Japan Visa Consulting & Interactive Eligibility Checker */}
        <VisaConsultingSection onOpenBooking={handleOpenBooking} />

        {/* Company Photo Gallery */}
        <GallerySection />

        {/* Free Student Resource Portal (Flashcards, Cheatsheets, Quiz) */}
        <StudentPortal />

        {/* Verified Student Testimonials & COE Success Stories */}
        <TestimonialsSection />

        {/* Visa Tips Blog & Japan Cost of Living Calculator */}
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateTo={handleNavigateTo}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialType={bookingType}
        initialCourseId={bookingCourseId}
      />

      {/* Floating 1-Click WhatsApp Chat Widget */}
      <WhatsAppWidget />
    </div>
  );
}
