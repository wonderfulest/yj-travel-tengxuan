<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { trips } = useTravelContent()
const featuredTrip = computed(() => trips.value.find((trip) => trip.featured))
const standardTrips = computed(() => trips.value.filter((trip) => !trip.featured))
</script>

<template>
  <section id="trips" class="section" aria-labelledby="trips-title">
    <div class="section-heading">
      <div>
        <h2 id="trips-title">{{ t('sections.trips.title') }}</h2>
        <p>{{ t('sections.trips.summary') }}</p>
      </div>
      <RouterLink class="text-link" :to="{ name: 'products' }">{{ t('productList.viewDetail') }}</RouterLink>
    </div>

    <div class="trip-grid">
      <article v-if="featuredTrip" class="trip-card featured">
        <RouterLink
          v-if="featuredTrip.productSlug"
          class="trip-card-media-link"
          :to="{ name: 'product-detail', params: { slug: featuredTrip.productSlug } }"
          :aria-label="`${t('product.viewItinerary')}: ${featuredTrip.name}`"
        >
          <img :src="featuredTrip.image" :alt="featuredTrip.alt" width="800" height="1170" loading="lazy" />
        </RouterLink>
        <img v-else :src="featuredTrip.image" :alt="featuredTrip.alt" width="800" height="1170" loading="lazy" />
        <div class="trip-body">
          <div>
            <h3>
              <RouterLink
                v-if="featuredTrip.productSlug"
                :to="{ name: 'product-detail', params: { slug: featuredTrip.productSlug } }"
              >
                {{ featuredTrip.name }}
              </RouterLink>
              <span v-else>{{ featuredTrip.name }}</span>
            </h3>
            <p>{{ featuredTrip.summary }}</p>
          </div>
          <dl>
            <div v-for="fact in featuredTrip.facts" :key="fact.label">
              <dt>{{ fact.label }}</dt>
              <dd>{{ fact.value }}</dd>
            </div>
          </dl>
          <RouterLink
            v-if="featuredTrip.productSlug"
            class="trip-card-link"
            :to="{ name: 'product-detail', params: { slug: featuredTrip.productSlug } }"
          >
            {{ t('product.viewItinerary') }}
          </RouterLink>
        </div>
      </article>
      <article v-for="trip in standardTrips" :key="trip.name" class="trip-card">
        <h3>
          <RouterLink
            v-if="trip.productSlug"
            :to="{ name: 'product-detail', params: { slug: trip.productSlug } }"
          >
            {{ trip.name }}
          </RouterLink>
          <span v-else>{{ trip.name }}</span>
        </h3>
        <p>{{ trip.summary }}</p>
        <RouterLink
          v-if="trip.productSlug"
          class="trip-card-link"
          :to="{ name: 'product-detail', params: { slug: trip.productSlug } }"
        >
          {{ t('product.viewItinerary') }}
        </RouterLink>
        <span v-else>{{ trip.meta }}</span>
      </article>
    </div>
  </section>
</template>
