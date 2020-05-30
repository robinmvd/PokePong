class Game {
    
    private balls : Ball[] = []
    
    constructor() {

        for (let i = 0; i < 10; i++) {
            this.balls.push(new Ball())
        }

        this.gameLoop()
    }
    
    private gameLoop(){
        for (const ball of this.balls) {
            ball.update()

            this.checkBallBounce(ball)
        }

        requestAnimationFrame(()=>this.gameLoop())
    }

    private checkBallBounce(ball : Ball) {
        if(ball.x < 0) {
            //xspeed 'omgeklapt' moet worden (van positief naar negatief en andersom)
            ball.bounceX()
        } else if(ball.x + ball.div.clientWidth > window.innerWidth){
            ball.bounceX()
        } else if(ball.y < 0) {
            ball.bounceY()
        } else if(ball.y + ball.div.clientHeight > window.innerHeight) {
            ball.bounceY()
        }
    }
} 

window.addEventListener("load", () => new Game())