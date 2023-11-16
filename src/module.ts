import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  apiKey: string
}

export interface ModuleHooks {
  'my-module:init': any
}

export interface RuntimeModuleHooks {
  'my-module:runtime-hook': any
}

export interface ModulePublicRuntimeConfig {
  NAME: string
}

export interface ModulePrivateRuntimeConfig {
  PRIVATE_NAME: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {
    apiKey: 'test',
  },
  async setup() {
    // Write module logic in setup function
  },
})
