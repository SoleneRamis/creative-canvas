/* ----- Exercice 2: Create a Rectangle class using vectors : must have update and draw function 
         Create a Rectangle instance with a given velocity and make it bounce on walls ----- */
let cvs = document.getElementById("canvas")
cvs.width = window.innerWidth/2
cvs.height = window.innerHeight/2
cvs.style.width = "80%"
cvs.style.height = "80%"

let ctx = cvs.getContext("2d")
let rect = []

function init () {
    initRectangle()
    frame()
}

/* --- v1 --- */
// function initRectangle () {
//     rect = new Rectangle(50, 50)
// }

// function frame() {
//     ctx.clearRect(0, 0, cvs.width, cvs.height)
//     ctx.beginPath()
//     rect.draw(ctx)
//     requestAnimationFrame(frame)
// }

 /* --- v2 --- */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function initRectangle() {
    for (let i = 0; i < 10; i++) {
        let vx = getRandomInt(10) + 2
        let vy = getRandomInt(6) + 2
        let x = getRandomInt(100) + 2
        let y = getRandomInt(100) + 2
        rect.push(new Rectangle(20, 20, vx, vy, x, y))
    }
}
function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    rect.forEach(el => {
        ctx.beginPath()
        el.draw(ctx)
    })
    requestAnimationFrame(frame)
}

init()