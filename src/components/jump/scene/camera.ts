import * as THREE from 'three'
import { common } from '@/utils/common'
import { customAnimation } from '@/utils/animation'

class Camera {
  instance: any
  frustumSize: number
  constructor() {
    this.instance = null
    this.frustumSize = 30
  }
  init() {
    const { aspect } = common
    const frustumSize = this.frustumSize
    this.instance = new THREE.OrthographicCamera(
      -frustumSize,
      frustumSize,
      frustumSize * aspect,
      -frustumSize * aspect,
      -100,
      85
    )
    this.reset()
    this.instance.lookAt(this.target)
  }
  target(target: any) {
    throw new Error('Method not implemented.')
  }
  reset() {
    //-10,10,10
    this.instance.position.set(-10, 10, 10)
    this.target = new THREE.Vector3(0, 0, 0)
  }
  updatePosition(newTargetPosition) {
    customAnimation.to(this.instance.position, 0.5, {
      x: newTargetPosition.x - 10,
      y: newTargetPosition.y + 10,
      z: newTargetPosition.z + 10
    })
    customAnimation.to(this.target, 0.5, {
      x: newTargetPosition.x,
      y: newTargetPosition.y,
      z: newTargetPosition.z
    })
  }
}

export default new Camera()
