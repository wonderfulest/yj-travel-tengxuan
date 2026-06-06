<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { tm } from '@/i18n'
import flightImage from '@/assets/booking/china-flight.jpg'
import hotelImage from '@/assets/booking/china-hotel.jpg'
import guideImage from '@/assets/booking/china-guide.jpg'
import railImage from '@/assets/booking/china-rail.jpg'
import carImage from '@/assets/booking/china-car.jpg'
import ticketImage from '@/assets/products/beijing-xian-shanghai/terracotta-warriors.webp'

type ServiceType = 'flight' | 'hotel' | 'guide' | 'rail' | 'ticket' | 'car'

const serviceImages: Record<ServiceType, string> = {
  flight: flightImage,
  hotel: hotelImage,
  guide: guideImage,
  rail: railImage,
  ticket: ticketImage,
  car: carImage
}

type InfoPage = {
  eyebrow: string
  title: string
  summary: string
  heroServices?: Array<{
    type: ServiceType
    title: string
    label: string
    summary: string
    imageAlt: string
  }>
  floatingCard?: {
    title: string
    summary: string
    button: string
    subject: string
    body: string
    points: string[]
  }
  sections: Array<{ title: string; body?: string; items?: string[] }>
}

const page = computed(() => tm<InfoPage>('pages.beforeYouGo'))

const detailSections = computed(() => page.value.sections)

const emailHref = computed(() => {
  const card = page.value.floatingCard
  if (!card) return 'mailto:support@tengxuan.com'
  const params = new URLSearchParams({
    subject: card.subject,
    body: card.body
  })
  return `mailto:support@tengxuan.com?${params.toString()}`
})
</script>

<template>
  <article class="booking-page">
    <section class="booking-hero" aria-labelledby="booking-title">
      <div class="booking-hero-copy">
        <RouterLink class="product-back-link" :to="{ name: 'home', hash: '#top' }">
          {{ tm<string>('common.backHome') }}
        </RouterLink>
        <p class="product-eyebrow">{{ page.eyebrow }}</p>
        <h1 id="booking-title">{{ page.title }}</h1>
      </div>

      <aside v-if="page.floatingCard" class="booking-floating-card" aria-labelledby="booking-floating-title">
        <p class="product-eyebrow">{{ page.eyebrow }}</p>
        <h2 id="booking-floating-title">{{ page.floatingCard.title }}</h2>
        <p>{{ page.floatingCard.summary }}</p>
        <ul>
          <li v-for="point in page.floatingCard.points" :key="point">{{ point }}</li>
        </ul>
        <a class="primary-button" :href="emailHref">
          {{ page.floatingCard.button }}
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>
        </a>
      </aside>
    </section>

    <section class="booking-service-grid" aria-label="China booking service highlights">
      <article
        v-for="service in page.heroServices"
        :key="service.type"
        class="booking-service-card"
        :class="`booking-service-card--${service.type}`"
      >
        <div class="booking-service-art">
          <img :src="serviceImages[service.type]" :alt="service.imageAlt" loading="lazy" />
        </div>
        <div class="booking-service-body">
          <p>{{ service.label }}</p>
          <h2>{{ service.title }}</h2>
          <span>{{ service.summary }}</span>
        </div>
      </article>
    </section>

    <section class="booking-detail-grid" :aria-label="tm<string>('common.pageDetails')">
      <article v-for="section in detailSections" :key="section.title" class="info-panel">
        <h2>{{ section.title }}</h2>
        <p v-if="section.body">{{ section.body }}</p>
        <ul v-if="section.items?.length">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>
  </article>
</template>
