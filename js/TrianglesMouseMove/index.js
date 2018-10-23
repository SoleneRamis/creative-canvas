let cvs = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
cvs.style.width = window.innerWidth + 'px'
cvs.style.height = window.innerHeight + 'px'
cvs.height = window.innerHeight
cvs.width = window.innerWidth
var image = document.getElementById('source');

let triangles = []

let target = vec2.create()

const NB_TRIANGLES = 20

function initTriangle () {
    for (let i = 0; i < NB_TRIANGLES; i++) {
        triangles.push(new Triangle())
    }
    // triangles = new Triangle(10, 10)
}

function frame() {
    requestAnimationFrame(frame)
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    triangles.forEach( (triangle, i) => {

        let t = null
        if (i == 0 ) {
            t = target
        } else {
            t = triangles[i - 1].position
        }
        triangle.update(t)
        triangle.draw(ctx)
    })

    // triangles.update(target)
    // triangles.draw(ctx)
}

function init() {
    initTriangle()
    frame()
}

window.addEventListener("mousemove", (event) => {
    target[0] = event.clientX
    target[1] = event.clientY
})

init()