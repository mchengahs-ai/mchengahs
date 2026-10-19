import React, { useState } from 'react';
import { Language, QuoteOption } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { QUOTE_OPTIONS } from '../data/servicesData';
import { Calculator, MessageCircle, Send, CheckCircle2, ShieldCheck, Truck, Zap } from 'lucide-react';

interface QuoteCalculatorProps {
  lang: Language;
  onSendToBookingForm: (details: { serviceName: string; quantity: number; totalMwk: number }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ lang, onSendToBookingForm }) => {
  const t = TRANSLATIONS[lang];

  // State
  const [selectedOptionId, setSelectedOptionId] = useState<string>(QUOTE_OPTIONS[0].serviceId);
  const [quantity, setQuantity] = useState<number>(QUOTE_OPTIONS[0].minQty);
  const [includeDelivery, setIncludeDelivery] = useState<boolean>(true);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  const currentOption = QUOTE_OPTIONS.find(o => o.serviceId === selectedOptionId) || QUOTE_OPTIONS[0];

  // Price calculations
  const baseSubtotal = currentOption.unitPriceMwk * quantity;
  const deliveryFee = includeDelivery ? 10000 : 0;
  const urgentSurcharge = isUrgent ? Math.round(baseSubtotal * 0.20) : 0;
  const grandTotal = baseSubtotal + deliveryFee + urgentSurcharge;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-MW', {
      style: 'currency',
      currency: 'MWK',
      maximumFractionDigits: 0
    }).format(amount).replace('MWK', 'MK');
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setSelectedOptionId(newId);
    const newOpt = QUOTE_OPTIONS.find(o => o.serviceId === newId);
    if (newOpt) {
      setQuantity(newOpt.minQty);
    }
  };

  const optionName = lang === 'ny' ? currentOption.nameNy : currentOption.nameEn;
  const unitLabel = lang === 'ny' ? currentOption.unitLabelNy : currentOption.unitLabelEn;

  // WhatsApp message preparation
  const generateWhatsAppLink = () => {
    const phoneNumber = '265888743219'; // Malawi contact number
    const message = lang === 'ny'
      ? `Moni Hanikiya Studio! Ndikufuna pempho la mtengo la:\n• Ntchito: ${currentOption.nameNy}\n• Chiwerengero: ${quantity} (${unitLabel})\n• Kutumiza (Delivery): ${includeDelivery ? 'Inde (MK 10,000)' : 'Ayi'}\n• Mwachangu (Express): ${isUrgent ? 'Inde' : 'Ayi'}\n• Chiwerengero Chonse Choyerekeza: ${formatPrice(grandTotal)}\n\nChonde mundithandize kukonza oda iyi.`
      : `Hello Hanikiya Studio! I would like to request an official quote for:\n• Service/Product: ${currentOption.nameEn}\n• Quantity: ${quantity} (${unitLabel})\n• Delivery: ${includeDelivery ? 'Yes (MK 10,000)' : 'No'}\n• Express 24-48h: ${isUrgent ? 'Yes' : 'No'}\n• Estimated Total: ${formatPrice(grandTotal)}\n\nPlease advise on production lead time and payment details.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleBookingTransfer = () => {
    onSendToBookingForm({
      serviceName: optionName,
      quantity,
      totalMwk: grandTotal
    });
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 4000);
  };

  return (
    <section id="calculator" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t.calculatorTitle}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t.calculatorSub}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left controls */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Product selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  {t.selectServiceLabel}
                </label>
                <select
                  value={selectedOptionId}
                  onChange={handleOptionChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                >
                  <optgroup label={lang === 'ny' ? 'Kusindikiza (Printing)' : 'Commercial Printing'}>
                    {QUOTE_OPTIONS.filter(o => o.category === 'printing').map(o => (
                      <option key={o.serviceId} value={o.serviceId}>
                        {lang === 'ny' ? o.nameNy : o.nameEn} ({formatPrice(o.unitPriceMwk)})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'ny' ? 'Graphics & Logos' : 'Graphic Design & Branding'}>
                    {QUOTE_OPTIONS.filter(o => o.category === 'graphics').map(o => (
                      <option key={o.serviceId} value={o.serviceId}>
                        {lang === 'ny' ? o.nameNy : o.nameEn} ({formatPrice(o.unitPriceMwk)})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'ny' ? 'Za Ukwati & Misonkhano' : 'Weddings & Events'}>
                    {QUOTE_OPTIONS.filter(o => o.category === 'weddings' || o.category === 'events').map(o => (
                      <option key={o.serviceId} value={o.serviceId}>
                        {lang === 'ny' ? o.nameNy : o.nameEn} ({formatPrice(o.unitPriceMwk)})
                      </option>
                    ))}
                  </optgroup>
                </select>
                <p className="text-xs text-stone-500 mt-1.5">
                  {lang === 'ny' ? 'Mtengo wa chinthu chimodzi: ' : 'Unit rate: '}
                  <span className="font-semibold text-stone-800 font-mono tabular-nums">{formatPrice(currentOption.unitPriceMwk)}</span> {unitLabel}
                </p>
              </div>

              {/* Quantity */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    {t.quantityLabel}
                  </label>
                  <span className="text-xs text-stone-500 font-mono">
                    Min: {currentOption.minQty}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={currentOption.minQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(currentOption.minQty, parseInt(e.target.value) || currentOption.minQty))}
                    className="w-36 px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm font-mono font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  
                  {/* Preset helpers for quick adjustment */}
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 5].map((multiplier) => {
                      const qtyPreset = currentOption.minQty * multiplier;
                      return (
                        <button
                          key={multiplier}
                          type="button"
                          onClick={() => setQuantity(qtyPreset)}
                          className="px-2.5 py-1 text-xs border border-stone-200 hover:border-amber-400 bg-stone-50 rounded text-stone-600 hover:text-stone-900 font-mono transition-colors"
                        >
                          {qtyPreset}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Addons toggles */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={includeDelivery}
                    onChange={(e) => setIncludeDelivery(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-stone-900 group-hover:text-amber-700 flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-stone-500 inline" />
                      {t.includeDelivery}
                    </span>
                    <span className="text-stone-500 block mt-0.5">
                      +MK 10,000 (Courier via AXA / Matours / PostdotNet / Blantyre / Lilongwe)
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-stone-900 group-hover:text-amber-700 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500 inline" />
                      {t.urgentOrder}
                    </span>
                    <span className="text-stone-500 block mt-0.5">
                      +20% Express surcharge for overnight / 24hr priority dispatch
                    </span>
                  </div>
                </label>
              </div>

            </div>

            {/* Right Summary & Action Card */}
            <div className="md:col-span-5 bg-stone-950 text-white rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
                  {lang === 'ny' ? 'Chidule cha Mtengo' : 'Estimate Breakdown'}
                </p>

                <div className="space-y-3 pb-6 border-b border-stone-800 text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span className="truncate pr-2">{optionName} (x{quantity}):</span>
                    <span className="font-mono tabular-nums text-white shrink-0">{formatPrice(baseSubtotal)}</span>
                  </div>

                  {includeDelivery && (
                    <div className="flex justify-between text-stone-300">
                      <span>Delivery Fee (Malawi):</span>
                      <span className="font-mono tabular-nums text-white">{formatPrice(deliveryFee)}</span>
                    </div>
                  )}

                  {isUrgent && (
                    <div className="flex justify-between text-stone-300">
                      <span>Express Priority (+20%):</span>
                      <span className="font-mono tabular-nums text-amber-400">{formatPrice(urgentSurcharge)}</span>
                    </div>
                  )}
                </div>

                <div className="pt-6 pb-6">
                  <span className="text-xs text-stone-400 block mb-1">
                    {t.estimatedTotal}
                  </span>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-amber-400 font-mono tabular-nums">
                    {formatPrice(grandTotal)}
                  </div>
                  <p className="text-[11px] text-stone-400 mt-2">
                    {lang === 'ny' 
                      ? '* Mtengowu ukhoza kusinthidwa malingana ndi zofuna zanu zapadera.'
                      : '* Final quote may vary slightly depending on paper stock & custom specs.'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-stone-800">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.sendWhatsAppQuote}</span>
                </a>

                <button
                  type="button"
                  onClick={handleBookingTransfer}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg border border-stone-700 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'ny' ? 'Lowetsani mu Fomu ya Pempho' : 'Fill In Booking Form Below'}</span>
                </button>

                {copiedSuccess && (
                  <p className="text-[11px] text-amber-400 text-center font-medium animate-fade-in flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'ny' ? 'Zalembedwa m\'fomu! Yang\'anani pansi.' : 'Transferred to booking form below!'}</span>
                  </p>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
