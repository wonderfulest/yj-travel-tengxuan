<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const { productBySlug, tourProducts } = useTravelContent()
const fallbackProduct = computed(() => tourProducts.value[0])
const product = computed(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  return productBySlug.value[slug || fallbackProduct.value.slug] || fallbackProduct.value
})
watchEffect(() => {
  document.title = `${product.value.name} | Tengxuan Travel`

  const description =
    document.querySelector<HTMLMetaElement>('meta[name="description"]') ||
    document.head.appendChild(document.createElement('meta'))
  description.name = 'description'
  description.content = product.value.summary
})
</script>

<template>
  <article class="product-page">
    <section class="product-hero" aria-labelledby="product-title">
      <div class="product-hero-media">
        <img :src="product.heroImage" :alt="product.heroAlt" />
      </div>
      <div class="product-hero-copy">
        <RouterLink class="product-back-link" :to="{ name: 'home', hash: '#trips' }">
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
          <img :src="image.image" :alt="image.alt" loading="lazy" />
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
