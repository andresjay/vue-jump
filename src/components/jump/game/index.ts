import GameController from './controller'
import { common } from '@/utils/common.js'

class Game {
  constructor() {}
  init() {
    const app = document.getElementById('game')
    const canvas = document.createElement('canvas')

    const width = app?.clientWidth
    const height = app?.clientHeight
    const aspect = height / width

    canvas.width = width
    canvas.height = height

    app.append(canvas)

    common.canvas = canvas
    common.width = width
    common.height = height
    common.aspect = aspect

    GameController.initController()
  }
}

export default new Game()
