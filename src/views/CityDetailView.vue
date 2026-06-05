<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const { attractionDetails, cities, tourProducts } = useTravelContent()

const city = computed(() => cities.value.find((item) => item.slug === route.params.slug) ?? cities.value[0])
const nearbyCities = computed(() => cities.value.filter((item) => item.slug !== city.value.slug).slice(0, 3))
const cityAttractions = computed(() =>
  attractionDetails.value.filter((item) => item.city === city.value.name).slice(0, 4)
)
const cityProducts = computed(() =>
  tourProducts.value
    .filter((product) => routeMentionsCity(product.route, city.value.name))
    .slice(0, 3)
)
const cityFaq = computed(() => [
  {
    question: t('city.faqBestFor', { city: city.value.name }),
    answer: `${city.value.name} works best for ${city.value.bestFor.join(', ').toLowerCase()} travelers. ${city.value.signature}`
  },
  {
    question: t('city.faqStay', { city: city.value.name }),
    answer: `${city.value.duration || '2-4 days'} is the usual planning range. ${city.value.itinerary[0] || city.value.travelNote}`
  },
  {
    question: t('city.faqSeason', { city: city.value.name }),
    answer: city.value.season
  },
  {
    question: t('city.faqTransport', { city: city.value.name }),
    answer: city.value.connections
  }
])

function routeMentionsCity(route: string, name: string) {
  const normalizedRoute = normalizeRouteText(route)
  const normalizedCity = normalizeRouteText(name)
  return normalizedRoute.includes(normalizedCity)
}

function normalizeRouteText(value: string) {
  return value.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, '')
}
</script>

<template>
  <article class="city-detail-page">
    <section class="city-detail-hero" aria-labelledby="city-detail-title">
      <div class="city-detail-copy">
        <RouterLink class="product-back-link" :to="{ name: 'cities' }">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
          {{ t('city.allGuides') }}
        </RouterLink>
        <p class="product-eyebrow">{{ city.region }} · {{ city.duration }}</p>
        <h1 id="city-detail-title">{{ city.name }}</h1>
        <p>{{ city.signature }}</p>
      </div>
      <figure class="city-detail-media">
        <img v-if="city.image" :src="city.image" :alt="city.alt" width="1100" height="733" loading="eager" fetchpriority="high" />
        <figcaption>{{ city.summary }}</figcaption>
      </figure>
    </section>

    <section class="city-detail-facts" :aria-label="t('city.factsAria')">
      <div>
        <span>{{ t('city.bestFor') }}</span>
        <strong>{{ city.bestFor.join(' · ') }}</strong>
      </div>
      <div>
        <span>{{ t('city.recommendedStay') }}</span>
        <strong>{{ city.duration }}</strong>
      </div>
      <div>
        <span>{{ t('city.season') }}</span>
        <strong>{{ city.season }}</strong>
      </div>
      <div>
        <span>{{ t('city.transport') }}</span>
        <strong>{{ city.connections }}</strong>
      </div>
    </section>

    <section class="city-detail-section">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.whatToSee') }}</p>
        <h2>{{ t('city.coreExperiences') }}</h2>
      </div>
      <div class="city-pill-grid">
        <span v-for="highlight in city.highlights" :key="highlight">{{ highlight }}</span>
      </div>
    </section>

    <section class="city-detail-section city-route-section">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.pace') }}</p>
        <h2>{{ t('city.rhythm') }}</h2>
      </div>
      <ol class="city-itinerary-list">
        <li v-for="step in city.itinerary" :key="step">{{ step }}</li>
      </ol>
    </section>

    <section v-if="cityAttractions.length || cityProducts.length" class="city-detail-section" aria-labelledby="city-links-title">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.internalLinks') }}</p>
        <h2 id="city-links-title">{{ t('city.linkTitle', { city: city.name }) }}</h2>
      </div>
      <div class="seo-link-grid">
        <RouterLink
          v-for="item in cityAttractions"
          :key="item.slug"
          class="seo-link-card"
          :to="{ name: 'attraction-detail', params: { slug: item.slug } }"
        >
          <span>{{ t('city.relatedAttraction') }}</span>
          <strong>{{ item.name }}</strong>
          <p>{{ item.summary }}</p>
        </RouterLink>
        <RouterLink
          v-for="item in cityProducts"
          :key="item.slug"
          class="seo-link-card"
          :to="{ name: 'product-detail', params: { slug: item.slug } }"
        >
          <span>{{ t('city.relatedProduct') }}</span>
          <strong>{{ item.name }}</strong>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
    </section>

    <section class="city-detail-section" aria-labelledby="city-faq-title">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.faq') }}</p>
        <h2 id="city-faq-title">{{ t('city.faqTitle', { city: city.name }) }}</h2>
      </div>
      <div class="seo-faq-list">
        <article v-for="item in cityFaq" :key="item.question">
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </article>
      </div>
    </section>

    <section class="city-note-band" :aria-label="t('city.noteAria')">
      <div>
        <p class="product-eyebrow">{{ t('city.note') }}</p>
        <h2>{{ city.travelNote }}</h2>
      </div>
      <RouterLink class="primary-button" :to="{ name: 'contact' }">
        {{ t('city.customRoute') }}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </RouterLink>
    </section>

    <section class="city-detail-section" aria-labelledby="nearby-cities-title">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.ideas') }}</p>
        <h2 id="nearby-cities-title">{{ t('city.pairWith', { city: city.name }) }}</h2>
      </div>
      <div class="city-related-grid">
        <RouterLink
          v-for="item in nearbyCities"
          :key="item.slug"
          class="city-related-card"
          :to="{ name: 'city-detail', params: { slug: item.slug } }"
        >
          <span>{{ item.region }} · {{ item.duration }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
    </section>
  </article>
</template>
