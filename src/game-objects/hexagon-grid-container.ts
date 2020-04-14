import {HexagonGrid} from '../models/hexagon-grid'
import {Pixel} from '../models/pixel'
import {getGameCenterX, getGameCenterY} from '../helpers'
import {HexagonGridOutlineGameObject} from './hexagon-grid-outline'
import {eventBus, EventBus} from './events/EventBus'
import {SpyReport} from '../models/spy-report/spy-report'
import {TupleMap} from '../utils/tuple-map'
import Scene = Phaser.Scene
import {SpyReportMapGameObject} from './spy-report-map'
import {Coordinate} from '../models/Coordinate'

const spyReportBinsToSpyReportGameObjects = (scene: Scene, grid: HexagonGrid, bins: TupleMap<SpyReport[]>): SpyReportMapGameObject[] => {
  const list: SpyReportMapGameObject[] = []
  bins.forEach((bin, coordinateTuple) => {
    list.push(SpyReportMapGameObject.fromSpyReports(scene, grid, bin, Coordinate.fromTuple(coordinateTuple)))
  })
  console.log(`${list.length} different locations spied`)
  return list
}

export class HexagonGridGameObject extends Phaser.GameObjects.Container {

  private coordinateGrid: HexagonGrid

  static fromGrid(scene: Scene, hexagonGrid: HexagonGrid, spyReports: TupleMap<SpyReport[]>): HexagonGridGameObject {
    return new HexagonGridGameObject(scene, hexagonGrid, spyReports, eventBus)
  }

  constructor(scene: Scene, hexagonGrid: HexagonGrid, spyReports: TupleMap<SpyReport[]>, readonly bus: EventBus) {
    super(
      scene,
      getGameCenterX(scene) / 2,
      getGameCenterY(scene),
      [
        // ...hexagonGrid.allToList().map(h => new HexagonGameObject(scene, h, eventBus)), // TODO: memory limited to about depth of 100
        new HexagonGridOutlineGameObject(scene, hexagonGrid),
        ...spyReportBinsToSpyReportGameObjects(scene, hexagonGrid, spyReports)
      ]
    )

    this.coordinateGrid = hexagonGrid

    scene.add.existing(this)
  }
}
