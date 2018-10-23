class Triangle {
    constructor(opts = {}) {
        this.position = vec2.create()
        this.velocity = vec2.fromValues(Math.random() * 2 - 1, Math.random() * 2 - 1)
        this.size = opts.size || 40
        this.easing = opts.easing || 0.1
        const colors = ['#FFFD82', '#FF9B71', '#E84855', '#B56B45', '#2B3A67', '#9BC53D', '#8A1C7C']
        this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    update (target) {
        
        vec2.sub(this.velocity, target, this.position) // trouver le vecteur de velocité
        vec2.scale(this.velocity, this.velocity, this.easing)
        vec2.add(this.position, this.position, this.velocity)

        const dx = target[0] - this.position[0]
        const dy = target[1] - this.position[1]

        this.rotation = Math.atan2(dy, dx) + Math.PI / 2
    }
    
    draw (ctx) {
        ctx.save()
        ctx.fillStyle = this.color
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
