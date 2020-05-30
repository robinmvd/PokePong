class Game {
    
    private balls : Ball[] = []
    private paddle : Paddle
    
    constructor() {

        for (let i = 0; i < 10; i++) {
            this.balls.push(new Ball())
        }

        this.paddle = new Paddle()
        this.gameLoop()
    }
    
    private gameLoop(){
        for (const ball of this.balls) {
            ball.update()

            this.checkBallBounce(ball)
            if (this.checkCollision(ball.getRectangle(), this.paddle.getRectangle())) {
                console.log("BOTSING MET PADDLE")
                ball.bounceX()
            }
        }

        this.paddle.update()

        requestAnimationFrame(()=>this.gameLoop())
    }

    private checkBallBounce(ball : Ball) {
        if(ball.x + ball.div.clientWidth > window.innerWidth){
            ball.bounceX()
        } else if(ball.y < 0) {
            ball.bounceY()
        } else if(ball.y + ball.div.clientHeight > window.innerHeight) {
            ball.bounceY()
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

window.addEventListener("load", () => new Game())