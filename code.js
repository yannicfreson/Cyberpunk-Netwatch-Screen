const config = { "fontSize": "16", "switchLowerBound": "10", "switchUpperBound": "20" }
let screenW = window.innerWidth
let screenH = window.innerHeight

let c;
let ctx;

window.addEventListener("load", (event) => {
  c = document.getElementById('c');
  ctx = c.getContext('2d');
  setCanvasSize()
  draw()
})

window.addEventListener('resize', (event) => {
  setCanvasSize()
  draw()
})

function setCanvasSize() {
  screenW = window.innerWidth
  screenH = window.innerHeight
  c.width = screenW
  c.height = screenH
}

function draw() {
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, screenW, screenH)

  ctx.fillStyle = '#ffffff'
  ctx.font = `${config.fontSize}px Arial`
  ctx.fillText("uwu", 0, 16)
}

function Symbol(x, y, opacity) {
  this.x = x
  this.y = y
  this.opacity = opacity

  this.value;
  this.switchInterval = Math.floor((Math.random() * config.switchUpperBound) + config.switchLowerBound)
}
