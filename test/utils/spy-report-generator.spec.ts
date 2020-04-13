import {generateReports} from '../../src/utils/spy-report-generator'
import {testData} from '../data'
import {assert, expect} from 'chai'
import {SpyReport} from '../../src/models/spy-report'

describe('SpyReportGenerator', () => {

  it('should parse coordinates from text', () => {
    const raw = 'Spy Report on hex (358,-288) Magic II completed 11 seconds ago.'

    const result = SpyReport.parseCoordinates(raw)

    expect(result.x).to.equal(358)
    expect(result.y).to.equal(-288)
  })

  it('should parse raw data correctly', () => {
    let parsed: SpyReport[]
    try {
      parsed = generateReports(testData)
    } catch (e) {
      assert.fail('could not parse raw spyreport data: ' + e.message)
    }

    expect(parsed).to.have.length(16)
  })
})
