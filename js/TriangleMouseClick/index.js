let cvs = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
cvs.style.width = window.innerWidth + 'px'
cvs.style.height = window.innerHeight + 'px'
cvs.height = window.innerHeight
cvs.width = window.innerWidth
var image = document.getElementById('source');

let triangles = []

let target = vec2.create()

const NB_TRIANGLES = 1

var now = Date.now()
var lastTime = now
var deltaTime = 16
var expectedFPS = 1000 / 60 // 60 fps

function initTriangle() {
    triangles = new Triangle(10, 10)
}

function frame() {
    requestAnimationFrame(frame)
    now = Date.now()
    deltaTime = (now - lastTime) 
    lastTime = now
// console.log(time, duration)
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    triangles.update(deltaTime)
    triangles.draw(ctx)
}

function init() {
    initTriangle()
    frame()
}

window.addEventListener("click", (event) => {
    target[0] = event.clientX
    target[1] = event.clientY
    triangles.initClick(target)
})

init()