<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { cities } = useTravelContent()
const featuredCities = computed(() => cities.value.filter((city) => city.image))
const compactCities = computed(() => cities.value.filter((city) => !city.image))
</script>

<template>
  <section id="cities" class="section" aria-labelledby="cities-title">
    <div class="section-heading">
      <div>
        <h2 id="cities-title">{{ t('sections.cities.title') }}</h2>
        <p>{{ t('sections.cities.summary') }}</p>
      </div>
      <RouterLink class="text-link" :to="{ name: 'cities' }">{{ t('sections.cities.all') }}</RouterLink>
    </div>

    <div class="city-grid">
      <RouterLink
        v-for="city in featuredCities"
        :key="city.name"
        class="city-card"
        :to="{ name: 'city-detail', params: { slug: city.slug } }"
        :aria-label="`${city.name}: ${t('sections.cities.read')}`"
      >
        <img :src="city.image" :alt="city.alt" width="900" height="600" loading="lazy" />
        <div>
          <span>{{ city.region }} · {{ city.duration }}</span>
          <h3>{{ city.name }}</h3>
          <p>{{ city.summary }}</p>
          <span class="city-card-link">{{ t('sections.cities.read') }}</span>
        </div>
      </RouterLink>
      <RouterLink
        v-for="city in compactCities"
        :key="city.name"
        class="city-card compact"
        :to="{ name: 'city-detail', params: { slug: city.slug } }"
        :aria-label="`${city.name}: ${t('sections.cities.read')}`"
      >
        <span>{{ city.region }} · {{ city.duration }}</span>
        <h3>{{ city.name }}</h3>
        <p>{{ city.summary }}</p>
        <span class="city-card-link">{{ t('sections.cities.read') }}</span>
      </RouterLink>
    </div>
  </section>
</template>
