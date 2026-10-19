import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="font-heading font-extrabold text-xl text-white tracking-tight inline-block">
              Hanikiya<span className="text-amber-500">.</span> Stationery, Graphics & Production
            </a>
            <p className="text-stone-400 leading-relaxed max-w-sm text-xs">
              {t.footerDesc}
            </p>
            <div className="pt-2 text-stone-300 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Lilongwe & Blantyre, Malawi</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>+265 888 743 219 / +265 994 302 110</span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
              {lang === 'ny' ? 'Zigawo za Tsamba' : 'Site Navigation'}
            </p>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.navServices}
                </a>
              </li>
              <li>
                <a href="#weddings" className="hover:text-amber-400 transition-colors">
                  {t.navWeddings}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  {t.navPortfolio}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {t.navPricing}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Specialities */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
              {lang === 'ny' ? 'Ukatswiri Wathu' : 'Our Specializations'}
            </p>
            <div className="space-y-2 text-stone-400">
              <p>• Commercial Printing: Carbonless Books, Invoices, Receipts</p>
              <p>• Large Format: Teardrop Flags, Roll-Up Pull-Up Banners</p>
              <p>• Media Production: 4K Drone Wedding Films & Photobooks</p>
              <p>• Graphic Design: Corporate Logo Suites & Packaging</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-10 mt-10 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400">
          <p>© {new Date().getFullYear()} Hanikiya Stationery, Graphics & Production. {t.footerRights}</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
          >
            <span>{lang === 'ny' ? 'Bwererani Pamwamba' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
