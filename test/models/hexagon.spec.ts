import {Hexagon} from '../../src/models/hexagon'
import {expect} from 'chai'

describe('Hexagon', () => {
  it('should be created', () => {
    const hexagon = new Hexagon(0, 0, 5)

    expect(hexagon.q).to.equal(0)
    expect(hexagon.r).to.equal(0)
    expect(hexagon.size).to.equal(5)
    expect(hexagon.height).to.equal(5 * 2)
    expect(hexagon.relativeX).to.equal(0)
    expect(hexagon.relativeY).to.equal(0)
  })

  describe('with different input parameters', () => {
    const tests: Array<[Hexagon, any]> = [
      [new Hexagon(0, 0, 5), {q: 0, r: 0, size: 5, height: 10, relativeX: 0, relativeY: 0}],
      [new Hexagon(1, 0, 5), {q: 1, r: 0, size: 5, height: 10, relativeX: 8.660, relativeY: 0}],
      [new Hexagon(0, 1, 5), {q: 0, r: 1, size: 5, height: 10, relativeX: 4.330, relativeY: 7.5}],
      [new Hexagon(0, 1, 10), {q: 0, r: 1, size: 10, height: 10, relativeX: 8.660, relativeY: 15}],
      [new Hexagon(1, 1, 5), {q: 1, r: 1, size: 5, height: 10, relativeX: 12.990, relativeY: 7.5}],
    ]
    const delta = 0.001

    tests.map(test => {
      it('should be properly initialized', () => {
        const hex = test[0] as Hexagon
        const expected = test[1]
        expect(hex.r).to.equal(expected['r'])
        expect(hex.q).to.equal(expected['q'])
        expect(hex.size).to.equal(expected['size'])
        expect(hex.relativeX).to.be.closeTo(expected['relativeX'], delta)
        expect(hex.relativeY).to.be.closeTo(expected['relativeY'], delta)
      })
    })
  })
})
