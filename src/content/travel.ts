import forbiddenCityImage from '@/assets/products/beijing-xian-shanghai/forbidden-city.webp'
import chengqiangImage from '@/assets/products/beijing-xian-shanghai/chengqiang.png'
import longmenGrottoesImage from '@/assets/products/beijing-xian-shanghai/longmen-grottoes.jpg'
import olympicParkImage from '@/assets/products/beijing-xian-shanghai/olympic-park.webp'
import palaceRoofDetailImage from '@/assets/products/beijing-xian-shanghai/palace-roof-detail.webp'
import shanghaiBundImage from '@/assets/products/beijing-xian-shanghai/waitan.png'
import shanghaiSkylineImage from '@/assets/products/beijing-xian-shanghai/shanghai-skyline.webp'
import summerPalaceImage from '@/assets/products/beijing-xian-shanghai/summer-palace.webp'
import terracottaWarriorsImage from '@/assets/products/beijing-xian-shanghai/terracotta-warriors.webp'
import guilinRiverPanoramaImage from '@/assets/products/guilin/guilin-river-panorama.png'
import guilinRiverCruiseImage from '@/assets/products/guilin/guilin-river-cruise-new.png'
import guilinRiverSunsetImage from '@/assets/products/guilin/guilin-river-sunset-new.png'
import hangzhouWestLakeOneImage from '@/assets/products/hangzhou/xihu1.webp'
import hangzhouWestLakeTwoImage from '@/assets/products/hangzhou/xihu2.jpg'
import suzhouGalleryOneImage from '@/assets/products/suzhou/su1.png'
import suzhouGalleryTwoImage from '@/assets/products/suzhou/su2.webp'
import suzhouGalleryThreeImage from '@/assets/products/suzhou/su3.webp'
import zhangjiajieGalleryTwoImage from '@/assets/products/zhangjiajie/zhang.jpg'
import zhangjiajieGalleryThreeImage from '@/assets/products/zhangjiajie/zhang3.webp'
import lhasaGalleryTwoImage from '@/assets/products/lhasa/xizang.jpg'
import lhasaGalleryThreeImage from '@/assets/products/lhasa/xizang2.webp'
import dujiangyanImage from '@/assets/products/chengdu/doujiangyan.jpeg'
import jiuzhaigouImage from '@/assets/products/chengdu/jiuzhaigou.jpeg'
import sanxingduiImage from '@/assets/products/chengdu/sanxingdui.webp'
import chongqingLocalOneImage from '@/assets/products/chongqing/chongqing.jpeg'
import chongqingLocalTwoImage from '@/assets/products/chongqing/chongqing2.webp'

export type City = {
  slug: string
  name: string
  region: string
  summary: string
  duration?: string
  image?: string
  alt?: string
  signature: string
  story?: string[]
  bestFor: string[]
  highlights: string[]
  itinerary: string[]
  travelNote: string
  season: string
  connections: string
}

export type CityGalleryImage = {
  image: string
  alt: string
  title: string
  fit?: 'cover' | 'contain'
  position?: string
}

export type CityClassicSpot = {
  name: string
  summary: string
  image: string
  alt: string
  fit?: 'cover' | 'contain'
  zh?: {
    name: string
    summary: string
    alt?: string
  }
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
  destinations?: string[]
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
  forbiddenCity: forbiddenCityImage,
  summerPalace: summerPalaceImage,
  templeOfHeaven: 'https://yj-travel.s3.amazonaws.com/company/temple-of-heaven-no-people.webp',
  beijingHutong:
    'https://yj-travel.s3.amazonaws.com/company/beijing-hutong-courtyard-lane.webp',
  greatWall:
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1100&q=82',
  shanghaiBundNight: shanghaiSkylineImage,
  theBund: shanghaiBundImage,
  shanghai:
    'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=82',
  terracottaWarriors:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Terracotta%20Army%2C%20View%20of%20Pit%201.jpg?width=1100',
  bigWildGoosePagoda:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Dayan%20%22Big%20Wild%20Goose%22%20Pagoda%20%289911465686%29.jpg?width=1100',
  xianCityWall: chengqiangImage,
  datangEverbrightCity:
    'https://ctdsb.clouddiffuse.xyz/1200X900_pub_cb20231214103425990030.jpg_0a308fd6a5ca4098b70fa38b4de54880.jpg',
  xian:
    'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=900&q=82',
  longmenGrottoes: longmenGrottoesImage,
  shaolinTemple:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Shaolin%20Temple%20%2810199695405%29.jpg?width=1100',
  whiteHorseTemple:
    'https://commons.wikimedia.org/wiki/Special:FilePath/27471-Luoyang%2C%20White%20Horse%20Temple.jpg?width=1100',
  chengdu:
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=900&q=82',
  dujiangyan: dujiangyanImage,
  jiuzhaigou: jiuzhaigouImage,
  sanxingdui: sanxingduiImage,
  guilin:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Karst%20peaks%20and%20bamboo%20forest.jpg?width=900',
  hangzhou:
    'https://commons.wikimedia.org/wiki/Special:FilePath/West_Lake_IMG_8795_leifeng_pagoda.jpg?width=900',
  chongqing:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Skyline_At_Night.png?width=900',
  hongyaCave: chongqingLocalOneImage,
  threeGorges: chongqingLocalTwoImage,
  chongqingHotpot:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing%20Hot%20Pot.jpg?width=1100',
  zhangjiajie:
    'https://commons.wikimedia.org/wiki/Special:FilePath/1_zhangjiajie_huangshizhai_wulingyuan_panorama_2012.jpg?width=900',
  lhasa: 'https://commons.wikimedia.org/wiki/Special:FilePath/Potala.jpg?width=900',
  dunhuang:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Mogao%20Caves%20%2854378046034%29.jpg?width=900',
  mogaoCaveGrottoes:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Mogao%20Caves%20%2854377840476%29.jpg?width=1100',
  crescentMoonSpring:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Mingsha%20Mountain%20and%20Crescent%20Moon%20Spring%20%2854532735143%29.jpg?width=1100',
  suzhou:
    'https://english.suzhou.gov.cn/szdoc/uploadfile/gl_13758/sqjs_13759/csmp_13773/sjwhyc_13779/201611/W020161109367321819174.jpg',
  suzhouTigerHill:
    'https://english.suzhou.gov.cn/szsenglish/sz5ajjq/201611/9b1909ce503e4597849ea06d8a755c1a/images/14b18b6957f447edbef5334a4aff018f.jpg',
  suzhouPingjiangRoad:
    'https://english.suzhou.gov.cn/szdoc/uploadfile/gl_13758/sqjs_13759/csmp_13773/zglswhmj_13778/201611/W020161130387089347496.jpg',
  suzhouCanalPagoda:
    'https://english.suzhou.gov.cn/szsenglish/szdtcyb/202411/066c4903706b4f6f934636a3e0bb2357/images/fb49eb22943d444bacfbadb25bd5dabf.png',
  hongKong:
    'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1100&q=82',
  hongKongDisneyland:
    'https://commons.wikimedia.org/wiki/Special:FilePath/20201019%20Castle%20of%20Magical%20Dreams.jpg?width=1100'
}

export const cityGalleryBySlug: Record<string, CityGalleryImage[]> = {
  beijing: [
    { image: images.forbiddenCity, alt: 'Forbidden City palace halls in Beijing', title: 'Forbidden City axis' },
    { image: images.greatWall, alt: 'Great Wall of China on a green mountain ridge', title: 'Great Wall day route' },
    { image: images.templeOfHeaven, alt: 'Temple of Heaven in Beijing', title: 'Temple of Heaven morning' },
    { image: summerPalaceImage, alt: 'Summer Palace lake and pavilion in Beijing', title: 'Summer Palace lake scenery' }
  ],
  shanghai: [
    { image: images.shanghai, alt: 'Shanghai city skyline', title: 'Pudong skyline' },
    { image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1100&q=82', alt: 'Historic Shanghai street architecture', title: 'Old city and lane walks' }
  ],
  xian: [
    { image: images.terracottaWarriors, alt: "Terracotta warriors in Xi'an", title: 'Terracotta Army' },
    { image: images.bigWildGoosePagoda, alt: "Big Wild Goose Pagoda in Xi'an", title: 'Big Wild Goose Pagoda' },
    { image: images.datangEverbrightCity, alt: "Great Tang All Day Mall and Big Wild Goose Pagoda in Xi'an", title: 'Great Tang All Day Mall' }
  ],
  luoyang: [
    { image: images.longmenGrottoes, alt: 'Longmen Grottoes Buddhist caves near Luoyang', title: 'Longmen Grottoes' },
    { image: images.shaolinTemple, alt: 'Shaolin Temple mountain gate in Henan', title: 'Shaolin Temple' },
    { image: images.whiteHorseTemple, alt: 'White Horse Temple complex in Luoyang', title: 'White Horse Temple' }
  ],
  chengdu: [
    { image: images.chengdu, alt: 'Giant panda resting in Chengdu', title: 'Panda Base' },
    { image: images.dujiangyan, alt: 'Dujiangyan Irrigation System near Chengdu', title: 'Dujiangyan' },
    { image: images.jiuzhaigou, alt: 'Blue lake and forest scenery in Jiuzhaigou Valley', title: 'Jiuzhaigou' },
    { image: images.sanxingdui, alt: 'Sanxingdui Museum exterior near Chengdu', title: 'Sanxingdui', fit: 'contain' }
  ],
  guilin: [
    { image: guilinRiverPanoramaImage, alt: 'Li River bend and karst peaks near Guilin at sunrise', title: 'Li River panorama' },
    { image: guilinRiverCruiseImage, alt: 'Li River cruising scene with karst mountains and small boats', title: 'Li River cruise' },
    { image: guilinRiverSunsetImage, alt: 'Sunset reflection over the Li River near Guilin', title: 'Guilin sunset river' }
  ],
  hangzhou: [
    { image: images.hangzhou, alt: 'Traditional lake scenery in Hangzhou', title: 'West Lake views' },
    { image: hangzhouWestLakeOneImage, alt: 'West Lake scenery in Hangzhou', title: 'West Lake waterside' },
    { image: hangzhouWestLakeTwoImage, alt: 'West Lake landscape in Hangzhou', title: 'West Lake landscape' }
  ],
  suzhou: [
    { image: images.suzhou, alt: 'Humble Administrator Garden in Suzhou', title: 'Humble Administrator Garden' },
    { image: suzhouGalleryOneImage, alt: 'Classical garden scenery in Suzhou', title: 'Suzhou garden scene' },
    { image: suzhouGalleryTwoImage, alt: 'Historic water town scenery in Suzhou', title: 'Suzhou water lanes' },
    { image: suzhouGalleryThreeImage, alt: 'Suzhou canal and heritage scenery', title: 'Suzhou canal heritage' }
  ],
  chongqing: [
    { image: images.chongqing, alt: 'Chongqing skyline at night across the river', title: 'Mountain city night view' },
    { image: images.chongqingHotpot, alt: 'Chongqing hot pot dining table', title: 'Chongqing hotpot' },
    { image: images.hongyaCave, alt: 'Hongya Cave stilted building complex in Chongqing', title: 'Hongya Cave lights', position: '50% 44%' },
    { image: images.threeGorges, alt: 'Yangtze River cliffs in the Three Gorges region', title: 'Three Gorges route', position: '50% 54%' }
  ],
  zhangjiajie: [
    { image: images.zhangjiajie, alt: 'Sandstone pillars in Zhangjiajie Wulingyuan', title: 'Wulingyuan pillars' },
    { image: zhangjiajieGalleryTwoImage, alt: 'Zhangjiajie mountain landscape with sandstone peaks', title: 'Mountain viewpoints' },
    { image: zhangjiajieGalleryThreeImage, alt: 'Zhangjiajie forest and peak scenery', title: 'Forest walking routes' }
  ],
  lhasa: [
    { image: images.lhasa, alt: 'Potala Palace in Lhasa', title: 'Potala Palace' },
    { image: lhasaGalleryTwoImage, alt: 'Tibet highland scenery near Lhasa', title: 'High-altitude route pace' },
    { image: lhasaGalleryThreeImage, alt: 'Tibetan monastery and mountain scenery', title: 'Monastery day' }
  ],
  dunhuang: [
    { image: images.dunhuang, alt: 'Mogao Caves near Dunhuang', title: 'Mogao Caves' },
    { image: images.crescentMoonSpring, alt: 'Mingsha Mountain and Crescent Moon Spring in Dunhuang', title: 'Crescent Moon Spring' },
    { image: images.mogaoCaveGrottoes, alt: 'Mogao Caves grotto openings near Dunhuang', title: 'Mogao grottoes' }
  ],
  'hong-kong': [
    { image: images.hongKong, alt: 'Hong Kong skyline and Victoria Harbour at dusk', title: 'Victoria Harbour' },
    { image: images.hongKongDisneyland, alt: 'Castle of Magical Dreams at Hong Kong Disneyland', title: 'Hong Kong Disneyland' }
  ]
}

export const cityClassicSpotsBySlug: Record<string, CityClassicSpot[]> = {
  beijing: [
    {
      name: 'Summer Palace',
      summary: 'Lake, bridges, and royal gardens show Beijing’s softer imperial retreat.',
      image: images.summerPalace,
      alt: 'Summer Palace lake and pavilion in Beijing',
      zh: {
        name: '颐和园',
        summary: '湖山园林与皇家长廊，适合安排半日慢游。',
        alt: '北京颐和园湖面与亭台景色'
      }
    },
    {
      name: 'Forbidden City',
      summary: 'The palace axis reveals imperial ceremony, scale, and Ming-Qing court life.',
      image: images.forbiddenCity,
      alt: 'Forbidden City palace halls in Beijing',
      zh: {
        name: '故宫',
        summary: '中轴宫殿群呈现明清皇家礼制与建筑尺度。',
        alt: '北京故宫宫殿建筑群'
      }
    },
    {
      name: 'Temple of Heaven',
      summary: 'Morning park life and altar architecture make this a calm cultural stop.',
      image: images.templeOfHeaven,
      alt: 'Temple of Heaven in Beijing',
      zh: {
        name: '天坛',
        summary: '坛庙建筑与晨间公园生活，适合清早进入。',
        alt: '北京天坛祈年殿'
      }
    },
    {
      name: 'Hutong Walk',
      summary: 'Courtyard lanes add daily-life texture beyond the major palace sights.',
      image: images.beijingHutong,
      alt: 'Traditional hutong-style lane atmosphere',
      zh: {
        name: '胡同',
        summary: '四合院街巷保留老北京日常生活的细节。',
        alt: '没有明显行人的北京胡同巷道'
      }
    }
  ],
  luoyang: [
    {
      name: 'Longmen Grottoes',
      summary: 'A UNESCO Buddhist carving site that anchors Luoyang with Northern Wei and Tang artistry.',
      image: images.longmenGrottoes,
      alt: 'Longmen Grottoes Buddhist caves near Luoyang',
      zh: {
        name: '龙门石窟',
        summary: '以北魏至唐代佛教造像见长，是洛阳最核心的世界遗产景点。',
        alt: '洛阳龙门石窟佛教造像'
      }
    },
    {
      name: 'Shaolin Temple',
      summary: 'A Dengfeng day trip combining Chan Buddhism, martial arts culture, and Songshan mountain context.',
      image: images.shaolinTemple,
      alt: 'Shaolin Temple mountain gate in Henan',
      zh: {
        name: '少林寺',
        summary: '结合禅宗、武术文化和嵩山山地景观，适合从洛阳安排一日延伸。',
        alt: '河南嵩山少林寺山门'
      }
    },
    {
      name: 'White Horse Temple',
      summary: 'China Buddhist history starts here for many visitors, with temple courtyards and early-transmission context.',
      image: images.whiteHorseTemple,
      alt: 'White Horse Temple complex in Luoyang',
      zh: {
        name: '白马寺',
        summary: '常被视作中国佛教传入后的重要早期寺院，适合放在洛阳市区文化半日。',
        alt: '洛阳白马寺寺院建筑'
      }
    }
  ],
  chengdu: [
    {
      name: 'Panda Base',
      summary: 'An early-morning Chengdu anchor for giant pandas, red pandas, and conservation education.',
      image: images.chengdu,
      alt: 'Giant panda resting in Chengdu',
      zh: {
        name: '熊猫基地',
        summary: '成都最适合清晨安排的亲子与自然主题景点，可结合保护教育和轻量城市节奏。',
        alt: '成都大熊猫休息场景'
      }
    },
    {
      name: 'Dujiangyan',
      summary: 'A classic Sichuan heritage day trip linking ancient water engineering with Qingcheng Mountain.',
      image: images.dujiangyan,
      alt: 'Dujiangyan Irrigation System near Chengdu',
      zh: {
        name: '都江堰',
        summary: '成都周边最经典的世界遗产延伸，可串联古代水利工程与青城山。',
        alt: '成都周边都江堰水利工程景观'
      }
    },
    {
      name: 'Jiuzhaigou',
      summary: 'A high-value mountain and lake extension from Chengdu, best planned with enough travel buffer.',
      image: images.jiuzhaigou,
      alt: 'Blue lake and forest scenery in Jiuzhaigou Valley',
      zh: {
        name: '九寨沟',
        summary: '从成都延伸的高识别度山水目的地，适合预留交通和天气缓冲。',
        alt: '九寨沟湖泊与森林景色'
      }
    },
    {
      name: 'Sanxingdui',
      summary: 'A compact archaeology extension that adds ancient Shu culture beyond the panda and food rhythm.',
      image: images.sanxingdui,
      alt: 'Sanxingdui Museum exterior near Chengdu',
      fit: 'contain',
      zh: {
        name: '三星堆',
        summary: '紧凑的考古文化延伸，让成都线路从熊猫、美食扩展到古蜀文明。',
        alt: '成都周边三星堆博物馆建筑'
      }
    }
  ],
  chongqing: [
    {
      name: 'Hongya Cave',
      summary: 'A layered stilt-building district for Chongqing night views, Jiefangbei walks, and riverfront photos.',
      image: images.hongyaCave,
      alt: 'Hongya Cave stilted building complex in Chongqing',
      zh: {
        name: '洪崖洞',
        summary: '山城夜景代表片区，可串联解放碑、江边步道和桥梁视角。',
        alt: '重庆洪崖洞吊脚楼建筑群'
      }
    },
    {
      name: 'Three Gorges',
      summary: 'A classic Yangtze River canyon route that turns Chongqing into a cruise and regional scenery gateway.',
      image: images.threeGorges,
      alt: 'Yangtze River cliffs in the Three Gorges region',
      zh: {
        name: '三峡',
        summary: '从重庆开启长江游轮和峡谷风光线路时最具代表性的经典景观。',
        alt: '长江三峡峡谷与江面景色'
      }
    }
  ],
  'hong-kong': [
    {
      name: 'Victoria Harbour',
      summary: 'Hong Kong’s signature waterfront view, best planned around skyline light, ferry timing, and easy evening dining.',
      image: images.hongKong,
      alt: 'Hong Kong skyline and Victoria Harbour at dusk',
      zh: {
        name: '维多利亚港',
        summary: '香港最具代表性的海港天际线，可结合天星小轮、尖沙咀海滨和夜景时间安排。',
        alt: '黄昏时分的香港维多利亚港天际线'
      }
    },
    {
      name: 'Hong Kong Disneyland',
      summary: 'A family-friendly Lantau day option that works best as a full-day plan with transport and evening return time protected.',
      image: images.hongKongDisneyland,
      alt: 'Castle of Magical Dreams at Hong Kong Disneyland',
      zh: {
        name: '香港迪士尼',
        summary: '适合亲子和家庭团的全天安排，需要单独预留交通、入园和晚间返程时间。',
        alt: '香港迪士尼奇妙梦想城堡'
      }
    }
  ]
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
    image: images.forbiddenCity,
    alt: 'Forbidden City palace halls in Beijing',
    signature:
      'Beijing is the clearest first stop for travelers who want China’s imperial scale, living neighborhood texture, and a smooth introduction to high-speed rail routes.',
    story: [
      'Beijing is best understood through its north-south central axis: palace halls, ceremonial gates, temple grounds, and hilltop viewpoints show how imperial planning shaped the city.',
      'A strong private route balances the monumental sites with hutong lanes, courtyard neighborhoods, local food stops, and one carefully chosen Great Wall section outside the city.',
      'Because many headline sights now depend on timed reservations and passport checks, Beijing rewards early planning more than almost any other China gateway.'
    ],
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
    image: images.shanghaiBundNight,
    alt: 'Shanghai Bund skyline at night along the Huangpu River',
    signature:
      'Shanghai works as China’s most convenient urban gateway: polished hotels, English-friendly services, riverfront architecture, and quick day trips by train.',
    story: [
      'Shanghai is a city of contrasts: the Bund preserves the riverfront scale of treaty-port architecture while Pudong puts the modern skyline directly across the Huangpu River.',
      'The old city, Yu Garden area, former concession streets, museums, cafes, and design hotels make Shanghai useful for travelers who want China to feel urban and easy on arrival.',
      'Its railway network also turns the city into a base for softer Jiangnan extensions such as Suzhou gardens, Hangzhou West Lake, and nearby water towns.'
    ],
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
    image: images.terracottaWarriors,
    alt: "Terracotta warriors in Xi'an",
    signature:
      'Xi’an gives a compact, high-impact history chapter between Beijing and Shanghai, pairing the Terracotta Army with city-wall evenings and Silk Road food culture.',
    story: [
      'Xi’an carries the weight of several ancient capitals, but its travel value is practical as well: the city wall, towers, museums, food streets, and pagoda districts sit in a compact urban frame.',
      'The Terracotta Army adds the essential archaeological day, connecting Qin imperial ambition with craft, military formation, and the story of China’s first unified dynasty.',
      'For first-time visitors, Xi’an works well between Beijing and Shanghai because it adds deep history without forcing a long detour from the classic rail route.'
    ],
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
    slug: 'luoyang',
    name: 'Luoyang',
    region: 'Central China',
    summary: 'Ancient-capital history, Longmen Grottoes, Shaolin Temple, and White Horse Temple.',
    duration: '2-3 days',
    image: images.longmenGrottoes,
    alt: 'Longmen Grottoes Buddhist caves near Luoyang',
    signature:
      'Luoyang gives a focused ancient-capital chapter between Xi’an and Zhengzhou, built around Buddhist art, temple history, and a practical Henan heritage route.',
    story: [
      'Luoyang is one of China’s great ancient capitals, but its strongest visitor route is compact: Longmen Grottoes, White Horse Temple, old-city context, and a Shaolin Temple extension can form a clear two- or three-day stay.',
      'Longmen is the anchor because the river valley, caves, niches, and large Buddhist carvings show how imperial patronage, religious art, and stone craftsmanship developed from the Northern Wei through Tang periods.',
      'White Horse Temple adds early Buddhist transmission context inside Luoyang, while Shaolin Temple works as a mountain day trip for travelers interested in Chan Buddhism, martial arts culture, and Songshan scenery.'
    ],
    bestFor: ['Ancient capitals', 'Buddhist art', 'Henan heritage routes'],
    highlights: ['Longmen Grottoes', 'Shaolin Temple', 'White Horse Temple', 'Luoyang old city'],
    itinerary: [
      'Day 1: Longmen Grottoes with a guided carving route and riverside viewpoints.',
      'Day 2: White Horse Temple, old-city context, and museum or neighborhood time.',
      'Day 3: Shaolin Temple and Songshan area as a full-day extension if the route allows.'
    ],
    travelNote:
      'Longmen deserves unhurried guide time; Shaolin is outside Luoyang, so keep the day realistic with transfer buffers.',
    season: 'Spring and autumn are most comfortable; peony season can be busy but distinctive.',
    connections: 'High-speed rail links Luoyang with Xi’an, Zhengzhou, Beijing, and broader central China routes.'
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
    story: [
      'Chengdu is a soft landing in Southwest China: mornings can start with pandas, while afternoons move into parks, teahouses, old lanes, and a slower local rhythm.',
      'Food is not a side activity here. Sichuan cuisine, hotpot, snacks, and spice-level choices often become the clearest way for visitors to understand the city.',
      'The city also works as a hub for Leshan, Dujiangyan, Qingcheng Mountain, Jiuzhaigou, Chongqing, and permit-aware westbound extensions.'
    ],
    bestFor: ['Pandas', 'Food culture', 'Slower city pace'],
    highlights: [
      'Panda Base',
      'Dujiangyan',
      'Jiuzhaigou',
      'Sanxingdui',
      'People’s Park teahouse',
      'Sichuan hotpot'
    ],
    itinerary: [
      'Day 1: Panda Base in the morning and teahouse culture in the afternoon.',
      'Day 2: Old-lane walks, Sichuan cuisine, and an optional opera evening.',
      'Day 3: Add Dujiangyan and Qingcheng Mountain, Sanxingdui, Leshan Giant Buddha, or a buffered Jiuzhaigou extension.'
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
    image: guilinRiverPanoramaImage,
    alt: 'Li River bend and karst peaks near Guilin at sunrise',
    signature:
      'Guilin and Yangshuo shift the trip from cities to landscapes, giving first-time visitors the classic Li River, karst peaks, and countryside rhythm.',
    story: [
      'Guilin is less a single city stop than a landscape region shaped by karst hills, caves, rivers, villages, and the famous Guilin-to-Yangshuo Li River corridor.',
      'Yangshuo often gives the strongest travel memory because the scenery becomes slower and more immersive through river time, cycling, short walks, and countryside stays.',
      'The route works best when planned with weather and transfer buffers, especially if Longji rice terraces or a deeper rural day is added.'
    ],
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
    story: [
      'Hangzhou is organized around West Lake, where causeways, islands, temples, pagodas, gardens, and low hills turn a city visit into a sequence of lakefront walks.',
      'Longjing tea villages and Lingyin Temple add quieter cultural depth, especially for travelers who want a softer East China day after Shanghai.',
      'The city works poorly as a rushed transit stop and much better as one slow day with limited driving, measured walking, and time for tea or a lakeside meal.'
    ],
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
    story: [
      'Suzhou’s classical gardens compress rocks, ponds, pavilions, trees, and borrowed views into small spaces, which is why one good garden can be more rewarding than three rushed stops.',
      'Canal streets and silk heritage make the city feel different from Shanghai even though the train ride is short.',
      'For private travel, Suzhou works as either a focused day trip or an overnight stay that leaves room for evening canals and a calmer second garden.'
    ],
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
    slug: 'chongqing',
    name: 'Chongqing',
    region: 'Southwest China',
    summary: 'Mountain-city streets, hotpot, Yangtze cruises, and dramatic night views.',
    duration: '2-3 days',
    image: images.chongqing,
    alt: 'Chongqing skyline at night across the river',
    signature:
      'Chongqing is a layered mountain city where transit, night views, hotpot, river crossings, and Yangtze cruise departures become the attraction.',
    story: [
      'Chongqing’s landscape is the main story: hills, bridges, rivers, escalators, monorails, and stacked streets make ordinary movement feel like sightseeing.',
      'Night views and hotpot give the city its most immediate visitor appeal, while Ciqikou, museums, riverfronts, and old streets add slower context during the day.',
      'It is also the natural launch point for many Yangtze cruise plans, so schedules should account for pier timing, luggage movement, and steep urban transfers.'
    ],
    bestFor: ['Night views', 'Hotpot', 'Yangtze routes'],
    highlights: ['Hongya Cave area', 'Three Gorges', 'Liziba monorail', 'Ciqikou old town', 'Yangtze cruise pier'],
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
    story: [
      'Zhangjiajie’s Wulingyuan area is known for thousands of narrow sandstone pillars, deep ravines, forest cover, and viewpoints that change dramatically with mist and light.',
      'The travel experience depends on cableways, elevators, shuttle buses, walking routes, and crowd timing, so route sequencing matters more than simply listing sights.',
      'A flexible mountain day helps protect the trip from fog, rain, and visibility changes, especially for photography-focused travelers.'
    ],
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
    slug: 'lhasa',
    name: 'Lhasa',
    region: 'Tibet',
    summary: 'Potala Palace, Jokhang Temple, Tibetan culture, high-altitude pacing, and monastery visits.',
    duration: '3-5 days',
    image: images.lhasa,
    alt: 'Potala Palace in Lhasa',
    signature:
      'Lhasa needs slower, high-altitude planning: palace and monastery days work best when arrival recovery, permits, guide timing, and weather are built into the route.',
    story: [
      'Lhasa should be paced around altitude first. Arrival recovery, light walking, oxygen-aware hotels, and permit timing are part of the route design, not afterthoughts.',
      'The Potala Palace, Jokhang Temple, Barkhor circuit, and major monasteries make the city a concentrated introduction to Tibetan Buddhist architecture and pilgrimage life.',
      'Because access rules, guide requirements, and ticket windows can be strict, Lhasa itineraries need earlier coordination than standard city breaks.'
    ],
    bestFor: ['Tibetan culture', 'Sacred architecture', 'Slow-paced routes'],
    highlights: ['Potala Palace', 'Jokhang Temple', 'Barkhor Street', 'Sera Monastery'],
    itinerary: [
      'Day 1: Arrive in Lhasa, rest, and take a light Barkhor area walk if energy allows.',
      'Day 2: Potala Palace, Jokhang Temple, and a guided old-town loop.',
      'Day 3: Sera or Drepung Monastery with buffer time for altitude and transfer pacing.'
    ],
    travelNote:
      'Plan permits, altitude acclimatization, and hotel oxygen support early; do not schedule a heavy sightseeing day immediately after arrival.',
    season: 'Late spring to autumn gives the most comfortable access and clearer route planning.',
    connections: 'Usually connected by flight or train from Chengdu, Xi’an, Chongqing, or Xining with permit-aware planning.'
  },
  {
    slug: 'dunhuang',
    name: 'Dunhuang',
    region: 'Northwest China',
    summary: 'Mogao Caves, desert dunes, crescent spring scenery, and Silk Road history.',
    duration: '2-3 days',
    image: images.dunhuang,
    alt: 'Mogao Caves near Dunhuang',
    signature:
      'Dunhuang gives a concentrated Silk Road chapter, pairing the Mogao Caves with desert landscapes and slower evening pacing around dunes and oasis views.',
    story: [
      'Dunhuang compresses Silk Road culture and desert scenery into a small planning area: the Mogao Caves provide the art-history anchor, while Mingsha Mountain and Crescent Moon Spring provide the landscape contrast.',
      'The cave visit depends on reservation windows, visitor limits, and guide coordination, so it should not be treated as a casual add-on after a late arrival.',
      'Evenings around the dunes and market areas give the city a slower rhythm that fits well between Xi’an, Zhangye, and other northwest routes.'
    ],
    bestFor: ['Silk Road history', 'Desert scenery', 'UNESCO culture'],
    highlights: ['Mogao Caves', 'Mingsha Mountain', 'Crescent Moon Spring', 'Dunhuang night market'],
    itinerary: [
      'Day 1: Arrive, visit the night market, and prepare for the cave reservation window.',
      'Day 2: Mogao Caves with a timed visit, then Mingsha Mountain and Crescent Moon Spring.',
      'Day 3: Add Yumen Pass, Yardang landforms, or connect onward to Zhangye, Lanzhou, or Xi’an.'
    ],
    travelNote:
      'Mogao Caves require timed tickets and careful guide coordination; avoid same-day rushed arrivals when possible.',
    season: 'April to October is common for Silk Road routes; summer needs heat-aware timing.',
    connections: 'Often linked by flight or rail with Xi’an, Lanzhou, Zhangye, and broader Silk Road itineraries.'
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
    story: [
      'Hong Kong gives a highly efficient finish to a southern China route: Victoria Harbour, the Peak, ferries, trams, markets, museums, and dim sum all fit into compact days.',
      'The city also offers a useful contrast between dense urban districts and quick access to island walks, beaches, Lantau, and green ridgelines.',
      'For inbound China planning, Hong Kong is strongest when flight schedules, border crossings, ferries, or international departures shape the route.'
    ],
    bestFor: ['International gateway', 'Harbor views', 'Food and shopping'],
    highlights: ['Victoria Harbour', 'Hong Kong Disneyland', 'The Peak', 'Central and Sheung Wan', 'Lantau or island walks'],
    itinerary: [
      'Day 1: Central, Star Ferry, Tsim Sha Tsui, and harbor light views.',
      'Day 2: The Peak, neighborhood food, and museum or market time.',
      'Day 3: Lantau, beach, or island hiking depending on flight timing.'
    ],
    travelNote:
      'Hong Kong is useful at the end of a southern China route, especially when flights and ferry or rail links matter.',
    season: 'October to December is generally clear and comfortable.',
    connections: 'Linked to mainland China and global gateways by high-speed rail, border crossings, ferries, and frequent flights.'
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
    image: images.terracottaWarriors,
    alt: 'Terracotta warriors archaeological site'
  },
  {
    slug: 'big-wild-goose-pagoda',
    city: "Xi'an",
    name: 'Big Wild Goose Pagoda',
    summary: 'A Tang-era Buddhist landmark that anchors Xi’an’s pagoda district and evening route.',
    image: images.bigWildGoosePagoda,
    alt: "Big Wild Goose Pagoda in Xi'an"
  },
  {
    slug: 'xian-city-wall',
    city: "Xi'an",
    name: "Xi'an City Wall",
    summary: 'A Ming-era wall route for cycling, sunset views, and reading the old capital layout.',
    image: images.xianCityWall,
    alt: "Xi'an ancient city wall"
  },
  {
    slug: 'datang-everbright-city',
    city: "Xi'an",
    name: 'Great Tang All Day Mall',
    summary: 'A Tang-style pedestrian night district for light shows, street performance, dining, and evening photos.',
    image: images.datangEverbrightCity,
    alt: "Great Tang All Day Mall and Big Wild Goose Pagoda in Xi'an"
  },
  {
    slug: 'the-bund',
    city: 'Shanghai',
    name: 'The Bund',
    summary: 'Shanghai’s riverfront contrast of historic architecture and Pudong skyline.',
    image: images.theBund,
    alt: 'Shanghai Bund skyline along the Huangpu River'
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
    image: guilinRiverPanoramaImage,
    alt: 'Li River bend and karst peaks near Guilin at sunrise'
  },
  {
    slug: 'west-lake',
    city: 'Hangzhou',
    name: 'West Lake',
    summary: 'A lake-and-hill cultural landscape shaped by poetry, causeways, temples, and gardens.',
    image: images.hangzhou,
    alt: 'Chinese lakeside garden scenery'
  },
  {
    slug: 'mogao-caves',
    city: 'Dunhuang',
    name: 'Mogao Caves',
    summary: 'A timed Silk Road art visit through Buddhist cave murals, sculpture, and desert-edge heritage.',
    image: images.dunhuang,
    alt: 'Mogao Caves near Dunhuang',
    large: true
  },
  {
    slug: 'crescent-moon-spring',
    city: 'Dunhuang',
    name: 'Crescent Moon Spring',
    summary: 'A desert oasis beside Mingsha Mountain, strongest for late-afternoon dunes, light, and relaxed pacing.',
    image: images.crescentMoonSpring,
    alt: 'Mingsha Mountain and Crescent Moon Spring in Dunhuang'
  },
  {
    slug: 'hongya-cave',
    city: 'Chongqing',
    name: 'Hongya Cave',
    summary: 'A cliffside stilt-building district for Chongqing night views, riverfront walks, and Jiefangbei routing.',
    image: images.hongyaCave,
    alt: 'Hongya Cave stilted building complex in Chongqing'
  },
  {
    slug: 'three-gorges',
    city: 'Chongqing',
    name: 'Three Gorges',
    summary: 'A Yangtze River canyon route commonly planned from Chongqing with cruise timing and pier logistics.',
    image: images.threeGorges,
    alt: 'Yangtze River cliffs in the Three Gorges region',
    large: true
  },
  {
    slug: 'longmen-grottoes',
    city: 'Luoyang',
    name: 'Longmen Grottoes',
    summary: 'A guided Buddhist-art route through riverfront caves, niches, and monumental stone carvings.',
    image: images.longmenGrottoes,
    alt: 'Longmen Grottoes Buddhist caves near Luoyang',
    large: true
  },
  {
    slug: 'shaolin-temple',
    city: 'Luoyang',
    name: 'Shaolin Temple',
    summary: 'A Songshan day trip for Chan Buddhist history, martial arts culture, and mountain scenery.',
    image: images.shaolinTemple,
    alt: 'Shaolin Temple mountain gate in Henan'
  },
  {
    slug: 'white-horse-temple',
    city: 'Luoyang',
    name: 'White Horse Temple',
    summary: 'A Luoyang temple stop for early Chinese Buddhist history and calmer courtyard pacing.',
    image: images.whiteHorseTemple,
    alt: 'White Horse Temple complex in Luoyang'
  }
]

const getAttraction = (slug: string) => {
  const attraction = attractions.find((item) => item.slug === slug)
  if (!attraction) throw new Error(`Missing attraction for slug: ${slug}`)
  return attraction
}

export const attractionDetails: AttractionDetail[] = [
  {
    ...getAttraction('great-wall'),
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
    imageCredit: 'Image from ctdsb.net, loaded through the website media set.'
  },
  {
    ...getAttraction('terracotta-army'),
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
    ...getAttraction('big-wild-goose-pagoda'),
    eyebrow: 'Tang dynasty Buddhist landmark',
    heroTitle: 'Big Wild Goose Pagoda',
    intro:
      'Big Wild Goose Pagoda is one of Xi’an’s strongest city landmarks, tying Tang-era Buddhist exchange, temple grounds, public squares, and a convenient evening district into one compact stop.',
    facts: [
      { label: 'Region', value: "Yanta District, Xi'an" },
      { label: 'Best pace', value: 'Late afternoon to evening' },
      { label: 'Good for', value: 'Tang culture, city touring, family pacing' }
    ],
    whyGo: [
      {
        title: 'Clear Tang-era signal',
        text: 'The pagoda gives travelers an immediate visual connection to Xi’an’s Tang capital chapter and Buddhist cultural exchange.'
      },
      {
        title: 'Easy city pairing',
        text: 'It fits naturally after museums, the city wall, or a Terracotta Army morning without adding a long transfer.'
      },
      {
        title: 'Good evening district',
        text: 'The surrounding squares and nearby Tang-themed streets make it useful when a group wants a light night route.'
      }
    ],
    visitFlow: [
      'Arrive after the heavier daytime visits and keep the route unhurried.',
      'Use the temple and pagoda area to explain Tang Chang’an and Buddhist transmission.',
      'Continue into the surrounding square or Tang-style night district when the group still has energy.'
    ],
    practicalNotes: [
      'Check evening crowd levels before promising a quiet visit.',
      'Use it as a cultural anchor, not only a photo stop.',
      'Pair with dinner nearby when the day already includes Lintong transfers.'
    ],
    relatedSlugs: ['terracotta-army', 'xian-city-wall', 'datang-everbright-city'],
    sources: [
      { label: 'China Culture: Big Wild Goose Pagoda', url: 'https://en.chinaculture.org/library/2008-02/15/content_33984.htm' }
    ],
    imageCredit: 'Image from local Tengxuan Travel media.'
  },
  {
    ...getAttraction('xian-city-wall'),
    eyebrow: 'Ancient capital wall route',
    heroTitle: "Xi'an City Wall",
    intro:
      'Xi’an City Wall is the most practical way to read the old capital at street level: gates, ramparts, moat views, cycling routes, and sunset light all work well for visitors.',
    facts: [
      { label: 'Region', value: "Central Xi'an" },
      { label: 'Best pace', value: 'One to two hours' },
      { label: 'Good for', value: 'City layout, cycling, sunset views' }
    ],
    whyGo: [
      {
        title: 'Visible city structure',
        text: 'The wall gives travelers a simple way to understand Xi’an’s historic urban frame before or after deeper museum content.'
      },
      {
        title: 'Active but flexible',
        text: 'Groups can walk a short section, cycle part of the wall, or simply use a gate area depending on age and weather.'
      },
      {
        title: 'Strong day-to-night bridge',
        text: 'Late afternoon light and nearby old-town food routes make it a useful transition into the evening.'
      }
    ],
    visitFlow: [
      'Choose the gate and section based on hotel location and group stamina.',
      'Leave time for photos from the ramparts and old-city viewpoints.',
      'Continue to the Muslim Quarter, Bell Tower area, or dinner instead of overloading the night.'
    ],
    practicalNotes: [
      'Cycling is weather- and crowd-dependent.',
      'Summer midday heat can make the wall feel exposed.',
      'Confirm elevator, stairs, and walking expectations for older guests.'
    ],
    relatedSlugs: ['terracotta-army', 'big-wild-goose-pagoda', 'datang-everbright-city'],
    sources: [
      { label: "Xi'an tourism: City Wall", url: 'https://en.xa.gov.cn/thisisxian/thingstodo/1691694067367739393.html' }
    ],
    imageCredit: 'Image from local Tengxuan Travel media.'
  },
  {
    ...getAttraction('datang-everbright-city'),
    eyebrow: 'Tang-style night district',
    heroTitle: 'Great Tang All Day Mall',
    intro:
      'Great Tang All Day Mall is Xi’an’s most useful evening attraction for Tang-style streetscape, light installations, performance atmosphere, and easy dinner planning near Big Wild Goose Pagoda.',
    facts: [
      { label: 'Region', value: "Yanta District, Xi'an" },
      { label: 'Best pace', value: 'Evening walk after daytime heritage visits' },
      { label: 'Good for', value: 'Night photos, Tang atmosphere, dining, family routes' }
    ],
    whyGo: [
      {
        title: 'Strong night-tour value',
        text: 'It gives Xi’an itineraries a relaxed evening chapter after heavier museum, wall, or Terracotta Army visits.'
      },
      {
        title: 'Clear Tang signal',
        text: 'The district quickly communicates Tang-style visual identity through lighting, public space, costume photography, and street performance.'
      },
      {
        title: 'Easy to combine',
        text: 'Its location near Big Wild Goose Pagoda makes it practical for dinner, walking, and a lighter end to the day.'
      }
    ],
    visitFlow: [
      'Start around Big Wild Goose Pagoda or nearby dinner, then continue into the night district on foot.',
      'Leave flexible time for lighting, street performance, and photo stops instead of over-scheduling the walk.',
      'Use it as a softer evening after Terracotta Army, City Wall, or museum-heavy daytime touring.'
    ],
    practicalNotes: [
      'Evening and holiday crowds can be dense.',
      'Keep vehicle pickup and meeting points clear because pedestrian areas can be busy.',
      'Check weather and performance schedules before promising specific shows.'
    ],
    relatedSlugs: ['terracotta-army', 'big-wild-goose-pagoda', 'xian-city-wall'],
    sources: [
      { label: "Xi'an tourism: Great Tang All Day Mall", url: 'https://en.xa.gov.cn/thisisxian/thingstodo/1691694067367739393.html' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the website media set.'
  },
  {
    ...getAttraction('the-bund'),
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
    imageCredit: 'Image from local Tengxuan Travel media.'
  },
  {
    ...getAttraction('panda-base'),
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
    ...getAttraction('li-river'),
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
    ...getAttraction('west-lake'),
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
  },
  {
    ...getAttraction('mogao-caves'),
    eyebrow: 'Silk Road Buddhist art',
    heroTitle: 'Mogao Caves',
    intro:
      'The Mogao Caves are Dunhuang’s core heritage stop: a desert-edge Buddhist art complex where cave murals, sculpture, manuscripts, and Silk Road exchange need timed reservations and guided interpretation.',
    facts: [
      { label: 'Region', value: 'Dunhuang, Gansu' },
      { label: 'Best pace', value: 'Half day with timed entry' },
      { label: 'Good for', value: 'Silk Road history, Buddhist art, UNESCO culture' }
    ],
    whyGo: [
      {
        title: 'World heritage anchor',
        text: 'Mogao is the cultural reason many travelers add Dunhuang, giving the route a focused art-history chapter beyond desert scenery.'
      },
      {
        title: 'Interpretation matters',
        text: 'The cave sequence, murals, sculpture, preservation limits, and Silk Road context are much clearer with a guide.'
      },
      {
        title: 'Needs planning',
        text: 'Tickets, visitor limits, opening windows, and transfer timing make Mogao a scheduled anchor rather than a casual add-on.'
      }
    ],
    visitFlow: [
      'Book the timed visit before locking the rest of the Dunhuang day.',
      'Keep the cave visit as the main cultural chapter, with enough time for orientation and transfer.',
      'Pair the afternoon or evening with Mingsha Mountain and Crescent Moon Spring when weather and energy allow.'
    ],
    practicalNotes: [
      'Avoid scheduling Mogao immediately after a late arrival.',
      'Photography rules and cave access can be restricted for preservation.',
      'Summer heat makes transfer timing and hydration more important.'
    ],
    relatedSlugs: ['crescent-moon-spring', 'terracotta-army', 'longmen-grottoes'],
    sources: [
      { label: 'UNESCO World Heritage Centre: Mogao Caves', url: 'https://whc.unesco.org/en/list/440/' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the website media set.'
  },
  {
    ...getAttraction('crescent-moon-spring'),
    eyebrow: 'Desert oasis and dune scenery',
    heroTitle: 'Crescent Moon Spring',
    intro:
      'Crescent Moon Spring gives Dunhuang its strongest desert-landscape contrast: a small oasis set against Mingsha Mountain dunes, best planned for softer light, unhurried walking, and weather-aware pacing.',
    facts: [
      { label: 'Region', value: 'Mingsha Mountain, Dunhuang' },
      { label: 'Best pace', value: 'Late afternoon to sunset' },
      { label: 'Good for', value: 'Desert scenery, photography, family-friendly route endings' }
    ],
    whyGo: [
      {
        title: 'Immediate visual contrast',
        text: 'The crescent-shaped spring and surrounding sand dunes make the Silk Road landscape easy to understand without a long overland day.'
      },
      {
        title: 'Best as a softer finish',
        text: 'After Mogao’s concentrated cultural visit, the spring and dunes give the day a slower outdoor ending.'
      },
      {
        title: 'Light and weather matter',
        text: 'Late afternoon, wind, heat, and crowd levels shape the visit more than the simple distance from the city.'
      }
    ],
    visitFlow: [
      'Arrive after the strongest daytime heat when the group wants softer light and photography time.',
      'Use Mingsha Mountain viewpoints and the spring area as one combined landscape stop.',
      'Keep the evening flexible for the night market or a simple dinner after the desert visit.'
    ],
    practicalNotes: [
      'Sand, wind, and heat can affect comfort and equipment.',
      'Use realistic walking expectations for families and older travelers.',
      'Check weather before promising sunset photography conditions.'
    ],
    relatedSlugs: ['mogao-caves', 'li-river', 'west-lake'],
    sources: [
      { label: 'Wikimedia Commons: Crescent Lake (Dunhuang)', url: 'https://commons.wikimedia.org/wiki/Crescent_Lake_(Dunhuang)' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the website media set.'
  },
  {
    ...getAttraction('hongya-cave'),
    eyebrow: 'Chongqing night-view district',
    heroTitle: 'Hongya Cave',
    intro:
      'Hongya Cave is one of Chongqing’s clearest night-view anchors: a layered stilt-building complex near Jiefangbei where riverfront light, hillside streets, bridges, and dense pedestrian flow all need to be planned together.',
    facts: [
      { label: 'Region', value: 'Yuzhong District, Chongqing' },
      { label: 'Best pace', value: 'Late afternoon to evening' },
      { label: 'Good for', value: 'Night views, city walks, Chongqing first visits' }
    ],
    whyGo: [
      {
        title: 'Strong visual identity',
        text: 'The cliffside building layers and warm evening lighting quickly communicate Chongqing’s vertical city character.'
      },
      {
        title: 'Easy city pairing',
        text: 'It works naturally with Jiefangbei, Qiansimen Bridge viewpoints, riverfront walks, and a hotpot dinner.'
      },
      {
        title: 'Crowd planning matters',
        text: 'The experience depends on timing, drop-off points, walking routes, and meeting locations more than simple map distance.'
      }
    ],
    visitFlow: [
      'Arrive before peak evening crowds when the group wants photos and easier orientation.',
      'Use riverfront and bridge viewpoints to explain Chongqing’s stacked terrain.',
      'Continue to Jiefangbei or hotpot nearby instead of adding another distant night stop.'
    ],
    practicalNotes: [
      'Evening and holiday crowding can be heavy.',
      'Confirm vehicle drop-off and pickup points before the visit.',
      'Keep the walking route simple for families and senior travelers.'
    ],
    relatedSlugs: ['three-gorges', 'panda-base', 'the-bund'],
    sources: [
      { label: 'Wikimedia Commons: Hongya Cave media category', url: 'https://commons.wikimedia.org/wiki/Category:Hongya_Cave' },
      { label: 'Wikipedia: Hongya Cave', url: 'https://en.wikipedia.org/wiki/Hongya_Cave' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the website media set.'
  },
  {
    ...getAttraction('three-gorges'),
    eyebrow: 'Yangtze River canyon route',
    heroTitle: 'Three Gorges',
    intro:
      'The Three Gorges give Chongqing itineraries a broader Yangtze chapter, shifting the trip from mountain-city streets into river canyons, cruise planning, pier timing, and multi-day scenery between Chongqing and Hubei.',
    facts: [
      { label: 'Region', value: 'Yangtze River, Chongqing to Hubei' },
      { label: 'Best pace', value: 'Multi-day cruise or focused extension' },
      { label: 'Good for', value: 'River scenery, cruises, slower regional routes' }
    ],
    whyGo: [
      {
        title: 'Classic Yangtze landscape',
        text: 'The gorges are a high-recognition river landscape and a natural extension after Chongqing city touring.'
      },
      {
        title: 'Route value beyond one city',
        text: 'A cruise or river extension turns Chongqing from a city stop into the start of a regional Yangtze journey.'
      },
      {
        title: 'Logistics shape the experience',
        text: 'Cabin class, pier location, sailing time, luggage movement, and onward transport need to be confirmed before quoting.'
      }
    ],
    visitFlow: [
      'Keep the Chongqing city day light before cruise boarding or long river transfers.',
      'Confirm pier timing, ID requirements, luggage handling, and cabin category in advance.',
      'Use downstream connections to decide whether the route ends toward Yichang, Wuhan, or a flight onward.'
    ],
    practicalNotes: [
      'Cruise schedules and shore excursions vary by operator and season.',
      'Weather, water levels, and fog can change scenery visibility.',
      'Do not promise a quick same-day experience when the itinerary really needs a river-route block.'
    ],
    relatedSlugs: ['hongya-cave', 'li-river', 'west-lake'],
    sources: [
      { label: 'Wikimedia Commons: Three Gorges media category', url: 'https://commons.wikimedia.org/wiki/Category:Three_Gorges' },
      { label: 'Wikipedia: Three Gorges', url: 'https://en.wikipedia.org/wiki/Three_Gorges' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the website media set.'
  },
  {
    ...getAttraction('longmen-grottoes'),
    eyebrow: 'Buddhist art world heritage',
    heroTitle: 'Longmen Grottoes',
    intro:
      'Longmen Grottoes is Luoyang’s essential heritage visit: a riverfront corridor of caves, niches, inscriptions, and monumental Buddhist carvings shaped by imperial and religious patronage.',
    facts: [
      { label: 'Region', value: 'Luoyang, Henan' },
      { label: 'Best pace', value: 'Half day with a guide' },
      { label: 'Good for', value: 'Buddhist art, ancient capitals, heritage routes' }
    ],
    whyGo: [
      {
        title: 'World heritage anchor',
        text: 'UNESCO recognizes Longmen for outstanding Buddhist cave art and its high artistic achievement from the Northern Wei through Tang periods.'
      },
      {
        title: 'Best with interpretation',
        text: 'The site is easier to understand when a guide connects cave sequences, donor inscriptions, carving styles, and the Fengxian Temple group.'
      },
      {
        title: 'Strong Henan route value',
        text: 'Longmen makes Luoyang a useful ancient-capital stop between Xi’an, Zhengzhou, and broader central-China heritage routes.'
      }
    ],
    visitFlow: [
      'Start with the main west-bank grotto route while energy and light are strong.',
      'Use key caves and carving groups to explain Buddhist imagery, dynastic context, and restoration limits.',
      'Keep time for river viewpoints instead of rushing directly back to the vehicle.'
    ],
    practicalNotes: [
      'Wear comfortable shoes because the site involves sustained walking and steps.',
      'Strong sun and exposed stone surfaces make morning or late-afternoon timing useful in warm months.',
      'Do not combine Longmen and Shaolin too tightly unless the group accepts a long day.'
    ],
    relatedSlugs: ['shaolin-temple', 'white-horse-temple', 'terracotta-army'],
    sources: [
      { label: 'UNESCO World Heritage Centre: Longmen Grottoes', url: 'https://whc.unesco.org/en/list/1003' }
    ],
    imageCredit: 'Image from local Tengxuan Travel media.'
  },
  {
    ...getAttraction('shaolin-temple'),
    eyebrow: 'Chan Buddhism and martial arts',
    heroTitle: 'Shaolin Temple',
    intro:
      'Shaolin Temple is usually planned from Luoyang or Zhengzhou as a full-day Dengfeng extension, combining Chan Buddhist history, martial arts culture, and Songshan mountain setting.',
    facts: [
      { label: 'Region', value: 'Dengfeng, Henan' },
      { label: 'Best pace', value: 'Full-day extension' },
      { label: 'Good for', value: 'Martial arts, Buddhist culture, active heritage travelers' }
    ],
    whyGo: [
      {
        title: 'Globally recognizable',
        text: 'Shaolin is one of Henan’s best-known cultural names, especially for travelers interested in kung fu and Chan Buddhist tradition.'
      },
      {
        title: 'Mountain context matters',
        text: 'The visit works better when the temple, pagoda forest, performance timing, and Songshan scenery are treated as one planned route.'
      },
      {
        title: 'Good contrast with Longmen',
        text: 'Pairing Shaolin with Longmen gives Luoyang-area routes both static Buddhist art and living temple or martial arts culture.'
      }
    ],
    visitFlow: [
      'Leave Luoyang early enough to protect transfer time and performance or temple timing.',
      'Visit temple courtyards and pagoda forest with context rather than only watching a show.',
      'Return with a simple dinner plan because the day can be long for families or senior travelers.'
    ],
    practicalNotes: [
      'Shaolin is outside Luoyang and should not be treated as a quick city stop.',
      'Holiday crowds and performance schedules can change the best route order.',
      'Confirm how much walking or mountain scenery the group wants before quoting.'
    ],
    relatedSlugs: ['longmen-grottoes', 'white-horse-temple', 'panda-base'],
    sources: [
      { label: 'UNESCO World Heritage Centre: Historic Monuments of Dengfeng', url: 'https://whc.unesco.org/en/list/1305' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the website media set.'
  },
  {
    ...getAttraction('white-horse-temple'),
    eyebrow: 'Early Chinese Buddhist history',
    heroTitle: 'White Horse Temple',
    intro:
      'White Horse Temple gives Luoyang a calmer temple-history stop, commonly presented as an early landmark in the transmission of Buddhism into China.',
    facts: [
      { label: 'Region', value: 'Luoyang, Henan' },
      { label: 'Best pace', value: 'Half day or paired city day' },
      { label: 'Good for', value: 'Temple history, slower pacing, ancient-capital routes' }
    ],
    whyGo: [
      {
        title: 'Early Buddhist context',
        text: 'The temple helps explain how Buddhism became part of Chinese religious and cultural history beyond the cave-art setting of Longmen.'
      },
      {
        title: 'Softer city pacing',
        text: 'It pairs well with Luoyang old-city or museum time when the group needs a less physically intense day.'
      },
      {
        title: 'Clear thematic link',
        text: 'White Horse Temple, Longmen Grottoes, and Shaolin Temple can be positioned as three different Buddhist-culture chapters around Luoyang.'
      }
    ],
    visitFlow: [
      'Use the temple as a morning or afternoon stop rather than a rushed transfer break.',
      'Connect the courtyard route with Buddhism’s early transmission story in China.',
      'Pair with old-city food, museum time, or a lighter city walk.'
    ],
    practicalNotes: [
      'Keep the visit respectful and avoid overloading it with too many nearby stops.',
      'The temple is easier than Longmen or Shaolin for travelers who need a gentler walking day.',
      'Use it to balance a route that already includes major cave or mountain sightseeing.'
    ],
    relatedSlugs: ['longmen-grottoes', 'shaolin-temple', 'west-lake'],
    sources: [
      { label: 'Luoyang attraction guide: White Horse Temple', url: 'https://www.itourschina.com/travelguide/the-white-horse-temple.htm' }
    ],
    imageCredit: 'Image from Wikimedia Commons, loaded through the website media set.'
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
      image: images.templeOfHeaven,
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
      image: guilinRiverPanoramaImage,
      alt: 'Li River bend and karst peaks near Guilin at sunrise'
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

type CityProductSeed = {
  slug: string
  name: string
  eyebrow: string
  duration: string
  route: string
  city: string
  heroImage: string
  heroAlt: string
  summary: string
  galleryTitle: string
  quoteSubject: string
  sourceNote: string
  highlights: string[]
  bestFor: string
  transport: string
  price: string
  dayTitles: string[]
  daySummaries?: string[]
  daySights: string[][]
  dayNotes?: string[]
  dayMeals?: string[]
}

function buildCityProduct(seed: CityProductSeed): TourProduct {
  const days = seed.dayTitles.map((title, index) => ({
    day: `Day ${index + 1}`,
    city: seed.city,
    meals: seed.dayMeals?.[index] || (index === 0 || index === seed.dayTitles.length - 1 ? 'B / - / -' : 'B / L / -'),
    title,
    summary:
      seed.daySummaries?.[index] ||
      `${title} with private guide pacing, reserved transfer time, and room to adjust around weather, tickets, and group energy.`,
    sights: seed.daySights[index] || [seed.city],
    note: seed.dayNotes?.[index]
  }))

  return {
    slug: seed.slug,
    name: seed.name,
    eyebrow: seed.eyebrow,
    duration: seed.duration,
    route: seed.route,
    destinations: [seed.city],
    heroImage: seed.heroImage,
    heroAlt: seed.heroAlt,
    summary: seed.summary,
    galleryTitle: seed.galleryTitle,
    quoteSubject: seed.quoteSubject,
    sourceNote: seed.sourceNote,
    highlights: seed.highlights,
    facts: [
      { label: 'Starts', value: seed.city },
      { label: 'Ends', value: seed.city },
      { label: 'Hotels', value: '4-star or boutique options' },
      { label: 'Guide', value: 'Private local guide' },
      { label: 'Transport', value: seed.transport },
      { label: 'Best for', value: seed.bestFor }
    ],
    gallery: [
      {
        title: seed.city,
        city: seed.city,
        image: seed.heroImage,
        alt: seed.heroAlt,
        featured: true
      },
      ...productGallery.beijingXianShanghai
        .filter((image) => image.city === seed.city)
        .slice(0, 3)
    ],
    days,
    hotels: [
      { city: seed.city, hotel: 'Central 4-star hotel, boutique upgrade, or family-room option by quote' }
    ],
    prices: [
      { group: 'Private 2 pax', price: seed.price, basis: 'Per person guide price, double/twin share' },
      { group: 'Private 4-6 pax', price: 'On request', basis: 'Varies by season, hotel, vehicle, and guide language' },
      { group: 'Agency group', price: 'Custom quote', basis: 'Built from target market, group size, and inclusion scope' }
    ],
    inclusions: [
      `${seed.duration.split('/')[0].trim()} route planning and reservation coordination`,
      'Private local guide and vehicle on listed touring days',
      'First gate tickets for listed sights by final quote',
      'Hotel breakfast and airport or rail-station transfer by final quote'
    ],
    exclusions: [
      'International and domestic flights unless quoted',
      'Meals not listed',
      'Optional shows, workshops, or theme-park tickets unless selected',
      'Travel insurance',
      'Guide and driver gratuities'
    ]
  }
}

const beijingCityProducts = [
  buildCityProduct({
    slug: 'beijing-central-axis-5-day',
    name: 'Beijing Essential 4-Day Tour',
    eyebrow: '4-day compact Beijing heritage product',
    duration: '4 days / 3 nights',
    route: 'Beijing',
    city: 'Beijing',
    heroImage: forbiddenCityImage,
    heroAlt: 'Forbidden City palace roofs and entrance courtyard',
    summary:
      'A tight Beijing-only product for first-time visitors, combining arrival service, hutongs, Wangfujing, Mutianyu Great Wall, Summer Palace, Olympic Park, Tiananmen Square, Forbidden City, Jingshan, Temple of Heaven, and market time in four full days.',
    galleryTitle: 'Imperial Beijing, the Great Wall, hutong life, and classic departure-day sightseeing.',
    quoteSubject: 'Beijing Essential 4-day tour quote',
    sourceNote:
      'Benchmarked against ChinaTour multi-city Beijing opening days and the supplied Golden Triangle Beijing program, then rewritten as a compact private Beijing product.',
    highlights: [
      'Keep Beijing dense enough for a short stay while still separating palace, Great Wall, hutong, and temple experiences.',
      'Use private transfers to connect large sites efficiently: Mutianyu, Summer Palace, Olympic Park, Tiananmen, Forbidden City, Jingshan, and Temple of Heaven.',
      'Add evening or street-life moments such as Wangfujing, hutong family visit, Golden Mask Show option, Qianmen, or Hongqiao Market.',
      'Place ticket-sensitive sights with clear reminders for passports, Forbidden City closure rules, and weather backup planning.'
    ],
    bestFor: 'First-time Beijing visitors',
    transport: 'Private vehicle + guided walks',
    price: 'From CNY 3,980',
    dayTitles: [
      'Arrival, hutong rickshaw and Wangfujing',
      'Mutianyu Great Wall, Summer Palace and Olympic Park',
      'Tiananmen Square, Forbidden City, Jingshan and evening show',
      'Temple of Heaven, market time and departure transfer'
    ],
    daySummaries: [
      'Meet the local English-speaking guide on arrival and start with a soft city introduction instead of wasting the first day. Ride through old hutong lanes, visit a local family courtyard when available, then continue to Wangfujing for an easy evening food-and-shopping walk before hotel check-in or rest.',
      'Spend the morning at Mutianyu Great Wall, a scenic section suited to private groups that want strong views without the most crowded central access points. Return to Beijing for Summer Palace gardens, Kunming Lake, Longevity Hill, and Seventeen-Arch Bridge, then stop outside the Bird Nest and Water Cube for Olympic Park photos.',
      'Use the most important imperial day for Tiananmen Square, the Forbidden City, and Jingshan Park. The route moves from the political and ceremonial center into palace courtyards, then climbs Jingshan for the classic north-south view over the Forbidden City. Add Golden Mask Show or another evening performance by quote.',
      'Close the route with Temple of Heaven, where Ming and Qing emperors prayed for harvests, then add Hongqiao Market, Qianmen, or a light shopping stop according to flight or rail timing. Transfer to the airport or railway station with enough buffer for departure formalities.'
    ],
    daySights: [
      ['Airport or railway pickup', 'Hutong rickshaw route', 'Local family visit option', 'Wangfujing Street', 'Central Beijing hotel'],
      ['Mutianyu Great Wall', 'Summer Palace', 'Kunming Lake', 'Olympic Park', 'Bird Nest and Water Cube exterior'],
      ['Tiananmen Square', 'Forbidden City', 'Jingshan Park', 'Golden Mask Show option'],
      ['Temple of Heaven', 'Hongqiao Market or Qianmen', 'Airport or rail-station transfer']
    ],
    dayNotes: [
      'Arrival-day touring can be shortened if the flight lands late.',
      'Cable car, chairlift, or toboggan choices at Mutianyu can be priced separately by quote.',
      'Passport details are required for Tiananmen and Forbidden City reservations; Forbidden City is normally closed on Mondays except selected holidays.',
      'Departure flights or trains should be timed late enough if full Temple of Heaven touring is required.'
    ],
    dayMeals: [
      '- / - / -',
      'B / L / -',
      'B / L / -',
      'B / - / -'
    ]
  }),
  buildCityProduct({
    slug: 'beijing-family-museums-7-day',
    name: 'Beijing Family Museums and Universal',
    eyebrow: '7-day family-friendly Beijing product',
    duration: '7 days / 6 nights',
    route: 'Beijing',
    city: 'Beijing',
    heroImage: images.templeOfHeaven,
    heroAlt: 'Temple of Heaven at sunset in Beijing',
    summary:
      'A family route with Forbidden City, national museums, science learning, campus atmosphere, Great Wall, Olympic Park, and an optional Universal Beijing day.',
    galleryTitle: 'Museums, hands-on learning, Great Wall time, and one lighter theme-park day.',
    quoteSubject: 'Beijing family museums 7-day tour quote',
    sourceNote:
      'Inspired by sixrenyou Beijing family products with National Museum, military/science museums, university visits, Great Wall, Olympic Park, and Universal Beijing.',
    highlights: [
      'Reduce fatigue by mixing museums with outdoor landmarks and free evenings.',
      'Use private transfers to keep family logistics predictable.',
      'Add child-friendly guide storytelling around palace, wall, and museum themes.',
      'Keep Universal Beijing optional so pricing stays flexible.'
    ],
    bestFor: 'Families and school groups',
    transport: 'Private vehicle',
    price: 'From CNY 6,900',
    dayTitles: ['Arrival in Beijing', 'Forbidden City and National Museum', 'Science or military museum day', 'Summer Palace and campus view', 'Great Wall and Olympic Park', 'Universal Beijing option', 'Departure'],
    daySights: [
      ['Airport pickup', 'Hotel check-in'],
      ['Tiananmen Square', 'Forbidden City', 'National Museum'],
      ['Military Museum option', 'Science Museum option'],
      ['Summer Palace', 'Tsinghua area', 'Peking University area'],
      ['Badaling or Mutianyu Great Wall', 'Bird’s Nest', 'Water Cube'],
      ['Universal Beijing Resort option'],
      ['Departure transfer']
    ]
  }),
  buildCityProduct({
    slug: 'beijing-jingwei-6-day',
    name: 'Beijing Local Flavor Heritage',
    eyebrow: '6-day imperial city and hutong life route',
    duration: '6 days / 5 nights',
    route: 'Beijing',
    city: 'Beijing',
    heroImage: palaceRoofDetailImage,
    heroAlt: 'Colorful traditional palace roof detail in Beijing',
    summary:
      'A balanced Beijing product for guests who want the Forbidden City and Great Wall plus hutongs, teahouse atmosphere, old commercial streets, and local food texture.',
    galleryTitle: 'Grand imperial landmarks with neighborhood-scale old Beijing.',
    quoteSubject: 'Beijing local flavor heritage 6-day tour quote',
    sourceNote:
      'Inspired by sixrenyou Beijing products that combine Forbidden City, Great Wall, hutongs, Lao She Teahouse, Shichahai, Nanluoguxiang, and Dashilan.',
    highlights: [
      'Keep one clear Beijing identity: imperial city plus everyday neighborhood life.',
      'Add evening atmosphere without overloading daytime sightseeing.',
      'Use hutong and teahouse time for guests who prefer culture over checklist touring.',
      'Works well for couples, small groups, and repeat China travelers.'
    ],
    bestFor: 'Couples and culture seekers',
    transport: 'Private vehicle + walking',
    price: 'From CNY 5,600',
    dayTitles: ['Arrival', 'Forbidden City and teahouse evening', 'Summer Palace, Yuanmingyuan and Temple of Heaven', 'Prince Gong Mansion and hutongs', 'Mutianyu Great Wall and Olympic Park', 'Departure'],
    daySights: [
      ['Airport pickup'],
      ['Tiananmen Square', 'Forbidden City', 'Lao She Teahouse option'],
      ['Summer Palace', 'Yuanmingyuan', 'Temple of Heaven'],
      ['Prince Gong Mansion', 'Shichahai', 'Nanluoguxiang', 'Dashilan'],
      ['Mutianyu Great Wall', 'Olympic Park'],
      ['Departure transfer']
    ]
  }),
  buildCityProduct({
    slug: 'beijing-great-wall-autumn-5-day',
    name: 'Beijing Great Wall and Autumn Parks',
    eyebrow: '5-day seasonal Beijing short break',
    duration: '5 days / 4 nights',
    route: 'Beijing',
    city: 'Beijing',
    heroImage: images.greatWall,
    heroAlt: 'Great Wall landscape near Beijing',
    summary:
      'A short seasonal route pairing Forbidden City, Summer Palace, Great Wall, Xiangshan autumn color, and hutong time for guests with limited days.',
    galleryTitle: 'Palace scale, Wall scenery, and autumn park color.',
    quoteSubject: 'Beijing Great Wall autumn 5-day tour quote',
    sourceNote:
      'Inspired by sixrenyou Beijing short products featuring Forbidden City, Summer Palace, Great Wall, Xiangshan Park, and hutong rickshaw-style touring.',
    highlights: [
      'Use a compact five-day shape for stopover and holiday clients.',
      'Put the Great Wall and seasonal parks at the center of the selling point.',
      'Keep the route easy to customize for spring blossom or autumn foliage.',
      'Build in one lighter hutong day to protect comfort.'
    ],
    bestFor: 'Seasonal short breaks',
    transport: 'Private vehicle',
    price: 'From CNY 4,500',
    dayTitles: ['Temple of Heaven arrival day', 'Forbidden City and teahouse', 'Summer Palace and Xiangshan', 'Mutianyu Great Wall', 'Prince Gong Mansion and departure'],
    daySights: [
      ['Temple of Heaven'],
      ['Tiananmen Square', 'Forbidden City', 'Teahouse option'],
      ['Summer Palace', 'Xiangshan Park'],
      ['Mutianyu Great Wall', 'Bird’s Nest', 'Water Cube'],
      ['Prince Gong Mansion', 'Shichahai']
    ]
  }),
  buildCityProduct({
    slug: 'beijing-gubei-water-town-6-day',
    name: 'Beijing and Gubei Water Town',
    eyebrow: '6-day Beijing plus Simatai night-wall route',
    duration: '6 days / 5 nights',
    route: 'Beijing · Gubei Water Town',
    city: 'Beijing',
    heroImage: summerPalaceImage,
    heroAlt: 'Summer Palace lakeside pavilions in Beijing',
    summary:
      'A Beijing route that adds Gubei Water Town and Simatai Great Wall for a slower private small-group product with one scenic overnight option.',
    galleryTitle: 'Classic Beijing with a water-town and night-wall extension.',
    quoteSubject: 'Beijing Gubei Water Town 6-day tour quote',
    sourceNote:
      'Inspired by sixrenyou Beijing private small-group products featuring Beihai, Gubei Water Town, and Simatai Great Wall.',
    highlights: [
      'Add a differentiated overnight outside the central city.',
      'Give guests a quieter Great Wall experience than standard day-trip routes.',
      'Combine palace, gardens, hutongs, and waterside scenery in one product.',
      'Strong fit for private small groups that value atmosphere and pacing.'
    ],
    bestFor: 'Private small groups',
    transport: 'Private vehicle',
    price: 'From CNY 6,200',
    dayTitles: ['Arrival', 'Forbidden City and Dashilan', 'Summer Palace and Temple of Heaven', 'Prince Gong Mansion, Beihai and hutongs', 'Gubei Water Town and Simatai Great Wall', 'Departure'],
    daySights: [
      ['Airport pickup'],
      ['Tiananmen Square', 'Forbidden City', 'Dashilan'],
      ['Summer Palace', 'Peking University area', 'Temple of Heaven'],
      ['Prince Gong Mansion', 'Beihai Park', 'Nanluoguxiang'],
      ['Gubei Water Town', 'Simatai Great Wall'],
      ['Departure transfer']
    ]
  })
]

const xianCityProducts = [
  buildCityProduct({
    slug: 'xian-terracotta-entry-5-day',
    name: 'Xi’an Entry Heritage',
    eyebrow: '5-day inbound Xi’an heritage route',
    duration: '5 days / 4 nights',
    route: 'Xi’an · Lintong',
    city: 'Xi’an',
    heroImage: terracottaWarriorsImage,
    heroAlt: 'Terracotta Warriors archaeological pit in Xi’an',
    summary:
      'A clean Xi’an entry product with Terracotta Warriors, city wall, Muslim Quarter, Big Wild Goose Pagoda, and Tang-style evening atmosphere.',
    galleryTitle: 'Terracotta Warriors, Ming city wall, and Tang-era city lights.',
    quoteSubject: 'Xian entry heritage 5-day tour quote',
    sourceNote:
      'Inspired by sixrenyou Xi’an destination products with Terracotta Warriors, Ming City Wall, Hanfu or Tang-style evening touring, and Muslim Quarter.',
    highlights: [
      'Make Xi’an sellable as a standalone inbound product.',
      'Keep archaeology, city wall, food street, and evening atmosphere in a compact route.',
      'Use Lintong as a focused Terracotta Warriors day rather than a rushed add-on.',
      'Easy to connect with Beijing, Shanghai, Chengdu, or Dunhuang.'
    ],
    bestFor: 'First-time heritage travelers',
    transport: 'Private vehicle',
    price: 'From CNY 4,600',
    dayTitles: ['Arrival in Xi’an', 'Terracotta Warriors and Yongxingfang', 'Gao Family Courtyard, Muslim Quarter and city wall', 'Big Wild Goose Pagoda and Tang city night', 'Departure'],
    daySights: [
      ['Airport or rail pickup'],
      ['Terracotta Warriors', 'Yongxingfang'],
      ['Gao Family Courtyard', 'Muslim Quarter', 'Bell Tower', 'Drum Tower', 'Ancient City Wall'],
      ['Big Wild Goose Pagoda', 'Great Tang All Day Mall', 'Tang costume option'],
      ['Departure transfer']
    ]
  }),
  buildCityProduct({
    slug: 'xian-huashan-hukou-6-day',
    name: 'Xi’an, Huashan and Hukou',
    eyebrow: '6-day Shaanxi mountain and Yellow River route',
    duration: '6 days / 5 nights',
    route: 'Xi’an · Lintong · Huashan · Hancheng · Yichuan',
    city: 'Xi’an',
    heroImage: images.xian,
    heroAlt: 'Xi’an ancient architecture and city atmosphere',
    summary:
      'A higher-impact Shaanxi product adding Huashan, Hukou Waterfall, Huaqing Palace, folk culture, noodle learning, and Terracotta Warriors.',
    galleryTitle: 'Ancient capital base with Huashan and Yellow River drama.',
    quoteSubject: 'Xian Huashan Hukou 6-day tour quote',
    sourceNote:
      'Inspired by sixrenyou Xi’an products featuring Huashan, Hukou Waterfall, Huaqing Palace, Terracotta Warriors, Guanzhong folk culture, and biangbiang noodle activities.',
    highlights: [
      'Expand Xi’an from city touring into a regional Shaanxi route.',
      'Use Huashan and Hukou as strong landscape hooks.',
      'Add craft, food, and folk-culture activities for richer group days.',
      'Best quoted with careful vehicle, hotel, and driving-hour planning.'
    ],
    bestFor: 'Active heritage travelers',
    transport: 'Private vehicle',
    price: 'From CNY 6,800',
    dayTitles: ['Xi’an arrival', 'Folk museum, Big Wild Goose Pagoda and night city', 'Hukou Waterfall via Hancheng', 'Huashan day', 'Terracotta Warriors and Huaqing Palace', 'Return to Xi’an and depart'],
    daySights: [
      ['Airport or rail pickup'],
      ['Guanzhong Folk Art Museum', 'Muslim Quarter', 'Big Wild Goose Pagoda', 'Great Tang All Day Mall'],
      ['Hukou Waterfall', 'Hancheng'],
      ['Huashan'],
      ['Terracotta Warriors', 'Huaqing Palace'],
      ['Departure transfer']
    ]
  }),
  buildCityProduct({
    slug: 'xian-family-intangible-5-day',
    name: 'Xi’an Family Intangible Culture',
    eyebrow: '5-day family archaeology and folk-art product',
    duration: '5 days / 4 nights',
    route: 'Xi’an · Lintong',
    city: 'Xi’an',
    heroImage: images.xian,
    heroAlt: 'Xi’an ancient architecture and city atmosphere',
    summary:
      'A family-friendly Xi’an plan combining Terracotta Warriors, Daming Palace, Big Wild Goose Pagoda, city wall, Tang streets, shadow puppetry, and old local performance culture.',
    galleryTitle: 'Archaeology and folk craft presented for families.',
    quoteSubject: 'Xian family intangible culture 5-day tour quote',
    sourceNote:
      'Inspired by sixrenyou Xi’an family products with Terracotta Warriors, Daming Palace, Big Wild Goose Pagoda, City Wall, Bell and Drum Towers, shadow puppetry, and local performance culture.',
    highlights: [
      'Use hands-on folk culture to make heritage easier for children.',
      'Keep daily sightseeing compact and predictable.',
      'Add evening Tang-style streets only when the group still has energy.',
      'Good for family groups, school groups, and educational travel.'
    ],
    bestFor: 'Families and education groups',
    transport: 'Private vehicle',
    price: 'From CNY 5,200',
    dayTitles: ['Arrival', 'Terracotta Warriors', 'Bailuyuan, Big Wild Goose Pagoda and Tang night', 'Daming Palace, Muslim Quarter and city wall', 'Departure'],
    daySights: [
      ['Airport or rail pickup'],
      ['Terracotta Warriors', 'Lintong'],
      ['Bailuyuan Film City option', 'Big Wild Goose Pagoda', 'Great Tang All Day Mall'],
      ['Daming Palace', 'Muslim Quarter', 'Gao Family Courtyard', 'Bell Tower', 'Drum Tower', 'Ancient City Wall'],
      ['Departure transfer']
    ]
  }),
  buildCityProduct({
    slug: 'xian-tang-night-4-day',
    name: 'Xi’an Tang Night City Break',
    eyebrow: '4-day short-stay Xi’an city product',
    duration: '4 days / 3 nights',
    route: 'Xi’an',
    city: 'Xi’an',
    heroImage: images.xian,
    heroAlt: 'Xi’an ancient architecture and city atmosphere',
    summary:
      'A short Xi’an product for weekend or add-on clients, pairing city wall, Muslim Quarter, Tang cultural streets, Big Wild Goose Pagoda, and one focused Terracotta Warriors day.',
    galleryTitle: 'A compact city break with strong evening atmosphere.',
    quoteSubject: 'Xian Tang night city break 4-day tour quote',
    sourceNote:
      'Built from common Xi’an destination-card patterns: Terracotta Warriors, city wall, Bell and Drum Towers, Muslim Quarter, Big Wild Goose Pagoda, and Tang-style night touring.',
    highlights: [
      'Fits guests who only have three nights in Xi’an.',
      'Keeps one full day for archaeology and one full day for city culture.',
      'Positions the evening scene as a selling point instead of an afterthought.',
      'Easy to combine with Beijing-Xi’an high-speed rail products.'
    ],
    bestFor: 'Short city breaks',
    transport: 'Private vehicle + guided walks',
    price: 'From CNY 3,800',
    dayTitles: ['Arrival and Muslim Quarter', 'Terracotta Warriors', 'City wall, Bell Tower and Tang night', 'Departure'],
    daySights: [
      ['Airport or rail pickup', 'Muslim Quarter'],
      ['Terracotta Warriors', 'Huaqing Palace option'],
      ['Ancient City Wall', 'Bell Tower', 'Drum Tower', 'Big Wild Goose Pagoda', 'Great Tang All Day Mall'],
      ['Departure transfer']
    ]
  }),
  buildCityProduct({
    slug: 'xian-yanan-huashan-6-day',
    name: 'Xi’an, Yan’an and Huashan Impression',
    eyebrow: '6-day Shaanxi history extension',
    duration: '6 days / 5 nights',
    route: 'Xi’an · Yan’an · Huashan · Lintong',
    city: 'Xi’an',
    heroImage: terracottaWarriorsImage,
    heroAlt: 'Terracotta Warriors archaeological pit in Xi’an',
    summary:
      'A regional Shaanxi route combining Xi’an heritage, Yan’an history, Huashan scenery, Hukou or Lintong options, and classic local food planning.',
    galleryTitle: 'Shaanxi history from ancient capital to mountain and revolutionary routes.',
    quoteSubject: 'Xian Yanan Huashan 6-day tour quote',
    sourceNote:
      'Inspired by sixrenyou mobile Xi’an routes featuring ancient-capital positioning, Terracotta Warriors, Huashan, Hukou, Yan’an, and local food reminders.',
    highlights: [
      'Give repeat travelers a deeper Shaanxi story beyond the Terracotta Warriors.',
      'Use Yan’an or Huashan as the differentiating chapter by market interest.',
      'Plan food, weather, and driving-hour reminders into the product from the start.',
      'Works for cultural study groups and mature travelers.'
    ],
    bestFor: 'Deep Shaanxi cultural groups',
    transport: 'Private vehicle / rail by quote',
    price: 'From CNY 6,500',
    dayTitles: ['Xi’an to Yan’an', 'Yan’an history route', 'Return toward Xi’an', 'Huashan or Hukou extension', 'Terracotta Warriors and city wall', 'Departure'],
    daySights: [
      ['Xi’an arrival', 'Yan’an transfer'],
      ['Yan’an Revolution Memorial option', 'Local historical sites'],
      ['Shaanxi countryside transfer', 'Local food planning'],
      ['Huashan option', 'Hukou Waterfall option'],
      ['Terracotta Warriors', 'Ancient City Wall'],
      ['Departure transfer']
    ]
  })
]

export const tourProducts: TourProduct[] = [
  ...beijingCityProducts,
  ...xianCityProducts,
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
    heroImage: guilinRiverPanoramaImage,
    heroAlt: 'Li River bend and karst peaks near Guilin at sunrise',
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
      {
        title: 'Li River Panorama',
        city: 'Guilin',
        image: guilinRiverPanoramaImage,
        alt: 'Li River bend and karst peaks near Guilin at sunrise',
        featured: true
      },
      {
        title: 'Li River Cruise',
        city: 'Guilin',
        image: guilinRiverCruiseImage,
        alt: 'Li River cruising scene with karst mountains and small boats'
      },
      {
        title: 'Guilin Sunset River',
        city: 'Guilin',
        image: guilinRiverSunsetImage,
        alt: 'Sunset reflection over the Li River near Guilin'
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
    route: 'Beijing · Shanghai · Chengdu · custom cities',
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
      'Support Beijing, Shanghai, Chengdu, and other commercial hubs.',
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
