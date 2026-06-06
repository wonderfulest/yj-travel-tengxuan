<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { cities } = useTravelContent()
</script>

<template>
  <article class="destination-page">
    <h1 class="sr-only">{{ t('destinations.title') }}</h1>

    <section class="destination-section destination-section--city-grid" :aria-label="t('destinations.cities')">
      <div class="destination-card-grid">
        <RouterLink
          v-for="city in cities"
          :key="city.slug"
          class="destination-card"
          :to="{ name: 'city-detail', params: { slug: city.slug } }"
        >
          <img v-if="city.image" :src="city.image" :alt="city.alt" width="900" height="600" loading="lazy" />
          <div>
            <span>{{ city.region }} · {{ city.duration }}</span>
            <h3>{{ city.name }}</h3>
            <p>{{ city.signature }}</p>
            <strong>{{ t('city.openGuide') }}</strong>
          </div>
        </RouterLink>
      </div>
    </section>
  </article>
</template>
