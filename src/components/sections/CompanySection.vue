<script setup lang="ts">
import { companyIntro } from '@/content/travel'
</script>

<template>
  <section id="company" class="company-section" aria-labelledby="company-title">
    <div class="company-shell">
      <div class="company-hero">
        <div class="company-copy">
          <span>{{ companyIntro.eyebrow }}</span>
          <h2 id="company-title">{{ companyIntro.title }}</h2>
          <p class="company-lead">{{ companyIntro.summary }}</p>
          <p>{{ companyIntro.description }}</p>
          <div class="company-actions">
            <a class="primary-button" href="#planning">
              Plan with Tengxuan
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </a>
            <a class="secondary-button company-secondary" href="#trips">
              View travel products
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </a>
          </div>
        </div>

        <div class="company-proof" aria-label="Tengxuan Travel Group facts">
          <div v-for="stat in companyIntro.stats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="company-capabilities" aria-label="Core capabilities">
        <article v-for="pillar in companyIntro.pillars" :key="pillar.title">
          <span aria-hidden="true"></span>
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.text }}</p>
        </article>
      </div>

      <div class="company-panel">
        <div class="company-panel-block company-brand-block">
          <div>
            <span class="panel-kicker">Brand matrix</span>
            <h3>Travel services across product, platform, and supply</h3>
          </div>
          <div class="brand-list">
            <article v-for="brand in companyIntro.brands" :key="brand.name">
              <h4>{{ brand.name }}</h4>
              <p>{{ brand.summary }}</p>
            </article>
          </div>
        </div>

        <div class="company-panel-block company-timeline-block">
          <div>
            <span class="panel-kicker">Development path</span>
            <h3>Long-running operating history with platform expansion</h3>
          </div>
          <ol class="milestone-list">
            <li v-for="milestone in companyIntro.milestones" :key="milestone.year">
              <span>{{ milestone.year }}</span>
              <p>{{ milestone.event }}</p>
            </li>
          </ol>
        </div>
      </div>

      <div class="company-values" aria-label="Corporate values">
        <span v-for="value in companyIntro.values" :key="value">{{ value }}</span>
      </div>
    </div>
  </section>
</template>
