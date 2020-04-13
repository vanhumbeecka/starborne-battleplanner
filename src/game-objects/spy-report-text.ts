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

    reports.sort((a, b) => {
      if (a.submitted.isAfter(b.submitted)) {
        return -1
      } else if (a.submitted.isSame(b.submitted)) {
        return 0
      } else {
        return 1
      }
    })

    const lastReport = reports[0]

    this.setText([
      `${lastReport.stationName} ${lastReport.coordinates.toString()}`,
      '',
      '---',
      '',
      `Spied ${reports.length} times.`,
      `Last report ${lastReport.submitted.fromNow()}`,
      `report IDs (${reports.map(r => r.id).join(', ')})`,
      '',
      '---',
      '',
      lastReport.captureDefense,
      lastReport.stationLabour,
      '',
      ...reports.map(r => `(${r.submitted.fromNow()}) Metal: ${r.stationResources.metal} - Gas: ${r.stationResources.gas} - Crystal: ${r.stationResources.crystal}`),
      ''
    ])
  }

  removeReports(): void {
    this.setText('')
  }
}
