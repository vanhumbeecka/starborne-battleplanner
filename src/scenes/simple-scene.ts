import {TextButton} from '../game-objects/text-button'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Simple'
}

export class SimpleScene extends Phaser.Scene {

  private clickCountText: Phaser.GameObjects.Text
  private incrementButton: TextButton
  private decrementButton: TextButton
  private clickCount: number

  constructor() {
    super(sceneConfig)
  }

  public create() {
    this.clickCount = 0
    this.clickCountText = this.add.text(100, 200, '')
    this.incrementButton = new TextButton(this, 100, 100, 'Click me!', {fill: '#0f0'}, () => this.incrementClickText())
    this.add.existing(this.incrementButton)
    this.decrementButton = new TextButton(this, 200, 100, 'Click me!', {fill: '#0f0'}, () => this.decrementClickText())
    this.add.existing(this.decrementButton)
  }

  private decrementClickText() {
    this.clickCount--
    this.updateClickText()
  }

  private incrementClickText() {
    this.clickCount++
    this.updateClickText()
  }

  private updateClickText() {
    this.clickCountText.setText(`Button clicked ${this.clickCount} times`)
  }
}
