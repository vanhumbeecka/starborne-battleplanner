import Scene = Phaser.Scene
import {HexagonGrid} from '../models/hexagon-grid'
import {Pixel} from '../models/pixel'

export class HexagonGridOutlineGameObject extends Phaser.GameObjects.Graphics {
  constructor(scene: Scene, grid: HexagonGrid) {
    super(scene, {})

    const pixels: Pixel[] = grid.outerHexes().map(h => h.centerPixel)
    const startPixel = pixels[0]

    // set a fill and line style
    this.lineStyle(2, 0xffd900, 1)

    this.beginPath()
    this.moveTo(startPixel.x, startPixel.y)
    for (let i = 1; i <= 5; i++) {
      this.lineTo(pixels[i].x, pixels[i].y)
    }
    this.lineTo(startPixel.x, startPixel.y)
    this.stroke()
    this.closePath()
  }
}
