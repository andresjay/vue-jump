import * as THREE from 'three'
import { BLOCKCONFIG, STATUS } from '@/utils/common'
import { customAnimation } from '@/utils/animation'

export default class BaseBlock {
  type: any
  width: number
  height: number
  status: any
  scale: number
  instance: any
  y: number

  constructor(type) {
    this.type = type
    this.width = BLOCKCONFIG.width
    this.height = BLOCKCONFIG.height
    this.status = STATUS.STOP
    this.scale = 1
  }

  popup() {
    this.instance.position.set(this.x, this.y + 30, this.z)
    customAnimation.to(this.instance.position, 0.5, {
      x: this.x,
      y: this.y,
      z: this.z,
      ease: 'Bounce.easeOut'
    })
  }
  x(x: any, arg1: any, z: any) {
    throw new Error('Method not implemented.')
  }
  z(x: any, arg1: any, z: any) {
    throw new Error('Method not implemented.')
  }

  _shrink() {
    const DELTA_SCALE = 0.005
    const MIN_SCALE = 0.55
    this.scale -= DELTA_SCALE
    this.scale = Math.max(MIN_SCALE, this.scale)
    if (this.scale <= MIN_SCALE) {
      this.status = STATUS.STOP
      return
    }
    this.instance.scale.y = this.scale
    const deltaY = (this.height * DELTA_SCALE) / 2
    this.instance.position.y -= deltaY
  }

  rebound() {
    this.status = STATUS.STOP
    this.scale = 1
    customAnimation.to(this.instance.scale, 0.5, { ease: 'Elastic.easeOut', y: 1 })
    customAnimation.to(this.instance.position, 0.5, { ease: 'Elastic.easeOut', y: 0 })
  }

  shrink() {
    this.status = STATUS.SKRINK
  }

  update() {
    if (this.status === STATUS.SKRINK) {
      this._shrink()
    }
  }

  getVertices() {
    const vertices = []
    const centerPosition = {
      x: this.instance.position.x,
      z: this.instance.position.z
    }
    vertices.push([centerPosition.x + this.width / 2, centerPosition.z + this.width / 2])
    vertices.push([centerPosition.x + this.width / 2, centerPosition.z - this.width / 2])
    vertices.push([centerPosition.x - this.width / 2, centerPosition.z + this.width / 2])
    vertices.push([centerPosition.x - this.width / 2, centerPosition.z - this.width / 2])
    return vertices
  }
}
