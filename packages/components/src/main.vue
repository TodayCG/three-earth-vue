<template>
    <div :id="uuid" class="wt-earth">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { v4 } from 'uuid'
import { onMounted, useSlots } from 'vue'

import {
    EarthParameter,
    ApertureParameter,
    CloudCoverParameter,
    StarrySkyParameter,
    FlightLinesParameter,
    FlightLinesItem,
    LightBeamScatterItem,
    LightBeamScatterParameter
} from './types'
import { Earth } from './main'

const uuid: string = v4()

const slots = useSlots()

const props = withDefaults(defineProps<{
    // 辉光特效
    bloom: boolean
    // 地球半径
    radius?: number
    // 地球球体细分值
    subdivision?: number
    // 地球颜色
    color?: string
    // 地球透明度
    opacity?: number
    // 地球是否透明
    transparent?: boolean
    // 是否开启线框
    wireframe?: boolean
    // 地球贴图
    texture?: string | undefined | boolean
    // 是否开启动画
    animation?: boolean
    // 动画速度
    animationSpeed?: number
    // 背景色
    background?: string
    // 是否显示雾
    fog?: boolean
    // 雾颜色
    fogColor?: string
    // 雾近距离
    fogNear?: number
    // 雾远距离
    fogFar?: number
    // 性能监听
    stats?: boolean
    // 性能监听类型
    statsType?: number
    // 开启光晕
    aperture: boolean | undefined
    // 光晕颜色
    apertureColor?: string
    // 光晕透明度
    apertureOpacity?: number
    // 光晕是否透明
    apertureTransparent?: boolean
    // 光晕深度写入
    apertureDepthWrite?: boolean
    // 光晕贴图
    apertureTexture?: string | undefined
    // 开启云层
    cloudCover: boolean
    // 云层颜色
    cloudCoverColor?: string
    // 云层透明度
    cloudCoverOpacity?: number
    // 云层是否透明
    cloudCoverTransparent?: boolean
    // 云层贴图
    cloudCoverTexture?: string | undefined
    // 云层动画
    cloudCoverAnimation?: boolean
    // 云层动画速度
    cloudCoverAnimationSpeed?: number
    // 是否显示星空
    starrySky?: boolean
    // 星空贴图
    starrySkyTexture?: string | undefined
    // 星空星星数量
    starrySkyNumber?: number
    // 星空星星大小
    starrySkySize?: number
    // 星空星星透明度
    starrySkyOpacity?: number
    // 是否开启星空动画
    starrySkyAnimation?: boolean
    // 星空动画速度
    starrySkyAnimationSpeed?: number
    // 是否显示网格辅助
    gridHelper: boolean
    // 网格辅助宽度
    gridHelperWidth: number
    // 网格辅助高度
    gridHelperHeight: number
    // 网格辅助颜色
    gridHelperColor: string
    // 是否显示坐标辅助
    axesHelper: boolean
    // 坐标辅助大小
    axesHelperSize: number
    // 环境光颜色
    ambientLightColor: string
    // 环境光强度
    ambientLightIntensity: number
    // 平行光 X
    directionalLightX: number
    // 平行光 Y
    directionalLightY: number
    // 平行光 Z
    directionalLightZ: number
    // 平行光强度
    directionalLightIntensity: number
    // 平行光颜色
    directionalLightColor: string
}>(), {
    bloom: false,
    radius: 60,
    subdivision: 80,
    color: '#ffffff',
    opacity: 1,
    transparent: true,
    wireframe: false,
    texture: 'default',
    animation: true,
    animationSpeed: 0.0002,
    background: '#050b16',
    fog: false,
    fogColor: '#020924',
    fogNear: 20,
    fogFar: 50,
    stats: false,
    statsType: 0,
    aperture: false,
    apertureColor: '#ffffff',
    apertureOpacity: 0.7,
    apertureTransparent: true,
    apertureDepthWrite: false,
    apertureTexture: 'default',
    cloudCover: false,
    cloudCoverColor: '#ffffff',
    cloudCoverOpacity: 1,
    cloudCoverTransparent: true,
    cloudCoverTexture: 'default',
    cloudCoverAnimation: true,
    cloudCoverAnimationSpeed: 0.0003,
    starrySky: false,
    starrySkyTexture: 'default',
    starrySkyNumber: 10000,
    starrySkySize: 1,
    starrySkyOpacity: 1,
    starrySkyAnimation: true,
    starrySkyAnimationSpeed: 0.0001,
    gridHelper: false,
    gridHelperWidth: 500,
    gridHelperHeight: 500,
    gridHelperColor: '#ffffff',
    axesHelper: false,
    axesHelperSize: 100,
    ambientLightColor: '#ffffff',
    ambientLightIntensity: 0.2,
    directionalLightX: 0,
    directionalLightY: 5,
    directionalLightZ: 10,
    directionalLightIntensity: 2,
    directionalLightColor: '#ffffff'
})

const sceneParameter = {
    background: props.background,
    fog: props.fog,
    fogColor: props.fogColor,
    fogNear: props.fogNear,
    fogFar: props.fogFar,
    stats: props.stats,
    statsType: props.statsType
}
const earthParameter: EarthParameter = {
    bloom: props.bloom,
    radius: props.radius,
    subdivision: props.subdivision,
    animation: props.animation,
    animationSpeed: props.animationSpeed,
    texture: props.texture,
    color: props.color,
    opacity: props.opacity,
    transparent: props.transparent,
    wireframe: props.wireframe
}
const apertureParameter: ApertureParameter = {
    show: props.aperture,
    texture: props.apertureTexture,
    color: props.apertureColor,
    opacity: props.apertureOpacity,
    transparent: props.apertureTransparent,
    depthWrite: props.apertureDepthWrite
}
const cloudCoverParameter: CloudCoverParameter = {
    show: props.cloudCover,
    texture: props.cloudCoverTexture,
    color: props.cloudCoverColor,
    opacity: props.cloudCoverOpacity,
    transparent: props.cloudCoverTransparent,
    animation: props.cloudCoverAnimation,
    animationSpeed: props.cloudCoverAnimationSpeed
}
const starrySkyParameter: StarrySkyParameter = {
    show: props.starrySky,
    texture: props.starrySkyTexture,
    number: props.starrySkyNumber,
    size: props.starrySkySize,
    opacity: props.starrySkyOpacity,
    animation: props.starrySkyAnimation,
    animationSpeed: props.starrySkyAnimationSpeed
}
const gridHelperParameter = {
    show: props.gridHelper,
    width: props.gridHelperWidth,
    height: props.gridHelperHeight,
    color: props.gridHelperColor
}
const axesHelperParameter = {
    show: props.axesHelper,
    size: props.axesHelperSize
}
const ambientLightParameter = {
    color: props.ambientLightColor,
    intensity: props.ambientLightIntensity
}
const directionalLightParameter = {
    x: props.directionalLightX,
    y: props.directionalLightY,
    z: props.directionalLightZ,
    intensity: props.directionalLightIntensity,
    color: props.directionalLightColor
}
const parameter = {
    sceneParameter,
    earthParameter,
    apertureParameter,
    cloudCoverParameter,
    starrySkyParameter,
    gridHelperParameter,
    axesHelperParameter,
    ambientLightParameter,
    directionalLightParameter
}

let weiTuEarth: Earth

const createEarth = (): void => {
    const main: HTMLElement = document.getElementById(uuid) as HTMLElement
    weiTuEarth = new Earth(main, parameter).start()
}
const createEarthBorder = (): void => {
    const borders: Array<any> = getSlotsByName('TeEarthBorder')
    borders.forEach((border: any) => {
        const propsType: string = border.props?.type || border.type.props.type.default
        const borderParameter = {
            color: border.props?.color || border.type.props.color.default,
            lineWidth: border.props?.width || border.type.props.width.default,
            opacity: border.props?.opacity || border.type.props.opacity.default,

            wakeline: border.props?.wakeline === undefined ? border.type.props.wakeline.default : border.props?.wakeline,
            wakelineNumber: border.props?.wakelineNumber === undefined ? border.type.props.wakelineNumber.default : border.props?.wakelineNumber
            // wakelineColors: border.props?.wakelineColors || border.type.props.wakelineColors.default,
        }
        console.log(border.props?.wakeline, borderParameter)
        const BorderThree = weiTuEarth.createEarthBorder(propsType, borderParameter)
        weiTuEarth.earth.add(BorderThree)
    })
    console.log(earthParameter)
}
const createEarthLine = (): void => {
    const lines: Array<any> = getSlotsByName('TeEarthLine')
    lines.forEach((border: any) => {
        const dataSource: Array<FlightLinesItem> = border.props?.data
        const flightLinesParameter: FlightLinesParameter = {
            lineParameter: {
                color: border.props?.color || border.type.props.color.default,
                lineWidth: border.props?.width || border.type.props.width.default,
                opacity: border.props?.opacity || border.type.props.opacity.default
            },
            startScatterParameter: {
                color: border.props?.startScatterColor || border.type.props.startScatterColor.default,
                size: border.props?.startScatterSize || border.type.props.startScatterSize.default,
                opacity: border.props?.startScatterOpacity || border.type.props.startScatterOpacity.default
            },
            endScatterParameter: {
                color: border.props?.endScatterColor || border.type.props.endScatterColor.default,
                size: border.props?.endScatterSize || border.type.props.endScatterSize.default,
                opacity: border.props?.endScatterOpacity || border.type.props.endScatterOpacity.default
            }
        }
        const flightLines = weiTuEarth.createFlightLines(dataSource, flightLinesParameter)
        weiTuEarth.earth.add(flightLines)
    })
}
const createEarthBeam = (): void => {
    const Beams: Array<any> = getSlotsByName('TeEarthBeam')
    Beams.forEach((beam: any) => {
        const dataSource: Array<LightBeamScatterItem> = beam.props?.data || beam.type.props.data.default

        const lightBeamScatterParameter: LightBeamScatterParameter = {
            scatterParameter: {
                color: beam.props?.color || beam.type.props.color.default,
                size: beam.props?.scatterSize || beam.type.props.scatterSize.default,
                opacity: beam.props?.opacity || beam.type.props.opacity.default
            },
            lightBeamParameter: {
                baseHeight: beam.props?.baseHeight || beam.type.props.baseHeight.default,
                radius: beam.props?.beamSize || beam.type.props.beamSize.default,
                color: beam.props?.color || beam.type.props.color.default,
                opacity: beam.props?.opacity || beam.type.props.opacity.default
            }
        }
        const lightBeams = weiTuEarth.createLightBeamScatter(dataSource, lightBeamScatterParameter)
        weiTuEarth.earth.add(lightBeams)
    })
}
const getSlotsByName = (name: string): Array<any> => {
    if (slots?.default === undefined) {
        return []
    }
    return slots?.default().map((item: any) => {
        if (item.type?.name === name) {
            return item
        }
        return false
    }).filter(item => item !== false)
}

onMounted(() => {
    createEarth()
    createEarthLine()
    createEarthBeam()
    createEarthBorder()
})

</script>
<style lang="scss" scoped>
.wt-earth {
    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 100px;
}
</style>
