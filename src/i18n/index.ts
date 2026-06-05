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
      homeAria: 'Tengxuan Travel home',
      openMenu: 'Open menu',
      cities: 'Cities',
      company: 'Company',
      attractions: 'Attractions',
      trips: 'Trips',
      product: 'Product',
      planning: 'Planning',
      searchTrips: 'Search trips',
      contact: 'Contact Us',
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
      explore: 'Explore',
      companyProfile: 'Company Profile',
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
        proofText: 'Founded in 2001, listed on NEEQ, with 600+ airline partners and 20,000+ quality customers.'
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
      faqIncluded: 'What is included?',
      faqExcluded: 'What is not included?',
      faqQuote: 'What information is needed for a quote?',
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
      distributionEyebrow: 'Group distribution',
      distributionTitle: 'A 9-location branch network anchored by Beijing headquarters.',
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
        title: 'China trip preparation',
        eyebrow: 'Before you go',
        summary: 'Use this checklist before finalizing hotels, trains, flights, guides, and attraction tickets.',
        sections: [
          {
            title: 'Booking details',
            items: [
              'Full passport names and passport numbers for ticketed services.',
              'Rooming list, bedding needs, and single supplement requirements.',
              'Dietary restrictions and mobility needs.',
              'Preferred pace: compact, balanced, relaxed, or family-friendly.'
            ]
          },
          {
            title: 'On-trip comfort',
            items: [
              'Carry passports for major sights and rail travel.',
              'Use comfortable walking shoes for palace, wall, garden, and mountain routes.',
              'Keep a weather buffer for Zhangjiajie, Guilin, and Great Wall touring.',
              'Confirm payment methods and local contact details before arrival.'
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
      homeAria: 'Tengxuan Travel Startseite',
      openMenu: 'Menu offnen',
      cities: 'Staedte',
      company: 'Unternehmen',
      attractions: 'Highlights',
      trips: 'Reisen',
      product: 'Produkt',
      planning: 'Planung',
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
      explore: 'Entdecken',
      companyProfile: 'Unternehmensprofil',
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
        proofText: 'Gegruendet 2001, NEEQ-gelistet, mit 600+ Airline-Partnern und 20.000+ Qualitaetskunden.'
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
      titleSuffix: 'Stadtguide'
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
      cta: 'Nutzen Sie diese Route als Gruppenprodukt oder passen Sie sie fur Ihren Markt an.'
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
      distributionTitle: 'Ein Netzwerk mit 9 Standorten, verankert in der Pekinger Zentrale.',
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
      homeAria: 'Accueil Tengxuan Travel',
      openMenu: 'Ouvrir le menu',
      cities: 'Villes',
      company: 'Societe',
      attractions: 'Sites',
      trips: 'Voyages',
      product: 'Produit',
      planning: 'Preparation',
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
      explore: 'Explorer',
      companyProfile: 'Profil de la societe',
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
        proofText: 'Cree en 2001, cote NEEQ, avec 600+ partenaires aeriens et 20 000+ clients qualite.'
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
      titleSuffix: 'Guide de ville'
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
      cta: 'Utilisez cette route comme produit groupe fixe ou adaptez-la a votre marche.'
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
      distributionTitle: 'Un reseau de 9 sites ancre par le siege de Pekin.',
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
      homeAria: 'Inicio de Tengxuan Travel',
      openMenu: 'Abrir menu',
      cities: 'Ciudades',
      company: 'Empresa',
      attractions: 'Atracciones',
      trips: 'Viajes',
      product: 'Producto',
      planning: 'Planificacion',
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
      explore: 'Explorar',
      companyProfile: 'Perfil de empresa',
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
        proofText: 'Fundada en 2001, cotizada en NEEQ, con 600+ aerolineas socias y 20,000+ clientes de calidad.'
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
      titleSuffix: 'Guia de ciudad'
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
      cta: 'Use esta ruta como producto de grupo fijo o personalicela para su mercado.'
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
      distributionTitle: 'Una red de 9 ubicaciones con sede central en Pekin.',
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
      homeAria: '腾轩旅行首页',
      openMenu: '打开菜单',
      cities: '城市',
      company: '公司',
      attractions: '景点',
      trips: '线路',
      product: '产品',
      planning: '行前准备',
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
      explore: '探索',
      companyProfile: '公司简介',
      cityGuides: '城市指南',
      attractions: '精选景点',
      travelProducts: '旅行产品',
      productName: '北京-西安-上海',
      plan: '规划',
      beforeYouGo: '行前准备',
      visaEntry: '签证与入境',
      faq: '常见问题',
      contact: '联系',
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
        proofText: '成立于 2001 年，新三板挂牌，拥有 600+ 航司合作伙伴和 20,000+ 优质客户。'
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
      faqIncluded: '包含什么？',
      faqExcluded: '不包含什么？',
      faqQuote: '询价需要提供哪些信息？',
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
      distributionEyebrow: '集团布局',
      distributionTitle: '以北京总部为核心的 9 地分支网络。',
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
      title: 'Vorbereitung der China-Reise',
      eyebrow: 'Vor der Reise',
      summary: 'Nutzen Sie diese Checkliste vor der finalen Buchung von Hotels, Zuegen, Fluegen, Guides und Tickets.',
      sections: [
        {
          title: 'Buchungsdetails',
          items: [
            'Vollstaendige Passnamen und Passnummern fur ticketierte Leistungen.',
            'Zimmerliste, Bettenwuensche und Einzelzimmerzuschlaege.',
            'Ernaehrungs- und Mobilitaetsanforderungen.',
            'Gewuenschtes Tempo: kompakt, ausgewogen, entspannt oder familienfreundlich.'
          ]
        },
        {
          title: 'Komfort unterwegs',
          items: [
            'Paesse fur wichtige Sehenswuerdigkeiten und Bahnreisen mitnehmen.',
            'Bequeme Schuhe fur Palast-, Mauer-, Garten- und Bergrouten einplanen.',
            'Wetterpuffer fur Zhangjiajie, Guilin und die Grosse Mauer lassen.',
            'Zahlungsmethoden und lokale Kontaktdaten vor Ankunft bestaetigen.'
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
      title: 'Preparation du voyage en Chine',
      eyebrow: 'Avant le depart',
      summary: 'Utilisez cette liste avant de finaliser hotels, trains, vols, guides et billets de sites.',
      sections: [
        { title: 'Details de reservation', items: ['Noms et numeros de passeport complets pour les services avec billet.', 'Repartition des chambres, literie et supplements single.', 'Restrictions alimentaires et besoins de mobilite.', 'Rythme prefere: compact, equilibre, detendu ou familial.'] },
        { title: 'Confort sur place', items: ['Porter les passeports pour les sites majeurs et le train.', 'Prevoir des chaussures confortables.', 'Garder une marge meteo pour Zhangjiajie, Guilin et la Grande Muraille.', 'Confirmer paiements et contacts locaux avant arrivee.'] }
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
      title: 'Preparacion del viaje a China',
      eyebrow: 'Antes de viajar',
      summary: 'Use esta lista antes de cerrar hoteles, trenes, vuelos, guias y entradas.',
      sections: [
        { title: 'Datos de reserva', items: ['Nombres completos y numeros de pasaporte para servicios con billete.', 'Lista de habitaciones, camas y suplementos individuales.', 'Restricciones alimentarias y necesidades de movilidad.', 'Ritmo preferido: compacto, equilibrado, relajado o familiar.'] },
        { title: 'Comodidad durante el viaje', items: ['Llevar pasaportes para sitios principales y trenes.', 'Usar calzado comodo para palacios, murallas, jardines y montanas.', 'Dejar margen de clima para Zhangjiajie, Guilin y la Gran Muralla.', 'Confirmar pagos y contactos locales antes de llegar.'] }
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
      title: '中国旅行准备清单',
      eyebrow: '行前准备',
      summary: '在确认酒店、火车、航班、导游和景点门票前，可先用这份清单核对关键资料。',
      sections: [
        { title: '预订信息', items: ['用于出票服务的完整护照姓名和护照号码。', '分房名单、床型需求和单房差要求。', '饮食限制和行动便利需求。', '偏好节奏：紧凑、均衡、轻松或亲子友好。'] },
        { title: '途中舒适度', items: ['主要景点和铁路出行需随身携带护照。', '宫殿、长城、园林和山地线路建议穿舒适步行鞋。', '张家界、桂林和长城游览建议预留天气缓冲。', '到达前确认支付方式和当地联系方式。'] }
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
    beijing: { name: '北京', region: '华北', summary: '帝都历史、胡同、故宫和长城一日游。', duration: '3-5天' },
    shanghai: { name: '上海', region: '华东', summary: '海派街区、天际线、设计酒店和便捷高铁连接。', duration: '2-4天' },
    xian: { name: '西安', region: '西北', summary: '古都气质、城墙、回民街美食和兵马俑。', duration: '2-3天' },
    chengdu: { name: '成都', region: '西南', summary: '熊猫、茶馆、川菜和松弛的城市节奏。', duration: '2-4天' },
    guilin: { name: '桂林', region: '华南', summary: '喀斯特山水、漓江游船、骑行和乡村住宿。', duration: '2-4天' },
    hangzhou: { name: '杭州', region: '华东', summary: '西湖、茶村、寺庙和上海周边轻松延伸。', duration: '1-3天' },
    suzhou: { name: '苏州', region: '华东', summary: '古典园林、运河、丝绸文化和精致一日游。', duration: '1-2天' },
    guangzhou: { name: '广州', region: '华南', summary: '粤菜、商贸文化、珠江夜景和大湾区连接。', duration: '1-3天' },
    shenzhen: { name: '深圳', region: '华南', summary: '现代设计、科技城区、主题乐园和香港连接。', duration: '1-3天' },
    chongqing: {
      name: '重庆',
      region: '西南',
      summary: '山城街巷、火锅、长江游轮和立体夜景。',
      duration: '2-3天',
      alt: '江对岸视角下的重庆夜景天际线',
      signature: '重庆是一座层次丰富的山城，轨道交通、夜景、火锅、过江体验和长江游轮出发本身就构成旅行亮点。',
      bestFor: ['夜景', '火锅', '长江线路'],
      highlights: ['洪崖洞片区', '李子坝轻轨', '磁器口古镇', '长江游轮码头'],
      itinerary: [
        '第1天：山城观景点、江边夜景和火锅。',
        '第2天：古镇漫步、城市交通景观，以及博物馆或洞穴延伸。',
        '第3天：开启长江游轮，或继续前往成都/张家界。'
      ],
      travelNote: '地图上的距离看起来很近，实际常有坡道和高差；需要仔细安排接驳并预留缓冲时间。',
      season: '春秋季最舒适；夏季可能非常炎热。',
      connections: '高铁紧密连接重庆与成都，也可继续飞往张家界和华东城市。'
    },
    zhangjiajie: { name: '张家界', region: '华中', summary: '砂岩峰林、玻璃桥、索道和高冲击自然景观。', duration: '2-3天' },
    'hong-kong': { name: '香港', region: '大湾区', summary: '海港天际线、高效交通、海岛徒步、点心和国际航班。', duration: '2-4天' }
  },
  de: {
    beijing: { name: 'Peking', region: 'Nordchina', summary: 'Kaiserliche Geschichte, Hutongs, Verbotene Stadt und Ausfluege zur Grossen Mauer.', duration: '3-5 Tage' },
    shanghai: { name: 'Shanghai', region: 'Ostchina', summary: 'Art-Deco-Strassen, Skyline, Designhotels und schnelle Bahnverbindungen.', duration: '2-4 Tage' },
    xian: { name: "Xi'an", region: 'Nordwestchina', summary: 'Alte Hauptstadt, Stadtmauer, muslimisches Viertel und Terrakotta-Armee.', duration: '2-3 Tage' },
    chengdu: { name: 'Chengdu', region: 'Suedwestchina', summary: 'Pandas, Teehaeuser, scharfes Essen und entspannte Sichuan-Kultur.', duration: '2-4 Tage' },
    guilin: { name: 'Guilin', region: 'Suedchina', summary: 'Karstberge, Li-Fluss-Kreuzfahrten, Radrouten und Aufenthalte auf dem Land.', duration: '2-4 Tage' },
    hangzhou: { name: 'Hangzhou', region: 'Ostchina', summary: 'Westsee, Teedoerfer, Tempel und eine ruhige Erweiterung ab Shanghai.', duration: '1-3 Tage' },
    suzhou: { name: 'Suzhou', region: 'Ostchina', summary: 'Klassische Gaerten, Kanaele, Seidenkultur und feine Tagesausfluege ab Shanghai.', duration: '1-2 Tage' },
    guangzhou: { name: 'Guangzhou', region: 'Suedchina', summary: 'Kantonesische Kueche, Handelsgeschichte, Flussabende und Bay-Area-Verbindungen.', duration: '1-3 Tage' },
    shenzhen: { name: 'Shenzhen', region: 'Suedchina', summary: 'Modernes Design, Technologieviertel, Themenparks und Hongkong-Anbindung.', duration: '1-3 Tage' },
    chongqing: {
      name: 'Chongqing',
      region: 'Suedwestchina',
      summary: 'Bergstadt-Strassen, Hotpot, Jangtse-Kreuzfahrten und dramatische Nachtblicke.',
      duration: '2-3 Tage',
      alt: 'Chongqing-Skyline bei Nacht ueber dem Fluss',
      signature: 'Chongqing ist eine vielschichtige Bergstadt, in der Nahverkehr, Nachtblicke, Hotpot, Flussueberquerungen und Jangtse-Kreuzfahrtstarts selbst zu Reiseerlebnissen werden.',
      bestFor: ['Nachtblicke', 'Hotpot', 'Jangtse-Routen'],
      highlights: ['Hongya-Cave-Viertel', 'Liziba-Monorail', 'Altstadt Ciqikou', 'Jangtse-Kreuzfahrtpier'],
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
    chengdu: { name: 'Chengdu', region: 'Sud-ouest de la Chine', summary: 'Pandas, maisons de the, cuisine epicee et culture sichuanaise detendue.', duration: '2-4 jours' },
    guilin: { name: 'Guilin', region: 'Chine du Sud', summary: 'Pics karstiques, croisieres sur la riviere Li, velo et sejours campagne.', duration: '2-4 jours' },
    hangzhou: { name: 'Hangzhou', region: 'Chine de l Est', summary: 'Lac de l Ouest, villages de the, temples et extension douce depuis Shanghai.', duration: '1-3 jours' },
    suzhou: { name: 'Suzhou', region: 'Chine de l Est', summary: 'Jardins classiques, canaux, soie et excursion raffinee depuis Shanghai.', duration: '1-2 jours' },
    guangzhou: { name: 'Guangzhou', region: 'Chine du Sud', summary: 'Cuisine cantonaise, culture commerciale, soirees sur la riviere et liens Greater Bay.', duration: '1-3 jours' },
    shenzhen: { name: 'Shenzhen', region: 'Chine du Sud', summary: 'Design moderne, quartiers tech, parcs a theme et connexions Hong Kong.', duration: '1-3 jours' },
    chongqing: {
      name: 'Chongqing',
      region: 'Sud-ouest de la Chine',
      summary: 'Rues de ville montagne, fondue hotpot, croisieres Yangtze et vues nocturnes.',
      duration: '2-3 jours',
      alt: 'Skyline de Chongqing de nuit vue depuis la riviere',
      signature: 'Chongqing est une ville montagne en strates, ou metro aerien, vues de nuit, hotpot, traversees de riviere et departs de croisieres Yangtze deviennent des temps forts.',
      bestFor: ['Vues nocturnes', 'Hotpot', 'Routes Yangtze'],
      highlights: ['Quartier Hongya Cave', 'Monorail Liziba', 'Vieille ville Ciqikou', 'Embarcadere des croisieres Yangtze'],
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
    chengdu: { name: 'Chengdu', region: 'Suroeste de China', summary: 'Pandas, casas de te, comida picante y cultura relajada de Sichuan.', duration: '2-4 dias' },
    guilin: { name: 'Guilin', region: 'Sur de China', summary: 'Picos karsticos, cruceros por el rio Li, rutas en bici y estancias rurales.', duration: '2-4 dias' },
    hangzhou: { name: 'Hangzhou', region: 'Este de China', summary: 'Lago del Oeste, aldeas de te, templos y extension tranquila desde Shanghai.', duration: '1-3 dias' },
    suzhou: { name: 'Suzhou', region: 'Este de China', summary: 'Jardines clasicos, canales, seda y excursion refinada desde Shanghai.', duration: '1-2 dias' },
    guangzhou: { name: 'Guangzhou', region: 'Sur de China', summary: 'Comida cantonesa, cultura comercial, noches junto al rio y conexiones de la Bahia.', duration: '1-3 dias' },
    shenzhen: { name: 'Shenzhen', region: 'Sur de China', summary: 'Diseno moderno, distritos tecnologicos, parques tematicos y conexion con Hong Kong.', duration: '1-3 dias' },
    chongqing: {
      name: 'Chongqing',
      region: 'Suroeste de China',
      summary: 'Calles de ciudad montana, hotpot, cruceros Yangtze y vistas nocturnas.',
      duration: '2-3 dias',
      alt: 'Skyline nocturno de Chongqing visto desde el rio',
      signature: 'Chongqing es una ciudad montana por capas, donde el transporte, las vistas nocturnas, el hotpot, los cruces de rio y las salidas de cruceros Yangtze son parte central del viaje.',
      bestFor: ['Vistas nocturnas', 'Hotpot', 'Rutas Yangtze'],
      highlights: ['Zona de Hongya Cave', 'Monorriel Liziba', 'Casco antiguo Ciqikou', 'Muelle de cruceros Yangtze'],
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
    'beijing-xian-shanghai': { name: '北京-西安-上海', summary: '8天经典遗产线路，覆盖北京、西安高铁和上海城市游览。', meta: '8天 · USD 892起' },
    'classic-first-time-china': { name: '首次访华经典线路', summary: '北京、西安、桂林和上海，配私家导游和交通规划。', meta: '10天 · USD 2,380起' },
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
    'beijing-xian-shanghai': {
      name: '北京-西安-上海',
      eyebrow: '8天中国经典遗产陪同游',
      duration: '8天 / 7晚',
      route: '北京 · 西安 · 上海 · 北京',
      summary:
        '面向国际团队的紧凑首次访华线路，覆盖北京皇家文化、西安兵马俑和上海经典城市景观，包含导游、专车、高铁和四星酒店选项。',
      galleryTitle: '皇家北京、古都西安与浦江上海。'
    },
    'classic-first-time-china': { name: '首次访华经典线路', eyebrow: '10天私家中国入门线路', duration: '10天 / 9晚', route: '北京 · 西安 · 桂林 · 上海', summary: '面向海外休闲客人的首次访华私家线路，串联核心遗产、山水章节和上海收尾。', galleryTitle: '世界遗产、喀斯特山水和上海城市收尾。' },
    'beijing-xian-heritage': { name: '北京+西安遗产之旅', eyebrow: '6天古都线路', duration: '6天 / 5晚', route: '北京 · 西安', summary: '适合希望在一周内游览长城、故宫和兵马俑的紧凑古都产品。', galleryTitle: '两座古都，以高铁连接。' },
    'shanghai-discovery': { name: '5日上海探索', eyebrow: '5天城市与水乡短线', duration: '5天 / 4晚', route: '上海 · 苏州或水乡', summary: '低门槛上海产品，覆盖外滩、老城、江南园林或水乡，并预留美食与购物时间。', galleryTitle: '都市上海与江南周边。' },
    'chengdu-chongqing-zhangjiajie': { name: '成都、重庆与张家界之旅', eyebrow: '10天熊猫、山城与峰林线路', duration: '10天 / 9晚', route: '成都 · 重庆 · 张家界', summary: '结合熊猫、川渝美食、重庆夜景和张家界山水的高识别度线路。', galleryTitle: '熊猫、火锅、江城夜景与砂岩峰林。' },
    'beijing-zhangjiajie-shanghai': { name: '中国城市+自然：北京、张家界、上海', eyebrow: '9天经典城市与自然线路', duration: '9天 / 8晚', route: '北京 · 张家界 · 上海', summary: '用张家界替代常规古都章节，适合摄影和自然偏好的首次访华客人。', galleryTitle: '经典门户城市与震撼自然核心。' },
    'guilin-yangshuo-landscape': { name: '桂林山水度假', eyebrow: '5天漓江与阳朔乡村线路', duration: '5天 / 4晚', route: '桂林 · 阳朔 · 龙脊可选', summary: '以山水为主的中国南方延伸线路，含漓江、阳朔乡村和可选梯田。', galleryTitle: '喀斯特山水、漓江游船和乡村节奏。' },
    'business-leisure-custom': { name: '商务+休闲定制行程', eyebrow: '灵活会奖与商务旅行延伸', duration: '灵活 / 定制', route: '北京 · 上海 · 广州 · 深圳 · 定制城市', summary: '面向商务代表团、会议、翻译、供应商拜访和短时文化体验的定制产品。', galleryTitle: '商务后勤与可选文化时间。' },
    'private-family-china': { name: '私家亲子中国游', eyebrow: '8-12天亲子友好私家线路', duration: '8-12天 / 定制', route: '北京 · 西安 · 上海 · 成都或桂林可选', summary: '节奏更慢、酒店位置更合理、导游风格更亲子的私家家庭线路。', galleryTitle: '按家庭节奏调整的经典中国。' }
  },
  de: {
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
    'shanghai-discovery': { name: '5 Tage Shanghai Discovery', eyebrow: '5 Tage Stadt- und Wasserstadtpause', duration: '5 Tage / 4 Naechte', route: 'Shanghai · Suzhou oder Wasserstadt', summary: 'Niedrigschwellige Shanghai-Route mit Bund, Altstadt und Jiangnan-Ausflug.', galleryTitle: 'Urbanes Shanghai mit Jiangnan-Seitenreise.' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu, Chongqing & Zhangjiajie', eyebrow: '10 Tage Pandas, Bergstadt und Avatar-Landschaften', duration: '10 Tage / 9 Naechte', route: 'Chengdu · Chongqing · Zhangjiajie', summary: 'Intensive Route mit Pandas, Sichuan-Kueche, Chongqing-Nachtblicken und Zhangjiajie.', galleryTitle: 'Pandas, Hotpot, Flusslichter und Sandsteinspitzen.' },
    'beijing-zhangjiajie-shanghai': { name: 'China + Natur: Peking, Zhangjiajie & Shanghai', eyebrow: '9 Tage klassische Stadt- und Naturroute', duration: '9 Tage / 8 Naechte', route: 'Peking · Zhangjiajie · Shanghai', summary: 'Alternative Erstbesucherroute mit Peking, Shanghai und dramatischem Naturkapitel.', galleryTitle: 'Klassische Gateways mit Naturmittelpunkt.' },
    'guilin-yangshuo-landscape': { name: 'Guilin Landschaftsauszeit', eyebrow: '5 Tage Li-Fluss und Yangshuo-Land', duration: '5 Tage / 4 Naechte', route: 'Guilin · Yangshuo · Longji optional', summary: 'Landschaftsorientierte Suedchina-Erweiterung mit Li-Fluss, Yangshuo und Reisterrassenoption.', galleryTitle: 'Karstberge, Flussfahrt und ruhiges Landtempo.' },
    'business-leisure-custom': { name: 'Business + Leisure nach Mass', eyebrow: 'Flexible MICE- und Geschaeftsreise-Erweiterung', duration: 'Flexibel / individuell', route: 'Peking · Shanghai · Guangzhou · Shenzhen · Wunschstaedte', summary: 'Massgeschneidert fur Delegationen, Meetings, Dolmetscher, Besuche und Kulturmodule.', galleryTitle: 'Geschaeftslogistik mit optionaler Kulturzeit.' },
    'private-family-china': { name: 'Private Familienreise China', eyebrow: '8-12 Tage familienfreundliche Privatreise', duration: '8-12 Tage / individuell', route: "Peking · Xi'an · Shanghai · Chengdu oder Guilin", summary: 'Private Familienroute mit langsamerem Tempo, passenden Hotels und kinderfreundlichen Guides.', galleryTitle: 'Klassisches China im Familientempo.' }
  },
  fr: {
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
    'shanghai-discovery': { name: '5 jours Shanghai Discovery', eyebrow: 'Pause ville et water-town de 5 jours', duration: '5 jours / 4 nuits', route: 'Shanghai · Suzhou ou water town', summary: 'Route Shanghai facile avec Bund, vieille ville et excursion Jiangnan.', galleryTitle: 'Shanghai urbain avec extension Jiangnan.' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu, Chongqing & Zhangjiajie', eyebrow: '10 jours pandas, ville montagne et paysages Avatar', duration: '10 jours / 9 nuits', route: 'Chengdu · Chongqing · Zhangjiajie', summary: 'Route forte avec pandas, cuisine du Sichuan, vues de Chongqing et montagnes de Zhangjiajie.', galleryTitle: 'Pandas, hotpot, lumieres de fleuve et pics de gres.' },
    'beijing-zhangjiajie-shanghai': { name: 'Chine + nature: Pekin, Zhangjiajie & Shanghai', eyebrow: '9 jours ville classique et nature', duration: '9 jours / 8 nuits', route: 'Pekin · Zhangjiajie · Shanghai', summary: 'Alternative premier voyage avec Pekin, Shanghai et chapitre nature spectaculaire.', galleryTitle: 'Portes classiques avec centre nature intense.' },
    'guilin-yangshuo-landscape': { name: 'Echappee paysages de Guilin', eyebrow: '5 jours riviere Li et campagne de Yangshuo', duration: '5 jours / 4 nuits', route: 'Guilin · Yangshuo · Longji option', summary: 'Extension sud Chine centree paysages avec riviere Li, Yangshuo et option rizieres.', galleryTitle: 'Karst, croisiere et rythme campagne.' },
    'business-leisure-custom': { name: 'Business + loisirs sur mesure', eyebrow: 'Extension MICE et affaires flexible', duration: 'Flexible / sur mesure', route: 'Pekin · Shanghai · Guangzhou · Shenzhen · villes sur mesure', summary: 'Produit pour delegations, reunions, interpretes, visites fournisseurs et modules culturels.', galleryTitle: 'Logistique business avec temps culturel optionnel.' },
    'private-family-china': { name: 'Voyage prive famille en Chine', eyebrow: 'Itineraire prive famille de 8-12 jours', duration: '8-12 jours / sur mesure', route: "Pekin · Xi'an · Shanghai · Chengdu ou Guilin", summary: 'Route famille au rythme plus doux avec hotels pratiques et guides adaptes aux enfants.', galleryTitle: 'Chine classique ajustee au rythme famille.' }
  },
  es: {
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
    'shanghai-discovery': { name: '5 dias Shanghai Discovery', eyebrow: 'Escapada ciudad y water-town de 5 dias', duration: '5 dias / 4 noches', route: 'Shanghai · Suzhou o water town', summary: 'Ruta facil de Shanghai con Bund, ciudad antigua y excursion Jiangnan.', galleryTitle: 'Shanghai urbano con excursion Jiangnan.' },
    'chengdu-chongqing-zhangjiajie': { name: 'Chengdu, Chongqing y Zhangjiajie', eyebrow: '10 dias pandas, ciudad montana y paisajes Avatar', duration: '10 dias / 9 noches', route: 'Chengdu · Chongqing · Zhangjiajie', summary: 'Ruta intensa con pandas, comida Sichuan, vistas de Chongqing y montanas de Zhangjiajie.', galleryTitle: 'Pandas, hotpot, luces de rio y picos de arenisca.' },
    'beijing-zhangjiajie-shanghai': { name: 'China + naturaleza: Pekin, Zhangjiajie y Shanghai', eyebrow: '9 dias de ciudades clasicas y naturaleza', duration: '9 dias / 8 noches', route: 'Pekin · Zhangjiajie · Shanghai', summary: 'Alternativa para primer viaje con Pekin, Shanghai y un capitulo natural dramatico.', galleryTitle: 'Puertas clasicas con centro natural intenso.' },
    'guilin-yangshuo-landscape': { name: 'Escapada paisajistica Guilin', eyebrow: '5 dias rio Li y campo de Yangshuo', duration: '5 dias / 4 noches', route: 'Guilin · Yangshuo · Longji opcional', summary: 'Extension del sur de China centrada en paisaje con rio Li, Yangshuo y arrozales opcionales.', galleryTitle: 'Karst, crucero fluvial y ritmo rural.' },
    'business-leisure-custom': { name: 'Negocios + ocio a medida', eyebrow: 'Extension flexible MICE y negocios', duration: 'Flexible / a medida', route: 'Pekin · Shanghai · Guangzhou · Shenzhen · ciudades a medida', summary: 'Producto para delegaciones, reuniones, interpretes, visitas a proveedores y modulos culturales.', galleryTitle: 'Logistica de negocios con tiempo cultural opcional.' },
    'private-family-china': { name: 'Tour privado familiar China', eyebrow: 'Itinerario privado familiar de 8-12 dias', duration: '8-12 dias / a medida', route: "Pekin · Xi'an · Shanghai · Chengdu o Guilin", summary: 'Ruta familiar privada con ritmo mas lento, hoteles practicos y guias para ninos.', galleryTitle: 'China clasica ajustada al ritmo familiar.' }
  }
}

const attractionTranslations: Partial<Record<Locale, Record<string, Partial<Attraction>>>> = {
  zh: {
    'Great Wall': { city: '北京', name: '长城', summary: '适合安排私家车接送、弹性徒步节奏和相对安静的修缮段。' },
    'Terracotta Army': { city: '西安', name: '兵马俑', summary: '通过导游讲解理解秦帝国雄心、陶俑工艺和考古现场规模。' },
    'The Bund': { city: '上海', name: '外滩', summary: '黄浦江两岸同时呈现历史建筑和浦东现代天际线。' },
    'Panda Base': { city: '成都', name: '熊猫基地', summary: '适合清晨安排的大熊猫、小熊猫和保护科普体验。' },
    'Li River': { city: '桂林', name: '漓江', summary: '穿行桂林与阳朔喀斯特山水的一日慢节奏景观路线。' },
    'West Lake': { city: '杭州', name: '西湖', summary: '由诗词、堤岸、寺塔和园林共同塑造的湖山文化景观。' }
  },
  de: {
    'Great Wall': { city: 'Peking', name: 'Grosse Mauer', summary: 'Am besten mit Privattransfer, flexiblem Wandertempo und ruhigerem restauriertem Abschnitt.' },
    'Terracotta Army': { city: "Xi'an", name: 'Terrakotta-Armee' },
    'The Bund': { city: 'Shanghai', name: 'Bund' },
    'Panda Base': { city: 'Chengdu', name: 'Panda-Basis' },
    'Li River': { city: 'Guilin', name: 'Li-Fluss' },
    'West Lake': { city: 'Hangzhou', name: 'Westsee' }
  },
  fr: {
    'Great Wall': { city: 'Pekin', name: 'Grande Muraille', summary: 'Ideal avec transfert prive, rythme de marche flexible et section restauree plus calme.' },
    'Terracotta Army': { city: "Xi'an", name: 'Armee de terre cuite' },
    'The Bund': { city: 'Shanghai', name: 'Le Bund' },
    'Panda Base': { city: 'Chengdu', name: 'Base des pandas' },
    'Li River': { city: 'Guilin', name: 'Riviere Li' },
    'West Lake': { city: 'Hangzhou', name: 'Lac de l Ouest' }
  },
  es: {
    'Great Wall': { city: 'Pekin', name: 'Gran Muralla', summary: 'Mejor con traslado privado, ritmo flexible de caminata y una seccion restaurada mas tranquila.' },
    'Terracotta Army': { city: "Xi'an", name: 'Guerreros de Terracota' },
    'The Bund': { city: 'Shanghai', name: 'El Bund' },
    'Panda Base': { city: 'Chengdu', name: 'Base de pandas' },
    'Li River': { city: 'Guilin', name: 'Rio Li' },
    'West Lake': { city: 'Hangzhou', name: 'Lago del Oeste' }
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
      imageCredit: '图片来自 Unsplash，并沿用当前官网已有媒体配置。'
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
      { value: '833741', label: '新三板代码' },
      { value: '600+', label: '航司合作伙伴' },
      { value: '20,000+', label: '优质客户' },
      { value: '9', label: '分支城市' },
      { value: '700', label: '团队成员' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['公司办公区', '团队合影', '服务场景', '分支网络'][index],
      caption: ['北京办公区与集团品牌接待空间。', '集团团队文化和员工活动瞬间。', '团队协作与旅行服务文化。', '公司活动和分支团队展示。'][index]
    })),
    overview: [
      { title: '稳定运营基础', text: '腾轩旅游集团有限公司成立于 2001 年，总部位于北京，注册资本 11,053 万元。' },
      { title: '资本市场背景', text: '集团于 2015 年 10 月在全国中小企业股份转让系统挂牌，证券代码 833741。' },
      { title: '广泛业务覆盖', text: '业务覆盖大交通、自由行票务、差旅管理、在线预订、航空货运和旅行资源配置。' }
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
      { city: '北京', role: '总部' },
      { city: '西安', role: '分公司' },
      { city: '上海', role: '分公司' },
      { city: '成都', role: '分公司' },
      { city: '合肥', role: '分公司' },
      { city: '广州', role: '分公司' },
      { city: '香港', role: '分公司' },
      { city: '美国', role: '海外分支' },
      { city: '彬州', role: '分公司' }
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
      label: ['办公', '团队', '活动', '活动'][index],
      title: ['集团品牌接待区', '户外团队活动', '分支活动团队', '旅行文化活动'][index]
    })),
    honorImages: baseCompanyDetail.honorImages.map((image, index) => ({
      ...image,
      label: ['证书', '证书', '资质', '奖项'][index],
      title: ['高新技术企业证书', '专精特新中小企业证书', 'IATA 与 ARC 资质', '合作伙伴奖杯'][index]
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
      { value: '833741', label: 'NEEQ-Code' },
      { value: '600+', label: 'Airline-Partner' },
      { value: '20,000+', label: 'Qualitaetskunden' },
      { value: '9', label: 'Standorte' },
      { value: '700', label: 'Teammitglieder' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['Buerobereich', 'Teamfoto', 'Serviceszene', 'Standortnetz'][index],
      caption: ['Pekinger Buero und Markenempfang.', 'Teamkultur und Mitarbeitermomente.', 'Zusammenarbeit und Servicekultur.', 'Aktivitaeten und Standortpraesenz.'][index]
    })),
    overview: [
      { title: 'Etablierte Betriebsbasis', text: 'Tengxuan Tourism Group Co., Ltd. wurde 2001 gegruendet und hat seinen Hauptsitz in Peking.' },
      { title: 'Kapitalmarktprofil', text: 'Die Gruppe wurde 2015 im National Equities Exchange and Quotations unter Code 833741 gelistet.' },
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
      label: ['Zertifikat', 'Zertifikat', 'Qualifikation', 'Auszeichnung'][index],
      title: ['High-Tech-Enterprise-Zertifikat', 'Specialized-New-SME-Zertifikat', 'IATA- und ARC-Qualifikationen', 'Partnerauszeichnung'][index]
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
      { value: '833741', label: 'Code NEEQ' },
      { value: '600+', label: 'Partenaires aeriens' },
      { value: '20,000+', label: 'Clients qualite' },
      { value: '9', label: 'Villes branches' },
      { value: '700', label: 'Membres equipe' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['Bureaux', 'Photo equipe', 'Scene service', 'Reseau branches'][index],
      caption: ['Bureaux de Pekin et espace reception marque.', 'Culture equipe et moments employes.', 'Collaboration et culture service voyage.', 'Activites et presence des equipes locales.'][index]
    })),
    overview: [
      { title: 'Base operationnelle etablie', text: 'Tengxuan Tourism Group Co., Ltd. a ete cree en 2001 et son siege est a Pekin.' },
      { title: 'Profil marche public', text: 'Le groupe a ete cote au National Equities Exchange and Quotations en 2015 sous le code 833741.' },
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
      label: ['Certificat', 'Certificat', 'Qualification', 'Prix'][index],
      title: ['Certificat High-Tech Enterprise', 'Certificat Specialized New SME', 'Qualifications IATA et ARC', 'Trophee partenaire'][index]
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
      { value: '833741', label: 'Codigo NEEQ' },
      { value: '600+', label: 'Aerolineas socias' },
      { value: '20,000+', label: 'Clientes de calidad' },
      { value: '9', label: 'Ciudades sede' },
      { value: '700', label: 'Equipo' }
    ],
    photoSlots: baseCompanyDetail.photoSlots.map((slot, index) => ({
      ...slot,
      label: ['Oficina', 'Foto de equipo', 'Escena de servicio', 'Red de sedes'][index],
      caption: ['Oficina de Pekin y recepcion de marca.', 'Cultura de equipo y momentos de empleados.', 'Colaboracion y cultura de servicio turistico.', 'Actividades y presencia de equipos locales.'][index]
    })),
    overview: [
      { title: 'Base operativa establecida', text: 'Tengxuan Tourism Group Co., Ltd. fue fundada en 2001 y tiene sede en Pekin.' },
      { title: 'Perfil de mercado publico', text: 'El grupo cotiza en National Equities Exchange and Quotations desde 2015 con codigo 833741.' },
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
      label: ['Certificado', 'Certificado', 'Calificacion', 'Premio'][index],
      title: ['Certificado High-Tech Enterprise', 'Certificado Specialized New SME', 'Calificaciones IATA y ARC', 'Trofeo de socio'][index]
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
    factLabels: { Starts: '起点', Ends: '终点', Hotels: '酒店', Guide: '导游', Transport: '交通', 'Best for': '适合' },
    factValues: {
      Custom: '定制',
      Beijing: '北京',
      Shanghai: '上海',
      Chengdu: '成都',
      Zhangjiajie: '张家界',
      Guilin: '桂林',
      "Xi'an": '西安',
      'Private local guides': '私家当地导游',
      'Private local guide': '私家当地导游',
      'Private vehicle': '私家车',
      'Private vehicle + rail/flight': '私家车 + 高铁/航班',
      'Family-friendly guides': '亲子友好导游',
      'Families and multi-gen groups': '家庭和多代同游',
      'Inbound leisure groups': '入境休闲团队',
      'Short heritage trips': '短线遗产游',
      'First-time private travelers': '首次访华私家游客'
      ,
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
    facts: base.facts.map((fact) => ({
      label: copy.factLabels[fact.label] || fact.label,
      value: copy.factValues[fact.value] || translateCompoundValue(fact.value, copy.factValues)
    })),
    days: base.days.map((day, index) => ({
      ...day,
      day: translateDayLabel(day.day, currentLocale.value),
      city: translateCompoundValue(day.city, copy.factValues),
      title: `${copy.dayPlan} ${index + 1}`,
      summary: copy.daySummary,
      sights: day.sights.slice(0, 4).map((sight) => translateCompoundValue(sight, copy.factValues))
    })),
    gallery: base.gallery.map((image) => ({
      ...image,
      city: translateCompoundValue(image.city, copy.factValues),
      title: translateCompoundValue(image.title, copy.factValues)
    })),
    hotels: base.hotels.map((hotel) => ({
      city: translateCompoundValue(hotel.city, copy.factValues),
      hotel: copy.priceBasis
    })),
    prices: base.prices.map((price) => ({
      group: translatePriceGroup(price.group, copy),
      price: price.price === 'Custom quote' ? copy.customQuote : price.price === 'On request' ? copy.onRequest : price.price,
      basis: copy.priceBasis
    })),
    inclusions: copy.inclusions,
    exclusions: copy.exclusions
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
