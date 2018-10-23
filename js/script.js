/* ----- Exercice 1: Draw multiple shapes, each having a random color / position / scale / rotation ----- */

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function animate () {
    requestAnimationFrame(animate)
    ctx.save()
    ctx.translate(getRandomValue(canvas.width), getRandomValue(canvas.height))
    ctx.rotate(Math.PI / getRandomValue(8))
    ctx.fillStyle = getRandomColor()
    ctx.scale(Math.random(), Math.random())
    ctx.globalAlpha = Math.random()
    ctx.fillRect(canvas.width, canvas.height, 100, 100)
    ctx.restore()
}

function getRandomValue (max) {
    return Math.floor(Math.random * Math.floor(max))
}

function getRandomColor () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

animate()
