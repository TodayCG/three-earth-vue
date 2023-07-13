import { App, Plugin } from 'vue'

import WtEarth from './src/main.vue'
import WtEarthBorder from './src/border.vue'
import WtEarthLine from './src/line.vue'
import WtEarthBeam from './src/beam.vue'

WtEarth.name = 'WtEarth'
WtEarthBorder.name = 'WtEarthBorder'
WtEarthLine.name = 'WtEarthLine'
WtEarthBeam.name = 'WtEarthBeam'

export const EarthPlugin: Plugin = {
    install(app: App) {
        app.component(WtEarth.name, WtEarth)
        app.component(WtEarthBorder.name, WtEarthBorder)
        app.component(WtEarthLine.name, WtEarthLine)
        app.component(WtEarthBeam.name, WtEarthBeam)
    }
}

export { WtEarth, WtEarthBorder, WtEarthLine, WtEarthBeam }