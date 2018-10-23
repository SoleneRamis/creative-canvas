class Rectangle {
    /* --- v1 --- */
    // constructor(width, height) {
    //     this.width = width
    //     this.height = height
    //     this.x = 100
    //     this.y = 100
    //     this.vx = 5
    //     this.vy = 2
    // }

    /* --- v2 --- */
    constructor(height, width, vx, vy, x, y) {
        this.height = height
        this.width = width
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.color = null
    }

    update () {
        this.x += this.vx
        this.y += this.vy

        if (this.x + this.vx + this.width> canvas.width || this.x + this.vx< 0) {
            this.vx = -this.vx
        }

        if (this.y + this.vy + this.height> canvas.height || this.y + this.vy< 0) {
            this.vy = -this.vy
        }
    }

    draw (ctx) {
        this.update()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()
    }
} 