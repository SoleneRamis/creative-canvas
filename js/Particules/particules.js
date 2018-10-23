class Particule {
    constructor(opts) {
        this.ctx = opts.ctx
        
        this.position = vec2.fromValues(30, 50)
        this.velocity = vec2.fromValues(30, 50)
        
        this.position[0] = opts.position.x || 0
        this.position[1] = opts.position.y || 0
        
        this.velocity[0] = opts.velocity.x || 0
        this.velocity[1] = opts.velocity.y || 0

        this.size = opts.size
    }

    update() {
        vec2.add(this.position, this.position, this.velocity)
    }

    draw() {
        var ctx = this.ctx
        ctx.save()
        ctx.translate(this.position[0], this.position[1])
        ctx.beginPath()

        ctx.fillStyle = "white"
        ctx.globalAlpha = 0.5

        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 10
        ctx.shadowColor = "#c9f3ff"

        ctx.arc(0, 0, this.size, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
        ctx.restore()

        this.update()
    }
}