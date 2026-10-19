import React from 'react';
import { Language, WeddingPackage } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { WEDDING_PACKAGES, WEDDING_IMAGE, EVENT_IMAGE } from '../data/servicesData';
import { Check, Camera, Video, Sparkles, HeartHandshake, Film } from 'lucide-react';

interface WeddingPackagesProps {
  lang: Language;
  onSelectPackage: (pkg: WeddingPackage) => void;
}

export const WeddingPackages: React.FC<WeddingPackagesProps> = ({ lang, onSelectPackage }) => {
  const t = TRANSLATIONS[lang];

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-MW', {
      style: 'currency',
      currency: 'MWK',
      maximumFractionDigits: 0
    }).format(amount).replace('MWK', 'MK');
  };

  return (
    <section id="weddings" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Za Ukwati & Misonkhano Yofunika</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {t.weddingTitle}
          </h2>
          <p className="text-base text-stone-300 leading-relaxed">
            {t.weddingSub}
          </p>
        </div>

        {/* Feature highlight split with visual asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800">
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-900">
            <img
              src={WEDDING_IMAGE}
              alt="Ukwati wamtengo wapatali Hanikiya"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-200">
              <span className="font-semibold text-white">Chisomo & Kondwani Banda</span>
              <span className="mx-2 text-stone-400">·</span>
              <span className="text-stone-300">Lilongwe</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
              {lang === 'ny' 
                ? 'Chifukwa Chiyani Musankhe Hanikiya pa Tsiku Lanu la Ukwati?' 
                : 'Why Entrust Your Sacred Day to Hanikiya Production?'}
            </h3>
            
            <p className="text-sm text-stone-300 leading-relaxed">
              {lang === 'ny'
                ? 'Tsiku la ukwati wanu limadzaza ndi chisangalalo, misozi yachikondi ndi ulemu waukulu wa banja. Ndife odziwa bwino kujambula mavidiyo a 4K, kuulutsa Drone mwaluso, ndi kusindikiza ma photobook a chikopa omwe mudzawakonda zaka 50 zikubwerazi.'
                : 'Your wedding day is filled with fleeting emotions, tears of joy, and deep family honor. We combine broadcast-grade 4K cinema cameras, licensed aerial drone cinematography, and heirloom leather-bound photobooks that remain pristine for generations.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-stone-200">
                <Film className="w-4 h-4 text-amber-400 shrink-0" />
                <span>4K Multi-Camera Cinema Recording</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-200">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Aerial Drone 4K Venue Coverage</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-200">
                <Camera className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Luxury Lay-Flat Leather Photobooks</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-200">
                <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pre-Wedding Engagement Photoshoot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {WEDDING_PACKAGES.map((pkg) => {
            const name = lang === 'ny' ? pkg.nameNy : pkg.nameEn;
            const tagline = lang === 'ny' ? pkg.taglineNy : pkg.taglineEn;
            const deliverables = lang === 'ny' ? pkg.deliverablesNy : pkg.deliverablesEn;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? 'bg-stone-950 border-2 border-amber-500 shadow-xl shadow-amber-950/20'
                    : 'bg-stone-950/80 border border-stone-800'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-stone-950 text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-sm">
                    {t.weddingPackagePopular}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {name}
                  </h3>
                  <p className="text-xs text-stone-400 mb-6">
                    {tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-stone-800">
                    <span className="text-3xl font-mono font-bold text-white tabular-nums">
                      {formatPrice(pkg.priceMwk)}
                    </span>
                    <span className="text-xs text-stone-400 ml-2 block sm:inline">
                      {lang === 'ny' ? 'tsiku lonse lathunthu' : 'all-inclusive full day'}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      {lang === 'ny' ? 'Zomwe Mukupeza:' : 'Deliverables & Inclusions:'}
                    </p>
                    <ul className="space-y-2.5">
                      {deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3 px-4 rounded-md font-bold text-xs uppercase tracking-wider transition-all ${
                    pkg.isPopular
                      ? 'bg-amber-400 text-stone-950 hover:bg-amber-300 active:scale-98 shadow-md'
                      : 'bg-stone-800 hover:bg-stone-700 text-white'
                  }`}
                >
                  {t.selectThisPackage}
                </button>
              </div>
            );
          })}
        </div>

        {/* Milestone Events Strip (Chinkhoswe, Graduation, AGMs, Conferences) */}
        <div className="bg-stone-950/60 border border-stone-800 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base font-bold text-white tracking-tight">
              {lang === 'ny'
                ? 'Misonkhano Ina Yofunika: Chinkhoswe, Graduation, ndi Misonkhano ya Makampani?'
                : 'Other Milestones: Engagements, Graduations, & Corporate Conferences?'}
            </h4>
            <p className="text-xs text-stone-400 max-w-2xl">
              {t.customPackageNote}
            </p>
          </div>

          <a
            href="#calculator"
            className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 text-xs font-semibold text-amber-400 rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            {t.calculateQuote}
          </a>
        </div>

      </div>
    </section>
  );
};
