import * as THREE from 'three'

export interface BorderParameter {
  color: number | undefined
  lineWidth: number
  opacity: number
  wakeline?: boolean
  wakelineNumber?: number
  wakelineColors?: Array<string>
}
export interface SceneParameter {
  background: string
  fog: boolean
  fogColor: string
  fogNear: number
  fogFar: number
  stats: boolean
  statsType: number
}
export interface AmbientLightParameter {
  color: string
  intensity?: number
}
export interface DirectionalLightParameter {
  x: number
  y: number
  z: number
  color: string
  intensity?: number
}
export interface GridHelperParameter {
  show: boolean
  width: number
  height: number
  color: string
}
export interface AxesHelperParameter {
  show: boolean
  size: number
}

export interface SceneInterface {
  /**
   * Camera 场景
   * @default null
   */
  scene: THREE.Scene
  /**
   * Camera 相机
   * @default null
   */
  camera: THREE.Camera
  /**
   * Camera WebGL渲染器
   * @default null
   */
  webGlRenderer: THREE.WebGLRenderer

  /**
   * stats 性能监听器
   * @default null
   */
  stats: any
  /**
   * 创建场景
   * @param sceneParameter 场景参数
   * @returns 场景
   */
  createScene(sceneParameter: SceneParameter): THREE.Scene
  /**
   * 创建相机
   * @param element 容器
   * @returns 相机
   */
  createCamera(element: HTMLElement): THREE.Camera
  /**
   * 创建WebGL渲染器
   * @param element 容器
   * @returns WebGL渲染器
   */
  createWebGLRenderer(element: HTMLElement): THREE.WebGLRenderer
  /**
   * 创建环境光
   * @param option 参数
   * @returns 环境光
   */
  createAmbientLight(option: AmbientLightParameter): THREE.AmbientLight
  /**
   * 创建平行光
   * @param option 参数
   * @returns 平行光
   */
  createDirectionalLight(option: DirectionalLightParameter): THREE.DirectionalLight
  /**
   * 创建Grid辅助线
   * @returns GridHelper
   */
  createGridHelper(option: GridHelperParameter): THREE.GridHelper
  /**
   * 创建Axes辅助线
   * @returns AxesHelper
   */
  createAxesHelper(option: AxesHelperParameter): THREE.AxesHelper
  /**
   * 创建性能监测器
   * @param sceneParameter 场景参数
   */
  createStats(sceneParameter: SceneParameter): any
  /**
   * 添加物体
   * @param object Object3D
   * @returns void
   */
  add(...object: THREE.Object3D[] | undefined): void
  /**
   * 重置大小
   * @returns void
   */
  resize(): void
  /**
   * 渲染器
   * @returns void
   */
  render(): void
  /**
   * 销毁实例
   * @returns void
   */
  dispose(): void

  /**
   * 容器发生改变时
   * @param element
   * @returns void
   */
  onWindowResize (element: HTMLElement): void
}
