<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import BrandLogo from '@/components/brand/BrandLogo.vue'
import { useI18n, type Locale } from '@/i18n'
import { localizePath, normalizeContentPath } from '@/seo'

const menuOpen = ref(false)
const { locale, locales, setLocale, t } = useI18n()
const route = useRoute()
const router = useRouter()

function closeMenu() {
  menuOpen.value = false
}

function changeLocale(nextLocale: Locale) {
  setLocale(nextLocale)
  closeMenu()

  const nextPath = localizePath(normalizeContentPath(route.path), nextLocale)
  void router.push({ path: nextPath, hash: route.hash, query: route.query })
}
</script>

<template>
  <header class="site-header">
    <nav class="nav-shell" :aria-label="t('nav.aria')">
      <RouterLink class="brand" :to="{ name: 'home', hash: '#top' }" :aria-label="t('nav.homeAria')" @click="closeMenu">
        <BrandLogo />
      </RouterLink>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="menu-lines" aria-hidden="true"></span>
        <span class="sr-only">{{ t('nav.openMenu') }}</span>
      </button>

      <div id="primary-menu" class="nav-links" :class="{ 'is-open': menuOpen }">
        <RouterLink :to="{ name: 'home', hash: '#top' }" @click="closeMenu">{{ t('nav.home') }}</RouterLink>
        <RouterLink :to="{ name: 'destinations' }" @click="closeMenu">{{ t('nav.destinations') }}</RouterLink>
        <RouterLink :to="{ name: 'custom-trip' }" @click="closeMenu">{{ t('nav.customTrip') }}</RouterLink>
        <RouterLink :to="{ name: 'products' }" @click="closeMenu">{{ t('nav.trips') }}</RouterLink>
        <RouterLink :to="{ name: 'before-you-go' }" @click="closeMenu">{{ t('nav.planning') }}</RouterLink>
        <RouterLink :to="{ name: 'company' }" @click="closeMenu">{{ t('nav.company') }}</RouterLink>
        <label class="language-select language-select--mobile">
          <span class="sr-only">{{ t('nav.language') }}</span>
          <select v-model="locale" :aria-label="t('nav.language')" @change="changeLocale(($event.target as HTMLSelectElement).value as Locale)">
            <option v-for="item in locales" :key="item.code" :value="item.code">
              {{ item.label }}
            </option>
          </select>
        </label>
      </div>

      <div class="nav-actions">
        <label class="language-select">
          <span class="sr-only">{{ t('nav.language') }}</span>
          <select v-model="locale" :aria-label="t('nav.language')" @change="changeLocale(($event.target as HTMLSelectElement).value as Locale)">
            <option v-for="item in locales" :key="item.code" :value="item.code">
              {{ item.shortLabel }}
            </option>
          </select>
        </label>
        <RouterLink class="icon-button" :to="{ name: 'products' }" :aria-label="t('nav.searchTrips')">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21 21-4.3-4.3m2.3-5.2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
          </svg>
        </RouterLink>
        <RouterLink class="outline-action" :to="{ name: 'contact' }">{{ t('nav.contact') }}</RouterLink>
      </div>
    </nav>
  </header>
</template>
