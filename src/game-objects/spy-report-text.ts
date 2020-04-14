import Scene = Phaser.Scene
import {SpyReport} from '../models/spy-report/spy-report'
import {Resources} from '../models/spy-report/content'
import {flatMap} from 'lodash'

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
      '===',
      '',
      `Spied ${reports.length} times.`,
      `Last report ${lastReport.submitted.fromNow()}`,
      `report IDs (${reports.map(r => r.id).join(', ')})`,
      '',
      lastReport.captureDefense,
      lastReport.stationLabour,
      '',
      '',
      '=== Resources ===',
      '',
      ...this.displayResources(reports),
      '',
      'Hidden Resources',
      ...this.displayResources(reports, true),
      '',
      '',
      `=== Outposts (${lastReport.submitted.fromNow()}) ===`,
      '',
      ...this.displayOutposts(lastReport),
      '',
      '',
      '=== Fleets ===',
      '',
      ...this.displayFleets(reports),
      '',
      ''
    ])
  }

  removeReports(): void {
    this.setText('')
  }

  private displayResources(reports: SpyReport[], isHidden: boolean = false): string[] {
    return reports.map(r => {
      let resources: Resources
      if (isHidden) {
        resources = r.stationHiddenResources
      } else {
        resources = r.stationResources
      }
      if (resources.isNone) {
        return `(${r.submitted.fromNow()}) None`
      }
      return this.getResourcesString(r.submitted.fromNow(), resources)
    })
  }

  private displayOutposts(report: SpyReport): string[] {
    return report.outposts.map(o => `${o.name} - ${o.level}`)
  }

  private displayFleets(reports: SpyReport[]): string[] {
    return flatMap(reports, (report) => {
      if (report.fleets.length === 0) { return [] }
      return [
        `(${report.submitted.fromNow()})`,
        ...report.fleets.map(f => `${f.count} ${f.type}`),
        ''
      ]
    })
  }

  private getResourcesString(fromNow: string, resources: Resources): string {
    return `(${fromNow}) Metal: ${resources.metal} - Gas: ${resources.gas} - Crystal: ${resources.crystal}`
  }
}
