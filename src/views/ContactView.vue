<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { tm } from '@/i18n'

type ContactPage = {
  eyebrow: string
  title: string
  summary: string
  email: string
  ctaLabel: string
  copyLabel: string
  responseLabel: string
  responseText: string
  servicesTitle: string
  checklistTitle: string
  templateSubject: string
  templateBody: string
  items: string[]
  services: string[]
  checklist: string[]
}

const page = computed(() => tm<ContactPage>('pages.contact'))
const mailtoHref = computed(() => {
  const subject = encodeURIComponent(page.value.templateSubject)
  const body = encodeURIComponent(page.value.templateBody)

  return `mailto:${page.value.email}?subject=${subject}&body=${body}`
})

watchEffect(() => {
  document.title = `${page.value.eyebrow} | Tengxuan Travel`
})
</script>

<template>
  <article class="contact-page">
    <section class="contact-hero" aria-labelledby="contact-title">
      <div class="contact-hero-copy">
        <p class="product-eyebrow">{{ page.eyebrow }}</p>
        <h1 id="contact-title">{{ page.title }}</h1>
        <p>{{ page.summary }}</p>
        <div class="contact-actions">
          <a class="primary-button" :href="mailtoHref">
            {{ page.ctaLabel }}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />
            </svg>
          </a>
          <a class="secondary-button" :href="`mailto:${page.email}`">
            {{ page.email }}
          </a>
        </div>
      </div>

      <aside class="contact-response-panel" :aria-label="page.responseLabel">
        <span>{{ page.responseLabel }}</span>
        <strong>{{ page.responseText }}</strong>
        <p>{{ page.copyLabel }}</p>
      </aside>
    </section>

    <section class="contact-content" aria-label="Contact planning details">
      <div class="contact-card contact-card--accent">
        <span aria-hidden="true"></span>
        <h2>{{ page.servicesTitle }}</h2>
        <ul>
          <li v-for="service in page.services" :key="service">{{ service }}</li>
        </ul>
      </div>

      <div class="contact-card">
        <span aria-hidden="true"></span>
        <h2>{{ page.checklistTitle }}</h2>
        <ul>
          <li v-for="item in page.checklist" :key="item">{{ item }}</li>
        </ul>
      </div>

      <article v-for="item in page.items" :key="item" class="contact-note">
        <span aria-hidden="true"></span>
        <p>{{ item }}</p>
      </article>
    </section>
  </article>
</template>
