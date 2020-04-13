export class Coordinate {

  static fromTuple(tuple: [number, number]): Coordinate {
    return new Coordinate(tuple[0], tuple[1])
  }

  constructor(public readonly q, public readonly r) {
  }

  equals(other: Coordinate): boolean {
    return this.q === other.q && this.r === other.r
  }

  get asTuple(): [number, number] {
    return [this.q, this.r]
  }

  toString(): string {
    return `(${this.q},${this.r})`
  }
}
