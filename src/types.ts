export type Language = 'ny' | 'en'; // 'ny' is Chichewa, 'en' is English

export interface ServiceItem {
  id: string;
  category: 'printing' | 'graphics' | 'production';
  titleNy: string;
  titleEn: string;
  descNy: string;
  descEn: string;
  featuresNy: string[];
  featuresEn: string[];
  startingPriceMwk: number;
  image?: string;
}

export interface WeddingPackage {
  id: string;
  nameNy: string;
  nameEn: string;
  taglineNy: string;
  taglineEn: string;
  priceMwk: number;
  isPopular?: boolean;
  deliverablesNy: string[];
  deliverablesEn: string[];
}

export interface PortfolioItem {
  id: string;
  titleNy: string;
  titleEn: string;
  category: 'printing' | 'graphics' | 'weddings' | 'events';
  categoryLabelNy: string;
  categoryLabelEn: string;
  client: string;
  location: string;
  image: string;
  descriptionNy: string;
  descriptionEn: string;
}

export interface QuoteOption {
  serviceId: string;
  nameNy: string;
  nameEn: string;
  unitPriceMwk: number;
  unitLabelNy: string;
  unitLabelEn: string;
  category: 'printing' | 'graphics' | 'weddings' | 'events';
  minQty: number;
}
