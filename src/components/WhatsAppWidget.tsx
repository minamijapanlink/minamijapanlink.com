import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';

export const WHATSAPP_NUMBER = '8801839354103';
export const DISPLAY_WHATSAPP_NUMBER = '+8801839354103';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('Hello! I would like to inquire about Japan Student Visa processing and JLPT Japanese Language Courses.');

  const defaultMessages = [
    'I want to consult for Japan Student Visa & COE.',
    'I want to enroll in JLPT Japanese Language Course.',
    'I want to schedule a 1-on-1 Visa Strategy session.',
    'What are the requirements for April/October intakes?'
  ];

  const handleOpenWhatsApp = (messageText: string) => {
    const encodedText = encodeURIComponent(messageText || customText);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Floating Expanded Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden animate-fadeIn transition-all">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-green-700 text-white p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-1.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white text-emerald-600 flex items-center justify-center font-black text-xl shadow-md border-2 border-emerald-200">
                  <WhatsAppIcon className="w-7 h-7 text-emerald-600" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white">Minami Japan Link</h4>
                  <span className="bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded-full font-semibold">Official</span>
                </div>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-emerald-200" /> {DISPLAY_WHATSAPP_NUMBER}
                </p>
                <p className="text-[10px] text-emerald-200/90 mt-0.5">Replies typically in under 15 minutes</p>
              </div>
            </div>
          </div>

          {/* Body Chat Mock */}
          <div className="p-4 bg-emerald-50/40 space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border border-emerald-100/80 text-xs text-zinc-700 space-y-1.5">
              <p className="font-semibold text-zinc-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Konnichiwa! 👋
              </p>
              <p>
                Welcome to <strong>Minami Japan Link</strong>! How can our Japan visa & education advisors assist you today?
              </p>
              <div className="pt-1 flex items-center gap-1 text-[10px] text-zinc-400 font-medium">
                <CheckCircle className="w-3 h-3 text-emerald-500" /> Verified Japan Office Support
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Quick Inquiries:</p>
              <div className="space-y-1.5">
                {defaultMessages.map((msg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOpenWhatsApp(msg)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-zinc-200 hover:border-emerald-300 text-xs text-zinc-700 hover:text-emerald-800 font-medium transition-all cursor-pointer shadow-2xs flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{msg}</span>
                    <Send className="w-3.5 h-3.5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Input */}
            <div className="pt-2">
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                rows={2}
                placeholder="Type your message here..."
                className="w-full p-2.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />
            </div>

            {/* Direct Send Button */}
            <button
              onClick={() => handleOpenWhatsApp(customText)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              Start WhatsApp Chat ({DISPLAY_WHATSAPP_NUMBER})
            </button>
          </div>

          <div className="bg-zinc-50 px-4 py-2 text-center border-t border-zinc-100 text-[10px] text-zinc-400">
            One-click direct connection to Japan Legal & Admissions Team
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {!isOpen && (
          <span className="absolute -top-10 right-0 bg-zinc-900 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1">
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" /> Chat on WhatsApp ({DISPLAY_WHATSAPP_NUMBER})
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 text-white shadow-2xl hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer border-2 border-white/80 ring-4 ring-emerald-500/20"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <div className="relative">
              <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-white"></span>
              </span>
            </div>
          )}
        </button>
      </div>

    </div>
  );
};

// SVG Icon Component for WhatsApp
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="0"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.733 1.484h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.486-8.414" />
  </svg>
);
