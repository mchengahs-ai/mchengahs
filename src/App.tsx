import React, { useState } from 'react';
import { Language, ServiceItem, WeddingPackage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WeddingPackages } from './components/WeddingPackages';
import { QuoteCalculator } from './components/QuoteCalculator';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ny'); // Chichewa by default as prompted
  const [prefilledService, setPrefilledService] = useState<string>('');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ny' ? 'en' : 'ny'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    const title = lang === 'ny' ? service.titleNy : service.titleEn;
    setPrefilledService(title);
    scrollToSection('contact');
  };

  const handleSelectWeddingPackage = (pkg: WeddingPackage) => {
    const name = lang === 'ny' ? pkg.nameNy : pkg.nameEn;
    setPrefilledService(`${name} (MWK ${pkg.priceMwk.toLocaleString()})`);
    scrollToSection('contact');
  };

  const handleBookPortfolioItem = (itemTitle: string) => {
    setPrefilledService(itemTitle);
    scrollToSection('contact');
  };

  const handleSendToBooking = (details: { serviceName: string; quantity: number; totalMwk: number }) => {
    const formatted = `${details.serviceName} - Qty: ${details.quantity} (Est. MK ${details.totalMwk.toLocaleString()})`;
    setPrefilledService(formatted);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={() => scrollToSection('contact')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => scrollToSection('contact')}
          onGoToCalculator={() => scrollToSection('calculator')}
        />

        {/* Commercial Printing & Services Bento/Grid */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* Wedding Photography, Videography & Milestone Events */}
        <WeddingPackages
          lang={lang}
          onSelectPackage={handleSelectWeddingPackage}
        />

        {/* Interactive Instant Cost & Quote Calculator */}
        <QuoteCalculator
          lang={lang}
          onSendToBookingForm={handleSendToBooking}
        />

        {/* Portfolio Gallery Showcase with Real Generated Images */}
        <PortfolioGallery
          lang={lang}
          onBookItem={handleBookPortfolioItem}
        />

        {/* Real Customer Testimonials */}
        <Testimonials
          lang={lang}
        />

        {/* Direct Contact & Booking Inquiry Form */}
        <ContactSection
          lang={lang}
          prefilledService={prefilledService}
        />
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/265888743219?text=Moni%20Hanikiya%20Studio!%20Ndikufuna%20kufunsa%20za%20ntchito%20zosindikizira%20ndi%20ukwati."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-emerald-900/30 transition-all hover:scale-105 group font-medium text-xs tracking-wide"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-bold">WhatsApp Hanikiya</span>
      </a>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
