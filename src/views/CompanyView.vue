<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { tm, useI18n, useTravelContent } from '@/i18n'

const { t } = useI18n()
const { companyDetail: company } = useTravelContent()

const tengxuanAsset = '/tengxuan'

const serviceImages = [
  `${tengxuanAsset}/images/pic-400-01.jpg`,
  `${tengxuanAsset}/images/pic-400-02.jpg`,
  `${tengxuanAsset}/images/pic-400-03.jpg`
]

const serviceCards = computed(() =>
  tm<Array<{ title: string; summary?: string }>>('company.servicePlatform.cards').map((card, index) => ({
    ...card,
    image: serviceImages[index] ?? serviceImages[0]
  }))
)

const chainImages = [
  `${tengxuanAsset}/images/pic-400-04.jpg`,
  `${tengxuanAsset}/images/pic-400-05.jpg`,
  `${tengxuanAsset}/images/pic-400-06.jpg`
]

const chainCards = computed(() =>
  tm<Array<{ title: string; summary: string }>>('company.detailPage.chain.cards').map((card, index) => ({
    ...card,
    image: chainImages[index] ?? chainImages[0]
  }))
)

const mapPointPositions = [
  { x: 68, y: 33, level: 'strong' },
  { x: 63, y: 48, level: 'small' },
  { x: 64, y: 64, level: 'medium' },
  { x: 66, y: 50, level: 'small' },
  { x: 70, y: 48, level: 'medium' },
  { x: 67, y: 77, level: 'small' },
  { x: 13, y: 43, level: 'medium' }
]

const mapPoints = computed(() =>
  tm<string[]>('company.detailPage.mapPoints').map((city, index) => ({
    city,
    ...(mapPointPositions[index] ?? mapPointPositions[0])
  }))
)

const teamPhotos = computed(() => [
  ...company.value.photoSlots.map((photo) => ({
    title: photo.label,
    image: photo.image,
    alt: photo.alt
  })),
  ...company.value.mediaGallery.map((photo) => ({
    title: photo.title,
    image: photo.image,
    alt: photo.alt
  })),
  ...company.value.activityCategories.flatMap((category) =>
    category.images.map((photo) => ({
      title: photo.title,
      image: photo.image,
      alt: photo.alt
    }))
  )
])
</script>

<template>
  <article class="tx-company-page">
    <section class="tx-company-hero" aria-labelledby="company-detail-title">
      <video autoplay muted loop playsinline preload="auto">
        <source :src="`${tengxuanAsset}/video/index.mp4`" type="video/mp4" />
      </video>
      <div class="tx-company-hero-overlay" aria-hidden="true"></div>
      <RouterLink class="tx-company-back" :to="{ name: 'home', hash: '#company' }">
        {{ t('common.backHome') }}
      </RouterLink>
      <div class="tx-company-hero-copy">
        <h1 id="company-detail-title">{{ t('company.detailPage.heroTitle') }}</h1>
        <p>{{ t('company.detailPage.heroSubtitle') }}</p>
      </div>
      <a class="tx-company-scroll" href="#company-intro" :aria-label="t('company.detailPage.scrollAria')">
        <span aria-hidden="true"></span>
        <b>{{ t('company.detailPage.scrollLabel') }}</b>
      </a>
    </section>

    <section id="company-intro" class="tx-company-intro" :aria-label="t('company.detailPage.introAria')">
      <p>
        <template v-for="line in tm<string[]>('company.detailPage.introLines')" :key="line">
          {{ line }}<br />
        </template>
      </p>
    </section>

    <section class="tx-company-data" :aria-label="t('company.factsAria')">
      <div v-for="stat in company.stats" :key="stat.label" class="tx-company-data-item">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </section>

    <section class="tx-company-culture" aria-labelledby="company-culture-title">
      <div class="tx-company-section-inner tx-company-culture-grid">
        <div class="tx-company-image-title" aria-hidden="true">{{ t('company.detailPage.cultureVisualTitle') }}</div>
        <div class="tx-company-culture-list">
          <article>
            <h2 id="company-culture-title">{{ t('company.vision') }}</h2>
            <div>
              <p v-for="line in tm<string[]>('company.detailPage.visionLines')" :key="line">{{ line }}</p>
            </div>
          </article>
          <article>
            <h2>{{ t('company.mission') }}</h2>
            <div>
              <p>{{ company.culture.mission }}</p>
            </div>
          </article>
          <article>
            <h2>{{ t('company.values') }}</h2>
            <div>
              <p>{{ company.culture.values.join(t('company.detailPage.valueSeparator')) }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="tx-company-feature" aria-labelledby="company-service-title">
      <div class="tx-company-feature-title">
        <h2 id="company-service-title">{{ t('company.servicePlatform.title') }}</h2>
        <p>{{ t('company.servicePlatform.summary') }}</p>
      </div>
      <div class="tx-company-card-row">
        <article v-for="card in serviceCards" :key="card.title" class="tx-company-feature-card">
          <img :src="card.image" :alt="card.title" width="400" height="250" loading="lazy" />
          <div>
            <h3>{{ card.title }}</h3>
            <p v-if="card.summary">{{ card.summary }}</p>
            <span></span>
          </div>
        </article>
      </div>
    </section>

    <section class="tx-company-feature" aria-labelledby="company-chain-title">
      <div class="tx-company-feature-title">
        <h2 id="company-chain-title">{{ t('company.detailPage.chain.title') }}</h2>
        <p v-for="line in tm<string[]>('company.detailPage.chain.summaries')" :key="line">{{ line }}</p>
      </div>
      <div class="tx-company-card-row">
        <article v-for="card in chainCards" :key="card.title" class="tx-company-feature-card">
          <img :src="card.image" :alt="card.title" width="400" height="250" loading="lazy" />
          <div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.summary }}</p>
            <span></span>
          </div>
        </article>
      </div>
    </section>

    <section class="tx-company-team" aria-labelledby="company-team-title">
      <div class="tx-company-feature-title">
        <h2 id="company-team-title">{{ t('company.detailPage.team.title') }}</h2>
        <p>{{ t('company.detailPage.team.summary') }}</p>
      </div>
      <div class="tx-company-team-grid">
        <figure
          v-for="(photo, index) in teamPhotos.slice(0, 12)"
          :key="`${photo.title}-${index}`"
          :class="{ 'tx-company-team-card--wide': index === 0 }"
          class="tx-company-team-card"
        >
          <img :src="photo.image" :alt="photo.alt" width="640" height="420" loading="lazy" />
        </figure>
      </div>
      <RouterLink class="tx-company-more" :to="{ name: 'company-photos' }">
        {{ t('company.detailPage.team.more') }}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </RouterLink>
    </section>

    <section class="tx-company-contact" aria-labelledby="company-contact-title">
      <div class="tx-company-feature-title">
        <h2 id="company-contact-title">{{ t('company.detailPage.contactTitle') }}</h2>
      </div>
      <div class="tx-company-map">
        <img :src="`${tengxuanAsset}/images/map.png`" :alt="t('company.detailPage.mapAlt')" width="1100" height="500" loading="lazy" />
        <span
          v-for="point in mapPoints"
          :key="point.city"
          class="tx-company-map-point"
          :class="`tx-company-map-point--${point.level}`"
          :style="{ left: `${point.x}%`, top: `${point.y}%` }"
        >
          <i></i>
          <b>{{ point.city }}</b>
        </span>
      </div>
      <div class="tx-company-branch-tabs">
        <article v-for="branch in company.branches" :key="branch.city">
          <strong>{{ branch.city }}</strong>
          <p>{{ t('footer.addressLabel') }}: {{ branch.address }}</p>
        </article>
      </div>
    </section>
  </article>
</template>
