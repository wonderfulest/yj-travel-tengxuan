<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useTravelContent } from '@/i18n'

const { companyDetail: company } = useTravelContent()

const allPhotos = computed(() => [
  ...company.value.photoSlots.map((photo) => ({
    title: photo.label,
    label: '公司影像',
    image: photo.image,
    alt: photo.alt,
    caption: photo.caption
  })),
  ...company.value.mediaGallery.map((photo) => ({
    title: photo.title,
    label: photo.label,
    image: photo.image,
    alt: photo.alt,
    caption: ''
  })),
  ...company.value.activityCategories.flatMap((category) =>
    category.images.map((photo) => ({
      title: photo.title,
      label: category.title,
      image: photo.image,
      alt: photo.alt,
      caption: photo.caption
    }))
  )
])
</script>

<template>
  <article class="tx-company-photo-page">
    <section class="tx-company-photo-hero" aria-labelledby="company-photos-title">
      <RouterLink class="product-back-link" :to="{ name: 'company' }">返回公司介绍</RouterLink>
      <p class="product-eyebrow">团队风采</p>
      <h1 id="company-photos-title">更多照片展示</h1>
      <p>汇总展示腾轩团队办公、活动、会议、伙伴交流和企业文化照片。</p>
    </section>

    <section class="tx-company-photo-grid" aria-label="团队风采照片列表">
      <figure
        v-for="(photo, index) in allPhotos"
        :key="`${photo.image}-${index}`"
        class="tx-company-photo-card"
        :class="{ 'tx-company-photo-card--large': index % 11 === 0 }"
      >
        <img :src="photo.image" :alt="photo.alt" width="900" height="620" loading="lazy" />
        <figcaption>
          <span>{{ photo.label }}</span>
          <strong>{{ photo.title }}</strong>
          <p v-if="photo.caption">{{ photo.caption }}</p>
        </figcaption>
      </figure>
    </section>
  </article>
</template>
