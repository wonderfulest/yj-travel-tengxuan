<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { beijingXianShanghaiProduct as product } from '@/content/travel'

onMounted(() => {
  document.title = `${product.name} | Tengxuan Travel`

  const description =
    document.querySelector<HTMLMetaElement>('meta[name="description"]') ||
    document.head.appendChild(document.createElement('meta'))
  description.name = 'description'
  description.content =
    '8-day Beijing, Xi’an, and Shanghai China tour with English-speaking guides, private vehicle service, high-speed rail, 4-star hotels, and group pricing.'
})
</script>

<template>
  <article class="product-page">
    <section class="product-hero" aria-labelledby="product-title">
      <div class="product-hero-media">
        <img :src="product.heroImage" :alt="product.heroAlt" />
      </div>
      <div class="product-hero-copy">
        <RouterLink class="product-back-link" :to="{ name: 'home', hash: '#trips' }">
          Back to travel products
        </RouterLink>
        <p class="product-eyebrow">{{ product.eyebrow }}</p>
        <h1 id="product-title">{{ product.name }}</h1>
        <p>{{ product.summary }}</p>
        <div class="product-actions">
          <a class="primary-button" href="mailto:support@tengxuan.com?subject=Beijing-Xi'an-Shanghai%20tour%20quote">
            Ask for a quote
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </a>
          <a class="secondary-button" href="#itinerary">
            View itinerary
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9h12M6 15h12M4 4h16v16H4z" /></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="product-facts" aria-label="Tour facts">
      <div v-for="fact in product.facts" :key="fact.label">
        <span>{{ fact.label }}</span>
        <strong>{{ fact.value }}</strong>
      </div>
    </section>

    <section class="product-section product-intro" aria-labelledby="product-overview-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">Route overview</p>
        <h2 id="product-overview-title">{{ product.duration }}</h2>
        <p>{{ product.route }}</p>
      </div>
      <div class="product-highlight-grid">
        <article v-for="highlight in product.highlights" :key="highlight">
          <span aria-hidden="true"></span>
          <p>{{ highlight }}</p>
        </article>
      </div>
    </section>

    <section id="itinerary" class="product-section" aria-labelledby="itinerary-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">Day by day</p>
        <h2 id="itinerary-title">Itinerary</h2>
        <p>Meals are shown as breakfast / lunch / dinner.</p>
      </div>

      <div class="itinerary-list">
        <article v-for="day in product.days" :key="day.day" class="itinerary-day">
          <div class="itinerary-marker">
            <strong>{{ day.day }}</strong>
            <span>{{ day.city }}</span>
          </div>
          <div class="itinerary-content">
            <div class="itinerary-title-row">
              <h3>{{ day.title }}</h3>
              <span>{{ day.meals }}</span>
            </div>
            <p>{{ day.summary }}</p>
            <ul>
              <li v-for="sight in day.sights" :key="sight">{{ sight }}</li>
            </ul>
            <p v-if="day.note" class="itinerary-note">{{ day.note }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="product-section product-media-band" aria-labelledby="route-title">
      <div>
        <p class="product-eyebrow">Tour gallery</p>
        <h2 id="route-title">Imperial Beijing, ancient Xi’an, and riverfront Shanghai.</h2>
      </div>
      <div class="route-media-grid">
        <figure
          v-for="image in product.gallery"
          :key="image.title"
          class="route-media-card"
          :class="{ featured: image.featured }"
        >
          <img :src="image.image" :alt="image.alt" loading="lazy" />
          <figcaption>
            <span>{{ image.city }}</span>
            <strong>{{ image.title }}</strong>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="product-section product-details-grid" aria-labelledby="details-title">
      <div class="product-section-heading">
        <p class="product-eyebrow">Commercial details</p>
        <h2 id="details-title">Hotels, pricing, and service scope</h2>
        <p>Hotels are 4-star properties or similar; rooms are based on standard rooms.</p>
      </div>

      <div class="detail-panel hotel-panel">
        <h3>Hotels</h3>
        <dl>
          <div v-for="hotel in product.hotels" :key="hotel.city">
            <dt>{{ hotel.city }}</dt>
            <dd>{{ hotel.hotel }}</dd>
          </div>
        </dl>
      </div>

      <div class="detail-panel price-panel">
        <h3>Quotation</h3>
        <div class="price-list">
          <article v-for="price in product.prices" :key="price.group">
            <span>{{ price.group }}</span>
            <strong>{{ price.price }}</strong>
            <p>{{ price.basis }}</p>
          </article>
        </div>
      </div>

      <div class="detail-panel service-panel">
        <h3>Service including</h3>
        <ul>
          <li v-for="item in product.inclusions" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="detail-panel service-panel">
        <h3>Service excluding</h3>
        <ul>
          <li v-for="item in product.exclusions" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="product-cta" aria-labelledby="product-cta-title">
      <div>
        <p class="product-eyebrow">Ready to quote</p>
        <h2 id="product-cta-title">Use this route as a fixed group product or customize it for your market.</h2>
      </div>
      <a class="primary-button" href="mailto:support@tengxuan.com?subject=Beijing-Xi'an-Shanghai%20tour%20quote">
        Contact Our Experts
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </a>
    </section>
  </article>
</template>
