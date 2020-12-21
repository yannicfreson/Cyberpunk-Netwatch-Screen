const config = { "fontSize": "16" }
let screenW = window.innerWidth
let screenH = window.innerHeight

window.addEventListener("load", (event) => {
  let c = document.getElementById('c');
  let ctx = c.getContext('2d');
  setCanvasSize(c)
  draw(ctx)
})

function setCanvasSize() {
  c.width = screenW
  c.height = screenH
}

function draw(ctx) {
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, screenW, screenH)

  ctx.fillStyle = '#ffffff'
  ctx.font = `${config.fontSize}px Arial`
  ctx.fillText("uwu", 0, 16)
}
