<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n, useTravelContent } from '@/i18n'
import { cityClassicSpotsBySlug, cityGalleryBySlug, type CityGalleryImage } from '@/content/travel'

const route = useRoute()
const { locale, t } = useI18n()
const { attractionDetails, cities } = useTravelContent()
const activeGalleryIndex = ref(0)
const carouselIntervalMs = 3000
let galleryTimer: ReturnType<typeof window.setInterval> | undefined

const city = computed(() => cities.value.find((item) => item.slug === route.params.slug) ?? cities.value[0])
const nearbyCities = computed(() => cities.value.filter((item) => item.slug !== city.value.slug).slice(0, 3))
const cityAttractions = computed(() =>
  attractionDetails.value.filter((item) => item.city === city.value.name).slice(0, 4)
)
const cityClassicSpots = computed(() =>
  (cityClassicSpotsBySlug[city.value.slug] ?? []).map((item) => {
    const localized = locale.value === 'zh' ? item.zh : undefined
    return {
      name: localized?.name ?? item.name,
      summary: localized?.summary ?? item.summary,
      image: item.image,
      alt: localized?.alt ?? item.alt,
      fit: item.fit
    }
  })
)
const hasCityClassicSpots = computed(() => cityClassicSpots.value.length > 0)
const cityGallery = computed<CityGalleryImage[]>(() => {
  const seededGallery = cityGalleryBySlug[city.value.slug] ?? []
  const gallery = seededGallery.length
    ? seededGallery
    : [
        {
          image: city.value.image || '',
          alt: city.value.alt || city.value.name,
          title: city.value.name
        },
        ...cityAttractions.value.map((item) => ({
          image: item.image,
          alt: item.alt,
          title: item.name
        }))
      ]

  return gallery.filter((item) => item.image).slice(0, 5)
})
const activeGalleryImage = computed(() => cityGallery.value[activeGalleryIndex.value] ?? cityGallery.value[0])
const cityStory = computed(() =>
  city.value.story?.length
    ? city.value.story
    : [
        city.value.signature,
        city.value.summary,
        city.value.travelNote,
        `${t('city.season')}: ${city.value.season}`,
        `${t('city.transport')}: ${city.value.connections}`
      ]
)
function showGalleryImage(index: number) {
  activeGalleryIndex.value = index
  restartGalleryAutoplay()
}

function showPreviousGalleryImage() {
  activeGalleryIndex.value = (activeGalleryIndex.value - 1 + cityGallery.value.length) % cityGallery.value.length
  restartGalleryAutoplay()
}

function showNextGalleryImage() {
  activeGalleryIndex.value = (activeGalleryIndex.value + 1) % cityGallery.value.length
  restartGalleryAutoplay()
}

function advanceGalleryImage() {
  if (cityGallery.value.length < 2) return
  activeGalleryIndex.value = (activeGalleryIndex.value + 1) % cityGallery.value.length
}

function startGalleryAutoplay() {
  stopGalleryAutoplay()
  if (cityGallery.value.length < 2) return
  galleryTimer = window.setInterval(advanceGalleryImage, carouselIntervalMs)
}

function stopGalleryAutoplay() {
  if (!galleryTimer) return
  window.clearInterval(galleryTimer)
  galleryTimer = undefined
}

function restartGalleryAutoplay() {
  startGalleryAutoplay()
}

watch(
  () => city.value.slug,
  () => {
    activeGalleryIndex.value = 0
    startGalleryAutoplay()
  }
)

watch(
  () => cityGallery.value.length,
  () => {
    if (activeGalleryIndex.value >= cityGallery.value.length) activeGalleryIndex.value = 0
    startGalleryAutoplay()
  }
)

onMounted(startGalleryAutoplay)
onBeforeUnmount(stopGalleryAutoplay)
</script>

<template>
  <article class="city-detail-page">
    <section class="city-detail-hero" aria-labelledby="city-detail-title">
      <div class="city-detail-copy">
        <RouterLink class="product-back-link" :to="{ name: 'cities' }">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
          {{ t('city.allGuides') }}
        </RouterLink>
        <p class="product-eyebrow">{{ city.region }} · {{ city.duration }}</p>
        <h1 id="city-detail-title">{{ city.name }}</h1>
        <p>{{ city.signature }}</p>
      </div>
      <figure class="city-detail-media city-detail-carousel">
        <img
          v-if="activeGalleryImage"
          :src="activeGalleryImage.image"
          :alt="activeGalleryImage.alt"
          :class="{ 'is-contain-image': activeGalleryImage.fit === 'contain' }"
          :style="{ objectPosition: activeGalleryImage.position }"
          width="1100"
          height="733"
          loading="eager"
          fetchpriority="high"
        />
        <div v-if="cityGallery.length > 1" class="city-carousel-controls" :aria-label="t('city.galleryControls')">
          <button type="button" :aria-label="t('city.previousImage')" @click="showPreviousGalleryImage">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" :aria-label="t('city.nextImage')" @click="showNextGalleryImage">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
          </button>
        </div>
        <div v-if="cityGallery.length > 1" class="city-carousel-thumbs" :aria-label="t('city.galleryThumbnails')">
          <button
            v-for="(item, index) in cityGallery"
            :key="`${item.title}-${index}`"
            type="button"
            :class="{ 'is-active': index === activeGalleryIndex }"
            :aria-label="t('city.showImage', { title: item.title })"
            @click="showGalleryImage(index)"
          >
            <img
              :src="item.image"
              :alt="item.alt"
              :class="{ 'is-contain-image': item.fit === 'contain' }"
              :style="{ objectPosition: item.position }"
              width="120"
              height="80"
              loading="lazy"
            />
          </button>
        </div>
        <figcaption>{{ activeGalleryImage?.title || city.summary }}</figcaption>
      </figure>
    </section>

    <section class="city-detail-facts" :aria-label="t('city.factsAria')">
      <div>
        <span>{{ t('city.bestFor') }}</span>
        <strong>{{ city.bestFor.join(' · ') }}</strong>
      </div>
      <div>
        <span>{{ t('city.recommendedStay') }}</span>
        <strong>{{ city.duration }}</strong>
      </div>
      <div>
        <span>{{ t('city.season') }}</span>
        <strong>{{ city.season }}</strong>
      </div>
      <div>
        <span>{{ t('city.transport') }}</span>
        <strong>{{ city.connections }}</strong>
      </div>
    </section>

    <section class="city-detail-section city-story-section" aria-labelledby="city-story-title">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.cityStory') }}</p>
        <h2 id="city-story-title">{{ t('city.cityStoryTitle', { city: city.name }) }}</h2>
      </div>
      <div class="city-story-copy">
        <p v-for="paragraph in cityStory" :key="paragraph">{{ paragraph }}</p>
      </div>
    </section>

    <section v-if="hasCityClassicSpots || cityAttractions.length" class="city-detail-section" aria-labelledby="city-classics-title">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.popularClassics') }}</p>
        <h2 id="city-classics-title">{{ t('city.popularClassicsTitle', { city: city.name }) }}</h2>
      </div>
      <div v-if="hasCityClassicSpots" class="city-classic-grid">
        <article v-for="item in cityClassicSpots" :key="item.name" class="city-classic-card city-classic-card--static">
          <img :src="item.image" :alt="item.alt" :class="{ 'is-contain-image': item.fit === 'contain' }" width="720" height="480" loading="lazy" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.summary }}</p>
          </div>
        </article>
      </div>
      <div v-else class="city-classic-grid">
        <RouterLink
          v-for="item in cityAttractions"
          :key="item.slug"
          class="city-classic-card"
          :to="{ name: 'attraction-detail', params: { slug: item.slug } }"
        >
          <img :src="item.image" :alt="item.alt" width="720" height="480" loading="lazy" />
          <div>
            <span>{{ t('city.relatedAttraction') }}</span>
            <h3>{{ item.name }}</h3>
            <p>{{ item.summary }}</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="city-note-band" :aria-label="t('city.noteAria')">
      <div>
        <p class="product-eyebrow">{{ t('city.note') }}</p>
        <h2>{{ city.travelNote }}</h2>
      </div>
      <RouterLink class="primary-button" :to="{ name: 'contact' }">
        {{ t('city.customRoute') }}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </RouterLink>
    </section>

    <section class="city-detail-section" aria-labelledby="nearby-cities-title">
      <div class="city-detail-heading">
        <p class="product-eyebrow">{{ t('city.ideas') }}</p>
        <h2 id="nearby-cities-title">{{ t('city.pairWith', { city: city.name }) }}</h2>
      </div>
      <div class="city-related-grid">
        <RouterLink
          v-for="item in nearbyCities"
          :key="item.slug"
          class="city-related-card"
          :to="{ name: 'city-detail', params: { slug: item.slug } }"
        >
          <span>{{ item.region }} · {{ item.duration }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
    </section>
  </article>
</template>
