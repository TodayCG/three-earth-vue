import { App, Plugin } from 'vue'

import ThEarth from './src/main.vue'
import ThEarthBorder from './src/border.vue'
import ThEarthLine from './src/line.vue'
import ThEarthBeam from './src/beam.vue'

ThEarth.name = 'ThEarth'
ThEarthBorder.name = 'ThEarthBorder'
ThEarthLine.name = 'ThEarthLine'
ThEarthBeam.name = 'ThEarthBeam'

export const EarthPlugin: Plugin = {
    install(app: App) {
        app.component(ThEarth.name, ThEarth)
        app.component(ThEarthBorder.name, ThEarthBorder)
        app.component(ThEarthLine.name, ThEarthLine)
        app.component(ThEarthBeam.name, ThEarthBeam)
    }
}

export { ThEarth, ThEarthBorder, ThEarthLine, ThEarthBeam }