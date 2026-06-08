import { computed, ref, watchEffect } from 'vue'
import {
  attractions as baseAttractions,
  attractionDetails as baseAttractionDetails,
  cities as baseCities,
  companyDetail as baseCompanyDetail,
  productBySlug as baseProductBySlug,
  tourProducts as baseTourProducts,
  trips as baseTrips,
  type Attraction,
  type AttractionDetail,
  type City,
  type CompanyDetail,
  type TourProduct,
  type Trip
} from '@/content/travel'

export const locales = [
  { code: 'en', label: 'English', shortLabel: 'EN', htmlLang: 'en' },
  { code: 'de', label: 'Deutsch', shortLabel: 'DE', htmlLang: 'de' },
  { code: 'fr', label: 'Francais', shortLabel: 'FR', htmlLang: 'fr' },
  { code: 'es', label: 'Espanol', shortLabel: 'ES', htmlLang: 'es' },
  { code: 'zh', label: '中文', shortLabel: '中', htmlLang: 'zh-CN' }
] as const

export type Locale = (typeof locales)[number]['code']

const localeCodes = locales.map((item) => item.code)
const defaultLocale: Locale = 'en'
const storedLocaleKey = 'yj-travel-locale'

type MessageValue = string | string[] | MessageTree | Array<Record<string, string | string[]>>

interface MessageTree {
  [key: string]: MessageValue
}

const messages = {
  en: {
    common: {
      backHome: 'Back to homepage',
      contactExperts: 'Contact Our Experts',
      needHelp: 'Need help',
      planningTeam: 'Talk with our China travel planning team.',
      pageDetails: 'Page details'
    },
    nav: {
      aria: 'Primary navigation',
      home: 'Home',
      homeAria: 'Tengxuan Travel home',
      openMenu: 'Open menu',
      destinations: 'Places',
      customTrip: 'Custom',
      cities: 'Cities',
      company: 'Company',
      attractions: 'Attractions',
      trips: 'Tours',
      product: 'Product',
      planning: 'Booking',
      searchTrips: 'Search trips',
      contact: 'Contact',
      language: 'Language'
    },
    hero: {
      title: 'Discover China, City by City',
      summary:
        'Expert private guides, visa-friendly planning, and flexible trips designed around the way international visitors actually travel.',
      citiesCta: 'Explore Cities',
      companyCta: 'About Tengxuan'
    },
    footer: {
      intro: 'Private travel experiences, thoughtfully planned for international visitors.',
      companyContactAria: 'Tengxuan Travel company address and contact details',
      addressLabel: 'Address',
      address: '5F 50520, Tower D, Galaxy SOHO, Chaoyangmen, Dongcheng District, Beijing',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      explore: 'Explore',
      companyProfile: 'Company Profile',
      destinations: 'Destinations',
      cityGuides: 'City Guides',
      attractions: 'Attractions',
      travelProducts: 'Travel Products',
      productName: "Beijing-Xi'an-Shanghai",
      plan: 'Plan',
      beforeYouGo: 'Before You Go',
      visaEntry: 'Visa & Entry',
      faq: 'FAQ',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookie Policy',
      newsletterAria: 'Newsletter signup',
      stayInspired: 'Stay inspired',
      emailPlaceholder: 'Enter your email',
      sending: 'Sending...',
      subscribed: 'Subscribed',
      subscribeNow: 'Subscribe now',
      confirmed: 'Subscription confirmed.',
      unsubscribed: 'You are unsubscribed.',
      unsubscribeThisEmail: 'Unsubscribe this email',
      emailRequired: 'Enter an email address.',
      requestFailed: 'Subscription request failed.'
    },
    sections: {
      company: {
        link: 'View company profile',
        proofAria: 'Tengxuan Travel Group highlights',
        proofText: 'Founded in 2001, with 2000+ quality supplier partners and 20,000+ quality customers.'
      },
      cities: {
        title: 'Major City Guides',
        summary: 'Choose your base by travel style, pace, and first-time visitor priorities.',
        all: 'Open all guides',
        read: 'Read city guide'
      },
      attractions: {
        title: 'Signature Attractions',
        summary: 'Anchor each route with sights that are worth the logistics and guide time.',
        label: 'Featured'
      },
      trips: {
        title: 'Travel Products',
        summary: 'Start from a clear route, then adapt hotel level, guide language, and pace.',
        view: 'View product',
        custom: 'Custom quote'
      },
      planning: {
        title: 'Planning Support',
        summary: 'Practical details for visas, trains, hotels, guides, payment, and day-by-day pacing.',
        visa: 'Visa & entry',
        before: 'Before you go',
        faq: 'FAQ',
        contact: 'Contact planning team'
        ,
        aria: 'Planning advantages'
      }
    },
    destinations: {
      title: 'China destinations by city',
      eyebrow: 'Destination planning',
      summary:
        'Start with the city rhythm first. Each city guide now keeps its representative images, planning notes, and must-see classic sights in one place.',
      tabsAria: 'Destination filters',
      all: 'All',
      cities: 'Cities',
      attractions: 'Attractions',
      cityEyebrow: 'City destinations',
      cityTitle: 'Plan the route by city first',
      citySummary: 'Use city guides for stay length, season, transport, traveler type, and the pace of each destination.',
      attractionEyebrow: 'Must-see attractions',
      attractionTitle: 'Add specific sights after the route shape is clear',
      attractionSummary: 'Use attraction guides for visit flow, practical notes, source links, and nearby route pairings.'
    },
    city: {
      title: 'Major China cities for first-time and repeat travelers',
      eyebrow: 'China city planning',
      summary:
        'Compare classic capitals, modern gateways, food cities, garden towns, and nature bases before choosing the route rhythm that fits your group.',
      planRoute: 'Plan a route',
      openGuide: 'Open guide',
      allGuides: 'All city guides',
      factsAria: 'City planning facts',
      bestFor: 'Best for',
      recommendedStay: 'Recommended stay',
      season: 'Season',
      connections: 'Connections',
      transport: 'Transport',
      whatToSee: 'What to see',
      coreExperiences: 'Core experiences',
      pace: 'How to pace it',
      rhythm: 'Suggested city rhythm',
      note: 'Planning note',
      noteAria: 'Travel planning note',
      customRoute: 'Ask for a custom route',
      ideas: 'Route ideas',
      pairWith: 'Pair {city} with',
      internalLinks: 'Related planning',
      linkTitle: 'Use {city} in a China private tour',
      relatedAttraction: 'Attraction guide',
      relatedProduct: 'Tour product',
      galleryControls: 'City image carousel controls',
      galleryThumbnails: 'City image thumbnails',
      previousImage: 'Previous city image',
      nextImage: 'Next city image',
      showImage: 'Show {title}',
      cityStory: 'City introduction',
      cityStoryTitle: 'How to experience {city}',
      popularClassics: 'Popular classics',
      popularClassicsTitle: 'Classic sights in {city}',
      faq: 'FAQ',
      faqTitle: '{city} travel FAQ',
      faqBestFor: 'Who is {city} best for?',
      faqStay: 'How long should travelers stay in {city}?',
      faqSeason: 'What is the best season for {city}?',
      faqTransport: 'How should travelers connect {city} with other China cities?',
      titleSuffix: 'City Guide'
    },
    attraction: {
      title: 'Signature China attractions',
      eyebrow: 'Attraction planning',
      summary:
        'Use these independent attraction guides to understand why each sight matters, how to pace the visit, and which routes it pairs with.',
      openGuide: 'Open attraction guide',
      allGuides: 'All attraction guides',
      factsAria: 'Attraction planning facts',
      whyGo: 'Why go',
      visitFlow: 'Suggested visit flow',
      practicalNotes: 'Planning notes',
      sources: 'Research sources',
      imageCredit: 'Image source',
      related: 'Related attractions',
      pairWith: 'Pair this with',
      planRoute: 'Plan this route',
      bestSeason: 'Best season',
      transport: 'Transport',
      seasonFallback: 'Check the destination season and operating hours before confirming the route.',
      internalLinks: 'Related planning',
      linkTitle: 'Build this attraction into a route',
      relatedCity: 'City guide',
      relatedProduct: 'Tour product',
      faq: 'FAQ',
      faqTitle: '{attraction} tour FAQ',
      faqBestFor: 'Who is {attraction} best for?',
      faqStay: 'How long does {attraction} need?',
      faqSeason: 'What is the best season for {attraction}?',
      faqTransport: 'What is the best way to visit {attraction}?',
      titleSuffix: 'Attraction Guide'
    },
    productList: {
      title: 'Classic Products',
      eyebrow: 'Filter products by city',
      summary:
        'Choose a city to see every product that includes it, then open the itinerary that matches the group pace, hotel level, guide language, and quote scope.',
      filtersAria: 'Product city filters',
      all: 'All products',
      recommendedCount: '{count} recommended products',
      dayPlan: 'Day plan',
      destinations: 'Destinations',
      consultation: 'Consult advisor',
      viewDetail: 'View details',
      feedbackEyebrow: 'Traveler feedback',
      feedbackTitle: 'What guests notice after the trip',
      feedbackSummary:
        'Short feedback samples are written from common private-group priorities: clear pacing, guide support, transfers, tickets, and food comfort.',
      reviews: [
        { city: 'Beijing', name: 'Family group from Singapore', text: 'The guide kept the Forbidden City and Great Wall days clear for the children, and the vehicle timing made the whole Beijing stay feel controlled.' },
        { city: 'Xi’an', name: 'Agency group from Spain', text: 'The Terracotta Warriors day was the highlight. The wall, Muslim Quarter, and Tang night route gave the group enough variety without changing hotels.' },
        { city: 'Beijing', name: 'Couple from Germany', text: 'We liked that the hutong walk and teahouse time were not rushed. It felt more personal than a checklist tour.' }
      ]
    },
    product: {
      back: 'Back to travel products',
      quote: 'Ask for a quote',
      viewItinerary: 'View itinerary',
      factsAria: 'Tour facts',
      overview: 'Route overview',
      dayByDay: 'Day by day',
      itinerary: 'Itinerary',
      mealNote: 'Meals are shown as breakfast / lunch / dinner.',
      gallery: 'Tour gallery',
      details: 'Commercial details',
      detailTitle: 'Hotels, pricing, and service scope',
      hotelNote: 'Hotels are 4-star properties or similar; rooms are based on standard rooms.',
      hotels: 'Hotels',
      quotation: 'Quotation',
      including: 'Service including',
      excluding: 'Service excluding',
      ready: 'Ready to quote',
      cta: 'Use this route as a fixed group product or customize it for your market.',
      suitableGroups: 'Suitable groups',
      customGroups: 'Private groups, families, MICE add-ons, and agency groups',
      faq: 'FAQ',
      faqTitle: 'Product questions before quotation',
      faqGroupType: 'What group type is this product suitable for?',
      faqGroupAnswer:
        '{group}. The route can be adjusted by hotel level, guide language, rooming, flight or rail timing, and daily pace.',
      faqIncluded: 'What is included?',
      faqExcluded: 'What is not included?',
      faqQuote: 'What information is needed for a quote?',
      faqQuoteAnswer:
        'Send travel dates, arrival and departure cities, group size, hotel level, guide language, rooming list, and must-see places for a confirmed quotation.',
      internalLinks: 'Related planning',
      linkTitle: 'Cities, attractions, and preparation',
      relatedCity: 'City guide',
      relatedAttraction: 'Attraction guide',
      planningLink: 'Planning guide',
      visaLinkText: 'Check visa, transit, passport, hotel, and invitation-letter planning before booking.',
      beforeYouGoLinkText: 'Prepare names, rooming, trains, attractions, guide language, payment, meals, and weather buffers.'
    },
    company: {
      metaDescription:
        'Tengxuan Travel Group company profile, including group overview, airline resources, inbound China travel capability, branch network, brand system, milestones, honors, and corporate culture.',
      contactTeam: 'Contact Our Team',
      viewStrength: 'View group strength',
      photosAria: 'Company and team photos',
      factsAria: 'Tengxuan Travel Group facts',
      overviewEyebrow: 'Group overview',
      overviewTitle: 'Built around travel resources, enterprise service, and platform supply.',
      momentsEyebrow: 'Company moments',
      momentsTitle: 'Office environment, employee culture, and activity scenes.',
      activityEyebrow: 'Activity albums',
      activityTitle: 'More company activity photos by category.',
      backToCompany: 'Back to company profile',
      activityNotFound: 'Company activity album not found',
      distributionEyebrow: 'Group distribution',
      distributionTitle: 'A 7-location branch network anchored by Beijing headquarters.',
      branchAria: 'Branch locations',
      inboundEyebrow: 'Inbound tourism',
      brandEyebrow: 'Brand system',
      brandTitle: 'Specialized brands across business travel, transportation, platforms, and technology.',
      strengthEyebrow: 'Group strength',
      strengthTitle: 'Airline resources, ticketing systems, and enterprise supply-chain support.',
      timelineEyebrow: 'Development path',
      timelineTitle: 'From a 2001 travel company to a multi-brand resource platform.',
      honorsEyebrow: 'Honors and clients',
      honorsTitle: 'Recognized by industry partners and trusted by broad enterprise scenarios.',
      awardsAria: 'Tengxuan certificates and awards',
      cultureEyebrow: 'Corporate culture',
      cultureTitle: 'Direction, responsibility, and shared operating values.',
      vision: 'Vision',
      mission: 'Mission',
      values: 'Values'
    },
    subscription: {
      kicker: 'Tengxuan Travel email preferences',
      title: 'Manage email subscription',
      subscribedTitle: 'You are subscribed',
      unsubscribedTitle: 'You are unsubscribed',
      thisEmail: 'this email address',
      summary:
        'Manage whether {email} receives Tengxuan Travel marketing emails. You can unsubscribe now or restore the subscription with the same secure email link.',
      missingParams: 'This link is missing required subscription parameters.',
      incomplete: 'This subscription link is incomplete. Please use the latest link from your email.',
      restored: 'Subscription restored.',
      unsubscribed: 'You have been unsubscribed.',
      actionsAria: 'Subscription actions',
      updating: 'Updating...',
      unsubscribe: 'Unsubscribe',
      keep: 'Keep me subscribed',
      secureLink: 'Secure link',
      ready: 'Ready',
      missing: 'Missing'
    },
    pages: {
      beforeYouGo: {
        title: 'China travel booking services',
        eyebrow: 'Booking service',
        summary: '',
        heroServices: [
          {
            type: 'flight',
            title: 'China flight booking',
            label: 'Domestic and international ticketing',
            summary: 'Route matching, date options, baggage notes, and passport-name checks before ticketing.',
            imageAlt: 'Air China aircraft at Shanghai Pudong International Airport'
          },
          {
            type: 'hotel',
            title: 'China hotel booking',
            label: 'Hotels by city and comfort level',
            summary: 'Rooming lists, bed types, location preferences, family rooms, and confirmed check-in details.',
            imageAlt: 'Hotel building in Beijing'
          },
          {
            type: 'guide',
            title: 'Multilingual guide service',
            label: 'Guides for private and group trips',
            summary: 'English, German, French, Spanish, and other language-guide requests coordinated by route.',
            imageAlt: 'Tour guide addressing a group of travelers in China'
          },
          {
            type: 'rail',
            title: 'China high-speed rail booking',
            label: 'Rail tickets between major cities',
            summary: 'Seat class, departure station, passport details, and route timing checked before booking.',
            imageAlt: 'China high-speed trains at Shanghai Railway Station'
          },
          {
            type: 'ticket',
            title: 'Attraction ticket booking',
            label: 'Popular sights and timed entries',
            summary: 'Real-name tickets for major museums, heritage sites, scenic areas, and family-friendly stops.',
            imageAlt: 'Terracotta Warriors museum in Xi’an'
          },
          {
            type: 'car',
            title: 'Car rental and vehicle service',
            label: 'Private vehicles and group transfers',
            summary: 'Airport pickup, city transfers, business vehicles, family vans, and multi-city vehicle plans.',
            imageAlt: 'Buick GL8 vehicle in China'
          }
        ],
        floatingCard: {
          title: 'Need China booking help?',
          summary: 'Send your dates, cities, traveler count, and the services you want us to reserve.',
          button: 'Email our booking team',
          subject: 'China travel booking service request',
          body: 'Hello Tengxuan Travel team,\n\nI would like help booking China travel services.\n\nTravel dates:\nArrival city:\nDeparture city:\nTraveler count:\nServices needed: China flights / China hotels / multilingual guide / train tickets / car rental / attraction tickets / SIM card\nHotel level:\nGuide language:\nOther notes:\n\nPlease share available options and next steps.\n\nThank you.',
          points: ['China flights and hotels first', 'Guide language matched by route', 'Ticketed services checked before payment']
        },
        sections: [
          {
            title: 'Helpful details to send',
            items: [
              'Travel dates, arrival and departure cities, traveler count, and preferred schedule.',
              'Passport names and passport numbers for services that require real-name booking.',
              'Hotel level, rooming list, bed type, guide language, and vehicle requirements.',
              'Meal restrictions, mobility needs, phone card requirements, and any must-visit sights.'
            ]
          }
        ]
      },
      contact: {
        title: 'Talk to a China travel specialist',
        eyebrow: 'Contact',
        summary:
          'Send arrival city, travel dates, group size, hotel level, guide language, and any must-see cities. The team can return a route plan and quotation based on current availability.',
        email: 'support@tengxuan.com',
        ctaLabel: 'Draft enquiry email',
        copyLabel: 'The email draft includes a structured quote request so your team can fill only the missing details.',
        responseLabel: 'Planning desk',
        responseText: 'Route, hotel, vehicle, guide, and ticket coordination for private China travel.',
        servicesTitle: 'What we can quote',
        checklistTitle: 'Best details to include',
        templateSubject: 'China travel quotation request',
        templateBody:
          'Hello Tengxuan Travel team,\n\nI would like to request a China travel quotation.\n\nTravel dates:\nArrival city:\nDeparture city:\nNumber of travelers:\nRooming needs:\nPreferred hotel level:\nGuide language:\nCities or attractions to include:\nBudget range:\nNationality / visa notes:\nDietary or mobility needs:\nAgency or company name:\n\nPlease share a suggested route, service scope, and quotation.\n\nThank you.',
        items: [
          "Product quotes: Beijing, Xi'an, Shanghai, Chengdu, Guilin, Zhangjiajie, and custom routes.",
          'Business requests: meetings, interpreters, vehicles, hotels, and invoice support.',
          'Recommended details: dates, travelers, rooming, budget, nationality, and dietary needs.'
        ],
        services: ['Private city routes and multi-city China itineraries.', 'Hotels, vehicles, guides, tickets, interpreters, and meeting support.', 'Agency group quotes and customized product packaging.'],
        checklist: ['Travel window, arrival and departure cities, and must-see places.', 'Traveler count, rooming list, hotel level, guide language, and pace.', 'Budget range, nationality, dietary needs, mobility needs, and invoice requirements.']
      },
      customTrip: {
        title: 'Custom China trips made simple',
        eyebrow: 'Custom itinerary',
        summary:
          'Tell us how your guests enter China, what pace feels comfortable, and what they actually want to experience. We turn that into a private inbound itinerary with hotels, vehicles, guides, tickets, and practical entry planning.',
        email: 'support@tengxuan.com',
        formTitle: 'Start with your email',
        emailLabel: 'Email address',
        emailPlaceholder: 'name@example.com',
        travelWindowLabel: 'Travel window',
        travelWindowPlaceholder: 'October 2026, 8-10 days',
        travelersLabel: 'Travelers (include child ages)',
        travelersPlaceholder: '2 adults, 1 child (age 6)',
        arrivalLabel: 'Arrival city or airport',
        arrivalPlaceholder: 'Beijing PEK / Shanghai PVG',
        departureLabel: 'Departure city or airport',
        departurePlaceholder: 'Hong Kong / Shanghai',
        interestsLabel: 'Cities, sights, and interests',
        interestsPlaceholder: 'Great Wall, pandas, food, gardens, light hiking...',
        paceLabel: 'Preferred pace',
        pacePlaceholder: 'Relaxed, balanced, compact',
        hotelLabel: 'Hotel level',
        hotelPlaceholder: 'Boutique, 4-star, 5-star, family rooms',
        notesLabel: 'Diet, mobility, visa, or business needs',
        notesPlaceholder: 'Vegetarian meals, wheelchair access, interpreter, invoice...',
        submitLabel: 'Ask for a custom plan',
        successTitle: 'Email draft ready.',
        successText: 'Your mail app should open with the request details. You can edit anything before sending.',
        responseLabel: 'Inbound planning',
        responseText: 'A cleaner first step for overseas guests than phone-first forms.',
        proofTitle: 'What the team checks',
        benefitsTitle: 'Built around inbound travel habits',
        ideasTitle: 'Popular starting points',
        templateSubject: 'Custom inbound China itinerary request',
        templateBody:
          'Hello Tengxuan Travel team,\n\nI would like help designing a custom inbound China trip.\n\nEmail: {email}\nTravel window: {travelWindow}\nNumber of travelers and child ages: {travelers}\nArrival city / airport: {arrival}\nDeparture city / airport: {departure}\nCities, sights, or interests: {interests}\nPreferred pace: {pace}\nHotel level: {hotelLevel}\nOther notes: {notes}\n\nPlease suggest an itinerary, service scope, and quote range.\n\nThank you.',
        proofPoints: ['Start with email, then refine details across time zones', 'Share arrival and departure cities so the route can be shaped properly', 'Add pace, diet, mobility, and visa notes before the quote'],
        benefits: [
          { title: 'No phone-first friction', text: 'International travelers can start with an email address and add route details when they are ready.' },
          { title: 'Route before quotation', text: 'We clarify entry city, exit city, trip length, hotel level, guide language, and interests before pricing.' },
          { title: 'Private, not mixed group', text: 'The itinerary can be shaped for couples, families, agency groups, business visitors, and senior travelers.' },
          { title: 'Operational details included', text: 'Hotels, vehicles, guides, tickets, trains, interpreters, meeting support, and invoice needs can be coordinated together.' }
        ],
        ideas: [
          { title: 'First China trip', text: "Beijing, Xi'an, Shanghai, and one softer city such as Hangzhou, Chengdu, or Guilin." },
          { title: 'Family pace', text: 'Later starts, fewer hotel changes, child-friendly guide rhythm, food comfort, and vehicle support.' },
          { title: 'Business plus leisure', text: 'Meetings, interpreters, airport transfers, invoice support, and short cultural extensions.' }
        ]
      },
      faq: {
        title: 'Common planning questions',
        eyebrow: 'FAQ',
        summary: 'Operational answers for private China routes, group quotations, and custom travel requests.',
        sections: [
          {
            title: 'Are prices final?',
            body:
              'Published prices are guide prices. Final quotes depend on date, hotel class, transport inventory, guide language, and group size.'
          },
          {
            title: 'Can routes be customized?',
            body:
              'Yes. Products can be adjusted for arrival city, departure city, hotel standard, pace, dietary needs, and special interests.'
          },
          {
            title: 'Do tours include shopping stops?',
            body:
              'The quoted private products are designed around sightseeing and service delivery. Shopping stops are not used as a price subsidy.'
          },
          {
            title: 'What should agencies send?',
            body:
              'Send market, expected group size, travel window, target price, hotel level, guide language, and required inclusions.'
          }
        ]
      },
      visaEntry: {
        title: 'Entry planning checklist',
        eyebrow: 'Visa & entry',
        summary:
          'Visa and entry rules can change by nationality, route, and travel date. Confirm current rules with official sources before booking non-refundable services.',
        sections: [
          {
            title: 'Before quote confirmation',
            items: [
              'Traveler nationality and passport validity.',
              'Arrival and departure cities.',
              'Transit cities and flight routing.',
              'Hotel and invitation-letter requirements if applicable.'
            ]
          },
          {
            title: 'Documents to prepare',
            items: [
              'Passport information exactly as shown on the passport.',
              'Final travel dates and hotel details.',
              'Emergency contact and special assistance needs.',
              'Copies required by rail, flight, or attraction booking systems.'
            ]
          }
        ]
      },
      privacy: {
        title: 'Privacy policy',
        eyebrow: 'Privacy',
        summary:
          'We collect only the information needed to respond to enquiries, prepare quotes, and operate requested travel services.',
        sections: [
          {
            title: 'Information used for travel service',
            items: [
              'Contact details submitted through email or enquiry forms.',
              'Travel dates, group size, rooming needs, and itinerary preferences.',
              'Passport details only when needed for ticketing, hotel, or attraction booking.'
            ]
          },
          {
            title: 'How information is handled',
            items: [
              'Information is used for quotation, booking coordination, and service support.',
              'Operational suppliers receive only details needed to provide selected services.',
              'Users can request subscription changes through the footer subscription controls.'
            ]
          }
        ]
      },
      terms: {
        title: 'Terms of use',
        eyebrow: 'Terms',
        summary:
          'Published routes are planning references. Confirmed services, prices, inclusions, exclusions, and cancellation rules are defined in the final quotation or service agreement.',
        sections: [
          {
            title: 'Quotation scope',
            items: [
              'Prices may vary by date, hotel inventory, transport availability, guide language, and group size.',
              'Final inclusions and exclusions are confirmed before payment.',
              'Optional activities and upgrades are charged according to the final route plan.'
            ]
          },
          {
            title: 'Travel responsibility',
            items: [
              'Travelers are responsible for valid passports, visas, insurance, and personal documents.',
              'Routes may be adjusted for weather, venue closures, transport operations, or safety needs.',
              'Supplier rules apply to hotels, transport, attractions, and third-party services.'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookie policy',
        eyebrow: 'Cookie Policy',
        summary:
          'The website uses essential browser storage for language preference and subscription experience. Analytics or advertising cookies should be enabled only after a project decision.',
        sections: [
          {
            title: 'Essential storage',
            items: [
              'Language preference can be saved locally so the selected language remains consistent.',
              'Subscription controls may use form state while the visitor interacts with the footer.',
              'Essential storage is used to keep the public site usable.'
            ]
          },
          {
            title: 'Future analytics',
            items: [
              'Any analytics, advertising, or third-party tracking should be documented before launch.',
              'Cookie notices should be updated when non-essential tracking is added.',
              'Visitors should be given a clear way to manage optional cookies when required.'
            ]
          }
        ]
      }
    }
  },
  de: {
    common: {
      backHome: 'Zur Startseite',
      contactExperts: 'Unsere Experten kontaktieren',
      needHelp: 'Brauchen Sie Hilfe',
      planningTeam: 'Sprechen Sie mit unserem China-Reiseplanungsteam.',
      pageDetails: 'Seitendetails'
    },
    nav: {
      aria: 'Hauptnavigation',
      home: 'Start',
      homeAria: 'Tengxuan Travel Startseite',
      openMenu: 'Menu offnen',
      destinations: 'Ziele',
      customTrip: 'Massreise',
      cities: 'Staedte',
      company: 'Firma',
      attractions: 'Highlights',
      trips: 'Touren',
      product: 'Produkt',
      planning: 'Buchen',
      searchTrips: 'Reisen suchen',
      contact: 'Kontakt',
      language: 'Sprache'
    },
    hero: {
      title: 'China Stadt fur Stadt entdecken',
      summary:
        'Private Reiseleiter, visafreundliche Planung und flexible Reisen, abgestimmt auf internationale Besucher.',
      citiesCta: 'Staedte ansehen',
      companyCta: 'Uber Tengxuan'
    },
    footer: {
      intro: 'Private Reiseerlebnisse, sorgfaeltig fur internationale Besucher geplant.',
      companyContactAria: 'Adresse und Kontakt der Tengxuan Travel Group',
      addressLabel: 'Adresse',
      address: '5F 50520, Tower D, Galaxy SOHO, Chaoyangmen, Dongcheng District, Beijing',
      phoneLabel: 'Telefon',
      emailLabel: 'E-Mail',
      explore: 'Entdecken',
      companyProfile: 'Unternehmensprofil',
      destinations: 'Ziele',
      cityGuides: 'Staedteguides',
      attractions: 'Highlights',
      travelProducts: 'Reiseprodukte',
      productName: "Peking-Xi'an-Shanghai",
      plan: 'Planen',
      beforeYouGo: 'Vor der Reise',
      visaEntry: 'Visum & Einreise',
      faq: 'FAQ',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      cookies: 'Cookie-Richtlinie',
      newsletterAria: 'Newsletter Anmeldung',
      stayInspired: 'Inspiration erhalten',
      emailPlaceholder: 'E-Mail eingeben',
      sending: 'Wird gesendet...',
      subscribed: 'Abonniert',
      subscribeNow: 'Jetzt abonnieren',
      confirmed: 'Abonnement bestaetigt.',
      unsubscribed: 'Sie sind abgemeldet.',
      unsubscribeThisEmail: 'Diese E-Mail abmelden',
      emailRequired: 'Bitte E-Mail-Adresse eingeben.',
      requestFailed: 'Abo-Anfrage fehlgeschlagen.'
    },
    sections: {
      company: {
        link: 'Unternehmensprofil ansehen',
        proofAria: 'Highlights der Tengxuan Travel Group',
        proofText: 'Gegruendet 2001, mit 2000+ hochwertigen Lieferantenpartnern und 20.000+ Qualitaetskunden.'
      },
      cities: {
        title: 'Wichtige Stadtguides',
        summary: 'Waehlen Sie die Basis nach Reisestil, Tempo und Prioritaeten.',
        all: 'Alle Guides offnen',
        read: 'Stadtguide lesen'
      },
      attractions: {
        title: 'Zentrale Sehenswuerdigkeiten',
        summary: 'Jede Route mit Orten verankern, die Logistik und Guide-Zeit wert sind.',
        label: 'Empfohlen'
      },
      trips: {
        title: 'Reiseprodukte',
        summary: 'Mit einer klaren Route starten und Hotelstandard, Sprache und Tempo anpassen.',
        view: 'Produkt ansehen',
        custom: 'Individuelles Angebot'
      },
      planning: {
        title: 'Planungsunterstuetzung',
        summary: 'Praktische Details zu Visa, Zuegen, Hotels, Guides, Zahlung und Tagesplanung.',
        visa: 'Visum & Einreise',
        before: 'Vor der Reise',
        faq: 'FAQ',
        contact: 'Planungsteam kontaktieren',
        aria: 'Planungsvorteile'
      }
    },
    destinations: {
      title: 'China-Ziele: Stadtrhythmus und wichtige Sehenswuerdigkeiten',
      eyebrow: 'Zielplanung',
      summary:
        'Staedte und Sehenswuerdigkeiten gemeinsam durchsuchen und dann den passenden Detailguide fuer Route oder Besuchsablauf oeffnen.',
      tabsAria: 'Zielfilter',
      all: 'Alle',
      cities: 'Staedte',
      attractions: 'Highlights',
      cityEyebrow: 'Stadtziele',
      cityTitle: 'Route zuerst nach Stadt planen',
      citySummary: 'Stadtguides klaeren Aufenthalt, Saison, Verkehr, Reisetyp und Tempo der einzelnen Ziele.',
      attractionEyebrow: 'Wichtige Sehenswuerdigkeiten',
      attractionTitle: 'Konkrete Orte nach der Routenskizze ergaenzen',
      attractionSummary: 'Attraktionsguides klaeren Besuchsablauf, Hinweise, Quellenlinks und passende Kombinationen.'
    },
    city: {
      title: 'Wichtige China-Staedte fur Erstbesucher und Wiederholer',
      eyebrow: 'China-Stadtplanung',
      summary:
        'Vergleichen Sie klassische Hauptstaedte, moderne Gateways, Food-Staedte, Gartenorte und Naturbasen.',
      planRoute: 'Route planen',
      openGuide: 'Guide offnen',
      allGuides: 'Alle Stadtguides',
      factsAria: 'Fakten zur Stadtplanung',
      bestFor: 'Ideal fur',
      season: 'Saison',
      connections: 'Verbindungen',
      whatToSee: 'Was ansehen',
      coreExperiences: 'Kern-Erlebnisse',
      pace: 'Tempo',
      rhythm: 'Empfohlener Rhythmus',
      note: 'Planungshinweis',
      noteAria: 'Hinweis zur Reiseplanung',
      customRoute: 'Individuelle Route anfragen',
      ideas: 'Routenideen',
      pairWith: '{city} kombinieren mit',
      cityStoryTitle: '{city} erleben',
      titleSuffix: 'Stadtguide'
    },
    productList: {
      title: 'Klassische Produkte',
      eyebrow: 'Produkte nach Stadt filtern',
      summary:
        'Waehlen Sie eine Stadt, um alle passenden Produkte zu sehen. Danach oeffnen Sie die Route fuer Tempo, Hotelniveau, Guidesprache und Angebotsumfang.',
      filtersAria: 'Stadtfilter fuer Produkte',
      all: 'Alle Produkte',
      recommendedCount: '{count} empfohlene Produkte',
      dayPlan: 'Tagesplan',
      destinations: 'Ziele',
      consultation: 'Berater kontaktieren',
      viewDetail: 'Details ansehen',
      feedbackEyebrow: 'Reisendenfeedback',
      feedbackTitle: 'Was Gaeste nach der Reise erwaehnen',
      feedbackSummary:
        'Kurze Beispiele zu typischen Prioritaeten privater Gruppen: klares Tempo, Guide-Begleitung, Transfers, Tickets und angenehmes Essen.',
      reviews: [
        { city: 'Peking', name: 'Familiengruppe aus Singapur', text: 'Guide und Fahrzeug haben die Tage in Verbotener Stadt und Grosser Mauer klar strukturiert, ohne die Kinder zu ueberfordern.' },
        { city: 'Xi’an', name: 'Agenturgruppe aus Spanien', text: 'Die Terrakotta-Armee war der Hoehepunkt, und Stadtmauer, Muslim Quarter und Tang-Abendroute brachten genug Abwechslung.' },
        { city: 'Peking', name: 'Paar aus Deutschland', text: 'Der Hutong-Spaziergang und die Teehauszeit waren nicht gehetzt. Es fuehlte sich persoenlicher an als eine reine Checkliste.' }
      ]
    },
    product: {
      back: 'Zuruck zu Reiseprodukten',
      quote: 'Angebot anfragen',
      viewItinerary: 'Reiseverlauf ansehen',
      factsAria: 'Reisefakten',
      overview: 'Routenubersicht',
      dayByDay: 'Tag fur Tag',
      itinerary: 'Reiseverlauf',
      mealNote: 'Mahlzeiten werden als Fruhstuck / Mittagessen / Abendessen angezeigt.',
      gallery: 'Reisegalerie',
      details: 'Kommerzielle Details',
      detailTitle: 'Hotels, Preise und Leistungsumfang',
      hotelNote: 'Hotels sind 4-Sterne-Haeuser oder vergleichbar; Zimmer sind Standardzimmer.',
      hotels: 'Hotels',
      quotation: 'Angebot',
      including: 'Leistungen inklusive',
      excluding: 'Leistungen exklusive',
      ready: 'Bereit fur ein Angebot',
      cta: 'Nutzen Sie diese Route als Gruppenprodukt oder passen Sie sie fur Ihren Markt an.',
      suitableGroups: 'Geeignete Gruppen',
      customGroups: 'Private Gruppen, Familien, MICE-Erweiterungen und Agenturgruppen',
      faq: 'FAQ',
      faqTitle: 'Produktfragen vor dem Angebot',
      faqGroupType: 'Fuer welche Gruppentypen eignet sich dieses Produkt?',
      faqGroupAnswer:
        '{group}. Die Route kann nach Hotelniveau, Guidesprache, Zimmerliste, Flug- oder Bahnzeiten und Tagesrhythmus angepasst werden.',
      faqIncluded: 'Was ist enthalten?',
      faqExcluded: 'Was ist nicht enthalten?',
      faqQuote: 'Welche Informationen werden fuer ein Angebot benoetigt?',
      faqQuoteAnswer:
        'Bitte senden Sie Reisedaten, Ankunfts- und Abreisestaedte, Gruppengroesse, Hotelniveau, Guidesprache, Zimmerliste und Wunschorte fuer ein bestaetigtes Angebot.',
      internalLinks: 'Verwandte Planung',
      linkTitle: 'Staedte, Sehenswuerdigkeiten und Vorbereitung',
      relatedCity: 'Stadtguide',
      relatedAttraction: 'Attraktionsguide',
      planningLink: 'Planungsguide',
      visaLinkText: 'Visum, Transit, Pass, Hotel und Einladungsschreiben vor der Buchung pruefen.',
      beforeYouGoLinkText: 'Namen, Zimmerliste, Zuege, Attraktionen, Guidesprache, Zahlung, Mahlzeiten und Wetterpuffer vorbereiten.'
    },
    company: {
      metaDescription:
        'Profil der Tengxuan Travel Group mit Ueberblick, Flugressourcen, China-Inbound-Kompetenz, Niederlassungen, Marken, Meilensteinen, Auszeichnungen und Kultur.',
      contactTeam: 'Team kontaktieren',
      viewStrength: 'Gruppenstaerke ansehen',
      photosAria: 'Unternehmens- und Teamfotos',
      factsAria: 'Fakten zur Tengxuan Travel Group',
      overviewEyebrow: 'Gruppenueberblick',
      overviewTitle: 'Aufgebaut auf Reiseressourcen, Unternehmensservice und Plattformversorgung.',
      momentsEyebrow: 'Unternehmensmomente',
      momentsTitle: 'Bueroumfeld, Mitarbeiterkultur und Aktivitaetsszenen.',
      distributionEyebrow: 'Gruppenverteilung',
      distributionTitle: 'Ein Netzwerk mit 7 Standorten, verankert in der Pekinger Zentrale.',
      branchAria: 'Niederlassungen',
      inboundEyebrow: 'Inbound-Tourismus',
      brandEyebrow: 'Markensystem',
      brandTitle: 'Spezialisierte Marken fur Geschaeftsreisen, Transport, Plattformen und Technologie.',
      strengthEyebrow: 'Gruppenstaerke',
      strengthTitle: 'Airline-Ressourcen, Ticketing-Systeme und Enterprise-Supply-Chain.',
      timelineEyebrow: 'Entwicklungspfad',
      timelineTitle: 'Vom Reiseunternehmen 2001 zur Multi-Brand-Ressourcenplattform.',
      honorsEyebrow: 'Auszeichnungen und Kunden',
      honorsTitle: 'Von Branchenpartnern anerkannt und in vielen Unternehmensszenarien vertraut.',
      awardsAria: 'Tengxuan Zertifikate und Auszeichnungen',
      cultureEyebrow: 'Unternehmenskultur',
      cultureTitle: 'Richtung, Verantwortung und gemeinsame Arbeitswerte.',
      vision: 'Vision',
      mission: 'Mission',
      values: 'Werte'
    },
    subscription: {
      kicker: 'Tengxuan Travel E-Mail-Einstellungen',
      title: 'E-Mail-Abonnement verwalten',
      subscribedTitle: 'Sie sind abonniert',
      unsubscribedTitle: 'Sie sind abgemeldet',
      thisEmail: 'diese E-Mail-Adresse',
      summary:
        'Verwalten Sie, ob {email} Marketing-E-Mails von Tengxuan Travel erhaelt. Sie koennen sich abmelden oder das Abonnement mit demselben sicheren Link wiederherstellen.',
      missingParams: 'Diesem Link fehlen erforderliche Abonnementparameter.',
      incomplete: 'Dieser Abonnement-Link ist unvollstaendig. Bitte verwenden Sie den neuesten Link aus Ihrer E-Mail.',
      restored: 'Abonnement wiederhergestellt.',
      unsubscribed: 'Sie wurden abgemeldet.',
      actionsAria: 'Abo-Aktionen',
      updating: 'Aktualisierung...',
      unsubscribe: 'Abmelden',
      keep: 'Abonniert bleiben',
      secureLink: 'Sicherer Link',
      ready: 'Bereit',
      missing: 'Fehlt'
    }
  },
  fr: {
    common: {
      backHome: 'Retour a la page d accueil',
      contactExperts: 'Contacter nos experts',
      needHelp: 'Besoin d aide',
      planningTeam: 'Parlez avec notre equipe de planification Chine.',
      pageDetails: 'Details de la page'
    },
    nav: {
      aria: 'Navigation principale',
      home: 'Accueil',
      homeAria: 'Accueil Tengxuan Travel',
      openMenu: 'Ouvrir le menu',
      destinations: 'Lieux',
      customTrip: 'Sur mesure',
      cities: 'Villes',
      company: 'Societe',
      attractions: 'Sites',
      trips: 'Circuits',
      product: 'Produit',
      planning: 'Reserver',
      searchTrips: 'Rechercher des voyages',
      contact: 'Contact',
      language: 'Langue'
    },
    hero: {
      title: 'Decouvrir la Chine, ville par ville',
      summary:
        'Guides prives, preparation adaptee aux visas et voyages flexibles pour les visiteurs internationaux.',
      citiesCta: 'Explorer les villes',
      companyCta: 'A propos de Tengxuan'
    },
    footer: {
      intro: 'Experiences de voyage privees, pensees pour les visiteurs internationaux.',
      companyContactAria: 'Adresse et contact de Tengxuan Travel',
      addressLabel: 'Adresse',
      address: '5F 50520, Tower D, Galaxy SOHO, Chaoyangmen, Dongcheng District, Beijing',
      phoneLabel: 'Telephone',
      emailLabel: 'Email',
      explore: 'Explorer',
      companyProfile: 'Profil de la societe',
      destinations: 'Destinations',
      cityGuides: 'Guides des villes',
      attractions: 'Sites',
      travelProducts: 'Produits de voyage',
      productName: "Pekin-Xi'an-Shanghai",
      plan: 'Preparer',
      beforeYouGo: 'Avant le depart',
      visaEntry: 'Visa & entree',
      faq: 'FAQ',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Confidentialite',
      terms: 'Conditions d utilisation',
      cookies: 'Politique cookies',
      newsletterAria: 'Inscription newsletter',
      stayInspired: 'Rester inspire',
      emailPlaceholder: 'Votre email',
      sending: 'Envoi...',
      subscribed: 'Abonne',
      subscribeNow: 'S abonner',
      confirmed: 'Abonnement confirme.',
      unsubscribed: 'Vous etes desabonne.',
      unsubscribeThisEmail: 'Desabonner cet email',
      emailRequired: 'Saisissez une adresse email.',
      requestFailed: 'La demande a echoue.'
    },
    sections: {
      company: {
        link: 'Voir le profil de la societe',
        proofAria: 'Points forts de Tengxuan Travel Group',
        proofText: 'Cree en 2001, avec 2000+ partenaires fournisseurs qualite et 20 000+ clients qualite.'
      },
      cities: {
        title: 'Guides des grandes villes',
        summary: 'Choisissez votre base selon le style, le rythme et les priorites du voyage.',
        all: 'Ouvrir tous les guides',
        read: 'Lire le guide'
      },
      attractions: {
        title: 'Sites incontournables',
        summary: 'Ancrez chaque itineraire avec des sites qui meritent la logistique et le guide.',
        label: 'Selection'
      },
      trips: {
        title: 'Produits de voyage',
        summary: 'Partez d un itineraire clair puis adaptez hotels, langue du guide et rythme.',
        view: 'Voir le produit',
        custom: 'Devis sur mesure'
      },
      planning: {
        title: 'Aide a la preparation',
        summary: 'Details pratiques pour visas, trains, hotels, guides, paiement et rythme quotidien.',
        visa: 'Visa & entree',
        before: 'Avant le depart',
        faq: 'FAQ',
        contact: 'Contacter l equipe',
        aria: 'Avantages de preparation'
      }
    },
    destinations: {
      title: 'Destinations en Chine, du rythme des villes aux sites majeurs',
      eyebrow: 'Preparation des destinations',
      summary:
        'Parcourez villes et sites ensemble, puis ouvrez le guide dedie selon la question: rythme de destination ou deroulement de visite.',
      tabsAria: 'Filtres destinations',
      all: 'Tout',
      cities: 'Villes',
      attractions: 'Sites',
      cityEyebrow: 'Destinations urbaines',
      cityTitle: 'Construire l itineraire par ville',
      citySummary: 'Les guides de villes aident a definir duree, saison, transport, profil voyageur et rythme.',
      attractionEyebrow: 'Sites incontournables',
      attractionTitle: 'Ajouter les visites quand la route est claire',
      attractionSummary: 'Les guides de sites couvrent deroulement, notes pratiques, sources et combinaisons proches.'
    },
    city: {
      title: 'Grandes villes chinoises pour premiers voyages et retours',
      eyebrow: 'Preparation des villes en Chine',
      summary:
        'Comparez capitales classiques, portes modernes, villes gourmandes, jardins et bases nature.',
      planRoute: 'Preparer un itineraire',
      openGuide: 'Ouvrir le guide',
      allGuides: 'Tous les guides',
      factsAria: 'Faits de preparation ville',
      bestFor: 'Ideal pour',
      season: 'Saison',
      connections: 'Connexions',
      whatToSee: 'A voir',
      coreExperiences: 'Experiences cles',
      pace: 'Rythme',
      rhythm: 'Rythme suggere',
      note: 'Note de preparation',
      noteAria: 'Note de preparation voyage',
      customRoute: 'Demander un itineraire',
      ideas: 'Idees d itineraire',
      pairWith: 'Associer {city} avec',
      cityStoryTitle: 'Comment vivre {city}',
      titleSuffix: 'Guide de ville'
    },
    productList: {
      title: 'Produits classiques',
      eyebrow: 'Filtrer par ville',
      summary:
        'Choisissez une ville pour voir tous les produits qui l incluent, puis ouvrez l itineraire adapte au rythme du groupe, au niveau hotelier, a la langue du guide et au devis.',
      filtersAria: 'Filtres ville des produits',
      all: 'Tous les produits',
      recommendedCount: '{count} produits recommandes',
      dayPlan: 'Programme par jour',
      destinations: 'Destinations',
      consultation: 'Consulter un conseiller',
      viewDetail: 'Voir les details',
      feedbackEyebrow: 'Retours voyageurs',
      feedbackTitle: 'Ce que les voyageurs remarquent apres le voyage',
      feedbackSummary:
        'Exemples courts autour des priorites courantes des groupes prives: rythme clair, guide, transferts, billets et confort des repas.',
      reviews: [
        { city: 'Pekin', name: 'Famille de Singapour', text: 'Le guide a rendu les journees Cite interdite et Grande Muraille faciles pour les enfants, avec des transferts bien cales.' },
        { city: 'Xi’an', name: 'Groupe agence d Espagne', text: 'La journee des guerriers de terre cuite a ete le point fort, puis les remparts, le quartier musulman et la sortie du soir ont varie le rythme.' },
        { city: 'Pekin', name: 'Couple d Allemagne', text: 'La balade dans les hutongs et le temps au salon de the n etaient pas presses. Le voyage semblait plus personnel.' }
      ]
    },
    product: {
      back: 'Retour aux produits',
      quote: 'Demander un devis',
      viewItinerary: 'Voir l itineraire',
      factsAria: 'Faits du voyage',
      overview: 'Apercu de l itineraire',
      dayByDay: 'Jour par jour',
      itinerary: 'Itineraire',
      mealNote: 'Les repas sont indiques petit-dejeuner / dejeuner / diner.',
      gallery: 'Galerie du voyage',
      details: 'Details commerciaux',
      detailTitle: 'Hotels, prix et services inclus',
      hotelNote: 'Hotels 4 etoiles ou similaires; chambres standard.',
      hotels: 'Hotels',
      quotation: 'Devis',
      including: 'Services inclus',
      excluding: 'Services exclus',
      ready: 'Pret pour un devis',
      cta: 'Utilisez cette route comme produit groupe fixe ou adaptez-la a votre marche.',
      suitableGroups: 'Groupes adaptes',
      customGroups: 'Groupes prives, familles, extensions MICE et groupes agence',
      faq: 'FAQ',
      faqTitle: 'Questions produit avant devis',
      faqGroupType: 'A quel type de groupe ce produit convient-il ?',
      faqGroupAnswer:
        '{group}. La route peut etre ajustee selon le niveau hotelier, la langue du guide, la repartition des chambres, les horaires vol/train et le rythme quotidien.',
      faqIncluded: 'Qu est-ce qui est inclus ?',
      faqExcluded: 'Qu est-ce qui n est pas inclus ?',
      faqQuote: 'Quelles informations sont necessaires pour un devis ?',
      faqQuoteAnswer:
        'Envoyez les dates de voyage, villes d arrivee et de depart, taille du groupe, niveau hotelier, langue du guide, liste de chambres et lieux incontournables pour un devis confirme.',
      internalLinks: 'Planification liee',
      linkTitle: 'Villes, attractions et preparation',
      relatedCity: 'Guide de ville',
      relatedAttraction: 'Guide attraction',
      planningLink: 'Guide de preparation',
      visaLinkText: 'Verifier visa, transit, passeport, hotel et lettre d invitation avant la reservation.',
      beforeYouGoLinkText: 'Preparer noms, chambres, trains, attractions, langue du guide, paiement, repas et marges meteo.'
    },
    company: {
      metaDescription:
        'Profil de Tengxuan Travel Group: apercu du groupe, ressources aeriennes, capacite inbound Chine, reseau, marques, jalons, distinctions et culture.',
      contactTeam: 'Contacter l equipe',
      viewStrength: 'Voir les atouts du groupe',
      photosAria: 'Photos de la societe et de l equipe',
      factsAria: 'Faits sur Tengxuan Travel Group',
      overviewEyebrow: 'Apercu du groupe',
      overviewTitle: 'Construit autour des ressources voyage, du service entreprise et de l offre plateforme.',
      momentsEyebrow: 'Moments de societe',
      momentsTitle: 'Bureaux, culture employes et scenes d activite.',
      distributionEyebrow: 'Implantation du groupe',
      distributionTitle: 'Un reseau de 7 sites ancre par le siege de Pekin.',
      branchAria: 'Implantations',
      inboundEyebrow: 'Tourisme inbound',
      brandEyebrow: 'Systeme de marques',
      brandTitle: 'Marques specialisees pour voyage d affaires, transport, plateformes et technologie.',
      strengthEyebrow: 'Atouts du groupe',
      strengthTitle: 'Ressources aeriennes, systemes de billetterie et support supply-chain entreprise.',
      timelineEyebrow: 'Parcours de developpement',
      timelineTitle: 'D une societe de voyage en 2001 a une plateforme multi-marques.',
      honorsEyebrow: 'Distinctions et clients',
      honorsTitle: 'Reconnu par les partenaires du secteur et utilise dans de larges scenarios entreprise.',
      awardsAria: 'Certificats et distinctions Tengxuan',
      cultureEyebrow: 'Culture d entreprise',
      cultureTitle: 'Direction, responsabilite et valeurs de fonctionnement partagees.',
      vision: 'Vision',
      mission: 'Mission',
      values: 'Valeurs'
    },
    subscription: {
      kicker: 'Preferences email Tengxuan Travel',
      title: 'Gerer l abonnement email',
      subscribedTitle: 'Vous etes abonne',
      unsubscribedTitle: 'Vous etes desabonne',
      thisEmail: 'cette adresse email',
      summary:
        'Gerez si {email} recoit les emails marketing de Tengxuan Travel. Vous pouvez vous desabonner ou restaurer l abonnement avec le meme lien securise.',
      missingParams: 'Ce lien ne contient pas les parametres requis.',
      incomplete: 'Ce lien d abonnement est incomplet. Utilisez le dernier lien recu par email.',
      restored: 'Abonnement restaure.',
      unsubscribed: 'Vous avez ete desabonne.',
      actionsAria: 'Actions d abonnement',
      updating: 'Mise a jour...',
      unsubscribe: 'Se desabonner',
      keep: 'Rester abonne',
      secureLink: 'Lien securise',
      ready: 'Pret',
      missing: 'Manquant'
    }
  },
  es: {
    common: {
      backHome: 'Volver al inicio',
      contactExperts: 'Contactar expertos',
      needHelp: 'Necesita ayuda',
      planningTeam: 'Hable con nuestro equipo de planificacion de China.',
      pageDetails: 'Detalles de la pagina'
    },
    nav: {
      aria: 'Navegacion principal',
      home: 'Inicio',
      homeAria: 'Inicio de Tengxuan Travel',
      openMenu: 'Abrir menu',
      destinations: 'Destinos',
      customTrip: 'A medida',
      cities: 'Ciudades',
      company: 'Empresa',
      attractions: 'Atracciones',
      trips: 'Tours',
      product: 'Producto',
      planning: 'Reservas',
      searchTrips: 'Buscar viajes',
      contact: 'Contacto',
      language: 'Idioma'
    },
    hero: {
      title: 'Descubrir China, ciudad por ciudad',
      summary:
        'Guias privados, planificacion compatible con visados y viajes flexibles para visitantes internacionales.',
      citiesCta: 'Explorar ciudades',
      companyCta: 'Sobre Tengxuan'
    },
    footer: {
      intro: 'Experiencias privadas de viaje, planificadas para visitantes internacionales.',
      companyContactAria: 'Direccion y contacto de Tengxuan Travel',
      addressLabel: 'Direccion',
      address: '5F 50520, Tower D, Galaxy SOHO, Chaoyangmen, Dongcheng District, Beijing',
      phoneLabel: 'Telefono',
      emailLabel: 'Email',
      explore: 'Explorar',
      companyProfile: 'Perfil de empresa',
      destinations: 'Destinos',
      cityGuides: 'Guias de ciudades',
      attractions: 'Atracciones',
      travelProducts: 'Productos de viaje',
      productName: "Pekin-Xi'an-Shanghai",
      plan: 'Planificar',
      beforeYouGo: 'Antes de viajar',
      visaEntry: 'Visa y entrada',
      faq: 'FAQ',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Terminos de uso',
      cookies: 'Politica de cookies',
      newsletterAria: 'Registro al boletin',
      stayInspired: 'Reciba inspiracion',
      emailPlaceholder: 'Ingrese su email',
      sending: 'Enviando...',
      subscribed: 'Suscrito',
      subscribeNow: 'Suscribirse',
      confirmed: 'Suscripcion confirmada.',
      unsubscribed: 'Esta dado de baja.',
      unsubscribeThisEmail: 'Dar de baja este email',
      emailRequired: 'Ingrese una direccion de email.',
      requestFailed: 'La solicitud fallo.'
    },
    sections: {
      company: {
        link: 'Ver perfil de empresa',
        proofAria: 'Aspectos destacados de Tengxuan Travel Group',
        proofText: 'Fundada en 2001, con 2000+ socios proveedores de calidad y 20,000+ clientes de calidad.'
      },
      cities: {
        title: 'Guias de ciudades principales',
        summary: 'Elija su base por estilo de viaje, ritmo y prioridades.',
        all: 'Abrir todas las guias',
        read: 'Leer guia'
      },
      attractions: {
        title: 'Atracciones destacadas',
        summary: 'Ancle cada ruta con lugares que valen la logistica y el tiempo del guia.',
        label: 'Destacado'
      },
      trips: {
        title: 'Productos de viaje',
        summary: 'Empiece con una ruta clara y ajuste hotel, idioma del guia y ritmo.',
        view: 'Ver producto',
        custom: 'Cotizacion a medida'
      },
      planning: {
        title: 'Apoyo de planificacion',
        summary: 'Detalles practicos para visas, trenes, hoteles, guias, pagos y ritmo diario.',
        visa: 'Visa y entrada',
        before: 'Antes de viajar',
        faq: 'FAQ',
        contact: 'Contactar al equipo',
        aria: 'Ventajas de planificacion'
      }
    },
    destinations: {
      title: 'Destinos de China, del ritmo urbano a las visitas clave',
      eyebrow: 'Planificacion de destinos',
      summary:
        'Explore ciudades y atracciones juntas, y abra despues la guia dedicada segun la pregunta: ritmo del destino o flujo de visita.',
      tabsAria: 'Filtros de destinos',
      all: 'Todo',
      cities: 'Ciudades',
      attractions: 'Atracciones',
      cityEyebrow: 'Destinos urbanos',
      cityTitle: 'Planificar primero por ciudad',
      citySummary: 'Las guias de ciudad ayudan con estancia, temporada, transporte, tipo de viajero y ritmo.',
      attractionEyebrow: 'Atracciones imprescindibles',
      attractionTitle: 'Anadir visitas concretas cuando la ruta este clara',
      attractionSummary: 'Las guias de atracciones cubren flujo de visita, notas practicas, fuentes y combinaciones cercanas.'
    },
    city: {
      title: 'Ciudades de China para primeros viajes y repetidores',
      eyebrow: 'Planificacion de ciudades de China',
      summary:
        'Compare capitales clasicas, puertas modernas, ciudades gastronomicas, jardines y bases naturales.',
      planRoute: 'Planificar ruta',
      openGuide: 'Abrir guia',
      allGuides: 'Todas las guias',
      factsAria: 'Datos de planificacion',
      bestFor: 'Ideal para',
      season: 'Temporada',
      connections: 'Conexiones',
      whatToSee: 'Que ver',
      coreExperiences: 'Experiencias clave',
      pace: 'Ritmo',
      rhythm: 'Ritmo sugerido',
      note: 'Nota de planificacion',
      noteAria: 'Nota de planificacion de viaje',
      customRoute: 'Pedir ruta a medida',
      ideas: 'Ideas de ruta',
      pairWith: 'Combinar {city} con',
      cityStoryTitle: 'Como vivir {city}',
      titleSuffix: 'Guia de ciudad'
    },
    productList: {
      title: 'Productos clasicos',
      eyebrow: 'Filtrar productos por ciudad',
      summary:
        'Elija una ciudad para ver todos los productos que la incluyen y abra despues el itinerario segun ritmo del grupo, nivel de hotel, idioma del guia y alcance de cotizacion.',
      filtersAria: 'Filtros de ciudad para productos',
      all: 'Todos los productos',
      recommendedCount: '{count} productos recomendados',
      dayPlan: 'Plan diario',
      destinations: 'Destinos',
      consultation: 'Consultar asesor',
      viewDetail: 'Ver detalles',
      feedbackEyebrow: 'Comentarios de viajeros',
      feedbackTitle: 'Lo que los viajeros destacan despues del viaje',
      feedbackSummary:
        'Ejemplos breves sobre prioridades habituales de grupos privados: ritmo claro, guia, traslados, entradas y comodidad en comidas.',
      reviews: [
        { city: 'Pekin', name: 'Familia de Singapur', text: 'El guia mantuvo claras las jornadas de Ciudad Prohibida y Gran Muralla para los ninos, con traslados muy bien coordinados.' },
        { city: 'Xi’an', name: 'Grupo de agencia de Espana', text: 'Los guerreros de terracota fueron el punto fuerte, y la muralla, el barrio musulman y la ruta nocturna dieron variedad.' },
        { city: 'Pekin', name: 'Pareja de Alemania', text: 'El paseo por hutongs y el tiempo de te no estuvieron apresurados. Se sintio mas personal que una lista de visitas.' }
      ]
    },
    product: {
      back: 'Volver a productos',
      quote: 'Pedir cotizacion',
      viewItinerary: 'Ver itinerario',
      factsAria: 'Datos del tour',
      overview: 'Resumen de ruta',
      dayByDay: 'Dia a dia',
      itinerary: 'Itinerario',
      mealNote: 'Las comidas se muestran como desayuno / almuerzo / cena.',
      gallery: 'Galeria del tour',
      details: 'Detalles comerciales',
      detailTitle: 'Hoteles, precios y alcance del servicio',
      hotelNote: 'Hoteles de 4 estrellas o similares; habitaciones estandar.',
      hotels: 'Hoteles',
      quotation: 'Cotizacion',
      including: 'Servicios incluidos',
      excluding: 'Servicios no incluidos',
      ready: 'Listo para cotizar',
      cta: 'Use esta ruta como producto de grupo fijo o personalicela para su mercado.',
      suitableGroups: 'Grupos adecuados',
      customGroups: 'Grupos privados, familias, extensiones MICE y grupos de agencia',
      faq: 'FAQ',
      faqTitle: 'Preguntas de producto antes de cotizar',
      faqGroupType: '¿Para que tipo de grupo es adecuado este producto?',
      faqGroupAnswer:
        '{group}. La ruta puede ajustarse por nivel de hotel, idioma del guia, distribucion de habitaciones, horarios de vuelo o tren y ritmo diario.',
      faqIncluded: '¿Que esta incluido?',
      faqExcluded: '¿Que no esta incluido?',
      faqQuote: '¿Que informacion se necesita para cotizar?',
      faqQuoteAnswer:
        'Envie fechas de viaje, ciudades de llegada y salida, tamano del grupo, nivel de hotel, idioma del guia, lista de habitaciones y lugares imprescindibles para una cotizacion confirmada.',
      internalLinks: 'Planificacion relacionada',
      linkTitle: 'Ciudades, atracciones y preparacion',
      relatedCity: 'Guia de ciudad',
      relatedAttraction: 'Guia de atraccion',
      planningLink: 'Guia de planificacion',
      visaLinkText: 'Revise visa, transito, pasaporte, hotel y carta de invitacion antes de reservar.',
      beforeYouGoLinkText: 'Prepare nombres, habitaciones, trenes, atracciones, idioma del guia, pago, comidas y margen por clima.'
    },
    company: {
      metaDescription:
        'Perfil de Tengxuan Travel Group: resumen del grupo, recursos aereos, capacidad inbound China, red de oficinas, marcas, hitos, reconocimientos y cultura.',
      contactTeam: 'Contactar al equipo',
      viewStrength: 'Ver fortaleza del grupo',
      photosAria: 'Fotos de empresa y equipo',
      factsAria: 'Datos de Tengxuan Travel Group',
      overviewEyebrow: 'Resumen del grupo',
      overviewTitle: 'Construido sobre recursos de viaje, servicio empresarial y suministro de plataforma.',
      momentsEyebrow: 'Momentos de empresa',
      momentsTitle: 'Oficina, cultura de empleados y escenas de actividad.',
      distributionEyebrow: 'Distribucion del grupo',
      distributionTitle: 'Una red de 7 ubicaciones con sede central en Pekin.',
      branchAria: 'Ubicaciones',
      inboundEyebrow: 'Turismo inbound',
      brandEyebrow: 'Sistema de marcas',
      brandTitle: 'Marcas especializadas en viajes de negocio, transporte, plataformas y tecnologia.',
      strengthEyebrow: 'Fortaleza del grupo',
      strengthTitle: 'Recursos aereos, sistemas de emision y soporte de cadena de suministro empresarial.',
      timelineEyebrow: 'Trayectoria',
      timelineTitle: 'De empresa de viajes en 2001 a plataforma multi-marca de recursos.',
      honorsEyebrow: 'Reconocimientos y clientes',
      honorsTitle: 'Reconocida por socios del sector y confiable en amplios escenarios empresariales.',
      awardsAria: 'Certificados y premios de Tengxuan',
      cultureEyebrow: 'Cultura corporativa',
      cultureTitle: 'Direccion, responsabilidad y valores operativos compartidos.',
      vision: 'Vision',
      mission: 'Mision',
      values: 'Valores'
    },
    subscription: {
      kicker: 'Preferencias de email de Tengxuan Travel',
      title: 'Gestionar suscripcion de email',
      subscribedTitle: 'Esta suscrito',
      unsubscribedTitle: 'Esta dado de baja',
      thisEmail: 'esta direccion de email',
      summary:
        'Gestione si {email} recibe emails de marketing de Tengxuan Travel. Puede darse de baja o restaurar la suscripcion con el mismo enlace seguro.',
      missingParams: 'A este enlace le faltan parametros requeridos.',
      incomplete: 'Este enlace de suscripcion esta incompleto. Use el enlace mas reciente de su email.',
      restored: 'Suscripcion restaurada.',
      unsubscribed: 'Ha sido dado de baja.',
      actionsAria: 'Acciones de suscripcion',
      updating: 'Actualizando...',
      unsubscribe: 'Dar de baja',
      keep: 'Mantener suscripcion',
      secureLink: 'Enlace seguro',
      ready: 'Listo',
      missing: 'Falta'
    }
  },
  zh: {
    common: {
      backHome: '返回首页',
      contactExperts: '联系旅行顾问',
      needHelp: '需要帮助',
      planningTeam: '与我们的中国旅行规划团队沟通。',
      pageDetails: '页面详情'
    },
    nav: {
      aria: '主导航',
      home: '首页',
      homeAria: '腾轩旅行首页',
      openMenu: '打开菜单',
      destinations: '目的地',
      customTrip: '定制行程',
      cities: '城市',
      company: '公司介绍',
      attractions: '景点',
      trips: '经典产品',
      product: '产品',
      planning: '代订服务',
      searchTrips: '搜索线路',
      contact: '联系我们',
      language: '语言'
    },
    hero: {
      title: '一城一程，发现中国',
      summary: '专业私家导游、签证友好型行程规划，以及适合国际游客真实出行方式的灵活线路。',
      citiesCta: '查看城市',
      companyCta: '了解腾轩'
    },
    footer: {
      intro: '面向国际游客的私家旅行体验，由专业团队细致规划。',
      companyContactAria: '腾轩旅行公司地址和联系方式',
      addressLabel: '地址',
      address: '北京市东城区朝阳门银河 SOHO D 座 5 层 50520',
      phoneLabel: '电话',
      emailLabel: '邮箱',
      explore: '探索',
      companyProfile: '公司简介',
      destinations: '目的地',
      cityGuides: '城市指南',
      attractions: '精选景点',
      travelProducts: '旅行产品',
      productName: '北京-西安-上海',
      plan: '规划',
      beforeYouGo: '行前准备',
      visaEntry: '签证与入境',
      faq: '常见问题',
      contact: '联系我们',
      legal: '法律',
      privacy: '隐私政策',
      terms: '使用条款',
      cookies: 'Cookie 政策',
      newsletterAria: '订阅邮件',
      stayInspired: '获取旅行灵感',
      emailPlaceholder: '输入邮箱',
      sending: '发送中...',
      subscribed: '已订阅',
      subscribeNow: '立即订阅',
      confirmed: '订阅已确认。',
      unsubscribed: '当前已退订。',
      unsubscribeThisEmail: '退订该邮箱',
      emailRequired: '请输入邮箱地址。',
      requestFailed: '订阅请求失败。'
    },
    sections: {
      company: {
        link: '查看公司简介',
        proofAria: '腾轩旅行集团亮点',
        proofText: '成立于 2001 年，拥有 2000+ 优质供应商合作伙伴和 20,000+ 优质客户。'
      },
      cities: {
        title: '重点城市指南',
        summary: '按旅行风格、节奏和首次访华优先级选择适合的目的地。',
        all: '查看全部指南',
        read: '阅读城市指南'
      },
      attractions: {
        title: '代表性景点',
        summary: '用真正值得安排交通和导游时间的景点，支撑每一条线路。',
        label: '精选'
      },
      trips: {
        title: '旅行产品',
        summary: '先从清晰线路开始，再按酒店等级、导游语言和旅行节奏调整。',
        view: '查看产品',
        custom: '定制报价'
      },
      planning: {
        title: '规划支持',
        summary: '覆盖签证、火车、酒店、导游、支付和逐日节奏的实用信息。',
        visa: '签证与入境',
        before: '行前准备',
        faq: '常见问题',
        contact: '联系规划团队',
        aria: '规划优势'
      }
    },
    destinations: {
      title: '中国城市目的地',
      eyebrow: '目的地',
      summary: '旅行社选品、散客定制，先从城市入口开始。',
      tabsAria: '目的地筛选',
      all: '全部',
      cities: '目的地城市',
      attractions: '热门景点',
      cityEyebrow: '城市入口',
      cityTitle: '选择要去的城市',
      citySummary: '快速查看停留天数、季节、交通和适合人群。',
      attractionEyebrow: '必看景点',
      attractionTitle: '线路结构清楚后再加入具体参观对象',
      attractionSummary: '景点指南用于判断参观流程、预约与注意事项、资料来源和可搭配景点。'
    },
    city: {
      title: '适合首次和深度游客的中国重点城市',
      eyebrow: '中国城市规划',
      summary: '比较经典古都、现代门户、美食城市、园林水乡和自然目的地，再确定适合团队的线路节奏。',
      planRoute: '规划线路',
      openGuide: '打开指南',
      allGuides: '全部城市指南',
      factsAria: '城市规划信息',
      bestFor: '适合',
      recommendedStay: '推荐停留',
      season: '季节',
      connections: '交通连接',
      transport: '交通方式',
      whatToSee: '看什么',
      coreExperiences: '核心体验',
      pace: '如何安排节奏',
      rhythm: '建议城市节奏',
      note: '规划提示',
      noteAria: '旅行规划提示',
      customRoute: '咨询定制线路',
      ideas: '线路想法',
      pairWith: '{city} 可搭配',
      internalLinks: '相关规划',
      linkTitle: '把 {city} 放入中国私家游线路',
      relatedAttraction: '景点指南',
      relatedProduct: '旅行产品',
      galleryControls: '城市图片轮播控制',
      galleryThumbnails: '城市图片缩略图',
      previousImage: '上一张城市图片',
      nextImage: '下一张城市图片',
      showImage: '查看{title}',
      cityStory: '城市介绍',
      cityStoryTitle: '这座城的打开方式',
      popularClassics: '热门景点',
      popularClassicsTitle: '{city}热门景点',
      faq: 'FAQ',
      faqTitle: '{city} 旅行常见问题',
      faqBestFor: '{city} 适合哪些人？',
      faqStay: '{city} 建议停留多久？',
      faqSeason: '{city} 什么季节最适合？',
      faqTransport: '{city} 如何和其他中国城市衔接？',
      titleSuffix: '城市指南'
    },
    attraction: {
      title: '中国代表性景点',
      eyebrow: '景点规划',
      summary: '用独立景点页了解每个景点为什么值得去、如何安排节奏，以及适合搭配哪些线路。',
      openGuide: '打开景点指南',
      allGuides: '全部景点指南',
      factsAria: '景点规划信息',
      whyGo: '为什么值得去',
      visitFlow: '建议游览节奏',
      practicalNotes: '规划提示',
      sources: '资料来源',
      imageCredit: '图片来源',
      related: '相关景点',
      pairWith: '可搭配景点',
      planRoute: '规划这条线路',
      bestSeason: '最佳季节',
      transport: '交通方式',
      seasonFallback: '确认线路前需核验目的地季节、开放时间和运营安排。',
      internalLinks: '相关规划',
      linkTitle: '把该景点放入线路',
      relatedCity: '城市指南',
      relatedProduct: '旅行产品',
      faq: 'FAQ',
      faqTitle: '{attraction} 常见问题',
      faqBestFor: '{attraction} 适合哪些人？',
      faqStay: '{attraction} 需要多久？',
      faqSeason: '{attraction} 什么季节最适合？',
      faqTransport: '如何安排 {attraction} 游览？',
      titleSuffix: '景点指南'
    },
    productList: {
      title: '经典产品',
      eyebrow: '按城市筛选产品',
      summary: '选择城市后，下方会展示所有包含该城市的产品；继续打开详情，可查看团型、酒店等级、导游语言和报价范围。',
      filtersAria: '产品城市筛选',
      all: '全部产品',
      recommendedCount: '共有 {count} 个推荐玩法',
      dayPlan: '行程摘要',
      destinations: '目的地',
      consultation: '咨询顾问',
      viewDetail: '查看详情',
      feedbackEyebrow: '旅行归来用户体验',
      feedbackTitle: '游客最常提到的体验点',
      feedbackSummary: '反馈样例围绕私家团常见关注点：节奏、导游、接送、票务和餐食舒适度。',
      reviews: [
        { city: '北京', name: '新加坡亲子家庭', text: '故宫和长城两天安排得很清楚，孩子不会太累，车辆衔接让北京停留很省心。' },
        { city: '西安', name: '西班牙旅行社团队', text: '兵马俑当天是全团亮点，城墙、回民街和大唐夜游补足了城市层次，而且不用频繁换酒店。' },
        { city: '北京', name: '德国情侣客人', text: '胡同和茶馆时间没有被压缩，导游讲得细，整体不像打卡线路。' }
      ]
    },
    product: {
      back: '返回旅行产品',
      quote: '咨询报价',
      viewItinerary: '查看行程',
      factsAria: '线路信息',
      overview: '线路概览',
      dayByDay: '逐日安排',
      itinerary: '行程',
      mealNote: '餐食按早餐 / 午餐 / 晚餐展示。',
      gallery: '线路图库',
      details: '商务细节',
      detailTitle: '酒店、价格和服务范围',
      hotelNote: '酒店为四星或同级，房型按标准间计算。',
      hotels: '酒店',
      quotation: '报价',
      including: '服务包含',
      excluding: '服务不含',
      ready: '可以报价',
      cta: '可将该线路作为固定团队产品，也可按客源市场进行定制。',
      suitableGroups: '适合团型',
      customGroups: '私家团、家庭团、MICE 延展和旅行社团队',
      faq: 'FAQ',
      faqTitle: '报价前常见问题',
      faqGroupType: '该产品适合什么团型？',
      faqGroupAnswer: '{group}。线路可按酒店等级、导游语言、房型、航班或铁路时间和每日节奏调整。',
      faqIncluded: '包含什么？',
      faqExcluded: '不包含什么？',
      faqQuote: '询价需要提供哪些信息？',
      faqQuoteAnswer: '请提供旅行日期、抵离城市、团队人数、酒店等级、导游语言、房型名单和必看地点，以便确认报价。',
      internalLinks: '相关规划',
      linkTitle: '城市、景点与行前准备',
      relatedCity: '城市指南',
      relatedAttraction: '景点指南',
      planningLink: '规划指南',
      visaLinkText: '预订前核对签证、过境、护照、酒店和邀请函等入境准备。',
      beforeYouGoLinkText: '准备姓名、房型、火车、景点、导游语言、支付、餐食和天气缓冲。'
    },
    company: {
      metaDescription: '腾轩旅行集团公司简介，包含集团概况、航司资源、入境游能力、分支网络、品牌体系、发展节点、荣誉资质和企业文化。',
      contactTeam: '联系我们团队',
      viewStrength: '查看集团实力',
      photosAria: '公司和团队照片',
      factsAria: '腾轩旅行集团信息',
      overviewEyebrow: '集团概览',
      overviewTitle: '围绕旅行资源、企业服务和平台供给能力建设。',
      momentsEyebrow: '公司影像',
      momentsTitle: '办公环境、员工文化和活动场景。',
      activityEyebrow: '活动相册',
      activityTitle: '按分类查看更多公司活动照片。',
      backToCompany: '返回公司介绍',
      activityNotFound: '未找到该公司活动相册',
      distributionEyebrow: '集团布局',
      distributionTitle: '以北京总部为核心的 7 地分支网络。',
      branchAria: '分支地点',
      inboundEyebrow: '入境旅游',
      brandEyebrow: '品牌体系',
      brandTitle: '覆盖商旅、交通、平台和科技的专业化品牌矩阵。',
      strengthEyebrow: '集团实力',
      strengthTitle: '航司资源、票务系统和企业供应链支持。',
      timelineEyebrow: '发展路径',
      timelineTitle: '从 2001 年旅行公司发展为多品牌资源平台。',
      honorsEyebrow: '荣誉与客户',
      honorsTitle: '获得行业伙伴认可，并服务广泛企业场景。',
      awardsAria: '腾轩证书和奖项',
      cultureEyebrow: '企业文化',
      cultureTitle: '方向、责任和共同的运营价值观。',
      vision: '愿景',
      mission: '使命',
      values: '价值观'
    },
    subscription: {
      kicker: '腾轩旅行邮件偏好',
      title: '管理邮件订阅',
      subscribedTitle: '您已订阅',
      unsubscribedTitle: '您已退订',
      thisEmail: '该邮箱',
      summary: '管理 {email} 是否接收腾轩旅行营销邮件。您可以现在退订，也可以使用同一个安全邮件链接恢复订阅。',
      missingParams: '该链接缺少必要的订阅参数。',
      incomplete: '该订阅链接不完整。请使用邮件中的最新链接。',
      restored: '订阅已恢复。',
      unsubscribed: '您已退订。',
      actionsAria: '订阅操作',
      updating: '更新中...',
      unsubscribe: '退订',
      keep: '保持订阅',
      secureLink: '安全链接',
      ready: '可用',
      missing: '缺失'
    }
  }
} satisfies Record<Locale, MessageTree>

const extraPageMessages = {
  de: {
    beforeYouGo: {
      title: 'Buchungsservice fuer China-Reisen',
      eyebrow: 'Buchungsservice',
      summary: 'Wir unterstuetzen Besucher bei Fluegen, Hotels, Zugtickets, Mietwagen, Guides, Eintrittskarten und China-SIM-Karten.',
      sections: [
        {
          title: 'Was wir buchen koennen',
          items: [
            'Fluege passend zu Route, Reisedaten und Budget.',
            'Hotels nach Stadt, Zimmerliste, Komfortniveau und Lagewunsch.',
            'China-Zugtickets, Mietwagen, Privatfahrzeuge und Gruppenfahrzeuge.',
            'Lizenzierte Guides, Eintrittskarten und SIM-Karten fuer China.'
          ]
        },
        {
          title: 'Hilfreiche Angaben',
          items: [
            'Reisedaten, Ankunft, Abreise, Personenzahl und bevorzugter Zeitplan.',
            'Passnamen und Passnummern fuer Leistungen mit Realnamenpflicht.',
            'Hotelkategorie, Zimmer, Guide-Sprache, Fahrzeugtyp und Gepaeck.',
            'Essenswuensche, Mobilitaet, SIM-Karten-Dauer und wichtige Sehenswuerdigkeiten.'
          ]
        }
      ]
    },
    contact: {
      title: 'Mit einem China-Reisespezialisten sprechen',
      eyebrow: 'Kontakt',
      summary:
        'Senden Sie Ankunftsstadt, Reisedaten, Gruppengroesse, Hotelniveau, Guide-Sprache und Wunschstaedte. Das Team erstellt Route und Angebot nach aktueller Verfuegbarkeit.',
      email: 'support@tengxuan.com',
      ctaLabel: 'E-Mail-Entwurf starten',
      copyLabel: 'Der Entwurf enthaelt eine strukturierte Angebotsanfrage, damit nur fehlende Details ergaenzt werden muessen.',
      responseLabel: 'Planungsteam',
      responseText: 'Koordination von Route, Hotel, Fahrzeug, Guide und Tickets fuer private China-Reisen.',
      servicesTitle: 'Was wir anbieten koennen',
      checklistTitle: 'Hilfreiche Angaben',
      templateSubject: 'Anfrage fuer China-Reiseangebot',
      templateBody:
        'Hallo Tengxuan Travel Team,\n\nich moechte ein Angebot fuer eine China-Reise anfragen.\n\nReisedaten:\nAnkunftsstadt:\nAbreisestadt:\nAnzahl Reisende:\nZimmerbedarf:\nGewuenschtes Hotelniveau:\nGuide-Sprache:\nStaedte oder Sehenswuerdigkeiten:\nBudgetrahmen:\nNationalitaet / Visa-Hinweise:\nErnaehrungs- oder Mobilitaetsbedarf:\nAgentur oder Firma:\n\nBitte senden Sie eine Routenskizze, Leistungsumfang und Angebot.\n\nVielen Dank.',
      items: [
        "Produktangebote: Peking, Xi'an, Shanghai, Chengdu, Guilin, Zhangjiajie und individuelle Routen.",
        'Geschaeftsanfragen: Meetings, Dolmetscher, Fahrzeuge, Hotels und Rechnungsunterstuetzung.',
        'Empfohlene Angaben: Daten, Reisende, Zimmer, Budget, Nationalitaet und Ernaehrungswuensche.'
      ],
      services: ['Private Stadtrouten und mehrtaegige China-Reisen.', 'Hotels, Fahrzeuge, Guides, Tickets, Dolmetscher und Meeting-Support.', 'Gruppenangebote fuer Agenturen und individuelle Produktpakete.'],
      checklist: ['Reisezeitraum, Ankunft, Abreise und wichtige Orte.', 'Reisende, Zimmer, Hotelniveau, Guide-Sprache und Reisetempo.', 'Budget, Nationalitaet, Ernaehrung, Mobilitaet und Rechnungsbedarf.']
    },
    customTrip: {
      title: 'Ihre private China-Reise einfach anfragen',
      eyebrow: 'Massreise',
      summary:
        'Senden Sie uns Ihre E-Mail, Ankunftsstadt, Abreisestadt, Reisezeit und Ihr bevorzugtes Tempo. Daraus entwickeln wir eine private China-Route mit Hotels, Fahrzeugen, Guides, Tickets, Zuegen und praktischen Hinweisen zur Einreise.',
      email: 'support@tengxuan.com',
      formTitle: 'Reisewunsch senden',
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'name@example.com',
      travelWindowLabel: 'Reisezeit',
      travelWindowPlaceholder: 'Oktober 2026, 8-10 Tage',
      travelersLabel: 'Reisende (Alter der Kinder angeben)',
      travelersPlaceholder: '2 Erwachsene, 1 Kind (6 Jahre)',
      arrivalLabel: 'Ankunftsstadt oder Flughafen',
      arrivalPlaceholder: 'Peking PEK / Shanghai PVG',
      departureLabel: 'Abreisestadt oder Flughafen',
      departurePlaceholder: 'Hongkong / Shanghai',
      interestsLabel: 'Staedte, Sehenswuerdigkeiten und Interessen',
      interestsPlaceholder: 'Grosse Mauer, Pandas, Essen, Gaerten, leichte Wanderungen...',
      paceLabel: 'Bevorzugtes Tempo',
      pacePlaceholder: 'Entspannt, ausgewogen, kompakt',
      hotelLabel: 'Hotelstandard',
      hotelPlaceholder: 'Boutique, 4 Sterne, 5 Sterne, Familienzimmer',
      notesLabel: 'Essen, Mobilitaet, Visum oder Geschaeftsbedarf',
      notesPlaceholder: 'Vegetarisch, Rollstuhlzugang, Dolmetscher, Rechnung...',
      submitLabel: 'Bitte meine Reise planen',
      successTitle: 'E-Mail-Entwurf ist bereit.',
      successText: 'Ihr Mailprogramm oeffnet die Anfrage. Sie koennen alles vor dem Senden anpassen.',
      responseLabel: 'China-Reiseplanung',
      responseText: 'Teilen Sie zuerst die wichtigsten Reisedaten, dann stimmen wir die Route Schritt fuer Schritt ab.',
      proofTitle: 'Was wir zuerst klaeren',
      benefitsTitle: 'Auf internationale China-Reisen abgestimmt',
      ideasTitle: 'Beliebte Startpunkte',
      templateSubject: 'Anfrage fuer private China-Reise',
      templateBody:
        'Hallo Tengxuan Travel Team,\n\nich moechte eine private China-Reise planen lassen.\n\nE-Mail: {email}\nReisezeit: {travelWindow}\nAnzahl der Reisenden und Alter der Kinder: {travelers}\nAnkunftsstadt / Flughafen: {arrival}\nAbreisestadt / Flughafen: {departure}\nStaedte, Sehenswuerdigkeiten oder Interessen: {interests}\nBevorzugtes Tempo: {pace}\nHotelstandard: {hotelLevel}\nWeitere Hinweise: {notes}\n\nBitte senden Sie mir einen Routenvorschlag, den Leistungsumfang und eine erste Preisspanne.\n\nVielen Dank.',
      proofPoints: ['Mit E-Mail starten und Details spaeter ergaenzen', 'Ankunft und Abreise helfen bei einer sinnvollen Tagesroute', 'Tempo, Essen, Mobilitaet und Visum frueh einplanen'],
      benefits: [
        { title: 'Einfacher Start per E-Mail', text: 'Sie koennen die Anfrage ohne lokale Telefonnummer beginnen und spaeter Fluege, Hotels und Namen ergaenzen.' },
        { title: 'Route vor Preis', text: 'Vor dem Angebot klaeren wir Staedte, Reisedauer, Hotelstandard, Guide-Sprache und Interessen.' },
        { title: 'Privat statt gemischte Gruppe', text: 'Die Route passt zu Paaren, Familien, Agenturgruppen, Geschaeftsreisenden und Senioren.' },
        { title: 'Details gemeinsam geplant', text: 'Hotels, Fahrzeuge, Guides, Tickets, Zuege, Dolmetscher, Meetings und Rechnungen koennen zusammen koordiniert werden.' }
      ],
      ideas: [
        { title: 'Erste China-Reise', text: "Peking, Xi'an, Shanghai und eine ruhigere Stadt wie Hangzhou, Chengdu oder Guilin." },
        { title: 'Familientempo', text: 'Spaetere Starts, weniger Hotelwechsel, kindgerechte Guides, stabile Mahlzeiten und gute Fahrzeugunterstuetzung.' },
        { title: 'Business plus Freizeit', text: 'Meetings, Dolmetscher, Transfers, Rechnungen und kurze Kulturprogramme.' }
      ]
    },
    faq: {
      title: 'Haeufige Planungsfragen',
      eyebrow: 'FAQ',
      summary: 'Operative Antworten zu privaten China-Routen, Gruppenangeboten und individuellen Reisen.',
      sections: [
        { title: 'Sind Preise final?', body: 'Veroeffentlichte Preise sind Richtwerte. Endpreise haengen von Datum, Hotelklasse, Transport, Guide-Sprache und Gruppengroesse ab.' },
        { title: 'Sind Routen anpassbar?', body: 'Ja. Produkte koennen nach Ankunft, Abreise, Hotelstandard, Tempo, Ernaehrung und Interessen angepasst werden.' },
        { title: 'Gibt es Shopping-Stopps?', body: 'Die privaten Produkte sind auf Sightseeing und Service ausgelegt. Shopping-Stopps dienen nicht als Preissubvention.' },
        { title: 'Was sollen Agenturen senden?', body: 'Bitte Markt, Gruppengroesse, Reisezeitraum, Zielpreis, Hotelniveau, Guide-Sprache und gewuenschte Leistungen senden.' }
      ]
    },
    visaEntry: {
      title: 'Checkliste fur Einreiseplanung',
      eyebrow: 'Visum & Einreise',
      summary: 'Visa- und Einreiseregeln koennen sich nach Nationalitaet, Route und Datum aendern. Vor nicht erstattbaren Buchungen offizielle Quellen pruefen.',
      sections: [
        { title: 'Vor Angebotsbestaetigung', items: ['Nationalitaet und Passgueltigkeit.', 'Ankunfts- und Abreisestaedte.', 'Transitstaedte und Flugrouting.', 'Hotel- und Einladungsschreiben falls erforderlich.'] },
        { title: 'Dokumente vorbereiten', items: ['Passdaten exakt wie im Pass.', 'Endgueltige Reisedaten und Hoteldetails.', 'Notfallkontakt und besondere Hilfe.', 'Kopien fur Bahn-, Flug- oder Attraktionssysteme.'] }
      ]
    },
    terms: {
      title: 'Nutzungsbedingungen',
      eyebrow: 'Bedingungen',
      summary:
        'Veroeffentlichte Routen dienen als Planungsreferenz. Bestaetigte Leistungen, Preise, Einschluesse, Ausschluesse und Stornoregeln werden im finalen Angebot oder Servicevertrag festgelegt.',
      sections: [
        {
          title: 'Angebotsumfang',
          items: [
            'Preise koennen je nach Datum, Hotelverfuegbarkeit, Transport, Guide-Sprache und Gruppengroesse variieren.',
            'Finale Einschluesse und Ausschluesse werden vor Zahlung bestaetigt.',
            'Optionale Aktivitaeten und Upgrades werden nach dem finalen Routenplan berechnet.'
          ]
        },
        {
          title: 'Reiseverantwortung',
          items: [
            'Reisende sind fuer gueltige Paesse, Visa, Versicherungen und persoenliche Dokumente verantwortlich.',
            'Routen koennen wegen Wetter, Schliessungen, Verkehrsbetrieb oder Sicherheitsbedarf angepasst werden.',
            'Regeln von Lieferanten gelten fuer Hotels, Transport, Sehenswuerdigkeiten und Drittleistungen.'
          ]
        }
      ]
    }
  },
  fr: {
    beforeYouGo: {
      title: 'Service de reservation pour la Chine',
      eyebrow: 'Service de reservation',
      summary: 'Nous pouvons aider les visiteurs a reserver vols, hotels, trains, voitures, guides, billets de sites et cartes SIM Chine.',
      sections: [
        { title: 'Ce que nous pouvons reserver', items: ['Vols selon votre itineraire, vos dates et votre budget.', 'Hotels selon ville, chambres, niveau de confort et emplacement souhaite.', 'Billets de train en Chine, location de voiture, vehicule prive ou transport de groupe.', 'Guides professionnels, billets de sites touristiques et cartes SIM Chine.'] },
        { title: 'Informations utiles', items: ['Dates, arrivee, depart, nombre de voyageurs et rythme prefere.', 'Noms et numeros de passeport pour les services en nom reel.', 'Niveau hotelier, chambres, langue du guide, vehicule et bagages.', 'Repas, mobilite, duree de carte SIM et sites prioritaires.'] }
      ]
    },
    contact: {
      title: 'Parler a un specialiste Chine',
      eyebrow: 'Contact',
      summary:
        'Envoyez ville d arrivee, dates, taille du groupe, niveau hotelier, langue du guide et villes prioritaires. L equipe prepare itineraire et devis selon disponibilite.',
      email: 'support@tengxuan.com',
      ctaLabel: 'Preparer un email',
      copyLabel: 'Le brouillon contient une demande de devis structuree afin de completer seulement les informations manquantes.',
      responseLabel: 'Equipe de preparation',
      responseText: 'Coordination itineraire, hotel, vehicule, guide et billets pour voyages prives en Chine.',
      servicesTitle: 'Ce que nous pouvons deviser',
      checklistTitle: 'Details utiles',
      templateSubject: 'Demande de devis voyage Chine',
      templateBody:
        'Bonjour equipe Tengxuan Travel,\n\nJe souhaite demander un devis pour un voyage en Chine.\n\nDates de voyage:\nVille d arrivee:\nVille de depart:\nNombre de voyageurs:\nBesoins chambres:\nNiveau hotelier souhaite:\nLangue du guide:\nVilles ou sites a inclure:\nBudget indicatif:\nNationalite / notes visa:\nBesoins alimentaires ou mobilite:\nAgence ou societe:\n\nMerci de partager une proposition d itineraire, le perimetre des services et le devis.\n\nCordialement.',
      items: [
        "Devis produits: Pekin, Xi'an, Shanghai, Chengdu, Guilin, Zhangjiajie et routes sur mesure.",
        'Demandes business: reunions, interpretes, vehicules, hotels et facturation.',
        'Details recommandes: dates, voyageurs, chambres, budget, nationalite et besoins alimentaires.'
      ],
      services: ['Itineraires prives par ville et circuits Chine multi-villes.', 'Hotels, vehicules, guides, billets, interpretes et support reunions.', 'Devis groupes agences et packaging produit sur mesure.'],
      checklist: ['Periode, arrivee, depart et sites prioritaires.', 'Nombre de voyageurs, chambres, hotel, langue du guide et rythme.', 'Budget, nationalite, repas, mobilite et besoins de facturation.']
    },
    customTrip: {
      title: 'Creer simplement votre voyage prive en Chine',
      eyebrow: 'Voyage sur mesure',
      summary:
        'Indiquez votre email, votre ville d arrivee, votre ville de depart, vos dates et le rythme souhaite. Nous preparons ensuite un itineraire prive avec hotels, vehicules, guides, billets, trains et points pratiques pour l entree en Chine.',
      email: 'support@tengxuan.com',
      formTitle: 'Envoyer votre idee de voyage',
      emailLabel: 'Adresse email',
      emailPlaceholder: 'name@example.com',
      travelWindowLabel: 'Periode de voyage',
      travelWindowPlaceholder: 'Octobre 2026, 8-10 jours',
      travelersLabel: 'Voyageurs (indiquer l age des enfants)',
      travelersPlaceholder: '2 adultes, 1 enfant (6 ans)',
      arrivalLabel: 'Ville ou aeroport d arrivee',
      arrivalPlaceholder: 'Pekin PEK / Shanghai PVG',
      departureLabel: 'Ville ou aeroport de depart',
      departurePlaceholder: 'Hong Kong / Shanghai',
      interestsLabel: 'Villes, sites et centres d interet',
      interestsPlaceholder: 'Grande Muraille, pandas, cuisine, jardins, marche legere...',
      paceLabel: 'Rythme prefere',
      pacePlaceholder: 'Calme, equilibre, compact',
      hotelLabel: 'Niveau hotelier',
      hotelPlaceholder: 'Boutique, 4 etoiles, 5 etoiles, chambres famille',
      notesLabel: 'Repas, mobilite, visa ou besoins business',
      notesPlaceholder: 'Vegetarien, acces fauteuil, interprete, facture...',
      submitLabel: 'Aidez-moi a creer mon voyage',
      successTitle: 'Brouillon d email pret.',
      successText: 'Votre application mail s ouvre avec la demande. Vous pouvez modifier avant l envoi.',
      responseLabel: 'Preparation Chine',
      responseText: 'Partagez les elements essentiels du voyage; nous affinerons la route avec vous.',
      proofTitle: 'A confirmer en premier',
      benefitsTitle: 'Pense pour les voyageurs internationaux',
      ideasTitle: 'Points de depart frequents',
      templateSubject: 'Demande de voyage prive en Chine',
      templateBody:
        'Bonjour equipe Tengxuan Travel,\n\nje souhaite preparer un voyage prive en Chine.\n\nEmail: {email}\nPeriode de voyage: {travelWindow}\nNombre de voyageurs et age des enfants: {travelers}\nVille / aeroport d arrivee: {arrival}\nVille / aeroport de depart: {departure}\nVilles, sites ou interets: {interests}\nRythme prefere: {pace}\nNiveau hotelier: {hotelLevel}\nAutres notes: {notes}\n\nMerci de me proposer un itineraire, les services inclus et une premiere fourchette de prix.\n\nMerci.',
      proofPoints: ['Commencer par email et completer les details ensuite', 'Arrivee et depart permettent de construire une route coherente', 'Rythme, repas, mobilite et visa sont pris en compte tot'],
      benefits: [
        { title: 'Demarrage simple par email', text: 'Vous pouvez lancer la demande sans numero local et ajouter ensuite vols, hotels et informations voyageurs.' },
        { title: 'La route avant le prix', text: 'Avant le devis, nous clarifions villes, duree, niveau hotelier, langue du guide et interets.' },
        { title: 'Prive, pas groupe melange', text: 'L itineraire peut convenir aux couples, familles, groupes d agence, voyageurs business et seniors.' },
        { title: 'Details coordonnes ensemble', text: 'Hotels, vehicules, guides, billets, trains, interpretes, reunions et facturation peuvent etre planifies ensemble.' }
      ],
      ideas: [
        { title: 'Premier voyage en Chine', text: "Pekin, Xi'an, Shanghai, avec une ville plus douce comme Hangzhou, Chengdu ou Guilin." },
        { title: 'Rythme famille', text: 'Departs plus tardifs, moins de changements d hotel, guide adapte aux enfants, repas confortables et vehicule fiable.' },
        { title: 'Business plus loisirs', text: 'Reunions, interpretes, transferts, facturation et courtes extensions culturelles.' }
      ]
    },
    faq: {
      title: 'Questions frequentes de preparation',
      eyebrow: 'FAQ',
      summary: 'Reponses operationnelles pour routes privees en Chine, devis groupes et demandes sur mesure.',
      sections: [
        { title: 'Les prix sont-ils definitifs?', body: 'Les prix publics sont indicatifs. Le devis final depend des dates, hotels, transport, langue du guide et taille du groupe.' },
        { title: 'Les routes sont-elles personnalisables?', body: 'Oui. Les produits peuvent etre adaptes selon arrivee, depart, hotel, rythme, besoins alimentaires et interets.' },
        { title: 'Y a-t-il des arrets shopping?', body: 'Les produits prives cites sont centres sur visites et service. Les arrets shopping ne subventionnent pas le prix.' },
        { title: 'Que doivent envoyer les agences?', body: 'Envoyez marche, taille du groupe, periode, prix cible, niveau hotelier, langue du guide et inclusions requises.' }
      ]
    },
    visaEntry: {
      title: 'Liste de preparation entree',
      eyebrow: 'Visa & entree',
      summary: 'Les regles de visa et entree changent selon nationalite, route et date. Verifiez les sources officielles avant les services non remboursables.',
      sections: [
        { title: 'Avant confirmation du devis', items: ['Nationalite et validite du passeport.', 'Villes d arrivee et de depart.', 'Villes de transit et itineraire aerien.', 'Hotels et lettre d invitation si necessaire.'] },
        { title: 'Documents a preparer', items: ['Informations passeport exactement comme affichees.', 'Dates finales et details hotels.', 'Contact urgence et besoins d assistance.', 'Copies requises par train, vol ou attractions.'] }
      ]
    },
    terms: {
      title: 'Conditions d utilisation',
      eyebrow: 'Conditions',
      summary:
        'Les itineraires publies servent de reference de preparation. Les services confirmes, prix, inclusions, exclusions et conditions d annulation sont definis dans le devis final ou le contrat de service.',
      sections: [
        {
          title: 'Perimetre du devis',
          items: [
            'Les prix peuvent varier selon date, disponibilite hotel, transport, langue du guide et taille du groupe.',
            'Les inclusions et exclusions finales sont confirmees avant paiement.',
            'Les activites optionnelles et upgrades sont factures selon le plan final.'
          ]
        },
        {
          title: 'Responsabilite voyageur',
          items: [
            'Les voyageurs sont responsables des passeports, visas, assurances et documents personnels valides.',
            'Les routes peuvent etre ajustees pour meteo, fermetures, operations transport ou securite.',
            'Les regles fournisseurs s appliquent aux hotels, transports, sites et services tiers.'
          ]
        }
      ]
    }
  },
  es: {
    beforeYouGo: {
      title: 'Servicio de reservas para viajar a China',
      eyebrow: 'Servicio de reservas',
      summary: 'Podemos ayudar a visitantes con vuelos, hoteles, trenes, alquiler de coche, guias, entradas y tarjetas SIM para China.',
      sections: [
        { title: 'Que podemos reservar', items: ['Vuelos segun ruta, fechas y presupuesto.', 'Hoteles por ciudad, habitaciones, nivel de comodidad y ubicacion preferida.', 'Trenes en China, alquiler de coche, vehiculo privado o transporte para grupos.', 'Guias profesionales, entradas a atracciones y tarjetas SIM para China.'] },
        { title: 'Datos utiles para enviar', items: ['Fechas, llegada, salida, numero de viajeros y ritmo preferido.', 'Nombres y numeros de pasaporte para servicios con registro real.', 'Nivel de hotel, habitaciones, idioma del guia, vehiculo y equipaje.', 'Comidas, movilidad, dias de tarjeta SIM y atracciones imprescindibles.'] }
      ]
    },
    contact: {
      title: 'Hablar con un especialista en China',
      eyebrow: 'Contacto',
      summary:
        'Envie ciudad de llegada, fechas, tamano del grupo, nivel de hotel, idioma del guia y ciudades obligatorias. El equipo prepara ruta y cotizacion segun disponibilidad.',
      email: 'support@tengxuan.com',
      ctaLabel: 'Preparar email',
      copyLabel: 'El borrador incluye una solicitud de cotizacion estructurada para completar solo los datos faltantes.',
      responseLabel: 'Equipo de planificacion',
      responseText: 'Coordinacion de ruta, hotel, vehiculo, guia y entradas para viajes privados en China.',
      servicesTitle: 'Que podemos cotizar',
      checklistTitle: 'Datos recomendados',
      templateSubject: 'Solicitud de cotizacion de viaje a China',
      templateBody:
        'Hola equipo de Tengxuan Travel,\n\nQuisiera solicitar una cotizacion para un viaje a China.\n\nFechas de viaje:\nCiudad de llegada:\nCiudad de salida:\nNumero de viajeros:\nNecesidades de habitaciones:\nNivel de hotel preferido:\nIdioma del guia:\nCiudades o atracciones a incluir:\nRango de presupuesto:\nNacionalidad / notas de visa:\nNecesidades alimentarias o movilidad:\nAgencia o empresa:\n\nPor favor compartan una ruta sugerida, alcance del servicio y cotizacion.\n\nGracias.',
      items: [
        "Cotizaciones: Pekin, Xi'an, Shanghai, Chengdu, Guilin, Zhangjiajie y rutas a medida.",
        'Solicitudes de negocio: reuniones, interpretes, vehiculos, hoteles y soporte de factura.',
        'Datos recomendados: fechas, viajeros, habitaciones, presupuesto, nacionalidad y dieta.'
      ],
      services: ['Rutas privadas por ciudad e itinerarios multi-ciudad en China.', 'Hoteles, vehiculos, guias, entradas, interpretes y soporte para reuniones.', 'Cotizaciones de grupos para agencias y productos personalizados.'],
      checklist: ['Ventana de viaje, llegada, salida y lugares imprescindibles.', 'Viajeros, habitaciones, hotel, idioma del guia y ritmo.', 'Presupuesto, nacionalidad, dieta, movilidad y factura.']
    },
    customTrip: {
      title: 'Disene facilmente su viaje privado a China',
      eyebrow: 'Viaje a medida',
      summary:
        'Comparta su email, ciudad de llegada, ciudad de salida, fechas de viaje y ritmo preferido. Con esa informacion preparamos una ruta privada con hoteles, vehiculos, guias, entradas, trenes y notas practicas de entrada a China.',
      email: 'support@tengxuan.com',
      formTitle: 'Enviar idea de viaje',
      emailLabel: 'Direccion de email',
      emailPlaceholder: 'name@example.com',
      travelWindowLabel: 'Fechas de viaje',
      travelWindowPlaceholder: 'Octubre de 2026, 8-10 dias',
      travelersLabel: 'Viajeros (incluya edades de ninos)',
      travelersPlaceholder: '2 adultos, 1 nino (6 anos)',
      arrivalLabel: 'Ciudad o aeropuerto de llegada',
      arrivalPlaceholder: 'Pekin PEK / Shanghai PVG',
      departureLabel: 'Ciudad o aeropuerto de salida',
      departurePlaceholder: 'Hong Kong / Shanghai',
      interestsLabel: 'Ciudades, visitas e intereses',
      interestsPlaceholder: 'Gran Muralla, pandas, comida, jardines, caminatas suaves...',
      paceLabel: 'Ritmo preferido',
      pacePlaceholder: 'Relajado, equilibrado, compacto',
      hotelLabel: 'Nivel de hotel',
      hotelPlaceholder: 'Boutique, 4 estrellas, 5 estrellas, habitaciones familiares',
      notesLabel: 'Comida, movilidad, visa o necesidades de negocio',
      notesPlaceholder: 'Vegetariano, silla de ruedas, interprete, factura...',
      submitLabel: 'Ayudenme a disenar mi viaje',
      successTitle: 'Borrador de email listo.',
      successText: 'Su aplicacion de correo se abre con la solicitud. Puede editar antes de enviar.',
      responseLabel: 'Planificacion China',
      responseText: 'Comparta primero los datos clave del viaje; despues ajustamos la ruta con usted.',
      proofTitle: 'Que confirmamos primero',
      benefitsTitle: 'Pensado para viajeros internacionales',
      ideasTitle: 'Puntos de partida frecuentes',
      templateSubject: 'Solicitud de viaje privado a China',
      templateBody:
        'Hola equipo de Tengxuan Travel,\n\nquisiera preparar un viaje privado a China.\n\nEmail: {email}\nFechas de viaje: {travelWindow}\nNumero de viajeros y edades de ninos: {travelers}\nCiudad / aeropuerto de llegada: {arrival}\nCiudad / aeropuerto de salida: {departure}\nCiudades, visitas o intereses: {interests}\nRitmo preferido: {pace}\nNivel de hotel: {hotelLevel}\nOtras notas: {notes}\n\nPor favor envienme una propuesta de itinerario, alcance de servicios y una primera referencia de precio.\n\nGracias.',
      proofPoints: ['Empezar por email y completar detalles despues', 'Llegada y salida ayudan a construir una ruta coherente', 'Ritmo, comidas, movilidad y visa se consideran desde el inicio'],
      benefits: [
        { title: 'Inicio sencillo por email', text: 'Puede iniciar la solicitud sin telefono local y agregar luego vuelos, hoteles y datos de viajeros.' },
        { title: 'Ruta antes del precio', text: 'Antes de cotizar aclaramos ciudades, duracion, nivel de hotel, idioma del guia e intereses.' },
        { title: 'Privado, no grupo mixto', text: 'La ruta puede adaptarse a parejas, familias, grupos de agencia, viajeros de negocio y personas mayores.' },
        { title: 'Detalles coordinados juntos', text: 'Hoteles, vehiculos, guias, entradas, trenes, interpretes, reuniones y facturacion se pueden planificar juntos.' }
      ],
      ideas: [
        { title: 'Primer viaje a China', text: "Pekin, Xi'an, Shanghai y una ciudad mas tranquila como Hangzhou, Chengdu o Guilin." },
        { title: 'Ritmo familiar', text: 'Salidas mas tarde, menos cambios de hotel, guia adaptado a ninos, comidas comodas y buen apoyo de vehiculo.' },
        { title: 'Negocio mas ocio', text: 'Reuniones, interpretes, traslados, factura y extensiones culturales breves.' }
      ]
    },
    faq: {
      title: 'Preguntas comunes de planificacion',
      eyebrow: 'FAQ',
      summary: 'Respuestas operativas para rutas privadas en China, cotizaciones de grupos y viajes a medida.',
      sections: [
        { title: 'Los precios son finales?', body: 'Los precios publicados son orientativos. La cotizacion final depende de fecha, hotel, transporte, idioma del guia y grupo.' },
        { title: 'Se pueden personalizar las rutas?', body: 'Si. Los productos se ajustan por llegada, salida, hotel, ritmo, dieta e intereses.' },
        { title: 'Incluyen paradas de compras?', body: 'Los productos privados cotizados se centran en visitas y servicio. Las compras no subsidian el precio.' },
        { title: 'Que deben enviar las agencias?', body: 'Enviar mercado, tamano de grupo, ventana de viaje, precio objetivo, hotel, idioma del guia e inclusiones.' }
      ]
    },
    visaEntry: {
      title: 'Lista de planificacion de entrada',
      eyebrow: 'Visa y entrada',
      summary: 'Las reglas de visa y entrada pueden cambiar por nacionalidad, ruta y fecha. Confirme fuentes oficiales antes de servicios no reembolsables.',
      sections: [
        { title: 'Antes de confirmar cotizacion', items: ['Nacionalidad y vigencia del pasaporte.', 'Ciudades de llegada y salida.', 'Ciudades de transito y ruta de vuelo.', 'Requisitos de hotel o carta de invitacion si aplica.'] },
        { title: 'Documentos a preparar', items: ['Datos del pasaporte exactamente como aparecen.', 'Fechas finales y datos de hotel.', 'Contacto de emergencia y asistencia especial.', 'Copias requeridas para trenes, vuelos o atracciones.'] }
      ]
    },
    terms: {
      title: 'Terminos de uso',
      eyebrow: 'Terminos',
      summary:
        'Las rutas publicadas son referencias de planificacion. Los servicios confirmados, precios, inclusiones, exclusiones y reglas de cancelacion se definen en la cotizacion final o contrato de servicio.',
      sections: [
        {
          title: 'Alcance de cotizacion',
          items: [
            'Los precios pueden variar por fecha, disponibilidad de hotel, transporte, idioma del guia y tamano del grupo.',
            'Las inclusiones y exclusiones finales se confirman antes del pago.',
            'Las actividades opcionales y upgrades se cobran segun el plan final.'
          ]
        },
        {
          title: 'Responsabilidad de viaje',
          items: [
            'Los viajeros son responsables de pasaportes, visas, seguros y documentos personales validos.',
            'Las rutas pueden ajustarse por clima, cierres, operaciones de transporte o necesidades de seguridad.',
            'Las reglas de proveedores aplican a hoteles, transporte, atracciones y servicios de terceros.'
          ]
        }
      ]
    }
  },
  zh: {
    beforeYouGo: {
      title: '中国旅行代订服务',
      eyebrow: '代订服务',
      summary: '',
      heroServices: [
        {
          type: 'flight',
          title: '中国机票代订',
          label: '国内段与国际段票务支持',
          summary: '根据入境城市、离境城市、跨城顺序和预算，协助匹配航班、核对护照姓名并确认出票信息。',
          imageAlt: '上海浦东机场的中国航班真实照片'
        },
        {
          type: 'hotel',
          title: '中国酒店代订',
          label: '按城市、房型和预算匹配',
          summary: '支持酒店等级、分房名单、床型、家庭房、商务出行和团队入住等预订需求。',
          imageAlt: '北京酒店真实照片'
        },
        {
          type: 'guide',
          title: '各语种导游服务',
          label: '私家团与团队游均可协调',
          summary: '可按路线协调英语、德语、法语、西语等语种导游，适合家庭、商务和旅行社团队。',
          imageAlt: '中国导游为游客团队讲解的真实照片'
        },
        {
          type: 'rail',
          title: '中国高铁代订',
          label: '主要城市之间的高铁票',
          summary: '可按出发城市、到达城市、时间、席别和护照信息协助确认中国高铁/火车票。',
          imageAlt: '上海火车站中国高铁真实照片'
        },
        {
          type: 'ticket',
          title: '景点门票代订',
          label: '热门景区与实名制门票',
          summary: '协助确认博物馆、世界遗产、热门景区和亲子景点的实名制门票与入园时间。',
          imageAlt: '西安兵马俑景点真实照片'
        },
        {
          type: 'car',
          title: '租车用车代订',
          label: '接送机、商务车与团队车',
          summary: '支持机场接送、城市用车、商务用车、家庭 MPV 和多城市车辆衔接安排。',
          imageAlt: '中国商务用车真实照片'
        }
      ],
      floatingCard: {
        title: '需要代订中国旅行服务？',
        summary: '把日期、城市、人数和需要代订的项目发给我们，团队会按实际资源回复可选方案。',
        button: '邮件联系顾问',
        subject: '中国旅行代订服务咨询',
        body: '腾轩旅行团队您好：\n\n我想咨询中国旅行代订服务。\n\n出行日期：\n抵达城市：\n离境城市：\n出行人数：\n需要代订：中国机票 / 中国酒店 / 各语种导游 / 火车票 / 租车 / 景点门票 / 电话卡\n酒店等级：\n导游语种：\n其他说明：\n\n请协助回复可选方案和下一步确认方式。\n\n谢谢。',
        points: ['优先确认中国机票与酒店', '按路线匹配导游语种', '实名票务付款前先核对信息']
      },
      sections: [
        { title: '建议提前提供', items: ['出行日期、抵达/离境城市、人数、预算范围和希望保留的自由时间。', '护照姓名和护照号码，用于实名制机票、火车票、门票等服务。', '酒店等级、房型、床型、导游语言、用车人数和行李数量。', '饮食限制、行动便利需求、电话卡使用天数和必去景点。'] }
      ]
    },
    contact: {
      title: '联系中国旅行顾问',
      eyebrow: '联系我们',
      summary: '请发送抵达城市、旅行日期、团队人数、酒店等级、导游语言和必去城市。团队会基于当前资源返回线路方案和报价。',
      email: 'support@tengxuan.com',
      ctaLabel: '起草询价邮件',
      copyLabel: '点击后会打开你的邮件客户端，并预填一份结构化询价模板。',
      responseLabel: '规划团队',
      responseText: '可协调中国私家线路的行程、酒店、车辆、导游、门票和商务支持。',
      servicesTitle: '可支持的需求',
      checklistTitle: '建议写进邮件',
      templateSubject: '中国旅行线路与报价咨询',
      templateBody:
        '腾轩旅行团队您好：\n\n我想咨询一份中国旅行线路与报价。\n\n出行日期：\n抵达城市：\n离境城市：\n出行人数：\n分房需求：\n酒店等级：\n导游语言：\n希望包含的城市或景点：\n预算范围：\n国籍 / 签证说明：\n饮食或行动便利需求：\n旅行社或公司名称：\n\n请协助提供建议线路、服务范围和报价。\n\n谢谢。',
      items: ['产品报价：北京、西安、上海、成都、桂林、张家界及定制线路。', '商务需求：会议、翻译、车辆、酒店和发票支持。', '建议提供：日期、人数、分房、预算、国籍和饮食需求。'],
      services: ['中国城市私家线路与多城市连线行程。', '酒店、车辆、导游、门票、翻译、会议和发票支持。', '面向旅行社的团队报价和定制产品包装。'],
      checklist: ['出行窗口、抵达/离境城市、必去城市或景点。', '人数、分房、酒店等级、导游语言和旅行节奏。', '预算、国籍、饮食、行动便利和商务开票需求。']
    },
    customTrip: {
      title: '告诉我们你的想法，我们来定制中国行程',
      eyebrow: '定制行程',
      summary:
        '先留下你的邮箱、入境城市、离境城市、旅行时间和偏好节奏。我们会根据你的旅行目标，把酒店、车辆、导游、门票、火车和入境注意事项整理成一份可沟通、可报价的私家行程。',
      email: 'support@tengxuan.com',
      formTitle: '填写你的行程需求',
      emailLabel: '邮箱地址',
      emailPlaceholder: 'name@example.com',
      travelWindowLabel: '出行时间',
      travelWindowPlaceholder: '2026年10月，8-10天',
      travelersLabel: '出行人数（儿童需填写年龄）',
      travelersPlaceholder: '2位成人，1位儿童（6岁）',
      arrivalLabel: '抵达城市或机场',
      arrivalPlaceholder: '北京首都 / 上海浦东',
      departureLabel: '离境城市或机场',
      departurePlaceholder: '香港 / 上海',
      interestsLabel: '想去的城市、景点或兴趣',
      interestsPlaceholder: '长城、熊猫、美食、园林、轻徒步等',
      paceLabel: '偏好节奏',
      pacePlaceholder: '轻松、均衡、紧凑',
      hotelLabel: '酒店等级',
      hotelPlaceholder: '精品酒店、4星、5星、家庭房',
      notesLabel: '饮食、行动便利、签证或商务需求',
      notesPlaceholder: '素食、轮椅通行、翻译、发票等',
      submitLabel: '请帮我定制行程',
      successTitle: '邮件草稿已生成。',
      successText: '邮件客户端会带着表单内容打开，发送前仍可修改。',
      responseLabel: '入境游规划',
      responseText: '把你已经确定的信息先发给我们，其余细节可以在邮件里继续确认。',
      proofTitle: '我们会优先核对',
      benefitsTitle: '你的中国行程可以这样开始',
      ideasTitle: '常见定制方向',
      templateSubject: '中国入境定制行程咨询',
      templateBody:
        '腾轩旅行团队，你好：\n\n我想咨询一份中国入境私家行程。\n\n邮箱：{email}\n出行时间：{travelWindow}\n出行人数及儿童年龄：{travelers}\n抵达城市或机场：{arrival}\n离境城市或机场：{departure}\n想去的城市、景点或兴趣：{interests}\n偏好节奏：{pace}\n酒店等级：{hotelLevel}\n其他说明：{notes}\n\n请根据以上信息，帮我整理一份行程建议、服务范围和初步报价范围。\n\n谢谢。',
      proofPoints: ['留下邮箱即可开始，后续细节可以慢慢补充', '告诉我们抵达和离境城市，路线会更顺', '把节奏、饮食、行动便利和签证情况提前说明'],
      benefits: [
        { title: '先从邮箱沟通', text: '不需要一开始就提供中国手机号。你可以先说明需求，再补充航班、酒店和证件信息。' },
        { title: '先理路线再报价', text: '我们会先确认入境城市、离境城市、天数、酒店等级、导游语言和兴趣重点。' },
        { title: '私家行程，不拼团', text: '可按情侣、家庭、旅行社团队、商务客人和长者节奏调整，不套固定大团行程。' },
        { title: '服务细节一起安排', text: '酒店、车辆、导游、门票、火车、翻译、会议支持和开票需求可以统一规划。' }
      ],
      ideas: [
        { title: '首次来中国', text: '北京、西安、上海，再搭配杭州、成都或桂林等节奏更舒缓的城市。' },
        { title: '亲子家庭', text: '晚一点出发、少换酒店、导游节奏更轻、餐食更稳、车辆接驳更充分。' },
        { title: '商务加旅行', text: '会议、翻译、接送机、发票支持和短线文化体验组合安排。' }
      ]
    },
    faq: {
      title: '常见规划问题',
      eyebrow: '常见问题',
      summary: '面向中国私家线路、团队报价和定制旅行请求的操作性说明。',
      sections: [
        { title: '页面价格是最终价格吗？', body: '页面价格为参考价。最终报价取决于日期、酒店等级、交通资源、导游语言和团队人数。' },
        { title: '线路可以定制吗？', body: '可以。可按抵达城市、离境城市、酒店标准、旅行节奏、饮食需求和特殊兴趣调整。' },
        { title: '行程包含购物店吗？', body: '报价私家产品围绕观光和服务交付设计，不通过购物店补贴价格。' },
        { title: '旅行社应提供哪些信息？', body: '请提供客源市场、预计人数、出行窗口、目标价格、酒店等级、导游语言和必含项目。' }
      ]
    },
    visaEntry: {
      title: '入境规划清单',
      eyebrow: '签证与入境',
      summary: '签证和入境规则可能因国籍、线路和日期变化。预订不可退服务前，请以官方信息为准。',
      sections: [
        { title: '确认报价前', items: ['旅客国籍和护照有效期。', '抵达和离境城市。', '中转城市和航班路径。', '如适用，酒店和邀请函要求。'] },
        { title: '需要准备的文件', items: ['与护照完全一致的护照信息。', '最终旅行日期和酒店信息。', '紧急联系人和特殊协助需求。', '铁路、航班或景点预订系统要求的证件副本。'] }
      ]
    },
    terms: {
      title: '使用条款',
      eyebrow: '条款',
      summary: '网站发布的线路用于规划参考。已确认服务、价格、包含、不含和取消规则，以最终报价或服务协议为准。',
      sections: [
        {
          title: '报价范围',
          items: [
            '价格可能因日期、酒店库存、交通资源、导游语言和团队人数变化。',
            '最终包含和不含项目会在付款前确认。',
            '可选活动和升级项目按最终线路方案计费。'
          ]
        },
        {
          title: '旅行责任',
          items: [
            '旅客需自行负责有效护照、签证、保险和个人证件。',
            '线路可能因天气、场馆关闭、交通运营或安全需要调整。',
            '酒店、交通、景点和第三方服务适用相应供应商规则。'
          ]
        }
      ]
    }
  }
} satisfies Partial<Record<Locale, MessageTree>>

for (const code of Object.keys(extraPageMessages) as Array<keyof typeof extraPageMessages>) {
  const englishPages = (messages.en as MessageTree).pages as Record<string, unknown>
  ;(messages[code] as MessageTree).pages = { ...englishPages, ...extraPageMessages[code] } as MessageTree
}

const cityTranslations: Partial<Record<Locale, Record<string, Partial<City>>>> = {
  zh: {
    beijing: {
      name: '北京',
      region: '华北',
      summary: '帝都历史、胡同、故宫和长城一日游。',
      duration: '3-5天',
      alt: '北京故宫宫殿建筑群',
      signature: '北京适合作为首次访华的第一站：皇家中轴线、胡同生活、世界遗产和高铁衔接都非常清晰。',
      story: [
        '北京是理解中国古都气质最直接的城市。它不像单一景点集合，而是一座由中轴线、宫殿、城门、坛庙、胡同和城外山脉共同构成的历史空间。以天安门、故宫、景山、钟鼓楼为线索，可以看到皇家礼制如何决定城市方向；再进入胡同和四合院，又能看到普通居民、街巷商业、传统院落和现代生活并存的一面。',
        '故宫是北京行程的核心，但不适合只当作拍照点处理。午门、太和殿、中和殿、保和殿、乾清宫和御花园串联起明清皇城的政治秩序与生活细节。天坛则提供另一种角度：这里不是宫殿，而是祭天礼仪空间，清晨进入还能看到本地人锻炼、唱歌、下棋，让宏大的坛庙建筑和日常公园生活自然同框。',
        '北京的慢节奏最好放在胡同和颐和园。胡同适合安排半天步行，结合四合院、老字号、小吃、茶馆或家庭访问，帮助海外游客从皇家叙事切换到城市生活。颐和园则以昆明湖、万寿山、长廊、佛香阁和十七孔桥呈现皇家园林的湖山格局，适合在密集参观之后放慢节奏。',
        '长城通常安排为独立一日或大半日，不建议塞进抵达当天。慕田峪、居庸关、八达岭或司马台的体验差异很大，需要按客人年龄、体力、拍照需求和季节选择。北京热门景点普遍需要实名预约，故宫、国家博物馆、热门展览和长城车辆接驳都应提前确认；对入境私家团来说，护照信息、门票窗口、导游讲解和用餐动线决定了北京停留是否顺畅。'
      ],
      bestFor: ['首次访华', '世界遗产', '皇家历史'],
      highlights: ['故宫', '天坛', '胡同漫步', '颐和园', '慕田峪或居庸关长城'],
      itinerary: [
        '第1天：天安门区域、故宫、景山视角和老城晚餐。',
        '第2天：天坛清晨、胡同漫步、茶馆或小吃体验。',
        '第3天：长城一日游，按体力选择徒步、缆车或轻松观景。',
        '第4天：颐和园、博物馆或奥林匹克公园，作为节奏缓冲。'
      ],
      travelNote: '故宫、热门博物馆和部分长城线路需要提前预约；入园常要核验护照，行前资料要尽早确认。',
      season: '春秋最舒适；冬季人少但天气寒冷，夏季需避开正午高温。',
      connections: '北京可用高铁衔接西安、上海、济南、天津，也有航班连接成都、桂林、张家界和新疆方向。'
    },
    shanghai: {
      name: '上海',
      region: '华东',
      summary: '海派街区、天际线、设计酒店和便捷高铁连接。',
      duration: '2-4天',
      story: [
        '上海的吸引力来自强烈对比：外滩保留历史建筑尺度，黄浦江对岸则是浦东现代天际线。',
        '老城厢、豫园、前租界街区、博物馆、咖啡馆和设计酒店，让上海成为国际游客抵达中国时最容易适应的城市之一。',
        '高铁网络让上海也适合作为华东基地，顺接苏州园林、杭州西湖和江南水乡。'
      ]
    },
    xian: {
      name: '西安',
      region: '西北',
      summary: '古都气质、城墙、回民街美食和兵马俑。',
      duration: '2-3天',
      story: [
        '西安承载多朝古都记忆，同时城市游览非常集中：城墙、钟鼓楼、博物馆、坊巷美食和大雁塔片区都便于串联。',
        '兵马俑是最关键的一天，它把秦始皇陵、秦帝国制度、陶俑工艺和中国统一王朝叙事连接起来。',
        '对首次访华游客来说，西安适合放在北京和上海之间，增加历史深度，又不明显打断经典高铁线路。'
      ],
      bestFor: ['古都文化', '坊巷美食', '经典高铁线路'],
      highlights: ['兵马俑', '西安城墙', '回民街', '大雁塔'],
      itinerary: [
        '第1天：西安城墙、钟楼片区和回民街美食步行。',
        '第2天：导游讲解兵马俑，下午搭配大雁塔或唐风夜游。',
        '第3天：补充汉阳陵、陕西历史博物馆，或继续高铁衔接。'
      ],
      travelNote: '兵马俑建议保留导游讲解和足够节奏，不要压缩成快速拍照点。',
      season: '春秋季天气和客流更平衡，适合安排城墙、临潼和夜游。',
      connections: '通常由北京高铁进入，并继续衔接上海、成都或洛阳等城市。'
    },
    luoyang: {
      name: '洛阳',
      region: '华中',
      summary: '古都历史、龙门石窟、少林寺和白马寺。',
      duration: '2-3天',
      alt: '洛阳龙门石窟佛教造像',
      signature: '洛阳适合放在西安、郑州之间，形成以佛教艺术、古都历史和河南遗产线路为核心的紧凑章节。',
      story: [
        '洛阳是中国重要古都之一，但对入境游客来说，最清晰的线路是龙门石窟、白马寺、老城背景和少林寺延伸，2到3天就能形成完整主题。',
        '龙门石窟是洛阳的核心景点。伊河两岸的洞窟、龛像和大型佛教造像，把北魏到唐代的皇家赞助、佛教艺术和石刻工艺集中呈现出来。',
        '白马寺补充佛教传入中国早期的寺院故事；少林寺则适合作为嵩山一日延伸，面向关注禅宗、武术文化和山地景观的客人。'
      ],
      bestFor: ['古都文化', '佛教艺术', '河南遗产线路'],
      highlights: ['龙门石窟', '少林寺', '白马寺', '洛阳老城'],
      itinerary: [
        '第1天：龙门石窟，配导游讲解造像脉络和伊河视角。',
        '第2天：白马寺、洛阳老城，以及博物馆或街区慢游。',
        '第3天：如时间允许，安排少林寺和嵩山区域一日延伸。'
      ],
      travelNote: '龙门石窟需要留足讲解和步行时间；少林寺不在洛阳市区，需给车程和参观节奏留缓冲。',
      season: '春秋最舒适；牡丹季有城市特色但客流也会更集中。',
      connections: '洛阳可通过高铁衔接西安、郑州、北京和华中更多遗产线路。'
    },
    chengdu: {
      name: '成都',
      region: '西南',
      summary: '熊猫、茶馆、川菜和松弛的城市节奏。',
      duration: '2-4天',
      highlights: ['熊猫基地', '都江堰', '九寨沟', '三星堆', '人民公园茶馆', '四川火锅'],
      itinerary: [
        '第1天：清晨参观熊猫基地，下午安排茶馆和公园慢游。',
        '第2天：老街区、川菜体验，可加入川剧或夜间美食。',
        '第3天：按节奏选择都江堰+青城山、三星堆、乐山大佛，或预留九寨沟延伸。'
      ],
      story: [
        '成都是进入西南中国的柔和入口：清晨看熊猫，下午进入公园、茶馆、老街和更松弛的本地节奏。',
        '川菜、火锅、小吃和辣度选择本身就是旅行内容，常常比单个景点更能让游客记住这座城市。',
        '成都也是乐山、都江堰、青城山、九寨沟、重庆以及更远西部线路的重要枢纽。'
      ]
    },
    guilin: {
      name: '桂林',
      region: '华南',
      summary: '喀斯特山水、漓江游船、骑行和乡村住宿。',
      duration: '2-4天',
      story: [
        '桂林更像一个山水区域，而不只是单个城市：喀斯特峰林、洞穴、河流、村落和桂林到阳朔的漓江段共同构成体验。',
        '阳朔通常更容易留下深刻记忆，游客可以通过乘船、骑行、短途步行和乡村住宿慢慢进入山水。',
        '如果加入龙脊梯田或更深入的乡村日，需要给天气、车程和季节景观留出缓冲。'
      ]
    },
    hangzhou: {
      name: '杭州',
      region: '华东',
      summary: '西湖、茶村、寺庙和上海周边轻松延伸。',
      duration: '1-3天',
      story: [
        '杭州围绕西湖展开，堤岸、岛屿、寺塔、园林和低山把城市参观变成一段段湖边步行。',
        '龙井茶村和灵隐寺为线路增加安静的文化层次，很适合放在上海之后作为更柔和的华东停留。',
        '杭州不适合只做匆忙中转，更适合留出一整天，减少车程，安排湖边、茶或寺庙的慢节奏体验。'
      ]
    },
    suzhou: {
      name: '苏州',
      region: '华东',
      summary: '古典园林、运河、丝绸文化和精致一日游。',
      duration: '1-2天',
      story: [
        '苏州古典园林把山石、池水、亭台、树木和借景浓缩在有限空间里，细看一座园林往往比赶三座更有价值。',
        '运河街巷和丝绸传统让苏州即使离上海很近，也呈现出完全不同的江南气质。',
        '私家游可以把苏州做成高质量一日游，也可以住一晚，留给夜晚运河和第二座园林更多余地。'
      ]
    },
    chongqing: {
      name: '重庆',
      region: '西南',
      summary: '山城街巷、火锅、长江游轮和立体夜景。',
      duration: '2-3天',
      alt: '江对岸视角下的重庆夜景天际线',
      signature: '重庆是一座层次丰富的山城，轨道交通、夜景、火锅、过江体验和长江游轮出发本身就构成旅行亮点。',
      story: [
        '重庆的地形就是城市故事：山坡、桥梁、江面、扶梯、轻轨和层层叠叠的街道，让日常移动本身像观景。',
        '夜景和火锅最容易让游客迅速进入状态，白天则可通过磁器口、博物馆、江边街区和老街补足城市背景。',
        '重庆也是长江游轮常见出发地，线路设计要提前考虑码头时间、行李移动和山城接驳。'
      ],
      bestFor: ['夜景', '火锅', '长江线路'],
      highlights: ['洪崖洞', '三峡', '李子坝轻轨', '磁器口古镇', '长江游轮码头'],
      itinerary: [
        '第1天：山城观景点、江边夜景和火锅。',
        '第2天：古镇漫步、城市交通景观，以及博物馆或洞穴延伸。',
        '第3天：开启长江游轮，或继续前往成都/张家界。'
      ],
      travelNote: '地图上的距离看起来很近，实际常有坡道和高差；需要仔细安排接驳并预留缓冲时间。',
      season: '春秋季最舒适；夏季可能非常炎热。',
      connections: '高铁紧密连接重庆与成都，也可继续飞往张家界和华东城市。'
    },
    zhangjiajie: {
      name: '张家界',
      region: '华中',
      summary: '砂岩峰林、玻璃桥、索道和高冲击自然景观。',
      duration: '2-3天',
      story: [
        '张家界武陵源以密集砂岩峰柱、峡谷、森林和随云雾变化的视角闻名，天气和光线会明显改变观感。',
        '这里的体验高度依赖索道、电梯、景区车、步道和排队节奏，因此线路顺序比简单罗列景点更重要。',
        '摄影客或自然景观型游客最好预留机动半天，用来应对雾、雨和能见度变化。'
      ]
    },
    lhasa: {
      name: '拉萨',
      region: '西藏',
      summary: '布达拉宫、大昭寺、藏地文化、高海拔节奏和寺院参观。',
      duration: '3-5天',
      story: [
        '拉萨首先要按海拔来规划：抵达恢复、轻量步行、供氧条件和许可时间，都是线路设计的一部分。',
        '布达拉宫、大昭寺、八廓街和主要寺院，让游客集中理解藏传佛教建筑、朝圣生活和城市精神核心。',
        '由于准入、导游、证件和门票窗口要求较严格，拉萨通常需要比普通城市更早协调。'
      ]
    },
    dunhuang: {
      name: '敦煌',
      region: '西北',
      summary: '莫高窟、沙漠鸣沙山、月牙泉和丝路历史。',
      duration: '2-3天',
      story: [
        '敦煌把丝路文化和沙漠景观压缩在相对集中的区域：莫高窟是艺术史核心，鸣沙山和月牙泉提供强烈景观对比。',
        '莫高窟参观依赖预约、限流和讲解衔接，不适合安排在晚到后的匆忙半天。',
        '沙丘和夜市的傍晚节奏，让敦煌很适合作为西安、张掖等西北线路之间的缓冲站。'
      ]
    },
    'hong-kong': {
      name: '香港',
      region: '大湾区',
      summary: '海港天际线、高效交通、海岛徒步、点心和国际航班。',
      duration: '2-4天',
      story: [
        '香港适合作为华南线路的高效率收尾：维港、太平山、天星小轮、电车、市场、博物馆和点心都能压缩在紧凑天数里。',
        '城市高密度街区之外，离岛步道、海滩、大屿山和山脊绿道让香港有明显的自然反差。',
        '对入境中国线路而言，香港最适合结合航班、口岸、高铁、渡轮或国际离境安排，作为华南线路的灵活节点。'
      ],
      highlights: ['维多利亚港', '香港迪士尼', '太平山', '中环与上环', '大屿山或离岛步道']
    }
  },
  de: {
    beijing: { name: 'Peking', region: 'Nordchina', summary: 'Kaiserliche Geschichte, Hutongs, Verbotene Stadt und Ausfluege zur Grossen Mauer.', duration: '3-5 Tage' },
    shanghai: { name: 'Shanghai', region: 'Ostchina', summary: 'Art-Deco-Strassen, Skyline, Designhotels und schnelle Bahnverbindungen.', duration: '2-4 Tage' },
    xian: { name: "Xi'an", region: 'Nordwestchina', summary: 'Alte Hauptstadt, Stadtmauer, muslimisches Viertel und Terrakotta-Armee.', duration: '2-3 Tage' },
    luoyang: { name: 'Luoyang', region: 'Zentralchina', summary: 'Alte Hauptstadt, Longmen-Grotten, Shaolin-Tempel und White Horse Temple.', duration: '2-3 Tage' },
    chengdu: { name: 'Chengdu', region: 'Suedwestchina', summary: 'Pandas, Teehaeuser, scharfes Essen und entspannte Sichuan-Kultur.', duration: '2-4 Tage' },
    guilin: { name: 'Guilin', region: 'Suedchina', summary: 'Karstberge, Li-Fluss-Kreuzfahrten, Radrouten und Aufenthalte auf dem Land.', duration: '2-4 Tage' },
    hangzhou: { name: 'Hangzhou', region: 'Ostchina', summary: 'Westsee, Teedoerfer, Tempel und eine ruhige Erweiterung ab Shanghai.', duration: '1-3 Tage' },
    suzhou: { name: 'Suzhou', region: 'Ostchina', summary: 'Klassische Gaerten, Kanaele, Seidenkultur und feine Tagesausfluege ab Shanghai.', duration: '1-2 Tage' },
    chongqing: {
      name: 'Chongqing',
      region: 'Suedwestchina',
      summary: 'Bergstadt-Strassen, Hotpot, Jangtse-Kreuzfahrten und dramatische Nachtblicke.',
      duration: '2-3 Tage',
      alt: 'Chongqing-Skyline bei Nacht ueber dem Fluss',
      signature: 'Chongqing ist eine vielschichtige Bergstadt, in der Nahverkehr, Nachtblicke, Hotpot, Flussueberquerungen und Jangtse-Kreuzfahrtstarts selbst zu Reiseerlebnissen werden.',
      bestFor: ['Nachtblicke', 'Hotpot', 'Jangtse-Routen'],
      highlights: ['Hongya Cave', 'Drei Schluchten', 'Liziba-Monorail', 'Altstadt Ciqikou', 'Jangtse-Kreuzfahrtpier'],
      itinerary: [
        'Tag 1: Aussichtspunkte der Bergstadt, Abend am Fluss und Hotpot.',
        'Tag 2: Altstadtspaziergang, urbane Verkehrsmotive und Museum oder Hoehlen-Erweiterung.',
        'Tag 3: Start einer Jangtse-Kreuzfahrt oder Weiterreise nach Chengdu/Zhangjiajie.'
      ],
      travelNote: 'Entfernungen wirken auf der Karte kurz, sind aber durch Steigungen oft laenger; Transfers sorgfaeltig planen und Puffer lassen.',
      season: 'Fruehling und Herbst sind am einfachsten; der Sommer kann sehr heiss sein.',
      connections: 'Schnellzuege verbinden Chongqing eng mit Chengdu, mit Weiterfluegen nach Zhangjiajie und Ostchina.'
    },
    zhangjiajie: { name: 'Zhangjiajie', region: 'Zentralchina', summary: 'Sandsteinpfeiler, Glasbruecken, Seilbahnen und intensive Naturtage.', duration: '2-3 Tage' },
    'hong-kong': { name: 'Hongkong', region: 'Greater Bay Area', summary: 'Hafensilhouette, effizienter Nahverkehr, Inselwanderungen, Dim Sum und globale Fluege.', duration: '2-4 Tage' }
  },
  fr: {
    beijing: { name: 'Pekin', region: 'Chine du Nord', summary: 'Histoire imperiale, hutongs, Cite interdite et Grande Muraille.', duration: '3-5 jours' },
    shanghai: { name: 'Shanghai', region: 'Chine de l Est', summary: 'Rues art deco, vues de skyline, hotels design et trains rapides.', duration: '2-4 jours' },
    xian: { name: "Xi'an", region: 'Nord-ouest de la Chine', summary: 'Ancienne capitale, remparts, quartier musulman et armee de terre cuite.', duration: '2-3 jours' },
    luoyang: { name: 'Luoyang', region: 'Chine centrale', summary: 'Ancienne capitale, grottes de Longmen, temple Shaolin et temple du Cheval blanc.', duration: '2-3 jours' },
    chengdu: { name: 'Chengdu', region: 'Sud-ouest de la Chine', summary: 'Pandas, maisons de the, cuisine epicee et culture sichuanaise detendue.', duration: '2-4 jours' },
    guilin: { name: 'Guilin', region: 'Chine du Sud', summary: 'Pics karstiques, croisieres sur la riviere Li, velo et sejours campagne.', duration: '2-4 jours' },
    hangzhou: { name: 'Hangzhou', region: 'Chine de l Est', summary: 'Lac de l Ouest, villages de the, temples et extension douce depuis Shanghai.', duration: '1-3 jours' },
    suzhou: { name: 'Suzhou', region: 'Chine de l Est', summary: 'Jardins classiques, canaux, soie et excursion raffinee depuis Shanghai.', duration: '1-2 jours' },
    chongqing: {
      name: 'Chongqing',
      region: 'Sud-ouest de la Chine',
      summary: 'Rues de ville montagne, fondue hotpot, croisieres Yangtze et vues nocturnes.',
      duration: '2-3 jours',
      alt: 'Skyline de Chongqing de nuit vue depuis la riviere',
      signature: 'Chongqing est une ville montagne en strates, ou metro aerien, vues de nuit, hotpot, traversees de riviere et departs de croisieres Yangtze deviennent des temps forts.',
      bestFor: ['Vues nocturnes', 'Hotpot', 'Routes Yangtze'],
      highlights: ['Hongya Cave', 'Trois Gorges', 'Monorail Liziba', 'Vieille ville Ciqikou', 'Embarcadere des croisieres Yangtze'],
      itinerary: [
        'Jour 1: Points de vue de la ville montagne, soiree au bord du fleuve et hotpot.',
        'Jour 2: Balade vieille ville, scenes de transport urbain et musee ou extension grotte.',
        'Jour 3: Depart en croisiere Yangtze ou continuation vers Chengdu/Zhangjiajie.'
      ],
      travelNote: 'Les distances semblent courtes sur la carte mais les pentes comptent; planifier les transferts avec soin et garder du temps tampon.',
      season: 'Le printemps et l automne sont les plus faciles; l ete peut etre tres chaud.',
      connections: 'Le train rapide relie Chongqing a Chengdu, avec des vols vers Zhangjiajie et l est de la Chine.'
    },
    zhangjiajie: { name: 'Zhangjiajie', region: 'Chine centrale', summary: 'Piliers de gres, ponts de verre, telepheriques et nature spectaculaire.', duration: '2-3 jours' },
    'hong-kong': { name: 'Hong Kong', region: 'Greater Bay Area', summary: 'Skyline portuaire, transport efficace, randonnees, dim sum et vols mondiaux.', duration: '2-4 jours' }
  },
  es: {
    beijing: { name: 'Pekin', region: 'Norte de China', summary: 'Historia imperial, hutongs, Ciudad Prohibida y excursiones a la Gran Muralla.', duration: '3-5 dias' },
    shanghai: { name: 'Shanghai', region: 'Este de China', summary: 'Calles art deco, skyline, hoteles de diseno y trenes rapidos.', duration: '2-4 dias' },
    xian: { name: "Xi'an", region: 'Noroeste de China', summary: 'Antigua capital, murallas, barrio musulman y Guerreros de Terracota.', duration: '2-3 dias' },
    luoyang: { name: 'Luoyang', region: 'China central', summary: 'Antigua capital, grutas de Longmen, templo Shaolin y templo del Caballo Blanco.', duration: '2-3 dias' },
    chengdu: { name: 'Chengdu', region: 'Suroeste de China', summary: 'Pandas, casas de te, comida picante y cultura relajada de Sichuan.', duration: '2-4 dias' },
    guilin: { name: 'Guilin', region: 'Sur de China', summary: 'Picos karsticos, cruceros por el rio Li, rutas en bici y estancias rurales.', duration: '2-4 dias' },
    hangzhou: { name: 'Hangzhou', region: 'Este de China', summary: 'Lago del Oeste, aldeas de te, templos y extension tranquila desde Shanghai.', duration: '1-3 dias' },
    suzhou: { name: 'Suzhou', region: 'Este de China', summary: 'Jardines clasicos, canales, seda y excursion refinada desde Shanghai.', duration: '1-2 dias' },
    chongqing: {
      name: 'Chongqing',
      region: 'Suroeste de China',
      summary: 'Calles de ciudad montana, hotpot, cruceros Yangtze y vistas nocturnas.',
      duration: '2-3 dias',
      alt: 'Skyline nocturno de Chongqing visto desde el rio',
      signature: 'Chongqing es una ciudad montana por capas, donde el transporte, las vistas nocturnas, el hotpot, los cruces de rio y las salidas de cruceros Yangtze son parte central del viaje.',
      bestFor: ['Vistas nocturnas', 'Hotpot', 'Rutas Yangtze'],
      highlights: ['Hongya Cave', 'Tres Gargantas', 'Monorriel Liziba', 'Casco antiguo Ciqikou', 'Muelle de cruceros Yangtze'],
      itinerary: [
        'Dia 1: Miradores de ciudad montana, noche junto al rio y hotpot.',
        'Dia 2: Paseo por casco antiguo, escenas de transporte urbano y museo o extension de cuevas.',
        'Dia 3: Iniciar un crucero Yangtze o continuar a Chengdu/Zhangjiajie.'
      ],
      travelNote: 'Las distancias parecen cortas en el mapa, pero las pendientes pesan; conviene planificar traslados y dejar margen.',
      season: 'Primavera y otono son mas faciles; el verano puede ser muy caluroso.',
      connections: 'El tren rapido une Chongqing con Chengdu, y hay vuelos hacia Zhangjiajie y el este de China.'
    },
    zhangjiajie: { name: 'Zhangjiajie', region: 'China central', summary: 'Pilares de arenisca, puentes de cristal, telefericos y naturaleza intensa.', duration: '2-3 dias' },
    'hong-kong': { name: 'Hong Kong', region: 'Gran Area de la Bahia', summary: 'Skyline del puerto, transporte eficiente, senderos insulares, dim sum y vuelos globales.', duration: '2-4 dias' }
  }
}

const tripTranslations: Partial<Record<Locale, Record<string, Partial<Trip>>>> = {
  zh: {
    'tx-beijing-mutianyu-4-day': { name: '北京慕田峪长城4日游', summary: '抵达北京、皇城核心、慕田峪长城、天坛、胡同和离京送站。', meta: '4天 · TXBJ0402' },
    'tx-jinshanling-hiking-1-day': { name: '金山岭长城徒步1日游', summary: '北京酒店接送、金山岭长城导游徒步和陆路往返的一日产品。', meta: '1天 · TXBJ0102' },
    'tx-beijing-visa-free-3-day': { name: '72小时北京精华游', summary: '围绕过境停留安排北京抵达、皇城核心、长城和离京衔接。', meta: '3天 · TXBJ0301' },
    'tx-beijing-juyongguan-4-day': { name: '北京居庸关长城4日游', summary: '天安门、故宫、颐和园、天坛、居庸关长城、胡同和离京。', meta: '4天 · TXBJ0401' },
    'tx-best-of-china-11-day': { name: '11天中国精华游', summary: '北京、西安、桂林/阳朔和上海的经典中国高识别度线路。', meta: '11天 · TXGBC11' },
    'tx-guilin-yangshuo-highlights-3-day': { name: '3天桂林阳朔精华游', summary: '桂林抵达、漓江山水、阳朔乡村和轻量城市收尾。', meta: '3天 · TXKW0301' },
    'tx-guilin-yangshuo-longji-4-day': { name: '4天桂林阳朔龙脊梯田游', summary: '在桂林漓江与阳朔乡村之外，加入龙脊梯田山地景观。', meta: '4天 · TXKW0401' },
    'beijing-xian-shanghai': { name: '北京-西安-上海', summary: '8天经典遗产线路，覆盖北京、西安高铁和上海城市游览。', meta: '8天 · USD 892起' },
    'classic-first-time-china': { name: '首次访华经典线路', summary: '北京、西安、桂林和上海，配私家导游和交通规划。', meta: '10天 · USD 2,380起' },
    'splendid-china-9-day': { name: '9天锦绣中国', summary: '北京、西安、苏州、杭州和上海的紧凑经典多城市线路。', meta: '9天 · 定制报价' },
    'best-of-china-11-day': { name: '11天中国精华', summary: '北京、西安、桂林/阳朔和上海，兼顾遗产与山水节奏。', meta: '11天 · 定制报价' },
    'beijing-chengde-imperial': { name: '北京+承德皇家遗产7日', summary: '北京故宫、长城、胡同和承德避暑山庄、外八庙。', meta: '7天 · USD 1,090参考起' },
    'beijing-xian-heritage': { name: '北京+西安遗产之旅', summary: '长城、故宫、胡同、高铁和兵马俑。', meta: '6天 · USD 1,420起' },
    'shanghai-discovery': { name: '上海城市短线', summary: '建筑漫步、美食游、博物馆和苏杭周边延伸。', meta: '5天 · CNY 3,299起' },
    'chengdu-chongqing-zhangjiajie': { name: '成都熊猫与美食之旅', summary: '熊猫基地、茶馆文化、火锅、乐山大佛和轻松节奏。', meta: '10天 · CNY 4,780起' },
    'guilin-yangshuo-landscape': { name: '桂林山水度假', summary: '漓江游船、阳朔乡村、轻松骑行和精品住宿。', meta: '5天 · USD 1,280起' },
    'beijing-zhangjiajie-shanghai': { name: '张家界自然探险', summary: '国家森林公园、玻璃桥、索道和景区交通规划。', meta: '9天 · USD 2,370起' },
    'business-leisure-custom': { name: '商务+休闲定制行程', summary: '会议、翻译、城市交通、短时文化体验和发票支持。', meta: '灵活 · 定制报价' },
    'private-family-china': { name: '私家亲子中国游', summary: '亲子友好导游、合适酒店位置、慢节奏和餐食支持。', meta: '8-12天 · 定制报价' }
  },
  de: {
    'beijing-xian-shanghai': { name: "Peking-Xi'an-Shanghai", summary: "8-taegige Kulturerberoute mit Peking, Bahn nach Xi'an und Shanghai-Stadtbesuchen.", meta: '8 Tage · ab USD 892' },
    'classic-first-time-china': { name: 'Klassische erste China-Reise', summary: "Peking, Xi'an, Guilin und Shanghai mit privaten Guides und Bahn- oder Flugplanung.", meta: '10 Tage · ab USD 2.380' },
    'splendid-china-9-day': { name: '9 Tage Splendid China', summary: "Peking, Xi'an, Suzhou, Hangzhou und Shanghai als kompakte klassische Route.", meta: '9 Tage · individuelles Angebot' },
    'best-of-china-11-day': { name: '11 Tage Best of China', summary: "Peking, Xi'an, Guilin/Yangshuo und Shanghai mit ausgewogenem Kultur- und Landschaftstempo.", meta: '11 Tage · individuelles Angebot' },
    'beijing-chengde-imperial': { name: 'Peking + Chengde kaiserliches Erbe', summary: 'Verbotene Stadt, Grosse Mauer, Hutongs, Chengde Mountain Resort und Aeussere Tempel.', meta: '7 Tage · ab USD 1.090 Referenz' },
    'beijing-xian-heritage': { name: "Peking + Xi'an Kulturerbe", summary: 'Grosse Mauer, Verbotene Stadt, Hutongs, Schnellzug und Terrakotta-Armee.', meta: '6 Tage · ab USD 1.420' },
    'shanghai-discovery': { name: 'Shanghai City Break', summary: 'Architekturspaziergaenge, Food-Touren, Museen sowie Suzhou- oder Hangzhou-Ausfluege.', meta: '5 Tage · ab CNY 3.299' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu Panda & Food Tour', summary: 'Panda-Basis, Teehauskultur, Hotpot, Leshan-Buddha und entspanntes Tempo.', meta: '10 Tage · ab CNY 4.780' },
    'guilin-yangshuo-landscape': { name: 'Guilin Landschaftsauszeit', summary: 'Li-Fluss-Kreuzfahrt, Yangshuo-Land, leichte Radtouren und Boutique-Aufenthalte.', meta: '5 Tage · ab USD 1.280' },
    'beijing-zhangjiajie-shanghai': { name: 'Zhangjiajie Naturabenteuer', summary: 'Nationaler Waldpark, Glasbruecke, Seilbahnen und Transferplanung.', meta: '9 Tage · ab USD 2.370' },
    'business-leisure-custom': { name: 'Business + Leisure nach Mass', summary: 'Meetings, Dolmetscher, Stadttransfers, kurze Kulturmodule und Rechnungen.', meta: 'Flexibel · individuelles Angebot' },
    'private-family-china': { name: 'Private Familienreise China', summary: 'Kinderfreundliche Guides, sinnvolle Hotels, langsamere Tage und Essenshilfe.', meta: '8-12 Tage · individuelles Angebot' }
  },
  fr: {
    'beijing-xian-shanghai': { name: "Pekin-Xi'an-Shanghai", summary: "Route patrimoine de 8 jours avec Pekin, train rapide vers Xi'an et visites de Shanghai.", meta: '8 jours · des USD 892' },
    'classic-first-time-china': { name: 'Circuit Chine classique premiere fois', summary: "Pekin, Xi'an, Guilin et Shanghai avec guides prives et organisation train/vol.", meta: '10 jours · des USD 2 380' },
    'splendid-china-9-day': { name: '9 jours Splendid China', summary: "Pekin, Xi'an, Suzhou, Hangzhou et Shanghai en route classique compacte.", meta: '9 jours · devis sur mesure' },
    'best-of-china-11-day': { name: '11 jours Best of China', summary: "Pekin, Xi'an, Guilin/Yangshuo et Shanghai avec rythme patrimoine et paysages.", meta: '11 jours · devis sur mesure' },
    'beijing-chengde-imperial': { name: 'Pekin + Chengde patrimoine imperial', summary: 'Cite interdite, Grande Muraille, hutongs, Mountain Resort de Chengde et temples exterieurs.', meta: '7 jours · des USD 1 090 reference' },
    'beijing-xian-heritage': { name: "Patrimoine Pekin + Xi'an", summary: 'Grande Muraille, Cite interdite, hutongs, train rapide et armee de terre cuite.', meta: '6 jours · des USD 1 420' },
    'shanghai-discovery': { name: 'Echappee urbaine Shanghai', summary: 'Balades architecture, food tours, musees et extensions Suzhou ou Hangzhou.', meta: '5 jours · des CNY 3 299' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu pandas et cuisine', summary: 'Base des pandas, maisons de the, hotpot, Bouddha de Leshan et rythme detendu.', meta: '10 jours · des CNY 4 780' },
    'guilin-yangshuo-landscape': { name: 'Echappee paysages de Guilin', summary: 'Croisiere Li, campagne de Yangshuo, velo facile et sejours boutique.', meta: '5 jours · des USD 1 280' },
    'beijing-zhangjiajie-shanghai': { name: 'Aventure nature Zhangjiajie', summary: 'Parc forestier, pont de verre, telepheriques et organisation des transferts.', meta: '9 jours · des USD 2 370' },
    'business-leisure-custom': { name: 'Business + loisirs sur mesure', summary: 'Reunions, interpretes, transferts urbains, courts modules culturels et factures.', meta: 'Flexible · devis sur mesure' },
    'private-family-china': { name: 'Voyage prive famille en Chine', summary: 'Guides enfants, hotels pratiques, journees plus lentes et aide repas.', meta: '8-12 jours · devis sur mesure' }
  },
  es: {
    'beijing-xian-shanghai': { name: "Pekin-Xi'an-Shanghai", summary: "Ruta patrimonial de 8 dias con Pekin, tren rapido a Xi'an y visitas de Shanghai.", meta: '8 dias · desde USD 892' },
    'classic-first-time-china': { name: 'Tour clasico primera vez en China', summary: "Pekin, Xi'an, Guilin y Shanghai con guias privados y plan de tren o vuelo.", meta: '10 dias · desde USD 2,380' },
    'splendid-china-9-day': { name: '9 dias Splendid China', summary: "Pekin, Xi'an, Suzhou, Hangzhou y Shanghai en una ruta clasica compacta.", meta: '9 dias · cotizacion a medida' },
    'best-of-china-11-day': { name: '11 dias Best of China', summary: "Pekin, Xi'an, Guilin/Yangshuo y Shanghai con ritmo equilibrado de patrimonio y paisaje.", meta: '11 dias · cotizacion a medida' },
    'beijing-chengde-imperial': { name: 'Pekin + Chengde patrimonio imperial', summary: 'Ciudad Prohibida, Gran Muralla, hutongs, Mountain Resort de Chengde y templos exteriores.', meta: '7 dias · desde USD 1,090 referencia' },
    'beijing-xian-heritage': { name: "Patrimonio Pekin + Xi'an", summary: 'Gran Muralla, Ciudad Prohibida, hutongs, tren rapido y Guerreros de Terracota.', meta: '6 dias · desde USD 1,420' },
    'shanghai-discovery': { name: 'Escapada urbana Shanghai', summary: 'Paseos de arquitectura, tours gastronomicos, museos y excursiones a Suzhou o Hangzhou.', meta: '5 dias · desde CNY 3,299' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu pandas y comida', summary: 'Base de pandas, cultura de te, hotpot, Buda de Leshan y ritmo relajado.', meta: '10 dias · desde CNY 4,780' },
    'guilin-yangshuo-landscape': { name: 'Escapada paisajistica Guilin', summary: 'Crucero por el Li, campo de Yangshuo, bici facil y alojamientos boutique.', meta: '5 dias · desde USD 1,280' },
    'beijing-zhangjiajie-shanghai': { name: 'Aventura natural Zhangjiajie', summary: 'Parque forestal, puente de cristal, telefericos y planificacion de traslados.', meta: '9 dias · desde USD 2,370' },
    'business-leisure-custom': { name: 'Negocios + ocio a medida', summary: 'Reuniones, interpretes, traslados urbanos, modulos culturales cortos y facturas.', meta: 'Flexible · cotizacion a medida' },
    'private-family-china': { name: 'Tour privado familiar China', summary: 'Guias para ninos, hoteles practicos, dias mas lentos y apoyo de comida.', meta: '8-12 dias · cotizacion a medida' }
  }
}

const productTranslations: Partial<Record<Locale, Record<string, Partial<TourProduct>>>> = {
  zh: {
    'tx-beijing-mutianyu-4-day': {
      name: '北京慕田峪长城4日游',
      eyebrow: 'TXBJ0402 · 4天北京城市包价产品',
      duration: '4天 / 3晚',
      route: '北京',
      summary: '对标 ChinaTour 慕田峪北京4日城市包价结构，包含抵达接送、皇城核心、慕田峪长城、天坛、胡同和离京送站。',
      galleryTitle: '慕田峪长城、皇城北京、天坛礼制空间和老城胡同。',
      sourceNote: '线路结构参考 ChinaTour INBJ0402；产品编号、文案、最终报价和服务条款为腾轩自有版本。',
      highlights: [
        '按4天北京经典节奏组织：抵达、皇城核心、慕田峪长城、胡同和送站。',
        '长城段选用慕田峪，适合希望景观更完整、拍照效果更好的北京短停客人。',
        '把天安门、故宫、颐和园、天坛和胡同压缩进首次到访北京路线。',
        '可按 land-only 城市包价方式报价，最终酒店、餐食和门票以确认单为准。'
      ],
      days: [
        { day: '第 1 天', city: '北京', meals: '- / - / -', title: '抵达北京', summary: '机场或火车站接客，送往北京酒店。当天保留休息或轻松自由活动时间。', sights: ['抵达接送', '酒店入住', '自由活动'] },
        { day: '第 2 天', city: '北京', meals: 'B / L / D', title: '天安门、故宫与颐和园', summary: '游览天安门广场和故宫，下午前往颐和园。若报价包含，可安排北京烤鸭或同等级特色晚餐。', sights: ['天安门广场', '故宫', '颐和园', '北京烤鸭晚餐选项'], note: '天安门和故宫预约需提前提供护照信息。' },
        { day: '第 3 天', city: '北京', meals: 'B / L / -', title: '慕田峪长城与天坛', summary: '游览天坛后前往慕田峪长城。缆车、索道或滑道按最终报价作为可选项目确认。', sights: ['天坛', '慕田峪长城', '长城缆车选项'] },
        { day: '第 4 天', city: '北京', meals: 'B / - / -', title: '胡同与离京', summary: '以三轮车或步行方式游览北京胡同，随后送往机场或火车站。', sights: ['胡同三轮车或步行', '老北京街巷', '离京送站'] }
      ]
    },
    'tx-jinshanling-hiking-1-day': {
      name: '金山岭长城徒步1日游',
      eyebrow: 'TXBJ0102 · 1天长城徒步产品',
      duration: '8-10小时',
      route: '北京 · 金山岭长城 · 北京',
      summary: '对标 ChinaTour 金山岭长城一日徒步结构，包含酒店接送、陆路往返、导游陪同徒步和基础行程协调。',
      galleryTitle: '面向摄影和户外客人的高强度长城徒步日。',
      sourceNote: '线路结构参考 ChinaTour INBJ0102；产品编号已更换，文案为重写版本。',
      highlights: [
        '保留北京酒店接送、约2.5小时单程车程、金山岭徒步和返回酒店的一日结构。',
        '将金山岭定位为更具徒步强度和摄影价值的长城选择。',
        '午餐按徒步日处理，需根据报价确认简餐、路餐或客人自备食品。',
        '下单前需确认天气、鞋服、水、体力要求和接送酒店位置。'
      ],
      days: [
        { day: '一日游', city: '北京', meals: '- / - / -', title: '金山岭长城徒步', summary: '导游在北京酒店大堂接客，乘车前往金山岭长城。按团队体力进行长城徒步，结束后专车返回酒店。', sights: ['酒店接客', '金山岭长城', '导游陪同徒步', '返回酒店'], note: '该线路体力要求较高，需提前确认天气、鞋服、饮水、路餐和客人体能。' }
      ]
    },
    'tx-beijing-visa-free-3-day': {
      name: '72小时北京精华游',
      eyebrow: 'TXBJ0301 · 72小时北京过境停留产品',
      duration: '3天 / 2晚',
      route: '北京',
      summary: '面向符合条件的过境客人，围绕抵达接送、故宫和颐和园、长城一日和离京衔接设计短停北京产品。',
      galleryTitle: '在短暂停留窗口里优先覆盖北京最高识别度景点。',
      sourceNote: '线路结构参考 ChinaTour 72小时北京精华产品；文案、编号和报价条款为腾轩重写版本。',
      highlights: [
        '适合短暂停留北京的过境客人，机场时间和离境时间纳入行程设计。',
        '三天内优先安排皇城核心、颐和园、天坛和一个长城段。',
        '酒店、接送和门票预约需要紧密衔接，避免过境时间浪费。',
        '是否适用免签过境需按护照、航线、联程机票和最新政策确认。'
      ],
      days: [
        { day: '第 1 天', city: '北京', meals: '- / - / -', title: '抵达接送与轻量城市初识', summary: '机场或火车站接客，送往酒店。若抵达时间允许，可安排王府井、前门或酒店周边轻松步行。', sights: ['抵达接送', '酒店入住', '王府井或前门可选'] },
        { day: '第 2 天', city: '北京', meals: 'B / L / -', title: '天安门、故宫、颐和园', summary: '主要游览日安排天安门广场、故宫和颐和园，使用专车和导游提高短停效率。', sights: ['天安门广场', '故宫', '颐和园'], note: '报价前需核验过境材料、护照信息和当前入境规则。' },
        { day: '第 3 天', city: '北京', meals: 'B / L / -', title: '长城、天坛与离京', summary: '游览一个长城段和天坛，随后送往机场或火车站继续下一段行程。', sights: ['长城', '天坛', '离京送站'], note: '建议安排较晚离境航班或车次，以保证长城日和离境手续时间。' }
      ]
    },
    'tx-beijing-juyongguan-4-day': {
      name: '北京居庸关长城4日游',
      eyebrow: 'TXBJ0401 · 4天北京城市包价产品',
      duration: '4天 / 3晚',
      route: '北京',
      summary: '对标 ChinaTour 居庸关北京4日产品，包含抵达、天安门和故宫、颐和园、天坛、居庸关长城、胡同和离京。',
      galleryTitle: '居庸关长城、皇城北京、颐和园和胡同生活。',
      sourceNote: '线路结构参考 ChinaTour INBJ0401；产品编号、文案和最终报价条款为腾轩自有版本。',
      highlights: [
        '尽量贴合参考4日节奏：抵达、皇城北京、居庸关和天坛、胡同和离京。',
        '长城段选用居庸关，突出北京近郊经典关城长城体验。',
        '北京烤鸭或同等级特色晚餐仅在最终报价确认后包含。',
        '适合作为 land-only 城市包价或旅行社小团队产品。'
      ],
      days: [
        { day: '第 1 天', city: '北京', meals: '- / - / -', title: '抵达北京', summary: '抵达后接机或接站，送往酒店办理入住，当天以休息为主。', sights: ['抵达接送', '酒店入住'] },
        { day: '第 2 天', city: '北京', meals: 'B / L / D', title: '天安门、故宫与颐和园', summary: '游览天安门广场、故宫和颐和园。若最终报价包含，可安排北京烤鸭或特色晚餐。', sights: ['天安门广场', '故宫', '颐和园', '北京烤鸭晚餐选项'], note: '天安门和故宫预约需护照信息。' },
        { day: '第 3 天', city: '北京', meals: 'B / L / -', title: '天坛与居庸关长城', summary: '上午游览天坛，随后前往居庸关长城。玉石文化或购物停留仅在商业范围确认后加入。', sights: ['天坛', '居庸关长城', '玉石文化停留选项'] },
        { day: '第 4 天', city: '北京', meals: 'B / - / -', title: '胡同与离京', summary: '以三轮车或步行方式游览胡同，之后送往机场或火车站。', sights: ['胡同三轮车或步行', '老北京街巷', '离京送站'] }
      ]
    },
    'tx-best-of-china-11-day': {
      name: '11天中国精华游',
      eyebrow: 'TXGBC11 · 11天中国经典线路',
      duration: '11天 / 10晚',
      route: '北京 · 西安 · 桂林 · 上海',
      summary: '对标 ChinaTour GBC11 的中国经典高识别度线路，串联北京、西安、桂林/阳朔和上海。',
      galleryTitle: '长城、兵马俑、漓江山水与上海天际线。',
      sourceNote: '线路结构参考 ChinaTour GBC11：北京、西安、桂林/阳朔和上海；产品编号、文案和报价条款为腾轩自有版本。',
      highlights: [
        '北京保留三晚，让长城、故宫、胡同和天坛不被压缩。',
        '西安承担兵马俑、城墙、唐风夜游或回民街的古都章节。',
        '桂林与阳朔作为山水缓冲，再进入上海城市收尾。',
        '适合首次访华休闲客人、家庭团和需要高识别度线路的旅行社产品。'
      ]
    },
    'tx-guilin-yangshuo-highlights-3-day': {
      name: '3天桂林阳朔精华游',
      eyebrow: 'TXKW0301 · 3天桂林阳朔山水线路',
      duration: '3天 / 2晚',
      route: '桂林 · 阳朔 · 桂林',
      summary: '紧凑桂林短线产品，包含桂林抵达、漓江山水、阳朔乡村和轻量城市收尾。',
      galleryTitle: '漓江喀斯特峰林、阳朔乡村和桂林城市节奏。',
      facts: [
        { label: '编号', value: 'TXKW0301' },
        { label: '起点', value: '桂林' },
        { label: '终点', value: '桂林' },
        { label: '酒店', value: '桂林或阳朔按报价确认' },
        { label: '导游', value: '私家当地导游' },
        { label: '交通', value: '专车 + 漓江游船按最终方案' },
        { label: '适合', value: '桂林短线山水延伸' }
      ],
      highlights: [
        '抵达日保持轻量，适合安排芦笛岩、象鼻山或江边散步。',
        '用漓江和阳朔乡村作为三天线路的视觉核心。',
        '阳朔可按客人节奏选择骑行、电瓶车、村落步行或西街。',
        '适合作为北京、西安、上海、成都或香港之后的华南延伸。'
      ],
      days: [
        { day: '第 1 天', city: '桂林', meals: '- / - / -', title: '抵达桂林', summary: '导游接机或接站并送往酒店。若抵达时间允许，可安排芦笛岩、象鼻山或江边轻松步行。', sights: ['抵达接送', '酒店入住', '芦笛岩选项', '江边步行'] },
        { day: '第 2 天', city: '桂林到阳朔', meals: 'B / L / -', title: '漓江游船与阳朔乡村', summary: '乘漓江游船或按最终方案走桂林至阳朔山水廊道，下午安排阳朔乡村、西街、村落道路或轻量活动。', sights: ['漓江游船', '阳朔乡村', '西街选项', '村落路线选项'] },
        { day: '第 3 天', city: '阳朔或桂林', meals: 'B / - / -', title: '乡村晨间与离境', summary: '上午可安排短程骑行、电瓶车、集市或村落步行，之后返回桂林送机或送站。', sights: ['骑行选项', '电瓶车路线选项', '返回桂林', '离境送站'] }
      ]
    },
    'tx-guilin-yangshuo-longji-4-day': {
      name: '4天桂林阳朔龙脊梯田游',
      eyebrow: 'TXKW0401 · 4天桂林、阳朔与龙脊梯田线路',
      duration: '4天 / 3晚',
      route: '桂林 · 阳朔 · 龙脊 · 桂林',
      summary: '在桂林漓江和阳朔乡村之外加入龙脊梯田，适合需要更强山地乡村景观的广西延伸线路。',
      galleryTitle: '桂林山水、阳朔乡村和龙脊梯田延伸。',
      facts: [
        { label: '编号', value: 'TXKW0401' },
        { label: '起点', value: '桂林' },
        { label: '终点', value: '桂林' },
        { label: '酒店', value: '桂林 + 阳朔按报价确认' },
        { label: '导游', value: '私家当地导游' },
        { label: '交通', value: '专车 + 漓江游船按最终方案' },
        { label: '适合', value: '需要加入龙脊梯田的桂林线路' }
      ],
      highlights: [
        '在漓江之外加入龙脊，让线路有更完整的山地乡村景观。',
        '阳朔不只作为转场终点，可安排乡村骑行、电瓶车或村落路线。',
        '龙脊需提前确认车程、步行强度、天气、梯田季节和行李处理。',
        '适合休闲团、家庭团、摄影客人和旅行社广西延伸产品。'
      ],
      days: [
        { day: '第 1 天', city: '桂林', meals: '- / - / -', title: '抵达桂林', summary: '导游接机或接站并送往酒店。按抵达时间安排江边步行、芦笛岩或象鼻山。', sights: ['抵达接送', '酒店入住', '芦笛岩选项', '象鼻山选项'] },
        { day: '第 2 天', city: '桂林到阳朔', meals: 'B / L / -', title: '漓江游船到阳朔', summary: '用桂林至阳朔的漓江山水廊道作为核心景观日，下午安排西街、阳朔乡村、骑行或电瓶车路线。', sights: ['漓江游船', '阳朔乡村', '西街选项', '骑行或电瓶车选项'] },
        { day: '第 3 天', city: '阳朔到龙脊到桂林', meals: 'B / L / -', title: '龙脊梯田', summary: '前往龙脊梯田，游览山地梯田、村寨观景点和轻量步行路线，之后返回桂林或按方案入住梯田区域。', sights: ['龙脊梯田', '村寨观景点', '山地步行路线'], note: '报价前需确认车程、步行强度、天气、梯田季节和行李处理。' },
        { day: '第 4 天', city: '桂林', meals: 'B / - / -', title: '桂林离境', summary: '送往桂林机场或火车站。若离境时间较晚，可加入城市集市、岩洞或江边轻量模块。', sights: ['离境送站', '城市步行选项', '集市选项'] }
      ]
    },
    'tx-best-of-china-panda-13-day': {
      name: '13天中国精华与熊猫之旅',
      eyebrow: 'TXCH1202 · 13天经典中国+熊猫线路',
      duration: '13天 / 12晚',
      route: '北京 · 西安 · 桂林 · 阳朔 · 成都 · 上海',
      summary: '在北京、西安、桂林、阳朔和上海经典线路中加入成都熊猫基地和四川文化章节。',
      galleryTitle: '皇城古都、喀斯特山水、成都熊猫与上海城市能量。',
      facts: [
        { label: '编号', value: 'TXCH1202' },
        { label: '起点', value: '北京' },
        { label: '终点', value: '上海' },
        { label: '酒店', value: '四星或五星可选' },
        { label: '导游', value: '各地私家导游' },
        { label: '交通', value: '高铁 + 国内航班' },
        { label: '适合', value: '希望在经典中国线路中加入熊猫体验的首次访华客人' }
      ],
      days: [
        { day: '第 1 天', city: '北京', meals: '- / - / -', title: '抵达北京', summary: '抵达后接机或接站，送往酒店，晚上保留休息或轻松周边步行。', sights: ['抵达接送', '酒店入住'] },
        { day: '第 2 天', city: '北京', meals: 'B / L / -', title: '皇城北京', summary: '游览天安门、故宫、景山和胡同，把皇城中轴与老北京生活联系起来。', sights: ['天安门广场', '故宫', '景山公园', '胡同步行'], note: '天安门和故宫预约需提前提供护照信息。' },
        { day: '第 3 天', city: '北京', meals: 'B / L / -', title: '长城与皇家园林', summary: '前往长城游览，下午按时间、季节和体力安排颐和园或天坛。', sights: ['长城', '颐和园选项', '天坛选项'] },
        { day: '第 4 天', city: '北京到西安', meals: 'B / - / -', title: '高铁前往西安', summary: '乘高铁抵达西安，安排城墙、钟鼓楼区域或回民街作为古都初识。', sights: ['高铁', '西安城墙', '回民街'] },
        { day: '第 5 天', city: '西安', meals: 'B / L / -', title: '兵马俑与唐风城市', summary: '深度参观兵马俑，下午可加入大雁塔或大唐不夜城。', sights: ['兵马俑', '大雁塔', '大唐不夜城选项'] },
        { day: '第 6 天', city: '西安到桂林', meals: 'B / - / -', title: '飞往桂林', summary: '乘国内航班前往桂林，抵达后安排江边散步、岩洞选项或轻松晚餐。', sights: ['国内航班', '桂林江边', '芦笛岩选项'] },
        { day: '第 7 天', city: '桂林到阳朔', meals: 'B / L / -', title: '漓江游船', summary: '乘漓江游船前往阳朔，下午保留乡村景观、古镇或轻量活动。', sights: ['漓江游船', '阳朔乡村', '西街选项'] },
        { day: '第 8 天', city: '阳朔或桂林', meals: 'B / L / -', title: '喀斯特乡村日', summary: '按季节安排骑行、电瓶车、烹饪课、村落步行或龙脊梯田选项。', sights: ['阳朔乡村', '烹饪课选项', '龙脊选项'] },
        { day: '第 9 天', city: '桂林到成都', meals: 'B / - / -', title: '飞往成都', summary: '抵达成都后可安排锦里、宽窄巷子、茶馆或川菜体验。', sights: ['国内航班', '锦里或宽窄巷子', '川菜晚餐选项'] },
        { day: '第 10 天', city: '成都', meals: 'B / L / -', title: '熊猫基地与成都生活', summary: '上午参观成都熊猫基地，下午可安排文殊院、茶馆、锦里或川剧。', sights: ['成都熊猫基地', '文殊院选项', '茶馆', '川剧选项'] },
        { day: '第 11 天', city: '成都到上海', meals: 'B / - / -', title: '飞往上海', summary: '飞往上海，晚上可安排外滩、南京路或黄浦江游船选项。', sights: ['国内航班', '外滩', '南京路'] },
        { day: '第 12 天', city: '上海', meals: 'B / L / -', title: '老上海与新上海', summary: '游览豫园、老城厢、上海博物馆或法租界，最后安排浦东天际线。', sights: ['豫园', '老城厢', '上海博物馆选项', '浦东天际线'] },
        { day: '第 13 天', city: '上海', meals: 'B / - / -', title: '上海离境', summary: '专车送往机场，结束行程或继续中国其他城市延伸。', sights: ['机场送机'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-huanglong-dujiangyan-7-day': {
      name: '7天成都、九寨沟、黄龙与都江堰之旅',
      eyebrow: 'TXSC0601 · 7天四川自然与遗产线路',
      duration: '7天 / 6晚',
      route: '成都 · 九寨沟 · 黄龙 · 都江堰 · 成都',
      summary: '以成都为门户，覆盖熊猫基地、九寨沟、黄龙钙华池和都江堰。',
      galleryTitle: '熊猫、九寨沟湖泊、黄龙彩池与古代水利工程。',
      facts: [
        { label: '编号', value: 'TXSC0601' },
        { label: '起点', value: '成都' },
        { label: '终点', value: '成都' },
        { label: '酒店', value: '成都 + 九寨沟按报价确认' },
        { label: '导游', value: '英文当地导游' },
        { label: '交通', value: '专车 + 航班或铁路按季节确认' },
        { label: '适合', value: '以九寨沟为重点，同时保留成都熊猫体验的客人' }
      ],
      days: [
        { day: '第 1 天', city: '成都', meals: '- / - / -', title: '飞往成都', summary: '抵达成都或开始前往成都的国际航班计划，为四川线路做准备。', sights: ['飞往成都', '行程准备'] },
        { day: '第 2 天', city: '成都', meals: '- / - / -', title: '抵达成都', summary: '导游机场接客并送往酒店，当天保留休息或轻松城市步行。', sights: ['机场接客', '酒店入住', '自由活动'] },
        { day: '第 3 天', city: '成都到九寨沟', meals: 'B / L / -', title: '熊猫基地与前往九寨沟', summary: '上午参观成都熊猫基地，随后按季节运营选择航班、铁路加公路或陆路方案前往九寨沟。', sights: ['成都熊猫基地', '九寨沟转场', '酒店入住'] },
        { day: '第 4 天', city: '九寨沟', meals: 'B / L / -', title: '九寨沟全天游览', summary: '全天进入九寨沟，由导游规划湖泊、瀑布、林道和核心观景点顺序。', sights: ['诺日朗瀑布', '五彩池', '长海', '珍珠滩'] },
        { day: '第 5 天', city: '九寨沟到黄龙到成都', meals: 'B / L / -', title: '黄龙景区与返回成都', summary: '前往黄龙景区欣赏钙华池和山地景观，随后按确认交通方案返回成都。', sights: ['黄龙景区', '钙华彩池', '返回成都'], note: '最终确认前需核查海拔、天气和道路时间。' },
        { day: '第 6 天', city: '都江堰', meals: 'B / L / -', title: '都江堰与成都文化', summary: '参观都江堰水利工程，之后回成都安排文殊院、宽窄巷子、锦里或茶馆体验。', sights: ['都江堰水利工程', '文殊院选项', '宽窄巷子或锦里'] },
        { day: '第 7 天', city: '成都', meals: 'B / - / -', title: '成都离境', summary: '送往成都机场或火车站，结束行程或继续中国延伸线路。', sights: ['离境送站'] }
      ]
    },
    'tx-chengdu-giant-panda-4-day': {
      name: '4天成都与大熊猫之旅',
      eyebrow: 'TXCT0401 · 4天成都熊猫城市包价',
      duration: '4天 / 3晚',
      route: '成都',
      summary: '面向希望短暂停留成都的客人，覆盖熊猫基地、茶馆生活、老街和灵活城市文化日。',
      galleryTitle: '熊猫、成都慢生活、锦里街巷和博物馆或茶馆选项。',
      facts: [
        { label: '编号', value: 'TXCT0401' },
        { label: '起点', value: '成都' },
        { label: '终点', value: '成都' },
        { label: '酒店', value: '成都四星或同级' },
        { label: '导游', value: '英文当地导游' },
        { label: '交通', value: '专车' },
        { label: '适合', value: '成都短停和以熊猫为重点的家庭客人' }
      ],
      days: [
        { day: '第 1 天', city: '成都', meals: '- / - / -', title: '抵达成都', summary: '导游接机或接站并送往酒店，剩余时间用于休息或简单美食步行。', sights: ['抵达接送', '酒店入住', '自由活动'] },
        { day: '第 2 天', city: '成都', meals: 'B / L / -', title: '熊猫基地与老成都', summary: '上午参观成都熊猫基地，下午安排文殊院、人民公园茶馆、锦里或宽窄巷子。', sights: ['成都熊猫基地', '文殊院', '人民公园茶馆', '锦里或宽窄巷子'] },
        { day: '第 3 天', city: '成都', meals: 'B / L / -', title: '灵活成都文化日', summary: '按客人偏好选择三星堆、都江堰、美食线路、川菜课程或川剧。', sights: ['三星堆选项', '都江堰选项', '川菜选项', '川剧选项'] },
        { day: '第 4 天', city: '成都', meals: 'B / - / -', title: '成都离境', summary: '送往机场或火车站，继续下一段行程。', sights: ['离境送站'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-mt-emei-8-day': {
      name: '8天成都、九寨沟与峨眉山之旅',
      eyebrow: 'TXSC0701 · 8天四川自然与佛教名山线路',
      duration: '8天 / 7晚',
      route: '成都 · 九寨沟 · 黄龙 · 乐山 · 峨眉山 · 成都',
      summary: '组合成都熊猫、九寨沟、黄龙、乐山大佛和峨眉山的四川深度线路。',
      galleryTitle: '熊猫、九寨沟湖水、黄龙彩池、乐山与峨眉山文化。',
      facts: [
        { label: '编号', value: 'TXSC0701' },
        { label: '起点', value: '成都' },
        { label: '终点', value: '成都' },
        { label: '酒店', value: '成都 + 九寨沟 + 峨眉按报价确认' },
        { label: '导游', value: '英文当地导游' },
        { label: '交通', value: '专车 + 航班或铁路按季节确认' },
        { label: '适合', value: '希望同时体验四川山水和佛教名山文化的客人' }
      ],
      days: [
        { day: '第 1 天', city: '成都', meals: '- / - / -', title: '飞往成都', summary: '开始前往成都的航班计划，为四川线路做准备。', sights: ['飞往成都'] },
        { day: '第 2 天', city: '成都', meals: '- / - / -', title: '抵达成都', summary: '导游机场接客并送往酒店，当天保留休息或轻松城市步行。', sights: ['机场接客', '酒店入住'] },
        { day: '第 3 天', city: '成都到九寨沟', meals: 'B / L / -', title: '熊猫基地与前往九寨沟', summary: '参观成都熊猫基地，随后按确认的季节性交通方案前往九寨沟。', sights: ['成都熊猫基地', '九寨沟转场', '酒店入住'] },
        { day: '第 4 天', city: '九寨沟', meals: 'B / L / -', title: '九寨沟', summary: '全天游览九寨沟，按天气和人流安排湖泊、瀑布、林道和观景点。', sights: ['诺日朗瀑布', '五彩池', '长海', '珍珠滩'] },
        { day: '第 5 天', city: '九寨沟到黄龙到成都', meals: 'B / L / -', title: '黄龙与返回成都', summary: '游览黄龙景区的钙华池和山地景观，然后返回成都。', sights: ['黄龙景区', '钙华池', '返回成都'], note: '最终操作前需确认海拔、道路时间和天气。' },
        { day: '第 6 天', city: '乐山到峨眉山', meals: 'B / L / -', title: '乐山大佛与峨眉山', summary: '前往乐山参观大佛，随后继续前往峨眉山并入住山脚或山地区域酒店。', sights: ['乐山大佛', '前往峨眉山', '山地区域酒店'] },
        { day: '第 7 天', city: '峨眉山到成都', meals: 'B / L / -', title: '峨眉山游览', summary: '按天气和体力安排峨眉山、金顶、寺院或低山区线路，之后返回成都。', sights: ['峨眉山', '金顶选项', '缆车选项', '返回成都'] },
        { day: '第 8 天', city: '成都', meals: 'B / - / -', title: '成都离境', summary: '送往成都机场或火车站离境。', sights: ['离境送站'] }
      ]
    },
    'tx-chengdu-visa-free-3-day': {
      name: '72小时成都精华游',
      eyebrow: 'TXCT0301 · 72小时成都过境停留产品',
      duration: '3天 / 2晚',
      route: '成都',
      summary: '面向符合条件的过境客人，围绕机场时间、熊猫、老成都文化和可选美食或茶馆夜晚设计。',
      galleryTitle: '短暂停留成都，优先安排熊猫与城市文化。',
      facts: [
        { label: '编号', value: 'TXCT0301' },
        { label: '起点', value: '成都' },
        { label: '终点', value: '成都' },
        { label: '酒店', value: '成都四星或同级' },
        { label: '导游', value: '英文当地导游' },
        { label: '交通', value: '专车' },
        { label: '适合', value: '成都短时过境停留客人' }
      ],
      days: [
        { day: '第 1 天', city: '成都', meals: '- / - / -', title: '抵达接送与成都初识', summary: '成都机场或火车站接客并送往酒店；若时间允许，可安排锦里或宽窄巷子轻松步行。', sights: ['抵达接送', '酒店入住', '锦里或宽窄巷子选项'] },
        { day: '第 2 天', city: '成都', meals: 'B / L / -', title: '熊猫基地与成都文化', summary: '上午参观成都熊猫基地，下午安排文殊院、人民公园茶馆、川菜或川剧。', sights: ['成都熊猫基地', '文殊院选项', '人民公园茶馆', '川剧选项'], note: '报价前需核验过境材料、护照信息和当前入境规则。' },
        { day: '第 3 天', city: '成都', meals: 'B / - / -', title: '离境或短线延伸', summary: '送往机场或火车站。若离境时间较晚，可加三星堆、都江堰或美食线路。', sights: ['离境送站', '三星堆选项', '都江堰选项'] }
      ]
    },
    'beijing-central-axis-5-day': {
      name: '北京经典精华4日',
      eyebrow: '4天紧凑北京经典线路',
      duration: '4天 / 3晚',
      route: '北京',
      summary: '面向首次到访北京的紧凑单城产品，组合胡同、王府井、慕田峪长城、颐和园、奥林匹克公园、天安门、故宫、景山、天坛和离境前市场时间。',
      galleryTitle: '皇城、长城、胡同生活和离境日前的经典北京。',
      highlights: [
        '4天内压缩北京最核心的皇城、长城、胡同和天坛体验，适合首次到访客人。',
        '用私家车把慕田峪长城、颐和园、奥林匹克公园、故宫、景山和天坛高效串联。',
        '保留王府井、胡同家访、金面王朝演出、前门或红桥市场等城市生活与晚间选项。',
        '把护照预约、故宫周一闭馆、长城缆车选择和离境时间缓冲写进行程说明。'
      ],
      days: [
        {
          day: '第 1',
          city: '北京',
          meals: '- / - / -',
          title: '抵达北京、胡同三轮车与王府井',
          summary: '抵达后由英文导游接机或接站，以轻量城市初识开始行程。根据航班时间安排胡同三轮车、老北京院落家访选项，傍晚前往王府井步行街，方便客人适应城市节奏、用餐和购物。',
          sights: ['机场或火车站接站', '胡同三轮车', '老北京院落家访选项', '王府井步行街', '市区酒店'],
          note: '如航班抵达较晚，当天胡同或王府井可缩短或调整。'
        },
        {
          day: '第 2',
          city: '北京',
          meals: 'B / L / -',
          title: '慕田峪长城、颐和园与奥林匹克公园',
          summary: '上午前往慕田峪长城，用相对舒适的景区动线完成长城观景和轻徒步。下午回城游览颐和园，重点看昆明湖、万寿山和十七孔桥；之后到奥林匹克公园外观鸟巢和水立方，适合拍照收尾。',
          sights: ['慕田峪长城', '颐和园', '昆明湖', '奥林匹克公园', '鸟巢和水立方外观'],
          note: '慕田峪缆车、索道、滑道等项目可按报价单单独确认。'
        },
        {
          day: '第 3',
          city: '北京',
          meals: 'B / L / -',
          title: '天安门、故宫、景山与晚间演出',
          summary: '全天聚焦北京皇城核心。先游览天安门广场，再进入故宫看主要宫殿、院落和中轴线空间；下午登景山俯瞰故宫全景。晚上可按报价加入金面王朝或同等级演出，让团队有更完整的文化体验。',
          sights: ['天安门广场', '故宫', '景山公园', '金面王朝演出选项'],
          note: '天安门和故宫预约需要护照信息；故宫通常每周一闭馆，法定节假日安排以官方开放为准。'
        },
        {
          day: '第 4',
          city: '北京',
          meals: 'B / - / -',
          title: '天坛、红桥市场或前门与离京送站',
          summary: '离京前安排天坛，理解明清皇帝祭天祈谷的礼制空间。之后根据航班或高铁时间加入红桥市场、前门或轻量购物停留，最后送往机场或火车站，预留充足离境手续时间。',
          sights: ['天坛', '红桥市场或前门', '机场或火车站送站'],
          note: '若需要完整游览天坛，建议安排下午较晚航班或高铁。'
        }
      ]
    },
    'beijing-family-museums-7-day': { name: '北京亲子博物馆与环球7日', eyebrow: '7天亲子友好北京产品', duration: '7天 / 6晚', route: '北京', summary: '面向亲子家庭的北京线路，覆盖故宫、国家级博物馆、科技学习、校园氛围、长城、奥林匹克公园和可选环球影城。', galleryTitle: '博物馆、学习体验、长城和轻松主题乐园日。' },
    'beijing-jingwei-6-day': { name: '京韵京味北京6日', eyebrow: '6天皇城与胡同生活线路', duration: '6天 / 5晚', route: '北京', summary: '把故宫、长城与胡同、茶馆、老街和北京风味结合，适合希望看见城市生活层次的客人。', galleryTitle: '皇家地标与老北京街巷生活。' },
    'beijing-great-wall-autumn-5-day': { name: '北京长城与秋色公园5日', eyebrow: '5天季节性北京短线', duration: '5天 / 4晚', route: '北京', summary: '短线北京产品，组合故宫、颐和园、长城、香山秋色和胡同体验，适合停留时间有限的客人。', galleryTitle: '宫殿尺度、长城风景和季节公园。' },
    'beijing-gubei-water-town-6-day': { name: '北京+古北水镇6日', eyebrow: '6天北京与司马台夜长城线路', duration: '6天 / 5晚', route: '北京 · 古北水镇', summary: '在北京经典景点之外加入古北水镇和司马台长城，适合希望节奏更慢的小包团。', galleryTitle: '经典北京之外的水镇和夜长城延伸。' },
    'xian-terracotta-entry-5-day': { name: '西安入境遗产5日', eyebrow: '5天西安入门遗产线路', duration: '5天 / 4晚', route: '西安 · 临潼', summary: '清晰的西安入境产品，覆盖兵马俑、城墙、回民街、大雁塔和大唐夜游氛围。', galleryTitle: '兵马俑、明城墙与唐风夜色。' },
    'xian-huashan-hukou-6-day': { name: '西安华山壶口6日', eyebrow: '6天陕西山河与古都线路', duration: '6天 / 5晚', route: '西安 · 临潼 · 华山 · 韩城 · 宜川', summary: '高识别度陕西线路，加入华山、壶口瀑布、华清宫、关中文化和兵马俑。', galleryTitle: '古都西安之外的华山与黄河景观。' },
    'xian-family-intangible-5-day': { name: '西安亲子非遗5日', eyebrow: '5天亲子考古与非遗体验产品', duration: '5天 / 4晚', route: '西安 · 临潼', summary: '亲子友好西安线路，结合兵马俑、大明宫、大雁塔、城墙、唐风街区和非遗体验。', galleryTitle: '用家庭节奏打开考古和民俗文化。' },
    'xian-tang-night-4-day': { name: '西安唐风夜游4日', eyebrow: '4天西安短停城市产品', duration: '4天 / 3晚', route: '西安', summary: '适合周末或延伸停留的西安短线，组合城墙、回民街、大雁塔、大唐不夜城和兵马俑一日。', galleryTitle: '紧凑短线里的西安夜色和古都核心。' },
    'xian-yanan-huashan-6-day': { name: '西安延安华山印象6日', eyebrow: '6天陕西深度历史延伸', duration: '6天 / 5晚', route: '西安 · 延安 · 华山 · 临潼', summary: '区域型陕西线路，结合西安遗产、延安历史、华山或壶口延伸和本地餐食规划。', galleryTitle: '从古都到山河与红色历史的陕西深度线。' },
    'beijing-chengde-imperial': {
      name: '北京+承德皇家遗产7日',
      eyebrow: '7天清代皇家遗产线路',
      duration: '7天 / 6晚',
      route: '北京 · 承德 · 北京',
      summary: '以北京为核心的皇家遗产产品，加入清代皇帝夏季行宫承德，覆盖故宫、长城、胡同、颐和园、避暑山庄和外八庙。',
      galleryTitle: '皇家北京与承德避暑山庄延伸。',
      highlights: [
        '北京作为抵离门户，承德承担更深入的清代皇家历史章节。',
        '覆盖天安门、故宫、颐和园、长城、胡同、避暑山庄、普宁寺和普陀宗乘之庙。',
        '用承德区别于普通北京单城短线，提高产品辨识度。',
        '适合旅行社团队、长者客人和偏皇家历史主题的首次访华客人。'
      ]
    },
    'beijing-xian-shanghai': {
      name: '北京-西安-上海',
      eyebrow: '8天中国经典遗产陪同游',
      duration: '8天 / 7晚',
      route: '北京 · 西安 · 上海 · 北京',
      summary:
        '面向国际团队的紧凑首次访华线路，覆盖北京皇家文化、西安兵马俑和上海经典城市景观，包含导游、专车、高铁和四星酒店选项。',
      galleryTitle: '皇家北京、古都西安与浦江上海。'
    },
    'splendid-china-9-day': {
      name: '9天锦绣中国',
      eyebrow: '9天经典华东与遗产线路',
      duration: '9天 / 8晚',
      route: '北京 · 西安 · 苏州 · 杭州 · 上海',
      summary: '紧凑经典中国产品，串联北京皇家地标、西安兵马俑、苏州园林、杭州西湖和上海收尾，适合首次访华入境客人。',
      galleryTitle: '皇家遗产、古都、江南园林、西湖与上海天际线。',
      highlights: [
        '用北京和西安承担最容易识别的遗产章节，再切换到江南风景。',
        '加入苏州和杭州，让线路不只是北京、西安、上海三角线。',
        '上海作为国际门户收尾，安排外滩、老城和可弹性调整的自由时间。',
        '可作为固定经典产品，也可按旅行社团队的酒店、餐食和导游语言调整。'
      ]
    },
    'best-of-china-11-day': {
      name: '11天中国精华',
      eyebrow: '11天中国高识别度经典线路',
      duration: '11天 / 10晚',
      route: '北京 · 西安 · 桂林 · 上海',
      summary: '面向希望一次看完中国代表性亮点的客人，覆盖北京、西安、桂林与阳朔山水，以及上海城市收尾。',
      galleryTitle: '长城、兵马俑、漓江山水与上海天际线。',
      highlights: [
        '北京保留三晚，让长城、故宫、胡同和天坛不被压缩。',
        '西安承担兵马俑、城墙、唐风夜游或回民街的古都章节。',
        '桂林与阳朔作为山水缓冲，再进入上海城市收尾。',
        '适合首次访华休闲客人、家庭团和需要高识别度线路的旅行社产品。'
      ]
    },
    'classic-first-time-china': { name: '首次访华经典线路', eyebrow: '10天私家中国入门线路', duration: '10天 / 9晚', route: '北京 · 西安 · 桂林 · 上海', summary: '面向海外休闲客人的首次访华私家线路，串联核心遗产、山水章节和上海收尾。', galleryTitle: '世界遗产、喀斯特山水和上海城市收尾。' },
    'beijing-xian-heritage': { name: '北京+西安遗产之旅', eyebrow: '6天古都线路', duration: '6天 / 5晚', route: '北京 · 西安', summary: '适合希望在一周内游览长城、故宫和兵马俑的紧凑古都产品。', galleryTitle: '两座古都，以高铁连接。' },
    'shanghai-discovery': { name: '5日上海探索', eyebrow: '5天城市与水乡短线', duration: '5天 / 4晚', route: '上海 · 苏州或水乡', summary: '低门槛上海产品，覆盖外滩、老城、江南园林或水乡，并预留美食与购物时间。', galleryTitle: '都市上海与江南周边。' },
    'chengdu-chongqing-zhangjiajie': { name: '成都、重庆与张家界之旅', eyebrow: '10天熊猫、山城与峰林线路', duration: '10天 / 9晚', route: '成都 · 重庆 · 张家界', summary: '结合熊猫、川渝美食、重庆夜景和张家界山水的高识别度线路。', galleryTitle: '熊猫、火锅、江城夜景与砂岩峰林。' },
    'beijing-zhangjiajie-shanghai': { name: '中国城市+自然：北京、张家界、上海', eyebrow: '9天经典城市与自然线路', duration: '9天 / 8晚', route: '北京 · 张家界 · 上海', summary: '用张家界替代常规古都章节，适合摄影和自然偏好的首次访华客人。', galleryTitle: '经典门户城市与震撼自然核心。' },
    'guilin-yangshuo-landscape': { name: '桂林山水度假', eyebrow: '5天漓江与阳朔乡村线路', duration: '5天 / 4晚', route: '桂林 · 阳朔 · 龙脊可选', summary: '以山水为主的中国南方延伸线路，含漓江、阳朔乡村和可选梯田。', galleryTitle: '喀斯特山水、漓江游船和乡村节奏。' },
    'business-leisure-custom': { name: '商务+休闲定制行程', eyebrow: '灵活会奖与商务旅行延伸', duration: '灵活 / 定制', route: '北京 · 上海 · 成都 · 定制城市', summary: '面向商务代表团、会议、翻译、供应商拜访和短时文化体验的定制产品。', galleryTitle: '商务后勤与可选文化时间。' },
    'private-family-china': { name: '私家亲子中国游', eyebrow: '8-12天亲子友好私家线路', duration: '8-12天 / 定制', route: '北京 · 西安 · 上海 · 成都或桂林可选', summary: '节奏更慢、酒店位置更合理、导游风格更亲子的私家家庭线路。', galleryTitle: '按家庭节奏调整的经典中国。' }
  },
  de: {
    'tx-best-of-china-panda-13-day': {
      name: '13 Tage Best of China und Panda',
      eyebrow: 'TXCH1202 · 13 Tage klassisches China + Panda',
      duration: '13 Tage / 12 Naechte',
      route: "Peking · Xi'an · Guilin · Yangshuo · Chengdu · Shanghai",
      summary: "Klassische Route mit Peking, Xi'an, Guilin, Yangshuo und Shanghai plus Chengdu fur Panda Base und Sichuan-Kultur.",
      galleryTitle: 'Kaiserstaedte, Karstlandschaft, Pandas und Shanghai.',
      facts: [
        { label: 'Code', value: 'TXCH1202' },
        { label: 'Start', value: 'Peking' },
        { label: 'Ende', value: 'Shanghai' },
        { label: 'Hotels', value: '4- oder 5-Sterne-Optionen' },
        { label: 'Guide', value: 'Private lokale Guides' },
        { label: 'Transport', value: 'Bahn + Inlandsfluege' },
        { label: 'Geeignet fuer', value: 'Erstbesucher, die Pandas zur klassischen China-Route ergaenzen moechten' }
      ],
      days: [
        { day: 'Tag 1', city: 'Peking', meals: '- / - / -', title: 'Ankunft in Peking', summary: 'Begruessung bei Ankunft, Transfer zum Hotel und leichter Abend zur Erholung.', sights: ['Ankunftstransfer', 'Hotel-Check-in'] },
        { day: 'Tag 2', city: 'Peking', meals: 'B / L / -', title: 'Kaiserliches Peking', summary: 'Besuch von Tiananmen-Platz, Verbotener Stadt, Jingshan und Hutongs.', sights: ['Tiananmen-Platz', 'Verbotene Stadt', 'Jingshan-Park', 'Hutong-Spaziergang'], note: 'Passdaten sind fuer Reservierungen erforderlich.' },
        { day: 'Tag 3', city: 'Peking', meals: 'B / L / -', title: 'Grosse Mauer und kaiserliche Gaerten', summary: 'Ausflug zur Grossen Mauer, danach Sommerpalast oder Himmelstempel je nach Zeit und Mobilitaet.', sights: ['Grosse Mauer', 'Sommerpalast optional', 'Himmelstempel optional'] },
        { day: 'Tag 4', city: "Peking nach Xi'an", meals: 'B / - / -', title: "Schnellzug nach Xi'an", summary: "Fahrt nach Xi'an und erster Eindruck mit Stadtmauer, Glocken-/Trommelturmviertel oder Muslimischem Viertel.", sights: ['Schnellzug', 'Stadtmauer von Xi’an', 'Muslimisches Viertel'] },
        { day: 'Tag 5', city: "Xi'an", meals: 'B / L / -', title: 'Terrakotta-Armee und Tang-Stadt', summary: 'Ausfuehrlicher Besuch der Terrakotta-Armee, danach Big Wild Goose Pagoda oder Tang-Nachtviertel.', sights: ['Terrakotta-Armee', 'Big Wild Goose Pagoda', 'Tang-Nachtviertel optional'] },
        { day: 'Tag 6', city: "Xi'an nach Guilin", meals: 'B / - / -', title: 'Flug nach Guilin', summary: 'Inlandsflug nach Guilin und leichter Ankunftstag mit Flussspaziergang oder Hoehlenoption.', sights: ['Inlandsflug', 'Flussspaziergang Guilin', 'Reed Flute Cave optional'] },
        { day: 'Tag 7', city: 'Guilin nach Yangshuo', meals: 'B / L / -', title: 'Li-Fluss-Kreuzfahrt', summary: 'Fahrt auf dem Li-Fluss nach Yangshuo, danach Landlandschaft, Altstadt oder leichte Aktivitaet.', sights: ['Li-Fluss-Kreuzfahrt', 'Yangshuo-Land', 'West Street optional'] },
        { day: 'Tag 8', city: 'Yangshuo oder Guilin', meals: 'B / L / -', title: 'Karstlandschaft und Doerfer', summary: 'Rad, Buggy, Kochkurs, Dorfspaziergang oder Longji-Reisterrassen je nach Saison.', sights: ['Yangshuo-Land', 'Kochkurs optional', 'Longji optional'] },
        { day: 'Tag 9', city: 'Guilin nach Chengdu', meals: 'B / - / -', title: 'Flug nach Chengdu', summary: 'Transfer nach Chengdu mit Abendoption Jinli, Kuanzhai Alley, Teehaus oder Sichuan-Kueche.', sights: ['Inlandsflug', 'Jinli oder Kuanzhai Alley', 'Sichuan-Abendessen optional'] },
        { day: 'Tag 10', city: 'Chengdu', meals: 'B / L / -', title: 'Panda Base und Chengdu-Leben', summary: 'Morgens Panda Base, nachmittags Wenshu-Tempel, Teehaus, Jinli oder Sichuan-Oper.', sights: ['Chengdu Panda Base', 'Wenshu-Tempel optional', 'Teehaus', 'Sichuan-Oper optional'] },
        { day: 'Tag 11', city: 'Chengdu nach Shanghai', meals: 'B / - / -', title: 'Flug nach Shanghai', summary: 'Flug nach Shanghai; Abend am Bund, Nanjing Road oder Huangpu-Kreuzfahrt optional.', sights: ['Inlandsflug', 'The Bund', 'Nanjing Road'] },
        { day: 'Tag 12', city: 'Shanghai', meals: 'B / L / -', title: 'Altes und neues Shanghai', summary: 'Yu Garden, Altstadt, Shanghai Museum oder French Concession, danach Skyline.', sights: ['Yu Garden', 'Altstadt', 'Shanghai Museum optional', 'Pudong-Skyline'] },
        { day: 'Tag 13', city: 'Shanghai', meals: 'B / - / -', title: 'Abreise aus Shanghai', summary: 'Privater Transfer zum Flughafen fuer Abreise oder weitere China-Reise.', sights: ['Flughafentransfer'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-huanglong-dujiangyan-7-day': {
      name: '7 Tage Chengdu, Jiuzhaigou, Huanglong und Dujiangyan',
      eyebrow: 'TXSC0601 · 7 Tage Sichuan Natur + Kulturerbe',
      duration: '7 Tage / 6 Naechte',
      route: 'Chengdu · Jiuzhaigou · Huanglong · Dujiangyan · Chengdu',
      summary: 'Sichuan-Route mit Pandas, Jiuzhaigou, Huanglong-Travertinbecken und Dujiangyan.',
      galleryTitle: 'Pandas, blaue Seen, Huanglong-Becken und alte Wasserbaukunst.',
      facts: [
        { label: 'Code', value: 'TXSC0601' },
        { label: 'Start', value: 'Chengdu' },
        { label: 'Ende', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu + Jiuzhaigou nach Angebot' },
        { label: 'Guide', value: 'Englischsprachiger lokaler Guide' },
        { label: 'Transport', value: 'Privatfahrzeug + Flug oder Bahn saisonal' },
        { label: 'Geeignet fuer', value: 'Gaeste mit Schwerpunkt Jiuzhaigou und Panda-Erlebnis' }
      ],
      days: [
        { day: 'Tag 1', city: 'Chengdu', meals: '- / - / -', title: 'Flug nach Chengdu', summary: 'Anreise nach Chengdu, dem Tor zur Sichuan-Route.', sights: ['Flug nach Chengdu', 'Routenstart'] },
        { day: 'Tag 2', city: 'Chengdu', meals: '- / - / -', title: 'Ankunft in Chengdu', summary: 'Begruessung am Flughafen und Transfer zum Hotel; Rest des Tages frei.', sights: ['Flughafenabholung', 'Hotel-Check-in', 'Freizeit'] },
        { day: 'Tag 3', city: 'Chengdu nach Jiuzhaigou', meals: 'B / L / -', title: 'Panda Base und Transfer nach Jiuzhaigou', summary: 'Morgens Panda Base, danach saisonaler Transfer per Flug, Bahn+Strasse oder Landroute.', sights: ['Chengdu Panda Base', 'Transfer nach Jiuzhaigou', 'Hotel-Check-in'] },
        { day: 'Tag 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Ganztag Jiuzhaigou', summary: 'Gefuehrter Tag im Tal mit Seen, Wasserfaellen, Waldwegen und Aussichtspunkten.', sights: ['Nuorilang-Wasserfall', 'Fuenffarbiger See', 'Langer See', 'Pearl Shoal'] },
        { day: 'Tag 5', city: 'Jiuzhaigou nach Huanglong nach Chengdu', meals: 'B / L / -', title: 'Huanglong und Rueckkehr nach Chengdu', summary: 'Besuch von Huanglong mit Travertinbecken und Bergblick, danach Rueckkehr nach Chengdu.', sights: ['Huanglong Scenic Area', 'Travertinbecken', 'Rueckkehr nach Chengdu'], note: 'Hoehe, Wetter und Strassenzeit vor Bestaetigung pruefen.' },
        { day: 'Tag 6', city: 'Dujiangyan', meals: 'B / L / -', title: 'Dujiangyan und Chengdu-Kultur', summary: 'Dujiangyan Irrigation System, danach Wenshu-Tempel, Kuanzhai Alley, Jinli oder Teehaus.', sights: ['Dujiangyan Irrigation System', 'Wenshu-Tempel optional', 'Kuanzhai Alley oder Jinli'] },
        { day: 'Tag 7', city: 'Chengdu', meals: 'B / - / -', title: 'Abreise aus Chengdu', summary: 'Transfer zum Flughafen oder Bahnhof fuer Abreise oder Verlaengerung.', sights: ['Abreisetransfer'] }
      ]
    },
    'tx-chengdu-giant-panda-4-day': {
      name: '4 Tage Chengdu und Riesenpandas',
      eyebrow: 'TXCT0401 · 4 Tage Chengdu Panda-City-Paket',
      duration: '4 Tage / 3 Naechte',
      route: 'Chengdu',
      summary: 'Kurzes Chengdu-Programm mit Panda Base, Teehausleben, alten Gassen und flexiblem Kulturtag.',
      galleryTitle: 'Pandas, Chengdu Slow Life, Jinli und Museum- oder Teehausoptionen.',
      facts: [
        { label: 'Code', value: 'TXCT0401' },
        { label: 'Start', value: 'Chengdu' },
        { label: 'Ende', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu 4-Sterne oder aehnlich' },
        { label: 'Guide', value: 'Englischsprachiger lokaler Guide' },
        { label: 'Transport', value: 'Privatfahrzeug' },
        { label: 'Geeignet fuer', value: 'Kurze Chengdu-Aufenthalte und Familien mit Panda-Fokus' }
      ],
      days: [
        { day: 'Tag 1', city: 'Chengdu', meals: '- / - / -', title: 'Ankunft in Chengdu', summary: 'Transfer zum Hotel; Rest des Tages zur Erholung oder fuer einen einfachen Food Walk.', sights: ['Ankunftstransfer', 'Hotel-Check-in', 'Freizeit'] },
        { day: 'Tag 2', city: 'Chengdu', meals: 'B / L / -', title: 'Panda Base und altes Chengdu', summary: 'Morgens Panda Base, danach Wenshu-Tempel, People’s Park Teehaus, Jinli oder Kuanzhai Alley.', sights: ['Chengdu Panda Base', 'Wenshu-Tempel', 'People’s Park Teehaus', 'Jinli oder Kuanzhai Alley'] },
        { day: 'Tag 3', city: 'Chengdu', meals: 'B / L / -', title: 'Flexibler Chengdu-Kulturtag', summary: 'Sanxingdui, Dujiangyan, Food Route, Sichuan-Kochkurs oder Sichuan-Oper je nach Gastprofil.', sights: ['Sanxingdui optional', 'Dujiangyan optional', 'Sichuan-Kueche optional', 'Sichuan-Oper optional'] },
        { day: 'Tag 4', city: 'Chengdu', meals: 'B / - / -', title: 'Abreise aus Chengdu', summary: 'Transfer zum Flughafen oder Bahnhof fuer die Weiterreise.', sights: ['Abreisetransfer'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-mt-emei-8-day': {
      name: '8 Tage Chengdu, Jiuzhaigou und Mt. Emei',
      eyebrow: 'TXSC0701 · 8 Tage Sichuan Natur + heiliger Berg',
      duration: '8 Tage / 7 Naechte',
      route: 'Chengdu · Jiuzhaigou · Huanglong · Leshan · Mt. Emei · Chengdu',
      summary: 'Acht Tage Sichuan mit Chengdu-Pandas, Jiuzhaigou, Huanglong, Leshan-Buddha und Mt. Emei.',
      galleryTitle: 'Pandas, Jiuzhaigou-Wasser, Huanglong-Becken, Leshan und Emei-Kultur.',
      facts: [
        { label: 'Code', value: 'TXSC0701' },
        { label: 'Start', value: 'Chengdu' },
        { label: 'Ende', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu + Jiuzhaigou + Emei nach Angebot' },
        { label: 'Guide', value: 'Englischsprachiger lokaler Guide' },
        { label: 'Transport', value: 'Privatfahrzeug + Flug oder Bahn saisonal' },
        { label: 'Geeignet fuer', value: 'Gaeste, die Sichuan-Landschaft und buddhistische Bergkultur verbinden moechten' }
      ],
      days: [
        { day: 'Tag 1', city: 'Chengdu', meals: '- / - / -', title: 'Flug nach Chengdu', summary: 'Beginn der Anreise nach Chengdu.', sights: ['Flug nach Chengdu'] },
        { day: 'Tag 2', city: 'Chengdu', meals: '- / - / -', title: 'Ankunft in Chengdu', summary: 'Flughafenabholung, Hoteltransfer und leichter Ankunftstag.', sights: ['Flughafenabholung', 'Hotel-Check-in'] },
        { day: 'Tag 3', city: 'Chengdu nach Jiuzhaigou', meals: 'B / L / -', title: 'Panda Base und Transfer nach Jiuzhaigou', summary: 'Besuch der Panda Base und anschliessender saisonaler Transfer nach Jiuzhaigou.', sights: ['Chengdu Panda Base', 'Transfer nach Jiuzhaigou', 'Hotel-Check-in'] },
        { day: 'Tag 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Jiuzhaigou Valley', summary: 'Ganztag mit Seen, Wasserfaellen, Waldwegen und Aussichtspunkten nach Wetter und Besucherfluss.', sights: ['Nuorilang-Wasserfall', 'Fuenffarbiger See', 'Langer See', 'Pearl Shoal'] },
        { day: 'Tag 5', city: 'Jiuzhaigou nach Huanglong nach Chengdu', meals: 'B / L / -', title: 'Huanglong und Rueckkehr nach Chengdu', summary: 'Huanglong Scenic Area mit Travertinbecken und Berglandschaft, danach Rueckkehr nach Chengdu.', sights: ['Huanglong Scenic Area', 'Travertinbecken', 'Rueckkehr nach Chengdu'], note: 'Hoehe, Strassenzeit und Wetter vor Betrieb pruefen.' },
        { day: 'Tag 6', city: 'Leshan nach Mt. Emei', meals: 'B / L / -', title: 'Leshan Giant Buddha und Mt. Emei', summary: 'Fahrt nach Leshan zum Grossen Buddha, danach weiter zum Mt. Emei und Check-in.', sights: ['Leshan Giant Buddha', 'Transfer zum Mt. Emei', 'Berghotel'] },
        { day: 'Tag 7', city: 'Mt. Emei nach Chengdu', meals: 'B / L / -', title: 'Mt. Emei Besichtigung', summary: 'Mt. Emei mit Golden Summit, Kloster oder niedriger Bergroute je nach Wetter und Fitness, danach Rueckkehr.', sights: ['Mt. Emei', 'Golden Summit optional', 'Seilbahn optional', 'Rueckkehr nach Chengdu'] },
        { day: 'Tag 8', city: 'Chengdu', meals: 'B / - / -', title: 'Abreise aus Chengdu', summary: 'Transfer zum Flughafen oder Bahnhof.', sights: ['Abreisetransfer'] }
      ]
    },
    'tx-chengdu-visa-free-3-day': {
      name: '72 Stunden Chengdu Highlights',
      eyebrow: 'TXCT0301 · 72-Stunden Chengdu Stopover',
      duration: '3 Tage / 2 Naechte',
      route: 'Chengdu',
      summary: 'Kompakte Chengdu-Stopover-Route mit Flughafentiming, Pandas, altem Chengdu und Food- oder Teehausabend.',
      galleryTitle: 'Kurzes Chengdu-Fenster mit Pandas und Stadtkultur.',
      facts: [
        { label: 'Code', value: 'TXCT0301' },
        { label: 'Start', value: 'Chengdu' },
        { label: 'Ende', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu 4-Sterne oder aehnlich' },
        { label: 'Guide', value: 'Englischsprachiger lokaler Guide' },
        { label: 'Transport', value: 'Privatfahrzeug' },
        { label: 'Geeignet fuer', value: 'Kurze visumfreie Chengdu-Stopover' }
      ],
      days: [
        { day: 'Tag 1', city: 'Chengdu', meals: '- / - / -', title: 'Ankunftstransfer und Chengdu-Orientierung', summary: 'Abholung am Flughafen oder Bahnhof, Hoteltransfer und optional Jinli oder Kuanzhai Alley.', sights: ['Ankunftstransfer', 'Hotel-Check-in', 'Jinli oder Kuanzhai Alley optional'] },
        { day: 'Tag 2', city: 'Chengdu', meals: 'B / L / -', title: 'Panda Base und Chengdu-Kultur', summary: 'Morgens Panda Base, danach Wenshu-Tempel, People’s Park Teehaus, Sichuan-Kueche oder Oper.', sights: ['Chengdu Panda Base', 'Wenshu-Tempel optional', 'People’s Park Teehaus', 'Sichuan-Oper optional'], note: 'Transitdokumente, Passdaten und aktuelle Einreiseregeln vor Angebot pruefen.' },
        { day: 'Tag 3', city: 'Chengdu', meals: 'B / - / -', title: 'Abreise oder kurze Erweiterung', summary: 'Transfer zum Flughafen oder Bahnhof; bei spaeter Abreise Sanxingdui, Dujiangyan oder Food Route optional.', sights: ['Abreisetransfer', 'Sanxingdui optional', 'Dujiangyan optional'] }
      ]
    },
    'beijing-xian-shanghai': {
      name: "Peking-Xi'an-Shanghai",
      eyebrow: '8-taegige begleitete China-Kulturerbereise',
      duration: '8 Tage / 7 Naechte',
      route: "Peking · Xi'an · Shanghai · Peking",
      summary:
        'Kompakte Einsteigerroute fur internationale Gruppen mit kaiserlichem Peking, Terrakotta-Kriegern in Xi an und klassischen Shanghai-Besuchen.',
      galleryTitle: "Kaiserliches Peking, altes Xi'an und Shanghai am Fluss."
    },
    'classic-first-time-china': { name: 'Klassische erste China-Reise', eyebrow: '10-taegige private China-Einfuehrung', duration: '10 Tage / 9 Naechte', route: "Peking · Xi'an · Guilin · Shanghai", summary: 'Private Einsteigerroute mit Kulturerbe, Landschaftskapitel und Shanghai-Finale.', galleryTitle: 'Welterbe, Karstlandschaft und sanftes Shanghai-Finale.' },
    'beijing-xian-heritage': { name: "Peking + Xi'an Kulturerbe", eyebrow: '6-taegige Route alter Hauptstaedte', duration: '6 Tage / 5 Naechte', route: "Peking · Xi'an", summary: 'Kompakte Route fur Grosse Mauer, Verbotene Stadt und Terrakotta-Armee.', galleryTitle: 'Zwei alte Hauptstaedte mit schneller Bahnverbindung.' },
    'beijing-chengde-imperial': { name: 'Peking + Chengde kaiserliches Erbe', eyebrow: '7-taegige Qing-Kaiserroute', duration: '7 Tage / 6 Naechte', route: 'Peking · Chengde · Peking', summary: 'Peking-zentrierte Kaiserroute mit Chengde als Sommerresidenz der Qing-Kaiser, inklusive Verbotene Stadt, Grosse Mauer, Hutongs, Sommerpalast, Mountain Resort und Aeussere Tempel.', galleryTitle: 'Kaiserliches Peking mit Chengde-Erweiterung.' },
    'shanghai-discovery': { name: '5 Tage Shanghai Discovery', eyebrow: '5 Tage Stadt- und Wasserstadtpause', duration: '5 Tage / 4 Naechte', route: 'Shanghai · Suzhou oder Wasserstadt', summary: 'Niedrigschwellige Shanghai-Route mit Bund, Altstadt und Jiangnan-Ausflug.', galleryTitle: 'Urbanes Shanghai mit Jiangnan-Seitenreise.' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu, Chongqing & Zhangjiajie', eyebrow: '10 Tage Pandas, Bergstadt und Avatar-Landschaften', duration: '10 Tage / 9 Naechte', route: 'Chengdu · Chongqing · Zhangjiajie', summary: 'Intensive Route mit Pandas, Sichuan-Kueche, Chongqing-Nachtblicken und Zhangjiajie.', galleryTitle: 'Pandas, Hotpot, Flusslichter und Sandsteinspitzen.' },
    'beijing-zhangjiajie-shanghai': { name: 'China + Natur: Peking, Zhangjiajie & Shanghai', eyebrow: '9 Tage klassische Stadt- und Naturroute', duration: '9 Tage / 8 Naechte', route: 'Peking · Zhangjiajie · Shanghai', summary: 'Alternative Erstbesucherroute mit Peking, Shanghai und dramatischem Naturkapitel.', galleryTitle: 'Klassische Gateways mit Naturmittelpunkt.' },
    'guilin-yangshuo-landscape': { name: 'Guilin Landschaftsauszeit', eyebrow: '5 Tage Li-Fluss und Yangshuo-Land', duration: '5 Tage / 4 Naechte', route: 'Guilin · Yangshuo · Longji optional', summary: 'Landschaftsorientierte Suedchina-Erweiterung mit Li-Fluss, Yangshuo und Reisterrassenoption.', galleryTitle: 'Karstberge, Flussfahrt und ruhiges Landtempo.' },
    'business-leisure-custom': { name: 'Business + Leisure nach Mass', eyebrow: 'Flexible MICE- und Geschaeftsreise-Erweiterung', duration: 'Flexibel / individuell', route: 'Peking · Shanghai · Chengdu · Wunschstaedte', summary: 'Massgeschneidert fur Delegationen, Meetings, Dolmetscher, Besuche und Kulturmodule.', galleryTitle: 'Geschaeftslogistik mit optionaler Kulturzeit.' },
    'private-family-china': { name: 'Private Familienreise China', eyebrow: '8-12 Tage familienfreundliche Privatreise', duration: '8-12 Tage / individuell', route: "Peking · Xi'an · Shanghai · Chengdu oder Guilin", summary: 'Private Familienroute mit langsamerem Tempo, passenden Hotels und kinderfreundlichen Guides.', galleryTitle: 'Klassisches China im Familientempo.' }
  },
  fr: {
    'tx-best-of-china-panda-13-day': {
      name: '13 jours Best of China et pandas',
      eyebrow: 'TXCH1202 · Chine classique + pandas en 13 jours',
      duration: '13 jours / 12 nuits',
      route: "Pekin · Xi'an · Guilin · Yangshuo · Chengdu · Shanghai",
      summary: "Route classique Pekin, Xi'an, Guilin, Yangshuo et Shanghai avec Chengdu pour les pandas et la culture du Sichuan.",
      galleryTitle: 'Capitales imperiales, karst, pandas et Shanghai.',
      facts: [
        { label: 'Code', value: 'TXCH1202' },
        { label: 'Depart', value: 'Pekin' },
        { label: 'Fin', value: 'Shanghai' },
        { label: 'Hotels', value: 'Options 4 ou 5 etoiles' },
        { label: 'Guide', value: 'Guides locaux prives' },
        { label: 'Transport', value: 'Train + vols interieurs' },
        { label: 'Ideal pour', value: 'Premier voyage en Chine avec ajout pandas' }
      ],
      days: [
        { day: 'Jour 1', city: 'Pekin', meals: '- / - / -', title: 'Arrivee a Pekin', summary: 'Accueil a l arrivee, transfert hotel et soiree legere pour recuperer.', sights: ['Transfert arrivee', 'Installation hotel'] },
        { day: 'Jour 2', city: 'Pekin', meals: 'B / L / -', title: 'Pekin imperial', summary: 'Tiananmen, Cite interdite, Jingshan et hutongs pour relier axe imperial et vie locale.', sights: ['Place Tiananmen', 'Cite interdite', 'Parc Jingshan', 'Balade hutong'], note: 'Les donnees de passeport sont requises pour les reservations.' },
        { day: 'Jour 3', city: 'Pekin', meals: 'B / L / -', title: 'Grande Muraille et jardins imperiaux', summary: 'Excursion a la Grande Muraille, puis Palais d ete ou Temple du Ciel selon le temps.', sights: ['Grande Muraille', 'Palais d ete option', 'Temple du Ciel option'] },
        { day: 'Jour 4', city: "Pekin vers Xi'an", meals: 'B / - / -', title: "Train rapide vers Xi'an", summary: "Train rapide vers Xi'an, puis muraille de la ville, quartier des tours ou quartier musulman.", sights: ['Train rapide', "Muraille de Xi'an", 'Quartier musulman'] },
        { day: 'Jour 5', city: "Xi'an", meals: 'B / L / -', title: 'Guerriers de terre cuite et ville Tang', summary: 'Visite approfondie des guerriers de terre cuite, puis Grande Pagode de l Oie Sauvage ou quartier Tang.', sights: ['Guerriers de terre cuite', 'Grande Pagode de l Oie Sauvage', 'Quartier Tang option'] },
        { day: 'Jour 6', city: "Xi'an vers Guilin", meals: 'B / - / -', title: 'Vol vers Guilin', summary: 'Vol interieur vers Guilin avec arrivee douce, balade au bord de l eau ou grotte optionnelle.', sights: ['Vol interieur', 'Balade au bord de la riviere', 'Grotte de la Flute de Roseau option'] },
        { day: 'Jour 7', city: 'Guilin vers Yangshuo', meals: 'B / L / -', title: 'Croisiere sur la riviere Li', summary: 'Croisiere vers Yangshuo, puis campagne, vieille ville ou activite legere.', sights: ['Croisiere riviere Li', 'Campagne de Yangshuo', 'West Street option'] },
        { day: 'Jour 8', city: 'Yangshuo ou Guilin', meals: 'B / L / -', title: 'Campagne karstique', summary: 'Velo, buggy, cours de cuisine, village ou rizieres de Longji selon la saison.', sights: ['Campagne de Yangshuo', 'Cours de cuisine option', 'Longji option'] },
        { day: 'Jour 9', city: 'Guilin vers Chengdu', meals: 'B / - / -', title: 'Vol vers Chengdu', summary: 'Arrivee a Chengdu avec Jinli, Kuanzhai Alley, maison de the ou cuisine Sichuan en option.', sights: ['Vol interieur', 'Jinli ou Kuanzhai Alley', 'Diner Sichuan option'] },
        { day: 'Jour 10', city: 'Chengdu', meals: 'B / L / -', title: 'Base des pandas et vie de Chengdu', summary: 'Base des pandas le matin, puis temple Wenshu, maison de the, Jinli ou opera Sichuan.', sights: ['Base des pandas de Chengdu', 'Temple Wenshu option', 'Maison de the', 'Opera Sichuan option'] },
        { day: 'Jour 11', city: 'Chengdu vers Shanghai', meals: 'B / - / -', title: 'Vol vers Shanghai', summary: 'Vol vers Shanghai; Bund, Nanjing Road ou croisiere Huangpu en option.', sights: ['Vol interieur', 'Le Bund', 'Nanjing Road'] },
        { day: 'Jour 12', city: 'Shanghai', meals: 'B / L / -', title: 'Ancien et nouveau Shanghai', summary: 'Yu Garden, vieille ville, musee de Shanghai ou Concession francaise, puis skyline.', sights: ['Yu Garden', 'Vieille ville', 'Musee de Shanghai option', 'Skyline Pudong'] },
        { day: 'Jour 13', city: 'Shanghai', meals: 'B / - / -', title: 'Depart de Shanghai', summary: 'Transfert prive vers l aeroport pour le depart ou une extension.', sights: ['Transfert aeroport'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-huanglong-dujiangyan-7-day': {
      name: '7 jours Chengdu, Jiuzhaigou, Huanglong et Dujiangyan',
      eyebrow: 'TXSC0601 · Nature et patrimoine du Sichuan',
      duration: '7 jours / 6 nuits',
      route: 'Chengdu · Jiuzhaigou · Huanglong · Dujiangyan · Chengdu',
      summary: 'Route Sichuan avec pandas, vallee de Jiuzhaigou, bassins de Huanglong et Dujiangyan.',
      galleryTitle: 'Pandas, lacs bleus, bassins de Huanglong et ancien systeme hydraulique.',
      facts: [
        { label: 'Code', value: 'TXSC0601' },
        { label: 'Depart', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu + Jiuzhaigou selon devis' },
        { label: 'Guide', value: 'Guide local anglophone' },
        { label: 'Transport', value: 'Vehicule prive + vol ou train selon saison' },
        { label: 'Ideal pour', value: 'Voyageurs visant Jiuzhaigou avec une base pandas a Chengdu' }
      ],
      days: [
        { day: 'Jour 1', city: 'Chengdu', meals: '- / - / -', title: 'Vol vers Chengdu', summary: 'Arrivee ou depart du plan de vol vers Chengdu, porte du Sichuan.', sights: ['Vol vers Chengdu', 'Preparation route'] },
        { day: 'Jour 2', city: 'Chengdu', meals: '- / - / -', title: 'Arrivee a Chengdu', summary: 'Accueil aeroport, transfert hotel et temps libre.', sights: ['Accueil aeroport', 'Installation hotel', 'Temps libre'] },
        { day: 'Jour 3', city: 'Chengdu vers Jiuzhaigou', meals: 'B / L / -', title: 'Base des pandas et transfert vers Jiuzhaigou', summary: 'Base des pandas le matin, puis transfert saisonnier vers Jiuzhaigou.', sights: ['Base des pandas de Chengdu', 'Transfert Jiuzhaigou', 'Installation hotel'] },
        { day: 'Jour 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Journee complete a Jiuzhaigou', summary: 'Route guidee dans la vallee avec lacs, cascades, forets et points de vue.', sights: ['Cascade Nuorilang', 'Lac aux Cinq Couleurs', 'Long Lake', 'Pearl Shoal'] },
        { day: 'Jour 5', city: 'Jiuzhaigou vers Huanglong vers Chengdu', meals: 'B / L / -', title: 'Huanglong et retour Chengdu', summary: 'Visite de Huanglong, bassins calcaires et paysages de montagne, puis retour a Chengdu.', sights: ['Huanglong Scenic Area', 'Bassins calcaires', 'Retour Chengdu'], note: 'Verifier altitude, meteo et temps de route avant confirmation.' },
        { day: 'Jour 6', city: 'Dujiangyan', meals: 'B / L / -', title: 'Dujiangyan et culture de Chengdu', summary: 'Dujiangyan Irrigation System, puis temple Wenshu, Kuanzhai Alley, Jinli ou maison de the.', sights: ['Dujiangyan Irrigation System', 'Temple Wenshu option', 'Kuanzhai Alley ou Jinli'] },
        { day: 'Jour 7', city: 'Chengdu', meals: 'B / - / -', title: 'Depart de Chengdu', summary: 'Transfert aeroport ou gare pour le depart ou extension.', sights: ['Transfert depart'] }
      ]
    },
    'tx-chengdu-giant-panda-4-day': {
      name: '4 jours Chengdu et pandas geants',
      eyebrow: 'TXCT0401 · City package pandas a Chengdu',
      duration: '4 jours / 3 nuits',
      route: 'Chengdu',
      summary: 'Court sejour a Chengdu avec base des pandas, maisons de the, vieilles rues et journee culture flexible.',
      galleryTitle: 'Pandas, rythme lent de Chengdu, Jinli et options musee ou the.',
      facts: [
        { label: 'Code', value: 'TXCT0401' },
        { label: 'Depart', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu 4 etoiles ou similaire' },
        { label: 'Guide', value: 'Guide local anglophone' },
        { label: 'Transport', value: 'Vehicule prive' },
        { label: 'Ideal pour', value: 'Courts sejours Chengdu et familles axees pandas' }
      ],
      days: [
        { day: 'Jour 1', city: 'Chengdu', meals: '- / - / -', title: 'Arrivee a Chengdu', summary: 'Accueil et transfert hotel, temps libre ou petite balade gourmande.', sights: ['Transfert arrivee', 'Installation hotel', 'Temps libre'] },
        { day: 'Jour 2', city: 'Chengdu', meals: 'B / L / -', title: 'Base des pandas et vieux Chengdu', summary: 'Base des pandas le matin, puis temple Wenshu, People’s Park, Jinli ou Kuanzhai Alley.', sights: ['Base des pandas de Chengdu', 'Temple Wenshu', 'Maison de the People’s Park', 'Jinli ou Kuanzhai Alley'] },
        { day: 'Jour 3', city: 'Chengdu', meals: 'B / L / -', title: 'Journee culture flexible', summary: 'Sanxingdui, Dujiangyan, route gourmande, cours de cuisine Sichuan ou opera Sichuan.', sights: ['Sanxingdui option', 'Dujiangyan option', 'Cuisine Sichuan option', 'Opera Sichuan option'] },
        { day: 'Jour 4', city: 'Chengdu', meals: 'B / - / -', title: 'Depart de Chengdu', summary: 'Transfert aeroport ou gare pour la suite du voyage.', sights: ['Transfert depart'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-mt-emei-8-day': {
      name: '8 jours Chengdu, Jiuzhaigou et Mt. Emei',
      eyebrow: 'TXSC0701 · Nature Sichuan et montagne sacree',
      duration: '8 jours / 7 nuits',
      route: 'Chengdu · Jiuzhaigou · Huanglong · Leshan · Mt. Emei · Chengdu',
      summary: 'Route Sichuan avec pandas de Chengdu, Jiuzhaigou, Huanglong, Grand Bouddha de Leshan et Mt. Emei.',
      galleryTitle: 'Pandas, eaux de Jiuzhaigou, Huanglong, Leshan et culture Emei.',
      facts: [
        { label: 'Code', value: 'TXSC0701' },
        { label: 'Depart', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu + Jiuzhaigou + Emei selon devis' },
        { label: 'Guide', value: 'Guide local anglophone' },
        { label: 'Transport', value: 'Vehicule prive + vol ou train selon saison' },
        { label: 'Ideal pour', value: 'Voyageurs combinant paysages du Sichuan et montagne bouddhiste' }
      ],
      days: [
        { day: 'Jour 1', city: 'Chengdu', meals: '- / - / -', title: 'Vol vers Chengdu', summary: 'Debut du plan de vol vers Chengdu.', sights: ['Vol vers Chengdu'] },
        { day: 'Jour 2', city: 'Chengdu', meals: '- / - / -', title: 'Arrivee a Chengdu', summary: 'Accueil aeroport, transfert hotel et journee legere.', sights: ['Accueil aeroport', 'Installation hotel'] },
        { day: 'Jour 3', city: 'Chengdu vers Jiuzhaigou', meals: 'B / L / -', title: 'Base des pandas et transfert Jiuzhaigou', summary: 'Visite de la base des pandas puis transfert saisonnier vers Jiuzhaigou.', sights: ['Base des pandas de Chengdu', 'Transfert Jiuzhaigou', 'Installation hotel'] },
        { day: 'Jour 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Vallee de Jiuzhaigou', summary: 'Journee complete avec lacs, cascades, routes forestieres et points de vue.', sights: ['Cascade Nuorilang', 'Lac aux Cinq Couleurs', 'Long Lake', 'Pearl Shoal'] },
        { day: 'Jour 5', city: 'Jiuzhaigou vers Huanglong vers Chengdu', meals: 'B / L / -', title: 'Huanglong et retour Chengdu', summary: 'Huanglong Scenic Area, bassins calcaires et montagne, puis retour Chengdu.', sights: ['Huanglong Scenic Area', 'Bassins calcaires', 'Retour Chengdu'], note: 'Verifier altitude, route et meteo avant operation.' },
        { day: 'Jour 6', city: 'Leshan vers Mt. Emei', meals: 'B / L / -', title: 'Grand Bouddha de Leshan et Mt. Emei', summary: 'Route vers Leshan pour le Grand Bouddha, puis Mt. Emei et hotel de montagne.', sights: ['Grand Bouddha de Leshan', 'Transfert Mt. Emei', 'Hotel de montagne'] },
        { day: 'Jour 7', city: 'Mt. Emei vers Chengdu', meals: 'B / L / -', title: 'Visite du Mt. Emei', summary: 'Mt. Emei, Golden Summit, monastere ou route basse selon meteo et forme physique, puis retour.', sights: ['Mt. Emei', 'Golden Summit option', 'Telepherique option', 'Retour Chengdu'] },
        { day: 'Jour 8', city: 'Chengdu', meals: 'B / - / -', title: 'Depart de Chengdu', summary: 'Transfert aeroport ou gare.', sights: ['Transfert depart'] }
      ]
    },
    'tx-chengdu-visa-free-3-day': {
      name: '72 heures Chengdu highlights',
      eyebrow: 'TXCT0301 · Stopover Chengdu 72 heures',
      duration: '3 jours / 2 nuits',
      route: 'Chengdu',
      summary: 'Route compacte Chengdu pour transit eligible, avec timing aeroport, pandas, vieux Chengdu et soiree food ou the.',
      galleryTitle: 'Fenetre courte a Chengdu autour des pandas et de la culture locale.',
      facts: [
        { label: 'Code', value: 'TXCT0301' },
        { label: 'Depart', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hotels', value: 'Chengdu 4 etoiles ou similaire' },
        { label: 'Guide', value: 'Guide local anglophone' },
        { label: 'Transport', value: 'Vehicule prive' },
        { label: 'Ideal pour', value: 'Courts stopovers Chengdu sans visa' }
      ],
      days: [
        { day: 'Jour 1', city: 'Chengdu', meals: '- / - / -', title: 'Transfert arrivee et orientation Chengdu', summary: 'Accueil aeroport ou gare, transfert hotel, puis Jinli ou Kuanzhai Alley si le temps le permet.', sights: ['Transfert arrivee', 'Installation hotel', 'Jinli ou Kuanzhai Alley option'] },
        { day: 'Jour 2', city: 'Chengdu', meals: 'B / L / -', title: 'Base des pandas et culture Chengdu', summary: 'Base des pandas le matin, puis temple Wenshu, maison de the, cuisine Sichuan ou opera.', sights: ['Base des pandas de Chengdu', 'Temple Wenshu option', 'Maison de the People’s Park', 'Opera Sichuan option'], note: 'Verifier documents de transit, passeport et regles d entree avant devis.' },
        { day: 'Jour 3', city: 'Chengdu', meals: 'B / - / -', title: 'Depart ou courte extension', summary: 'Transfert aeroport ou gare; Sanxingdui, Dujiangyan ou route gourmande possible si depart tardif.', sights: ['Transfert depart', 'Sanxingdui option', 'Dujiangyan option'] }
      ]
    },
    'beijing-xian-shanghai': {
      name: "Pekin-Xi'an-Shanghai",
      eyebrow: 'Circuit patrimoine Chine accompagne de 8 jours',
      duration: '8 jours / 7 nuits',
      route: "Pekin · Xi'an · Shanghai · Pekin",
      summary:
        'Route compacte pour un premier voyage en groupe international, avec Pekin imperial, guerriers de terre cuite et Shanghai classique.',
      galleryTitle: "Pekin imperial, Xi'an ancien et Shanghai au bord du fleuve."
    },
    'classic-first-time-china': { name: 'Circuit Chine classique premiere fois', eyebrow: 'Introduction privee Chine de 10 jours', duration: '10 jours / 9 nuits', route: "Pekin · Xi'an · Guilin · Shanghai", summary: 'Route privee pour premier voyage avec patrimoine, paysages et final a Shanghai.', galleryTitle: 'Patrimoine mondial, karst et final doux a Shanghai.' },
    'beijing-xian-heritage': { name: "Patrimoine Pekin + Xi'an", eyebrow: 'Route anciennes capitales de 6 jours', duration: '6 jours / 5 nuits', route: "Pekin · Xi'an", summary: 'Produit compact pour Grande Muraille, Cite interdite et guerriers de terre cuite.', galleryTitle: 'Deux anciennes capitales reliees par train rapide.' },
    'beijing-chengde-imperial': { name: 'Pekin + Chengde patrimoine imperial', eyebrow: 'Route imperiale Qing de 7 jours', duration: '7 jours / 6 nuits', route: 'Pekin · Chengde · Pekin', summary: 'Route imperiale centree sur Pekin avec Chengde, residence d ete des empereurs Qing, Cite interdite, Grande Muraille, hutongs, Palais d ete, Mountain Resort et temples exterieurs.', galleryTitle: 'Pekin imperial avec extension Chengde.' },
    'shanghai-discovery': { name: '5 jours Shanghai Discovery', eyebrow: 'Pause ville et water-town de 5 jours', duration: '5 jours / 4 nuits', route: 'Shanghai · Suzhou ou water town', summary: 'Route Shanghai facile avec Bund, vieille ville et excursion Jiangnan.', galleryTitle: 'Shanghai urbain avec extension Jiangnan.' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu, Chongqing & Zhangjiajie', eyebrow: '10 jours pandas, ville montagne et paysages Avatar', duration: '10 jours / 9 nuits', route: 'Chengdu · Chongqing · Zhangjiajie', summary: 'Route forte avec pandas, cuisine du Sichuan, vues de Chongqing et montagnes de Zhangjiajie.', galleryTitle: 'Pandas, hotpot, lumieres de fleuve et pics de gres.' },
    'beijing-zhangjiajie-shanghai': { name: 'Chine + nature: Pekin, Zhangjiajie & Shanghai', eyebrow: '9 jours ville classique et nature', duration: '9 jours / 8 nuits', route: 'Pekin · Zhangjiajie · Shanghai', summary: 'Alternative premier voyage avec Pekin, Shanghai et chapitre nature spectaculaire.', galleryTitle: 'Portes classiques avec centre nature intense.' },
    'guilin-yangshuo-landscape': { name: 'Echappee paysages de Guilin', eyebrow: '5 jours riviere Li et campagne de Yangshuo', duration: '5 jours / 4 nuits', route: 'Guilin · Yangshuo · Longji option', summary: 'Extension sud Chine centree paysages avec riviere Li, Yangshuo et option rizieres.', galleryTitle: 'Karst, croisiere et rythme campagne.' },
    'business-leisure-custom': { name: 'Business + loisirs sur mesure', eyebrow: 'Extension MICE et affaires flexible', duration: 'Flexible / sur mesure', route: 'Pekin · Shanghai · Chengdu · villes sur mesure', summary: 'Produit pour delegations, reunions, interpretes, visites fournisseurs et modules culturels.', galleryTitle: 'Logistique business avec temps culturel optionnel.' },
    'private-family-china': { name: 'Voyage prive famille en Chine', eyebrow: 'Itineraire prive famille de 8-12 jours', duration: '8-12 jours / sur mesure', route: "Pekin · Xi'an · Shanghai · Chengdu ou Guilin", summary: 'Route famille au rythme plus doux avec hotels pratiques et guides adaptes aux enfants.', galleryTitle: 'Chine classique ajustee au rythme famille.' }
  },
  es: {
    'tx-best-of-china-panda-13-day': {
      name: '13 dias Lo mejor de China y pandas',
      eyebrow: 'TXCH1202 · China clasica + pandas en 13 dias',
      duration: '13 dias / 12 noches',
      route: "Pekin · Xi'an · Guilin · Yangshuo · Chengdu · Shanghai",
      summary: "Ruta clasica Pekin, Xi'an, Guilin, Yangshuo y Shanghai con Chengdu para la Base de Pandas y cultura Sichuan.",
      galleryTitle: 'Capitales imperiales, paisaje karstico, pandas y Shanghai.',
      facts: [
        { label: 'Codigo', value: 'TXCH1202' },
        { label: 'Inicio', value: 'Pekin' },
        { label: 'Fin', value: 'Shanghai' },
        { label: 'Hoteles', value: 'Opciones 4 o 5 estrellas' },
        { label: 'Guia', value: 'Guias locales privados' },
        { label: 'Transporte', value: 'Tren + vuelos domesticos' },
        { label: 'Ideal para', value: 'Primer viaje a China con experiencia de pandas' }
      ],
      days: [
        { day: 'Dia 1', city: 'Pekin', meals: '- / - / -', title: 'Llegada a Pekin', summary: 'Recepcion a la llegada, traslado al hotel y noche ligera para descansar.', sights: ['Traslado de llegada', 'Check-in hotel'] },
        { day: 'Dia 2', city: 'Pekin', meals: 'B / L / -', title: 'Pekin imperial', summary: 'Tiananmen, Ciudad Prohibida, Jingshan y hutongs para conectar eje imperial y vida local.', sights: ['Plaza Tiananmen', 'Ciudad Prohibida', 'Parque Jingshan', 'Paseo por hutong'], note: 'Se requieren datos de pasaporte para las reservas.' },
        { day: 'Dia 3', city: 'Pekin', meals: 'B / L / -', title: 'Gran Muralla y jardines imperiales', summary: 'Excursion a la Gran Muralla, luego Palacio de Verano o Templo del Cielo segun tiempo.', sights: ['Gran Muralla', 'Palacio de Verano opcional', 'Templo del Cielo opcional'] },
        { day: 'Dia 4', city: "Pekin a Xi'an", meals: 'B / - / -', title: "Tren rapido a Xi'an", summary: "Tren rapido a Xi'an y primera visita con muralla, zona de torres o Barrio Musulman.", sights: ['Tren rapido', "Muralla de Xi'an", 'Barrio Musulman'] },
        { day: 'Dia 5', city: "Xi'an", meals: 'B / L / -', title: 'Guerreros de Terracota y ciudad Tang', summary: 'Visita profunda a los Guerreros de Terracota, luego Gran Pagoda del Ganso Salvaje o zona Tang.', sights: ['Guerreros de Terracota', 'Gran Pagoda del Ganso Salvaje', 'Zona Tang opcional'] },
        { day: 'Dia 6', city: "Xi'an a Guilin", meals: 'B / - / -', title: 'Vuelo a Guilin', summary: 'Vuelo domestico a Guilin con llegada suave, paseo junto al rio o cueva opcional.', sights: ['Vuelo domestico', 'Paseo junto al rio en Guilin', 'Cueva Reed Flute opcional'] },
        { day: 'Dia 7', city: 'Guilin a Yangshuo', meals: 'B / L / -', title: 'Crucero por el rio Li', summary: 'Crucero hacia Yangshuo, despues campo, casco antiguo o actividad ligera.', sights: ['Crucero rio Li', 'Campo de Yangshuo', 'West Street opcional'] },
        { day: 'Dia 8', city: 'Yangshuo o Guilin', meals: 'B / L / -', title: 'Campo karstico', summary: 'Bici, buggy, clase de cocina, aldea o terrazas Longji segun temporada.', sights: ['Campo de Yangshuo', 'Clase de cocina opcional', 'Longji opcional'] },
        { day: 'Dia 9', city: 'Guilin a Chengdu', meals: 'B / - / -', title: 'Vuelo a Chengdu', summary: 'Llegada a Chengdu con opcion Jinli, Kuanzhai Alley, casa de te o cena Sichuan.', sights: ['Vuelo domestico', 'Jinli o Kuanzhai Alley', 'Cena Sichuan opcional'] },
        { day: 'Dia 10', city: 'Chengdu', meals: 'B / L / -', title: 'Base de pandas y vida de Chengdu', summary: 'Base de pandas por la manana; templo Wenshu, casa de te, Jinli u opera Sichuan por la tarde.', sights: ['Base de Pandas de Chengdu', 'Templo Wenshu opcional', 'Casa de te', 'Opera Sichuan opcional'] },
        { day: 'Dia 11', city: 'Chengdu a Shanghai', meals: 'B / - / -', title: 'Vuelo a Shanghai', summary: 'Vuelo a Shanghai; noche en el Bund, Nanjing Road o crucero Huangpu opcional.', sights: ['Vuelo domestico', 'El Bund', 'Nanjing Road'] },
        { day: 'Dia 12', city: 'Shanghai', meals: 'B / L / -', title: 'Shanghai antiguo y moderno', summary: 'Yu Garden, casco antiguo, Museo de Shanghai o Concesion Francesa, luego skyline.', sights: ['Yu Garden', 'Casco antiguo', 'Museo de Shanghai opcional', 'Skyline de Pudong'] },
        { day: 'Dia 13', city: 'Shanghai', meals: 'B / - / -', title: 'Salida de Shanghai', summary: 'Traslado privado al aeropuerto para salida o extension.', sights: ['Traslado al aeropuerto'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-huanglong-dujiangyan-7-day': {
      name: '7 dias Chengdu, Jiuzhaigou, Huanglong y Dujiangyan',
      eyebrow: 'TXSC0601 · Naturaleza y patrimonio de Sichuan',
      duration: '7 dias / 6 noches',
      route: 'Chengdu · Jiuzhaigou · Huanglong · Dujiangyan · Chengdu',
      summary: 'Ruta Sichuan con pandas, valle de Jiuzhaigou, piscinas de Huanglong y Dujiangyan.',
      galleryTitle: 'Pandas, lagos azules, piscinas de Huanglong y antigua ingenieria hidraulica.',
      facts: [
        { label: 'Codigo', value: 'TXSC0601' },
        { label: 'Inicio', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hoteles', value: 'Chengdu + Jiuzhaigou segun cotizacion' },
        { label: 'Guia', value: 'Guia local en ingles' },
        { label: 'Transporte', value: 'Vehiculo privado + vuelo o tren segun temporada' },
        { label: 'Ideal para', value: 'Viajeros enfocados en Jiuzhaigou con base panda en Chengdu' }
      ],
      days: [
        { day: 'Dia 1', city: 'Chengdu', meals: '- / - / -', title: 'Vuelo a Chengdu', summary: 'Llegada o inicio del plan de vuelo hacia Chengdu, puerta de Sichuan.', sights: ['Vuelo a Chengdu', 'Preparacion de ruta'] },
        { day: 'Dia 2', city: 'Chengdu', meals: '- / - / -', title: 'Llegada a Chengdu', summary: 'Recepcion en aeropuerto, traslado al hotel y tiempo libre.', sights: ['Recepcion en aeropuerto', 'Check-in hotel', 'Tiempo libre'] },
        { day: 'Dia 3', city: 'Chengdu a Jiuzhaigou', meals: 'B / L / -', title: 'Base de pandas y traslado a Jiuzhaigou', summary: 'Base de pandas por la manana y traslado estacional hacia Jiuzhaigou.', sights: ['Base de Pandas de Chengdu', 'Traslado a Jiuzhaigou', 'Check-in hotel'] },
        { day: 'Dia 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Dia completo en Jiuzhaigou', summary: 'Ruta guiada por el valle con lagos, cascadas, bosque y miradores.', sights: ['Cascada Nuorilang', 'Lago de Cinco Colores', 'Long Lake', 'Pearl Shoal'] },
        { day: 'Dia 5', city: 'Jiuzhaigou a Huanglong a Chengdu', meals: 'B / L / -', title: 'Huanglong y regreso a Chengdu', summary: 'Visita a Huanglong, piscinas calcareas y montanas, luego regreso a Chengdu.', sights: ['Huanglong Scenic Area', 'Piscinas calcareas', 'Regreso a Chengdu'], note: 'Revisar altitud, clima y tiempos de carretera antes de confirmar.' },
        { day: 'Dia 6', city: 'Dujiangyan', meals: 'B / L / -', title: 'Dujiangyan y cultura de Chengdu', summary: 'Dujiangyan Irrigation System, luego templo Wenshu, Kuanzhai Alley, Jinli o casa de te.', sights: ['Dujiangyan Irrigation System', 'Templo Wenshu opcional', 'Kuanzhai Alley o Jinli'] },
        { day: 'Dia 7', city: 'Chengdu', meals: 'B / - / -', title: 'Salida de Chengdu', summary: 'Traslado al aeropuerto o estacion para salida o extension.', sights: ['Traslado de salida'] }
      ]
    },
    'tx-chengdu-giant-panda-4-day': {
      name: '4 dias Chengdu y pandas gigantes',
      eyebrow: 'TXCT0401 · Paquete ciudad panda Chengdu',
      duration: '4 dias / 3 noches',
      route: 'Chengdu',
      summary: 'Estancia corta en Chengdu con base de pandas, casas de te, calles antiguas y dia cultural flexible.',
      galleryTitle: 'Pandas, ritmo lento de Chengdu, Jinli y opciones de museo o te.',
      facts: [
        { label: 'Codigo', value: 'TXCT0401' },
        { label: 'Inicio', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hoteles', value: 'Chengdu 4 estrellas o similar' },
        { label: 'Guia', value: 'Guia local en ingles' },
        { label: 'Transporte', value: 'Vehiculo privado' },
        { label: 'Ideal para', value: 'Estancias cortas en Chengdu y familias enfocadas en pandas' }
      ],
      days: [
        { day: 'Dia 1', city: 'Chengdu', meals: '- / - / -', title: 'Llegada a Chengdu', summary: 'Recepcion y traslado al hotel, tiempo libre o paseo gastronomico sencillo.', sights: ['Traslado de llegada', 'Check-in hotel', 'Tiempo libre'] },
        { day: 'Dia 2', city: 'Chengdu', meals: 'B / L / -', title: 'Base de pandas y viejo Chengdu', summary: 'Base de pandas por la manana, luego templo Wenshu, casa de te en People’s Park, Jinli o Kuanzhai Alley.', sights: ['Base de Pandas de Chengdu', 'Templo Wenshu', 'Casa de te People’s Park', 'Jinli o Kuanzhai Alley'] },
        { day: 'Dia 3', city: 'Chengdu', meals: 'B / L / -', title: 'Dia cultural flexible en Chengdu', summary: 'Sanxingdui, Dujiangyan, ruta gastronomica, clase de cocina Sichuan u opera Sichuan.', sights: ['Sanxingdui opcional', 'Dujiangyan opcional', 'Cocina Sichuan opcional', 'Opera Sichuan opcional'] },
        { day: 'Dia 4', city: 'Chengdu', meals: 'B / - / -', title: 'Salida de Chengdu', summary: 'Traslado al aeropuerto o estacion para continuar el viaje.', sights: ['Traslado de salida'] }
      ]
    },
    'tx-chengdu-jiuzhaigou-mt-emei-8-day': {
      name: '8 dias Chengdu, Jiuzhaigou y Mt. Emei',
      eyebrow: 'TXSC0701 · Naturaleza Sichuan y montana sagrada',
      duration: '8 dias / 7 noches',
      route: 'Chengdu · Jiuzhaigou · Huanglong · Leshan · Mt. Emei · Chengdu',
      summary: 'Ruta Sichuan con pandas de Chengdu, Jiuzhaigou, Huanglong, Gran Buda de Leshan y Mt. Emei.',
      galleryTitle: 'Pandas, aguas de Jiuzhaigou, Huanglong, Leshan y cultura Emei.',
      facts: [
        { label: 'Codigo', value: 'TXSC0701' },
        { label: 'Inicio', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hoteles', value: 'Chengdu + Jiuzhaigou + Emei segun cotizacion' },
        { label: 'Guia', value: 'Guia local en ingles' },
        { label: 'Transporte', value: 'Vehiculo privado + vuelo o tren segun temporada' },
        { label: 'Ideal para', value: 'Viajeros que combinan paisaje de Sichuan y cultura budista de montana' }
      ],
      days: [
        { day: 'Dia 1', city: 'Chengdu', meals: '- / - / -', title: 'Vuelo a Chengdu', summary: 'Inicio del plan de vuelo hacia Chengdu.', sights: ['Vuelo a Chengdu'] },
        { day: 'Dia 2', city: 'Chengdu', meals: '- / - / -', title: 'Llegada a Chengdu', summary: 'Recepcion en aeropuerto, traslado al hotel y dia ligero.', sights: ['Recepcion en aeropuerto', 'Check-in hotel'] },
        { day: 'Dia 3', city: 'Chengdu a Jiuzhaigou', meals: 'B / L / -', title: 'Base de pandas y traslado a Jiuzhaigou', summary: 'Visita a la base de pandas y traslado estacional hacia Jiuzhaigou.', sights: ['Base de Pandas de Chengdu', 'Traslado a Jiuzhaigou', 'Check-in hotel'] },
        { day: 'Dia 4', city: 'Jiuzhaigou', meals: 'B / L / -', title: 'Valle de Jiuzhaigou', summary: 'Dia completo con lagos, cascadas, senderos de bosque y miradores.', sights: ['Cascada Nuorilang', 'Lago de Cinco Colores', 'Long Lake', 'Pearl Shoal'] },
        { day: 'Dia 5', city: 'Jiuzhaigou a Huanglong a Chengdu', meals: 'B / L / -', title: 'Huanglong y regreso a Chengdu', summary: 'Huanglong Scenic Area, piscinas calcareas y montana, luego regreso a Chengdu.', sights: ['Huanglong Scenic Area', 'Piscinas calcareas', 'Regreso a Chengdu'], note: 'Revisar altitud, carretera y clima antes de operar.' },
        { day: 'Dia 6', city: 'Leshan a Mt. Emei', meals: 'B / L / -', title: 'Gran Buda de Leshan y Mt. Emei', summary: 'Ruta a Leshan para el Gran Buda, luego Mt. Emei y hotel de montana.', sights: ['Gran Buda de Leshan', 'Traslado a Mt. Emei', 'Hotel de montana'] },
        { day: 'Dia 7', city: 'Mt. Emei a Chengdu', meals: 'B / L / -', title: 'Visita de Mt. Emei', summary: 'Mt. Emei, Golden Summit, monasterio o ruta baja segun clima y condicion fisica, luego regreso.', sights: ['Mt. Emei', 'Golden Summit opcional', 'Teleferico opcional', 'Regreso a Chengdu'] },
        { day: 'Dia 8', city: 'Chengdu', meals: 'B / - / -', title: 'Salida de Chengdu', summary: 'Traslado al aeropuerto o estacion.', sights: ['Traslado de salida'] }
      ]
    },
    'tx-chengdu-visa-free-3-day': {
      name: '72 horas Chengdu highlights',
      eyebrow: 'TXCT0301 · Stopover Chengdu 72 horas',
      duration: '3 dias / 2 noches',
      route: 'Chengdu',
      summary: 'Ruta compacta para transito elegible en Chengdu, con timing de aeropuerto, pandas, viejo Chengdu y noche de comida o te.',
      galleryTitle: 'Ventana corta en Chengdu alrededor de pandas y cultura local.',
      facts: [
        { label: 'Codigo', value: 'TXCT0301' },
        { label: 'Inicio', value: 'Chengdu' },
        { label: 'Fin', value: 'Chengdu' },
        { label: 'Hoteles', value: 'Chengdu 4 estrellas o similar' },
        { label: 'Guia', value: 'Guia local en ingles' },
        { label: 'Transporte', value: 'Vehiculo privado' },
        { label: 'Ideal para', value: 'Stopovers cortos sin visa en Chengdu' }
      ],
      days: [
        { day: 'Dia 1', city: 'Chengdu', meals: '- / - / -', title: 'Traslado de llegada y orientacion Chengdu', summary: 'Recepcion en aeropuerto o estacion, traslado al hotel y Jinli o Kuanzhai Alley si el tiempo permite.', sights: ['Traslado de llegada', 'Check-in hotel', 'Jinli o Kuanzhai Alley opcional'] },
        { day: 'Dia 2', city: 'Chengdu', meals: 'B / L / -', title: 'Base de pandas y cultura Chengdu', summary: 'Base de pandas por la manana, luego templo Wenshu, casa de te, cocina Sichuan u opera.', sights: ['Base de Pandas de Chengdu', 'Templo Wenshu opcional', 'Casa de te People’s Park', 'Opera Sichuan opcional'], note: 'Verificar documentos de transito, pasaporte y reglas de entrada antes de cotizar.' },
        { day: 'Dia 3', city: 'Chengdu', meals: 'B / - / -', title: 'Salida o extension corta', summary: 'Traslado al aeropuerto o estacion; Sanxingdui, Dujiangyan o ruta gastronomica si la salida es tarde.', sights: ['Traslado de salida', 'Sanxingdui opcional', 'Dujiangyan opcional'] }
      ]
    },
    'beijing-xian-shanghai': {
      name: "Pekin-Xi'an-Shanghai",
      eyebrow: 'Tour patrimonial acompanado de 8 dias',
      duration: '8 dias / 7 noches',
      route: "Pekin · Xi'an · Shanghai · Pekin",
      summary:
        'Ruta compacta para grupos internacionales primerizos, con Pekin imperial, Guerreros de Terracota y visitas clasicas de Shanghai.',
      galleryTitle: "Pekin imperial, Xi'an antiguo y Shanghai junto al rio."
    },
    'classic-first-time-china': { name: 'Tour clasico primera vez en China', eyebrow: 'Introduccion privada a China de 10 dias', duration: '10 dias / 9 noches', route: "Pekin · Xi'an · Guilin · Shanghai", summary: 'Ruta privada para primer viaje con patrimonio, paisaje y final pulido en Shanghai.', galleryTitle: 'Patrimonio mundial, karst y final suave en Shanghai.' },
    'beijing-xian-heritage': { name: "Patrimonio Pekin + Xi'an", eyebrow: 'Ruta de antiguas capitales de 6 dias', duration: '6 dias / 5 noches', route: "Pekin · Xi'an", summary: 'Producto compacto para Gran Muralla, Ciudad Prohibida y Guerreros de Terracota.', galleryTitle: 'Dos antiguas capitales con conexion de tren rapido.' },
    'beijing-chengde-imperial': { name: 'Pekin + Chengde patrimonio imperial', eyebrow: 'Ruta imperial Qing de 7 dias', duration: '7 dias / 6 noches', route: 'Pekin · Chengde · Pekin', summary: 'Ruta imperial centrada en Pekin con Chengde, retiro de verano de los emperadores Qing, Ciudad Prohibida, Gran Muralla, hutongs, Palacio de Verano, Mountain Resort y templos exteriores.', galleryTitle: 'Pekin imperial con extension Chengde.' },
    'shanghai-discovery': { name: '5 dias Shanghai Discovery', eyebrow: 'Escapada ciudad y water-town de 5 dias', duration: '5 dias / 4 noches', route: 'Shanghai · Suzhou o water town', summary: 'Ruta facil de Shanghai con Bund, ciudad antigua y excursion Jiangnan.', galleryTitle: 'Shanghai urbano con excursion Jiangnan.' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu, Chongqing y Zhangjiajie', eyebrow: '10 dias pandas, ciudad montana y paisajes Avatar', duration: '10 dias / 9 noches', route: 'Chengdu · Chongqing · Zhangjiajie', summary: 'Ruta intensa con pandas, comida Sichuan, vistas de Chongqing y montanas de Zhangjiajie.', galleryTitle: 'Pandas, hotpot, luces de rio y picos de arenisca.' },
    'beijing-zhangjiajie-shanghai': { name: 'China + naturaleza: Pekin, Zhangjiajie y Shanghai', eyebrow: '9 dias de ciudades clasicas y naturaleza', duration: '9 dias / 8 noches', route: 'Pekin · Zhangjiajie · Shanghai', summary: 'Alternativa para primer viaje con Pekin, Shanghai y un capitulo natural dramatico.', galleryTitle: 'Puertas clasicas con centro natural intenso.' },
    'guilin-yangshuo-landscape': { name: 'Escapada paisajistica Guilin', eyebrow: '5 dias rio Li y campo de Yangshuo', duration: '5 dias / 4 noches', route: 'Guilin · Yangshuo · Longji opcional', summary: 'Extension del sur de China centrada en paisaje con rio Li, Yangshuo y arrozales opcionales.', galleryTitle: 'Karst, crucero fluvial y ritmo rural.' },
    'business-leisure-custom': { name: 'Negocios + ocio a medida', eyebrow: 'Extension flexible MICE y negocios', duration: 'Flexible / a medida', route: 'Pekin · Shanghai · Chengdu · ciudades a medida', summary: 'Producto para delegaciones, reuniones, interpretes, visitas a proveedores y modulos culturales.', galleryTitle: 'Logistica de negocios con tiempo cultural opcional.' },
    'private-family-china': { name: 'Tour privado familiar China', eyebrow: 'Itinerario privado familiar de 8-12 dias', duration: '8-12 dias / a medida', route: "Pekin · Xi'an · Shanghai · Chengdu o Guilin", summary: 'Ruta familiar privada con ritmo mas lento, hoteles practicos y guias para ninos.', galleryTitle: 'China clasica ajustada al ritmo familiar.' }
  }
}

const attractionTranslations: Partial<Record<Locale, Record<string, Partial<Attraction>>>> = {
  zh: {
    'Great Wall': { city: '北京', name: '长城', summary: '适合安排私家车接送、弹性徒步节奏和相对安静的修缮段。' },
    'Terracotta Army': { city: '西安', name: '兵马俑', summary: '通过导游讲解理解秦帝国雄心、陶俑工艺和考古现场规模。' },
    'Big Wild Goose Pagoda': { city: '西安', name: '大雁塔', summary: '串联唐代佛教文化、城市广场和西安夜游片区的地标。' },
    "Xi'an City Wall": { city: '西安', name: '西安城墙', summary: '适合骑行、日落观景，并直观理解古都城市格局。' },
    'Great Tang All Day Mall': { city: '西安', name: '大唐不夜城', summary: '唐风夜游街区，适合灯光、街头表演、晚餐和轻松拍照。' },
    'The Bund': { city: '上海', name: '外滩', summary: '黄浦江两岸同时呈现历史建筑和浦东现代天际线。' },
    'Panda Base': { city: '成都', name: '熊猫基地', summary: '适合清晨安排的大熊猫、小熊猫和保护科普体验。' },
    'Li River': { city: '桂林', name: '漓江', summary: '穿行桂林与阳朔喀斯特山水的一日慢节奏景观路线。' },
    'West Lake': { city: '杭州', name: '西湖', summary: '由诗词、堤岸、寺塔和园林共同塑造的湖山文化景观。' },
    'Mogao Caves': { city: '敦煌', name: '莫高窟', summary: '丝路佛教艺术核心景点，需按预约窗口安排洞窟、壁画和塑像讲解。' },
    'Crescent Moon Spring': { city: '敦煌', name: '月牙泉', summary: '鸣沙山下的沙漠绿洲，适合傍晚光线、沙丘景观和轻松收尾。' },
    'Hongya Cave': { city: '重庆', name: '洪崖洞', summary: '山城夜景代表片区，可串联解放碑、江边步道和桥梁视角。' },
    'Three Gorges': { city: '重庆', name: '三峡', summary: '从重庆开启长江游轮和峡谷风光线路时最具代表性的经典景观。' },
    'Longmen Grottoes': { city: '洛阳', name: '龙门石窟', summary: '沿伊河展开的佛教艺术线路，适合配导游理解洞窟、龛像和大型石刻。' },
    'Shaolin Temple': { city: '洛阳', name: '少林寺', summary: '嵩山一日延伸，结合禅宗、武术文化和山地景观。' },
    'White Horse Temple': { city: '洛阳', name: '白马寺', summary: '面向中国佛教早期历史和寺院院落节奏的洛阳文化停留。' }
  },
  de: {
    'Great Wall': { city: 'Peking', name: 'Grosse Mauer', summary: 'Am besten mit Privattransfer, flexiblem Wandertempo und ruhigerem restauriertem Abschnitt.' },
    'Terracotta Army': { city: "Xi'an", name: 'Terrakotta-Armee' },
    'Big Wild Goose Pagoda': { city: "Xi'an", name: 'Grosse Wildganspagode' },
    "Xi'an City Wall": { city: "Xi'an", name: 'Stadtmauer von Xi an' },
    'Great Tang All Day Mall': { city: "Xi'an", name: 'Great Tang All Day Mall' },
    'The Bund': { city: 'Shanghai', name: 'Bund' },
    'Panda Base': { city: 'Chengdu', name: 'Panda-Basis' },
    'Li River': { city: 'Guilin', name: 'Li-Fluss' },
    'West Lake': { city: 'Hangzhou', name: 'Westsee' },
    'Mogao Caves': { city: 'Dunhuang', name: 'Mogao-Grotten' },
    'Crescent Moon Spring': { city: 'Dunhuang', name: 'Crescent Moon Spring' },
    'Hongya Cave': { city: 'Chongqing', name: 'Hongya Cave' },
    'Three Gorges': { city: 'Chongqing', name: 'Drei Schluchten' },
    'Longmen Grottoes': { city: 'Luoyang', name: 'Longmen-Grotten' },
    'Shaolin Temple': { city: 'Luoyang', name: 'Shaolin-Tempel' },
    'White Horse Temple': { city: 'Luoyang', name: 'White Horse Temple' }
  },
  fr: {
    'Great Wall': { city: 'Pekin', name: 'Grande Muraille', summary: 'Ideal avec transfert prive, rythme de marche flexible et section restauree plus calme.' },
    'Terracotta Army': { city: "Xi'an", name: 'Armee de terre cuite' },
    'Big Wild Goose Pagoda': { city: "Xi'an", name: 'Grande pagode de l oie sauvage' },
    "Xi'an City Wall": { city: "Xi'an", name: 'Remparts de Xi an' },
    'Great Tang All Day Mall': { city: "Xi'an", name: 'Great Tang All Day Mall' },
    'The Bund': { city: 'Shanghai', name: 'Le Bund' },
    'Panda Base': { city: 'Chengdu', name: 'Base des pandas' },
    'Li River': { city: 'Guilin', name: 'Riviere Li' },
    'West Lake': { city: 'Hangzhou', name: 'Lac de l Ouest' },
    'Mogao Caves': { city: 'Dunhuang', name: 'Grottes de Mogao' },
    'Crescent Moon Spring': { city: 'Dunhuang', name: 'Source du Croissant de Lune' },
    'Hongya Cave': { city: 'Chongqing', name: 'Hongya Cave' },
    'Three Gorges': { city: 'Chongqing', name: 'Trois Gorges' },
    'Longmen Grottoes': { city: 'Luoyang', name: 'Grottes de Longmen' },
    'Shaolin Temple': { city: 'Luoyang', name: 'Temple Shaolin' },
    'White Horse Temple': { city: 'Luoyang', name: 'Temple du Cheval blanc' }
  },
  es: {
    'Great Wall': { city: 'Pekin', name: 'Gran Muralla', summary: 'Mejor con traslado privado, ritmo flexible de caminata y una seccion restaurada mas tranquila.' },
    'Terracotta Army': { city: "Xi'an", name: 'Guerreros de Terracota' },
    'Big Wild Goose Pagoda': { city: "Xi'an", name: 'Gran Pagoda del Ganso Salvaje' },
    "Xi'an City Wall": { city: "Xi'an", name: 'Muralla de Xi an' },
    'Great Tang All Day Mall': { city: "Xi'an", name: 'Great Tang All Day Mall' },
    'The Bund': { city: 'Shanghai', name: 'El Bund' },
    'Panda Base': { city: 'Chengdu', name: 'Base de pandas' },
    'Li River': { city: 'Guilin', name: 'Rio Li' },
    'West Lake': { city: 'Hangzhou', name: 'Lago del Oeste' },
    'Mogao Caves': { city: 'Dunhuang', name: 'Cuevas de Mogao' },
    'Crescent Moon Spring': { city: 'Dunhuang', name: 'Manantial de la Luna Creciente' },
    'Hongya Cave': { city: 'Chongqing', name: 'Hongya Cave' },
    'Three Gorges': { city: 'Chongqing', name: 'Tres Gargantas' },
    'Longmen Grottoes': { city: 'Luoyang', name: 'Grutas de Longmen' },
    'Shaolin Temple': { city: 'Luoyang', name: 'Templo Shaolin' },
    'White Horse Temple': { city: 'Luoyang', name: 'Templo del Caballo Blanco' }
  }
}

const attractionDetailTranslations: Partial<Record<Locale, Record<string, Partial<AttractionDetail>>>> = {
  zh: {
    'great-wall': {
      eyebrow: '世界遗产长城路线',
      heroTitle: '北京周边长城',
      intro: '长城适合作为北京半日到一日的核心体验：它不只是拍照点，而是一条由敌楼、山脊和修缮墙体共同讲述边防体系的景观路线。',
      facts: [
        { label: '区域', value: '北京郊区' },
        { label: '建议节奏', value: '半日到一日' },
        { label: '适合', value: '首次访华、历史兴趣、轻徒步' }
      ],
      whyGo: [
        { title: '具有国家象征性', text: 'UNESCO 将长城视为古代中国文明的重要见证，并强调其在中国历史中的象征意义。' },
        { title: '段落选择很关键', text: '不同长城段在客流、步行强度、缆车条件、视野和市区车程上差异很大。' },
        { title: '适合支撑北京线路', text: '长城适合与北京帝王文化搭配，但不宜和长时间宫殿、博物馆参观挤在同一天。' }
      ],
      visitFlow: [
        '早餐后从北京市区出发，携带护照、饮水和适合天气的衣物。',
        '如果团队更看重景观和步行体验，优先选择相对安静、修缮较好的段落。',
        '返程可安排较晚午餐或轻量街区停留，让晚上保持弹性。'
      ],
      practicalNotes: ['不建议安排在长途飞行抵达当天。', '报价前确认缆车、索道或徒步期待。', '长城的风和台阶比地图距离更影响体感。'],
      imageCredit: '图片来自 Unsplash，并沿用当前官网已有媒体配置。'
    },
    'terracotta-army': {
      eyebrow: '秦代考古与帝国史',
      heroTitle: '秦始皇兵马俑',
      intro: '兵马俑是西安最重要的首次访华景点之一，它连接秦始皇陵、秦帝国制度、陶俑工艺和中国第一个统一王朝的历史叙事。',
      facts: [
        { label: '区域', value: '西安临潼区' },
        { label: '建议节奏', value: '半日，建议配导游' },
        { label: '适合', value: '古代史、考古、经典线路' }
      ],
      whyGo: [
        { title: '需要解释的考古现场', text: '在导游讲解下，俑坑、青铜器、军阵、修复方式和陵寝制度会比单纯参观更清晰。' },
        { title: '世界遗产价值突出', text: 'UNESCO 强调兵马俑、陶马和青铜车马在技术与艺术上的重要性。' },
        { title: '古都章节紧凑有力', text: '西安能在北京和上海之间提供高密度的古代中国体验，不需要过长绕行。' }
      ],
      visitFlow: [
        '优先参观主俑坑，避开客流高峰和疲劳时段。',
        '结合军阶、面部差异、兵器、修复和陵区布局进行讲解。',
        '下午可搭配大雁塔、城墙或回民街美食体验。'
      ],
      practicalNotes: ['不要把兵马俑压缩成快速拍照点。', '节假日和团队高峰期室内人流较大。', '导游能显著提升对陵区体系的理解。'],
      imageCredit: '图片来自 Unsplash，并沿用当前官网已有媒体配置。'
    },
    'big-wild-goose-pagoda': {
      eyebrow: '唐代佛教文化地标',
      heroTitle: '大雁塔',
      intro: '大雁塔是西安城市游览中识别度很高的唐代地标，能把佛教文化传播、寺院空间、城市广场和夜游片区自然串联起来。',
      facts: [
        { label: '区域', value: '西安雁塔区' },
        { label: '建议节奏', value: '下午至傍晚' },
        { label: '适合', value: '唐文化、城市游览、亲子节奏' }
      ],
      whyGo: [
        { title: '唐代长安信号清晰', text: '大雁塔能让游客快速建立对唐代长安、佛教交流和西安城市气质的直观印象。' },
        { title: '组合方便', text: '可接在博物馆、城墙或兵马俑之后，不需要额外拉长转场。' },
        { title: '夜游价值高', text: '周边广场和唐风街区适合安排轻量夜游，平衡白天较重的历史参观。' }
      ],
      visitFlow: [
        '放在较重的白天行程之后，控制节奏不要过赶。',
        '结合寺院和塔体讲解唐长安、佛教传播和玄奘相关背景。',
        '傍晚可继续周边广场或唐风夜游片区，并就近安排晚餐。'
      ],
      practicalNotes: ['夜间人流需提前评估。', '不要只作为拍照点，应给出唐文化背景。', '如果当天已去临潼，晚间安排要更轻。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网媒体配置。'
    },
    'xian-city-wall': {
      eyebrow: '古都城墙路线',
      heroTitle: '西安城墙',
      intro: '西安城墙适合用一到两小时打开古都空间感：城门、墙体、护城河、骑行和日落视角，都能让游客直观理解老城格局。',
      facts: [
        { label: '区域', value: '西安市中心' },
        { label: '建议节奏', value: '1-2 小时' },
        { label: '适合', value: '城市格局、骑行、日落观景' }
      ],
      whyGo: [
        { title: '城市结构一目了然', text: '城墙比普通街区更容易帮助游客理解西安古城的尺度和方向。' },
        { title: '活动强度可调', text: '可以短距离步行、局部骑行，也可以只安排城门和观景点，适配不同年龄客人。' },
        { title: '衔接晚间顺畅', text: '下午上城墙后，可自然接钟鼓楼、回民街或老城晚餐。' }
      ],
      visitFlow: [
        '根据酒店位置和团队体力选择城门与登墙点。',
        '预留墙上拍照和老城视角时间。',
        '结束后接回民街、钟楼片区或晚餐，不宜再叠加太重的室内参观。'
      ],
      practicalNotes: ['骑行受天气和客流影响。', '夏季正午墙上暴晒明显。', '老年客人需提前确认楼梯、电梯和步行预期。'],
      imageCredit: '图片来自腾轩航旅本地媒体。'
    },
    'datang-everbright-city': {
      eyebrow: '唐风夜游街区',
      heroTitle: '大唐不夜城',
      intro: '大唐不夜城适合放在西安傍晚到夜间行程里，用唐风街区、灯光装置、街头表演和就近晚餐承接白天较重的历史参观。',
      facts: [
        { label: '区域', value: '西安雁塔区' },
        { label: '建议节奏', value: '傍晚至夜间步行' },
        { label: '适合', value: '夜景拍照、唐风氛围、亲子和轻松晚间行程' }
      ],
      whyGo: [
        { title: '夜游价值明确', text: '白天走完兵马俑、城墙或博物馆后，大唐不夜城能让节奏变轻，同时保留西安辨识度。' },
        { title: '唐风信号直观', text: '灯光、街区、演艺氛围和旅拍场景能让游客快速感知唐代长安意象。' },
        { title: '组合方便', text: '它靠近大雁塔片区，适合和晚餐、广场散步、轻量夜游连在一起。' }
      ],
      visitFlow: [
        '傍晚从大雁塔或附近晚餐开始，之后步行进入街区。',
        '预留灯光、街头表演和拍照时间，不要把夜游排得过紧。',
        '适合接在兵马俑、城墙或博物馆之后，作为当天较轻的收尾。'
      ],
      practicalNotes: ['晚间和节假日人流较密。', '步行街区接送点要提前确认。', '如承诺具体演出，需另查当天安排和天气。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网媒体配置。'
    },
    'the-bund': {
      eyebrow: '滨江天际线与建筑',
      heroTitle: '上海外滩',
      intro: '外滩是理解上海最直接的视觉场景：黄浦江一侧是历史建筑立面，另一侧是浦东现代天际线，城市的过去与现在同框出现。',
      facts: [
        { label: '区域', value: '上海黄浦江沿岸' },
        { label: '建议节奏', value: '傍晚到夜间' },
        { label: '适合', value: '入境门户、建筑、夜景' }
      ],
      whyGo: [
        { title: '一眼看见上海层次', text: '滨江步道能同时呈现上海的贸易历史、国际建筑和当代城市天际线。' },
        { title: '安排弹性高', text: '可作为抵达后的轻量散步，也可做建筑讲解路线或黄浦江夜游。' },
        { title: '容易组合线路', text: '外滩可自然连接南京路、豫园、陆家嘴视角和黄浦江游船。' }
      ],
      visitFlow: [
        '日落前抵达，先看建筑细节和柔和光线。',
        '如需拍摄天际线，可安排过江视角或黄浦江游船。',
        '晚间继续南京路、豫园周边或晚餐，不必把活动排得过满。'
      ],
      practicalNotes: ['冬季江边风大，夜景游览要注意保暖。', '晚间高峰需关注团队集合和走失风险。', '如增加水上交通，应选择正规游船或轮渡。'],
      imageCredit: '图片来自腾轩航旅本地媒体。'
    },
    'panda-base': {
      eyebrow: '成都野生动物与保护',
      heroTitle: '成都熊猫基地',
      intro: '熊猫基地是成都轻松且辨识度很高的体验，可结合大熊猫、小熊猫、科研保护和科普参观，再回到城市里的茶馆与美食节奏。',
      facts: [
        { label: '区域', value: '四川成都' },
        { label: '建议节奏', value: '清晨半日' },
        { label: '适合', value: '家庭、动物、成都停留' }
      ],
      whyGo: [
        { title: '清晨体验更好', text: '早间参观通常更符合熊猫活动节奏，也能把下午留给成都慢节奏体验。' },
        { title: '有保护和科普背景', text: '官方熊猫基地围绕大熊猫繁育、科研、教育和公众参观展开。' },
        { title: '适合亲子和多代同游', text: '它比宫殿、城墙和考古现场更轻松，能平衡长线行程强度。' }
      ],
      visitFlow: [
        '尽早入园，优先参观核心熊猫区域。',
        '为家庭团队预留休息、饮水和慢行时间。',
        '返回市区后安排茶馆、川菜或宽窄巷子等轻量活动。'
      ],
      practicalNotes: ['不同展区和时段不保证都能看到活跃状态。', '炎热季节注意遮阳、饮水和体力分配。', '不要围绕近距离接触熊猫类体验设计行程。'],
      imageCredit: '图片来自 Unsplash，并沿用当前官网已有媒体配置。'
    },
    'li-river': {
      eyebrow: '喀斯特山水路线',
      heroTitle: '桂林漓江',
      intro: '漓江是经典中国线路中的山水转换段，让游客从城市参观进入桂林和阳朔的喀斯特峰林、滨水村落和慢节奏乡野体验。',
      facts: [
        { label: '区域', value: '桂林至阳朔' },
        { label: '建议节奏', value: '一日山水路线' },
        { label: '适合', value: '摄影、自然、家庭友好节奏' }
      ],
      whyGo: [
        { title: '景观转换明显', text: '喀斯特山峰和河湾能在北京、西安、上海或成都之后形成鲜明对比。' },
        { title: '应按区域规划', text: '较好的体验通常把桂林和阳朔作为一个山水区域，而不只是城市住宿点。' },
        { title: '活动强度可调', text: '游船、观景点、轻骑行、村落路线和乡村住宿都能按年龄与体力调整。' }
      ],
      visitFlow: [
        '以漓江线路作为当天主轴，并预留天气与水位弹性。',
        '如果团队想放慢节奏，可把当天结束点放在阳朔。',
        '时间充裕时再增加龙脊梯田或乡村慢游。'
      ],
      practicalNotes: ['天气会明显影响景观气氛和拍摄效果。', '阳朔通常值得至少住一晚，避免过度赶路。', '报价前确认船、车和行李衔接。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网已有媒体配置。'
    },
    'west-lake': {
      eyebrow: '诗意湖泊与园林文化',
      heroTitle: '杭州西湖',
      intro: '西湖是杭州最具代表性的文化景观，堤、岛、寺、塔、园林和群山共同把湖边行走变成华东线路中很柔和的一段。',
      facts: [
        { label: '区域', value: '浙江杭州' },
        { label: '建议节奏', value: '一整天慢游' },
        { label: '适合', value: '上海延伸、园林、茶文化' }
      ],
      whyGo: [
        { title: '世界遗产文化景观', text: 'UNESCO 说明西湖自 9 世纪以来启发诗人、学者和艺术家，并影响中国以外的园林设计。' },
        { title: '适合连接上海', text: '高铁交通让杭州成为上海之后优雅、放松的华东延伸。' },
        { title: '越慢越好', text: '湖边漫步、寺庙、龙井茶村和晚餐，比一次性打卡所有景点更合适。' }
      ],
      visitFlow: [
        '上午先走一段湖边或堤岸，避开交通和暑热高峰。',
        '根据兴趣搭配灵隐寺或龙井茶村。',
        '为拍照、天气变化和湖边用餐预留时间。'
      ],
      practicalNotes: ['不要把西湖变成过多点位的清单。', '春季茶季和秋季天气尤其适合。', '如果游客想要更柔和的华东节奏，建议杭州过夜。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网已有媒体配置。'
    },
    'mogao-caves': {
      eyebrow: '丝路佛教艺术',
      heroTitle: '莫高窟',
      intro: '莫高窟是敦煌最核心的文化遗产景点，洞窟壁画、彩塑、藏经洞故事和丝绸之路交流背景，需要预约窗口和导游讲解共同支撑。',
      facts: [
        { label: '区域', value: '甘肃敦煌' },
        { label: '建议节奏', value: '半日，按预约时段进入' },
        { label: '适合', value: '丝路历史、佛教艺术、世界遗产文化' }
      ],
      whyGo: [
        { title: '世界遗产核心', text: '莫高窟是很多客人加入敦煌的主要文化理由，让西北线路不只是沙漠景观，也有高密度艺术史内容。' },
        { title: '讲解非常关键', text: '洞窟顺序、壁画主题、彩塑、保护限制和丝路背景，需要通过导游才能形成完整理解。' },
        { title: '必须提前规划', text: '门票、限流、开放窗口和接驳时间决定当天节奏，不能当作临时加点。' }
      ],
      visitFlow: [
        '先确认莫高窟预约时段，再锁定敦煌当天其他行程。',
        '把洞窟参观作为当天主要文化章节，预留讲解、接驳和缓冲时间。',
        '天气和体力允许时，下午或傍晚再接鸣沙山月牙泉。'
      ],
      practicalNotes: ['不建议安排在晚到后的匆忙半天。', '洞窟拍摄和开放范围会因保护要求受限。', '夏季要注意高温、补水和接驳节奏。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网媒体配置。'
    },
    'crescent-moon-spring': {
      eyebrow: '沙漠绿洲与鸣沙山',
      heroTitle: '月牙泉',
      intro: '月牙泉是敦煌最直观的沙漠景观对比：一弯绿洲嵌在鸣沙山沙丘之间，适合安排在傍晚，以柔和光线、沙丘视角和轻松节奏收尾。',
      facts: [
        { label: '区域', value: '敦煌鸣沙山' },
        { label: '建议节奏', value: '下午至日落' },
        { label: '适合', value: '沙漠景观、摄影、家庭友好收尾' }
      ],
      whyGo: [
        { title: '视觉辨识度强', text: '月牙形泉水和周边沙丘能让游客快速感受到敦煌的沙漠绿洲气质。' },
        { title: '适合接在莫高窟之后', text: '莫高窟偏文化和室内讲解，月牙泉则提供更放松的户外景观段。' },
        { title: '光线和天气影响大', text: '傍晚光线、风沙、高温和客流会明显影响体验，需要按当天条件调整。' }
      ],
      visitFlow: [
        '避开最热时段，选择下午后段进入。',
        '把鸣沙山视角和月牙泉区域作为一个整体景观点来安排。',
        '结束后可接夜市或简单晚餐，不要再叠加太重的文化参观。'
      ],
      practicalNotes: ['沙地、风和高温会影响舒适度和设备。', '家庭和长者要提前确认步行距离。', '不要承诺固定日落效果，应看当天风沙和天气。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网媒体配置。'
    },
    'longmen-grottoes': {
      eyebrow: '佛教艺术世界遗产',
      heroTitle: '龙门石窟',
      intro: '龙门石窟是洛阳最核心的遗产景点，伊河两岸的洞窟、龛像、题记和大型佛教石刻共同呈现皇家赞助与宗教艺术。',
      facts: [
        { label: '区域', value: '河南洛阳' },
        { label: '建议节奏', value: '半日，建议配导游' },
        { label: '适合', value: '佛教艺术、古都文化、遗产线路' }
      ],
      whyGo: [
        { title: '世界遗产核心', text: 'UNESCO 认可龙门石窟在佛教石窟艺术和北魏至唐代艺术成就上的突出价值。' },
        { title: '讲解价值高', text: '导游能把洞窟序列、供养题记、造像风格和奉先寺大像龛串联起来。' },
        { title: '河南线路支点', text: '龙门让洛阳成为西安、郑州和华中遗产线路之间很有价值的一站。' }
      ],
      visitFlow: [
        '优先安排西山石窟主线，利用较好的体力和光线。',
        '通过重点洞窟和造像群讲解佛教图像、朝代背景和保护限制。',
        '预留伊河两岸视角，不要参观完重点点位就立刻离开。'
      ],
      practicalNotes: ['景区步行和台阶较多，鞋子要舒适。', '夏季石壁和开阔区域较晒，上午或傍晚体验更好。', '不要把龙门和少林寺压缩得过紧，除非客人接受较长车程日。'],
      imageCredit: '图片来自腾轩航旅本地媒体。'
    },
    'shaolin-temple': {
      eyebrow: '禅宗与武术文化',
      heroTitle: '少林寺',
      intro: '少林寺通常从洛阳或郑州安排为登封一日延伸，把禅宗历史、武术文化和嵩山山地环境组合在一起。',
      facts: [
        { label: '区域', value: '河南登封' },
        { label: '建议节奏', value: '一日延伸' },
        { label: '适合', value: '武术文化、佛教文化、主动型遗产游客' }
      ],
      whyGo: [
        { title: '识别度高', text: '少林是河南最容易被海外游客识别的文化名片之一，尤其适合关注功夫和禅宗传统的客人。' },
        { title: '山地背景重要', text: '寺院、塔林、演出时间和嵩山景观需要作为一条完整动线规划。' },
        { title: '与龙门互补', text: '龙门偏静态石刻艺术，少林偏寺院和武术文化，两者组合后主题更立体。' }
      ],
      visitFlow: [
        '从洛阳早点出发，保障车程、寺院参观和演出时间。',
        '不要只看表演，寺院院落和塔林也要有基本讲解。',
        '当天对家庭和长者会偏长，返程晚餐应安排简单。'
      ],
      practicalNotes: ['少林寺不在洛阳市区，不适合当作快速市内景点。', '节假日客流和演出安排会影响顺序。', '报价前确认客人想要多少步行和山地景观。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网媒体配置。'
    },
    'white-horse-temple': {
      eyebrow: '中国佛教早期历史',
      heroTitle: '白马寺',
      intro: '白马寺为洛阳增加一个节奏更舒缓的寺院历史停留，常被用来讲述佛教传入中国早期的重要节点。',
      facts: [
        { label: '区域', value: '河南洛阳' },
        { label: '建议节奏', value: '半日或市区组合' },
        { label: '适合', value: '寺院历史、慢节奏、古都线路' }
      ],
      whyGo: [
        { title: '佛教早期背景', text: '白马寺帮助游客理解佛教如何进入并融入中国宗教与文化史。' },
        { title: '节奏更柔和', text: '当团队需要比龙门或少林更轻松的一天时，白马寺适合搭配老城或博物馆。' },
        { title: '主题衔接清楚', text: '白马寺、龙门石窟和少林寺可以组成洛阳周边三个不同的佛教文化章节。' }
      ],
      visitFlow: [
        '把白马寺作为上午或下午的完整停留，而不是赶路间隙。',
        '通过院落动线讲清佛教传入中国的早期故事。',
        '之后可搭配老城美食、博物馆或轻量街区漫步。'
      ],
      practicalNotes: ['保持寺院参观礼貌，不要叠加太多附近点位。', '对白天步行能力有限的客人，白马寺比龙门和少林更轻松。', '适合平衡已经包含石窟或山地景点的线路。'],
      imageCredit: '图片来自 Wikimedia Commons，并沿用当前官网媒体配置。'
    }
  }
}

const companyTranslations: Partial<Record<Locale, Partial<CompanyDetail>>> = {
  zh: {
    eyebrow: '腾轩旅行集团',
    title: '全球旅行资源配置平台',
    summary: '腾轩旅行集团成立于 2001 年，总部位于北京，为企业客户和旅游行业客户构建有竞争力的旅行产品与服务。',
    description: '集团业务覆盖大交通、自由行票务、差旅管理、在线预订和航空货运，客户包括政府机构、央国企、民营企业、旅行社、会展和研学机构等。',
    heroTitle: '腾轩旅行集团',
    heroSummary: '总部位于北京的旅行集团，以长期供应链和服务能力连接企业客户、旅行社、航司资源与入境中国旅行需求。',
    stats: [
      { value: '2001', label: '成立时间' },
      { value: '2000+', label: '优质供应商合作伙伴' },
      { value: '20,000+', label: '优质客户' },
      { value: '7', label: '分支网络' },
      { value: '700', label: '团队成员' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['年会现场', '办公到访', '航司伙伴', '分支网络'][index],
      caption: ['集团年会中的员工与伙伴合影。', '公司办公空间里的团队到访与职场文化。', '团队面向航司伙伴的服务协作瞬间。', '户外活动中的分支团队展示。'][index]
    })),
    overview: [
      { title: '稳定运营基础', text: '腾轩旅游集团有限公司成立于 2001 年，总部位于北京，注册资本 11,053 万元。' },
      { title: '供应商合作网络', text: '集团连接 2000+ 优质供应商合作伙伴，覆盖交通、酒店、目的地服务、票务和旅行资源配置。' },
      { title: '入境旅游业务', text: '腾轩航旅主营入境旅游，专注境外客源招徕与来华观光接待；依托经营管理、市场营销和多语种导游团队，持续拓展入境业务。' }
    ],
    brands: [
      { name: '在路上商旅', summary: '围绕成本、数据和供应链控制的商务旅行管理。' },
      { name: '在路上交通', summary: '依托广泛航司资源的全球大交通解决方案。' },
      { name: '腾轩旅行', summary: '面向旅行社和企业的线上线下旅行资源配置。' },
      { name: '51Book', summary: '以私有运价和供应链支持为基础的智能全球机票预订。' },
      { name: '智飞旅行科技', summary: '提升全球旅行资源与服务效率的技术平台。' }
    ],
    milestones: [
      { year: '2015', event: '新三板挂牌，完成品牌资本市场升级。' },
      { year: '2017', event: '收购 51Book，扩展旅行资源平台能力。' },
      { year: '2019', event: '由山水股份更名为腾轩旅行集团。' },
      { year: '2023', event: '建设面向企业旅行资源配置的平台生态。' }
    ],
    branches: [
      {
        ...baseCompanyDetail.branches[0],
        city: '北京',
        role: '总部',
        phone: '+86 010-65210601',
        address: '北京市东城区朝阳门银河 SOHO D 座 5 层 50520',
        imageAlt: '腾轩旅行集团北京总部办公区'
      },
      { city: '西安', role: '分公司', phone: '+86 029-88489999', address: '陕西省西安市高新区唐延路 1 号旺座国际城 C 座 26 层 2603 室' },
      { city: '成都', role: '分公司', phone: '+86 028-68170115', address: '四川省成都市高新区天府新谷 9 号楼 2 单元 2102 室' },
      { city: '合肥', role: '分公司', phone: '+86 0551-65238888', address: '安徽省合肥市蜀山区蜀山电子产业园四期 D 座 19 楼北侧' },
      { city: '上海', role: '分公司', phone: '+86 021-53085001', address: '上海市长宁区金钟路 968 号凌空 SOHO 天会商务广场 2 号楼 202 室' },
      { city: '香港', role: '分公司', address: 'RM19, Unit 1003, 10/F, The Rainbow, 22 Wang Yip Street, South Yuen Long, NT' },
      { city: '美国', role: '海外分支', phone: '+1 626-723-3197', address: '680 Brea Canyon Road, Suite 288, Diamond Bar, CA 91789' }
    ],
    inbound: {
      title: '入境中国旅行服务能力',
      summary: '凭借十年以上入境旅游服务经验，腾轩面向海外客源市场提供多语言接待和定制化中国旅行方案。',
      capabilities: [
        { title: '100+ 客源市场', text: '入境中国旅行及相关合作需求覆盖 100 多个海外客源国家。' },
        { title: '多语言服务', text: '服务覆盖英语、法语、德语、日语、俄语、韩语等语言场景。' },
        { title: '定制旅行场景', text: '支持会奖服务、高端定制、签证相关服务协调和团队接待需求。' }
      ]
    },
    resources: [
      { title: '航司资源网络', text: '与 600 多家境内外航司建立战略合作，支持有竞争力的产品和旅行资源配置。' },
      { title: '票务与系统接入', text: '香港和美国子公司支持 Eterm、Amadeus、Sabre、Travelport 等票务系统。' },
      { title: '企业供应链', text: '51Book 和集团品牌连接航司私有运价、企业协议、在线预订和 B 端客户服务流程。' }
    ],
    honors: [
      { title: '平台资质认证', text: '集团获得北京高新技术企业、专精特新中小企业、IATA 和 ARC 等相关旅行资质。' },
      { title: '航司与企业伙伴奖项', text: '获得主要航司和企业采购供应链伙伴的优选或优质合作伙伴类认可。' },
      { title: '企业客户基础', text: '累计服务政府、央国企、民营企业、旅行社、会展、研学和旅游平台等 20,000 多家优质客户。' }
    ],
    mediaGallery: baseCompanyDetail.mediaGallery.map((image, index) => ({
      ...image,
      label: ['团队', '团队', '伙伴', '行业', '运动', '荣誉'][index],
      title: ['年会团队合影', '户外分支活动', '航司伙伴活动', '行业论坛亮相', '团队运动活动', '奖项现场'][index]
    })),
    activityCategories: baseCompanyDetail.activityCategories.map((category, index) => {
      const categoryCopy = [
        {
          eyebrow: '伙伴与团队瞬间',
          title: '伙伴活动、奖项与团队场景',
          summary: '来自航司伙伴活动、集团年会、团队活动、客户答谢和员工文化场景的公司照片。',
          coverAlt: '腾轩旅行集团年会团队合影',
          labels: ['会议', '办公', '伙伴', '航司', '分支', '行业', '办公', '团建', '运动', '奖项', '伙伴', '会议', '荣誉', '航司', '服务'],
          titles: [
            '年会团队合影',
            '办公室团队到访',
            '伙伴会议认可',
            '卡塔尔航空团队瞬间',
            '户外分支团队',
            '行业论坛签名墙',
            '办公室节日团队',
            '草原团建活动',
            '篮球团队',
            '美联航奖项现场',
            '美联航伙伴晚宴',
            '会议场地合影',
            '龙腾奖颁奖典礼',
            '芬航客户答谢',
            '宫廷服饰服务团队'
          ],
          captions: [
            '集团年会和伙伴交流活动中的大型合影。',
            '展示公司办公空间和职场文化的团队到访场景。',
            '与旅行资源合作相关的伙伴会议和认可瞬间。',
            '面向航司伙伴的团队服务与产品协作场景。',
            '展示本地团队存在感和集团文化的分支团队活动。',
            '与供应链金融和旅游行业交流相关的论坛场景。',
            '带有集团品牌氛围的办公室节日场景。',
            '展示办公室之外员工文化的户外团建路线。',
            '员工运动活动和内部团队活力。',
            '来自航司客户答谢活动的伙伴奖项现场。',
            '航司和旅游行业伙伴共同参与的晚宴场景。',
            '大型公司会议活动中的场地合影。',
            '展示旅游行业活动认可的奖项现场。',
            '航司客户答谢活动中的伙伴认可。',
            '适合入境中国旅行叙事的文化主题服务场景。'
          ]
        },
        {
          eyebrow: '品牌活动',
          title: '展会与品牌活动',
          summary: '腾轩旅行和在路上商旅的展会展台、年会、周年庆和对外品牌展示。',
          coverAlt: '在路上商旅展会展台展示',
          labels: ['展会', '展会', '年会', '庆典'],
          titles: ['展会展台', '行业展会亮相', '年会现场', '周年庆蛋糕'],
          captions: [
            '在路上商旅展台，用于合作伙伴和客户沟通。',
            '团队参加行业活动，展示集团品牌和旅行服务能力。',
            '年会现场，用于内部沟通和品牌表达。',
            '腾轩团队共同庆祝集团发展节点。'
          ]
        },
        {
          eyebrow: '办公场景',
          title: '办公开业与职场文化',
          summary: '剪彩、品牌墙参观、开业仪式和办公庆祝场景，展示集团职场和分支文化。',
          coverAlt: '腾轩办公室团队庆祝合影',
          labels: ['开业', '开业', '办公', '开业', '团队', '办公'],
          titles: ['办公室剪彩', '开业仪式', '品牌历程墙', '舞狮开业', '办公室团队庆祝', '节日办公到访'],
          captions: [
            '办公室开业剪彩和本地团队合影。',
            '分支开业现场，布置鲜花和剪彩仪式。',
            '面向访客和员工展示的品牌墙与公司发展历程。',
            '以舞狮和仪式感呈现的开业庆祝。',
            '办公室节日布置中的团队庆祝合影。',
            '员工到访和节日办公场景。'
          ]
        },
        {
          eyebrow: '团队文化',
          title: '团建与员工活动',
          summary: '户外路线、办公室团队照、运动参与和团建场景，展示腾轩员工文化。',
          coverAlt: '腾轩户外团建合影',
          labels: ['团建', '团队', '运动'],
          titles: ['户外团队路线', '办公室团队夜间合影', '四川马拉松完赛'],
          captions: [
            '腾轩团队户外团建活动。',
            '一次内部活动后的办公室团队合影。',
            '员工参与马拉松活动，体现团队活力。'
          ]
        }
      ][index]

      return {
        ...category,
        eyebrow: categoryCopy.eyebrow,
        title: categoryCopy.title,
        summary: categoryCopy.summary,
        coverAlt: categoryCopy.coverAlt,
        images: category.images.map((image, imageIndex) => ({
          ...image,
          label: categoryCopy.labels[imageIndex],
          title: categoryCopy.titles[imageIndex],
          caption: categoryCopy.captions[imageIndex]
        }))
      }
    }),
    honorImages: baseCompanyDetail.honorImages.map((image, index) => ({
      ...image,
      label: ['证书', '证书', '资质', '奖项', '证书', '荣誉'][index],
      title: ['高新技术企业证书', '专精特新中小企业证书', 'IATA 与 ARC 资质', '合作伙伴奖杯', '奖项证书展示柜', '荣誉展示墙'][index]
    })),
    culture: {
      vision: '引领全球旅行资源共享，成为全球企业信赖的一流服务商。',
      mission: '让企业买到更好的旅行产品。',
      values: ['客户第一', '实事求是', '专业高效', '艰苦奋斗', '创新']
    }
  },
  de: {
    title: 'Globale Plattform fur Reiseressourcen',
    summary: 'Seit 2001 verbindet Tengxuan Travel Group wettbewerbsfaehige Reiseprodukte und Services fur Unternehmen und Reisebranche.',
    heroSummary: 'Eine in Peking ansaessige Reisegruppe, die Firmenkunden, Agenturen, Airlines und China-Inbound-Nachfrage verbindet.',
    stats: [
      { value: '2001', label: 'Gruendung' },
      { value: '2000+', label: 'Qualitaets-Lieferantenpartner' },
      { value: '20,000+', label: 'Qualitaetskunden' },
      { value: '7', label: 'Standorte' },
      { value: '700', label: 'Teammitglieder' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['Buerobereich', 'Teamfoto', 'Serviceszene', 'Standortnetz'][index],
      caption: ['Pekinger Buero und Markenempfang.', 'Teamkultur und Mitarbeitermomente.', 'Zusammenarbeit und Servicekultur.', 'Aktivitaeten und Standortpraesenz.'][index]
    })),
    overview: [
      { title: 'Etablierte Betriebsbasis', text: 'Tengxuan Tourism Group Co., Ltd. wurde 2001 gegruendet und hat seinen Hauptsitz in Peking.' },
      { title: 'Lieferantenpartner-Netzwerk', text: 'Die Gruppe arbeitet mit 2000+ hochwertigen Lieferantenpartnern fuer Transport, Hotels, Zielgebietsservices, Ticketing und Reiseressourcen.' },
      { title: 'Breite Geschaeftsabdeckung', text: 'Das Geschaeft umfasst Grossverkehr, Ticketing, Travel Management, Online-Buchung, Luftfracht und Reiseressourcen.' }
    ],
    brands: [
      { name: 'On The Way Business Travel', summary: 'Geschaeftsreisemanagement mit Kosten-, Daten- und Supply-Chain-Kontrolle.' },
      { name: 'On The Way Transportation', summary: 'Globale Grossverkehrsloesungen auf Basis breiter Airline-Ressourcen.' },
      { name: 'Tengxuan Travel', summary: 'Online- und Offline-Reiseressourcen fur Agenturen und Unternehmen.' },
      { name: '51Book', summary: 'Intelligente globale Flugbuchung mit Privatpreisen und Supply-Chain-Support.' },
      { name: 'Zhifei Travel Technology', summary: 'Technologieplattform fur globale Reiseressourcen und Serviceeffizienz.' }
    ],
    milestones: [
      { year: '2015', event: 'NEEQ-Listing und Marken-Upgrade am Kapitalmarkt.' },
      { year: '2017', event: 'Uebernahme von 51Book und Ausbau der Reiseressourcenplattform.' },
      { year: '2019', event: 'Umbenennung von Shanshui Shares zu Tengxuan Travel Group.' },
      { year: '2023', event: 'Aufbau eines Plattformoekosystems fur Enterprise-Reiseressourcen.' }
    ],
    branches: baseCompanyDetail.branches.map((branch) => ({
      ...branch,
      city: branch.city === 'Beijing' ? 'Peking' : branch.city === 'United States' ? 'USA' : branch.city,
      role: branch.role === 'Headquarters' ? 'Zentrale' : branch.role === 'Overseas branch' ? 'Auslandsstandort' : 'Niederlassung'
    })),
    inbound: {
      title: 'China-Inbound-Reisekompetenz',
      summary: 'Tengxuan unterstuetzt Quellmaerkte im Ausland mit mehrsprachigem Empfang und massgeschneiderten China-Loesungen.',
      capabilities: [
        { title: '100+ Quellmaerkte', text: 'Geschaeftsabdeckung fuer China-Inbound-Reisen aus mehr als 100 Laendern.' },
        { title: 'Mehrsprachiger Service', text: 'Unterstuetzung fur Englisch, Franzoesisch, Deutsch, Japanisch, Russisch, Koreanisch und weitere Sprachen.' },
        { title: 'Massgeschneiderte Szenarien', text: 'MICE, hochwertige Individualisierung, Visa-Koordination und Gruppenempfang.' }
      ]
    },
    resources: [
      { title: 'Airline-Ressourcennetz', text: 'Strategische Partnerschaften mit mehr als 600 in- und auslaendischen Airlines unterstuetzen wettbewerbsfaehige Produkte.' },
      { title: 'Ticketing und Systemzugang', text: 'Tochtergesellschaften in Hongkong und den USA unterstuetzen Eterm, Amadeus, Sabre und Travelport.' },
      { title: 'Enterprise-Supply-Chain', text: '51Book und Gruppenmarken verbinden Privatpreise, Firmenvereinbarungen, Online-Buchung und B2B-Service.' }
    ],
    honors: [
      { title: 'Zertifizierte Plattformqualifikationen', text: 'Die Gruppe wurde als Beijing High-Tech Enterprise und Specialized New SME anerkannt.' },
      { title: 'Partnerauszeichnungen', text: 'Auszeichnungen von grossen Airlines und Enterprise-Beschaffungspartnern.' },
      { title: 'Firmenkundenbasis', text: 'Mehr als 20.000 hochwertige Kunden aus Regierung, Unternehmen, Agenturen, MICE und Plattformen.' }
    ],
    mediaGallery: baseCompanyDetail.mediaGallery.map((image, index) => ({
      ...image,
      label: ['Buero', 'Team', 'Aktivitaet', 'Aktivitaet'][index],
      title: ['Empfangsbereich der Gruppe', 'Outdoor-Teamaktivitaet', 'Standort-Teamaktivitaet', 'Reisekultur-Aktivitaet'][index]
    })),
    honorImages: baseCompanyDetail.honorImages.map((image, index) => ({
      ...image,
      label: ['Zertifikat', 'Zertifikat', 'Qualifikation', 'Auszeichnung', 'Zertifikate', 'Ehrungen'][index],
      title: ['High-Tech-Enterprise-Zertifikat', 'Specialized-New-SME-Zertifikat', 'IATA- und ARC-Qualifikationen', 'Partnerauszeichnung', 'Auszeichnungsschrank', 'Ehrenwand'][index]
    })),
    culture: {
      vision: 'Globale Reiseressourcen teilen und ein vertrauenswuerdiger Top-Servicepartner fuer Unternehmen werden.',
      mission: 'Unternehmen gute Reiseangebote ermoeglichen.',
      values: ['Kundenorientiert', 'Ehrlich', 'Effizient', 'Fleissig', 'Innovativ']
    }
  },
  fr: {
    title: 'Plateforme mondiale d allocation des ressources voyage',
    summary: 'Depuis 2001, Tengxuan Travel Group construit des produits et services competitifs pour entreprises et acteurs du voyage.',
    heroSummary: 'Groupe base a Pekin reliant clients entreprises, agences, compagnies aeriennes et demande inbound Chine.',
    stats: [
      { value: '2001', label: 'Creation' },
      { value: '2000+', label: 'Partenaires fournisseurs qualite' },
      { value: '20,000+', label: 'Clients qualite' },
      { value: '7', label: 'Sites' },
      { value: '700', label: 'Membres equipe' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['Bureaux', 'Photo equipe', 'Scene service', 'Reseau branches'][index],
      caption: ['Bureaux de Pekin et espace reception marque.', 'Culture equipe et moments employes.', 'Collaboration et culture service voyage.', 'Activites et presence des equipes locales.'][index]
    })),
    overview: [
      { title: 'Base operationnelle etablie', text: 'Tengxuan Tourism Group Co., Ltd. a ete cree en 2001 et son siege est a Pekin.' },
      { title: 'Reseau de fournisseurs partenaires', text: 'Le groupe travaille avec 2000+ partenaires fournisseurs qualite pour transport, hotels, services destination, billetterie et ressources voyage.' },
      { title: 'Couverture business large', text: 'Activites: transport majeur, billetterie, travel management, reservation en ligne, cargo aerien et ressources voyage.' }
    ],
    brands: [
      { name: 'On The Way Business Travel', summary: 'Gestion des voyages d affaires avec controle couts, donnees et supply-chain.' },
      { name: 'On The Way Transportation', summary: 'Solutions de transport majeur mondial appuyees par de larges ressources aeriennes.' },
      { name: 'Tengxuan Travel', summary: 'Allocation de ressources voyage en ligne et hors ligne pour agences et entreprises.' },
      { name: '51Book', summary: 'Reservation intelligente de vols mondiaux avec tarifs prives et support supply-chain.' },
      { name: 'Zhifei Travel Technology', summary: 'Plateforme technologique pour ressources voyage mondiales et efficacite service.' }
    ],
    milestones: [
      { year: '2015', event: 'Cotation NEEQ et montee en gamme de la marque sur le marche capital.' },
      { year: '2017', event: 'Acquisition de 51Book et extension de la plateforme ressources voyage.' },
      { year: '2019', event: 'Renommage de Shanshui Shares en Tengxuan Travel Group.' },
      { year: '2023', event: 'Construction d un ecosysteme plateforme pour ressources voyage entreprise.' }
    ],
    branches: baseCompanyDetail.branches.map((branch) => ({
      ...branch,
      city: branch.city === 'Beijing' ? 'Pekin' : branch.city === 'United States' ? 'Etats-Unis' : branch.city,
      role: branch.role === 'Headquarters' ? 'Siege' : branch.role === 'Overseas branch' ? 'Branche internationale' : 'Branche'
    })),
    inbound: {
      title: 'Capacite voyage inbound Chine',
      summary: 'Tengxuan accompagne les marches sources etrangers avec accueil multilingue et solutions Chine sur mesure.',
      capabilities: [
        { title: '100+ marches sources', text: 'Couverture de plus de 100 pays sources pour le voyage inbound Chine.' },
        { title: 'Service multilingue', text: 'Anglais, francais, allemand, japonais, russe, coreen et autres scenarios linguistiques.' },
        { title: 'Voyages sur mesure', text: 'MICE, personnalisation haut de gamme, coordination visa et reception groupe.' }
      ]
    },
    resources: [
      { title: 'Reseau de compagnies aeriennes', text: 'Des partenariats avec plus de 600 compagnies soutiennent produits competitifs et allocation de ressources.' },
      { title: 'Billetterie et systemes', text: 'Les filiales Hong Kong et US prennent en charge Eterm, Amadeus, Sabre et Travelport.' },
      { title: 'Supply-chain entreprise', text: '51Book et les marques du groupe relient tarifs prives, accords corporate, reservation en ligne et service B2B.' }
    ],
    honors: [
      { title: 'Qualifications certifiees', text: 'Le groupe est reconnu High-Tech Enterprise de Pekin et Specialized New SME.' },
      { title: 'Prix partenaires', text: 'Reconnaissances de grandes compagnies aeriennes et partenaires achats entreprise.' },
      { title: 'Base clients entreprise', text: 'Plus de 20 000 clients qualite dans gouvernements, entreprises, agences, MICE et plateformes.' }
    ],
    mediaGallery: baseCompanyDetail.mediaGallery.map((image, index) => ({
      ...image,
      label: ['Bureau', 'Equipe', 'Activite', 'Activite'][index],
      title: ['Accueil marque du groupe', 'Activite equipe exterieure', 'Equipe activite branche', 'Activite culture voyage'][index]
    })),
    honorImages: baseCompanyDetail.honorImages.map((image, index) => ({
      ...image,
      label: ['Certificat', 'Certificat', 'Qualification', 'Prix', 'Certificats', 'Distinctions'][index],
      title: ['Certificat High-Tech Enterprise', 'Certificat Specialized New SME', 'Qualifications IATA et ARC', 'Trophee partenaire', 'Vitrine des certificats', 'Mur des distinctions'][index]
    })),
    culture: {
      vision: 'Partager les ressources voyage mondiales et devenir un service de confiance pour les entreprises.',
      mission: 'Permettre aux entreprises d acheter de meilleures offres voyage.',
      values: ['Client d abord', 'Honnete', 'Efficace', 'Travailleur', 'Innovant']
    }
  },
  es: {
    title: 'Plataforma global de asignacion de recursos de viaje',
    summary: 'Desde 2001, Tengxuan Travel Group crea productos y servicios competitivos para empresas y clientes del sector turistico.',
    heroSummary: 'Grupo con sede en Pekin que conecta empresas, agencias, aerolineas y demanda inbound hacia China.',
    stats: [
      { value: '2001', label: 'Fundacion' },
      { value: '2000+', label: 'Socios proveedores de calidad' },
      { value: '20,000+', label: 'Clientes de calidad' },
      { value: '7', label: 'Sedes' },
      { value: '700', label: 'Equipo' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['Oficina', 'Foto de equipo', 'Escena de servicio', 'Red de sedes'][index],
      caption: ['Oficina de Pekin y recepcion de marca.', 'Cultura de equipo y momentos de empleados.', 'Colaboracion y cultura de servicio turistico.', 'Actividades y presencia de equipos locales.'][index]
    })),
    overview: [
      { title: 'Base operativa establecida', text: 'Tengxuan Tourism Group Co., Ltd. fue fundada en 2001 y tiene sede en Pekin.' },
      { title: 'Red de proveedores socios', text: 'El grupo trabaja con 2000+ socios proveedores de calidad en transporte, hoteles, servicios de destino, ticketing y recursos de viaje.' },
      { title: 'Amplia cobertura de negocio', text: 'Cubre transporte principal, billetes, travel management, reserva online, carga aerea y recursos de viaje.' }
    ],
    brands: [
      { name: 'On The Way Business Travel', summary: 'Gestion de viajes de negocio con control de costes, datos y cadena de suministro.' },
      { name: 'On The Way Transportation', summary: 'Soluciones globales de transporte principal respaldadas por recursos aereos.' },
      { name: 'Tengxuan Travel', summary: 'Asignacion online y offline de recursos de viaje para agencias y empresas.' },
      { name: '51Book', summary: 'Reserva inteligente de vuelos globales con tarifas privadas y soporte de cadena.' },
      { name: 'Zhifei Travel Technology', summary: 'Plataforma tecnologica para recursos globales de viaje y eficiencia de servicio.' }
    ],
    milestones: [
      { year: '2015', event: 'Cotizacion en NEEQ y actualizacion de marca en mercado de capitales.' },
      { year: '2017', event: 'Adquisicion de 51Book y expansion de la plataforma de recursos de viaje.' },
      { year: '2019', event: 'Cambio de nombre de Shanshui Shares a Tengxuan Travel Group.' },
      { year: '2023', event: 'Construccion de ecosistema de plataforma para recursos de viaje empresariales.' }
    ],
    branches: baseCompanyDetail.branches.map((branch) => ({
      ...branch,
      city: branch.city === 'Beijing' ? 'Pekin' : branch.city === 'United States' ? 'Estados Unidos' : branch.city,
      role: branch.role === 'Headquarters' ? 'Sede central' : branch.role === 'Overseas branch' ? 'Sede internacional' : 'Sucursal'
    })),
    inbound: {
      title: 'Capacidad de turismo inbound China',
      summary: 'Tengxuan apoya mercados emisores extranjeros con recepcion multilingue y soluciones de viaje a China a medida.',
      capabilities: [
        { title: '100+ mercados emisores', text: 'Cobertura de mas de 100 paises emisores para viajes inbound a China.' },
        { title: 'Servicio multilingue', text: 'Ingles, frances, aleman, japones, ruso, coreano y otros escenarios de idioma.' },
        { title: 'Viajes a medida', text: 'MICE, personalizacion premium, coordinacion de visado y recepcion de grupos.' }
      ]
    },
    resources: [
      { title: 'Red de aerolineas', text: 'Alianzas con mas de 600 aerolineas apoyan productos competitivos y asignacion de recursos.' },
      { title: 'Billetes y sistemas', text: 'Filiales en Hong Kong y EE. UU. soportan Eterm, Amadeus, Sabre y Travelport.' },
      { title: 'Cadena empresarial', text: '51Book y marcas del grupo conectan tarifas privadas, acuerdos corporativos, reserva online y servicio B2B.' }
    ],
    honors: [
      { title: 'Calificaciones certificadas', text: 'El grupo ha sido reconocido como High-Tech Enterprise de Pekin y Specialized New SME.' },
      { title: 'Premios de socios', text: 'Reconocimientos de grandes aerolineas y socios de compras empresariales.' },
      { title: 'Base de clientes corporativos', text: 'Mas de 20,000 clientes de calidad en gobierno, empresas, agencias, MICE y plataformas.' }
    ],
    mediaGallery: baseCompanyDetail.mediaGallery.map((image, index) => ({
      ...image,
      label: ['Oficina', 'Equipo', 'Actividad', 'Actividad'][index],
      title: ['Recepcion de marca del grupo', 'Actividad de equipo al aire libre', 'Equipo de actividad de sucursal', 'Actividad de cultura de viaje'][index]
    })),
    honorImages: baseCompanyDetail.honorImages.map((image, index) => ({
      ...image,
      label: ['Certificado', 'Certificado', 'Calificacion', 'Premio', 'Certificados', 'Honores'][index],
      title: ['Certificado High-Tech Enterprise', 'Certificado Specialized New SME', 'Calificaciones IATA y ARC', 'Trofeo de socio', 'Vitrina de certificados', 'Muro de honores'][index]
    })),
    culture: {
      vision: 'Liderar el intercambio global de recursos de viaje y ser un servicio confiable para empresas.',
      mission: 'Permitir que las empresas compren mejores ofertas de viaje.',
      values: ['Cliente primero', 'Honesto', 'Eficiente', 'Trabajador', 'Innovador']
    }
  }
}

const productGenericCopy: Record<Exclude<Locale, 'en'>, {
  factLabels: Record<string, string>
  factValues: Record<string, string>
  dayPlan: string
  daySummary: string
  sourceNote: string
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  priceBasis: string
  customQuote: string
  onRequest: string
}> = {
  zh: {
    factLabels: { Code: '编号', Starts: '起点', Ends: '终点', Hotels: '酒店', Guide: '导游', Transport: '交通', 'Best for': '适合' },
    factValues: {
      Custom: '定制',
      Beijing: '北京',
      Shanghai: '上海',
      Suzhou: '苏州',
      Hangzhou: '杭州',
      Yangshuo: '阳朔',
      Chengdu: '成都',
      Zhangjiajie: '张家界',
      Guilin: '桂林',
      Longji: '龙脊',
      "Xi'an": '西安',
      'Private local guides': '私家当地导游',
      'Private local guide': '私家当地导游',
      'Private vehicle': '私家车',
      'Private vehicle + rail/flight': '私家车 + 高铁/航班',
      'English-speaking local guide': '英文当地导游',
      'Family-friendly guides': '亲子友好导游',
      'Families and multi-gen groups': '家庭和多代同游',
      'Inbound leisure groups': '入境休闲团队',
      'First-time Beijing visitors': '首次到访北京客人',
      'Active Great Wall hikers': '长城徒步客人',
      'Short visa-free stopovers': '短暂停留免签过境客人',
      'Short heritage trips': '短线遗产游',
      'First-time private travelers': '首次访华私家游客'
      ,
      'First-time classic China groups': '首次访华经典团队',
      'Rail / flight / private vehicle': '高铁/航班/私家车',
      'Rail + domestic flight': '高铁 + 国内航班',
      'Family-room options': '家庭房选项',
      'Arrival city': '抵达城市',
      'Departure city': '离境城市',
      'Beijing or Chengdu': '北京或成都',
      'Shanghai or Guilin': '上海或桂林',
      'Xi’an or Chengdu': '西安或成都',
      'Airport pickup': '机场接机',
      'Hotel check-in': '酒店入住',
      'Forbidden City': '故宫',
      'Great Wall': '长城',
      'Hutong walk': '胡同漫步',
      'Cultural activity': '文化体验',
      'Terracotta Warriors option': '兵马俑可选',
      'Panda Base option': '熊猫基地可选',
      'Food experience': '美食体验',
      'Shanghai option': '上海可选',
      'Disneyland option': '迪士尼可选',
      'Guilin option': '桂林可选',
      'Departure transfer': '离境送机/送站',
      'Terracotta Warriors': '兵马俑',
      'Li River': '漓江',
      'Li River Cruise': '漓江游船',
      'Suzhou Gardens': '苏州园林',
      'West Lake': '西湖',
      'Shanghai Skyline': '上海天际线',
      'Family of 3-4': '3-4 人家庭',
      'Multi-generation 6-8': '6-8 人多代家庭',
      'Family-room supplement': '家庭房补差'
    },
    dayPlan: '行程安排',
    daySummary: '当天安排会根据最终报价、交通时间、景点开放情况和团队节奏确认。',
    sourceNote: '该产品为参考线路，最终以报价和确认单为准。',
    highlights: ['可按客源市场、酒店等级和导游语言调整。', '核心交通、导游、酒店和景点票务可统一协调。', '适合作为固定团队产品或定制线路基础。'],
    inclusions: ['线路规划与供应商协调', '最终报价确认的导游和车辆服务', '最终报价列明的酒店、交通和景点门票', '行程期间的服务支持'],
    exclusions: ['国际机票', '未列明餐食和个人消费', '未在最终报价中确认的可选活动', '旅行保险', '导游和司机小费'],
    priceBasis: '按最终日期、酒店等级、交通资源和团队人数确认。',
    customQuote: '定制报价',
    onRequest: '按需确认'
  },
  de: {
    factLabels: { Starts: 'Start', Ends: 'Ende', Hotels: 'Hotels', Guide: 'Guide', Transport: 'Transport', 'Best for': 'Ideal fur' },
    factValues: {
      Custom: 'Individuell',
      Beijing: 'Peking',
      Shanghai: 'Shanghai',
      Chengdu: 'Chengdu',
      Zhangjiajie: 'Zhangjiajie',
      Guilin: 'Guilin',
      "Xi'an": "Xi'an",
      'Private local guides': 'Private lokale Guides',
      'Private local guide': 'Privater lokaler Guide',
      'Private vehicle': 'Privatfahrzeug',
      'Private vehicle + rail/flight': 'Privatfahrzeug + Bahn/Flug',
      'Family-friendly guides': 'Familienfreundliche Guides',
      'Families and multi-gen groups': 'Familien und Mehrgenerationengruppen',
      'Inbound leisure groups': 'Inbound-Freizeitgruppen',
      'Short heritage trips': 'Kurze Kulturerbereisen',
      'First-time private travelers': 'Private Erstbesucher'
      ,
      'Family-room options': 'Familienzimmer-Optionen',
      'Arrival city': 'Ankunftsstadt',
      'Departure city': 'Abreisestadt',
      'Xi’an or Chengdu': "Xi'an oder Chengdu",
      'Shanghai or Guilin': 'Shanghai oder Guilin',
      'Airport pickup': 'Flughafenabholung',
      'Hotel check-in': 'Hotel-Check-in',
      'Forbidden City': 'Verbotene Stadt',
      'Great Wall': 'Grosse Mauer',
      'Hutong walk': 'Hutong-Spaziergang',
      'Cultural activity': 'Kulturaktivitaet',
      'Terracotta Warriors option': 'Terrakotta-Armee optional',
      'Panda Base option': 'Panda-Basis optional',
      'Food experience': 'Kulinarisches Erlebnis',
      'Shanghai option': 'Shanghai optional',
      'Disneyland option': 'Disneyland optional',
      'Guilin option': 'Guilin optional',
      'Departure transfer': 'Abreisetransfer',
      'Terracotta Warriors': 'Terrakotta-Armee',
      'Li River': 'Li-Fluss',
      'Shanghai Skyline': 'Shanghai-Skyline',
      'Family of 3-4': 'Familie mit 3-4 Personen',
      'Multi-generation 6-8': 'Mehrgenerationen 6-8',
      'Family-room supplement': 'Familienzimmer-Zuschlag'
    },
    dayPlan: 'Tagesplanung',
    daySummary: 'Die Tagesdetails werden nach finalem Angebot, Verkehr, Oeffnungszeiten und Gruppentempo bestaetigt.',
    sourceNote: 'Referenzprodukt; endgueltig sind Angebot und Buchungsbestaetigung.',
    highlights: ['Anpassbar nach Markt, Hotelstandard und Guide-Sprache.', 'Transport, Guides, Hotels und Tickets koennen koordiniert werden.', 'Geeignet als Gruppenprodukt oder Basis fur Individualisierung.'],
    inclusions: ['Routenplanung und Lieferantenkoordination', 'Guide- und Fahrzeugservice gemaess finalem Angebot', 'Hotels, Transport und Tickets gemaess finalem Angebot', 'Serviceunterstuetzung waehrend der Reise'],
    exclusions: ['Internationale Fluege', 'Nicht genannte Mahlzeiten und persoenliche Ausgaben', 'Optionale Aktivitaeten ohne finale Bestaetigung', 'Reiseversicherung', 'Trinkgelder fur Guide und Fahrer'],
    priceBasis: 'Wird nach Datum, Hotelklasse, Transportverfuegbarkeit und Gruppengroesse bestaetigt.',
    customQuote: 'Individuelles Angebot',
    onRequest: 'Auf Anfrage'
  },
  fr: {
    factLabels: { Starts: 'Debut', Ends: 'Fin', Hotels: 'Hotels', Guide: 'Guide', Transport: 'Transport', 'Best for': 'Ideal pour' },
    factValues: {
      Custom: 'Sur mesure',
      Beijing: 'Pekin',
      Shanghai: 'Shanghai',
      Chengdu: 'Chengdu',
      Zhangjiajie: 'Zhangjiajie',
      Guilin: 'Guilin',
      "Xi'an": "Xi'an",
      'Private local guides': 'Guides locaux prives',
      'Private local guide': 'Guide local prive',
      'Private vehicle': 'Vehicule prive',
      'Private vehicle + rail/flight': 'Vehicule prive + train/vol',
      'Family-friendly guides': 'Guides adaptes aux familles',
      'Families and multi-gen groups': 'Familles et groupes multigenerationnels',
      'Inbound leisure groups': 'Groupes loisirs inbound',
      'Short heritage trips': 'Courts voyages patrimoine',
      'First-time private travelers': 'Premiers voyageurs prives'
      ,
      'Family-room options': 'Options chambres famille',
      'Arrival city': 'Ville d arrivee',
      'Departure city': 'Ville de depart',
      'Xi’an or Chengdu': "Xi'an ou Chengdu",
      'Shanghai or Guilin': 'Shanghai ou Guilin',
      'Airport pickup': 'Accueil aeroport',
      'Hotel check-in': 'Installation hotel',
      'Forbidden City': 'Cite interdite',
      'Great Wall': 'Grande Muraille',
      'Hutong walk': 'Balade hutong',
      'Cultural activity': 'Activite culturelle',
      'Terracotta Warriors option': 'Option guerriers de terre cuite',
      'Panda Base option': 'Option base des pandas',
      'Food experience': 'Experience culinaire',
      'Shanghai option': 'Option Shanghai',
      'Disneyland option': 'Option Disneyland',
      'Guilin option': 'Option Guilin',
      'Departure transfer': 'Transfert depart',
      'Terracotta Warriors': 'Guerriers de terre cuite',
      'Li River': 'Riviere Li',
      'Shanghai Skyline': 'Skyline de Shanghai',
      'Family of 3-4': 'Famille de 3-4',
      'Multi-generation 6-8': 'Multigeneration 6-8',
      'Family-room supplement': 'Supplement chambre famille'
    },
    dayPlan: 'Programme du jour',
    daySummary: 'Les details du jour sont confirmes selon devis final, transport, ouvertures et rythme du groupe.',
    sourceNote: 'Produit de reference; le devis et la confirmation finale font foi.',
    highlights: ['Adaptable par marche, niveau hotelier et langue du guide.', 'Transport, guides, hotels et billets peuvent etre coordonnes.', 'Convient comme produit groupe ou base sur mesure.'],
    inclusions: ['Planification de route et coordination fournisseurs', 'Guide et vehicule selon devis final', 'Hotels, transport et billets selon devis final', 'Support service pendant le voyage'],
    exclusions: ['Vols internationaux', 'Repas non listes et depenses personnelles', 'Activites optionnelles non confirmees', 'Assurance voyage', 'Pourboires guide et chauffeur'],
    priceBasis: 'Confirme selon dates, hotels, disponibilite transport et taille du groupe.',
    customQuote: 'Devis sur mesure',
    onRequest: 'Sur demande'
  },
  es: {
    factLabels: { Starts: 'Inicio', Ends: 'Fin', Hotels: 'Hoteles', Guide: 'Guia', Transport: 'Transporte', 'Best for': 'Ideal para' },
    factValues: {
      Custom: 'A medida',
      Beijing: 'Pekin',
      Shanghai: 'Shanghai',
      Chengdu: 'Chengdu',
      Zhangjiajie: 'Zhangjiajie',
      Guilin: 'Guilin',
      "Xi'an": "Xi'an",
      'Private local guides': 'Guias locales privados',
      'Private local guide': 'Guia local privado',
      'Private vehicle': 'Vehiculo privado',
      'Private vehicle + rail/flight': 'Vehiculo privado + tren/vuelo',
      'Family-friendly guides': 'Guias para familias',
      'Families and multi-gen groups': 'Familias y grupos multigeneracionales',
      'Inbound leisure groups': 'Grupos leisure inbound',
      'Short heritage trips': 'Viajes patrimoniales cortos',
      'First-time private travelers': 'Primeros viajeros privados'
      ,
      'Family-room options': 'Opciones de habitacion familiar',
      'Arrival city': 'Ciudad de llegada',
      'Departure city': 'Ciudad de salida',
      'Xi’an or Chengdu': "Xi'an o Chengdu",
      'Shanghai or Guilin': 'Shanghai o Guilin',
      'Airport pickup': 'Recogida en aeropuerto',
      'Hotel check-in': 'Check-in de hotel',
      'Forbidden City': 'Ciudad Prohibida',
      'Great Wall': 'Gran Muralla',
      'Hutong walk': 'Paseo por hutongs',
      'Cultural activity': 'Actividad cultural',
      'Terracotta Warriors option': 'Opcion Guerreros de Terracota',
      'Panda Base option': 'Opcion base de pandas',
      'Food experience': 'Experiencia gastronomica',
      'Shanghai option': 'Opcion Shanghai',
      'Disneyland option': 'Opcion Disneyland',
      'Guilin option': 'Opcion Guilin',
      'Departure transfer': 'Traslado de salida',
      'Terracotta Warriors': 'Guerreros de Terracota',
      'Li River': 'Rio Li',
      'Shanghai Skyline': 'Skyline de Shanghai',
      'Family of 3-4': 'Familia de 3-4',
      'Multi-generation 6-8': 'Multigeneracional 6-8',
      'Family-room supplement': 'Suplemento habitacion familiar'
    },
    dayPlan: 'Plan del dia',
    daySummary: 'Los detalles del dia se confirman segun cotizacion final, transporte, horarios de apertura y ritmo del grupo.',
    sourceNote: 'Producto de referencia; prevalecen la cotizacion y confirmacion final.',
    highlights: ['Ajustable por mercado, nivel de hotel e idioma del guia.', 'Transporte, guias, hoteles y entradas pueden coordinarse juntos.', 'Sirve como producto de grupo o base para personalizar.'],
    inclusions: ['Planificacion de ruta y coordinacion de proveedores', 'Guia y vehiculo segun cotizacion final', 'Hoteles, transporte y entradas segun cotizacion final', 'Soporte de servicio durante el viaje'],
    exclusions: ['Vuelos internacionales', 'Comidas no listadas y gastos personales', 'Actividades opcionales no confirmadas', 'Seguro de viaje', 'Propinas de guia y conductor'],
    priceBasis: 'Se confirma por fechas, hotel, disponibilidad de transporte y tamano del grupo.',
    customQuote: 'Cotizacion a medida',
    onRequest: 'Bajo solicitud'
  }
}

const isBrowser = typeof window !== 'undefined'
const currentLocale = ref<Locale>(detectLocale())

export function useI18n() {
  return {
    locale: currentLocale,
    locales,
    t,
    setLocale
  }
}

export function useTravelContent() {
  const cities = computed<City[]>(() =>
    baseCities.map((city) => localizeCity(city, cityTranslations[currentLocale.value]?.[city.slug]))
  )

  const attractions = computed<Attraction[]>(() =>
    baseAttractions.map((attraction) => mergeLocalized(attraction, attractionTranslations[currentLocale.value]?.[attraction.name]))
  )

  const attractionDetails = computed<AttractionDetail[]>(() =>
    baseAttractionDetails.map((attraction) =>
      mergeLocalized<AttractionDetail>(
        mergeLocalized<AttractionDetail>(
          attraction,
          attractionTranslations[currentLocale.value]?.[attraction.name] as Partial<AttractionDetail> | undefined
        ),
        attractionDetailTranslations[currentLocale.value]?.[attraction.slug]
      )
    )
  )

  const attractionBySlug = computed<Record<string, AttractionDetail>>(
    () =>
      Object.fromEntries(
        attractionDetails.value.map((attraction) => [attraction.slug, attraction])
      ) as Record<string, AttractionDetail>
  )

  const trips = computed<Trip[]>(() =>
    baseTrips.map((trip) =>
      mergeLocalized(trip, trip.productSlug ? tripTranslations[currentLocale.value]?.[trip.productSlug] : undefined)
    )
  )

  const tourProducts = computed<TourProduct[]>(() =>
    baseTourProducts.map((product) => localizeProduct(product, productTranslations[currentLocale.value]?.[product.slug]))
  )

  const productBySlug = computed<Record<string, TourProduct>>(
    () => Object.fromEntries(tourProducts.value.map((product) => [product.slug, product])) as Record<string, TourProduct>
  )

  const companyDetail = computed<CompanyDetail>(() => mergeLocalized(baseCompanyDetail, companyTranslations[currentLocale.value]))

  return {
    attractionBySlug,
    attractionDetails,
    attractions,
    cities,
    companyDetail,
    productBySlug,
    tourProducts,
    trips
  }
}

export function t(path: string, replacements: Record<string, string> = {}) {
  const value = getMessage(messages[currentLocale.value], path) ?? getMessage(messages[defaultLocale], path) ?? path
  if (typeof value !== 'string') return path
  return Object.entries(replacements).reduce((text, [key, replacement]) => {
    return text.split(`{${key}}`).join(replacement)
  }, value)
}

export function tm<T>(path: string): T {
  return (getMessage(messages[currentLocale.value], path) ?? getMessage(messages[defaultLocale], path)) as T
}

export function setLocale(locale: Locale) {
  currentLocale.value = locale
}

export function getCurrentLocale() {
  return currentLocale.value
}

export function getStoredLocale(): Locale {
  if (!isBrowser) return defaultLocale

  const storedLocale = localStorage.getItem(storedLocaleKey)
  if (isLocale(storedLocale)) return storedLocale

  return defaultLocale
}

watchEffect(() => {
  if (!isBrowser) return
  const meta = locales.find((item) => item.code === currentLocale.value) ?? locales[0]
  document.documentElement.lang = meta.htmlLang
  localStorage.setItem(storedLocaleKey, currentLocale.value)
})

function detectLocale(): Locale {
  if (!isBrowser) return defaultLocale

  const pathLocale = window.location.pathname.split('/').filter(Boolean)[0]
  if (isLocale(pathLocale)) return pathLocale

  return getStoredLocale()
}

function isLocale(value: string | null): value is Locale {
  return Boolean(value && localeCodes.includes(value as Locale))
}

function getMessage(tree: MessageTree, path: string): unknown {
  return path.split('.').reduce<unknown>((node, key) => {
    if (!node || typeof node !== 'object' || !(key in node)) return undefined
    return (node as Record<string, unknown>)[key]
  }, tree)
}

function mergeLocalized<T extends object>(base: T, localized?: Partial<T>): T {
  return localized ? ({ ...base, ...localized } as T) : base
}

function localizeCity(base: City, localized?: Partial<City>): City {
  const city = mergeLocalized(base, localized)
  if (!localized) return city

  return {
    ...city,
    signature: localized.signature || localized.summary || city.signature,
    travelNote: localized.travelNote || localized.summary || city.travelNote
  }
}

function localizeProduct(base: TourProduct, localized?: Partial<TourProduct>): TourProduct {
  const product = mergeLocalized(base, localized)
  if (currentLocale.value === 'en') return product

  const copy = productGenericCopy[currentLocale.value]
  if (!copy) return product

  return {
    ...product,
    sourceNote: localized?.sourceNote || copy.sourceNote,
    highlights: localized?.highlights || [
      product.summary,
      ...copy.highlights
    ],
    facts: localized?.facts || base.facts.map((fact) => ({
      label: copy.factLabels[fact.label] || fact.label,
      value: copy.factValues[fact.value] || translateCompoundValue(fact.value, copy.factValues)
    })),
    days: base.days.map((day, index) => {
      const localizedDay = localized?.days?.[index]
      return {
        ...day,
        ...localizedDay,
        day: localizedDay?.day || translateDayLabel(day.day, currentLocale.value),
        city: localizedDay?.city || translateCompoundValue(day.city, copy.factValues),
        title: localizedDay?.title || `${copy.dayPlan} ${index + 1}`,
        summary: localizedDay?.summary || copy.daySummary,
        sights: localizedDay?.sights || day.sights.slice(0, 4).map((sight) => translateCompoundValue(sight, copy.factValues)),
        note: localizedDay?.note || day.note
      }
    }),
    gallery: base.gallery.map((image) => ({
      ...image,
      city: translateCompoundValue(image.city, copy.factValues),
      title: translateCompoundValue(image.title, copy.factValues)
    })),
    hotels: localized?.hotels || base.hotels.map((hotel) => ({
      city: translateCompoundValue(hotel.city, copy.factValues),
      hotel: copy.priceBasis
    })),
    prices: localized?.prices || base.prices.map((price) => ({
      group: translatePriceGroup(price.group, copy),
      price: price.price === 'Custom quote' ? copy.customQuote : price.price === 'On request' ? copy.onRequest : price.price,
      basis: copy.priceBasis
    })),
    inclusions: localized?.inclusions || copy.inclusions,
    exclusions: localized?.exclusions || copy.exclusions
  }
}

function translateCompoundValue(value: string, dictionary: Record<string, string>) {
  return Object.entries(dictionary).reduce((text, [source, translated]) => {
    return text.split(source).join(translated)
  }, value)
}

function translateDayLabel(value: string, locale: Locale) {
  if (locale === 'zh') return value.replace('Day', '第').replace('Days', '第').replace('Final day', '最后一天')
  if (locale === 'de') return value.replace('Day', 'Tag').replace('Days', 'Tage').replace('Final day', 'Letzter Tag').replace('Module', 'Modul')
  if (locale === 'fr') return value.replace('Day', 'Jour').replace('Days', 'Jours').replace('Final day', 'Dernier jour').replace('Module', 'Module')
  if (locale === 'es') return value.replace('Day', 'Dia').replace('Days', 'Dias').replace('Final day', 'Ultimo dia').replace('Module', 'Modulo')
  return value
}

function translatePriceGroup(group: string, copy: (typeof productGenericCopy)[Exclude<Locale, 'en'>]) {
  if (group.includes('Custom quote')) return copy.customQuote
  if (group.includes('On request')) return copy.onRequest
  return translateCompoundValue(group, copy.factValues)
}
