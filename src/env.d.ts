/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
  readonly VITE_SITE_URL?: string
  readonly VITE_SUBSCRIPTION_TENANT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
