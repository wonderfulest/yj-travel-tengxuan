<script setup lang="ts">
import { computed } from 'vue'
import { cities } from '@/content/travel'

const featuredCities = computed(() => cities.filter((city) => city.image))
const compactCities = computed(() => cities.filter((city) => !city.image))
</script>

<template>
  <section id="cities" class="section" aria-labelledby="cities-title">
    <div class="section-heading">
      <div>
        <h2 id="cities-title">Major City Guides</h2>
        <p>Choose your base by travel style, pace, and first-time visitor priorities.</p>
      </div>
      <a class="text-link" href="#planning">Build a route</a>
    </div>

    <div class="city-grid">
      <article v-for="city in featuredCities" :key="city.name" class="city-card">
        <img :src="city.image" :alt="city.alt" />
        <div>
          <h3>{{ city.name }}</h3>
          <p>{{ city.summary }}</p>
          <span>{{ city.duration }}</span>
        </div>
      </article>
      <article v-for="city in compactCities" :key="city.name" class="city-card compact">
        <h3>{{ city.name }}</h3>
        <p>{{ city.summary }}</p>
      </article>
    </div>
  </section>
</template>
