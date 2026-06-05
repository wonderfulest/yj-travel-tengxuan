<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const { attractionBySlug, attractionDetails, cities, tourProducts } = useTravelContent()

const attraction = computed(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  return attractionBySlug.value[slug || attractionDetails.value[0].slug] || attractionDetails.value[0]
})

const relatedAttractions = computed(() =>
  attraction.value.relatedSlugs
    .map((slug) => attractionBySlug.value[slug])
    .filter(Boolean)
)
const attractionCity = computed(() => cities.value.find((item) => item.name === attraction.value.city))
const relatedProducts = computed(() =>
  tourProducts.value
    .filter((product) => routeMentionsCity(product.route, attraction.value.city))
    .slice(0, 3)
)
const attractionFaq = computed(() => [
  {
    question: t('attraction.faqBestFor', { attraction: attraction.value.name }),
    answer: attraction.value.facts.find((fact) => fact.label === 'Good for')?.value || attraction.value.intro
  },
  {
    question: t('attraction.faqStay', { attraction: attraction.value.name }),
    answer: attraction.value.facts.find((fact) => fact.label === 'Best pace')?.value || attraction.value.visitFlow[0]
  },
  {
    question: t('attraction.faqSeason', { attraction: attraction.value.name }),
    answer: attractionCity.value?.season || t('attraction.seasonFallback')
  },
  {
    question: t('attraction.faqTransport', { attraction: attraction.value.name }),
    answer: attraction.value.visitFlow[0]
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
  <article class="attraction-detail-page">
    <section class="attraction-detail-hero" aria-labelledby="attraction-detail-title">
      <div class="attraction-detail-copy">
        <RouterLink class="product-back-link" :to="{ name: 'attractions' }">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
          {{ t('attraction.allGuides') }}
        </RouterLink>
        <p class="product-eyebrow">{{ attraction.city }} · {{ attraction.eyebrow }}</p>
        <h1 id="attraction-detail-title">{{ attraction.heroTitle }}</h1>
        <p>{{ attraction.intro }}</p>
      </div>
      <figure class="attraction-detail-media">
        <img :src="attraction.image" :alt="attraction.alt" width="1100" height="733" loading="eager" fetchpriority="high" />
        <figcaption>
          <span>{{ t('attraction.imageCredit') }}</span>
          {{ attraction.imageCredit }}
        </figcaption>
      </figure>
    </section>

    <section class="attraction-detail-facts" :aria-label="t('attraction.factsAria')">
      <div v-for="fact in attraction.facts" :key="fact.label">
        <span>{{ fact.label }}</span>
        <strong>{{ fact.value }}</strong>
      </div>
      <div>
        <span>{{ t('attraction.bestSeason') }}</span>
        <strong>{{ attractionCity?.season || t('attraction.seasonFallback') }}</strong>
      </div>
      <div>
        <span>{{ t('attraction.transport') }}</span>
        <strong>{{ attraction.visitFlow[0] }}</strong>
      </div>
    </section>

    <section class="attraction-detail-section">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.whyGo') }}</p>
        <h2>{{ attraction.name }}</h2>
      </div>
      <div class="attraction-reason-grid">
        <article v-for="item in attraction.whyGo" :key="item.title">
          <span aria-hidden="true"></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="attraction-detail-section attraction-flow-section">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.visitFlow') }}</p>
        <h2>{{ t('city.rhythm') }}</h2>
      </div>
      <ol class="attraction-flow-list">
        <li v-for="step in attraction.visitFlow" :key="step">{{ step }}</li>
      </ol>
    </section>

    <section class="attraction-detail-section" aria-labelledby="attraction-faq-title">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.faq') }}</p>
        <h2 id="attraction-faq-title">{{ t('attraction.faqTitle', { attraction: attraction.name }) }}</h2>
      </div>
      <div class="seo-faq-list">
        <article v-for="item in attractionFaq" :key="item.question">
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </article>
      </div>
    </section>

    <section class="attraction-note-band" :aria-label="t('attraction.practicalNotes')">
      <div>
        <p class="product-eyebrow">{{ t('attraction.practicalNotes') }}</p>
        <ul>
          <li v-for="note in attraction.practicalNotes" :key="note">{{ note }}</li>
        </ul>
      </div>
      <RouterLink class="primary-button" :to="{ name: 'contact' }">
        {{ t('attraction.planRoute') }}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </RouterLink>
    </section>

    <section class="attraction-detail-section" aria-labelledby="attraction-sources-title">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.sources') }}</p>
        <h2 id="attraction-sources-title">{{ t('common.pageDetails') }}</h2>
      </div>
      <div class="attraction-source-list">
        <a v-for="source in attraction.sources" :key="source.url" :href="source.url" target="_blank" rel="noreferrer">
          {{ source.label }}
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7m0 0H9m8 0v8" /></svg>
        </a>
      </div>
    </section>

    <section v-if="attractionCity || relatedProducts.length" class="attraction-detail-section" aria-labelledby="attraction-link-title">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.internalLinks') }}</p>
        <h2 id="attraction-link-title">{{ t('attraction.linkTitle') }}</h2>
      </div>
      <div class="seo-link-grid">
        <RouterLink
          v-if="attractionCity"
          class="seo-link-card"
          :to="{ name: 'city-detail', params: { slug: attractionCity.slug } }"
        >
          <span>{{ t('attraction.relatedCity') }}</span>
          <strong>{{ attractionCity.name }}</strong>
          <p>{{ attractionCity.summary }}</p>
        </RouterLink>
        <RouterLink
          v-for="item in relatedProducts"
          :key="item.slug"
          class="seo-link-card"
          :to="{ name: 'product-detail', params: { slug: item.slug } }"
        >
          <span>{{ t('attraction.relatedProduct') }}</span>
          <strong>{{ item.name }}</strong>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
    </section>

    <section class="attraction-detail-section" aria-labelledby="related-attractions-title">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.related') }}</p>
        <h2 id="related-attractions-title">{{ t('attraction.pairWith') }}</h2>
      </div>
      <div class="attraction-related-grid">
        <RouterLink
          v-for="item in relatedAttractions"
          :key="item.slug"
          class="attraction-related-card"
          :to="{ name: 'attraction-detail', params: { slug: item.slug } }"
        >
          <img :src="item.image" :alt="item.alt" width="900" height="600" loading="lazy" />
          <span>{{ item.city }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
    </section>
  </article>
</template>
