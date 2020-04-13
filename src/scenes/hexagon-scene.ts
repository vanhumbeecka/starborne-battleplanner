import {getGameHeight, getGameWidth} from '../helpers'
import {HexagonGameObject} from '../game-objects/hexagon'
import {Hexagon} from '../models/hexagon'
import Color = Phaser.Display.Color
import {HexagonGrid} from '../models/hexagon-grid'
import {HexagonGridGameObject} from '../game-objects/hexagon-grid'
import {createControls} from '../game-objects/controls'

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

  public preload() {
    this.load.image('hexagon', 'assets/hexagon.png')
    this.load.image('marker', 'assets/marker.png')
  }

  get width(): number {
    return getGameWidth(this)
  }

  get height(): number {
    return getGameHeight(this)
  }

  public create() {
    this.hexagonGroup = this.add.group()
    this.cameras.main.backgroundColor = new Color(0, 0, 0)

    const grid = HexagonGrid.fromGameWidth(50, this.width / 2)
    const container = new HexagonGridGameObject(this, grid)

  }

  public update(time, delta) {
    // TODO
  }
}
