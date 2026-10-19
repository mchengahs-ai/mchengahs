import React, { useState } from 'react';
import { Language, PortfolioItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PORTFOLIO_ITEMS } from '../data/servicesData';
import { Eye, X, MapPin, Building, Sparkles } from 'lucide-react';

interface PortfolioGalleryProps {
  lang: Language;
  onBookItem: (title: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ lang, onBookItem }) => {
  const t = TRANSLATIONS[lang];
  const [filter, setFilter] = useState<'all' | 'weddings' | 'printing' | 'graphics' | 'events'>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Chiwonetsero cha Ntchito Zathu
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white mb-3 [text-wrap:balance]">
              {t.portfolioTitle}
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">
              {t.portfolioSub}
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950 rounded-lg border border-stone-800">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t.allCategory}
            </button>
            <button
              onClick={() => setFilter('weddings')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'weddings'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {lang === 'ny' ? 'Maukwati' : 'Weddings'}
            </button>
            <button
              onClick={() => setFilter('printing')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'printing'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {lang === 'ny' ? 'Kusindikiza' : 'Printing'}
            </button>
            <button
              onClick={() => setFilter('graphics')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'graphics'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {lang === 'ny' ? 'Graphics' : 'Graphics'}
            </button>
            <button
              onClick={() => setFilter('events')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'events'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {lang === 'ny' ? 'Misonkhano' : 'Events'}
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const title = lang === 'ny' ? item.titleNy : item.titleEn;
            const categoryLabel = lang === 'ny' ? item.categoryLabelNy : item.categoryLabelEn;
            const desc = lang === 'ny' ? item.descriptionNy : item.descriptionEn;

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group relative bg-stone-950 rounded-xl overflow-hidden border border-stone-800 hover:border-amber-500/50 cursor-pointer transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-800">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Subtle unboxed metadata tag */}
                  <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-stone-950/80 px-2.5 py-1 rounded backdrop-blur-md">
                    {categoryLabel}
                  </div>

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-900/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-heading font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-2 mb-2">
                      {desc}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-stone-400">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-amber-400/80" />
                        {item.client}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400/80" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-stone-900 border border-stone-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/80 text-stone-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-950">
              <img
                src={activeModalItem.image}
                alt={lang === 'ny' ? activeModalItem.titleNy : activeModalItem.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-stone-400">
                <span className="text-amber-400 font-bold uppercase tracking-wider">
                  {lang === 'ny' ? activeModalItem.categoryLabelNy : activeModalItem.categoryLabelEn}
                </span>
                <span>·</span>
                <span>{activeModalItem.location}</span>
                <span>·</span>
                <span>{activeModalItem.client}</span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-white">
                {lang === 'ny' ? activeModalItem.titleNy : activeModalItem.titleEn}
              </h3>

              <p className="text-sm text-stone-300 leading-relaxed">
                {lang === 'ny' ? activeModalItem.descriptionNy : activeModalItem.descriptionEn}
              </p>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    const itemTitle = lang === 'ny' ? activeModalItem.titleNy : activeModalItem.titleEn;
                    setActiveModalItem(null);
                    onBookItem(itemTitle);
                  }}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                >
                  {lang === 'ny' ? 'Pemphani Ntchito Yotereyi' : 'Order Similar Production'}
                </button>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2.5 text-xs text-stone-400 hover:text-white transition-colors"
                >
                  {lang === 'ny' ? 'Tsekani' : 'Close'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
