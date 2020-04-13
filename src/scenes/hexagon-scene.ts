import {getGameHeight, getGameWidth} from '../helpers'
import {Hexagon} from '../models/hexagon'
import {HexagonGrid} from '../models/hexagon-grid'
import {HexagonGridGameObject} from '../game-objects/hexagon-grid-container'
import {CoordinateTextGameObject} from '../game-objects/coordinate-text'
import {eventBus} from '../game-objects/events/EventBus'
import {SpyReportMapGameObject} from '../game-objects/spy-report-map'
import {SpyReport} from '../models/spy-report'
import {binSpyReportsByCoordinate, generateReports} from '../utils/spy-report-utils'
import {TupleMap} from '../utils/tuple-map'
import {SpyReportText} from '../game-objects/spy-report-text'
import {Scene} from 'phaser'
import {Coordinate} from '../models/Coordinate'
import Color = Phaser.Display.Color

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Hexagon'
}

export class HexagonScene extends Phaser.Scene {

  private controls: Phaser.Cameras.Controls.FixedKeyControl

  public marker: Phaser.GameObjects.Sprite
  public hexagonGroup

  constructor() {
    super(sceneConfig)
  }

  get width(): number {
    return getGameWidth(this)
  }

  get height(): number {
    return getGameHeight(this)
  }

  public create() {
    this.cameras.main.backgroundColor = new Color(0, 0, 0)

    // models
    const grid = HexagonGrid.fromGameWidth(500, this.width / 2)
    const spyReports: SpyReport[] = generateReports(this.cache.json.get('spyReportData'))
    const spyReportsByCoordinate: TupleMap<SpyReport[]> = binSpyReportsByCoordinate(spyReports)

    // game objects
    const gridGameObject = HexagonGridGameObject.fromGrid(this, grid, spyReportsByCoordinate)
    const coordinateText = new CoordinateTextGameObject(this, 10, 10)
    const spyReportText = new SpyReportText(this, this.width, 25)

    eventBus.listenHexHover(hex => {
      coordinateText.setCoordinates(hex.q, hex.r)
      spyReportText.setReports(spyReportsByCoordinate.get([hex.q, hex.r]))
    })
    eventBus.listenHexHoverOut(() => {
      coordinateText.emptyCoordinates()
      spyReportText.removeReports()
    })
  }

  public update(time, delta) {
    // TODO
  }

  private spyReportBinsToSpyReportGameObjects(scene: Scene, grid: HexagonGrid, bins: TupleMap<SpyReport[]>): SpyReportMapGameObject[] {
    const list: SpyReportMapGameObject[] = []
    bins.forEach((bin, coordinateTuple) => {
      list.push(SpyReportMapGameObject.fromSpyReports(scene, grid, bin, Coordinate.fromTuple(coordinateTuple)))
    })
    console.log(`${list.length} different locations spied`)
    return list
  }
}
