import forbiddenCityImage from '@/assets/products/beijing-xian-shanghai/forbidden-city.png'
import olympicParkImage from '@/assets/products/beijing-xian-shanghai/olympic-park.png'
import palaceRoofDetailImage from '@/assets/products/beijing-xian-shanghai/palace-roof-detail.png'
import shanghaiSkylineImage from '@/assets/products/beijing-xian-shanghai/shanghai-skyline.png'
import summerPalaceImage from '@/assets/products/beijing-xian-shanghai/summer-palace.png'
import templeOfHeavenImage from '@/assets/products/beijing-xian-shanghai/temple-of-heaven.png'
import terracottaWarriorsImage from '@/assets/products/beijing-xian-shanghai/terracotta-warriors.png'

export type City = {
  slug: string
  name: string
  region: string
  summary: string
  duration?: string
  image?: string
  alt?: string
  signature: string
  bestFor: string[]
  highlights: string[]
  itinerary: string[]
  travelNote: string
  season: string
  connections: string
}

export type Attraction = {
  slug: string
  city: string
  name: string
  summary?: string
  image: string
  alt: string
  large?: boolean
}

export type AttractionDetail = Attraction & {
  eyebrow: string
  heroTitle: string
  intro: string
  facts: Array<{ label: string; value: string }>
  whyGo: Array<{ title: string; text: string }>
  visitFlow: string[]
  practicalNotes: string[]
  relatedSlugs: string[]
  sources: Array<{ label: string; url: string }>
  imageCredit: string
}

export type Trip = {
  name: string
  summary: string
  meta: string
  featured?: boolean
  image?: string
  alt?: string
  productSlug?: string
  facts?: Array<{ label: string; value: string }>
}

export type ProductDay = {
  day: string
  city: string
  meals: string
  title: string
  summary: string
  sights: string[]
  note?: string
}

export type ProductPrice = {
  group: string
  price: string
  basis: string
}

export type ProductGalleryImage = {
  title: string
  city: string
  image: string
  alt: string
  featured?: boolean
}

export type TourProduct = {
  slug: string
  name: string
  eyebrow: string
  duration: string
  route: string
  heroImage: string
  heroAlt: string
  summary: string
  galleryTitle: string
  quoteSubject: string
  sourceNote: string
  highlights: string[]
  facts: Array<{ label: string; value: string }>
  gallery: ProductGalleryImage[]
  days: ProductDay[]
  hotels: Array<{ city: string; hotel: string }>
  prices: ProductPrice[]
  inclusions: string[]
  exclusions: string[]
}

export type CompanyStat = {
  value: string
  label: string
}

export type CompanyBrand = {
  name: string
  summary: string
}

export type CompanyMilestone = {
  year: string
  event: string
}

export type CompanyPillar = {
  title: string
  text: string
}

export type CompanyIntro = {
  eyebrow: string
  title: string
  summary: string
  description: string
  stats: CompanyStat[]
  pillars: CompanyPillar[]
  brands: CompanyBrand[]
  milestones: CompanyMilestone[]
  values: string[]
}

export type CompanyPhotoSlot = {
  label: string
  caption: string
  image: string
  alt: string
}

export type CompanyDetailSection = {
  title: string
  text: string
}

export type CompanyBranch = {
  city: string
  role: string
}

export type CompanyHonor = {
  title: string
  text: string
}

export type CompanyMediaItem = {
  title: string
  label: string
  image: string
  alt: string
  featured?: boolean
}

export type CompanyDetail = CompanyIntro & {
  heroTitle: string
  heroSummary: string
  photoSlots: CompanyPhotoSlot[]
  overview: CompanyDetailSection[]
  branches: CompanyBranch[]
  inbound: {
    title: string
    summary: string
    capabilities: CompanyDetailSection[]
  }
  resources: CompanyDetailSection[]
  honors: CompanyHonor[]
  mediaGallery: CompanyMediaItem[]
  honorImages: CompanyMediaItem[]
  culture: {
    vision: string
    mission: string
    values: string[]
  }
}

export const images = {
  greatWall:
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1100&q=82',
  shanghai:
    'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=82',
  xian:
    'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=900&q=82',
  chengdu:
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=900&q=82',
  guilin:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Karst%20peaks%20and%20bamboo%20forest.jpg?width=900',
  hangzhou:
    'https://commons.wikimedia.org/wiki/Special:FilePath/West_Lake_IMG_8795_leifeng_pagoda.jpg?width=900',
  guangzhou:
    'https://commons.wikimedia.org/wiki/Special:FilePath/View_of_Pearl_River_From_Canton_Tower.jpg?width=900',
  shenzhen:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Shenzhen_Skyline_from_Meilin_Reservoir_Dam8.jpg?width=900',
  chongqing:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Skyline_At_Night.png?width=900',
  zhangjiajie:
    'https://commons.wikimedia.org/wiki/Special:FilePath/1_zhangjiajie_huangshizhai_wulingyuan_panorama_2012.jpg?width=900',
  suzhou:
    'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=1100&q=82',
  hongKong:
    'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1100&q=82'
}

export const companyIntro: CompanyIntro = {
  eyebrow: 'Tengxuan Travel Group',
  title: 'Global travel resource allocation platform',
  summary:
    'Founded in 2001 and headquartered in Beijing, Tengxuan Travel Group builds competitive travel products and services for enterprise and travel-industry clients.',
  description:
    'The group covers major transportation, free independent travel ticketing, travel management, online booking, and air cargo. Its customer base spans government organizations, central and state-owned enterprises, large and medium private companies, travel agencies, exhibitions, study-tour institutions, tourism platforms, and broader business travel scenarios.',
  stats: [
    { value: '2001', label: 'Founded' },
    { value: '833741', label: 'NEEQ code' },
    { value: '600+', label: 'Airline partners' },
    { value: '20,000+', label: 'Quality customers' },
    { value: '9', label: 'Branch cities' },
    { value: '700', label: 'Team members' }
  ],
  pillars: [
    {
      title: 'Enterprise travel management',
      text: 'Policy, budget, approval, and service workflows for government, enterprise, exhibition, and study-tour teams.'
    },
    {
      title: 'Global air supply chain',
      text: 'Private fares, airline resources, ticketing support, and major-transportation allocation across business scenarios.'
    },
    {
      title: 'Technology-enabled service',
      text: 'Online booking, customer operations, and travel-resource systems that connect teams, suppliers, and agencies.'
    }
  ],
  brands: [
    {
      name: 'On The Way Business Travel',
      summary: 'Business travel management with cost, data, and supply-chain control.'
    },
    {
      name: 'On The Way Transportation',
      summary: 'Global major-transportation solutions backed by broad airline resources.'
    },
    {
      name: 'Tengxuan Travel',
      summary: 'Online and offline travel resource allocation for agencies and enterprises.'
    },
    {
      name: '51Book',
      summary: 'Intelligent global flight booking with private fares and supply-chain support.'
    },
    {
      name: 'Zhifei Travel Technology',
      summary: 'Technology platform for global travel resources and service efficiency.'
    }
  ],
  milestones: [
    { year: '2015', event: 'Listed on NEEQ and completed brand capital-market upgrade.' },
    { year: '2017', event: 'Acquired 51Book and expanded the travel-resource platform.' },
    { year: '2019', event: 'Renamed from Shanshui Shares to Tengxuan Travel Group.' },
    { year: '2023', event: 'Built a platform ecosystem for enterprise travel resource allocation.' }
  ],
  values: ['Customer first', 'Truth seeking', 'Professional efficiency', 'Hard work', 'Innovation']
}

const companyImageBase = 'https://yj-travel.s3.amazonaws.com/company'

export const companyDetail: CompanyDetail = {
  ...companyIntro,
  heroTitle: 'Tengxuan Travel Group',
  heroSummary:
    'A Beijing-headquartered travel group connecting enterprise clients, travel agencies, airlines, and inbound China travel demand through long-running supply-chain and service capabilities.',
  photoSlots: [
    {
      label: 'Company office',
      caption: 'Beijing office and group brand reception space.',
      image: `${companyImageBase}/office-hall.webp`,
      alt: 'Tengxuan Travel Group office reception hallway with company logo'
    },
    {
      label: 'Team photo',
      caption: 'Group team culture and employee activity moments.',
      image: `${companyImageBase}/team-wide.webp`,
      alt: 'Large Tengxuan Travel Group employee team photo'
    },
    {
      label: 'Service scene',
      caption: 'Team collaboration and travel service culture.',
      image: `${companyImageBase}/activity-hands.webp`,
      alt: 'Tengxuan team members forming a star shape with their hands'
    },
    {
      label: 'Branch network',
      caption: 'Company activity and branch-team presence.',
      image: `${companyImageBase}/activity-banner.webp`,
      alt: 'Tengxuan employee activity group photo with banner'
    }
  ],
  overview: [
    {
      title: 'Established operating base',
      text:
        'Tengxuan Tourism Group Co., Ltd. was established in 2001 and is headquartered in Beijing with registered capital of 110.53 million yuan.'
    },
    {
      title: 'Public-market profile',
      text:
        'The group was listed on the National Equities Exchange and Quotations in October 2015 under securities code 833741.'
    },
    {
      title: 'Broad business coverage',
      text:
        'Its business covers major transportation, independent ticketing, travel management, online booking, air cargo, and travel-resource allocation.'
    }
  ],
  branches: [
    { city: 'Beijing', role: 'Headquarters' },
    { city: "Xi'an", role: 'Branch office' },
    { city: 'Shanghai', role: 'Branch office' },
    { city: 'Chengdu', role: 'Branch office' },
    { city: 'Hefei', role: 'Branch office' },
    { city: 'Guangzhou', role: 'Branch office' },
    { city: 'Hong Kong', role: 'Branch office' },
    { city: 'United States', role: 'Overseas branch' },
    { city: 'Binzhou', role: 'Branch office' }
  ],
  inbound: {
    title: 'Inbound China travel capability',
    summary:
      'With more than ten years of inbound tourism service experience, Tengxuan supports overseas source markets with multilingual reception and tailored China travel solutions.',
    capabilities: [
      {
        title: '100+ source markets',
        text:
          'Business coverage reaches more than 100 overseas source countries for inbound China travel and related partner demand.'
      },
      {
        title: 'Multilingual service',
        text:
          'Service coverage includes English, French, German, Japanese, Russian, Korean, and other language scenarios.'
      },
      {
        title: 'Custom travel scenarios',
        text:
          'The team supports MICE services, high-end customization, visa-related service coordination, and group reception needs.'
      }
    ]
  },
  resources: [
    {
      title: 'Airline resource network',
      text:
        'Strategic partnerships with more than 600 domestic and international airlines support competitive products and travel-resource allocation.'
    },
    {
      title: 'Ticketing and system access',
      text:
        'Hong Kong and US subsidiaries support ticketing systems such as Eterm, Amadeus, Sabre, and Travelport.'
    },
    {
      title: 'Enterprise supply chain',
      text:
        '51Book and group brands connect airline private fares, corporate agreements, online booking, and B-end client service workflows.'
    }
  ],
  honors: [
    {
      title: 'Certified platform qualifications',
      text:
        'The group has been recognized as a Beijing High-Tech Enterprise and Specialized New SME, with IATA and ARC-related travel qualifications.'
    },
    {
      title: 'Airline and enterprise partner awards',
      text:
        'Recognition includes preferred or premium partner awards from major airlines and enterprise procurement supply-chain partners.'
    },
    {
      title: 'Corporate client base',
      text:
        'The group has accumulated more than 20,000 high-quality customers across government, state-owned enterprise, private enterprise, agency, exhibition, study-tour, and tourism-platform scenarios.'
    }
  ],
  mediaGallery: [
    {
      title: 'Group brand reception area',
      label: 'Office',
      image: `${companyImageBase}/office-wall.webp`,
      alt: 'Tengxuan Travel Group logo wall in the office',
      featured: true
    },
    {
      title: 'Outdoor team activity',
      label: 'Team',
      image: `${companyImageBase}/team-red-outdoor.webp`,
      alt: 'Tengxuan team members in red shirts at an outdoor company activity'
    },
    {
      title: 'Branch activity team',
      label: 'Activity',
      image: `${companyImageBase}/activity-group.webp`,
      alt: 'Tengxuan employees posing with a company activity banner'
    },
    {
      title: 'Travel culture activity',
      label: 'Activity',
      image: `${companyImageBase}/activity-tower-team.webp`,
      alt: 'Tengxuan team members standing in front of a traditional tower'
    }
  ],
  honorImages: [
    {
      title: 'High-Tech Enterprise certificate',
      label: 'Certificate',
      image: `${companyImageBase}/cert-high-tech.webp`,
      alt: 'High-Tech Enterprise certificate for Tengxuan'
    },
    {
      title: 'Specialized New SME certificate',
      label: 'Certificate',
      image: `${companyImageBase}/cert-specialized-sme.webp`,
      alt: 'Specialized New SME certificate'
    },
    {
      title: 'IATA and ARC qualifications',
      label: 'Qualification',
      image: `${companyImageBase}/cert-iata-arc.webp`,
      alt: 'IATA and ARC travel qualification certificates'
    },
    {
      title: 'Partner award trophy',
      label: 'Award',
      image: `${companyImageBase}/award-trophy.webp`,
      alt: 'Tengxuan partner award trophy and certificate'
    }
  ],
  culture: {
    vision: 'Lead global travel resource sharing and become trusted by global enterprises for top service.',
    mission: 'Let businesses buy great travel deals.',
    values: ['Customer-focused', 'Honest', 'Efficient', 'Diligent', 'Innovative']
  }
}

export const cities: City[] = [
  {
    slug: 'beijing',
    name: 'Beijing',
    region: 'North China',
    summary: 'Imperial history, hutongs, the Forbidden City, and Great Wall day trips.',
    duration: '3-5 days',
    image: images.greatWall,
    alt: 'Great Wall near Beijing',
    signature:
      'Beijing is the clearest first stop for travelers who want China’s imperial scale, living neighborhood texture, and a smooth introduction to high-speed rail routes.',
    bestFor: ['First China trip', 'World heritage', 'Imperial history'],
    highlights: ['Forbidden City', 'Temple of Heaven', 'Hutong walk', 'Mutianyu or Juyongguan Great Wall'],
    itinerary: [
      'Day 1: Tiananmen area, Forbidden City, and Jingshan viewpoint.',
      'Day 2: Temple of Heaven, hutongs, and a local food walk.',
      'Day 3: Great Wall day trip with flexible hiking pace.'
    ],
    travelNote:
      'Book major palace and museum tickets early, keep passports ready for entry checks, and avoid packing the Great Wall into an arrival day.',
    season: 'Spring and autumn are the most comfortable; winter is crisp and quieter.',
    connections: 'Strong rail and flight links to Xi’an, Shanghai, Chengdu, and Zhangjiajie.'
  },
  {
    slug: 'shanghai',
    name: 'Shanghai',
    region: 'East China',
    summary: 'Art deco streets, skyline views, design hotels, and fast onward rail links.',
    duration: '2-4 days',
    image: images.shanghai,
    alt: 'Shanghai skyline along the Huangpu River',
    signature:
      'Shanghai works as China’s most convenient urban gateway: polished hotels, English-friendly services, riverfront architecture, and quick day trips by train.',
    bestFor: ['Arrival gateway', 'Design and dining', 'Day trips'],
    highlights: ['The Bund', 'Yu Garden', 'Former French Concession', 'Pudong skyline'],
    itinerary: [
      'Day 1: Bund walk, Yu Garden area, and Huangpu River views.',
      'Day 2: Former French Concession, museums, cafes, and evening skyline.',
      'Day 3: Add Suzhou, Hangzhou, or a water town by high-speed rail.'
    ],
    travelNote:
      'Use Shanghai as a soft landing or final stop when travelers want lower friction before international flights.',
    season: 'Spring and autumn are mild; summer is hot and humid but active at night.',
    connections: 'Excellent high-speed rail access to Suzhou, Hangzhou, Nanjing, Beijing, and beyond.'
  },
  {
    slug: 'xian',
    name: "Xi'an",
    region: 'Northwest China',
    summary: 'Ancient capital energy, city walls, Muslim Quarter food, and the Terracotta Army.',
    duration: '2-3 days',
    image: images.xian,
    alt: "Terracotta warriors in Xi'an",
    signature:
      'Xi’an gives a compact, high-impact history chapter between Beijing and Shanghai, pairing the Terracotta Army with city-wall evenings and Silk Road food culture.',
    bestFor: ['Ancient capitals', 'Food streets', 'Classic rail routes'],
    highlights: ['Terracotta Army', 'Ancient City Wall', 'Muslim Quarter', 'Big Wild Goose Pagoda'],
    itinerary: [
      'Day 1: City Wall, Bell Tower area, and Muslim Quarter food walk.',
      'Day 2: Terracotta Army with a guide, then pagoda or Tang-themed evening show.',
      'Day 3: Add Hanyangling, Shaanxi History Museum, or continue by rail.'
    ],
    travelNote:
      'The Terracotta Army deserves a guide and a measured pace; avoid treating it as a quick photo stop.',
    season: 'Spring and autumn balance weather and crowd levels best.',
    connections: 'Commonly linked by high-speed rail from Beijing and onward to Shanghai or Chengdu.'
  },
  {
    slug: 'chengdu',
    name: 'Chengdu',
    region: 'Southwest China',
    summary: 'Pandas, teahouses, spicy food, and relaxed Sichuan culture.',
    duration: '2-4 days',
    image: images.chengdu,
    alt: 'Giant panda resting in Chengdu',
    signature:
      'Chengdu slows the itinerary down with teahouses, Sichuan dining, panda visits, and access to western China’s mountain and heritage extensions.',
    bestFor: ['Pandas', 'Food culture', 'Slower city pace'],
    highlights: ['Panda Base', 'People’s Park teahouse', 'Jinli or Kuanzhai lanes', 'Sichuan hotpot'],
    itinerary: [
      'Day 1: Panda Base in the morning and teahouse culture in the afternoon.',
      'Day 2: Old-lane walks, Sichuan cuisine, and an optional opera evening.',
      'Day 3: Add Leshan Giant Buddha, Dujiangyan, or Qingcheng Mountain.'
    ],
    travelNote:
      'Pandas are best visited early in the day; build meals around spice tolerance rather than assuming one default level.',
    season: 'Spring and autumn are comfortable; summer is lush but humid.',
    connections: 'Useful hub for Chongqing, Jiuzhaigou, Leshan, and westbound extensions.'
  },
  {
    slug: 'guilin',
    name: 'Guilin',
    region: 'South China',
    summary: 'Karst peaks, Li River cruises, cycling routes, and countryside stays.',
    duration: '2-4 days',
    image: images.guilin,
    alt: 'Karst peaks and bamboo forest near Guilin',
    signature:
      'Guilin and Yangshuo shift the trip from cities to landscapes, giving first-time visitors the classic Li River, karst peaks, and countryside rhythm.',
    bestFor: ['Karst scenery', 'Family-friendly nature', 'Photography'],
    highlights: ['Li River cruise', 'Yangshuo countryside', 'Reed Flute Cave', 'Longji rice terraces'],
    itinerary: [
      'Day 1: Guilin arrival, city viewpoints, and riverside evening.',
      'Day 2: Li River cruise to Yangshuo and village cycling or buggy routes.',
      'Day 3: Longji rice terraces or a slower Yangshuo countryside day.'
    ],
    travelNote:
      'Treat Guilin as a landscape region rather than only a city stop; Yangshuo often deserves at least one night.',
    season: 'April to October is green and photogenic; terraces vary by planting and harvest timing.',
    connections: 'Usually connected by flight from Xi’an, Chengdu, Beijing, or Shanghai.'
  },
  {
    slug: 'hangzhou',
    name: 'Hangzhou',
    region: 'East China',
    summary: 'West Lake, tea villages, temples, and an easy soft landing from Shanghai.',
    duration: '1-3 days',
    image: images.hangzhou,
    alt: 'Traditional lake scenery in Hangzhou',
    signature:
      'Hangzhou is the most elegant extension from Shanghai, built around West Lake, Longjing tea villages, temple hills, and slower lakefront stays.',
    bestFor: ['West Lake scenery', 'Tea culture', 'Romantic pacing'],
    highlights: ['West Lake', 'Lingyin Temple', 'Longjing tea village', 'Grand Canal area'],
    itinerary: [
      'Day 1: West Lake circuit, historic causeways, and lakeside dinner.',
      'Day 2: Lingyin Temple, tea fields, and a quieter village lunch.',
      'Day 3: Add Grand Canal museums or connect to Suzhou.'
    ],
    travelNote:
      'Hangzhou works best with an unhurried lake day rather than only a stop between trains.',
    season: 'Spring tea season and autumn lake weather are especially strong.',
    connections: 'Fast trains connect Hangzhou with Shanghai and Suzhou for compact eastern China routes.'
  },
  {
    slug: 'suzhou',
    name: 'Suzhou',
    region: 'East China',
    summary: 'Classical gardens, canals, silk heritage, and a refined day trip from Shanghai.',
    duration: '1-2 days',
    image: images.suzhou,
    alt: 'Classical garden and canal scenery in Suzhou',
    signature:
      'Suzhou is the refined Jiangnan counterpoint to Shanghai, known for classical gardens, canals, silk traditions, and compact old-town walks.',
    bestFor: ['Garden culture', 'Shanghai day trips', 'Canals'],
    highlights: ['Humble Administrator’s Garden', 'Tiger Hill', 'Pingjiang Road', 'Suzhou Museum'],
    itinerary: [
      'Day 1: Classical garden, Suzhou Museum, and Pingjiang Road canal walk.',
      'Day 2: Tiger Hill, silk culture, or a quieter water-town extension.',
      'Day trip: Pair one major garden with one canal district to avoid rushing.'
    ],
    travelNote:
      'Limit the number of gardens per day; detail and pacing matter more than checklist volume.',
    season: 'Spring blossoms and autumn weather are strongest, with summer gardens still lush.',
    connections: 'High-speed trains from Shanghai make Suzhou practical as a day trip or overnight.'
  },
  {
    slug: 'guangzhou',
    name: 'Guangzhou',
    region: 'South China',
    summary: 'Cantonese food, trade culture, riverfront evenings, and Greater Bay links.',
    duration: '1-3 days',
    image: images.guangzhou,
    alt: 'Pearl River view from Canton Tower in Guangzhou',
    signature:
      'Guangzhou is a practical southern gateway with Cantonese dining, wholesale and trade culture, heritage neighborhoods, and easy Greater Bay movement.',
    bestFor: ['Cantonese cuisine', 'Business travel', 'Bay Area routes'],
    highlights: ['Canton Tower', 'Chen Clan Ancestral Hall', 'Shamian Island', 'Pearl River night cruise'],
    itinerary: [
      'Day 1: Old Guangzhou heritage, dim sum, and Pearl River skyline.',
      'Day 2: Museums, market districts, and Cantonese dinner.',
      'Day 3: Connect to Shenzhen, Hong Kong, or Guilin.'
    ],
    travelNote:
      'Food is a core reason to stay overnight; restaurant timing and neighborhood choice shape the experience.',
    season: 'Late autumn to spring is easier for walking; summer is hot, humid, and storm-prone.',
    connections: 'Strong rail links to Shenzhen, Hong Kong, Guilin, and the wider Pearl River Delta.'
  },
  {
    slug: 'shenzhen',
    name: 'Shenzhen',
    region: 'South China',
    summary: 'Modern design, technology districts, theme parks, and Hong Kong connections.',
    duration: '1-3 days',
    image: images.shenzhen,
    alt: 'Shenzhen skyline seen from Meilin Reservoir',
    signature:
      'Shenzhen shows contemporary China at high speed: design districts, technology campuses, family attractions, and direct links to Hong Kong.',
    bestFor: ['Modern China', 'Tech visits', 'Hong Kong pairing'],
    highlights: ['OCT Loft', 'Nanshan skyline', 'Splendid China Folk Village', 'Shenzhen Bay'],
    itinerary: [
      'Day 1: Design district, city viewpoints, and Bay Area dining.',
      'Day 2: Theme parks, museums, or technology-focused visits.',
      'Day 3: Continue to Hong Kong or Guangzhou.'
    ],
    travelNote:
      'Shenzhen is less about ancient sights and more about urban energy, business context, and family-friendly stops.',
    season: 'Late autumn to spring has the most comfortable walking weather.',
    connections: 'Direct rail and border links connect Shenzhen with Hong Kong and Guangzhou.'
  },
  {
    slug: 'chongqing',
    name: 'Chongqing',
    region: 'Southwest China',
    summary: 'Mountain-city streets, hotpot, Yangtze cruises, and dramatic night views.',
    duration: '2-3 days',
    image: images.chongqing,
    alt: 'Chongqing skyline at night across the river',
    signature:
      'Chongqing is a layered mountain city where transit, night views, hotpot, river crossings, and Yangtze cruise departures become the attraction.',
    bestFor: ['Night views', 'Hotpot', 'Yangtze routes'],
    highlights: ['Hongya Cave area', 'Liziba monorail', 'Ciqikou old town', 'Yangtze cruise pier'],
    itinerary: [
      'Day 1: Mountain-city viewpoints, riverfront evening, and hotpot.',
      'Day 2: Old-town walk, urban transit sights, and museum or cave extension.',
      'Day 3: Start a Yangtze cruise or continue to Chengdu/Zhangjiajie.'
    ],
    travelNote:
      'Distances can feel short on a map but steep in practice; plan transfers carefully and leave buffer time.',
    season: 'Spring and autumn are easiest; summer can be very hot.',
    connections: 'High-speed rail links Chongqing and Chengdu, with flights onward to Zhangjiajie and east China.'
  },
  {
    slug: 'zhangjiajie',
    name: 'Zhangjiajie',
    region: 'Central China',
    summary: 'Sandstone pillars, glass bridges, cableways, and high-impact nature days.',
    duration: '2-3 days',
    image: images.zhangjiajie,
    alt: 'Sandstone pillars in Zhangjiajie Wulingyuan',
    signature:
      'Zhangjiajie is the itinerary’s high-drama nature stop, with Wulingyuan sandstone pillars, Tianmen Mountain, cableways, and weather-dependent viewpoints.',
    bestFor: ['Dramatic landscapes', 'Active travelers', 'Photography'],
    highlights: ['Wulingyuan', 'Tianmen Mountain', 'Glass bridge area', 'Bailong Elevator'],
    itinerary: [
      'Day 1: Wulingyuan core scenic area and pillar viewpoints.',
      'Day 2: Tianmen Mountain cableway, cliff walks, and city transfer.',
      'Day 3: Add Grand Canyon glass bridge or a slower weather-buffer day.'
    ],
    travelNote:
      'Weather changes the experience; a flexible extra half-day can save the mountain views.',
    season: 'Spring and autumn are popular; misty days can be atmospheric but require patience.',
    connections: 'Usually reached by flight or rail planning from Shanghai, Chengdu, Chongqing, or Xi’an.'
  },
  {
    slug: 'hong-kong',
    name: 'Hong Kong',
    region: 'Greater Bay Area',
    summary: 'Harbor skyline, efficient transit, island hikes, dim sum, and global flight links.',
    duration: '2-4 days',
    image: images.hongKong,
    alt: 'Hong Kong skyline and Victoria Harbour at dusk',
    signature:
      'Hong Kong is a global gateway and a strong final stop, combining harbor views, compact transit, Cantonese dining, island hikes, and easy international departures.',
    bestFor: ['International gateway', 'Harbor views', 'Food and shopping'],
    highlights: ['Victoria Harbour', 'The Peak', 'Central and Sheung Wan', 'Lantau or island walks'],
    itinerary: [
      'Day 1: Central, Star Ferry, Tsim Sha Tsui, and harbor light views.',
      'Day 2: The Peak, neighborhood food, and museum or market time.',
      'Day 3: Lantau, beach, or island hiking depending on flight timing.'
    ],
    travelNote:
      'Hong Kong is useful at the end of a southern China route, especially when flights and ferry or rail links matter.',
    season: 'October to December is generally clear and comfortable.',
    connections: 'Linked to Shenzhen and Guangzhou by high-speed rail, border crossings, and frequent flights.'
  }
]

export const attractions: Attraction[] = [
  {
    slug: 'great-wall',
    city: 'Beijing',
    name: 'Great Wall',
    summary: 'Best with a private transfer, flexible hiking pace, and a quieter restored section.',
    image: images.greatWall,
    alt: 'Great Wall of China on a green mountain ridge',
    large: true
  },
  {
    slug: 'terracotta-army',
    city: "Xi'an",
    name: 'Terracotta Army',
    summary: 'A guided archaeology visit that explains Qin imperial ambition, craft, and scale.',
    image: images.xian,
    alt: 'Terracotta warriors archaeological site'
  },
  {
    slug: 'the-bund',
    city: 'Shanghai',
    name: 'The Bund',
    summary: 'Shanghai’s riverfront contrast of historic architecture and Pudong skyline.',
    image: images.shanghai,
    alt: 'Shanghai city skyline'
  },
  {
    slug: 'panda-base',
    city: 'Chengdu',
    name: 'Panda Base',
    summary: 'An early-morning Chengdu anchor for giant pandas, red pandas, and conservation education.',
    image: images.chengdu,
    alt: 'Giant panda eating bamboo'
  },
  {
    slug: 'li-river',
    city: 'Guilin',
    name: 'Li River',
    summary: 'A slow landscape day through Guilin and Yangshuo karst scenery.',
    image: images.guilin,
    alt: 'River and mountain scenery'
  },
  {
    slug: 'west-lake',
    city: 'Hangzhou',
    name: 'West Lake',
    summary: 'A lake-and-hill cultural landscape shaped by poetry, causeways, temples, and gardens.',
    image: images.hangzhou,
    alt: 'Chinese lakeside garden scenery'
  }
]

export const attractionDetails: AttractionDetail[] = [
  {
    ...attractions[0],
    eyebrow: 'World heritage wall route',
    heroTitle: 'Great Wall near Beijing',
    intro:
      'The Great Wall works best as a half-day to full-day Beijing anchor: not only a photo stop, but a landscape route where watchtowers, ridgelines, and restored masonry explain frontier defense at human scale.',
    facts: [
      { label: 'Region', value: 'Beijing outskirts' },
      { label: 'Best pace', value: 'Half day to full day' },
      { label: 'Good for', value: 'First China trip, history, light hiking' }
    ],
    whyGo: [
      {
        title: 'Symbolic scale',
        text: 'UNESCO describes the Great Wall as an exceptional testimony to ancient Chinese civilizations and a site with incomparable symbolic significance.'
      },
      {
        title: 'Choose the section carefully',
        text: 'The visitor experience changes dramatically by section, crowd level, hiking grade, cable-car access, and transfer time from central Beijing.'
      },
      {
        title: 'Strong route anchor',
        text: 'It pairs naturally with imperial Beijing, but should not be squeezed into the same day as long palace or museum visits.'
      }
    ],
    visitFlow: [
      'Leave Beijing after breakfast with passports, water, and weather-ready layers.',
      'Use a quieter restored section when the group wants views and walking time instead of only a checkpoint photo.',
      'Return through a late lunch or a light neighborhood stop so the evening stays flexible.'
    ],
    practicalNotes: [
      'Avoid arrival day visits after a long-haul flight.',
      'Confirm cable-car, chairlift, or hiking expectations before quoting.',
      'Wind and steps matter more than distance on the map.'
    ],
    relatedSlugs: ['terracotta-army', 'the-bund', 'west-lake'],
    sources: [
      { label: 'UNESCO World Heritage Centre: The Great Wall', url: 'https://whc.unesco.org/en/list/438' }
    ],
    imageCredit: 'Image from Unsplash, loaded through the existing website media set.'
  },
  {
    ...attractions[1],
    eyebrow: 'Qin archaeology and imperial history',
    heroTitle: 'Terracotta Army',
    intro:
      'The Terracotta Army is the essential Xi’an visit for first-time travelers: a funerary army connected to the mausoleum of Qinshihuang, the first emperor of a unified China.',
    facts: [
      { label: 'Region', value: "Lintong District, Xi'an" },
      { label: 'Best pace', value: 'Half day with a guide' },
      { label: 'Good for', value: 'Ancient history, archaeology, classic routes' }
    ],
    whyGo: [
      {
        title: 'Archaeology with context',
        text: 'The site is more meaningful with interpretation of the pits, bronze works, imperial burial system, and Qin unification story.'
      },
      {
        title: 'World heritage significance',
        text: 'UNESCO highlights the technical and artistic qualities of the warriors, horses, and bronze funerary carts.'
      },
      {
        title: 'Compact route impact',
        text: 'Xi’an gives travelers a strong ancient-capital chapter between Beijing and Shanghai without requiring a long detour.'
      }
    ],
    visitFlow: [
      'Start with the main pit before crowds and fatigue build.',
      'Use the guide to compare ranks, faces, weapons, restoration methods, and burial layout.',
      'Pair the afternoon with Big Wild Goose Pagoda, the city wall, or a food-focused old-town evening.'
    ],
    practicalNotes: [
      'Do not treat the site as a quick photo stop.',
      'Indoor crowds can be heavy during holidays and peak group times.',
      'A guide adds real value because the viewing route alone does not explain the full mausoleum system.'
    ],
    relatedSlugs: ['great-wall', 'the-bund', 'li-river'],
    sources: [
      { label: 'UNESCO World Heritage Centre: Mausoleum of the First Qin Emperor', url: 'https://whc.unesco.org/en/list/441/' },
      { label: "Shaanxi Government: Emperor Qinshihuang's Mausoleum", url: 'https://en.shaanxi.gov.cn/ThisisShaanxi/202009/t20200908_1632370.html' }
    ],
    imageCredit: 'Image from Unsplash, loaded through the existing website media set.'
  },
  {
    ...attractions[2],
    eyebrow: 'Riverfront skyline and architecture',
    heroTitle: 'The Bund',
    intro:
      'The Bund is Shanghai’s cleanest visual story: historic riverfront architecture on one side of the Huangpu River and the modern Pudong skyline on the other.',
    facts: [
      { label: 'Region', value: 'Huangpu River, Shanghai' },
      { label: 'Best pace', value: 'Late afternoon to evening' },
      { label: 'Good for', value: 'Arrival gateway, architecture, night views' }
    ],
    whyGo: [
      {
        title: 'Past and present in one frame',
        text: 'The riverfront gives visitors an immediate read on Shanghai’s trading history, international architecture, and contemporary skyline.'
      },
      {
        title: 'Flexible planning value',
        text: 'It can be a light arrival walk, a guided architecture route, or an evening cruise depending on group energy.'
      },
      {
        title: 'Easy to pair',
        text: 'The Bund connects naturally with Nanjing Road, Yu Garden, Lujiazui views, and Huangpu River cruises.'
      }
    ],
    visitFlow: [
      'Arrive before sunset for architecture details and softer light.',
      'Cross or cruise the Huangpu River if the group wants skyline photography.',
      'Continue to Nanjing Road, Yu Garden area, or a dinner stop instead of overloading the evening.'
    ],
    practicalNotes: [
      'Night views are strong, but riverside wind can be cold in winter.',
      'Keep groups together at peak evening crowd times.',
      'Use official cruise or ferry options when adding river transport.'
    ],
    relatedSlugs: ['west-lake', 'li-river', 'great-wall'],
    sources: [
      { label: 'Shanghai tourism guide: The Bund', url: 'https://www.shanghaitourism.org/things-to-do-in-shanghai/the-bund-shanghai-guide/' },
      { label: 'Shanghai Municipal Culture and Tourism PDF: Huangpu River and Suzhou Creek', url: 'https://www.cnto.org.uk/wp-content/uploads/2025/04/1-%E9%BB%84%E6%B5%A6%E6%B1%9F%E4%B8%8E%E8%8B%8F%E5%B7%9E%E6%B2%B3_%E8%8B%B1%E6%96%87.pdf' }
    ],
    imageCredit: 'Image from Unsplash, loaded through the existing website media set.'
  },
  {
    ...attractions[3],
    eyebrow: 'Chengdu wildlife and conservation',
    heroTitle: 'Chengdu Panda Base',
    intro:
      'The Panda Base gives Chengdu an accessible wildlife anchor, combining giant panda viewing, red panda areas, research context, and an easy connection back into the city’s food and teahouse rhythm.',
    facts: [
      { label: 'Region', value: 'Chengdu, Sichuan' },
      { label: 'Best pace', value: 'Early morning half day' },
      { label: 'Good for', value: 'Families, wildlife, Chengdu city stays' }
    ],
    whyGo: [
      {
        title: 'Best early in the day',
        text: 'Morning visits usually fit panda activity patterns better and keep the afternoon free for Chengdu’s slower cultural pace.'
      },
      {
        title: 'Conservation context',
        text: 'The official Panda Base is centered on giant panda breeding, research, education, and public visitation.'
      },
      {
        title: 'Family-friendly anchor',
        text: 'It gives multi-generation groups a softer, lower-intensity contrast to palaces, walls, and archaeology sites.'
      }
    ],
    visitFlow: [
      'Enter early and prioritize panda areas before the route becomes busy.',
      'Keep walking distances and rest stops realistic for families.',
      'Return to central Chengdu for teahouse time, Sichuan cuisine, or a relaxed old-lane walk.'
    ],
    practicalNotes: [
      'Animal activity is not guaranteed at every enclosure or time slot.',
      'Plan for shade, water, and patient pacing in warm months.',
      'Do not build the day around direct panda contact experiences.'
    ],
    relatedSlugs: ['li-river', 'terracotta-army', 'west-lake'],
    sources: [
      { label: 'Chengdu Research Base of Giant Panda Breeding', url: 'https://www.panda.org.cn/en' },
      { label: 'Chengdu Giant Panda Breeding Research Foundation', url: 'https://www.pandafoundation.cn/en/AboutUs/BInformation/' }
    ],
    imageCredit: 'Image from Unsplash, loaded through the existing website media set.'
  },
  {
    ...attractions[4],
    eyebrow: 'Karst river landscape',
    heroTitle: 'Li River',
    intro:
      'The Li River is the landscape break in a classic China itinerary, moving travelers from city touring into Guilin and Yangshuo’s karst peaks, riverside villages, and slower countryside rhythm.',
    facts: [
      { label: 'Region', value: 'Guilin to Yangshuo' },
      { label: 'Best pace', value: 'Full-day landscape route' },
      { label: 'Good for', value: 'Photography, nature, family-friendly pacing' }
    ],
    whyGo: [
      {
        title: 'Distinct scenery shift',
        text: 'Karst peaks and river bends create a strong visual contrast after Beijing, Xi’an, Shanghai, or Chengdu city days.'
      },
      {
        title: 'Route not just city',
        text: 'The best experience usually treats Guilin and Yangshuo as a region, not only a city hotel stop.'
      },
      {
        title: 'Flexible activity levels',
        text: 'Cruises, viewpoints, light cycling, village routes, and countryside stays can be adjusted by age and mobility.'
      }
    ],
    visitFlow: [
      'Use the river route as the spine of the day, with weather and water-level buffers.',
      'End in Yangshuo when the group wants a softer countryside evening.',
      'Add Longji rice terraces or a slower village day when the trip can spare another night.'
    ],
    practicalNotes: [
      'Weather changes the mood and photography conditions.',
      'Yangshuo often deserves at least one night for a less rushed route.',
      'Confirm boat, vehicle, and luggage logistics before quoting.'
    ],
    relatedSlugs: ['west-lake', 'panda-base', 'the-bund'],
    sources: [
      { label: 'Guilin Li River Scenic Area official site', url: 'https://en.liriver.com.cn/page/article/zjlj.ljjj' },
      { label: 'UNESCO Tentative List: The Lijiang River Scenic Zone at Guilin', url: 'https://whc.unesco.org/en/tentativelists/108/' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the existing website media set.'
  },
  {
    ...attractions[5],
    eyebrow: 'Poetic lake and garden culture',
    heroTitle: 'West Lake',
    intro:
      'West Lake is Hangzhou’s defining cultural landscape, where causeways, islands, temples, pagodas, gardens, and hills turn a lake circuit into one of East China’s most graceful route extensions.',
    facts: [
      { label: 'Region', value: 'Hangzhou, Zhejiang' },
      { label: 'Best pace', value: 'One unhurried day' },
      { label: 'Good for', value: 'Shanghai extensions, gardens, tea culture' }
    ],
    whyGo: [
      {
        title: 'World heritage landscape',
        text: 'UNESCO notes that West Lake has inspired poets, scholars, and artists since the 9th century and influenced garden design beyond China.'
      },
      {
        title: 'Elegant Shanghai pairing',
        text: 'Fast rail links make Hangzhou a refined east-China extension after Shanghai’s urban intensity.'
      },
      {
        title: 'Better when unhurried',
        text: 'A lake walk, temple visit, tea village, and dinner work better than trying to see every named view.'
      }
    ],
    visitFlow: [
      'Start with a causeway or lakeside section before traffic and heat build.',
      'Pair the lake with Lingyin Temple or Longjing tea village based on group interest.',
      'Keep time open for slow photography, weather changes, and a lakeside meal.'
    ],
    practicalNotes: [
      'Avoid turning the lake into a checklist of too many stops.',
      'Spring tea season and autumn weather are especially strong.',
      'Use Hangzhou as an overnight when travelers want a softer eastern-China pace.'
    ],
    relatedSlugs: ['the-bund', 'li-river', 'panda-base'],
    sources: [
      { label: 'UNESCO World Heritage Centre: West Lake Cultural Landscape of Hangzhou', url: 'https://whc.unesco.org/en/list/1334/' },
      { label: 'Hangzhou official city portal: West Lake', url: 'https://ywhz.hangzhou.com.cn/en/hssj/content/content_6265838.htm' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the existing website media set.'
  }
]

export const attractionBySlug = Object.fromEntries(
  attractionDetails.map((attraction) => [attraction.slug, attraction])
) as Record<string, AttractionDetail>

export const trips: Trip[] = [
  {
    name: 'Beijing-Xi’an-Shanghai',
    summary:
      '8-day heritage route with Beijing, high-speed rail to Xi’an, Shanghai city touring, English-speaking guides, and 4-star hotels.',
    meta: '8 days · From USD 892',
    productSlug: 'beijing-xian-shanghai',
    image: images.greatWall,
    alt: 'Great Wall landscape for the Beijing Xi’an Shanghai route',
    facts: [
      { label: 'Length', value: '8 days' },
      { label: 'Route', value: 'BJS-XIY-SHA' },
      { label: 'From', value: 'USD 892' }
    ]
  },
  {
    name: 'Classic First-Time China Tour',
    summary: "Beijing, Xi'an, Guilin, and Shanghai with private guides and rail or flight planning.",
    meta: '10 days · From USD 2,380',
    featured: true,
    productSlug: 'classic-first-time-china',
    image: images.greatWall,
    alt: 'Great Wall landscape for a classic China route',
    facts: [
      { label: 'Length', value: '10 days' },
      { label: 'Style', value: 'Private' },
      { label: 'From', value: 'USD 2,380' }
    ]
  },
  {
    name: "Beijing + Xi'an Heritage Tour",
    summary: 'Great Wall, Forbidden City, hutongs, high-speed rail, and Terracotta Army.',
    meta: '6 days · From USD 1,420',
    productSlug: 'beijing-xian-heritage'
  },
  {
    name: 'Shanghai City Break',
    summary: 'Architecture walks, food tours, museums, Suzhou or Hangzhou side trips.',
    meta: '5 days · From CNY 3,299',
    productSlug: 'shanghai-discovery'
  },
  {
    name: 'Chengdu Panda & Food Tour',
    summary: 'Panda base, teahouse culture, hotpot, Leshan Buddha, and relaxed pacing.',
    meta: '10 days · From CNY 4,780',
    productSlug: 'chengdu-chongqing-zhangjiajie'
  },
  {
    name: 'Guilin Landscape Escape',
    summary: 'Li River cruise, Yangshuo countryside, easy cycling, and boutique stays.',
    meta: '5 days · From USD 1,280',
    productSlug: 'guilin-yangshuo-landscape'
  },
  {
    name: 'Zhangjiajie Nature Adventure',
    summary: 'National forest park, glass bridge, cableways, and scenic transfer planning.',
    meta: '9 days · From USD 2,370',
    productSlug: 'beijing-zhangjiajie-shanghai'
  },
  {
    name: 'Business + Leisure Custom Trip',
    summary: 'Meetings, interpreters, city transfers, short cultural add-ons, and invoices.',
    meta: 'Flexible · Custom quote',
    productSlug: 'business-leisure-custom'
  },
  {
    name: 'Private Family Tour',
    summary: 'Kid-friendly guides, sensible hotel locations, slower days, and food support.',
    meta: '8-12 days · Custom quote',
    productSlug: 'private-family-china'
  }
]

export const beijingXianShanghaiProduct: TourProduct = {
  slug: 'beijing-xian-shanghai',
  name: 'Beijing-Xi’an-Shanghai',
  eyebrow: '8-day escorted China heritage tour',
  duration: '8 days / 7 nights',
  route: 'Beijing · Xi’an · Shanghai · Beijing',
  heroImage: images.greatWall,
  heroAlt: 'Great Wall near Beijing on a green mountain ridge',
  summary:
    'A compact first-time China route for international groups, covering imperial Beijing, the Terracotta Warriors in Xi’an, and classic Shanghai city sights with guides, private vehicle service, high-speed rail, and 4-star hotel options.',
  galleryTitle: 'Imperial Beijing, ancient Xi’an, and riverfront Shanghai.',
  quoteSubject: "Beijing-Xi'an-Shanghai tour quote",
  sourceNote:
    'Benchmark route inspired by first-time China triangle products and current Tengxuan group quotation logic.',
  highlights: [
    'Walk Tiananmen Square, the Forbidden City, hutongs, Temple of Heaven, and Juyongguan Great Wall.',
    'Travel Beijing to Xi’an and Shanghai back to Beijing by second-class high-speed rail.',
    'Visit the Terracotta Warriors, Muslim Quarter, The Bund, Yuyuan Garden, Tianzifang, and Huangpu River.',
    'Use English-speaking local guides and private air-conditioned vehicles throughout listed touring days.'
  ],
  facts: [
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Beijing' },
    { label: 'Hotels', value: '4-star or similar' },
    { label: 'Guide', value: 'English-speaking local guides' },
    { label: 'Transport', value: 'Private vehicle + high-speed rail' },
    { label: 'Best for', value: 'Inbound leisure groups' }
  ],
  gallery: [
    {
      title: 'Summer Palace',
      city: 'Beijing',
      image: summerPalaceImage,
      alt: 'Summer Palace lakeside pavilions in Beijing',
      featured: true
    },
    {
      title: 'Olympic Park',
      city: 'Beijing',
      image: olympicParkImage,
      alt: 'Bird’s Nest and Water Cube illuminated at Olympic Park'
    },
    {
      title: 'Forbidden City',
      city: 'Beijing',
      image: forbiddenCityImage,
      alt: 'Forbidden City palace roofs and entrance courtyard'
    },
    {
      title: 'Palace Detail',
      city: 'Beijing',
      image: palaceRoofDetailImage,
      alt: 'Colorful traditional palace roof detail in Beijing'
    },
    {
      title: 'Temple of Heaven',
      city: 'Beijing',
      image: templeOfHeavenImage,
      alt: 'Temple of Heaven at sunset in Beijing'
    },
    {
      title: 'Terracotta Warriors',
      city: 'Xi’an',
      image: terracottaWarriorsImage,
      alt: 'Terracotta Warriors archaeological pit in Xi’an'
    },
    {
      title: 'Shanghai Skyline',
      city: 'Shanghai',
      image: shanghaiSkylineImage,
      alt: 'Shanghai skyline at night along the Huangpu River'
    }
  ],
  days: [
    {
      day: 'Day 1',
      city: 'Beijing',
      meals: '- / - / -',
      title: 'Arrival, Tiananmen Square, National Museum, Wangfujing',
      summary:
        'Arrive in Beijing, meet the local English-speaking guide, transfer to the hotel for rest after 2pm, then visit Tiananmen Square, the National Museum, and Wangfujing Street at night.',
      sights: ['Tiananmen Square', 'National Museum', 'Wangfujing Street']
    },
    {
      day: 'Day 2',
      city: 'Beijing',
      meals: 'B / - / -',
      title: 'Great Wall, Summer Palace, Olympic Park',
      summary:
        'Full-day tour to Juyongguan Great Wall, Summer Palace excluding cruise, and an outside visit to Olympic Park including the Bird’s Nest and Water Cube.',
      sights: ['Juyongguan Great Wall', 'Summer Palace', 'Bird’s Nest', 'Water Cube']
    },
    {
      day: 'Day 3',
      city: 'Beijing',
      meals: 'B / - / -',
      title: 'Forbidden City and Hutong walking tour',
      summary:
        'Visit the symbolic heart of Beijing at the Forbidden City and continue with a hutong walking tour through traditional residential lanes.',
      sights: ['Forbidden City', 'Hutong walking tour'],
      note: 'Passport is required for Forbidden City and Tiananmen Square visits. Forbidden City closes every Monday except national holidays.'
    },
    {
      day: 'Day 4',
      city: 'Beijing to Xi’an',
      meals: 'B / - / -',
      title: 'Temple of Heaven, Hongqiao Market, high-speed rail to Xi’an',
      summary:
        'Visit Temple of Heaven and Hongqiao Market, then take high-speed train G57 or similar from Beijing to Xi’an. On arrival, visit the Muslim Quarter before hotel transfer.',
      sights: ['Temple of Heaven', 'Hongqiao Market', 'G57 or similar train', 'Muslim Quarter']
    },
    {
      day: 'Day 5',
      city: 'Xi’an',
      meals: 'B / - / -',
      title: 'Terracotta Warriors and Big Wild Goose Pagoda',
      summary:
        'Tour the Terracotta Warriors, excluding electric car, and visit Big Wild Goose Pagoda, the landmark connected with Master Xuanzang.',
      sights: ['Terracotta Warriors', 'Big Wild Goose Pagoda']
    },
    {
      day: 'Day 6',
      city: 'Xi’an to Shanghai',
      meals: 'B / - / -',
      title: 'Flight to Shanghai, The Bund, Nanjing Road, Huangpu River cruise',
      summary:
        'Transfer to the airport for the Xi’an to Shanghai flight. After arrival, visit The Bund and Nanjing Road, then take an evening cruise on the Huangpu River.',
      sights: ['The Bund', 'Nanjing Road', 'Huangpu River cruise']
    },
    {
      day: 'Day 7',
      city: 'Shanghai to Beijing',
      meals: 'B / - / -',
      title: 'Shanghai Museum, Yuyuan Garden, old quarter, Tianzifang',
      summary:
        'Visit Shanghai Museum, Yuyuan Garden, the old quarter, and Tianzifang Market, then take high-speed train G26 or similar from Shanghai back to Beijing.',
      sights: ['Shanghai Museum', 'Yuyuan Garden', 'Old quarter', 'Tianzifang Market', 'G26 or similar train']
    },
    {
      day: 'Day 8',
      city: 'Departure',
      meals: 'B / - / -',
      title: 'International departure',
      summary: 'After breakfast, transfer for the international departure flight home and end service.',
      sights: ['Airport transfer']
    }
  ],
  hotels: [
    { city: 'Beijing', hotel: '5L Hotel' },
    { city: 'Xi’an', hotel: 'Huanyu Metropark Hotel, Xi’an High-speed Railway North Station' },
    { city: 'Shanghai', hotel: 'Baixia Pagoda Hotel' }
  ],
  prices: [
    { group: '4-6 pax', price: 'EUR 1,560', basis: 'Per person, based on double/twin share' },
    { group: '4-6 pax single supplement', price: 'EUR 360', basis: 'Per person supplement' },
    { group: '10 pax', price: 'USD 1,200', basis: 'Per person, based on twin/double share' },
    { group: '20 pax', price: 'USD 974', basis: 'Per person, based on twin/double share' },
    { group: '30 pax', price: 'USD 892', basis: 'Per person, based on twin/double share' },
    { group: 'USD single supplement', price: 'USD 460', basis: 'Per person supplement' }
  ],
  inclusions: [
    '7 nights’ accommodation including daily breakfast at hotel',
    'First gate entrance fees to sites listed in the program',
    'English-speaking local guide during the tour',
    'Private air-conditioned vehicle',
    'Second-class high-speed train tickets for Beijing-Xi’an and Shanghai-Beijing'
  ],
  exclusions: [
    'Tips to guide and driver',
    'Personal expenses',
    'International arrival and departure flights',
    'Other service not mentioned'
  ]
}

const productGallery = {
  beijingXianShanghai: beijingXianShanghaiProduct.gallery,
  classic: [
    {
      title: 'Great Wall',
      city: 'Beijing',
      image: images.greatWall,
      alt: 'Great Wall landscape near Beijing',
      featured: true
    },
    {
      title: 'Terracotta Warriors',
      city: 'Xi’an',
      image: terracottaWarriorsImage,
      alt: 'Terracotta Warriors archaeological pit in Xi’an'
    },
    {
      title: 'Li River',
      city: 'Guilin',
      image: images.guilin,
      alt: 'Karst mountains and river scenery in Guilin'
    },
    {
      title: 'Shanghai Skyline',
      city: 'Shanghai',
      image: shanghaiSkylineImage,
      alt: 'Shanghai skyline at night along the Huangpu River'
    }
  ],
  eastChina: [
    {
      title: 'Shanghai Skyline',
      city: 'Shanghai',
      image: shanghaiSkylineImage,
      alt: 'Shanghai skyline at night along the Huangpu River',
      featured: true
    },
    {
      title: 'Suzhou Gardens',
      city: 'Suzhou',
      image: images.suzhou,
      alt: 'Classical garden and canal scenery in Suzhou'
    },
    {
      title: 'West Lake',
      city: 'Hangzhou',
      image: images.hangzhou,
      alt: 'West Lake scenery in Hangzhou'
    },
    {
      title: 'The Bund',
      city: 'Shanghai',
      image: images.shanghai,
      alt: 'Shanghai city skyline along the Huangpu River'
    }
  ],
  southwestNature: [
    {
      title: 'Panda Base',
      city: 'Chengdu',
      image: images.chengdu,
      alt: 'Giant panda eating bamboo in Chengdu',
      featured: true
    },
    {
      title: 'Mountain City',
      city: 'Chongqing',
      image: images.chongqing,
      alt: 'Chongqing skyline at night across the river'
    },
    {
      title: 'Avatar Mountains',
      city: 'Zhangjiajie',
      image: images.zhangjiajie,
      alt: 'Sandstone pillars in Zhangjiajie Wulingyuan'
    }
  ]
}

export const tourProducts: TourProduct[] = [
  beijingXianShanghaiProduct,
  {
    slug: 'classic-first-time-china',
    name: 'Classic First-Time China Tour',
    eyebrow: '10-day private China introduction',
    duration: '10 days / 9 nights',
    route: 'Beijing · Xi’an · Guilin · Shanghai',
    heroImage: images.greatWall,
    heroAlt: 'Great Wall landscape for a classic China route',
    summary:
      'A private first-visit route built for overseas leisure clients who want headline heritage, one landscape chapter, and a polished Shanghai finish without forced shopping stops.',
    galleryTitle: 'World heritage, karst scenery, and a soft Shanghai finish.',
    quoteSubject: 'Classic First-Time China tour quote',
    sourceNote:
      'Benchmarked against ChinaTour.com classic multi-city products and China triangle pricing tiers; final pricing depends on hotel class and transport season.',
    highlights: [
      'Use Beijing for imperial landmarks and a Great Wall day before continuing by high-speed rail.',
      'Add Xi’an for the Terracotta Warriors, city wall, and Silk Road food culture.',
      'Break up city touring with Guilin and Yangshuo landscape time before Shanghai.',
      'Keep a private guide and private vehicle on listed touring days for family and small-group comfort.'
    ],
    facts: [
      { label: 'Starts', value: 'Beijing' },
      { label: 'Ends', value: 'Shanghai' },
      { label: 'Hotels', value: '4-star or 5-star options' },
      { label: 'Guide', value: 'Private local guides' },
      { label: 'Transport', value: 'Rail + domestic flight' },
      { label: 'Best for', value: 'First-time private travelers' }
    ],
    gallery: productGallery.classic,
    days: [
      {
        day: 'Day 1',
        city: 'Beijing',
        meals: '- / - / -',
        title: 'Arrival and hotel transfer',
        summary: 'Meet the guide at the airport, transfer to the hotel, and keep the evening light for jet-lag recovery.',
        sights: ['Airport pickup', 'Hotel check-in', 'Optional Wangfujing walk']
      },
      {
        day: 'Day 2',
        city: 'Beijing',
        meals: 'B / L / -',
        title: 'Forbidden City and hutongs',
        summary: 'Visit Tiananmen Square, the Forbidden City, Jingshan viewpoint, and a hutong neighborhood with local context.',
        sights: ['Tiananmen Square', 'Forbidden City', 'Jingshan Park', 'Hutong walk'],
        note: 'Passport information is required for advance palace ticketing.'
      },
      {
        day: 'Day 3',
        city: 'Beijing',
        meals: 'B / L / -',
        title: 'Great Wall and Temple of Heaven',
        summary: 'Tour a Great Wall section with a comfortable walking pace, then return for Temple of Heaven or Summer Palace.',
        sights: ['Great Wall', 'Temple of Heaven', 'Private transfer']
      },
      {
        day: 'Day 4',
        city: 'Beijing to Xi’an',
        meals: 'B / - / -',
        title: 'High-speed rail to Xi’an',
        summary: 'Take high-speed rail to Xi’an, then explore the Ancient City Wall and Muslim Quarter.',
        sights: ['High-speed rail', 'Ancient City Wall', 'Muslim Quarter']
      },
      {
        day: 'Day 5',
        city: 'Xi’an',
        meals: 'B / L / -',
        title: 'Terracotta Warriors',
        summary: 'Spend the day with a guide at the Terracotta Warriors and add Big Wild Goose Pagoda or Shaanxi History Museum.',
        sights: ['Terracotta Warriors', 'Big Wild Goose Pagoda', 'Optional museum']
      },
      {
        day: 'Day 6',
        city: 'Xi’an to Guilin',
        meals: 'B / - / -',
        title: 'Fly to Guilin',
        summary: 'Fly to Guilin and use the afternoon for an easy riverside walk or cave visit.',
        sights: ['Domestic flight', 'Reed Flute Cave', 'Riverside walk']
      },
      {
        day: 'Day 7',
        city: 'Guilin and Yangshuo',
        meals: 'B / L / -',
        title: 'Li River cruise',
        summary: 'Cruise the Li River to Yangshuo, then explore countryside scenery with a gentle cycling or buggy option.',
        sights: ['Li River cruise', 'Yangshuo countryside', 'Karst viewpoints']
      },
      {
        day: 'Day 8',
        city: 'Guilin to Shanghai',
        meals: 'B / - / -',
        title: 'Fly to Shanghai',
        summary: 'Transfer to Shanghai and leave room for a Bund evening walk after arrival.',
        sights: ['Domestic flight', 'The Bund', 'Nanjing Road']
      },
      {
        day: 'Day 9',
        city: 'Shanghai',
        meals: 'B / L / -',
        title: 'Old and new Shanghai',
        summary: 'Visit Yu Garden, the old quarter, Shanghai Museum or French Concession, then finish with skyline views.',
        sights: ['Yu Garden', 'Old quarter', 'Former French Concession', 'Pudong skyline']
      },
      {
        day: 'Day 10',
        city: 'Shanghai',
        meals: 'B / - / -',
        title: 'Departure',
        summary: 'Private transfer to the airport for international departure.',
        sights: ['Airport transfer']
      }
    ],
    hotels: [
      { city: 'Beijing', hotel: 'Mercure / Novotel / similar 4-star option' },
      { city: 'Xi’an', hotel: 'Grand Dynasty Culture / Metropark / similar' },
      { city: 'Guilin/Yangshuo', hotel: 'Lijiang Waterfall / Yangshuo resort option' },
      { city: 'Shanghai', hotel: 'Central 4-star hotel near metro or Bund access' }
    ],
    prices: [
      { group: 'Private 2 pax', price: 'From USD 2,680', basis: 'Per person, double/twin share, low-season guide price' },
      { group: 'Private 4 pax', price: 'From USD 2,380', basis: 'Per person, double/twin share' },
      { group: 'Private 8 pax', price: 'From USD 1,980', basis: 'Per person, double/twin share' },
      { group: 'Single supplement', price: 'On request', basis: 'Varies by hotel level and season' }
    ],
    inclusions: [
      '9 nights’ accommodation with daily breakfast',
      'Private local guides and private vehicles on listed touring days',
      'First gate entrance fees for listed attractions',
      'Second-class high-speed rail ticket Beijing-Xi’an',
      'Economy domestic flights Xi’an-Guilin and Guilin-Shanghai'
    ],
    exclusions: [
      'International flights',
      'China visa fee if applicable',
      'Travel insurance',
      'Guide and driver gratuities',
      'Meals and activities not listed as included'
    ]
  },
  {
    slug: 'beijing-xian-heritage',
    name: "Beijing + Xi'an Heritage Tour",
    eyebrow: '6-day ancient capitals route',
    duration: '6 days / 5 nights',
    route: 'Beijing · Xi’an',
    heroImage: terracottaWarriorsImage,
    heroAlt: 'Terracotta Warriors archaeological pit in Xi’an',
    summary:
      'A compact ancient-capitals product for travelers who want the Great Wall, Forbidden City, and Terracotta Warriors with rail logistics handled end to end.',
    galleryTitle: 'Two ancient capitals with a fast rail connection.',
    quoteSubject: "Beijing Xi'an Heritage tour quote",
    sourceNote:
      'Benchmarked against ChinaTour.com ancient-capital and Terracotta Army products; priced as a private route with no shopping stops.',
    highlights: [
      'Cover the most recognizable Beijing and Xi’an heritage sites in under one week.',
      'Use high-speed rail instead of a domestic flight for a clear, sellable logistics story.',
      'Keep arrival and departure cities flexible for overseas flight planning.',
      'Offer a lower-entry China product for partners that do not need Shanghai or Guilin.'
    ],
    facts: [
      { label: 'Starts', value: 'Beijing' },
      { label: 'Ends', value: 'Xi’an' },
      { label: 'Hotels', value: '4-star or similar' },
      { label: 'Guide', value: 'Private local guides' },
      { label: 'Transport', value: 'Private vehicle + rail' },
      { label: 'Best for', value: 'Short heritage trips' }
    ],
    gallery: [
      productGallery.classic[0],
      beijingXianShanghaiProduct.gallery[2],
      beijingXianShanghaiProduct.gallery[4],
      beijingXianShanghaiProduct.gallery[5]
    ],
    days: [
      {
        day: 'Day 1',
        city: 'Beijing',
        meals: '- / - / -',
        title: 'Arrival in Beijing',
        summary: 'Airport pickup and hotel transfer with optional evening neighborhood walk.',
        sights: ['Airport pickup', 'Hotel check-in']
      },
      {
        day: 'Day 2',
        city: 'Beijing',
        meals: 'B / L / -',
        title: 'Forbidden City and hutongs',
        summary: 'Visit Tiananmen Square, Forbidden City, Jingshan, and a hutong area.',
        sights: ['Tiananmen Square', 'Forbidden City', 'Jingshan Park', 'Hutong walk']
      },
      {
        day: 'Day 3',
        city: 'Beijing',
        meals: 'B / L / -',
        title: 'Great Wall and Temple of Heaven',
        summary: 'Tour the Great Wall and return to Beijing for Temple of Heaven or Summer Palace.',
        sights: ['Great Wall', 'Temple of Heaven', 'Summer Palace option']
      },
      {
        day: 'Day 4',
        city: 'Beijing to Xi’an',
        meals: 'B / - / -',
        title: 'High-speed rail and city wall',
        summary: 'Take high-speed rail to Xi’an and visit the Ancient City Wall and Muslim Quarter.',
        sights: ['High-speed rail', 'Ancient City Wall', 'Muslim Quarter']
      },
      {
        day: 'Day 5',
        city: 'Xi’an',
        meals: 'B / L / -',
        title: 'Terracotta Warriors',
        summary: 'Visit the Terracotta Warriors with a guide and add Big Wild Goose Pagoda or museum time.',
        sights: ['Terracotta Warriors', 'Big Wild Goose Pagoda']
      },
      {
        day: 'Day 6',
        city: 'Xi’an',
        meals: 'B / - / -',
        title: 'Departure',
        summary: 'Airport or rail-station transfer for onward travel.',
        sights: ['Departure transfer']
      }
    ],
    hotels: [
      { city: 'Beijing', hotel: '4-star central Beijing hotel or similar' },
      { city: 'Xi’an', hotel: '4-star city-center or rail-access hotel or similar' }
    ],
    prices: [
      { group: 'Private 2 pax', price: 'From USD 1,680', basis: 'Per person, double/twin share' },
      { group: 'Private 4 pax', price: 'From USD 1,420', basis: 'Per person, double/twin share' },
      { group: 'Private 8 pax', price: 'From USD 1,180', basis: 'Per person, double/twin share' }
    ],
    inclusions: [
      '5 nights’ accommodation with daily breakfast',
      'Private guide and private vehicle on listed touring days',
      'First gate entrance fees for listed attractions',
      'Second-class high-speed rail ticket Beijing-Xi’an'
    ],
    exclusions: [
      'International flights',
      'Meals not listed',
      'Travel insurance',
      'Guide and driver gratuities',
      'Personal expenses'
    ]
  },
  {
    slug: 'shanghai-discovery',
    name: '5-Day Shanghai Discovery',
    eyebrow: '5-day city and water-town break',
    duration: '5 days / 4 nights',
    route: 'Shanghai · Suzhou or water town',
    heroImage: shanghaiSkylineImage,
    heroAlt: 'Shanghai skyline at night along the Huangpu River',
    summary:
      'A lower-friction Shanghai product for travelers who want Bund views, old-city texture, a Jiangnan garden or water-town day, and enough free time for food and shopping.',
    galleryTitle: 'Urban Shanghai with a Jiangnan side trip.',
    quoteSubject: 'Shanghai Discovery tour quote',
    sourceNote:
      'Benchmarked against HiChinaTravel Shanghai products showing 5-day Shanghai routes from CNY 3,199-3,299 and 3-day Shanghai routes from CNY 2,298.',
    highlights: [
      'Use Shanghai as the easy arrival gateway for first-time visitors.',
      'Add Suzhou, Zhujiajiao, or Hangzhou depending on available time and guest profile.',
      'Keep evenings open for skyline, dining, and shopping rather than over-scheduling.',
      'Create a price-accessible product for regional travelers and short-stay clients.'
    ],
    facts: [
      { label: 'Starts', value: 'Shanghai' },
      { label: 'Ends', value: 'Shanghai' },
      { label: 'Hotels', value: '3-star to 4-star options' },
      { label: 'Guide', value: 'Local guide on tour days' },
      { label: 'Transport', value: 'Private vehicle / train' },
      { label: 'Best for', value: 'Short city breaks' }
    ],
    gallery: productGallery.eastChina,
    days: [
      {
        day: 'Day 1',
        city: 'Shanghai',
        meals: '- / - / -',
        title: 'Arrival and Bund evening',
        summary: 'Airport pickup, hotel check-in, and an optional Bund and Nanjing Road evening walk.',
        sights: ['Airport pickup', 'The Bund', 'Nanjing Road']
      },
      {
        day: 'Day 2',
        city: 'Shanghai',
        meals: 'B / L / -',
        title: 'Old Shanghai and riverfront skyline',
        summary: 'Visit Yu Garden, the old quarter, Shanghai Museum or French Concession, and Pudong skyline viewpoints.',
        sights: ['Yu Garden', 'Old quarter', 'Shanghai Museum', 'Pudong skyline']
      },
      {
        day: 'Day 3',
        city: 'Suzhou or water town',
        meals: 'B / L / -',
        title: 'Jiangnan garden day trip',
        summary: 'Choose a Suzhou classical garden, museum, and canal walk, or a slower water-town route.',
        sights: ['Suzhou Garden', 'Pingjiang Road', 'Water-town option']
      },
      {
        day: 'Day 4',
        city: 'Shanghai',
        meals: 'B / - / -',
        title: 'Flexible city day',
        summary: 'Reserve the day for Disneyland, food tour, shopping, museums, or a Hangzhou upgrade.',
        sights: ['Flexible touring', 'Optional Disneyland', 'Optional Hangzhou']
      },
      {
        day: 'Day 5',
        city: 'Shanghai',
        meals: 'B / - / -',
        title: 'Departure',
        summary: 'Private transfer to airport or rail station.',
        sights: ['Departure transfer']
      }
    ],
    hotels: [
      { city: 'Shanghai', hotel: 'Central 3-star or 4-star hotel by selected price tier' }
    ],
    prices: [
      { group: 'Value tier', price: 'From CNY 3,299', basis: 'Per person, double/twin share, based on HiChinaTravel-style short-route benchmark' },
      { group: '3-day express option', price: 'From CNY 2,298', basis: 'Per person guide price for shorter Shanghai-only version' },
      { group: 'Private upgrade', price: 'On request', basis: 'Varies by hotel, guide language, and side-trip choice' }
    ],
    inclusions: [
      '4 nights’ accommodation with breakfast',
      'Local guide and vehicle on listed touring days',
      'First gate entrance fees for listed attractions',
      'Airport or rail-station transfers'
    ],
    exclusions: [
      'International or domestic flights',
      'Theme park tickets unless selected',
      'Meals not listed',
      'Guide and driver gratuities',
      'Personal expenses'
    ]
  },
  {
    slug: 'chengdu-chongqing-zhangjiajie',
    name: 'Chengdu, Chongqing & Zhangjiajie Journey',
    eyebrow: '10-day pandas, mountain city, and Avatar landscapes',
    duration: '10 days / 9 nights',
    route: 'Chengdu · Chongqing · Zhangjiajie',
    heroImage: images.zhangjiajie,
    heroAlt: 'Sandstone pillars in Zhangjiajie Wulingyuan',
    summary:
      'A high-impact western and central China route combining pandas, Sichuan food, Chongqing night views, and Zhangjiajie mountain scenery.',
    galleryTitle: 'Pandas, hotpot, river lights, and sandstone peaks.',
    quoteSubject: 'Chengdu Chongqing Zhangjiajie tour quote',
    sourceNote:
      'Benchmarked against HiChinaTravel recommended 10-day Chengdu, Chongqing and Zhangjiajie products listed from CNY 4,780-5,080.',
    highlights: [
      'Start with Chengdu pandas and a relaxed Sichuan culture day.',
      'Use Chongqing for hotpot, mountain-city streets, and Yangtze riverfront night views.',
      'Give Zhangjiajie two scenic days to reduce weather risk.',
      'Works as a differentiated product beyond the Beijing-Xi’an-Shanghai classic route.'
    ],
    facts: [
      { label: 'Starts', value: 'Chengdu' },
      { label: 'Ends', value: 'Zhangjiajie' },
      { label: 'Hotels', value: '3-star to 4-star options' },
      { label: 'Guide', value: 'Local guides' },
      { label: 'Transport', value: 'Rail / flight / private vehicle' },
      { label: 'Best for', value: 'Nature and food travelers' }
    ],
    gallery: productGallery.southwestNature,
    days: [
      {
        day: 'Day 1',
        city: 'Chengdu',
        meals: '- / - / -',
        title: 'Arrival in Chengdu',
        summary: 'Airport pickup and hotel check-in with optional evening hotpot arrangement.',
        sights: ['Airport pickup', 'Optional hotpot']
      },
      {
        day: 'Day 2',
        city: 'Chengdu',
        meals: 'B / L / -',
        title: 'Panda Base and teahouse culture',
        summary: 'Visit the Panda Base early, then continue to People’s Park teahouse and old-lane neighborhoods.',
        sights: ['Panda Base', 'People’s Park', 'Kuanzhai Alley']
      },
      {
        day: 'Day 3',
        city: 'Chengdu',
        meals: 'B / L / -',
        title: 'Leshan or Dujiangyan extension',
        summary: 'Choose Leshan Giant Buddha, Dujiangyan, or Qingcheng Mountain according to pace and season.',
        sights: ['Leshan Giant Buddha option', 'Dujiangyan option', 'Qingcheng Mountain option']
      },
      {
        day: 'Day 4',
        city: 'Chengdu to Chongqing',
        meals: 'B / - / -',
        title: 'High-speed rail to Chongqing',
        summary: 'Transfer by high-speed rail to Chongqing, then explore riverfront viewpoints and night scenery.',
        sights: ['High-speed rail', 'Hongya Cave area', 'Riverfront night views']
      },
      {
        day: 'Day 5',
        city: 'Chongqing',
        meals: 'B / L / -',
        title: 'Mountain city touring',
        summary: 'Visit Ciqikou, Liziba monorail viewpoint, and local food streets with careful transfer timing.',
        sights: ['Ciqikou', 'Liziba monorail', 'Hotpot dinner option']
      },
      {
        day: 'Day 6',
        city: 'Chongqing to Zhangjiajie',
        meals: 'B / - / -',
        title: 'Transfer to Zhangjiajie',
        summary: 'Travel to Zhangjiajie by flight or rail plan, then check in near the scenic area.',
        sights: ['Flight or rail transfer', 'Scenic-area hotel check-in']
      },
      {
        day: 'Day 7',
        city: 'Zhangjiajie',
        meals: 'B / L / -',
        title: 'Wulingyuan scenic area',
        summary: 'Tour the sandstone pillar viewpoints, Bailong Elevator area, and forest park highlights.',
        sights: ['Wulingyuan', 'Bailong Elevator', 'Sandstone pillar viewpoints']
      },
      {
        day: 'Day 8',
        city: 'Zhangjiajie',
        meals: 'B / L / -',
        title: 'Tianmen Mountain',
        summary: 'Use the cableway and cliff-walk route for Tianmen Mountain, adjusting for weather and operations.',
        sights: ['Tianmen Mountain', 'Cableway', 'Cliff walk']
      },
      {
        day: 'Day 9',
        city: 'Zhangjiajie',
        meals: 'B / - / -',
        title: 'Weather buffer or glass bridge',
        summary: 'Reserve a flexible day for the glass bridge, Grand Canyon, or a weather-recovery mountain route.',
        sights: ['Grand Canyon option', 'Glass bridge option', 'Flexible scenic buffer']
      },
      {
        day: 'Day 10',
        city: 'Zhangjiajie',
        meals: 'B / - / -',
        title: 'Departure',
        summary: 'Transfer to airport or rail station for onward travel.',
        sights: ['Departure transfer']
      }
    ],
    hotels: [
      { city: 'Chengdu', hotel: 'Central Chengdu 3-star or 4-star option' },
      { city: 'Chongqing', hotel: 'Yuzhong / Jiefangbei area hotel or similar' },
      { city: 'Zhangjiajie', hotel: 'Wulingyuan scenic-area hotel or city hotel by route plan' }
    ],
    prices: [
      { group: 'Group value tier', price: 'From CNY 4,780', basis: 'Per person benchmark from comparable 10-day HiChinaTravel product' },
      { group: 'Premium value tier', price: 'From CNY 5,080', basis: 'Per person benchmark for upgraded version' },
      { group: 'Private upgrade', price: 'On request', basis: 'Depends on flight/rail plan, hotel class, and guide language' }
    ],
    inclusions: [
      '9 nights’ accommodation with breakfast',
      'Local guide service on listed touring days',
      'Transfers between hotel, station, airport, and listed sights',
      'First gate entrance fees for listed attractions',
      'Domestic transport quoted by final route plan'
    ],
    exclusions: [
      'International flights',
      'Meals not listed',
      'Cableway or elevator upgrades unless specified in final quote',
      'Travel insurance',
      'Guide and driver gratuities'
    ]
  },
  {
    slug: 'beijing-zhangjiajie-shanghai',
    name: 'China + Nature: Beijing, Zhangjiajie & Shanghai',
    eyebrow: '9-day classic city and nature route',
    duration: '9 days / 8 nights',
    route: 'Beijing · Zhangjiajie · Shanghai',
    heroImage: images.zhangjiajie,
    heroAlt: 'Sandstone pillars in Zhangjiajie Wulingyuan',
    summary:
      'A first-time China alternative that swaps Xi’an for Zhangjiajie, pairing imperial Beijing and modern Shanghai with a dramatic mountain chapter.',
    galleryTitle: 'Classic gateways with a high-drama nature centerpiece.',
    quoteSubject: 'Beijing Zhangjiajie Shanghai tour quote',
    sourceNote:
      'Benchmarked against ChinaTour.travel public listing for Beijing-Zhangjiajie-Shanghai 9-day route from USD 2,370 per person and ChinaTour.com nature positioning.',
    highlights: [
      'Keep Beijing and Shanghai as recognizable international gateways.',
      'Use Zhangjiajie as the nature hook for travelers who have seen standard heritage routes.',
      'Reserve two mountain days to protect the experience from weather.',
      'Position as a higher-value private route for photography and active travelers.'
    ],
    facts: [
      { label: 'Starts', value: 'Beijing' },
      { label: 'Ends', value: 'Shanghai' },
      { label: 'Hotels', value: '4-star or similar' },
      { label: 'Guide', value: 'Private local guides' },
      { label: 'Transport', value: 'Flights + private vehicle' },
      { label: 'Best for', value: 'Nature-focused first-timers' }
    ],
    gallery: [
      productGallery.classic[0],
      productGallery.southwestNature[2],
      productGallery.eastChina[0],
      beijingXianShanghaiProduct.gallery[2]
    ],
    days: [
      {
        day: 'Day 1',
        city: 'Beijing',
        meals: '- / - / -',
        title: 'Arrival in Beijing',
        summary: 'Airport pickup and hotel transfer.',
        sights: ['Airport pickup', 'Hotel check-in']
      },
      {
        day: 'Day 2',
        city: 'Beijing',
        meals: 'B / L / -',
        title: 'Forbidden City and old Beijing',
        summary: 'Visit Tiananmen Square, Forbidden City, and a hutong neighborhood.',
        sights: ['Tiananmen Square', 'Forbidden City', 'Hutong walk']
      },
      {
        day: 'Day 3',
        city: 'Beijing',
        meals: 'B / L / -',
        title: 'Great Wall day',
        summary: 'Tour the Great Wall and Temple of Heaven or Summer Palace.',
        sights: ['Great Wall', 'Temple of Heaven', 'Summer Palace option']
      },
      {
        day: 'Day 4',
        city: 'Beijing to Zhangjiajie',
        meals: 'B / - / -',
        title: 'Fly to Zhangjiajie',
        summary: 'Transfer to airport, fly to Zhangjiajie, and check in near the scenic area.',
        sights: ['Domestic flight', 'Scenic-area hotel']
      },
      {
        day: 'Day 5',
        city: 'Zhangjiajie',
        meals: 'B / L / -',
        title: 'Wulingyuan scenic area',
        summary: 'Explore forest park routes, sandstone pillar viewpoints, and major scenic lifts or shuttles.',
        sights: ['Wulingyuan', 'Yuanjiajie', 'Bailong Elevator option']
      },
      {
        day: 'Day 6',
        city: 'Zhangjiajie',
        meals: 'B / L / -',
        title: 'Tianmen Mountain',
        summary: 'Use Tianmen Mountain cableway and cliff routes, adjusting timing around weather and queues.',
        sights: ['Tianmen Mountain', 'Cableway', 'Cliff walk']
      },
      {
        day: 'Day 7',
        city: 'Zhangjiajie to Shanghai',
        meals: 'B / - / -',
        title: 'Fly to Shanghai',
        summary: 'Fly to Shanghai and leave the evening open for a Bund walk.',
        sights: ['Domestic flight', 'The Bund']
      },
      {
        day: 'Day 8',
        city: 'Shanghai',
        meals: 'B / L / -',
        title: 'Shanghai city tour',
        summary: 'Visit Yu Garden, the old quarter, Former French Concession, and Pudong skyline areas.',
        sights: ['Yu Garden', 'Old quarter', 'Former French Concession', 'Pudong skyline']
      },
      {
        day: 'Day 9',
        city: 'Shanghai',
        meals: 'B / - / -',
        title: 'Departure',
        summary: 'Private airport transfer and departure.',
        sights: ['Airport transfer']
      }
    ],
    hotels: [
      { city: 'Beijing', hotel: '4-star central Beijing hotel or similar' },
      { city: 'Zhangjiajie', hotel: 'Wulingyuan scenic-area 4-star option or similar' },
      { city: 'Shanghai', hotel: '4-star central Shanghai hotel or similar' }
    ],
    prices: [
      { group: 'Private 2 pax', price: 'From USD 2,670', basis: 'Per person, double/twin share' },
      { group: 'Private 4 pax', price: 'From USD 2,370', basis: 'Per person, double/twin share benchmark' },
      { group: 'Private 8 pax', price: 'From USD 2,080', basis: 'Per person, double/twin share' }
    ],
    inclusions: [
      '8 nights’ accommodation with breakfast',
      'Private guides and vehicles on listed touring days',
      'First gate entrance fees for listed attractions',
      'Economy domestic flights quoted by route plan',
      'Airport and station transfers'
    ],
    exclusions: [
      'International flights',
      'Meals not listed',
      'Optional scenic elevators or cableways unless specified',
      'Travel insurance',
      'Guide and driver gratuities'
    ]
  },
  {
    slug: 'guilin-yangshuo-landscape',
    name: 'Guilin Landscape Escape',
    eyebrow: '5-day Li River and Yangshuo countryside',
    duration: '5 days / 4 nights',
    route: 'Guilin · Yangshuo · Longji option',
    heroImage: images.guilin,
    heroAlt: 'Karst peaks and river scenery near Guilin',
    summary:
      'A scenery-first southern China add-on with Li River cruising, Yangshuo countryside, and an optional rice-terrace day for travelers who want a softer pace.',
    galleryTitle: 'Karst peaks, river cruising, and countryside pacing.',
    quoteSubject: 'Guilin Yangshuo Landscape tour quote',
    sourceNote:
      'Benchmarked as a Tengxuan add-on product aligned with common ChinaTour.com Guilin/Yangshuo city-package logic.',
    highlights: [
      'Best used as an extension after Beijing-Xi’an or before Shanghai.',
      'Give Yangshuo at least one night instead of treating it as only a transfer point.',
      'Offer low-impact cycling, buggy, cooking, or family-friendly village options.',
      'Add Longji rice terraces when weather, season, and guest mobility fit.'
    ],
    facts: [
      { label: 'Starts', value: 'Guilin' },
      { label: 'Ends', value: 'Guilin' },
      { label: 'Hotels', value: 'Boutique or 4-star' },
      { label: 'Guide', value: 'Private local guide' },
      { label: 'Transport', value: 'Private vehicle + cruise' },
      { label: 'Best for', value: 'Scenery and family trips' }
    ],
    gallery: [
      productGallery.classic[2],
      {
        title: 'Yangshuo Countryside',
        city: 'Yangshuo',
        image: images.guilin,
        alt: 'Karst mountain countryside in Yangshuo'
      }
    ],
    days: [
      {
        day: 'Day 1',
        city: 'Guilin',
        meals: '- / - / -',
        title: 'Arrival in Guilin',
        summary: 'Transfer to hotel and take a light riverside walk after arrival.',
        sights: ['Airport pickup', 'Riverside walk']
      },
      {
        day: 'Day 2',
        city: 'Guilin to Yangshuo',
        meals: 'B / L / -',
        title: 'Li River cruise',
        summary: 'Cruise the Li River to Yangshuo and enjoy a relaxed countryside evening.',
        sights: ['Li River cruise', 'Yangshuo old town']
      },
      {
        day: 'Day 3',
        city: 'Yangshuo',
        meals: 'B / L / -',
        title: 'Countryside touring',
        summary: 'Choose cycling, buggy touring, cooking class, bamboo rafting, or village visits.',
        sights: ['Countryside route', 'Cooking class option', 'Bamboo rafting option']
      },
      {
        day: 'Day 4',
        city: 'Longji or Guilin',
        meals: 'B / L / -',
        title: 'Rice terraces or Guilin city',
        summary: 'Add Longji rice terraces if season and mobility fit, or return for Guilin cave and viewpoint touring.',
        sights: ['Longji option', 'Reed Flute Cave', 'City viewpoints']
      },
      {
        day: 'Day 5',
        city: 'Guilin',
        meals: 'B / - / -',
        title: 'Departure',
        summary: 'Transfer to airport or rail station.',
        sights: ['Departure transfer']
      }
    ],
    hotels: [
      { city: 'Guilin', hotel: 'Guilin 4-star riverside hotel or similar' },
      { city: 'Yangshuo', hotel: 'Yangshuo boutique countryside hotel or similar' }
    ],
    prices: [
      { group: 'Private 2 pax', price: 'From USD 1,480', basis: 'Per person, double/twin share' },
      { group: 'Private 4 pax', price: 'From USD 1,280', basis: 'Per person, double/twin share' },
      { group: 'Private 8 pax', price: 'From USD 1,080', basis: 'Per person, double/twin share' }
    ],
    inclusions: [
      '4 nights’ accommodation with breakfast',
      'Private guide and vehicle on listed touring days',
      'Li River cruise ticket',
      'First gate entrance fees for listed attractions'
    ],
    exclusions: [
      'Flights or rail tickets to and from Guilin',
      'Meals not listed',
      'Optional activities not selected in final quote',
      'Travel insurance',
      'Guide and driver gratuities'
    ]
  },
  {
    slug: 'business-leisure-custom',
    name: 'Business + Leisure Custom Trip',
    eyebrow: 'Flexible MICE and business-travel add-on',
    duration: 'Flexible / custom',
    route: 'Beijing · Shanghai · Guangzhou · Shenzhen · custom cities',
    heroImage: images.shanghai,
    heroAlt: 'Shanghai city skyline along the Huangpu River',
    summary:
      'A custom product for business delegations, meetings, interpreters, supplier visits, and short cultural add-ons around core commercial travel.',
    galleryTitle: 'Business logistics with optional cultural time.',
    quoteSubject: 'Business leisure custom trip quote',
    sourceNote:
      'Benchmarked against ChinaTour.com corporate travel positioning and Tengxuan group enterprise travel capabilities.',
    highlights: [
      'Plan hotels, transfers, interpreters, invoices, and meeting logistics around the business agenda.',
      'Add half-day or one-day cultural modules without disrupting meetings.',
      'Support Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, and other commercial hubs.',
      'Build quotation around group size, vehicle standard, interpreter level, and documentation needs.'
    ],
    facts: [
      { label: 'Starts', value: 'Custom' },
      { label: 'Ends', value: 'Custom' },
      { label: 'Hotels', value: 'Corporate contract options' },
      { label: 'Guide', value: 'Guide / interpreter' },
      { label: 'Transport', value: 'Private vehicle' },
      { label: 'Best for', value: 'Delegations and MICE' }
    ],
    gallery: productGallery.eastChina,
    days: [
      {
        day: 'Module 1',
        city: 'Arrival city',
        meals: '- / - / -',
        title: 'Arrival, transfer, and briefing',
        summary: 'Airport pickup, hotel check-in, and route briefing for business or delegation leaders.',
        sights: ['Airport pickup', 'Hotel check-in', 'Briefing']
      },
      {
        day: 'Module 2',
        city: 'Business hub',
        meals: 'B / - / -',
        title: 'Meetings and interpreter support',
        summary: 'Arrange vehicle standby, interpreter service, meeting transfers, and meal reservations.',
        sights: ['Meeting transfer', 'Interpreter service', 'Meal reservation']
      },
      {
        day: 'Module 3',
        city: 'Business hub',
        meals: 'B / L / -',
        title: 'Cultural add-on',
        summary: 'Add a short city tour, museum, food walk, or river cruise around the meeting schedule.',
        sights: ['City tour option', 'Museum option', 'Food walk option']
      }
    ],
    hotels: [
      { city: 'Custom', hotel: 'Corporate hotel tier selected by budget, city, and invoice requirements' }
    ],
    prices: [
      { group: 'Half-day guide module', price: 'Custom quote', basis: 'Guide language, city, and hours confirmed before quote' },
      { group: 'Vehicle and interpreter day', price: 'Custom quote', basis: 'Vehicle class, working hours, and interpreter level' },
      { group: 'Delegation package', price: 'Custom quote', basis: 'Hotel, meals, meeting support, and sightseeing combined' }
    ],
    inclusions: [
      'Route planning and supplier coordination',
      'Private transfers and vehicle standby by final quote',
      'Guide or interpreter service by selected language tier',
      'Hotel and meal arrangement support'
    ],
    exclusions: [
      'Air tickets unless requested',
      'Venue rental and third-party meeting costs',
      'Personal expenses',
      'Unlisted overtime charges',
      'Travel insurance'
    ]
  },
  {
    slug: 'private-family-china',
    name: 'Private Family China Tour',
    eyebrow: '8-12 day family-friendly private itinerary',
    duration: '8-12 days / custom',
    route: 'Beijing · Xi’an · Shanghai · Chengdu or Guilin option',
    heroImage: images.chengdu,
    heroAlt: 'Giant panda eating bamboo in Chengdu',
    summary:
      'A private family route with slower pacing, sensible hotel locations, child-friendly guide style, food support, and optional panda or landscape modules.',
    galleryTitle: 'Classic China adjusted for family pace.',
    quoteSubject: 'Private Family China tour quote',
    sourceNote:
      'Benchmarked against private/custom China tour positioning on ChinaTour.com and HiChinaTravel tailor-made trip messaging.',
    highlights: [
      'Limit daily checklists so children and older family members do not burn out.',
      'Use central hotels and private vehicles to reduce transfer friction.',
      'Add pandas, cooking, calligraphy, cycling, or theme-park modules where appropriate.',
      'Keep meal planning flexible for allergies, spice tolerance, and picky eaters.'
    ],
    facts: [
      { label: 'Starts', value: 'Custom' },
      { label: 'Ends', value: 'Custom' },
      { label: 'Hotels', value: 'Family-room options' },
      { label: 'Guide', value: 'Family-friendly guides' },
      { label: 'Transport', value: 'Private vehicle + rail/flight' },
      { label: 'Best for', value: 'Families and multi-gen groups' }
    ],
    gallery: productGallery.classic,
    days: [
      {
        day: 'Day 1',
        city: 'Arrival city',
        meals: '- / - / -',
        title: 'Arrival and recovery',
        summary: 'Airport pickup, hotel check-in, and no heavy sightseeing on arrival day.',
        sights: ['Airport pickup', 'Hotel check-in']
      },
      {
        day: 'Days 2-3',
        city: 'Beijing',
        meals: 'B / L / -',
        title: 'Beijing highlights at family pace',
        summary: 'Tour Forbidden City, hutongs, Great Wall, and one hands-on cultural module.',
        sights: ['Forbidden City', 'Great Wall', 'Hutong walk', 'Cultural activity']
      },
      {
        day: 'Days 4-5',
        city: 'Xi’an or Chengdu',
        meals: 'B / L / -',
        title: 'Ancient capital or panda module',
        summary: 'Choose Xi’an for Terracotta Warriors or Chengdu for pandas, food, and relaxed culture.',
        sights: ['Terracotta Warriors option', 'Panda Base option', 'Food experience']
      },
      {
        day: 'Days 6-8',
        city: 'Shanghai or Guilin',
        meals: 'B / L / -',
        title: 'Easy finish',
        summary: 'Finish with Shanghai city comfort, Disneyland option, or Guilin/Yangshuo landscape time.',
        sights: ['Shanghai option', 'Disneyland option', 'Guilin option']
      },
      {
        day: 'Final day',
        city: 'Departure city',
        meals: 'B / - / -',
        title: 'Departure',
        summary: 'Private transfer to airport or rail station.',
        sights: ['Departure transfer']
      }
    ],
    hotels: [
      { city: 'Custom', hotel: 'Central family-friendly hotel or family-room option by city' }
    ],
    prices: [
      { group: 'Family of 3-4', price: 'Custom quote', basis: 'Built around child age, bedding needs, and route length' },
      { group: 'Multi-generation 6-8', price: 'Custom quote', basis: 'Private vehicle, hotel tier, and activity selection' },
      { group: 'Family-room supplement', price: 'On request', basis: 'Varies significantly by city and season' }
    ],
    inclusions: [
      'Private route planning and day-by-day pacing design',
      'Family-friendly local guides and private transfers',
      'Hotel selection support for bedding and location',
      'Listed attraction tickets by final quote'
    ],
    exclusions: [
      'International flights',
      'Unlisted meals and activities',
      'Theme park tickets unless selected',
      'Travel insurance',
      'Guide and driver gratuities'
    ]
  }
]

export const productBySlug = Object.fromEntries(tourProducts.map((product) => [product.slug, product])) as Record<
  string,
  TourProduct
>
