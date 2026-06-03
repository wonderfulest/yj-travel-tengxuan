<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { subscribe as subscribeEmail, unsubscribe, type SubscriptionStatus } from '@/api/subscriptions'

const route = useRoute()
const subscriptionLoading = ref(false)
const subscriptionError = ref('')
const subscriptionStatus = ref<SubscriptionStatus | null>(null)

const subscriptionPayload = computed(() => ({
  token: typeof route.query.token === 'string' ? route.query.token : ''
}))
const subscriptionReady = computed(() => Boolean(subscriptionPayload.value.token))
const subscriptionEmail = computed(() => subscriptionStatus.value?.email || 'this email address')
const subscriptionStateText = computed(() => {
  if (!subscriptionStatus.value) return 'Manage email subscription'
  return subscriptionStatus.value.subscribed ? 'You are subscribed' : 'You are unsubscribed'
})

async function handleSubscriptionAction(action: 'unsubscribe' | 'subscribe') {
  if (!subscriptionReady.value) {
    subscriptionError.value = 'This link is missing required subscription parameters.'
    return
  }
  subscriptionLoading.value = true
  subscriptionError.value = ''
  try {
    subscriptionStatus.value = action === 'unsubscribe'
      ? await unsubscribe(subscriptionPayload.value)
      : await subscribeEmail(subscriptionPayload.value)
  } catch (error) {
    subscriptionError.value = error instanceof Error ? error.message : 'Subscription request failed.'
  } finally {
    subscriptionLoading.value = false
  }
}
</script>

<template>
  <section id="top" class="subscription-page" aria-labelledby="subscription-title">
    <div class="subscription-shell">
      <p class="subscription-kicker">Tengxuan Travel email preferences</p>
      <h1 id="subscription-title">{{ subscriptionStateText }}</h1>
      <p>
        Manage whether {{ subscriptionEmail }} receives Tengxuan Travel marketing emails.
        You can unsubscribe now or restore the subscription with the same secure email link.
      </p>

      <div v-if="!subscriptionReady" class="subscription-message error">
        This subscription link is incomplete. Please use the latest link from your email.
      </div>
      <div v-else-if="subscriptionError" class="subscription-message error">
        {{ subscriptionError }}
      </div>
      <div v-else-if="subscriptionStatus" class="subscription-message success">
        {{ subscriptionStatus.subscribed ? 'Subscription restored.' : 'You have been unsubscribed.' }}
      </div>

      <div class="subscription-actions" aria-label="Subscription actions">
        <button
          class="primary-button"
          type="button"
          :disabled="subscriptionLoading || !subscriptionReady"
          @click="handleSubscriptionAction('unsubscribe')"
        >
          {{ subscriptionLoading ? 'Updating...' : 'Unsubscribe' }}
        </button>
        <button
          class="secondary-button"
          type="button"
          :disabled="subscriptionLoading || !subscriptionReady"
          @click="handleSubscriptionAction('subscribe')"
        >
          Keep me subscribed
        </button>
      </div>

      <dl class="subscription-details">
        <div>
          <dt>Secure link</dt>
          <dd>{{ subscriptionPayload.token ? 'Ready' : 'Missing' }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
