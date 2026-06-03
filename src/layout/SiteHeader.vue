<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BrandLogo from '@/components/brand/BrandLogo.vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <nav class="nav-shell" aria-label="Primary navigation">
      <RouterLink class="brand" :to="{ name: 'home', hash: '#top' }" aria-label="Tengxuan Travel home" @click="closeMenu">
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
        <span class="sr-only">Open menu</span>
      </button>

      <div id="primary-menu" class="nav-links" :class="{ 'is-open': menuOpen }">
        <RouterLink :to="{ name: 'home', hash: '#cities' }" @click="closeMenu">Cities</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#company' }" @click="closeMenu">Company</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#attractions' }" @click="closeMenu">Attractions</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#trips' }" @click="closeMenu">Trips</RouterLink>
        <RouterLink :to="{ name: 'beijing-xian-shanghai' }" @click="closeMenu">Product</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#planning' }" @click="closeMenu">Planning</RouterLink>
      </div>

      <div class="nav-actions">
        <RouterLink class="icon-button" :to="{ name: 'home', hash: '#trips' }" aria-label="Search trips">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21 21-4.3-4.3m2.3-5.2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
          </svg>
        </RouterLink>
        <RouterLink class="outline-action" :to="{ name: 'home', hash: '#planning' }">Contact Us</RouterLink>
      </div>
    </nav>
  </header>
</template>
