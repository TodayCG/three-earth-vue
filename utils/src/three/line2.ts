import { Line2 } from 'three/examples/jsm/lines/Line2'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'

import { BorderParameter } from './interface'

export const DrawLine = (lines, option: BorderParameter) => {
    const lineData = []
    lines.forEach(({ x, y, z }) => lineData.push(x, y, z))
    const geometry = new LineGeometry()
    geometry.setPositions(lineData)
    const lineMaterial = new LineMaterial({
        transparent: true,
        color: option.color,
        linewidth: (option.lineWidth * 0.001),
        opacity: option.opacity,
        alphaToCoverage: true
    })
    return new Line2(geometry, lineMaterial)
}