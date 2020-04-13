/**
 * https://stackoverflow.com/questions/43592760/typescript-javascript-using-tuple-as-key-of-map
 */
export class TupleMap<T> {
  private map = new Map<string, T>()

  set(key: [number, number], value: T): this {
    this.map.set(JSON.stringify(key), value)
    return this
  }

  get(key: [number, number]): T | undefined {
    return this.map.get(JSON.stringify(key))
  }

  clear() {
    this.map.clear()
  }

  delete(key: [number, number]): boolean {
    return this.map.delete(JSON.stringify(key))
  }

  has(key: [number, number]): boolean {
    return this.map.has(JSON.stringify(key))
  }

  get size() {
    return this.map.size
  }

  get values(): IterableIterator<T> {
    return this.map.values()
  }

  forEach(callbackfn: (value: T, key: [number, number], map: Map<[number, number], T>) => void, thisArg?: any): void {
    this.map.forEach((value, key) => {
      callbackfn.call(thisArg, value, JSON.parse(key), this)
    })
  }
}
