
import { BorderParameter } from '../../utils/interface'

export interface EarthParameter {
  bloom: boolean
  radius: number
  subdivision: number
  animation?: boolean
  animationSpeed: number
  texture?: string | undefined | boolean
  color?: string | undefined
  opacity?: number
  transparent?: boolean | undefined
  wireframe?: boolean | undefined
}

export interface ApertureParameter {
  show: boolean
  texture?: string | undefined
  color?: string | undefined
  opacity?: number
  transparent?: boolean | undefined
  depthWrite?: boolean | undefined
}

export interface CloudCoverParameter {
  show: boolean
  texture?: string | undefined
  color?: string | undefined
  opacity?: number
  transparent?: boolean | undefined
  animation?: boolean
  animationSpeed: number
}

export interface StarrySkyParameter {
  show: boolean | undefined
  texture?: string | undefined
  number?: number
  size?: number
  opacity?: number
  animation?: boolean
  animationSpeed?: number
}

export interface FlightLinesItem {
  fromName: string
  toName: string
  coords: Array<Array<number>>
}

export interface LightBeamScatterItem {
  name: string
  value: Array<number>
}

export interface ScatterParameter {
  color: string
  opacity: number
  size: number
}
export interface LightBeamParameter {
  baseHeight: number
  radius: number
  color: string
  opacity: number
}
export interface FlightLinesParameter {
  lineParameter: BorderParameter
  startScatterParameter: ScatterParameter
  endScatterParameter: ScatterParameter
}

export interface LightBeamScatterParameter {
  lightBeamParameter: LightBeamParameter
  scatterParameter: ScatterParameter
}