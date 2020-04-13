import Scene = Phaser.Scene
import {SpyReport} from '../models/spy-report'

export class SpyReportText extends Phaser.GameObjects.Text {

  constructor(scene: Scene, gameWidth: number, fromTop: number) {
    super(scene, gameWidth / 2 + 10, fromTop, '', {})

    scene.add.existing(this)
  }

  setReports(reports: SpyReport[]): void {
    if (!reports || reports.length === 0) {
      return
    }
    const report = reports[reports.length - 1] // last report for now
    this.setText([report.id.toString(), report.coordinates.toString(), report.submitted.fromNow(), report.captureDefense])
  }

  removeReports(): void {
    this.setText('')
  }
}
