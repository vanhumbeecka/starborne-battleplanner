import Scene = Phaser.Scene

export const createControls = (scene: Scene): Phaser.Cameras.Controls.FixedKeyControl => {
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  const fraction = innerWidth / innerHeight
  const width = 4000
  const height = width * fraction

  scene.cameras.main.setBounds(0, 0, width, height)

  const cursors = scene.input.keyboard.createCursorKeys()

  const controlConfig: Phaser.Types.Cameras.Controls.FixedKeyControlConfig = {
    camera: scene.cameras.main,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    zoomIn: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
    zoomOut: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
  }

  return new Phaser.Cameras.Controls.FixedKeyControl(controlConfig)
}
