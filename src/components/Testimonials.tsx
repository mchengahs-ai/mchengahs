import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TESTIMONIALS } from '../data/servicesData';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="py-20 bg-stone-950 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            Umboni wa Makasitomala Athu
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white mb-3 [text-wrap:balance]">
            {t.testimonialsTitle}
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed">
            {t.testimonialsSub}
          </p>
        </div>

        {/* Testimonials 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => {
            const quote = lang === 'ny' ? item.quoteNy : item.quoteEn;
            const role = lang === 'ny' ? item.roleNy : item.roleEn;

            return (
              <div
                key={idx}
                className="bg-stone-900/70 border border-stone-800 rounded-xl p-8 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <Quote className="w-8 h-8 text-amber-400/40 mb-4" />
                  <p className="text-sm text-stone-300 leading-relaxed italic mb-6">
                    "{quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800">
                  <p className="text-sm font-bold text-white font-heading">
                    {item.name}
                  </p>
                  <p className="text-xs text-amber-400 mt-0.5">
                    {role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
