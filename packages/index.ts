import { App } from 'vue'

import { EarthPlugin } from './components'

export default {
    install(app: App) {
        EarthPlugin.install?.(app)
    }
}

export * from './components'