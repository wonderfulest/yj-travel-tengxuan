<script setup lang="ts">
import { attractions } from '@/content/travel'
</script>

<template>
  <section id="attractions" class="section attractions-section" aria-labelledby="attractions-title">
    <div class="section-heading">
      <div>
        <h2 id="attractions-title">Popular Attractions</h2>
        <p>Landmarks worth building a trip around, from imperial palaces to mountain parks.</p>
      </div>
      <a class="text-link" href="#trips">Match with trips</a>
    </div>

    <div class="attraction-grid">
      <article
        v-for="attraction in attractions"
        :key="attraction.name"
        class="attraction-card"
        :class="{ large: attraction.large }"
      >
        <img :src="attraction.image" :alt="attraction.alt" />
        <div>
          <span>{{ attraction.city }}</span>
          <h3>{{ attraction.name }}</h3>
          <p v-if="attraction.summary">{{ attraction.summary }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
