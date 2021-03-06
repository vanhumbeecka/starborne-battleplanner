import {
  parseCoordinates, parseFleets,
  parseOutposts,
  parseStationName,
  parseStationResources
} from '../../src/utils/spy-report-utils'
import {testData} from '../data'
import {SpyReport} from '../../src/models/spy-report/spy-report'
import {assert, expect} from 'chai'
import {generateReports} from '../../src/utils/spy-report-factory'

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

  describe('when parsing outposts from string array', () => {
    const outposts: string[] = [
      'Mining Facility - Level 4 - Operational',
      'Fortress - Level 2 - Operational',
      'Heavy Ship Assembly - Level 1 - Operational'
    ]

    it('should parse outposts correctly', () => {
      const parsed = parseOutposts(outposts)

      expect(parsed).to.not.be.undefined
      expect(parsed).to.have.length(3)
      expect(parsed[1].name).to.equal('Fortress')
      expect(parsed[1].level).to.equal('Level 2')
    })
  })

  describe('when parsing fleets from string array', () => {
    const fleets: string[] = [
      '30 Patrol Ships',
      '53 Patrol Ships',
      '43 Industrials',
      '44 Scouts'
    ]

    it('should parse fleets correctly', () => {
      const parsed = parseFleets(fleets)

      expect(parsed).to.have.length(4)
      expect(parsed[0].count).to.equal(30)
      expect(parsed[0].type).to.equal('Patrol Ships')
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
