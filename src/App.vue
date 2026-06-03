<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteFooter from '@/layout/SiteFooter.vue'
import SiteHeader from '@/layout/SiteHeader.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
  <SiteFooter />
</template>
