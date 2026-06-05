<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { companyDetail: company } = useTravelContent()

watchEffect(() => {
  document.title = `${t('footer.companyProfile')} | Tengxuan Travel Group`

  const description =
    document.querySelector<HTMLMetaElement>('meta[name="description"]') ||
    document.head.appendChild(document.createElement('meta'))
  description.name = 'description'
  description.content = t('company.metaDescription')
})
</script>

<template>
  <article class="company-page">
    <section class="company-detail-hero" aria-labelledby="company-detail-title">
      <div class="company-detail-copy">
        <RouterLink class="product-back-link" :to="{ name: 'home', hash: '#company' }">
          {{ t('common.backHome') }}
        </RouterLink>
        <p class="product-eyebrow">{{ company.eyebrow }}</p>
        <h1 id="company-detail-title">{{ company.heroTitle }}</h1>
        <p>{{ company.heroSummary }}</p>
        <div class="company-detail-actions">
          <RouterLink class="primary-button" :to="{ name: 'contact' }">
            {{ t('company.contactTeam') }}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </RouterLink>
          <a class="secondary-button" href="#group-strength">
            {{ t('company.viewStrength') }}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9h12M6 15h12M4 4h16v16H4z" /></svg>
          </a>
        </div>
      </div>

      <div class="company-photo-collage" :aria-label="t('company.photosAria')">
        <figure
          v-for="(slot, index) in company.photoSlots"
          :key="slot.label"
          class="company-photo-slot"
          :class="{ featured: index === 0 }"
        >
          <img :src="slot.image" :alt="slot.alt" />
          <div aria-hidden="true" class="company-photo-label">
            <span>{{ slot.label }}</span>
          </div>
          <figcaption>{{ slot.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="company-detail-facts" :aria-label="t('company.factsAria')">
      <div v-for="stat in company.stats" :key="stat.label">
        <span>{{ stat.label }}</span>
        <strong>{{ stat.value }}</strong>
      </div>
    </section>

    <section class="company-detail-section company-overview-section" aria-labelledby="company-overview-title">
      <div class="company-detail-heading">
        <p class="product-eyebrow">{{ t('company.overviewEyebrow') }}</p>
        <h2 id="company-overview-title">{{ t('company.overviewTitle') }}</h2>
      </div>
      <div class="company-overview-grid">
        <article v-for="item in company.overview" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="company-detail-section company-media-section" aria-labelledby="company-media-title">
      <div class="company-detail-heading">
        <p class="product-eyebrow">{{ t('company.momentsEyebrow') }}</p>
        <h2 id="company-media-title">{{ t('company.momentsTitle') }}</h2>
      </div>
      <div class="company-media-grid">
        <figure
          v-for="image in company.mediaGallery"
          :key="image.title"
          class="company-media-card"
          :class="{ featured: image.featured }"
        >
          <img :src="image.image" :alt="image.alt" loading="lazy" />
          <figcaption>
            <span>{{ image.label }}</span>
            <strong>{{ image.title }}</strong>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="company-detail-section branch-section" aria-labelledby="branch-title">
      <div class="company-detail-heading">
        <p class="product-eyebrow">{{ t('company.distributionEyebrow') }}</p>
        <h2 id="branch-title">{{ t('company.distributionTitle') }}</h2>
      </div>
      <div class="branch-grid" :aria-label="t('company.branchAria')">
        <article v-for="branch in company.branches" :key="branch.city">
          <strong>{{ branch.city }}</strong>
          <span>{{ branch.role }}</span>
        </article>
      </div>
    </section>

    <section class="company-detail-section inbound-section" aria-labelledby="inbound-title">
      <div class="inbound-copy">
        <p class="product-eyebrow">{{ t('company.inboundEyebrow') }}</p>
        <h2 id="inbound-title">{{ company.inbound.title }}</h2>
        <p>{{ company.inbound.summary }}</p>
      </div>
      <div class="inbound-capabilities">
        <article v-for="capability in company.inbound.capabilities" :key="capability.title">
          <span aria-hidden="true"></span>
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.text }}</p>
        </article>
      </div>
    </section>

    <section class="company-detail-section brand-system-section" aria-labelledby="brand-system-title">
      <div class="company-detail-heading">
        <p class="product-eyebrow">{{ t('company.brandEyebrow') }}</p>
        <h2 id="brand-system-title">{{ t('company.brandTitle') }}</h2>
      </div>
      <div class="company-detail-brand-list">
        <article v-for="brand in company.brands" :key="brand.name">
          <h3>{{ brand.name }}</h3>
          <p>{{ brand.summary }}</p>
        </article>
      </div>
    </section>

    <section id="group-strength" class="company-detail-section strength-section" aria-labelledby="strength-title">
      <div class="company-detail-heading">
        <p class="product-eyebrow">{{ t('company.strengthEyebrow') }}</p>
        <h2 id="strength-title">{{ t('company.strengthTitle') }}</h2>
      </div>
      <div class="strength-grid">
        <article v-for="resource in company.resources" :key="resource.title">
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.text }}</p>
        </article>
      </div>
    </section>

    <section class="company-detail-section timeline-section" aria-labelledby="timeline-title">
      <div class="company-detail-heading">
        <p class="product-eyebrow">{{ t('company.timelineEyebrow') }}</p>
        <h2 id="timeline-title">{{ t('company.timelineTitle') }}</h2>
      </div>
      <ol class="company-detail-timeline">
        <li v-for="milestone in company.milestones" :key="milestone.year">
          <span>{{ milestone.year }}</span>
          <p>{{ milestone.event }}</p>
        </li>
      </ol>
    </section>

    <section class="company-detail-section honor-section" aria-labelledby="honor-title">
      <div class="company-detail-heading">
        <p class="product-eyebrow">{{ t('company.honorsEyebrow') }}</p>
        <h2 id="honor-title">{{ t('company.honorsTitle') }}</h2>
      </div>
      <div class="honor-grid">
        <article v-for="honor in company.honors" :key="honor.title">
          <h3>{{ honor.title }}</h3>
          <p>{{ honor.text }}</p>
        </article>
      </div>
      <div class="company-award-gallery" :aria-label="t('company.awardsAria')">
        <figure v-for="image in company.honorImages" :key="image.title">
          <img :src="image.image" :alt="image.alt" loading="lazy" />
          <figcaption>
            <span>{{ image.label }}</span>
            <strong>{{ image.title }}</strong>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="company-culture-section" aria-labelledby="culture-title">
      <div>
        <p class="product-eyebrow">{{ t('company.cultureEyebrow') }}</p>
        <h2 id="culture-title">{{ t('company.cultureTitle') }}</h2>
      </div>
      <div class="culture-grid">
        <article>
          <span>{{ t('company.vision') }}</span>
          <p>{{ company.culture.vision }}</p>
        </article>
        <article>
          <span>{{ t('company.mission') }}</span>
          <p>{{ company.culture.mission }}</p>
        </article>
        <article>
          <span>{{ t('company.values') }}</span>
          <ul>
            <li v-for="value in company.culture.values" :key="value">{{ value }}</li>
          </ul>
        </article>
      </div>
    </section>
  </article>
</template>
