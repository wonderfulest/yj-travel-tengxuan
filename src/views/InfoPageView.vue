<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/i18n'

type InfoSection = {
  title: string
  body?: string
  items?: string[]
}

const props = defineProps<{
  eyebrow: string
  title: string
  summary: string
  updated?: string
  sections: InfoSection[]
  ctaLabel?: string
}>()
const { t } = useI18n()

onMounted(() => {
  document.title = `${props.title} | Tengxuan Travel`

  const description =
    document.querySelector<HTMLMetaElement>('meta[name="description"]') ||
    document.head.appendChild(document.createElement('meta'))
  description.name = 'description'
  description.content = props.summary
})
</script>

<template>
  <article class="info-page">
    <section class="info-hero" aria-labelledby="info-title">
      <div>
        <RouterLink class="product-back-link" :to="{ name: 'home', hash: '#top' }">
          {{ t('common.backHome') }}
        </RouterLink>
        <p class="product-eyebrow">{{ eyebrow }}</p>
        <h1 id="info-title">{{ title }}</h1>
        <p>{{ summary }}</p>
        <span v-if="updated" class="info-updated">{{ updated }}</span>
      </div>
    </section>

    <section class="info-content" :aria-label="t('common.pageDetails')">
      <article v-for="section in sections" :key="section.title" class="info-panel">
        <h2>{{ section.title }}</h2>
        <p v-if="section.body">{{ section.body }}</p>
        <ul v-if="section.items?.length">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>

    <section class="info-cta" aria-labelledby="info-cta-title">
      <div>
        <p class="product-eyebrow">{{ t('common.needHelp') }}</p>
        <h2 id="info-cta-title">{{ t('common.planningTeam') }}</h2>
      </div>
      <RouterLink class="primary-button" :to="{ name: 'contact' }">
        {{ ctaLabel || t('common.contactExperts') }}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </RouterLink>
    </section>
  </article>
</template>
