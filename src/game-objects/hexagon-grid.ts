import 'phaser'
import {HexagonGrid} from '../models/hexagon-grid'
import {Pixel} from '../models/pixel'
import Scene = Phaser.Scene
import {HexagonGameObject} from './hexagon'
import {getGameCenterX, getGameCenterY} from '../helpers'

export class HexagonGridGameObject extends Phaser.GameObjects.Container {

  private coordinateGrid: HexagonGrid

  constructor(scene: Scene, hexagonGrid: HexagonGrid) {
    // super(scene, {})
    super(
      scene,
      getGameCenterX(scene) / 2,
      getGameCenterY(scene),
      hexagonGrid.allToList().map(h => new HexagonGameObject(scene, h))
    )

    // this.coordinateGrid = hexagonGrid
    //
    // const pixels: Pixel[] = this.coordinateGrid.outerHexes().map(h => h.centerPixel)
    // const startPixel = pixels[0]
    //
    // this.beginPath()
    // this.moveTo(startPixel.x, startPixel.y)
    // for (let i = 1; i <= 5; i++) {
    //   this.lineTo(pixels[i].x, pixels[i].y)
    // }
    // this.lineTo(startPixel.x, startPixel.y)
    // this.stroke()
    // this.closePath()

    scene.add.existing(this)
  }

  private flatHexPixel(center: Pixel, size: number, i: number): Pixel {
    const angleDeg = 60 * i
    const angleRad = Math.PI / 180 * angleDeg
    return new Pixel(center.x + size * Math.cos(angleRad),
      center.y + size * Math.sin(angleRad))
  }
}
