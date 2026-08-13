import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Calendar, CheckCircle2, Menu, X, BookOpen, Shield, Award, Sparkles, Users, Image } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenBooking: (type?: 'trial_lesson' | 'visa_consultation') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'courses', label: 'Japanese Courses', icon: BookOpen },
    { id: 'visa', label: 'Visa Consulting', icon: Shield },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'portal', label: 'Student Portal', icon: Award },
    { id: 'testimonials', label: 'Success Stories', icon: CheckCircle2 },
    { id: 'blog', label: 'Visa Tips & Blog', icon: Sparkles },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-zinc-900 text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" /> Japan Head Office & Global Online Classes
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-300 text-[11px] sm:text-xs">
            <a href="mailto:info@minami.ac" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-red-400" /> info@minami.ac
            </a>
            <span className="text-zinc-600">|</span>
            <a 
              href="https://wa.me/8801839354103?text=Hello!%20I%20want%20to%20inquire%20about%20Japan%20Visa%20and%20JLPT%20Courses." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900 rounded text-[11px] font-bold transition-all"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: +8801839354103</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Company Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="text-left focus:outline-none group cursor-pointer"
          title="Minami Japan Link Home"
        >
          <Logo variant="full" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#E5382B] bg-red-50/80 font-bold'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#E5382B]' : 'text-zinc-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://wa.me/8801839354103?text=Hello!%20I%20want%20to%20inquire%20about%20Japan%20Visa%20and%20JLPT%20Courses."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
            title="Chat on WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking('trial_lesson')}
            className="px-3 py-2 rounded-lg border border-red-200 text-[#E5382B] hover:bg-red-50 text-xs font-semibold transition-all cursor-pointer"
          >
            Free Trial
          </button>
          
          <button
            onClick={() => onOpenBooking('visa_consultation')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E5382B] hover:bg-[#C82A1D] text-white text-xs font-bold shadow-sm transition-all cursor-pointer transform active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-red-50 text-[#E5382B]'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#E5382B]' : 'text-zinc-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-100 space-y-2">
            <a
              href="https://wa.me/8801839354103?text=Hello!%20I%20want%20to%20inquire%20about%20Japan%20Visa%20and%20JLPT%20Courses."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-white" />
              Chat on WhatsApp (+8801839354103)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('trial_lesson');
              }}
              className="w-full py-2.5 rounded-xl border border-red-200 text-[#E5382B] font-semibold text-sm hover:bg-red-50"
            >
              Book Free Trial Lesson
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('visa_consultation');
              }}
              className="w-full py-2.5 rounded-xl bg-[#E5382B] text-white font-bold text-sm shadow-md"
            >
              Book Visa Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
