<script setup lang="ts">
import { computed } from 'vue'
import InfoPageView from '@/views/InfoPageView.vue'
import { tm } from '@/i18n'

type InfoPage = {
  eyebrow: string
  title: string
  summary: string
  sections: Array<{ title: string; body?: string; items?: string[] }>
}

const page = computed(() => tm<InfoPage>('pages.terms'))
</script>

<template>
  <InfoPageView v-bind="page" />
</template>
