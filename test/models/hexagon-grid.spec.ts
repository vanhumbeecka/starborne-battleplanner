import {expect} from 'chai'
import {HexagonGrid} from '../../src/models/hexagon-grid'

describe('HexagonGrid', () => {
  describe('with depth of 0', () => {
    let grid: HexagonGrid
    before(() => {
      grid = HexagonGrid.fromGameHeight(0, 10)
    })

    it('should create a grid of 1 hex', () => {
      expect(grid.hexes.size).to.have.equal(1)
    })

    it('center hex should have relative position of 0,0', () => {
      const hex = grid.get(0, 0)
      expect(hex).to.not.be.undefined
      expect(hex.q).to.equal(0)
      expect(hex.r).to.equal(0)
      expect(hex.relativeX).to.equal(0)
      expect(hex.relativeY).to.equal(0)
    })
  })

  describe('with depth of 1', () => {
    it('should create a grid of 7 hexes', () => {
      const grid = new HexagonGrid(1, 10)

      expect(grid.hexes.size, grid.toString()).to.have.equal(7)
    })
  })

  describe('with depth of 2', () => {
    it('should create a grid of 19 hexes', () => {
      const grid = new HexagonGrid(2, 10)

      expect(grid.hexes.size, grid.toString()).to.have.equal(19)
    })
  })
})
