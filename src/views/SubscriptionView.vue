<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { subscribe as subscribeEmail, unsubscribe, type SubscriptionStatus } from '@/api/subscriptions'
import { useI18n } from '@/i18n'

const route = useRoute()
const { t } = useI18n()
const subscriptionLoading = ref(false)
const subscriptionError = ref('')
const subscriptionStatus = ref<SubscriptionStatus | null>(null)

const subscriptionPayload = computed(() => ({
  token: typeof route.query.token === 'string' ? route.query.token : ''
}))
const subscriptionReady = computed(() => Boolean(subscriptionPayload.value.token))
const subscriptionEmail = computed(() => subscriptionStatus.value?.email || t('subscription.thisEmail'))
const subscriptionStateText = computed(() => {
  if (!subscriptionStatus.value) return t('subscription.title')
  return subscriptionStatus.value.subscribed ? t('subscription.subscribedTitle') : t('subscription.unsubscribedTitle')
})

async function handleSubscriptionAction(action: 'unsubscribe' | 'subscribe') {
  if (!subscriptionReady.value) {
    subscriptionError.value = t('subscription.missingParams')
    return
  }
  subscriptionLoading.value = true
  subscriptionError.value = ''
  try {
    subscriptionStatus.value = action === 'unsubscribe'
      ? await unsubscribe(subscriptionPayload.value)
      : await subscribeEmail(subscriptionPayload.value)
  } catch (error) {
    subscriptionError.value = error instanceof Error ? error.message : t('footer.requestFailed')
  } finally {
    subscriptionLoading.value = false
  }
}
</script>

<template>
  <section id="top" class="subscription-page" aria-labelledby="subscription-title">
    <div class="subscription-shell">
      <p class="subscription-kicker">{{ t('subscription.kicker') }}</p>
      <h1 id="subscription-title">{{ subscriptionStateText }}</h1>
      <p>{{ t('subscription.summary', { email: subscriptionEmail }) }}</p>

      <div v-if="!subscriptionReady" class="subscription-message error">
        {{ t('subscription.incomplete') }}
      </div>
      <div v-else-if="subscriptionError" class="subscription-message error">
        {{ subscriptionError }}
      </div>
      <div v-else-if="subscriptionStatus" class="subscription-message success">
        {{ subscriptionStatus.subscribed ? t('subscription.restored') : t('subscription.unsubscribed') }}
      </div>

      <div class="subscription-actions" :aria-label="t('subscription.actionsAria')">
        <button
          class="primary-button"
          type="button"
          :disabled="subscriptionLoading || !subscriptionReady"
          @click="handleSubscriptionAction('unsubscribe')"
        >
          {{ subscriptionLoading ? t('subscription.updating') : t('subscription.unsubscribe') }}
        </button>
        <button
          class="secondary-button"
          type="button"
          :disabled="subscriptionLoading || !subscriptionReady"
          @click="handleSubscriptionAction('subscribe')"
        >
          {{ t('subscription.keep') }}
        </button>
      </div>

      <dl class="subscription-details">
        <div>
          <dt>{{ t('subscription.secureLink') }}</dt>
          <dd>{{ subscriptionPayload.token ? t('subscription.ready') : t('subscription.missing') }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
