import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HERO_IMAGE } from '../data/servicesData';
import { ArrowRight, Sparkles, Printer, Camera, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onGoToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking, onGoToCalculator }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative bg-stone-950 text-white overflow-hidden">
      {/* Background Media with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Hanikiya Stationery, Graphics and Production Studio"
          className="w-full h-full object-cover object-center filter brightness-45 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          
          {/* Subtle human editorial kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            <span>Hanikiya Stationery, Graphics & Production — Malawi</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
            {t.heroHeadline}
          </h1>

          {/* Value proposition subtext */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-8">
            {t.heroSub}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-md shadow-lg shadow-amber-950/30 whitespace-nowrap"
            >
              <span>{t.bookNowBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onGoToCalculator}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-md backdrop-blur-sm transition-all whitespace-nowrap"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>{t.calculateQuote}</span>
            </button>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-stone-300 hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap"
            >
              <span>{t.viewWorks}</span>
            </a>
          </div>

        </div>

        {/* 4-Column KPI / Trust Strip placed below the hero split */}
        <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white tracking-tight">{t.statYears}</p>
              <p className="text-xs text-stone-400 mt-0.5">Ukatswiri wotsimikizika</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white tracking-tight">{t.statClients}</p>
              <p className="text-xs text-stone-400 mt-0.5">M’Malawi & Diaspora</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white tracking-tight">{t.statDelivery}</p>
              <p className="text-xs text-stone-400 mt-0.5">Lilongwe, BT, Mzuzu, etc.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white tracking-tight">{t.statHd}</p>
              <p className="text-xs text-stone-400 mt-0.5">Drone & High-Speed Press</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
