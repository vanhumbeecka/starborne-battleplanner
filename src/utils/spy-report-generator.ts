import {GoogleSheetResponse, GsCell} from '../clients/google-sheet-response'
import {SpyReport} from '../models/spy-report'
import {TupleMap} from './tuple-map'
import {Coordinate} from '../models/Coordinate'

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

export const generateReports = (input: GoogleSheetResponse): SpyReport[] => {
  const cells: GsCell[] = input.feed.entry.map(e => e.gs$cell)

  // Eastern Time (US > UTC-4)
  const row2cells = cells.filter(c => Number(c.row) === 2)
  const idCells = row2cells.filter(c => !!c && Number(c.col) >= 4)
  const spyReportColumns: number[] = idCells.map(c => Number(c.col))

  const reports = spyReportColumns.map(col => generateSpyReport(cells, col))
  return reports.filter(r => !!r)
}

const generateSpyReport = (cells: GsCell[], col: number): SpyReport | undefined => {
  const reportCells = cells.filter(c => Number(c.col) === col)

  const id = findCellDataByRow(reportCells, 2)
  const dateSubmitted = findCellDataByRow(reportCells, 3)
  const whoSubmitted = findCellDataByRow(reportCells, 4)
  const dateSpied = findCellDataByRow(reportCells, 5)
  const whoSpied = findCellDataByRow(reportCells, 6)
  const spyReportHeader = findCellDataByRow(reportCells, 7)
  const spyReportHeader2 = findCellDataByRow(reportCells, 8)
  const captureDefense = findCellDataByRow(reportCells, 10)
  const stationResources = findCellDataByRow(reportCells, 12)
  const stationLabour = findCellDataByRow(reportCells, 14)

  // TODO: buildings, fleets, hangar, ...

  return SpyReport.fromRawReport({
    id,
    dateSubmitted,
    whoSubmitted,
    dateSpied,
    whoSpied,
    spyReportHeader,
    spyReportHeader2,
    captureDefense,
    stationResources,
    stationLabour
  })
}

const findCellDataByRow = (cells: GsCell[], row: number): string | undefined => {
  const cell = cells.find(c => Number(c.row) === row)
  if (!cell) {
    return undefined
  }
  return cell.inputValue
}
