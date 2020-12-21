const config = {
  "fontSize": "20",
  "switchLowerBound": "10",
  "switchUpperBound": "20",
  "letters": "01"
}

let screenW = window.innerWidth
let screenH = window.innerHeight

let nrOfColumns = screenW / config.fontSize
let nrOfRows = screenH / config.fontSize

let c;
let ctx;

window.addEventListener("load", (event) => {
  c = document.getElementById('c');
  ctx = c.getContext('2d');
  setCanvasSize()
  ctx.fillStyle = 'rgba(0,0,0,1)'
  ctx.fillRect(0, 0, screenW, screenH)
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
  nrOfColumns = screenW / config.fontSize
  nrOfRows = screenH / config.fontSize
  ctx.fillStyle = 'rgba(0,0,0,1)'
  ctx.fillRect(0, 0, screenW, screenH)
}

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.01)'
  ctx.fillRect(0, 0, screenW, screenH)

  ctx.fillStyle = '#ffffff'
  ctx.font = `${config.fontSize}px Arial`

  for (let i = 0; i < nrOfColumns/10; i++) {
    let x = Math.floor((Math.random() * nrOfColumns) + 0)
    let y = Math.floor((Math.random() * nrOfRows) + 0)

    thisOne = new Symbol(x, y)
    ctx.fillStyle = '#000000'
    ctx.fillRect(thisOne.x/*  - config.fontSize */, thisOne.y - config.fontSize, config.fontSize, config.fontSize)
    let highlighted = Math.floor(Math.random() * 15)
    if (highlighted == 1) {
      ctx.fillStyle = '#00aaff'
    } else {
      ctx.fillStyle = '#ffffff'
    }
    
    ctx.fillText(thisOne.value, thisOne.x, thisOne.y)
  }
}

function Symbol(x, y) {
  this.x = (screenW / nrOfColumns) * x
  this.y = (screenH / nrOfRows) * y

  this.value = config.letters[Math.floor(Math.random() * config.letters.length)]

  this.switchInterval = Math.floor((Math.random() * config.switchUpperBound) + config.switchLowerBound)
}

var x = 0;
var intervalID = setInterval(function () {
  draw()
}, 25);