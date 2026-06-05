<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { attractions } = useTravelContent()
</script>

<template>
  <section id="attractions" class="section attractions-section" aria-labelledby="attractions-title">
    <div class="section-heading">
      <div>
        <h2 id="attractions-title">{{ t('sections.attractions.title') }}</h2>
        <p>{{ t('sections.attractions.summary') }}</p>
      </div>
      <RouterLink class="text-link" :to="{ name: 'product-detail', params: { slug: 'beijing-xian-shanghai' } }">
        {{ t('attraction.allGuides') }}
      </RouterLink>
    </div>

    <div class="attraction-grid">
      <RouterLink
        v-for="attraction in attractions"
        :key="attraction.name"
        class="attraction-card"
        :class="{ large: attraction.large }"
        :to="{ name: 'attraction-detail', params: { slug: attraction.slug } }"
      >
        <img :src="attraction.image" :alt="attraction.alt" />
        <div>
          <span>{{ attraction.city }}</span>
          <h3>{{ attraction.name }}</h3>
          <p v-if="attraction.summary">{{ attraction.summary }}</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
