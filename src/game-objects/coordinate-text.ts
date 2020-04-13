import {EventBus} from './events/EventBus'

export class CoordinateTextGameObject extends Phaser.GameObjects.Text {
  constructor(scene, x: number, y: number) {
    super(scene, x, y, '(,)', {color: 'green'})

    scene.add.existing(this)
  }

  setCoordinates(q: number, r: number): void {
    this.setText(`(${q},${r})`)
  }

  emptyCoordinates(): void {
    this.setText(`(,)`)
  }
}
