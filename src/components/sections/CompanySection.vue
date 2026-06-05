<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { companyDetail: companyIntro } = useTravelContent()
</script>

<template>
  <section id="company" class="company-section" aria-labelledby="company-title">
    <div class="company-shell">
      <div class="company-hero">
        <div class="company-copy">
          <span>{{ companyIntro.eyebrow }}</span>
          <h2 id="company-title">{{ companyIntro.title }}</h2>
          <p class="company-lead">{{ companyIntro.summary }}</p>
          <div class="company-actions">
            <RouterLink class="primary-button" :to="{ name: 'company' }">
              {{ t('sections.company.link') }}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </RouterLink>
          </div>
        </div>

        <div class="company-card-proof" :aria-label="t('sections.company.proofAria')">
          <p>{{ t('sections.company.proofText') }}</p>
          <RouterLink class="text-link" :to="{ name: 'company' }">{{ t('sections.company.link') }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
