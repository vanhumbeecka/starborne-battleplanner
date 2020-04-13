import * as moment from 'moment-timezone'
import {Coordinate} from './Coordinate'
import { parseCoordinates } from '../utils/spy-report-generator'

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
    const coordinates: Coordinate | undefined = parseCoordinates(input.spyReportHeader)
    if (!coordinates) {
      console.warn(`Incomplete spy report with id ${input.id}. Skipping this report`)
      return undefined
    }
    return new SpyReport(id, submitted, isPlayer, coordinates, captureDefense)
  }

  constructor(public readonly id: number,
              public readonly submitted: moment.Moment,
              public readonly isPlayer: boolean,
              public readonly coordinates: Coordinate,
              public readonly captureDefense: string
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
