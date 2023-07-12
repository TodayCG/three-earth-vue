import * as GradientLine from './src/three/GradientLine'
import * as composer from './src/three/composer'
import * as line2 from './src/three/line2'
import * as scene from './src/three/scene'
import * as obt from './src/three/controls/obt'

export const three = {
    GradientLine,
    composer,
    line2,
    scene,
    controls: {
        obt
    }
}

export * from './src/three/interface'
