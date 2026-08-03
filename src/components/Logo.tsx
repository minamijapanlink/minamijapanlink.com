import React from 'react';
import logoImg from '../assets/images/minami_japan_link_logo_1785304700859.jpg';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol-only';
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', lightMode = false }) => {
  if (lightMode) {
    return (
      <div className={`inline-flex items-center bg-white p-2 rounded-xl shadow-md border border-zinc-200/50 ${className}`}>
        <img
          src={logoImg}
          alt="Minami Japan Link - Try and try, Touch the sky"
          className="h-10 sm:h-12 w-auto object-contain max-w-full"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="Minami Japan Link - Try and try, Touch the sky"
        className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};


