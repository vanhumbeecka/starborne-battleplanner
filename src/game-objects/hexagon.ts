import 'phaser'
import {Hexagon} from '../models/hexagon'
import {Pixel} from '../models/pixel'
import Scene = Phaser.Scene

export class HexagonGameObject extends Phaser.GameObjects.Graphics {

  // tslint:disable-next-line: variable-name
  public readonly hitZone: Phaser.Geom.Circle

  constructor(scene: Scene,
              public readonly hex: Hexagon) {
    super(scene, {})

    // set a fill and line style
    this.lineStyle(2, 0xffd900, 1)

    const pixels = [0, 1, 2, 3, 4, 5].map(v => this.pointyHexPixel(hex.centerPixel, hex.size, v))
    const startPixel = pixels[0]

    this.beginPath()
    this.moveTo(startPixel.x, startPixel.y)
    for (let i = 1; i <= 5; i++) {
      this.lineTo(pixels[i].x, pixels[i].y)
    }
    this.lineTo(startPixel.x, startPixel.y)
    this.stroke()
    this.closePath()

    this.hitZone = new Phaser.Geom.Circle(hex.centerPixel.x, hex.centerPixel.y, hex.width / 2)
    this.setInteractive(this.hitZone, Phaser.Geom.Circle.Contains)
    //
    this.on('pointerover', (evt) => this.handler(evt))
    this.on('pointerout', (evt) => this.stateNormal())
    scene.add.existing(this)
  }

  private handler(evt) {
    console.log(`(${this.hex.q}, ${this.hex.r}) - (${this.hex.centerPixel.x}, ${this.hex.centerPixel.y})`)

    // this.setAlpha(0.5)
  }

  private pointyHexPixel(center: Pixel, size: number, i: number): Pixel {
    const angleDeg = 60 * i - 30
    const angleRad = Math.PI / 180 * angleDeg
    return new Pixel(center.x + size * Math.cos(angleRad),
      center.y + size * Math.sin(angleRad))
  }

  private stateNormal() {
    this.setAlpha(1)
  }
}
