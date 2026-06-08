<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { tm } from '@/i18n'

type CustomTripPage = {
  eyebrow: string
  title: string
  summary: string
  email: string
  formTitle: string
  emailLabel: string
  emailPlaceholder: string
  travelWindowLabel: string
  travelWindowPlaceholder: string
  travelersLabel: string
  travelersPlaceholder: string
  arrivalLabel: string
  arrivalPlaceholder: string
  departureLabel: string
  departurePlaceholder: string
  interestsLabel: string
  interestsPlaceholder: string
  paceLabel: string
  pacePlaceholder: string
  hotelLabel: string
  hotelPlaceholder: string
  notesLabel: string
  notesPlaceholder: string
  submitLabel: string
  successTitle: string
  successText: string
  responseLabel: string
  responseText: string
  proofTitle: string
  benefitsTitle: string
  ideasTitle: string
  templateSubject: string
  templateBody: string
  benefits: Array<{ title: string; text: string }>
  ideas: Array<{ title: string; text: string }>
  proofPoints: string[]
}

const page = computed(() => tm<CustomTripPage>('pages.customTrip'))
const submitted = ref(false)

const form = reactive({
  email: '',
  travelWindow: '',
  travelers: '',
  arrival: '',
  departure: '',
  interests: '',
  pace: '',
  hotelLevel: '',
  notes: ''
})

const mailtoHref = computed(() => {
  const body = page.value.templateBody
    .replace('{email}', form.email)
    .replace('{travelWindow}', form.travelWindow)
    .replace('{travelers}', form.travelers)
    .replace('{arrival}', form.arrival)
    .replace('{departure}', form.departure)
    .replace('{interests}', form.interests)
    .replace('{pace}', form.pace)
    .replace('{hotelLevel}', form.hotelLevel)
    .replace('{notes}', form.notes)

  return `mailto:${page.value.email}?subject=${encodeURIComponent(page.value.templateSubject)}&body=${encodeURIComponent(body)}`
})

function submitRequest() {
  submitted.value = true

  if (typeof window !== 'undefined') {
    window.location.href = mailtoHref.value
  }
}
</script>

<template>
  <article class="custom-trip-page">
    <section class="custom-trip-hero" aria-labelledby="custom-trip-title">
      <div class="custom-trip-copy">
        <p class="product-eyebrow">{{ page.eyebrow }}</p>
        <h1 id="custom-trip-title">{{ page.title }}</h1>
        <p>{{ page.summary }}</p>
        <ul class="custom-trip-proof" :aria-label="page.proofTitle">
          <li v-for="point in page.proofPoints" :key="point">{{ point }}</li>
        </ul>
      </div>

      <form class="custom-trip-form" :aria-label="page.formTitle" @submit.prevent="submitRequest">
        <div>
          <span>{{ page.responseLabel }}</span>
          <h2>{{ page.formTitle }}</h2>
          <p>{{ page.responseText }}</p>
        </div>

        <label>
          {{ page.emailLabel }}
          <input v-model="form.email" type="email" name="email" autocomplete="email" required :placeholder="page.emailPlaceholder" />
        </label>

        <div class="custom-trip-form-grid">
          <label>
            {{ page.travelWindowLabel }}
            <input v-model="form.travelWindow" name="travel-window" autocomplete="off" :placeholder="page.travelWindowPlaceholder" />
          </label>
          <label>
            {{ page.travelersLabel }}
            <input v-model="form.travelers" name="travelers" autocomplete="off" :placeholder="page.travelersPlaceholder" />
          </label>
          <label>
            {{ page.arrivalLabel }}
            <input v-model="form.arrival" name="arrival" autocomplete="off" :placeholder="page.arrivalPlaceholder" />
          </label>
          <label>
            {{ page.departureLabel }}
            <input v-model="form.departure" name="departure" autocomplete="off" :placeholder="page.departurePlaceholder" />
          </label>
        </div>

        <label>
          {{ page.interestsLabel }}
          <textarea v-model="form.interests" name="interests" rows="3" :placeholder="page.interestsPlaceholder"></textarea>
        </label>

        <div class="custom-trip-form-grid">
          <label>
            {{ page.paceLabel }}
            <input v-model="form.pace" name="pace" :placeholder="page.pacePlaceholder" />
          </label>
          <label>
            {{ page.hotelLabel }}
            <input v-model="form.hotelLevel" name="hotel-level" :placeholder="page.hotelPlaceholder" />
          </label>
        </div>

        <label>
          {{ page.notesLabel }}
          <textarea v-model="form.notes" name="notes" rows="3" :placeholder="page.notesPlaceholder"></textarea>
        </label>

        <button class="primary-button" type="submit">
          {{ page.submitLabel }}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />
          </svg>
        </button>

        <p v-if="submitted" class="custom-trip-success" role="status">
          <strong>{{ page.successTitle }}</strong>
          {{ page.successText }}
        </p>
      </form>
    </section>

    <section class="custom-trip-content" :aria-label="page.benefitsTitle">
      <article v-for="benefit in page.benefits" :key="benefit.title" class="contact-card">
        <span aria-hidden="true"></span>
        <h2>{{ benefit.title }}</h2>
        <p>{{ benefit.text }}</p>
      </article>
    </section>

    <section class="custom-trip-ideas" :aria-label="page.ideasTitle">
      <div>
        <p class="product-eyebrow">{{ page.ideasTitle }}</p>
        <h2>{{ page.benefitsTitle }}</h2>
      </div>
      <article v-for="idea in page.ideas" :key="idea.title">
        <strong>{{ idea.title }}</strong>
        <p>{{ idea.text }}</p>
      </article>
    </section>
  </article>
</template>
