<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { attractionDetails } = useTravelContent()

watchEffect(() => {
  if (typeof document === 'undefined') return

  document.title = `${t('attraction.title')} | Tengxuan Travel`
})
</script>

<template>
  <article class="attraction-index-page">
    <section class="attraction-index-hero" aria-labelledby="attraction-index-title">
      <div class="attraction-index-copy">
        <p class="product-eyebrow">{{ t('attraction.eyebrow') }}</p>
        <h1 id="attraction-index-title">{{ t('attraction.title') }}</h1>
        <p>{{ t('attraction.summary') }}</p>
        <div class="city-index-actions">
          <RouterLink class="primary-button" :to="{ name: 'contact' }">
            {{ t('attraction.planRoute') }}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </RouterLink>
          <RouterLink class="secondary-button" :to="{ name: 'cities' }">
            {{ t('city.allGuides') }}
          </RouterLink>
        </div>
      </div>
      <figure class="attraction-index-feature">
        <img :src="attractionDetails[0].image" :alt="attractionDetails[0].alt" width="1100" height="733" loading="eager" fetchpriority="high" />
        <figcaption>{{ attractionDetails[0].summary }}</figcaption>
      </figure>
    </section>

    <section class="attraction-guide-grid-section" :aria-label="t('attraction.allGuides')">
      <RouterLink
        v-for="attraction in attractionDetails"
        :key="attraction.slug"
        class="attraction-guide-card"
        :to="{ name: 'attraction-detail', params: { slug: attraction.slug } }"
      >
        <img :src="attraction.image" :alt="attraction.alt" width="900" height="600" loading="lazy" />
        <div class="attraction-guide-card-body">
          <span>{{ attraction.city }}</span>
          <h2>{{ attraction.name }}</h2>
          <p>{{ attraction.summary }}</p>
          <strong>{{ t('attraction.openGuide') }}</strong>
        </div>
      </RouterLink>
    </section>
  </article>
</template>
