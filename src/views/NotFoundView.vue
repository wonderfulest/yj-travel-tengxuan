<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section class="info-hero not-found-page" aria-labelledby="not-found-title">
    <div>
      <p class="eyebrow">404</p>
      <h1 id="not-found-title">Page not found</h1>
      <p>
        This Tengxuan Travel page does not exist. Open a city guide, attraction guide, travel product,
        FAQ, or contact page from the main navigation.
      </p>
      <div class="hero-actions">
        <RouterLink class="primary-link" to="/">{{ t('common.backHome') }}</RouterLink>
        <RouterLink class="secondary-link" to="/contact">{{ t('common.contactExperts') }}</RouterLink>
      </div>
    </div>
  </section>
</template>
