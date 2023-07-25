import { v4 } from 'uuid'
import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2'
// import gsap from 'gsap'

import { EarthInterface } from './interface'
import {
    EarthParameter,
    ApertureParameter,
    CloudCoverParameter,
    StarrySkyParameter,
    FlightLinesItem,
    ScatterParameter,
    FlightLinesParameter,
    LightBeamScatterItem,
    LightBeamParameter,
    LightBeamScatterParameter
} from './types'
import gisChina from './geojson/china'
import gisWorld from './geojson/world'
import gisChinaBorder from './geojson/china-border'
import { textureCallout } from './base64/Callout'
import { textureCalloutAperture } from './base64/CalloutAperture'
import { textureLightColumn } from './base64/LightColumn'

import { BorderParameter, GridHelperParameter, AxesHelperParameter, AmbientLightParameter, DirectionalLightParameter } from '../../utils/interface'
import { Scene } from '../../utils/scene'
import { ObtControls } from '../../utils/controls/obt'
import { createComposer } from '../../utils/composer'
import { DrawLine } from '../../utils/line2'
import { createGradientLine, startAnimationGradientLine } from '../../utils/GradientLine'

export class Earth extends Scene implements EarthInterface {
    name: string
    mesh!: THREE.Mesh
    earth: THREE.Group
    geometry!: THREE.SphereGeometry
    material!: THREE.MeshStandardMaterial
    apertureName: string
    apertureSprite: THREE.Sprite
    apertureMaterial: THREE.SpriteMaterial
    cloudCoverName: string
    cloudCoverGeometry!: THREE.SphereGeometry
    cloudCoverMaterial: THREE.MeshStandardMaterial
    cloudCoverMesh!: THREE.Mesh
    starrySkyName: string
    starrySkyGeometry: THREE.BufferGeometry
    starrySkyPoints: THREE.Points
    starrySkyMaterial: THREE.PointsMaterial
    flightLinesName?: string
    flightLinesGroup: THREE.Group
    lightBeamScatterName: string
    lightBeamScatterGroup: THREE.Group
    scatterPoint: Array<THREE.Mesh> = []
    lineCurve: Array<THREE.CubicBezierCurve3> = []

    earthParameter?: EarthParameter
    apertureParameter?: ApertureParameter
    cloudCoverParameter: CloudCoverParameter
    starrySkyParameter: StarrySkyParameter

    gridHelperParameter: GridHelperParameter
    axesHelperParameter: AxesHelperParameter
    ambientLightParameter: AmbientLightParameter
    directionalLightParameter: DirectionalLightParameter

    animationGradientSegmentLine: Array<any>

    gis: any = {
        'wt-china': gisChina,
        'wt-world': gisWorld,
        'wt-china-border': gisChinaBorder
    }

    /**
   * Test Data
   * progress | velocity
   */
    progress = 0
    velocity = 0.01

    composer: any

    constructor(element: HTMLElement, parameter: any) {
        super(element, parameter.sceneParameter)
        this.name = 'Earth'
        this.apertureName = 'Aperture'
        this.cloudCoverName = 'CloudCover'
        this.starrySkyName = 'StarrySky'
        this.flightLinesName = 'flightLinesName'
        this.earth = new THREE.Group()
        this.apertureSprite = new THREE.Sprite()

        this.earthParameter = parameter.earthParameter
        this.apertureParameter = parameter.apertureParameter
        this.cloudCoverParameter = parameter.cloudCoverParameter
        this.starrySkyParameter = parameter.starrySkyParameter

        this.createEarth(this.earthParameter).then(earth => {
            this.add(earth)
        })
        this.createAperture(this.apertureParameter, this.earthParameter)
        this.createCloudCover(this.cloudCoverParameter, this.earthParameter).then(cloudCover => {
            this.add(cloudCover)
        })
        this.createStarrySky(this.starrySkyParameter).then(starrySky => {
            this.add(starrySky)
        })
        const gridHelper = this.createGridHelper(parameter.gridHelperParameter)
        const axesHelper = this.createAxesHelper(parameter.axesHelperParameter)
        const ambientLight = this.createAmbientLight(parameter.ambientLightParameter)
        const directionalLight = this.createDirectionalLight(parameter.directionalLightParameter)

        this.add(
            gridHelper,
            axesHelper,
            ambientLight,
            directionalLight
        )

        new ObtControls(this.camera, this.webGlRenderer).init()

        this.composer = createComposer(this.webGlRenderer, this.scene, this.camera)
    }

    public async createEarth(earthParameter: EarthParameter): Promise<THREE.Group> {
        const earth = this.earth.getObjectByName(this.name)
        if (earth) this.earth.remove(earth)

        this.geometry = new THREE.SphereGeometry(
            earthParameter.radius * 0.1,
            earthParameter.subdivision,
            earthParameter.subdivision
        )
        let map = {}
        if (earthParameter.texture !== false) {
            const texture: string = earthParameter.texture === 'default' ? ((await import('./base64/Earth')).texture) : earthParameter.texture as string
            map = { map: new THREE.TextureLoader().load(texture) }
        }
        this.material = new THREE.MeshStandardMaterial({
            ...map,
            color: new THREE.Color(earthParameter.color),
            side: THREE.DoubleSide,
            transparent: earthParameter.transparent,
            opacity: earthParameter.opacity,
            wireframe: earthParameter.wireframe
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.name = this.name
        this.earth.add(this.mesh)
        this.earth.rotation.set(0, 3.6, 0)
        return this.earth
    }

    public async createEarthBorder(geojson: any, borderParameter: BorderParameter): Promise<THREE.Group> {
        let module = geojson
        if (geojson === 'china') {
            module = (await import('./geojson/china')).default
        }
        if (geojson === 'china-border') {
            module = (await import('./geojson/china-border')).default
        }
        if (geojson === 'world') {
            module = (await import('./geojson/world')).default
        }
        const mapGroup = new THREE.Group()
        const coordinates = []
        module.features.forEach(item => {
            const lineGroup: THREE.Group = new THREE.Group()
            lineGroup.name = 'border' + item.properties.name
            item.geometry.coordinates.forEach((area: Array<any>) => {
                const osArea: THREE.Vector3[] = []
                area.forEach((print: Array<any>, index: number) => {
                    if (print[index] instanceof Array) {
                        const coordinate: Array<THREE.Vector3> = print.map((pi: Array<number>) => {
                            return this.coordinateTransform(pi[0], pi[1])
                        })
                        coordinates.push(coordinate)
                        lineGroup.add(DrawLine(coordinate, borderParameter))
                    } else {
                        osArea.push(this.coordinateTransform(print[0], print[1]))
                    }
                })
                if (osArea.length > 0) {
                    lineGroup.add(DrawLine(osArea, borderParameter))
                }
            })
            mapGroup.add(lineGroup)
        })

        if (borderParameter.wakeline) {
            const curve = new THREE.CatmullRomCurve3(coordinates[0])
            const { animations, mesh } = createGradientLine(curve, borderParameter.wakelineNumber)
            this.animationGradientSegmentLine = animations
            mesh.forEach(element => {
                this.earth.add(element)
            })
        }

        mapGroup.name = geojson
        return mapGroup
    }

    public async createAperture(apertureParameter: ApertureParameter, earthParameter: EarthParameter): Promise<void> {
        const aperture = this.scene.getObjectByName(this.apertureName)
        if (aperture) this.scene.remove(aperture)
        if (apertureParameter.show) {
            this.apertureMaterial = new THREE.SpriteMaterial({
                map: new THREE.TextureLoader().load(apertureParameter.texture === 'default' ? ((await import('./base64/Aperture')).texture) : apertureParameter.texture as string),
                transparent: apertureParameter.transparent,
                color: new THREE.Color(apertureParameter.color),
                opacity: apertureParameter.opacity,
                depthWrite: apertureParameter.depthWrite
            })
            this.apertureSprite = new THREE.Sprite(this.apertureMaterial)
            this.apertureSprite.scale.set(
                earthParameter.radius * 0.1 * 3,
                earthParameter.radius * 0.1 * 3,
                1
            )
            this.apertureSprite.name = this.apertureName
            this.add(this.apertureSprite)
        }
    }

    public async createCloudCover(cloudCoverParameter: CloudCoverParameter, earthParameter: EarthParameter): Promise<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>> {
        const cloud = this.earth.getObjectByName(this.cloudCoverName)
        if (cloud) this.earth.remove(cloud)
        if (cloudCoverParameter.texture && cloudCoverParameter.show) {
            this.cloudCoverGeometry = new THREE.SphereGeometry(
                earthParameter.radius * 0.1 + 0.1,
                earthParameter.subdivision,
                earthParameter.subdivision)

            this.cloudCoverMaterial = new THREE.MeshStandardMaterial({
                map: new THREE.TextureLoader().load(cloudCoverParameter.texture === 'default' ? ((await import('./base64/CloudCover')).texture) : cloudCoverParameter.texture as string),
                color: new THREE.Color(cloudCoverParameter.color),
                side: THREE.DoubleSide,
                transparent: cloudCoverParameter.transparent,
                opacity: cloudCoverParameter.opacity,
                depthWrite: false
            })
            this.cloudCoverMesh = new THREE.Mesh(this.cloudCoverGeometry, this.cloudCoverMaterial)
            this.cloudCoverMesh.name = this.cloudCoverName
            return this.cloudCoverMesh
        }
        return undefined
    }

    public async createStarrySky(starrySkyParameter: StarrySkyParameter): Promise<THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>> {
        const starrySky = this.scene.getObjectByName(this.starrySkyName)
        if (starrySky) this.scene.remove(starrySky)
        if (starrySkyParameter.show) {
            const randomPositions: number[] = []
            const randomColors: number[] = []
            this.starrySkyGeometry = new THREE.BufferGeometry()
            for (let i = 0; i < starrySkyParameter.number; i++) {
                const vertex = new THREE.Vector3()
                vertex.x = Math.random() * 2 - 1
                vertex.y = Math.random() * 2 - 1
                vertex.z = Math.random() * 2 - 1
                randomPositions.push(vertex.x, vertex.y, vertex.z)
                const color = new THREE.Color()
                color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55)
                randomColors.push(color.r, color.g, color.b)
            }
            this.starrySkyGeometry.setAttribute('position',
                new THREE.Float32BufferAttribute(randomPositions, 3)
            )
            this.starrySkyGeometry.setAttribute('color',
                new THREE.Float32BufferAttribute(randomColors, 3)
            )

            this.starrySkyMaterial = new THREE.PointsMaterial({
                map: new THREE.TextureLoader().load(starrySkyParameter.texture === 'default' ? ((await import('./base64/StarrySky')).texture) : starrySkyParameter.texture as string),
                size: starrySkyParameter.size,
                transparent: true,
                opacity: starrySkyParameter.opacity,
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                sizeAttenuation: true
            })
            this.starrySkyPoints = new THREE.Points(this.starrySkyGeometry, this.starrySkyMaterial)
            this.starrySkyPoints.name = this.starrySkyName
            this.starrySkyPoints.scale.set(300, 300, 300)
            return this.starrySkyPoints
        }

        return undefined
    }

    public coordinateTransform(lng: number, lat: number): THREE.Vector3 {
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = (90 + lng) * (Math.PI / 180)
        const spherical = new THREE.Spherical(this.earthParameter.radius * 0.1, phi, theta)
        return new THREE.Vector3().setFromSpherical(spherical)
    }

    public getBezierCurveVCoords(startVector: THREE.Vector3, endVector: THREE.Vector3): THREE.Vector3[] {
        // 夹角 0 ~ Math.PI
        const angle = startVector.angleTo(endVector) * 1.5 / Math.PI / 0.1
        const aLen = angle * 0.4; const hLen = angle * angle * 12

        // 法线向量
        const rayLine = new THREE.Ray(new THREE.Vector3(0, 0, 0), startVector.clone().add(endVector.clone()).divideScalar(2))

        // 顶点坐标
        const vTop = rayLine.at(
            hLen / rayLine.at(1, new THREE.Vector3()).distanceTo(new THREE.Vector3(0, 0, 0)),
            new THREE.Vector3()
        )

        // 控制点坐标
        const v1 = startVector.clone().lerp(vTop, aLen / startVector.clone().distanceTo(vTop))
        const v2 = endVector.clone().lerp(vTop, aLen / endVector.clone().distanceTo(vTop))

        return [startVector, v1, v2, endVector]
    }

    public createFlightLines(data: Array<FlightLinesItem>, flightLinesParameter: FlightLinesParameter): THREE.Group {
        const flightLine = this.earth.getObjectByName(this.flightLinesName)
        if (flightLine) this.earth.remove(flightLine)
        this.flightLinesGroup = new THREE.Group()
        this.flightLinesGroup.name = this.flightLinesName + v4()
        data.forEach((item: FlightLinesItem) => {
            const startVector = this.coordinateTransform(item.coords[0][0], item.coords[0][1])
            const endVector = this.coordinateTransform(item.coords[1][0], item.coords[1][1])
            const bezierCurveLine: Line2 = this.createBezierCurveLine(item, startVector, endVector, flightLinesParameter.lineParameter)
            const startScatterPoint = this.createScatterPoint('s->' + item.fromName, startVector, flightLinesParameter.startScatterParameter)
            const endScatterPoint = this.createScatterPoint('e->' + item.toName, endVector, flightLinesParameter.endScatterParameter)
            this.flightLinesGroup.add(bezierCurveLine, startScatterPoint, endScatterPoint)
        })
        return this.flightLinesGroup
    }

    private createScatterPoint(name: string, vector3: THREE.Vector3, scatterParameter: ScatterParameter): THREE.Group {
        const scatterPoint = new THREE.Group()
        scatterPoint.name = name
        scatterPoint.position.set(vector3.x, vector3.y, vector3.z)
        scatterPoint.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 0, 1),
            new THREE.Vector3(vector3.x, vector3.y, vector3.z).normalize()
        )
        const callout = this.createScatterPointMesh('in', textureCallout, scatterParameter)
        const calloutAperture = this.createScatterPointMesh('out', textureCalloutAperture, scatterParameter)

        this.scatterPoint.push(calloutAperture)
        return scatterPoint.add(callout, calloutAperture)
    }

    private createScatterPointMesh(type: string, textureStr: string, scatterParameter: ScatterParameter): THREE.Mesh {
        const texture = new THREE.TextureLoader().load(textureStr)
        const geometry = new THREE.PlaneBufferGeometry(1, 1)
        geometry.rotateX(Math.PI)
        const material = new THREE.MeshBasicMaterial({
            color: scatterParameter.color,
            opacity: scatterParameter.opacity,
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false
        })
        const lightWaveMesh: any = new THREE.Mesh(geometry, material)
        const size = (type === 'out' ? 0.025 : 0.015) * scatterParameter.size
        lightWaveMesh.scale.set(size, size, size)
        if (type === 'out') {
            lightWaveMesh.size = size
            lightWaveMesh._s = Math.random() * 1.0 + 1.0
        }
        return lightWaveMesh
    }

    private createBezierCurveLine(line: FlightLinesItem, startVector: THREE.Vector3, endVector: THREE.Vector3, lineParameter: BorderParameter): Line2 {
        const [v0, v1, v2, v3]: Array<THREE.Vector3> = this.getBezierCurveVCoords(
            startVector, endVector
        )
        const curve: THREE.CubicBezierCurve3 = new THREE.CubicBezierCurve3(
            v0, v1, v2, v3
        )
        this.lineCurve.push(curve)
        const points: Array<any> = curve.getSpacedPoints(100)
        const line2 = DrawLine(points, lineParameter)
        line2.name = line.fromName + '->' + line.toName
        return line2
    }

    public createLightBeamScatter(data: Array<LightBeamScatterItem>, lightBeamScatterParameter: LightBeamScatterParameter): THREE.Group {
        const lightBeamScatter = this.earth.getObjectByName(this.lightBeamScatterName)
        if (lightBeamScatter) this.earth.remove(lightBeamScatter)

        this.lightBeamScatterGroup = new THREE.Group()
        this.lightBeamScatterGroup.name = this.lightBeamScatterName + v4()

        data.forEach((item: LightBeamScatterItem) => {
            const point = this.coordinateTransform(item.value[0], item.value[1])
            const scatterPoint = this.createScatterPoint(item.name, point, lightBeamScatterParameter.scatterParameter)
            const lightBeam = this.createLightBeam(point, item.value[2], lightBeamScatterParameter.lightBeamParameter)
            this.earth.add(lightBeam)

            this.lightBeamScatterGroup.add(scatterPoint)
        })
        return this.lightBeamScatterGroup
    }

    private createLightBeam(vector3: THREE.Vector3, value: number, lightBeamParameter: LightBeamParameter): THREE.Group {
        const group = new THREE.Group()
        const height = value ? lightBeamParameter.baseHeight * value : lightBeamParameter.baseHeight
        const LightBeamTexture = new THREE.TextureLoader().load(textureLightColumn)
        const lightBeamGeometry = new THREE.PlaneGeometry(lightBeamParameter.radius, height)
        lightBeamGeometry.rotateX(Math.PI / 2)
        lightBeamGeometry.translate(0, 0, height / 2)
        const lightBeamMaterial = new THREE.MeshBasicMaterial({
            map: LightBeamTexture,
            color: lightBeamParameter.color,
            opacity: lightBeamParameter.opacity,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false
        })
        const lightBeamMesh = new THREE.Mesh(lightBeamGeometry, lightBeamMaterial)
        group.position.set(vector3.x, vector3.y, vector3.z)
        group.add(lightBeamMesh, lightBeamMesh.clone().rotateZ(Math.PI / 2))

        const coordVec3 = new THREE.Vector3(vector3.x, vector3.y, vector3.z).normalize()
        const meshNormal = new THREE.Vector3(0, 0, 1)
        group.quaternion.setFromUnitVectors(meshNormal, coordVec3)

        return group
    }

    private moveOnCurve(curve: THREE.CubicBezierCurve3, model: THREE.Mesh) {
        if (!curve && !model) {
            console.log('loading...')
        } else {
            if (this.progress <= 1 - this.velocity) {
                const point = curve.getPointAt(this.progress)
                const pointBox = curve.getPointAt(this.progress + this.velocity)
                if (point && pointBox) {
                    model.position.set(point.x, point.y, point.z)

                    // 目标位置点
                    const targetPos = pointBox
                    // 目标移动时的朝向偏移
                    const offsetAngle = 0
                    // 创建一个4维矩阵
                    const mtx = new THREE.Matrix4()
                    // 设置朝向
                    mtx.lookAt(model.position, targetPos, model.up)
                    mtx.multiply(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0, offsetAngle, 0)))
                    // 计算出需要进行旋转的四元数值
                    const toRot = new THREE.Quaternion().setFromRotationMatrix(mtx)
                    model.quaternion.slerp(toRot, 0.2)
                }
                this.progress += this.velocity
            } else {
                this.progress = 0
            }
        }
    }

    public render(): void {
        this.animationFrameId = requestAnimationFrame(() => {
            // 星空动画
            if (this.starrySkyPoints && this.starrySkyParameter.animation) this.starrySkyPoints.rotation.y += this.starrySkyParameter.animationSpeed
            // 球体动画
            if (this.earth && this.earthParameter.animation) this.earth.rotation.y += this.earthParameter.animationSpeed
            // 云层动画
            if (this.cloudCoverMesh && this.cloudCoverParameter.animation) this.cloudCoverMesh.rotation.y += this.cloudCoverParameter.animationSpeed
            // 涟漪散点动画
            if (this.scatterPoint.length) {
                this.scatterPoint.forEach((mesh: any) => {
                    mesh._s += 0.009
                    mesh.scale.set(mesh.size * mesh._s, mesh.size * mesh._s, mesh.size * mesh._s)
                    if (mesh._s <= 1.5) {
                        mesh.material.opacity = (mesh._s - 1) * 2
                    } else if (mesh._s > 1.5 && mesh._s <= 2) {
                        mesh.material.opacity = 1 - (mesh._s - 1.5) * 2
                    } else {
                        mesh._s = 1.0
                    }
                })
            }
            // 性能监测
            if (this.stats) {
                this.stats.update()
            }
            // 渐变分段线动画
            if (this.animationGradientSegmentLine) {
                startAnimationGradientLine(this.animationGradientSegmentLine)
            }
            this.webGlRenderer.autoClear = false
            this.webGlRenderer.clear()
            if (this.earthParameter.bloom) {
                this.composer.render()
                this.webGlRenderer.clearDepth()
            } else {
                this.webGlRenderer.render(this.scene, this.camera)
            }
            this.render()
        })
    }

    public start(): this {
        this.render()
        return this
    }
}
