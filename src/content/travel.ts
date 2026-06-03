export type City = {
  name: string
  summary: string
  duration?: string
  image?: string
  alt?: string
}

export type Attraction = {
  city: string
  name: string
  summary?: string
  image: string
  alt: string
  large?: boolean
}

export type Trip = {
  name: string
  summary: string
  meta: string
  featured?: boolean
  image?: string
  alt?: string
  facts?: Array<{ label: string; value: string }>
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
    'https://commons.wikimedia.org/wiki/Special:FilePath/1_zhangjiajie_huangshizhai_wulingyuan_panorama_2012.jpg?width=900'
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

export const cities: City[] = [
  {
    name: 'Beijing',
    summary: 'Imperial history, hutongs, the Forbidden City, and Great Wall day trips.',
    duration: '3-5 days',
    image: images.greatWall,
    alt: 'Great Wall near Beijing'
  },
  {
    name: 'Shanghai',
    summary: 'Art deco streets, skyline views, design hotels, and fast onward rail links.',
    duration: '2-4 days',
    image: images.shanghai,
    alt: 'Shanghai skyline along the Huangpu River'
  },
  {
    name: "Xi'an",
    summary: 'Ancient capital energy, city walls, Muslim Quarter food, and the Terracotta Army.',
    duration: '2-3 days',
    image: images.xian,
    alt: "Terracotta warriors in Xi'an"
  },
  {
    name: 'Chengdu',
    summary: 'Pandas, teahouses, spicy food, and relaxed Sichuan culture.',
    duration: '2-4 days',
    image: images.chengdu,
    alt: 'Giant panda resting in Chengdu'
  },
  {
    name: 'Guilin',
    summary: 'Karst peaks, Li River cruises, cycling routes, and countryside stays.',
    duration: '2-4 days',
    image: images.guilin,
    alt: 'Karst peaks and bamboo forest near Guilin'
  },
  {
    name: 'Hangzhou',
    summary: 'West Lake, tea villages, temples, and an easy soft landing from Shanghai.',
    duration: '1-3 days',
    image: images.hangzhou,
    alt: 'Traditional lake scenery in Hangzhou'
  },
  {
    name: 'Guangzhou',
    summary: 'Cantonese food, trade culture, riverfront evenings, and Greater Bay links.',
    duration: '1-3 days',
    image: images.guangzhou,
    alt: 'Pearl River view from Canton Tower in Guangzhou'
  },
  {
    name: 'Shenzhen',
    summary: 'Modern design, technology districts, theme parks, and Hong Kong connections.',
    duration: '1-3 days',
    image: images.shenzhen,
    alt: 'Shenzhen skyline seen from Meilin Reservoir'
  },
  {
    name: 'Chongqing',
    summary: 'Mountain-city streets, hotpot, Yangtze cruises, and dramatic night views.',
    duration: '2-3 days',
    image: images.chongqing,
    alt: 'Chongqing skyline at night across the river'
  },
  {
    name: 'Zhangjiajie',
    summary: 'Sandstone pillars, glass bridges, cableways, and high-impact nature days.',
    duration: '2-3 days',
    image: images.zhangjiajie,
    alt: 'Sandstone pillars in Zhangjiajie Wulingyuan'
  }
]

export const attractions: Attraction[] = [
  {
    city: 'Beijing',
    name: 'Great Wall',
    summary: 'Best with a private transfer, flexible hiking pace, and a quieter restored section.',
    image: images.greatWall,
    alt: 'Great Wall of China on a green mountain ridge',
    large: true
  },
  {
    city: "Xi'an",
    name: 'Terracotta Army',
    image: images.xian,
    alt: 'Terracotta warriors archaeological site'
  },
  {
    city: 'Shanghai',
    name: 'The Bund',
    image: images.shanghai,
    alt: 'Shanghai city skyline'
  },
  {
    city: 'Chengdu',
    name: 'Panda Base',
    image: images.chengdu,
    alt: 'Giant panda eating bamboo'
  },
  {
    city: 'Guilin',
    name: 'Li River',
    image: images.guilin,
    alt: 'River and mountain scenery'
  },
  {
    city: 'Hangzhou',
    name: 'West Lake',
    image: images.hangzhou,
    alt: 'Chinese lakeside garden scenery'
  }
]

export const trips: Trip[] = [
  {
    name: 'Classic First-Time China Tour',
    summary: "Beijing, Xi'an, Guilin, and Shanghai with private guides and rail or flight planning.",
    meta: '10 days · From USD 2,380',
    featured: true,
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
    meta: '6 days · From USD 1,420'
  },
  {
    name: 'Shanghai City Break',
    summary: 'Architecture walks, food tours, museums, Suzhou or Hangzhou side trips.',
    meta: '4 days · From USD 980'
  },
  {
    name: 'Chengdu Panda & Food Tour',
    summary: 'Panda base, teahouse culture, hotpot, Leshan Buddha, and relaxed pacing.',
    meta: '5 days · From USD 1,180'
  },
  {
    name: 'Guilin Landscape Escape',
    summary: 'Li River cruise, Yangshuo countryside, easy cycling, and boutique stays.',
    meta: '5 days · From USD 1,280'
  },
  {
    name: 'Zhangjiajie Nature Adventure',
    summary: 'National forest park, glass bridge, cableways, and scenic transfer planning.',
    meta: '5 days · From USD 1,360'
  },
  {
    name: 'Business + Leisure Custom Trip',
    summary: 'Meetings, interpreters, city transfers, short cultural add-ons, and invoices.',
    meta: 'Flexible · Custom quote'
  },
  {
    name: 'Private Family Tour',
    summary: 'Kid-friendly guides, sensible hotel locations, slower days, and food support.',
    meta: '8-12 days · Custom quote'
  }
]
