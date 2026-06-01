<script setup lang="ts">
import { computed, ref } from 'vue'
import { attractions, cities, companyIntro, trips } from '@/content/travel'

const menuOpen = ref(false)
const subscribed = ref(false)
const email = ref('')

const featuredCities = computed(() => cities.filter((city) => city.image))
const compactCities = computed(() => cities.filter((city) => !city.image))
const featuredTrip = computed(() => trips.find((trip) => trip.featured))
const standardTrips = computed(() => trips.filter((trip) => !trip.featured))

function closeMenu() {
  menuOpen.value = false
}

function handleNewsletterSubmit() {
  subscribed.value = true
}
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="site-header">
    <nav class="nav-shell" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Tengxuan Travel home" @click="closeMenu">
        <svg class="brand-logo" viewBox="0 0 520 132" role="img" aria-label="腾轩航旅 Tengxuan Travel">
          <g class="brand-symbol" aria-hidden="true">
            <rect x="0" y="0" width="8" height="52" />
            <rect x="17" y="12" width="8" height="96" />
            <rect x="34" y="5" width="8" height="58" />
            <rect x="58" y="0" width="8" height="118" />
            <rect x="80" y="13" width="8" height="74" />
            <rect x="102" y="5" width="8" height="94" />
          </g>
          <text class="brand-logo-cn" x="136" y="70">腾轩航旅</text>
          <text class="brand-logo-en" x="136" y="118">Tengxuan Travel</text>
        </svg>
      </a>

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
        <a href="#cities" @click="closeMenu">Cities</a>
        <a href="#company" @click="closeMenu">Company</a>
        <a href="#attractions" @click="closeMenu">Attractions</a>
        <a href="#trips" @click="closeMenu">Trips</a>
        <a href="#planning" @click="closeMenu">Planning</a>
      </div>

      <div class="nav-actions">
        <a class="icon-button" href="#trips" aria-label="Search trips">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21 21-4.3-4.3m2.3-5.2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
          </svg>
        </a>
        <a class="outline-action" href="#planning">Contact Us</a>
      </div>
    </nav>
  </header>

  <main id="main">
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="hero-media" aria-hidden="true">
        <div class="hero-panel hero-panel-left"></div>
        <div class="hero-panel hero-panel-center"></div>
        <div class="hero-panel hero-panel-right"></div>
      </div>

      <div class="hero-content">
        <h1 id="hero-title">Discover China, City by City</h1>
        <p>
          Expert private guides, visa-friendly planning, and flexible trips designed around the
          way international visitors actually travel.
        </p>
        <div class="hero-actions">
          <a class="primary-button" href="#cities">
            Explore Cities
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </a>
          <a class="secondary-button" href="#company">
            About Tengxuan
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>

    <section id="company" class="company-section" aria-labelledby="company-title">
      <div class="company-shell">
        <div class="company-copy">
          <span>{{ companyIntro.eyebrow }}</span>
          <h2 id="company-title">{{ companyIntro.title }}</h2>
          <p class="company-lead">{{ companyIntro.summary }}</p>
          <p>{{ companyIntro.description }}</p>
        </div>

        <div class="company-stats" aria-label="Tengxuan Travel Group facts">
          <div v-for="stat in companyIntro.stats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>

        <div class="company-panel">
          <div class="company-panel-block">
            <h3>Brand System</h3>
            <div class="brand-list">
              <article v-for="brand in companyIntro.brands" :key="brand.name">
                <h4>{{ brand.name }}</h4>
                <p>{{ brand.summary }}</p>
              </article>
            </div>
          </div>

          <div class="company-panel-block">
            <h3>Development Path</h3>
            <ol class="milestone-list">
              <li v-for="milestone in companyIntro.milestones" :key="milestone.year">
                <span>{{ milestone.year }}</span>
                <p>{{ milestone.event }}</p>
              </li>
            </ol>
          </div>

          <div class="company-values" aria-label="Corporate values">
            <span v-for="value in companyIntro.values" :key="value">{{ value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="cities" class="section" aria-labelledby="cities-title">
      <div class="section-heading">
        <div>
          <h2 id="cities-title">Major City Guides</h2>
          <p>Choose your base by travel style, pace, and first-time visitor priorities.</p>
        </div>
        <a class="text-link" href="#planning">Build a route</a>
      </div>

      <div class="city-grid">
        <article v-for="city in featuredCities" :key="city.name" class="city-card">
          <img :src="city.image" :alt="city.alt" />
          <div>
            <h3>{{ city.name }}</h3>
            <p>{{ city.summary }}</p>
            <span>{{ city.duration }}</span>
          </div>
        </article>
        <article v-for="city in compactCities" :key="city.name" class="city-card compact">
          <h3>{{ city.name }}</h3>
          <p>{{ city.summary }}</p>
        </article>
      </div>
    </section>

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

    <section id="trips" class="section" aria-labelledby="trips-title">
      <div class="section-heading">
        <div>
          <h2 id="trips-title">Main Travel Products</h2>
          <p>Ready-made routes that can be adjusted for pace, hotels, dietary needs, and flights.</p>
        </div>
        <a class="text-link" href="#planning">Ask for a quote</a>
      </div>

      <div class="trip-grid">
        <article v-if="featuredTrip" class="trip-card featured">
          <img :src="featuredTrip.image" :alt="featuredTrip.alt" />
          <div class="trip-body">
            <div>
              <h3>{{ featuredTrip.name }}</h3>
              <p>{{ featuredTrip.summary }}</p>
            </div>
            <dl>
              <div v-for="fact in featuredTrip.facts" :key="fact.label">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.value }}</dd>
              </div>
            </dl>
          </div>
        </article>
        <article v-for="trip in standardTrips" :key="trip.name" class="trip-card">
          <h3>{{ trip.name }}</h3>
          <p>{{ trip.summary }}</p>
          <span>{{ trip.meta }}</span>
        </article>
      </div>
    </section>

    <section id="planning" class="planning-band" aria-labelledby="planning-title">
      <div class="planning-copy">
        <h2 id="planning-title">Plan Your China Journey</h2>
        <p>
          Tell us your arrival city, travel dates, interests, and comfort level. We will shape
          the route, transport, guide schedule, and day-by-day pacing.
        </p>
      </div>
      <div class="planning-points" aria-label="Planning advantages">
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21m0-18c-2.5 2.5-3.8 5.5-3.8 9S9.5 18.5 12 21M3.6 9h16.8M3.6 15h16.8" />
          </svg>
          <span>Visa-friendly support</span>
        </div>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 17 14 7l3 3L7 20H4v-3Zm10-10 2-2a2.1 2.1 0 0 1 3 3l-2 2" />
          </svg>
          <span>Private and flexible</span>
        </div>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 19V7l8-4 8 4v12l-8 4-8-4Zm4-8h8M8 15h8M12 3v20" />
          </svg>
          <span>Local English-speaking experts</span>
        </div>
      </div>
      <a class="primary-button" href="mailto:hello@tengxuan.com">
        Contact Our Experts
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </a>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <a class="brand footer-brand" href="#top" aria-label="Tengxuan Travel home">
          <svg class="brand-logo" viewBox="0 0 520 132" role="img" aria-label="腾轩航旅 Tengxuan Travel">
            <g class="brand-symbol" aria-hidden="true">
              <rect x="0" y="0" width="8" height="52" />
              <rect x="17" y="12" width="8" height="96" />
              <rect x="34" y="5" width="8" height="58" />
              <rect x="58" y="0" width="8" height="118" />
              <rect x="80" y="13" width="8" height="74" />
              <rect x="102" y="5" width="8" height="94" />
            </g>
            <text class="brand-logo-cn" x="136" y="70">腾轩航旅</text>
            <text class="brand-logo-en" x="136" y="118">Tengxuan Travel</text>
          </svg>
        </a>
        <p>Private travel experiences, thoughtfully planned for international visitors.</p>
      </div>
      <div>
        <h2>Explore</h2>
        <a href="#cities">City Guides</a>
        <a href="#attractions">Attractions</a>
        <a href="#trips">Travel Products</a>
      </div>
      <div>
        <h2>Plan</h2>
        <a href="#planning">Before You Go</a>
        <a href="#planning">Visa & Entry</a>
        <a href="#planning">FAQ</a>
      </div>
      <form class="newsletter" aria-label="Newsletter signup" @submit.prevent="handleNewsletterSubmit">
        <label for="email">Stay inspired</label>
        <div>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="Enter your email"
          />
          <button type="submit" :disabled="subscribed">
            {{ subscribed ? 'Subscribed' : 'Subscribe' }}
          </button>
        </div>
      </form>
    </div>
  </footer>
</template>
