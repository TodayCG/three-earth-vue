import * as THREE from 'three'
import threeObtControls from 'three-orbit-controls'

/**
 * THREE 控制器
 * 黄保霖 2022年6月6日18:12:27
 */
export class ObtControls {
    OrbitControls: any
    Controls: any

    public camera: THREE.Camera
    public webGlRenderer: THREE.WebGLRenderer

    constructor (camera: THREE.Camera, webGlRenderer: THREE.WebGLRenderer) {
        this.OrbitControls = threeObtControls(THREE)
        this.camera = camera
        this.webGlRenderer = webGlRenderer
    }

    init (): ObtControls {
        this.Controls = new this.OrbitControls(this.camera, this.webGlRenderer.domElement)
        // 使动画循环使用时阻尼或自转 意思是否有惯性
        // this.controls.enableDamping = true;
        // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
        // this.controls.dampingFactor = 0.2;
        // 是否可以缩放
        this.Controls.enableZoom = true
        // 是否自动旋转
        this.Controls.autoRotate = false
        this.Controls.autoRotateSpeed = 2
        // 设置相机距离原点的最远距离
        this.Controls.minDistance = 5
        // 设置相机距离原点的最远距离
        this.Controls.maxDistance = 100
        // 是否开启右键拖拽
        this.Controls.enablePan = true
        this.Controls.enableKeys = false
        this.Controls.update()
        return this
    }
}