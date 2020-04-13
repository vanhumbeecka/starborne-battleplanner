import * as moment from 'moment-timezone'
import {Pixel} from './pixel'

export interface RawSpyReport {
  id: string
  dateSubmitted: string
  whoSubmitted: string
  dateSpied: string
  whoSpied: string
  spyReportHeader: string
  spyReportHeader2: string
  captureDefense: string
  stationResources: string
  stationLabour: string
}

export class SpyReport {

  static fromRawReport(input: RawSpyReport): SpyReport | undefined {
    const id = Number(input.id)
    const submitted = moment(input.dateSubmitted, 'MM/DD/YYYY HH:mm:ss').tz('America/New_York')
    const isPlayer = input.whoSpied === 'Player'
    const captureDefense = input.captureDefense
    const coordinates: Pixel | undefined = SpyReport.parseCoordinates(input.spyReportHeader)
    if (!coordinates) {
      console.error(`Incomplete spy report with id ${input.id}. Aborting`)
      return undefined
    }
    return new SpyReport(id, submitted, isPlayer, coordinates, captureDefense)
  }

  static parseCoordinates(raw: string): Pixel | undefined {
    const coordStringRegex = /(\(.+\))/
    const result = coordStringRegex.exec(raw)
    if (!result || result.length === 0) {
      console.error(`Could not parse coordinates from string: "${raw}"`)
      return undefined
    }
    const group = result[0]
    const coords = group
      .replace('(', '')
      .replace(')', '')
      .split(',')
    if (coords.length !== 2) {
      console.error(`Could not parse coordinates from string: "${raw}"`)
      return new Pixel(0, 0)
    }
    return new Pixel(Number(coords[0]), Number(coords[1]))
  }

  constructor(private id: number,
              private submitted: moment.Moment,
              private isPlayer: boolean,
              private coordinates: Pixel,
              private captureDefense: string
  ) {
    // TODO: private stationResources: string[],
    // private stationLabor: string[],
    // private buildings: string[],
    // private hiddenResources: string[],
    // private outposts: string[],
    // private fleets: string[],
    // private hangar: string[]
  }
}
