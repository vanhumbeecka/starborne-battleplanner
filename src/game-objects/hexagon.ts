import {Hexagon} from '../models/hexagon'
import {Pixel} from '../models/pixel'
import {EventBus} from './events/EventBus'
import Scene = Phaser.Scene

export class HexagonGameObject extends Phaser.GameObjects.Graphics {

  public readonly hitZone: Phaser.Geom.Circle

  constructor(scene: Scene,
              public readonly hex: Hexagon,
              private readonly eventBus: EventBus) {
    super(scene, {})

    this.renderHex()

    this.hitZone = new Phaser.Geom.Circle(hex.centerPixel.x, hex.centerPixel.y, hex.width / 2)
    this.setInteractive(this.hitZone, Phaser.Geom.Circle.Contains)
    //
    this.on('pointerover', (evt) => this.hoverHandler(evt))
    this.on('pointerout', (evt) => this.hoverOutHandler())
  }

  private renderHex() {
    // set a fill and line style
    this.lineStyle(2, 0xffd900, 1)

    const pixels = [0, 1, 2, 3, 4, 5].map(v => this.pointyHexPixel(this.hex.centerPixel, this.hex.size, v))
    const startPixel = pixels[0]

    this.beginPath()
    this.moveTo(startPixel.x, startPixel.y)
    for (let i = 1; i <= 5; i++) {
      this.lineTo(pixels[i].x, pixels[i].y)
    }
    this.lineTo(startPixel.x, startPixel.y)
    this.stroke()
    this.closePath()
  }

  private hoverHandler(evt) {
    this.eventBus.emitHexHoverEvent(this.hex)
  }

  private hoverOutHandler() {
    this.setAlpha(1)
  }

  private pointyHexPixel(center: Pixel, size: number, i: number): Pixel {
    const angleDeg = 60 * i - 30
    const angleRad = Math.PI / 180 * angleDeg
    return new Pixel(center.x + size * Math.cos(angleRad),
      center.y + size * Math.sin(angleRad))
  }
}
