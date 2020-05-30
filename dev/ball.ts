class Ball {
    
    // alle private variablen = 'Fields'
    private _div: HTMLElement
    
    private _x : number = 0
    private _y : number = 0

    private xSpeed : number = 0
    private ySpeed : number = 0

    // Properties
    public get x(): number          { return this._x }
    public get y(): number          { return this._y }
    public get div(): HTMLElement   { return this._div}

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    
    constructor() {
        this._div = document.createElement("ball")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this._div)

        this._x = Math.random() * window.innerWidth
        this._y = Math.random() * window.innerHeight

        this.xSpeed = -5
        this.ySpeed = -3
        
    }
    
    public update() : void {

        this._x += this.xSpeed
        this._y += this.ySpeed

        this._div.style.transform = `translate(${this._x}px, ${this._y}px)`
    }

    public bounceX() {
        this.xSpeed *= -1
        this.xSpeed *= 1.5 //snelheid vergroten met 150%
    }

    public bounceY() {
        this.ySpeed *= -1
    }
}