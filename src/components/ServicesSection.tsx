import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SERVICES } from '../data/servicesData';
import { Check, ArrowRight, Printer, Sparkles, Video } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const t = TRANSLATIONS[lang];
  const [activeCategory, setActiveCategory] = useState<'all' | 'printing' | 'graphics' | 'production'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-MW', {
      style: 'currency',
      currency: 'MWK',
      maximumFractionDigits: 0
    }).format(amount).replace('MWK', 'MK');
  };

  return (
    <section id="services" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            Hanikiya Studio Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-stone-900 mb-4 [text-wrap:balance]">
            {t.servicesSectionTitle}
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            {t.servicesSectionSub}
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-stone-200/80 rounded-lg max-w-fit">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            {t.allCategory}
          </button>
          
          <button
            onClick={() => setActiveCategory('printing')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'printing'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.printingTab}</span>
          </button>

          <button
            onClick={() => setActiveCategory('graphics')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'graphics'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.graphicsTab}</span>
          </button>

          <button
            onClick={() => setActiveCategory('production')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'production'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.weddingsTab}</span>
          </button>
        </div>

        {/* Service Grid with Asymmetric Presence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const title = lang === 'ny' ? service.titleNy : service.titleEn;
            const desc = lang === 'ny' ? service.descNy : service.descEn;
            const features = lang === 'ny' ? service.featuresNy : service.featuresEn;
            const editorialNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {service.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded text-xs font-bold text-amber-400 tracking-wider">
                      {editorialNumber}
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {/* Category unboxed text metadata */}
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                    {service.category === 'printing' && (lang === 'ny' ? 'Kusindikiza Malonda' : 'Commercial Print')}
                    {service.category === 'graphics' && (lang === 'ny' ? 'Graphics & Branding' : 'Design & Identity')}
                    {service.category === 'production' && (lang === 'ny' ? 'Za Ukwati & Media Production' : 'Wedding & Media Production')}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-stone-900 mb-3 tracking-tight">
                    {title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                    {desc}
                  </p>

                  <div className="pt-4 border-t border-stone-100 mb-6">
                    <p className="text-xs font-semibold text-stone-700 uppercase tracking-wide mb-3">
                      {lang === 'ny' ? 'Zomwe Zikuphatikizidwa:' : 'Key Inclusions:'}
                    </p>
                    <ul className="space-y-2">
                      {features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-stone-600">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price starting note + CTA */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-stone-500 block">
                        {t.startingFrom}
                      </span>
                      <span className="text-base font-bold text-stone-900 font-mono tabular-nums">
                        {formatPrice(service.startingPriceMwk)}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap"
                    >
                      <span>{t.requestThisService}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
