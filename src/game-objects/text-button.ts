export class TextButton extends Phaser.GameObjects.Text {

  constructor(scene, x, y, text, style, callback) {
    super(scene, x, y, text, style)

    this.setInteractive({useHandCursor: true})
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())
      .on('pointerdown', () => this.enterButtonActiveState())
      .on('pointerup', () => {
        if (callback) {
          callback()
        }
        this.enterButtonHoverState()
      })
  }

  private enterButtonHoverState() {
    this.setStyle({fill: '#ff0'})
  }

  private enterButtonRestState() {
    this.setStyle({fill: '#0f0'})
  }

  private enterButtonActiveState() {
    this.setStyle({fill: '#f00'})
  }
}
