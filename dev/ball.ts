class Ball {
    
    private div : HTMLElement
    private x : number = 0
    private y : number = 0
    private xSpeed : number = 0
    private ySpeed : number = 0

    
    constructor() {
        this.div = document.createElement("ball")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight

        this.xSpeed = 2
        this.ySpeed = -3
        
    }
    
    public update() : void {

        this.x += this.xSpeed
        this.y += this.ySpeed

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}