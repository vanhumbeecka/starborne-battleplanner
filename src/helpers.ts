import * as Phaser from 'phaser'

export const getGameWidth = (scene: Phaser.Scene) => {
  return scene.game.scale.width
}

export const getGameCenterX = (scene: Phaser.Scene) => {
  return getGameWidth(scene) / 2
}

export const getGameHeight = (scene: Phaser.Scene) => {
  return scene.game.scale.height
}

export const getGameCenterY = (scene: Phaser.Scene) => {
  return getGameHeight(scene) / 2
}
