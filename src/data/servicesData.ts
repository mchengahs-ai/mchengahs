import { ServiceItem, WeddingPackage, PortfolioItem, QuoteOption } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_printing_production_1792387493368.jpg';
export const WEDDING_IMAGE = '/src/assets/images/wedding_photography_showcase_1792387493751.jpg';
export const GRAPHICS_IMAGE = '/src/assets/images/graphic_design_stationery_1792387494023.jpg';
export const EVENT_IMAGE = '/src/assets/images/event_production_media_1792387495007.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'stationery-printing',
    category: 'printing',
    titleNy: 'Kusindikiza Malonda & Stationery ya Bizinesi',
    titleEn: 'Commercial Printing & Business Stationery',
    descNy: 'Timasindikiza mabuku a ma resiti, mainvoice, ma letterhead, ma envelope, zikwama za mapepala, timapepala topsatsira malonda (flyers & brochures) ndi ma business cards okhwima.',
    descEn: 'High-volume commercial printing of invoice & receipt carbonless books, branded letterheads, envelopes, glossy flyers, brochures, product catalogues, and premium business cards.',
    featuresNy: [
      'Mabuku a risiti & invoice (Duplicate/Triplicate carbonless)',
      'Ma business card okhwima ndi a matt/gloss lamination',
      'Timapepala totsatsira (Flyers, brochures & catalogues)',
      'Makalendala apakhoma ndi apadesiki a chaka chonse',
      'Ma ID card a antchito ndi ma lanyard osindikizidwa'
    ],
    featuresEn: [
      'Receipt & invoice books (Duplicate / Triplicate carbonless)',
      'Premium business cards with matte / gloss lamination',
      'High-impact flyers, multi-fold brochures & product catalogues',
      'Custom wall & desktop corporate calendars',
      'Employee PVC ID cards & printed branded lanyards'
    ],
    startingPriceMwk: 15000,
    image: GRAPHICS_IMAGE
  },
  {
    id: 'banners-branding',
    category: 'printing',
    titleNy: 'Mabana Aakulu & Zovala Zodziwitsa Malonda',
    titleEn: 'Large Format Banners, Apparel & Promotional Items',
    descNy: 'Kusindikiza mabana akuluakulu amakampani, zikondwerero ndi misonkhano. Kuphatikizapo kusindikiza ma T-shirt, ma juzi, ma kapu (caps), ndi ma mugs a mphatso.',
    descEn: 'Large-scale wide-format printing for outdoor & indoor promotions. Roll-up pull-up banners, teardrops, billboards, heat-press custom t-shirts, caps, and sublimation ceramic mugs.',
    featuresNy: [
      'Mabana a Roll-up / Pull-up okhala ndi zitsulo zake',
      'Mabana a Teardrop & Telescopic a panja pamisonkhano',
      'Vinyl stickers & ma label a mabotolo ndi mapaketi',
      'Kusindikiza ma T-shirt, ma juzi ndi ma vest amakampani',
      'Ma mug amakampani, zolembera (pens) ndi makapu'
    ],
    featuresEn: [
      'Roll-up / Pull-up retractable luxury banner stands',
      'Teardrop & telescopic outdoor flags for events & expos',
      'Waterproof vinyl stickers & custom product labels',
      'Screen print & DTF custom branded corporate t-shirts & apparel',
      'Sublimation branded ceramic mugs, branded pens & gift items'
    ],
    startingPriceMwk: 35000,
    image: HERO_IMAGE
  },
  {
    id: 'graphic-design',
    category: 'graphics',
    titleNy: 'Kupanga Zithunzi Zokongola & Logo Design',
    titleEn: 'Creative Graphic Design, Logos & Brand Identity',
    descNy: 'Akatswiri athu amapanga ma logo apamwamba, zithunzi zotsatsira pa WhatsApp/Facebook, ma poster a zochitika, ndi mapulogalamu okongola a maukwati kapena maliro.',
    descEn: 'Our experienced digital artists design memorable corporate logos, brand identity packages, engaging social media promotional ads, event posters, and elegant wedding/memorial programs.',
    featuresNy: [
      'Kupanga Logo yatsopano ndi branding guide yathunthu',
      'Zithunzi zotsatsira pa Social Media (Facebook, WhatsApp, Insta)',
      'Mapulogalamu a Maukwati ndi Zikumbukiro za Maliro',
      'Kupanga mapaketi ndi ma label a mankhwala kapena zakudya',
      'Kukonza zithunzi zakale ndi kuziwonjezera ubwino (Photo Retouching)'
    ],
    featuresEn: [
      'Custom corporate logo creation & comprehensive brand style guide',
      'High-conversion social media promo posters & story graphics',
      'Luxury wedding service booklets & memorial service programs',
      'FMCG packaging, box layout & bottle sticker designs',
      'Professional photo enhancement, color grading & background cleanup'
    ],
    startingPriceMwk: 25000,
    image: GRAPHICS_IMAGE
  },
  {
    id: 'wedding-production',
    category: 'production',
    titleNy: 'Zithunzi & Kanema wa Maukwati (Weddings)',
    titleEn: 'Cinematic Wedding Photography & 4K Videography',
    descNy: 'Timasunga kukoma mtima kwa tsiku lanu lalikulu la ukwati. Timajambula zithunzi zokongola kwambiri ndi kanema wa 4K wokhala ndi ma drone apamwamba ndi zithunzi zokongola za m photobook.',
    descEn: 'We preserve every priceless emotion of your sacred wedding day. Multi-camera 4K cinematography, licensed drone aerial coverage, museum-quality leather photobooks, and grand canvas wall frames.',
    featuresNy: [
      'Kujambula zithunzi tsiku lonse kuyambira kuvala mpaka phwando',
      'Kanema wa 4K wokhala ndi phokoso loyera (Crisp audio recording)',
      'Kuulutsa Drone kujambula zithunzi za m’mwamba (Aerial view)',
      'Ma Photobook aakulu a chikopa ndi ma Photo Frame a pakhoma',
      'Zithunzi za Pre-wedding shoot pofuna kudzacheza pasadakhale'
    ],
    featuresEn: [
      'Full-day photo coverage from bridal prep, vows to evening reception',
      'Cinematic 4K wedding films with dedicated multi-source sound recording',
      '4K drone coverage capturing aerial grandeur of venues & bridal party',
      'Luxury lay-flat bonded leather wedding photobooks & gallery canvas prints',
      'Complimentary pre-wedding romantic engagement outdoor photoshoot'
    ],
    startingPriceMwk: 380000,
    image: WEDDING_IMAGE
  },
  {
    id: 'events-production',
    category: 'production',
    titleNy: 'Misonkhano Yofunika & Zikondwerero M\'moyo',
    titleEn: 'Milestone Events, Conferences & Corporate Media',
    descNy: 'Chinkhoswe, zikondwerero za maphunziro (Graduation), masiku obadwa (Birthdays), zochitika za makampani (AGMs & Conferences) ndi misonkhano ya mipingo.',
    descEn: 'Engagement parties (Chinkhoswe), graduation ceremonies, milestone birthday banquets, corporate annual general meetings, expos, and ecclesiastical conferences.',
    featuresNy: [
      'Chinkhoswe ndi mapwando a Send-off / Bridal Showers',
      'Kujambula zithunzi za Maphunziro (Graduation portraits)',
      'Misonkhano ya Makampani, Maboma ndi Mabungwe (NGOs)',
      'Live streaming pa YouTube/Facebook misonkhano ikuchitika',
      'Kupereka zithunzi mwachangu pa flash drive ndi pa intaneti'
    ],
    featuresEn: [
      'Chinkhoswe cultural engagements, send-offs & bridal shower parties',
      'Academic graduation cap & gown studio and venue portraiture',
      'Corporate conferences, summits, NGO workshops and product launches',
      'Multi-camera live streaming to YouTube & Facebook Live',
      'Express digital delivery via USB drive and private online gallery'
    ],
    startingPriceMwk: 120000,
    image: EVENT_IMAGE
  }
];

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'silver',
    nameNy: 'Phukusi la Bronze / Basic',
    nameEn: 'Bronze Essential Package',
    taglineNy: 'Zoyenera kwambiri maukwati ochepa kapena chinkhoswe',
    taglineEn: 'Ideal for intimate gatherings, send-offs, and micro-weddings',
    priceMwk: 380000,
    isPopular: false,
    deliverablesNy: [
      '1 Wodziwa kujambula zithunzi (Photographer)',
      '1 Wodziwa kujambula kanema (Videographer)',
      'Zithunzi zonse zosasintha zoperekedwa pa Flash Drive',
      'Photobook yokongola ya masamba 30',
      'Kanema wa mwachidule (Wedding Highlights 5-10 mins) wa pa foni',
      '1 Photo frame ya 12x18 inchi ya pakhoma'
    ],
    deliverablesEn: [
      '1 Professional lead photographer',
      '1 Professional lead cinematographer',
      'All high-resolution edited digital images on USB drive',
      '1 Elegant 30-page hardcover photobook',
      'Social media cinematic trailer / highlights reel (5-10 mins)',
      '1 Large 12x18 inch framed wall portrait'
    ]
  },
  {
    id: 'gold',
    nameNy: 'Phukusi la Silver / Popular',
    nameEn: 'Silver Royal Package',
    taglineNy: 'Phukusi lomwe makasitomala ambiri amalisankha',
    taglineEn: 'Our most sought-after full-day wedding coverage package',
    priceMwk: 680000,
    isPopular: true,
    deliverablesNy: [
      '2 Odziwa kujambula zithunzi (Two Photographers)',
      '2 Odziwa kujambula kanema (Two Videographers)',
      'Kuulutsa Drone (Aerial video & photos ya malo onse)',
      'Pre-wedding photoshoot musanafike patsiku la ukwati',
      'Photobook yapamwamba ya chikopa (Leather bound 40 pages)',
      'Kanema wathunthu wa 4K (Full feature movie) + Teaser ya WhatsApp',
      '2 Ma Canvas Frames aakulu a 20x30 inchi okongoletsa mnyumba'
    ],
    deliverablesEn: [
      '2 Professional senior photographers',
      '2 Professional senior cinematographers',
      'Full 4K Drone aerial footage of church, procession & reception',
      'Complimentary pre-wedding romantic outdoor portrait shoot',
      '1 Luxury leather-bound 40-page lay-flat wedding album',
      'Full-length 4K wedding documentary film + 3-minute WhatsApp teaser',
      '2 Premium 20x30 inch gallery-wrapped canvas wall art frames'
    ]
  },
  {
    id: 'platinum',
    nameNy: 'Phukusi la Gold / Platinum VIP',
    nameEn: 'Platinum Royal VIP Package',
    taglineNy: 'Ulemu waukulu kwambiri, palibe chomwe chatsala',
    taglineEn: 'The definitive luxury experience with zero compromises',
    priceMwk: 1250000,
    isPopular: false,
    deliverablesNy: [
      'Team yathunthu ya zithunzi ndi ma camera 3 a kanema',
      'Drone yokhala ndi 4K 60fps aerial coverage',
      'Pre-wedding photoshoot & save-the-date short video',
      '2 Ma Photobook aakulu (1 ya banja + 1 ya makolo mphatso)',
      'Live streaming pamene msonkhano ukuchitika (YouTube / Facebook)',
      '3 Ma Canvas Frames akuluakulu kwambiri (24x36 inchi)',
      'Flash drive yapadera ya mtengo wapatali mu bokosi lokongola',
      'Kujambula chinkhoswe popanda mtengo wowonjezera'
    ],
    deliverablesEn: [
      'Complete production crew with 3 cinema cameras & steady gimbals',
      'Ultra HD 4K 60fps drone coverage throughout the celebration',
      'Pre-wedding outdoor photoshoot + Save-The-Date motion video',
      '2 Heirloom luxury leather photobooks (Couple + Parents commemorative edition)',
      'Full multi-angle live broadcast to diaspora family via YouTube/Facebook',
      '3 Monumental 24x36 inch museum-grade canvas wall frames',
      'Engraved wooden presentation box with bespoke wooden USB drive',
      'Bonus comprehensive coverage for engagement (Chinkhoswe)'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    titleNy: 'Ukwati wa Chisomo & Kondwani',
    titleEn: 'Chisomo & Kondwani Wedding',
    category: 'weddings',
    categoryLabelNy: 'Ukwati & Chinkhoswe',
    categoryLabelEn: 'Weddings & Engagements',
    client: 'Banja la a Banda',
    location: 'Lilongwe, Malawi',
    image: WEDDING_IMAGE,
    descriptionNy: 'Zithunzi zapadera ndi kanema wa 4K wa tsiku lokongola pa Sunbird Capital ndi chikondwerero chachikulu.',
    descriptionEn: 'High-definition photo & cinematic video capturing an exquisite golden hour union at Sunbird Capital.'
  },
  {
    id: 'port-2',
    titleNy: 'Kusindikiza Mabana & Branding ya Msonkhano',
    titleEn: 'Conference Banners & Commercial Branding',
    category: 'printing',
    categoryLabelNy: 'Kusindikiza Malonda',
    categoryLabelEn: 'Commercial Printing',
    client: 'Apex Agro Innovations',
    location: 'Blantyre, Malawi',
    image: HERO_IMAGE,
    descriptionNy: 'Mabana a Roll-up okwana 25, zikwama zamakampani ndi timapepala totsatsira malonda pa BICC.',
    descriptionEn: '25 high-precision roll-up banners, conference folders, and brochures printed for an international summit.'
  },
  {
    id: 'port-3',
    titleNy: 'Corporate Identity & Stationery ya Aurora Co.',
    titleEn: 'Corporate Identity & Stationery Pack',
    category: 'graphics',
    categoryLabelNy: 'Kupanga Zithunzi & Logo',
    categoryLabelEn: 'Graphics & Branding',
    client: 'Aurora Architects Ltd',
    location: 'Mzuzu, Malawi',
    image: GRAPHICS_IMAGE,
    descriptionNy: 'Logo yamakono, ma business card a matt, mabuku a ma invoice, ndi ma letterhead osindikizidwa mwaluso.',
    descriptionEn: 'Minimalist corporate logo, blind debossed business cards, receipt books, and branded corporate envelopes.'
  },
  {
    id: 'port-4',
    titleNy: 'Kujambula Msonkhano Waukulu wa Pachaka (Gala AGM)',
    titleEn: 'Corporate Annual Gala & Conference Production',
    category: 'events',
    categoryLabelNy: 'Misonkhano Yofunika',
    categoryLabelEn: 'Conferences & Milestones',
    client: 'National Commerce Forum',
    location: 'BICC, Lilongwe',
    image: EVENT_IMAGE,
    descriptionNy: 'Kujambula kanema ndi zithunzi za alendo oposa 400 pamodzi ndi kuulutsa pa intaneti pomwepo (Live Stream).',
    descriptionEn: 'Full broadcast production, multi-camera audio capture, and live-streaming for over 400 executive delegates.'
  }
];

export const QUOTE_OPTIONS: QuoteOption[] = [
  // Printing items
  {
    serviceId: 'flyers-a5',
    nameNy: 'Timapepala totsatsira (Flyers A5 Glossy)',
    nameEn: 'A5 Glossy Full Color Flyers',
    unitPriceMwk: 120,
    unitLabelNy: 'pa pepala lililonse (kuyambira 200 pcs)',
    unitLabelEn: 'per flyer (minimum 200 pcs)',
    category: 'printing',
    minQty: 200
  },
  {
    serviceId: 'receipt-books',
    nameNy: 'Mabuku a Risiti / Invoice (Triplicate 50 sets)',
    nameEn: 'Triplicate Invoice/Receipt Books (50 sets)',
    unitPriceMwk: 8500,
    unitLabelNy: 'pa buku lililonse (kuyambira 5 mabuku)',
    unitLabelEn: 'per book (minimum 5 books)',
    category: 'printing',
    minQty: 5
  },
  {
    serviceId: 'business-cards',
    nameNy: 'Ma Business Cards (Matt Laminated, 350gsm)',
    nameEn: 'Business Cards (Matt Laminated 350gsm)',
    unitPriceMwk: 180,
    unitLabelNy: 'pa khadi lililonse (bokosi la 100 pcs)',
    unitLabelEn: 'per card (pack of 100 pcs)',
    category: 'printing',
    minQty: 100
  },
  {
    serviceId: 'rollup-banner',
    nameNy: 'Bana la Roll-Up (85cm x 200cm + Chitsulo chake)',
    nameEn: 'Roll-Up Banner Stand (85cm x 200cm + Base)',
    unitPriceMwk: 45000,
    unitLabelNy: 'pa bana lililonse',
    unitLabelEn: 'per banner stand complete',
    category: 'printing',
    minQty: 1
  },
  {
    serviceId: 'teardrop-banner',
    nameNy: 'Bana la Teardrop / Flying Banner (3 Meters)',
    nameEn: 'Teardrop Flying Banner (3m with ground spike)',
    unitPriceMwk: 75000,
    unitLabelNy: 'pa bana lililonse',
    unitLabelEn: 'per flag complete',
    category: 'printing',
    minQty: 1
  },
  {
    serviceId: 'branded-tshirts',
    nameNy: 'Ma T-shirt Osindikizidwa Malonda (Quality Cotton)',
    nameEn: 'Custom Screen/DTF Printed Cotton T-shirts',
    unitPriceMwk: 9500,
    unitLabelNy: 'pa heti/t-shirt (kuyambira 10 pcs)',
    unitLabelEn: 'per t-shirt (minimum 10 pcs)',
    category: 'printing',
    minQty: 10
  },
  // Graphics
  {
    serviceId: 'logo-design',
    nameNy: 'Kupanga Logo Yatsopano Yoyera (Logo Design)',
    nameEn: 'Complete Brand Logo Design & Vector Kit',
    unitPriceMwk: 35000,
    unitLabelNy: 'pa polojekiti',
    unitLabelEn: 'per project complete',
    category: 'graphics',
    minQty: 1
  },
  {
    serviceId: 'event-poster',
    nameNy: 'Kupanga Poster Yotsatsira Chochitika pa Social Media',
    nameEn: 'Social Media Event Poster Artwork',
    unitPriceMwk: 15000,
    unitLabelNy: 'pa zithunzi 1',
    unitLabelEn: 'per design',
    category: 'graphics',
    minQty: 1
  },
  {
    serviceId: 'wedding-program-design',
    nameNy: 'Kupanga Pulogalamu ya Ukwati (Booklet Layout)',
    nameEn: 'Wedding Program Design & Layout (8-16 pages)',
    unitPriceMwk: 28000,
    unitLabelNy: 'pa pulogalamu',
    unitLabelEn: 'per layout',
    category: 'graphics',
    minQty: 1
  },
  // Weddings & Events
  {
    serviceId: 'wedding-pkg-silver',
    nameNy: 'Phukusi la Bronze la Ukwati (Photo & Video)',
    nameEn: 'Wedding Bronze Coverage Package',
    unitPriceMwk: 380000,
    unitLabelNy: 'pa ukwati wathunthu',
    unitLabelEn: 'per wedding full day',
    category: 'weddings',
    minQty: 1
  },
  {
    serviceId: 'wedding-pkg-gold',
    nameNy: 'Phukusi la Silver la Ukwati (Drone + 2 Photobooks)',
    nameEn: 'Wedding Silver Royal Package with Drone',
    unitPriceMwk: 680000,
    unitLabelNy: 'pa ukwati wathunthu',
    unitLabelEn: 'per wedding full day',
    category: 'weddings',
    minQty: 1
  },
  {
    serviceId: 'chinkhoswe-coverage',
    nameNy: 'Kujambula Chinkhoswe / Engagement Party',
    nameEn: 'Traditional Engagement / Chinkhoswe Coverage',
    unitPriceMwk: 150000,
    unitLabelNy: 'pa chochitika',
    unitLabelEn: 'per event ceremony',
    category: 'events',
    minQty: 1
  },
  {
    serviceId: 'graduation-shoot',
    nameNy: 'Zithunzi za Graduation (Studio & Outdoor + Frame)',
    nameEn: 'Graduation Portrait Session + Framed Print',
    unitPriceMwk: 45000,
    unitLabelNy: 'pa wophunzira',
    unitLabelEn: 'per graduate session',
    category: 'events',
    minQty: 1
  },
  {
    serviceId: 'canvas-frame-large',
    nameNy: 'Photo Frame Yaikulu ya Pakhoma (Canvas 20x30 inchi)',
    nameEn: 'Luxury Canvas Wall Art Frame (20x30 inch)',
    unitPriceMwk: 48000,
    unitLabelNy: 'pa frame iliyonse',
    unitLabelEn: 'per canvas frame',
    category: 'weddings',
    minQty: 1
  }
];

export const TESTIMONIALS = [
  {
    name: 'Pastor Chimwemwe & Mercy Phiri',
    roleNy: 'Anakwatirana ku Lilongwe',
    roleEn: 'Newlyweds, Lilongwe',
    quoteNy: 'Hanikiya anatichitira ntchito yodabwitsa kwambiri pa ukwati wathu! Zithunzi zinali zoyera kwambiri ndipo kanema wa Drone anachititsa phwando lathu kukhala ngati kanema wapa TV. Photobook ya chikopa inali yapamwamba kwambiri!',
    quoteEn: 'Hanikiya did an outstanding job on our wedding! The pictures were crystal clear and the drone coverage made our reception look like an international movie. The leather photobook is truly heirloom quality.'
  },
  {
    name: 'Tamandani Banda',
    roleNy: 'Marketing Director, Lakeview Logistics',
    roleEn: 'Marketing Director, Lakeview Logistics, Blantyre',
    quoteNy: 'Mabana athu a Roll-up ndi ma invoice books anapangidwa mwachangu mkati mwa maola 48 tisanapite ku msonkhano wathu ku BICC. Ubwino wa mapepala ndi utoto unali woposa momwe timayembekezera!',
    quoteEn: 'Our roll-up banners and receipt books were printed and delivered within 48 hours right before our conference at BICC. The print clarity, durable stands, and colors were world-class.'
  },
  {
    name: 'Chifundo Mwale',
    roleNy: 'Mwini, Chifundo Agro Enterprises, Mzuzu',
    roleEn: 'Founder, Chifundo Agro Enterprises, Mzuzu',
    quoteNy: 'Logo yathu ndi ma label a matumba a mbewu anapangidwa mwaluso kwambiri ndi Hanikiya. Malonda athu anayamba kugulidwa kwambiri chifukwa chooneka bwino kwambiri pamsika.',
    quoteEn: 'Our company logo, packaging stickers and product banners were crafted with remarkable precision. Our retail sales jumped significantly thanks to the modern corporate shelf appeal.'
  }
];
