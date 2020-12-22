//  __   _ _______ _______ _  _  _ _______ _______ _______ _     _  //
//  | \  | |______    |    |  |  | |_____|    |    |       |_____|  //
//  |  \_| |______    |    |__|__| |     |    |    |_____  |     |  //
//                                                                  //

let config = {
  "fps":"30", // recommended 30 fps
  "fontSize": "20",
  "letters": "01",  // the different letters to be rendered
  "spacing": 20,  // how many columns between two black ones
  "randomness":5,  // bigger number => less likely to spawn a blue letter
  "opacity": "0.05",  // lower number => disappear faster. recommended value between 0.1 and 0.001
  "highlightedColor": "#00aaff",
  "highlightedColor2": "#00ccff",
  "density": "0.5"  // bigger number => lower density
}

let screenW = window.innerWidth
let screenH = window.innerHeight

let nrOfColumns = screenW / config.fontSize
let nrOfRows = screenH / config.fontSize

let blurLevel = 0

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
  c.style.webkitFilter = `blur(${blurLevel}px)`;
}

function draw() {
  ctx.fillStyle = `rgba(0,0,0,${config.opacity})`
  ctx.fillRect(0, 0, screenW, screenH)

  ctx.fillStyle = '#ffffff'
  ctx.font = `${config.fontSize}px Arial`

  for (let i = 0; i < nrOfColumns/config.density; i++) {
    let x = Math.floor((Math.random() * nrOfColumns) + 0)
    let y = Math.floor((Math.random() * nrOfRows) + 0)

    thisOne = new Symbol(x, y)
    ctx.fillStyle = '#000000'
    ctx.fillRect(thisOne.x, thisOne.y - config.fontSize, config.fontSize, config.fontSize)
    let highlighted = Math.floor(Math.random() * config.randomness)
    if (highlighted === 0) {
      ctx.fillStyle = config.highlightedColor
    } else if (highlighted === 1) {
      ctx.fillStyle = config.highlightedColor2
    } else {
      ctx.fillStyle = "#ffffff"
    }
    
    ctx.fillText(thisOne.value, thisOne.x, thisOne.y)
  }

  let spaceX = ((config.fontSize * config.spacing) - config.fontSize) - (config.fontSize/4)
  for (let i = 0; spaceX < screenW; i++) {
    ctx.fillStyle = '#000000'
    ctx.fillRect(spaceX, 0, config.fontSize, screenH)
    spaceX += config.fontSize * config.spacing
  }
}

function Symbol(x, y) {
  this.x = (screenW / nrOfColumns) * x
  this.y = (screenH / nrOfRows) * y

  this.value = config.letters[Math.floor(Math.random() * config.letters.length)]
}

var intervalID = setInterval(function () {
  draw()
}, 1000 / config.fps);

console.log("Config:");
console.log(config);
console.log("Edit to your heart's content ;p");
