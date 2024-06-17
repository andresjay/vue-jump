import GameModel from './model'
import GameStage from './stage'
import { STAGEGROUP } from '@/utils/common'

class GameController {
  gameModel: GameModel
  gameStage: GameStage
  constructor() {
    this.gameModel = new GameModel()
    this.gameStage = new GameStage()
    this.gameModel.changeStage.attach((sender, args) => {
      switch (args.stage) {
        case STAGEGROUP.GAMEOVER:
          this.gameStage.showGameOverStage()
          break
        case STAGEGROUP.GAMEMAIN:
          this.gameStage.showGameMainStage()
          break
        default:
          break
      }
    })
  }

  initController() {
    this.gameStage.initMainStage({
      showGameOverStage: () => this.gameModel.setStage(STAGEGROUP.GAMEOVER)
    })

    this.gameStage.initOverStage({
      restartGame: () => this.gameStage.restartGame(),
      getScore: () => this.gameStage.getScore()
    })

    this.gameModel.setStage(STAGEGROUP.GAMEMAIN)
  }
}

export default new GameController()
