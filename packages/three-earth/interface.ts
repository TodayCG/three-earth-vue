import * as THREE from 'three'
import { BorderParameter, GridHelperParameter, AxesHelperParameter, AmbientLightParameter, DirectionalLightParameter } from '@earth/utils'

import {
    EarthParameter,
    ApertureParameter,
    CloudCoverParameter,
    StarrySkyParameter,
    FlightLinesItem,
    FlightLinesParameter,
    LightBeamScatterItem,
    LightBeamScatterParameter
} from './types'

export declare interface EarthInterface {
  /**
   * 场景平行光参数
   * @default null
   */
  name: string
  /**
   * 地球 Mesh
   * @default null
   */
  mesh: THREE.Mesh
  /**
   * 地球容器
   * @default null
   */
  earth: THREE.Group
  /**
   * 地球模型
   * @default null
   */
  geometry?: THREE.SphereGeometry
  /**
   * 地球材质
   * @default null
   */
  material?: THREE.MeshStandardMaterial
  /**
   * 光晕名称
   * @default null
   */
  apertureName: string
  /**
   * 光晕模型
   * @default null
   */
  apertureSprite: THREE.Sprite
  /**
   * 光源材质
   * @default null
   */
  apertureMaterial: THREE.SpriteMaterial
  /**
   * 云层名称
   * @default null
   */
  cloudCoverName: string
  /**
   * 云层模型
   * @default null
   */
  cloudCoverGeometry?: THREE.SphereGeometry
  /**
   * 云层材质
   * @default null
   */
  cloudCoverMaterial: THREE.MeshStandardMaterial
  /**
   * 云层 Mesh
   * @default null
   */
  cloudCoverMesh?: THREE.Mesh
  /**
   * 星空名称
   * @default null
   */
  starrySkyName: string
  /**
   * 星空模型
   * @default null
   */
  starrySkyGeometry: THREE.BufferGeometry
  /**
   * 星空 Points
   * @default null
   */
  starrySkyPoints: THREE.Points
  /**
   * 星空材质
   * @default null
   */
  starrySkyMaterial: THREE.PointsMaterial
  /**
   * 飞行线名称
   * @default null
   */
  flightLinesName?: string
  /**
   * 飞行线模型组
   * @default null
   */
  flightLinesGroup: THREE.Group
  /**
   * 地球参数
   * @default null
   */
  earthParameter?: EarthParameter
  /**
   * 星空参数
   * @default null
   */
  apertureParameter?: ApertureParameter
  /**
   * 云层参数
   * @default null
   */
  cloudCoverParameter: CloudCoverParameter
  /**
   * 星空参数
   * @default null
   */
  starrySkyParameter: StarrySkyParameter
  /**
   * 网格辅助参数
   * @default null
   */
  gridHelperParameter: GridHelperParameter
  /**
   * 坐标轴辅助参数
   * @default null
   */
  axesHelperParameter: AxesHelperParameter
  /**
   * 环境光参数
   * @default null
   */
  ambientLightParameter: AmbientLightParameter
  /**
   * 场景平行光参数
   * @default null
   */
  directionalLightParameter: DirectionalLightParameter

  /**
   * 创建地球
   * @param earthParameter 球体参数
   * @param earthParameter 材质参数
   * @returns Group 地球
   */
  createEarth(earthParameter: EarthParameter): THREE.Group
  /**
   * 创建地球描边
   * @param gis geojson地理数据
   * @param borderParameter 描边参数
   * @returns Group 描边
   */
  createEarthBorder(gis: any, borderParameter: BorderParameter): THREE.Group
  /**
   * 创建光晕
   * @param apertureParameter 光晕参数
   * @param earthParameter 球体参数
   * @returns Sprite 光晕
   */
  createAperture(apertureParameter: ApertureParameter, earthParameter: EarthParameter): THREE.Sprite | undefined
  /**
   * 创建云层
   * @param cloudCoverParameter 云层参数
   * @param earthParameter 球体参数
   * @returns Mesh 云层
   */
  createCloudCover(cloudCoverParameter: CloudCoverParameter, earthParameter: EarthParameter): THREE.Mesh | undefined
  /**
   * 创建星空
   * @param starrySkyParameter 星空参数
   * @returns Points 星空
   */
  createStarrySky(starrySkyParameter: StarrySkyParameter): THREE.Points | undefined

  /**
   * 创建飞行线
   * @param data 数据集
   * @param flightLinesParameter 飞行线参数
   * @returns Group 飞行线集合
   */
  createFlightLines(data: Array<FlightLinesItem>, flightLinesParameter: FlightLinesParameter): THREE.Group

  /**
   * 创建光柱散点
   * @param data 数据集
   * @param lightBeamScatterParameter 光柱参数
   * @returns Group 光柱集合
   */
  createLightBeamScatter(data: Array<LightBeamScatterItem>, lightBeamScatterParameter: LightBeamScatterParameter): THREE.Group

  /**
   * 坐标位置转换 经纬度转空间坐标系
   * @param lng 经度
   * @param lat 纬度
   * @returns Vector3 空间坐标系
   */
  coordinateTransform(lng: number, lat: number): THREE.Vector3

  /**
   * 获取贝塞尔曲线控制点
   * @param startVector 开始坐标
   * @param endVector 结束坐标
   * @returns Vector3 贝塞尔曲线四个点坐标
   */
  getBezierCurveVCoords(startVector: THREE.Vector3, endVector: THREE.Vector3): Array<THREE.Vector3>
}