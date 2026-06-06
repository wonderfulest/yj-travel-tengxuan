<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { openSubscribe, openUnsubscribe, type SubscriptionStatus } from '@/api/subscriptions'
import BrandLogo from '@/components/brand/BrandLogo.vue'
import { useI18n } from '@/i18n'

const subscribed = ref(false)
const email = ref('')
const subscriptionLoading = ref(false)
const subscriptionError = ref('')
const subscriptionStatus = ref<SubscriptionStatus | null>(null)
const subscriptionTenantId = String(import.meta.env.VITE_SUBSCRIPTION_TENANT_ID || 'otw')
const canUnsubscribe = computed(() => Boolean(subscriptionStatus.value?.subscribed && email.value.trim()))
const { t } = useI18n()

async function handleNewsletterSubmit() {
  await updateNewsletterSubscription('subscribe')
}

async function handleNewsletterUnsubscribe() {
  await updateNewsletterSubscription('unsubscribe')
}

async function updateNewsletterSubscription(action: 'subscribe' | 'unsubscribe') {
  if (!email.value.trim()) {
    subscriptionError.value = t('footer.emailRequired')
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
    subscriptionError.value = error instanceof Error ? error.message : t('footer.requestFailed')
  } finally {
    subscriptionLoading.value = false
  }
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <RouterLink class="brand footer-brand" :to="{ name: 'home', hash: '#top' }" :aria-label="t('nav.homeAria')">
          <BrandLogo />
        </RouterLink>
        <p>{{ t('footer.intro') }}</p>
      </div>
      <div>
        <h2>{{ t('footer.explore') }}</h2>
        <RouterLink :to="{ name: 'company' }">{{ t('footer.companyProfile') }}</RouterLink>
        <RouterLink :to="{ name: 'destinations' }">{{ t('footer.destinations') }}</RouterLink>
        <RouterLink :to="{ name: 'cities' }">{{ t('footer.cityGuides') }}</RouterLink>
        <RouterLink :to="{ name: 'attractions' }">{{ t('footer.attractions') }}</RouterLink>
        <RouterLink :to="{ name: 'products' }">{{ t('footer.travelProducts') }}</RouterLink>
        <RouterLink :to="{ name: 'product-detail', params: { slug: 'beijing-xian-shanghai' } }">{{ t('footer.productName') }}</RouterLink>
      </div>
      <div>
        <h2>{{ t('footer.plan') }}</h2>
        <RouterLink :to="{ name: 'before-you-go' }">{{ t('footer.beforeYouGo') }}</RouterLink>
        <RouterLink :to="{ name: 'visa-entry' }">{{ t('footer.visaEntry') }}</RouterLink>
        <RouterLink :to="{ name: 'faq' }">{{ t('footer.faq') }}</RouterLink>
        <RouterLink :to="{ name: 'contact' }">{{ t('footer.contact') }}</RouterLink>
      </div>
      <div>
        <h2>{{ t('footer.legal') }}</h2>
        <RouterLink :to="{ name: 'privacy' }">{{ t('footer.privacy') }}</RouterLink>
        <RouterLink :to="{ name: 'terms' }">{{ t('footer.terms') }}</RouterLink>
        <RouterLink :to="{ name: 'cookie-policy' }">{{ t('footer.cookies') }}</RouterLink>
      </div>
      <form class="newsletter" :aria-label="t('footer.newsletterAria')" @submit.prevent="handleNewsletterSubmit">
        <label for="email">{{ t('footer.stayInspired') }}</label>
        <div>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            :placeholder="t('footer.emailPlaceholder')"
          />
          <button type="submit" :disabled="subscribed || subscriptionLoading">
            {{ subscriptionLoading ? t('footer.sending') : subscribed ? t('footer.subscribed') : t('footer.subscribeNow') }}
          </button>
        </div>
        <p v-if="subscriptionError" class="newsletter-message error">{{ subscriptionError }}</p>
        <p v-else-if="subscribed" class="newsletter-message success">{{ t('footer.confirmed') }}</p>
        <p v-else-if="subscriptionStatus" class="newsletter-message muted">{{ t('footer.unsubscribed') }}</p>
        <button
          v-if="canUnsubscribe"
          class="newsletter-unsubscribe"
          type="button"
          :disabled="subscriptionLoading"
          @click="handleNewsletterUnsubscribe"
        >
          {{ t('footer.unsubscribeThisEmail') }}
        </button>
      </form>
    </div>
  </footer>
</template>
