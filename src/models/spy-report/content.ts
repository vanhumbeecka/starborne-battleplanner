export interface Building {
  level: string
  name: string
}

export interface Resources {
  isUnknown?: boolean
  isNone: boolean
  metal: number
  gas: number
  crystal: number
}

export interface Fleet {
  type: string
  count: number
}
