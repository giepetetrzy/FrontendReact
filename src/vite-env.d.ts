/// <reference types="vite/client" />

import 'vite/client'

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  VITE_APP_TITLE: string
  VITE_BASE_URL: string
  // more env variables...
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
