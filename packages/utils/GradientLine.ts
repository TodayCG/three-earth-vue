
import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'

/**
 * 在指定线段上创建分段渐变线
 * @param curve
 * @param number
 * @returns
 */
export const createGradientLine = (curve: THREE.CatmullRomCurve3, number: number): any => {
    const animations = []
    const mesh = []
    new Array(number).fill(0).forEach((_, i) => {
        const movingLine = createMovingLine(curve, i * 100)
        animations.push(movingLine)
        mesh.push(movingLine.mesh)
    })
    return { mesh, animations }
}
export const startAnimationGradientLine = (animations: Array<any>) => {
    animations.forEach((item) => {
        item.index + 1 > item.linePointsV3.length - item.verticNum
            ? (item.index = 0)
            : (item.index += 3)
        item.mesh.geometry.setPositions(
            item.linePointsV3
                .slice(item.index, item.index + item.verticNum)
                .reduce((arr, item) => {
                    return arr.concat(item.x, item.y, item.z)
                }, [])
        )
    })
}
export const createMovingLine = (
    curve,
    index = 0,
    color = ['#00ffff', '#ffffff'],
    pointNum = 400,
    verticNum = 30
) => {
    const lightGeometry = new LineGeometry()
    const pointsV3 = curve.getPoints(pointNum)
    lightGeometry.setPositions(
        pointsV3.slice(index, index + verticNum).reduce((arr, item) => {
            return arr.concat(item.x, item.y, item.z)
        }, [])
    )
    const lightMaterial = new LineMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        linewidth: 5,
        depthTest: false, // 慎用
        vertexColors: true
    })
    // 渐变色处理
    const colors = gradientColors(color[1], color[0], verticNum, 1)

    const colorArr = colors.reduce((arr, item) => {
        const TColor = new THREE.Color(item)
        return arr.concat(TColor.r, TColor.g, TColor.b)
    }, [])

    lightGeometry.setColors(colorArr)
    lightMaterial.resolution.set(window.innerWidth, window.innerHeight)
    const lightLine = new Line2(lightGeometry, lightMaterial)
    lightLine.computeLineDistances()
    return {
        index,
        verticNum,
        mesh: lightLine,
        linePointsV3: pointsV3
    }
}
export const gradientColors = (start, end, steps, gamma) => {
    const parseColor = function (hexStr) {
        return hexStr.length === 4
            ? hexStr
                .substr(1)
                .split('')
                .map(function (s) {
                    return 0x11 * parseInt(s, 16)
                })
            : [
                hexStr.substr(1, 2),
                hexStr.substr(3, 2),
                hexStr.substr(5, 2)
            ].map(function (s) {
                return parseInt(s, 16)
            })
    }
    const pad = function (s) {
        return s.length === 1 ? `0${s}` : s
    }
    let j
    let ms
    let me
    const output = []
    const so = []
    gamma = gamma || 1
    const normalize = function (channel) {
        return Math.pow(channel / 255, gamma)
    }
    start = parseColor(start).map(normalize)
    end = parseColor(end).map(normalize)
    for (let i = 0; i < steps; i++) {
        ms = i / (steps - 1)
        me = 1 - ms
        for (j = 0; j < 3; j++) {
            so[j] = pad(
                Math.round(
                    Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255
                ).toString(16)
            )
        }
        output.push(`#${so.join('')}`)
    }
    return output
}