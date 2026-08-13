import React from 'react';
import { Logo } from './Logo';
import { MapPin, Mail, Phone, ShieldCheck, Heart, ArrowUp, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenBooking: (type?: 'trial_lesson' | 'visa_consultation') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="full" lightMode={true} />
            
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Minami Japan Link is a licensed Japanese language education institute and Gyoseishoshi visa consulting agency based in Japan. We empower international students and professionals to study, work, and thrive in Japan.
            </p>

            <div className="pt-2 space-y-2 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5382B] shrink-0 mt-0.5" />
                <span>Green Valley, Muzgunni, H-392 Rd No. 22, Khulna Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5382B] shrink-0" />
                <a href="mailto:info@minami.ac" className="hover:text-red-400 transition-colors">
                  info@minami.ac
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/8801839354103?text=Hello!%20I%20want%20to%20inquire%20about%20Japan%20Visa%20and%20JLPT%20Courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors flex items-center gap-1"
                >
                  WhatsApp: +8801839354103
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Facebook className="w-4 h-4 text-blue-500 shrink-0" />
                <a 
                  href="https://www.facebook.com/minami.japan.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-bold transition-colors flex items-center gap-1"
                >
                  Facebook: Minami Japan Link
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-zinc-400">Japan Immigration Bureau Registration #1808291</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button onClick={() => onNavigateTo('about')} className="hover:text-white transition-colors cursor-pointer text-amber-300 font-semibold">
                  About Us & Team Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Japanese Language Courses (N5-N1)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('visa')} className="hover:text-white transition-colors cursor-pointer">
                  Japan Visa & COE Consulting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('gallery')} className="hover:text-white transition-colors cursor-pointer text-amber-300 font-semibold">
                  Company Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('visa')} className="hover:text-white transition-colors cursor-pointer text-red-400 font-semibold">
                  Free Visa Eligibility Checker Tool
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('portal')} className="hover:text-white transition-colors cursor-pointer">
                  Student Portal & JLPT Flashcards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('testimonials')} className="hover:text-white transition-colors cursor-pointer">
                  Verified COE Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Japan Visa Tips & Living Cost Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Consultation & Support */}
          <div className="lg:col-span-4 space-y-4 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Start Your Japan Journey</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Accepting applications for April & October 2026 Student Visa intakes. Schedule a private consultation with our Japan counselors.
            </p>

            <div className="space-y-2 pt-2">
              <a
                href="https://wa.me/8801839354103?text=Hello!%20I%20want%20to%20inquire%20about%20Japan%20Visa%20and%20JLPT%20Courses."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                Chat on WhatsApp (+8801839354103)
              </a>
              <button
                onClick={() => onOpenBooking('visa_consultation')}
                className="w-full py-2.5 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                Book 1-on-1 Visa Strategy Session
              </button>
              <button
                onClick={() => onOpenBooking('trial_lesson')}
                className="w-full py-2.5 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-bold text-xs transition-all cursor-pointer"
              >
                Free Japanese Trial Lesson
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Minami Japan Link. All rights reserved. "Try and try, Touch the sky".</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/minami.japan.link"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 font-medium"
              title="Visit our Facebook Page"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <span>•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
