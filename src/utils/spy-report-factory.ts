import {GoogleSheetResponse, GsCell} from '../clients/google-sheet-response'
import {SpyReport} from '../models/spy-report/spy-report'
import {findCellDataBetweenContent, findCellDataByRow} from './spy-report-utils'

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

  const stationHiddenResourcesArray = findCellDataBetweenContent(reportCells, 'Station Hidden Resources', 'Outposts')
  const outposts = findCellDataBetweenContent(reportCells, 'Outposts', 'Fleets')
  const fleets = findCellDataBetweenContent(reportCells, 'Fleets', 'Hangar')
  // const hangar = findCellDataBetweenContent(reportCells, 'Hangar', null)

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
    stationLabour,
    stationHiddenResources: stationHiddenResourcesArray[0],
    outposts,
    fleets,
    hangar: []
  })
}
