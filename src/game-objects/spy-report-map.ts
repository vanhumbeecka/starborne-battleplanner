import {SpyReport} from '../models/spy-report/spy-report'
import {Hexagon} from '../models/hexagon'
import {Coordinate} from '../models/Coordinate'
import {HexagonGrid} from '../models/hexagon-grid'
import {Pixel} from '../models/pixel'
import Scene = Phaser.Scene
import {EventBus, eventBus} from './events/EventBus'

export class SpyReportMapGameObject extends Phaser.GameObjects.Graphics {

  static fromSpyReports(scene: Scene, grid: HexagonGrid, spyReports: SpyReport[], coordinate: Coordinate): SpyReportMapGameObject {

    if (!spyReports || spyReports.length === 0) {
      throw new Error('No spyreports given')
    }

    const hex = new Hexagon(coordinate.q, coordinate.r, grid.size)
    return new SpyReportMapGameObject(scene, eventBus, hex)
  }

  constructor(scene: Scene, private readonly bus: EventBus, private readonly hex: Hexagon) {
    super(scene, {})
    // super(scene, hexagon, eventBus)

    const x = this.hex.relativeX
    const y = this.hex.relativeY
    const radius = 4

    this.renderSpyReport(x, y, radius)

    const hitArea = new Phaser.Geom.Circle(x, y, radius)
    this.setInteractive(hitArea, Phaser.Geom.Circle.Contains)
    //
    this.on('pointerover', (evt) => this.hoverHandler(evt))
    this.on('pointerout', (evt) => this.hoverOutHandler())
  }

  private renderSpyReport(x: number, y: number, radius: number) {
    const color = 0xffff00
    const alpha = 1

    this.fillStyle(color, alpha)
    this.fillCircle(x, y, radius)
  }

  private hoverHandler(evt) {
    this.setAlpha(0.5)
    this.bus.emitHexHoverEvent(this.hex)
  }

  private hoverOutHandler() {
    this.setAlpha(1)
    this.bus.emitHexHoverOutEvent()
  }
}
