import * as Phaser from 'phaser'
import Scenes from './scenes'
import PhaserDebugDrawPlugin from 'phaser-plugin-debug-draw'

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Starborne BattlePlanner',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight
  },

  scene: Scenes,

  parent: 'game',
  backgroundColor: '#000000'
}

export const game = new Phaser.Game(gameConfig)

window.addEventListener('resize', () => {
  console.log('resize')
  game.scale.refresh()
})
