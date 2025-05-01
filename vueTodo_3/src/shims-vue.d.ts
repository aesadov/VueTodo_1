/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.svg?component' {
  import { FunctionalComponent, SVGAttributes } from 'vue'
  const src: FunctionalComponent<SVGAttributes>
  export default src
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // Другие переменные окружения...
}