import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, prefilledService }) => {
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: prefilledService || (lang === 'ny' ? 'Za Ukwati (Wedding Package)' : 'Wedding Production Package'),
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = lang === 'ny'
      ? `Moni Hanikiya Studio! Ndine ${formData.fullName || 'Kasitomala'}. Ndikufuna kufunsa za: ${formData.service || 'Zosindikizira / Ukwati'}.`
      : `Hello Hanikiya Studio! My name is ${formData.fullName || 'Client'}. I would like to inquire about: ${formData.service || 'Printing / Wedding Media'}.`;
    
    window.open(`https://wa.me/265888743219?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            Kambiranani Nafe
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t.contactTitle}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="text-xl font-heading font-bold text-stone-900 tracking-tight">
                Hanikiya Studio Malawi
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {lang === 'ny'
                  ? 'Tikulandirani ku studio yathu kapena mutha kuyitanitsa ntchito zanu zonse kudzera pa foni ndi WhatsApp tikutumizirani kulikonse m’Malawi.'
                  : 'Visit our production hub or place your complete print & media orders remotely via phone and WhatsApp with nationwide courier delivery.'}
              </p>

              <div className="space-y-4 text-sm text-stone-700 pt-2 border-t border-stone-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">{t.officeLocation}</span>
                    <span className="text-xs text-stone-500">Main Workshop & Studio Hubs</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+265888743219" className="font-semibold block text-stone-900 hover:text-amber-700 transition-colors">
                      {t.phoneMain}
                    </a>
                    <span className="text-xs text-stone-500">Airtel / TNM lines</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:mchengahs@gmail.com" className="font-semibold block text-stone-900 hover:text-amber-700 transition-colors">
                      mchengahs@gmail.com
                    </a>
                    <span className="text-xs text-stone-500">Quick response team</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">{t.officeHours}</span>
                    <span className="text-xs text-stone-500">Lamulungu: Pa Pempho Lapadera (By appointment)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.whatsappChat}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-stone-900">
                  {lang === 'ny' ? 'Zikomo Kwambiri!' : 'Inquiry Submitted Successfully!'}
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  {t.bookingSuccess}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        service: '',
                        eventDate: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                  >
                    {lang === 'ny' ? 'Tumizani Pempho Lina' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-heading font-bold text-stone-900 mb-2">
                  {lang === 'ny' ? 'Lembani Pempho Lanu Pano' : 'Send Direct Booking / Quote Request'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'ny' ? 'Mwachitsanzo: Kondwani Banda' : 'e.g. Kondwani Banda'}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      {t.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+265 888 123 456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder="adilesi@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      {t.serviceNeeded} *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Za Ukwati (Wedding Silver/Gold/Platinum Package)">
                        {lang === 'ny' ? 'Za Ukwati (Wedding Package)' : 'Wedding Coverage Package'}
                      </option>
                      <option value="Chinkhoswe & Send-off">
                        {lang === 'ny' ? 'Chinkhoswe & Send-off' : 'Engagement & Bridal Shower'}
                      </option>
                      <option value="Kusindikiza Malonda (Receipts, Invoices, Flyers)">
                        {lang === 'ny' ? 'Kusindikiza Malonda (Mabuku, Flyers, etc.)' : 'Commercial Printing (Books, Flyers, etc.)'}
                      </option>
                      <option value="Mabana a Roll-up & Teardrop">
                        {lang === 'ny' ? 'Mabana a Roll-up & Teardrops' : 'Roll-up & Teardrop Banners'}
                      </option>
                      <option value="Ma T-shirt & Zovala Zodziwitsa Malonda">
                        {lang === 'ny' ? 'Ma T-shirt Osindikizidwa' : 'Custom Printed T-shirts & Apparel'}
                      </option>
                      <option value="Kupanga Logo & Graphics">
                        {lang === 'ny' ? 'Kupanga Logo & Graphics' : 'Logo Design & Corporate Branding'}
                      </option>
                      <option value="Misonkhano Yofunika & Graduation">
                        {lang === 'ny' ? 'Misonkhano ya Makampani / Graduation' : 'Conferences & Graduation Session'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    {t.eventDate}
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={lang === 'ny' ? 'Fotokozani mwatsatanetsatane za chiwerengero, malo omwe ntchitoyi ikuchitikira, kapena mtundu wa mapepala...' : 'Provide details regarding quantities, event venue, preferred styles...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>{isSubmitting ? t.submitting : t.submitBooking}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
