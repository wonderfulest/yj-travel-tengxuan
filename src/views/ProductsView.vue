<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { tm, useI18n, useTravelContent } from '@/i18n'
import type { TourProduct } from '@/content/travel'

type Review = {
  city: string
  name: string
  text: string
}

const { locale, t } = useI18n()
const { tourProducts } = useTravelContent()
const selectedDestination = ref('all')
const destinationFilters = ['Beijing', 'Xi’an']

const filteredProducts = computed(() => {
  if (selectedDestination.value === 'all') return tourProducts.value
  return tourProducts.value.filter((product) => product.destinations?.includes(selectedDestination.value))
})

const featuredProduct = computed(() => filteredProducts.value[0])
const standardProducts = computed(() => filteredProducts.value.slice(1))
const reviews = computed(() => tm<Review[]>('productList.reviews') || [])
const recommendedCount = computed(() => t('productList.recommendedCount', { count: String(filteredProducts.value.length) }))

function productDestinations(product: TourProduct) {
  if (product.destinations?.length) return product.destinations

  const route = normalize(product.route)
  return destinationFilters.filter((destination) => route.includes(normalize(destination)))
}

function destinationLabel(destination: string) {
  const labels: Record<string, Record<string, string>> = {
    Beijing: { zh: '北京' },
    'Xi’an': { zh: '西安' }
  }

  return labels[destination]?.[locale.value] || destination
}

function dayPreview(product: TourProduct) {
  return product.days.slice(0, 5)
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, '')
}
</script>

<template>
  <article class="product-list-page">
    <section class="product-list-hero" aria-labelledby="product-list-title">
      <div class="product-list-copy">
        <p class="product-eyebrow">{{ t('productList.eyebrow') }}</p>
        <h1 id="product-list-title">{{ t('productList.title') }}</h1>
        <p>{{ t('productList.summary') }}</p>
        <div class="product-filter-tabs" role="tablist" :aria-label="t('productList.filtersAria')">
          <button
            type="button"
            :class="{ 'is-active': selectedDestination === 'all' }"
            :aria-selected="selectedDestination === 'all'"
            @click="selectedDestination = 'all'"
          >
            {{ t('productList.all') }}
          </button>
          <button
            v-for="destination in destinationFilters"
            :key="destination"
            type="button"
            :class="{ 'is-active': selectedDestination === destination }"
            :aria-selected="selectedDestination === destination"
            @click="selectedDestination = destination"
          >
            {{ destinationLabel(destination) }}
          </button>
        </div>
      </div>
      <aside class="product-list-stat" :aria-label="recommendedCount">
        <span>{{ recommendedCount }}</span>
        <strong>{{ selectedDestination === 'all' ? t('productList.all') : destinationLabel(selectedDestination) }}</strong>
      </aside>
    </section>

    <section class="product-list-section" aria-labelledby="product-list-results-title">
      <div class="product-list-heading">
        <div>
          <p class="product-eyebrow">{{ recommendedCount }}</p>
          <h2 id="product-list-results-title">{{ t('productList.dayPlan') }}</h2>
        </div>
        <RouterLink class="text-link" :to="{ name: 'contact' }">{{ t('productList.consultation') }}</RouterLink>
      </div>

      <div class="product-list-grid">
        <RouterLink
          v-if="featuredProduct"
          class="product-list-card product-list-card--featured"
          :to="{ name: 'product-detail', params: { slug: featuredProduct.slug } }"
        >
          <img :src="featuredProduct.heroImage" :alt="featuredProduct.heroAlt" width="1100" height="733" loading="eager" fetchpriority="high" />
          <div class="product-list-card-body">
            <div class="product-list-card-topline">
              <span>{{ featuredProduct.duration }}</span>
              <span>{{ t('productList.destinations') }}: {{ featuredProduct.route }}</span>
            </div>
            <h3>{{ featuredProduct.name }}</h3>
            <p>{{ featuredProduct.summary }}</p>
            <ol class="product-day-strip" :aria-label="t('productList.dayPlan')">
              <li v-for="day in dayPreview(featuredProduct)" :key="day.day">
                <strong>{{ day.day }}</strong>
                <span>{{ day.city }} · {{ day.title }}</span>
              </li>
            </ol>
            <strong class="product-list-action">{{ t('productList.viewDetail') }}</strong>
          </div>
        </RouterLink>

        <RouterLink
          v-for="product in standardProducts"
          :key="product.slug"
          class="product-list-card"
          :to="{ name: 'product-detail', params: { slug: product.slug } }"
        >
          <img :src="product.heroImage" :alt="product.heroAlt" width="900" height="600" loading="lazy" />
          <div class="product-list-card-body">
            <div class="product-list-card-topline">
              <span>{{ product.duration }}</span>
              <span>{{ product.route }}</span>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.summary }}</p>
            <ol class="product-day-strip" :aria-label="t('productList.dayPlan')">
              <li v-for="day in dayPreview(product)" :key="day.day">
                <strong>{{ day.day }}</strong>
                <span>{{ day.city }} · {{ day.title }}</span>
              </li>
            </ol>
            <strong class="product-list-action">{{ t('productList.viewDetail') }}</strong>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="product-feedback-section" aria-labelledby="product-feedback-title">
      <div class="product-list-heading">
        <div>
          <p class="product-eyebrow">{{ t('productList.feedbackEyebrow') }}</p>
          <h2 id="product-feedback-title">{{ t('productList.feedbackTitle') }}</h2>
          <p>{{ t('productList.feedbackSummary') }}</p>
        </div>
      </div>
      <div class="product-feedback-grid">
        <article v-for="review in reviews" :key="`${review.city}-${review.name}`">
          <span>{{ review.city }}</span>
          <h3>{{ review.name }}</h3>
          <p>{{ review.text }}</p>
        </article>
      </div>
    </section>
  </article>
</template>
