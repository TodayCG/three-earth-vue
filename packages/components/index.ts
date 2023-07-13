import { App, Plugin } from 'vue'

import NiEarth from './src/main.vue'
import NiEarthBorder from './src/border.vue'
import NiEarthLine from './src/line.vue'
import NiEarthBeam from './src/beam.vue'

NiEarth.name = 'NiEarth'
NiEarthBorder.name = 'NiEarthBorder'
NiEarthLine.name = 'NiEarthLine'
NiEarthBeam.name = 'NiEarthBeam'

export const EarthPlugin: Plugin = {
    install(app: App) {
        app.component(NiEarth.name, NiEarth)
        app.component(NiEarthBorder.name, NiEarthBorder)
        app.component(NiEarthLine.name, NiEarthLine)
        app.component(NiEarthBeam.name, NiEarthBeam)
    }
}

export { NiEarth, NiEarthBorder, NiEarthLine, NiEarthBeam }