<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const { attractionDetails, cities, productBySlug, tourProducts } = useTravelContent()
const fallbackProduct = computed(() => tourProducts.value[0])
const product = computed(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  return productBySlug.value[slug || fallbackProduct.value.slug] || fallbackProduct.value
})
const productCities = computed(() =>
  cities.value.filter((city) => routeMentionsCity(product.value.route, city.name)).slice(0, 4)
)
const productAttractions = computed(() =>
  attractionDetails.value.filter((attraction) => routeMentionsCity(product.value.route, attraction.city)).slice(0, 4)
)
const bestForFact = computed(() => {
  const bestForLabels = new Set(['Best for', '适合', 'Geeignet fuer', 'Ideal pour', 'Ideal para'])
  return product.value.facts.find((fact) => bestForLabels.has(fact.label))?.value || t('product.customGroups')
})
const productFaq = computed(() => [
  {
    question: t('product.faqGroupType'),
    answer: t('product.faqGroupAnswer', { group: bestForFact.value })
  },
  {
    question: t('product.faqIncluded'),
    answer: product.value.inclusions.join(' ')
  },
  {
    question: t('product.faqExcluded'),
    answer: product.value.exclusions.join(' ')
  },
  {
    question: t('product.faqQuote'),
    answer: t('product.faqQuoteAnswer')
  }
])

function routeMentionsCity(route: string, name: string) {
  return normalizeRouteText(route).includes(normalizeRouteText(name))
}

function normalizeRouteText(value: string) {
  return value.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, '')
}
</script>

<template>
  <article class="product-page">
    <section class="product-hero" aria-labelledby="product-title">
      <div class="product-hero-media">
        <img :src="product.heroImage" :alt="product.heroAlt" width="800" height="1170" loading="eager" fetchpriority="high" />
      </div>
      <div class="product-hero-copy">
        <RouterLink class="product-back-link" :to="{ name: 'products' }">
          {{ t('product.back') }}
        </RouterLink>
        <p class="product-eyebrow">{{ product.eyebrow }}</p>
        <h1 id="product-title">{{ product.name }}</h1>
        <p>{{ product.summary }}</p>
        <div class="product-actions">
          <RouterLink class="primary-button" :to="{ name: 'contact' }">
            {{ t('product.quote') }}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </RouterLink>
          <a class="secondary-button" href="#itinerary">
            {{ t('product.viewItinerary') }}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9h12M6 15h12M4 4h16v16H4z" /></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="product-facts" :aria-label="t('product.factsAria')">
      <div v-for="fact in product.facts" :key="fact.label">
        <span>{{ fact.label }}</span>
        <strong>{{ fact.value }}</strong>
      </div>
      <div>
        <span>{{ t('product.suitableGroups') }}</span>
        <strong>{{ bestForFact }}</strong>
      </div>
    </section>

    <section class="product-section product-intro" aria-labelledby="product-overview-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">{{ t('product.overview') }}</p>
        <h2 id="product-overview-title">{{ product.duration }}</h2>
        <div class="product-route-copy">
          <p>{{ product.route }}</p>
          <small>{{ product.sourceNote }}</small>
        </div>
      </div>
      <div class="product-highlight-grid">
        <article v-for="highlight in product.highlights" :key="highlight">
          <span aria-hidden="true"></span>
          <p>{{ highlight }}</p>
        </article>
      </div>
    </section>

    <section id="itinerary" class="product-section" aria-labelledby="itinerary-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">{{ t('product.dayByDay') }}</p>
        <h2 id="itinerary-title">{{ t('product.itinerary') }}</h2>
        <p>{{ t('product.mealNote') }}</p>
      </div>

      <div class="itinerary-list">
        <article v-for="day in product.days" :key="day.day" class="itinerary-day">
          <div class="itinerary-marker">
            <strong>{{ day.day }}</strong>
            <span>{{ day.city }}</span>
          </div>
          <div class="itinerary-content">
            <div class="itinerary-title-row">
              <h3>{{ day.title }}</h3>
              <span>{{ day.meals }}</span>
            </div>
            <p>{{ day.summary }}</p>
            <ul>
              <li v-for="sight in day.sights" :key="sight">{{ sight }}</li>
            </ul>
            <p v-if="day.note" class="itinerary-note">{{ day.note }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="product-section product-media-band" aria-labelledby="route-title">
      <div>
        <p class="product-eyebrow">{{ t('product.gallery') }}</p>
        <h2 id="route-title">{{ product.galleryTitle }}</h2>
      </div>
      <div class="route-media-grid">
        <figure
          v-for="image in product.gallery"
          :key="image.title"
          class="route-media-card"
          :class="{ featured: image.featured }"
        >
          <img :src="image.image" :alt="image.alt" width="900" height="600" loading="lazy" />
          <figcaption>
            <span>{{ image.city }}</span>
            <strong>{{ image.title }}</strong>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="product-section product-details-grid" aria-labelledby="details-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">{{ t('product.details') }}</p>
        <h2 id="details-title">{{ t('product.detailTitle') }}</h2>
        <p>{{ t('product.hotelNote') }}</p>
      </div>

      <div class="detail-panel hotel-panel">
        <h3>{{ t('product.hotels') }}</h3>
        <dl>
          <div v-for="hotel in product.hotels" :key="hotel.city">
            <dt>{{ hotel.city }}</dt>
            <dd>{{ hotel.hotel }}</dd>
          </div>
        </dl>
      </div>

      <div class="detail-panel price-panel">
        <h3>{{ t('product.quotation') }}</h3>
        <div class="price-list">
          <article v-for="price in product.prices" :key="price.group">
            <span>{{ price.group }}</span>
            <strong>{{ price.price }}</strong>
            <p>{{ price.basis }}</p>
          </article>
        </div>
      </div>

      <div class="detail-panel service-panel">
        <h3>{{ t('product.including') }}</h3>
        <ul>
          <li v-for="item in product.inclusions" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="detail-panel service-panel">
        <h3>{{ t('product.excluding') }}</h3>
        <ul>
          <li v-for="item in product.exclusions" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="product-section" aria-labelledby="product-faq-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">{{ t('product.faq') }}</p>
        <h2 id="product-faq-title">{{ t('product.faqTitle') }}</h2>
      </div>
      <div class="seo-faq-list">
        <article v-for="item in productFaq" :key="item.question">
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </article>
      </div>
    </section>

    <section class="product-section" aria-labelledby="product-links-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">{{ t('product.internalLinks') }}</p>
        <h2 id="product-links-title">{{ t('product.linkTitle') }}</h2>
      </div>
      <div class="seo-link-grid">
        <RouterLink
          v-for="item in productCities"
          :key="item.slug"
          class="seo-link-card"
          :to="{ name: 'city-detail', params: { slug: item.slug } }"
        >
          <span>{{ t('product.relatedCity') }}</span>
          <strong>{{ item.name }}</strong>
          <p>{{ item.summary }}</p>
        </RouterLink>
        <RouterLink
          v-for="item in productAttractions"
          :key="item.slug"
          class="seo-link-card"
          :to="{ name: 'attraction-detail', params: { slug: item.slug } }"
        >
          <span>{{ t('product.relatedAttraction') }}</span>
          <strong>{{ item.name }}</strong>
          <p>{{ item.summary }}</p>
        </RouterLink>
        <RouterLink class="seo-link-card" :to="{ name: 'visa-entry' }">
          <span>{{ t('product.planningLink') }}</span>
          <strong>{{ t('footer.visaEntry') }}</strong>
          <p>{{ t('product.visaLinkText') }}</p>
        </RouterLink>
        <RouterLink class="seo-link-card" :to="{ name: 'before-you-go' }">
          <span>{{ t('product.planningLink') }}</span>
          <strong>{{ t('footer.beforeYouGo') }}</strong>
          <p>{{ t('product.beforeYouGoLinkText') }}</p>
        </RouterLink>
      </div>
    </section>

    <section class="product-cta" aria-labelledby="product-cta-title">
      <div>
        <p class="product-eyebrow">{{ t('product.ready') }}</p>
        <h2 id="product-cta-title">{{ t('product.cta') }}</h2>
      </div>
      <RouterLink class="primary-button" :to="{ name: 'contact' }">
        {{ t('common.contactExperts') }}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </RouterLink>
    </section>
  </article>
</template>
