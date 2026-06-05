<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const { attractionBySlug, attractionDetails } = useTravelContent()

const attraction = computed(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  return attractionBySlug.value[slug || attractionDetails.value[0].slug] || attractionDetails.value[0]
})

const relatedAttractions = computed(() =>
  attraction.value.relatedSlugs
    .map((slug) => attractionBySlug.value[slug])
    .filter(Boolean)
)

watchEffect(() => {
  document.title = `${attraction.value.name} ${t('attraction.titleSuffix')} | Tengxuan Travel`

  const description =
    document.querySelector<HTMLMetaElement>('meta[name="description"]') ||
    document.head.appendChild(document.createElement('meta'))
  description.name = 'description'
  description.content = attraction.value.summary || attraction.value.intro
})
</script>

<template>
  <article class="attraction-detail-page">
    <section class="attraction-detail-hero" aria-labelledby="attraction-detail-title">
      <div class="attraction-detail-copy">
        <RouterLink class="product-back-link" :to="{ name: 'attractions' }">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
          {{ t('attraction.allGuides') }}
        </RouterLink>
        <p class="product-eyebrow">{{ attraction.city }} · {{ attraction.eyebrow }}</p>
        <h1 id="attraction-detail-title">{{ attraction.heroTitle }}</h1>
        <p>{{ attraction.intro }}</p>
      </div>
      <figure class="attraction-detail-media">
        <img :src="attraction.image" :alt="attraction.alt" />
        <figcaption>
          <span>{{ t('attraction.imageCredit') }}</span>
          {{ attraction.imageCredit }}
        </figcaption>
      </figure>
    </section>

    <section class="attraction-detail-facts" :aria-label="t('attraction.factsAria')">
      <div v-for="fact in attraction.facts" :key="fact.label">
        <span>{{ fact.label }}</span>
        <strong>{{ fact.value }}</strong>
      </div>
    </section>

    <section class="attraction-detail-section">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.whyGo') }}</p>
        <h2>{{ attraction.name }}</h2>
      </div>
      <div class="attraction-reason-grid">
        <article v-for="item in attraction.whyGo" :key="item.title">
          <span aria-hidden="true"></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="attraction-detail-section attraction-flow-section">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.visitFlow') }}</p>
        <h2>{{ t('city.rhythm') }}</h2>
      </div>
      <ol class="attraction-flow-list">
        <li v-for="step in attraction.visitFlow" :key="step">{{ step }}</li>
      </ol>
    </section>

    <section class="attraction-note-band" :aria-label="t('attraction.practicalNotes')">
      <div>
        <p class="product-eyebrow">{{ t('attraction.practicalNotes') }}</p>
        <ul>
          <li v-for="note in attraction.practicalNotes" :key="note">{{ note }}</li>
        </ul>
      </div>
      <RouterLink class="primary-button" :to="{ name: 'contact' }">
        {{ t('attraction.planRoute') }}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </RouterLink>
    </section>

    <section class="attraction-detail-section" aria-labelledby="attraction-sources-title">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.sources') }}</p>
        <h2 id="attraction-sources-title">{{ t('common.pageDetails') }}</h2>
      </div>
      <div class="attraction-source-list">
        <a v-for="source in attraction.sources" :key="source.url" :href="source.url" target="_blank" rel="noreferrer">
          {{ source.label }}
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7m0 0H9m8 0v8" /></svg>
        </a>
      </div>
    </section>

    <section class="attraction-detail-section" aria-labelledby="related-attractions-title">
      <div class="attraction-detail-heading">
        <p class="product-eyebrow">{{ t('attraction.related') }}</p>
        <h2 id="related-attractions-title">{{ t('attraction.pairWith') }}</h2>
      </div>
      <div class="attraction-related-grid">
        <RouterLink
          v-for="item in relatedAttractions"
          :key="item.slug"
          class="attraction-related-card"
          :to="{ name: 'attraction-detail', params: { slug: item.slug } }"
        >
          <img :src="item.image" :alt="item.alt" loading="lazy" />
          <span>{{ item.city }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
    </section>
  </article>
</template>
