import * as moment from 'moment-timezone'
import {Coordinate} from '../Coordinate'
import {
  parseCoordinates,
  parseFleets,
  parseOutposts,
  parseStationName,
  parseStationResources
} from '../../utils/spy-report-utils'
import {Building, Fleet, Resources} from './content'

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
  stationLabour: string,
  stationHiddenResources: string,
  outposts: string[]
  fleets: string[],
  hangar: string[]
}

export class SpyReport {

  static fromRawReport(input: RawSpyReport): SpyReport | undefined {
    const coordinates: Coordinate | undefined = parseCoordinates(input.spyReportHeader)
    if (!coordinates) {
      console.warn(`Incomplete spy report with id ${input.id}. Skipping this report`)
      return undefined
    }

    const id = Number(input.id)
    const submitted = moment(input.dateSubmitted, 'MM/DD/YYYY HH:mm:ss').tz('America/New_York')
    const isPlayer = input.whoSpied === 'Player'
    const captureDefense = input.captureDefense
    const stationName = parseStationName(input.spyReportHeader)
    const stationLabour = input.stationLabour
    const stationResources = parseStationResources(input.stationResources)
    const stationHiddenResources = parseStationResources(input.stationHiddenResources)
    const outposts = parseOutposts(input.outposts)
    const fleets = parseFleets(input.fleets)
    const hangar = parseFleets(input.hangar)

    return new SpyReport(
      id,
      submitted,
      isPlayer,
      coordinates,
      captureDefense,
      stationName,
      stationLabour,
      stationResources,
      stationHiddenResources,
      outposts,
      fleets,
      hangar
    )
  }

  constructor(public readonly id: number,
              public readonly submitted: moment.Moment,
              public readonly isPlayer: boolean,
              public readonly coordinates: Coordinate,
              public readonly captureDefense: string,
              public readonly stationName: string,
              public readonly stationLabour: string,
              public readonly stationResources: Resources,
              public readonly stationHiddenResources: Resources,
              public readonly outposts: Building[],
              public readonly fleets: Fleet[],
              public readonly hangar: Fleet[]
  ) {
    // TODO: private stationResources: string[],
    // private buildings: string[],
    // private hiddenResources: string[],
    // private outposts: string[],
    // private fleets: string[],
    // private hangar: string[]
  }
}
