import officeWorkImage from '@/assets/company/work.webp'

const websiteAssetBase = 'https://yj-travel.s3.amazonaws.com/website/assets'
const forbiddenCityImage = `${websiteAssetBase}/products/beijing-xian-shanghai/forbidden-city.webp`
const chengqiangImage = `${websiteAssetBase}/products/beijing-xian-shanghai/chengqiang.webp`
const longmenGrottoesImage = `${websiteAssetBase}/products/beijing-xian-shanghai/longmen-grottoes.webp`
const olympicParkImage = `${websiteAssetBase}/products/beijing-xian-shanghai/olympic-park.webp`
const palaceRoofDetailImage = `${websiteAssetBase}/products/beijing-xian-shanghai/palace-roof-detail.webp`
const shanghaiBundImage = `${websiteAssetBase}/products/beijing-xian-shanghai/waitan.webp`
const shanghaiSkylineImage = `${websiteAssetBase}/products/beijing-xian-shanghai/shanghai-skyline.webp`
const summerPalaceImage = `${websiteAssetBase}/products/beijing-xian-shanghai/summer-palace.webp`
const terracottaWarriorsImage = `${websiteAssetBase}/products/beijing-xian-shanghai/terracotta-warriors.webp`
const guilinRiverPanoramaImage = `${websiteAssetBase}/products/guilin/guilin-river-panorama.webp`
const guilinRiverCruiseImage = `${websiteAssetBase}/products/guilin/guilin-river-cruise-new.webp`
const guilinRiverSunsetImage = `${websiteAssetBase}/products/guilin/guilin-river-sunset-new.webp`
const hangzhouWestLakeOneImage = `${websiteAssetBase}/products/hangzhou/xihu1.webp`
const hangzhouWestLakeTwoImage = `${websiteAssetBase}/products/hangzhou/xihu2.webp`
const suzhouGalleryOneImage = `${websiteAssetBase}/products/suzhou/su1.webp`
const suzhouGalleryTwoImage = `${websiteAssetBase}/products/suzhou/su2.webp`
const suzhouGalleryThreeImage = `${websiteAssetBase}/products/suzhou/su3.webp`
const zhangjiajieGalleryTwoImage = `${websiteAssetBase}/products/zhangjiajie/zhang.webp`
const zhangjiajieGalleryThreeImage = `${websiteAssetBase}/products/zhangjiajie/zhang3.webp`
const lhasaGalleryTwoImage = `${websiteAssetBase}/products/lhasa/xizang.webp`
const lhasaGalleryThreeImage = `${websiteAssetBase}/products/lhasa/xizang2.webp`
const dujiangyanImage = `${websiteAssetBase}/products/chengdu/doujiangyan.webp`
const jiuzhaigouImage = `${websiteAssetBase}/products/chengdu/jiuzhaigou.webp`
const sanxingduiImage = `${websiteAssetBase}/products/chengdu/sanxingdui.webp`
const chongqingLocalOneImage = `${websiteAssetBase}/products/chongqing/chongqing.webp`
const chongqingLocalTwoImage = `${websiteAssetBase}/products/chongqing/chongqing2.webp`
const beijingHeadquartersImage = `${websiteAssetBase}/company/beijing-headquarters.webp`
const awardCabinetImage = `${websiteAssetBase}/company/certificates/award-cabinet.webp`
const awardWallImage = `${websiteAssetBase}/company/certificates/award-wall.webp`
const annualConferenceGroupImage = `${websiteAssetBase}/company/local-moments/annual-conference-group.webp`
const basketballTeamImage = `${websiteAssetBase}/company/local-moments/basketball-team.webp`
const conferenceVenueGroupImage = `${websiteAssetBase}/company/local-moments/conference-venue-group.webp`
const finnairCustomerAppreciationImage = `${websiteAssetBase}/company/local-moments/finnair-customer-appreciation.webp`
const grasslandTeamBuildingImage = `${websiteAssetBase}/company/local-moments/grassland-team-building.webp`
const imperialCostumeServiceTeamImage = `${websiteAssetBase}/company/local-moments/imperial-costume-service-team.webp`
const industryForumSigningWallImage = `${websiteAssetBase}/company/local-moments/industry-forum-signing-wall.webp`
const longtengAwardCeremonyImage = `${websiteAssetBase}/company/local-moments/longteng-award-ceremony.webp`
const officeFestivalTeamImage = `${websiteAssetBase}/company/local-moments/office-festival-team.webp`
const officeTeamVisitImage = `${websiteAssetBase}/company/local-moments/office-team-visit.webp`
const outdoorBranchTeamImage = `${websiteAssetBase}/company/local-moments/outdoor-branch-team.webp`
const partnerMeetingAwardImage = `${websiteAssetBase}/company/local-moments/partner-meeting-award.webp`
const qatarAirwaysTeamImage = `${websiteAssetBase}/company/local-moments/qatar-airways-team.webp`
const unitedAirlinesAwardStageImage = `${websiteAssetBase}/company/local-moments/united-airlines-award-stage.webp`
const unitedAirlinesDinnerImage = `${websiteAssetBase}/company/local-moments/united-airlines-dinner.webp`

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
  phone?: string
  address: string
  image?: string
  imageAlt?: string
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

export type CompanyActivityImage = CompanyMediaItem & {
  caption: string
}

export type CompanyActivityCategory = {
  slug: string
  eyebrow: string
  title: string
  summary: string
  cover: string
  coverAlt: string
  images: CompanyActivityImage[]
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
  activityCategories: CompanyActivityCategory[]
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
    { value: '2000+', label: 'Quality supplier partners' },
    { value: '20,000+', label: 'Quality customers' },
    { value: '7', label: 'Branch locations' },
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
const companyActivityImageBase = `${companyImageBase}/activities`

export const companyDetail: CompanyDetail = {
  ...companyIntro,
  heroTitle: 'Tengxuan Travel Group',
  heroSummary:
    'A Beijing-headquartered travel group connecting enterprise clients, travel agencies, airlines, and inbound China travel demand through long-running supply-chain and service capabilities.',
  photoSlots: [
    {
      label: 'Company office',
      caption: 'Tengxuan Travel Group office reception and brand wall.',
      image: officeWorkImage,
      alt: 'Tengxuan Travel Group office reception area and brand wall'
    },
    {
      label: 'Office visit',
      caption: 'Team visit and workplace culture inside the company office.',
      image: officeTeamVisitImage,
      alt: 'Tengxuan Travel team group photo inside an office'
    },
    {
      label: 'Airline partners',
      caption: 'Travel team and airline partner-facing service moments.',
      image: qatarAirwaysTeamImage,
      alt: 'Tengxuan Travel team posing with Qatar Airways themed props'
    },
    {
      label: 'Branch network',
      caption: 'Branch-team presence through outdoor activity and local events.',
      image: outdoorBranchTeamImage,
      alt: 'Tengxuan Travel branch team outdoor activity group photo'
    }
  ],
  overview: [
    {
      title: 'Established operating base',
      text:
        'Tengxuan Tourism Group Co., Ltd. was established in 2001 and is headquartered in Beijing with registered capital of 110.53 million yuan.'
    },
    {
      title: 'Supplier partner network',
      text:
        'The group works with 2000+ quality supplier partners across transportation, hotels, destination services, ticketing, and travel-resource allocation.'
    },
    {
      title: 'Broad business coverage',
      text:
        'Its business covers major transportation, independent ticketing, travel management, online booking, air cargo, and travel-resource allocation.'
    }
  ],
  branches: [
    {
      city: 'Beijing',
      role: 'Headquarters',
      phone: '+86 010-65210601',
      address: '5F 50520, Tower D, Galaxy SOHO, Chaoyangmen, Dongcheng District, Beijing',
      image: beijingHeadquartersImage,
      imageAlt: 'Tengxuan Travel Group Beijing headquarters office'
    },
    {
      city: "Xi'an",
      role: 'Branch office',
      phone: '+86 029-88489999',
      address: 'Room 2603, 26F, Block C, Wangzuo International City, No. 1 Tangyan Road, Xi’an High-Tech Zone, Shaanxi'
    },
    {
      city: 'Chengdu',
      role: 'Branch office',
      phone: '+86 028-68170115',
      address: 'Room 2102, Unit 2, Building 9, Tianfu New Valley, Chengdu High-Tech Zone, Sichuan'
    },
    {
      city: 'Hefei',
      role: 'Branch office',
      phone: '+86 0551-65238888',
      address: 'North side, 19F, Block D, Phase IV, Shushan Electronic Industrial Park, Shushan District, Hefei, Anhui'
    },
    {
      city: 'Shanghai',
      role: 'Branch office',
      phone: '+86 021-53085001',
      address: 'Room 202, Bldg 2, Linkong SOHO, 968 Jinzhong Road, Changning District, Shanghai'
    },
    {
      city: 'Hong Kong',
      role: 'Branch office',
      address: 'RM19, Unit 1003, 10/F, The Rainbow, 22 Wang Yip Street, South Yuen Long, NT'
    },
    {
      city: 'United States',
      role: 'Overseas branch',
      phone: '+1 626-723-3197',
      address: '680 Brea Canyon Road, Suite 288, Diamond Bar, CA 91789'
    }
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
      title: 'Annual conference gathering',
      label: 'Team',
      image: annualConferenceGroupImage,
      alt: 'Tengxuan Travel Group annual conference group photo',
      featured: true
    },
    {
      title: 'Outdoor branch activity',
      label: 'Team',
      image: outdoorBranchTeamImage,
      alt: 'Tengxuan Travel branch team holding an outdoor activity banner'
    },
    {
      title: 'Airline partner event',
      label: 'Partner',
      image: finnairCustomerAppreciationImage,
      alt: 'Tengxuan Travel team receiving recognition at a Finnair customer appreciation event'
    },
    {
      title: 'Industry forum presence',
      label: 'Industry',
      image: industryForumSigningWallImage,
      alt: 'Tengxuan Travel team members standing at an industry forum signing wall'
    },
    {
      title: 'Team sports activity',
      label: 'Sports',
      image: basketballTeamImage,
      alt: 'Tengxuan Travel employee basketball team on a court'
    },
    {
      title: 'Award ceremony',
      label: 'Honor',
      image: longtengAwardCeremonyImage,
      alt: 'Tengxuan Travel representatives at a Longteng award ceremony'
    }
  ],
  activityCategories: [
    {
      slug: 'partner-moments',
      eyebrow: 'Partner moments',
      title: 'Partner events, awards, and team scenes',
      summary:
        'Company photos from airline partner events, annual conferences, team activities, client appreciation scenes, and employee culture moments.',
      cover: annualConferenceGroupImage,
      coverAlt: 'Tengxuan Travel Group annual conference group photo',
      images: [
        {
          title: 'Annual conference group photo',
          label: 'Conference',
          image: annualConferenceGroupImage,
          alt: 'Tengxuan Travel Group annual conference group photo',
          caption: 'Large group photo from a company annual conference and partner-facing gathering.',
          featured: true
        },
        {
          title: 'Office team visit',
          label: 'Office',
          image: officeTeamVisitImage,
          alt: 'Tengxuan Travel team group photo inside an office',
          caption: 'Team visit scene showing the company office and workplace culture.'
        },
        {
          title: 'Partner meeting recognition',
          label: 'Partner',
          image: partnerMeetingAwardImage,
          alt: 'Tengxuan Travel team members in a partner meeting recognition photo',
          caption: 'Partner meeting and recognition moment connected to travel-resource cooperation.'
        },
        {
          title: 'Qatar Airways team moment',
          label: 'Airline',
          image: qatarAirwaysTeamImage,
          alt: 'Tengxuan Travel team posing with Qatar Airways themed props',
          caption: 'Airline partner-facing team moment with travel service and product collaboration context.'
        },
        {
          title: 'Outdoor branch team',
          label: 'Branch',
          image: outdoorBranchTeamImage,
          alt: 'Tengxuan Travel branch team holding an outdoor activity banner',
          caption: 'Branch team activity showing local team presence and group culture.'
        },
        {
          title: 'Industry forum signing wall',
          label: 'Industry',
          image: industryForumSigningWallImage,
          alt: 'Tengxuan Travel team members standing at an industry forum signing wall',
          caption: 'Industry forum scene tied to supply-chain finance and travel industry exchange.'
        },
        {
          title: 'Office festival team',
          label: 'Office',
          image: officeFestivalTeamImage,
          alt: 'Tengxuan Travel employees at a festive office photo area',
          caption: 'Festive office scene with employees and group branding.'
        },
        {
          title: 'Grassland team building',
          label: 'Team building',
          image: grasslandTeamBuildingImage,
          alt: 'Tengxuan Travel team building activity on grassland',
          caption: 'Outdoor team-building route that shows employee culture beyond the office.'
        },
        {
          title: 'Basketball team',
          label: 'Sports',
          image: basketballTeamImage,
          alt: 'Tengxuan Travel employee basketball team on a court',
          caption: 'Employee sports activity and internal team energy.'
        },
        {
          title: 'United Airlines award stage',
          label: 'Award',
          image: unitedAirlinesAwardStageImage,
          alt: 'Tengxuan Travel representatives on a United Airlines award stage',
          caption: 'Airline partner award scene from a customer appreciation event.'
        },
        {
          title: 'United Airlines dinner',
          label: 'Partner',
          image: unitedAirlinesDinnerImage,
          alt: 'Tengxuan Travel team at a United Airlines partner dinner',
          caption: 'Partner dinner scene with airline and travel-industry guests.'
        },
        {
          title: 'Conference venue group',
          label: 'Conference',
          image: conferenceVenueGroupImage,
          alt: 'Tengxuan Travel conference venue group photo',
          caption: 'Conference venue group photo showing a large-scale company gathering.'
        },
        {
          title: 'Longteng award ceremony',
          label: 'Honor',
          image: longtengAwardCeremonyImage,
          alt: 'Tengxuan Travel representatives at a Longteng award ceremony',
          caption: 'Award ceremony scene highlighting recognition from travel-industry activities.'
        },
        {
          title: 'Finnair customer appreciation',
          label: 'Airline',
          image: finnairCustomerAppreciationImage,
          alt: 'Tengxuan Travel team receiving recognition at a Finnair customer appreciation event',
          caption: 'Airline customer appreciation event showing partner recognition.'
        },
        {
          title: 'Imperial costume service team',
          label: 'Service',
          image: imperialCostumeServiceTeamImage,
          alt: 'Travel service team in imperial costumes at a Chinese heritage site',
          caption: 'Culture-themed service scene suitable for inbound China travel storytelling.'
        }
      ]
    },
    {
      slug: 'brand-events',
      eyebrow: 'Brand events',
      title: 'Exhibitions and brand moments',
      summary:
        'Trade-show booths, annual meetings, milestone celebrations, and partner-facing brand displays from Tengxuan and On The Way Business Travel.',
      cover: `${companyActivityImageBase}/exhibition-booth-display.webp`,
      coverAlt: 'On The Way Business Travel exhibition booth display',
      images: [
        {
          title: 'Trade-show booth',
          label: 'Exhibition',
          image: `${companyActivityImageBase}/exhibition-booth-display.webp`,
          alt: 'On The Way Business Travel exhibition booth with red brand display',
          caption: 'On The Way Business Travel booth prepared for partner and customer conversations.',
          featured: true
        },
        {
          title: 'Industry exhibition presence',
          label: 'Exhibition',
          image: `${companyActivityImageBase}/office-opening-ribbon-01.webp`,
          alt: 'Tengxuan team members standing at a travel industry exhibition booth',
          caption: 'Team presence at an industry event, showing group brands and travel service capabilities.'
        },
        {
          title: 'Annual meeting stage',
          label: 'Annual meeting',
          image: `${companyActivityImageBase}/annual-meeting-stage.webp`,
          alt: 'Tengxuan annual meeting stage with seated audience',
          caption: 'Annual meeting scene used for internal alignment and brand communication.'
        },
        {
          title: 'Anniversary cake',
          label: 'Celebration',
          image: `${companyActivityImageBase}/anniversary-cake.webp`,
          alt: 'Tengxuan Travel anniversary cake with company branding',
          caption: 'Anniversary celebration marking a group milestone with the Tengxuan team.'
        }
      ]
    },
    {
      slug: 'office-scenes',
      eyebrow: 'Office scenes',
      title: 'Office openings and workplace culture',
      summary:
        'Ribbon-cutting, brand-wall visits, opening ceremonies, and office celebration scenes that show the group’s workplace and branch culture.',
      cover: `${companyActivityImageBase}/office-celebration-team.webp`,
      coverAlt: 'Tengxuan office team celebration group photo',
      images: [
        {
          title: 'Office opening ribbon',
          label: 'Opening',
          image: `${companyActivityImageBase}/office-opening-ribbon-02.webp`,
          alt: 'Tengxuan office opening ribbon cutting group photo',
          caption: 'Office opening and ribbon-cutting scene with the local team.',
          featured: true
        },
        {
          title: 'Opening ceremony',
          label: 'Opening',
          image: `${companyActivityImageBase}/office-opening-ribbon-03.webp`,
          alt: 'Tengxuan office opening ceremony group photo',
          caption: 'Branch opening moment with flowers and ribbon-cutting setup.'
        },
        {
          title: 'Brand history wall',
          label: 'Office',
          image: `${companyActivityImageBase}/brand-history-wall-tour.webp`,
          alt: 'Tengxuan brand history wall inside the office',
          caption: 'Office brand wall and company development display for visitors and employees.'
        },
        {
          title: 'Lion dance opening',
          label: 'Opening',
          image: `${companyActivityImageBase}/lion-dance-opening.webp`,
          alt: 'Lion dance performance at a Tengxuan office opening event',
          caption: 'Opening celebration with lion dance and workplace ceremony.'
        },
        {
          title: 'Office celebration team',
          label: 'Team',
          image: `${companyActivityImageBase}/office-celebration-team.webp`,
          alt: 'Tengxuan team group photo inside the office',
          caption: 'Team celebration photo inside the office with festive decorations.'
        },
        {
          title: 'Festive office visit',
          label: 'Office',
          image: `${companyActivityImageBase}/office-festive-visit.webp`,
          alt: 'Two team members visiting Tengxuan office during a festive season',
          caption: 'Employee visit and festive office setup around the group brand wall.'
        }
      ]
    },
    {
      slug: 'team-culture',
      eyebrow: 'Team culture',
      title: 'Team building and employee activities',
      summary:
        'Outdoor routes, office team photos, sports participation, and group-building scenes that show Tengxuan’s employee culture.',
      cover: `${companyActivityImageBase}/outdoor-team-photo.webp`,
      coverAlt: 'Tengxuan outdoor team building group photo',
      images: [
        {
          title: 'Outdoor team route',
          label: 'Team building',
          image: `${companyActivityImageBase}/outdoor-team-photo.webp`,
          alt: 'Tengxuan employees in an outdoor team building group photo',
          caption: 'Outdoor group-building activity with the Tengxuan team.',
          featured: true
        },
        {
          title: 'Office team night',
          label: 'Team',
          image: `${companyActivityImageBase}/office-team-night.webp`,
          alt: 'Tengxuan employees posing together in an office at night',
          caption: 'Office team photo after a shared internal activity.'
        },
        {
          title: 'Sichuan marathon finish',
          label: 'Sports',
          image: `${companyActivityImageBase}/sichuan-marathon-finish.webp`,
          alt: 'Two team members finishing a Sichuan marathon event',
          caption: 'Employee sports participation and team spirit during a marathon event.'
        }
      ]
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
    },
    {
      title: 'Award certificate cabinet',
      label: 'Certificates',
      image: awardCabinetImage,
      alt: 'Tengxuan award certificates and trophies displayed in glass cabinets'
    },
    {
      title: 'Honor display wall',
      label: 'Honors',
      image: awardWallImage,
      alt: 'Tengxuan honor wall with certificates, plaques, trophies, and partner awards'
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
    image: images.shanghai,
    alt: 'Shanghai city skyline',
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
    name: '4 Days Beijing Tour with Mutianyu Great Wall',
    summary: 'Beijing arrival, palace highlights, Mutianyu Great Wall, Temple of Heaven, hutongs, and departure transfer.',
    meta: '4 days · TXBJ0402',
    featured: true,
    productSlug: 'tx-beijing-mutianyu-4-day',
    image: images.greatWall,
    alt: 'Great Wall landscape near Beijing',
    facts: [
      { label: 'Length', value: '4 days' },
      { label: 'Route', value: 'Beijing' },
      { label: 'Code', value: 'TXBJ0402' }
    ]
  },
  {
    name: '1 Day Jinshanling Great Wall Hiking Tour',
    summary: 'A focused Beijing day tour for the Jinshanling Great Wall hiking route with private guide and land transfer.',
    meta: '1 day · TXBJ0102',
    productSlug: 'tx-jinshanling-hiking-1-day'
  },
  {
    name: '72 Hours Visa-Free Beijing Highlights Tour',
    summary: 'A short Beijing stopover route built around arrival transfer, imperial sights, Great Wall touring, and onward departure.',
    meta: '3 days · TXBJ0301',
    productSlug: 'tx-beijing-visa-free-3-day'
  },
  {
    name: '4 Days Beijing Tour with Juyongguan Great Wall',
    summary: 'A compact Beijing city package with Tiananmen, Forbidden City, Summer Palace, Temple of Heaven, Juyongguan, and hutongs.',
    meta: '4 days · TXBJ0401',
    productSlug: 'tx-beijing-juyongguan-4-day'
  },
  {
    name: '11 Days Best of China Tour',
    summary: "Beijing, Xi'an, Guilin/Yangshuo, and Shanghai in a classic China headline route.",
    meta: '11 days · TXGBC11',
    productSlug: 'tx-best-of-china-11-day'
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

const bestOfChina11DayProduct: TourProduct = {
  slug: 'best-of-china-11-day',
  name: '11-Day Best of China',
  eyebrow: '11-day headline China route',
  duration: '11 days / 10 nights',
  route: 'Beijing · Xi’an · Guilin · Shanghai',
  destinations: ['Beijing', 'Xi’an', 'Guilin', 'Yangshuo', 'Shanghai'],
  heroImage: guilinRiverPanoramaImage,
  heroAlt: 'Li River bend and karst peaks near Guilin at sunrise',
  summary:
    'A longer classic route for travelers who want the most recognizable China highlights: Beijing, Xi’an, Guilin and Yangshuo scenery, and Shanghai.',
  galleryTitle: 'Great Wall, Terracotta Warriors, Li River landscapes, and Shanghai skyline.',
  quoteSubject: '11-Day Best of China quote',
  sourceNote:
    'Benchmarked against the referenced ChinaTour 11-day Best of China public route concept; final operation, pricing, and service scope are controlled by Tengxuan quotation.',
  highlights: [
    'Give Beijing three nights so the Great Wall, Forbidden City, hutongs, and Temple of Heaven do not feel rushed.',
    'Use Xi’an for the Terracotta Warriors, city wall, and Tang or Muslim Quarter evening texture.',
    'Add Guilin and Yangshuo as the landscape break before the Shanghai finish.',
    'Suitable for first-time leisure travelers, family groups, and agency products needing a recognizable multi-city China route.'
  ],
  facts: [
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Shanghai' },
    { label: 'Hotels', value: '4-star or 5-star options' },
    { label: 'Guide', value: 'Private local guides' },
    { label: 'Transport', value: 'Rail + domestic flight' },
    { label: 'Best for', value: 'First-time classic China groups' }
  ],
  gallery: [
    productGallery.classic[0],
    productGallery.classic[1],
    productGallery.classic[2],
    productGallery.classic[3],
    {
      title: 'Li River Cruise',
      city: 'Guilin',
      image: guilinRiverCruiseImage,
      alt: 'Li River cruising scene with karst mountains and small boats'
    }
  ],
  days: [
    {
      day: 'Day 1',
      city: 'Beijing',
      meals: '- / - / -',
      title: 'Arrival in Beijing',
      summary: 'Meet the guide, transfer to the hotel, and keep the evening open for rest or a light neighborhood walk.',
      sights: ['Airport pickup', 'Hotel check-in']
    },
    {
      day: 'Day 2',
      city: 'Beijing',
      meals: 'B / L / -',
      title: 'Forbidden City and hutongs',
      summary: 'Visit Tiananmen Square, the Forbidden City, Jingshan, and hutongs to frame Beijing’s imperial and neighborhood layers.',
      sights: ['Tiananmen Square', 'Forbidden City', 'Jingshan Park', 'Hutong walk']
    },
    {
      day: 'Day 3',
      city: 'Beijing',
      meals: 'B / L / -',
      title: 'Great Wall and imperial garden',
      summary: 'Tour the Great Wall, then use the afternoon for Summer Palace, Temple of Heaven, or a seasonal Beijing garden plan.',
      sights: ['Great Wall', 'Summer Palace option', 'Temple of Heaven option']
    },
    {
      day: 'Day 4',
      city: 'Beijing to Xi’an',
      meals: 'B / - / -',
      title: 'Train to Xi’an and city wall',
      summary: 'Take high-speed rail to Xi’an and begin with the Ancient City Wall, Bell and Drum Tower area, or Muslim Quarter.',
      sights: ['High-speed rail', 'Ancient City Wall', 'Muslim Quarter']
    },
    {
      day: 'Day 5',
      city: 'Xi’an',
      meals: 'B / L / -',
      title: 'Terracotta Warriors and Tang city',
      summary: 'Visit the Terracotta Warriors with enough interpretation time, then add Big Wild Goose Pagoda or Great Tang All Day Mall.',
      sights: ['Terracotta Warriors', 'Big Wild Goose Pagoda', 'Great Tang All Day Mall option']
    },
    {
      day: 'Day 6',
      city: 'Xi’an to Guilin',
      meals: 'B / - / -',
      title: 'Fly to Guilin',
      summary: 'Fly to Guilin and keep the arrival chapter light with a riverside walk, cave visit, or simple dinner arrangement.',
      sights: ['Domestic flight', 'Riverside walk', 'Reed Flute Cave option']
    },
    {
      day: 'Day 7',
      city: 'Guilin to Yangshuo',
      meals: 'B / L / -',
      title: 'Li River cruise',
      summary: 'Cruise the Li River to Yangshuo and use the afternoon for countryside scenery, village roads, or a relaxed old-town evening.',
      sights: ['Li River cruise', 'Yangshuo countryside', 'Old-town walk']
    },
    {
      day: 'Day 8',
      city: 'Yangshuo or Guilin',
      meals: 'B / L / -',
      title: 'Countryside or rice-terrace extension',
      summary: 'Add light cycling, buggy touring, cooking class, or Longji rice terraces according to season and mobility.',
      sights: ['Yangshuo countryside', 'Cooking class option', 'Longji option']
    },
    {
      day: 'Day 9',
      city: 'Guilin to Shanghai',
      meals: 'B / - / -',
      title: 'Fly to Shanghai',
      summary: 'Transfer to Shanghai and reserve the evening for the Bund, Nanjing Road, or a Huangpu River option.',
      sights: ['Domestic flight', 'The Bund', 'Nanjing Road']
    },
    {
      day: 'Day 10',
      city: 'Shanghai',
      meals: 'B / L / -',
      title: 'Old and new Shanghai',
      summary: 'Visit Yu Garden, the old quarter, Shanghai Museum or French Concession, then finish with skyline views.',
      sights: ['Yu Garden', 'Old quarter', 'Shanghai Museum option', 'Pudong skyline']
    },
    {
      day: 'Day 11',
      city: 'Shanghai',
      meals: 'B / - / -',
      title: 'Departure',
      summary: 'Private transfer to the airport for international departure.',
      sights: ['Airport transfer']
    }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Central Beijing 4-star or 5-star option' },
    { city: 'Xi’an', hotel: 'Xi’an city-center or rail-access hotel by quote' },
    { city: 'Guilin/Yangshuo', hotel: 'Guilin 4-star and Yangshuo boutique option by quote' },
    { city: 'Shanghai', hotel: 'Central Shanghai 4-star or 5-star option' }
  ],
  prices: [
    { group: 'Private 2 pax', price: 'Custom quote', basis: 'Depends on hotel level, domestic flights, guide language, and season' },
    { group: 'Private 4-6 pax', price: 'On request', basis: 'Per person, double/twin share after final transport plan' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from group size, rooming, market, and inclusion scope' }
  ],
  inclusions: [
    '10 nights’ accommodation with daily breakfast by selected hotel tier',
    'Private local guides and vehicles on listed touring days',
    'First gate entrance fees for listed core sights by final quote',
    'Second-class rail Beijing-Xi’an and economy domestic flights by final plan',
    'Li River cruise and airport or station transfers by final quotation'
  ],
  exclusions: [
    'International flights',
    'China visa fee if applicable',
    'Meals, shows, cruises, cableways, and workshops not confirmed in final quote',
    'Travel insurance',
    'Guide and driver gratuities'
  ]
}

const txBeijingMutianyu4DayProduct: TourProduct = {
  slug: 'tx-beijing-mutianyu-4-day',
  name: '4 Days Beijing Tour with Mutianyu Great Wall',
  eyebrow: 'TXBJ0402 · 4-day Beijing city package',
  duration: '4 days / 3 nights',
  route: 'Beijing',
  destinations: ['Beijing'],
  heroImage: images.greatWall,
  heroAlt: 'Great Wall landscape near Beijing',
  summary:
    'A Beijing short-stay product aligned to the ChinaTour Mutianyu-style city package: arrival transfer, imperial Beijing, Mutianyu Great Wall, Temple of Heaven, old Beijing lanes, and departure transfer.',
  galleryTitle: 'Mutianyu Great Wall, palace Beijing, temple ritual space, and old-neighborhood texture.',
  quoteSubject: 'TXBJ0402 Beijing Mutianyu 4-day tour quote',
  sourceNote:
    'Reference structure follows ChinaTour INBJ0402 at product level; wording, code, final inclusions, and quote terms are Tengxuan-owned.',
  highlights: [
    'Keep the four-day Beijing rhythm close to the reference package: arrive, tour the imperial core, visit Mutianyu, then close with hutongs and transfer.',
    'Use Mutianyu Great Wall as the wall section for guests who want restored scenery and a more photogenic Beijing wall day.',
    'Combine Tiananmen Square, Forbidden City, Summer Palace, Temple of Heaven, and hutongs into a compact first-time Beijing route.',
    'Price and service scope can mirror the land-only package format while final hotel, meals, and tickets remain quote-controlled.'
  ],
  facts: [
    { label: 'Code', value: 'TXBJ0402' },
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Beijing' },
    { label: 'Hotels', value: 'Beijing 4-star or similar' },
    { label: 'Guide', value: 'English-speaking local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'First-time Beijing visitors' }
  ],
  gallery: [
    { title: 'Mutianyu Great Wall', city: 'Beijing', image: images.greatWall, alt: 'Great Wall towers along a mountain ridge', featured: true },
    { title: 'Forbidden City', city: 'Beijing', image: forbiddenCityImage, alt: 'Forbidden City palace roofs and entrance courtyard' },
    { title: 'Summer Palace', city: 'Beijing', image: summerPalaceImage, alt: 'Summer Palace lakeside pavilions in Beijing' },
    { title: 'Temple of Heaven', city: 'Beijing', image: images.templeOfHeaven, alt: 'Temple of Heaven at sunset in Beijing' }
  ],
  days: [
    {
      day: 'Day 1',
      city: 'Beijing',
      meals: '- / - / -',
      title: 'Arrive in Beijing',
      summary: 'Meet on arrival at the airport or railway station and transfer to the Beijing hotel. Keep the rest of the day open for rest or a light self-guided walk.',
      sights: ['Arrival transfer', 'Hotel check-in', 'Free time']
    },
    {
      day: 'Day 2',
      city: 'Beijing',
      meals: 'B / L / D',
      title: 'Tiananmen Square, Forbidden City and Summer Palace',
      summary: 'Start with Tiananmen Square and the Forbidden City, then continue to Summer Palace for lakeside imperial-garden scenery. Add a Peking duck dinner when included in the quote.',
      sights: ['Tiananmen Square', 'Forbidden City', 'Summer Palace', 'Peking duck dinner option'],
      note: 'Passport information is required for Tiananmen and Forbidden City reservations.'
    },
    {
      day: 'Day 3',
      city: 'Beijing',
      meals: 'B / L / -',
      title: 'Mutianyu Great Wall and Temple of Heaven',
      summary: 'Visit Temple of Heaven, then drive out for the Mutianyu Great Wall. Cable car, chairlift, or toboggan can be handled as optional items according to the final quote.',
      sights: ['Temple of Heaven', 'Mutianyu Great Wall', 'Great Wall cable car option']
    },
    {
      day: 'Day 4',
      city: 'Beijing',
      meals: 'B / - / -',
      title: 'Hutong route and departure',
      summary: 'Explore Beijing hutongs by rickshaw or guided walk before transfer to the airport or railway station for onward travel.',
      sights: ['Hutong rickshaw or walk', 'Old Beijing neighborhood', 'Departure transfer']
    }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Beijing 4-star hotel or similar by final quote' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 790', basis: 'Reference package level; final Tengxuan quote may differ by date and hotel' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after hotel, meals, tickets, and vehicle are confirmed' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, meal scope, guide language, and transfer plan' }
  ],
  inclusions: [
    'Beijing accommodation with breakfast by selected hotel tier',
    'Airport or railway station transfers in Beijing',
    'English-speaking local guide on listed touring days',
    'Private vehicle for listed sightseeing and transfers',
    'Entrance tickets and meals as confirmed in the final quote'
  ],
  exclusions: [
    'International and domestic flights',
    'China visa fees if applicable',
    'Meals, shows, cable cars, or activities not listed in the final quote',
    'Travel insurance',
    'Guide and driver gratuities'
  ]
}

const txJinshanlingHiking1DayProduct: TourProduct = {
  slug: 'tx-jinshanling-hiking-1-day',
  name: '1 Day Jinshanling Great Wall Hiking Tour',
  eyebrow: 'TXBJ0102 · 1-day Great Wall hiking product',
  duration: '8-10 hours',
  route: 'Beijing · Jinshanling Great Wall · Beijing',
  destinations: ['Beijing'],
  heroImage: images.greatWall,
  heroAlt: 'Great Wall towers crossing a mountain ridge',
  summary:
    'A focused Great Wall hiking day based on the ChinaTour Jinshanling format: hotel pickup, private land transfer, guided wall hike, simple lunch planning, and hotel return.',
  galleryTitle: 'A harder Great Wall hiking day for photographers and active travelers.',
  quoteSubject: 'TXBJ0102 Jinshanling Great Wall hiking tour quote',
  sourceNote:
    'Reference structure follows ChinaTour INBJ0102: one-day Beijing-to-Beijing Jinshanling hiking product with changed product code and rewritten copy.',
  highlights: [
    'Keep the reference day-tour shape: Beijing hotel pickup, about 2.5 hours each way by road, guided Jinshanling hiking, then return.',
    'Position Jinshanling as the more demanding and photogenic Great Wall option rather than a general city tour.',
    'Make lunch simple and practical for a wall hike; guests should bring snacks or packed food when required.',
    'Suitable for active travelers; quote should confirm fitness expectations, weather backup, and transfer timing.'
  ],
  facts: [
    { label: 'Code', value: 'TXBJ0102' },
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Beijing' },
    { label: 'Hotels', value: 'Not included' },
    { label: 'Guide', value: 'Private local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Active Great Wall hikers' }
  ],
  gallery: [
    { title: 'Jinshanling Great Wall', city: 'Beijing', image: images.greatWall, alt: 'Great Wall running over mountain ridges', featured: true },
    { title: 'Great Wall Towers', city: 'Beijing', image: palaceRoofDetailImage, alt: 'Traditional roof detail used as a Beijing route texture image' },
    { title: 'Beijing Transfer Base', city: 'Beijing', image: images.beijingHutong, alt: 'Traditional Beijing hutong lane' }
  ],
  days: [
    {
      day: 'Day Tour',
      city: 'Beijing',
      meals: '- / - / -',
      title: 'Jinshanling Great Wall hiking day',
      summary:
        'Meet the guide at the Beijing hotel lobby and drive to Jinshanling. Hike with the guide on the wall route, using a pace suited to the group, then return by private vehicle to the hotel.',
      sights: ['Hotel pickup', 'Jinshanling Great Wall', 'Guided wall hike', 'Hotel return'],
      note: 'The reference hike is physically demanding. Confirm weather, footwear, water, packed lunch, and guest fitness before final booking.'
    }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Accommodation not included in the day-tour price' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 299', basis: 'Reference package level; final Tengxuan quote may differ by date and party size' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after vehicle, guide, entrance, and pickup hotel are confirmed' }
  ],
  inclusions: [
    'Private Beijing hotel pickup and return transfer',
    'English-speaking hiking guide',
    'Great Wall admission by final quote',
    'Operational planning and day-tour communication'
  ],
  exclusions: [
    'Accommodation',
    'Meals unless confirmed in the final quote',
    'Personal expenses and travel insurance',
    'Guide and driver gratuities',
    'Services outside Beijing pickup and return plan'
  ]
}

const txBeijingVisaFree3DayProduct: TourProduct = {
  slug: 'tx-beijing-visa-free-3-day',
  name: '72 Hours Visa-Free Beijing Highlights Tour',
  eyebrow: 'TXBJ0301 · 72-hour Beijing stopover product',
  duration: '3 days / 2 nights',
  route: 'Beijing',
  destinations: ['Beijing'],
  heroImage: forbiddenCityImage,
  heroAlt: 'Forbidden City palace roofs and entrance courtyard',
  summary:
    'A Beijing stopover product for eligible transit travelers, shaped around arrival transfer, the Forbidden City and Summer Palace, a Great Wall day, and onward departure within a short visa-free window.',
  galleryTitle: 'A short Beijing transit window focused on the highest-recognition sights.',
  quoteSubject: 'TXBJ0301 72-hour visa-free Beijing highlights quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour 72-hour Beijing highlights product; copy, code, and quote terms are rewritten for Tengxuan.',
  highlights: [
    'Designed for travelers using a short Beijing transit stay, with airport timing treated as part of the route design.',
    'Prioritize the imperial center, Summer Palace, Temple of Heaven, and one Great Wall section inside three days.',
    'Keep hotel, transfer, and ticket reservations tightly coordinated so the stopover does not waste time.',
    'Final eligibility depends on current transit policy, passport, route, and ticketed onward destination.'
  ],
  facts: [
    { label: 'Code', value: 'TXBJ0301' },
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Beijing' },
    { label: 'Hotels', value: 'Beijing 4-star or similar' },
    { label: 'Guide', value: 'English-speaking local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Short visa-free stopovers' }
  ],
  gallery: [
    { title: 'Forbidden City', city: 'Beijing', image: forbiddenCityImage, alt: 'Forbidden City palace roofs and entrance courtyard', featured: true },
    { title: 'Great Wall', city: 'Beijing', image: images.greatWall, alt: 'Great Wall landscape near Beijing' },
    { title: 'Summer Palace', city: 'Beijing', image: summerPalaceImage, alt: 'Summer Palace lakeside pavilions in Beijing' },
    { title: 'Temple of Heaven', city: 'Beijing', image: images.templeOfHeaven, alt: 'Temple of Heaven at sunset in Beijing' }
  ],
  days: [
    {
      day: 'Day 1',
      city: 'Beijing',
      meals: '- / - / -',
      title: 'Arrival transfer and light Beijing orientation',
      summary: 'Meet at the airport or railway station, transfer to the hotel, and add a light Wangfujing, Qianmen, or neighborhood walk if arrival time allows.',
      sights: ['Arrival transfer', 'Hotel check-in', 'Optional Wangfujing or Qianmen walk']
    },
    {
      day: 'Day 2',
      city: 'Beijing',
      meals: 'B / L / -',
      title: 'Tiananmen, Forbidden City, Summer Palace',
      summary: 'Use the main sightseeing day for Tiananmen Square, the Forbidden City, and Summer Palace, with private transfers and guide interpretation.',
      sights: ['Tiananmen Square', 'Forbidden City', 'Summer Palace'],
      note: 'Transit documents, passport details, and current entry rules must be checked before quotation.'
    },
    {
      day: 'Day 3',
      city: 'Beijing',
      meals: 'B / L / -',
      title: 'Great Wall, Temple of Heaven and departure',
      summary: 'Visit a Great Wall section and Temple of Heaven before transferring back to the airport or railway station for onward travel.',
      sights: ['Great Wall', 'Temple of Heaven', 'Departure transfer'],
      note: 'Departure should be late enough to protect the Great Wall day and airport formalities.'
    }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Beijing 4-star hotel or similar by final quote' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on arrival time, hotel, wall section, and departure timing' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from transit policy, rooming list, and service scope' }
  ],
  inclusions: [
    'Beijing hotel accommodation with breakfast by final quote',
    'Airport or railway station transfers',
    'English-speaking local guide on listed touring days',
    'Private vehicle and first gate entrance tickets by final quote',
    'Transit-timing planning support'
  ],
  exclusions: [
    'International flights and onward tickets',
    'Visa or transit-document costs if applicable',
    'Meals and optional activities not listed in final quote',
    'Travel insurance',
    'Guide and driver gratuities'
  ]
}

const txBeijingJuyongguan4DayProduct: TourProduct = {
  slug: 'tx-beijing-juyongguan-4-day',
  name: '4 Days Beijing Tour with Juyongguan Great Wall',
  eyebrow: 'TXBJ0401 · 4-day Beijing city package',
  duration: '4 days / 3 nights',
  route: 'Beijing',
  destinations: ['Beijing'],
  heroImage: summerPalaceImage,
  heroAlt: 'Summer Palace lakeside pavilions in Beijing',
  summary:
    'A compact Beijing city package aligned to the ChinaTour Juyongguan reference: arrival, Tiananmen and Forbidden City, Summer Palace, Temple of Heaven, Juyongguan Great Wall, hutongs, and departure.',
  galleryTitle: 'Juyongguan Great Wall, imperial Beijing, Summer Palace, and hutong life.',
  quoteSubject: 'TXBJ0401 Beijing Juyongguan 4-day tour quote',
  sourceNote:
    'Reference structure follows ChinaTour INBJ0401 at itinerary level; product code, wording, and final quote terms are Tengxuan-owned.',
  highlights: [
    'Match the reference four-day rhythm closely: arrival, imperial Beijing, Juyongguan and Temple of Heaven, hutongs and departure.',
    'Use Juyongguan as the Great Wall section for a classic mountain-pass wall experience close to Beijing.',
    'Include a Peking duck dinner or similar special meal only when the final quote confirms it.',
    'Keep the product suitable for land-only city-package sales and small agency groups.'
  ],
  facts: [
    { label: 'Code', value: 'TXBJ0401' },
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Beijing' },
    { label: 'Hotels', value: 'Beijing 4-star or similar' },
    { label: 'Guide', value: 'English-speaking local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Short heritage trips' }
  ],
  gallery: [
    { title: 'Summer Palace', city: 'Beijing', image: summerPalaceImage, alt: 'Summer Palace lakeside pavilions in Beijing', featured: true },
    { title: 'Great Wall', city: 'Beijing', image: images.greatWall, alt: 'Great Wall landscape near Beijing' },
    { title: 'Forbidden City', city: 'Beijing', image: forbiddenCityImage, alt: 'Forbidden City palace roofs and entrance courtyard' },
    { title: 'Hutong Walk', city: 'Beijing', image: images.beijingHutong, alt: 'Traditional Beijing hutong lane' }
  ],
  days: [
    {
      day: 'Day 1',
      city: 'Beijing',
      meals: '- / - / -',
      title: 'Arrive in Beijing',
      summary: 'Meet on arrival and transfer to the hotel. Keep the first day simple for check-in and recovery.',
      sights: ['Arrival transfer', 'Hotel check-in']
    },
    {
      day: 'Day 2',
      city: 'Beijing',
      meals: 'B / L / D',
      title: 'Tiananmen Square, Forbidden City and Summer Palace',
      summary: 'Tour Tiananmen Square, the Forbidden City, and Summer Palace. Add a Peking duck banquet or special dinner when included in the final quote.',
      sights: ['Tiananmen Square', 'Forbidden City', 'Summer Palace', 'Peking duck dinner option'],
      note: 'Passport details are required for Tiananmen and Forbidden City reservation checks.'
    },
    {
      day: 'Day 3',
      city: 'Beijing',
      meals: 'B / L / -',
      title: 'Temple of Heaven and Juyongguan Great Wall',
      summary: 'Visit Temple of Heaven, then continue to Juyongguan Great Wall. A jade-culture or shopping stop should only be included if the final commercial scope requires it.',
      sights: ['Temple of Heaven', 'Juyongguan Great Wall', 'Jade culture stop option']
    },
    {
      day: 'Day 4',
      city: 'Beijing',
      meals: 'B / - / -',
      title: 'Hutongs and departure',
      summary: 'Explore Beijing hutongs by rickshaw or guided walk, then transfer to the airport or railway station for onward travel.',
      sights: ['Hutong rickshaw or walk', 'Old Beijing lanes', 'Departure transfer']
    }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Beijing Four Points by Sheraton level or similar by final quote' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 790', basis: 'Reference package level; final Tengxuan quote may differ by date and hotel' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after hotel, meals, tickets, and vehicle are confirmed' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, meal scope, guide language, and transfer plan' }
  ],
  inclusions: [
    'Beijing accommodation with breakfast by selected hotel tier',
    'Airport or railway station transfers in Beijing',
    'English-speaking local guide on listed touring days',
    'Private vehicle for listed sightseeing and transfers',
    'Entrance tickets and meals as confirmed in the final quote'
  ],
  exclusions: [
    'International and domestic flights',
    'China visa fees if applicable',
    'Meals, shows, shopping stops, or activities not listed in the final quote',
    'Travel insurance',
    'Guide and driver gratuities'
  ]
}

const txBestOfChina11DayProduct: TourProduct = {
  ...bestOfChina11DayProduct,
  slug: 'tx-best-of-china-11-day',
  name: '11 Days Best of China Tour',
  eyebrow: 'TXGBC11 · 11-day classic China route',
  quoteSubject: 'TXGBC11 11 Days Best of China quote',
  sourceNote:
    'Reference structure follows ChinaTour GBC11 at route level: Beijing, Xi’an, Guilin/Yangshuo, and Shanghai. Product code, wording, and final quote terms are Tengxuan-owned.',
  facts: [
    { label: 'Code', value: 'TXGBC11' },
    ...bestOfChina11DayProduct.facts
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 3,690', basis: 'Public reference level; final Tengxuan quote may differ by dates, flights, and hotels' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on hotel level, domestic flights, guide language, and season' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from group size, rooming, market, and inclusion scope' }
  ]
}

const txGuilinYangshuoHighlights3DayProduct: TourProduct = {
  slug: 'tx-guilin-yangshuo-highlights-3-day',
  name: '3 Days Guilin and Yangshuo Highlights Tour',
  eyebrow: 'TXKW0301 · 3-day Guilin and Yangshuo landscape route',
  duration: '3 days / 2 nights',
  route: 'Guilin · Yangshuo · Guilin',
  destinations: ['Guilin', 'Yangshuo'],
  heroImage: guilinRiverPanoramaImage,
  heroAlt: 'Li River bend and karst peaks near Guilin at sunrise',
  summary:
    'A compact Guilin short-stay product based on the supplied ChinaTour INKW0301 reference: Guilin arrival, Li River scenery, Yangshuo countryside, and a light city finish.',
  galleryTitle: 'Li River karst peaks, Yangshuo countryside, and easy Guilin city pacing.',
  quoteSubject: 'TXKW0301 Guilin Yangshuo 3-day quote',
  sourceNote:
    'Reference structure follows ChinaTour INKW0301 at product concept level; copy, product code, pricing, and final service terms are Tengxuan-owned.',
  highlights: [
    'Use Guilin arrival day for a light city introduction instead of overloading the first evening.',
    'Make the Li River and Yangshuo countryside the visual center of the three-day route.',
    'Keep Yangshuo flexible for cycling, buggy routes, village walks, West Street, or a softer countryside pace.',
    'Suitable as a South China extension after Beijing, Xi’an, Shanghai, Chengdu, or Hong Kong.'
  ],
  facts: [
    { label: 'Code', value: 'TXKW0301' },
    { label: 'Starts', value: 'Guilin' },
    { label: 'Ends', value: 'Guilin' },
    { label: 'Hotels', value: 'Guilin or Yangshuo by quote' },
    { label: 'Guide', value: 'Private local guide' },
    { label: 'Transport', value: 'Private vehicle + Li River cruise by final plan' },
    { label: 'Best for', value: 'Short Guilin landscape extensions' }
  ],
  gallery: [
    { title: 'Li River Panorama', city: 'Guilin', image: guilinRiverPanoramaImage, alt: 'Li River bend and karst peaks near Guilin at sunrise', featured: true },
    { title: 'Li River Cruise', city: 'Guilin to Yangshuo', image: guilinRiverCruiseImage, alt: 'Li River cruising scene with karst mountains and small boats' },
    { title: 'Guilin Sunset', city: 'Guilin', image: guilinRiverSunsetImage, alt: 'Sunset reflection over the Li River near Guilin' }
  ],
  days: [
    { day: 'Day 1', city: 'Guilin', meals: '- / - / -', title: 'Arrive in Guilin', summary: 'Meet the guide on arrival and transfer to the hotel. If timing allows, add a light Reed Flute Cave, Elephant Trunk Hill, or riverside walk.', sights: ['Arrival transfer', 'Hotel check-in', 'Reed Flute Cave option', 'Riverside walk'] },
    { day: 'Day 2', city: 'Guilin to Yangshuo', meals: 'B / L / -', title: 'Li River cruise and Yangshuo countryside', summary: 'Cruise or drive the Guilin-to-Yangshuo landscape corridor, then use the afternoon for countryside scenery, village roads, West Street, or a relaxed local activity.', sights: ['Li River cruise', 'Yangshuo countryside', 'West Street option', 'Village route option'] },
    { day: 'Day 3', city: 'Yangshuo or Guilin', meals: 'B / - / -', title: 'Countryside morning and departure', summary: 'Keep the final morning flexible for a short cycling route, buggy tour, market walk, or transfer back to Guilin for onward flight or rail.', sights: ['Cycling option', 'Buggy route option', 'Guilin transfer', 'Departure transfer'] }
  ],
  hotels: [
    { city: 'Guilin / Yangshuo', hotel: 'Guilin city hotel or Yangshuo boutique stay by final quote' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on hotel, Li River cruise class, guide, vehicle, and arrival or departure timing' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, meal scope, and river-route inventory' }
  ],
  inclusions: [
    'Accommodation with breakfast by selected hotel tier',
    'Arrival, departure, and listed city transfers',
    'English-speaking local guide on listed touring days',
    'Private vehicle for land sightseeing and transfers',
    'Li River cruise or landscape corridor arrangement by final quote',
    'First gate entrance tickets and meals as confirmed in the final quote'
  ],
  exclusions: [
    'International or domestic flights and China visa fees if applicable',
    'Meals, shows, cableways, battery cars, and optional activities not listed in the final quote',
    'Optional Yangshuo activities unless confirmed in the final quote',
    'Personal expenses and travel insurance',
    'Guide and driver gratuities'
  ]
}

const txGuilinYangshuoLongji4DayProduct: TourProduct = {
  slug: 'tx-guilin-yangshuo-longji-4-day',
  name: '4 Days Guilin, Yangshuo and Longji Terraces Tour',
  eyebrow: 'TXKW0401 · 4-day Guilin, Yangshuo and Longji terraces route',
  duration: '4 days / 3 nights',
  route: 'Guilin · Yangshuo · Longji · Guilin',
  destinations: ['Guilin', 'Yangshuo', 'Longji'],
  heroImage: guilinRiverSunsetImage,
  heroAlt: 'Sunset reflection over the Li River near Guilin',
  summary:
    'A four-day Guilin landscape product based on the supplied ChinaTour INKW0401 reference, adding Longji rice terraces to the Li River and Yangshuo countryside chapter.',
  galleryTitle: 'Guilin karst scenery, Yangshuo countryside, and Longji rice-terrace extension.',
  quoteSubject: 'TXKW0401 Guilin Yangshuo Longji 4-day quote',
  sourceNote:
    'Reference structure follows ChinaTour INKW0401 at product concept level; copy, product code, pricing, and final service terms are Tengxuan-owned.',
  highlights: [
    'Add Longji when the group wants a stronger rural and mountain landscape chapter beyond the Li River.',
    'Keep Yangshuo for countryside rhythm, not only as the endpoint of a transfer day.',
    'Plan Longji with road time, walking difficulty, weather, terrace season, and luggage handling in mind.',
    'Works as a compact Guangxi extension for leisure groups, families, photographers, and agency itineraries.'
  ],
  facts: [
    { label: 'Code', value: 'TXKW0401' },
    { label: 'Starts', value: 'Guilin' },
    { label: 'Ends', value: 'Guilin' },
    { label: 'Hotels', value: 'Guilin + Yangshuo by quote' },
    { label: 'Guide', value: 'Private local guide' },
    { label: 'Transport', value: 'Private vehicle + Li River cruise by final plan' },
    { label: 'Best for', value: 'Guilin routes needing Longji terraces' }
  ],
  gallery: [
    { title: 'Guilin Sunset', city: 'Guilin', image: guilinRiverSunsetImage, alt: 'Sunset reflection over the Li River near Guilin', featured: true },
    { title: 'Li River Cruise', city: 'Guilin to Yangshuo', image: guilinRiverCruiseImage, alt: 'Li River cruising scene with karst mountains and small boats' },
    { title: 'Li River Panorama', city: 'Guilin', image: guilinRiverPanoramaImage, alt: 'Li River bend and karst peaks near Guilin at sunrise' }
  ],
  days: [
    { day: 'Day 1', city: 'Guilin', meals: '- / - / -', title: 'Arrive in Guilin', summary: 'Meet on arrival, transfer to the hotel, and keep the day light with a riverside walk, Reed Flute Cave, or Elephant Trunk Hill according to timing.', sights: ['Arrival transfer', 'Hotel check-in', 'Reed Flute Cave option', 'Elephant Trunk Hill option'] },
    { day: 'Day 2', city: 'Guilin to Yangshuo', meals: 'B / L / -', title: 'Li River cruise to Yangshuo', summary: 'Use the classic Guilin-to-Yangshuo river corridor for the main karst scenery day, then add West Street, village roads, cycling, or a buggy route.', sights: ['Li River cruise', 'Yangshuo countryside', 'West Street option', 'Cycling or buggy option'] },
    { day: 'Day 3', city: 'Yangshuo to Longji to Guilin', meals: 'B / L / -', title: 'Longji rice terraces', summary: 'Drive to Longji rice terraces for layered mountain scenery and village viewpoints, then return to Guilin or stay near the terraces when the final plan allows.', sights: ['Longji rice terraces', 'Village viewpoints', 'Mountain walking route'], note: 'Road time, walking level, weather, terrace season, and luggage handling should be confirmed before quotation.' },
    { day: 'Day 4', city: 'Guilin', meals: 'B / - / -', title: 'Guilin departure', summary: 'Transfer to Guilin airport or railway station. If departure is late, add a light city market, cave, or riverside module.', sights: ['Departure transfer', 'City walk option', 'Market option'] }
  ],
  hotels: [
    { city: 'Guilin', hotel: 'Guilin city hotel by quote' },
    { city: 'Yangshuo / Longji', hotel: 'Yangshuo boutique stay or Longji guesthouse option by final plan' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on hotel, Li River cruise class, Longji vehicle time, guide, and season' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, meal scope, and terrace-route operating plan' }
  ],
  inclusions: [
    'Accommodation with breakfast by selected hotel tier',
    'Arrival, departure, and listed city transfers',
    'English-speaking local guide on listed touring days',
    'Private vehicle for land sightseeing and Longji transfers',
    'Li River cruise and Longji transfer arrangement by final quote',
    'First gate entrance tickets and meals as confirmed in the final quote'
  ],
  exclusions: [
    'International or domestic flights and China visa fees if applicable',
    'Meals, shows, cableways, battery cars, and optional activities not listed in the final quote',
    'Cableways, battery cars, village shuttles, or optional activities unless confirmed',
    'Personal expenses and travel insurance',
    'Guide and driver gratuities'
  ]
}

const sichuanPackageInclusions = [
  'Accommodation with breakfast by selected hotel tier',
  'Airport or railway station transfers in the listed cities',
  'English-speaking local guide on listed touring days',
  'Private vehicle for city sightseeing and land transfers',
  'First gate entrance tickets and meals as confirmed in the final quote'
]

const sichuanPackageExclusions = [
  'International flights and China visa fees if applicable',
  'Meals, shows, cableways, battery cars, and optional activities not listed in the final quote',
  'Personal expenses and travel insurance',
  'Guide and driver gratuities',
  'Services outside the confirmed itinerary scope'
]

const txBestOfChinaPanda13DayProduct: TourProduct = {
  slug: 'tx-best-of-china-panda-13-day',
  name: '13 Days Best of China and Panda Tour',
  eyebrow: 'TXCH1202 · 13-day classic China + panda route',
  duration: '13 days / 12 nights',
  route: 'Beijing · Xi’an · Guilin · Yangshuo · Chengdu · Shanghai',
  destinations: ['Beijing', 'Xi’an', 'Guilin', 'Yangshuo', 'Chengdu', 'Shanghai'],
  heroImage: guilinRiverCruiseImage,
  heroAlt: 'Li River cruising scene with karst mountains and small boats',
  summary:
    'A broad first-time China route that keeps the classic Beijing, Xi’an, Guilin, Yangshuo, and Shanghai arc, then adds Chengdu for the Giant Panda Base and Sichuan culture.',
  galleryTitle: 'Imperial capitals, karst river scenery, pandas, and Shanghai city energy.',
  quoteSubject: 'TXCH1202 13 Days Best of China and Panda quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INCH1202 route and Chengdu category listing; copy, product code, pricing, and final service terms are Tengxuan-owned.',
  highlights: [
    'Use Beijing and Xi’an for the highest-recognition heritage layer: Great Wall, Forbidden City, hutongs, Terracotta Warriors, and Tang city texture.',
    'Keep Guilin and Yangshuo as the landscape chapter with Li River, karst scenery, and slower countryside routing.',
    'Add Chengdu for the Giant Panda Base, relaxed teahouse culture, Jinli or Kuanzhai lanes, and optional Sichuan opera.',
    'Finish in Shanghai so the route closes with museum time, Yu Garden, the Bund, and Pudong skyline views.'
  ],
  facts: [
    { label: 'Code', value: 'TXCH1202' },
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Shanghai' },
    { label: 'Hotels', value: '4-star or 5-star options' },
    { label: 'Guide', value: 'Private local guides' },
    { label: 'Transport', value: 'Rail + domestic flights' },
    { label: 'Best for', value: 'First-time China travelers who want pandas added to the classic route' }
  ],
  gallery: [
    { title: 'Li River Cruise', city: 'Guilin', image: guilinRiverCruiseImage, alt: 'Li River cruising scene with karst mountains and small boats', featured: true },
    productGallery.classic[0],
    productGallery.classic[1],
    { title: 'Panda Base', city: 'Chengdu', image: images.chengdu, alt: 'Giant panda eating bamboo in Chengdu' },
    productGallery.classic[3]
  ],
  days: [
    { day: 'Day 1', city: 'Beijing', meals: '- / - / -', title: 'Arrival in Beijing', summary: 'Meet the guide on arrival and transfer to the hotel. Keep the evening light for rest or a short neighborhood walk.', sights: ['Arrival transfer', 'Hotel check-in'] },
    { day: 'Day 2', city: 'Beijing', meals: 'B / L / -', title: 'Imperial Beijing', summary: 'Visit Tiananmen Square, the Forbidden City, Jingshan, and a hutong route to connect the imperial axis with old neighborhood life.', sights: ['Tiananmen Square', 'Forbidden City', 'Jingshan Park', 'Hutong walk'], note: 'Passport details are required for Tiananmen and Forbidden City reservations.' },
    { day: 'Day 3', city: 'Beijing', meals: 'B / L / -', title: 'Great Wall and royal gardens', summary: 'Drive to the Great Wall, then return for Summer Palace or Temple of Heaven according to timing, season, and guest mobility.', sights: ['Great Wall', 'Summer Palace option', 'Temple of Heaven option'] },
    { day: 'Day 4', city: 'Beijing to Xi’an', meals: 'B / - / -', title: 'High-speed train to Xi’an', summary: 'Take high-speed rail to Xi’an and begin with the Ancient City Wall, Bell and Drum Tower area, or Muslim Quarter.', sights: ['High-speed rail', 'Ancient City Wall', 'Muslim Quarter'] },
    { day: 'Day 5', city: 'Xi’an', meals: 'B / L / -', title: 'Terracotta Warriors and Tang city', summary: 'Tour the Terracotta Warriors with enough interpretation time, then add Big Wild Goose Pagoda or Great Tang All Day Mall.', sights: ['Terracotta Warriors', 'Big Wild Goose Pagoda', 'Great Tang All Day Mall option'] },
    { day: 'Day 6', city: 'Xi’an to Guilin', meals: 'B / - / -', title: 'Fly to Guilin', summary: 'Fly to Guilin and use the arrival day for a riverside walk, cave option, or simple local dinner arrangement.', sights: ['Domestic flight', 'Guilin riverside', 'Reed Flute Cave option'] },
    { day: 'Day 7', city: 'Guilin to Yangshuo', meals: 'B / L / -', title: 'Li River cruise', summary: 'Cruise the Li River to Yangshuo and keep the afternoon for countryside scenery, old-town time, or a light activity.', sights: ['Li River cruise', 'Yangshuo countryside', 'West Street option'] },
    { day: 'Day 8', city: 'Yangshuo or Guilin', meals: 'B / L / -', title: 'Karst countryside day', summary: 'Build the day around cycling, buggy touring, cooking class, a village walk, or Longji rice terraces depending on season.', sights: ['Yangshuo countryside', 'Cooking class option', 'Longji option'] },
    { day: 'Day 9', city: 'Guilin to Chengdu', meals: 'B / - / -', title: 'Fly to Chengdu', summary: 'Transfer to Chengdu and keep the evening open for Jinli, Kuanzhai Alley, teahouse culture, or Sichuan cuisine.', sights: ['Domestic flight', 'Jinli or Kuanzhai Alley', 'Sichuan dinner option'] },
    { day: 'Day 10', city: 'Chengdu', meals: 'B / L / -', title: 'Panda Base and Chengdu life', summary: 'Visit the Giant Panda Base in the morning, then use the afternoon for Wenshu Temple, a teahouse, Jinli, or Sichuan opera.', sights: ['Chengdu Giant Panda Base', 'Wenshu Temple option', 'Teahouse', 'Sichuan opera option'] },
    { day: 'Day 11', city: 'Chengdu to Shanghai', meals: 'B / - / -', title: 'Fly to Shanghai', summary: 'Fly to Shanghai and reserve the evening for the Bund, Nanjing Road, or a Huangpu River cruise option.', sights: ['Domestic flight', 'The Bund', 'Nanjing Road'] },
    { day: 'Day 12', city: 'Shanghai', meals: 'B / L / -', title: 'Old and new Shanghai', summary: 'Visit Yu Garden, the old quarter, Shanghai Museum or French Concession, then finish with skyline views.', sights: ['Yu Garden', 'Old quarter', 'Shanghai Museum option', 'Pudong skyline'] },
    { day: 'Day 13', city: 'Shanghai', meals: 'B / - / -', title: 'Departure from Shanghai', summary: 'Private transfer to the airport for international departure or onward China travel.', sights: ['Airport transfer'] }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Central Beijing 4-star or 5-star option' },
    { city: 'Xi’an', hotel: 'Xi’an city-center or rail-access hotel by quote' },
    { city: 'Guilin/Yangshuo', hotel: 'Guilin 4-star and Yangshuo boutique option by quote' },
    { city: 'Chengdu', hotel: 'Central Chengdu 4-star or 5-star option' },
    { city: 'Shanghai', hotel: 'Central Shanghai 4-star or 5-star option' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 2,890', basis: 'Public reference level; final Tengxuan quote may differ by date, flights, and hotel tier' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after hotel, domestic flights, rail, and guide language are confirmed' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, market, meal scope, and inclusion level' }
  ],
  inclusions: [
    '12 nights’ accommodation with daily breakfast by selected hotel tier',
    'Private local guides and vehicles on listed touring days',
    'First gate entrance fees for listed core sights by final quote',
    'Second-class rail and economy domestic flights by final plan',
    'Airport or station transfers and Li River cruise by final quotation'
  ],
  exclusions: [
    'International flights',
    'China visa fee if applicable',
    'Meals, shows, cruises, cableways, workshops, and optional activities not confirmed in final quote',
    'Travel insurance',
    'Guide and driver gratuities'
  ]
}

const txChengduJiuzhaigouHuanglongDujiangyan7DayProduct: TourProduct = {
  slug: 'tx-chengdu-jiuzhaigou-huanglong-dujiangyan-7-day',
  name: '7 Days Chengdu, Jiuzhaigou, Huanglong and Dujiangyan Tour',
  eyebrow: 'TXSC0601 · 7-day Sichuan nature + heritage route',
  duration: '7 days / 6 nights',
  route: 'Chengdu · Jiuzhaigou · Huanglong · Dujiangyan · Chengdu',
  destinations: ['Chengdu', 'Jiuzhaigou', 'Huanglong', 'Dujiangyan'],
  heroImage: images.dujiangyan,
  heroAlt: 'Dujiangyan Irrigation System near Chengdu',
  summary:
    'A Sichuan route focused on pandas, Jiuzhaigou Valley, Huanglong travertine pools, and Dujiangyan, with Chengdu as the air and culture base.',
  galleryTitle: 'Pandas, blue Jiuzhaigou lakes, Huanglong pools, and ancient waterworks.',
  quoteSubject: 'TXSC0601 Chengdu Jiuzhaigou Huanglong Dujiangyan quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INSC0601 product and readable goods-page itinerary; copy, product code, and final quote terms are Tengxuan-owned.',
  highlights: [
    'Pair the Giant Panda Base with a flight or protected transfer plan into Jiuzhaigou so guests do not lose the Sichuan wildlife theme.',
    'Dedicate a full sightseeing day to Jiuzhaigou Valley rather than treating it as a short stop.',
    'Use Huanglong as the highland landscape counterpoint, with timing and altitude notes confirmed before booking.',
    'Add Dujiangyan on the Chengdu side to give the route a clear cultural-engineering finish.'
  ],
  facts: [
    { label: 'Code', value: 'TXSC0601' },
    { label: 'Starts', value: 'Chengdu' },
    { label: 'Ends', value: 'Chengdu' },
    { label: 'Hotels', value: 'Chengdu + Jiuzhaigou by quote' },
    { label: 'Guide', value: 'English-speaking local guide' },
    { label: 'Transport', value: 'Private vehicle + flight or rail by season' },
    { label: 'Best for', value: 'Travelers prioritizing Jiuzhaigou with a Chengdu panda base' }
  ],
  gallery: [
    { title: 'Dujiangyan', city: 'Dujiangyan', image: images.dujiangyan, alt: 'Dujiangyan Irrigation System near Chengdu', featured: true },
    { title: 'Jiuzhaigou Valley', city: 'Jiuzhaigou', image: images.jiuzhaigou, alt: 'Blue lake and forest scenery in Jiuzhaigou Valley' },
    { title: 'Panda Base', city: 'Chengdu', image: images.chengdu, alt: 'Giant panda eating bamboo in Chengdu' },
    { title: 'Chengdu Culture', city: 'Chengdu', image: images.sanxingdui, alt: 'Sanxingdui Museum exterior near Chengdu' }
  ],
  days: [
    { day: 'Day 1', city: 'Chengdu', meals: '- / - / -', title: 'Fly to Chengdu', summary: 'Arrive in Chengdu or begin the international flight plan toward Chengdu, the gateway city for the Sichuan route.', sights: ['Flight to Chengdu', 'Route preparation'] },
    { day: 'Day 2', city: 'Chengdu', meals: '- / - / -', title: 'Arrive in Chengdu', summary: 'Meet the guide at the airport and transfer to the hotel. Keep the rest of the day open for rest or a light Chengdu walk.', sights: ['Airport pickup', 'Hotel check-in', 'Free time'] },
    { day: 'Day 3', city: 'Chengdu to Jiuzhaigou', meals: 'B / L / -', title: 'Panda Base and transfer to Jiuzhaigou', summary: 'Visit Chengdu Giant Panda Base in the morning, then transfer by flight, rail-plus-road, or private land plan to Jiuzhaigou according to seasonal operation.', sights: ['Chengdu Giant Panda Base', 'Jiuzhaigou transfer', 'Hotel check-in'] },
    { day: 'Day 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Jiuzhaigou Valley full-day visit', summary: 'Spend the day inside Jiuzhaigou Valley with a guide-planned route through lakes, waterfalls, forest roads, and key viewpoints.', sights: ['Nuorilang Waterfall', 'Five-Color Lake', 'Long Lake', 'Pearl Shoal'] },
    { day: 'Day 5', city: 'Jiuzhaigou to Huanglong to Chengdu', meals: 'B / L / -', title: 'Huanglong Scenic Area and return to Chengdu', summary: 'Drive to Huanglong Scenic Area for travertine pools and mountain views, then return to Chengdu by the confirmed transport plan.', sights: ['Huanglong Scenic Area', 'Travertine pools', 'Return to Chengdu'], note: 'Altitude, weather, and road timing should be checked before final confirmation.' },
    { day: 'Day 6', city: 'Dujiangyan', meals: 'B / L / -', title: 'Dujiangyan and Chengdu culture', summary: 'Visit Dujiangyan Irrigation System, then return to Chengdu for Wenshu Temple, Kuanzhai Alley, Jinli, or a teahouse experience.', sights: ['Dujiangyan Irrigation System', 'Wenshu Temple option', 'Kuanzhai Alley or Jinli'] },
    { day: 'Day 7', city: 'Chengdu', meals: 'B / - / -', title: 'Departure from Chengdu', summary: 'Transfer to Chengdu airport or railway station for departure or an onward China extension.', sights: ['Departure transfer'] }
  ],
  hotels: [
    { city: 'Chengdu', hotel: 'Holiday Inn Express Chengdu West Gate level or similar by final quote' },
    { city: 'Jiuzhaigou', hotel: 'Qian He International Hotel level or similar by final quote' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 1,690', basis: 'Public reference level; final Tengxuan quote may differ by date, transport, and hotel tier' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after Jiuzhaigou transport, rooms, meals, and tickets are confirmed' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, guide language, and seasonal access plan' }
  ],
  inclusions: sichuanPackageInclusions,
  exclusions: sichuanPackageExclusions
}

const txChengduGiantPanda4DayProduct: TourProduct = {
  slug: 'tx-chengdu-giant-panda-4-day',
  name: '4 Days Chengdu and Giant Panda Tour',
  eyebrow: 'TXCT0401 · 4-day Chengdu panda city package',
  duration: '4 days / 3 nights',
  route: 'Chengdu',
  destinations: ['Chengdu'],
  heroImage: images.chengdu,
  heroAlt: 'Giant panda resting in Chengdu',
  summary:
    'A short Chengdu product for travelers who want the Giant Panda Base, teahouse life, old streets, and a flexible city-culture day without leaving Sichuan’s capital.',
  galleryTitle: 'Pandas, Chengdu slow-life culture, Jinli lanes, and museum or teahouse options.',
  quoteSubject: 'TXCT0401 Chengdu Giant Panda 4-day quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INCT0401 product title and Chengdu package listing; copy, product code, and final quote terms are Tengxuan-owned.',
  highlights: [
    'Keep the trip short and practical for travelers adding Chengdu before or after another China route.',
    'Schedule the Panda Base in the morning when pandas are generally more active.',
    'Use the second touring block for Wenshu Temple, People’s Park, Jinli, Kuanzhai Alley, Sichuan cuisine, or Sichuan opera.',
    'Optional Sanxingdui or Dujiangyan can replace a city-culture block when guests want more history or heritage.'
  ],
  facts: [
    { label: 'Code', value: 'TXCT0401' },
    { label: 'Starts', value: 'Chengdu' },
    { label: 'Ends', value: 'Chengdu' },
    { label: 'Hotels', value: 'Chengdu 4-star or similar' },
    { label: 'Guide', value: 'English-speaking local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Short Chengdu stopovers and panda-focused families' }
  ],
  gallery: [
    { title: 'Panda Base', city: 'Chengdu', image: images.chengdu, alt: 'Giant panda eating bamboo in Chengdu', featured: true },
    { title: 'Dujiangyan Option', city: 'Dujiangyan', image: images.dujiangyan, alt: 'Dujiangyan Irrigation System near Chengdu' },
    { title: 'Sanxingdui Option', city: 'Chengdu', image: images.sanxingdui, alt: 'Sanxingdui Museum exterior near Chengdu' }
  ],
  days: [
    { day: 'Day 1', city: 'Chengdu', meals: '- / - / -', title: 'Arrive in Chengdu', summary: 'Meet the guide on arrival and transfer to the hotel. Keep the rest of the day flexible for rest or a simple food walk.', sights: ['Arrival transfer', 'Hotel check-in', 'Free time'] },
    { day: 'Day 2', city: 'Chengdu', meals: 'B / L / -', title: 'Giant Panda Base and old Chengdu', summary: 'Visit the Giant Panda Base in the morning, then continue with Wenshu Temple, People’s Park, a teahouse, Jinli, or Kuanzhai Alley.', sights: ['Chengdu Giant Panda Base', 'Wenshu Temple', 'People’s Park teahouse', 'Jinli or Kuanzhai Alley'] },
    { day: 'Day 3', city: 'Chengdu', meals: 'B / L / -', title: 'Flexible Chengdu culture day', summary: 'Choose Sanxingdui Museum, Dujiangyan, a food route, Sichuan cooking, or Sichuan opera according to the guest profile.', sights: ['Sanxingdui option', 'Dujiangyan option', 'Sichuan cuisine option', 'Sichuan opera option'] },
    { day: 'Day 4', city: 'Chengdu', meals: 'B / - / -', title: 'Departure from Chengdu', summary: 'Transfer to the airport or railway station for departure or onward travel.', sights: ['Departure transfer'] }
  ],
  hotels: [
    { city: 'Chengdu', hotel: 'Central Chengdu 4-star hotel or similar by final quote' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 750', basis: 'Public reference level; final Tengxuan quote may differ by date and hotel tier' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after hotel, guide, vehicle, and optional day choice are confirmed' }
  ],
  inclusions: sichuanPackageInclusions,
  exclusions: sichuanPackageExclusions
}

const txChengduJiuzhaigouEmei8DayProduct: TourProduct = {
  slug: 'tx-chengdu-jiuzhaigou-mt-emei-8-day',
  name: '8 Days Chengdu, Jiuzhaigou and Mt. Emei Tour',
  eyebrow: 'TXSC0701 · 8-day Sichuan nature + sacred mountain route',
  duration: '8 days / 7 nights',
  route: 'Chengdu · Jiuzhaigou · Huanglong · Leshan · Mt. Emei · Chengdu',
  destinations: ['Chengdu', 'Jiuzhaigou', 'Huanglong', 'Leshan', 'Mt. Emei'],
  heroImage: images.jiuzhaigou,
  heroAlt: 'Blue lake and forest scenery in Jiuzhaigou Valley',
  summary:
    'An eight-day Sichuan route combining Chengdu pandas, Jiuzhaigou Valley, Huanglong, Leshan Giant Buddha, and Mt. Emei.',
  galleryTitle: 'A fuller Sichuan route: pandas, Jiuzhaigou water, Huanglong pools, Leshan, and Emei mountain culture.',
  quoteSubject: 'TXSC0701 Chengdu Jiuzhaigou Mt. Emei 8-day quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INSC0701 product page: Chengdu, Jiuzhaigou, Huanglong, Leshan, and Mt. Emei; copy, product code, and final terms are Tengxuan-owned.',
  highlights: [
    'Use Chengdu as the gateway, with the Panda Base before the highland scenic section.',
    'Give Jiuzhaigou enough time for a full valley day rather than a rushed pass-through.',
    'Add Huanglong for colorful limestone terraces and mountain scenery, subject to weather and altitude conditions.',
    'Close with Leshan Giant Buddha and Mt. Emei for Buddhist heritage, cliff-scale sculpture, and mountain viewpoints.'
  ],
  facts: [
    { label: 'Code', value: 'TXSC0701' },
    { label: 'Starts', value: 'Chengdu' },
    { label: 'Ends', value: 'Chengdu' },
    { label: 'Hotels', value: 'Chengdu + Jiuzhaigou + Emei by quote' },
    { label: 'Guide', value: 'English-speaking local guide' },
    { label: 'Transport', value: 'Private vehicle + flight or rail by season' },
    { label: 'Best for', value: 'Travelers wanting both Sichuan scenery and Buddhist mountain heritage' }
  ],
  gallery: [
    { title: 'Jiuzhaigou Valley', city: 'Jiuzhaigou', image: images.jiuzhaigou, alt: 'Blue lake and forest scenery in Jiuzhaigou Valley', featured: true },
    { title: 'Panda Base', city: 'Chengdu', image: images.chengdu, alt: 'Giant panda eating bamboo in Chengdu' },
    { title: 'Chengdu Heritage', city: 'Chengdu', image: images.dujiangyan, alt: 'Dujiangyan Irrigation System near Chengdu' },
    { title: 'Sichuan Culture', city: 'Chengdu', image: images.sanxingdui, alt: 'Sanxingdui Museum exterior near Chengdu' }
  ],
  days: [
    { day: 'Day 1', city: 'Chengdu', meals: '- / - / -', title: 'Fly to Chengdu', summary: 'Begin the flight plan toward Chengdu and prepare for the Sichuan route.', sights: ['Flight to Chengdu'] },
    { day: 'Day 2', city: 'Chengdu', meals: '- / - / -', title: 'Arrive in Chengdu', summary: 'Meet the guide at the airport and transfer to the hotel. Keep the day open for rest or a light city walk.', sights: ['Airport pickup', 'Hotel check-in'] },
    { day: 'Day 3', city: 'Chengdu to Jiuzhaigou', meals: 'B / L / -', title: 'Panda Base and transfer to Jiuzhaigou', summary: 'Visit Chengdu Giant Panda Base, then transfer to Jiuzhaigou by the confirmed seasonal transport plan.', sights: ['Chengdu Giant Panda Base', 'Jiuzhaigou transfer', 'Hotel check-in'] },
    { day: 'Day 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Jiuzhaigou Valley', summary: 'Spend a full day inside Jiuzhaigou Valley with lakes, waterfalls, forest roads, and key viewpoints sequenced by weather and crowd flow.', sights: ['Nuorilang Waterfall', 'Five-Color Lake', 'Long Lake', 'Pearl Shoal'] },
    { day: 'Day 5', city: 'Jiuzhaigou to Huanglong to Chengdu', meals: 'B / L / -', title: 'Huanglong and return to Chengdu', summary: 'Visit Huanglong Scenic Area for travertine pools and mountain scenery, then return to Chengdu.', sights: ['Huanglong Scenic Area', 'Travertine pools', 'Return to Chengdu'], note: 'Confirm altitude, road timing, and weather before final operation.' },
    { day: 'Day 6', city: 'Leshan to Mt. Emei', meals: 'B / L / -', title: 'Leshan Giant Buddha and Mt. Emei', summary: 'Drive to Leshan for the Giant Buddha, then continue to Mt. Emei and check in near the mountain.', sights: ['Leshan Giant Buddha', 'Mt. Emei transfer', 'Mountain-area hotel'] },
    { day: 'Day 7', city: 'Mt. Emei to Chengdu', meals: 'B / L / -', title: 'Mt. Emei sightseeing', summary: 'Explore Mt. Emei with cable car, Golden Summit, monastery, or lower-mountain route options according to weather and guest fitness, then return to Chengdu.', sights: ['Mt. Emei', 'Golden Summit option', 'Cable car option', 'Return to Chengdu'] },
    { day: 'Day 8', city: 'Chengdu', meals: 'B / - / -', title: 'Departure from Chengdu', summary: 'Transfer to Chengdu airport or railway station for departure.', sights: ['Departure transfer'] }
  ],
  hotels: [
    { city: 'Chengdu', hotel: 'Central Chengdu 4-star hotel or similar by final quote' },
    { city: 'Jiuzhaigou', hotel: 'Jiuzhaigou scenic-area hotel by final quote' },
    { city: 'Mt. Emei', hotel: 'Mt. Emei base or mountain-area hotel by final quote' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 1,790', basis: 'Public reference level; final Tengxuan quote may differ by date, transport, and hotel tier' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after highland transport, rooms, meals, tickets, and Emei options are confirmed' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, guide language, and seasonal access plan' }
  ],
  inclusions: sichuanPackageInclusions,
  exclusions: sichuanPackageExclusions
}

const txChengduVisaFree3DayProduct: TourProduct = {
  slug: 'tx-chengdu-visa-free-3-day',
  name: '72 Hours Visa-Free Chengdu Highlights Tour',
  eyebrow: 'TXCT0301 · 72-hour Chengdu stopover product',
  duration: '3 days / 2 nights',
  route: 'Chengdu',
  destinations: ['Chengdu'],
  heroImage: images.sanxingdui,
  heroAlt: 'Sanxingdui Museum exterior near Chengdu',
  summary:
    'A compact Chengdu stopover route for eligible transit travelers, focused on airport timing, pandas, old Chengdu culture, and an optional food or teahouse evening.',
  galleryTitle: 'A short Chengdu transit window built around pandas and city culture.',
  quoteSubject: 'TXCT0301 72-hour Chengdu highlights quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INCT0301 title and Chengdu package listing; copy, product code, pricing, and final visa-free eligibility checks are Tengxuan-owned.',
  highlights: [
    'Designed around a short Chengdu transit stay, with airport timing and onward tickets treated as part of the route plan.',
    'Prioritize the Giant Panda Base and Chengdu slow-life scenes instead of overloading the stopover.',
    'Use Wenshu Temple, People’s Park, Jinli, Kuanzhai Alley, Sichuan cuisine, or Sichuan opera as flexible city-culture modules.',
    'Final eligibility depends on current transit policy, passport, route, and ticketed onward destination.'
  ],
  facts: [
    { label: 'Code', value: 'TXCT0301' },
    { label: 'Starts', value: 'Chengdu' },
    { label: 'Ends', value: 'Chengdu' },
    { label: 'Hotels', value: 'Chengdu 4-star or similar' },
    { label: 'Guide', value: 'English-speaking local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Short Chengdu visa-free stopovers' }
  ],
  gallery: [
    { title: 'Sanxingdui Option', city: 'Chengdu', image: images.sanxingdui, alt: 'Sanxingdui Museum exterior near Chengdu', featured: true },
    { title: 'Dujiangyan Option', city: 'Dujiangyan', image: images.dujiangyan, alt: 'Dujiangyan Irrigation System near Chengdu' },
    { title: 'Panda Base', city: 'Chengdu', image: images.chengdu, alt: 'Giant panda eating bamboo in Chengdu' }
  ],
  days: [
    { day: 'Day 1', city: 'Chengdu', meals: '- / - / -', title: 'Arrival transfer and light Chengdu orientation', summary: 'Meet at Chengdu airport or railway station, transfer to the hotel, and add a light Jinli or Kuanzhai Alley walk if arrival time allows.', sights: ['Arrival transfer', 'Hotel check-in', 'Jinli or Kuanzhai Alley option'] },
    { day: 'Day 2', city: 'Chengdu', meals: 'B / L / -', title: 'Panda Base and Chengdu culture', summary: 'Visit Chengdu Giant Panda Base in the morning, then continue with Wenshu Temple, People’s Park teahouse, Sichuan cuisine, or Sichuan opera.', sights: ['Chengdu Giant Panda Base', 'Wenshu Temple option', 'People’s Park teahouse', 'Sichuan opera option'], note: 'Transit documents, passport details, and current entry rules must be checked before quotation.' },
    { day: 'Day 3', city: 'Chengdu', meals: 'B / - / -', title: 'Departure or short city extension', summary: 'Transfer to the airport or railway station. If departure is late enough, add Sanxingdui, Dujiangyan, or a food route as an optional extension.', sights: ['Departure transfer', 'Sanxingdui option', 'Dujiangyan option'] }
  ],
  hotels: [
    { city: 'Chengdu', hotel: 'Central Chengdu 4-star hotel or similar by final quote' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'From USD 449', basis: 'Public reference level; final Tengxuan quote may differ by date and hotel tier' },
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on arrival time, hotel, guide, and departure timing' }
  ],
  inclusions: [
    'Chengdu hotel accommodation with breakfast by final quote',
    'Airport or railway station transfers',
    'English-speaking local guide on listed touring days',
    'Private vehicle and first gate entrance tickets by final quote',
    'Transit-timing planning support'
  ],
  exclusions: [
    'International flights and onward tickets',
    'Visa or transit-document costs if applicable',
    'Meals and optional activities not listed in final quote',
    'Travel insurance',
    'Guide and driver gratuities'
  ]
}

const chinaTourRemoteImages = {
  splendidChina:
    'https://chinatour.com/wp-content/uploads/2025/12/SplendidChinaFolkVillageTicketinGuangdongChina-Klook.jpg',
  grandChinaYangtze:
    'https://chinatour.com/wp-content/uploads/2025/12/beijing-yangtze-tour.jpg',
  yangtzeCruise:
    'https://chinatour.com/wp-content/uploads/2025/12/century-paragon-cruise_3.jpg',
  lhasaEssence:
    'https://chinatour.com/wp-content/uploads/2025/12/4-days-lhasa-city-tour.jpg',
  tibetTrain:
    'https://chinatour.com/wp-content/uploads/2025/12/7-Days-Tibet-Pilgrim-Tour-by-Train-from-Xining.jpg',
  xining:
    'https://chinatour.com/wp-content/uploads/2025/12/Xining_-_53725921152-1.jpg',
  xianTerracotta:
    'https://chinatour.com/wp-content/uploads/2025/12/Terracotta1200.jpg',
  xianLuoyang:
    'https://chinatour.com/wp-content/uploads/2025/12/4-Days-Xian-Luoyang-Highlights-Tour-.jpg',
  xianHighlights:
    'https://chinatour.com/wp-content/uploads/2025/12/b4.jpg'
}

const standardChinaProductInclusions = [
  'Accommodation with daily breakfast by selected hotel tier',
  'Airport or railway station transfers in listed cities',
  'English-speaking local guides on listed touring days',
  'Private vehicle for listed sightseeing and transfers',
  'First gate entrance tickets and meals as confirmed in the final quote'
]

const standardChinaProductExclusions = [
  'International flights and China visa fees if applicable',
  'Domestic flights, trains, cableways, shows, and optional activities not confirmed in the final quote',
  'Meals not listed in the final quote',
  'Personal expenses and travel insurance',
  'Guide and driver gratuities'
]

const txSplendidChina9DayProduct: TourProduct = {
  slug: 'tx-splendid-china-9-day',
  name: '9 Days Splendid China',
  eyebrow: 'TXASC09 · 9-day compact classic China route',
  duration: '9 days / 8 nights',
  route: 'Beijing · Xi’an · Shanghai',
  destinations: ['Beijing', 'Xi’an', 'Shanghai'],
  heroImage: chinaTourRemoteImages.splendidChina,
  heroAlt: 'China cultural village and landmark scenery',
  summary:
    'A compact first-time China route based on the supplied ASC09 structure: imperial Beijing, Great Wall, Xi’an Terracotta Warriors, and Shanghai city highlights.',
  galleryTitle: 'Imperial Beijing, Terracotta Warriors, and Shanghai skyline in nine days.',
  quoteSubject: 'TXASC09 9 Days Splendid China quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour ASC09 schedule at route level; product code, wording, images, and final quote terms are Tengxuan-owned or source-referenced.',
  highlights: [
    'Use Beijing for the Forbidden City, Tiananmen, Great Wall, and Temple of Heaven.',
    'Move to Xi’an for the Ancient City Wall, Silk Road city texture, and Terracotta Warriors.',
    'Finish in Shanghai with Yu Garden, the Bund, and a free day for shopping or optional city modules.',
    'Keep the product short enough for travelers who want a recognizable China route without a two-week commitment.'
  ],
  facts: [
    { label: 'Code', value: 'TXASC09' },
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Shanghai' },
    { label: 'Hotels', value: '4-star or 5-star options' },
    { label: 'Guide', value: 'Private local guides' },
    { label: 'Transport', value: 'Rail or flight by quote' },
    { label: 'Best for', value: 'Compact first-time China trips' }
  ],
  gallery: [
    { title: 'Splendid China', city: 'China', image: chinaTourRemoteImages.splendidChina, alt: 'China cultural landmark scenery', featured: true },
    productGallery.classic[0],
    productGallery.classic[1],
    { title: 'Shanghai Skyline', city: 'Shanghai', image: shanghaiSkylineImage, alt: 'Shanghai skyline at night along the Huangpu River' }
  ],
  days: [
    { day: 'Day 1', city: 'Beijing', meals: '- / - / -', title: 'Arrival in Beijing', summary: 'Meet the guide on arrival and transfer to the hotel. Keep the day light for rest or a short neighborhood walk.', sights: ['Arrival transfer', 'Hotel check-in'] },
    { day: 'Day 2', city: 'Beijing', meals: 'B / L / -', title: 'Beijing imperial landmarks', summary: 'Visit Tiananmen Square and the Forbidden City with guide interpretation of imperial history, courtyards, and palace architecture.', sights: ['Tiananmen Square', 'Forbidden City'] },
    { day: 'Day 3', city: 'Beijing', meals: 'B / L / -', title: 'Great Wall and Temple of Heaven', summary: 'Tour a Great Wall section, then return to Beijing for Temple of Heaven and its ritual-garden setting.', sights: ['Great Wall', 'Temple of Heaven'] },
    { day: 'Day 4', city: 'Beijing to Xi’an', meals: 'B / - / -', title: 'Train or fly to Xi’an', summary: 'Travel to Xi’an and begin with the Ancient City Wall, Bell and Drum Tower area, or a Silk Road neighborhood walk.', sights: ['Rail or flight to Xi’an', 'Ancient City Wall option', 'Muslim Quarter option'] },
    { day: 'Day 5', city: 'Xi’an', meals: 'B / L / -', title: 'Terracotta Army discovery', summary: 'Visit the Terracotta Warriors, then add Big Wild Goose Pagoda, a Tang-dynasty city module, or free time according to guest pace.', sights: ['Terracotta Warriors', 'Big Wild Goose Pagoda option', 'Tang city option'] },
    { day: 'Day 6', city: 'Xi’an to Shanghai', meals: 'B / - / -', title: 'Travel to Shanghai', summary: 'Fly or take rail to Shanghai. Keep the evening open for the Bund, Nanjing Road, or a simple skyline walk.', sights: ['Transfer to Shanghai', 'The Bund option', 'Nanjing Road option'] },
    { day: 'Day 7', city: 'Shanghai', meals: 'B / L / -', title: 'Shanghai city tour', summary: 'Explore Yu Garden, the old quarter, the Bund, and Pudong skyline viewpoints to contrast classical garden space with modern riverfront architecture.', sights: ['Yu Garden', 'Old quarter', 'The Bund', 'Pudong skyline'] },
    { day: 'Day 8', city: 'Shanghai', meals: 'B / - / -', title: 'Shanghai leisure day', summary: 'Leave a flexible day for shopping, museums, French Concession, Suzhou, Hangzhou, or additional business meetings by request.', sights: ['Free day', 'Museum option', 'Suzhou or Hangzhou option'] },
    { day: 'Day 9', city: 'Shanghai', meals: 'B / - / -', title: 'Departure from Shanghai', summary: 'Transfer to the airport or railway station for onward travel.', sights: ['Departure transfer'] }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Central Beijing 4-star or 5-star option' },
    { city: 'Xi’an', hotel: 'Xi’an city-center hotel by quote' },
    { city: 'Shanghai', hotel: 'Central Shanghai 4-star or 5-star option' }
  ],
  prices: [
    { group: 'Land only benchmark', price: 'Custom quote', basis: 'Final quote depends on hotel tier, rail or flight choice, and season' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, meal scope, guide language, and transport plan' }
  ],
  inclusions: standardChinaProductInclusions,
  exclusions: standardChinaProductExclusions
}

const txGrandChinaYangtzeHongKong19DayProduct: TourProduct = {
  slug: 'tx-grand-china-yangtze-hong-kong-19-day',
  name: '19 Days Grand China, Yangtze and Hong Kong',
  eyebrow: 'TXPYG19 · 19-day China, Yangtze cruise and Hong Kong route',
  duration: '19 days / 18 nights',
  route: 'Beijing · Yangtze Cruise · Guilin · Xi’an · Shanghai · Hong Kong',
  destinations: ['Beijing', 'Yichang', 'Yangtze River', 'Chongqing', 'Guilin', 'Yangshuo', 'Xi’an', 'Shanghai', 'Hong Kong'],
  heroImage: chinaTourRemoteImages.grandChinaYangtze,
  heroAlt: 'Yangtze cruise and China city route scenery',
  summary:
    'A long-form premium China route following the supplied PYG19 sequence: Beijing, Yangtze River cruise, Guilin and Yangshuo, Xi’an, Shanghai, and Hong Kong.',
  galleryTitle: 'Imperial Beijing, Yangtze cruise scenery, Guilin landscapes, Xi’an heritage, Shanghai, and Hong Kong.',
  quoteSubject: 'TXPYG19 Grand China Yangtze Hong Kong quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour PYG19 city sequence and day titles; copy, product code, and final cruise/hotel/transport terms are Tengxuan-owned.',
  highlights: [
    'Start with Beijing’s imperial landmarks before transferring to Yichang for the Yangtze cruise segment.',
    'Use the cruise for a slower middle chapter through gorges, shore excursions, and Chongqing disembarkation.',
    'Add Guilin and Yangshuo for karst landscapes before moving into Xi’an history and Shanghai city contrast.',
    'Finish in Hong Kong with a guided city day plus free time for harbor, food, shopping, or family extensions.'
  ],
  facts: [
    { label: 'Code', value: 'TXPYG19' },
    { label: 'Starts', value: 'Beijing' },
    { label: 'Ends', value: 'Hong Kong' },
    { label: 'Hotels', value: 'Premium city hotels + cruise cabin by quote' },
    { label: 'Guide', value: 'Private local guides' },
    { label: 'Transport', value: 'Flight, rail, private vehicle + Yangtze cruise' },
    { label: 'Best for', value: 'Long-stay premium China travelers' }
  ],
  gallery: [
    { title: 'Yangtze Cruise', city: 'Yangtze River', image: chinaTourRemoteImages.yangtzeCruise, alt: 'Yangtze River cruise ship', featured: true },
    productGallery.classic[0],
    { title: 'Guilin', city: 'Guilin', image: guilinRiverPanoramaImage, alt: 'Li River bend and karst peaks near Guilin at sunrise' },
    productGallery.classic[1],
    { title: 'Hong Kong', city: 'Hong Kong', image: images.hongKong, alt: 'Hong Kong skyline and Victoria Harbour at dusk' }
  ],
  days: [
    { day: 'Day 1', city: 'En route to Beijing', meals: '- / - / -', title: 'Hometown to Beijing', summary: 'Begin the international flight plan toward Beijing.', sights: ['International flight'] },
    { day: 'Day 2', city: 'Beijing', meals: '- / - / -', title: 'Arrive in Beijing', summary: 'Meet the guide on arrival, transfer to the hotel, and rest after the long-haul flight.', sights: ['Arrival transfer', 'Hotel check-in'] },
    { day: 'Day 3', city: 'Beijing', meals: 'B / L / -', title: 'Beijing imperial core', summary: 'Tour Tiananmen Square, the Forbidden City, and hutongs or Jingshan according to reservation timing.', sights: ['Tiananmen Square', 'Forbidden City', 'Hutong or Jingshan'] },
    { day: 'Day 4', city: 'Beijing', meals: 'B / L / -', title: 'Great Wall and Beijing garden', summary: 'Visit the Great Wall, then add Summer Palace or Temple of Heaven based on season and guest mobility.', sights: ['Great Wall', 'Summer Palace option', 'Temple of Heaven option'] },
    { day: 'Day 5', city: 'Yichang / Yangtze River', meals: 'B / - / D', title: 'Yichang and board the Yangtze cruise', summary: 'Transfer to Yichang and board the Yangtze cruise ship. Cabin, pier, and embarkation details are confirmed by final cruise inventory.', sights: ['Yichang transfer', 'Yangtze cruise embarkation'] },
    { day: 'Day 6', city: 'Yangtze River', meals: 'B / L / D', title: 'Cruise the Yangtze', summary: 'Sail through the Yangtze corridor with included or optional shore excursions according to cruise company operation.', sights: ['Yangtze River cruise', 'Shore excursion option'] },
    { day: 'Day 7', city: 'Yangtze River', meals: 'B / L / D', title: 'Cruise the Yangtze', summary: 'Continue the cruise chapter through gorge scenery, ship activities, and port calls by season.', sights: ['Gorge scenery', 'Cruise activities'] },
    { day: 'Day 8', city: 'Yangtze River', meals: 'B / L / D', title: 'Cruise the Yangtze', summary: 'A final full cruise day protects a slower rhythm before Chongqing disembarkation.', sights: ['Yangtze River', 'Cruise program'] },
    { day: 'Day 9', city: 'Chongqing to Guilin', meals: 'B / - / -', title: 'Disembark in Chongqing and travel to Guilin', summary: 'Disembark in Chongqing, then fly or rail to Guilin for the landscape chapter.', sights: ['Chongqing disembarkation', 'Transfer to Guilin'] },
    { day: 'Day 10', city: 'Guilin / Longsheng', meals: 'B / L / -', title: 'Longsheng or Guilin scenery', summary: 'Use the day for Longsheng rice terraces or a Guilin city and cave program depending on season and guest interest.', sights: ['Longsheng option', 'Guilin city option'] },
    { day: 'Day 11', city: 'Guilin / Yangshuo', meals: 'B / L / -', title: 'Li River and Yangshuo', summary: 'Cruise or drive through Li River karst scenery, then add Yangshuo countryside or old-town time.', sights: ['Li River', 'Yangshuo countryside'] },
    { day: 'Day 12', city: 'Guilin to Xi’an', meals: 'B / - / -', title: 'Travel to Xi’an', summary: 'Transfer from Guilin to Xi’an and keep the evening flexible for Muslim Quarter or Tang city texture.', sights: ['Domestic flight or rail', 'Muslim Quarter option'] },
    { day: 'Day 13', city: 'Xi’an', meals: 'B / L / -', title: 'Terracotta Warriors and Xi’an heritage', summary: 'Visit the Terracotta Warriors and add Ancient City Wall, Big Wild Goose Pagoda, or Tang evening options.', sights: ['Terracotta Warriors', 'Ancient City Wall', 'Big Wild Goose Pagoda option'] },
    { day: 'Day 14', city: 'Xi’an to Shanghai', meals: 'B / - / -', title: 'Travel to Shanghai', summary: 'Fly or rail to Shanghai. Evening is open for the Bund or Nanjing Road.', sights: ['Transfer to Shanghai', 'The Bund option'] },
    { day: 'Day 15', city: 'Shanghai', meals: 'B / L / -', title: 'Shanghai city day', summary: 'Tour Yu Garden, old Shanghai, the Bund, and Pudong skyline viewpoints.', sights: ['Yu Garden', 'The Bund', 'Pudong skyline'] },
    { day: 'Day 16', city: 'Shanghai to Hong Kong', meals: 'B / - / -', title: 'Travel to Hong Kong', summary: 'Transfer from Shanghai to Hong Kong and settle into the final city chapter.', sights: ['Flight or rail to Hong Kong', 'Hotel check-in'] },
    { day: 'Day 17', city: 'Hong Kong', meals: 'B / L / -', title: 'Hong Kong city tour', summary: 'Plan Victoria Harbour, Peak views, local market texture, or Kowloon waterfront according to hotel location and guest profile.', sights: ['Victoria Harbour', 'The Peak option', 'Kowloon waterfront'] },
    { day: 'Day 18', city: 'Hong Kong', meals: 'B / - / -', title: 'Hong Kong free day', summary: 'Leave a free day for shopping, food, museums, Disneyland, Lantau, or business calls.', sights: ['Free day', 'Disneyland option', 'Lantau option'] },
    { day: 'Day 19', city: 'Hong Kong', meals: 'B / - / -', title: 'Departure from Hong Kong', summary: 'Transfer to the airport for departure or onward travel.', sights: ['Departure transfer'] }
  ],
  hotels: [
    { city: 'Beijing', hotel: 'Premium Beijing hotel by quote' },
    { city: 'Yangtze River', hotel: 'Yangtze cruise cabin by selected ship and sailing date' },
    { city: 'Guilin/Yangshuo', hotel: 'Guilin or Yangshuo hotel by quote' },
    { city: 'Xi’an', hotel: 'Central Xi’an hotel by quote' },
    { city: 'Shanghai', hotel: 'Central Shanghai hotel by quote' },
    { city: 'Hong Kong', hotel: 'Hong Kong hotel by quote' }
  ],
  prices: [
    { group: 'Premium private', price: 'Custom quote', basis: 'Depends on cruise ship, cabin, hotels, domestic transport, and season' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from sailing date, rooming, cabin mix, guide language, and meal scope' }
  ],
  inclusions: standardChinaProductInclusions.concat(['Yangtze cruise cabin and cruise meals as confirmed in the final quote']),
  exclusions: standardChinaProductExclusions.concat(['Hong Kong extensions or theme parks unless confirmed in the final quote'])
}

const txLhasaEssence4DayProduct: TourProduct = {
  slug: 'tx-lhasa-essence-4-day',
  name: '4 Days Lhasa Essence Tour',
  eyebrow: 'TXLX0401 · 4-day Lhasa city essence package',
  duration: '4 days / 3 nights',
  route: 'Lhasa',
  destinations: ['Lhasa'],
  heroImage: chinaTourRemoteImages.lhasaEssence,
  heroAlt: 'Potala Palace and Lhasa city scenery',
  summary:
    'A short Lhasa city package for travelers who want Potala Palace, Jokhang Temple, Barkhor Street, and monastery culture with protected altitude-acclimatization time.',
  galleryTitle: 'Potala Palace, Jokhang Temple, Barkhor pilgrimage streets, and Lhasa monastery culture.',
  quoteSubject: 'TXLX0401 Lhasa Essence 4-day quote',
  sourceNote:
    'Reference page title and image come from the supplied ChinaTour INLX0401 page; its schedule text was inconsistent, so this Tengxuan product uses a standard Lhasa essence itinerary.',
  highlights: [
    'Protect the arrival day for altitude acclimatization before any major sightseeing.',
    'Use Potala Palace, Jokhang Temple, and Barkhor Street as the essential Lhasa core.',
    'Add Sera, Drepung, Norbulingka, or Tibet Museum according to permits and opening schedules.',
    'Tibet permit, passport, visa, train or flight details, and guest health profile must be checked before confirmation.'
  ],
  facts: [
    { label: 'Code', value: 'TXLX0401' },
    { label: 'Starts', value: 'Lhasa' },
    { label: 'Ends', value: 'Lhasa' },
    { label: 'Hotels', value: 'Lhasa hotel by quote' },
    { label: 'Guide', value: 'Licensed local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Short Tibet city stays' }
  ],
  gallery: [
    { title: 'Potala Palace', city: 'Lhasa', image: images.lhasa, alt: 'Potala Palace in Lhasa', featured: true },
    { title: 'Lhasa City', city: 'Lhasa', image: chinaTourRemoteImages.lhasaEssence, alt: 'Lhasa city and palace scenery' },
    { title: 'Tibet Highland', city: 'Lhasa', image: lhasaGalleryTwoImage, alt: 'Tibet highland scenery near Lhasa' },
    { title: 'Monastery Day', city: 'Lhasa', image: lhasaGalleryThreeImage, alt: 'Tibetan monastery and mountain scenery' }
  ],
  days: [
    { day: 'Day 1', city: 'Lhasa', meals: '- / - / -', title: 'Arrive in Lhasa and acclimatize', summary: 'Meet the guide at the airport or railway station, transfer to the hotel, and keep the rest of the day quiet for altitude adjustment.', sights: ['Arrival transfer', 'Hotel check-in', 'Altitude acclimatization'], note: 'Avoid strenuous activity and alcohol on arrival day.' },
    { day: 'Day 2', city: 'Lhasa', meals: 'B / L / -', title: 'Potala Palace, Jokhang Temple and Barkhor', summary: 'Visit Potala Palace when permits and ticketing allow, then continue to Jokhang Temple and Barkhor Street for the pilgrimage and old-city layer.', sights: ['Potala Palace', 'Jokhang Temple', 'Barkhor Street'] },
    { day: 'Day 3', city: 'Lhasa', meals: 'B / L / -', title: 'Lhasa monastery and culture day', summary: 'Use the day for Sera Monastery, Drepung Monastery, Norbulingka, or Tibet Museum according to opening schedule and guest pace.', sights: ['Sera Monastery option', 'Drepung Monastery option', 'Norbulingka option', 'Tibet Museum option'] },
    { day: 'Day 4', city: 'Lhasa', meals: 'B / - / -', title: 'Departure from Lhasa', summary: 'Transfer to Lhasa airport or railway station for departure or onward Tibet travel.', sights: ['Departure transfer'] }
  ],
  hotels: [
    { city: 'Lhasa', hotel: 'Lhasa hotel by permit, season, and selected comfort level' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on permit timing, hotel, transfers, and guide scope' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from permit documents, rooming list, and transport plan' }
  ],
  inclusions: standardChinaProductInclusions.concat(['Tibet permit coordination support by final booking scope']),
  exclusions: standardChinaProductExclusions.concat(['Tibet permit document delays caused by missing or invalid traveler documents'])
}

const txTibetTrainXining7DayProduct: TourProduct = {
  slug: 'tx-tibet-train-xining-7-day',
  name: '7 Days Tibet Pilgrim Tour by Train from Xining',
  eyebrow: 'TXTT05 · 7-day Xining to Lhasa train and Tibet city route',
  duration: '7 days / 6 nights',
  route: 'Xining · Qinghai-Tibet Railway · Lhasa',
  destinations: ['Xining', 'Qinghai-Tibet Railway', 'Lhasa'],
  heroImage: chinaTourRemoteImages.tibetTrain,
  heroAlt: 'Qinghai-Tibet Railway and highland route scenery',
  summary:
    'A Tibet route following the supplied TT05 structure: fly to Xining, take the Qinghai-Tibet train to Lhasa, then explore Lhasa highlights with acclimatization built in.',
  galleryTitle: 'Xining, the Qinghai-Tibet train, Potala Palace, Jokhang Temple, and Lhasa monastery life.',
  quoteSubject: 'TXTT05 Tibet train from Xining quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour TT05 day titles; copy, permit handling, and final train/hotel terms are Tengxuan-owned.',
  highlights: [
    'Use Xining as the rail gateway for the Qinghai-Tibet train experience.',
    'Protect the Lhasa arrival day for acclimatization after high-altitude rail travel.',
    'Build the Lhasa sightseeing around Potala Palace, Jokhang Temple, Barkhor Street, and monastery options.',
    'Confirm Tibet permits, train berth availability, passport and visa documents, and health profile before final booking.'
  ],
  facts: [
    { label: 'Code', value: 'TXTT05' },
    { label: 'Starts', value: 'Xining' },
    { label: 'Ends', value: 'Lhasa' },
    { label: 'Hotels', value: 'Xining + Lhasa + train berth by quote' },
    { label: 'Guide', value: 'Licensed local guide in Tibet' },
    { label: 'Transport', value: 'Qinghai-Tibet train + private vehicle' },
    { label: 'Best for', value: 'Travelers wanting a Tibet train entry' }
  ],
  gallery: [
    { title: 'Qinghai-Tibet Train', city: 'Xining / Lhasa', image: chinaTourRemoteImages.tibetTrain, alt: 'Qinghai-Tibet train route scenery', featured: true },
    { title: 'Xining', city: 'Xining', image: chinaTourRemoteImages.xining, alt: 'Xining city and highland gateway scenery' },
    { title: 'Potala Palace', city: 'Lhasa', image: images.lhasa, alt: 'Potala Palace in Lhasa' },
    { title: 'Tibet Highland', city: 'Lhasa', image: lhasaGalleryTwoImage, alt: 'Tibet highland scenery near Lhasa' }
  ],
  days: [
    { day: 'Day 1', city: 'Xining', meals: '- / - / -', title: 'Fly to Xining', summary: 'Begin the flight plan toward Xining, the practical gateway for the Qinghai-Tibet railway.', sights: ['Flight to Xining'] },
    { day: 'Day 2', city: 'Xining', meals: '- / - / -', title: 'Arrive in Xining', summary: 'Meet on arrival, transfer to the hotel, and prepare documents and timing for the train departure.', sights: ['Arrival transfer', 'Xining hotel', 'Train preparation'] },
    { day: 'Day 3', city: 'Xining to Lhasa', meals: 'B / - / -', title: 'Xining to Lhasa by train', summary: 'Board the Qinghai-Tibet train. Berth class, departure time, and document handling are confirmed before final booking.', sights: ['Qinghai-Tibet Railway', 'Overnight train'] },
    { day: 'Day 4', city: 'Lhasa', meals: '- / - / -', title: 'Arrive in Lhasa', summary: 'Arrive in Lhasa, meet the local guide, transfer to the hotel, and keep the rest of the day for altitude adjustment.', sights: ['Lhasa railway station', 'Hotel transfer', 'Acclimatization'] },
    { day: 'Day 5', city: 'Lhasa', meals: 'B / L / -', title: 'Lhasa scenic tour', summary: 'Use the first Lhasa sightseeing day for monastery or city-culture modules at a measured pace.', sights: ['Sera Monastery option', 'Drepung Monastery option', 'Norbulingka option'] },
    { day: 'Day 6', city: 'Lhasa', meals: 'B / L / -', title: 'Potala Palace and Jokhang Temple', summary: 'Visit Potala Palace, Jokhang Temple, and Barkhor Street according to permit and ticket availability.', sights: ['Potala Palace', 'Jokhang Temple', 'Barkhor Street'] },
    { day: 'Day 7', city: 'Lhasa', meals: 'B / - / -', title: 'Departure from Lhasa', summary: 'Transfer to airport or railway station for onward travel.', sights: ['Departure transfer'] }
  ],
  hotels: [
    { city: 'Xining', hotel: 'Xining hotel by quote' },
    { city: 'Train', hotel: 'Qinghai-Tibet train berth by availability' },
    { city: 'Lhasa', hotel: 'Lhasa hotel by permit, season, and selected comfort level' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on train berth, permit timing, hotels, and guide scope' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from permit documents, berth inventory, and rooming list' }
  ],
  inclusions: standardChinaProductInclusions.concat(['Qinghai-Tibet train ticket and Tibet permit coordination support by final quote']),
  exclusions: standardChinaProductExclusions.concat(['Train berth changes caused by railway inventory or document timing'])
}

const txXianTerracottaCityWall1DayProduct: TourProduct = {
  slug: 'tx-xian-terracotta-city-wall-1-day',
  name: '1 Day Xi’an Terracotta Warriors and Ancient City Wall Tour',
  eyebrow: 'TXINXI0102 · 1-day Xi’an heritage product',
  duration: '1 day',
  route: 'Xi’an · Terracotta Warriors · Ancient City Wall · Xi’an',
  destinations: ['Xi’an'],
  heroImage: chinaTourRemoteImages.xianTerracotta,
  heroAlt: 'Terracotta Warriors archaeological pit in Xi’an',
  summary:
    'A focused Xi’an day product based on the supplied INXI0102 structure: Terracotta Warriors, Ancient City Wall, and hotel pickup/return in one efficient heritage day.',
  galleryTitle: 'Terracotta Warriors, Xi’an City Wall, and old-capital texture in one day.',
  quoteSubject: 'TXINXI0102 Xi’an Terracotta Warriors day tour quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INXI0102 title and schedule title; copy, code, and final quote terms are Tengxuan-owned.',
  highlights: [
    'Use the Terracotta Warriors as the anchor sight with enough interpretation time.',
    'Add Xi’an Ancient City Wall for city-scale context and an optional bike or walk segment.',
    'Keep the product simple for travelers with one spare day in Xi’an.',
    'Pickup point, traffic, museum ticketing, and closure rules should be confirmed before quote finalization.'
  ],
  facts: [
    { label: 'Code', value: 'TXINXI0102' },
    { label: 'Starts', value: 'Xi’an' },
    { label: 'Ends', value: 'Xi’an' },
    { label: 'Hotels', value: 'Not included' },
    { label: 'Guide', value: 'Private local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Xi’an stopover travelers' }
  ],
  gallery: [
    { title: 'Terracotta Warriors', city: 'Xi’an', image: chinaTourRemoteImages.xianTerracotta, alt: 'Terracotta Warriors archaeological pit', featured: true },
    { title: 'Terracotta Army', city: 'Xi’an', image: terracottaWarriorsImage, alt: "Terracotta Warriors archaeological pit in Xi'an" },
    { title: 'Ancient City Wall', city: 'Xi’an', image: images.xianCityWall, alt: "Xi'an Ancient City Wall" }
  ],
  days: [
    { day: 'Day Tour', city: 'Xi’an', meals: '- / L / -', title: 'Terracotta Warriors and Ancient City Wall', summary: 'Meet at the Xi’an hotel, drive to the Terracotta Warriors, then return to the city for the Ancient City Wall and a short old-city or Muslim Quarter add-on if timing allows.', sights: ['Hotel pickup', 'Terracotta Warriors', 'Ancient City Wall', 'Muslim Quarter option'], note: 'Museum ticketing, guide timing, and City Wall bike rental should be confirmed in the final quote.' }
  ],
  hotels: [
    { city: 'Xi’an', hotel: 'Accommodation not included in the day-tour price' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Per person after vehicle, guide, entrance, and pickup location are confirmed' }
  ],
  inclusions: [
    'Private Xi’an hotel pickup and return transfer',
    'English-speaking local guide',
    'Terracotta Warriors and City Wall admission by final quote',
    'Lunch if confirmed in the final quote'
  ],
  exclusions: [
    'Accommodation',
    'City Wall bike or electric car unless confirmed',
    'Personal expenses and travel insurance',
    'Guide and driver gratuities'
  ]
}

const txXianLuoyangHighlights4DayProduct: TourProduct = {
  slug: 'tx-xian-luoyang-highlights-4-day',
  name: '4 Days Xi’an and Luoyang Highlights Tour',
  eyebrow: 'TXINXI0401 · 4-day Xi’an and Luoyang heritage route',
  duration: '4 days / 3 nights',
  route: 'Xi’an · Luoyang',
  destinations: ['Xi’an', 'Luoyang'],
  heroImage: images.longmenGrottoes,
  heroAlt: 'Longmen Grottoes Buddhist caves near Luoyang',
  summary:
    'A compact ancient-capital route based on the supplied INXI0401 schedule: Xi’an arrival, Terracotta Warriors, City Wall, Small Wild Goose Pagoda, Longmen Grottoes, and Shaolin Temple.',
  galleryTitle: 'Xi’an archaeology, Luoyang Buddhist caves, and Shaolin Temple in four days.',
  quoteSubject: 'TXINXI0401 Xi’an Luoyang Highlights quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INXI0401 title and day titles; copy, product code, and final quote terms are Tengxuan-owned.',
  highlights: [
    'Combine Xi’an and Luoyang for travelers who want two ancient capitals in one compact route.',
    'Use Terracotta Warriors and Ancient City Wall for the Xi’an heritage core.',
    'Add Small Wild Goose Pagoda and Longmen Grottoes before continuing to Luoyang.',
    'Finish with Shaolin Temple for a recognizable Henan culture and martial-arts chapter.'
  ],
  facts: [
    { label: 'Code', value: 'TXINXI0401' },
    { label: 'Starts', value: 'Xi’an' },
    { label: 'Ends', value: 'Luoyang or Xi’an by quote' },
    { label: 'Hotels', value: 'Xi’an + Luoyang by quote' },
    { label: 'Guide', value: 'Private local guides' },
    { label: 'Transport', value: 'Private vehicle + rail or road transfer' },
    { label: 'Best for', value: 'Ancient-capital heritage travelers' }
  ],
  gallery: [
    { title: 'Xi’an and Luoyang', city: 'Xi’an / Luoyang', image: images.longmenGrottoes, alt: 'Longmen Grottoes Buddhist caves near Luoyang', featured: true },
    { title: 'Terracotta Warriors', city: 'Xi’an', image: terracottaWarriorsImage, alt: "Terracotta Warriors archaeological pit in Xi'an" },
    { title: 'Longmen Grottoes', city: 'Luoyang', image: images.longmenGrottoes, alt: 'Longmen Grottoes Buddhist caves near Luoyang' },
    { title: 'Shaolin Temple', city: 'Dengfeng', image: images.shaolinTemple, alt: 'Shaolin Temple mountain gate in Henan' }
  ],
  days: [
    { day: 'Day 1', city: 'Xi’an', meals: '- / - / -', title: 'Arrival in Xi’an', summary: 'Meet on arrival and transfer to the hotel. If time allows, add a light Bell Tower, Drum Tower, or Muslim Quarter walk.', sights: ['Arrival transfer', 'Hotel check-in', 'Muslim Quarter option'] },
    { day: 'Day 2', city: 'Xi’an', meals: 'B / L / -', title: 'Terracotta Warriors and Ancient City Wall', summary: 'Visit the Terracotta Warriors, then return to the city for Ancient City Wall and an optional Tang-style evening module.', sights: ['Terracotta Warriors', 'Ancient City Wall', 'Tang evening option'] },
    { day: 'Day 3', city: 'Xi’an to Luoyang', meals: 'B / L / -', title: 'Small Wild Goose Pagoda and Longmen Grottoes', summary: 'Visit Small Wild Goose Pagoda or a Xi’an museum module, then transfer to Luoyang for Longmen Grottoes.', sights: ['Small Wild Goose Pagoda', 'Transfer to Luoyang', 'Longmen Grottoes'] },
    { day: 'Day 4', city: 'Luoyang', meals: 'B / L / -', title: 'Shaolin Temple and departure', summary: 'Tour Shaolin Temple and its surrounding heritage area, then transfer to Luoyang or Xi’an station/airport according to the final plan.', sights: ['Shaolin Temple', 'Kung fu culture option', 'Departure transfer'] }
  ],
  hotels: [
    { city: 'Xi’an', hotel: 'Central Xi’an hotel by quote' },
    { city: 'Luoyang', hotel: 'Luoyang hotel by quote' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on hotel, rail or road transfer, guide scope, and departure city' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, meal scope, and transport plan' }
  ],
  inclusions: standardChinaProductInclusions,
  exclusions: standardChinaProductExclusions
}

const txXianHighlights3DayProduct: TourProduct = {
  slug: 'tx-xian-highlights-3-day',
  name: '3 Days Xi’an Highlights Tour',
  eyebrow: 'TXINXI0301 · 3-day Xi’an highlights package',
  duration: '3 days / 2 nights',
  route: 'Xi’an',
  destinations: ['Xi’an'],
  heroImage: chinaTourRemoteImages.xianHighlights,
  heroAlt: 'Xi’an city and heritage route scenery',
  summary:
    'A short Xi’an product based on the supplied INXI0301 structure: arrival, Terracotta Warriors and City Wall, then cultural sites and departure.',
  galleryTitle: 'Terracotta Warriors, Ancient City Wall, pagodas, and old Xi’an neighborhoods.',
  quoteSubject: 'TXINXI0301 Xi’an Highlights 3-day quote',
  sourceNote:
    'Reference structure follows the supplied ChinaTour INXI0301 title and day titles; copy, product code, and final quote terms are Tengxuan-owned.',
  highlights: [
    'Protect one full day for Terracotta Warriors and the Ancient City Wall.',
    'Use arrival and departure windows for Muslim Quarter, pagoda, museum, or Tang-style city modules.',
    'Fits travelers adding Xi’an between Beijing, Shanghai, Chengdu, or Luoyang.',
    'Final operation depends on arrival time, museum ticketing, hotel location, and onward transport.'
  ],
  facts: [
    { label: 'Code', value: 'TXINXI0301' },
    { label: 'Starts', value: 'Xi’an' },
    { label: 'Ends', value: 'Xi’an' },
    { label: 'Hotels', value: 'Xi’an hotel by quote' },
    { label: 'Guide', value: 'Private local guide' },
    { label: 'Transport', value: 'Private vehicle' },
    { label: 'Best for', value: 'Short Xi’an heritage stays' }
  ],
  gallery: [
    { title: 'Xi’an Highlights', city: 'Xi’an', image: chinaTourRemoteImages.xianHighlights, alt: 'Xi’an heritage scenery', featured: true },
    { title: 'Terracotta Warriors', city: 'Xi’an', image: terracottaWarriorsImage, alt: "Terracotta Warriors archaeological pit in Xi'an" },
    { title: 'Ancient City Wall', city: 'Xi’an', image: images.xianCityWall, alt: "Xi'an Ancient City Wall" },
    { title: 'Big Wild Goose Pagoda', city: 'Xi’an', image: images.bigWildGoosePagoda, alt: "Big Wild Goose Pagoda in Xi'an" }
  ],
  days: [
    { day: 'Day 1', city: 'Xi’an', meals: '- / - / -', title: 'Arrival in Xi’an', summary: 'Meet on arrival and transfer to the hotel. Add a short Muslim Quarter, Bell Tower, or Drum Tower walk if time allows.', sights: ['Arrival transfer', 'Hotel check-in', 'Muslim Quarter option'] },
    { day: 'Day 2', city: 'Xi’an', meals: 'B / L / -', title: 'Terracotta Warriors and City Wall tour', summary: 'Spend the main sightseeing day at the Terracotta Warriors, then return to the city for Ancient City Wall and old-capital texture.', sights: ['Terracotta Warriors', 'Ancient City Wall', 'Old city walk option'] },
    { day: 'Day 3', city: 'Xi’an', meals: 'B / - / -', title: 'Cultural sites and departure', summary: 'Use the departure day for Big Wild Goose Pagoda, Small Wild Goose Pagoda, Shaanxi History Museum, or Great Tang All Day Mall according to timing.', sights: ['Big Wild Goose Pagoda option', 'Small Wild Goose Pagoda option', 'Shaanxi History Museum option', 'Departure transfer'] }
  ],
  hotels: [
    { city: 'Xi’an', hotel: 'Central Xi’an hotel by quote' }
  ],
  prices: [
    { group: 'Private 2-6 pax', price: 'Custom quote', basis: 'Depends on hotel, arrival time, guide, tickets, and vehicle scope' },
    { group: 'Agency group', price: 'Custom quote', basis: 'Built from rooming list, meal scope, and transfer plan' }
  ],
  inclusions: standardChinaProductInclusions,
  exclusions: standardChinaProductExclusions
}

export const tourProducts: TourProduct[] = [
  txBeijingMutianyu4DayProduct,
  txJinshanlingHiking1DayProduct,
  txBeijingVisaFree3DayProduct,
  txBeijingJuyongguan4DayProduct,
  txXianTerracottaCityWall1DayProduct,
  txXianHighlights3DayProduct,
  txXianLuoyangHighlights4DayProduct,
  txSplendidChina9DayProduct,
  txBestOfChina11DayProduct,
  txGuilinYangshuoHighlights3DayProduct,
  txGuilinYangshuoLongji4DayProduct,
  txBestOfChinaPanda13DayProduct,
  txLhasaEssence4DayProduct,
  txTibetTrainXining7DayProduct,
  txGrandChinaYangtzeHongKong19DayProduct,
  txChengduJiuzhaigouHuanglongDujiangyan7DayProduct,
  txChengduGiantPanda4DayProduct,
  txChengduJiuzhaigouEmei8DayProduct,
  txChengduVisaFree3DayProduct
]

export const productBySlug = Object.fromEntries(tourProducts.map((product) => [product.slug, product])) as Record<
  string,
  TourProduct
>
