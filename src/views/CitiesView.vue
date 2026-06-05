<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { cities } = useTravelContent()
onMounted(() => {
  document.title = `${t('footer.cityGuides')} | Tengxuan Travel`
})
watchEffect(() => {
  if (typeof document === 'undefined') return

  document.title = `${t('footer.cityGuides')} | Tengxuan Travel`
})
</script>

<template>
  <article class="city-index-page">
    <section class="city-index-hero" aria-labelledby="city-index-title">
      <div class="city-index-copy">
        <p class="product-eyebrow">{{ t('city.eyebrow') }}</p>
        <h1 id="city-index-title">{{ t('city.title') }}</h1>
        <p>{{ t('city.summary') }}</p>
        <div class="city-index-actions">
          <RouterLink class="primary-button" :to="{ name: 'contact' }">
            {{ t('city.planRoute') }}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </RouterLink>
          <RouterLink class="secondary-button" :to="{ name: 'home', hash: '#top' }">
            {{ t('common.backHome') }}
          </RouterLink>
        </div>
      </div>
      <div class="city-index-feature" aria-hidden="true">
        <img :src="cities[0].image" :alt="cities[0].alt" width="1100" height="733" loading="eager" fetchpriority="high" />
      </div>
    </section>

    <section class="city-guide-grid-section" :aria-label="t('city.allGuides')">
      <RouterLink
        v-for="city in cities"
        :key="city.slug"
        class="city-guide-card"
        :to="{ name: 'city-detail', params: { slug: city.slug } }"
      >
        <img v-if="city.image" :src="city.image" :alt="city.alt" width="900" height="600" loading="lazy" />
        <div class="city-guide-card-body">
          <span>{{ city.region }} · {{ city.duration }}</span>
          <h2>{{ city.name }}</h2>
          <p>{{ city.signature }}</p>
          <strong>{{ t('city.openGuide') }}</strong>
        </div>
      </RouterLink>
    </section>
  </article>
</template>
