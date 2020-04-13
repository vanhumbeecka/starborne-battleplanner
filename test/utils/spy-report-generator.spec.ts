import {generateReports, parseCoordinates, parseStationResources, parseStationName} from '../../src/utils/spy-report-utils'
import {testData} from '../data'
import {SpyReport} from '../../src/models/spy-report'
import {assert, expect} from 'chai'

describe('SpyReportGeneration', () => {

  describe('when given a spy report string header', () => {

    const raw = 'Spy Report on hex (358,-288) Magic II completed 11 seconds ago.'

    it('should parse coordinates from text', () => {
      const result = parseCoordinates(raw)

      expect(result.q).to.equal(358)
      expect(result.r).to.equal(-288)
    })

    it('should parse the station name from text', () => {
      const result = parseStationName(raw)

      expect(result).to.equal('Magic II')
    })
  })

  describe('when parsing raw JSON data', () => {
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

  describe('when parsing resources from string', () => {
    const raw = 'Metal 0 	Gas 1 	Crystal 20 	'

    it('should parse correclty', () => {
      const resources = parseStationResources(raw)

      expect(resources).to.not.be.undefined
      expect(resources.metal).to.equal(0)
      expect(resources.gas).to.equal(1)
      expect(resources.crystal).to.equal(20)
    })
  })


})
