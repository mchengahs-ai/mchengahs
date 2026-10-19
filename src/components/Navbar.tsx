import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Phone, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenBooking }) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand wordmark (single element, no subtitle pill) */}
          <a href="#" className="font-heading font-extrabold text-2xl tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Hanikiya<span className="text-amber-500">.</span>
          </a>

          {/* Zone 2: 4-5 single line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.navServices}
            </a>
            <a href="#weddings" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.navWeddings}
            </a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.navPortfolio}
            </a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.navPricing}
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.navContact}
            </a>
          </nav>

          {/* Zone 3: 1 primary action + compact language toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-stone-500 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Sinthani chilankhulo / Switch language"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ny' ? 'EN' : 'CHICHEWA'}</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-md shadow-sm whitespace-nowrap shrink-0"
            >
              {t.getQuoteBtn}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
