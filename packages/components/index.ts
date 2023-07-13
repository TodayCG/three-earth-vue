import { App, Plugin } from 'vue'

import TeEarth from './src/main.vue'
import TeEarthBorder from './src/border.vue'
import TeEarthLine from './src/line.vue'
import TeEarthBeam from './src/beam.vue'

TeEarth.name = 'TeEarth'
TeEarthBorder.name = 'TeEarthBorder'
TeEarthLine.name = 'TeEarthLine'
TeEarthBeam.name = 'TeEarthBeam'

export const EarthPlugin: Plugin = {
    install(app: App) {
        app.component(TeEarth.name, TeEarth)
        app.component(TeEarthBorder.name, TeEarthBorder)
        app.component(TeEarthLine.name, TeEarthLine)
        app.component(TeEarthBeam.name, TeEarthBeam)
    }
}

export { TeEarth, TeEarthBorder, TeEarthLine, TeEarthBeam }