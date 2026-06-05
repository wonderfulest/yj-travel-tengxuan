<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="hero-media" aria-hidden="true">
      <div class="hero-panel hero-panel-left"></div>
      <div class="hero-panel hero-panel-center"></div>
      <div class="hero-panel hero-panel-right"></div>
    </div>

    <div class="hero-content">
      <h1 id="hero-title">{{ t('hero.title') }}</h1>
      <p>{{ t('hero.summary') }}</p>
      <div class="hero-actions">
        <RouterLink class="primary-button" :to="{ name: 'cities' }">
          {{ t('hero.citiesCta') }}
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
        </RouterLink>
        <RouterLink class="secondary-button" :to="{ name: 'company' }">
          {{ t('hero.companyCta') }}
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
