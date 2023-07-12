import { App, Plugin } from 'vue'

import WtEarth from './three-earth/main.vue'
import WtEarthBorder from './three-earth/border.vue'
import WtEarthLine from './three-earth/line.vue'
import WtEarthBeam from './three-earth/beam.vue'

export const EarthMapPlugin: Plugin = {
    install(app: App) {
        app.component(WtEarth.name, WtEarth)
        app.component(WtEarthBorder.name, WtEarthBorder)
        app.component(WtEarthLine.name, WtEarthLine)
        app.component(WtEarthBeam.name, WtEarthBeam)
    }
}

export { WtEarth, WtEarthBorder, WtEarthLine, WtEarthBeam }