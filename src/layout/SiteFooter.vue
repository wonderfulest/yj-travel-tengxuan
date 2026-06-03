<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { openSubscribe, openUnsubscribe, type SubscriptionStatus } from '@/api/subscriptions'
import BrandLogo from '@/components/brand/BrandLogo.vue'

const subscribed = ref(false)
const email = ref('')
const subscriptionLoading = ref(false)
const subscriptionError = ref('')
const subscriptionStatus = ref<SubscriptionStatus | null>(null)
const subscriptionTenantId = String(import.meta.env.VITE_SUBSCRIPTION_TENANT_ID || 'otw')
const canUnsubscribe = computed(() => Boolean(subscriptionStatus.value?.subscribed && email.value.trim()))

async function handleNewsletterSubmit() {
  await updateNewsletterSubscription('subscribe')
}

async function handleNewsletterUnsubscribe() {
  await updateNewsletterSubscription('unsubscribe')
}

async function updateNewsletterSubscription(action: 'subscribe' | 'unsubscribe') {
  if (!email.value.trim()) {
    subscriptionError.value = 'Enter an email address.'
    return
  }
  subscriptionLoading.value = true
  subscriptionError.value = ''
  try {
    const payload = {
      tenantId: subscriptionTenantId,
      email: email.value
    }
    const status = action === 'subscribe'
      ? await openSubscribe(payload)
      : await openUnsubscribe(payload)
    subscriptionStatus.value = status
    subscribed.value = status.subscribed
  } catch (error) {
    subscriptionError.value = error instanceof Error ? error.message : 'Subscription request failed.'
  } finally {
    subscriptionLoading.value = false
  }
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <RouterLink class="brand footer-brand" :to="{ name: 'home', hash: '#top' }" aria-label="Tengxuan Travel home">
          <BrandLogo />
        </RouterLink>
        <p>Private travel experiences, thoughtfully planned for international visitors.</p>
      </div>
      <div>
        <h2>Explore</h2>
        <RouterLink :to="{ name: 'home', hash: '#cities' }">City Guides</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#attractions' }">Attractions</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#trips' }">Travel Products</RouterLink>
        <RouterLink :to="{ name: 'beijing-xian-shanghai' }">Beijing-Xi’an-Shanghai</RouterLink>
      </div>
      <div>
        <h2>Plan</h2>
        <RouterLink :to="{ name: 'home', hash: '#planning' }">Before You Go</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#planning' }">Visa & Entry</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#planning' }">FAQ</RouterLink>
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
            required
            placeholder="Enter your email"
          />
          <button type="submit" :disabled="subscribed || subscriptionLoading">
            {{ subscriptionLoading ? 'Sending...' : subscribed ? 'Subscribed' : 'Subscribe now' }}
          </button>
        </div>
        <p v-if="subscriptionError" class="newsletter-message error">{{ subscriptionError }}</p>
        <p v-else-if="subscribed" class="newsletter-message success">Subscription confirmed.</p>
        <p v-else-if="subscriptionStatus" class="newsletter-message muted">You are unsubscribed.</p>
        <button
          v-if="canUnsubscribe"
          class="newsletter-unsubscribe"
          type="button"
          :disabled="subscriptionLoading"
          @click="handleNewsletterUnsubscribe"
        >
          Unsubscribe this email
        </button>
      </form>
    </div>
  </footer>
</template>
