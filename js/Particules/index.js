
let cvs = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
cvs.height = window.innerHeight
cvs.width = window.innerWidth

let tabParticules = []

const MAX_DIST = 300
const NBR_PARTICULES = 20


for (let i = 0; i < NBR_PARTICULES; i++) {
    let opts = {
        position: {
            x: randomIntFromInterval(0, cvs.width),
            y: randomIntFromInterval(0, cvs.height)
        },
        velocity: {
            x: (Math.random() * 4) - 2,
            y: (Math.random() * 4) - 2
        },
        size: 5,
        ctx: ctx
    }
    tabParticules.push(new Particule(opts))
}

function initDraw () {
    tabParticules.forEach(el => {
        ctx.beginPath()
        el.draw(ctx)
    })

    for (let i = 0; i < tabParticules.length; i++) {
        tabParticules[i].update()
        tabParticules[i].draw()
        if (tabParticules[i].position[0] > cvs.width - tabParticules[i].size
            || tabParticules[i].position[0] < 0) {
            tabParticules[i].velocity[0] *= -1
        }
        if (tabParticules[i].position[1] > cvs.height - tabParticules[i].size
            || tabParticules[i].position[1] < 0) {
            tabParticules[i].velocity[1] *= -1
        }

        for (let j = 0; j < tabParticules.length; j++) {
            let a = tabParticules[i].position[0] - tabParticules[j].position[0]
            let b = tabParticules[i].position[1] - tabParticules[j].position[1]
            let distance = Math.sqrt((a * a) + (b * b))
            if (distance < MAX_DIST) {

                let opacity = 1 - (distance / MAX_DIST)

                ctx.beginPath()
                ctx.globalAlpha = opacity
                ctx.strokeStyle = "white"
                ctx.shadowOffsetY = 1;
                ctx.shadowColor = "#c9f3ff"

                ctx.moveTo(tabParticules[i].position[0], tabParticules[i].position[1])
                ctx.lineTo(tabParticules[j].position[0], tabParticules[j].position[1])
                ctx.stroke()
                ctx.closePath()
            }
        }
    }
}

function frame () {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    initDraw()

}

function init() {
    requestAnimationFrame(init)
    frame()
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

init()
