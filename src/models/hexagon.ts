import {Pixel} from './pixel'

export class Hexagon {

  public readonly centerPixel: Pixel
  public readonly height: number
  public readonly width: number
  public readonly shiftVector: Pixel

  public static fromHeight(q: number, r: number, hexagonHeight: number): Hexagon {
    const size = hexagonHeight / 2
    return new Hexagon(q, r, size)
  }
  public static fromWidth(q: number, r: number, hexagonWidth: number): Hexagon {
    const size = hexagonWidth / Math.sqrt(3)
    return new Hexagon(q, r, size)
  }

  constructor(public readonly q: number,
              public readonly r: number,
              public readonly size: number) {
    this.centerPixel = this.pointy_hex_to_pixel()
    this.height = 2 * size
    this.width = size * Math.sqrt(3)
  }

  get relativeX(): number {
    return this.centerPixel.x
  }

  get relativeY(): number {
    return this.centerPixel.y
  }

  /**
   * https://www.redblobgames.com/grids/hexagons/#hex-to-pixel
   * @param hex
   */
  private pointy_hex_to_pixel(): Pixel {
    const x = this.size * (Math.sqrt(3) * this.q + Math.sqrt(3) / 2 * this.r)
    const y = this.size * (3. / 2 * this.r)
    return new Pixel(x, y)
  }
}
