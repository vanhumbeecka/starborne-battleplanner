import {GsCell} from '../clients/google-sheet-response'
import {SpyReport} from '../models/spy-report/spy-report'
import {TupleMap} from './tuple-map'
import {Coordinate} from '../models/Coordinate'
import {Building, Fleet, Resources} from '../models/spy-report/content'

export const binSpyReportsByCoordinate = (spyReports: SpyReport[]): TupleMap<SpyReport[]> => {
  const map = new TupleMap<SpyReport[]>()

  spyReports.map(report => {
    const coords = report.coordinates.asTuple
    if (map.has(coords)) {
      const value = map.get(coords)
      map.set(coords, [...value, report])
    } else {
      map.set(coords, [report])
    }
  })

  return map
}

export const parseCoordinates = (raw: string): Coordinate | undefined => {
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
    return new Coordinate(0, 0)
  }
  return new Coordinate(Number(coords[0]), Number(coords[1]))
}

export const parseStationName = (raw: string): string => {
  const regex = /\(.+\)\s(.+)\scompleted/
  const result = regex.exec(raw)
  if (!result || result.length === 0) {
    console.error(`Could not parse station name from string: "${raw}"`)
    return ''
  }
  return result[1]
}

export const parseOutposts = (raw: string[]): Building[] => {
  const regex = new RegExp('^(.+)\\s-\\s(Level\\s[0-9\\?])')
  const buildings: Array<Building | undefined> = raw.map(r => {
    const output = regex.exec(r)
    if (!output || output.length !== 3) {
      console.error('Could not parse outpost for raw: ' + raw.join(' -- '))
      return undefined
    }
    return {
      name: output[1],
      level: output[2]
    } as Building
  })
  return buildings.filter(b => !!b)
}

export const parseFleets = (raw: string[]): Fleet[] => {
  const regex = /^([0-9]+)\s(.+)$/
  const result = raw.map(r => {
    const output = regex.exec(r)
    if (!output || output.length === 0) {
      console.error('Could not parse fleet string: ' + raw.join(' -- '))
      return undefined
    }
    return {
      count: Number(output[1]),
      type: output[2]
    } as Fleet
  })
  return result.filter(r => !!r)
}

export const parseHangar = (raw: string[]): Fleet[] => {
  return []
}

export const parseStationResources = (raw: string): Resources | undefined => {
  if (raw.startsWith('None')) {
    return {
      isNone: true,
      crystal: 0,
      metal: 0,
      gas: 0
    }
  }

  const regex = /Metal\s([0-9]+)\s.*Gas\s([0-9]+)\s.*Crystal\s([0-9]+)\s/
  const result = regex.exec(raw)
  if (!result || result.length === 0) {
    console.error(`Could not parse resources from string: "${raw}"`)
    return undefined
  }

  return {
    isNone: false,
    metal: Number(result[1]),
    gas: Number(result[2]),
    crystal: Number(result[3])
  }
}

export const findCellDataByRow = (cells: GsCell[], row: number): string | undefined => {
  const cell = cells.find(c => Number(c.row) === row)
  if (!cell) {
    return undefined
  }
  return cell.inputValue
}

export const findCellDataBetweenContent = (cells: GsCell[], fromStartsWith: string, toStartsWith: string): string[] => {
  const cellIndexStart = cells.findIndex(c => c.inputValue.startsWith(fromStartsWith))
  const cellIndexEnd = cells.findIndex(c => c.inputValue.startsWith(toStartsWith))

  const results = cells.slice(cellIndexStart + 1, cellIndexEnd)
  if (!results) {
    return []
  }
  return results.map(r => r.inputValue)
}
