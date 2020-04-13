import {Hexagon} from './hexagon'
import {TupleMap} from '../utils/tuple-map'
import {getGameWidth} from '../helpers'

export class HexagonGrid {

  public readonly hexes: TupleMap<Hexagon> = new TupleMap<Hexagon>()
  public readonly depth: number

  static fromGameWidth(depth: number, gameWidth: number) {
    const d = Math.abs(depth)
    // gameWidth = (depth * 2 + 1) * hexagonWidth
    const hexagonWidth = gameWidth / ((d * 2) + 1)
    const size = hexagonWidth / (Math.sqrt(3) / 2) / 2

    return new HexagonGrid(depth, size)
  }

  static fromGameHeight(depth: number, gameHeight: number) {
    const d = Math.abs(depth)
    // gameWidth = (depth * 2 + 1) * hexagonWidth
    const hexagonHeight = gameHeight / ((d * 2) + 1) * (4 / 3)
    const size = hexagonHeight / 2

    return new HexagonGrid(depth, size)
  }

  constructor(depth: number, public readonly size: number) {
    this.depth = Math.abs(depth)
    const d = this.depth
    for (let q = -d; q <= d; q++) {
      for (let r = -d; r <= d; r++) {
        if (Math.abs(q + r) <= d) {
          this.hexes.set([q, r], new Hexagon(q, r, size))
        }
      }
    }
  }

  get(q: number, r: number): Hexagon | undefined {
    return this.hexes.get([q, r])
  }

  allToList(): Hexagon[] {
    const list: Hexagon[] = []
    this.hexes.forEach((h: Hexagon) => {
      list.push(h)
    })
    return list
  }

  outerHexes(): Hexagon[] {
    return [
      this.get(0, this.depth),
      this.get(0, -this.depth),
      this.get(-this.depth, 0),
      this.get(this.depth, 0),
      this.get(this.depth, -this.depth),
      this.get(-this.depth, this.depth)
    ]
  }

  public toString(): string {
    let str = ''
    this.hexes.forEach(h => str += `(${h.q}, ${h.r})\n`)
    return str
  }
}
