<script setup lang="ts">
import { computed } from 'vue'
import { trips } from '@/content/travel'

const featuredTrip = computed(() => trips.find((trip) => trip.featured))
const standardTrips = computed(() => trips.filter((trip) => !trip.featured))
</script>

<template>
  <section id="trips" class="section" aria-labelledby="trips-title">
    <div class="section-heading">
      <div>
        <h2 id="trips-title">Main Travel Products</h2>
        <p>Ready-made routes that can be adjusted for pace, hotels, dietary needs, and flights.</p>
      </div>
      <a class="text-link" href="#planning">Ask for a quote</a>
    </div>

    <div class="trip-grid">
      <article v-if="featuredTrip" class="trip-card featured">
        <img :src="featuredTrip.image" :alt="featuredTrip.alt" />
        <div class="trip-body">
          <div>
            <h3>{{ featuredTrip.name }}</h3>
            <p>{{ featuredTrip.summary }}</p>
          </div>
          <dl>
            <div v-for="fact in featuredTrip.facts" :key="fact.label">
              <dt>{{ fact.label }}</dt>
              <dd>{{ fact.value }}</dd>
            </div>
          </dl>
        </div>
      </article>
      <article v-for="trip in standardTrips" :key="trip.name" class="trip-card">
        <h3>{{ trip.name }}</h3>
        <p>{{ trip.summary }}</p>
        <span>{{ trip.meta }}</span>
      </article>
    </div>
  </section>
</template>
