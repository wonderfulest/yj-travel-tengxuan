<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { tm } from '@/i18n'

type ContactPage = {
  eyebrow: string
  title: string
  summary: string
  items: string[]
}

const page = computed(() => tm<ContactPage>('pages.contact'))

watchEffect(() => {
  document.title = `${page.value.eyebrow} | Tengxuan Travel`
})
</script>

<template>
  <article class="product-page">
    <section class="product-section product-intro" aria-labelledby="contact-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">{{ page.eyebrow }}</p>
        <h1 id="contact-title">{{ page.title }}</h1>
        <p>{{ page.summary }}</p>
      </div>
      <div class="product-highlight-grid">
        <article v-for="item in page.items" :key="item">
          <span aria-hidden="true"></span>
          <p>{{ item }}</p>
        </article>
      </div>
    </section>
  </article>
</template>
