<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const { cities } = useTravelContent()

const city = computed(() => cities.value.find((item) => item.slug === route.params.slug) ?? cities.value[0])
const nearbyCities = computed(() => cities.value.filter((item) => item.slug !== city.value.slug).slice(0, 3))

function updateTitle() {
  document.title = `${city.value.name} ${t('city.titleSuffix')} | Tengxuan Travel`
}

onMounted(updateTitle)
watch([city, () => t('city.titleSuffix')], updateTitle)
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
        <img v-if="city.image" :src="city.image" :alt="city.alt" />
        <figcaption>{{ city.summary }}</figcaption>
      </figure>
    </section>

    <section class="city-detail-facts" :aria-label="t('city.factsAria')">
      <div>
        <span>{{ t('city.bestFor') }}</span>
        <strong>{{ city.bestFor.join(' · ') }}</strong>
      </div>
      <div>
        <span>{{ t('city.season') }}</span>
        <strong>{{ city.season }}</strong>
      </div>
      <div>
        <span>{{ t('city.connections') }}</span>
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
