import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
/**
 * 创建后期效果通道
 * @param renderer
 * @param scene
 * @param camera
 * @returns
 */
export const createComposer = (
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera
): EffectComposer => {
    const bloomComposer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    const bloomPass = createUnrealBloomPass()
    bloomComposer.addPass(renderPass)
    bloomComposer.addPass(bloomPass)
    return bloomComposer
}

/**
 * 辉光效果
 * @returns
 */
export const createUnrealBloomPass = (): UnrealBloomPass => {
    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
    )
    const params = {
        exposure: 1,
        bloomThreshold: 0.2,
        // 辉光强度
        bloomStrength: 0.8,
        bloomRadius: 0
    }
    bloomPass.threshold = params.bloomThreshold
    bloomPass.strength = params.bloomStrength
    bloomPass.radius = params.bloomRadius
    return bloomPass
}