
import * as THREE from 'three'
import Stats from 'stats.js'

import {
    SceneInterface,
    SceneParameter,
    AmbientLightParameter,
    GridHelperParameter,
    AxesHelperParameter,
    DirectionalLightParameter
} from './interface'

export class Scene implements SceneInterface {
    stats: any
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    webGlRenderer: THREE.WebGLRenderer

    element: HTMLElement
    animationFrameId: number = 0

    constructor (element: HTMLElement, sceneParameter: SceneParameter) {
        this.element = element
        this.scene = this.createScene(sceneParameter)
        this.stats = this.createStats(sceneParameter)
        this.camera = this.createCamera(this.element)
        this.webGlRenderer = this.createWebGLRenderer(this.element)

        /**
     * 重置大小
     */
        window.addEventListener('resize', () => this.onWindowResize(this.element))
    }

    public createScene (sceneParameter: SceneParameter): THREE.Scene {
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(sceneParameter.background)
        if (sceneParameter.fog) {
            scene.fog = new THREE.Fog(sceneParameter.fogColor, sceneParameter.fogNear, sceneParameter.fogFar)
        }
        return scene
    }

    public createCamera (element: HTMLElement): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera(45, element.offsetWidth / element.offsetHeight, 0.1, 10000)
        camera.position.set(10, 10, 10)
        camera.lookAt(0, 0, 0)
        return camera
    }

    public createWebGLRenderer (element: HTMLElement): THREE.WebGLRenderer {
        const webGLRenderer = new THREE.WebGLRenderer({
            preserveDrawingBuffer: true, // 开启缓冲区保护
            antialias: true,
            alpha: true
        })

        webGLRenderer.autoClear = false

        webGLRenderer.clearColor()
        webGLRenderer.setSize(element.offsetWidth, element.offsetHeight)
        element.appendChild(webGLRenderer.domElement)
        console.log('当前THREE版本号：', THREE.REVISION)
        return webGLRenderer
    }

    public createAmbientLight (option: AmbientLightParameter): THREE.AmbientLight {
        return new THREE.AmbientLight(
            new THREE.Color(option.color),
            option.intensity
        )
    }

    public createDirectionalLight (option: DirectionalLightParameter): THREE.DirectionalLight {
        const directionalLight = new THREE.DirectionalLight(
            new THREE.Color(option.color),
            option.intensity
        )
        directionalLight.position.set(
            option.x,
            option.y,
            option.z
        )
        directionalLight.lookAt(0, 0, 0)
        return directionalLight
    }

    public createGridHelper (option: GridHelperParameter): THREE.GridHelper | undefined {
        if (option.show) {
            return new THREE.GridHelper(
                option.width,
                option.height,
                new THREE.Color(option.color),
                new THREE.Color(option.color)
            )
        }
        return undefined
    }

    public createAxesHelper (option: AxesHelperParameter): THREE.AxesHelper | undefined {
        if (option.show) {
            return new THREE.AxesHelper(option.size)
        }
        return undefined
    }

    public createStats (sceneParameter: SceneParameter): any {
        if (sceneParameter.stats) {
            const stats = new Stats()
            stats.domElement.style.position = 'absolute'
            stats.domElement.style.top = '5px'
            stats.domElement.style.left = '5px'
            stats.showPanel(sceneParameter.statsType)
            this.element.appendChild(stats.dom)
            return stats
        }
        return null
    }

    public resize (): void {
        this.webGlRenderer.setSize(this.element.offsetWidth, this.element.offsetHeight)
        this.camera.aspect = this.element.offsetWidth / this.element.offsetHeight
        this.camera.updateProjectionMatrix()
    }

    public render (): void {
        this.animationFrameId = requestAnimationFrame(() => {
            if (this.stats) {
                this.stats.update()
            }
            this.render()
            this.webGlRenderer.clear()
            this.webGlRenderer.render(this.scene, this.camera)
        })
    }

    public add (...object: THREE.Object3D[] | undefined): void {
        object.forEach(item => {
            if (item) this.scene.add(item)
        })
    }

    public dispose (): void {
        try {
            cancelAnimationFrame(this.animationFrameId)
            this.element.innerHTML = ''
            this.camera.clear()
            this.webGlRenderer.forceContextLoss()
            this.webGlRenderer.dispose()
            this.scene.clear()
            console.log('clearScene')
        } catch (error) {
            console.log('ERROR ：clearScene')
        }
    }

    public onWindowResize (element: HTMLElement): void {
        const width = element.offsetWidth
        const height = element.offsetHeight
        this.webGlRenderer.setSize(width, height)
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
    }
}
