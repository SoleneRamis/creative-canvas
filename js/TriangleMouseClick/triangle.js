class Triangle {
    constructor(opts = {}) {
        this.position = vec2.create()
        this.velocity = vec2.fromValues(Math.random() * 2 - 1, Math.random() * 2 - 1)
        this.size = opts.size || 40
        this.timeOnClick = 0
        this.positionOnClick = vec2.fromValues(0,0)
        this.target = vec2.fromValues(0, 0)
        
        // tween stuff
        this.isTweening = false
        this.time = 0
        this.duration = 2000
    }

    easeOutBack(t, b, c, d, s) { 
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b; 
    }
    initClick(target){
        this.positionOnClick[0] = this.position[0]
        this.positionOnClick[1] = this.position[1]
        this.target[0] = target[0] - this.position[0]
        this.target[1] = target[1] - this.position[1]
        this.isTweening = true
        this.time = 0
    }
    update(dt) {

        this.time += dt

        if( this.time < this.duration) {
            this.position = vec2.fromValues(
                // this.easeOutBack(time, 0, target[0] - this.positionOnClick[0] , duration),
                // this.easeOutBack(time, 0, target[1] - this.positionOnClick[1] , duration)
                this.easeOutBack(this.time, this.positionOnClick[0], this.target[0], this.duration),
                this.easeOutBack(this.time, this.positionOnClick[1], this.target[1], this.duration)
            )  
        } else{
            this.isTweening = false
        }
        // vec2.add(this.position, this.position, this.velocity)

        const dx = target[0] - this.position[0]
        const dy = target[1] - this.position[1]

        this.rotation = Math.atan2(dy, dx) + Math.PI / 2
    }

    draw(ctx) {
        ctx.save()
        ctx.fillStyle = '#E84855'
        ctx.translate(this.position[0], this.position[1])
        ctx.rotate(this.rotation)
        ctx.beginPath()
        ctx.moveTo(-this.size / 2, this.size / 2);
        ctx.lineTo(0, -this.size / 2);
        ctx.lineTo(this.size / 2, this.size / 2);
        ctx.lineTo(-this.size / 2, this.size / 2);
        ctx.fill()
        ctx.closePath();
        ctx.restore();
    }
} 
