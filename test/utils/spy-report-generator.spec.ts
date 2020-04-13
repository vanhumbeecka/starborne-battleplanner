import {generateReports, parseCoordinates} from '../../src/utils/spy-report-generator'
import {testData} from '../data'
import {SpyReport} from '../../src/models/spy-report'
import {assert, expect} from 'chai'

describe('SpyReportGenerator', () => {

  it('should parse coordinates from text', () => {
    const raw = 'Spy Report on hex (358,-288) Magic II completed 11 seconds ago.'

    const result = parseCoordinates(raw)

    expect(result.q).to.equal(358)
    expect(result.r).to.equal(-288)
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
