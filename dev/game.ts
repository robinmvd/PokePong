class Game {
    
    private ball : Ball
    
    constructor() {
        this.ball = new Ball()
        this.gameLoop()
    }
    
    private gameLoop(){
        this.ball.update()

        if(this.ball.x < 0) {
            //xspeed 'omgeklapt' moet worden (van positief naar negatief en andersom)
            this.ball.bounceX()

        } else if(this.ball.x + this.ball.div.clientWidth > window.innerWidth){
            this.ball.bounceX()
        } else if(this.ball.y < 0) {
            this.ball.bounceY()
        } else if(this.ball.y + this.ball.div.clientHeight > window.innerHeight) {
            this.ball.bounceY()
        }

        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())