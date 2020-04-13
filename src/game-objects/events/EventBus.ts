import {Hexagon} from '../../models/hexagon'
import {Events} from 'phaser'

export class EventBus extends Events.EventEmitter {
  constructor() {
    super()
  }

  emitHexHoverEvent(hex: Hexagon) {
    this.emit('HEX_HOVER', hex)
  }
  listenHexHover(cb: (evt: Hexagon) => void) {
    this.on('HEX_HOVER', (evt) => cb(evt))
  }

  emitHexHoverOutEvent() {
    this.emit('HEX_HOVER_OUT')
  }
  listenHexHoverOut(cb: () => void) {
    this.on('HEX_HOVER_OUT', () => cb())
  }
}

export const eventBus = new EventBus()
