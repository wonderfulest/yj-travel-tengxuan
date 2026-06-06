<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const { companyDetail: company } = useTravelContent()

const category = computed(() =>
  company.value.activityCategories.find((item) => item.slug === route.params.slug)
)
</script>

<template>
  <article v-if="category" class="company-page company-activity-page">
    <section class="company-activity-hero" aria-labelledby="company-activity-title">
      <div class="company-detail-copy">
        <RouterLink class="product-back-link" :to="{ name: 'company' }">
          {{ t('company.backToCompany') }}
        </RouterLink>
        <p class="product-eyebrow">{{ category.eyebrow }}</p>
        <h1 id="company-activity-title">{{ category.title }}</h1>
        <p>{{ category.summary }}</p>
      </div>
      <figure class="company-activity-cover">
        <img :src="category.cover" :alt="category.coverAlt" width="1100" height="733" loading="eager" fetchpriority="high" />
      </figure>
    </section>

    <section class="company-detail-section company-activity-gallery" :aria-label="category.title">
      <figure
        v-for="image in category.images"
        :key="image.image"
        class="company-media-card"
        :class="{ featured: image.featured }"
      >
        <img :src="image.image" :alt="image.alt" width="900" height="600" loading="lazy" />
        <figcaption>
          <span>{{ image.label }}</span>
          <strong>{{ image.title }}</strong>
          <p>{{ image.caption }}</p>
        </figcaption>
      </figure>
    </section>
  </article>

  <article v-else class="company-page company-activity-page">
    <section class="company-activity-hero company-activity-hero--missing" aria-labelledby="company-activity-missing-title">
      <div class="company-detail-copy">
        <RouterLink class="product-back-link" :to="{ name: 'company' }">
          {{ t('company.backToCompany') }}
        </RouterLink>
        <p class="product-eyebrow">{{ company.eyebrow }}</p>
        <h1 id="company-activity-missing-title">{{ t('company.activityNotFound') }}</h1>
      </div>
    </section>
  </article>
</template>
